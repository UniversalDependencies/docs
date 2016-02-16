---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
---


`acl` stands for finite and non-finite clauses that modify a nominal.  The `acl` relation 
contrasts with the [advcl]() relation, which is used for adverbial clauses
that modify a predicate. The head of the `acl` relation is the noun
that is modified, and the dependent is the head of the clause that
modifies the noun.

~~~ sdparse
мужчина , о котором я говорил \n man , about whom I-have talked
acl(мужчина, говорил)
acl(man, talked)
~~~

This relation is also used for optional depictives.
The adjective is taken to modify the nominal of which it provides a secondary predication.
See [u-dep/xcomp]() for further discussion of resultatives and depictives.

~~~ sdparse
Алена вошла в комнату грустой . \n Alena entered to room sad .
acl(Алена, грустной)
acl(Alena, sad)
~~~

~~~ sdparse
Он нарисовал свою жену обнаженной . \n He painted his wife naked .
acl(жену, обнаженной)
acl(wife, naked)
~~~
