---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
---

`acl` is used for finite and non-finite clauses that modify a noun, including cases of secondary predication. 
Note that in French relative clauses get assigned a specific relation [acl:relcl](), a subtype of `acl`.

Non-relative clausal dependents of nouns are limited to complement clauses with a subset of nouns like *fait (fact)*.  We analyze them as `acl` (parallel to the analysis of this class as "content clauses" in Huddleston and Pullum 2002).

~~~ sdparse
Comment est-ce que cela peut être réconcilié avec le fait que beaucoup de mariages cassent ? \n How can that be reconciled with the fact that many marriages break up?
acl(fait, cassent) 
~~~

~~~ sdparse
Une photo de ce qui s'est passé \n A picture of what happens
acl(photo, passé)
~~~

~~~ sdparse
Un culte nourri d'influences d'anciens mythes \n A cult nourrished with influences from old myths
acl(culte, nourri)
~~~


The `acl` relation is also used for secondary predicates modifying a nominal:

~~~ sdparse
Il quitta la pièce pleurant . \n He left the room crying .
acl(Il, pleurant)
~~~
