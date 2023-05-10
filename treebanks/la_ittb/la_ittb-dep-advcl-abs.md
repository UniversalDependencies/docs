---
layout: base
title:  'Statistics of advcl:abs in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `advcl:abs`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-advcl.html">advcl</a></tt>.
There are also 3 other language-specific subtypes of `advcl`: <tt><a href="la_ittb-dep-advcl-cmp.html">advcl:cmp</a></tt>, <tt><a href="la_ittb-dep-advcl-pred.html">advcl:pred</a></tt>, <tt><a href="la_ittb-dep-advcl-relcl.html">advcl:relcl</a></tt>.

9 nodes (0%) are attached to their parents as `advcl:abs`.

7 instances of `advcl:abs` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.55555555555556.

The following 3 pairs of parts of speech are connected with `advcl:abs`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (7; 78% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1; 11% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 advcl:abs	color:blue
1	nihil	nihil	PRON	G1|casA|gen3|vgr1	Polarity=Neg|PronType=Ind	4	nsubj	_	_
2	igitur	igitur	ADV	O4	_	4	discourse	_	_
3	inconueniens	inconueniens	ADJ	C1|grn1|casA|gen3|vgr1	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Sing|VerbForm=Part	1	amod	_	_
4	sequitur	sequor	VERB	L3|modJ|tem1|gen6|vgr1	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
5	si	si	SCONJ	O4	_	12	mark	_	SpaceAfter=No
6	,	,	PUNCT	Punc	_	5	punct	_	_
7	certo	certus	ADJ	B1|grn1|casF|gen1	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	8	amod	_	_
8	numero	numerus	NOUN	B1|grn1|casF|gen1	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	10	nsubj:pass	_	_
9	hominum	homo	NOUN	C1|grn1|casK|gen1	Case=Gen|Gender=Masc|InflClass=IndEurX|Number=Plur	8	nmod	_	_
10	completo	compleo	VERB	K2|modM|tem4|grp1|casF|gen1	Aspect=Perf|Case=Abl|Gender=Masc|InflClass=LatE|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	12	advcl:abs	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Perfectum
11	,	,	PUNCT	Punc	_	10	punct	_	_
12	ponamus	pono	VERB	L3|modB|tem1|gen7	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	4	advcl	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
13	motum	motus	NOUN	D1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=IndEurU|Number=Sing	15	nsubj	_	_
14	caeli	caelum	NOUN	B1|grn1|casB|gen3|vgr1	Case=Gen|Gender=Neut|InflClass=IndEurO|Number=Sing	13	nmod	_	_
15	desistere	desisto	VERB	L3|modH|tem1	Aspect=Imp|InflClass=LatX|VerbForm=Inf|Voice=Act	12	ccomp	_	SpaceAfter=No|TraditionalMood=Infinitivus|TraditionalTense=Praesens
16	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 advcl:abs	color:blue
1	nam	nam	PART	O4	_	2	discourse	_	_
2	uiolentum	uiolentus	ADJ	B1|grn1|casA|gen3|vgr1	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	0	root	_	_
3	est	sum	AUX	N3|modA|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	2	cop	_	_
4	cuius	qui	PRON	F1|grn1|casB|gen3|vgr2	Case=Gen|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	5	nmod	_	_
5	principium	principium	NOUN	B1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	7	nsubj	_	_
6	est	sum	AUX	N3|modA|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	7	cop	_	_
7	extra	extra	ADV	S4	_	2	csubj:cleft	_	_
8	nil	nihil	ADV	G1|casD|gen3|vgr1	Polarity=Neg|PronType=Ind	9	advmod	_	_
9	conferente	confero	VERB	N2|modD|tem1|grp1|casF|gen3	Aspect=Imp|Case=Abl|Gender=Neut|InflClass=LatAnom|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	7	advcl:abs	_	TraditionalMood=Participium|TraditionalTense=Praesens
10	uim	uis	NOUN	F1|grn1|casD|gen2|vgr1	Case=Acc|Gender=Fem|InflClass=IndEurI|Number=Sing	9	obj	_	_
11	passo	patior	VERB	L2|modM|tem4|grp1|casF|gen3	Aspect=Perf|Case=Abl|Gender=Neut|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	9	nsubj	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Perfectum
12	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 8 advcl:abs	color:blue
1	ex	ex	ADP	S4|vgr2	_	2	case	_	_
2	quo	qui	PRON	F1|grn1|casF|gen3	Case=Abl|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	5	obl	_	_
3	de	de	ADP	S4	_	4	case	_	_
4	necessitate	necessitas	NOUN	C1|grn1|casF|gen2	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	5	obl	_	_
5	consequitur	consequor	VERB	L3|modJ|tem1|gen6	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
6	quod	quod	SCONJ	O4	_	23	mark	_	SpaceAfter=No
7	,	,	PUNCT	Punc	_	6	punct	_	_
8	existente	exsisto	VERB	L2|modD|tem1|grp1|casF|gen2	Aspect=Imp|Case=Abl|Gender=Fem|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	23	advcl:abs	_	TraditionalMood=Participium|TraditionalTense=Praesens
9	una	unus	DET	F1|grn1|casF|gen2	Case=Abl|Gender=Fem|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	10	det	_	_
10	natura	natura	NOUN	A1|grn1|casF|gen2	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	8	nsubj	_	_
11	diuina	diuinus	ADJ	A1|grn1|casF|gen2|vgr1	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	10	amod	_	_
12	in	in	ADP	S4	_	13	case	_	_
13	patre	pater	NOUN	C1|grn1|casF|gen1	Case=Abl|Gender=Masc|InflClass=IndEurX|Number=Sing	8	obl	_	_
14	et	et	CCONJ	O4	_	15	cc	_	_
15	filio	filius	NOUN	B1|grn1|casF|gen1	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	13	conj	_	SpaceAfter=No
16	,	,	PUNCT	Punc	_	8	punct	_	_
17	quod	quod	SCONJ	O4	_	6	fixed	_	_
18	sint	sum	AUX	N3|modB|tem1|gen9	InflClass=LatAnom|Number=Plur|VerbForm=Fin	23	cop	_	_
19	pater	pater	NOUN	C1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	23	nsubj	_	_
20	et	et	CCONJ	O4	_	21	cc	_	_
21	filius	filius	NOUN	B1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	19	conj	_	_
22	unus	unus	DET	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	23	det	_	_
23	deus	deus	PROPN	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	5	csubj	_	SpaceAfter=No
24	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


