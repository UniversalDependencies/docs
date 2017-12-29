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
Մարդը, որի մասին խոսում էի ։ \n The-man , who about I was talking .
acl(Մարդը, խոսում)
acl(man, talking)
~~~

This relation is also used for optional depictives.
The adjective is taken to modify the nominal of which it provides a secondary predication.
See [u-dep/xcomp]() for further discussion.

~~~ sdparse
Անին մտավ սենյակ տխուր. \n Ani entered to room sad .
acl(Անին, տխուր)
acl(Ani, sad)
~~~

~~~ sdparse
Նա նկարեց իր կնոջը մերկ ։ \n He-painted his wife naked .
acl(կնոջը, մերկ)
acl(wife, naked)
~~~
