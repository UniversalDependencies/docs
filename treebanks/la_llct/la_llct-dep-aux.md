---
layout: base
title:  'Statistics of aux in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="la_llct-dep-aux-pass.html">aux:pass</a></tt>.

21 nodes (0%) are attached to their parents as `aux`.

18 instances of `aux` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.0952380952381.

The following 3 pairs of parts of speech are connected with `aux`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-AUX.html">AUX</a></tt> (19; 90% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-AUX.html">AUX</a></tt> (1; 5% instances), <tt><a href="la_llct-pos-PRON.html">PRON</a></tt>-<tt><a href="la_llct-pos-AUX.html">AUX</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 aux	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	4	cc	_	_
2	ipse	ipse	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
3	Dulciolus	Dulciolus	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
4	professus	profiteor	VERB	t|t|-|s|r|p|a|m|n|-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
6	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	7	cc	_	_
7	manifestavit	manifesto	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	conj	_	_
8	dicens	dico	VERB	t|t|-|s|p|p|a|m|n|-	Aspect=Imp|Case=Nom|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	4	xcomp	_	SpaceAfter=No
9	:	:	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 19 aux	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	17	cc	_	_
2	post	post	ADP	r|r|-|-|-|-|-|-|-|-	_	4	case	_	_
3	viro	uero	ADV	d|d|-|-|-|-|-|-|-|-	_	4	advmod	_	_
4	decesso	decessus	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	17	nmod	_	_
5	adque	atque	CCONJ	c|c|-|-|-|-|-|-|-|-	_	6	cc	_	_
6	transito	transitus	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	4	conj	_	_
7	tuo	tuus	DET	a|a|2|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=2|Poss=Yes|PronType=Prs	4	det	_	_
8	suprascripta	suprascriptus	DET	a|a|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	9	det	_	_
9	casa	casa	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
10	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	11	cc	_	_
11	ris	res	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	9	conj	_	SpaceAfter=No
12	,	,	PUNCT	Punc	_	13	punct	_	_
13	omnia	omnis	DET	a|a|-|p|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Plur|PronType=Tot	4	nmod	_	_
14	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	16	cc	_	_
15	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	16	case	_	_
16	omnibus	omnis	DET	a|a|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur|PronType=Tot	13	conj	_	_
17	volo	uolo	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
18	ut	ut	SCONJ	c|c|-|-|-|-|-|-|-|-	_	4	mark	_	_
19	sit	sum	AUX	v|v|3|s|p|s|a|-|-|-	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
20	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	21	case	_	_
21	potestatem	potestas	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	4	nmod	_	_
22	et	et	ADV	c|c|-|-|-|-|-|-|-|-	_	4	advmod:emph	_	_
23	offertam	offero	VERB	t|t|-|s|r|p|p|f|n|-	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	4	ccomp	_	_
24	adque	atque	CCONJ	c|c|-|-|-|-|-|-|-|-	_	25	cc	_	_
25	tradita	trado	VERB	t|t|-|s|r|p|p|f|n|-	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	4	conj	_	_
26	propter	propter	ADP	r|r|-|-|-|-|-|-|-|-	_	29	case	_	_
27	Dei	Deus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	29	nmod	_	_
28	omnipotenti	omnipotens	ADJ	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	27	amod	_	_
29	timore	timor	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	4	nmod	_	_
30	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	33	cc	_	_
31	animem	anima	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	34	nmod	_	_
32	nostre	noster	DET	a|a|1|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	31	det	_	_
33	adquirendi	acquiro	VERB	t|t|-|s|p|d|p|n|g|-	Aspect=Imp|Case=Gen|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Ger|Voice=Pass	29	conj	_	_
34	remedium	remedium	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	33	obj	_	_
35	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	36	case	_	_
36	eclesia	ecclesia	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	4	nmod	_	_
37	beate	beatus	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	39	amod	_	_
38	sancte	sanctus	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	39	amod	_	_
39	Agathe	Agatha	PROPN	Propn|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	36	nmod	_	SpaceAfter=No
40	,	,	PUNCT	Punc	_	44	punct	_	_
41	ubi	ubi	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	45	advmod	_	_
42	Auripert	Auripertus	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	44	nsubj:pass	_	_
43	presbitero	presbyter	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	42	appos	_	_
44	videtur	uideo	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	36	acl:relcl	_	_
45	esset	sum	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	44	xcomp	_	SpaceAfter=No
46	,	,	PUNCT	Punc	_	47	punct	_	_
47	sito	sino	VERB	t|t|-|s|r|p|p|n|b|-	Aspect=Perf|Case=Abl|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	36	acl	_	_
48	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	49	case	_	_
49	loco	locus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	47	obl	_	_
50	Tempaniano	Timpanianum	PROPN	Propn|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	49	flat	_	SpaceAfter=No
51	,	,	PUNCT	Punc	_	36	punct	_	_
52	excepto	excepto	SCONJ	c|c|-|-|-|-|-|-|-|-	_	69	mark	_	_
53	suprascripta	suprascriptus	DET	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	54	det	_	_
54	ancilla	ancilla	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	68	obj	_	_
55	ipsi	ipse	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	56	det	_	_
56	Auripertu	Auripertus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	69	nsubj	_	_
57	presbitero	presbyter	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	56	appos	_	_
58	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	59	cc	_	_
59	posterus	posterus	ADJ	a|a|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	56	conj	_	_
60	eius	is	PRON	p|p|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Dem,Prs	59	det	_	_
61	pos	post	ADP	r|r|-|-|-|-|-|-|-|-	_	62	case	_	_
62	decesso	decessus	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	68	obl	_	_
63	tuo	tuus	DET	a|a|2|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=2|Poss=Yes|PronType=Prs	62	det	_	_
64	pro	pro	ADP	r|r|-|-|-|-|-|-|-|-	_	65	case	_	_
65	facinoribus	facinus	NOUN	n|n|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur	68	obl	_	_
66	nostris	noster	DET	a|a|1|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	65	det	_	_
67	liveram	liber	ADJ	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	68	xcomp	_	_
68	emittere	emitto	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	69	xcomp	_	_
69	diveas	debeo	VERB	v|v|3|s|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod|Voice=Act	4	advcl	_	_
70	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	78	cc	_	_
71	cartula	chartula	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	77	obj	_	_
72	apsolutionis	absolutio	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	71	nmod	_	_
73	absque	absque	ADP	r|r|-|-|-|-|-|-|-|-	_	75	case	_	_
74	omnis	omnis	DET	a|a|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur|PronType=Tot	75	det	_	_
75	condicionis	conditio	NOUN	n|n|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur	77	obl	_	_
76	eis	is	PRON	p|p|-|s|-|-|-|f|d|-	Case=Dat|Gender=Fem|Number=Sing|Person=3|PronType=Dem,Prs	77	obl:arg	_	_
77	emittere	emitto	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	78	xcomp	_	_
78	diveas	debeo	VERB	v|v|3|s|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod|Voice=Act	69	conj	_	SpaceAfter=No
79	;	;	PUNCT	Punc	_	17	punct	_	_

~~~


~~~ conllu
# visual-style 83	bgColor:blue
# visual-style 83	fgColor:white
# visual-style 79	bgColor:blue
# visual-style 79	fgColor:white
# visual-style 79 83 aux	color:blue
1	unde	unde	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	2	advmod	_	_
2	spondeo	spondeo	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
4	qui	qui	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	6	det	_	_
5	supra	supra	ADV	d|d|-|-|-|-|-|-|-|-	_	4	fixed	_	_
6	Bingulus	Bingulus	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	3	appos	_	_
7	una	una	ADV	d|d|-|-|-|-|-|-|-|-	_	9	case	_	_
8	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	7	fixed	_	_
9	heredibus	heres	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	2	obl	_	_
10	meis	meus	DET	a|a|1|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	9	det	_	_
11	tibi	tu	PRON	p|p|2|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=2|PronType=Prs	2	obl:arg	_	_
12	Mariperto	Maripertus	PROPN	Propn|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	11	appos	_	_
13	presbitero	presbyter	NOUN	n|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	12	appos	_	_
14	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	16	cc	_	_
15	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	16	case	_	_
16	successoribus	successor	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	11	conj	_	_
17	tuis	tuus	DET	a|a|2|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur|Number[psor]=Sing|Person[psor]=2|Poss=Yes|PronType=Prs	16	det	_	_
18	ut	ut	CCONJ	c|c|-|-|-|-|-|-|-|-	_	2	reparandum	_	SpaceAfter=No
19	,	,	PUNCT	Punc	_	20	punct	_	_
20	si	si	SCONJ	c|c|-|-|-|-|-|-|-|-	_	2	reparandum	_	_
21	aliquando	aliquando	ADV	d|d|-|-|-|-|-|-|-|-	_	38	advmod	_	_
22	tempore	tempus	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	38	obl	_	_
23	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	25	det	_	_
24	suprascripta	suprascriptus	DET	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	25	det	_	_
25	terra	terra	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	38	obj	_	_
26	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	27	cc	_	_
27	vinea	uinea	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	25	conj	_	_
28	quem	qui	PRON	p|p|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|PronType=Rel	32	obj	_	_
29	tibi	tu	PRON	p|p|2|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=2|PronType=Prs	32	obl:arg	_	_
30	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	31	case	_	_
31	viganeum	uiganeum	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	32	obl	_	_
32	dedi	do	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	25	acl:relcl	_	SpaceAfter=No
33	,	,	PUNCT	Punc	_	25	punct	_	_
34	ut	ut	SCONJ	c|c|-|-|-|-|-|-|-|-	_	55	mark	_	_
35	si	si	SCONJ	c|c|-|-|-|-|-|-|-|-	_	38	mark	_	_
36	ea	is	PRON	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Dem,Prs	25	conj	_	_
37	vobis	uos	PRON	p|p|2|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur|Person=2|PronType=Prs	38	obl:arg	_	_
38	intentionaverimus	intentiono	VERB	v|v|1|p|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	55	advcl	_	_
39	aut	aut	CCONJ	c|c|-|-|-|-|-|-|-|-	_	41	cc	_	_
40	retragi	retraho	VERB	v|v|-|-|p|n|p|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Pass	41	xcomp	_	_
41	quesierimus	quaero	VERB	v|v|1|p|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|VerbType=Mod|Voice=Act	38	conj	_	_
42	per	per	ADP	r|r|-|-|-|-|-|-|-|-	_	44	case	_	_
43	quolibet	quilibet	DET	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Ind	44	det	_	_
44	ingenio	ingenium	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	38	obl	_	_
45	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	53	cc	_	_
46	ab	ab	ADP	r|r|-|-|-|-|-|-|-|-	_	48	case	_	_
47	omni	omnis	DET	a|a|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|PronType=Tot	48	det	_	_
48	homine	homo	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	51	obl	_	_
49	ea	is	PRON	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Dem,Prs	51	obj	_	_
50	vobis	uos	PRON	p|p|2|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur|Person=2|PronType=Prs	51	obl:arg	_	_
51	defendere	defendo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	53	xcomp	_	_
52	non	non	PART	d|d|-|-|-|-|-|-|-|-	Polarity=Neg	53	advmod	_	_
53	potuerimus	possum	VERB	v|v|1|p|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|VerbType=Mod|Voice=Act	38	conj	_	SpaceAfter=No
54	,	,	PUNCT	Punc	_	38	punct	_	_
55	promitto	promitto	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	_
56	me	ego	PRON	p|p|1|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|Person=1|PronType=Prs	59	nsubj	_	_
57	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	58	case	_	_
58	heredibus	heres	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	59	obl	_	_
59	conponere	compono	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	55	ccomp	_	_
60	tibi	tu	PRON	p|p|2|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=2|PronType=Prs	59	obl:arg	_	_
61	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	62	cc	_	_
62	successoribus	successor	NOUN	n|n|-|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur	60	conj	_	_
63	tuis	tuus	DET	a|a|2|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur|Number[psor]=Sing|Person[psor]=2|Poss=Yes|PronType=Prs	62	det	_	_
64	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	65	det	_	_
65	terra	terra	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	59	obj	_	_
66	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	67	cc	_	_
67	vinea	uinea	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	65	conj	_	_
68	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	69	case	_	_
69	duplo	duplus	ADJ	a|a|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing|NumType=Mult	59	obl	_	SpaceAfter=No
70	,	,	PUNCT	Punc	_	71	punct	_	_
71	meliorata	melioro	VERB	t|t|-|s|r|p|p|f|n|-	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	59	advcl	_	_
72	res	res	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	71	nsubj	_	SpaceAfter=No
73	,	,	PUNCT	Punc	_	76	punct	_	_
74	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	76	case	_	_
75	ferquidem	ferquidis	ADJ	a|a|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	76	amod	_	_
76	loco	locus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	59	obl	_	SpaceAfter=No
77	,	,	PUNCT	Punc	_	79	punct	_	_
78	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	79	case	_	_
79	quid	quis	PRON	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Ind	65	nmod	_	_
80	aut	aut	CCONJ	c|c|-|-|-|-|-|-|-|-	_	81	cc	_	_
81	qualis	qualis	DET	a|a|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind,Rel	79	conj	_	_
82	tunc	tunc	ADV	d|d|-|-|-|-|-|-|-|-	_	79	advmod	_	_
83	fuerit	sum	AUX	v|v|3|s|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	79	aux	_	SpaceAfter=No
84	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


