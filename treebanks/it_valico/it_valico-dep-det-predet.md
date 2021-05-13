---
layout: base
title:  'Statistics of det:predet in UD_Italian-Valico'
udver: '2'
---

## Treebank Statistics: UD_Italian-Valico: Relations: `det:predet`

This relation is a language-specific subtype of <tt><a href="it_valico-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="it_valico-dep-det-poss.html">det:poss</a></tt>.

7 nodes (0%) are attached to their parents as `det:predet`.

7 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.28571428571429.

The following 2 pairs of parts of speech are connected with `det:predet`: <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-DET.html">DET</a></tt> (6; 86% instances), <tt><a href="it_valico-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_valico-pos-DET.html">DET</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 det:predet	color:blue
1	Comunque	comunque	ADV	B	_	6	advmod	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	come	come	ADV	B	_	6	advmod	_	_
4	tutta	tutto	DET	T	Gender=Fem|Number=Sing|PronType=Tot	6	det:predet	_	_
5	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	gente	gente	NOUN	S	Gender=Fem|Number=Sing	10	obl	_	_
7	solitaria	solitario	ADJ	A	Gender=Fem|Number=Sing	6	amod	_	SpaceAfter=No
8	,	,	PUNCT	FF	_	6	punct	_	_
9	Marco	Marco	PROPN	SP	_	10	nsubj	_	_
10	aveva	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
11	un	un	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	sogno	sogno	NOUN	S	Gender=Masc|Number=Sing	10	obj	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	10	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 det:predet	color:blue
1	Sono	essere	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	2	aux	_	_
2	ritornata	ritornare	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
3	di	di	ADP	E	_	4	case	_	_
4	vacanza	vacanza	NOUN	S	Gender=Fem|Number=Sing	2	obl	_	_
5	e	e	CCONJ	CC	_	7	cc	_	_
6	ho	avere	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	traversato	traversare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	conj	_	_
8	tutta	tutto	DET	T	Gender=Fem|Number=Sing|PronType=Tot	10	det:predet	_	_
9	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	Francia	Francia	PROPN	SP	_	7	obj	_	SpaceAfter=No
11	,	,	PUNCT	FF	_	14	punct	_	_
12	cioè	cioè	CCONJ	CC	_	14	cc	_	_
13	95	95	NUM	N	NumType=Card	14	nummod	_	_
14	kilometri	chilometro	NOUN	S	Gender=Masc|Number=Plur	10	appos	_	_
15	con	con	ADP	E	_	17	case	_	_
16	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	_
17	macchina	macchina	NOUN	S	Gender=Fem|Number=Sing	14	nmod	_	_
18	durante	durante	ADP	E	_	20	case	_	_
19	9	9	NUM	N	NumType=Card	20	nummod	_	_
20	h	h	NOUN	S	Gender=Masc	14	nmod	_	_
21	30	30	NUM	N	NumType=Card	20	nummod	_	_
22	.	.	PUNCT	FS	_	2	punct	_	SpacesAfter=\n

~~~


