---
layout: relation
title: 'expl:impers'
shortdef: 'impersonal expletive'
udver: '2'
---

The relation `expl:impers` is a sub-class of [expl](naq-dep/expl), specific for the impersonal use of the person-gender-number subject clitic. When the impersonal person-gender-number subject clitic (_i_ "3C.SG" or _n_ "3C.PL") does not match the person-gender-number values of the semantic subject or there is no semantic subject available, the person-gender-number subject clitic has the `expl:impers` relation.

~~~ sdparse
Nē xūn ǂama i ge matare-amsa hâ . \n These things about it DECL cost exist .
expl:impers(hâ, i)
nsubj(hâ, matare-amsa)
expl:impers(exist, it)
nsubj(exist, cost)
~~~
<!-- Interlanguage links updated So 10. května 2025, 18:15:31 CEST -->
