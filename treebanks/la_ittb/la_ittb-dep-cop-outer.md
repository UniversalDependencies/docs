---
layout: base
title:  'Statistics of cop:outer in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `cop:outer`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-cop.html">cop</a></tt>.

9 nodes (0%) are attached to their parents as `cop:outer`.

9 instances of `cop:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.44444444444444.

The following 2 pairs of parts of speech are connected with `cop:outer`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (8; 89% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 cop:outer	color:blue
1	principalis	principalis	ADJ	C1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Sing	3	amod	_	_
2	ergo	ergo	ADV	O4	AdvType=Loc	11	discourse	_	_
3	effectus	effectus	NOUN	D1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurU|Number=Sing	11	nsubj:outer	_	_
4	gratiae	gratia	NOUN	A1|grn1|casB|gen2|vgr1	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Sing	3	nmod	_	_
5	gratum	gratus	ADJ	B1|grn1|casD|gen3	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	6	obj	_	_
6	facientis	facio	VERB	N2|modD|tem1|grp1|casB|gen2	Aspect=Imp|Case=Gen|Gender=Fem|InflClass=LatI2|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	4	acl	_	TraditionalMood=Participium|TraditionalTense=Praesens
7	est	sum	AUX	N3|modA|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	11	cop:outer	_	_
8	ut	ut	SCONJ	O4|vgr1	PronType=Rel	11	mark	_	_
9	homo	homo	NOUN	C1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	11	nsubj	_	_
10	deum	deus	PROPN	F1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing	11	obj	_	_
11	diligat	diligo	VERB	L3|modB|tem1|gen6	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
12	.	.	PUNCT	Punc	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 6 cop:outer	color:blue
1	patet	pateo	VERB	K3|modA|tem1|gen6	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
2	ergo	ergo	ADV	O4	AdvType=Loc	1	discourse	_	_
3	quod	quod	SCONJ	O4	_	19	mark	_	_
4	opinio	opinio	NOUN	C1|grn1|casA|gen2|vgr1	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	19	nsubj:outer	_	_
5	aristotelis	aristoteles	PROPN	C1|grn1|casB|gen1|vgr1	Case=Gen|Gender=Masc|InflClass=IndEurI|Number=Sing	4	nmod	_	_
6	fuit	sum	AUX	N3|modA|tem4|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	19	cop:outer	_	_
7	quod	quod	SCONJ	O4	_	19	mark	_	_
8	ultima	ultimus	ADJ	A1|grn3|casA|gen2	Case=Nom|Degree=Abs|Gender=Fem|InflClass=IndEurA|Number=Sing	9	amod	_	_
9	felicitas	felicitas	NOUN	C1|grn1|casA|gen2	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	19	nsubj	_	_
10	quam	qui	PRON	F1|grn1|casD|gen2	Case=Acc|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	15	obj	_	_
11	homo	homo	NOUN	C1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	16	nsubj	_	_
12	in	in	ADP	S4	_	13	case	_	_
13	uita	uita	NOUN	A1|grn1|casF|gen2|vgr1	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	15	obl	_	_
14	ista	iste	DET	F1|grn1|casF|gen2	Case=Abl|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Dem	13	det	_	_
15	acquirere	acquiro	VERB	L3|modH|tem1	Aspect=Imp|InflClass=LatX|VerbForm=Vnoun|Voice=Act	16	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
16	potest	possum	VERB	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	acl:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
17	,	,	PUNCT	Punc	_	9	punct	_	_
18	sit	sum	AUX	N3|modB|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	19	cop	_	_
19	cognitio	cognitio	NOUN	C1|grn1|casA|gen2|vgr1	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	1	csubj	_	_
20	de	de	ADP	S4	_	21	case	_	_
21	rebus	res	NOUN	E1|grn1|casO|gen2	Case=Abl|Gender=Fem|InflClass=IndEurE|Number=Plur	19	nmod	_	_
22	diuinis	diuinus	ADJ	A1|grn1|casO|gen2|vgr1	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Plur	21	amod	_	_
23	qualis	qualis	DET	C1|grn1|casA|gen2	Case=Nom|Gender=Fem|InflClass=IndEurI|Number=Sing|PronType=Rel	28	nsubj	_	_
24	per	per	ADP	S4	_	25	case	_	_
25	scientias	scientia	NOUN	A1|grn1|casM|gen2	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Plur	28	obl	_	_
26	speculatiuas	speculatiuus	ADJ	A1|grn1|casM|gen2	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Plur	25	amod	_	_
27	haberi	habeo	VERB	K3|modQ|tem1	Aspect=Imp|InflClass=LatE|VerbForm=Vnoun|Voice=Pass	28	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
28	potest	possum	VERB	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	19	acl:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
29	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


