---
layout: base
title:  'Statistics of fixed in UD_Faroese-OFT'
udver: '2'
---

## Treebank Statistics: UD_Faroese-OFT: Relations: `fixed`

This relation is universal.

9 nodes (0%) are attached to their parents as `fixed`.

9 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `fixed`: <tt><a href="fo_oft-pos-X.html">X</a></tt>-<tt><a href="fo_oft-pos-ADP.html">ADP</a></tt> (6; 67% instances), <tt><a href="fo_oft-pos-X.html">X</a></tt>-<tt><a href="fo_oft-pos-SCONJ.html">SCONJ</a></tt> (2; 22% instances), <tt><a href="fo_oft-pos-ADV.html">ADV</a></tt>-<tt><a href="fo_oft-pos-ADP.html">ADP</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 fixed	color:blue
1	Landið	land	NOUN	N	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	5	nsubj	_	_
2	var	vera	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	5	cop	_	_
3	fram	fram	X	x	_	5	case	_	_
4	við	við	ADP	Pr	_	3	fixed	_	_
5	Kyrrahavi	Kyrrahav	PROPN	N	Case=Dat|Definite=Ind|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Tá	tá	X	x	_	4	mark	_	_
2	ið	ið	SCONJ	CS	_	1	fixed	_	_
3	kommunisman	kommunisma	NOUN	N	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	4	nsubj	_	_
4	kom	koma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
5	til	til	ADP	Pr	_	6	case	_	_
6	Russlands	Russland	PROPN	N	Case=Gen|Definite=Ind|Gender=Neut|Number=Sing	4	obl	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Mitt	mitt	ADV	Adv	_	3	case	_	_
2	í	í	ADP	Pr	_	1	fixed	_	_
3	Moskva	Moskva	PROPN	N	Case=Dat|Number=Sing	0	root	_	_
4	er	vera	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	cop	_	_
5	Kreml	Kreml	PROPN	N	Case=Nom|Number=Sing	3	nsubj	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	8	punct	_	_
7	russiska	russiskur	ADJ	A	Case=Dat|Definite=Def|Gender=Neut|Number=Sing	8	amod	_	_
8	tinginum	ting	NOUN	N	Case=Dat|Definite=Def|Gender=Neut|Number=Sing	5	appos	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


