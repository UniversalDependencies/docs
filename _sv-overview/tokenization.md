---
layout: base
title:  'Tokenization'
permalink: sv/overview/tokenization.html
udver: '2'
---

# Tokenization

## UD Swedish

The tokenization in UD Swedish follows the principles of the Stockholm-Umeå Corpus, Version 2.0 (SUC, 2006), which has become the _de facto_ standard for Swedish tokenization and part-of-speech tagging. This is a straightforward segmentation based on whitespace and punctuation, but the following special cases deserve to be mentioned:

* Numerical expressions (including dates) are treated as single words and not
  segmented into their components as long as they do not contain spaces, for example, "1.1.1970".
* Abbreviations are treated as single words regardless of whether they contain
  spaces or not, for example, "t ex" (a variant of "t.ex.", meaning "for example").

UD Swedish does not contain multiword tokens.

### References

[The Stockholm Umeå Corpus. Version 2.0. 2006.](http://www.ling.su.se/english/nlp/corpora-and-resources/suc/stockholm-ume%C3%A5-corpus-suc-1.14045)
Stockholm University: Department of Linguistics.

## UD Swedish-LinES
