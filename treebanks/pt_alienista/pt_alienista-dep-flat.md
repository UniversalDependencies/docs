---
layout: base
title:  'Statistics of flat in UD_Portuguese-Alienista'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Alienista: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="pt_alienista-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="pt_alienista-dep-flat-name.html">flat:name</a></tt>.

17 nodes (0%) are attached to their parents as `flat`.

17 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.88235294117647.

The following 2 pairs of parts of speech are connected with `flat`: <tt><a href="pt_alienista-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_alienista-pos-NUM.html">NUM</a></tt> (16; 94% instances), <tt><a href="pt_alienista-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_alienista-pos-ADJ.html">ADJ</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 flat	color:blue
1	Em	em	ADP	_	_	3	case	_	_
2	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	fim	fim	NOUN	_	Gender=Masc|Number=Sing	10	obl	_	_
4	de	de	ADP	_	_	6	case	_	_
5	cinco	cinco	NUM	_	NumType=Card	6	nummod	_	_
6	meses	mês	NOUN	_	Gender=Masc|Number=Plur	3	nmod	_	_
7	e	e	CCONJ	_	_	8	cc	_	_
8	meio	meio	NUM	_	Gender=Masc|NumType=Frac	5	flat	_	_
9	estava	estar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	10	cop	_	_
10	vazia	vazio	ADJ	_	Gender=Fem|Number=Sing	0	root	_	_
11	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	Casa	Casa	PROPN	_	_	10	nsubj	_	_
13	Verde	Verde	PROPN	_	_	12	flat:name	_	SpaceAfter=No
14	;	;	PUNCT	_	_	16	punct	_	_
15	todos	todo	PRON	_	Gender=Masc|Number=Plur|PronType=Ind	16	nsubj	_	_
16	curados	curado	ADJ	_	Gender=Masc|Number=Plur|VerbForm=Part	10	parataxis	_	SpaceAfter=No
17	!	!	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 48	bgColor:blue
# visual-style 48	fgColor:white
# visual-style 46	bgColor:blue
# visual-style 46	fgColor:white
# visual-style 46 48 flat	color:blue
1	Outro	outro	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	8	nsubj	_	_
2	de	de	ADP	_	_	5	case	_	_
3	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
4	mesma	mesmo	DET	_	Gender=Fem|Number=Sing|PronType=Dem	5	det	_	_
5	espécie	espécie	NOUN	_	Gender=Fem|Number=Sing	1	nmod	_	_
6	era	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	cop	_	_
7	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	escrivão	escrivão	NOUN	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
9	,	,	PUNCT	_	_	12	punct	_	_
10	que	que	PRON	_	PronType=Rel	12	nsubj	_	_
11	se	se	PRON	_	Case=Nom|Person=3|PronType=Prs	12	obj	_	_
12	vendia	vender	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	acl:relcl	_	_
13	por	por	ADP	_	_	14	case	_	_
14	mordomo	mordomo	NOUN	_	Gender=Masc|Number=Sing	12	obl	_	_
15	de	de	ADP	_	_	17	case	_	_
16	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	rei	rei	NOUN	_	Gender=Masc|Number=Sing	14	nmod	_	SpaceAfter=No
18	;	;	PUNCT	_	_	22	punct	_	_
19	outro	outro	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	22	nsubj	_	_
20	era	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	22	cop	_	_
21	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	22	det	_	_
22	boiadeiro	boiadeiro	NOUN	_	Gender=Masc|Number=Sing	8	parataxis	_	_
23	de	de	ADP	_	_	24	case	_	_
24	Minas	Minas	PROPN	_	_	22	nmod	_	SpaceAfter=No
25	,	,	PUNCT	_	_	29	punct	_	_
26	cuja	cujo	DET	_	Gender=Fem|Number=Sing|PronType=Rel	27	det	_	_
27	mania	mania	NOUN	_	Gender=Fem|Number=Sing	29	nsubj	_	_
28	era	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	29	cop	_	_
29	distribuir	distribuir	VERB	_	VerbForm=Inf	22	acl:relcl	_	_
30	boiadas	boiada	NOUN	_	Gender=Fem|Number=Plur	29	obj	_	_
31	a	a	ADP	_	_	34	case	_	_
32	toda	todo	DET	_	Gender=Fem|Number=Sing|PronType=Ind	34	det	_	_
33	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	34	det	_	_
34	gente	gente	NOUN	_	Gender=Fem|Number=Sing	29	obl	_	SpaceAfter=No
35	,	,	PUNCT	_	_	36	punct	_	_
36	dava	dar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	29	parataxis	_	_
37	trezentas	trezentos	NUM	_	Gender=Fem|NumType=Card	38	nummod	_	_
38	cabeças	cabeça	NOUN	_	Gender=Fem|Number=Plur	36	obj	_	_
39	a	a	ADP	_	_	40	case	_	_
40	um	um	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	36	obl	_	SpaceAfter=No
41	,	,	PUNCT	_	_	42	punct	_	_
42	seiscentas	seiscentos	NUM	_	Gender=Fem|NumType=Card	36	conj	_	_
43	a	a	ADP	_	_	44	case	_	_
44	outro	outro	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	42	orphan	_	SpaceAfter=No
45	,	,	PUNCT	_	_	46	punct	_	_
46	mil	mil	NUM	_	NumType=Card	36	conj	_	_
47	e	e	CCONJ	_	_	48	cc	_	_
48	duzentas	duzentos	ADJ	_	Gender=Fem|Number=Plur	46	flat	_	_
49	a	a	ADP	_	_	50	case	_	_
50	outro	outro	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	46	orphan	_	SpaceAfter=No
51	,	,	PUNCT	_	_	54	punct	_	_
52	e	e	CCONJ	_	_	54	cc	_	_
53	não	não	ADV	_	_	54	advmod	_	_
54	acabava	acabar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	36	conj	_	_
55	mais	mais	ADV	_	_	54	advmod	_	SpaceAfter=No
56	.	.	PUNCT	_	_	8	punct	_	_

~~~


