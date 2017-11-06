---
layout: base
title:  'Statistics of nsubj:expl in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `nsubj:expl`

This relation is a language-specific subtype of <tt><a href="fr_partut-dep-nsubj.html">nsubj</a></tt>.
There are also 2 other language-specific subtypes of `nsubj`: <tt><a href="fr_partut-dep-nsubj-caus.html">nsubj:caus</a></tt>, <tt><a href="fr_partut-dep-nsubj-pass.html">nsubj:pass</a></tt>.

2 nodes (0%) are attached to their parents as `nsubj:expl`.

2 instances of `nsubj:expl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `nsubj:expl`: <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-PRON.html">PRON</a></tt> (1; 50% instances), <tt><a href="fr_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_partut-pos-PRON.html">PRON</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 58	bgColor:blue
# visual-style 58	fgColor:white
# visual-style 60	bgColor:blue
# visual-style 60	fgColor:white
# visual-style 60 58 nsubj:expl	color:blue
1	Cependant	cependant	ADV	B	_	5	advmod	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	je	je	PRON	PE	Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
4	vous	vous	PRON	PE	Number=Plur|Person=2|PronType=Prs	5	iobj	_	_
5	demande	demander	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	5	punct	_	_
7	conformément	conformément	ADV	B	_	10	advmod	_	_
8	à	à	ADP	E	_	7	fixed	_	_
9	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	10	det	_	SpaceAfter=No
10	orientation	orientation	NOUN	S	Gender=Fem|Number=Sing	5	obl	_	_
11	désormais	désormais	ADV	B	_	13	advmod	_	_
12	constamment	constamment	ADV	B	_	13	advmod	_	_
13	exprimée	exprimer	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	10	acl	_	_
14	par	par	ADP	E	_	16	case	_	_
15	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	parlement	parlement	NOUN	S	Gender=Masc|Number=Sing	13	obl:agent	_	_
17	européen	européen	ADJ	A	Gender=Masc|Number=Sing	16	amod	_	_
18	et	et	CCONJ	CC	_	21	cc	_	_
19	toute	tout	DET	T	Gender=Fem|Number=Sing|PronType=Tot	21	det	_	_
20	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	_
21	communauté	communauté	NOUN	S	Gender=Fem|Number=Sing	16	conj	_	_
22	européenne	européen	ADJ	A	Gender=Fem|Number=Sing	21	amod	_	SpaceAfter=No
23	,	,	PUNCT	FF	_	5	punct	_	_
24	d'	de	ADP	E	_	25	mark	_	SpaceAfter=No
25	intervenir	intervenir	VERB	V	VerbForm=Inf	5	xcomp	_	_
26	auprès	auprès	ADP	E	_	29	case	_	_
27	de	de	ADP	E	_	26	fixed	_	_
28	le	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	29	det	_	_
29	président	président	NOUN	S	Gender=Masc|Number=Sing	25	obl	_	_
30	et	et	CCONJ	CC	_	33	cc	_	_
31	de	de	ADP	E	_	33	case	_	_
32	le	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	33	det	_	_
33	gouverneur	gouverneur	NOUN	S	Gender=Masc|Number=Sing	29	conj	_	_
34	de	de	ADP	E	_	36	case	_	_
35	le	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	36	det	_	_
36	Texas	Texas	PROPN	SP	_	33	nmod	_	SpaceAfter=No
37	,	,	PUNCT	FF	_	33	punct	_	_
38	monsieur	monsieur	NOUN	S	Gender=Masc|Number=Sing	33	appos	_	_
39	Bush	Bush	PROPN	SP	_	38	flat	_	SpaceAfter=No
40	,	,	PUNCT	FF	_	25	punct	_	_
41	en	en	ADP	E	_	43	mark	_	_
42	faisant	faire	VERB	V	VerbForm=Ger	43	aux:caus	_	_
43	jouer	jouer	VERB	V	VerbForm=Inf	25	advcl	_	_
44	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	45	det	_	_
45	prestige	prestige	NOUN	S	Gender=Masc|Number=Sing	43	obj:agent	_	_
46	de	de	ADP	E	_	48	case	_	_
47	votre	votre	DET	AP	Gender=Masc|Number=Sing|PronType=Prs	48	det	_	_
48	mandat	mandat	NOUN	S	Gender=Masc|Number=Sing	45	nmod	_	_
49	et	et	CCONJ	CC	_	52	cc	_	_
50	de	de	ADP	E	_	52	case	_	_
51	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	52	det	_	SpaceAfter=No
52	institution	institution	NOUN	S	Gender=Fem|Number=Sing	48	conj	_	_
53	que	que	PRON	PR	PronType=Rel	55	obj	_	_
54	vous	vous	PRON	PE	Number=Plur|Person=2|PronType=Prs	55	nsubj	_	_
55	représentez	représenter	VERB	V	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	52	acl:relcl	_	SpaceAfter=No
56	,	,	PUNCT	FF	_	43	punct	_	_
57	car	car	CCONJ	CC	_	60	cc	_	_
58	c'	ce	PRON	PD	PronType=Dem	60	nsubj:expl	_	SpaceAfter=No
59	est	être	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	60	cop	_	_
60	monsieur	monsieur	NOUN	S	Gender=Masc|Number=Sing	43	conj	_	_
61	Bush	Bush	PROPN	SP	_	60	flat	_	_
62	qui	qui	PRON	PR	PronType=Rel	63	nsubj	_	_
63	a	avoir	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	60	acl:cleft	_	_
64	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	65	det	_	_
65	pouvoir	pouvoir	NOUN	S	Gender=Masc|Number=Sing	63	obj	_	_
66	de	de	ADP	E	_	67	mark	_	_
67	suspendre	suspendre	VERB	V	VerbForm=Inf	65	acl	_	_
68	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	69	det	_	_
69	condamnation	condamnation	NOUN	S	Gender=Fem|Number=Sing	67	obj	_	_
70	à	à	ADP	E	_	71	case	_	_
71	mort	mort	NOUN	S	Gender=Fem|Number=Sing	69	nmod	_	_
72	et	et	CCONJ	CC	_	74	cc	_	_
73	de	de	ADP	E	_	74	mark	_	_
74	gracier	gracier	VERB	V	VerbForm=Inf	67	conj	_	_
75	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	76	det	_	_
76	condamné	condamné	NOUN	S	Gender=Masc|Number=Sing	74	obj	_	SpaceAfter=No
77	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:expl	color:blue
1	C'	ce	PRON	PD	PronType=Dem	3	nsubj:expl	_	SpaceAfter=No
2	est	être	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	ceci	ceci	PRON	PD	Number=Sing|Person=3|PronType=Dem	0	root	_	_
4	qui	qui	PRON	PR	PronType=Rel	6	nsubj	_	_
5	nous	nous	PRON	PE	Number=Plur|Person=1|PronType=Prs	6	obj	_	_
6	conduira	conduire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	3	acl:cleft	_	_
7	à	à	ADP	E	_	9	mark	_	_
8	le	le	PRON	P	Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	obj	_	_
9	voter	voter	VERB	V	VerbForm=Inf	6	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	3	punct	_	_

~~~


