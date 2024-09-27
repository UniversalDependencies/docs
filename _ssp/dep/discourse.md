---
layout: relation
title: 'discourse'
shortdef: 'discourse element'
udver: '2'
---

This is used for interjections and other discourse particles and elements, which are not clearly linked to the structure of the sentence except in an expressive way. In LSE discourse some uncodified gestures (G) can perform this function.

~~~ conllu
# sent_id = HC-JRV#013
# text = QUERER TRES CERDO COMER TODO QUERER G(B):vale
# gloss_en = WANT THREE PIG EAT ALL WANT G
# text_es = quiere comer a los tres cerdos, a todos quiere (comer).
# text_en = It wants to eat the three pigs, all three of them.
1	QUERER	_	VERB	V	_	0	root	_	Gloss=WANT
2	TRES	_	NUM	Num	_	3	nummod	_	Gloss=THREE
3	CERDO	_	NOUN	N	_	4	obj	_	Gloss=PIG
4	COMER	_	VERB	V	_	1	ccomp	_	Gloss=EAT
5	TODO	_	PRON	Pro	_	3	nmod	_	Gloss=ALL
6	QUERER	_	VERB	V	_	1	compound:vsc	_	Gloss=WANT
7	G(B):vale	_	X	MD	_	1	discourse	_	Gloss=G
~~~
