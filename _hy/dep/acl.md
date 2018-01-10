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

Note that in Armenian relative clauses get assigned a specific relation [acl:relcl](), a subtype of `acl`.

~~~ sdparse
քաղաքը, որ կոչվում է Պոլիս \n the-city , that is called Polis
acl(քաղաքը, կոչվում)
acl(the-city, called)
~~~

This relation is also used for optional depictives.
The adjective is taken to modify the nominal of which it provides a secondary predication.
See [u-dep/xcomp]() for further discussion.

~~~ sdparse
Նա մոլոր մտավ սենյակ : \n He entered the room errant .
acl(Նա, մոլոր)
acl(He, errant)
~~~

~~~ sdparse
Գունատ նկարեց կնոջը ։ \n He-painted his-wife pale .
acl(կնոջը, Գունատ)
acl(his-wife, pale)
~~~
