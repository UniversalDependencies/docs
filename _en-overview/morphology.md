---
layout: base
title:  'Morphology'
permalink: en/overview/morphology.html
---

# POS and Morphology: General Principles

## POS tag set

The mapping to Universal POS tags was done automatically from Penn Treebank POS tags, with very limited hand correction. However, unlike for the earlier Google universal part of speech tag set, this now has to be done in a syntactic context-sensitive way, so that verbal auxiliaries and subordinating conjunctions (among other things) can be correctly recognized.

The work was done with a [script](https://github.com/stanfordnlp/CoreNLP/blob/master/data/edu/stanford/nlp/upos/ENUniversalPOS.tsurgeon) for use with [Tsurgeon](http://nlp.stanford.edu/software/tregex.shtml). You can also use this script to convert to UD POS tags any Penn Treebank tag set English treebank.  If you spot any errors or have suggestions for improving this script, please let us know. (As discussed under particular POS tags, there are a couple of ways in which this script imperfectly achieves the goals of UD, but it does not seem possible to address these in an automatic conversion.)

## Morphology

At present there are no features available for English. In a future release, we hope to add lemmas and at least the simple features that are encoded in Penn Treebank POS tags.
