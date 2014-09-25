---
layout: base
title:  'Visualisation'
---

# Quick introduction

This online repository contains dependency annotation documentation
and visualizations, built using a combination of Jekyll, GitHub pages
and embedded brat visualizations. Here's a minimal example:

<div class="example" markdown="1">

An adjectival complement of a verb is an adjectival phrase which functions as the complement (see [ADJ]()).

~~~ sdparse
She looks very beautiful
acomp(looks, beautiful)
~~~

</div>

The text is [Markdown](http://daringfireball.net/projects/markdown/syntax)
(with optional inline HTML) and the data for the visualizations is
represented in either the Stanford Dependency or CoNLL-X format. For
example, the above visualization is generated from this input:

    An adjectival complement of a verb is an adjectival phrase which functions as the complement (see [ADJ]()).

    ~~~ sdparse
    She looks very beautiful
    acomp(looks, beautiful)
    ~~~

See the [links below](#more-information) for more information.

## How to contribute

See [here](contributing.html) for instructions on how to contribute to
this online documentation. [This page](embedsd.html) provides details
on how the visualized examples are created.

## More information:

The following sources of documentation provide further details:

- [Markdown](http://daringfireball.net/projects/markdown/syntax)
- [Github pages](https://pages.github.com/)
- [Embedded brat](http://brat.nlplab.org/embed.html)
- [Stanford Dependencies](http://nlp.stanford.edu/software/stanford-dependencies.shtml)

Further details are provided below.

# Automatic parse visualization

## Simple examples

A single tree in the Stanford Dependency format can be embedded using
the following syntax:

    ~~~ sdparse
    Dogs run
    nsubj(run, Dogs)
    ~~~

which results in this embedded visualization:

~~~ sdparse
Dogs run
nsubj(run, Dogs)
~~~

The CoNLL-X format is also supported. For example,

    ~~~ conllx
    1    Dogs   dog    _    NNS    _    2    nsubj
    2    run    run    _    VBP    _    0    ROOT
    ~~~

gives

~~~ conllx
1    Dogs   dog    _    NNS    _    2    nsubj
2    run    run    _    VBP    _    0    ROOT
~~~

You can have any number of visualizations on a page, and any
standard HTML content can be freely mixed with the visualizations.

## Alternative form

As an alternative to the `~~~` syntax, you can use the equivalent HTML
tag form:

    <div class="sd-parse">
    Dogs run
    nsubj(run, Dogs)
    </div>

This form is more flexible in allowing e.g. additional attributes
to control aspects of the visualization. For example,

    <div class="sd-parse" id="simple-example-parse" tabs="yes">
    Dogs run
    nsubj(run, Dogs)
    </div>

gives

<div class="sd-parse" id="simple-example-parse" tabs="yes">
Dogs run
nsubj(run, Dogs)
</div>

## Ambiguous tokens

If your example has several instances of the same token, you can use their position to refer to the exact token. In the following example `can-5` refers to the fifth token of the sentence, `can`. 

    ~~~ sdparse
    I can can the can .
    nsubj(can-3, I)
    aux(can-3, can-2)
    det(can-5,the)
    dobj(can-3,can-5)
    punct(can-3,.)
    ~~~

will result in this visualization

~~~ sdparse
I can can the can .
nsubj(can-3, I)
aux(can-3, can-2)
det(can-5,the)
dobj(can-3,can-5)
punct(can-3,.)
~~~

## POS tags

POS tags are optional and use the format "text/POS".

    ~~~ sdparse
    POS/NNP tags/NNS can/MD be/VB attached/VBN to/TO ( any part of ) the/DT sentence/NN text/NN ./.
    dep(tags-2, POS-1)
    nsubjpass(attached-5, tags-2)
    aux(attached-5, can-3)
    auxpass(attached-5, be-4)
    prep(attached-5, to-6)
    det(text-14, the-12)
    nn(text-14, sentence-13)
    pobj(to-6, text-14)
    det(part, any)
    prep(part, of)
    ~~~

~~~ sdparse
POS/NNP tags/NNS can/MD be/VB attached/VBN to/TO ( any part of ) the/DT sentence/NN text/NN ./.
dep(tags-2, POS-1)
nsubjpass(attached-5, tags-2)
aux(attached-5, can-3)
auxpass(attached-5, be-4)
prep(attached-5, to-6)
det(text-14, the-12)
nn(text-14, sentence-13)
pobj(to-6, text-14)
det(part, any)
prep(part, of)
~~~

Any literal slashes ("/") can be escaped using backslash.

     ~~~ sdparse
     \\/\\ escapes/VBZ :/: \\o\//\\o\/
     nsubj(escapes, \)
     ~~~

~~~ sdparse
\\/\\ escapes/VBZ :/: \\o\//\\o\/
nsubj(escapes, \)
~~~

## Features

Features can be specified using the syntax "text/POS[Name=Value]".
Multiple features for a single word are separated by a bar ("|").

    ~~~ sdparse
    Token/TAG[Feat1=Val1|Feat2=Val2]
    ~~~

~~~ sdparse
Token/TAG[Feat1=Val1|Feat2=Val2]
~~~

## Multiple lines of text

The literal sequence `\n` in the SD input text is interpreted as a
newline. (This sequence should be separated by space from the rest of
the input.)

    ~~~ sdparse
    One line \n and another.
    ~~~

gives:

~~~ sdparse
One line \n and another.
~~~

## Editing

Controls for visualization editing and information is accessible in
elements with the attribute `tabs="yes"` (or any other non-empty
value):

    <div class="sd-parse" id="simple-example-parse" tabs="yes">
    Dogs run
    nsubj(run, Dogs)
    </div>

This gives:

<div class="sd-parse" id="simple-example-parse" tabs="yes">
Dogs run
nsubj(run, Dogs)
</div>

You can click on the tab on the top right to edit the visualization,
but note that the edits are not saved anywhere as there's no
server. This is mostly useful to build and debug examples.

## Unicode

Everything is unicode-compliant.

    ~~~ sdparse
    ロボットは/何でもいい 東大に/分かんない  入れる/です か/よね 。/。
    nsubj(入れる, ロボットは)
    nommod(入れる, 東大に)
    ~~~

~~~ sdparse
ロボットは/何でもいい 東大に/分かんない  入れる/です か/よね 。/。
nsubj(入れる, ロボットは)
nommod(入れる, 東大に)
~~~

## Links to documentation

The system supports a simplified syntax for linking documentation
pages that are part of a *collection* (e.g. universal dependency
types, POS tags, etc.).

The basic syntax is `[COLL/DOC]()`, where `COLL` is the collection
name and `DOC` the document title. For example, `[ud-dep/aux]()` is
linked as follows: [ud-dep/aux]().

The shorter form `[DOC]()` (omitting the collection) can be used when
referring to another document in the current collection (e.g. linking
between different documents in the `ud-dep` collection) or when the
document title is unique. For example, `[nmod-own]()` can be assured
to link to [nmod-own]() as the type is unique to the Finnish
annotation.

## Cross-references

Basic support for linking and reference-based numbering is included.
Here's an example link:
<a href="#simple-example-parse" class="embed-ref">Example #</a>.

The syntax is simple: first, the example has `class="sd-parse"` and an
`id` attribute:

    <div id="simple-example-parse" class="sd-parse">

Then, the link has `class="embed-ref"` and a `href` attribute that
matches the `id` of the example:

    <a href="#simple-example-parse" class="embed-ref">Example #</a>.

As a result, any "#" character in the link text is replaced with the
sequence number of the corresponding example.
