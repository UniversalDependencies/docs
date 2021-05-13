---
layout: base
title:  'Statistics of obl:agent in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="la_ittb-dep-obl-arg.html">obl:arg</a></tt>.

1 nodes (0%) are attached to their parents as `obl:agent`.

1 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 1 pairs of parts of speech are connected with `obl:agent`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 22 obl:agent	color:blue
1	unde	unde	ADV	O4	_	9	advmod	_	_
2	et	et	CCONJ	O4	_	9	cc	_	_
3	in	in	ADP	S4	AdpType=Prep	4	case	_	_
4	his	hic	PRON	F1|grn1|casO|gen3|vgr1	Case=Abl|Gender=Neut|Number=Plur|PronType=Dem	9	obl	_	_
5	quae	qui	PRON	F1|grn1|casM|gen3|vgr1	Case=Acc|Gender=Neut|Number=Plur|PronType=Rel	7	obj	_	_
6	sacerdotes	sacerdos	NOUN	C1|grn1|casJ|gen1	Case=Nom|Gender=Masc|Number=Plur	7	nsubj	_	_
7	agunt	ago	VERB	L3|modA|tem1|gen9	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl:relcl	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	4	punct	_	_
9	utuntur	utor	VERB	L3|modJ|tem1|gen9	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
10	rebus	res	NOUN	E1|grn1|casO|gen2	Case=Abl|Gender=Fem|Number=Plur	9	obl:arg	_	_
11	per	per	ADP	S4	AdpType=Prep	12	case	_	_
12	episcopum	episcopus	NOUN	B1|grn1|casD|gen1	Case=Acc|Gender=Masc|Number=Sing	13	obl	_	_
13	consecratis	consecro	VERB	J2|modM|tem4|grp1|casO|gen2	Aspect=Perf|Case=Abl|Degree=Pos|Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	10	acl	_	SpaceAfter=No
14	:	:	PUNCT	Punc	_	19	punct	_	_
15	ut	ut	SCONJ	O4|vgr1	_	19	mark	_	_
16	in	in	ADP	S4	AdpType=Prep	18	case	_	_
17	eucharistiae	eucharistia	NOUN	A1|grn1|casB|gen2	Case=Gen|Gender=Fem|Number=Sing	18	nmod	_	_
18	consecratione	consecratio	NOUN	C1|grn1|casF|gen2|comH	Case=Abl|Gender=Fem|Number=Sing	19	obl	_	_
19	utuntur	utor	VERB	L3|modJ|tem1|gen9	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	9	advcl	_	_
20	consecratis	consecro	VERB	J2|modM|tem4|grp1|casO|gen3	Aspect=Perf|Case=Abl|Degree=Pos|Gender=Neut|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	19	advcl:pred	_	_
21	per	per	ADP	S4	AdpType=Prep	22	case	_	_
22	episcopum	episcopus	NOUN	B1|grn1|casD|gen1	Case=Acc|Gender=Masc|Number=Sing	20	obl:agent	_	_
23	calice	calix	NOUN	C1|grn1|casF|gen1	Case=Abl|Gender=Masc|Number=Sing	19	obl:arg	_	SpaceAfter=No
24	,	,	PUNCT	Punc	_	25	punct	_	_
25	altari	altare	ADV	C1|grn1|casF|gen3	_	23	conj	_	_
26	et	et	CCONJ	O4	_	27	cc	_	_
27	pallis	palla	NOUN	A1|grn1|casO|gen2	Case=Abl|Gender=Fem|Number=Plur	23	conj	_	SpaceAfter=No
28	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


