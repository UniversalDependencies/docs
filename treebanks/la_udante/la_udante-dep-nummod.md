---
layout: base
title:  'Statistics of nummod in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `nummod`

This relation is universal.

103 nodes (0%) are attached to their parents as `nummod`.

89 instances of `nummod` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18446601941748.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-NUM.html">NUM</a></tt> (85; 83% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-NUM.html">NUM</a></tt> (9; 9% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-NUM.html">NUM</a></tt> (4; 4% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nummod	color:blue
1	Prima	primus	ADJ	afs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing|NumType=Ord	2	amod	_	_
2	divisio	diuisio	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	8	nsubj:outer	_	_
3	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop:outer	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
4	,	,	PUNCT	Pu	_	8	punct	_	_
5	qua	qui	PRON	presfb	Case=Abl|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	8	obl:lmod	_	_
6	totum	totus	DET	dpnsn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Tot	7	det	_	_
7	opus	opus	NOUN	sns3n	Case=Nom|Gender=Neut|InflClass=IndEurX|Number=Sing	8	nsubj:pass	_	_
8	dividitur	diuido	VERB	vp3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
9	in	in	ADP	e	_	11	case	_	_
10	tres	tres	NUM	aufpa	Case=Acc|Gender=Fem|InflClass=IndEurI|Number=Plur|NumType=Card	11	nummod	_	_
11	canticas	cantica	NOUN	sfp1a	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Plur	8	obl	_	SpaceAfter=No
12	.	.	PUNCT	Pu	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 19 nummod	color:blue
1	In	in	ADP	e	_	2	case	_	_
2	principio	principium	NOUN	sns2b	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	5	obl	_	_
3	huius	hic	DET	dpnsg	Case=Gen|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	4	det	_	_
4	operis	opus	NOUN	sns3g	Case=Gen|Gender=Neut|InflClass=IndEurX|Number=Sing	2	nmod	_	_
5	propositum	propositum	NOUN	sns2n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	0	root	_	_
6	fuit	sum	AUX	va5irs3	Aspect=Perf|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	aux	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
7	de	de	ADP	e	_	9	case	_	_
8	tribus	tres	NUM	aufpb	Case=Abl|Gender=Fem|InflClass=IndEurI|Number=Plur|NumType=Card	9	nummod	_	_
9	questionibus	quaestio	NOUN	sfp3b	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Plur	15	obl	_	SpaceAfter=No
10	,	,	PUNCT	Pu	_	9	punct	_	_
11	prout	prout	SCONJ	cs	Compound=Yes	13	mark	_	_
12	materia	materia	NOUN	sfs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	13	nsubj	_	_
13	pateretur	patior	VERB	vd3cis3	Aspect=Imp|InflClass=LatI2|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	15	advcl	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Imperfectum
14	,	,	PUNCT	Pu	_	13	punct	_	_
15	inquirere	inquiro	VERB	va3fp	Aspect=Imp|VerbForm=Inf|Voice=Act	5	ccomp	_	SpaceAfter=No|TraditionalMood=Infinitivus|TraditionalTense=Praesens
16	;	;	PUNCT	Pu	_	20	punct	_	_
17	de	de	ADP	e	_	20	case	_	_
18	quarum	qui	PRON	prepfg	Case=Gen|Gender=Fem|InflClass=LatPron|Number=Plur|PronType=Rel	20	nmod	_	_
19	duabus	duo	NUM	aufpb	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Plur|NumType=Card	20	nummod	_	_
20	primis	primus	ADJ	afp1b	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Plur|NumType=Ord	29	obl	_	_
21	in	in	ADP	e	_	23	case	_	_
22	superioribus	superior	ADJ	amp1bc	Case=Abl|Degree=Cmp|Gender=Masc|InflClass=IndEurX|Number=Plur	23	amod	_	_
23	libris	liber	NOUN	smp2b	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Plur	29	obl	_	SpaceAfter=No
24	,	,	PUNCT	Pu	_	23	punct	_	_
25	ut	ut	SCONJ	r	PronType=Rel	26	mark	_	_
26	credo	credo	VERB	va3ips1	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	29	advcl:cmp	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
27	,	,	PUNCT	Pu	_	26	punct	_	_
28	sufficienter	sufficienter	ADV	r	VerbForm=Part	29	advmod	_	_
29	peractum	perago	VERB	vp3*irs3	Aspect=Perf|Case=Nom|Gender=Neut|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	15	conj	_	TraditionalMood=Participium|TraditionalTense=Perfectum
30	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	29	aux:pass	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
31	.	.	PUNCT	Pu	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 nummod	color:blue
1	Veritas	ueritas	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	4	nsubj	_	_
2	autem	autem	PART	co	_	5	discourse	_	_
3	questionis	quaestio	NOUN	sfs3g	Case=Gen|Gender=Fem|InflClass=IndEurX|Number=Sing	1	nmod	_	_
4	patere	pateo	VERB	va2fp	Aspect=Imp|VerbForm=Inf|Voice=Act	5	csubj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
5	potest	possum	VERB	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
6	non	non	PART	r	Polarity=Neg	7	advmod:neg	_	_
7	solum	solum	ADV	r	PronType=Con	4	advmod:emph	_	_
8	lumine	lumen	NOUN	sns3b	Case=Abl|Gender=Neut|InflClass=IndEurX|Number=Sing	4	obl	_	_
9	rationis	ratio	NOUN	sfs3g	Case=Gen|Gender=Fem|InflClass=IndEurX|Number=Sing	8	nmod	_	_
10	humane	humanus	ADJ	afs1g	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Sing	9	amod	_	SpaceAfter=No
11	,	,	PUNCT	Pu	_	14	punct	_	_
12	sed	sed	CCONJ	co	_	14	cc	_	_
13	etiam	etiam	ADV	co	Compound=Yes	14	advmod:emph	_	_
14	radio	radius	NOUN	sms2b	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	8	conj	_	_
15	divine	diuinus	ADJ	afs1g	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Sing	16	amod	_	_
16	auctoritatis	auctoritas	NOUN	sfs3g	Case=Gen|Gender=Fem|InflClass=IndEurX|Number=Sing	14	nmod	_	SpaceAfter=No
17	:	:	PUNCT	Pu	_	8	punct	_	_
18	que	qui	PRON	prepnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Rel	24	nsubj	_	_
19	duo	duo	NUM	aunpn	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Plur|NumType=Card	18	nummod	_	_
20	cum	cum	SCONJ	cs	PronType=Rel	24	mark	_	_
21	simul	simul	ADV	r	_	24	advmod	_	_
22	ad	ad	ADP	e	_	23	case	_	_
23	unum	unus	DET	aunsa	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	24	obl	_	_
24	concurrunt	concurro	VERB	va3ipp3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	31	advcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
25	,	,	PUNCT	Pu	_	24	punct	_	_
26	celum	caelum	NOUN	sns2a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	30	nsubj	_	_
27	et	et	CCONJ	co	_	28	cc	_	_
28	terram	terra	NOUN	sfs1a	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	26	conj	_	_
29	simul	simul	ADV	r	_	26	advmod	_	_
30	assentire	assentio	VERB	va4fp	Aspect=Imp|VerbForm=Inf|Voice=Act	31	csubj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
31	necesse	necesse	ADJ	din	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Sing	4	conj	_	_
32	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	31	cop	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
33	.	.	PUNCT	Pu	_	5	punct	_	_

~~~


