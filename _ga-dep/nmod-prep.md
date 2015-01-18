---
layout: relation
title:  'nmod:prep'
shortdef : 'prepositional pronouns'
---

16 of the most common Irish simple prepositions can be inflected to mark pronominal objects. These are referred to as pronominal prepositions or prepositional pronouns. In the UD scheme, we regard these as playing nominal modifier roles instead of prepositional modifier roles. We introduce the langauge-specific label `nmod:prep' so as not to lose information regarding the presence of the preposition.

Examples:
 * _agam_ "at me"
 * _leis_ "with him"
 * _uainn_ "from us"
 
~~~ sdparse
D'inis mé di \n I told her
nmod:prep(D'inis, di)
~~~

~~~ sdparse
Is dóigh leis go bhfuil páirtíocht acu lena chéile \n He believes that they have a partnership together
nmod:prep(dóigh, leis)
nmod:prep(bhfuil, acu)
~~~

~~~ conllu
2	Níl	bí	VERB	VERB	_	0	root	_	_
3	fhios	fios	NOUN	NOUN	_	2	nsubj	_	_
4	agam	ag	ADP	ADP	_	2	nmod:prep	_	_
~~~
