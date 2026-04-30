---
layout: relation
title: 'csubj'
shortdef: 'clausal subject'
udver: '2'
---

A clausal subject is a clausal syntactic subject of a clause, i.e., the subject is itself a clause. The governor of this relation might
not always be a verb: when the verb is a copular verb, the root of the clause is the complement of the copular verb. The dependent is
the main lexical verb or other predicate of the subject clause.

For the clausal subject of a passive verb or verb group the subtype [csubj:pass]() is used.

~~~ sdparse
չէ պատեհ այլ մարդ սպաննել \n it is not appropriate to kill another human being
csubj(պատեհ, սպաննել)
csubj(appropriate, to-kill)
~~~

~~~ sdparse
Զընդանելն ըստ թագաւորին կամացն լինի . \n To imprison shall be at the king's pleasure .
csubj(լինի, Զընդանելն)
csubj(shall-be, To-imprison)
~~~


We also analyze the nominal predicates with clausal subjects formed by subordinating conjunction _որ_ similarly.

~~~ sdparse
պատեհ է որ ձենել տայ \n it is appropriate that he has (someone) call out
csubj(պատեհ, ձենել)
csubj(appropriate, call-out)
~~~
<!-- Interlanguage links updated St 12. listopadu 2025, 09:21:39 CET -->
