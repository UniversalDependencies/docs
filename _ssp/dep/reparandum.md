---
layout: relation
title: 'reparandum'
shortdef: 'overridden disfluency'
udver: '2'
---

The `reparandum` relation is used to indicate disfluencies overridden in a speech
repair. The disfluency is the dependent of the repair. 

~~~ conllu
# sent_id = PS-JRV#012
# text = UNO MANZ- PERA2 cl.e(Cc):FRUTA-caer+de-saco
# gloss_en = ONE APPL- PEAR2 cl
# text_es = Una pera cayó rodando por fuera del saco.
# text_en = when a pear fell rolling outside the sack.
1	UNO	_	NUM	Num	_	3	nummod	_	Gloss=ONE
2	MANZ-	_	X	Frag	_	3	reparandum	_	Gloss=APPL-
3	PERA2	_	NOUN	N	_	4	nsubj	_	Gloss=PEAR2
4	cl.e(Cc):FRUTA-caer+de-saco	_	VERB	V.D	_	0	root	_	Gloss=cl
~~~
