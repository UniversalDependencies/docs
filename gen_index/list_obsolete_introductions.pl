#!/usr/bin/env perl
# Creates an index page with links to language-specific introductions.
# Copyright © 2017 Dan Zeman <zeman@ufal.mff.cuni.cz>
# License: GNU GPL

use utf8;
use open ':utf8';
binmode(STDIN, ':utf8');
binmode(STDOUT, ':utf8');
binmode(STDERR, ':utf8');

# Assuming we are in the root folder of the docs repository.
my @introductions = glob("./_*/introduction.md");
my $n = scalar(@introductions);
print <<EOF
---
layout: base
title:  'Obsolete Introductions'
udver: '2'
---

# Obsolete Introductions

This site currently contains $n language-specific introduction pages. They are
probably obsolete and will be removed because they probably contain descriptions
of individual treebanks (rather than languages). In the future, such information
will be copied automatically from the README files in the treebank repositories,
and it will be displayed per treebank, not per language. If you currently have
more information here than in your README file, please copy it to the README
file.

EOF
;
foreach my $i (@introductions)
{
    $i =~ s:^(\./)?_::;
    $i =~ s/\.md$/.html/;
    $i =~ s:/:/overview/:;
    $i =~ s:-overview/overview:/overview:;
    my $text = $i;
    if($text =~ m:^(.+?)/:)
    {
        $text = $1;
    }
    print("* [$text]($i)\n");
}
