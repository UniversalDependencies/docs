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

All languages should have a one-page summary of annotation solutions to language-specific phenomena
that cannot be specified universally. There is a template for the page (see below).
If a language uses language-specific morphological features or dependency relation subtypes,
these must be documented on separate pages, following a prescribed format (see below).
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
The resulting pages can be viewed [here (Czech)](http://universaldependencies.org/cs/index.html)
and [here (Swedish)](http://universaldependencies.org/sv/index.html).
When a new language is added to UD, its folder in the docs repository is created (the name of the folder is an underscore followed
by the language code, e.g., `_cs` for Czech) and the template index is copied to that folder.
The language contributors should fill out the description of the language, delete the instruction comments,
and when they are done, rename the file from `template-index.md` to just `index.md`.
Finally, they should contact the release team and ask for regeneration of the UD title page so that the link to the documentation
appears there (at present this does not happen automatically).

If desirable, the contributors may create additional files in their language folder and provide links to those files from the index page.
For example, if separate pages describing individual tags / features / relations are available, links to them should be provided
from the beginning of morphology / syntax sections, respectively.
Such pages are required for features and relations that are language-specific and their documentation is not available
in the universal guidelines (see below for details). For other relations, features and UPOS tags, separate pages are
not required, nevertheless it is possible to create them and provide more native examples in the language.
Note however that if there is any peculiarity of the language pertaining to a universally defined label (tag / feature / relation),
it should be preferably mentioned on the universal page of that label, and possibly also in the construction-oriented universal documentation.

**Please do not create empty documentation pages!**
If you do not have the time now to provide some meaningful description, postpone the creation
of the file until you have the time to fill it with contents. It is annoying for the user
to click on a link only to find out that the information is not there. Even if you do not create
any link to the empty page, the links may be generated automatically once the file exists in the
repository.

## Language-Specific Features

All feature values used in UD treebanks must be documented. If they are defined in the current
version of the UD guidelines, they are already documented and no action is needed.
If you decide to provide their language-specific documentation anyway, note that the global
documentation will be ignored by the system, and if there are errors in your page, the given
universal feature will be undocumented and unavailable in your language.
Some other
features are not officially part of the UD guidelines (so technically they are in the
language-specific domain), yet they have been used in multiple treebanks and their documentation
is accessible globally. No action is needed for them either (if you are unsure whether
a particular feature is in this category, try using it; if the validator complains, you will
know you have to provide documentation). Any other language-specific feature
must have a documentation page in the folder of the given language (regardless of whether this
feature is or is not documented in another language). Similarly, if a language needs an extra
value of an otherwise universal feature, there must be a language-specific documentation page
of that feature.

Note that in some cases you should change the feature in your data rather than documenting it.
When defining new feature values, make sure that you are **not redefining something that
already has a different label in UD.**

A language-specific feature page must be readable by both humans and machines, hence it must
follow a prescribed format. UD validation software will check the page and if it cannot parse
it, it will not consider the feature valid to be used in UD treebanks.

The page is a MarkDown file and uses the extension `.md`. It must be in a `feat` subfolder of the
language-specific folder in the `docs` repository. The name of the file normally follows the
name of the feature, including camel-casing. For example, the feature for particle types in
Irish is called `PartType` and its documentation must be in the file
[_ga/feat/PartType.md](https://github.com/UniversalDependencies/docs/blob/pages-source/_ga/feat/PartType.md).
Layered features have square brackets as part of their name but not as part of the file name.
Instead of the layer label in brackets, a simple hyphen separates the layer label from the
main feature name. Thus the feature for the possessor's gender is named `Gender[psor]` but
the corresponding file is `Gender-psor.md`, as
[in Czech](https://github.com/UniversalDependencies/docs/blob/pages-source/_cs/feat/Gender-psor.md).

To get started, you may want to copy an existing page from another language and edit it.
Each MarkDown file has a header which starts and ends with three dashes. Here is an example;
edit title and shortdef, keep layout and udver intact:

<pre>
---
layout: feature
title: 'PartType'
shortdef: 'particle type'
udver: '2'
---
</pre>

In the body of the page, level 3 headings (they start with three `#` characters) are reserved
for the individual values of the feature. Here is the required format of the heading for value
`Inf`:

<pre>
### &lt;a name="Inf"&gt;`Inf`&lt;/a&gt;: infinitive
</pre>

Make sure you have an exact copy of the heading. Then change the two instances of `Inf` to
the actual value of your feature, and put a word or phrase expansion of the value after the
colon. In the following lines, describe the value, what it means and how it is used. Do not
forget to add examples – a level 4 heading saying “Examples”, then a bullet list (with an
asterisk as the bullet) with individual examples, highlighting the featured word with the
&lt;b&gt; tag, and followed by an English translation.

<pre>
#### Examples

* _&lt;b&gt;a&lt;/b&gt; cheannach_ “to buy”
</pre>

## Language-Specific Subtypes of Dependency Relations

All relations used in UD treebanks must be documented. If they are defined in the current
version of the UD guidelines, they are already documented and no action is needed.
If you decide to provide their language-specific documentation anyway, note that the global
documentation will be ignored by the system, and if there are errors in your page, the given
universal relation will be undocumented and unavailable in your language.
Subtypes are
optional and technically in the language specific domain, although some subtypes are fairly
widely attested and some are even mentioned in the universal part of the guidelines. If the
documentation of a subtype is accessible globally, no action is needed either. Any other
language-specific relation subtype must have a documentation page in the folder of the given
language (regardless of whether this subtype is or is not documented in another language).
In addition, all relation types must be
[registered with the on-line validator](https://quest.ms.mff.cuni.cz/udvalidator/cgi-bin/unidep/langspec/specify_deprel.pl)
before they can be used in a language (go to the registration page, select your language,
click on the relation type and make sure the check box is checked to permit the relation
in the language).
If you are unsure whether a particular subtype is globally documented, try registering it;
if the registration page does not list it as one of the types that “can be permitted”,
you will know you have to provide documentation.

Note that in some cases you should change the relation in your data rather than documenting it.
When defining new subtypes, make sure that you are **not redefining something that
already has a different label in UD (even in other languages).**

A language-specific relation page must be readable by both humans and machines, hence it must
follow a prescribed format. UD validation software will check the page and if it cannot parse
it, it will not consider the relation valid to be used in UD treebanks.

The page is a MarkDown file and uses the extension `.md`. It must be in a `dep` subfolder of the
language-specific folder in the `docs` repository. The name of the file normally follows the
name of the relation, only the colon must be converted to a hyphen. For example, the documentation
of the French subtype `advcl:cleft` must be in the file
[_fr/dep/advcl-cleft.md](https://github.com/UniversalDependencies/docs/blob/pages-source/_fr/dep/advcl-cleft.md).

To get started, you may want to copy an existing page from another language and edit it.
Each MarkDown file has a header which starts and ends with three dashes. Here is an example;
edit title and shortdef, keep layout and udver intact:

<pre>
---
layout: relation
title: 'advcl:cleft'
shortdef: 'cleft adverbial clause modifier'
udver: '2'
---
</pre>

Your description of the subtype starts after the header. Do not forget to add examples
(full dependency trees are preferred over just showing the relation the page is about).
Dependency trees are inserted either in the `sdparse` environment or in the `conllu`
environment (the latter is more complex but it allows direct inserting of trees from your
treebank). Do not forget to add an English translation of a foreign-language example.

<pre>
~~~ sdparse
Il y a Marie qui danse dans la pièce . \n Marie dances in the room .
nsubj(a,Il)
advmod(a,y)
obj(a,Marie)
advcl:cleft(Marie,danse)
nsubj(danse,qui)
obl(danse,pièce)
case(pièce,dans)
det(pièce,la)
punct(a,.)
~~~
</pre>

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

<strong>ALSO IMPORTANT:</strong>
To keep the repository portable across operating systems, avoid creating files whose base name (without the `.md` extension)
is <strong><tt>AUX</tt></strong> or <strong><tt>aux</tt></strong>, e.g., <tt>aux.md</tt> is not permitted!
Note that languages with full documentation use an underscore character in the name (<tt>aux_.md</tt>)
and a redirect-from directive in the MarkDown preamble inside the file.
