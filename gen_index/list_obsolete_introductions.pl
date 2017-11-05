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
print(join(', ', @introductions), "\n");
my $n = scalar(@introductions);
print("Total $n introductions.\n");
