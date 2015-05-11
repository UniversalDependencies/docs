---
layout: relation
title: 'nsubjpass'
shortdef: 'passive nominal subject'
---

This document is a placeholder for the language-specific documentation
for `nsubjpass`.

A passive nominal subject is a noun phrase which is the syntactic
subject of a passive clause. Similarly to Czech, in Bulgarian there are
two kinds of passive: participle-based
and reflexive(se)-based:

~~~ sdparse
Биячите не бяха разкрити . \n Bullies-the not-were detected .
nsubjpass(разкрити, биячите)
nsubjpass(detected, bullies)
~~~

Reflexive passive (the meaning is “This will be solved tomorrow.”)

~~~ sdparse
Черквата се затопли от свещите . \n Church-the REFL.got-warm from candles-the .
nsubjpass(затопли, черквата)
nsubjpass(got-warm, church)
~~~

