---
layout: base
title:  'Statistics of iobj in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `iobj`

This relation is universal.

28 nodes (0%) are attached to their parents as `iobj`.

16 instances of `iobj` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.78571428571429.

The following 4 pairs of parts of speech are connected with `iobj`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-PRON.html">PRON</a></tt> (11; 39% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (10; 36% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt> (6; 21% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 37	bgColor:blue
# visual-style 37	fgColor:white
# visual-style 37 36 iobj	color:blue
1	quit	quis	PRON	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Ind	4	obj	_	_
2	si	si	SCONJ	c|c|-|-|-|-|-|-|-|-	_	5	mark	_	_
3	aliter	aliter	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Con	4	advmod	_	_
4	facere	facio	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	5	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
5	presumseritis	praesumo	VERB	v|v|2|p|r|s|a|-|-|-	Aspect=Perf|Mood=Sub|Number=Plur|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Subiunctivus|TraditionalTense=Perfectum
6	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	10	cc	_	_
7	omnia	omnis	DET	a|a|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|PronType=Tot	10	obj	_	_
8	sic	sic	ADV	d|d|-|-|-|-|-|-|-|-	_	10	advmod	_	_
9	non	non	PART	d|d|-|-|-|-|-|-|-|-	Polarity=Neg	10	advmod:neg	_	_
10	adinpleveritis	adimpleo	VERB	v|v|2|p|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	5	conj	_	TraditionalMood=Indicativus|TraditionalTense=Futurum
11	sicut	sicut	SCONJ	c|c|-|-|-|-|-|-|-|-	_	14	mark	_	_
12	a	ab	ADP	r|r|-|-|-|-|-|-|-|-	_	13	case	_	_
13	me	ego	PRON	p|p|1|s|-|-|-|m|b|-	Case=Abl|Number=Sing|Person=1|PronType=Prs	14	obl:arg	_	_
14	dispositum	dispono	VERB	t|t|-|s|r|p|p|n|n|-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	10	advcl:cmp	_	TraditionalMood=Participium|TraditionalTense=Perfectum
15	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux:pass	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
16	,	,	PUNCT	Punc	_	18	punct	_	_
17	beatissimus	beatus	ADJ	a|a|-|s|-|-|-|m|n|s	Case=Nom|Degree=Abs|Gender=Masc|Number=Sing	18	amod	_	_
18	episcopus	episcopus	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
19	huius	hic	DET	p|p|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	20	det	_	_
20	civitatis	ciuitas	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	18	nmod	_	_
21	vos	uos	PRON	p|p|2|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|Person=2|PronType=Prs	22	obj	_	_
22	emendare	emendo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	26	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
23	pro	pro	ADP	r|r|-|-|-|-|-|-|-|-	_	25	case	_	_
24	Dei	Deus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	25	nmod	_	_
25	misericordia	misericordia	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	22	obl	_	_
26	dignetur	dignor	VERB	v|v|3|s|p|s|p|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	5	parataxis	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
27	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	33	cc	_	_
28	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	30	case	_	_
29	veram	uerus	ADJ	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	30	amod	_	_
30	pacem	pax	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	33	obl	_	_
31	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	32	cc	_	_
32	dilectionem	dilectio	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	30	conj	_	_
33	reducere	reduco	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	22	conj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
34	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	38	cc	_	_
35	omnia	omnis	DET	a|a|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|PronType=Tot	37	obj	_	_
36	vos	uos	PRON	p|p|2|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|Person=2|PronType=Prs	37	iobj	_	_
37	facere	facio	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	38	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
38	precipiat	praecipio	VERB	v|v|3|s|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
39	,	,	PUNCT	Punc	_	42	punct	_	_
40	sicut	sicut	SCONJ	c|c|-|-|-|-|-|-|-|-	_	42	mark	_	_
41	supra	supra	ADV	d|d|-|-|-|-|-|-|-|-	_	42	advmod	_	_
42	legitur	lego	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	37	advcl:cmp	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
43	;	;	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 iobj	color:blue
1	liceat	licet	VERB	v|v|3|s|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
2	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Number=Sing|Person=1|PronType=Prs	1	obl:arg	_	_
3	inquirere	inquiro	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	1	csubj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
4	pars	pars	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	3	iobj	_	_
5	ipsius	ipse	DET	p|p|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	8	det	_	_
6	epischupatui	episcopatus	NOUN	n|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	_
7	sancti	sanctus	ADJ	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	8	amod	_	_
8	Martini	Martinus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	_
9	si	si	SCONJ	c|c|-|-|-|-|-|-|-|-	_	14	mark	_	_
10	per	per	ADP	r|r|-|-|-|-|-|-|-|-	_	11	case	_	_
11	testes	testis	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	13	obl	_	_
12	hoc	hic	DET	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	13	obj	_	_
13	adprobare	approbo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	14	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
14	possum	possum	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
15	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	16	cc	_	_
16	revertere	reuorto	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	13	conj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
17	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	18	mark	_	_
18	placitum	placeo	VERB	t|t|-|s|r|p|p|n|a|-	Aspect=Perf|Case=Acc|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	16	advcl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
19	ponendum	pono	VERB	t|t|-|s|p|d|p|n|a|-	Aspect=Prosp|Case=Acc|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	16	advcl	_	TraditionalMood=Gerundium
20	exinde	exinde	ADV	d|d|-|-|-|-|-|-|-|-	_	19	advmod	_	_
21	ratione	ratio	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	19	obj	_	_
22	iuxta	iuxta	ADP	r|r|-|-|-|-|-|-|-|-	_	23	case	_	_
23	lege	lex	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	19	obl	_	SpaceAfter=No
24	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 1 iobj	color:blue
1	Gheifrid	Gheifridus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	30	iobj	_	_
2	religiosum	religiosus	ADJ	a|a|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	3	amod	_	_
3	clericum	clericus	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	1	appos	_	_
4	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|d|-	Case=Dat|Gender=Fem|Number=Sing	3	nmod	_	_
5	domine	domina	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	7	nmod	_	_
6	me	meus	DET	a|a|1|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	5	det	_	_
7	Marie	Maria	PROPN	Propn|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	_
8	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	10	cc	_	_
9	beati	beatus	ADJ	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	10	amod	_	_
10	Mihaeli	Michael	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	7	conj	_	_
11	harcangeli	archangelus	NOUN	n|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	10	nmod	_	_
12	adque	atque	CCONJ	c|c|-|-|-|-|-|-|-|-	_	13	cc	_	_
13	Petri	Petrus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	7	conj	_	_
14	princeps	princeps	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	13	appos	_	_
15	apostulorum	apostolus	NOUN	n|n|-|p|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Plur	14	nmod	_	_
16	a	ab	ADP	r|r|-|-|-|-|-|-|-|-	_	17	case	_	_
17	me	ego	PRON	p|p|1|s|-|-|-|m|b|-	Case=Abl|Number=Sing|Person=1|PronType=Prs	22	obl:arg	_	_
18	ipso	ipse	DET	p|p|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|PronType=Dem	17	det	_	_
19	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	21	case	_	_
20	proprio	proprius	ADJ	a|a|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	21	amod	_	_
21	territorio	territorium	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	22	obl	_	_
22	fondatum	fundo	VERB	t|t|-|s|r|p|p|n|d|-	Aspect=Perf|Case=Dat|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	4	acl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
23	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	24	case	_	_
24	loquo	locus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	22	obl	_	_
25	qui	qui	PRON	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	26	nsubj:pass	_	_
26	dicitur	dico	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	24	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
27	Branculum	Brancalum	PROPN	Propn|n|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing	26	xcomp	_	_
28	perpetua	perpetuus	ADJ	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	29	amod	_	_
29	salute	salus	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	30	obj	_	_
30	dixi	dico	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
31	.	.	PUNCT	Punc	_	30	punct	_	_

~~~


