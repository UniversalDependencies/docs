---
layout: base
title:  'Embedded Visualisation'
---

# Basic document structure and editing

These pages are written using the [Markdown language](http://daringfireball.net/projects/markdown/syntax) and
dependency examples are in-lined between div tags, as shown below. For example, the source for this page is
[here](https://raw.githubusercontent.com/UniversalDependencies/docs/pages-source/embedsd.md) and can be edited either directly
on GitHub or in a text editor using the normal edit-commit-push cycle.

# Automatic parse visualization

## Simple examples

A single tree can be embedded using code like this

    <div id="simple-example-parse" class="sd-parse">
    Dogs run
    nsubj(run, Dogs)
    </div>

which results in this embedded visualization:

<div id="simple-example-parse" class="sd-parse">
Dogs run
nsubj(run, Dogs)
</div>

The CoNLL-X format is also supported. For example,

    <div class="conllx-parse">
    1    Dogs   dog    _    NNS    _    2    nsubj
    2    run    run    _    VBP    _    0    ROOT
    </div>

gives

<div class="conllx-parse">
1    Dogs   dog    _    NNS    _    2    nsubj
2    run    run    _    VBP    _    0    ROOT
</div>

You can have any number of visualizations on a page, and any
standard HTML content can be freely mixed with the visualizations.

<!--
<div class="sd-parse">
You can have any number of these .
nsubj(have-3, You-1)
aux(have-3, can-2)
det(number-5, any-4)
dobj(have-3, number-5)
prep(number-5, of-6)
pobj(of-6, these-7)
</div>
-->

## Ambiguous tokens

If your example has several instances of the same token, you can use their position to refer to the exact token. In the following example `can-5` refers to the fifth token of the sentence, `can`. This code

    <div id="simple-example-parse" class="sd-parse">
    I can can the can .
    nsubj(can-3, I)
    aux(can-3, can-2)
    det(can-5,the)
    dobj(can-3,can-5)
    punct(can-3,.)
    </div>

will result in this visualization

<div id="simple-example-parse" class="sd-parse">
I can can the can .
nsubj(can-3, I)
aux(can-3, can-2)
det(can-5,the)
dobj(can-3,can-5)
punct(can-3,.)
</div>




## POS tags

POS tags are optional and use the format "text/POS".

    <div class="sd-parse">
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
    </div>


<div class="sd-parse">
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
</div>

Any literal slashes ("/") can be escaped using backslash.

     <div class="sd-parse">
     \\/\\ escapes/VBZ :/: \\o\//\\o\/
     nsubj(escapes, \)
     </div>

<div class="sd-parse">
\\/\\ escapes/VBZ :/: \\o\//\\o\/
nsubj(escapes, \)
</div>

## Multiple lines of text

The literal sequence `\n` in the SD input text is interpreted as a
newline. (This sequence should be separated by space from the rest of
the input.)

    <div class="sd-parse">
    One line \n and another.
    <div>

gives:

<div class="sd-parse">
One line \n and another.
</div>

## Editing

Controls for visualization editing and information is accessible in
elements with the attribute `tabs="yes"` (or any other non-empty
value):

    <div id="simple-example-parse" class="sd-parse" tabs="yes">
    Dogs run
    nsubj(run, Dogs)
    </div>

This gives:

<div id="simple-example-parse" class="sd-parse" tabs="yes">
Dogs run
nsubj(run, Dogs)
</div>

You can click on the tab on the top right to edit the visualization,
but note that the edits are not saved anywhere as there's no
server. This is mostly useful to build and debug examples.

## Unicode

Everything is unicode-compliant.

    <div class="sd-parse">
    ロボットは/何でもいい 東大に/分かんない  入れる/です か/よね 。/。
    nsubj(入れる, ロボットは)
    nommod(入れる, 東大に)
    </div>

<div class="sd-parse">
ロボットは/何でもいい 東大に/分かんない  入れる/です か/よね 。/。
nsubj(入れる, ロボットは)
nommod(入れる, 東大に)
</div>

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
