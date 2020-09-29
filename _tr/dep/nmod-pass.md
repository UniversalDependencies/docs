---
layout: relation
title: 'nmod:pass'
shortdef: 'nominal modifier indicating the actor of a passive predicate'
---

This subtype of [nmod]() is used for marking the performer of action (the subject in the corresponding active sentence) in a passive predicate.


~~~ sdparse
Kitap öğrenciler tarafından okundu . \n The book was read by the students
nmod:pass(okundu, öğrenciler)
case(öğrenciler, tarafından)
nsubjpass(okundu, Kitap)
~~~

~~~ sdparse
Kitap öğrenciler –ce okundu . \n The book was read by the students
nmod:pass(okundu, öğrenciler)
case(öğrenciler, –ce)
nsubjpass(okundu, Kitap)
~~~

~~~ sdparse
Araba aşırı sıcaktan bozulmuş . \n The car was broken by extreme heat
nmod:pass(bozulmuş, sıcaktan)
~~~

<!-- Interlanguage links updated Út zář 29 18:41:28 CEST 2020 -->
