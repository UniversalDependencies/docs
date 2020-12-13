---
layout: relation
title: 'csubj'
shortdef: 'clausal subject'
udver: '2'
---

A clausal subject is a clausal syntactic subject of a clause, i.e.,
the subject is itself a clause. The governor of this relation might
not always be a verb: when the verb is a copular verb, the root of the
clause is the complement of the copular verb. The dependent is the main lexical verb or other 
predicate of the subject clause.

~~~ sdparse
Забыть Ваню трудно . \n To-forget Vanya , it-is-hard .
csubj(трудно, Забыть)
csubj(it-is-hard, To-forget)
~~~

Note that the `csubj:pass` relation is used for the clausal subject of a passive verb or verb group.

~~~ sdparse
Сколько платить, еще не решено. \t How-much to-pay has not yet been decided .
csubj:pass(решено, платить)
csubj(decided, to-pay)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:22 CET 2020 -->
