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
~~~ sdparse
Due persone armate di pistola
acl(persone, armate)
~~~

* relative clauses, also including free relatives. Note that in Italian relative clauses are assigned a specific relation `acl:relcl`, which is a subtype of `acl`

~~~ sdparse
L' inchiesta che coinvolge Bernard Tapie
acl:relcl(inchiesta, coinvolge)
~~~
~~~ sdparse
La vita , in cui il mutamento avviene
acl:relcl(vita, avviene)
~~~

* finite clausal complements of nouns like fatto _fact_, considerazione _consideration_, bisogno _need_

~~~ sdparse
il fatto che Gianni faccia l' attore
acl(fatto, faccia)
~~~

* infinitival modifiers of nouns

~~~ sdparse
non è il caso di pensare
acl(caso, pensare)
~~~
~~~ sdparse
quello di agevolare l' accesso
acl(quello, agevolare)
~~~
