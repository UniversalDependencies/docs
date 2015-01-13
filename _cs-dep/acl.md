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
muž , o kterém jsem mluvil \n man , about whom I-have talked
acl(muž, mluvil)
acl(man, talked)
~~~

This relation is also used for optional depictives.
The adjective is taken to modify the nominal of which it provides a secondary predication.
See [u-dep/xcomp]() for further discussion of resultatives and depictives.

~~~ sdparse
Alena vstoupila do místnosti smutná . \n Alena entered to room sad .
acl(Alena-1, smutná)
acl(Alena-8, sad)
~~~

~~~ sdparse
Namaloval svou ženu nahou . \n He-painted his wife naked .
acl(ženu, nahou)
acl(wife, naked)
~~~

Czech also allows finite clausal complements for nouns with 
a subset of nouns like *fact* or *report*.
These look roughly like relative clauses, but do not have any omitted role in the dependent clause.
These are also analyzed as `acl`.

~~~ sdparse
Příčinou není fakt , že by kina navštívilo víc diváků . \n Cause is-not the-fact , that would cinemas visit more filmgoers .
acl(fakt, navštívilo)
acl(the-fact, visit)
~~~
