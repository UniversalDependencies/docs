#!/usr/bin/env perl
# Cleans up the docs.
# Copyright © 2017 Dan Zeman <zeman@ufal.mff.cuni.cz>
# License: GNU GPL

use utf8;
use open ':utf8';
binmode(STDIN, ':utf8');
binmode(STDOUT, ':utf8');
binmode(STDERR, ':utf8');

# Assuming we are in the root folder of the docs repository.
# _includes/$lcode-dep|feat|pos|status-table.html should exist only if
# - it is not "status". Remove them all.
# - the corresponding _$lcode/dep|feat|pos-index.md exists.
# - or $lcode is "no". I have not been able to rename the _no-overview collection to _no, but the index pages exist.
# - or $lcode is "u". The universal tables should be preserved although the folder structure is currently different.
opendir(DIR, '_includes') or die("Cannot read _includes: $!");
my @files = sort(grep {m/-table\.html$/} (readdir(DIR)));
closedir(DIR);
local $n = 0;
foreach my $file (@files)
{
    my $path = "_includes/$file";
    # Save Norwegian and Universal.
    next if($file =~ m/^(no|u)-/);
    # Remove all status tables.
    remove($path) if($file =~ m/-status-table\.html$/);
    # For pos, feat and dep, check whether the page exists that may want to include the table.
    if($file =~ m/^(.+?)-(pos|feat|dep)-table\.html$/)
    {
        my $lcode = $1;
        my $label = $2;
        if(!-f "_$lcode/$label-index.md")
        {
            remove($path);
        }
    }
}
print("Total $n files scheduled for removal.\n");



#------------------------------------------------------------------------------
# Removes a file.
#------------------------------------------------------------------------------
sub remove
{
    my $path = shift;
    # Debugging: only write the file name.
    print("Removing: $path\n");
    system("git rm $path");
    $n++;
}
