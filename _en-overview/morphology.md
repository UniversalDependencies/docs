---
layout: base
title:  'Morphology'
permalink: en/overview/morphology.html
---

# POS and Morphology: General Principles

## POS tag set

The mapping to Universal POS tags was done automatically from Penn Treebank POS tags, with very limited hand correction. However, unlike for the earlier Google universal part of speech tag set, this now has to be done in a syntactic context-sensitive way, so that verbal auxiliaries and subordinating conjunctions (among other things) can be recognized and given the correct universal POS tag.

The work was done with a [script](https://github.com/stanfordnlp/CoreNLP/blob/master/data/edu/stanford/nlp/upos/ENUniversalPOS.tsurgeon) for use with [Tsurgeon](http://nlp.stanford.edu/software/tregex.shtml). You can also use this script to convert to UD POS tags any Penn Treebank tag set English treebank.  If you spot any errors or have suggestions for improving this script, please let us know. (As discussed under particular POS tags, there are a couple of ways in which this script imperfectly achieves the goals of UD, but it does not seem possible to address these in an automatic conversion.)

## Morphology

The corpus contains a lemma for each word. Again, these were automatically generated using [Stanford CoreNLP](http://nlp.stanford.edu/software/corenlp.shtml) and have undergone only very limited validation and hand correction.

The corpus contains a limited number of morphological features. In the main, it contains features which could be derived automatically from the Penn Treebank tag set or the inflected word form. These include noun `Number`, adjective `Degree`, and verb `Tense` and `VerbForm`.  These were automatically generated and have undergone only very limited validation and hand correction.

The corpus contains the `SpaceAfter=No` annotation after appropriate words in the MISC column, when there was not a space after a token before the next token (for instance *does* when part of *doesn't* or a word before most punctuation marks). These annotations were generated automatically by Milan Straka from the ASCII form of the original data in the LDC treebank release.
