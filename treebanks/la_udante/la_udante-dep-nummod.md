---
layout: base
title:  'Statistics of nummod in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `nummod`

This relation is universal.

146 nodes (0%) are attached to their parents as `nummod`.

120 instances of `nummod` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.23972602739726.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-NUM.html">NUM</a></tt> (125; 86% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-NUM.html">NUM</a></tt> (7; 5% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-NUM.html">NUM</a></tt> (5; 3% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-NUM.html">NUM</a></tt> (4; 3% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-NUM.html">NUM</a></tt> (3; 2% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nummod	color:blue
1	Prima	primus	ADJ	afs1n	Case=Nom|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing|NumType=Ord	2	amod	_	_
2	divisio	diuisio	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	5	nsubj	_	_
3	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	SpaceAfter=No
4	,	,	PUNCT	Pu	_	3	punct	_	_
5	qua	qui	PRON	presfb	Case=Abl|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	0	root	_	_
6	totum	totus	DET	dpnsn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Tot	7	det	_	_
7	opus	opus	NOUN	sns3n	Case=Nom|Gender=Neut|InflClass=IndEurX|Number=Sing	8	nsubj:pass	_	_
8	dividitur	diuido	VERB	vp3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	5	acl:relcl	_	_
9	in	in	ADP	e	AdpType=Prep	11	case	_	_
10	tres	tres	NUM	aufpa	Case=Acc|Gender=Fem|InflClass=IndEurI|Number=Plur|NumForm=Word|NumType=Card	11	nummod	_	_
11	canticas	cantica	NOUN	sfp1a	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Plur	8	obl	_	SpaceAfter=No
12	.	.	PUNCT	Pu	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 19 nummod	color:blue
1	In	in	ADP	e	AdpType=Prep	2	case	_	_
2	principio	principium	NOUN	sns2b	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	5	obl	_	_
3	huius	hic	DET	dpnsg	Case=Gen|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	4	det	_	_
4	operis	opus	NOUN	sns3g	Case=Gen|Gender=Neut|InflClass=IndEurX|Number=Sing	2	nmod	_	_
5	propositum	propositum	NOUN	sns2n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	0	root	_	_
6	fuit	sum	AUX	va5irs3	Aspect=Perf|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	aux	_	_
7	de	de	ADP	e	AdpType=Prep	9	case	_	_
8	tribus	tres	NUM	aufpb	Case=Abl|Gender=Fem|InflClass=IndEurI|Number=Plur|NumForm=Word|NumType=Card	9	nummod	_	_
9	questionibus	quaestio	NOUN	sfp3b	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Plur	15	obl	_	SpaceAfter=No
10	,	,	PUNCT	Pu	_	9	punct	_	_
11	prout	prout	SCONJ	cs	Compound=Yes	13	mark	_	_
12	materia	materia	NOUN	sfs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	13	nsubj	_	_
13	pateretur	patior	VERB	vd3cis3	Aspect=Imp|InflClass=LatI2|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	15	advcl	_	SpaceAfter=No
14	,	,	PUNCT	Pu	_	13	punct	_	_
15	inquirere	inquiro	VERB	va3fp	Aspect=Imp|InflClass=LatX|InflClass[noun]=Ind|Tense=Pres|VerbForm=Inf|Voice=Act	5	ccomp	_	SpaceAfter=No
16	;	;	PUNCT	Pu	_	20	punct	_	_
17	de	de	ADP	e	AdpType=Prep	20	case	_	_
18	quarum	qui	PRON	prepfg	Case=Gen|Gender=Fem|InflClass=LatPron|Number=Plur|PronType=Rel	20	nmod	_	_
19	duabus	duo	NUM	aufpb	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Plur|NumForm=Word|NumType=Card	20	nummod	_	_
20	primis	primus	ADJ	afp1b	Case=Abl|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Plur|NumType=Ord	29	obl:arg	_	_
21	in	in	ADP	e	AdpType=Prep	23	case	_	_
22	superioribus	superior	ADJ	amp1bc	Case=Abl|Degree=Cmp|Gender=Masc|InflClass=IndEurX|Number=Plur	23	amod	_	_
23	libris	liber	NOUN	smp2b	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Plur	29	obl	_	SpaceAfter=No
24	,	,	PUNCT	Pu	_	23	punct	_	_
25	ut	ut	SCONJ	r	_	26	mark	_	_
26	credo	credo	VERB	va3ips1	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	29	parataxis	_	SpaceAfter=No
27	,	,	PUNCT	Pu	_	26	punct	_	_
28	sufficienter	sufficienter	ADV	r	Degree=Pos|VerbForm=Part	29	advmod	_	_
29	peractum	perago	VERB	vp3*irs3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|InflClass=LatX|InflClass[noun]=IndEurO|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	15	conj	_	_
30	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	29	aux:pass	_	SpaceAfter=No
31	.	.	PUNCT	Pu	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 nummod	color:blue
1	Inquisitis	inquiro	VERB	vp3prpnb	Aspect=Perf|Case=Abl|Degree=Pos|Gender=Neut|InflClass=LatX|InflClass[noun]=IndEurO|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	11	advcl:abs	_	_
2	hiis	hic	DET	ddipnb	Case=Abl|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Dem	1	nsubj:pass	_	_
3	tribus	tres	NUM	aunpb	Case=Abl|Gender=Neut|InflClass=IndEurI|Number=Plur|NumForm=Word|NumType=Card	2	nummod	_	_
4	in	in	ADP	e	AdpType=Prep	5	case	_	_
5	quibus	qui	PRON	prepnb	Case=Abl|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Rel	6	obl	_	_
6	variatur	uario	VERB	vp1ips3	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	2	acl:relcl	_	_
7	pars	pars	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	6	nsubj	_	_
8	a	a	ADP	e	AdpType=Prep	9	case	_	_
9	toto	totus	DET	dpnsb	Case=Abl|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Tot	6	obl:arg	_	SpaceAfter=No
10	,	,	PUNCT	Pu	_	1	punct	_	_
11	videndum	uideo	VERB	vp2gvsnn	Aspect=Imp|Case=Nom|Degree=Pos|Gender=Neut|InflClass=LatE|InflClass[noun]=IndEurO|Number=Sing|Tense=Fut|VerbForm=Gdv|Voice=Pass	0	root	_	_
12	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux:pass	_	_
13	de	de	ADP	e	AdpType=Prep	14	case	_	_
14	aliis	alius	DET	dpnpb	Case=Abl|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Ind	11	obl	_	_
15	tribus	tres	NUM	aunpb	Case=Abl|Gender=Neut|InflClass=IndEurI|Number=Plur|NumForm=Word|NumType=Card	14	nummod	_	_
16	in	in	ADP	e	AdpType=Prep	17	case	_	_
17	quibus	qui	PRON	prepnb	Case=Abl|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Rel	19	obl	_	_
18	nulla	nullus	DET	dpfsn	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Neg	19	det	_	_
19	variatio	uariatio	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	14	acl:relcl	_	_
20	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	19	cop	_	_
21	a	a	ADP	e	AdpType=Prep	22	case	_	_
22	toto	totus	DET	dpnsb	Case=Abl|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Tot	19	nmod	_	SpaceAfter=No
23	.	.	PUNCT	Pu	_	11	punct	_	_

~~~


