---
layout: relation
title: 'advmod:cop'
shortdef: 'copular use of adverbial modifier'
udver: '2'
---

Chintang has several verboids that occur in negative copular constructions, such as *mahãʔ* "be not", *manchiʔ* "be not there", *mane* "should not", and *phopheiʔ* "be no longer there".

These verboids cannot be annotated as `cop`, since they contribute additional semantic content (negative polarity) and therefore are not pure copulas. Instead, the `advmod:cop` relation is used to mark their copular-like function, emphasizing their role as adverbial modifiers within the predicate rather than as true copulas.

~~~ sdparse
Igol mahaʔ mo go . \n Your_ball be_not down_there NMLZ .
advmod:cop(Igol, mahaʔ)
advmod:cop(Your_ball, be_not)
det:nmlz(go, mo)
det:nmlz(NMLZ, down_there)
nsubj(Igol, go)
nsubj(Your_ball, NMLZ)
~~~
<!-- Interlanguage links updated Po 29. června 2026, 18:11:38 CEST -->
