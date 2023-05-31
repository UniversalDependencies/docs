---
layout: base
title:  'Statistics of det:poss in UD_Italian-Valico'
udver: '2'
---

## Treebank Statistics: UD_Italian-Valico: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="it_valico-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="it_valico-dep-det-predet.html">det:predet</a></tt>.

103 nodes (2%) are attached to their parents as `det:poss`.

103 instances of `det:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.05825242718447.

The following 1 pairs of parts of speech are connected with `det:poss`: <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-DET.html">DET</a></tt> (103; 100% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 det:poss	color:blue
1	e	e	CCONJ	CC	_	2	cc	_	_
2	piccia	picciare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	l'	lo	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	SpaceAfter=No
4	uomo	uomo	NOUN	S	Gender=Masc|Number=Sing	2	obj	_	_
5	che	che	PRON	PR	PronType=Rel	6	nsubj	_	_
6	aveva	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	acl:relcl	_	_
7	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	rabbia	rabbia	NOUN	S	Gender=Fem|Number=Sing	6	obj	_	SpaceAfter=No
9	,	,	PUNCT	FF	_	2	punct	_	_
10	con	con	ADP	E	_	13	case	_	_
11	i	i	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	13	det	_	_
12	suoi	suo	DET	AP	Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	13	det:poss	_	_
13	pugni	pugno	NOUN	S	Gender=Masc|Number=Plur	2	obl	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	2	punct	_	SpacesAfter=\n

~~~


