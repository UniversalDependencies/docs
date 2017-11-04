---
layout: base
title:  'Morphology'
permalink: en/overview/tokenization.html
---

# Tokenization

The tokenization we use is "new" Penn Treebank tokenization.  That is, the UD English treebank has the same tokenization as used in recent LDC English treebanks, such as OntoNotes. In particular, the UD English treebank is built over the LDC English Web Treebank [LDC2012T13](https://catalog.ldc.upenn.edu/LDC2012T13), and, except as noted below, the tokens and sentence divisions of the UD English treebank are identical to those of the English Web Treebank (constituency edition).

In v.1.2, the one difference we have made is that parenthesis tokens are no longer escaped, so you find tokens like "(", ")", and ":-)" rather than "-LRB-", "-RRB-", and ":--RRB-". We do still use "-LRB-" and "-RRB-" as the language-specific part-of-speech tag for parentheses.
