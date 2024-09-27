---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
udver: '2'
---

The dependency type nsubj marks nominal subjects of a clause. 
Subjects are direct dependents of the main predicate of the clause, which may be a verb, noun or adjective.
With two-participant verbs of action, it is typically associated with the agent.

~~~ conllu
# sent_id = PS-JRV#051
# text = CASUAL MUJER OTRO BICICLETA
# gloss_en = CASUAL WOMAN OTHER  BIKE
# text_es = Casualmente, pasaba por allí en bicicleta una niña
# text_en = A girl happened to also pass by on a bike
1	CASUAL	_	ADV	Adv	_	4	advmod	_	Gloss=CASUAL
2	MUJER	_	NOUN	N.P	_	4	nsubj	_	Gloss=WOMAN
3	OTRO	_	DET	Det	_	2	det	_	Gloss=OTHER
4	BICICLETA	_	VERB	V	_	0	root	_	Gloss=BIKE
~~~
