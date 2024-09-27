---
layout: relation
title: 'iobj'
shortdef: 'indirect object'
udver: '2'
---

An indirect object is a nominal which is the second object of the verb, often associated with the (animate) recipient/beneficiary object.

~~~ conllu
# sent_id = PS-JRV#104
# text = HOMBRE TRES LO-DE-ANTES COMPENSACIÓN GRACIAS SOMBRERO TRES PERA cl.m(5d):dar-fruta cl.m(5d):dar-fruta
# gloss_en = MAN THREE THE-PREVIOUS COMPENSATION THANKS HAT THREE PEAR cl cl
# text_es = En agradecimiento a estos tres jóvenes por haber recuperado su sombrero, el niño le entregó tres peras.
# text_en = The boy gave him three pears in appreciation for having recovered his hat.
1	HOMBRE	_	NOUN	N.P	_	9	iobj	_	Gloss=MAN
2	TRES	_	NUM	Num	_	1	nummod	_	Gloss=THREE
3	LO-DE-ANTES	_	PRON	Adv	_	1	nmod	_	Gloss=THE-PREVIOUS
4	COMPENSACIÓN	_	NOUN	V	_	9	obl	_	Gloss=COMPENSATION
5	GRACIAS	_	NOUN	V	_	4	appos	_	Gloss=THANKS
6	SOMBRERO	_	NOUN	N	_	4	nmod	_	Gloss=HAT
7	TRES	_	NUM	Num	_	8	nummod	_	Gloss=THREE
8	PERA	_	NOUN	N.P	_	9	obj	_	Gloss=PEAR
9	cl.m(5d):dar-fruta	_	VERB	V.D	_	0	root	_	Gloss=cl
10	cl.m(5d):dar-fruta	_	VERB	V.D	_	9	compound:redup	_	Gloss=cl
~~~
