---
layout: base
title:  'Statistics of amod in UD_Italian-Valico'
udver: '2'
---

## Treebank Statistics: UD_Italian-Valico: Relations: `amod`

This relation is universal.

179 nodes (3%) are attached to their parents as `amod`.

126 instances of `amod` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.12290502793296.

The following 7 pairs of parts of speech are connected with `amod`: <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-ADJ.html">ADJ</a></tt> (169; 94% instances), <tt><a href="it_valico-pos-PRON.html">PRON</a></tt>-<tt><a href="it_valico-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="it_valico-pos-DET.html">DET</a></tt>-<tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="it_valico-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_valico-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="it_valico-pos-NUM.html">NUM</a></tt>-<tt><a href="it_valico-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="it_valico-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_valico-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 amod	color:blue
1	Quest'	questo	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	2	det	_	SpaceAfter=No
2	uomo	uomo	NOUN	S	Gender=Masc|Number=Sing	6	nsubj	_	_
3	era	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	cop	_	_
4	un	un	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
5	vero	vero	ADJ	A	Gender=Masc|Number=Sing	6	amod	_	_
6	gentleman	gentleman	NOUN	S	Gender=Masc	0	root	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	6	punct	_	_
8	molto	molto	ADV	B	_	9	advmod	_	_
9	simpatico	simpatico	ADJ	A	Gender=Masc|Number=Sing	6	amod	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	6	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 amod	color:blue
1	Ieri	ieri	ADV	B	_	6	advmod	_	_
2	a	a	ADP	E	_	4	case	_	_
3	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	parco	parco	NOUN	S	Gender=Masc|Number=Sing	6	obl	_	_
5	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	successo	succedere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
7	qualcosa	qualcosa	PRON	PI	PronType=Ind	6	nsubj	_	_
8	strano	strano	ADJ	A	Gender=Masc|Number=Sing	7	amod	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	6	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 31 amod	color:blue
1	ma	ma	CCONJ	CC	_	4	cc	_	_
2	a	a	ADP	E	_	3	case	_	_
3	Giulio	Giulio	PROPN	SP	_	4	obl	_	_
4	piace	piacere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	perdere	perdere	VERB	V	VerbForm=Inf	4	csubj	_	_
6	tempo	tempo	NOUN	S	Gender=Masc|Number=Sing	5	obj	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	4	punct	_	_
8	queste	questo	PRON	PD	Gender=Fem|Number=Plur|PronType=Dem	11	nsubj	_	_
9	sono	essere	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
10	delle	delle	DET	DI	Gender=Fem|Number=Plur|PronType=Ind	11	det	_	_
11	cose	cosa	NOUN	S	Gender=Fem|Number=Plur	4	parataxis	_	_
12	che	che	PRON	PR	PronType=Rel	14	nsubj	_	_
13	mi	mi	PRON	PC	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	14	iobj	_	_
14	fanno	fare	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	acl:relcl	_	_
15	arraviare	arraviare	VERB	V	VerbForm=Inf	14	xcomp	_	_
16	moltissimo	molto	ADV	B	Degree=Abs	15	advmod	_	SpaceAfter=No
17	,	,	PUNCT	FF	_	19	punct	_	_
18	insomma	insomma	ADV	B	_	19	advmod	_	_
19	scusate	scusare	VERB	V	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	11	conj	_	_
20	mi	mi	PRON	PC	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	19	iobj	_	_
21	i	i	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	23	det	_	_
22	bravi	bravo	ADJ	A	Gender=Masc|Number=Plur	23	amod	_	_
23	lettori	lettore	NOUN	S	Gender=Masc|Number=Plur	19	vocative	_	_
24	abbiamo	avere	AUX	VA	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	25	aux	_	_
25	passato	passare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	19	parataxis	_	_
26	di	di	ADP	E	_	27	case	_	_
27	lo	lo	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	25	obl	_	_
28	semplice	semplice	NOUN	S	Number=Sing	27	amod	_	_
29	a	a	ADP	E	_	30	case	_	_
30	lo	lo	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	25	obl	_	_
31	complicato	complicato	NOUN	S	Gender=Masc|Number=Sing	30	amod	_	SpaceAfter=No
32	.	.	PUNCT	FS	_	4	punct	_	SpacesAfter=\n

~~~


