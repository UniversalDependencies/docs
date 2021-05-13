---
layout: base
title:  'Statistics of csubj:cleft in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `csubj:cleft`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="la_udante-dep-csubj-pass.html">csubj:pass</a></tt>.

4 nodes (0%) are attached to their parents as `csubj:cleft`.

4 instances of `csubj:cleft` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 13.

The following 2 pairs of parts of speech are connected with `csubj:cleft`: <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (3; 75% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 csubj:cleft	color:blue
1	Hunc	hic	DET	dpmsa	Case=Acc|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	2	det	_	_
2	gradum	gradus	NOUN	sms4a	Case=Acc|Gender=Masc|InflClass=IndEurU|Number=Sing	5	obj	_	_
3	constructionis	constructio	NOUN	sfs3g	Case=Gen|Gender=Fem|InflClass=IndEurX|Number=Sing	2	nmod	_	_
4	excellentissimum	excellens	ADJ	ams2as	Case=Acc|Degree=Abs|Gender=Masc|InflClass=IndEurO|Number=Sing	5	xcomp:pred	_	_
5	nominamus	nomino	VERB	va1ipp1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
6	,	,	PUNCT	Pu	_	8	punct	_	_
7	et	et	CCONJ	co	_	8	cc	_	_
8	hic	hic	DET	ddismn	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	5	conj	_	_
9	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
10	quem	qui	PRON	presma	Case=Acc|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	11	obj	_	_
11	querimus	quaero	VERB	va3ipp1	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	8	csubj:cleft	_	_
12	cum	cum	SCONJ	cs	PronType=Rel	14	mark	_	_
13	suprema	superior	ADJ	anp2as	Case=Acc|Degree=Abs|Gender=Neut|InflClass=IndEurO|Number=Plur	14	obj	_	_
14	venemur	uenor	VERB	vd1cpp1	Aspect=Imp|InflClass=LatA|Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	8	advcl	_	SpaceAfter=No
15	,	,	PUNCT	Pu	_	17	punct	_	_
16	ut	ut	SCONJ	r	ConjType=Cmpr	17	mark	_	_
17	dictum	dico	VERB	vp3irs3	Aspect=Perf|Case=Nom|Gender=Neut|InflClass=LatX|InflClass[noun]=IndEurO|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	5	advcl:cmpr	_	_
18	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	aux:pass	_	SpaceAfter=No
19	.	.	PUNCT	Pu	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 25 csubj:cleft	color:blue
1	Hoc	hic	DET	ddisnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	4	nsubj:pass	_	_
2	etiam	etiam	ADV	co	Compound=Yes	1	advmod:emph	_	_
3	precipue	praecipue	ADV	r	Degree=Pos	4	advmod	_	_
4	actendendum	attendo	VERB	v3gvsnn	Aspect=Imp|Case=Nom|Degree=Pos|Gender=Neut|InflClass=LatX|InflClass[noun]=IndEurO|Number=Sing|Tense=Fut|VerbForm=Gdv|Voice=Pass	0	root	_	_
5	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
6	circa	circa	ADP	e	AdpType=Prep	8	case	_	_
7	carminum	carmen	NOUN	snp3g	Case=Gen|Gender=Neut|InflClass=IndEurX|Number=Plur	8	nmod	_	_
8	habitudinem	habitudo	NOUN	sfs3a	Case=Acc|Gender=Fem|InflClass=IndEurX|Number=Sing	4	obl	_	SpaceAfter=No
9	,	,	PUNCT	Pu	_	10	punct	_	_
10	quod	quod	SCONJ	cs	PronType=Rel	25	mark	_	SpaceAfter=No
11	,	,	PUNCT	Pu	_	10	punct	_	_
12	si	si	SCONJ	cs	_	14	mark	_	_
13	eptasillabum	eptasillabum	NOUN	sns2n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	14	nsubj:pass	_	_
14	interseratur	intersero	VERB	vp3cps3	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	25	advcl	_	_
15	in	in	ADP	e	AdpType=Prep	17	case	_	_
16	primo	primus	ADJ	ams1b	Case=Abl|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing|NumType=Ord	17	amod	_	_
17	pede	pes	NOUN	sms3b	Case=Abl|Gender=Masc|InflClass=IndEurX|Number=Sing	14	obl	_	SpaceAfter=No
18	,	,	PUNCT	Pu	_	14	punct	_	_
19	quem	qui	PRON	presma	Case=Acc|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	21	obj	_	_
20	situm	situs	NOUN	sms4a	Case=Acc|Gender=Masc|InflClass=IndEurU|Number=Sing|VerbForm=Part	25	obj	_	_
21	accipit	accipio	VERB	va3ips3	Aspect=Imp|InflClass=LatI2|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	20	acl:relcl	_	_
22	ibi	ibi	PRON	r	_	21	obl	_	SpaceAfter=No
23	,	,	PUNCT	Pu	_	24	punct	_	_
24	eundem	idem	DET	ddesma	Case=Acc|Emphatic=Yes|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Emp	20	det	_	_
25	resumat	resumo	VERB	va3cps3	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	csubj:cleft	_	_
26	in	in	ADP	e	AdpType=Prep	27	case	_	_
27	altero	alter	DET	dpmsb	Case=Abl|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Ind	25	obl	_	SpaceAfter=No
28	:	:	PUNCT	Pu	_	29	punct	_	_
29	puta	puta	CCONJ	va1mps2	VerbForm=Fin	52	cc	_	SpaceAfter=No
30	,	,	PUNCT	Pu	_	29	punct	_	_
31	si	si	SCONJ	cs	_	39	orphan	_	_
32	pes	pes	NOUN	sms3n	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	39	nsubj	_	_
33	trimeter	trimeter	ADJ	ams1n	Case=Nom|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	32	amod	_	_
34	primum	primus	ADJ	ans1a	Case=Acc|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing|NumType=Ord	37	amod	_	_
35	et	et	CCONJ	co	_	36	cc	_	_
36	ultimum	ultimus	ADJ	ans1as	Case=Acc|Degree=Abs|Gender=Neut|InflClass=IndEurO|Number=Sing	34	conj	_	_
37	carmen	carmen	NOUN	sns3a	Case=Acc|Gender=Neut|InflClass=IndEurX|Number=Sing	39	obj	_	_
38	endecasillabum	endecasillabum	NOUN	sns2a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	39	xcomp:pred	_	_
39	habet	habeo	VERB	va2ips3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	52	advcl	_	_
40	et	et	CCONJ	co	_	41	cc	_	_
41	medium	medius	ADJ	ans1a	Case=Acc|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing	39	conj	_	SpaceAfter=No
42	,	,	PUNCT	Pu	_	45	punct	_	_
43	hoc	hic	DET	ddisnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	45	nsubj	_	_
44	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	43	fixed	_	_
45	secundum	secundus	ADJ	auns1n	Case=Nom|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing|NumType=Ord|VerbForm=Gdv	41	conj:expl	_	SpaceAfter=No
46	,	,	PUNCT	Pu	_	47	punct	_	_
47	eptasillabum	eptasillabum	NOUN	sns2a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	41	orphan	_	SpaceAfter=No
48	,	,	PUNCT	Pu	_	39	punct	_	_
49	et	et	ADV	co	_	50	advmod:emph	_	_
50	pes	pes	NOUN	sms3n	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	52	nsubj	_	_
51	alter	alter	DET	dpmsn	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Ind	50	det	_	_
52	habeat	habeo	VERB	va2cps3	Aspect=Imp|InflClass=LatE|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	_	_
53	secundum	secundus	ADJ	auns1a	Case=Acc|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing|NumType=Ord|VerbForm=Gdv	52	obj	_	_
54	eptasillabum	eptasillabum	NOUN	sns2a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	52	xcomp:pred	_	_
55	et	et	CCONJ	co	_	56	cc	_	_
56	extrema	extremus	ADJ	anpas	Case=Acc|Degree=Abs|Gender=Neut|InflClass=IndEurO|Number=Plur	52	conj	_	_
57	endecasillaba	endecasillabum	NOUN	snp2a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur	56	orphan	_	SpaceAfter=No
58	:	:	PUNCT	Pu	_	64	punct	_	_
59	non	non	PART	r	Polarity=Neg	64	advmod:neg	_	_
60	aliter	aliter	ADV	r	_	64	advmod	_	_
61	ingeminatio	ingeminatio	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	64	nsubj	_	_
62	cantus	cantus	NOUN	sms4g	Case=Gen|Gender=Masc|InflClass=IndEurU|Number=Sing|VerbForm=Part	61	nmod	_	_
63	fieri	fio	VERB	vs5fp	Aspect=Imp|InflClass=LatI2|InflClass[noun]=Ind|Tense=Pres|VerbForm=Inf|Voice=Pass	64	xcomp	_	_
64	posset	possum	VERB	va5cis3	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	52	conj	_	SpaceAfter=No
65	,	,	PUNCT	Pu	_	69	punct	_	_
66	ad	ad	ADP	e	AdpType=Prep	67	case	_	_
67	quam	qui	PRON	presfa	Case=Acc|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	69	obl	_	_
68	pedes	pes	NOUN	smp3n	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Plur	69	nsubj	_	_
69	fiunt	fio	VERB	vs5ipp3	Aspect=Imp|InflClass=LatI2|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	61	acl:relcl	_	SpaceAfter=No
70	,	,	PUNCT	Pu	_	72	punct	_	_
71	ut	ut	SCONJ	r	ConjType=Cmpr	72	mark	_	_
72	dictum	dico	VERB	vp3irs3	Aspect=Perf|Case=Nom|Gender=Neut|InflClass=LatX|InflClass[noun]=IndEurO|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	69	advcl:cmpr	_	_
73	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	72	aux:pass	_	SpaceAfter=No
74	,	,	PUNCT	Pu	_	81	punct	_	_
75	et	et	CCONJ	co	_	81	cc	_	_
76	per	per	ADP	e	AdpType=Prep	77	case	_	_
77	consequens	consequens	ADJ	ans2a	Case=Acc|Degree=Pos|Gender=Neut|InflClass=IndEurI|Number=Sing	81	obl	_	_
78	pedes	pes	NOUN	smp3a	Case=Acc|Gender=Masc|InflClass=IndEurX|Number=Plur	81	nsubj	_	_
79	esse	sum	AUX	va5fp	Aspect=Imp|InflClass=LatAnom|InflClass[noun]=Ind|Tense=Pres|VerbForm=Inf	81	xcomp	_	_
80	non	non	PART	r	Polarity=Neg	81	advmod:neg	_	_
81	possent	possum	VERB	va5cip3	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	64	conj	_	SpaceAfter=No
82	.	.	PUNCT	Pu	_	4	punct	_	_

~~~


