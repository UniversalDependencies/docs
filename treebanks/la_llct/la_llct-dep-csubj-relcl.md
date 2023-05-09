---
layout: base
title:  'Statistics of csubj:relcl in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `csubj:relcl`

This relation is a language-specific subtype of <tt><a href="la_llct-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="la_llct-dep-csubj-pass.html">csubj:pass</a></tt>.

30 nodes (0%) are attached to their parents as `csubj:relcl`.

20 instances of `csubj:relcl` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 12.7666666666667.

The following 6 pairs of parts of speech are connected with `csubj:relcl`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (18; 60% instances), <tt><a href="la_llct-pos-AUX.html">AUX</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (5; 17% instances), <tt><a href="la_llct-pos-DET.html">DET</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (3; 10% instances), <tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (2; 7% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-AUX.html">AUX</a></tt> (1; 3% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 csubj:relcl	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	10	cc	_	_
2	qui	qui	PRON	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	5	nsubj	_	_
3	hoc	hic	DET	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	4	obj	_	_
4	facere	facio	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	5	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
5	neclexerit	neglego	VERB	v|v|3|s|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	10	csubj:relcl	_	TraditionalMood=Indicativus|TraditionalTense=FuturumExactum
6	a	ab	ADP	r|r|-|-|-|-|-|-|-|-	_	7	case	_	_
7	Deo	Deus	PROPN	Propn|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	10	obl:arg	_	_
8	se	se	PRON	p|p|3|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	10	obj	_	_
9	sia	sum	AUX	v|v|3|s|p|s|a|-|-|-	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux:pass	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
10	damnatum	damno	VERB	t|t|-|s|r|p|p|m|a|-	Aspect=Perf|Case=Acc|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	TraditionalMood=Participium|TraditionalTense=Perfectum
11	pro	pro	ADP	r|r|-|-|-|-|-|-|-|-	_	14	case	_	_
12	ipsa	ipse	DET	p|p|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Dem	14	det	_	_
13	sua	suus	DET	a|a|3|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	14	det	_	_
14	negligentia	neglegentia	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	10	obl	_	SpaceAfter=No
15	.	.	PUNCT	Punc	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 75	bgColor:blue
# visual-style 75	fgColor:white
# visual-style 72	bgColor:blue
# visual-style 72	fgColor:white
# visual-style 72 75 csubj:relcl	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	16	cc	_	_
2	si	si	SCONJ	c|c|-|-|-|-|-|-|-|-	_	16	mark	_	_
3	quiscunque	quicumque	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	16	nsubj	_	_
4	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	5	case	_	_
5	heredibus	heres	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	3	nmod	_	_
6	meis	meus	DET	a|a|1|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	5	det	_	_
7	contra	contra	ADP	r|r|-|-|-|-|-|-|-|-	_	10	case	_	_
8	hanc	hic	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	10	det	_	_
9	dotalis	dotale	NOUN	n|n|-|s|-|-|-|n|g|-	Case=Gen|Gender=Neut|Number=Sing	10	nmod	_	_
10	paginam	pagina	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	11	obl	_	_
11	agere	ago	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	16	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
12	aut	aut	CCONJ	c|c|-|-|-|-|-|-|-|-	_	13	cc	_	_
13	causare	causor	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	11	conj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
14	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	15	cc	_	_
15	disrumpere	disrumpo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	11	conj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
16	presumserit	praesumo	VERB	v|v|3|s|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=FuturumExactum
17	per	per	ADP	r|r|-|-|-|-|-|-|-|-	_	19	case	_	_
18	quolibet	quilibet	DET	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Ind	19	det	_	_
19	ingenio	ingenium	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	11	obl	_	_
20	aut	aut	CCONJ	c|c|-|-|-|-|-|-|-|-	_	23	cc	_	_
21	per	per	ADP	r|r|-|-|-|-|-|-|-|-	_	23	case	_	_
22	summissum	summitto	VERB	t|t|-|s|r|p|p|m|a|-	Aspect=Perf|Case=Acc|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	23	acl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
23	hominem	homo	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	19	conj	_	_
24	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	29	cc	_	_
25	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	26	case	_	_
26	omnibus	omnis	DET	a|a|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur|PronType=Tot	30	obl	_	_
27	sic	sic	ADV	d|d|-|-|-|-|-|-|-|-	_	30	advmod	_	_
28	non	non	PART	d|d|-|-|-|-|-|-|-|-	Polarity=Neg	30	advmod:neg	_	_
29	permiserit	permitto	VERB	v|v|3|s|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	16	conj	_	TraditionalMood=Indicativus|TraditionalTense=FuturumExactum
30	permanere	permaneo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	29	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
31	sicut	sicut	SCONJ	c|c|-|-|-|-|-|-|-|-	_	33	mark	_	_
32	ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	33	nsubj	_	_
33	disposui	dispono	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	30	advcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
34	,	,	PUNCT	Punc	_	35	punct	_	_
35	conponat	compono	VERB	v|v|3|s|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	16	conj	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
36	ipse	ipse	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	37	nmod	_	_
37	heredes	heres	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	35	nsubj	_	_
38	meos	meus	DET	a|a|1|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	37	det	_	SpaceAfter=No
39	,	,	PUNCT	Punc	_	42	punct	_	_
40	qui	qui	PRON	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	42	nsubj	_	_
41	temerator	temerator	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	42	xcomp	_	_
42	existeris	exsisto	VERB	v|v|3|s|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	37	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=FuturumExactum
43	hoc	hic	DET	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	44	obj	_	_
44	faciendo	facio	VERB	t|t|-|s|p|d|p|n|a|-	Aspect=Prosp|Case=Acc|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	42	advcl	_	TraditionalMood=Gerundium
45	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	48	case	_	_
46	predicta	praedictus	DET	a|a|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Dem	48	det	_	_
47	Dei	Deus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	48	nmod	_	_
48	ecclesia	ecclesia	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	35	obl:arg	_	_
49	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	51	cc	_	_
50	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	51	case	_	_
51	rectoribus	rector	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	48	conj	_	_
52	eius	is	PRON	p|p|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	51	nmod	_	SpaceAfter=No
53	,	,	PUNCT	Punc	_	56	punct	_	_
54	omnia	omnis	DET	a|a|-|p|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Plur|PronType=Tot	56	nmod	_	_
55	suprascripta	suprascriptus	DET	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	56	det	_	_
56	res	res	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	35	obj	_	_
57	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	58	case	_	_
58	triplum	triplus	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	59	obl	_	_
59	meliorata	melioro	VERB	t|t|-|s|r|p|p|f|a|-	Aspect=Perf|Case=Acc|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	56	acl	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Perfectum
60	,	,	PUNCT	Punc	_	63	punct	_	_
61	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	63	case	_	_
62	ferquidem	ferquidis	ADJ	a|a|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	63	nmod	_	_
63	locas	locum	NOUN	n|n|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur	35	obl	_	SpaceAfter=No
64	,	,	PUNCT	Punc	_	66	punct	_	_
65	sub	sub	ADP	r|r|-|-|-|-|-|-|-|-	_	66	case	_	_
66	extimationem	aestimatio	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	35	obl	_	_
67	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	68	case	_	_
68	quibus	qui	PRON	p|p|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur|PronType=Rel	72	obl	_	_
69	aut	aut	CCONJ	c|c|-|-|-|-|-|-|-|-	_	70	cc	_	_
70	quales	qualis	DET	a|a|-|p|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Plur|PronType=Rel	68	conj	_	_
71	tunc	tunc	ADV	d|d|-|-|-|-|-|-|-|-	_	72	advmod	_	_
72	fuerint	sum	AUX	v|v|3|p|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	66	acl:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=FuturumExactum
73	,	,	PUNCT	Punc	_	75	punct	_	_
74	unde	unde	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Loc|PronType=Rel	75	advmod:lmod	_	_
75	agitur	ago	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	72	csubj:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
76	.	.	PUNCT	Punc	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 72	bgColor:blue
# visual-style 72	fgColor:white
# visual-style 68	bgColor:blue
# visual-style 68	fgColor:white
# visual-style 68 72 csubj:relcl	color:blue
1	unde	unde	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Loc|PronType=Rel	2	advmod:lmod	_	_
2	repromitto	repromitto	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
3	ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	6	det	_	_
4	qui	qui	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	6	det	_	_
5	supra	supra	ADV	d|d|-|-|-|-|-|-|-|-	_	4	fixed	_	_
6	Teudiprando	Teudiprandus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	2	nsubj	_	SpaceAfter=No
7	,	,	PUNCT	Punc	_	11	punct	_	_
8	una	una	ADV	d|d|-|-|-|-|-|-|-|-	_	11	case	_	_
9	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	8	fixed	_	_
10	meus	meus	DET	a|a|1|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	11	det	_	_
11	heredes	heres	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	2	obl	_	SpaceAfter=No
12	,	,	PUNCT	Punc	_	16	punct	_	_
13	tibi	tu	PRON	p|p|2|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=2|PronType=Prs	16	det	_	_
14	qui	qui	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	16	det	_	_
15	supra	supra	ADV	d|d|-|-|-|-|-|-|-|-	_	14	fixed	_	_
16	Marino	Marinus	PROPN	Propn|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	2	obl:arg	_	_
17	presbitero	presbyter	NOUN	n|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	16	appos	_	_
18	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	19	cc	_	_
19	successoribus	successor	NOUN	n|n|-|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur	16	conj	_	_
20	tuis	tuus	DET	a|a|2|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur|Number[psor]=Sing|Person[psor]=2|Poss=Yes|PronType=Prs	19	det	_	_
21	ut	ut	SCONJ	c|c|-|-|-|-|-|-|-|-	PronType=Rel	46	mark	_	SpaceAfter=No
22	,	,	PUNCT	Punc	_	21	punct	_	_
23	si	si	SCONJ	c|c|-|-|-|-|-|-|-|-	_	30	mark	_	_
24	nos	nos	PRON	p|p|1|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|Person=1|PronType=Prs	30	nsubj	_	_
25	vobis	uos	PRON	p|p|2|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur|Person=2|PronType=Prs	30	obl:arg	_	_
26	suprascripta	suprascriptus	DET	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	27	det	_	_
27	casa	casa	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	30	obj	_	_
28	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	29	cc	_	_
29	res	res	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	27	conj	_	_
30	intentionaverimus	intentiono	VERB	v|v|1|p|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	46	advcl	_	TraditionalMood=Indicativus|TraditionalTense=FuturumExactum
31	aut	aut	CCONJ	c|c|-|-|-|-|-|-|-|-	_	32	cc	_	_
32	subtraxerimus	subtraho	VERB	v|v|1|p|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	30	conj	_	TraditionalMood=Indicativus|TraditionalTense=FuturumExactum
33	per	per	ADP	r|r|-|-|-|-|-|-|-|-	_	35	case	_	_
34	quolibet	quilibet	DET	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Ind	35	det	_	_
35	ingenium	ingenium	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	30	obl	_	_
36	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	44	cc	_	_
37	eam	is	PRON	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	42	obj	_	_
38	vobis	uos	PRON	p|p|2|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur|Person=2|PronType=Prs	42	obl:arg	_	_
39	ab	ab	ADP	r|r|-|-|-|-|-|-|-|-	_	41	case	_	_
40	omni	omnis	DET	a|a|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|PronType=Tot	41	det	_	_
41	homine	homo	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	42	obl	_	_
42	defendere	defendo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	44	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
43	non	non	PART	d|d|-|-|-|-|-|-|-|-	Polarity=Neg	44	advmod:neg	_	_
44	potuerimus	possum	VERB	v|v|1|p|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	30	conj	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=FuturumExactum
45	,	,	PUNCT	Punc	_	30	punct	_	_
46	spondeo	spondeo	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
47	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	48	case	_	_
48	heredibus	heres	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	46	obl	_	_
49	meis	meus	DET	a|a|1|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	48	det	_	_
50	tibi	tu	PRON	p|p|2|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=2|PronType=Prs	54	obl:arg	_	_
51	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	52	cc	_	_
52	successoribus	successor	NOUN	n|n|-|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur	50	conj	_	_
53	tuis	tuus	DET	a|a|2|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur|Number[psor]=Sing|Person[psor]=2|Poss=Yes|PronType=Prs	52	det	_	_
54	conpone	compono	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	46	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
55	omnia	omnis	DET	a|a|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|PronType=Tot	58	nmod	_	_
56	suprascripta	suprascriptus	DET	a|a|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|PronType=Dem	58	nmod	_	_
57	mea	meus	DET	a|a|1|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	58	nmod	_	_
58	venditio	uenditio	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	54	obj	_	_
59	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	60	case	_	_
60	duplum	duplus	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|NumType=Mult	54	obl	_	SpaceAfter=No
61	,	,	PUNCT	Punc	_	64	punct	_	_
62	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	64	case	_	_
63	ferquidem	ferquidis	ADJ	a|a|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	64	amod	_	_
64	loco	locus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	54	obl	_	SpaceAfter=No
65	,	,	PUNCT	Punc	_	67	punct	_	_
66	sub	sub	ADP	r|r|-|-|-|-|-|-|-|-	_	67	case	_	_
67	estimatione	aestimatio	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	54	obl	_	_
68	quales	qualis	DET	a|a|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing|PronType=Rel	67	acl:relcl	_	_
69	tunc	tunc	ADV	d|d|-|-|-|-|-|-|-|-	_	68	advmod	_	_
70	fuerit	sum	AUX	v|v|3|s|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	68	cop	_	TraditionalMood=Indicativus|TraditionalTense=FuturumExactum
71	unde	unde	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Loc|PronType=Rel	72	advmod:lmod	_	_
72	agitur	ago	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	68	csubj:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
73	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


