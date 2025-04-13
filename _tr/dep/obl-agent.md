---
layout: relation
title: 'obl:agent'
shortdef: 'nominal modifier indicating the actor of a passive predicate'
udver: '2'
---

This subtype of [obl]() is used for marking the performer of action (the subject in the corresponding active sentence) in a passive predicate.

~~~ sdparse
Kitap öğrenciler tarafından okundu . \n The book was read by the students
obl:agent(okundu, öğrenciler)
case(öğrenciler, tarafından)
nsubj:pass(okundu, Kitap)
~~~

~~~ sdparse
Kitap öğrenciler –ce okundu . \n The book was read by the students
obl:agent(okundu, öğrenciler)
case(öğrenciler, –ce)
nsubj:pass(okundu, Kitap)
~~~

~~~ sdparse
Araba aşırı sıcaktan bozulmuş . \n The car was broken by extreme heat
obl:agent(bozulmuş, sıcaktan)
~~~

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:11:16 CET -->
