---
layout: base
title:  'Statistics of amod in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `amod`

This relation is universal.

1991 nodes (4%) are attached to their parents as `amod`.

1272 instances of `amod` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.39377197388247.

The following 12 pairs of parts of speech are connected with `amod`: <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (1818; 91% instances), <tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (88; 4% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (30; 2% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (17; 1% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (13; 1% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (11; 1% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="la_udante-pos-NUM.html">NUM</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="la_udante-pos-AUX.html">AUX</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 amod	color:blue
1	An	an	PART	co	PartType=Int	7	discourse	_	_
2	septi	sepio	VERB	vp4prpmv	Aspect=Perf|Case=Nom|Gender=Masc|InflClass=LatI|InflClass[nominal]=IndEurO|Number=Plur|VerbForm=Part|Voice=Pass	7	advcl:pred	_	TraditionalMood=Participium|TraditionalTense=Perfectum
3	vallo	uallum	NOUN	sns2b	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	2	obl:agent	_	_
4	ridiculo	ridiculus	ADJ	ams1b	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	3	amod	_	_
5	cuiquam	quisquam	DET	dinsfd	Case=Dat|Compound=Yes|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Ind	6	det	_	_
6	defensioni	defensio	NOUN	sfs3d	Case=Dat|Gender=Fem|InflClass=IndEurX|Number=Sing	7	obl:arg	_	_
7	confiditis	confido	VERB	vs3ipp2	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
8	?	?	PUNCT	Pu	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 amod	color:blue
1	Et	et	CCONJ	co	_	4	cc	_	_
2	ad	ad	ADP	e	_	3	case	_	_
3	vos	tu	PRON	ppp2pma	Case=Acc|InflClass=LatAnom|Number=Plur|Person=2|PronType=Prs	4	obl	_	_
4	hec	hic	DET	ddipnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Dem	0	root	_	_
5	sunt	sum	AUX	va5ipp3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
6	maxime	magis	ADV	rs	Degree=Abs	4	advmod	_	_
7	qui	qui	PRON	prepmn	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Rel	11	nsubj	_	_
8	sacrum	sacer	ADJ	ams1a	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing	9	amod	_	_
9	Tiberim	tiberis	PROPN	Sms3a	Case=Acc|Gender=Masc|InflClass=IndEurX|NameType=Geo|Number=Sing	11	obj	_	_
10	parvuli	paruulus	ADJ	smp2n	Case=Nom|Degree=Dim|Gender=Masc|InflClass=IndEurO|Number=Plur	11	advcl:pred	_	_
11	cognovistis	cognosco	VERB	va3irp2	Aspect=Perf|InflClass=LatX|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
12	.	.	PUNCT	Pu	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 amod	color:blue
1	Qua	qui	PRON	r	Case=Abl|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	2	det	_	_
2	re	res	NOUN	r	Case=Abl|Gender=Fem|InflClass=IndEurE|Number=Sing	15	obl	_	_
3	,	,	PUNCT	Pu	_	7	punct	_	_
4	si	si	SCONJ	cs	_	7	mark	_	_
5	latium	latius	ADJ	ans1a	Case=Acc|Gender=Neut|InflClass=IndEurO|NameType=Geo|Number=Sing	7	obj	_	_
6	illustre	illustris	ADJ	ans2a	Case=Acc|Gender=Neut|InflClass=IndEurI|Number=Sing	5	amod	_	_
7	venamur	uenor	VERB	vd1ipp1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	15	advcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
8	,	,	PUNCT	Pu	_	7	punct	_	_
9	quod	qui	PRON	presna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	10	obj	_	_
10	venamur	uenor	VERB	vd1ipp1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	13	csubj:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
11	in	in	ADP	e	_	12	case	_	_
12	illis	ille	DET	ddipfb	Case=Abl|Gender=Fem|InflClass=LatPron|Number=Plur|PronType=Dem	13	obl	_	_
13	inveniri	inuenio	VERB	vp4fp	Aspect=Imp|InflClass=LatI|VerbForm=Inf|Voice=Pass	15	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
14	non	non	PART	r	Polarity=Neg	15	advmod:neg	_	_
15	potest	possum	VERB	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
16	.	.	PUNCT	Pu	_	15	punct	_	_

~~~


