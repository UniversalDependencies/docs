---
layout: base
title:  'Tokenization'
permalink: lv/overview/tokenization.html
---

# Tokenization

Tokenization is obtained from Latvian Treebank tokenization by splitting "words with spaces". This means:

* Whitespace always is a token boundry.
* Numbers containing commas, periods or colons are single tokens, e.g. *13:30*, *3,14*, *1.0.1*.
* Common abrievations are single tokens, e.g. *u.c.*, "u.tml.*, "utt.", "utjp.".
* URLs and URL-based names are single tokens, e.g. *Firmas.lv*, *http://ailab.lv/*.
* Cardinal numbers are single tokens, e.g. *1.*, *80-tie*.
* All other cases of punctuation forms token boundry.

Current version of treebank does not utilize range tokens in CoNLL-U files. 

## Known discrepancy

Current version of treebank does not split out "reflective particle" from verbs, because in Latvian reflectiveness is infused very deeply in the verb inflectional paradigm and it is very hard to split it from grammatical markers that are used for indicating person, time or creating derivative forms.
