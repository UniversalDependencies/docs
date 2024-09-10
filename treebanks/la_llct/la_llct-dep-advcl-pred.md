---
layout: base
title:  'Statistics of advcl:pred in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `advcl:pred`

This relation is a language-specific subtype of <tt><a href="la_llct-dep-advcl.html">advcl</a></tt>.
There are also 3 other language-specific subtypes of `advcl`: <tt><a href="la_llct-dep-advcl-abs.html">advcl:abs</a></tt>, <tt><a href="la_llct-dep-advcl-cmp.html">advcl:cmp</a></tt>, <tt><a href="la_llct-dep-advcl-relcl.html">advcl:relcl</a></tt>.

12 nodes (0%) are attached to their parents as `advcl:pred`.

8 instances of `advcl:pred` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 15.

The following 5 pairs of parts of speech are connected with `advcl:pred`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (6; 50% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (3; 25% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (1; 8% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt> (1; 8% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 26 advcl:pred	color:blue
1	unde	unde	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Loc|PronType=Rel	3	advmod:lmod	_	_
2	una	unus	DET	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	3	obj	_	_
3	detuli	defero	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
4	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	5	case	_	_
5	arcivo	archium	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	3	obl	_	_
6	sanctae	sanctus	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	7	amod	_	_
7	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	_
8	domus	domus	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	7	nmod	_	_
9	episcopalis	episcopalis	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	8	amod	_	SpaceAfter=No
10	,	,	PUNCT	Punc	_	13	punct	_	_
11	alia	alius	DET	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Con	13	obj	_	_
12	vero	uero	ADV	d|d|-|-|-|-|-|-|-|-	_	13	discourse	_	_
13	detuli	defero	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
14	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	17	case	_	_
15	suprascripta	suprascriptus	DET	a|a|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Dem	17	det	_	_
16	Dei	Deus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	17	nmod	_	_
17	ecclesia	ecclesia	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	13	obl	_	_
18	sancti	sanctus	ADJ	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	19	amod	_	_
19	Petri	Petrus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	17	nmod	_	SpaceAfter=No
20	,	,	PUNCT	Punc	_	26	punct	_	_
21	ambas	ambo	DET	p|p|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur|NumType=Card|NumValue=2|PronType=Tot	26	advcl:pred	_	_
22	vero	uero	ADV	d|d|-|-|-|-|-|-|-|-	_	26	discourse	_	_
23	prope	prope	ADP	r|r|-|-|-|-|-|-|-|-	_	25	case	_	_
24	uno	unus	DET	a|a|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	25	det	_	_
25	tenore	tenor	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	26	obl	_	_
26	conscriptas	conscribo	VERB	t|t|-|p|r|p|p|f|a|-	Aspect=Perf|Case=Acc|Gender=Fem|Number=Plur|VerbForm=Part|Voice=Pass	3	advcl:pred	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Perfectum
27	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 21 advcl:pred	color:blue
1	unde	unde	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Loc|PronType=Rel	3	advmod:lmod	_	_
2	una	unus	DET	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	3	obj	_	_
3	detuli	defero	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
4	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	5	case	_	_
5	arcivo	archium	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	3	obl	_	_
6	sanctae	sanctus	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	7	amod	_	_
7	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	_
8	domus	domus	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	7	nmod	_	_
9	episcopalis	episcopalis	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	8	amod	_	SpaceAfter=No
10	,	,	PUNCT	Punc	_	13	punct	_	_
11	alia	alius	DET	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Con	13	obj	_	_
12	vero	uero	ADV	d|d|-|-|-|-|-|-|-|-	_	13	discourse	_	_
13	detuli	defero	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
14	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	17	case	_	_
15	suprascripta	suprascriptus	DET	a|a|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Dem	17	det	_	_
16	Dei	Deus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	17	nmod	_	_
17	ecclesia	ecclesia	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	13	obl	_	_
18	sancti	sanctus	ADJ	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	19	amod	_	_
19	Petri	Petrus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	17	nmod	_	SpaceAfter=No
20	,	,	PUNCT	Punc	_	26	punct	_	_
21	ambas	ambo	DET	p|p|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur|NumType=Card|NumValue=2|PronType=Tot	26	advcl:pred	_	_
22	vero	uero	ADV	d|d|-|-|-|-|-|-|-|-	_	26	discourse	_	_
23	prope	prope	ADP	r|r|-|-|-|-|-|-|-|-	_	25	case	_	_
24	uno	unus	DET	a|a|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	25	det	_	_
25	tenore	tenor	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	26	obl	_	_
26	conscriptas	conscribo	VERB	t|t|-|p|r|p|p|f|a|-	Aspect=Perf|Case=Acc|Gender=Fem|Number=Plur|VerbForm=Part|Voice=Pass	3	advcl:pred	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Perfectum
27	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 46	bgColor:blue
# visual-style 46	fgColor:white
# visual-style 70	bgColor:blue
# visual-style 70	fgColor:white
# visual-style 70 46 advcl:pred	color:blue
1	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	11	case	_	_
2	tua	tuus	DET	a|a|2|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=2|Poss=Yes|PronType=Prs	11	det	_	_
3	Dei	Deus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	_
4	ecclesia	ecclesia	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	2	nmod	_	_
5	sancti	sanctus	ADJ	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	6	amod	_	_
6	Martini	Martinus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	_
7	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	9	cc	_	_
8	tuis	tuus	DET	a|a|2|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur|Number[psor]=Sing|Person[psor]=2|Poss=Yes|PronType=Prs	9	det	_	_
9	rectoribus	rector	NOUN	n|n|-|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur	2	conj	_	_
10	sit	sum	AUX	v|v|3|s|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
11	potestatem	potestas	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	0	root	_	_
12	ut	ut	SCONJ	c|c|-|-|-|-|-|-|-|-	PronType=Rel	25	mark	_	_
13	exinde	exinde	ADV	d|d|-|-|-|-|-|-|-|-	_	23	advmod	_	_
14	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	17	case	_	_
15	iam	iam	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Tim	16	advmod:tmod	_	_
16	memorata	memoro	VERB	t|t|-|s|r|p|p|f|b|-	Aspect=Perf|Case=Abl|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	17	acl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
17	cartulam	chartula	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Degree=Dim|Gender=Fem|Number=Sing	23	obl	_	_
18	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	21	cc	_	_
19	iam	iam	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Tim	21	det	_	_
20	dicta	dico	VERB	t|t|-|s|r|p|p|f|b|-	Aspect=Perf|Case=Abl|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	19	fixed	_	TraditionalMood=Participium|TraditionalTense=Perfectum
21	res	res	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	17	conj	_	_
22	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Number=Sing|Person=1|PronType=Prs	23	obl:arg	_	_
23	heredes	heres	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	25	xcomp	_	_
24	esse	sum	AUX	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf	23	cop	_	_
25	debeas	debeo	VERB	v|v|2|s|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	11	csubj	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
26	,	,	PUNCT	Punc	_	44	punct	_	_
27	quia	quia	SCONJ	c|c|-|-|-|-|-|-|-|-	_	44	mark	_	_
28	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	29	case	_	_
29	omnibus	omnis	DET	a|a|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur|PronType=Tot	42	obl	_	_
30	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	31	case	_	_
31	hec	hic	DET	p|p|-|p|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Plur|PronType=Dem	42	obl	_	_
32	que	qui	PRON	p|p|-|p|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Plur|PronType=Rel	34	nsubj:pass	_	_
33	superius	superius	ADV	d|d|-|-|-|-|-|-|-|c	Degree=Cmp	34	advmod	_	_
34	legitur	lego	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	31	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
35	te	tu	PRON	p|p|2|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|Person=2|PronType=Prs	38	det	_	_
36	sanctam	sanctus	ADJ	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	38	amod	_	_
37	Dei	Deus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	38	nmod	_	_
38	ecclesiam	ecclesia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	42	nsubj	_	_
39	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	41	cc	_	_
40	tuis	tuus	DET	a|a|2|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur|Number[psor]=Sing|Person[psor]=2|Poss=Yes|PronType=Prs	41	det	_	_
41	rectoribus	rector	NOUN	n|n|-|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur	38	conj	_	_
42	heredes	heres	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	44	xcomp	_	_
43	esse	sum	AUX	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf	42	cop	_	_
44	constituo	constituo	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	23	advcl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
45	ut	ut	SCONJ	c|c|-|-|-|-|-|-|-|-	PronType=Rel	70	mark	_	_
46	omnia	omnis	DET	a|a|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|PronType=Tot	70	advcl:pred	_	_
47	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	49	cc	_	_
48	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	49	case	_	_
49	omnibus	omnis	DET	a|a|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur|PronType=Tot	46	conj	_	_
50	tam	tam	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Dem	53	advmod:emph	_	_
51	ipse	ipse	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	53	nmod	_	_
52	memoratam	memoro	VERB	t|t|-|s|r|p|p|f|n|-	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	53	acl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
53	cartulam	chartula	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Degree=Dim|Gender=Fem|Number=Sing	70	advcl	_	_
54	quam	quam	SCONJ	c|c|-|-|-|-|-|-|-|-	PronType=Rel	57	mark	_	_
55	et	et	CCONJ	d|d|-|-|-|-|-|-|-|-	_	57	advmod:emph	_	_
56	suprascripta	suprascriptus	DET	a|a|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	57	det	_	_
57	res	res	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	70	advcl:cmp	_	SpaceAfter=No
58	,	,	PUNCT	Punc	_	65	punct	_	_
59	quem	qui	PRON	p|p|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing|PronType=Rel	65	nsubj:pass	_	_
60	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	61	case	_	_
61	cartula	chartula	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Degree=Dim|Gender=Fem|Number=Sing	63	obl	_	_
62	illa	ille	DET	p|p|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Dem	61	det	_	_
63	commemorata	commemoro	VERB	t|t|-|s|r|p|p|f|b|-	Aspect=Perf|Case=Abl|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	65	xcomp	_	TraditionalMood=Participium|TraditionalTense=Perfectum
64	esse	sum	AUX	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf	63	aux:pass	_	_
65	videtur	uideo	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	57	acl:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
66	,	,	PUNCT	Punc	_	57	punct	_	_
67	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	70	case	_	_
68	vestra	uester	DET	a|a|2|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|Number[psor]=Plur|Person[psor]=2|Poss=Yes|PronType=Prs	70	det	_	_
69	sit	sum	AUX	v|v|3|s|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	70	cop	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
70	potestatem	potestas	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	44	advcl	_	_
71	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	72	case	_	_
72	prefinito	praefinitus	ADJ	a|a|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	70	obl	_	_
73	avendum	habeo	VERB	t|t|-|s|p|d|p|n|a|-	Aspect=Prosp|Case=Acc|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	70	acl	_	SpaceAfter=No|TraditionalMood=Gerundium
74	,	,	PUNCT	Punc	_	75	punct	_	_
75	possedendum	possideo	VERB	t|t|-|s|p|d|p|n|a|-	Aspect=Prosp|Case=Acc|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	73	conj	_	SpaceAfter=No|TraditionalMood=Gerundium
76	,	,	PUNCT	Punc	_	77	punct	_	_
77	faciendum	facio	VERB	t|t|-|s|p|d|p|n|a|-	Aspect=Prosp|Case=Acc|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	73	conj	_	SpaceAfter=No|TraditionalMood=Gerundium
78	,	,	PUNCT	Punc	_	79	punct	_	_
79	iudicandum	iudico	VERB	t|t|-|s|p|d|p|n|a|-	Aspect=Prosp|Case=Acc|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	73	conj	_	TraditionalMood=Gerundium
80	exinde	exinde	ADV	d|d|-|-|-|-|-|-|-|-	_	73	advmod	_	_
81	quod	qui	PRON	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	82	obj	_	_
82	volueritis	uolo	VERB	v|v|2|p|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	73	ccomp:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Futurum
83	;	;	PUNCT	Punc	_	11	punct	_	_

~~~


