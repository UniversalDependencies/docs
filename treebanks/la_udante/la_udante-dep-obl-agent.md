---
layout: base
title:  'Statistics of obl:agent in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="la_udante-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="la_udante-dep-obl-cmpr.html">obl:cmpr</a></tt>.

187 nodes (0%) are attached to their parents as `obl:agent`.

114 instances of `obl:agent` (61%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.21390374331551.

The following 15 pairs of parts of speech are connected with `obl:agent`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (125; 67% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (13; 7% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (12; 6% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt> (8; 4% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (7; 4% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (5; 3% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obl:agent	color:blue
1	An	an	PART	co	PartType=Int	7	discourse	_	_
2	septi	sepio	VERB	vp4prpmv	Aspect=Perf|Case=Voc|Degree=Pos|Gender=Masc|InflClass=LatI|InflClass[nominal]=IndEurO|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	7	advcl:pred	_	_
3	vallo	uallum	NOUN	sns2b	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	2	obl:agent	_	_
4	ridiculo	ridiculus	ADJ	ams1b	Case=Abl|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	3	amod	_	_
5	cuiquam	quisquam	DET	dinsfd	Case=Dat|Compound=Yes|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Ind	6	det	_	_
6	defensioni	defensio	NOUN	sfs3d	Case=Dat|Gender=Fem|InflClass=IndEurX|Number=Sing	7	obl:arg	_	_
7	confiditis	confido	VERB	vs3ipp2	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
8	?	?	PUNCT	Pu	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 obl:agent	color:blue
1	Si	si	SCONJ	cs	_	4	mark	_	_
2	vero	uero	ADV	r	_	9	advmod	_	_
3	in	in	ADP	e	AdpType=Prep	4	case	_	_
4	forma	forma	NOUN	sfs1b	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	9	advcl	_	_
5	sit	sum	AUX	va5cps3	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
6	peccatum	peccatum	NOUN	sns2n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing|VerbForm=Part	4	nsubj	_	SpaceAfter=No
7	,	,	PUNCT	Pu	_	4	punct	_	_
8	conclusio	conclusio	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	9	nsubj:pass	_	_
9	interimenda	interimo	VERB	vp3gvsfn	Aspect=Imp|Case=Nom|Degree=Pos|Gender=Fem|InflClass=LatX|InflClass[nominal]=IndEurA|Number=Sing|Tense=Fut|VerbForm=Gdv|Voice=Pass	0	root	_	_
10	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux:pass	_	_
11	ab	ab	ADP	e	AdpType=Prep	12	case	_	_
12	illo	ille	DET	ddismb	Case=Abl|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	9	obl:agent	_	_
13	qui	qui	PRON	presmn	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	15	nsubj	_	_
14	solvere	soluo	VERB	va3fp	Aspect=Imp|InflClass=LatX|InflClass[nominal]=Ind|Tense=Pres|VerbForm=Inf|Voice=Act	15	ccomp	_	_
15	vult	uolo	VERB	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	acl:relcl	_	SpaceAfter=No
16	,	,	PUNCT	Pu	_	17	punct	_	_
17	ostendendo	ostendo	VERB	va3fgb	Aspect=Imp|Case=Abl|Gender=Neut|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|Tense=Fut|VerbForm=Ger|Voice=Pass	9	advcl	_	_
18	formam	forma	NOUN	sfs1a	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	22	nsubj:pass	_	_
19	sillogisticam	syllogisticus	ADJ	afs1a	Case=Acc|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing	18	amod	_	_
20	non	non	PART	r	Polarity=Neg	22	advmod:neg	_	_
21	esse	sum	AUX	va5fp	Aspect=Imp|InflClass=LatAnom|InflClass[nominal]=Ind|Tense=Pres|VerbForm=Inf	22	aux:pass	_	_
22	servatam	seruo	VERB	vp1fr	Aspect=Perf|InflClass=LatA|InflClass[nominal]=Ind|Tense=Past|VerbForm=Inf|Voice=Pass	17	ccomp	_	SpaceAfter=No
23	.	.	PUNCT	Pu	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obl:agent	color:blue
1	Sunt	sum	AUX	va5ipp3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	aux:pass	_	_
2	forsan	forsan	ADV	r	Compound=Yes	6	advmod	_	_
3	mea	meus	DET	dsnpn	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Plur|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	4	det	_	_
4	regna	regnum	NOUN	snp2n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Plur	6	nsubj:pass	_	_
5	tibi	tu	PRON	ppp2smd	Case=Dat|InflClass=LatAnom|Number=Sing|Person=2|PronType=Prs	6	obl:agent	_	_
6	despecta	despicio	VERB	anp1n	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|InflClass=LatI2|InflClass[nominal]=IndEurO|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
7	?	?	PUNCT	Pu	_	6	punct	_	_

~~~


