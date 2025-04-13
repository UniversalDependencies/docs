---
layout: relation
title:  'csubj:outer'
shortdef : 'outer relative clause modifier'
udver: '2'
---

There are two constructions that use a copula and a relative clause modifier, _'S ann_ and _'S e_.
`csubj:outer` is relevant to _'S ann_.

* _'S ann_ or _Sann_ fronts adjectives, adverbs, APs, PPs and adverbial clauses.
This is then linked to the relative clause modifier by `csubj:cleft` _except_ in the case where it is itself a clause with a subject.
In that case we use `csubj:outer` instead.

### Examples

* _Cha b' ann gus an do chaochail Lachlann Thorrloisg a b' urrainn do neach a ràdh gun..._ "It was not until Lachlann Thorrloisg died that someone could say that..." (fp03\_019, slightly edited)

~~~ sdparse
Cha b' ann gus an do chaochail Lachlann Thorrloisg a b' urrainn do neach a ràdh gun... \n NEG COP EXPL until PART PART died Lachlann Thorrloisg REL COP can to someone PART say that...
csubj:outer(urrainn, chaochail)
nsubj(Lachlann, chaochail)
~~~
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:44 CET -->
