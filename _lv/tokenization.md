---
layout: base
title:  'Tokenization'
permalink: lv/overview/tokenization.html
---

# Tokenization

Tokenization is obtained from Latvian Treebank tokenization by splitting "words with spaces". This means:

* Numbers containing commas, periods or colons are single tokens, e.g. *13:30*, *3,14*, *1.0.1* (comma is the standard decimal separator for Latvian, colon is comonly used seperator for clocks).
* From UDv2.0 numbers containing spaces are single tokens as space is commonly used for digit grouping in Latvian, e.g. *1 000 123*, *+371 9876 5432* (large numbers and phone numbers).
* Cardinal numbers are single tokens, e.g. *1.*, *80-tie*.
* Common abrievations are single tokens, namely, *u.c.*, *u.tml.*, *utt.*, *utjp.*, *v.tml.*. From UDv2.0 these abrievations are alloved to contain space after a dot.
* URLs and URL-based names are single tokens, e.g. *Firmas.lv*, *http://ailab.lv/*.
* All other cases of spaces and punctuation form token boundry.

Current version of treebank does not utilize range tokens in CoNLL-U files. 

## Known discrepancy

Current version of treebank does not split out "reflective particle" from verbs, because in Latvian reflectiveness is infused very deeply in the verb inflectional paradigm and it is very hard to split it from grammatical markers that are used for indicating person, time or creating derivative forms.
