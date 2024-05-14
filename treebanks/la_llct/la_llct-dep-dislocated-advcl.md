---
layout: base
title:  'Statistics of dislocated:advcl in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `dislocated:advcl`

This relation is a language-specific subtype of .
There are also 9 other language-specific subtypes of `dislocated`: <tt><a href="la_llct-dep-dislocated-acl.html">dislocated:acl</a></tt>, <tt><a href="la_llct-dep-dislocated-advmod.html">dislocated:advmod</a></tt>, <tt><a href="la_llct-dep-dislocated-ccomp.html">dislocated:ccomp</a></tt>, <tt><a href="la_llct-dep-dislocated-conj.html">dislocated:conj</a></tt>, <tt><a href="la_llct-dep-dislocated-csubj.html">dislocated:csubj</a></tt>, <tt><a href="la_llct-dep-dislocated-nmod.html">dislocated:nmod</a></tt>, <tt><a href="la_llct-dep-dislocated-nsubj.html">dislocated:nsubj</a></tt>, <tt><a href="la_llct-dep-dislocated-obj.html">dislocated:obj</a></tt>, <tt><a href="la_llct-dep-dislocated-obl.html">dislocated:obl</a></tt>.

3 nodes (0%) are attached to their parents as `dislocated:advcl`.

3 instances of `dislocated:advcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 85.6666666666667.

The following 2 pairs of parts of speech are connected with `dislocated:advcl`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (2; 67% instances), <tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 97	bgColor:blue
# visual-style 97	fgColor:white
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 34 97 dislocated:advcl	color:blue
1	manifestum	manifestus	ADJ	a|a|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
2	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	_
3	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	1	obl:arg	_	_
4	Osprando	Osprandus	PROPN	Propn|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	3	appos	_	_
5	presbitero	presbyter	NOUN	n|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	4	appos	_	SpaceAfter=No
6	,	,	PUNCT	Punc	_	7	punct	_	_
7	filio	filius	NOUN	n|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	4	appos	_	_
8	quondam	quondam	ADJ	a|a|-|-|-|-|-|-|-|-	_	9	amod	_	_
9	Gausfridi	Gausfridus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	SpaceAfter=No
10	,	,	PUNCT	Punc	_	11	punct	_	_
11	quia	quia	SCONJ	c|c|-|-|-|-|-|-|-|-	_	34	mark	_	_
12	quondam	quondam	ADJ	a|a|-|-|-|-|-|-|-|-	_	13	amod	_	_
13	Deusdona	Deusdona	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	34	nsubj	_	_
14	presbiter	presbyter	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	13	appos	_	SpaceAfter=No
15	,	,	PUNCT	Punc	_	16	punct	_	_
16	filio	filius	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	13	appos	_	_
17	quondam	quondam	ADJ	a|a|-|-|-|-|-|-|-|-	_	18	amod	_	_
18	Filicausi	Filicausus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	16	nmod	_	SpaceAfter=No
19	,	,	PUNCT	Punc	_	22	punct	_	_
20	qui	qui	PRON	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	22	nsubj	_	_
21	fuit	sum	AUX	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	22	cop	_	_
22	rector	rector	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	13	acl:relcl	_	_
23	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	22	nmod	_	_
24	sancti	sanctus	ADJ	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	25	amod	_	_
25	Angeli	Angelus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	23	nmod	_	_
26	da	da	ADP	r|r|-|-|-|-|-|-|-|-	_	27	case	_	_
27	Scragio	Scragium	PROPN	Propn|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	23	nmod	_	SpaceAfter=No
28	,	,	PUNCT	Punc	_	13	punct	_	_
29	ante	ante	ADP	r|r|-|-|-|-|-|-|-|-	_	31	case	_	_
30	hos	hic	DET	p|p|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|PronType=Dem	31	det	_	_
31	annos	annus	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	34	obl	_	_
32	per	per	ADP	r|r|-|-|-|-|-|-|-|-	_	33	case	_	_
33	cartulam	chartula	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	34	obl	_	_
34	dedit	do	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	csubj	_	_
35	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	36	cc	_	_
36	tradidit	trado	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	34	conj	_	_
37	quondam	quondam	ADJ	a|a|-|-|-|-|-|-|-|-	_	38	amod	_	_
38	Alperti	Alpertus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	34	nmod	_	SpaceAfter=No
39	,	,	PUNCT	Punc	_	40	punct	_	_
40	filio	filius	NOUN	n|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	38	appos	_	_
41	bone	bonus	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	42	amod	_	_
42	memorie	memoria	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	43	nmod	_	_
43	Auradi	Auradus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	40	nmod	_	SpaceAfter=No
44	,	,	PUNCT	Punc	_	49	punct	_	_
45	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	49	det	_	_
46	iam	iam	ADV	d|d|-|-|-|-|-|-|-|-	_	49	det	_	_
47	dicta	dico	VERB	t|t|-|s|r|p|p|f|a|-	Aspect=Perf|Case=Acc|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	46	fixed	_	_
48	Dei	Deus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	49	nmod	_	_
49	ecclesia	ecclesia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	34	obj	_	_
50	sancti	sanctus	ADJ	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	51	amod	_	_
51	arcangelis	archangelus	NOUN	n|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	52	nmod	_	_
52	Mihaelis	Michael	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	49	nmod	_	_
53	una	una	ADV	d|d|-|-|-|-|-|-|-|-	_	55	case	_	_
54	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	53	fixed	_	_
55	casis	casa	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	49	nmod	_	_
56	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	57	cc	_	_
57	hominibus	homo	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	55	conj	_	_
58	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	60	cc	_	_
59	omnibus	omnis	DET	a|a|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur|PronType=Tot	60	det	_	_
60	rebus	res	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	55	conj	_	_
61	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	64	case	_	_
62	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	64	det	_	_
63	Dei	Deus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	64	nmod	_	_
64	ecclesia	ecclesia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	65	obl	_	_
65	pertenentibus	pertineo	VERB	t|t|-|p|p|p|a|f|b|-	Aspect=Imp|Case=Abl|Gender=Fem|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	60	acl	_	_
66	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	67	case	_	_
67	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	34	obl	_	_
68	sive	siue	CCONJ	c|c|-|-|-|-|-|-|-|-	_	69	cc	_	_
69	monimina	munimen	NOUN	n|n|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur	49	conj	_	_
70	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	72	cc	_	_
71	ipso	ipse	DET	p|p|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	72	nmod	_	_
72	dote	dos	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	49	conj	_	SpaceAfter=No
73	,	,	PUNCT	Punc	_	82	punct	_	_
74	ut	ut	SCONJ	c|c|-|-|-|-|-|-|-|-	_	82	mark	_	_
75	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	83	case	_	_
76	ipsius	ipse	DET	p|p|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	77	det	_	_
77	Alperti	Alpertus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	83	nmod	_	_
78	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	80	cc	_	_
79	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	80	case	_	_
80	heredibus	heres	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	77	conj	_	_
81	eius	is	DET	p|p|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Dem,Prs	80	nmod	_	_
82	esse	sum	VERB	v|v|3|s|i|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	34	advcl	_	_
83	potestate	potestas	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	82	obl	_	_
84	regendum	rego	VERB	t|t|-|s|p|d|p|n|a|-	Aspect=Imp|Case=Acc|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Ger|Voice=Pass	83	acl	_	SpaceAfter=No
85	,	,	PUNCT	Punc	_	86	punct	_	_
86	gubernandum	guberno	VERB	t|t|-|s|p|d|p|n|a|-	Aspect=Imp|Case=Acc|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Ger|Voice=Pass	84	conj	_	_
87	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	90	cc	_	_
88	ordinatione	ordinatio	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	90	obj	_	_
89	inibi	inibi	ADV	d|d|-|-|-|-|-|-|-|-	_	90	advmod	_	_
90	faciendum	facio	VERB	t|t|-|s|p|d|p|n|a|-	Aspect=Imp|Case=Acc|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Ger|Voice=Pass	84	conj	_	SpaceAfter=No
91	,	,	PUNCT	Punc	_	93	punct	_	_
92	qualiter	qualiter	SCONJ	d|d|-|-|-|-|-|-|-|-	_	93	mark	_	_
93	voluerint	uolo	VERB	v|v|3|p|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	90	advcl	_	SpaceAfter=No
94	,	,	PUNCT	Punc	_	97	punct	_	_
95	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	98	case	_	_
96	eorum	is	DET	p|p|-|p|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Dem,Prs	98	nmod	_	_
97	esse	sum	VERB	v|v|3|s|i|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	34	dislocated:advcl	_	_
98	potestate	potestas	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	97	obl	_	_
99	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	100	case	_	_
100	prefinito	praefinitus	ADJ	a|a|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	97	obl	_	SpaceAfter=No
101	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 85	bgColor:blue
# visual-style 85	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 85 dislocated:advcl	color:blue
1	manifestu	manifestus	ADJ	a|a|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	0	root	_	_
2	sum	sum	AUX	v|v|1|s|p|i|a|-|-|-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	_
3	ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	1	nsubj	_	_
4	Aufridi	Aufridus	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	3	appos	_	_
5	presbiter	presbyter	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	4	appos	_	SpaceAfter=No
6	,	,	PUNCT	Punc	_	7	punct	_	_
7	filius	filius	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	4	appos	_	_
8	quondam	quondam	ADJ	a|a|-|-|-|-|-|-|-|-	_	9	amod	_	_
9	Fridiperti	Fridipertus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	SpaceAfter=No
10	,	,	PUNCT	Punc	_	11	punct	_	_
11	quia	quia	SCONJ	c|c|-|-|-|-|-|-|-|-	_	31	mark	_	_
12	tu	tu	PRON	p|p|2|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Person=2|PronType=Prs	31	nsubj	_	_
13	Ambrosius	Ambrosius	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	12	appos	_	SpaceAfter=No
14	,	,	PUNCT	Punc	_	21	punct	_	_
15	gratia	gratia	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	21	nmod	_	_
16	Dei	Deus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	15	nmod	_	_
17	humilis	humilis	ADJ	a|a|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	21	amod	_	_
18	sancte	sanctus	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	20	amod	_	_
19	Lucane	lucanus	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	20	amod	_	_
20	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	21	nmod	_	_
21	episcopus	episcopus	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	13	appos	_	SpaceAfter=No
22	,	,	PUNCT	Punc	_	12	punct	_	_
23	per	per	ADP	r|r|-|-|-|-|-|-|-|-	_	24	case	_	_
24	cartula	chartula	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	31	obl	_	_
25	livellario	libellarius	ADJ	a|a|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	26	amod	_	_
26	ordine	ordo	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	31	obl	_	_
27	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	30	mark	_	_
28	censum	census	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	30	obj	_	_
29	vobis	uos	PRON	p|p|2|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur|Person=2|PronType=Prs	30	obl:arg	_	_
30	persolvendum	persoluo	VERB	t|t|-|s|p|d|p|n|a|-	Aspect=Imp|Case=Acc|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Ger|Voice=Pass	31	advcl	_	_
31	dedisti	do	VERB	v|v|2|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	1	advcl	_	_
32	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	31	obl:arg	_	SpaceAfter=No
33	,	,	PUNCT	Punc	_	36	punct	_	_
34	id	is	PRON	p|p|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Dem,Prs	36	advmod:emph	_	_
35	est	sum	VERB	v|v|3|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	34	fixed	_	_
36	casa	casa	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	31	obj	_	_
37	illa	ille	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	36	det	_	_
38	quod	qui	PRON	p|p|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	40	nsubj	_	_
39	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	40	cop	_	_
40	solario	solarium	NOUN	n|n|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing	36	acl:relcl	_	SpaceAfter=No
41	,	,	PUNCT	Punc	_	42	punct	_	_
42	pertenens	pertineo	VERB	t|t|-|s|p|p|a|f|n|-	Aspect=Imp|Case=Nom|Gender=Fem|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	36	acl	_	_
43	episcopatui	episcopatus	NOUN	n|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	42	obl:arg	_	_
44	vestro	uester	DET	a|a|2|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Number[psor]=Plur|Person=2|Poss=Yes|PronType=Prs	43	det	_	_
45	sancti	sanctus	ADJ	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	46	amod	_	_
46	Martini	Martinus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	43	nmod	_	SpaceAfter=No
47	,	,	PUNCT	Punc	_	50	punct	_	_
48	que	qui	PRON	p|p|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing|PronType=Rel	50	nsubj:pass	_	_
49	esse	sum	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	50	xcomp	_	_
50	videtur	uideo	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	36	acl:relcl	_	_
51	prope	prope	ADP	r|r|-|-|-|-|-|-|-|-	_	53	case	_	_
52	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	53	det	_	_
53	ecclesia	ecclesia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	49	obl	_	_
54	sancti	sanctus	ADJ	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	55	amod	_	_
55	Martini	Martinus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	53	nmod	_	SpaceAfter=No
56	,	,	PUNCT	Punc	_	60	punct	_	_
57	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	60	cc	_	_
58	fuit	sum	AUX	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	60	cop	_	_
59	quondam	quondam	ADJ	a|a|-|-|-|-|-|-|-|-	_	60	amod	_	_
60	Ati	Atus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	50	conj	_	_
61	clerici	clericus	NOUN	n|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	60	nmod	_	_
62	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	63	case	_	_
63	loco	locus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	60	nmod	_	_
64	Lupelia	Lupelia	PROPN	Propn|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	63	flat	_	SpaceAfter=No
65	,	,	PUNCT	Punc	_	67	punct	_	_
66	predicta	praedictus	DET	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	67	det	_	_
67	casa	casa	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	85	obj	_	_
68	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	69	case	_	_
69	fundamento	fundamentum	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	67	nmod	_	_
70	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	72	cc	_	_
71	omnem	omnis	DET	a|a|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing|PronType=Tot	72	det	_	_
72	edeficio	aedificium	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	69	conj	_	_
73	suo	suus	DET	a|a|3|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes	72	det	_	_
74	seu	seu	CCONJ	c|c|-|-|-|-|-|-|-|-	_	75	cc	_	_
75	curticella	curticella	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	69	conj	_	SpaceAfter=No
76	,	,	PUNCT	Punc	_	67	punct	_	_
77	quantum	quantum	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	82	advmod	_	_
78	exinde	exinde	ADV	d|d|-|-|-|-|-|-|-|-	_	82	advmod	_	_
79	ipsius	ipse	DET	p|p|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	80	det	_	_
80	Ati	Atus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	82	obl:arg	_	_
81	clerici	clericus	NOUN	n|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	80	nmod	_	_
82	pertenuit	pertineo	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	85	acl:relcl	_	SpaceAfter=No
83	,	,	PUNCT	Punc	_	82	punct	_	_
84	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	85	obl:arg	_	_
85	dedisti	do	VERB	v|v|2|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	1	dislocated:advcl	_	_
86	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	87	case	_	_
87	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	85	obl	_	SpaceAfter=No
88	,	,	PUNCT	Punc	_	89	punct	_	_
89	tali	talis	DET	a|a|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|PronType=Dem	91	det	_	_
90	vero	uero	ADV	d|d|-|-|-|-|-|-|-|-	_	85	advmod	_	_
91	ordine	ordo	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	85	obl	_	SpaceAfter=No
92	,	,	PUNCT	Punc	_	104	punct	_	_
93	ut	ut	SCONJ	c|c|-|-|-|-|-|-|-|-	_	104	mark	_	_
94	admodum	admodum	ADV	d|d|-|-|-|-|-|-|-|-	_	104	advmod	_	_
95	diebus	dies	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	104	obl	_	_
96	vite	uita	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	95	nmod	_	_
97	me	meus	DET	a|a|1|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	96	det	_	_
98	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	105	case	_	_
99	mea	meus	DET	a|a|1|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	105	det	_	_
100	qui	qui	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	102	det	_	_
101	supra	supra	ADV	d|d|-|-|-|-|-|-|-|-	_	100	fixed	_	_
102	Aufrido	Aufridus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	99	nmod	_	_
103	presbitero	presbyter	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	102	appos	_	_
104	sit	sum	VERB	v|v|3|s|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	91	acl	_	_
105	potestatem	potestas	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	104	obl	_	SpaceAfter=No
106	,	,	PUNCT	Punc	_	107	punct	_	_
107	abendum	habeo	VERB	t|t|-|s|p|d|p|n|a|-	Aspect=Imp|Case=Acc|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Ger|Voice=Pass	105	acl	_	SpaceAfter=No
108	,	,	PUNCT	Punc	_	109	punct	_	_
109	regendum	rego	VERB	t|t|-|s|p|d|p|n|a|-	Aspect=Imp|Case=Acc|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Ger|Voice=Pass	107	conj	_	SpaceAfter=No
110	,	,	PUNCT	Punc	_	111	punct	_	_
111	gubernandum	guberno	VERB	t|t|-|s|p|d|p|n|a|-	Aspect=Imp|Case=Acc|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Ger|Voice=Pass	107	conj	_	SpaceAfter=No
112	,	,	PUNCT	Punc	_	113	punct	_	_
113	ita	ita	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Dem	104	advmod	_	_
114	ut	ut	SCONJ	c|c|-|-|-|-|-|-|-|-	_	116	mark	_	_
115	non	non	PART	d|d|-|-|-|-|-|-|-|-	Polarity=Neg	116	advmod	_	_
116	pegioretur	peioro	VERB	v|v|3|s|p|s|p|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	104	advcl	_	SpaceAfter=No
117	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


