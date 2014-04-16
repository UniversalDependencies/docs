---
layout: base
title:  'Embedded SD Visualisation test'
---

## Basic document structure and editing

The pages are written using the [Markdown language](http://daringfireball.net/projects/markdown/syntax) and
dependency examples are in-lined between div tags, as shown below.

## Automatic parse visualization

# Simple example

A single tree can be embedded using code like this

    <div id="simple-example" class="sd-parse">
    Dogs run
    nsubj(run, Dogs)
    </div>

which results in this embedded visualization:

<div id="simple-example" class="sd-parse">
Dogs run
nsubj(run, Dogs)
</div>

You can click on the tab on the top right to edit the visualization but note
that the edits are not saved anywhere as there's no server. This is mostly useful
to build the examples.

You can have any number of visualizations on a page, and any
standard HTML content can be freely mixed with the visualizations.

<div class="sd-parse">
You can have any number of these .
nsubj(have-3, You-1)
aux(have-3, can-2)
det(number-5, any-4)
dobj(have-3, number-5)
prep(number-5, of-6)
pobj(of-6, these-7)
</div>


# POS tags

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

# Unicode

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

Basic support for linking and reference-based numbering is included:
  see <a href="#simple-example" class="embed-ref">Example #</a>

