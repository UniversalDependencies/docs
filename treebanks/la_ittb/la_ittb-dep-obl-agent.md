---
layout: base
title:  'Statistics of obl:agent in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="la_ittb-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="la_ittb-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="la_ittb-dep-obl-tmod.html">obl:tmod</a></tt>.

9 nodes (0%) are attached to their parents as `obl:agent`.

5 instances of `obl:agent` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.88888888888889.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (5; 56% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (3; 33% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 22 obl:agent	color:blue
1	unde	unde	ADV	O4	AdvType=Loc|PronType=Rel	9	advmod:lmod	_	_
2	et	et	CCONJ	O4	_	9	cc	_	_
3	in	in	ADP	S4	_	4	case	_	_
4	his	hic	DET	F1|grn1|casO|gen3|vgr1	Case=Abl|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Dem	9	obl	_	_
5	quae	qui	PRON	F1|grn1|casM|gen3|vgr1	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Rel	7	obj	_	_
6	sacerdotes	sacerdos	NOUN	C1|grn1|casJ|gen1	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Plur	7	nsubj	_	_
7	agunt	ago	VERB	L3|modA|tem1|gen9	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
8	,	,	PUNCT	Punc	_	4	punct	_	_
9	utuntur	utor	VERB	L3|modJ|tem1|gen9	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
10	rebus	res	NOUN	E1|grn1|casO|gen2	Case=Abl|Gender=Fem|InflClass=IndEurE|Number=Plur	9	obl:arg	_	_
11	per	per	ADP	S4	_	12	case	_	_
12	episcopum	episcopus	NOUN	B1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing	13	obl	_	_
13	consecratis	consecro	VERB	J2|modM|tem4|grp1|casO|gen2	Aspect=Perf|Case=Abl|Gender=Fem|InflClass=LatA|InflClass[nominal]=IndEurA|Number=Plur|VerbForm=Part|Voice=Pass	10	acl	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Perfectum
14	:	:	PUNCT	Punc	_	19	punct	_	_
15	ut	ut	SCONJ	O4|vgr1	PronType=Rel	19	mark	_	_
16	in	in	ADP	S4	_	18	case	_	_
17	eucharistiae	eucharistia	NOUN	A1|grn1|casB|gen2	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Sing	18	nmod	_	_
18	consecratione	consecratio	NOUN	C1|grn1|casF|gen2|comH	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	19	obl	_	_
19	utuntur	utor	VERB	L3|modJ|tem1|gen9	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	9	advcl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
20	consecratis	consecro	VERB	J2|modM|tem4|grp1|casO|gen3	Aspect=Perf|Case=Abl|Gender=Neut|InflClass=LatA|InflClass[nominal]=IndEurO|Number=Plur|VerbForm=Part|Voice=Pass	19	advcl:pred	_	TraditionalMood=Participium|TraditionalTense=Perfectum
21	per	per	ADP	S4	_	22	case	_	_
22	episcopum	episcopus	NOUN	B1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing	20	obl:agent	_	_
23	calice	calix	NOUN	C1|grn1|casF|gen1	Case=Abl|Gender=Masc|InflClass=IndEurX|Number=Sing	19	obl:arg	_	SpaceAfter=No
24	,	,	PUNCT	Punc	_	25	punct	_	_
25	altari	altare	ADV	C1|grn1|casF|gen3	_	23	conj	_	_
26	et	et	CCONJ	O4	_	27	cc	_	_
27	pallis	palla	NOUN	A1|grn1|casO|gen2	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Plur	23	conj	_	SpaceAfter=No
28	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obl:agent	color:blue
1	ordo	ordo	NOUN	C1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	9	nsubj	_	_
2	igitur	igitur	ADV	O4	_	9	discourse	_	_
3	quo	qui	PRON	F1|grn1|casF|gen1	Case=Abl|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	5	obl:agent	_	_
4	corruptibilia	corruptibilis	ADJ	C1|grn1|casJ|gen3	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Plur	5	nsubj:pass	_	_
5	ordinantur	ordino	VERB	J3|modJ|tem1|gen9	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	1	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
6	ad	ad	ADP	S4	_	7	case	_	_
7	hominem	homo	NOUN	C1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=IndEurX|Number=Sing	5	obl:arg	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	5	punct	_	_
9	requirit	requiro	VERB	L3|modA|tem1|gen6	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
10	quod	quod	SCONJ	O4	_	12	mark	_	_
11	indiuidua	indiuiduus	NOUN	B1|grn1|casJ|gen3	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Plur	12	nsubj:pass	_	_
12	ordinentur	ordino	VERB	J3|modK|tem1|gen9	Aspect=Imp|InflClass=LatA|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	9	ccomp	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
13	ad	ad	ADP	S4	_	14	case	_	_
14	speciem	species	NOUN	E1|grn1|casD|gen2	Case=Acc|Gender=Fem|InflClass=IndEurE|Number=Sing	12	obl:arg	_	SpaceAfter=No
15	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 30 obl:agent	color:blue
1	dicit	dico	VERB	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
2	enim	enim	PART	O4	_	1	discourse	_	_
3	petrus	petrus	PROPN	B1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	1	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	5	punct	_	_
5	act.	actus	NOUN	5	Abbr=Yes|NameType=Lit|Proper=Yes	1	obl	_	_
6	10-40	10-40	NUM	G5	_	5	nummod	_	_
7	hunc	hic	DET	F1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	13	obj	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	10	punct	_	_
9	scilicet	scilicet	CCONJ	O4	VerbForm=Fin	10	cc	_	_
10	iesum	iesus	PROPN	F1|grn1|casD|gen1|vgr1	Case=Acc|Gender=Masc|InflClass=IndEurU|Number=Sing	7	conj:expl	_	SpaceAfter=No
11	,	,	PUNCT	Punc	_	7	punct	_	_
12	deus	deus	PROPN	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	13	nsubj	_	_
13	suscitauit	suscito	VERB	J3|modA|tem4|gen6|vgr1	Aspect=Perf|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	ccomp:reported	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
14	tertia	tertius	ADJ	B1|grn1|casF|gen2|vgr1	Case=Abl|Gender=Fem|InflClass=IndEurO|Number=Sing|NumType=Ord	15	amod	_	_
15	die	dies	NOUN	E1|grn1|casF|gen2	Case=Abl|Gender=Fem|InflClass=IndEurE|Number=Sing	13	obl	_	SpaceAfter=No
16	,	,	PUNCT	Punc	_	18	punct	_	_
17	et	et	CCONJ	O4	_	18	cc	_	_
18	dedit	do	VERB	J3|modA|tem4|gen6	Aspect=Perf|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	13	conj	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
19	eum	is	PRON	F1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=LatPron|Number=Sing|Person=3|PronType=Prs	18	obj	_	_
20	manifestum	manifestus	ADJ	B1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing	21	xcomp	_	_
21	fieri	facio	VERB	N3|modQ|tem1	Aspect=Imp|InflClass=LatI2|VerbForm=Inf|Voice=Pass	18	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
22	non	non	PART	O4	Polarity=Neg	23	advmod:neg	_	_
23	omni	omnis	DET	C1|grn1|casC|gen1	Case=Dat|Gender=Masc|InflClass=IndEurI|Number=Sing|PronType=Ind	24	det	_	_
24	populo	populus	NOUN	B1|grn1|casC|gen1	Case=Dat|Gender=Masc|InflClass=IndEurO|Number=Sing	20	obl:arg	_	SpaceAfter=No
25	,	,	PUNCT	Punc	_	27	punct	_	_
26	sed	sed	CCONJ	O4|vgr1	_	27	cc	_	_
27	testibus	testis	NOUN	C1|grn1|casL|gen1	Case=Dat|Gender=Masc|InflClass=IndEurI|Number=Plur	24	conj	_	_
28	praeordinatis	praeordino	VERB	J2|modM|tem4|grp1|casL|gen1	Aspect=Perf|Case=Dat|Gender=Masc|InflClass=LatA|InflClass[nominal]=IndEurO|Number=Plur|VerbForm=Part|Voice=Pass	27	acl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
29	a	ab	ADP	S4|vgr1	_	30	case	_	_
30	deo	deus	PROPN	F1|grn1|casF|gen1	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	28	obl:agent	_	SpaceAfter=No
31	,	,	PUNCT	Punc	_	32	punct	_	_
32	nobis	nos	PRON	F1|grn1|casL|gen1	Case=Dat|InflClass=LatAnom|Number=Plur|PronType=Prs	27	conj:expl	_	_
33	qui	qui	PRON	F1|grn1|casJ|gen1	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Rel	34	nsubj	_	_
34	manducauimus	manduco	VERB	J3|modA|tem4|gen7	Aspect=Perf|InflClass=LatA|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	32	acl	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
35	et	et	CCONJ	O4	_	36	cc	_	_
36	bibimus	bibo	VERB	L3|modA|tem1|gen7	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	34	conj	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
37	cum	cum	ADP	S4|vgr1	_	38	case	_	_
38	illo	ille	DET	F1|grn1|casF|gen1	Case=Abl|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	34	obl	_	_
39	postquam	postquam	SCONJ	O4	_	40	mark	_	_
40	resurrexit	resurgo	VERB	L3|modA|tem4|gen6	Aspect=Perf|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	34	advcl	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
41	a	ab	ADP	S4|vgr1	_	42	mark	_	_
42	mortuis	morior	VERB	L2|modM|tem4|grp1|casO|gen1	Aspect=Perf|Case=Abl|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Plur|VerbForm=Part|Voice=Pass	40	ccomp	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Perfectum
43	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


