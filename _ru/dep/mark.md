---
layout: relation
title: 'mark'
shortdef: 'marker'
udver: '2'
---

A marker is the subordinating conjunction introducing a finite clause subordinate to another clause.
The mark is a dependent of the subordinate clause head.

~~~ sdparse
Я не знал , что ты говоришь по-немецки . \n I didn't know , that you speak German .
mark(говоришь, что)
mark(speak, that)
~~~

~~~ sdparse
Мы отправим товар , как только на наш счет поступят деньги . \n We will-dispatch goods , as soon-as at our account arrive money .
mark(поступят, как)
fixed(как, только)
mark(arrive, as)
fixed(as, soon-as)
~~~

Note that the subordinating conjunction should not be confused with relative pronouns and adverbs.
These fill a valency slot in the frame of the subordinate predicate,
and are labeled according to their role in the frame, they are not `mark`:

~~~ sdparse
Я бы хотел узнать , когда нам поступят деньги на счет . \n I would like to-know , when us arrive money at account .
advmod(поступят, когда)
advmod(arrive, when)
~~~
<!-- Interlanguage links updated St lis 3 20:58:57 CET 2021 -->
