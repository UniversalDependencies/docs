---
layout: base
title:  'Tokenization'
permalink: sv/overview/tokenization.html
---

# Tokenization

The tokenization in the Swedish UD treebank follows the principles of the Stockholm-Umeå Corpus, Version 2.0 (SUC, 2006), which has become the _de facto_ standard for Swedish tokenization and part-of-speech tagging. This is a straightforward segmentation based on whitespace and punctuation, but the following special cases deserve to be mentioned:

* Abbreviations normalized and treated as single words regardless of whether they contain spaces and or dots or not. Thus the following three ways of abbreviating _till exempel_ (for example) are all represented in the treebank as _t.ex._: `t.ex.`, `t. ex.`, `t ex`.
* Numerical expressions ...

The Swedish UD treebank does not contain multiword tokens.

## References

[The Stockholm Umeå Corpus. Version 2.0. 2006.](http://www.ling.su.se/english/nlp/corpora-and-resources/suc/stockholm-ume%C3%A5-corpus-suc-1.14045)
Stockholm University: Department of Linguistics.
