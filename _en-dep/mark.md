---
layout: relation
title:  'mark'
shortdef : 'marker'
---

A marker is the word introducing a clause subordinate to another clause. For a complement clause, this will typically be *that* or *whether*. For an adverbial clause, the marker is typically a preposition like *before* or a subordinating conjunction fulfilling a similar role like *while* or *although*. The mark is a dependent of the subordinate clause head. 

~~~ sdparse
Forces engaged in fighting after insurgents attacked
mark(attacked, after)
~~~

~~~ sdparse
He says that you like to swim
mark(swim, that)
~~~

The infinitive marker *to* is analyzed as a `mark`.

~~~ sdparse
I tried to finish it
mark(finish, to)
~~~

When a a noun or a verb takes a prepositionally marked non-core argument (modifier) and that modifier is a clause, then we also label that prepositon as `mark` (as it would not seem reasonable to call it `case` when it is marking a clause). The result will commonly be a doubly marked clause.

~~~ sdparse
We have no useful information on whether users are at risk .
nsubj(have, We)
neg(information, no)
amod(information, useful)
dobj(have, information)
mark(risk, on)
mark(risk, whether)
nsubj(risk, users)
cop(risk, are)
case(risk, at)
acl(information, risk)
punct(have, .)
~~~
