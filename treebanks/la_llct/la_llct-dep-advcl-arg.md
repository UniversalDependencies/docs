---
layout: base
title:  'Statistics of advcl:arg in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `advcl:arg`

This relation is a language-specific subtype of <tt><a href="la_llct-dep-advcl.html">advcl</a></tt>.

1 nodes (0%) are attached to their parents as `advcl:arg`.

1 instances of `advcl:arg` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 1 pairs of parts of speech are connected with `advcl:arg`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 15 advcl:arg	color:blue
1	manifestum	manifestus	ADJ	a|a|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
2	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	_
3	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	1	obl:arg	_	_
4	Gauseramus	Gauseramus	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	3	appos	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	6	punct	_	_
6	filio	filius	NOUN	n|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	4	appos	_	_
7	bone	bonus	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	8	amod	_	_
8	memorie	memoria	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	9	nmod	_	_
9	Farolfi	Farolfus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	SpaceAfter=No
10	,	,	PUNCT	Punc	_	12	punct	_	_
11	quia	quia	SCONJ	c|c|-|-|-|-|-|-|-|-	_	12	mark	_	_
12	dedisti	do	VERB	v|v|2|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	1	csubj	_	_
13	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	12	obl:arg	_	_
14	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	15	mark	_	_
15	lavorandum	laboro	VERB	t|t|-|s|p|d|p|n|a|-	Aspect=Imp|Case=Acc|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Ger|Voice=Pass	12	advcl:arg	_	_
16	tu	tu	PRON	p|p|2|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Person=2|PronType=Prs	12	nsubj	_	_
17	Alperte	Alpertus	PROPN	Propn|n|-|s|-|-|-|m|v|-	Case=Voc|Gender=Masc|Number=Sing	16	appos	_	_
18	clericus	clericus	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	17	appos	_	SpaceAfter=No
19	,	,	PUNCT	Punc	_	20	punct	_	_
20	filio	filius	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	17	appos	_	_
21	Ilprandi	Hilprandus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	20	nmod	_	_
22	abati	abbas	NOUN	n|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	21	nmod	_	SpaceAfter=No
23	,	,	PUNCT	Punc	_	24	punct	_	_
24	rector	rector	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	21	appos	_	_
25	monasterii	monasterium	NOUN	n|n|-|s|-|-|-|n|g|-	Case=Gen|Gender=Neut|Number=Sing	24	nmod	_	_
26	beatissimi	beatus	ADJ	a|a|-|s|-|-|-|m|g|s	Case=Gen|Degree=Abs|Gender=Masc|Number=Sing	28	amod	_	_
27	sancti	sanctus	ADJ	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	28	amod	_	_
28	Petri	Petrus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	25	nmod	_	_
29	qui	qui	PRON	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	30	nsubj:pass	_	_
30	vocitatur	uocito	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	25	acl:relcl	_	_
31	Sumualdi	Sumualdus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	30	xcomp	_	_
32	fore	foris	ADP	r|r|-|-|-|-|-|-|-|-	_	33	case	_	_
33	civitatem	ciuitas	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	25	nmod	_	_
34	ista	iste	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	33	det	_	_
35	Lucense	lucensis	ADJ	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	33	amod	_	SpaceAfter=No
36	,	,	PUNCT	Punc	_	38	punct	_	_
37	una	unus	NUM	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|NumType=Card	38	nummod	_	_
38	casa	casa	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	12	obj	_	_
39	suprascripti	suprascriptus	DET	a|a|-|s|-|-|-|n|g|-	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	40	det	_	_
40	monasterii	monasterium	NOUN	n|n|-|s|-|-|-|n|g|-	Case=Gen|Gender=Neut|Number=Sing	38	nmod	_	SpaceAfter=No
41	,	,	PUNCT	Punc	_	43	punct	_	_
42	qui	qui	PRON	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	43	nsubj	_	_
43	est	sum	VERB	v|v|3|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	38	acl:relcl	_	_
44	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	45	case	_	_
45	loco	locus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	43	obl	_	_
46	ubi	ubi	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	47	advmod	_	_
47	dicitur	dico	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	45	acl:relcl	_	_
48	Casale	Casalis	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	47	xcomp	_	_
49	Filuarti	Filuartus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	48	nmod	_	SpaceAfter=No
50	,	,	PUNCT	Punc	_	52	punct	_	_
51	ubi	ubi	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	52	advmod	_	_
52	residde	resideo	VERB	v|v|3|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	38	acl:relcl	_	_
53	Ermeradulo	Ermenradulus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	52	nsubj	_	SpaceAfter=No
54	,	,	PUNCT	Punc	_	55	punct	_	_
55	casa	casa	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	12	dislocated:obj	_	_
56	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	55	det	_	SpaceAfter=No
57	,	,	PUNCT	Punc	_	60	punct	_	_
58	una	una	ADV	d|d|-|-|-|-|-|-|-|-	_	60	case	_	_
59	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	58	fixed	_	_
60	fundamento	fundamentum	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	55	nmod	_	SpaceAfter=No
61	,	,	PUNCT	Punc	_	62	punct	_	_
62	curte	curtis	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	60	conj	_	SpaceAfter=No
63	,	,	PUNCT	Punc	_	64	punct	_	_
64	orto	hortus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	60	conj	_	SpaceAfter=No
65	,	,	PUNCT	Punc	_	66	punct	_	_
66	terris	terra	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	60	conj	_	SpaceAfter=No
67	,	,	PUNCT	Punc	_	68	punct	_	_
68	vineis	uinea	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	60	conj	_	SpaceAfter=No
69	,	,	PUNCT	Punc	_	70	punct	_	_
70	olivis	oliua	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	60	conj	_	SpaceAfter=No
71	,	,	PUNCT	Punc	_	72	punct	_	_
72	silvis	silua	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	60	conj	_	SpaceAfter=No
73	,	,	PUNCT	Punc	_	74	punct	_	_
74	vergareis	uirgareum	NOUN	n|n|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur	60	conj	_	SpaceAfter=No
75	,	,	PUNCT	Punc	_	76	punct	_	_
76	pratis	pratum	NOUN	n|n|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur	60	conj	_	SpaceAfter=No
77	,	,	PUNCT	Punc	_	78	punct	_	_
78	pascuis	pascuum	NOUN	n|n|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur	60	conj	_	SpaceAfter=No
79	,	,	PUNCT	Punc	_	81	punct	_	_
80	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	81	case	_	_
81	culto	cultus	ADJ	a|a|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	55	nmod	_	_
82	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	83	cc	_	_
83	inculto	incultus	ADJ	a|a|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	81	conj	_	SpaceAfter=No
84	,	,	PUNCT	Punc	_	85	punct	_	_
85	movilia	mobilis	ADJ	a|a|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur	81	conj	_	_
86	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	87	cc	_	_
87	inmovilia	immobilis	ADJ	a|a|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur	81	conj	_	_
88	seo	seu	CCONJ	c|c|-|-|-|-|-|-|-|-	_	90	cc	_	_
89	qui	qui	DET	p|p|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|PronType=Ind	90	nmod	_	_
90	semoventibus	semouens	NOUN	n|n|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur	81	conj	_	SpaceAfter=No
91	,	,	PUNCT	Punc	_	92	punct	_	_
92	omnia	omnis	DET	a|a|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|PronType=Tot	12	obl	_	_
93	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	95	cc	_	_
94	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	95	case	_	_
95	omnibus	omnis	DET	a|a|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur|PronType=Tot	92	conj	_	_
96	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	98	case	_	_
97	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	98	det	_	_
98	casam	casa	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	99	obl	_	_
99	pertenentes	pertineo	VERB	t|t|-|p|p|p|a|f|a|-	Aspect=Imp|Case=Acc|Gender=Fem|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	95	acl	_	_
100	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	101	case	_	_
101	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	12	obl	_	SpaceAfter=No
102	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


