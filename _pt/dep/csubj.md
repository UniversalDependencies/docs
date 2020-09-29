---
layout: relation
title: 'csubj'
shortdef: 'clausal subject'
---

A clausal subject is a clausal syntactic subject of a clause, i.e.,
the subject is itself a clause.

~~~ sdparse
Ir a uma feira livre serve de aula para os principiantes.
csubj(serve, Ir)
~~~

The governor of this relation might not always be a verb: when the
verb is a copular verb, the root of the clause is the complement of
the copular verb. The dependent is the main lexical verb or other
predicate of the subject clause.

~~~ sdparse
É um equívoco reduzir a liberalização comercial ao neoliberalismo.
csubj(equívoco, reduzir)
~~~

~~~ sdparse
é necessário alertar toda a sociedade.
csubj(necessário, alertar)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:15 CEST 2020 -->
