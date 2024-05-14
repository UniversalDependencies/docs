---
layout: base
title:  'Statistics of flat:redup in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `flat:redup`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-flat.html">flat</a></tt>.
There are also 3 other language-specific subtypes of `flat`: <tt><a href="la_udante-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="la_udante-dep-flat-gov.html">flat:gov</a></tt>, <tt><a href="la_udante-dep-flat-name.html">flat:name</a></tt>.

3 nodes (0%) are attached to their parents as `flat:redup`.

3 instances of `flat:redup` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `flat:redup`: <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (2; 67% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 flat:redup	color:blue
1	Quot	quot	DET	ai	NumType=Card|PronType=Rel	5	det	_	_
2	quot	quot	DET	ai	NumType=Card|PronType=Rel	1	flat:redup	_	Reduplication=NumType:Dist
3	autem	autem	PART	co	_	6	discourse	_	_
4	exercitii	exercitium	NOUN	sns2g	Case=Gen|Gender=Neut|InflClass=IndEurO|Number=Sing	5	nmod	_	_
5	varietates	uarietas	NOUN	sfp3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Plur	6	nsubj	_	_
6	tendebant	tendo	VERB	va3iip3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	12	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Imperfectum
7	ad	ad	ADP	e	_	8	case	_	_
8	opus	opus	NOUN	sns3a	Case=Acc|Gender=Neut|InflClass=IndEurX|Number=Sing	6	obl:arg	_	SpaceAfter=No
9	,	,	PUNCT	Pu	_	6	punct	_	_
10	tot	tot	DET	yuip	NumType=Card|PronType=Dem	12	det	_	_
11	tot	tot	DET	yuip	NumType=Card|PronType=Dem	10	flat:redup	_	Reduplication=NumType:Dist
12	ydiomatibus	idioma	NOUN	snp3b	Case=Abl|Gender=Neut|InflClass=IndEurX|Number=Plur	16	obl	_	_
13	tunc	tunc	ADV	r	AdvType=Tim|PronType=Dem	16	advmod:tmod	_	_
14	genus	genus	NOUN	sns3n	Case=Nom|Gender=Neut|InflClass=IndEurX|Number=Sing	16	nsubj:pass	_	_
15	humanum	humanus	ADJ	ans1n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	14	amod	_	_
16	disiungitur	disiungo	VERB	vp3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
17	;	;	PUNCT	Pu	_	18	punct	_	_
18	et	et	CCONJ	co	_	28	cc	_	_
19	quanto	quanto	SCONJ	r	PronType=Rel	21	mark	_	_
20	excellentius	excellenter	ADV	r+	Degree=Cmp|VerbForm=Part	21	advmod	_	_
21	exercebant	exerceo	VERB	va2iip3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	28	advcl:cmp	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Imperfectum
22	,	,	PUNCT	Pu	_	21	punct	_	_
23	tanto	tanto	ADV	r	PronType=Dem	24	advmod	_	_
24	rudius	rude	ADV	r+	Degree=Cmp	28	advmod	_	_
25	nunc	nunc	ADV	r	AdvType=Tim	28	advmod:tmod	_	_
26	barbarius	barbare	ADV	r+	Degree=Cmp	24	conj	_	_
27	que	que	CCONJ	co9	_	26	cc	_	_
28	locuntur	loquor	VERB	vd3ipp3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	16	conj	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
29	.	.	PUNCT	Pu	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 54	bgColor:blue
# visual-style 54	fgColor:white
# visual-style 53	bgColor:blue
# visual-style 53	fgColor:white
# visual-style 53 54 flat:redup	color:blue
1	Verum	uerum	CCONJ	r	_	56	cc	_	_
2	quia	quia	SCONJ	cs	PronType=Rel	9	mark	_	_
3	naturalis	naturalis	ADJ	ams2n	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Sing	4	amod	_	_
4	amor	amor	NOUN	sms3n	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	9	nsubj	_	_
5	diuturnam	diuturnus	ADJ	afs1a	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	9	ccomp	_	_
6	esse	sum	AUX	va5fp	Aspect=Imp|InflClass=LatAnom|VerbForm=Inf	5	cop	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
7	derisionem	derisio	NOUN	sfs3a	Case=Acc|Gender=Fem|InflClass=IndEurX|Number=Sing	5	nsubj	_	_
8	non	non	PART	r	Polarity=Neg	9	advmod:neg	_	_
9	patitur	patior	VERB	vd3ips3	Aspect=Imp|InflClass=LatI2|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	56	advcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
10	,	,	PUNCT	Pu	_	11	punct	_	_
11	sed	sed	CCONJ	co	_	30	cc	_	SpaceAfter=No
12	,	,	PUNCT	Pu	_	11	punct	_	_
13	ut	ut	SCONJ	r	PronType=Rel	14	mark	_	_
14	sol	sol	NOUN	sms3n	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	30	advcl:cmp	_	_
15	estivus	aestiuus	ADJ	ams1n	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	14	amod	_	_
16	qui	qui	PRON	presmn	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	22	nsubj	_	_
17	disiectis	disicio	VERB	v3prpfb	Aspect=Perf|Case=Abl|Gender=Fem|InflClass=LatI2|InflClass[nominal]=IndEurA|Number=Plur|VerbForm=Part|Voice=Pass	22	advcl:abs	_	TraditionalMood=Participium|TraditionalTense=Perfectum
18	nebulis	nebula	NOUN	sfp1b	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Plur	17	nsubj:pass	_	_
19	matutinis	matutinus	ADJ	afp1b	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Plur	18	amod	_	_
20	oriens	orior	VERB	vd4ppsmn	Aspect=Imp|Case=Nom|Gender=Masc|InflClass=LatI|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	22	advcl:pred	_	TraditionalMood=Participium|TraditionalTense=Praesens
21	luculenter	luculenter	ADV	r	VerbForm=Part	22	advmod	_	_
22	irradiat	irradio	VERB	va1ips3	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	14	acl:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
23	,	,	PUNCT	Pu	_	14	punct	_	_
24	derisione	derisio	NOUN	sfs3b	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	25	nsubj:pass	_	_
25	omissa	omitto	VERB	vp3prsfb	Aspect=Perf|Case=Abl|Gender=Fem|InflClass=LatX|InflClass[nominal]=IndEurA|Number=Sing|VerbForm=Part|Voice=Pass	30	advcl:abs	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Perfectum
26	,	,	PUNCT	Pu	_	25	punct	_	_
27	lucem	lux	NOUN	sfs3a	Case=Acc|Gender=Fem|InflClass=IndEurX|Number=Sing	29	obj	_	_
28	correctionis	correctio	NOUN	sfs3g	Case=Gen|Gender=Fem|InflClass=IndEurX|Number=Sing	27	nmod	_	_
29	effundere	effundo	VERB	va3fp	Aspect=Imp|InflClass=LatX|VerbForm=Inf|Voice=Act	30	ccomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
30	mavult	malo	VERB	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	conj	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
31	,	,	PUNCT	Pu	_	9	punct	_	_
32	ad	ad	ADP	e	_	33	mark	_	_
33	dirumpendum	dirumpo	VERB	va3fga	Aspect=Prosp|Case=Acc|Gender=Neut|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	56	advcl	_	TraditionalMood=Gerundium
34	vincula	uinculum	NOUN	snp2a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur	33	obj	_	_
35	ignorantie	ignorantia	NOUN	sfs1g	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Sing	34	nmod	_	_
36	regum	rex	NOUN	smp3g	Case=Gen|Gender=Masc|InflClass=IndEurX|Number=Plur	34	nmod	_	_
37	atque	atque	CCONJ	co	Form=Emp	38	cc	_	_
38	principum	princeps	NOUN	smp3g	Case=Gen|Compound=Yes|Gender=Masc|InflClass=IndEurX|Number=Plur	36	conj	_	_
39	talium	talis	DET	amp2g	Case=Gen|Gender=Masc|InflClass=IndEurI|Number=Plur|PronType=Dem	38	det	_	SpaceAfter=No
40	,	,	PUNCT	Pu	_	42	punct	_	_
41	ad	ad	ADP	e	_	42	mark	_	_
42	ostendendum	ostendo	VERB	va3fga	Aspect=Prosp|Case=Acc|Gender=Neut|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	33	conj	_	TraditionalMood=Gerundivum
43	genus	genus	NOUN	sns3a	Case=Nom|Gender=Neut|InflClass=IndEurX|Number=Sing	42	nsubj:pass	_	_
44	humanum	humanus	ADJ	ans1a	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	43	amod	_	_
45	liberum	liber	ADJ	ans1a	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	42	xcomp	_	_
46	a	a	ADP	e	_	47	case	_	_
47	iugo	iugum	NOUN	sns2b	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	45	obl	_	_
48	ipsorum	ipse	DET	ddepmg	Case=Gen|Form=Emp|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Dem	47	nmod	_	SpaceAfter=No
49	,	,	PUNCT	Pu	_	33	punct	_	_
50	cum	cum	ADP	e	_	51	case	_	_
51	Propheta	propheta	NOUN	sms1b	Case=Abl|Gender=Masc|InflClass=IndEurA|Number=Sing|Proper=Yes	56	obl	_	_
52	sanctissimo	sancio	VERB	ams1bs	Aspect=Perf|Case=Abl|Degree=Abs|Gender=Masc|InflClass=LatI|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	51	acl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
53	me	ego	PRON	ppp1sma	Case=Acc|InflClass=LatAnom|Number=Sing|Person=1|PronType=Prs	56	obj	_	_
54	me	ego	PRON	ppp1sma	Case=Acc|InflClass=LatAnom|Number=Sing|Person=1|PronType=Prs	53	flat:redup	_	Reduplication=Form:Emp
55	subsequenter	subsequenter	ADV	r	VerbForm=Part	56	advmod	_	_
56	hortabor	hortor	VERB	vd1ifs1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Pass	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Futurum
57	subsequentia	subsequor	VERB	vd3pppna	Aspect=Imp|Case=Acc|Gender=Neut|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Plur|VerbForm=Part|Voice=Act	58	obj	_	TraditionalMood=Participium|TraditionalTense=Praesens
58	subassummens	subassummo	VERB	va3ppsmn	Aspect=Imp|Case=Nom|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	56	advcl:pred	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Praesens
59	:	:	PUNCT	Pu	_	61	punct	_	_
60	«	«	PUNCT	Pu	_	61	punct	_	SpaceAfter=No
61	Dirumpamus	dirumpo	VERB	va3cpp1	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	57	conj:expl	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
62	»	»	PUNCT	Pu	_	61	punct	_	_
63	videlicet	uidelicet	CCONJ	r	Compound=Yes|VerbForm=Fin	61	cc	_	_
64	«	«	PUNCT	Pu	_	65	punct	_	SpaceAfter=No
65	vincula	uinculum	NOUN	snp2a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur	61	obj	_	_
66	eorum	is	PRON	ddepmg	Case=Gen|Gender=Masc|InflClass=LatPron|Number=Plur|Person=3|PronType=Prs	65	nmod	_	SpaceAfter=No
67	,	,	PUNCT	Pu	_	69	punct	_	_
68	et	et	CCONJ	co	_	69	cc	_	_
69	proiciamus	proicio	VERB	va3cpp1	Aspect=Imp|InflClass=LatI2|Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	61	conj	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
70	a	a	ADP	e	_	71	case	_	_
71	nobis	ego	PRON	ppp1pmb	Case=Abl|InflClass=LatAnom|Number=Plur|Person=1|PronType=Prs	69	obl	_	_
72	iugum	iugum	NOUN	sns2a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	69	obj	_	_
73	ipsorum	ipse	DET	ddepmg	Case=Gen|Form=Emp|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Dem	72	nmod	_	SpaceAfter=No
74	»	»	PUNCT	Pu	_	69	punct	_	SpaceAfter=No
75	.	.	PUNCT	Pu	_	56	punct	_	_

~~~


