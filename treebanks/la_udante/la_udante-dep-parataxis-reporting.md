---
layout: base
title:  'Statistics of parataxis:reporting in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `parataxis:reporting`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-parataxis.html">parataxis</a></tt>.

10 nodes (0%) are attached to their parents as `parataxis:reporting`.

7 instances of `parataxis:reporting` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.6.

The following 3 pairs of parts of speech are connected with `parataxis:reporting`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (8; 80% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (1; 10% instances), <tt><a href="la_udante-pos-ADV.html">ADV</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 12 parataxis:reporting	color:blue
1	Me	ego	PRON	ppp1sma	Case=Acc|InflClass=LatAnom|Number=Sing|Person=1|PronType=Prs	2	obj	_	_
2	contempne	contemno	VERB	va3mps2	Aspect=Imp|InflClass=LatX|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Imperativus|TraditionalTense=Praesens
3	:	:	PUNCT	Pu	_	7	punct	_	_
4	sitim	sitis	NOUN	sfs3a	Case=Acc|Gender=Fem|InflClass=IndEurX|Number=Sing	7	obj	_	_
5	Frigio	frigius	ADJ	ams1b	Case=Abl|Gender=Masc|InflClass=IndEurO|NameType=Nat|Number=Sing	6	amod	_	_
6	Musone	muso	PROPN	Sms3b	Case=Abl|Gender=Masc|InflClass=IndEurX|NameType=Sur|Number=Sing	7	obl	_	_
7	levabo	leuo	VERB	va1ifs1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	2	conj	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Futurum
8	,	,	PUNCT	Pu	_	9	punct	_	_
9	scilicet	scilicet	CCONJ	r	Compound=Yes|VerbForm=Fin	16	cc	_	_
10	-	-	PUNCT	Pu	_	9	punct	_	_
11	hoc	hic	DET	ddisna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	12	obj	_	_
12	nescis	nescio	VERB	va4ips2	Aspect=Imp|InflClass=LatI|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	16	parataxis:reporting	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
13	?	?	PUNCT	Pu	_	12	punct	_	_
14	-	-	PUNCT	Pu	_	12	punct	_	_
15	fluvio	fluuius	NOUN	sms2b	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	16	obl	_	_
16	potabor	poto	VERB	vd1ifs1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Pass	7	conj:expl	_	TraditionalMood=Indicativus|TraditionalTense=Futurum
17	avito	auitus	ADJ	ams1b	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	15	amod	_	SpaceAfter=No
18	.	.	PUNCT	Pu	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 parataxis:reporting	color:blue
1	Que	qui	PRON	prepnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Rel	4	det	_	_
2	adhuc	adhuc	ADV	r	AdvType=Tim|Compound=Yes	7	discourse	_	_
3	omnia	omnis	DET	anp2n	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Plur|PronType=Tot	4	det	_	_
4	vulgaria	uulgare	NOUN	snp3n	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Plur	7	nsubj	_	_
5	in	in	ADP	e	_	6	case	_	_
6	sese	sui	PRON	ppp3pnb	Case=Abl|Form=Emp|InflClass=LatAnom|Person=3|PronType=Prs|Reflex=Yes	7	obl	_	_
7	variantur	uario	VERB	vp1ipp3	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
8	,	,	PUNCT	Pu	_	13	punct	_	_
9	ut	ut	SCONJ	r	PronType=Rel	13	mark	_	_
10	puta	puto	VERB	va1mps2	Aspect=Imp|InflClass=LatA|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	13	parataxis:reporting	_	_
11	in	in	ADP	e	_	12	case	_	_
12	Tuscia	tuscia	PROPN	Sfs1b	Case=Abl|Gender=Fem|InflClass=IndEurA|NameType=Geo|Number=Sing	13	orphan	_	_
13	Senenses	senensis	ADJ	Smp3n	Case=Nom|Gender=Masc|InflClass=IndEurI|NameType=Nat|Number=Plur	7	advcl:cmp	_	_
14	et	et	CCONJ	co	_	15	cc	_	_
15	Aretini	aretinus	ADJ	Smp2n	Case=Nom|Gender=Masc|InflClass=IndEurO|NameType=Nat|Number=Plur	13	conj	_	SpaceAfter=No
16	,	,	PUNCT	Pu	_	19	punct	_	_
17	in	in	ADP	e	_	18	case	_	_
18	Lombardia	lombardia	PROPN	Sfs1b	Case=Abl|Gender=Fem|InflClass=IndEurA|NameType=Geo|Number=Sing	19	orphan	_	_
19	Ferrarenses	ferrariensis	ADJ	Smp3n	Case=Nom|Gender=Masc|InflClass=IndEurI|NameType=Nat|Number=Plur	13	conj	_	_
20	et	et	CCONJ	co	_	21	cc	_	_
21	Placentini	placentinus	ADJ	Smp2n	Case=Nom|Gender=Masc|InflClass=IndEurO|NameType=Nat|Number=Plur	19	conj	_	SpaceAfter=No
22	;	;	PUNCT	Pu	_	30	punct	_	_
23	nec	neque	CCONJ	co	Polarity=Neg	30	cc	_	_
24	non	non	PART	r	Polarity=Neg	30	advmod:neg	_	_
25	in	in	ADP	e	_	27	case	_	_
26	eadem	idem	DET	dpfsb	Case=Abl|Form=Emp|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Dem	27	det	_	_
27	civitate	ciuitas	NOUN	sfs3b	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	30	obl	_	_
28	aliqualem	aliqualis	DET	afs2a	Case=Acc|Gender=Fem|InflClass=IndEurI|Number=Sing|PronType=Ind	27	det	_	_
29	variationem	uariatio	NOUN	sfs3a	Case=Acc|Gender=Fem|InflClass=IndEurX|Number=Sing	30	obj	_	_
30	perpendimus	perpendo	VERB	va3ipp1	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
31	,	,	PUNCT	Pu	_	37	punct	_	_
32	ut	ut	SCONJ	r	PronType=Rel	37	mark	_	_
33	superius	supra	ADV	r+	Degree=Cmp	37	advmod	_	_
34	in	in	ADP	e	_	35	case	_	_
35	capitulo	capitulum	NOUN	sns2b	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	37	obl	_	_
36	inmediato	immediatus	ADJ	ans1b	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing|Polarity=Neg	35	amod	_	_
37	posuimus	pono	VERB	va3irp1	Aspect=Perf|InflClass=LatX|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	30	advcl:cmp	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
38	.	.	PUNCT	Pu	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 39	bgColor:blue
# visual-style 39	fgColor:white
# visual-style 39 38 parataxis:reporting	color:blue
1	Et	et	CCONJ	co	_	2	cc	_	_
2	dicimus	dico	VERB	va3ipp1	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
3	quod	quod	SCONJ	cs	PronType=Rel	9	mark	_	SpaceAfter=No
4	,	,	PUNCT	Pu	_	3	punct	_	_
5	si	si	SCONJ	cs	_	9	mark	_	_
6	vulgare	uulgare	NOUN	sns3a	Case=Acc|Gender=Neut|InflClass=IndEurI|Number=Sing	8	obj	_	_
7	sicilianum	sicilianus	ADJ	ans1a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	6	amod	_	_
8	accipere	accipio	VERB	va3fp	Aspect=Imp|InflClass=LatI2|VerbForm=Inf|Voice=Act	9	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
9	volumus	uolo	VERB	va5ipp1	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	27	advcl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
10	secundum	secundum	ADP	e	VerbForm=Part	11	case	_	_
11	quod	qui	PRON	presnn	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	12	obl	_	_
12	prodit	prodeo	VERB	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	advcl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
13	a	a	ADP	e	_	14	case	_	_
14	terrigenis	terrigena	NOUN	smp1b	Case=Abl|Gender=Masc|InflClass=IndEurA|Number=Plur	12	obl:arg	_	_
15	mediocribus	mediocris	ADJ	amp2b	Case=Abl|Gender=Masc|InflClass=IndEurI|Number=Plur	14	amod	_	SpaceAfter=No
16	,	,	PUNCT	Pu	_	22	punct	_	_
17	ex	ex	ADP	e	_	18	case	_	_
18	ore	os	NOUN	sns3b	Case=Abl|Gender=Neut|InflClass=IndEurX|Number=Sing	21	obl:arg	_	_
19	quorum	qui	PRON	prepmg	Case=Gen|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Rel	18	nmod	_	_
20	iudicium	iudicium	NOUN	sns2n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	21	nsubj:pass	_	_
21	eliciendum	elicio	VERB	v3gvsnn	Aspect=Prosp|Case=Nom|Gender=Neut|InflClass=LatI2|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	22	xcomp	_	TraditionalMood=Gerundivum
22	videtur	uideo	VERB	vp2ips3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	14	acl:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
23	,	,	PUNCT	Pu	_	9	punct	_	_
24	prelationis	praelatio	NOUN	sfs3g	Case=Gen|Gender=Fem|InflClass=IndEurX|Number=Sing	25	nmod	_	_
25	honore	honos	NOUN	sms3b	Case=Abl|Gender=Masc|InflClass=IndEurX|Number=Sing	27	obl:arg	_	_
26	minime	parum	ADV	rs	Degree=Abs	27	advmod	_	_
27	dignum	dignus	ADJ	ans1n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	2	ccomp	_	_
28	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	27	cop	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
29	,	,	PUNCT	Pu	_	35	punct	_	_
30	quia	quia	SCONJ	cs	PronType=Rel	35	mark	_	_
31	non	non	PART	r	Polarity=Neg	35	advmod:neg	_	_
32	sine	sine	ADP	e	_	34	case	_	_
33	quodam	quidam	DET	dinsnb	Case=Abl|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Ind	34	det	_	_
34	tempore	tempus	NOUN	sns3b	Case=Abl|Gender=Neut|InflClass=IndEurX|Number=Sing	35	obl	_	_
35	profertur	profero	VERB	vp5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	27	advcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
36	;	;	PUNCT	Pu	_	39	punct	_	_
37	ut	ut	SCONJ	r	PronType=Rel	39	mark	_	_
38	puta	puto	VERB	va1mps2	Aspect=Imp|InflClass=LatA|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	39	parataxis:reporting	_	_
39	ibi	ibi	ADV	r	AdvType=Loc	35	advcl:cmp	_	SpaceAfter=No
40	:	:	PUNCT	Pu	_	41	punct	_	_
41	Tragemi	tragemi	X	zi	Foreign=Yes	39	orphan	_	_
42	d'	d	X	zi	Foreign=Yes	41	flat:foreign	_	SpaceAfter=No
43	este	este	X	zi	Foreign=Yes	41	flat:foreign	_	_
44	focora	focora	X	zi	Foreign=Yes	41	flat:foreign	_	_
45	se	se	X	zi	Foreign=Yes	41	flat:foreign	_	_
46	t'	t	X	zi	Foreign=Yes	41	flat:foreign	_	SpaceAfter=No
47	este	este	X	zi	Foreign=Yes	41	flat:foreign	_	_
48	a	a	X	zi	Foreign=Yes	41	flat:foreign	_	_
49	bolontate	bolontate	X	zi	Foreign=Yes	41	flat:foreign	_	_
50	Si	si	SCONJ	cs	_	54	mark	_	_
51	autem	autem	PART	co	_	54	discourse	_	_
52	ipsum	ipse	DET	ddesna	Case=Acc|Form=Emp|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	53	obj	_	_
53	accipere	accipio	VERB	va3fp	Aspect=Imp|InflClass=LatI2|VerbForm=Inf|Voice=Act	54	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
54	volumus	uolo	VERB	va5ipp1	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	71	advcl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
55	secundum	secundum	ADP	e	VerbForm=Part	56	case	_	_
56	quod	qui	PRON	presnn	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	61	obl	_	_
57	ab	ab	ADP	e	_	58	case	_	_
58	ore	os	NOUN	sns3b	Case=Abl|Gender=Neut|InflClass=IndEurX|Number=Sing	61	obl:arg	_	_
59	primorum	primus	ADJ	amp1g	Case=Gen|Gender=Masc|InflClass=IndEurO|Number=Plur|NumType=Ord	60	amod	_	_
60	Siculorum	siculus	ADJ	Smpg	Case=Gen|Gender=Masc|InflClass=IndEurO|NameType=Nat|Number=Plur	58	nmod	_	_
61	emanat	emano	VERB	va1ips3	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	54	advcl:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
62	,	,	PUNCT	Pu	_	68	punct	_	_
63	ut	ut	SCONJ	r	PronType=Rel	68	mark	_	_
64	in	in	ADP	e	_	66	case	_	_
65	preallegatis	preallego	VERB	vp1prpfb	Aspect=Perf|Case=Abl|Gender=Fem|InflClass=LatA|InflClass[nominal]=IndEurA|Number=Plur|VerbForm=Part|Voice=Pass	66	acl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
66	cantionibus	cantio	NOUN	sfp3b	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Plur	67	obl	_	_
67	perpendi	perpendo	VERB	vp3fp	Aspect=Imp|InflClass=LatA|VerbForm=Inf|Voice=Pass	68	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
68	potest	possum	VERB	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	61	advcl:cmp	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
69	,	,	PUNCT	Pu	_	54	punct	_	_
70	nichil	nihil	PRON	dinsnn	Polarity=Neg|PronType=Ind	71	obj	_	_
71	differt	differo	VERB	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
72	ab	ab	ADP	e	_	73	case	_	_
73	illo	ille	DET	ddisnb	Case=Abl|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	71	obl:arg	_	_
74	quod	qui	PRON	presnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	75	nsubj	_	_
75	laudabilissimum	laudabilis	ADJ	ans2ns	Case=Nom|Degree=Abs|Gender=Neut|InflClass=IndEurO|Number=Sing	73	acl:relcl	_	_
76	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	75	cop	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
77	,	,	PUNCT	Pu	_	80	punct	_	_
78	sicut	sicut	SCONJ	r	Compound=Yes	80	mark	_	_
79	inferius	infra	ADV	r+	Degree=Cmp	80	advmod	_	_
80	ostendemus	ostendo	VERB	va3ifp1	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	71	advcl:cmp	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Futurum
81	.	.	PUNCT	Pu	_	2	punct	_	_

~~~


