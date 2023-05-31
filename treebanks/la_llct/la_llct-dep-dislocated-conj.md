---
layout: base
title:  'Statistics of dislocated:conj in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `dislocated:conj`

This relation is a language-specific subtype of .
There are also 9 other language-specific subtypes of `dislocated`: <tt><a href="la_llct-dep-dislocated-acl.html">dislocated:acl</a></tt>, <tt><a href="la_llct-dep-dislocated-advcl.html">dislocated:advcl</a></tt>, <tt><a href="la_llct-dep-dislocated-advmod.html">dislocated:advmod</a></tt>, <tt><a href="la_llct-dep-dislocated-ccomp.html">dislocated:ccomp</a></tt>, <tt><a href="la_llct-dep-dislocated-csubj.html">dislocated:csubj</a></tt>, <tt><a href="la_llct-dep-dislocated-nmod.html">dislocated:nmod</a></tt>, <tt><a href="la_llct-dep-dislocated-nsubj.html">dislocated:nsubj</a></tt>, <tt><a href="la_llct-dep-dislocated-obj.html">dislocated:obj</a></tt>, <tt><a href="la_llct-dep-dislocated-obl.html">dislocated:obl</a></tt>.

27 nodes (0%) are attached to their parents as `dislocated:conj`.

27 instances of `dislocated:conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 111.37037037037.

The following 3 pairs of parts of speech are connected with `dislocated:conj`: <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (25; 93% instances), <tt><a href="la_llct-pos-DET.html">DET</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-SCONJ.html">SCONJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 35	bgColor:blue
# visual-style 35	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 35 dislocated:conj	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	4	cc	_	_
2	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	5	case	_	_
3	mea	meus	DET	a|a|1|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	5	det	_	_
4	reservo	reseruo	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	potestatem	potestas	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	4	obl	_	_
6	omnia	omnis	DET	a|a|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|PronType=Tot	7	nmod	_	_
7	res	res	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	4	obj	_	_
8	movile	mobilis	ADJ	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	7	amod	_	_
9	pro	pro	ADP	r|r|-|-|-|-|-|-|-|-	_	10	case	_	_
10	anima	anima	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	12	obl	_	_
11	mea	meus	DET	a|a|1|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	10	det	_	_
12	dandum	do	VERB	t|t|-|s|p|d|p|n|a|-	Aspect=Imp|Case=Acc|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Ger|Voice=Pass	5	ccomp	_	_
13	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	14	cc	_	_
14	faciendum	facio	VERB	t|t|-|s|p|d|p|n|a|-	Aspect=Imp|Case=Acc|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Ger|Voice=Pass	12	conj	_	_
15	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	17	cc	_	_
16	uno	unus	NUM	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|NumType=Card	17	nummod	_	_
17	petio	petium	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	7	conj	_	_
18	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	19	case	_	_
19	terra	terra	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	17	nmod	_	_
20	mea	meus	DET	a|a|1|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	19	det	_	_
21	quem	qui	PRON	p|p|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|PronType=Rel	22	obj	_	_
22	abeo	habeo	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	17	acl:relcl	_	_
23	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	24	case	_	_
24	loco	locus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	22	obl	_	_
25	Rocta	Rupta	PROPN	Propn|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	24	flat	_	SpaceAfter=No
26	,	,	PUNCT	Punc	_	30	punct	_	_
27	qui	qui	PRON	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	30	nsubj	_	_
28	latus	latus	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	30	obj	_	_
29	unum	unus	NUM	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|NumType=Card	28	nummod	_	_
30	tenet	teneo	VERB	v|v|3|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	17	acl:relcl	_	_
31	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	32	case	_	_
32	via	uia	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	30	obl	_	_
33	publica	publicus	ADJ	a|a|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	32	amod	_	SpaceAfter=No
34	,	,	PUNCT	Punc	_	17	punct	_	_
35	petia	petia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	7	dislocated:conj	_	_
36	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	35	det	_	_
37	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	38	case	_	_
38	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	35	nmod	_	SpaceAfter=No
39	,	,	PUNCT	Punc	_	40	punct	_	_
40	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	35	cc	_	_
41	vinea	uinea	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	35	nmod	_	_
42	mea	meus	DET	a|a|1|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	41	det	_	_
43	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	44	cc	_	_
44	vergario	uirgareum	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	41	conj	_	_
45	quam	qui	PRON	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Rel	46	obj	_	_
46	abeo	habeo	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	41	acl:relcl	_	_
47	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	48	case	_	_
48	Blagniano	Blanianum	PROPN	Propn|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	46	obl	_	SpaceAfter=No
49	,	,	PUNCT	Punc	_	57	punct	_	_
50	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	52	det	_	_
51	suprascripta	suprascriptus	DET	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	52	det	_	_
52	terra	terra	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	57	nsubj	_	_
53	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	54	cc	_	_
54	vinea	uinea	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	52	conj	_	_
55	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	59	case	_	_
56	mea	meus	DET	a|a|1|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	59	det	_	_
57	reservo	reseruo	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	_	_
58	esse	sum	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	57	xcomp	_	_
59	potestatem	potestas	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	58	obl	_	_
60	faciendi	facio	VERB	t|t|-|s|p|d|p|n|g|-	Aspect=Imp|Case=Gen|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Ger|Voice=Pass	59	acl:relcl	_	_
61	exinde	exinde	ADV	d|d|-|-|-|-|-|-|-|-	_	63	advmod	_	_
62	quod	qui	PRON	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	63	obj	_	_
63	voluero	uolo	VERB	v|v|1|s|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	60	ccomp	_	SpaceAfter=No
64	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 63	bgColor:blue
# visual-style 63	fgColor:white
# visual-style 55	bgColor:blue
# visual-style 55	fgColor:white
# visual-style 55 63 dislocated:conj	color:blue
1	manifestu	manifestus	ADJ	a|a|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	0	root	_	_
2	sum	sum	AUX	v|v|1|s|p|i|a|-|-|-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	_
3	ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	1	nsubj	_	_
4	Cristino	Christinus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	3	appos	_	_
5	presbitero	presbyter	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	4	appos	_	SpaceAfter=No
6	,	,	PUNCT	Punc	_	7	punct	_	_
7	avitatore	habitator	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	4	appos	_	_
8	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	9	case	_	_
9	loco	locus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	7	nmod	_	_
10	Peraniano	Peranianum	PROPN	Propn|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	9	flat	_	SpaceAfter=No
11	,	,	PUNCT	Punc	_	12	punct	_	_
12	filio	filius	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	4	appos	_	_
13	quondam	quondam	ADJ	a|a|-|-|-|-|-|-|-|-	_	14	amod	_	_
14	Raminghi	Ramingus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	12	nmod	_	SpaceAfter=No
15	,	,	PUNCT	Punc	_	26	punct	_	_
16	quia	quia	SCONJ	c|c|-|-|-|-|-|-|-|-	_	26	mark	_	_
17	per	per	ADP	r|r|-|-|-|-|-|-|-|-	_	19	case	_	_
18	hanc	hic	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	19	det	_	_
19	cartula	chartula	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	26	obl	_	_
20	pro	pro	ADP	r|r|-|-|-|-|-|-|-|-	_	21	case	_	_
21	redentione	redemptio	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	26	obl	_	_
22	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	23	cc	_	_
23	salute	salus	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	21	conj	_	_
24	anime	anima	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	23	nmod	_	_
25	mee	meus	DET	a|a|1|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	24	det	_	_
26	offero	offero	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	1	advcl	_	_
27	Deo	Deus	PROPN	Propn|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	26	obl:arg	_	_
28	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	29	cc	_	_
29	tibi	tu	PRON	p|p|2|s|-|-|-|f|d|-	Case=Dat|Gender=Fem|Number=Sing|Person=2|PronType=Prs	27	conj	_	_
30	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|d|-	Case=Dat|Gender=Fem|Number=Sing	29	appos	_	_
31	Domini	Dominus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	30	nmod	_	_
32	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	33	cc	_	_
33	Salvatoris	saluator	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	31	conj	_	SpaceAfter=No
34	,	,	PUNCT	Punc	_	35	punct	_	_
35	sita	sino	VERB	t|t|-|s|r|p|p|f|a|-	Aspect=Perf|Case=Acc|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	30	acl	_	_
36	infra	infra	ADP	r|r|-|-|-|-|-|-|-|-	_	37	case	_	_
37	civitate	ciuitas	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	35	obl	_	_
38	Lucense	lucensis	ADJ	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	37	amod	_	_
39	ante	ante	ADP	r|r|-|-|-|-|-|-|-|-	_	40	case	_	_
40	ecclesiam	ecclesia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	35	obl	_	_
41	sancti	sanctus	ADJ	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	42	amod	_	_
42	Martini	Martinus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	40	nmod	_	_
43	domus	domus	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	40	nmod	_	_
44	episcoporum	episcopus	NOUN	n|n|-|p|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Plur	43	nmod	_	SpaceAfter=No
45	,	,	PUNCT	Punc	_	51	punct	_	_
46	ubi	ubi	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	51	advmod	_	_
47	Aufridi	Aufridus	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	51	nsubj:pass	_	_
48	presbiter	presbyter	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	47	appos	_	_
49	rector	rector	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	51	xcomp	_	_
50	esse	sum	AUX	v|v|-|-|p|n|a|-|-|-	Tense=Pres|VerbForm=Inf|Voice=Act	49	cop	_	_
51	videtur	uideo	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	30	acl:relcl	_	SpaceAfter=No
52	,	,	PUNCT	Punc	_	55	punct	_	_
53	id	is	PRON	p|p|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Dem,Prs	55	advmod:emph	_	_
54	est	sum	VERB	v|v|3|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	53	fixed	_	_
55	omnia	omnis	DET	a|a|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|PronType=Tot	26	obl	_	_
56	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	59	cc	_	_
57	ex	ex	ADP	r|r|-|-|-|-|-|-|-|-	_	59	case	_	_
58	omnibus	omnis	DET	a|a|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur|PronType=Tot	59	det	_	_
59	rebus	res	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	55	conj	_	_
60	meis	meus	DET	a|a|1|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	59	det	_	SpaceAfter=No
61	,	,	PUNCT	Punc	_	63	punct	_	_
62	tam	tam	CCONJ	d|d|-|-|-|-|-|-|-|-	_	64	cc	_	_
63	casis	casa	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	55	dislocated:conj	_	_
64	domnicatis	domnicatus	ADJ	a|a|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	63	conj	_	_
65	quam	quam	CCONJ	c|c|-|-|-|-|-|-|-|-	_	67	cc	_	_
66	et	et	ADV	d|d|-|-|-|-|-|-|-|-	_	65	fixed	_	_
67	massaricias	massaricius	ADJ	a|a|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur	64	conj	_	SpaceAfter=No
68	,	,	PUNCT	Punc	_	70	punct	_	_
69	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	70	case	_	_
70	fundamentis	fundamentum	NOUN	n|n|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur	63	nmod	_	_
71	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	73	cc	_	_
72	universis	uniuersus	ADJ	a|a|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	73	amod	_	_
73	fabricis	fabrica	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	70	conj	_	SpaceAfter=No
74	,	,	PUNCT	Punc	_	75	punct	_	_
75	curtis	curtis	NOUN	n|n|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur	70	conj	_	SpaceAfter=No
76	,	,	PUNCT	Punc	_	77	punct	_	_
77	ortalia	hortale	NOUN	n|n|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur	70	conj	_	SpaceAfter=No
78	,	,	PUNCT	Punc	_	79	punct	_	_
79	terris	terra	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	70	conj	_	SpaceAfter=No
80	,	,	PUNCT	Punc	_	81	punct	_	_
81	vineis	uinea	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	70	conj	_	SpaceAfter=No
82	,	,	PUNCT	Punc	_	83	punct	_	_
83	olivetis	oliuetum	NOUN	n|n|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur	70	conj	_	SpaceAfter=No
84	,	,	PUNCT	Punc	_	85	punct	_	_
85	silvis	silua	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	70	conj	_	SpaceAfter=No
86	,	,	PUNCT	Punc	_	87	punct	_	_
87	virgariis	uirgareum	NOUN	n|n|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur	70	conj	_	SpaceAfter=No
88	,	,	PUNCT	Punc	_	89	punct	_	_
89	pratis	pratum	NOUN	n|n|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur	70	conj	_	SpaceAfter=No
90	,	,	PUNCT	Punc	_	91	punct	_	_
91	pascuis	pascuum	NOUN	n|n|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur	70	conj	_	SpaceAfter=No
92	,	,	PUNCT	Punc	_	94	punct	_	_
93	cultis	cultus	ADJ	a|a|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	94	amod	_	_
94	rebus	res	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	70	conj	_	_
95	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	96	cc	_	_
96	incultis	incultus	ADJ	a|a|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	93	conj	_	SpaceAfter=No
97	,	,	PUNCT	Punc	_	98	punct	_	_
98	movilia	mobilis	ADJ	a|a|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur	70	conj	_	_
99	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	100	cc	_	_
100	inmovilia	immobilis	ADJ	a|a|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur	70	conj	_	_
101	seo	seu	CCONJ	c|c|-|-|-|-|-|-|-|-	_	102	cc	_	_
102	semoventibus	semouens	NOUN	n|n|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur	70	conj	_	SpaceAfter=No
103	,	,	PUNCT	Punc	_	114	punct	_	_
104	quacumque	quicumque	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Ind	105	det	_	_
105	res	res	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	108	nmod	_	_
106	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	108	case	_	_
107	qualibet	quilibet	DET	p|p|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Ind	108	nmod	_	_
108	locas	locum	NOUN	n|n|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur	114	obl	_	_
109	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	110	cc	_	_
110	vocabulas	uocabulum	NOUN	n|n|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur	108	conj	_	_
111	abere	habeo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	108	xcomp	_	_
112	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	113	cc	_	_
113	possidere	possideo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	108	conj	_	_
114	visu	uideo	VERB	t|t|-|s|r|p|p|m|a|-	Aspect=Perf|Case=Acc|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	26	ccomp	_	_
115	sum	sum	AUX	v|v|1|s|p|i|a|-|-|-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	114	aux:pass	_	SpaceAfter=No
116	,	,	PUNCT	Punc	_	123	punct	_	_
117	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	123	cc	_	_
118	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	122	obl:arg	_	_
119	per	per	ADP	r|r|-|-|-|-|-|-|-|-	_	121	case	_	_
120	quocumque	quicumque	DET	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Ind	121	nmod	_	_
121	ordine	ordo	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	122	obl	_	_
122	pertenere	pertineo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	123	xcomp	_	_
123	videtur	uideo	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	114	conj	_	SpaceAfter=No
124	,	,	PUNCT	Punc	_	127	punct	_	_
125	tam	tam	CCONJ	d|d|-|-|-|-|-|-|-|-	_	127	cc	_	_
126	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	127	case	_	_
127	iura	ius	NOUN	n|n|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur	122	conj	_	_
128	parentum	parens	NOUN	n|n|-|p|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Plur	127	nmod	_	_
129	meorum	meus	DET	a|a|1|p|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Plur|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	128	det	_	_
130	quam	quam	CCONJ	c|c|-|-|-|-|-|-|-|-	_	134	cc	_	_
131	que	que	CCONJ	c|c|-|-|-|-|-|-|-|-	_	130	fixed	_	_
132	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	127	cc	_	_
133	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	134	case	_	_
134	conquisito	conquisitum	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	127	conj	_	_
135	meo	meus	DET	a|a|1|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	134	det	_	SpaceAfter=No
136	,	,	PUNCT	Punc	_	144	punct	_	_
137	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	144	cc	_	_
138	quantum	quantum	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	144	advmod	_	_
139	a	ab	ADP	r|r|-|-|-|-|-|-|-|-	_	140	case	_	_
140	germanis	germanus	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	144	obl	_	_
141	meis	meus	DET	a|a|1|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	140	det	_	_
142	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	143	case	_	_
143	sorte	sors	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	144	obl	_	_
144	conpetit	competo	VERB	v|v|3|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	114	conj	_	_
145	aut	aut	CCONJ	c|c|-|-|-|-|-|-|-|-	_	147	cc	_	_
146	conpetere	competo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	147	xcomp	_	_
147	debentur	debeo	VERB	v|v|3|p|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod|Voice=Pass	144	conj	_	SpaceAfter=No
148	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 16 dislocated:conj	color:blue
1	tamen	tamen	ADV	d|d|-|-|-|-|-|-|-|-	_	2	advmod	_	_
2	volo	uolo	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	iscire	scio	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	2	xcomp	_	_
4	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	5	cc	_	_
5	inquirere	inquiro	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	3	conj	_	_
6	pars	pars	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	3	iobj	_	_
7	ipsi	ipse	DET	p|p|-|s|-|-|-|f|d|-	Case=Dat|Gender=Fem|Number=Sing|PronType=Dem	8	det	_	_
8	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	_
9	pro	pro	ADP	r|r|-|-|-|-|-|-|-|-	_	10	case	_	_
10	quit	quis	PRON	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Ind	12	obl	_	_
11	eas	is	PRON	p|p|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Dem,Prs	12	obj	_	_
12	abet	habeo	VERB	v|v|3|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	_	_
13	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	14	cc	_	_
14	detinet	detineo	VERB	v|v|3|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	conj	_	SpaceAfter=No
15	,	,	PUNCT	Punc	_	16	punct	_	_
16	si	si	SCONJ	c|c|-|-|-|-|-|-|-|-	_	12	dislocated:conj	_	_
17	abet	habeo	VERB	v|v|3|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	conj	_	_
18	exinde	exinde	ADV	d|d|-|-|-|-|-|-|-|-	_	17	advmod	_	_
19	monimen	munimen	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	17	obj	_	_
20	aut	aut	CCONJ	c|c|-|-|-|-|-|-|-|-	_	21	cc	_	_
21	possessio	possessio	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	19	conj	_	_
22	per	per	ADP	r|r|-|-|-|-|-|-|-|-	_	23	case	_	_
23	quas	qui	PRON	p|p|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur|PronType=Rel	30	obl	_	_
24	legibus	lex	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	29	obl	_	_
25	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	26	case	_	_
26	parte	pars	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	29	obl	_	_
27	ipsius	ipse	DET	p|p|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	28	det	_	_
28	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	26	nmod	_	_
29	defendere	defendo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	30	xcomp	_	_
30	possam	possum	VERB	v|v|1|s|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|VerbType=Mod|Voice=Act	19	acl:relcl	_	SpaceAfter=No
31	;	;	PUNCT	Punc	_	2	punct	_	_

~~~


