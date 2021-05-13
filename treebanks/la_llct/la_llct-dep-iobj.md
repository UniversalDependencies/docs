---
layout: base
title:  'Statistics of iobj in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `iobj`

This relation is universal.

18 nodes (0%) are attached to their parents as `iobj`.

10 instances of `iobj` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.22222222222222.

The following 4 pairs of parts of speech are connected with `iobj`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (10; 56% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt> (4; 22% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-PRON.html">PRON</a></tt> (3; 17% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NUM.html">NUM</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 iobj	color:blue
1	liceat	licet	VERB	v|v|3|s|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	1	obl:arg	_	_
3	inquirere	inquiro	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	1	csubj	_	_
4	pars	pars	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	3	iobj	_	_
5	ipsius	ipse	DET	p|p|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	8	det	_	_
6	epischupatui	episcopatus	NOUN	n|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	_
7	sancti	sanctus	ADJ	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	8	amod	_	_
8	Martini	Martinus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	_
9	si	si	SCONJ	c|c|-|-|-|-|-|-|-|-	_	14	mark	_	_
10	per	per	ADP	r|r|-|-|-|-|-|-|-|-	_	11	case	_	_
11	testes	testis	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	13	obl	_	_
12	hoc	hic	DET	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	13	obj	_	_
13	adprobare	approbo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	14	xcomp	_	_
14	possum	possum	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|VerbType=Mod|Voice=Act	3	ccomp	_	_
15	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	16	cc	_	_
16	revertere	reuorto	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	13	conj	_	_
17	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	18	mark	_	_
18	placitum	placeo	VERB	t|t|-|s|r|p|p|n|a|-	Aspect=Perf|Case=Acc|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	16	advcl	_	_
19	ponendum	pono	VERB	t|t|-|s|p|d|p|n|a|-	Aspect=Imp|Case=Acc|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Ger|Voice=Pass	16	advcl	_	_
20	exinde	exinde	ADV	d|d|-|-|-|-|-|-|-|-	_	19	advmod	_	_
21	ratione	ratio	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	19	obj	_	_
22	iuxta	iuxta	ADP	r|r|-|-|-|-|-|-|-|-	_	23	case	_	_
23	lege	lex	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	19	obl	_	SpaceAfter=No
24	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 iobj	color:blue
1	cartulas	chartula	NOUN	n|n|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur	3	nsubj:pass	_	_
2	ipsas	ipse	DET	p|p|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur|PronType=Dem	1	det	_	_
3	relectas	relego	VERB	t|t|-|p|r|p|p|f|a|-	Aspect=Perf|Case=Acc|Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	10	advcl	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	3	punct	_	_
5	sic	sic	ADV	d|d|-|-|-|-|-|-|-|-	_	10	advmod	_	_
6	nos	nos	PRON	p|p|1|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|Person=1|PronType=Prs	10	nsubj	_	_
7	auditores	auditor	NOUN	n|n|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur	6	appos	_	_
8	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	9	cc	_	_
9	iudicibus	iudex	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	7	conj	_	_
10	interrogavimus	interrogo	VERB	v|v|1|p|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
11	iam	iam	ADV	d|d|-|-|-|-|-|-|-|-	_	13	det	_	_
12	dicto	dico	VERB	t|t|-|s|r|p|p|m|a|-	Aspect=Perf|Case=Acc|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	11	fixed	_	_
13	Ghisiprandus	Ghisprandus	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	10	iobj	_	_
14	presbiter	presbyter	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	13	appos	_	_
15	seu	seu	CCONJ	c|c|-|-|-|-|-|-|-|-	_	16	cc	_	_
16	Andrea	Andreas	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	13	conj	_	SpaceAfter=No
17	,	,	PUNCT	Punc	_	18	punct	_	_
18	avocato	aduocatus	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	16	appos	_	_
19	eius	is	PRON	p|p|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Dem,Prs	18	det	_	SpaceAfter=No
20	,	,	PUNCT	Punc	_	21	punct	_	_
21	si	si	SCONJ	c|c|-|-|-|-|-|-|-|-	_	41	mark	_	_
22	aliquit	aliquis	PRON	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Ind	40	obj	_	_
23	ex	ex	ADP	r|r|-|-|-|-|-|-|-|-	_	25	case	_	_
24	ipsis	ipse	DET	p|p|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur|PronType=Dem	25	det	_	_
25	casis	casa	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	40	obl	_	_
26	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	27	cc	_	_
27	rebus	res	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	25	conj	_	SpaceAfter=No
28	,	,	PUNCT	Punc	_	33	punct	_	_
29	quas	qui	PRON	p|p|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur|PronType=Rel	33	nsubj:pass	_	_
30	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	32	case	_	_
31	ipsas	ipse	DET	p|p|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur|PronType=Dem	32	det	_	_
32	cartulas	chartula	NOUN	n|n|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur	33	obl	_	_
33	legebatur	lego	VERB	v|v|3|s|i|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	25	acl:relcl	_	SpaceAfter=No
34	,	,	PUNCT	Punc	_	25	punct	_	_
35	da	da	ADP	r|r|-|-|-|-|-|-|-|-	_	36	case	_	_
36	parte	pars	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	40	obl	_	_
37	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	36	nmod	_	_
38	sancte	sanctus	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	39	amod	_	_
39	Marie	Maria	PROPN	Propn|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	37	nmod	_	_
40	contendere	contendo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	41	xcomp	_	_
41	potuisset	possum	VERB	v|v|3|s|l|s|a|-|-|-	Aspect=Perf|Mood=Sub|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin|VerbType=Mod|Voice=Act	10	ccomp	_	_
42	per	per	ADP	r|r|-|-|-|-|-|-|-|-	_	43	case	_	_
43	cartula	chartula	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	40	obl	_	_
44	aut	aut	CCONJ	c|c|-|-|-|-|-|-|-|-	_	48	cc	_	_
45	per	per	ADP	r|r|-|-|-|-|-|-|-|-	_	48	case	_	_
46	nulla	nullus	DET	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Ind,Neg	48	det	_	_
47	alia	alius	DET	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Ind	48	det	_	_
48	factione	factio	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	43	conj	_	SpaceAfter=No
49	.	.	PUNCT	Punc	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 37	bgColor:blue
# visual-style 37	fgColor:white
# visual-style 37 36 iobj	color:blue
1	quit	quis	PRON	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Ind	4	obj	_	_
2	si	si	SCONJ	c|c|-|-|-|-|-|-|-|-	_	5	mark	_	_
3	aliter	aliter	ADV	d|d|-|-|-|-|-|-|-|-	_	4	advmod	_	_
4	facere	facio	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	5	xcomp	_	_
5	presumseritis	praesumo	VERB	v|v|2|p|r|s|a|-|-|-	Aspect=Perf|Mood=Sub|Number=Plur|Person=2|Tense=Past|VerbForm=Fin|VerbType=Mod|Voice=Act	0	root	_	_
6	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	10	cc	_	_
7	omnia	omnis	DET	a|a|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|PronType=Tot	10	obj	_	_
8	sic	sic	ADV	d|d|-|-|-|-|-|-|-|-	_	10	advmod	_	_
9	non	non	PART	d|d|-|-|-|-|-|-|-|-	Polarity=Neg	10	advmod	_	_
10	adinpleveritis	adimpleo	VERB	v|v|2|p|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	5	conj	_	_
11	sicut	sicut	SCONJ	c|c|-|-|-|-|-|-|-|-	_	14	mark	_	_
12	a	ab	ADP	r|r|-|-|-|-|-|-|-|-	_	13	case	_	_
13	me	ego	PRON	p|p|1|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|Person=1|PronType=Prs	14	obl:arg	_	_
14	dispositum	dispono	VERB	t|t|-|s|r|p|p|n|n|-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	10	advcl	_	_
15	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	14	aux:pass	_	SpaceAfter=No
16	,	,	PUNCT	Punc	_	18	punct	_	_
17	beatissimus	beatus	ADJ	a|a|-|s|-|-|-|m|n|s	Case=Nom|Degree=Abs|Gender=Masc|Number=Sing	18	amod	_	_
18	episcopus	episcopus	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
19	huius	hic	DET	p|p|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	20	det	_	_
20	civitatis	ciuitas	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	18	nmod	_	_
21	vos	uos	PRON	p|p|2|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|Person=2|PronType=Prs	22	obj	_	_
22	emendare	emendo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	26	xcomp	_	_
23	pro	pro	ADP	r|r|-|-|-|-|-|-|-|-	_	25	case	_	_
24	Dei	Deus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	25	nmod	_	_
25	misericordia	misericordia	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	22	obl	_	_
26	dignetur	dignor	VERB	v|v|3|s|p|s|p|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod|Voice=Pass	5	parataxis	_	_
27	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	33	cc	_	_
28	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	30	case	_	_
29	veram	uerus	ADJ	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	30	amod	_	_
30	pacem	pax	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	33	obl	_	_
31	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	32	cc	_	_
32	dilectionem	dilectio	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	30	conj	_	_
33	reducere	reduco	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	22	conj	_	_
34	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	38	cc	_	_
35	omnia	omnis	DET	a|a|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|PronType=Tot	37	obj	_	_
36	vos	uos	PRON	p|p|2|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|Person=2|PronType=Prs	37	iobj	_	_
37	facere	facio	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	38	xcomp	_	_
38	precipiat	praecipio	VERB	v|v|3|s|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	SpaceAfter=No
39	,	,	PUNCT	Punc	_	42	punct	_	_
40	sicut	sicut	SCONJ	c|c|-|-|-|-|-|-|-|-	_	42	mark	_	_
41	supra	supra	ADV	d|d|-|-|-|-|-|-|-|-	_	42	advmod	_	_
42	legitur	lego	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	37	advcl	_	SpaceAfter=No
43	;	;	PUNCT	Punc	_	5	punct	_	_

~~~


