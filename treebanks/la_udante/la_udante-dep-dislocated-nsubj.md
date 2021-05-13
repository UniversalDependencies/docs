---
layout: base
title:  'Statistics of dislocated:nsubj in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `dislocated:nsubj`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `dislocated`: <tt><a href="la_udante-dep-dislocated-obj.html">dislocated:obj</a></tt>.

2 nodes (0%) are attached to their parents as `dislocated:nsubj`.

2 instances of `dislocated:nsubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 15.

The following 2 pairs of parts of speech are connected with `dislocated:nsubj`: <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (1; 50% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 17 dislocated:nsubj	color:blue
1	Tertia	tertius	ADJ	aufs1b	Case=Abl|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing|NumType=Ord	11	obl	_	_
2	quoque	quoque	ADV	r	Emphatic=Yes	11	discourse	_	SpaceAfter=No
3	,	,	PUNCT	Pu	_	2	punct	_	_
4	que	qui	PRON	presfn	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	5	nsubj	_	_
5	Latinorum	latinus	ADJ	Smp2g	Case=Gen|Gender=Masc|InflClass=IndEurO|NameType=Nat|Number=Plur	1	acl:relcl	_	_
6	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	SpaceAfter=No
7	,	,	PUNCT	Pu	_	5	punct	_	_
8	se	sui	PRON	ppp3sfb	Case=Acc|InflClass=LatAnom|Person=3|PronType=Prs|Reflex=Yes	12	nsubj	_	_
9	duobus	duo	NUM	aunpb	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Plur|NumForm=Word|NumType=Card	10	nummod	_	_
10	privilegiis	priuilegium	NOUN	snp2b	Case=Abl|Compound=Yes|Gender=Neut|InflClass=IndEurO|Number=Plur	11	obl	_	_
11	actestatur	adtestor	VERB	vd1ips3	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
12	preesse	praesum	VERB	va5fp	Aspect=Imp|InflClass=LatAnom|InflClass[noun]=Ind|Tense=Pres|VerbForm=Inf|Voice=Act	11	ccomp	_	SpaceAfter=No
13	:	:	PUNCT	Pu	_	14	punct	_	_
14	primo	primo	ADV	r	Degree=Pos|NumType=Ord	10	conj:expl	_	_
15	quidem	quidem	PART	r	_	14	discourse	_	_
16	quod	quod	SCONJ	cs	PronType=Rel	26	mark	_	_
17	qui	qui	PRON	prepmn	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Rel	26	dislocated:nsubj	_	_
18	dulcius	dulciter	ADV	r+	Degree=Cmp	21	advmod	_	_
19	subtilius	subtiliter	ADV	r+	Degree=Cmp	18	conj	_	_
20	que	que	CCONJ	co9	Clitic=Yes	19	cc	_	_
21	poetati	poetor	VERB	vd1irp3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|InflClass=LatA|InflClass[noun]=IndEurO|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	17	acl:relcl	_	_
22	vulgariter	uulgariter	ADV	r	Degree=Pos	21	advmod	_	_
23	sunt	sum	AUX	va5ipp3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	21	aux:pass	_	SpaceAfter=No
24	,	,	PUNCT	Pu	_	17	punct	_	_
25	hii	hic	DET	ddipmn	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Dem	26	nsubj	_	_
26	familiares	familiaris	NOUN	smp3n	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Plur	14	orphan	_	_
27	et	et	CCONJ	co	_	28	cc	_	_
28	domestici	domesticus	ADJ	smp2n	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Plur	26	conj	_	_
29	sui	suus	DET	dsmpn	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Plur|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	26	det	_	_
30	sunt	sum	AUX	va5ipp3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	26	cop	_	SpaceAfter=No
31	,	,	PUNCT	Pu	_	33	punct	_	_
32	puta	puta	CCONJ	va1mps2	ConjType=Expl|VerbForm=Fin	33	cc	_	_
33	Cynus	cynus	PROPN	Sms2n	Case=Nom|Gender=Masc|InflClass=IndEurO|NameType=Giv|Number=Sing	25	conj:expl	_	_
34	Pistoriensis	pistoriensis	ADJ	ams2n	Case=Nom|Degree=Pos|Gender=Masc|InflClass=IndEurI|NameType=Nat|Number=Sing	33	amod	_	_
35	et	et	CCONJ	co	_	36	cc	_	_
36	amicus	amicus	NOUN	sms2n	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	33	conj	_	_
37	eius	is	PRON	ddesmg	Case=Gen|Gender=Masc|InflClass=LatPron|Number=Sing|Person=3|PronType=Prs	36	nmod	_	SpaceAfter=No
38	;	;	PUNCT	Pu	_	39	punct	_	_
39	secundo	secundo	ADV	r	Degree=Pos|NumType=Ord|VerbForm=Gdv	14	conj	_	_
40	quia	quia	SCONJ	cs	PronType=Rel	42	mark	_	_
41	magis	magis	ADV	rc	Degree=Cmp	43	advmod	_	_
42	videtur	uideo	VERB	vp2ips3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	39	orphan	_	_
43	initi	innitor	VERB	vd3fp	Aspect=Imp|InflClass=LatX|InflClass[noun]=Ind|Tense=Pres|VerbForm=Inf|Voice=Pass	42	csubj:pass	_	_
44	gramatice	gramatica	NOUN	sfs1d	Case=Dat|Gender=Fem|InflClass=IndEurA|Number=Sing	43	obl:arg	_	_
45	que	qui	PRON	presfn	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	46	nsubj	_	_
46	comunis	communis	ADJ	afs2n	Case=Nom|Degree=Pos|Gender=Fem|InflClass=IndEurI|Number=Sing	44	acl:relcl	_	_
47	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	46	cop	_	SpaceAfter=No
48	,	,	PUNCT	Pu	_	52	punct	_	_
49	quod	qui	PRON	presnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	52	nsubj:pass	_	_
50	rationabiliter	rationabiliter	ADV	r	Degree=Pos	51	advmod	_	_
51	inspicientibus	inspicio	VERB	va3pppmd	Aspect=Imp|Case=Dat|Degree=Pos|Gender=Masc|InflClass=LatI2|InflClass[noun]=IndEurI|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	52	obl:arg	_	_
52	videtur	uideo	VERB	vp2ips3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	42	conj	_	_
53	gravissimum	grauis	ADJ	ans2ns	Case=Nom|Degree=Abs|Gender=Neut|InflClass=IndEurO|Number=Sing	54	amod	_	_
54	argumentum	argumentum	NOUN	sns2n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	52	xcomp:pred	_	SpaceAfter=No
55	.	.	PUNCT	Pu	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 2 dislocated:nsubj	color:blue
1	Nam	nam	PART	co	_	23	discourse	_	_
2	quicunque	quicumque	DET	prismn	Case=Nom|Compound=Yes|Emphatic=Yes|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	23	dislocated:nsubj	_	_
3	tam	tam	ADV	r	PronType=Dem	4	advmod:emph	_	_
4	obscene	obscenus	ADJ	afs1g	Case=Gen|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing	5	amod	_	_
5	rationis	ratio	NOUN	sfs3g	Case=Gen|Gender=Fem|InflClass=IndEurX|Number=Sing	2	acl:relcl	_	_
6	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
7	ut	ut	SCONJ	cs	ConjType=Cmpr	12	mark	_	_
8	locum	locus	NOUN	sms2a	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing	11	nsubj	_	_
9	sue	suus	DET	dsfsg	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Sing|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	10	det	_	_
10	nationis	natio	NOUN	sfs3g	Case=Gen|Gender=Fem|InflClass=IndEurX|Number=Sing	8	nmod	_	_
11	delitiosissimum	deliciosus	ADJ	ams1as	Case=Acc|Degree=Abs|Gender=Masc|InflClass=IndEurO|Number=Sing	12	ccomp	_	_
12	credat	credo	VERB	va3cps3	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	advcl:cmpr	_	_
13	esse	sum	AUX	va5fp	Aspect=Imp|InflClass=LatAnom|InflClass[noun]=Ind|Tense=Pres|VerbForm=Inf	11	cop	_	_
14	sub	sub	ADP	e	AdpType=Prep	15	case	_	_
15	sole	sol	NOUN	sms3b	Case=Abl|Gender=Masc|InflClass=IndEurX|Number=Sing	11	obl	_	SpaceAfter=No
16	,	,	PUNCT	Pu	_	2	punct	_	_
17	hic	hic	DET	ddismn	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	23	nsubj	_	_
18	etiam	etiam	ADV	co	Compound=Yes	23	discourse	_	_
19	pre	prae	ADP	e	AdpType=Prep	20	case	_	_
20	cunctis	cunctus	DET	anp1b	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Plur|PronType=Tot	23	obl	_	_
21	proprium	proprius	ADJ	ans1a	Case=Acc|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing	22	amod	_	_
22	vulgare	uulgare	NOUN	sns3a	Case=Acc|Gender=Neut|InflClass=IndEurI|Number=Sing	23	obj	_	_
23	licetur	liceor	VERB	vd2ips3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
24	,	,	PUNCT	Pu	_	27	punct	_	_
25	idest	idest	CCONJ	r	Compound=Yes|ConjType=Expl	27	cc	_	_
26	maternam	maternus	ADJ	afs1a	Case=Acc|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing	27	amod	_	_
27	locutionem	locutio	NOUN	sfs3a	Case=Acc|Gender=Fem|InflClass=IndEurX|Number=Sing	22	conj:expl	_	SpaceAfter=No
28	,	,	PUNCT	Pu	_	32	punct	_	_
29	et	et	CCONJ	co	_	32	cc	_	_
30	per	per	ADP	e	AdpType=Prep	31	case	_	_
31	consequens	consequens	ADJ	ans2a	Case=Acc|Degree=Pos|Gender=Neut|InflClass=IndEurI|Number=Sing	32	obl	_	_
32	credit	credo	VERB	va3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	23	conj	_	_
33	ipsum	ipse	DET	ddesna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Emp	32	ccomp	_	_
34	fuisse	sum	AUX	va5fr	Aspect=Perf|InflClass=LatAnom|InflClass[noun]=Ind|Tense=Past|VerbForm=Inf	33	cop	_	_
35	illud	ille	DET	ddisna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	33	nsubj	_	_
36	quod	qui	PRON	presnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	38	nsubj	_	_
37	fuit	sum	AUX	va5irs3	Aspect=Perf|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	38	cop	_	_
38	Ade	adam	PROPN	Sms1g	Case=Gen|Gender=Masc|InflClass=IndEurA|NameType=Giv|Number=Sing	35	acl:relcl	_	SpaceAfter=No
39	.	.	PUNCT	Pu	_	23	punct	_	_

~~~


