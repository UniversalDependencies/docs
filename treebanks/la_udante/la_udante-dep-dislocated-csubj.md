---
layout: base
title:  'Statistics of dislocated:csubj in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `dislocated:csubj`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `dislocated`: <tt><a href="la_udante-dep-dislocated-nsubj.html">dislocated:nsubj</a></tt>, <tt><a href="la_udante-dep-dislocated-obj.html">dislocated:obj</a></tt>.

2 nodes (0%) are attached to their parents as `dislocated:csubj`.

2 instances of `dislocated:csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 16.

The following 2 pairs of parts of speech are connected with `dislocated:csubj`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (1; 50% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 13 dislocated:csubj	color:blue
1	Sic	sic	ADV	r	PronType=Dem	3	advmod	_	_
2	igitur	igitur	PART	r	_	3	discourse	_	_
3	patet	pateo	VERB	va2*ips3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	per	per	ADP	e	AdpType=Prep	6	case	_	_
5	veram	uerus	ADJ	afs1a	Case=Acc|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing	6	amod	_	_
6	demonstrationem	demonstratio	NOUN	sfs3a	Case=Acc|Gender=Fem|InflClass=IndEurX|Number=Sing	3	obl	_	_
7	hoc	hic	DET	ddisnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	3	nsubj	_	SpaceAfter=No
8	,	,	PUNCT	Pu	_	13	punct	_	_
9	quod	quod	SCONJ	cs	PronType=Rel	13	mark	_	_
10	aqua	aqua	NOUN	sfs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	13	nsubj	_	_
11	non	non	PART	r	Polarity=Neg	13	advmod:neg	_	_
12	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
13	ecentrica	ecentricus	ADJ	afs1n	Case=Nom|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing	3	dislocated:csubj	_	SpaceAfter=No
14	;	;	PUNCT	Pu	_	17	punct	_	_
15	quod	qui	PRON	presnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	17	nsubj	_	_
16	erat	sum	AUX	va5iis3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	17	cop	_	_
17	primum	primus	ADJ	ans1n	Case=Nom|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing|NumType=Ord	13	advcl:pred	_	_
18	consequentis	consequor	VERB	ans2g	Aspect=Imp|Case=Gen|Gender=Neut|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	17	nmod	_	_
19	principalis	principalis	ADJ	afs2g	Case=Gen|Degree=Pos|Gender=Fem|InflClass=IndEurI|Number=Sing	20	amod	_	_
20	consequentie	consequentia	NOUN	sfs1g	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Sing	18	nmod	_	_
21	quod	qui	PRON	presnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	23	nsubj	_	_
22	destrui	destruo	VERB	vp3fp	Aspect=Imp|InflClass=LatX|InflClass[nominal]=Ind|Tense=Pres|VerbForm=Inf|Voice=Pass	23	xcomp	_	_
23	debebatur	debeo	VERB	vp2iis3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	17	acl:relcl	_	SpaceAfter=No
24	.	.	PUNCT	Pu	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 25 dislocated:csubj	color:blue
1	Illud	ille	DET	ddisna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	3	nsubj	_	_
2	quoque	quoque	ADV	r	Form=Emp	8	discourse	_	_
3	preterire	praetereo	VERB	va5fp	Aspect=Imp|InflClass=LatAnom|InflClass[nominal]=Ind|Tense=Pres|VerbForm=Inf|Voice=Act	8	ccomp	_	_
4	silentio	silentium	NOUN	sns2b	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	3	obl	_	_
5	simpliciter	simpliciter	ADV	r	Degree=Pos	3	advmod	_	_
6	inardescens	inardesco	VERB	va3ppsmn	Aspect=Inch|Case=Nom|Degree=Pos|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	9	acl	_	_
7	non	non	PART	r	Polarity=Neg	8	advmod:neg	_	_
8	sinit	sino	VERB	va3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	affectus	affectus	NOUN	sms4n	Case=Nom|Gender=Masc|InflClass=IndEurU|Number=Sing|VerbForm=Sup	8	nsubj	_	SpaceAfter=No
10	,	,	PUNCT	Pu	_	25	punct	_	_
11	quod	quod	SCONJ	cs	PronType=Rel	25	mark	_	_
12	in	in	ADP	e	AdpType=Prep	14	case	_	_
13	hac	hic	DET	dpfsb	Case=Abl|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Dem	14	det	_	_
14	donatione	donatio	NOUN	sfs3b	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	25	obl	_	_
15	plus	multus	DET	r+	Case=Nom|Degree=Cmp|Gender=Neut|InflClass=IndEurX|Number=Sing|NumType=Card|PronType=Ind	20	det:numgov	_	_
16	dono	donum	NOUN	sns2d	Case=Dat|Gender=Neut|InflClass=IndEurO|Number=Sing	23	obl:arg	_	_
17	quam	quam	SCONJ	c	ConjType=Cmpr|PronType=Rel	18	mark	_	_
18	domino	dominus	NOUN	sms2d	Case=Dat|Gender=Masc|InflClass=IndEurO|Number=Sing	23	advcl:cmpr	_	_
19	et	et	CCONJ	co	_	20	cc	_	_
20	honoris	honos	NOUN	sms3g	Case=Gen|Gender=Masc|InflClass=IndEurX|Number=Sing	23	nsubj:pass	_	_
21	et	et	CCONJ	co	_	22	cc	_	_
22	fame	fama	NOUN	sfs1g	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Sing	20	conj	_	_
23	conferri	confero	VERB	vp5fp	Aspect=Imp|InflClass=LatAnom|InflClass[nominal]=Ind|Tense=Pres|VerbForm=Inf|Voice=Pass	24	csubj:pass	_	_
24	videri	uideo	VERB	vd2fp	Aspect=Imp|InflClass=LatE|InflClass[nominal]=Ind|Tense=Pres|VerbForm=Inf|Voice=Pass	25	xcomp	_	_
25	potest	possum	VERB	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	dislocated:csubj	_	SpaceAfter=No
26	;	;	PUNCT	Pu	_	41	punct	_	_
27	quin	quin	SCONJ	r	Polarity=Neg|PronType=Rel	41	mark	_	_
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
41	videbar	uideo	VERB	vd2iis1	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Pass	25	conj:expl	_	_
42	expressisse	exprimo	VERB	va3fr	Aspect=Perf|InflClass=LatX|InflClass[nominal]=Ind|Tense=Past|VerbForm=Inf|Voice=Act	41	xcomp	_	SpaceAfter=No
43	;	;	PUNCT	Pu	_	44	punct	_	_
44	quod	qui	PRON	presnn	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	42	advcl:pred	_	_
45	de	de	ADP	e	AdpType=Prep	46	case	_	_
46	proposito	propositum	NOUN	sns2b	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	44	orphan	_	SpaceAfter=No
47	.	.	PUNCT	Pu	_	8	punct	_	_

~~~


