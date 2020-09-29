---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for nominal modifiers of nouns. `nmod` is a noun functioning as a non-core (oblique)
argument or adjunct. In Swedish, `nmod` is used for prepositional modifiers:

~~~ sdparse
Ekonomiska bidrag till staten \n Financial contributions to the state
nmod(bidrag, staten)
case(staten, till)
~~~

But also for preposed nominal modifiers:

~~~ sdparse
Doktor Andersson \n Doctor Andersson
nmod(Andersson, Doktor)
~~~

One subtype of `nmod` is introduced in Swedish: [nmod:poss]() for possessive/genitive modifiers.
<!-- Interlanguage links updated Út zář 29 20:23:36 CEST 2020 -->
