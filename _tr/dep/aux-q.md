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

~~~ sdparse
Okuyacak mısınız ? \n Are you going to read ?
aux:q(Okuyacak, mısınız)
~~~

~~~ sdparse
Kitabı Ali'den aldın mı ? \n _Did_ you take the book from Ali ?
aux:q(aldın, mı)
~~~

~~~ sdparse
Kitabı Ali'den mi aldın ? \n Did you take the book _from Ali_ ?
aux:q(Ali'den, mi)
~~~

~~~ sdparse
Kitabı mı Ali'den aldın ? \n Did you take _the book_ from Ali ?
aux:q(Kitabı, mı)
~~~

<!-- Interlanguage links updated Pá kvě 14 11:08:53 CEST 2021 -->
