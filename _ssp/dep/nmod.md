---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for nominal modifiers of nouns. 

~~~ conllu
# sent_id = VV-FRE#040
# text = HOMBRE PERSONA(2Msu) MANUAL CONSTRUIR CASA MADERA
# gloss_en = MAN PERSON(2Hsuc) MANUAL BUILD HOME WOOD
# text_es = Los hombres construyen casas de madera
# text_en = The men made wooden houses
1	HOMBRE	_	NOUN	N.P	_	4	nsubj	_	Gloss=MAN
2	PERSONA(2Msu)	_	NOUN	N.Loc	_	1	appos	_	Gloss=PERSON(2Hsuc)
3	MANUAL	_	ADV	adv	_	4	advmod	_	Gloss=MANUAL
4	CONSTRUIR	_	VERB	V	_	0	root	_	Gloss=BUILD
5	CASA	_	NOUN	N	_	4	obj	_	Gloss=HOME
6	MADERA	_	NOUN	N	_	5	nmod	_	Gloss=WOOD
~~~
