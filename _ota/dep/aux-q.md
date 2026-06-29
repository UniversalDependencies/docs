---
layout: relation
title: 'aux:q'
shortdef: 'question particle'
udver: '2'
---

This is a subtype of [aux](), used for question particle _-mI (mı/mi/mu/mü)_.

The question particle, when attached to a predicate,
typically carries some of the tense/aspect/modality suffixes as well as person/number agreement suffixes.

Although it does not function as an auxiliary when attached to non-predicate words or phrases,
we use `aux:q` for all uses of the question particle.

Note: This page was adapted from [aux:q for Turkish](https://universaldependencies.org/tr/dep/aux-q.html).

~~~ sdparse
Gidecek misiniz ? \n Are you going to go ?
aux:q(Gidecek, misiniz)
~~~

~~~ sdparse
Mektūbu Meḥmedden aldın mı ? \n _Did_ you take the letter from Mehmed ?
aux:q(aldın, mı)
~~~

~~~ sdparse
Mektūbu Meḥmedden mi aldın ? \n Did you take the letter _from Mehmed_ ?
aux:q(Meḥmedden, mi)
~~~

~~~ sdparse
Mektūbu mu Meḥmedden aldın ? \n Did you take _the letter_ from Mehmed ?
aux:q(Mektūbu, mu)
~~~

<!-- Interlanguage links updated Po 29. června 2026, 17:00:16 CEST -->
