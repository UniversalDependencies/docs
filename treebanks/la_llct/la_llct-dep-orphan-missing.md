---
layout: base
title:  'Statistics of orphan:missing in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `orphan:missing`

This relation is a language-specific subtype of <tt><a href="la_llct-dep-orphan.html">orphan</a></tt>.

5 nodes (0%) are attached to their parents as `orphan:missing`.

4 instances of `orphan:missing` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 16.2.

The following 4 pairs of parts of speech are connected with `orphan:missing`: <tt><a href="la_llct-pos-X.html">X</a></tt>-<tt><a href="la_llct-pos-PRON.html">PRON</a></tt> (2; 40% instances), <tt><a href="la_llct-pos-X.html">X</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (1; 20% instances), <tt><a href="la_llct-pos-X.html">X</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="la_llct-pos-X.html">X</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 11 orphan:missing	color:blue
1	unde	unde	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	20	orphan:missing	_	_
2	ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	20	orphan:missing	_	_
3	qui	qui	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	5	det	_	_
4	supra	supra	ADV	d|d|-|-|-|-|-|-|-|-	_	3	fixed	_	_
5	Andriperto	Andripertus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	2	appos	_	_
6	presbitero	presbyter	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	5	appos	_	_
7	una	una	ADV	d|d|-|-|-|-|-|-|-|-	_	10	case	_	_
8	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	7	fixed	_	_
9	meis	meus	DET	a|a|1|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	10	det	_	_
10	heredes	heres	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	20	orphan:missing	_	_
11	tibi	tu	PRON	p|p|2|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=2|PronType=Prs	20	orphan:missing	_	_
12	qui	qui	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	14	det	_	_
13	supra	supra	ADV	d|d|-|-|-|-|-|-|-|-	_	12	fixed	_	_
14	Teudilascio	Teudilascius	PROPN	Propn|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	11	appos	_	_
15	archidiacono	archidiaconus	NOUN	n|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	14	appos	_	_
16	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	18	cc	_	_
17	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	18	case	_	_
18	posteris	posterus	ADJ	a|a|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	11	conj	_	_
19	que	que	CCONJ	c|c|-|-|-|-|-|-|-|-	_	18	cc	_	_
20	[--]	missing^token	X	Punc	_	0	root	_	_
21	ut	ut	SCONJ	c|c|-|-|-|-|-|-|-|-	_	45	mark	_	SpaceAfter=No
22	,	,	PUNCT	Punc	_	21	punct	_	_
23	si	si	SCONJ	c|c|-|-|-|-|-|-|-|-	_	34	mark	_	_
24	nos	nos	PRON	p|p|1|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|Person=1|PronType=Prs	34	nsubj	_	_
25	vobis	uos	PRON	p|p|2|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur|Person=2|PronType=Prs	31	obl:arg	_	_
26	aliquando	aliquando	ADV	d|d|-|-|-|-|-|-|-|-	_	31	advmod	_	_
27	tempore	tempus	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	31	obl	_	_
28	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	29	case	_	_
29	aliquo	aliquis	PRON	p|p|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing|PronType=Ind	31	obl	_	_
30	exinde	exinde	ADV	d|d|-|-|-|-|-|-|-|-	_	31	advmod	_	_
31	intentionare	intentiono	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	34	xcomp	_	_
32	aut	aut	CCONJ	c|c|-|-|-|-|-|-|-|-	_	33	cc	_	_
33	retolli	retollo	VERB	v|v|-|-|p|n|p|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Pass	31	conj	_	_
34	quesierimus	quaero	VERB	v|v|1|p|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|VerbType=Mod|Voice=Act	45	advcl	_	SpaceAfter=No
35	,	,	PUNCT	Punc	_	43	punct	_	_
36	eam	is	PRON	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Dem,Prs	41	obj	_	_
37	vobis	uos	PRON	p|p|2|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur|Person=2|PronType=Prs	41	obl:arg	_	_
38	ab	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	40	case	_	_
39	omni	omnis	DET	a|a|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|PronType=Tot	40	det	_	_
40	homines	homo	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	41	obl	_	_
41	defendere	defendo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	43	xcomp	_	_
42	non	non	PART	d|d|-|-|-|-|-|-|-|-	Polarity=Neg	43	advmod	_	_
43	potuerimus	possum	VERB	v|v|1|p|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|VerbType=Mod|Voice=Act	34	conj	_	SpaceAfter=No
44	,	,	PUNCT	Punc	_	34	punct	_	_
45	spondimus	spondeo	VERB	v|v|1|p|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	20	orphan:missing	_	_
46	componere	compono	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	45	xcomp	_	_
47	quas	qui	PRON	p|p|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur|PronType=Rel	52	obj	_	_
48	tibi	tu	PRON	p|p|2|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=2|PronType=Prs	52	obl:arg	_	_
49	supra	supra	ADV	d|d|-|-|-|-|-|-|-|-	_	52	advmod	_	_
50	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	51	case	_	_
51	commutationem	commutatio	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	52	obl	_	_
52	dedi	do	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	46	ccomp	_	_
53	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	54	case	_	_
54	duplum	duplus	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|NumType=Mult	46	obl	_	SpaceAfter=No
55	,	,	PUNCT	Punc	_	58	punct	_	_
56	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	58	case	_	_
57	ferquidem	ferquidis	ADJ	a|a|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	58	amod	_	_
58	loco	locus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	46	obl	_	SpaceAfter=No
59	,	,	PUNCT	Punc	_	61	punct	_	_
60	sub	sub	ADP	r|r|-|-|-|-|-|-|-|-	_	61	case	_	_
61	estimatione	aestimatio	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	46	obl	_	SpaceAfter=No
62	,	,	PUNCT	Punc	_	63	punct	_	_
63	quales	qualis	DET	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Ind,Rel	61	acl	_	_
64	tunc	tunc	ADV	d|d|-|-|-|-|-|-|-|-	_	63	advmod	_	_
65	fuerit	sum	AUX	v|v|3|s|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	63	cop	_	SpaceAfter=No
66	,	,	PUNCT	Punc	_	71	punct	_	_
67	quia	quia	SCONJ	c|c|-|-|-|-|-|-|-|-	_	71	mark	_	_
68	taliter	taliter	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Dem	71	advmod	_	_
69	inter	inter	ADP	r|r|-|-|-|-|-|-|-|-	_	70	case	_	_
70	nos	nos	PRON	p|p|1|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|Person=1|PronType=Prs	71	obl	_	_
71	convenit	conuenio	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	46	advcl	_	SpaceAfter=No
72	.	.	PUNCT	Punc	_	20	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 1 orphan:missing	color:blue
1	unde	unde	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	20	orphan:missing	_	_
2	ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	20	orphan:missing	_	_
3	qui	qui	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	5	det	_	_
4	supra	supra	ADV	d|d|-|-|-|-|-|-|-|-	_	3	fixed	_	_
5	Andriperto	Andripertus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	2	appos	_	_
6	presbitero	presbyter	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	5	appos	_	_
7	una	una	ADV	d|d|-|-|-|-|-|-|-|-	_	10	case	_	_
8	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	7	fixed	_	_
9	meis	meus	DET	a|a|1|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	10	det	_	_
10	heredes	heres	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	20	orphan:missing	_	_
11	tibi	tu	PRON	p|p|2|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=2|PronType=Prs	20	orphan:missing	_	_
12	qui	qui	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	14	det	_	_
13	supra	supra	ADV	d|d|-|-|-|-|-|-|-|-	_	12	fixed	_	_
14	Teudilascio	Teudilascius	PROPN	Propn|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	11	appos	_	_
15	archidiacono	archidiaconus	NOUN	n|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	14	appos	_	_
16	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	18	cc	_	_
17	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	18	case	_	_
18	posteris	posterus	ADJ	a|a|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	11	conj	_	_
19	que	que	CCONJ	c|c|-|-|-|-|-|-|-|-	_	18	cc	_	_
20	[--]	missing^token	X	Punc	_	0	root	_	_
21	ut	ut	SCONJ	c|c|-|-|-|-|-|-|-|-	_	45	mark	_	SpaceAfter=No
22	,	,	PUNCT	Punc	_	21	punct	_	_
23	si	si	SCONJ	c|c|-|-|-|-|-|-|-|-	_	34	mark	_	_
24	nos	nos	PRON	p|p|1|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|Person=1|PronType=Prs	34	nsubj	_	_
25	vobis	uos	PRON	p|p|2|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur|Person=2|PronType=Prs	31	obl:arg	_	_
26	aliquando	aliquando	ADV	d|d|-|-|-|-|-|-|-|-	_	31	advmod	_	_
27	tempore	tempus	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	31	obl	_	_
28	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	29	case	_	_
29	aliquo	aliquis	PRON	p|p|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing|PronType=Ind	31	obl	_	_
30	exinde	exinde	ADV	d|d|-|-|-|-|-|-|-|-	_	31	advmod	_	_
31	intentionare	intentiono	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	34	xcomp	_	_
32	aut	aut	CCONJ	c|c|-|-|-|-|-|-|-|-	_	33	cc	_	_
33	retolli	retollo	VERB	v|v|-|-|p|n|p|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Pass	31	conj	_	_
34	quesierimus	quaero	VERB	v|v|1|p|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|VerbType=Mod|Voice=Act	45	advcl	_	SpaceAfter=No
35	,	,	PUNCT	Punc	_	43	punct	_	_
36	eam	is	PRON	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Dem,Prs	41	obj	_	_
37	vobis	uos	PRON	p|p|2|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur|Person=2|PronType=Prs	41	obl:arg	_	_
38	ab	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	40	case	_	_
39	omni	omnis	DET	a|a|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|PronType=Tot	40	det	_	_
40	homines	homo	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	41	obl	_	_
41	defendere	defendo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	43	xcomp	_	_
42	non	non	PART	d|d|-|-|-|-|-|-|-|-	Polarity=Neg	43	advmod	_	_
43	potuerimus	possum	VERB	v|v|1|p|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|VerbType=Mod|Voice=Act	34	conj	_	SpaceAfter=No
44	,	,	PUNCT	Punc	_	34	punct	_	_
45	spondimus	spondeo	VERB	v|v|1|p|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	20	orphan:missing	_	_
46	componere	compono	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	45	xcomp	_	_
47	quas	qui	PRON	p|p|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur|PronType=Rel	52	obj	_	_
48	tibi	tu	PRON	p|p|2|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=2|PronType=Prs	52	obl:arg	_	_
49	supra	supra	ADV	d|d|-|-|-|-|-|-|-|-	_	52	advmod	_	_
50	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	51	case	_	_
51	commutationem	commutatio	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	52	obl	_	_
52	dedi	do	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	46	ccomp	_	_
53	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	54	case	_	_
54	duplum	duplus	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|NumType=Mult	46	obl	_	SpaceAfter=No
55	,	,	PUNCT	Punc	_	58	punct	_	_
56	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	58	case	_	_
57	ferquidem	ferquidis	ADJ	a|a|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	58	amod	_	_
58	loco	locus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	46	obl	_	SpaceAfter=No
59	,	,	PUNCT	Punc	_	61	punct	_	_
60	sub	sub	ADP	r|r|-|-|-|-|-|-|-|-	_	61	case	_	_
61	estimatione	aestimatio	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	46	obl	_	SpaceAfter=No
62	,	,	PUNCT	Punc	_	63	punct	_	_
63	quales	qualis	DET	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Ind,Rel	61	acl	_	_
64	tunc	tunc	ADV	d|d|-|-|-|-|-|-|-|-	_	63	advmod	_	_
65	fuerit	sum	AUX	v|v|3|s|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	63	cop	_	SpaceAfter=No
66	,	,	PUNCT	Punc	_	71	punct	_	_
67	quia	quia	SCONJ	c|c|-|-|-|-|-|-|-|-	_	71	mark	_	_
68	taliter	taliter	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Dem	71	advmod	_	_
69	inter	inter	ADP	r|r|-|-|-|-|-|-|-|-	_	70	case	_	_
70	nos	nos	PRON	p|p|1|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|Person=1|PronType=Prs	71	obl	_	_
71	convenit	conuenio	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	46	advcl	_	SpaceAfter=No
72	.	.	PUNCT	Punc	_	20	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 10 orphan:missing	color:blue
1	unde	unde	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	20	orphan:missing	_	_
2	ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	20	orphan:missing	_	_
3	qui	qui	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	5	det	_	_
4	supra	supra	ADV	d|d|-|-|-|-|-|-|-|-	_	3	fixed	_	_
5	Andriperto	Andripertus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	2	appos	_	_
6	presbitero	presbyter	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	5	appos	_	_
7	una	una	ADV	d|d|-|-|-|-|-|-|-|-	_	10	case	_	_
8	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	7	fixed	_	_
9	meis	meus	DET	a|a|1|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	10	det	_	_
10	heredes	heres	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	20	orphan:missing	_	_
11	tibi	tu	PRON	p|p|2|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=2|PronType=Prs	20	orphan:missing	_	_
12	qui	qui	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	14	det	_	_
13	supra	supra	ADV	d|d|-|-|-|-|-|-|-|-	_	12	fixed	_	_
14	Teudilascio	Teudilascius	PROPN	Propn|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	11	appos	_	_
15	archidiacono	archidiaconus	NOUN	n|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	14	appos	_	_
16	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	18	cc	_	_
17	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	18	case	_	_
18	posteris	posterus	ADJ	a|a|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	11	conj	_	_
19	que	que	CCONJ	c|c|-|-|-|-|-|-|-|-	_	18	cc	_	_
20	[--]	missing^token	X	Punc	_	0	root	_	_
21	ut	ut	SCONJ	c|c|-|-|-|-|-|-|-|-	_	45	mark	_	SpaceAfter=No
22	,	,	PUNCT	Punc	_	21	punct	_	_
23	si	si	SCONJ	c|c|-|-|-|-|-|-|-|-	_	34	mark	_	_
24	nos	nos	PRON	p|p|1|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|Person=1|PronType=Prs	34	nsubj	_	_
25	vobis	uos	PRON	p|p|2|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur|Person=2|PronType=Prs	31	obl:arg	_	_
26	aliquando	aliquando	ADV	d|d|-|-|-|-|-|-|-|-	_	31	advmod	_	_
27	tempore	tempus	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	31	obl	_	_
28	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	29	case	_	_
29	aliquo	aliquis	PRON	p|p|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing|PronType=Ind	31	obl	_	_
30	exinde	exinde	ADV	d|d|-|-|-|-|-|-|-|-	_	31	advmod	_	_
31	intentionare	intentiono	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	34	xcomp	_	_
32	aut	aut	CCONJ	c|c|-|-|-|-|-|-|-|-	_	33	cc	_	_
33	retolli	retollo	VERB	v|v|-|-|p|n|p|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Pass	31	conj	_	_
34	quesierimus	quaero	VERB	v|v|1|p|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|VerbType=Mod|Voice=Act	45	advcl	_	SpaceAfter=No
35	,	,	PUNCT	Punc	_	43	punct	_	_
36	eam	is	PRON	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Dem,Prs	41	obj	_	_
37	vobis	uos	PRON	p|p|2|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur|Person=2|PronType=Prs	41	obl:arg	_	_
38	ab	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	40	case	_	_
39	omni	omnis	DET	a|a|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|PronType=Tot	40	det	_	_
40	homines	homo	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	41	obl	_	_
41	defendere	defendo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	43	xcomp	_	_
42	non	non	PART	d|d|-|-|-|-|-|-|-|-	Polarity=Neg	43	advmod	_	_
43	potuerimus	possum	VERB	v|v|1|p|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|VerbType=Mod|Voice=Act	34	conj	_	SpaceAfter=No
44	,	,	PUNCT	Punc	_	34	punct	_	_
45	spondimus	spondeo	VERB	v|v|1|p|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	20	orphan:missing	_	_
46	componere	compono	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	45	xcomp	_	_
47	quas	qui	PRON	p|p|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur|PronType=Rel	52	obj	_	_
48	tibi	tu	PRON	p|p|2|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=2|PronType=Prs	52	obl:arg	_	_
49	supra	supra	ADV	d|d|-|-|-|-|-|-|-|-	_	52	advmod	_	_
50	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	51	case	_	_
51	commutationem	commutatio	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	52	obl	_	_
52	dedi	do	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	46	ccomp	_	_
53	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	54	case	_	_
54	duplum	duplus	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|NumType=Mult	46	obl	_	SpaceAfter=No
55	,	,	PUNCT	Punc	_	58	punct	_	_
56	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	58	case	_	_
57	ferquidem	ferquidis	ADJ	a|a|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	58	amod	_	_
58	loco	locus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	46	obl	_	SpaceAfter=No
59	,	,	PUNCT	Punc	_	61	punct	_	_
60	sub	sub	ADP	r|r|-|-|-|-|-|-|-|-	_	61	case	_	_
61	estimatione	aestimatio	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	46	obl	_	SpaceAfter=No
62	,	,	PUNCT	Punc	_	63	punct	_	_
63	quales	qualis	DET	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Ind,Rel	61	acl	_	_
64	tunc	tunc	ADV	d|d|-|-|-|-|-|-|-|-	_	63	advmod	_	_
65	fuerit	sum	AUX	v|v|3|s|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	63	cop	_	SpaceAfter=No
66	,	,	PUNCT	Punc	_	71	punct	_	_
67	quia	quia	SCONJ	c|c|-|-|-|-|-|-|-|-	_	71	mark	_	_
68	taliter	taliter	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Dem	71	advmod	_	_
69	inter	inter	ADP	r|r|-|-|-|-|-|-|-|-	_	70	case	_	_
70	nos	nos	PRON	p|p|1|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|Person=1|PronType=Prs	71	obl	_	_
71	convenit	conuenio	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	46	advcl	_	SpaceAfter=No
72	.	.	PUNCT	Punc	_	20	punct	_	_

~~~


