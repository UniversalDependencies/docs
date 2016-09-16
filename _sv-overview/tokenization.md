---
layout: base
title:  'Tokenization'
permalink: sv/overview/tokenization.html
---

# Tokenization

The tokenization in the Swedish UD treebank follows the principles of the Stockholm-Umeå Corpus, Version 2.0 (SUC, 2006), which has become the _de facto_ standard for Swedish tokenization and part-of-speech tagging. This is a straightforward segmentation based on whitespace and punctuation, but the following special cases deserve to be mentioned:

* Abbreviations are treated as single words regardless of whether they contain spaces or not (and internal spaces are replaced by underscore characters). 
* Numerical expressions including dates are treated as single words and not segmented into their components.

The Swedish UD treebank does not contain multiword tokens.

## References

[The Stockholm Umeå Corpus. Version 2.0. 2006.](http://www.ling.su.se/english/nlp/corpora-and-resources/suc/stockholm-ume%C3%A5-corpus-suc-1.14045)
Stockholm University: Department of Linguistics.
