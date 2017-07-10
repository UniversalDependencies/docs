---
layout: relation
title: 'acl:cleft'
shortdef: 'cleft clause modifier'
udver: '2'
---

In FrenchSpoken we use the `acl:cleft` relation to link the clefted nominal element (i.e. the head of the cleft construction) and the clause of the cleft sentence.
When the clefted element is a clause or an adverb, we use the [ccomp:cleft]() relation instead.

~~~ sdparse
Les vendanges commencent aujourd'hui. C' est un vigneron du coin qui me l'a dit .
nsubj:expl(vigneron, C')
acl:cleft(vigneron, dit)
nsubj(dit, qui)
~~~

We also use the [nsubj:expl]() relation for the syntactical subject of the cleft construction.
