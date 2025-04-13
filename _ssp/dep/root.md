---
layout: relation
title: 'root'
shortdef: 'root'
udver: '2'
---

The `root` grammatical relation points to the root of the sentence. 
There should be just one node with the root dependency relation in every tree.

In most trees, the root node is pos_tagged as VERB, but there are also ADJs and NOUNs without copula:
~~~ conllu
1	SUELO	_	NOUN	N	_	2	nsubj	_	Gloss=GROUND
2	SECO	_	ADJ	Adj	_	0	root	_	Gloss=DRY
~~~
~~~ conllu
# sent_id = HC-JRV#001
# text = TÍTULO TRES CERDO OTRO UNO LOBO
# gloss_en = TITLE THREE PIG OTHER  ONE WOLF
# text_es = "Los tres cerdos y el lobo".
# text_en = "The three pigs and the wolf".
1	TÍTULO	_	NOUN	N	_	3	nsubj	_	Gloss=TITLE
2	TRES	_	NUM	Num	_	3	nummod	_	Gloss=THREE
3	CERDO	_	NOUN	N	_	0	root	_	Gloss=PIG
4	OTRO	_	CCONJ	Conj	_	6	cc	_	Gloss=OTHER
5	UNO	_	NUM	Num	_	6	nummod	_	Gloss=ONE
6	LOBO	_	NOUN	N	_	3	conj	_	Gloss=WOLF
~~~
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:11:28 CET -->
