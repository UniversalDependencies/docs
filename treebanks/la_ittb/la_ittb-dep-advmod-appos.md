---
layout: base
title:  'Statistics of advmod:appos in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `advmod:appos`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="la_ittb-dep-advmod-cc.html">advmod:cc</a></tt>, <tt><a href="la_ittb-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="la_ittb-dep-advmod-neg.html">advmod:neg</a></tt>.

3 nodes (0%) are attached to their parents as `advmod:appos`.

2 instances of `advmod:appos` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.33333333333333.

The following 1 pairs of parts of speech are connected with `advmod:appos`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (3; 100% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 advmod:appos	color:blue
1	sed	sed	CCONJ	O4|vgr1	_	8	cc	_	_
2	et	et	CCONJ	O4	_	5	mark	_	_
3	si	si	SCONJ	O4	_	2	fixed	_	_
4	quis	quis	PRON	F1|grn1|casA|gen1|varA	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind,Int	5	nsubj	_	_
5	peccauerit	pecco	VERB	J3|modA|tem6|gen6|vgr1	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	8	advcl	_	SpaceAfter=No
6	,	,	PUNCT	Punc	_	5	punct	_	_
7	aduocatum	aduoco	VERB	J2|modM|tem4|grp1|casD|gen1	Aspect=Perf|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	8	ccomp	_	_
8	habemus	habeo	VERB	K3|modA|tem1|gen7	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	apud	apud	ADP	S4|vgr1	AdpType=Prep	10	case	_	_
10	patrem	pater	NOUN	C1|grn1|casD|gen1	Case=Acc|Gender=Masc|Number=Sing	8	obl	_	SpaceAfter=No
11	,	,	PUNCT	Punc	_	12	punct	_	_
12	iesum	iesus	ADV	F1|grn1|casD|gen1|vgr1	_	7	advmod:appos	_	_
13	christum	christus	ADJ	B1|grn1|casD|gen1	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	12	amod	_	_
14	iustum	iustus	ADJ	B1|grn1|casD|gen1|vgr1	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	12	amod	_	SpaceAfter=No
15	,	,	PUNCT	Punc	_	19	punct	_	_
16	et	et	ADV	O4	_	19	advmod:emph	_	_
17	ipse	ipse	PRON	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|Number=Sing|PronType=Emp	19	nsubj	_	_
18	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	19	cop	_	_
19	propitiatio	propitiatio	NOUN	C1|grn1|casA|gen2	Case=Nom|Gender=Fem|Number=Sing	8	conj	_	_
20	pro	pro	ADP	S4	AdpType=Prep	21	case	_	_
21	peccatis	peccatum	NOUN	B1|grn1|casO|gen3	Case=Abl|Gender=Neut|Number=Plur	19	nmod	_	_
22	nostris	noster	DET	B1|grn1|casO|gen3	Case=Abl|Degree=Pos|Gender=Neut|Number=Plur|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	21	det	_	SpaceAfter=No
23	:	:	PUNCT	Punc	_	8	punct	_	_

~~~


