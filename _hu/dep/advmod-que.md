---
layout: relation
title: 'advmod:que'
shortdef: 'question suffix'
udver: '2'
---

The question suffix _-e_ “whether” is tagged as an interrogative adverb and attached to the verb via the `advmod:que` relation.

“It is a question of the viewpoint whether the full fire test has taken place.”

~~~ sdparse
Nézőpont kérdése , hogy megtörtént -e a teljes körű tűzvédelmi próba . \n Viewpoint question-its , that happened whether the full range fire test .
nmod:att(kérdése, Nézőpont)
punct(megtörtént, ,-3)
mark(megtörtént, hogy)
csubj(kérdése, megtörtént)
advmod:que(megtörtént, -e)
det(próba, a)
amod:att(körű, teljes)
amod:att(próba, körű)
amod:att(próba, tűzvédelmi)
punct(kérdése, .-12)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:11 CET 2020 -->
