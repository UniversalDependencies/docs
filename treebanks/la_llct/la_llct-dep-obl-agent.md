---
layout: base
title:  'Statistics of obl:agent in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="la_llct-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="la_llct-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="la_llct-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="la_llct-dep-obl-tmod.html">obl:tmod</a></tt>.

2 nodes (0%) are attached to their parents as `obl:agent`.

2 instances of `obl:agent` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.5.

The following 2 pairs of parts of speech are connected with `obl:agent`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-PRON.html">PRON</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 16 obl:agent	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	19	cc	_	_
2	tam	tam	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Dem	3	advmod:emph	_	_
3	ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	19	obl:arg	_	_
4	quam	quam	SCONJ	c|c|-|-|-|-|-|-|-|-	PronType=Rel	7	mark	_	_
5	et	et	CCONJ	d|d|-|-|-|-|-|-|-|-	_	7	advmod:emph	_	_
6	predictus	praedictus	DET	a|a|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	7	det	_	_
7	germanus	germanus	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	19	advcl:cmp	_	_
8	meus	meus	DET	a|a|1|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	7	det	_	_
9	sive	siue	CCONJ	c|c|-|-|-|-|-|-|-|-	_	10	cc	_	_
10	nepotes	nepos	NOUN	n|n|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur	7	conj	_	_
11	mei	meus	DET	a|a|1|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	10	det	_	_
12	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	13	cc	_	_
13	[pronoun]	_	PRON	Punc	_	7	conj	_	_
14	[preposition]	_	ADP	Punc	_	16	case	_	_
15	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	16	det	_	_
16	ecclesia	ecclesia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	19	obl:agent	_	_
17	post	post	ADP	r|r|-|-|-|-|-|-|-|-	_	18	case	_	_
18	nos	nos	PRON	p|p|1|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|Person=1|PronType=Prs	19	obl	_	_
19	ordinatus	ordino	VERB	t|t|-|s|r|p|p|m|n|-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	TraditionalMood=Participium|TraditionalTense=Perfectum
20	fuerit	sum	AUX	v|v|3|s|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	19	aux:pass	_	TraditionalMood=Indicativus|TraditionalTense=FuturumExactum
21	semper	semper	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Tim	29	advmod:tmod	_	SpaceAfter=No
22	,	,	PUNCT	Punc	_	21	punct	_	_
23	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	24	case	_	_
24	festivitate	festiuitas	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	29	obl	_	_
25	sancti	sanctus	ADJ	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	26	amod	_	_
26	Martini	Martinus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	24	nmod	_	SpaceAfter=No
27	,	,	PUNCT	Punc	_	24	punct	_	_
28	ibi	ubi	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	29	advmod	_	_
29	pascere	pasco	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Vnoun|Voice=Act	30	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
30	debeamus	debeo	VERB	v|v|1|p|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	19	csubj:relcl	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
31	presbiteros	presbyter	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	29	obj	_	_
32	tres	tres	NUM	a|a|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|NumType=Card	31	nummod	_	_
33	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	34	cc	_	_
34	pauperes	pauper	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	31	conj	_	_
35	sex	sex	NUM	m|m|-|-|-|-|-|-|-|-	NumType=Card	34	nummod	_	SpaceAfter=No
36	,	,	PUNCT	Punc	_	31	punct	_	_
37	abentes	habeo	VERB	t|t|-|p|p|p|a|m|n|-	Aspect=Imp|Case=Nom|Gender=Masc|Number=Plur|VerbForm=Part|Voice=Act	29	advcl:abs	_	TraditionalMood=Participium|TraditionalTense=Praesens
38	per	per	ADP	r|r|-|-|-|-|-|-|-|-	_	39	case	_	_
39	singulos	singulus	ADJ	a|a|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|NumType=Dist	37	obl	_	_
40	ipsi	ipse	DET	p|p|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	41	det	_	_
41	pauperes	pauper	NOUN	n|n|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur	37	nsubj	_	_
42	dimidium	dimidium	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	37	obj	_	_
43	panem	panis	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	42	nmod	_	SpaceAfter=No
44	,	,	PUNCT	Punc	_	46	punct	_	_
45	tres	tres	NUM	a|a|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|NumType=Card	46	nummod	_	_
46	calices	calix	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	42	conj	_	_
47	vini	uinum	NOUN	n|n|-|s|-|-|-|n|g|-	Case=Gen|Gender=Neut|Number=Sing	46	nmod	_	_
48	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	50	cc	_	_
49	duo	duo	NUM	a|a|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|NumType=Card	50	nummod	_	_
50	pulmentaria	pulmentarium	NOUN	n|n|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur	42	conj	_	_
51	pro	pro	ADP	r|r|-|-|-|-|-|-|-|-	_	52	case	_	_
52	salute	salus	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	37	obl	_	_
53	animarum	anima	NOUN	n|n|-|p|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Plur	52	nmod	_	_
54	nostrarum	noster	DET	a|a|1|p|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Plur|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	53	det	_	SpaceAfter=No
55	;	;	PUNCT	Punc	_	19	punct	_	_

~~~


~~~ conllu
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 40	bgColor:blue
# visual-style 40	fgColor:white
# visual-style 40 36 obl:agent	color:blue
1	unde	unde	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Loc|PronType=Rel	2	advmod:lmod	_	_
2	spondimus	spondeo	VERB	v|v|1|p|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
3	nos	nos	PRON	p|p|1|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|Person=1|PronType=Prs	5	det	_	_
4	supradictis	supradictus	ADJ	a|a|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur	5	amod	_	_
5	germanis	germanus	NOUN	n|n|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur	2	nsubj	_	_
6	una	una	ADV	d|d|-|-|-|-|-|-|-|-	_	9	case	_	_
7	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	6	fixed	_	_
8	nostris	noster	DET	a|a|1|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	9	det	_	_
9	heredibus	heres	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	2	obl	_	_
10	tibi	tu	PRON	p|p|2|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=2|PronType=Prs	11	det	_	_
11	domno	domnus	NOUN	n|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	2	obl:arg	_	_
12	Peredeo	Peredeus	PROPN	Propn|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	11	flat	_	_
13	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	15	case	_	_
14	Dei	Deus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	15	nmod	_	_
15	nomine	nomen	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	16	nmod	_	_
16	episcopo	episcopus	NOUN	n|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	11	appos	_	_
17	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	19	cc	_	_
18	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	19	case	_	_
19	successoribus	successor	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	11	conj	_	_
20	vestris	uester	DET	a|a|2|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur|Number[psor]=Plur|Person[psor]=2|Poss=Yes|PronType=Prs	19	det	_	_
21	ut	ut	SCONJ	c|c|-|-|-|-|-|-|-|-	PronType=Rel	56	mark	_	SpaceAfter=No
22	,	,	PUNCT	Punc	_	40	punct	_	_
23	si	si	SCONJ	c|c|-|-|-|-|-|-|-|-	_	40	mark	_	_
24	hec	hic	DET	p|p|-|p|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Plur|PronType=Dem	27	det	_	_
25	omnia	omnis	DET	a|a|-|p|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Plur|PronType=Tot	27	det	_	_
26	suprascripta	suprascriptus	DET	a|a|-|p|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Plur|PronType=Dem	27	det	_	_
27	capitula	capitulum	NOUN	n|n|-|p|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Plur	40	nsubj:pass	_	_
28	tam	tam	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Dem	30	advmod:emph	_	_
29	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	30	case	_	_
30	reddito	reditus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	40	obl	_	_
31	quam	quam	SCONJ	c|c|-|-|-|-|-|-|-|-	PronType=Rel	34	mark	_	_
32	et	et	CCONJ	d|d|-|-|-|-|-|-|-|-	_	34	advmod:emph	_	_
33	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	34	case	_	_
34	angaria	angaria	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	40	advcl:cmp	_	_
35	a	ab	ADP	r|r|-|-|-|-|-|-|-|-	_	36	case	_	_
36	nos	nos	PRON	p|p|1|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|Person=1|PronType=Prs	40	obl:agent	_	_
37	vobis	uos	PRON	p|p|2|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur|Person=2|PronType=Prs	40	obl:arg	_	_
38	non	non	PART	d|d|-|-|-|-|-|-|-|-	Polarity=Neg	40	advmod:neg	_	_
39	fuerint	sum	AUX	v|v|3|p|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	40	aux:pass	_	TraditionalMood=Indicativus|TraditionalTense=FuturumExactum
40	adinpletum	adimpleo	VERB	t|t|-|s|r|p|p|n|n|-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	56	advcl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
41	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	42	cc	_	_
42	conservatum	conseruo	VERB	t|t|-|s|r|p|p|n|n|-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	40	conj	_	TraditionalMood=Participium|TraditionalTense=Perfectum
43	aut	aut	CCONJ	c|c|-|-|-|-|-|-|-|-	_	49	cc	_	_
44	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	46	case	_	_
45	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	46	det	_	_
46	casa	casa	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	48	obl	_	_
47	foris	foris	ADV	d|d|-|-|-|-|-|-|-|-	_	48	advmod	_	_
48	exire	exeo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Vnoun|Voice=Act	49	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
49	presumserimus	praesumo	VERB	v|v|1|p|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	40	conj	_	TraditionalMood=Indicativus|TraditionalTense=FuturumExactum
50	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	52	case	_	_
51	alio	alius	DET	a|a|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|PronType=Con	52	det	_	_
52	loco	locus	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	54	obl	_	_
53	ad	ab	ADP	r|r|-|-|-|-|-|-|-|-	_	54	mark	_	_
54	habitandum	habito	VERB	t|t|-|s|p|d|p|n|a|-	Aspect=Prosp|Case=Acc|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	48	advcl	_	SpaceAfter=No|TraditionalMood=Gerundium
55	,	,	PUNCT	Punc	_	56	punct	_	_
56	promittimus	promitto	VERB	v|v|1|p|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
57	nos	nos	PRON	p|p|1|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|Person=1|PronType=Prs	56	nsubj	_	_
58	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	59	case	_	_
59	heredibus	heres	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	56	obl	_	_
60	nostris	noster	DET	a|a|1|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	59	det	_	_
61	conponere	compono	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Vnoun|Voice=Act	56	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
62	tibi	tu	PRON	p|p|2|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=2|PronType=Prs	61	obl:arg	_	_
63	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	64	cc	_	_
64	successoribus	successor	NOUN	n|n|-|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur	62	conj	_	_
65	tuis	tuus	DET	a|a|2|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur|Number[psor]=Sing|Person[psor]=2|Poss=Yes|PronType=Prs	64	det	_	_
66	auri	aurum	NOUN	n|n|-|s|-|-|-|n|g|-	Case=Gen|Gender=Neut|Number=Sing	67	nmod	_	_
67	soledos	solidus	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	61	obj	_	_
68	nomero	numerus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	67	nmod	_	_
69	viginti	uiginti	NUM	m|m|-|-|-|-|-|-|-|-	NumType=Card	68	nummod	_	SpaceAfter=No
70	;	;	PUNCT	Punc	_	2	punct	_	_

~~~


