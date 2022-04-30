---
layout: base
title:  'Statistics of nmod:poss in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-nmod.html">nmod</a></tt>.

1 nodes (0%) are attached to their parents as `nmod:poss`.

1 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	Quod	qui	DET	presnn	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	4	det	_	_
2	quidem	quidem	PART	r	_	13	discourse	_	_
3	eius	is	PRON	ddesmg	Case=Gen|Gender=Masc|InflClass=LatPron|Number=Sing|Person=3|PronType=Prs	4	nmod:poss	_	_
4	factum	factum	NOUN	sns2n	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing|VerbForm=Part	13	obj	_	SpaceAfter=No
5	,	,	PUNCT	Pu	_	4	punct	_	_
6	nisi	nisi	SCONJ	cs	Polarity=Neg	9	mark	_	_
7	esset	sum	AUX	va5cis3	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	aux:pass	_	_
8	iure	ius	NOUN	sns3b	Case=Abl|Gender=Neut|InflClass=IndEurI|Number=Sing	9	obl	_	_
9	laudatum	laudo	VERB	vp1c+s3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|InflClass=LatA|InflClass[nominal]=IndEurO|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	13	advcl	_	SpaceAfter=No
10	,	,	PUNCT	Pu	_	9	punct	_	_
11	non	non	PART	r	Polarity=Neg	13	advmod:neg	_	_
12	esset	sum	AUX	va5cis3	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	13	aux:pass	_	_
13	ymitatus	imitor	VERB	vd1c+s3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|InflClass=LatA|InflClass[nominal]=IndEurO|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
14	quarto	quartus	ADJ	aums1b	Case=Abl|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing|NumType=Ord	15	amod	_	_
15	consulatu	consulatus	NOUN	sms4b	Case=Abl|Gender=Masc|InflClass=IndEurU|Number=Sing|VerbForm=Sup	13	obl	_	_
16	suo	suus	DET	dsmsb	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	15	det	_	_
17	filius	filius	NOUN	sms2n	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	13	nsubj	_	SpaceAfter=No
18	,	,	PUNCT	Pu	_	19	punct	_	_
19	neque	neque	CCONJ	co	Polarity=Neg	32	cc	_	_
20	porro	porro	ADV	r	_	32	advmod	_	_
21	ex	ex	ADP	e	AdpType=Prep	22	case	_	_
22	eo	is	PRON	ddesmb	Case=Abl|Gender=Masc|InflClass=LatPron|Number=Sing|Person=3|PronType=Prs	23	obl	_	_
23	natus	nascor	VERB	vd3prsmn	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	32	nsubj	_	SpaceAfter=No
24	,	,	PUNCT	Pu	_	23	punct	_	_
25	cum	cum	ADP	e	AdpType=Prep	26	case	_	_
26	Pyrro	pyrrhus	PROPN	Sms2b	Case=Abl|Gender=Masc|InflClass=IndEurO|NameType=Giv|Number=Sing	28	obl	_	_
27	bellum	bellum	NOUN	sns2a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	28	obj	_	_
28	gerens	gero	VERB	va3ppsmn	Aspect=Imp|Case=Nom|Degree=Pos|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	32	advcl:pred	_	SpaceAfter=No
29	,	,	PUNCT	Pu	_	28	punct	_	_
30	consul	consul	NOUN	sms3n	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	32	advcl:pred	_	_
31	eo	is	PRON	ddesnb	Case=Abl|Gender=Neut|InflClass=LatPron|Number=Sing|Person=3|PronType=Prs	34	det	_	_
32	cecidisset	cado	VERB	va3c+s3	Aspect=Perf|InflClass=LatX|Mood=Sub|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin|Voice=Act	13	conj	_	_
33	in	in	ADP	e	AdpType=Prep	34	case	_	_
34	prelio	proelium	NOUN	sns2b	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	32	obl	_	_
35	se	sui	PRON	ppp3sma	Case=Acc|InflClass=LatAnom|Person=3|PronType=Prs|Reflex=Yes	44	obj	_	_
36	que	que	CCONJ	9	Clitic=Yes	44	cc	_	_
37	e	e	ADP	e	AdpType=Prep	39	case	_	_
38	continenti	contineo	VERB	ans2b	Aspect=Imp|Case=Abl|Degree=Pos|Gender=Neut|InflClass=LatE|InflClass[nominal]=IndEurI|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	39	acl	_	_
39	genere	genus	NOUN	sns3b	Case=Abl|Gender=Neut|InflClass=IndEurX|Number=Sing	41	nmod	_	_
40	tertiam	tertius	ADJ	aufs1a	Case=Acc|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing|NumType=Ord	41	amod	_	_
41	victimam	uictima	NOUN	sfs1a	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	44	advcl:pred	_	_
42	rei	res	NOUN	sfs5d	Case=Dat|Gender=Fem|InflClass=IndEurE|Number=Sing	44	obl:arg	_	_
43	publice	publicus	ADJ	afs1d	Case=Dat|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing	42	amod	_	_
44	tribuisset	tribuo	VERB	va3c+s3	Aspect=Perf|InflClass=LatX|Mood=Sub|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin|Voice=Act	13	conj	_	SpaceAfter=No
45	»	»	PUNCT	Pu	_	13	punct	_	SpaceAfter=No
46	.	.	PUNCT	Pu	_	13	punct	_	_

~~~


