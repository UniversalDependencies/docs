---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
udver: '2'
---

A clausal complement of a verb or adjective is a dependent clause which is a core argument. That is, it functions like an object of the verb, or adjective.
A clausal complement of a verb or adjective is a dependent clause where the subject is not determined by obligatory control, either because the clause has its own overt subject or because the subject is arbitrary or determined anaphorically. (This contrasts with the _xcomp_ relation, which is used for clausal complements with obligatory control.)

~~~ conllu
# sent_id = VV-FRE#055
# text = MUJER PERSONA PEDIR BOTELLA AGUA LLENAR(MP)
# gloss_en = WOMAN PERSON ASK-FOR BOTTLE WATER FILL(PH)
# text_es = La mujer pide que se llene la botella de agua
# text_en = The woman asks them to fill the water bottle
1	MUJER	_	NOUN	N.P	_	3	_	_	Gloss=WOMAN
2	PERSONA	_	NOUN	N.Loc	_	1	appos	_	Gloss=PERSON
3	PEDIR	_	VERB	V.Dir	_	0	root	_	Gloss=ASK-FOR
4	BOTELLA	_	NOUN	N	_	6	obj	_	Gloss=BOTTLE
5	AGUA	_	NOUN	N	_	6	obj	_	Gloss=WATER
6	LLENAR(MP)	_	VERB	V	_	3	ccomp	_	Gloss=FILL(PH)
~~~
