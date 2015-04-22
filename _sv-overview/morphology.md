---
layout: base
title:  'Morphology'
permalink: sv/overview/morphology.html
---

# Morphology

The morphological annotation in the Swedish UD treebank follows the general guidelines and does not add any language-specific features. The language-specific tags (including features) follow the guidelines of the Stockholm-Umeå Corpus.

The mapping from language-specific tags and features to universal tags and features was done automatically with a simple lookup table and has a few known bugs. The verb particle tag PL in SUC is always mapped to ADP but should be divided into several categories (ADV, NOUN, etc.); the verb tag VB in SUC is always mapped to VERB but should be divided into AUX and VERB; the foreign word tag UO in SUC is always mapped to X but should (sometimes) be mapped to a real tag.

## References

[The Stockholm Umeå Corpus. Version 2.0. 2006.](http://www.ling.su.se/english/nlp/corpora-and-resources/suc/stockholm-ume%C3%A5-corpus-suc-1.14045)
Stockholm University: Department of Linguistics.
