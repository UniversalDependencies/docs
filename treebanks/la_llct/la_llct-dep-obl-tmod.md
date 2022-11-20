---
layout: base
title:  'Statistics of obl:tmod in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="la_llct-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="la_llct-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="la_llct-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="la_llct-dep-obl-lmod.html">obl:lmod</a></tt>.

5 nodes (0%) are attached to their parents as `obl:tmod`.

5 instances of `obl:tmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 10.6.

The following 2 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (3; 60% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (2; 40% instances).


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 33 30 obl:tmod	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	34	cc	_	_
2	tam	tam	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Dem	3	cc	_	_
3	ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	34	nsubj	_	_
4	quam	quam	SCONJ	c|c|-|-|-|-|-|-|-|-	PronType=Rel	7	mark	_	_
5	et	et	CCONJ	d|d|-|-|-|-|-|-|-|-	_	7	advmod:emph	_	_
6	predictus	praedictus	DET	a|a|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	7	det	_	_
7	Ilprandus	Hilprandus	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	34	advcl:cmp	_	_
8	nepus	nepos	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	7	appos	_	_
9	meus	meus	DET	a|a|1|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	8	det	_	SpaceAfter=No
10	,	,	PUNCT	Punc	_	13	punct	_	_
11	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	13	cc	_	_
12	alius	alius	DET	a|a|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Con	13	det	_	_
13	nepus	nepos	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	7	conj	_	_
14	meus	meus	DET	a|a|1|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	13	det	_	_
15	si	si	SCONJ	c|c|-|-|-|-|-|-|-|-	_	16	mark	_	_
16	fuerit	sum	AUX	v|v|3|s|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	34	advcl	_	TraditionalMood=Indicativus|TraditionalTense=FuturumExactum
17	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	19	case	_	_
18	predicta	praedictus	DET	a|a|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Dem	19	det	_	_
19	filia	filia	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	16	obl	_	_
20	mea	meus	DET	a|a|1|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	19	det	_	_
21	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	24	cc	_	_
22	tonso	tondeo	VERB	t|t|-|s|r|p|p|n|b|-	Aspect=Perf|Case=Abl|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	23	acl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
23	capite	caput	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	24	obl	_	_
24	abuerit	habeo	VERB	v|v|3|s|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	16	conj	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=FuturumExactum
25	,	,	PUNCT	Punc	_	16	punct	_	_
26	per	per	ADP	r|r|-|-|-|-|-|-|-|-	_	28	case	_	_
27	singulos	singulus	ADJ	a|a|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|NumType=Dist	28	amod	_	_
28	annos	annus	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	33	obl:tmod	_	_
29	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	30	case	_	_
30	die	dies	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	33	obl:tmod	_	_
31	natalis	natalis	NOUN	n|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	30	nmod	_	_
32	Domini	Dominus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	31	nmod	_	_
33	reddere	reddo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Vnoun|Voice=Act	34	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
34	debeamus	debeo	VERB	v|v|1|p|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
35	exinde	exinde	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Tim	34	advmod	_	_
36	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	40	case	_	_
37	iam	iam	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Tim	40	det	_	_
38	dicta	dico	VERB	t|t|-|s|r|p|p|f|b|-	Aspect=Perf|Case=Abl|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	37	fixed	_	TraditionalMood=Participium|TraditionalTense=Perfectum
39	Dei	Deus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	40	nmod	_	_
40	ecclesia	ecclesia	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	33	obl	_	_
41	sancti	sanctus	ADJ	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	42	amod	_	_
42	Martini	Martinus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	40	nmod	_	_
43	episcopatus	episcopatus	NOUN	n|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	40	nmod	_	_
44	vestri	uester	DET	a|a|2|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing|Number[psor]=Plur|Person[psor]=2|Poss=Yes|PronType=Prs	43	det	_	_
45	quatraginta	quadraginta	NUM	m|m|-|-|-|-|-|-|-|-	NumType=Card	46	nummod	_	_
46	libras	libra	NOUN	n|n|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur	33	obj	_	_
47	oleo	oleum	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	46	nmod	_	_
48	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	49	case	_	_
49	luminaria	luminare	NOUN	n|n|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur	46	nmod	_	SpaceAfter=No
50	.	.	PUNCT	Punc	_	34	punct	_	_

~~~


~~~ conllu
# visual-style 92	bgColor:blue
# visual-style 92	fgColor:white
# visual-style 112	bgColor:blue
# visual-style 112	fgColor:white
# visual-style 112 92 obl:tmod	color:blue
1	casa	casa	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	80	dislocated:obj	_	_
2	vero	uero	ADV	d|d|-|-|-|-|-|-|-|-	_	80	discourse	_	_
3	ipsa	ipse	DET	p|p|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	1	det	_	_
4	massaricia	massaricius	ADJ	a|a|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	1	amod	_	_
5	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	6	case	_	_
6	fundamento	fundamentum	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	1	nmod	_	_
7	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	9	cc	_	_
8	omnem	omnis	DET	a|a|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing|PronType=Tot	9	det	_	_
9	edeficio	aedificium	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	6	conj	_	_
10	suo	suus	DET	a|a|3|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	9	det	_	_
11	seo	seu	CCONJ	c|c|-|-|-|-|-|-|-|-	_	12	cc	_	_
12	curte	curtis	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	6	conj	_	SpaceAfter=No
13	,	,	PUNCT	Punc	_	14	punct	_	_
14	orto	hortus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	6	conj	_	SpaceAfter=No
15	,	,	PUNCT	Punc	_	16	punct	_	_
16	terris	terra	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	6	conj	_	SpaceAfter=No
17	,	,	PUNCT	Punc	_	18	punct	_	_
18	vineis	uinea	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	6	conj	_	SpaceAfter=No
19	,	,	PUNCT	Punc	_	20	punct	_	_
20	olivis	oliua	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	6	conj	_	SpaceAfter=No
21	,	,	PUNCT	Punc	_	22	punct	_	_
22	silvis	silua	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	6	conj	_	SpaceAfter=No
23	,	,	PUNCT	Punc	_	24	punct	_	_
24	virgareis	uirgareum	NOUN	n|n|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur	6	conj	_	SpaceAfter=No
25	,	,	PUNCT	Punc	_	26	punct	_	_
26	pratis	pratum	NOUN	n|n|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur	6	conj	_	SpaceAfter=No
27	,	,	PUNCT	Punc	_	28	punct	_	_
28	pascuis	pascuum	NOUN	n|n|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur	6	conj	_	SpaceAfter=No
29	,	,	PUNCT	Punc	_	31	punct	_	_
30	cultis	cultus	ADJ	a|a|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	31	amod	_	_
31	rebus	res	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	6	conj	_	_
32	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	33	cc	_	_
33	incultis	incultus	ADJ	a|a|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	30	conj	_	SpaceAfter=No
34	,	,	PUNCT	Punc	_	6	punct	_	_
35	omnia	omnis	DET	a|a|-|p|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Plur|PronType=Tot	80	obj	_	_
36	quantum	quantum	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	54	advmod	_	_
37	ubique	ubique	ADV	d|d|-|-|-|-|-|-|-|-	_	54	advmod	_	_
38	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	40	case	_	_
39	qualibet	quilibet	DET	p|p|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Ind	40	nmod	_	_
40	locis	locus	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	54	obl	_	_
41	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	42	cc	_	_
42	vocabulus	uocabulum	NOUN	n|n|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur	40	conj	_	_
43	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	45	case	_	_
44	suprascripta	suprascriptus	DET	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	45	det	_	_
45	casa	casa	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	54	obl	_	_
46	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	47	cc	_	_
47	res	res	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	45	conj	_	_
48	massaricia	massaricius	ADJ	a|a|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur	47	amod	_	_
49	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	51	case	_	_
50	denominato	denomino	VERB	t|t|-|s|r|p|p|m|b|-	Aspect=Perf|Case=Abl|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	51	acl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
51	loco	locus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	54	obl	_	_
52	Ancliano	Anclianum	PROPN	Propn|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	51	flat	_	_
53	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	54	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
54	pertenentes	pertineo	VERB	t|t|-|s|p|p|a|f|a|-	Aspect=Imp|Case=Acc|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Act	35	acl:relcl	_	TraditionalMood=Participium|TraditionalTense=Praesens
55	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	68	cc	_	_
56	suprascripto	suprascriptus	DET	a|a|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	57	det	_	_
57	Urso	Ursus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	68	nsubj:pass	_	_
58	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	59	cc	_	_
59	Atriperto	Atripertus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	57	conj	_	_
60	massarii	massarius	NOUN	n|n|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur	57	appos	_	_
61	exinde	exinde	ADV	d|d|-|-|-|-|-|-|-|-	_	65	advmod	_	_
62	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	63	case	_	_
63	manus	manus	NOUN	n|n|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur	65	obl	_	_
64	sua	suus	DET	a|a|3|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	63	det	_	_
65	abere	habeo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Vnoun|Voice=Act	68	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
66	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	67	cc	_	_
67	detinere	detineo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Vnoun|Voice=Act	65	conj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
68	videtur	uideo	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	54	conj	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
69	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	70	case	_	_
70	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	80	obl	_	_
71	Deo	Deus	PROPN	Propn|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	80	obl:arg	_	_
72	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	74	cc	_	_
73	tibi	tu	PRON	p|p|2|s|-|-|-|f|d|-	Case=Dat|Gender=Fem|Number=Sing|Person=2|PronType=Prs	74	det	_	_
74	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|d|-	Case=Dat|Gender=Fem|Number=Sing	71	conj	_	_
75	beate	beatus	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	77	amod	_	_
76	sancte	sanctus	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	77	amod	_	_
77	Marie	Maria	PROPN	Propn|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	74	nmod	_	_
78	semper	semper	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Tim	79	advmod:tmod	_	_
79	virginis	uirgo	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	77	nmod	_	_
80	offerrere	offero	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Vnoun|Voice=Act	81	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
81	prevideor	praeuideo	VERB	v|v|1|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
82	,	,	PUNCT	Punc	_	84	punct	_	_
83	tali	talis	DET	a|a|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|PronType=Dem	84	det	_	_
84	ordinem	ordo	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	80	obl	_	_
85	ut	ut	SCONJ	c|c|-|-|-|-|-|-|-|-	PronType=Rel	112	mark	_	_
86	ad	ab	ADP	r|r|-|-|-|-|-|-|-|-	_	88	case	_	_
87	presenti	praesens	ADJ	a|a|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	88	amod	_	_
88	die	dies	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	112	obl:tmod	_	SpaceAfter=No
89	,	,	PUNCT	Punc	_	88	punct	_	_
90	tam	tam	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Dem	92	advmod:emph	_	_
91	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	92	case	_	_
92	vita	uita	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	112	obl:tmod	_	_
93	mea	meus	DET	a|a|1|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	92	det	_	_
94	quam	quam	SCONJ	c|c|-|-|-|-|-|-|-|-	_	97	mark	_	_
95	et	et	CCONJ	d|d|-|-|-|-|-|-|-|-	_	97	advmod:emph	_	_
96	post	post	ADP	r|r|-|-|-|-|-|-|-|-	_	97	case	_	_
97	obito	obitus	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	112	advcl:cmp	_	_
98	meo	meus	DET	a|a|1|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	97	det	_	SpaceAfter=No
99	,	,	PUNCT	Punc	_	103	punct	_	_
100	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	103	case	_	_
101	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	103	det	_	_
102	Domini	Dominus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	103	nmod	_	_
103	ecclesia	ecclesia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	112	obl	_	_
104	sancte	sanctus	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	105	amod	_	_
105	Marie	Maria	PROPN	Propn|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	103	nmod	_	_
106	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	110	cc	_	_
107	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	110	case	_	_
108	eius	is	PRON	p|p|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	110	nmod	_	_
109	que	que	CCONJ	c|c|-|-|-|-|-|-|-|-	_	110	cc	_	_
110	rectoribus	rector	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	103	conj	_	_
111	sint	sum	AUX	v|v|3|p|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	112	cop	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
112	potestatem	potestas	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	80	advcl	_	_
113	suprascripta	suprascriptus	DET	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	114	det	_	_
114	casa	casa	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	121	obj	_	_
115	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	116	cc	_	_
116	res	res	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	114	conj	_	_
117	pro	pro	ADP	r|r|-|-|-|-|-|-|-|-	_	120	case	_	_
118	anime	anima	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	120	nmod	_	_
119	mee	meus	DET	a|a|1|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	118	det	_	_
120	remedium	remedium	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	121	obl	_	_
121	abendi	habeo	VERB	t|t|-|s|p|d|p|n|g|-	Aspect=Prosp|Case=Gen|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	112	acl	_	SpaceAfter=No|TraditionalMood=Gerundium
122	,	,	PUNCT	Punc	_	123	punct	_	_
123	possidendi	possideo	VERB	t|t|-|s|p|d|p|n|g|-	Aspect=Prosp|Case=Gen|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	121	conj	_	SpaceAfter=No|TraditionalMood=Gerundium
124	,	,	PUNCT	Punc	_	125	punct	_	_
125	inperandi	impero	VERB	t|t|-|s|p|d|p|n|g|-	Aspect=Prosp|Case=Gen|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	121	conj	_	SpaceAfter=No|TraditionalMood=Gerundium
126	,	,	PUNCT	Punc	_	128	punct	_	_
127	laborare	laboro	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Vnoun|Voice=Act	128	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
128	faciendi	facio	VERB	t|t|-|s|p|d|p|n|g|-	Aspect=Prosp|Case=Gen|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	121	conj	_	TraditionalMood=Gerundium
129	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	130	cc	_	_
130	usufructuandi	usufructuo	VERB	t|t|-|s|p|d|p|n|g|-	Aspect=Prosp|Case=Gen|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	121	conj	_	TraditionalMood=Gerundium
131	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	134	cc	_	_
132	causas	causa	NOUN	n|n|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur	134	obj	_	_
133	exinde	exinde	ADV	d|d|-|-|-|-|-|-|-|-	_	134	advmod	_	_
134	agendi	ago	VERB	t|t|-|s|p|d|p|n|g|-	Aspect=Prosp|Case=Gen|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	121	conj	_	SpaceAfter=No|TraditionalMood=Gerundium
135	,	,	PUNCT	Punc	_	137	punct	_	_
136	querimoniam	querimonia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	137	obj	_	_
137	faciendi	facio	VERB	t|t|-|s|p|d|p|n|g|-	Aspect=Prosp|Case=Gen|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	121	conj	_	SpaceAfter=No|TraditionalMood=Gerundium
138	,	,	PUNCT	Punc	_	140	punct	_	_
139	responsum	responsum	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	140	obj	_	_
140	reddendi	reddo	VERB	t|t|-|s|p|d|p|n|g|-	Aspect=Prosp|Case=Gen|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	121	conj	_	TraditionalMood=Gerundium
141	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	143	cc	_	_
142	finem	finis	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	143	obj	_	_
143	ponendi	pono	VERB	t|t|-|s|p|d|p|n|g|-	Aspect=Prosp|Case=Gen|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	121	conj	_	SpaceAfter=No|TraditionalMood=Gerundium
144	,	,	PUNCT	Punc	_	148	punct	_	_
145	modis	modus	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	148	obl	_	_
146	omnibus	omnis	DET	a|a|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur|PronType=Tot	145	det	_	_
147	eas	is	PRON	p|p|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Prs	148	obj	_	_
148	defensandi	defenso	VERB	t|t|-|s|p|d|p|n|g|-	Aspect=Prosp|Case=Gen|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	121	conj	_	TraditionalMood=Gerundium
149	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	150	case	_	_
150	cartula	chartula	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Degree=Dim|Gender=Fem|Number=Sing	148	obl	_	_
151	ista	iste	DET	p|p|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Dem	150	det	_	_
152	qualiter	qualiter	SCONJ	d|d|-|-|-|-|-|-|-|-	_	156	mark	_	_
153	iusta	iuxta	ADP	r|r|-|-|-|-|-|-|-|-	_	154	case	_	_
154	legem	lex	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	156	obl	_	_
155	melius	melius	ADV	d|d|-|-|-|-|-|-|-|-	_	156	advmod	_	_
156	potuerint	possum	VERB	v|v|3|p|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	148	advcl	_	TraditionalMood=Indicativus|TraditionalTense=FuturumExactum
157	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	158	case	_	_
158	pars	pars	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	156	obl	_	_
159	ipsius	ipse	DET	p|p|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	160	det	_	_
160	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	158	nmod	_	SpaceAfter=No
161	.	.	PUNCT	Punc	_	81	punct	_	_

~~~


