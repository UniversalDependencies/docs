---
layout: base
title:  'Statistics of dep:alt in UD_Upper_Sorbian-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Upper_Sorbian-UFAL: Relations: `dep:alt`

This relation is a language-specific subtype of <tt><a href="hsb_ufal-dep-dep.html">dep</a></tt>.

2 nodes (0%) are attached to their parents as `dep:alt`.

2 instances of `dep:alt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `dep:alt`: <tt><a href="hsb_ufal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hsb_ufal-pos-CCONJ.html">CCONJ</a></tt> (1; 50% instances), <tt><a href="hsb_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="hsb_ufal-pos-X.html">X</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 dep:alt	color:blue
1	Sy	być	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	cop	_	_
2	wutrobnje	wutrobnje	ADV	_	Degree=Pos	3	advmod	_	_
3	přeprošeny	přeprošeny	ADJ	_	Case=Nom|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
4	(	(	PUNCT	_	_	5	punct	_	SpaceAfter=No
5	a	a	CCONJ	_	_	3	dep:alt	_	SpaceAfter=No
6	)	)	PUNCT	_	_	5	punct	_	SpaceAfter=No
7	,	,	PUNCT	_	_	11	punct	_	_
8	prašenja	prašenje	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	11	obj	_	_
9	w	w	ADP	_	_	10	case	_	_
10	korčmje	korčmja	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	11	obl	_	_
11	stajić	stajić	VERB	_	VerbForm=Inf	3	advcl	_	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 dep:alt	color:blue
1	Jeli	jeli	SCONJ	_	_	7	mark	_	_
2	sy	być	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	7	aux	_	_
3	jedyn	jedyn	NUM	_	Case=Acc|Gender=Masc|Number=Sing|NumType=Card	7	obj	_	_
4	z	z	ADP	_	_	6	case	_	_
5	mjenowanych	mjenowany	ADJ	_	Case=Gen|Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	6	amod	_	_
6	njedostatkow	njedostatk	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	3	nmod	_	_
7	skorigował	skorigować	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	12	advcl	_	SpaceAfter=No
8	(	(	PUNCT	_	_	9	punct	_	SpaceAfter=No
9	a	a	X	_	_	7	dep:alt	_	SpaceAfter=No
10	)	)	PUNCT	_	_	9	punct	_	SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	_
12	wotstroń	wotstronić	VERB	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	_
13	prošu	prosyć	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	12	discourse	_	_
14	potrjecheny	potrjecheny	ADJ	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	15	amod	_	_
15	parameter	parameter	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	12	obj	_	_
16	předłohi	předłoha	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	15	nmod	_	_
17	.	.	PUNCT	_	_	12	punct	_	_

~~~


