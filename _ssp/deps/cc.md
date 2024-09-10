---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
udver: '2'
---

A coordinating conjunction relation holds between the head conjunct of a coordinate structure and any of the coordinating conjunction involved in the structure. From v2, coordinating conjunctions are attached to the immediately following conjunct.

~~~ conllu
# sent_id = HC-JRV#001
# text = TÍTULO TRES CERDO OTRO UNO LOBO
# gloss_en = TITLE THREE PIG OTHER  ONE WOLF
# text_es = "Los tres cerdos y el lobo".
# text_en = "The three pigs and the wolf".
# timestamp = 1718008286917.125
1	TÍTULO	_	NOUN	N	_	3	nsubj	_	Gloss=TITLE
2	TRES	_	NUM	Num	_	3	nummod	_	Gloss=THREE
3	CERDO	_	NOUN	N	_	0	root	_	Gloss=PIG
4	OTRO	_	CCONJ	Conj	_	6	cc	_	Gloss=OTHER
5	UNO	_	NUM	Num	_	6	nummod	_	Gloss=ONE
6	LOBO	_	NOUN	N	_	3	conj	_	Gloss=WOLF
~~~
