---
layout: base
title:  'Statistics of nummod in UD_Italian-Valico'
udver: '2'
---

## Treebank Statistics: UD_Italian-Valico: Relations: `nummod`

This relation is universal.

12 nodes (0%) are attached to their parents as `nummod`.

11 instances of `nummod` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.08333333333333.

The following 2 pairs of parts of speech are connected with `nummod`: <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-NUM.html">NUM</a></tt> (11; 92% instances), <tt><a href="it_valico-pos-SYM.html">SYM</a></tt>-<tt><a href="it_valico-pos-NUM.html">NUM</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Ho	avere	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	2	aux	_	_
2	seguito	seguire	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
3	loro	loro	PRON	PE	Number=Plur|Person=3|PronType=Prs	2	obj	_	_
4	per	per	ADP	E	_	6	case	_	_
5	due	due	NUM	N	NumType=Card	6	nummod	_	_
6	strade	strada	NOUN	S	Gender=Fem|Number=Plur	2	obl	_	_
7	e	e	CCONJ	CC	_	10	cc	_	_
8	gli	gli	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	obj	_	_
9	ho	avere	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	aux	_	_
10	raggiunto	raggiungere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	conj	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 44	bgColor:blue
# visual-style 44	fgColor:white
# visual-style 45	bgColor:blue
# visual-style 45	fgColor:white
# visual-style 45 44 nummod	color:blue
1	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	fatto	fatto	NOUN	S	Gender=Masc|Number=Sing	3	nsubj	_	_
3	era	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
4	che	che	SCONJ	CS	_	9	mark	_	_
5	l'	lo	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	SpaceAfter=No
6	uomo	uomo	NOUN	S	Gender=Masc|Number=Sing	9	nsubj	_	_
7	robusto	robusto	ADJ	A	Gender=Masc|Number=Sing	6	amod	_	_
8	aveva	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	9	aux	_	_
9	portato	portare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	ccomp	_	_
10	a	a	ADP	E	_	12	case	_	_
11	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	spalla	spalla	NOUN	S	Gender=Fem|Number=Sing	9	obl	_	_
13	sua	suo	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	15	det:poss	_	_
14	«	«	PUNCT	FB	_	15	punct	_	SpaceAfter=No
15	moglie	moglie	NOUN	S	Gender=Fem|Number=Sing	9	obj	_	SpaceAfter=No
16	»	»	PUNCT	FB	_	15	punct	_	_
17	perchè	perchè	SCONJ	CS	_	20	mark	_	_
18	lei	lei	PRON	PE	Gender=Fem|Number=Sing|Person=3|PronType=Prs	20	nsubj	_	_
19	stava	stare	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	20	aux	_	_
20	litigando	litigare	VERB	V	VerbForm=Ger	9	advcl	_	_
21	fortemente	fortemente	ADV	B	_	20	advmod	_	_
22	con	con	ADP	E	_	25	case	_	_
23	una	una	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	25	det	_	_
24	povera	povero	ADJ	A	Gender=Fem|Number=Sing	25	amod	_	_
25	impiegata	impiegata	NOUN	S	Gender=Fem|Number=Sing	20	obl	_	_
26	di	di	ADP	E	_	28	case	_	_
27	un	un	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	28	det	_	_
28	negozio	negozio	NOUN	S	Gender=Masc|Number=Sing	25	nmod	_	_
29	di	di	ADP	E	_	30	case	_	_
30	scarpe	scarpa	NOUN	S	Gender=Fem|Number=Plur	28	nmod	_	_
31	vecino	vecino	ADP	E	_	34	case	_	_
32	a	a	ADP	E	_	31	fixed	_	_
33	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	34	det	_	_
34	parco	parco	NOUN	S	Gender=Masc|Number=Sing	28	nmod	_	_
35	perchè	perchè	SCONJ	CS	_	39	mark	_	_
36	non	non	ADV	BN	PronType=Neg	39	advmod	_	_
37	l'	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	39	obj	_	SpaceAfter=No
38	aveva	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	39	aux	_	_
39	fatto	fare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	20	advcl	_	_
40	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	41	det	_	_
41	discaount	discaount	NOUN	S	_	39	obj	_	_
42	di	di	ADP	E	_	45	case	_	_
43	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	45	det	_	_
44	10	10	NUM	N	NumType=Card	45	nummod	_	SpaceAfter=No
45	%	%	SYM	SYM	_	41	nmod	_	_
46	a	a	SCONJ	CS	_	54	mark	_	_
47	tal	tale	SCONJ	CS	_	46	fixed	_	_
48	punto	punto	SCONJ	CS	_	46	fixed	_	_
49	che	che	SCONJ	CS	_	46	fixed	_	_
50	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	51	det	_	_
51	marito	marito	NOUN	S	Gender=Masc|Number=Sing	54	nsubj	_	_
52	aveva	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	54	aux	_	_
53	dovuto	dovere	AUX	VM	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	54	aux	_	_
54	prender	prendere	VERB	V	VerbForm=Inf	20	advcl	_	_
55	la	la	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	54	obj	_	_
56	educatamente	educatamente	ADV	B	_	54	advmod	_	SpaceAfter=No
57	.	.	PUNCT	FS	_	3	punct	_	SpacesAfter=\n

~~~


