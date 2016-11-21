---
layout: base
title:  'Executive Summary'
---

# Executive Summary

This document summarizes the major changes from v1 to v2 of the universal guidelines.
The primary purpose is to provide a checklist for treebank developers who want to start the transition from v1 to v2.
More background and discussion can be found in the thematic reports on [v2](index.html), which we cross-reference below.
Complete documentation of the new guidelines will follow as quickly as possible.

## Word segmentation

The ban on spaces inside words in v1 is lifted in v2 in two circumstances:

1. For languages with writing systems that use spaces to mark units smaller than word (typically syllables), spaces are allowed in any word provided that this is declared in the language-specific documentation.  
2. For other languages, spaces are allowed only for an approved and restricted list of exceptions like numbers ("100 000") and abbrevations ("i. e.") that have to be listed explicitly in the language-specific documentation.

More discussion about word segmentation can be found [here](segmentation.html).

## Part-of-speech tags

The universal tagset from v1 is basically kept intact in v2 with two minor revisions:

1. The tag `CONJ` is renamed `CCONJ` to make it more similar to the syntactic relation `cc` (and less similar to `conj`).
2. The guidelines for tags are modified in three cases:
   a. The use of `AUX` is extended from auxiliary verbs in a narrow sense to also include copula verbs and nonverbal TAMVE particles.
   b. The use of `PART` is restricted to a small set of words that must be listed in the language-specific documentation.
   c. The borderline between `PRON` and `DET` is made more flexible to accommodate cross-linguistic variation. 

More discussion about part-of-speech tags can be found [here](postags.html)

## Morphological features

## Syntactic relations 

## The CoNLL-U format
