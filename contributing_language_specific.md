---
layout: base
title:  'Guidelines for Language-Specific Documentation'
udver:  '2'
---

# Guidelines for language-specific documentation

See also <a href="contributing.html">How to contribute</a>, especially the section
<a href="contributing.html#style-guidelines">Style guidelines</a>.

There should be a set of guidelines and documentation for every _language._
All treebanks in that language should follow the same guidelines.
Any treebank-specific documentation (such as the information whether morphological features have been annotated manually or predicted
by a statistical model) should go to the README file in the treebank repository.
(Note that portions of the README files are automatically copied to the UD website, as described in the
[release checklist](release_checklist.html#the-readme-file).)

All languages should have a one-page summary of language-specific features and annotation solutions to certain phenomena that cannot
be specified universally. There is a template for the page (see below).
Some languages also have a full mirror of the universal documentation of all tags, features and relations.
Such a mirror is no longer expected and templates for these pages are not generated.
Nevertheless, it is possible to have them; contributors wishing to write the full mirror must create the pages manually (see remarks below).

## The Language Page

Also called the language hub or index page, this is the minimal documentation that we want to be available for every language.
It should describe important aspects of every level of annotation, such as (these are just a few example questions, see the template for more):

* tokenization / word segmentation (are there multi-word tokens? are there exceptional cases where “words with spaces” are permitted?)
* morphology (which features occur with which parts of speech? what values can the features have in this language?)
* syntax (what criteria distinguish core from oblique arguments? what are the rules for copula?)

The docs repository has a folder called [_template](https://github.com/UniversalDependencies/docs/tree/pages-source/_template).
It contains a template of the language index page (`template-index.md`) and two example index pages describing Czech
(`template-index-cs-example.md`) and Swedish (`template-index-sv-example.md`), respectively.
When a new language is added to UD, its folder in the docs repository is created (the name of the folder is an underscore followed
by the language code, e.g., `_cs` for Czech) and the template index is copied to that folder.
The language contributors should fill out the description of the language, delete the instruction comments,
and when they are done, rename the file from `template-index.md` to just `index.md`.
Finally, they should contact the release team and ask for regeneration of the UD title page so that the link to the documentation
appears there (at present this does not happen automatically).

If desirable, the contributors may create additional files in their language folder and provide links to those files from the index page.
For example, if separate pages describing individual tags / features / relations are available, links to them should be provided
from the beginning of morphology / syntax sections, respectively.
(Such pages could provide more native examples in the language. They are not necessary though.
If there is any peculiarity of the language pertaining to a particular label (tag / feature / relation),
it should preferably be mentioned on the universal page of that label, and possibly also in the construction-oriented universal documentation.
However, if the language uses a language-specific feature or relation subtype, it must be documented.)

## Old-Style Documentation

If you want a full mirror of the universal documentation of tags, features and relations, you have to create the .md files in your language
folder. Look at other languages (e.g., Czech), follow the same folder structure, copy the files from the other language, edit them and
replace the contents by your language.

If you already have a (full or partial) mirror with UD v1 documentation, make sure to check all changes that need to be done for v2
(`nmod` → `obl`, `CONJ` → `CCONJ`, renaming files, fixing links etc.), then add this line to the MarkDown preamble of each file:

<pre>
udver: '2'
</pre>

This will cause the server to show the green v2 banner instead of the yellow v1 on the top of the page.

<strong>IMPORTANT:</strong>
The old documentation also contained a copy of the label overview table for every language.
It appeared on pages called `pos-index`, `feat-index` and `dep-index`; however, the table itself
was in HTML rather than MarkDown and it was imported from a file that lay outside the language folder.
These HTML files have been removed for all languages where the corresponding part of v1 documentation
did not exist. If you now copy a `pos-index.md` file that references the table, without properly
creating the table, it will not work! Worse: your error will kill Jekyll, the fragile website-building software.
If the pages are not regenerated within 15 minutes after you did some dangerous changes,
try to revert the changes. Otherwise, the infrastructure will no longer work for anyone else!
If you want to experiment with includes and other Jekyll code, please install Jekyll locally
and test everything on your machine before you push it to Github!

Good news: You don't actually need the index tables.
You should provide links to label-specific pages from your language index page.
This can be just a simple list of links, not a sophisticated table
(if people need a more organized view of the labels,
they should read the universal documentation).
