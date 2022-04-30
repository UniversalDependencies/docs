---
layout: base
title:  'Statistics of dislocated:obj in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `dislocated:obj`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `dislocated`: <tt><a href="la_udante-dep-dislocated-csubj.html">dislocated:csubj</a></tt>, <tt><a href="la_udante-dep-dislocated-nsubj.html">dislocated:nsubj</a></tt>.

2 nodes (0%) are attached to their parents as `dislocated:obj`.

1 instances of `dislocated:obj` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.5.

The following 2 pairs of parts of speech are connected with `dislocated:obj`: <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (1; 50% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 7 dislocated:obj	color:blue
1	Et	et	CCONJ	co	_	13	cc	_	_
2	quod	quod	SCONJ	cs	PronType=Rel	7	mark	_	_
3	tunc	tunc	ADV	r	PronType=Dem	13	advmod	_	_
4	humanum	humanus	ADJ	ans1n	Case=Nom|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing	5	amod	_	_
5	genus	genus	NOUN	sns3n	Case=Nom|Gender=Neut|InflClass=IndEurX|Number=Sing	7	nsubj	_	_
6	fuerit	sum	AUX	va5crs3	Aspect=Perf|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	cop	_	_
7	felix	felix	ADJ	ans2n	Case=Nom|Degree=Pos|Gender=Neut|InflClass=IndEurI|Number=Sing	13	dislocated:obj	_	_
8	in	in	ADP	e	AdpType=Prep	11	case	_	_
9	pacis	pax	NOUN	sfs3g	Case=Gen|Gender=Fem|InflClass=IndEurX|Number=Sing	11	nmod	_	_
10	universalis	uniuersalis	ADJ	afs2g	Case=Gen|Degree=Pos|Gender=Fem|InflClass=IndEurI|Number=Sing	9	amod	_	_
11	tranquillitate	tranquillitas	NOUN	sfs3b	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	7	obl	_	_
12	hoc	hic	DET	ddisna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	13	orphan	_	_
13	ystoriographi	historiographus	NOUN	smp2n	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Plur	0	root	_	_
14	omnes	omnis	DET	amp2n	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Plur|PronType=Tot	13	det	_	SpaceAfter=No
15	,	,	PUNCT	Pu	_	17	punct	_	_
16	hoc	hic	DET	ddisna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	17	orphan	_	_
17	poete	poeta	NOUN	sms1g	Case=Gen|Gender=Masc|InflClass=IndEurA|Number=Sing	13	conj	_	_
18	illustres	illustris	ADJ	amp2n	Case=Nom|Degree=Pos|Gender=Masc|InflClass=IndEurI|Number=Plur	17	amod	_	SpaceAfter=No
19	,	,	PUNCT	Pu	_	26	punct	_	_
20	hoc	hic	DET	ddisna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	25	obj	_	_
21	etiam	etiam	PART	co	Compound=Yes	26	discourse	_	_
22	scriba	scriba	NOUN	sms1n	Case=Nom|Gender=Masc|InflClass=IndEurA|Number=Sing	26	nsubj	_	_
23	mansuetudinis	mansuetudo	NOUN	sfs3g	Case=Gen|Gender=Fem|InflClass=IndEurX|Number=Sing	22	nmod	_	_
24	Cristi	christus	PROPN	Sms2g	Case=Gen|Gender=Masc|InflClass=IndEurO|NameType=Sur|Number=Sing	23	nmod	_	_
25	testari	testor	VERB	vd1fp	Aspect=Imp|InflClass=LatA|InflClass[nominal]=Ind|Tense=Pres|VerbForm=Inf|Voice=Pass	26	xcomp	_	_
26	dignatus	dignor	VERB	vd1irs3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|InflClass=LatA|InflClass[nominal]=IndEurO|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	13	conj	_	_
27	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	26	aux:pass	_	SpaceAfter=No
28	;	;	PUNCT	Pu	_	39	punct	_	_
29	et	et	CCONJ	co	_	39	cc	_	_
30	denique	denique	ADV	r	Form=Emp	39	advmod	_	_
31	Paulus	paulus	PROPN	Sms2n	Case=Nom|Gender=Masc|InflClass=IndEurO|NameType=Giv|Number=Sing	39	nsubj	_	_
32	«	«	PUNCT	Pu	_	33	punct	_	SpaceAfter=No
33	plenitudinem	plenitudo	NOUN	sfs3a	Case=Acc|Gender=Fem|InflClass=IndEurX|Number=Sing	39	advcl:pred	_	_
34	temporis	tempus	NOUN	sns3g	Case=Gen|Gender=Neut|InflClass=IndEurX|Number=Sing	33	nmod	_	SpaceAfter=No
35	»	»	PUNCT	Pu	_	33	punct	_	_
36	statum	status	NOUN	sms4a	Case=Acc|Gender=Masc|InflClass=IndEurU|Number=Sing|VerbForm=Sup	39	obj	_	_
37	illum	ille	DET	ddisma	Case=Acc|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	36	det	_	_
38	felicissimum	felix	ADJ	ams2s	Degree=Abs|Gender=Masc|InflClass=IndEurO|Number=Sing	36	amod	_	_
39	appellavit	appello	VERB	va1irs3	Aspect=Perf|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	26	conj	_	SpaceAfter=No
40	.	.	PUNCT	Pu	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 25 dislocated:obj	color:blue
1	Illud	ille	DET	ddisna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	8	obj	_	_
2	quoque	quoque	ADV	r	Form=Emp	8	discourse	_	_
3	preterire	praetereo	VERB	va5fp	Aspect=Imp|InflClass=LatAnom|InflClass[nominal]=Ind|Tense=Pres|VerbForm=Inf|Voice=Act	8	xcomp	_	_
4	silentio	silentium	NOUN	sns2b	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	3	obl	_	_
5	simpliciter	simpliciter	ADV	r	Degree=Pos	6	advmod	_	_
6	inardescens	inardesco	VERB	va3ppsmn	Aspect=Inch|Case=Nom|Degree=Pos|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	9	acl	_	_
7	non	non	PART	r	Polarity=Neg	8	advmod:neg	_	_
8	sinit	sino	VERB	va3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	affectus	affectus	NOUN	sms4n	Case=Nom|Gender=Masc|InflClass=IndEurU|Number=Sing|VerbForm=Sup	8	nsubj	_	SpaceAfter=No
10	,	,	PUNCT	Pu	_	25	punct	_	_
11	quod	quod	SCONJ	cs	PronType=Rel	25	mark	_	_
12	in	in	ADP	e	AdpType=Prep	14	case	_	_
13	hac	hic	DET	dpfsb	Case=Abl|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Dem	14	det	_	_
14	donatione	donatio	NOUN	sfs3b	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	25	obl	_	_
15	plus	multum	ADV	r+	Degree=Cmp	23	advmod	_	_
16	dono	donum	NOUN	sns2d	Case=Dat|Gender=Neut|InflClass=IndEurO|Number=Sing	23	obl:arg	_	_
17	quam	quam	SCONJ	c	ConjType=Cmpr|PronType=Rel	18	mark	_	_
18	domino	dominus	NOUN	sms2d	Case=Dat|Gender=Masc|InflClass=IndEurO|Number=Sing	23	advcl:cmpr	_	_
19	et	et	CCONJ	co	_	20	cc	_	_
20	honoris	honos	NOUN	sms3g	Case=Gen|Gender=Masc|InflClass=IndEurX|Number=Sing	23	nsubj:pass	_	_
21	et	et	CCONJ	co	_	22	cc	_	_
22	fame	fama	NOUN	sfs1g	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Sing	20	conj	_	_
23	conferri	confero	VERB	vp5fp	Aspect=Imp|InflClass=LatAnom|InflClass[nominal]=Ind|Tense=Pres|VerbForm=Inf|Voice=Pass	24	csubj	_	_
24	videri	uideo	VERB	vd2fp	Aspect=Imp|InflClass=LatE|InflClass[nominal]=Ind|Tense=Pres|VerbForm=Inf|Voice=Pass	25	xcomp	_	_
25	potest	possum	VERB	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	dislocated:obj	_	SpaceAfter=No
26	;	;	PUNCT	Pu	_	41	punct	_	_
27	quin	quin	SCONJ	r	ConjType=Cmpr|Polarity=Neg|PronType=Rel	41	mark	_	_
28	ymo	immo	ADV	r	Degree=Abs	41	advmod:emph	_	_
29	cum	cum	ADP	e	AdpType=Prep	31	case	_	_
30	eius	is	PRON	ddesng	Case=Gen|Gender=Neut|InflClass=LatPron|Number=Sing|Person=3|PronType=Prs	31	nmod	_	_
31	titulo	titulus	NOUN	sms2b	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	41	obl	_	_
32	iam	iam	ADV	r	_	42	advmod	_	_
33	presagium	praesagium	NOUN	sns2a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	42	obj	_	_
34	de	de	ADP	e	AdpType=Prep	38	mark	_	_
35	gloria	gloria	NOUN	sfs1b	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	38	nsubj:pass	_	_
36	vestri	uester	DET	dsnsg	Case=Gen|Gender=Neut|InflClass=IndEurO|Number=Sing|Number[psor]=Plur|Person[psor]=2|Poss=Yes|PronType=Prs	37	det	_	_
37	nominis	nomen	NOUN	sns3g	Case=Gen|Gender=Neut|InflClass=IndEurX|Number=Sing	35	nmod	_	_
38	amplianda	amplio	VERB	vp1gvsfb	Aspect=Imp|Case=Abl|Degree=Pos|Gender=Fem|InflClass=LatA|InflClass[nominal]=IndEurA|Number=Sing|Tense=Fut|VerbForm=Gdv|Voice=Pass	33	acl	_	_
39	satis	satis	ADV	r	Degree=Pos	40	advmod	_	_
40	attentis	attentus	ADJ	amp1d	Case=Dat|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Plur|VerbForm=Part	41	obl:arg	_	_
41	videbar	uideo	VERB	vd2iis1	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Pass	8	advcl:cmpr	_	_
42	expressisse	exprimo	VERB	va3fr	Aspect=Perf|InflClass=LatX|InflClass[nominal]=Ind|Tense=Past|VerbForm=Inf|Voice=Act	41	xcomp	_	SpaceAfter=No
43	;	;	PUNCT	Pu	_	44	punct	_	_
44	quod	qui	PRON	presnn	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	42	advcl:pred	_	_
45	de	de	ADP	e	AdpType=Prep	46	case	_	_
46	proposito	propositum	NOUN	sns2b	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	44	orphan	_	SpaceAfter=No
47	.	.	PUNCT	Pu	_	8	punct	_	_

~~~


