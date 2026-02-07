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

Note: This page was based on [aux:q for Turkish](https://universaldependencies.org/tr/dep/aux-q.html).

~~~ sdparse
Oḳuyacaḳ mısınız ? \n Are you going to read ?
aux:q(Okuyacak, mısınız)
~~~

~~~ sdparse
Kitābı ʿĀlīden aldın mı ? \n _Did_ you take the book from Ali ?
aux:q(aldın, mı)
~~~

~~~ sdparse
Kitābı ʿĀlīden mi aldın ? \n Did you take the book _from Ali_ ?
aux:q(ʿĀlīden, mi)
~~~

~~~ sdparse
Kitābı mı ʿĀlīden aldın ? \n Did you take _the book_ from Ali ?
aux:q(Kitabı, mı)
~~~

<!-- Interlanguage links updated St 12. listopadu 2025, 09:21:21 CET -->
