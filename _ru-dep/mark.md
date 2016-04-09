---
layout: relation
title: 'mark'
shortdef: 'marker'
---

A marker is the subordinating conjunction introducing a finite clause subordinate to another clause.
The mark is a dependent of the subordinate clause head.

~~~ sdparse
Я не знал , что ты говоришь по-немецки . \n I didn't know , that you speak German .
mark(говоришь, что)
mark(speak, that)
~~~

~~~ sdparse
Мы отправим товар , как только на наш счет поступят деньги . \n We will-dispatch goods, as-soon-as money arrive at our account .
mark(поступят, как только)
mark(arrive, as-soon-as)
~~~

Note that the subordinating conjunction should not be confused with relative pronouns and adverbs.
These fill a valency slot in the frame of the subordinate predicate,
and are labeled according to their role in the frame, they are not `mark`:

~~~ sdparse
Я бы хотел узнать , когда нам поступят деньги на счет . \n I would like to-know , when money arrive at our account .
advmod(поступят, когда)
advmod(arrive, when)
~~~

