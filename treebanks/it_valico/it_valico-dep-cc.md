---
layout: base
title:  'Statistics of cc in UD_Italian-Valico'
udver: '2'
---

## Treebank Statistics: UD_Italian-Valico: Relations: `cc`

This relation is universal.

273 nodes (4%) are attached to their parents as `cc`.

273 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.89010989010989.

The following 8 pairs of parts of speech are connected with `cc`: <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-CCONJ.html">CCONJ</a></tt> (200; 73% instances), <tt><a href="it_valico-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_valico-pos-CCONJ.html">CCONJ</a></tt> (37; 14% instances), <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-CCONJ.html">CCONJ</a></tt> (27; 10% instances), <tt><a href="it_valico-pos-ADV.html">ADV</a></tt>-<tt><a href="it_valico-pos-CCONJ.html">CCONJ</a></tt> (3; 1% instances), <tt><a href="it_valico-pos-PRON.html">PRON</a></tt>-<tt><a href="it_valico-pos-CCONJ.html">CCONJ</a></tt> (3; 1% instances), <tt><a href="it_valico-pos-DET.html">DET</a></tt>-<tt><a href="it_valico-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="it_valico-pos-NUM.html">NUM</a></tt>-<tt><a href="it_valico-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="it_valico-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_valico-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc	color:blue
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


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 cc	color:blue
1	ma	ma	CCONJ	CC	_	7	cc	_	_
2	a	a	ADP	E	_	4	case	_	_
3	questo	questo	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	4	det	_	_
4	momento	momento	NOUN	S	Gender=Masc|Number=Sing	7	obl	_	_
5	non	non	ADV	BN	PronType=Neg	7	advmod	_	_
6	ero	essere	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	7	cop	_	_
7	sicuro	sicuro	ADJ	A	Gender=Masc|Number=Sing	0	root	_	_
8	di	di	ADP	E	_	10	case	_	_
9	questo	questo	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	10	det	_	_
10	fatto	fatto	NOUN	S	Gender=Masc|Number=Sing	7	obl	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	7	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cc	color:blue
1	Stanco	stanco	ADJ	A	_	0	root	_	_
2	e	e	CCONJ	CC	_	4	cc	_	_
3	senza	senza	ADP	E	_	4	case	_	_
4	giornale	giornale	NOUN	S	_	1	conj	_	SpaceAfter=No
5	.﻿	.﻿	PUNCT	FS	_	1	punct	_	SpacesAfter=\n

~~~


