---
layout: relation
title: 'cop'
shortdef: 'copula'
udver: '2'
---

A copula is the relation between the complement of a copular verb and the copular verb `a fi` (only). (We normally take a copula as a dependent of its complement.)

~~~ sdparse
Maria este fericită . \n Maria is happy .
cop(fericită, este)
~~~

All other copula verbs are heads of clauses and their complements are in `xcomp` relation to them:

~~~ sdparse
Maria a devenit designer . \n Mary has become designer .
xcomp(devenit, designer)
~~~

When the copula verb has auxiliaries, they are also dependents of the lexical predicate:

~~~ sdparse
Maria va fi campioană . \n Mary will be champion .
cop(campioană, fi)
aux(campioană, va)
~~~

When the complement of the copula verb `a fi` is a clause, the copula is the head, and the subordinate clause is in `ccomp` relation with it:

~~~ sdparse
ROOT Noi suntem cum ne știi . \n We are how us know-you .
root(ROOT, suntem)
ccomp(suntem, știi)
~~~
<!-- Interlanguage links updated St lis 3 20:58:47 CET 2021 -->
