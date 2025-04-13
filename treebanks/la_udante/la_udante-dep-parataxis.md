---
layout: base
title:  'Statistics of parataxis in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `parataxis`

This relation is universal.
There are 1 language-specific subtypes of `parataxis`: <tt><a href="la_udante-dep-parataxis-reporting.html">parataxis:reporting</a></tt>.

5 nodes (0%) are attached to their parents as `parataxis`.

5 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.6.

The following 2 pairs of parts of speech are connected with `parataxis`: <tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (4; 80% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 parataxis	color:blue
1	[	[	PUNCT	Pu	_	2	punct	_	SpaceAfter=No
2	IOHANNES	iohannes	PROPN	Sms3n	Case=Nom|Gender=Masc|InflClass=IndEurX|NameType=Giv|Number=Sing	0	root	_	_
3	DE	de	ADP	e	_	4	case	_	_
4	VIRGILIO	uergilius	PROPN	Sms2b	Case=Abl|Gender=Masc|InflClass=IndEurO|NameType=Giv|Number=Sing	2	nmod	_	_
5	DANTI	dantes	PROPN	Sms3d	Case=Dat|Gender=Masc|InflClass=IndEurI|NameType=Giv|Number=Sing	2	orphan	_	_
6	ALAGHERII	alagherius	PROPN	Sms2g	Case=Gen|Gender=Masc|InflClass=IndEurO|NameType=Sur|Number=Sing	5	nmod	_	_
7	-	-	PUNCT	Pu	_	8	punct	_	_
8	CARMEN	carmen	NOUN	sns3n	Case=Nom|Gender=Neut|InflClass=IndEurX|Number=Sing	2	parataxis	_	SpaceAfter=No
9	]	]	PUNCT	Pu	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 38 parataxis	color:blue
1	Veneti	uenetus	ADJ	Smp2n	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Plur	8	nsubj	_	_
2	quoque	quoque	PART	r	Form=Emp	8	discourse	_	_
3	nec	neque	CCONJ	co	Polarity=Neg	4	advmod:emph	_	_
4	sese	sui	PRON	ppp3pma	Case=Acc|Form=Emp|InflClass=LatAnom|Person=3|PronType=Prs|Reflex=Yes	8	obj	_	_
5	investigati	inuestigo	VERB	vp1prsng	Aspect=Perf|Case=Gen|Gender=Neut|InflClass=LatA|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	7	acl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
6	vulgaris	uulgare	NOUN	sns3g	Case=Gen|Gender=Neut|InflClass=IndEurI|Number=Sing	5	nsubj:pass	_	_
7	honore	honos	NOUN	sms3b	Case=Abl|Gender=Masc|InflClass=IndEurX|Number=Sing	8	obl	_	_
8	dignantur	dignor	VERB	vd1ipp3	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
9	;	;	PUNCT	Pu	_	10	punct	_	_
10	et	et	CCONJ	co	_	22	cc	_	_
11	si	si	SCONJ	cs	_	18	mark	_	_
12	quis	quis	PRON	dinsmn	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Int	18	nsubj	_	_
13	eorum	is	PRON	ddepmg	Case=Gen|Gender=Masc|InflClass=LatPron|Number=Plur|Person=3|PronType=Prs	12	nmod	_	SpaceAfter=No
14	,	,	PUNCT	Pu	_	16	punct	_	_
15	errore	error	NOUN	sms3b	Case=Abl|Gender=Masc|InflClass=IndEurX|Number=Sing	16	obl:agent	_	_
16	confossus	confodio	VERB	vp3prsmn	Aspect=Perf|Case=Nom|Gender=Masc|InflClass=LatI2|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	18	advcl:pred	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Perfectum
17	,	,	PUNCT	Pu	_	16	punct	_	_
18	vanitaret	uanito	VERB	va1cis3	Aspect=Imp|InflClass=LatA|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	22	advcl	_	TraditionalMood=Subiunctivus|TraditionalTense=Imperfectum
19	in	in	ADP	e	_	20	case	_	_
20	hoc	hic	DET	ddisnb	Case=Abl|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	18	obl	_	SpaceAfter=No
21	,	,	PUNCT	Pu	_	18	punct	_	_
22	recordetur	recordor	VERB	vd1cps3	Aspect=Imp|InflClass=LatA|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	8	conj	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
23	si	si	SCONJ	cs	_	25	mark	_	_
24	unquam	umquam	ADV	r	Compound=Yes	25	advmod	_	_
25	dixit	dico	VERB	va3irs3	Aspect=Perf|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	22	ccomp	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
26	Per	per	X	zi	Foreign=Yes	25	ccomp:reported	_	_
27	le	le	X	zi	Foreign=Yes	26	flat:foreign	_	_
28	plage	plage	X	zi	Foreign=Yes	26	flat:foreign	_	_
29	de	de	X	zi	Foreign=Yes	26	flat:foreign	_	_
30	Dio	dio	X	zi	Foreign=Yes	26	flat:foreign	_	NameType=Rel|Proper=Yes
31	tu	tu	X	zi	Foreign=Yes	26	flat:foreign	_	_
32	no	no	X	zi	Foreign=Yes	26	flat:foreign	_	_
33	veras	ueras	X	zi	Foreign=Yes	26	flat:foreign	_	_
34	Inter	inter	ADP	e	_	35	case	_	_
35	quos	qui	PRON	prepma	Case=Acc|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Rel	38	obl	_	_
36	omnes	omnis	DET	amp2a	Case=Acc|Gender=Masc|InflClass=IndEurI|Number=Plur|PronType=Tot	35	det	_	_
37	unum	unus	DET	dpmsa	Case=Acc|Gender=Masc|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	38	obj	_	_
38	vidimus	uideo	VERB	va2irp1	Aspect=Perf|InflClass=LatE|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	8	parataxis	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
39	nitentem	nitor	VERB	ams2a	Aspect=Imp|Case=Acc|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	38	advcl:pred	_	TraditionalMood=Participium|TraditionalTense=Praesens
40	divertere	diuerto	VERB	va3fp	Aspect=Imp|InflClass=LatX|VerbForm=Inf|Voice=Act	38	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
41	a	a	ADP	e	_	42	case	_	_
42	materno	maternus	ADJ	ans1b	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	40	obl	_	_
43	et	et	CCONJ	co	_	47	cc	_	_
44	ad	ad	ADP	e	_	46	case	_	_
45	curiale	curialis	ADJ	ans2a	Case=Acc|Gender=Neut|InflClass=IndEurI|Number=Sing	46	amod	_	_
46	vulgare	uulgare	NOUN	sns3a	Case=Acc|Gender=Neut|InflClass=IndEurI|Number=Sing	47	obl	_	_
47	intendere	intendo	VERB	va3fp	Aspect=Imp|InflClass=LatX|VerbForm=Inf|Voice=Act	40	conj	_	SpaceAfter=No|TraditionalMood=Infinitivus|TraditionalTense=Praesens
48	,	,	PUNCT	Pu	_	50	punct	_	_
49	videlicet	uidelicet	CCONJ	r	Compound=Yes|VerbForm=Fin	50	cc	_	_
50	Ildebrandinum	ildebrandinus	PROPN	Sms2a	Case=Acc|Gender=Masc|InflClass=IndEurO|NameType=Giv|Number=Sing	37	conj:expl	_	_
51	Paduanum	paduanus	ADJ	ams1a	Case=Acc|Gender=Masc|InflClass=IndEurO|NameType=Nat|Number=Sing	50	amod	_	SpaceAfter=No
52	.	.	PUNCT	Pu	_	8	punct	_	_

~~~


