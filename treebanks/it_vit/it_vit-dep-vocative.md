---
layout: base
title:  'Statistics of vocative in UD_Italian-VIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-VIT: Relations: `vocative`

This relation is universal.

14 nodes (0%) are attached to their parents as `vocative`.

12 instances of `vocative` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.28571428571429.

The following 4 pairs of parts of speech are connected with `vocative`: <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt> (9; 64% instances), <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt> (3; 21% instances), <tt><a href="it_vit-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 vocative	color:blue
1	"	"	PUNCT	FC	_	6	punct	_	SpaceAfter=No
2	Stefano	Stefano	PROPN	SP	_	6	vocative	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	che	che	DET	DQ	PronType=Int	5	det	_	_
5	cosa	cosa	NOUN	S	Gender=Fem|Number=Sing	6	obj	_	_
6	fai	fare	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
7	lì	lì	ADV	B	_	6	advmod	_	_
8	impalato	impalato	ADJ	A	Gender=Masc|Number=Sing	6	xcomp	_	SpaceAfter=No
9	"	"	PUNCT	FB	_	6	punct	_	SpaceAfter=No
10	?	?	PUNCT	FS	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 vocative	color:blue
1	Ministro	ministro	NOUN	S	Gender=Masc|Number=Sing	5	vocative	_	_
2	Salvini	Salvini	PROPN	SP	_	1	nmod	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	1	punct	_	_
4	non	non	ADV	BN	PronType=Neg	5	advmod	_	_
5	crede	credere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	che	che	SCONJ	CS	_	17	mark	_	_
7	comunque	comunque	ADV	A	_	17	advmod	_	_
8	anche	anche	ADV	B	_	13	advmod	_	_
9	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	milione	milione	NOUN	S	_	13	nmod	_	_
11	e	e	CCONJ	CC	_	12	cc	_	_
12	duecentomila	duecentomila	NUM	N	NumType=Card	10	conj	_	_
13	lire	lira	NOUN	S	Gender=Fem|Number=Plur	17	nsubj	_	_
14	siano	essere	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	17	cop	_	_
15	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
16	bel	bello	ADJ	A	Gender=Masc	17	amod	_	_
17	pò	pò	DET	DI	Number=Sing|PronType=Ind	5	ccomp	_	_
18	di	di	ADP	E	_	19	case	_	_
19	quattrini	quattrino	NOUN	S	Gender=Masc|Number=Plur	17	nmod	_	SpaceAfter=No
20	?	?	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 vocative	color:blue
1	"	"	PUNCT	FC	_	2	punct	_	SpaceAfter=No
2	addio	addio	INTJ	I	_	7	discourse	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	pover	povero	ADJ	A	Gender=Masc|Number=Plur	5	amod	_	_
5	uomo	uomo	NOUN	S	Gender=Masc	2	vocative	_	SpaceAfter=No
6	"	"	PUNCT	FB	_	2	punct	_	_
7	rispose	rispondere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
8	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	colombre	colombre	NOUN	S	Gender=Masc|Number=Sing	7	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	7	punct	_	_

~~~


