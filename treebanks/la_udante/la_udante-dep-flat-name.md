---
layout: base
title:  'Statistics of flat:name in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-flat.html">flat</a></tt>.
There are also 2 other language-specific subtypes of `flat`: <tt><a href="la_udante-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="la_udante-dep-flat-gov.html">flat:gov</a></tt>.

28 nodes (0%) are attached to their parents as `flat:name`.

28 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.03571428571429.

The following 3 pairs of parts of speech are connected with `flat:name`: <tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt> (25; 89% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt> (2; 7% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 flat:name	color:blue
1	Horum	hic	DET	ddipmg	Case=Gen|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Dem	2	nmod	_	_
2	aliquos	aliquis	PRON	dinpma	Case=Acc|Compound=Yes|Gender=Masc|Number=Plur|PronType=Ind	6	nsubj	_	_
3	a	a	ADP	e	AdpType=Prep	5	case	_	_
4	proprio	proprius	ADJ	ans1b	Case=Abl|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing	5	amod	_	_
5	poetando	poetor	VERB	va1fgb	Aspect=Imp|Case=Abl|Gender=Neut|InflClass=LatA|InflClass[nominal]=IndEurO|Number=Sing|Tense=Fut|VerbForm=Ger|Voice=Pass	6	obl:arg	_	_
6	divertisse	diuerto	VERB	va3fr	Aspect=Perf|InflClass=LatX|InflClass[nominal]=Ind|Tense=Past|VerbForm=Inf|Voice=Act	7	ccomp	_	_
7	audivimus	audio	VERB	va4irp1	Aspect=Perf|InflClass=LatI|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
8	,	,	PUNCT	Pu	_	9	punct	_	_
9	Thomam	thomas	PROPN	Sms1a	Case=Acc|Gender=Masc|InflClass=IndEurA|NameType=Giv|Number=Sing	7	conj:expl	_	_
10	videlicet	uidelicet	CCONJ	r	Compound=Yes|ConjType=Expl	9	cc	_	_
11	et	et	CCONJ	co	_	12	cc	_	_
12	Ugolinum	ugolinus	PROPN	Sms2a	Case=Acc|Gender=Masc|InflClass=IndEurO|NameType=Giv|Number=Sing	9	conj	_	_
13	Bucciolam	bucciola	PROPN	Sms1a	Case=Acc|Gender=Masc|InflClass=IndEurA|NameType=Sur|Number=Sing	12	flat:name	_	SpaceAfter=No
14	,	,	PUNCT	Pu	_	15	punct	_	_
15	Faventinos	fauentinus	ADJ	Smp2a	Case=Acc|Gender=Masc|InflClass=IndEurO|NameType=Nat|Number=Plur	9	amod	_	SpaceAfter=No
16	.	.	PUNCT	Pu	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 flat:name	color:blue
1	Desinant	desino	VERB	va3cpp3	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	igitur	igitur	PART	r	_	1	discourse	_	_
3	Imperium	imperium	NOUN	sns2a	Case=Acc|Gender=Neut|InflClass=IndEurO|NameType=Com|Number=Sing|Proper=Yes	4	obj	_	_
4	exprobrare	exprobro	VERB	va1fp	Aspect=Imp|InflClass=LatA|InflClass[nominal]=Ind|Tense=Pres|VerbForm=Inf|Voice=Act	1	xcomp	_	_
5	romanum	romanus	ADJ	ans1a	Case=Acc|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing	3	amod	_	_
6	qui	qui	PRON	prepmn	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Rel	10	nsubj	_	_
7	se	sui	PRON	ppp3pma	Case=Acc|InflClass=LatAnom|Person=3|PronType=Prs|Reflex=Yes	10	obj	_	_
8	filios	filius	NOUN	smp2a	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Plur	10	xcomp	_	_
9	Ecclesie	ecclesia	NOUN	sfs1g	Case=Gen|Gender=Fem|InflClass=IndEurA|NameType=Com|Number=Sing|Proper=Yes	8	nmod	_	_
10	fingunt	fingo	VERB	va3ipp3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	csubj	_	SpaceAfter=No
11	,	,	PUNCT	Pu	_	13	punct	_	_
12	cum	cum	SCONJ	cs	PronType=Rel	13	mark	_	_
13	videant	uideo	VERB	va2cpp3	Aspect=Imp|InflClass=LatE|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	advcl	_	_
14	sponsum	sponsus	NOUN	sms2a	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing|VerbForm=Part	23	nsubj	_	_
15	Cristum	christus	PROPN	Sms2a	Case=Acc|Gender=Masc|InflClass=IndEurO|NameType=Sur|Number=Sing	14	flat:name	_	_
16	illud	ille	DET	ddisna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	23	det	_	_
17	sic	sic	ADV	r	PronType=Dem	23	advmod	_	_
18	in	in	ADP	e	AdpType=Prep	20	case	_	_
19	utroque	uterque	DET	dpmsb	Case=Abl|Form=Emp|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Ind	20	det	_	_
20	termino	terminus	NOUN	sms2b	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	23	obl	_	_
21	sue	suus	DET	dsfsg	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Sing|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	22	det	_	_
22	militie	militia	NOUN	sfs1g	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Sing	20	nmod	_	_
23	comprobasse	comprobo	VERB	va1xfr	Aspect=Perf|InflClass=LatA|InflClass[nominal]=Ind|Tense=Past|VerbForm=Inf|Voice=Act	13	ccomp	_	SpaceAfter=No
24	.	.	PUNCT	Pu	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 flat:name	color:blue
1	Et	et	CCONJ	co	_	21	cc	_	_
2	cum	cum	SCONJ	cs	PronType=Rel	21	mark	_	_
3	celum	caelum	NOUN	sns2n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	21	nsubj:pass	_	_
4	totum	totus	DET	dpmsn	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Tot	3	det	_	_
5	unico	unicus	ADJ	ams1b	Case=Abl|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	6	amod	_	_
6	motu	motus	NOUN	sms4b	Case=Abl|Gender=Masc|InflClass=IndEurU|Number=Sing|VerbForm=Sup	21	obl	_	SpaceAfter=No
7	,	,	PUNCT	Pu	_	9	punct	_	_
8	scilicet	scilicet	CCONJ	r	Compound=Yes|ConjType=Expl|VerbForm=Fin	9	cc	_	_
9	Primi	primus	ADJ	ans1g	Case=Gen|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing|NumType=Ord|Proper=Yes	6	conj:expl	_	_
10	Mobilis	mobilis	ADJ	ams2g	Case=Gen|Degree=Pos|Gender=Masc|InflClass=IndEurI|Number=Sing|Proper=Yes	9	flat:name	_	SpaceAfter=No
11	,	,	PUNCT	Pu	_	15	punct	_	_
12	et	et	CCONJ	co	_	15	cc	_	_
13	ab	ab	ADP	e	AdpType=Prep	15	case	_	_
14	unico	unicus	ADJ	ams1b	Case=Abl|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	15	amod	_	_
15	motore	motor	NOUN	sms3b	Case=Abl|Gender=Masc|InflClass=IndEurX|Number=Sing	6	conj	_	SpaceAfter=No
16	,	,	PUNCT	Pu	_	18	punct	_	_
17	qui	qui	PRON	presmn	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	18	nsubj	_	_
18	Deus	deus	NOUN	Sms2	Gender=Masc|InflClass=IndEurO|NameType=Rel|Number=Sing|Proper=Yes	15	acl:relcl	_	_
19	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	cop	_	SpaceAfter=No
20	,	,	PUNCT	Pu	_	6	punct	_	_
21	reguletur	regulo	VERB	vp1cps3	Aspect=Imp|InflClass=LatA|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	48	advcl	_	_
22	in	in	ADP	e	AdpType=Prep	25	case	_	_
23	omnibus	omnis	DET	afp2b	Case=Abl|Gender=Fem|InflClass=IndEurI|Number=Plur|PronType=Tot	25	det	_	_
24	suis	suus	DET	dsfpb	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Plur|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	25	det	_	_
25	partibus	pars	NOUN	sfp3b	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Plur	21	obl	_	SpaceAfter=No
26	,	,	PUNCT	Pu	_	27	punct	_	_
27	motibus	motus	NOUN	smp4b	Case=Abl|Gender=Masc|InflClass=IndEurU|Number=Plur|VerbForm=Sup	25	conj	_	_
28	et	et	CCONJ	co	_	29	cc	_	_
29	motoribus	motor	NOUN	smp3b	Case=Abl|Gender=Masc|InflClass=IndEurX|Number=Plur	25	conj	_	SpaceAfter=No
30	,	,	PUNCT	Pu	_	36	punct	_	_
31	ut	ut	SCONJ	r	ConjType=Cmpr	36	mark	_	_
32	phylosophando	philosophor	VERB	vd1fgb	Aspect=Imp|Case=Abl|Gender=Neut|InflClass=LatA|InflClass[nominal]=IndEurO|Number=Sing|Tense=Fut|VerbForm=Ger|Voice=Pass	36	advcl	_	_
33	evidentissime	euidenter	ADV	rs	Degree=Abs	36	advmod	_	_
34	humana	humanus	ADJ	afs1n	Case=Nom|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing	35	amod	_	_
35	ratio	ratio	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	36	nsubj	_	_
36	deprehendit	deprehendo	VERB	va3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	25	advcl:cmpr	_	SpaceAfter=No
37	,	,	PUNCT	Pu	_	40	punct	_	_
38	si	si	SCONJ	cs	_	40	mark	_	_
39	vere	uere	ADV	r	Degree=Pos	40	advmod	_	_
40	sillogizatum	syllogizo	VERB	vp1*irs3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|InflClass=LatA|InflClass[nominal]=IndEurO|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	36	advcl	_	_
41	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	40	aux:pass	_	SpaceAfter=No
42	,	,	PUNCT	Pu	_	21	punct	_	_
43	humanum	humanus	ADJ	ans1n	Case=Nom|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing	44	amod	_	_
44	genus	genus	NOUN	sns3n	Case=Nom|Gender=Neut|InflClass=IndEurX|Number=Sing	48	nsubj	_	_
45	tunc	tunc	ADV	r	PronType=Dem	48	advmod	_	_
46	optime	bene	ADV	rs	Degree=Abs	48	advmod	_	_
47	se	sui	PRON	ppp3sna	Case=Acc|InflClass=LatAnom|Person=3|PronType=Prs|Reflex=Yes	48	obj	_	_
48	habet	habeo	VERB	va2ips3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
49	,	,	PUNCT	Pu	_	50	punct	_	_
50	quando	quando	ADV	r	PronType=Rel	71	advmod	_	_
51	ab	ab	ADP	e	AdpType=Prep	53	case	_	_
52	unico	unicus	ADJ	ams1b	Case=Abl|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	53	amod	_	_
53	principe	princeps	NOUN	sms3b	Case=Abl|Compound=Yes|Gender=Masc|InflClass=IndEurX|Number=Sing	71	obl:arg	_	_
54	tanquam	tamquam	SCONJ	r	Compound=Yes|ConjType=Cmpr|PronType=Rel	57	mark	_	_
55	ab	ab	ADP	e	AdpType=Prep	57	case	_	_
56	unico	unicus	ADJ	ams1b	Case=Abl|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	57	amod	_	_
57	motore	motor	NOUN	sms3b	Case=Abl|Gender=Masc|InflClass=IndEurX|Number=Sing	53	advcl:cmpr	_	SpaceAfter=No
58	,	,	PUNCT	Pu	_	61	punct	_	_
59	et	et	CCONJ	co	_	61	cc	_	_
60	unica	unicus	ADJ	afs1b	Case=Abl|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing	61	amod	_	_
61	lege	lex	NOUN	sfs3b	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	53	conj	_	_
62	tanquam	tamquam	SCONJ	r	Compound=Yes|ConjType=Cmpr|PronType=Rel	64	mark	_	_
63	unico	unicus	ADJ	ams1b	Case=Abl|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	64	amod	_	_
64	motu	motus	NOUN	sms4b	Case=Abl|Gender=Masc|InflClass=IndEurU|Number=Sing|VerbForm=Sup	61	conj	_	SpaceAfter=No
65	,	,	PUNCT	Pu	_	53	punct	_	_
66	in	in	ADP	e	AdpType=Prep	68	case	_	_
67	suis	suus	DET	dsmpb	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Plur|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	68	det	_	_
68	motoribus	motor	NOUN	smp3b	Case=Abl|Gender=Masc|InflClass=IndEurX|Number=Plur	71	obl:arg	_	_
69	et	et	CCONJ	co	_	70	cc	_	_
70	motibus	motus	NOUN	smp4b	Case=Abl|Gender=Masc|InflClass=IndEurU|Number=Plur|VerbForm=Sup	68	conj	_	_
71	reguletur	regulo	VERB	vp1cps3	Aspect=Imp|InflClass=LatA|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	48	advcl	_	SpaceAfter=No
72	.	.	PUNCT	Pu	_	48	punct	_	_

~~~


