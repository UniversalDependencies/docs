---
layout: base
title:  'Statistics of reparandum in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `reparandum`

This relation is universal.

32 nodes (0%) are attached to their parents as `reparandum`.

30 instances of `reparandum` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.90625.

The following 5 pairs of parts of speech are connected with `reparandum`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-SCONJ.html">SCONJ</a></tt> (21; 66% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-SCONJ.html">SCONJ</a></tt> (6; 19% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-SCONJ.html">SCONJ</a></tt> (2; 6% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-SCONJ.html">SCONJ</a></tt> (2; 6% instances), <tt><a href="la_ittb-pos-AUX.html">AUX</a></tt>-<tt><a href="la_ittb-pos-SCONJ.html">SCONJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 14 reparandum	color:blue
1	non	non	PART	O4	Polarity=Neg	4	advmod:neg	_	_
2	igitur	igitur	PART	O4	_	4	discourse	_	_
3	fuit	sum	AUX	N3|modA|tem4|gen6	Aspect=Perf|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	aux	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
4	conueniens	conuenio	VERB	M2|modD|tem1|grp1|casA|gen3|vgr1	Aspect=Imp|Case=Nom|Gender=Neut|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	Lilaflcat=LatI|TraditionalMood=Participium|TraditionalTense=Praesens
5	quod	quod	SCONJ	O4	_	18	mark	_	SpaceAfter=No
6	,	,	PUNCT	Punc	_	5	punct	_	_
7	si	si	SCONJ	O4	_	12	mark	_	_
8	alienam	alienus	ADJ	A1|grn1|casD|gen2	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	9	amod	_	_
9	naturam	natura	NOUN	A1|grn1|casD|gen2	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	11	obj	_	_
10	deus	deus	NOUN	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	12	nsubj	_	_
11	assumere	assumo	VERB	L3|modH|tem1	Aspect=Imp|InflClass=LatX|Tense=Pres|VerbForm=Inf|Voice=Act	12	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
12	debuit	debeo	VERB	K3|modA|tem4|gen6	Aspect=Perf|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	18	advcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
13	,	,	PUNCT	Punc	_	12	punct	_	_
14	quod	quod	SCONJ	O4	_	18	reparandum	_	_
15	solum	solum	ADV	B1|grn1|casG	PronType=Con	18	advmod	_	_
16	naturam	natura	NOUN	A1|grn1|casD|gen2	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	18	obj	_	_
17	humanam	humanus	ADJ	A1|grn1|casD|gen2	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	16	amod	_	_
18	assumpserit	assumo	VERB	L3|modB|tem4|gen6	Aspect=Perf|InflClass=LatX|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	csubj	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Perfectum
19	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 12 reparandum	color:blue
1	uidetur	uideo	VERB	K3|modJ|tem1|gen6|vgr1	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
2	igitur	igitur	PART	O4	_	1	discourse	_	_
3	necessarium	necessarius	ADJ	B1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	1	xcomp	_	_
4	quod	quod	SCONJ	O4	_	17	mark	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	4	punct	_	_
6	cum	cum	SCONJ	S4|vgr1	PronType=Rel	9	mark	_	_
7	deus	deus	NOUN	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	9	nsubj	_	_
8	ab	ab	ADP	S4|vgr2	_	9	case	_	_
9	aeterno	aeternus	ADJ	B1|grn1|casF|gen3	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	17	advcl	_	_
10	fuerit	sum	AUX	N3|modB|tem4|gen6	Aspect=Perf|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	cop	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Perfectum
11	,	,	PUNCT	Punc	_	9	punct	_	_
12	quod	quod	SCONJ	O4	_	17	reparandum	_	_
13	creatura	creatura	NOUN	A1|grn1|casA|gen2	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	17	nsubj	_	_
14	etiam	etiam	ADV	O4|vgr1	Compound=Yes	13	advmod:emph	_	_
15	fuerit	sum	AUX	N3|modB|tem4|gen6	Aspect=Perf|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	17	cop	_	TraditionalMood=Subiunctivus|TraditionalTense=Perfectum
16	ab	ab	ADP	S4|vgr2	_	17	case	_	_
17	aeterno	aeternus	ADJ	B1|grn1|casF|gen3	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	1	csubj:pass	_	SpaceAfter=No
18	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 17 reparandum	color:blue
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
17	quod	quod	SCONJ	O4	_	23	reparandum	_	_
18	sint	sum	AUX	N3|modB|tem1|gen9	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	23	cop	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
19	pater	pater	NOUN	C1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	23	nsubj	_	_
20	et	et	CCONJ	O4	_	21	cc	_	_
21	filius	filius	NOUN	B1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	19	conj	_	_
22	unus	unus	DET	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	23	det	_	_
23	deus	deus	NOUN	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	5	csubj	_	SpaceAfter=No
24	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


