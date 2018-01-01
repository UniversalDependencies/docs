---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
udver: '2'
---

`acl` stands for finite and non-finite clauses that modify a nominal.  The `acl` relation 
contrasts with the [advcl]() relation, which is used for adverbial clauses
that modify a predicate. The head of the `acl` relation is the noun
that is modified, and the dependent is the head of the clause that
modifies the noun.

~~~ sdparse
մարդը , որի մասին պատմում էի \n the-man , that I-was talking about
acl(մարդը, պատմում)
acl(the-man, talking)
~~~

This relation is also used for optional depictives.
The adjective is taken to modify the nominal of which it provides a secondary predication.
See [u-dep/xcomp]() for further discussion.

~~~ sdparse
Նա մոլոր նայում էր ընկերոջը : \n He was looking at-his-frend errant .
acl(Նա, մոլոր)
acl(He, errant)
~~~

~~~ sdparse
Մերկ նկարեց կնոջը ։ \n He-painted his-wife naked .
acl(կնոջը, Մերկ)
acl(his-wife, naked)
~~~
