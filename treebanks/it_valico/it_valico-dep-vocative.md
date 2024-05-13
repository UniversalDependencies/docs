---
layout: base
title:  'Statistics of vocative in UD_Italian-Valico'
udver: '2'
---

## Treebank Statistics: UD_Italian-Valico: Relations: `vocative`

This relation is universal.

5 nodes (0%) are attached to their parents as `vocative`.

3 instances of `vocative` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.2.

The following 4 pairs of parts of speech are connected with `vocative`: <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt> (2; 40% instances), <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-ADJ.html">ADJ</a></tt> (1; 20% instances), <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-PROPN.html">PROPN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 23 vocative	color:blue
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


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 vocative	color:blue
1	Quello	quello	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	6	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
4	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
5	mia	mio	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	6	det:poss	_	_
6	amante	amante	NOUN	S	Number=Sing	11	parataxis	_	_
7	stupido	stupido	NOUN	S	Gender=Masc|Number=Sing	6	vocative	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	6	punct	_	SpaceAfter=No
9	»	»	PUNCT	FB	_	6	punct	_	_
10	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux	_	_
11	detto	dire	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	11	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 vocative	color:blue
1	«	«	PUNCT	FB	_	5	punct	_	SpaceAfter=No
2	Carissimo	caro	ADJ	A	Degree=Abs|Gender=Masc|Number=Sing	5	vocative	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	5	punct	_	_
4	ti	ti	PRON	PC	Clitic=Yes|Number=Sing|Person=2|PronType=Prs	5	obj	_	_
5	voglio	volere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
6	bene	bene	ADV	B	_	5	advmod	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	9	punct	_	_
8	ti	ti	PRON	PC	Clitic=Yes|Number=Sing|Person=2|PronType=Prs	9	obj	_	_
9	amo	amare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	conj	_	SpaceAfter=No
10	...	...	PUNCT	FS	_	5	punct	_	SpaceAfter=No
11	»	»	PUNCT	FB	_	5	punct	_	SpacesAfter=\n

~~~


