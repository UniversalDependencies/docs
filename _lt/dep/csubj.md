---
layout: relation
title:  'csubj'
shortdef : 'clausal subject'
udver: '2'
---

A clausal subject (csubj) is used to annotate a subordinate clause functioning as the subject, provided it is not governed by a passive participle. The csubj label is attached to the predicate of the subordinate clause. The remaining words are annotated in the usual manner.

~~~ sdparse
Man patinka , kad visi grįš namo . \n I like that everyone will-come home .
csubj(patinka, grįš)
csubj(like, will-come)
~~~

An infinitive is annotated as csubj when it functions as the subject (not necessarily in subordinate clauses), provided it is not governed by a passive participle or a gerund functioning as the subject.

~~~ sdparse
Mąstyti yra svarbu . \n To-think is important .
csubj(svarbu, Mąstyti)
csubj(important, To-think)
~~~
