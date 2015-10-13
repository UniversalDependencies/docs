---
layout: relation
title: 'cop'
shortdef: 'copula'
---

 `cop` relation is used with copulative verbs. The main difference between the general UD schema and the Basque annotation follows form the fact that English *to be* corresponds to several  in Basque verbs.
 
 More precisely, izan *to be* egon *to be* ukan *to have* geratu *to stay keep* ibili *to be*

1	Bi	bi	NUM	_	_	2	det	_	_
2	zati	zati	NOUN	_	_	7	nsubj	_	_
3	hauek	hauek	DET	_	Case=Abs|Definite=Def|Number=Plur	2	det	_	_
4	markaturik	markatu	VERB	_	Case=Par|Definite=Ind|VerbForm=Part	6	acl	_	_
5	dauden	egon	SCONJ	_	Aspect=Prog|Mood=Ind|Number[abs]=Plur|Person[abs]=3	4	cop	_	_
6	tokietatik	toki	NOUN	_	Animacy=Inan|Case=Abl|Definite=Def|Number=Plur	7	nmod	_	_
7	tolesten	tolestu	VERB	_	Aspect=Imp|VerbForm=Inf	0	root	_	_
8	dira	izan	AUX	_	Mood=Ind|Number[abs]=Plur|Person[abs]=3	7	aux	_	_
9	.	.	PUNCT	_	_	7	punct	_	_
