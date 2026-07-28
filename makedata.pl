#!/usr/bin/env perl
# Replacement for makedata.sh in UD docs.
# Copyright © 2026 Dan Zeman <zeman@ufal.mff.cuni.cz>
# License: GNU GPL

use strict;
use warnings;
use utf8;
use open ':utf8';
binmode(STDIN, ':utf8');
binmode(STDOUT, ':utf8');
binmode(STDERR, ':utf8');
use File::Path qw(make_path);
use File::Find;
use File::Basename;
use File::Copy qw(move);

my $DATA_DIRECTORY      = "_data";
my $POS_DATA_FILE       = "$DATA_DIRECTORY/postags.yaml";
my $FEATURE_DATA_FILE   = "$DATA_DIRECTORY/features.yaml";
my $RELATION_DATA_FILE  = "$DATA_DIRECTORY/relations.yaml";

# Remove old output files.
unlink $POS_DATA_FILE;
unlink $FEATURE_DATA_FILE;
unlink $RELATION_DATA_FILE;

make_path($DATA_DIRECTORY);

for my $s (qw(pos feat dep)) {

    # Find collections.
    my @collections;

    if (-d "_u-$s") {
        push @collections, "u-$s";
    }

    opendir(my $dh, ".") or die "Cannot open current directory: $!";
    while (my $dir = readdir($dh)) {
        next unless $dir =~ /^_/;
        next unless -d $dir;
        my $sub = "$dir/$s";
        next unless -d $sub;
        my $name = substr($sub, 1);      # remove leading "_"
        next if $name =~ m{^(template|ext)-(pos|feat|dep)$};
        push @collections, $name;
    }
    closedir($dh);

    @collections = sort @collections;
    my @directories = map { "_$_" } @collections;

    print "coll '@collections'\n";
    print "dir  '@directories'\n";

    # Collect unique entry names.
    my %entries;

    for my $dir (@directories) {
        next unless -d $dir;

        find(
            sub {
                return unless /\.md$/;

                my $name = basename($_, ".md");
                $entries{$name} = 1;
            },
            $dir
        );
    }

    my @entries = sort keys %entries;

    my $out =
          $s eq "pos"  ? $POS_DATA_FILE
        : $s eq "feat" ? $FEATURE_DATA_FILE
        : $s eq "dep"  ? $RELATION_DATA_FILE
        : die "internal error\n";

    open(my $OUT, ">", $out) or die "Cannot write $out: $!";

    # Generate YAML.
    for my $r (@entries) {

        warn "entry $r\n";
        if ($r =~ /[\[\]]/) {
            warn "\tWARNING: File name contains square brackets. There should be a hyphen instead.";
        }

        my $e = $r;
        $e =~ s/^_//;
        $e =~ s/_$//;
        $e =~ s/^([a-z]+)-/$1:/;
        $e =~ s/^([A-Z][A-Za-z]+)-([a-z0-9]+)/$1\[$2\]/;

        print $OUT "- label: '$e'\n";
        print $OUT "  filename: '$r'\n";
        print $OUT "  languages:\n";

        for my $l (@collections) {

            my $file = "_$l/$r.md";
            next unless -s $file;
            my $p = $l;
            $p =~ s/-(pos|feat|dep)$/\/$1/;

            print $OUT "  - label: '$p'\n";

            # Touch the file. Otherwise its HTML will not be re-rendered because only the YAML data file will change.
            open(my $IN, "<", $file) or die "Cannot read $file: $!";
            my @lines = grep { !/<!-- Interlanguage links updated/ } <$IN>;
            close($IN);
            my $tmp = "$file.tmp";
            open(my $TMP, ">", $tmp) or die "Cannot write $tmp: $!";
            print $TMP @lines;
            my $timestamp = `date`;
            $timestamp =~ s/\r?\n$//;
            print $TMP "<!-- Interlanguage links updated $timestamp -->\n";
            close($TMP);
            move($tmp, $file) or die "Cannot replace $file: $!";
        }
    }

    close($OUT);

    warn sprintf(
        "Found %d entries in %d collections\n",
        scalar(@entries),
        scalar(@collections)
    );
}
