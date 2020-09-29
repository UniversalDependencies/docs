---
layout: relation
title: 'dislocated'
shortdef : 'dislocated elements'
---

NOTE: The relation *dislocated* is not in use in Russian UD 2.0+

The `dislocated` relation is used for fronted or postposed elements
that do not fulfill the usual core grammatical relations of a
sentence. Dislocated elements are attached to the same governor as the dependent that they double for.

~~~ sdparse
Это наша комната, моя и Дашина
dislocated(комната, моя)
cc(моя, и)
conj(моя, Дашина)
~~~
<!-- Interlanguage links updated Út zář 29 20:23:30 CEST 2020 -->
