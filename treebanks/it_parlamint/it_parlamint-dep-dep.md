---
layout: base
title:  'Statistics of dep in UD_Italian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParlaMint: Relations: `dep`

This relation is universal.

13 nodes (0%) are attached to their parents as `dep`.

13 instances of `dep` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.53846153846154.

The following 7 pairs of parts of speech are connected with `dep`: <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-ADP.html">ADP</a></tt> (6; 46% instances), <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt> (2; 15% instances), <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-CCONJ.html">CCONJ</a></tt> (1; 8% instances), <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt> (1; 8% instances), <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt> (1; 8% instances), <tt><a href="it_parlamint-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_parlamint-pos-PROPN.html">PROPN</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 dep	color:blue
1	«	«	PUNCT	FB	_	2	punct	_	SpaceAfter=No
2	Impegna	impegnare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	Governo	governo	NOUN	S	Gender=Masc|Number=Sing	2	obj	_	_
5	a	a	ADP	E	_	6	mark	_	_
6	valutare	valutare	VERB	V	VerbForm=Inf	2	ccomp	_	_
7	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	8	det	_	SpaceAfter=No
8	opportunità	opportunità	NOUN	S	Gender=Fem	6	obj	_	_
9	di	di	ADP	E	_	8	dep	_	SpaceAfter=No
10	»	»	PUNCT	FB	_	2	punct	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 45	bgColor:blue
# visual-style 45	fgColor:white
# visual-style 42	bgColor:blue
# visual-style 42	fgColor:white
# visual-style 42 45 dep	color:blue
1	È	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	chiaro	chiaro	ADJ	A	Gender=Masc|Number=Sing	0	root	_	_
3	che	che	SCONJ	CS	_	9	mark	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	6	punct	_	_
5	così	così	ADV	B	_	6	advmod	_	_
6	facendo	fare	VERB	V	VerbForm=Ger	9	advcl	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	6	punct	_	_
8	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	9	expl	_	_
9	elimina	eliminare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
10	quella	quello	DET	DD	Gender=Fem|Number=Sing|PronType=Dem	11	det	_	_
11	confusione	confusione	NOUN	S	Gender=Fem|Number=Sing	9	obj	_	_
12	per	per	ADP	E	_	13	case	_	_
13	cui	cui	PRON	PR	PronType=Rel	11	dep	_	_
14	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	16	det	_	_
15	due	due	NUM	N	NumType=Card	16	nummod	_	_
16	istituti	istituto	NOUN	S	Gender=Masc|Number=Plur	11	dep	_	_
17	che	che	PRON	PR	PronType=Rel	42	nsubj	_	SpaceAfter=No
18	,	,	PUNCT	FF	_	20	punct	_	_
19	comunque	comunque	SCONJ	CS	_	20	mark	_	_
20	sia	essere	VERB	V	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	42	advcl	_	_
21	e	e	CCONJ	CC	_	25	cc	_	_
22	per	per	ADP	E	_	23	case	_	_
23	quanto	quanto	PRON	PR	Gender=Masc|Number=Sing|PronType=Rel	25	obl	_	_
24	ci	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	25	expl	_	_
25	sforziamo	sforzare	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	20	conj	_	_
26	di	di	ADP	E	_	27	mark	_	_
27	tenere	tenere	VERB	V	VerbForm=Inf	25	xcomp	_	_
28	distinti	distinto	ADJ	A	Gender=Masc|Number=Plur	27	xcomp	_	_
29	(	(	PUNCT	FB	_	31	punct	_	SpaceAfter=No
30	qui	qui	ADV	B	_	31	advmod	_	_
31	comprendo	comprendere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	20	parataxis	_	_
32	ed	e	CCONJ	CC	_	33	cc	_	_
33	apprezzo	apprezzo	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	31	conj	_	_
34	lo	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	35	det	_	_
35	sforzo	sforzo	NOUN	S	Gender=Masc|Number=Sing	33	obj	_	_
36	di	di	ADP	E	_	38	case	_	_
37	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	38	det	_	_
38	senatrice	senatore	NOUN	S	Gender=Fem|Number=Sing	35	nmod	_	_
39	Filippin	Filippin	PROPN	SP	_	38	nmod	_	SpaceAfter=No
40	)	)	PUNCT	FB	_	31	punct	_	SpaceAfter=No
41	,	,	PUNCT	FF	_	20	punct	_	_
42	vanno	andare	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	16	acl	_	_
43	necessariamente	necessariamente	ADV	B	_	42	advmod	_	_
44	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	45	det	_	SpaceAfter=No
45	uno	uno	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	42	dep	_	_
46	a	a	ADP	E	_	47	case	_	_
47	fianco	fianco	NOUN	S	Gender=Masc|Number=Sing	42	obl	_	_
48	a	a	ADP	E	_	50	case	_	_
49	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	50	det	_	_
50	altro	altro	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	42	obl	_	SpaceAfter=No
51	,	,	PUNCT	FF	_	42	punct	_	_
52	per	per	ADP	E	_	55	case	_	_
53	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	55	det	_	_
54	loro	loro	DET	AP	Number=Plur|Poss=Yes|PronType=Prs	55	det	_	_
55	natura	natura	NOUN	S	Gender=Fem|Number=Sing	42	obl	_	_
56	e	e	CCONJ	CC	_	60	cc	_	_
57	per	per	ADP	E	_	60	case	_	_
58	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	60	det	_	_
59	loro	loro	DET	AP	Poss=Yes|PronType=Prs	60	det	_	_
60	funzione	funzione	NOUN	S	Gender=Fem|Number=Sing	55	conj	_	_
61	sociale	sociale	ADJ	A	Number=Sing	60	amod	_	SpaceAfter=No
62	;	;	PUNCT	FC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 dep	color:blue
1	Questa	questo	PRON	PD	Gender=Fem|Number=Sing|PronType=Dem	6	nsubj	_	_
2	dovrebbe	dovere	AUX	VM	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
3	essere	essere	AUX	V	VerbForm=Inf	6	cop	_	_
4	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	6	det	_	SpaceAfter=No
5	estrema	estremo	ADJ	A	Gender=Fem|Number=Sing	6	amod	_	_
6	ratio	ratio	NOUN	S	Foreign=Yes|Gender=Fem	0	root	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	6	punct	_	_
8	ma	ma	CCONJ	CC	_	6	dep	_	_
9	poiché	poiché	SCONJ	CS	_	18	mark	_	_
10	in	in	ADP	E	_	13	case	_	_
11	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
12	stragrande	stragrande	ADJ	A	Number=Sing	13	amod	_	_
13	maggioranza	maggioranza	NOUN	S	Gender=Fem|Number=Sing	18	obl	_	_
14	di	di	ADP	E	_	16	case	_	_
15	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	16	det	_	_
16	casi	caso	NOUN	S	Gender=Masc|Number=Plur	13	nmod	_	_
17	ciò	ciò	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	18	nsubj	_	_
18	avviene	avvenire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	advcl	_	_
19	per	per	ADP	E	_	20	case	_	_
20	ragioni	ragione	NOUN	S	Gender=Fem|Number=Plur	18	obl	_	_
21	economiche	economico	ADJ	A	Gender=Fem|Number=Plur	20	amod	_	SpaceAfter=No
22	,	,	PUNCT	FF	_	26	punct	_	_
23	ovvero	ovvero	CCONJ	CC	_	26	cc	_	_
24	per	per	ADP	E	_	26	case	_	_
25	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	26	det	_	_
26	fatto	fatto	NOUN	S	Gender=Masc|Number=Sing	20	conj	_	_
27	che	che	SCONJ	CS	_	31	mark	_	_
28	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	29	det	_	_
29	famiglia	famiglia	NOUN	S	Gender=Fem|Number=Sing	31	nsubj	_	_
30	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	31	expl	_	_
31	trova	trovare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	26	acl	_	_
32	a	a	ADP	E	_	33	mark	_	_
33	perdere	perdere	VERB	V	VerbForm=Inf	31	xcomp	_	_
34	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	35	det	_	_
35	lavoro	lavoro	NOUN	S	Gender=Masc|Number=Sing	33	obj	_	_
36	-	-	PUNCT	FB	_	38	punct	_	_
37	come	come	SCONJ	CS	_	38	mark	_	_
38	capita	capitare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	33	advcl	_	_
39	sempre	sempre	ADV	B	_	40	advmod	_	_
40	più	più	ADV	B	_	41	advmod	_	_
41	facilmente	facilmente	ADV	B	_	38	advmod	_	_
42	-	-	PUNCT	FB	_	38	punct	_	_
43	e	e	CCONJ	CC	_	48	cc	_	_
44	di	di	ADP	E	_	45	case	_	_
45	conseguenza	conseguenza	NOUN	S	Gender=Fem|Number=Sing	48	obl	_	_
46	a	a	ADP	E	_	48	mark	_	_
47	non	non	ADV	BN	PronType=Neg	48	advmod	_	_
48	riuscire	riuscire	VERB	V	VerbForm=Inf	33	conj	_	_
49	a	a	ADP	E	_	50	mark	_	_
50	pagare	pagare	VERB	V	VerbForm=Inf	48	xcomp	_	_
51	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	52	det	_	SpaceAfter=No
52	affitto	affitto	NOUN	S	Gender=Masc|Number=Sing	50	obj	_	_
53	di	di	ADP	E	_	55	case	_	_
54	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	55	det	_	_
55	immobile	immobile	NOUN	S	Gender=Masc|Number=Sing	52	nmod	_	_
56	in	in	ADP	E	_	57	case	_	_
57	cui	cui	PRON	PR	PronType=Rel	58	obl	_	_
58	vive	vivere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	55	acl	_	SpaceAfter=No
59	,	,	PUNCT	FF	_	61	punct	_	_
60	a	a	ADP	E	_	61	mark	_	_
61	subire	subire	VERB	V	VerbForm=Inf	33	conj	_	_
62	uno	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	63	det	_	_
63	sfratto	sfratto	NOUN	S	Gender=Masc|Number=Sing	61	obj	_	_
64	e	e	CCONJ	CC	_	67	cc	_	_
65	a	a	ADP	E	_	67	mark	_	_
66	non	non	ADV	BN	PronType=Neg	67	advmod	_	_
67	trovare	trovare	VERB	V	VerbForm=Inf	33	conj	_	_
68	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	69	det	_	_
69	luogo	luogo	NOUN	S	Gender=Masc|Number=Sing	67	obj	_	_
70	adatto	adatto	ADJ	A	Gender=Masc|Number=Sing	69	amod	_	_
71	in	in	ADP	E	_	72	case	_	_
72	cui	cui	PRON	PR	PronType=Rel	73	obl	_	_
73	vivere	vivere	VERB	V	VerbForm=Inf	69	acl	_	SpaceAfter=No
74	.	.	PUNCT	FS	_	6	punct	_	_

~~~


