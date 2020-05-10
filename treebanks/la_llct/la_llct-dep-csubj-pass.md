---
layout: base
title:  'Statistics of csubj:pass in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="la_llct-dep-csubj.html">csubj</a></tt>.

27 nodes (0%) are attached to their parents as `csubj:pass`.

22 instances of `csubj:pass` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 13.3703703703704.

The following 3 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (25; 93% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (1; 4% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 13 csubj:pass	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	8	cc	_	_
2	cum	cum	SCONJ	c|c|-|-|-|-|-|-|-|-	_	6	mark	_	_
3	eas	is	PRON	p|p|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Dem,Prs	5	nsubj:pass	_	_
4	iterum	iterum	ADV	d|d|-|-|-|-|-|-|-|-	_	5	advmod	_	_
5	legi	lego	VERB	v|v|-|-|p|n|p|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Pass	6	ccomp	_	_
6	fecissemus	facio	VERB	v|v|1|p|l|s|a|-|-|-	Aspect=Perf|Mood=Sub|Number=Plur|Person=1|Tense=Pqp|VerbForm=Fin|Voice=Act	8	advcl	_	SpaceAfter=No
7	,	,	PUNCT	Punc	_	6	punct	_	_
8	contenebatur	contineo	VERB	v|v|3|s|i|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin|Voice=Pass	0	root	_	_
9	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	10	case	_	_
10	eis	is	PRON	p|p|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur|Person=3|PronType=Dem,Prs	8	obl	_	_
11	sicut	sicut	SCONJ	c|c|-|-|-|-|-|-|-|-	_	13	mark	_	_
12	superius	superius	ADV	d|d|-|-|-|-|-|-|-|c	Degree=Cmp	13	advmod	_	_
13	insertum	insero	VERB	t|t|-|s|r|p|p|n|n|-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	8	csubj:pass	_	_
14	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	aux:pass	_	SpaceAfter=No
15	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 39	bgColor:blue
# visual-style 39	fgColor:white
# visual-style 39 34 csubj:pass	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	3	cc	_	_
2	licentiam	licentia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	3	obj	_	_
3	abeas	habeo	VERB	v|v|2|s|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	post	post	ADP	r|r|-|-|-|-|-|-|-|-	_	6	case	_	_
5	meum	meus	DET	a|a|1|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	6	det	_	_
6	ovitum	obitus	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	3	obl	_	_
7	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	8	case	_	_
8	vita	uita	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	3	obl	_	_
9	tua	tuus	DET	a|a|2|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	8	det	_	_
10	quando	quando	SCONJ	d|d|-|-|-|-|-|-|-|-	_	11	mark	_	_
11	volueris	uolo	VERB	v|v|2|s|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	26	advcl	_	_
12	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	14	case	_	_
13	ipso	ipse	DET	p|p|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing|PronType=Dem	14	det	_	_
14	monasterio	monasterium	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	26	obl	_	_
15	secundum	secundum	ADP	r|r|-|-|-|-|-|-|-|-	_	16	case	_	_
16	textum	textus	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	26	obl	_	_
17	ipsius	ipse	DET	p|p|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	18	det	_	_
18	dotis	dos	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	16	nmod	_	_
19	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	20	case	_	_
20	nepotibus	nepos	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	22	nmod	_	_
21	meis	meus	DET	a|a|1|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	20	det	_	_
22	qui	qui	PRON	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	23	nsubj	_	_
23	dignus	dignus	ADJ	a|a|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	26	acl:relcl	_	_
24	fuerit	sum	AUX	v|v|3|s|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	23	cop	_	_
25	ordinationem	ordinatio	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	26	obj	_	_
26	facere	facio	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	2	xcomp	_	SpaceAfter=No
27	,	,	PUNCT	Punc	_	28	punct	_	_
28	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	39	cc	_	_
29	quem	qui	PRON	p|p|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|PronType=Rel	32	obj	_	_
30	ibi	ubi	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	32	advmod	_	_
31	sacerdotem	sacerdos	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	32	xcomp	_	_
32	elegeris	eligo	VERB	v|v|2|s|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	39	dislocated:nsubj	_	SpaceAfter=No
33	,	,	PUNCT	Punc	_	32	punct	_	_
34	ipse	ipse	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	39	csubj:pass	_	_
35	sit	sum	AUX	v|v|3|s|p|s|a|-|-|-	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	39	aux:pass	_	_
36	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	37	case	_	_
37	loco	locus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	39	obl	_	_
38	firmiter	firme	ADV	d|d|-|-|-|-|-|-|-|-	_	39	advmod	_	_
39	ordinatus	ordino	VERB	t|t|-|s|r|p|p|m|n|-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	3	conj	_	SpaceAfter=No
40	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 20 csubj:pass	color:blue
1	notum	notus	ADJ	a|a|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
2	sit	sum	AUX	v|v|3|s|p|s|a|-|-|-	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	_
3	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	4	case	_	_
4	aures	auris	NOUN	n|n|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur	8	obl	_	_
5	mansuetudinis	mansuetudo	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	_
6	nostre	noster	DET	a|a|1|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	5	det	_	_
7	esset	sum	AUX	v|v|-|-|p|n|a|-|-|-	Tense=Pres|VerbForm=Inf|Voice=Act	8	aux:pass	_	_
8	perventum	peruenio	VERB	t|t|-|s|r|p|p|n|a|-	Aspect=Perf|Case=Acc|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	1	csubj	_	_
9	qualiter	qualiter	SCONJ	d|d|-|-|-|-|-|-|-|-	_	36	mark	_	_
10	pontifices	pontifex	NOUN	n|n|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur	36	nsubj	_	_
11	sancte	sanctus	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	13	amod	_	_
12	Lucensis	lucensis	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	13	amod	_	_
13	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	10	nmod	_	_
14	rebus	res	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	36	obl:arg	_	_
15	ibi	ubi	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	16	advmod	_	_
16	pertinentibus	pertineo	VERB	t|t|-|p|p|p|a|f|b|-	Aspect=Imp|Case=Abl|Gender=Fem|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	14	acl:relcl	_	SpaceAfter=No
17	,	,	PUNCT	Punc	_	14	punct	_	_
18	tam	tam	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Dem	20	cc	_	_
19	pro	pro	ADP	r|r|-|-|-|-|-|-|-|-	_	20	case	_	_
20	sanvuinitatem	sanguinitas	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	8	csubj:pass	_	_
21	quamque	quamque	CCONJ	c|c|-|-|-|-|-|-|-|-	_	25	cc	_	_
22	etiam	etiam	ADV	d|d|-|-|-|-|-|-|-|-	_	21	fixed	_	_
23	pro	pro	ADP	r|r|-|-|-|-|-|-|-|-	_	25	case	_	_
24	proprio	proprius	ADJ	a|a|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	25	amod	_	_
25	lucro	lucrum	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	20	conj	_	SpaceAfter=No
26	,	,	PUNCT	Punc	_	36	punct	_	_
27	per	per	ADP	r|r|-|-|-|-|-|-|-|-	_	28	case	_	_
28	libellos	libellus	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	36	obl	_	_
29	hac	atque	CCONJ	c|c|-|-|-|-|-|-|-|-	_	30	cc	_	_
30	fidiuchariis	fiduciarium	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	28	conj	_	_
31	aliis	alius	DET	a|a|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur|PronType=Ind	33	det	_	_
32	que	que	CCONJ	c|c|-|-|-|-|-|-|-|-	_	33	cc	_	_
33	conscriptionibus	conscriptio	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	28	conj	_	_
34	quibusdam	quidam	DET	p|p|-|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur|PronType=Ind	35	det	_	_
35	hominibus	homo	NOUN	n|n|-|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur	36	obl:arg	_	_
36	dedissent	do	VERB	v|v|3|p|l|s|a|-|-|-	Aspect=Perf|Mood=Sub|Number=Plur|Person=3|Tense=Pqp|VerbForm=Fin|Voice=Act	20	conj	_	SpaceAfter=No
37	,	,	PUNCT	Punc	_	43	punct	_	_
38	unde	unde	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	43	advmod	_	_
39	nunc	nunc	ADV	d|d|-|-|-|-|-|-|-|-	_	43	advmod	_	_
40	maximum	magnus	ADJ	a|a|-|s|-|-|-|n|a|s	Case=Acc|Degree=Abs|Gender=Neut|Number=Sing	41	amod	_	_
41	damnum	damnum	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	43	obj	_	_
42	prefata	praefatus	DET	a|a|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	44	det	_	_
43	patitur	patior	VERB	v|v|3|s|p|s|p|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	36	acl:relcl	_	_
44	ecclesia	ecclesia	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	43	nsubj	_	_
45	adque	atque	CCONJ	c|c|-|-|-|-|-|-|-|-	_	54	cc	_	_
46	rector	rector	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	54	nsubj	_	_
47	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	48	cc	_	_
48	pastor	Pastor	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	46	conj	_	_
49	eiusdem	idem	DET	p|p|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	50	det	_	_
50	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	46	nmod	_	_
51	nostrum	noster	DET	a|a|1|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	56	det	_	_
52	dignissime	digne	ADV	d|d|-|-|-|-|-|-|-|s	Degree=Abs	55	advmod	_	_
53	non	non	PART	d|d|-|-|-|-|-|-|-|-	Polarity=Neg	54	advmod	_	_
54	valet	ualeo	VERB	v|v|3|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	43	conj	_	_
55	peragere	perago	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	54	xcomp	_	_
56	servitium	seruitium	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	55	obj	_	SpaceAfter=No
57	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


