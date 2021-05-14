---
layout: relation
title:  'acl:cleft'
shortdef : 'dependent clause in cleft sentence'
udver: '2'
---

In cleft sentences, the main clause (which typically comes first) puts a constituent in focus
and the dependent clause takes care of the predication (which is often the topic already known
from context). The dependent clause is attached to the focused constituent in the main clause
via `acl:cleft`.

~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl:cleft	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	3	expl	_	_
2	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	kvinnan	kvinna	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	MID	_	3	punct	_	_
5	som	som	PRON	HP|-|-|-	PronType=Rel	6	nsubj	_	_
6	föder	föda	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:cleft	_	_
7	barn	barn	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	6	obj	_	_
8	till	till	ADP	PP	_	9	case	_	_
9	världen	värld	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	6	obl	_	SpaceAfter=No
10	.	.	PUNCT	MAD	_	3	punct	_	_

~~~

<!-- Interlanguage links updated Pá kvě 14 11:08:44 CEST 2021 -->
