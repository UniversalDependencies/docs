---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
---
`acl` is used for finite and non-finite clauses that modify a nominal (either a noun or a pronoun). The head of the `acl` relation is the noun/pronoun that is modified, and the dependent is the head of the clause that modifies the noun/pronoun.

`acl` is used in the following cases:

* participial modifiers of nouns 

~~~ sdparse
Commossa , Fiona May ha parlato
acl(Fiona, Commossa)
nsubj(parlato, Fiona)
name(Fiona, May)
aux(parlato, ha)
~~~

- relative clauses, also including free relatives. Note that in Italian relative clauses are assigned a specific relation `acl:relcl`, which is a subtype of `acl`
- finite clausal complements of nouns like fatto _fact_, considerazione _consideration_, bisogno _need_
- infinitival modifiers of nouns
