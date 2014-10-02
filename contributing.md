---
layout: base
title:  'Contributing'
---

# How to contribute

This page describes how to contribute to these online materials.

Contents:

* [Preliminaries](#preliminaries)
* [Editing](#editing)
  - [Style guidelies](#style-guidelines)
  - [File format](#file-format)
  - [Editing online](#editing-online)
  - [Using Git](#using-git)
* [Filing issues](#filing-issues)
* [Non-members](#non-members)
* [Troubleshooting](#troubleshooting)

Quick links:

* [Markdown syntax](http://daringfireball.net/projects/markdown/syntax)
* [Embedded visualization of dependencies](visualization.html)

## Preliminaries

Before starting, you may want to have a quick look at the
[documentation and visualization system introduction](visualization.html).

The online documentation is stored in GitHub, a service for projects
using the Git version control system. To contribute, you need a GitHub
account.

If you already have a GitHub account, just make sure you are logged in
before moving on. If you do not, please go to
[https://github.com/join](https://github.com/join) and create an
account first. (it's free, only takes a minute, and there's a
reasonable [privacy
policy](https://help.github.com/articles/github-privacy-policy) in
place.)

After logging in to GitHub, see the following:

* [How to edit the documentation](#editing)
* [How to file bug reports, feature requests, etc.](#filing-issues)

## Editing

(Note: the following instructions are for project members. If you are
not a member, see [here](#non-members))

To get started with editing the materials, first read the brief [style
guidelines](#style-guidelines) and the[file
format description](#file-format) below. Then, the easiest way to edit
the materials is to use the [online editing features](#editing-online)
provided by GitHub. If you prefer to use your own text editor or need
to make larger changes, you may wish to [use the git version control
system](#using-git) and work on the files on your own computer.

### Style guidelines

To maintain the consistency of the documentation, please follow these guidelines:

* All types / labels (POS tags, feature names/values, relation labels) are in
`constant width font`. To achieve this, use either a documentation link (see
below), or backticks in Markdown (e.g. \`nsubj\`) or `<code>` in HTML
(e.g. `<code>nsubj</code>`).
* The first mention of any type other than the one that is the focus of the page
(the titular one) are linked to the relevant page of documentation. For example,
on the page for `nsubj`, write "`nsubj`" and "[case]()". Repeated mentions of
the same type may be optionally be linked (if they are too far apart, it makes
sense to hyperlink again, but it does not make sense to highlight several
occurrences in the same paragraph)
* Examples in a foreign language should be followed by an English translation, which is not italicized but it is enclosed in quotes, e.g. _der Mann_ “the man”.
  * Whenever quotes are used in the documentation, the typographic (directional) quotation marks should be used, not the straight ASCII marks: “correct” × "wrong".
* Examples given in a foreign script are only italicized if it is Cyrillic or Greek. (In some scripts Italics don't look nice and the foreign script highlights the word anyway.) They should be immediately followed by a Latin-based transliteration, which is in italics. The transliteration is separated from the original script by a slash, which is not italics.
  * _Иван лучший танцор_ / _Ivan lučšij tancor_ “Ivan is the best dancer”
  * राम इवान से भी बेहतर है / _rāma ivāna se bhī behatara hai_ “Ram is even better than Ivan”
* If an in-line example shall contain a verbose translation, it is also italics and without quotes, separated by the non-italics abbreviation “lit.” Multi-word expressions that correspond to one token in the original language are joined by a hyphen. The verbose translation is followed by a fluent English translation in its usual format.
  * _Seděla na lavičce pod mostem._ lit. _She-sat on bench under bridge._ “She was sitting on a bench under the bridge.”
* If it is necessary / expedient to identify the language of the example, it is either identified in plain English (such as German _ich bin gekommen_ “I have come”) or the ISO 639 language code in square brackets is used as shortcut (such as [de] _ich bin gekommen_ “I have come”).

### File format

The online documentation is generated from a simple format that
largely resembles plain text. Similarly, the embedded visualizations
are generated from representations in the Stanford Dependency or
CoNLL-X formats, each of which can be created and edited manually or
copied in from the output of relevant tools.

For example, the following:

<div class="example" markdown="1">

A copula is the relation between the complement of a copular verb and the copular verb.

~~~ sdparse
Bill is an honest man
cop(man, is)
~~~

The following are considered copular verbs:

* appear
* be
* become
* [...]

</div>

is generated from this input:

    A copula is the relation between the complement of a copular verb and the copular verb.

    ~~~ sdparse
    Bill is an honest man
    cop(man, is)
    ~~~

    The following are considered copular verbs:

    * appear
    * be
    * become
    * [...]

The input is primarily in the
[Markdown](http://daringfireball.net/projects/markdown/) format, which
can be mostly written like plain text and mixed freely with inline
HTML. The only exception is the format used for embedding
visualizations, which is supported as an extension specific to this
project. To embed a visualization represented in the Stanford
Dependency format, simply wrap it in lines with `~~~ sdparse` and
`~~~`, as in the example above. (Or, correspondingly, wrap in HTML
tags `<div class="sd-parse">` and `</div>`)

The documentation system also supports linking of pages in collections
using a compact syntax: for example, `[u-dep/aux]()` expands into
the following link: [u-dep/aux]()

For more detail, you can see the documentation for the [Markdown
syntax](http://daringfireball.net/projects/markdown/syntax) and
[embedded visualizations](visualization.html). However, we believe that the
formats are simple enough to learn by example and by doing, and
suggest to proceed directly to the next section (editing).

### Editing online

GitHub provides basic online editing functionality. The interface
looks something like this:

<img style="border: 1px solid lightgray" src="img/gh-edit.png">

To get started, the only relevant parts are the large black edit area
and the "Cancel" and "Commit changes" buttons at the bottom.

To give this a quick try, click on the following link: <a
href="https://github.com/universaldependencies/docs/edit/pages-source/sandbox.md"
target="#">edit sandbox document</a>. This opens a "sandbox" document
in a new tab. After testing it out, feel free to either cancel without
saving your changes, or save them into the version control system
using the "Commit changes" button. You can see the resulting document
[here](http://universaldependencies.github.io/docs/sandbox.html)
(reload to see changes, and please note it may take some time for the
changes to show up.)

For experimenting with the system, we recommend using the sandbox
document instead of the "real" documents.

To edit the actual documentation, first find the page you're
interested in. For example, to navigate to the documentation for the
English language `dobj` (direct object) dependency:

* Start from the homepage ([http://universaldependencies.github.io/docs/](http://universaldependencies.github.io/docs/))
* Click on the "English relations index" link (go to [http://universaldependencies.github.io/docs/en/dep/index.html](http://universaldependencies.github.io/docs/en/dep/index.html))
* Click on the "dobj" link (go to [http://universaldependencies.github.io/docs/en/dep/dobj.html](http://universaldependencies.github.io/docs/en/dep/dobj.html))

Then, edit and save your changes:

* Click on the "edit page" link on the top
* Make your changes in the GitHub editor
* (Optional: add a message describing your changes in the "Commit changes" box)
* Click on "Commit changes"

Finally, wait a moment for your revisions to the documentation to be
compiled (normally no more than 10 seconds) and reload the
documentation page to make sure they look right.

That's all you need to get started. If you have any issues using the
system, please see the [troubleshooting](#troubleshooting) section
below.

### Using Git

As an alternative to using the [online editing
features](#editing-online), you can also edit the materials using the
Git version control system as described in this section.

If you are not previously familiar with Git, please see [GitHub
instructions](https://help.github.com/articles/set-up-git) on setup
and basic use. The rest of this section assumes that you have git set
up and are working on a terminal in a unix-like environment. For other
use cases, please see GitHub documentation.

The project materials are found in the repository
[https://github.com/universaldependencies/docs](https://github.com/universaldependencies/docs).
To check out these materials from GitHub, run the following command:

    git clone git@github.com:UniversalDependencies/docs.git

If successful, this will create the subdirectory `docs/` containing
the data of the repository in your current directory. You can then
edit the files in the repository normally, using your favorite text
editor. After completing a set of changes, you can commit the changes
with the command

    git commit -a

and push them to the shared online repository with

    git push

if you see the error `error: failed to push some refs`, it's likely
that others pushed changes to the shared online repository while you
were working. You can retrieve these changes and merge them with
yours with the command

    git pull

This covers the very basics only. Please see the extensive materials
available online at GitHub and elsewhere for details.

Technical note: please **do not** commit anything into the `gh-pages`
branch of the repository. The files in this branch are autogenerated
and will be overwritten on any changes to the repository. (If this
note makes no sense to you, don't worry -- you cannot do this by
accident.)

## Filing issues

To file bug reports, feature requests, suggestions for improvement,
etc., you can use the project issue tracker: [https://github.com/universaldependencies/docs/issues](https://github.com/universaldependencies/docs/issues).

The issue tracker is open to members and non-members alike, and can be
used to let (other) project members know of any issue with the online
documentation, including technical problems, mistakes in the
descriptions or examples, or suggestions for how to improve any aspect
of the project.

## Non-members

Although only members of this project can directly edit the online
materials, you do not need to be a member to contribute. Non-members
can either [file issues](#filing-issues) on the project bug tracker,
or submit proposed changes as [pull
requests](https://help.github.com/articles/using-pull-requests).

## Links

* [Home page](http://universaldependencies.github.io/docs/)
* [GitHub repository](https://github.com/universaldependencies/docs)
* [Issue tracker](https://github.com/universaldependencies/docs/issues)

## Troubleshooting

No trouble reported yet. If you have any, just ask Sampo
(sampo.pyysalo@gmail.com) or Filip (ginter@cs.utu.fi)!
