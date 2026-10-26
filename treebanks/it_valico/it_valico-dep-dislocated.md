---
layout: base
title:  'Statistics of dislocated in UD_Italian-Valico'
udver: '2'
---

## Treebank Statistics: UD_Italian-Valico: Relations: `dislocated`

This relation is universal.

8 nodes (0%) are attached to their parents as `dislocated`.

6 instances of `dislocated` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.75.

The following 2 pairs of parts of speech are connected with `dislocated`: <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt> (6; 75% instances), <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-PRON.html">PRON</a></tt> (2; 25% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 dislocated	color:blue
1	L'	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	obj	_	SpaceAfter=No
2	ho	avere	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	gridato	gridare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	alquini	alquino	DET	DI	Gender=Masc|Number=Plur|PronType=Ind	5	det	_	_
5	parolace	parolacia	NOUN	S	Gender=Fem|Number=Plur	3	dislocated	_	SpaceAfter=No
6	.	.	PUNCT	FS	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 34 32 dislocated	color:blue
1	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	aux	_	_
2	pasato	pasare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
3	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	tempo	tempo	NOUN	S	Gender=Masc|Number=Sing	2	nsubj	_	_
5	quando	quando	SCONJ	CS	_	7	mark	_	_
6	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	visto	vedere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	advcl	_	_
8	che	che	SCONJ	CS	_	10	mark	_	_
9	non	non	ADV	BN	PronType=Neg	10	advmod	_	_
10	portava	portare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	7	ccomp	_	_
11	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	borsa	borsa	NOUN	S	Gender=Fem|Number=Sing	10	obj	_	_
13	ma	ma	CCONJ	CC	_	19	cc	_	_
14	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	problema	problema	NOUN	S	Gender=Masc|Number=Sing	19	nsubj	_	_
16	era	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	2	conj	_	_
17	que	que	SCONJ	CS	_	19	mark	_	_
18	li	li	ADV	B	_	19	advmod	_	_
19	aveva	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	16	ccomp	_	_
20	dei	dei	DET	DI	Gender=Masc|Number=Plur|PronType=Ind	21	det	_	_
21	soldi	soldo	NOUN	S	Gender=Masc|Number=Plur	19	obj	_	_
22	e	e	CCONJ	CC	_	25	cc	_	_
23	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	25	expl	_	_
24	e	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	25	aux	_	_
25	preoccupata	preoccupare	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	19	conj	_	_
26	moltissimo	molto	ADV	B	Degree=Abs	25	advmod	_	_
27	e	e	CCONJ	CC	_	30	cc	_	_
28	era	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	30	cop	_	_
29	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	30	det	_	_
30	borsa	borsa	NOUN	S	Gender=Fem|Number=Sing	19	conj	_	_
31	che	che	PRON	PR	PronType=Rel	34	obj	_	_
32	l'	la	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	34	dislocated	_	SpaceAfter=No
33	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	34	aux	_	_
34	comprata	comprare	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	30	acl:relcl	_	_
35	in	in	ADP	E	_	36	case	_	_
36	Barcelona	Barcelona	PROPN	SP	_	34	obl	_	Foreign=Yes
37	e	e	CCONJ	CC	_	41	cc	_	_
38	era	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	41	cop	_	_
39	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	41	det	_	_
40	sua	suo	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	41	det:poss	_	_
41	borsa	borsa	NOUN	S	Gender=Fem|Number=Sing	19	conj	_	_
42	de	de	ADP	E	_	44	case	_	Foreign=Yes
43	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	44	det	_	_
44	fortuna	fortuna	NOUN	S	Gender=Fem|Number=Sing	41	nmod	_	SpaceAfter=No
45	,	,	PUNCT	FF	_	2	punct	_	_
46	tratava	tratare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	2	conj	_	_
47	di	di	ADP	E	_	48	mark	_	_
48	ricordare	ricordare	VERB	V	VerbForm=Inf	46	xcomp	_	_
49	dove	dove	PRON	PR	PronType=Rel	48	obj	_	_
50	la	la	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	52	obj	_	_
51	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	52	aux	_	_
52	lasciato	lasciare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	49	acl:relcl	_	_
53	ma	ma	CCONJ	CC	_	55	cc	_	_
54	non	non	ADV	BN	PronType=Neg	55	advmod	_	_
55	ricordava	ricordare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	52	conj	_	_
56	niente	niente	PRON	PI	PronType=Ind	55	obj	_	_
57	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	59	expl	_	_
58	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	59	aux	_	_
59	desisperata	desisperare	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	55	parataxis	_	_
60	moltissomo	molto	ADV	B	Degree=Abs	59	advmod	_	SpaceAfter=No
61	,	,	PUNCT	FF	_	65	punct	_	_
62	ma	ma	CCONJ	CC	_	65	cc	_	_
63	non	non	ADV	BN	PronType=Neg	65	advmod	_	_
64	li	li	PRON	PC	Clitic=Yes|Gender=Masc|Number=Plur|Person=3|PronType=Prs	65	iobj	_	_
65	diceva	dire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	59	conj	_	_
66	niente	niente	PRON	PI	PronType=Ind	65	obj	_	_
67	a	a	ADP	E	_	70	case	_	_
68	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	70	det	_	_
69	suo	suo	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	70	det:poss	_	_
70	marito	marito	NOUN	S	Gender=Masc|Number=Sing	65	dislocated	_	SpaceAfter=No
71	.	.	PUNCT	FS	_	2	punct	_	SpacesAfter=\n

~~~


