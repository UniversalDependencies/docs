---
layout: relation
title: 'nmod:own'
shortdef: 'owner in a possessive existential sentence'
udver: '2'
---

This subtype of [nmod]() is used for marking the owner of a possessive existential sentence.

In Buryat, possessive existential sentences (e.g., “I have a book”) are non-verbal. The predicate
is the entity owned by somebody. The owner is in the dative case, so it is not a subject. We
attach the owner as an `nmod:own` dependent of the entity owned.

~~~ sdparse
Мааттида шэнэ түмэр морин . \n Maattida šene tümer morin . \n to.Maatti new iron horse .
nmod:own(морин, Мааттида)
amod(морин, шэнэ)
amod(морин, түмэр)
punct(морин, .-5)
~~~

“Maatti has a new iron horse.”

<!-- Interlanguage links updated Čt lis 12 09:43:31 CET 2020 -->
