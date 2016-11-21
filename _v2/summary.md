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

The ban on spaces inside words is lifted in v2 in two circumstances:

1. For languages with writing systems that use spaces to mark units smaller than word (typically syllables), spaces are allowed in any word provided that this is declared in the language-specific documentation.  
2. For other languages, spaces are allowed for an approved and restricted list of exceptions like numbers ("100 000") and abbrevations ("i. e.") provided that these exceptions are listed explicitly in the language-specific documentation.

More discussion about word segmentation can be found [here](segmentation.html).

## Part-of-speech tags

* Rename the tag `CONJ` to `CCONJ`.
* Extend the use of `AUX` to copula verbs and nonverbal TAMVE particles.

More discussion about part-of-speech tags can be found in [here](postags.html)

## Morphological features

## Syntactic relations 

## The CoNLL-U format
