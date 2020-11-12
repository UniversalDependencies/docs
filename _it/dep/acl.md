---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
udver: '2'
---
`acl` is used for dependent finite and non-finite clauses that modify a nominal (either a noun or a pronoun). The head of the `acl` relation is the noun/pronoun that is modified, and the dependent is the head of the clause that modifies the noun/pronoun: it can be the verb itself or an adjective part of a verbal predicate. 

`acl` is used in the following cases:

* participial modifiers of nouns 

~~~ sdparse
Commossa/VERB[Tense:Past|VerbForm=Part] , Fiona/PROPN May/PROPN ha/AUX parlato/VERB
acl(Fiona, Commossa)
nsubj(parlato, Fiona)
name(Fiona, May)
aux(parlato, ha)
~~~
~~~ sdparse
Due persone/NOUN armate/VERB[Tense:Past|VerbForm=Part] di pistola
acl(persone, armate)
~~~
~~~ sdparse
Gli altri/PRON indicati/VERB[Tense:Past|VerbForm=Part] dalla legge . 
acl(altri, indicati)
~~~

* finite and non finite clausal complements of nouns like *fatto* (fact), *volta* (time), *bisogno* (need), *modo* (way).

~~~ sdparse
il fatto che Gianni faccia/VERB[VerbForm=Fin] l' attore
acl(fatto, faccia)
~~~
~~~ sdparse
Ha bisogno di vedere/VERB[VerbForm=Inf] cambiamenti concreti subito . 
acl(bisogno, vedere)
~~~
~~~ sdparse
Ogni volta che fai/VERB[VerbForm=Fin] la doccia . 
acl(volta, fai)
~~~
~~~ sdparse
in modo che la loro applicazione porti/VERB[VerbForm=Fin] all' eliminazione della disuguaglianza . 
acl(modo, porti)
~~~

* infinitival modifiers of nouns or pronouns

~~~ sdparse
non è il caso/NOUN di pensare/VERB[VerbForm=Inf] 
acl(caso, pensare)
~~~
~~~ sdparse
quello/PRON di agevolare/VERB[VerbForm=Inf]  l' accesso
acl(quello, agevolare)
~~~

* cases of secondary predication for non-core argument of a clausal predicate. For more on that and secondary predication of core arguments see the [xcomp]() relation.

~~~ sdparse
Sono stati ritrovati sani e salvi cinque americani .
acl(ritrovati, sani)
cc(sani, e)
conj(sani, salvi)
~~~

* relative clauses. See [acl:relcl]().

In Italian relative clauses get assigned a specific relation [acl:relcl](), a specification of <code>acl</code>. Also note that the <code>acl</code> relation contrasts with the [advcl]() relation, which is used for adverbial clauses that modify a predicate.
<!-- Interlanguage links updated Čt lis 12 09:43:09 CET 2020 -->
