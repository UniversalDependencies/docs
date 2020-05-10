---
layout: base
title:  'Statistics of orphan in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `orphan`

This relation is universal.
There are 1 language-specific subtypes of `orphan`: <tt><a href="la_llct-dep-orphan-missing.html">orphan:missing</a></tt>.

7 nodes (0%) are attached to their parents as `orphan`.

4 instances of `orphan` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.14285714285714.

The following 5 pairs of parts of speech are connected with `orphan`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (3; 43% instances), <tt><a href="la_llct-pos-DET.html">DET</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="la_llct-pos-PART.html">PART</a></tt>-<tt><a href="la_llct-pos-PRON.html">PRON</a></tt> (1; 14% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-SCONJ.html">SCONJ</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 46	bgColor:blue
# visual-style 46	fgColor:white
# visual-style 46 31 orphan	color:blue
1	tam	tam	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Dem	4	cc	_	_
2	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	4	case	_	_
3	suprascripta	suprascriptus	DET	a|a|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Dem	4	det	_	_
4	ecclesia	ecclesia	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	0	root	_	_
5	quam	quam	CCONJ	c|c|-|-|-|-|-|-|-|-	_	9	cc	_	_
6	et	et	ADV	d|d|-|-|-|-|-|-|-|-	_	5	fixed	_	_
7	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	9	case	_	_
8	omnibus	omnis	DET	a|a|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur|PronType=Tot	9	det	_	_
9	casis	casa	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	4	conj	_	_
10	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	12	cc	_	_
11	omnibus	omnis	DET	a|a|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur|PronType=Tot	12	det	_	_
12	rebus	res	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	9	conj	_	_
13	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	15	case	_	_
14	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	15	det	_	_
15	ecclesia	ecclesia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	16	obl	_	_
16	pertenente	pertineo	VERB	t|t|-|p|p|p|a|f|a|-	Aspect=Imp|Case=Acc|Gender=Fem|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	9	acl	_	SpaceAfter=No
17	,	,	PUNCT	Punc	_	21	punct	_	_
18	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	21	cc	_	_
19	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	21	case	_	_
20	omnibus	omnis	DET	a|a|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur|PronType=Tot	21	det	_	_
21	rebus	res	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	4	conj	_	_
22	suis	suus	DET	a|a|3|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes	21	det	_	_
23	ubique	ubique	ADV	d|d|-|-|-|-|-|-|-|-	_	28	advmod	_	_
24	ei	is	PRON	p|p|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Dem,Prs	28	obl:arg	_	_
25	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	27	case	_	_
26	quolibet	quilibet	DET	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Ind	27	amod	_	_
27	locas	locum	NOUN	n|n|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur	28	obl	_	_
28	pertenuit	pertineo	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	21	acl	_	SpaceAfter=No
29	,	,	PUNCT	Punc	_	31	punct	_	_
30	movile	mobilis	ADJ	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	31	amod	_	_
31	res	res	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	46	orphan	_	_
32	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	33	cc	_	_
33	inmobile	immobilis	ADJ	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	30	conj	_	_
34	seo	seu	CCONJ	c|c|-|-|-|-|-|-|-|-	_	35	cc	_	_
35	semoventibus	semouens	NOUN	n|n|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur	30	conj	_	_
36	per	per	ADP	r|r|-|-|-|-|-|-|-|-	_	38	case	_	_
37	quolibet	quilibet	DET	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Ind	38	det	_	_
38	genium	ingenium	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	39	obl	_	_
39	pertinentes	pertineo	VERB	t|t|-|p|p|p|a|f|a|-	Aspect=Imp|Case=Acc|Gender=Fem|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	31	acl	_	SpaceAfter=No
40	,	,	PUNCT	Punc	_	31	punct	_	_
41	me	ego	PRON	p|p|1|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|Person=1|PronType=Prs	46	obj	_	SpaceAfter=No
42	,	,	PUNCT	Punc	_	41	punct	_	_
43	heredem	heres	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	46	xcomp	_	_
44	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	45	cc	_	_
45	successorem	successor	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	43	conj	_	_
46	confirmavit	confirmo	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	conj	_	SpaceAfter=No
47	,	,	PUNCT	Punc	_	55	punct	_	_
48	ut	ut	SCONJ	c|c|-|-|-|-|-|-|-|-	_	55	mark	_	_
49	omnia	omnis	DET	a|a|-|p|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Plur|PronType=Tot	55	obl	_	_
50	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	52	cc	_	_
51	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	52	case	_	_
52	omnibus	omnis	DET	a|a|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur|PronType=Tot	49	conj	_	_
53	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	56	case	_	_
54	mea	meus	DET	a|a|1|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	56	det	_	_
55	esse	sum	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	46	advcl	_	_
56	potestatem	potestas	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	55	obl	_	_
57	post	post	ADP	r|r|-|-|-|-|-|-|-|-	_	59	case	_	_
58	eius	is	DET	p|p|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Dem,Prs	59	det	_	_
59	decessum	decessus	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	55	obl	_	SpaceAfter=No
60	,	,	PUNCT	Punc	_	64	punct	_	_
61	ut	ut	SCONJ	c|c|-|-|-|-|-|-|-|-	_	64	mark	_	_
62	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	65	case	_	_
63	mea	meus	DET	a|a|1|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	65	det	_	_
64	esse	sum	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	46	advcl	_	_
65	potestatem	potestas	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	64	obl	_	_
66	usufructuandi	usufructuo	VERB	t|t|-|s|p|d|p|n|g|-	Aspect=Imp|Case=Gen|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Ger|Voice=Pass	65	acl	_	SpaceAfter=No
67	,	,	PUNCT	Punc	_	68	punct	_	_
68	regendi	rego	VERB	t|t|-|s|p|d|p|n|g|-	Aspect=Imp|Case=Gen|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Ger|Voice=Pass	66	conj	_	_
69	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	74	cc	_	_
70	ordinationem	ordinatio	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	74	obj	_	_
71	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	73	case	_	_
72	ipsa	ipse	DET	p|p|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Dem	73	det	_	_
73	ecclesia	ecclesia	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	74	obl	_	_
74	faciendi	facio	VERB	t|t|-|s|p|d|p|n|g|-	Aspect=Imp|Case=Gen|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Ger|Voice=Pass	66	conj	_	SpaceAfter=No
75	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 48	bgColor:blue
# visual-style 48	fgColor:white
# visual-style 47	bgColor:blue
# visual-style 47	fgColor:white
# visual-style 47 48 orphan	color:blue
1	manifestu	manifestus	ADJ	a|a|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	0	root	_	_
2	sum	sum	AUX	v|v|1|s|p|i|a|-|-|-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	_
3	ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	1	nsubj	_	_
4	Guntelmus	Guntelmus	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	3	appos	_	_
5	clericus	clericus	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	4	appos	_	SpaceAfter=No
6	,	,	PUNCT	Punc	_	7	punct	_	_
7	filio	filius	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	4	appos	_	_
8	quondam	quondam	ADJ	a|a|-|-|-|-|-|-|-|-	_	9	amod	_	_
9	Tai	Taus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	_
10	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	11	case	_	_
11	Lunata	Lunata	PROPN	Propn|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	4	nmod	_	SpaceAfter=No
12	,	,	PUNCT	Punc	_	13	punct	_	_
13	quia	quia	SCONJ	c|c|-|-|-|-|-|-|-|-	_	26	mark	_	_
14	tu	tu	PRON	p|p|2|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Person=2|PronType=Prs	26	nsubj	_	_
15	domno	domnus	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	14	appos	_	_
16	Ambrosio	Ambrosius	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	15	flat	_	SpaceAfter=No
17	,	,	PUNCT	Punc	_	20	punct	_	_
18	gratia	gratia	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	20	nmod	_	_
19	Dei	Deus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	18	nmod	_	_
20	episcopo	episcopus	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	15	appos	_	_
21	huius	hic	DET	p|p|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	24	det	_	_
22	sancte	sanctus	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	24	amod	_	_
23	Lucane	lucanus	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	24	amod	_	_
24	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	20	nmod	_	SpaceAfter=No
25	,	,	PUNCT	Punc	_	14	punct	_	_
26	ordinasti	ordino	VERB	v|v|2|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	1	advcl	_	_
27	me	ego	PRON	p|p|1|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|Person=1|PronType=Prs	26	obj	_	_
28	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	30	case	_	_
29	duabus	duo	NUM	a|a|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur|NumType=Card	30	nummod	_	_
30	ecclesie	ecclesia	NOUN	n|n|-|p|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Plur	26	obl	_	_
31	pertenentibus	pertineo	VERB	t|t|-|p|p|p|a|f|b|-	Aspect=Imp|Case=Abl|Gender=Fem|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	30	advcl	_	_
32	huius	hic	DET	p|p|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	33	det	_	_
33	episcopatui	episcopatus	NOUN	n|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	31	obl:arg	_	_
34	vestro	uester	DET	a|a|2|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Number[psor]=Plur|Person=2|Poss=Yes|PronType=Prs	33	det	_	SpaceAfter=No
35	,	,	PUNCT	Punc	_	37	punct	_	_
36	quarum	qui	DET	p|p|-|p|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Plur|PronType=Ind	37	nmod	_	_
37	unam	unus	NUM	p|p|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing|NumType=Card	30	parataxis	_	_
38	vocabulum	uocabulum	NOUN	n|n|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing	37	parataxis	_	_
39	sancti	sanctus	ADJ	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	40	amod	_	_
40	Ipoliti	Hippolytus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	38	nmod	_	SpaceAfter=No
41	,	,	PUNCT	Punc	_	42	punct	_	_
42	sita	sino	VERB	t|t|-|s|r|p|p|f|n|-	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	37	acl	_	_
43	prope	prope	ADP	r|r|-|-|-|-|-|-|-|-	_	44	case	_	_
44	fluvio	fluuius	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	42	obl	_	_
45	Arno	Arnus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	44	flat	_	SpaceAfter=No
46	,	,	PUNCT	Punc	_	47	punct	_	_
47	altera	alter	DET	p|p|-|p|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Plur|PronType=Ind	37	conj	_	_
48	vocabulum	uocabulum	NOUN	n|n|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing	47	orphan	_	_
49	sancte	sanctus	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	50	amod	_	_
50	Marie	Maria	PROPN	Propn|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	48	nmod	_	SpaceAfter=No
51	,	,	PUNCT	Punc	_	52	punct	_	_
52	sita	sino	VERB	t|t|-|s|r|p|p|f|n|-	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	47	acl	_	_
53	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	54	case	_	_
54	Montem	Mons	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	52	obl	_	SpaceAfter=No
55	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


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
18	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	22	cop	_	_
19	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	21	case	_	_
20	ipsa	ipse	DET	p|p|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Dem	21	det	_	_
21	casa	casa	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	22	obl	_	_
22	pertenentem	pertineo	VERB	t|t|-|s|p|p|a|f|a|-	Aspect=Imp|Case=Acc|Gender=Fem|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	16	acl:relcl	_	SpaceAfter=No
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
47	vero	uero	ADV	d|d|-|-|-|-|-|-|-|-	_	46	advmod	_	_
48	ipsas	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	46	det	_	_
49	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	50	cc	_	_
50	vinea	uinea	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	46	conj	_	_
51	quem	qui	PRON	p|p|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|PronType=Rel	53	obj	_	_
52	superius	superius	ADV	d|d|-|-|-|-|-|-|-|c	Degree=Cmp	53	advmod	_	_
53	dedimus	do	VERB	v|v|1|p|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	50	acl:relcl	_	_
54	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	56	case	_	_
55	omnibus	omnis	DET	a|a|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur|PronType=Tot	56	det	_	_
56	arboribus	arbor	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	53	nmod	_	_
57	suis	suus	DET	a|a|3|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes	56	det	_	_
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
71	nostri	noster	DET	a|a|1|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	70	det	_	_
72	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	73	cc	_	_
73	nos	nos	PRON	p|p|1|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|Person=1|PronType=Prs	70	conj	_	_
74	inibi	inibi	ADV	d|d|-|-|-|-|-|-|-|-	_	77	advmod	_	_
75	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	76	case	_	_
76	societate	societas	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	77	obl	_	_
77	dati	do	VERB	t|t|-|p|r|p|p|m|n|-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	68	acl:relcl	_	_
78	abemus	habeo	AUX	v|v|1|p|p|i|a|-|-|-	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	77	aux	_	SpaceAfter=No
79	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


