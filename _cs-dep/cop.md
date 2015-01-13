---
layout: relation
title: 'cop'
shortdef: 'copula'
---

A copula is the relation between the nominal predicate _(přísudek jmenný)_ and
the copular verb _<b>být</b>_ “to be” (or its variants _bývat, bývávat_).
The verb _stát se_ “to become”, despite being counted among copular verbs by some authors,
is not analyzed as `cop`.

We normally take a copula as a dependent of its complement (the nominal predicate).
The nominal predicate is usually a [noun](cs-pos/NOUN), an [adjective](cs-pos/ADJ)
or a [participle](cs-feat/VerbForm).

~~~ sdparse
Ondřej je čestný muž . \n Ondřej is honest man .
cop(muž, je)
cop(man, is)
~~~

~~~ sdparse
Ondřej je čestný . \n Ondřej is honest .
cop(čestný, je)
cop(honest, is)
~~~
