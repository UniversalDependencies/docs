---
layout: relation
title: 'case'
shortdef: 'case marking'
udver: '2'
---

The case relation is used for any case-marking element which is treated as a separate syntactic word. Case-marking elements are treated as dependents of the noun they attach to or introduce.

~~~ conllu
# timestamp = 1718189896283
# sent_id = PS-JRV#003
# text = CLIMA BUENO IGUAL VERANO ES.ASÍ
# gloss_en = CLIMATE GOOD  EQUAL SUMMER SPECIFIC
# text_es = Hacía muy buen tiempo, como de verano.
# text_en = The weather was hot like in the summer.
1	CLIMA	_	NOUN	N	_	2	nsubj	_	Gloss=CLIMATE
2	BUENO	_	ADJ	Adj	_	0	root	_	Gloss=GOOD
3	IGUAL	_	ADP	Prep	_	4	case	_	Gloss=EQUAL
4	VERANO	_	NOUN	N.P	_	2	obl	_	Gloss=SUMMER
5	ES.ASÍ	_	ADV	Adv	_	2	advmod	_	Gloss=SPECIFIC
~~~
