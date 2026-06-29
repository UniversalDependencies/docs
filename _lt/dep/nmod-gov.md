---
layout: relation
title: 'nmod:gov'
shortdef: 'nominal modifier describing the governing noun’s quantity or measure'
udver: '2'
---

This is a new label, previously unused in UD. Attributes that describe governing nouns indicating quantity are labeled as `nmod:gov`: _dauguma **žmonių** (a majority of **people**), grupė **žmonių** (a group of **people**), kuprinė **gintaro** (a bag of **amber**), stiklinė **pieno** (a glass of **milk**)._
In this case, the non-agreeing attribute is expressed by the genitive case.

~~~ sdparse
Susirinko dauguma gyventojų . \n The-majority-of the-residents gathered .
nmod:gov(dauguma, gyventojų)
nmod:gov(The-majority-of, the-residents)
~~~
<!-- Interlanguage links updated Po 29. června 2026, 18:12:40 CEST -->
