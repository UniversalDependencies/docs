---
layout: base
title:  'Statistics of dislocated:obl in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `dislocated:obl`

This relation is a language-specific subtype of <tt><a href="la_llct-dep-dislocated.html">dislocated</a></tt>.
There are also 3 other language-specific subtypes of `dislocated`: <tt><a href="la_llct-dep-dislocated-csubj.html">dislocated:csubj</a></tt>, <tt><a href="la_llct-dep-dislocated-nsubj.html">dislocated:nsubj</a></tt>, <tt><a href="la_llct-dep-dislocated-obj.html">dislocated:obj</a></tt>.

2 nodes (0%) are attached to their parents as `dislocated:obl`.

2 instances of `dislocated:obl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 26.

The following 2 pairs of parts of speech are connected with `dislocated:obl`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 5 dislocated:obl	color:blue
1	omnia	omnis	DET	a|a|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|PronType=Tot	35	dislocated:obj	_	_
2	quantum	quantum	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	29	advmod	_	_
3	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	5	case	_	_
4	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	5	det	_	_
5	ecclesia	ecclesia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	29	dislocated:obl	_	_
6	sancti	sanctus	ADJ	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	7	amod	_	_
7	Andree	Andreas	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	5	punct	_	_
9	tam	tam	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Dem	11	advmod:emph	_	_
10	domnicatis	domnicatus	ADJ	a|a|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	11	amod	_	_
11	casis	casa	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	29	dislocated:nsubj	_	_
12	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	13	cc	_	_
13	rebus	res	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	11	conj	_	_
14	quam	quam	SCONJ	c|c|-|-|-|-|-|-|-|-	_	16	cc	_	_
15	et	et	CCONJ	d|d|-|-|-|-|-|-|-|-	_	16	advmod:emph	_	_
16	massariciis	massaricius	ADJ	a|a|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	10	advcl:cmp	_	SpaceAfter=No
17	,	,	PUNCT	Punc	_	16	punct	_	_
18	quantas	quantus	DET	a|a|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur|NumType=Card|PronType=Rel	29	nsubj	_	_
19	ubique	ubique	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Loc|PronType=Rel	29	advmod:lmod	_	_
20	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	22	case	_	_
21	qualibet	quilibet	DET	p|p|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Ind	22	det	_	_
22	locis	locus	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	29	obl:lmod	_	_
23	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	24	cc	_	_
24	vocabulis	uocabulum	NOUN	n|n|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur	22	conj	_	_
25	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	27	case	_	_
26	predicta	praedictus	DET	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	27	det	_	_
27	ecclesia	ecclesia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	29	obl:arg	_	_
28	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	29	aux	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
29	pertenentes	pertineo	VERB	t|t|-|s|p|p|a|m|a|-	Aspect=Imp|Case=Acc|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	1	acl	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Praesens
30	,	,	PUNCT	Punc	_	35	punct	_	_
31	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	32	case	_	_
32	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	35	obl	_	_
33	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	35	obl:arg	_	_
34	eas	is	PRON	p|p|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Prs	35	obj	_	_
35	dedisti	do	VERB	v|v|2|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
36	;	;	PUNCT	Punc	_	35	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 44	bgColor:blue
# visual-style 44	fgColor:white
# visual-style 44 16 dislocated:obl	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	61	cc	_	_
2	si	si	SCONJ	c|c|-|-|-|-|-|-|-|-	_	44	mark	_	_
3	quandoque	quandoque	PRON	d|d|-|-|-|-|-|-|-|-	PronType=Rel	4	det	_	_
4	tempore	tempus	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	44	obl	_	_
5	ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	8	det	_	_
6	qui	qui	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	8	det	_	_
7	supra	supra	ADV	d|d|-|-|-|-|-|-|-|-	_	6	fixed	_	_
8	Vuilipertus	Wilipertus	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	44	dislocated:nsubj	_	_
9	presbitero	presbyter	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	8	appos	_	_
10	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	12	cc	_	_
11	meis	meus	DET	a|a|1|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	12	det	_	_
12	heredes	heres	NOUN	n|n|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur	8	conj	_	_
13	vobis	uos	PRON	p|p|2|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur|Person=2|PronType=Prs	16	det	_	_
14	qui	qui	DET	p|p|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|PronType=Ind	16	nmod	_	_
15	supra	supra	ADV	d|d|-|-|-|-|-|-|-|-	_	14	fixed	_	_
16	Rachiprando	Rachiprandus	PROPN	Propn|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	44	dislocated:obl	_	_
17	presbitero	presbyter	NOUN	n|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	16	appos	_	_
18	seo	seu	CCONJ	c|c|-|-|-|-|-|-|-|-	_	19	cc	_	_
19	Alchisi	Alahis	PROPN	Propn|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	16	conj	_	_
20	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	21	cc	_	_
21	Ferelando	Ferilandus	PROPN	Propn|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	19	conj	_	_
22	germani	germanus	NOUN	n|n|-|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur	19	appos	_	_
23	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	25	cc	_	_
24	eidem	idem	DET	p|p|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|PronType=Dem	25	det	_	_
25	homini	homo	NOUN	n|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	19	conj	_	SpaceAfter=No
26	,	,	PUNCT	Punc	_	34	punct	_	_
27	cui	qui	PRON	p|p|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|PronType=Rel	34	obl:arg	_	_
28	vobis	uos	PRON	p|p|2|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur|Person=2|PronType=Prs	34	nsubj	_	_
29	ex	ex	ADP	r|r|-|-|-|-|-|-|-|-	_	31	case	_	_
30	suprascriptis	suprascriptus	DET	a|a|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur|PronType=Dem	31	det	_	_
31	casis	casa	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	34	obl	_	_
32	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	33	cc	_	_
33	rebus	res	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	31	conj	_	_
34	dederitis	do	VERB	v|v|2|p|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	25	acl:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=FuturumExactum
35	,	,	PUNCT	Punc	_	44	punct	_	_
36	ut	ut	CCONJ	c|c|-|-|-|-|-|-|-|-	PronType=Rel	44	reparandum	_	SpaceAfter=No
37	,	,	PUNCT	Punc	_	44	punct	_	_
38	si	si	SCONJ	c|c|-|-|-|-|-|-|-|-	_	44	reparandum	_	_
39	nos	nos	PRON	p|p|1|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|Person=1|PronType=Prs	44	nsubj	_	_
40	vobis	uos	PRON	p|p|2|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur|Person=2|PronType=Prs	44	obl:arg	_	_
41	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	42	case	_	_
42	aliquot	aliqui	DET	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Ind	44	obl	_	_
43	exinde	exinde	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Loc	44	advmod:tmod	_	_
44	intentionaverimus	intentiono	VERB	v|v|1|p|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	61	advcl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=FuturumExactum
45	aut	aut	CCONJ	c|c|-|-|-|-|-|-|-|-	_	47	cc	_	_
46	subtragi	subtraho	VERB	v|v|-|-|p|n|p|-|-|-	Aspect=Imp|VerbForm=Vnoun|Voice=Pass	47	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
47	quesierimus	quaero	VERB	v|v|1|p|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	44	conj	_	TraditionalMood=Indicativus|TraditionalTense=FuturumExactum
48	per	per	ADP	r|r|-|-|-|-|-|-|-|-	_	50	case	_	_
49	quolibet	quilibet	DET	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Ind	50	det	_	_
50	ingenium	ingenium	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	44	obl	_	_
51	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	53	cc	_	_
52	ille	ille	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	53	det	_	_
53	homo	homo	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	39	conj	_	_
54	cui	qui	PRON	p|p|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|PronType=Rel	57	obl:arg	_	_
55	nos	nos	PRON	p|p|1|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|Person=1|PronType=Prs	57	nsubj	_	_
56	eas	is	PRON	p|p|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Prs	57	obj	_	_
57	dedissemus	do	VERB	v|v|1|p|l|s|a|-|-|-	Aspect=Perf|Mood=Sub|Number=Plur|Person=1|Tense=Pqp|VerbForm=Fin|Voice=Act	53	acl:relcl	_	TraditionalMood=Subiunctivus|TraditionalTense=Plusquamperfectum
58	aut	aut	CCONJ	c|c|-|-|-|-|-|-|-|-	_	59	cc	_	_
59	dederimus	do	VERB	v|v|1|p|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	57	conj	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=FuturumExactum
60	,	,	PUNCT	Punc	_	61	punct	_	_
61	spondimus	spondeo	VERB	v|v|1|p|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
62	nos	nos	PRON	p|p|1|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|Person=1|PronType=Prs	61	nsubj	_	_
63	vobis	uos	PRON	p|p|2|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur|Person=2|PronType=Prs	64	obl:arg	_	_
64	conponere	compono	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Vnoun|Voice=Act	61	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
65	prefatis	praefatus	DET	a|a|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur|PronType=Dem	66	det	_	_
66	casis	casa	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	64	obl:arg	_	_
67	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	68	cc	_	_
68	rebus	res	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	66	conj	_	_
69	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	70	case	_	_
70	duplum	duplus	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|NumType=Mult	64	obl	_	SpaceAfter=No
71	,	,	PUNCT	Punc	_	74	punct	_	_
72	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	74	case	_	_
73	ferquidem	ferquidis	ADJ	a|a|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	74	amod	_	_
74	locas	locum	NOUN	n|n|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur	64	obl	_	SpaceAfter=No
75	,	,	PUNCT	Punc	_	77	punct	_	_
76	sub	sub	ADP	r|r|-|-|-|-|-|-|-|-	_	77	case	_	_
77	estimationem	aestimatio	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	64	obl	_	SpaceAfter=No
78	.	.	PUNCT	Punc	_	61	punct	_	_

~~~


