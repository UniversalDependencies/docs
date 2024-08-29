---
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
udver: '2'
---

An open clausal complement (`xcomp`) of a verb or an adjective is a predicative or clausal complement without its own subject. The reference of the subject is necessarily determined by an argument external to the xcomp (normally by the subject or object of the next higher clause, if there is one). 

~~~ conllu
# sent_id = HR-AFS#010
# text = HOMBRE2 DORMIR QUEDAR
# gloss_en = MAN2 SLEEP TO-STAY
# text_es = El niño está dormido,
# text_en = The boy is asleep
1	HOMBRE2	_	NOUN	N	_	3	nsubj	_	Gloss=MAN2
2	DORMIR	_	VERB	V	_	3	xcomp	_	Gloss=SLEEP
3	QUEDAR	_	VERB	V.Loc	_	0	root	_	Gloss=TO-STAY
~~~
