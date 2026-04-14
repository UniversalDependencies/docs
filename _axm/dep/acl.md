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
հայնց մարդիք լինին յայլազգեացն , որ այն շմորոյն պատճառք լինին լել \n there are such men among the foreigners who caused that tumult
acl(մարդիք, լել)
acl(men, caused)
~~~

This relation is not used for optional depictives.
See [xcomp]() for further discussion.

<!-- Interlanguage links updated St 12. listopadu 2025, 09:20:56 CET -->
