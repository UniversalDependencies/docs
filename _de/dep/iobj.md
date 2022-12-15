---
udver: '2'
layout: relation
title: 'iobj'
shortdef: 'indirect object'
---

The UD relation `iobj` is used in situations where a verb has two objects. The crucial point is that both must qualify
as objects under the UD guidelines, that is, both must be core arguments. Some types of nominals that are labeled as
objects by the traditional grammar of German are thus not objects in UD. In particular, the “indirect object” may be
understood as a dative object outside UD, but the morphological dative is an oblique marking in German, hence a dative
nominal can be attached as neither `iobj` nor [obj](); it must be [obl]().

~~~ sdparse
Die Frau gibt dem Kind einen Apfel . \n The woman gives the child an apple .
obj(gibt, Apfel)
obl(gibt, Kind)
~~~

<!-- Interlanguage links updated Po lis 14 15:35:28 CET 2022 -->
