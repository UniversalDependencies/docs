---
layout: relation
title: 'nummod'
shortdef: 'numeric modifier'
udver: '2'
---

A numeric modifier of a noun is any [number](naq-pos/NUM) phrase that serves to modify the meaning of the noun with a quantity.

~~~ sdparse
ǁîb ge koro khoega ge ǂgâu . \n He DECL five people PST hit .
nummod(khoega, koro)
nummod(people, five)
~~~

~~~ sdparse
ǁîb ge 5 khoega ge ǂgâu . \n He DECL 5 people PST hit .
nummod(khoega, 5-3)
nummod(people, 5-11)
~~~

Note that indefinite quantifiers such as _ǀoro_ "few", _ǂgui_ "many" are tagged [DET](naq-pos/DET) rather than [NUM](naq-pos/NUM). Therefore their relation to the quantified noun is not `nummod` but [det](naq-dep/det):

~~~ sdparse
ǁîb ge ǂgui khoega ge ǂgâu . \n He DECL many people PST hit .
det(khoega, ǂgui)
de(people, many)
~~~
<!-- Interlanguage links updated Po 29. června 2026, 17:44:32 CEST -->
