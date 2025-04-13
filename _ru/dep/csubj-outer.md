---
layout: relation
title: 'csubj:outer'
shortdef: 'outer clause clausal subject'
udver: '2'
---

This relation specifies a clausal subject of a copular clause whose predicate is itself a clause, 
to signal that it is not the subject of the nested clause.
See discussion of [Predicate Clauses](../overview/complex-syntax.html#predicate-clauses).

~~~ sdparse
-ROOT- Пожаловаться на свою горькую судьбу - это я умею . \n To complain about my bitter fate ( is what ) I know how to do .
root(-ROOT-, умею)
csubj:outer(умею, Пожаловаться)
obl(Пожаловаться, судьбу)
expl(умею, это)
nsubj(умею, я)
root(-ROOT-, know)
csubj:outer(know, complain)
obl(complain, fate)
cop(know, is)
nsubj(know, I)
~~~

The nominal counterpart of this relation is [nsubj:outer]().

The `:outer` subtype is *not* intended for most clausal subjects of copular clauses—only those where the predicate is itself a clause. 
Plain [csubj]() (or another subtype) will be appropriate if the copular clause predicate is a nominal, adjective, etc.:

~~~ sdparse
Очень важно , чтобы ваши ученики уважали вас . \n It is very important that your students respect you .
csubj(важно, уважали)
nsubj(уважали, ученики)
expl(important, It)
csubj(important, respect)
nsubj(respect, students)
~~~
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:44 CET -->
