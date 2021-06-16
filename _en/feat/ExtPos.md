---
layout: feature
title: 'ExtPos'
shortdef: 'external POS'
udver: '2'
---

This feature indicates, for the head of a [fixed expression](https://universaldependencies.org/en/dep/fixed.html), 
the effective UPOS of the full expression when it differs from the UPOS of the word itself.

`ExtPos` is used in the [SUD](https://surfacesyntacticud.github.io/) framework and appears in the MISC column 
of some UD treebanks. Its inclusion in FEATS is currently specific to English, and only heads of the `fixed` relation, 
though in the future it may be broadened.

### <a name="ADP">`ADP`</a>: adposition-like expression

#### Examples

* _figures <b>such as</b> the Pope_

### <a name="ADV">`ADV`</a>: adverb-like expression

#### Examples

* _I like dogs, <b>of course</b>_

### <a name="CCONJ">`CCONJ`</a>: coordinating conjunction-like expression

#### Examples

* _I like dogs <b>as well as</b> cats_

### <a name="SCONJ">`SCONJ`</a>: subordinator-like expression

#### Examples

* _pastimes <b>such as</b> eating cake_
