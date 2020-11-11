---
layout: base
title:  'Statistics of advcl:cmpr in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `advcl:cmpr`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-advcl.html">advcl</a></tt>.
There are also 3 other language-specific subtypes of `advcl`: <tt><a href="la_ittb-dep-advcl-appos.html">advcl:appos</a></tt>, <tt><a href="la_ittb-dep-advcl-arg.html">advcl:arg</a></tt>, <tt><a href="la_ittb-dep-advcl-pred.html">advcl:pred</a></tt>.

1 nodes (0%) are attached to their parents as `advcl:cmpr`.

1 instances of `advcl:cmpr` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `advcl:cmpr`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-SCONJ.html">SCONJ</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 advcl:cmpr	color:blue
1	tum	tum	CCONJ	O4	_	6	cc	_	_
2	quia	quia	SCONJ	O4	_	6	mark	_	_
3	hoc	hic	PRON	F1|grn1|casA|gen3	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	_	_
4	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
5	contra	contra	ADP	S4	AdpType=Prep	6	case	_	_
6	rationem	ratio	NOUN	C1|grn1|casD|gen2|vgr1	Case=Acc|Gender=Fem|Number=Sing	0	root	_	_
7	seminis	semen	NOUN	C1|grn1|casB|gen3	Case=Gen|Gender=Neut|Number=Sing	6	nmod	_	SpaceAfter=No
8	:	:	PUNCT	Punc	_	9	punct	_	_
9	esset	sum	AUX	N3|modB|tem2|gen6	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	6	parataxis	_	_
10	enim	enim	ADV	O4	_	9	advmod	_	_
11	semen	semen	NOUN	C1|grn1|casA|gen3	Case=Nom|Gender=Neut|Number=Sing	9	nsubj	_	_
12	ut	ut	SCONJ	O4|vgr1	_	13	advcl:cmpr	_	_
13	corruptum	corrumpo	VERB	L2|modM|tem4|grp1|casA|gen3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	9	ccomp	_	_
14	et	et	CCONJ	O4	_	17	cc	_	_
15	a	ab	ADP	S4|vgr1	AdpType=Prep	16	case	_	_
16	natura	natura	NOUN	A1|grn1|casF|gen2	Case=Abl|Gender=Fem|Number=Sing	17	obl:arg	_	_
17	recedens	recedo	VERB	L2|modD|tem1|grp1|casA|gen3	Aspect=Imp|Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	13	conj	_	SpaceAfter=No
18	;	;	PUNCT	Punc	_	22	punct	_	_
19	et	et	CCONJ	O4	_	22	cc	_	_
20	sic	sic	ADV	O4	_	22	advmod	_	_
21	non	non	PART	O4	Polarity=Neg	22	advmod:neg	_	_
22	posset	possum	VERB	N3|modB|tem2|gen6	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin|VerbType=Mod|Voice=Act	9	conj	_	_
23	esse	sum	AUX	N3|modH|tem1	Tense=Pres|VerbForm=Inf|Voice=Act	26	cop	_	_
24	naturalis	naturalis	ADJ	C1|grn1|casB|gen2	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	25	amod	_	_
25	actionis	actio	NOUN	C1|grn1|casB|gen2|vgr1	Case=Gen|Gender=Fem|Number=Sing	26	nmod	_	_
26	principium	principium	NOUN	B1|grn1|casA|gen3	Case=Nom|Gender=Neut|Number=Sing	22	xcomp	_	SpaceAfter=No
27	,	,	PUNCT	Punc	_	29	punct	_	_
28	ut	ut	SCONJ	O4|vgr1	_	29	mark	_	_
29	patet	pateo	VERB	K3|modA|tem1|gen6	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	22	advcl	_	_
30	per	per	ADP	S4	AdpType=Prep	31	case	_	_
31	philosophum	philosophus	NOUN	B1|grn1|casD|gen1	Case=Acc|Gender=Masc|Number=Sing	29	obl	_	_
32	in	in	ADP	S4	AdpType=Prep	33	case	_	_
33	libro	liber	NOUN	B1|grn1|casF|gen1	Case=Abl|Gender=Masc|Number=Sing	29	obl	_	volumen
34	de	de	ADP	S4	AdpType=Prep	35	case	_	_
35	generatione	generatio	NOUN	C1|grn1|casF|gen2|comH|vgr1	Case=Abl|Gender=Fem|Number=Sing	33	nmod	_	_
36	animalium	animal	NOUN	C1|grn1|casK|gen3	Case=Gen|Gender=Neut|Number=Plur	35	nmod	_	SpaceAfter=No
37	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


