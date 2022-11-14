---
layout: base
title:  'Statistics of orphan in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `orphan`

This relation is universal.
There are 1 language-specific subtypes of `orphan`: <tt><a href="la_llct-dep-orphan-missing.html">orphan:missing</a></tt>.

17 nodes (0%) are attached to their parents as `orphan`.

14 instances of `orphan` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.47058823529412.

The following 8 pairs of parts of speech are connected with `orphan`: <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (5; 29% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt> (3; 18% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (3; 18% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (2; 12% instances), <tt><a href="la_llct-pos-DET.html">DET</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt> (1; 6% instances), <tt><a href="la_llct-pos-PART.html">PART</a></tt>-<tt><a href="la_llct-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-SCONJ.html">SCONJ</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 40	bgColor:blue
# visual-style 40	fgColor:white
# visual-style 35	bgColor:blue
# visual-style 35	fgColor:white
# visual-style 35 40 orphan	color:blue
1	casa	casa	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	0	root	_	_
2	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	1	det	_	_
3	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	4	case	_	_
4	fundamento	fundamentum	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	1	nmod	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	6	punct	_	_
6	curte	curtis	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	4	conj	_	SpaceAfter=No
7	,	,	PUNCT	Punc	_	8	punct	_	_
8	fenile	fenile	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	4	conj	_	SpaceAfter=No
9	,	,	PUNCT	Punc	_	10	punct	_	_
10	orto	hortus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	4	conj	_	_
11	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	16	cc	_	_
12	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	13	case	_	_
13	terra	terra	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	16	nmod	_	_
14	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	15	cc	_	_
15	vinea	uinea	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	13	conj	_	_
16	aliquantum	aliquantus	DET	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Ind	1	conj	_	_
17	quod	qui	PRON	p|p|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	22	nsubj	_	_
18	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
19	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	21	case	_	_
20	ipsa	ipse	DET	p|p|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Dem	21	det	_	_
21	casa	casa	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	22	obl	_	_
22	pertenentem	pertineo	VERB	t|t|-|s|p|p|a|f|a|-	Aspect=Imp|Case=Acc|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Act	16	acl:relcl	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Praesens
23	,	,	PUNCT	Punc	_	25	punct	_	_
24	per	per	ADP	r|r|-|-|-|-|-|-|-|-	_	25	case	_	_
25	mensura	mensura	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	22	obl	_	_
26	inter	inter	ADP	r|r|-|-|-|-|-|-|-|-	_	27	case	_	_
27	fundamento	fundamentum	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	22	nmod	_	SpaceAfter=No
28	,	,	PUNCT	Punc	_	29	punct	_	_
29	curte	curtis	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	27	conj	_	SpaceAfter=No
30	,	,	PUNCT	Punc	_	31	punct	_	_
31	orto	hortus	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	27	conj	_	_
32	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	35	cc	_	_
33	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	35	case	_	_
34	ipsa	ipse	DET	p|p|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Dem	35	det	_	_
35	terra	terra	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	1	conj	_	_
36	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	37	cc	_	_
37	vinea	uinea	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	35	conj	_	_
38	per	per	ADP	r|r|-|-|-|-|-|-|-|-	_	39	case	_	_
39	mensura	mensura	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	35	nmod	_	_
40	modiorum	modius	NOUN	n|n|-|p|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Plur	35	orphan	_	_
41	decem	decem	NUM	m|m|-|-|-|-|-|-|-|-	NumType=Card	40	nummod	_	_
42	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	43	cc	_	_
43	sistariorum	sextarius	NOUN	n|n|-|p|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Plur	35	conj	_	_
44	octo	octo	NUM	m|m|-|-|-|-|-|-|-|-	NumType=Card	43	nummod	_	SpaceAfter=No
45	,	,	PUNCT	Punc	_	46	punct	_	_
46	terra	terra	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	1	conj	_	_
47	vero	uero	ADV	d|d|-|-|-|-|-|-|-|-	_	46	discourse	_	_
48	ipsas	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	46	det	_	_
49	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	50	cc	_	_
50	vinea	uinea	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	46	conj	_	_
51	quem	qui	PRON	p|p|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|PronType=Rel	53	obj	_	_
52	superius	superius	ADV	d|d|-|-|-|-|-|-|-|c	Degree=Cmp	53	advmod	_	_
53	dedimus	do	VERB	v|v|1|p|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	50	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
54	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	56	case	_	_
55	omnibus	omnis	DET	a|a|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur|PronType=Tot	56	det	_	_
56	arboribus	arbor	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	53	nmod	_	_
57	suis	suus	DET	a|a|3|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	56	det	_	_
58	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	59	cc	_	_
59	res	res	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	56	conj	_	_
60	movile	mobilis	ADJ	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	59	amod	_	_
61	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	63	case	_	_
62	ipsa	ipse	DET	p|p|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Dem	63	det	_	_
63	casa	casa	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	59	nmod	_	_
64	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	65	case	_	_
65	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	53	obl	_	SpaceAfter=No
66	,	,	PUNCT	Punc	_	68	punct	_	_
67	excepto	excepto	ADP	r|r|-|-|-|-|-|-|-|-	_	68	case	_	_
68	porci	porcus	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	1	nmod	_	_
69	quem	qui	PRON	p|p|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|PronType=Rel	77	obj	_	_
70	hominibus	homo	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	77	nsubj	_	_
71	nostri	noster	DET	a|a|1|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	70	det	_	_
72	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	73	cc	_	_
73	nos	nos	PRON	p|p|1|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|Person=1|PronType=Prs	70	conj	_	_
74	inibi	inibi	ADV	d|d|-|-|-|-|-|-|-|-	_	77	advmod	_	_
75	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	76	case	_	_
76	societate	societas	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	77	obl	_	_
77	dati	do	VERB	t|t|-|p|r|p|p|m|n|-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	68	acl:relcl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
78	abemus	habeo	AUX	v|v|1|p|p|i|a|-|-|-	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	77	aux	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
79	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 102	bgColor:blue
# visual-style 102	fgColor:white
# visual-style 58	bgColor:blue
# visual-style 58	fgColor:white
# visual-style 58 102 orphan	color:blue
1	simul	simul	ADV	d|d|-|-|-|-|-|-|-|-	_	2	advmod	_	_
2	offero	offero	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
3	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	7	case	_	_
4	iam	iam	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Tim	5	advmod:tmod	_	_
5	predicto	praedictus	DET	a|a|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing|PronType=Dem	7	det	_	_
6	Dei	Deus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	_
7	oraculum	oraculum	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	2	obl:arg	_	_
8	una	unus	DET	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	9	det	_	_
9	petiola	petiola	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	2	obj	_	_
10	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	11	case	_	_
11	vinea	uinea	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	9	nmod	_	_
12	mea	meus	DET	a|a|1|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	11	det	_	_
13	quem	qui	PRON	p|p|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|PronType=Rel	14	obj	_	_
14	habere	habeo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Vnoun|Voice=Act	15	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
15	visu	uideo	VERB	t|t|-|s|r|p|p|m|a|-	Aspect=Perf|Case=Acc|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	9	acl:relcl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
16	sum	sum	AUX	v|v|1|s|p|i|a|-|-|-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	15	aux:pass	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
17	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	18	case	_	_
18	Castagnolo	Castaneolum	PROPN	Propn|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	14	obl	_	SpaceAfter=No
19	,	,	PUNCT	Punc	_	18	punct	_	_
20	prope	prope	ADP	r|r|-|-|-|-|-|-|-|-	_	22	case	_	_
21	ipso	ipse	DET	p|p|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	22	det	_	_
22	fluvio	fluuius	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	14	obl	_	_
23	Quesina	Quesina	PROPN	Propn|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	22	flat	_	SpaceAfter=No
24	,	,	PUNCT	Punc	_	27	punct	_	_
25	omnia	omnis	DET	a|a|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|PronType=Tot	27	det	_	_
26	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	27	det	_	_
27	clausura	clausura	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	2	conj	_	_
28	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	29	case	_	_
29	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	27	orphan	_	SpaceAfter=No
30	,	,	PUNCT	Punc	_	33	punct	_	_
31	insimul	insimul	ADV	d|d|-|-|-|-|-|-|-|-	_	33	orphan	_	_
32	ipso	ipse	DET	p|p|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	33	det	_	_
33	campo	campus	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	2	conj	_	_
34	ubi	ubi	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	37	advmod	_	_
35	ipse	ipse	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	36	nmod	_	_
36	oraculum	oraculum	NOUN	n|n|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing	37	nsubj:pass	_	_
37	constructum	construo	VERB	t|t|-|s|r|p|p|n|n|-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	33	acl:relcl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
38	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	37	aux:pass	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
39	seo	seu	CCONJ	c|c|-|-|-|-|-|-|-|-	_	40	cc	_	_
40	omnia	omnis	DET	a|a|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|PronType=Tot	33	conj	_	_
41	quantum	quantum	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	50	advmod	_	_
42	inter	inter	ADP	r|r|-|-|-|-|-|-|-|-	_	44	case	_	_
43	ista	iste	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	44	det	_	_
44	parte	pars	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	50	obl	_	_
45	Quesina	Quesina	PROPN	Propn|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	44	flat	_	_
46	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	48	cc	_	_
47	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	48	det	_	_
48	via	uia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	44	conj	_	_
49	publica	publicus	ADJ	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	48	amod	_	_
50	habere	habeo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Vnoun|Voice=Act	51	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
51	visu	uideo	VERB	t|t|-|s|r|p|p|m|a|-	Aspect=Perf|Case=Acc|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	40	acl:relcl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
52	sum	sum	AUX	v|v|1|s|p|i|a|-|-|-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	51	aux:pass	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
53	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	54	case	_	_
54	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	33	orphan	_	SpaceAfter=No
55	,	,	PUNCT	Punc	_	33	punct	_	_
56	tam	tam	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Dem	58	advmod:emph	_	_
57	mea	meus	DET	a|a|1|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	58	det	_	_
58	portione	portio	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	2	conj	_	_
59	quam	quam	SCONJ	c|c|-|-|-|-|-|-|-|-	PronType=Rel	61	mark	_	_
60	et	et	CCONJ	d|d|-|-|-|-|-|-|-|-	_	61	advmod:emph	_	_
61	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	58	advcl:cmp	_	_
62	quot	qui	PRON	p|p|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	72	nsubj	_	_
63	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	72	obl:arg	_	_
64	da	da	ADP	r|r|-|-|-|-|-|-|-|-	_	65	case	_	_
65	Atriperto	Atripertus	PROPN	Propn|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	72	obl	_	SpaceAfter=No
66	,	,	PUNCT	Punc	_	67	punct	_	_
67	nepote	nepos	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	65	appos	_	_
68	meo	meus	DET	a|a|1|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	67	det	_	SpaceAfter=No
69	,	,	PUNCT	Punc	_	65	punct	_	_
70	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	71	case	_	_
71	viganium	uiganeum	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	72	obl	_	_
72	obvinet	obuenio	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	61	acl:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
73	,	,	PUNCT	Punc	_	75	punct	_	_
74	simul	simul	ADV	d|d|-|-|-|-|-|-|-|-	_	75	cc	_	_
75	portione	portio	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	61	conj	_	_
76	mea	meus	DET	a|a|1|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	75	det	_	_
77	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	79	case	_	_
78	ipsa	ipse	DET	p|p|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Dem	79	det	_	_
79	silva	silua	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	75	nmod	_	_
80	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	81	case	_	_
81	Pericclo	periculum	PROPN	Propn|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	79	nmod	_	_
82	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	84	cc	_	_
83	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	84	case	_	_
84	valle	Valles	PROPN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	79	conj	_	_
85	Sulfiano	Sulfianum	PROPN	Propn|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	84	flat	_	_
86	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	89	cc	_	_
87	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	89	case	_	_
88	ipso	ipse	DET	p|p|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|PronType=Dem	89	det	_	_
89	monte	mons	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	79	conj	_	_
90	super	super	ADP	r|r|-|-|-|-|-|-|-|-	_	91	case	_	_
91	se	se	PRON	p|p|3|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	92	obl	_	_
92	habentes	habeo	VERB	t|t|-|s|p|p|a|m|b|-	Aspect=Imp|Case=Abl|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	89	acl	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Praesens
93	,	,	PUNCT	Punc	_	75	punct	_	_
94	tam	tam	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Dem	95	cc	_	_
95	cultus	cultus	ADJ	a|a|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	58	conj	_	_
96	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	97	cc	_	_
97	incultus	incultus	ADJ	a|a|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	95	conj	_	SpaceAfter=No
98	,	,	PUNCT	Punc	_	95	punct	_	_
99	mea	meus	DET	a|a|1|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	100	det	_	_
100	portione	portio	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	58	dislocated:obj	_	_
101	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	102	case	_	_
102	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	58	orphan	_	SpaceAfter=No
103	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 33 31 orphan	color:blue
1	simul	simul	ADV	d|d|-|-|-|-|-|-|-|-	_	2	advmod	_	_
2	offero	offero	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
3	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	7	case	_	_
4	iam	iam	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Tim	5	advmod:tmod	_	_
5	predicto	praedictus	DET	a|a|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing|PronType=Dem	7	det	_	_
6	Dei	Deus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	_
7	oraculum	oraculum	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	2	obl:arg	_	_
8	una	unus	DET	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	9	det	_	_
9	petiola	petiola	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	2	obj	_	_
10	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	11	case	_	_
11	vinea	uinea	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	9	nmod	_	_
12	mea	meus	DET	a|a|1|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	11	det	_	_
13	quem	qui	PRON	p|p|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|PronType=Rel	14	obj	_	_
14	habere	habeo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Vnoun|Voice=Act	15	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
15	visu	uideo	VERB	t|t|-|s|r|p|p|m|a|-	Aspect=Perf|Case=Acc|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	9	acl:relcl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
16	sum	sum	AUX	v|v|1|s|p|i|a|-|-|-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	15	aux:pass	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
17	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	18	case	_	_
18	Castagnolo	Castaneolum	PROPN	Propn|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	14	obl	_	SpaceAfter=No
19	,	,	PUNCT	Punc	_	18	punct	_	_
20	prope	prope	ADP	r|r|-|-|-|-|-|-|-|-	_	22	case	_	_
21	ipso	ipse	DET	p|p|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	22	det	_	_
22	fluvio	fluuius	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	14	obl	_	_
23	Quesina	Quesina	PROPN	Propn|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	22	flat	_	SpaceAfter=No
24	,	,	PUNCT	Punc	_	27	punct	_	_
25	omnia	omnis	DET	a|a|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|PronType=Tot	27	det	_	_
26	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	27	det	_	_
27	clausura	clausura	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	2	conj	_	_
28	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	29	case	_	_
29	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	27	orphan	_	SpaceAfter=No
30	,	,	PUNCT	Punc	_	33	punct	_	_
31	insimul	insimul	ADV	d|d|-|-|-|-|-|-|-|-	_	33	orphan	_	_
32	ipso	ipse	DET	p|p|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	33	det	_	_
33	campo	campus	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	2	conj	_	_
34	ubi	ubi	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	37	advmod	_	_
35	ipse	ipse	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	36	nmod	_	_
36	oraculum	oraculum	NOUN	n|n|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing	37	nsubj:pass	_	_
37	constructum	construo	VERB	t|t|-|s|r|p|p|n|n|-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	33	acl:relcl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
38	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	37	aux:pass	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
39	seo	seu	CCONJ	c|c|-|-|-|-|-|-|-|-	_	40	cc	_	_
40	omnia	omnis	DET	a|a|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|PronType=Tot	33	conj	_	_
41	quantum	quantum	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	50	advmod	_	_
42	inter	inter	ADP	r|r|-|-|-|-|-|-|-|-	_	44	case	_	_
43	ista	iste	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	44	det	_	_
44	parte	pars	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	50	obl	_	_
45	Quesina	Quesina	PROPN	Propn|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	44	flat	_	_
46	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	48	cc	_	_
47	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	48	det	_	_
48	via	uia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	44	conj	_	_
49	publica	publicus	ADJ	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	48	amod	_	_
50	habere	habeo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Vnoun|Voice=Act	51	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
51	visu	uideo	VERB	t|t|-|s|r|p|p|m|a|-	Aspect=Perf|Case=Acc|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	40	acl:relcl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
52	sum	sum	AUX	v|v|1|s|p|i|a|-|-|-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	51	aux:pass	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
53	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	54	case	_	_
54	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	33	orphan	_	SpaceAfter=No
55	,	,	PUNCT	Punc	_	33	punct	_	_
56	tam	tam	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Dem	58	advmod:emph	_	_
57	mea	meus	DET	a|a|1|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	58	det	_	_
58	portione	portio	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	2	conj	_	_
59	quam	quam	SCONJ	c|c|-|-|-|-|-|-|-|-	PronType=Rel	61	mark	_	_
60	et	et	CCONJ	d|d|-|-|-|-|-|-|-|-	_	61	advmod:emph	_	_
61	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	58	advcl:cmp	_	_
62	quot	qui	PRON	p|p|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	72	nsubj	_	_
63	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	72	obl:arg	_	_
64	da	da	ADP	r|r|-|-|-|-|-|-|-|-	_	65	case	_	_
65	Atriperto	Atripertus	PROPN	Propn|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	72	obl	_	SpaceAfter=No
66	,	,	PUNCT	Punc	_	67	punct	_	_
67	nepote	nepos	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	65	appos	_	_
68	meo	meus	DET	a|a|1|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	67	det	_	SpaceAfter=No
69	,	,	PUNCT	Punc	_	65	punct	_	_
70	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	71	case	_	_
71	viganium	uiganeum	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	72	obl	_	_
72	obvinet	obuenio	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	61	acl:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
73	,	,	PUNCT	Punc	_	75	punct	_	_
74	simul	simul	ADV	d|d|-|-|-|-|-|-|-|-	_	75	cc	_	_
75	portione	portio	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	61	conj	_	_
76	mea	meus	DET	a|a|1|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	75	det	_	_
77	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	79	case	_	_
78	ipsa	ipse	DET	p|p|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Dem	79	det	_	_
79	silva	silua	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	75	nmod	_	_
80	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	81	case	_	_
81	Pericclo	periculum	PROPN	Propn|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	79	nmod	_	_
82	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	84	cc	_	_
83	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	84	case	_	_
84	valle	Valles	PROPN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	79	conj	_	_
85	Sulfiano	Sulfianum	PROPN	Propn|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	84	flat	_	_
86	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	89	cc	_	_
87	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	89	case	_	_
88	ipso	ipse	DET	p|p|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|PronType=Dem	89	det	_	_
89	monte	mons	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	79	conj	_	_
90	super	super	ADP	r|r|-|-|-|-|-|-|-|-	_	91	case	_	_
91	se	se	PRON	p|p|3|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	92	obl	_	_
92	habentes	habeo	VERB	t|t|-|s|p|p|a|m|b|-	Aspect=Imp|Case=Abl|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	89	acl	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Praesens
93	,	,	PUNCT	Punc	_	75	punct	_	_
94	tam	tam	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Dem	95	cc	_	_
95	cultus	cultus	ADJ	a|a|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	58	conj	_	_
96	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	97	cc	_	_
97	incultus	incultus	ADJ	a|a|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	95	conj	_	SpaceAfter=No
98	,	,	PUNCT	Punc	_	95	punct	_	_
99	mea	meus	DET	a|a|1|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	100	det	_	_
100	portione	portio	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	58	dislocated:obj	_	_
101	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	102	case	_	_
102	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	58	orphan	_	SpaceAfter=No
103	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


