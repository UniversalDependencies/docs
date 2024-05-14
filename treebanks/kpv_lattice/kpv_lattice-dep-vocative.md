---
layout: base
title:  'Statistics of vocative in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `vocative`

This relation is universal.

12 nodes (0%) are attached to their parents as `vocative`.

7 instances of `vocative` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.75.

The following 2 pairs of parts of speech are connected with `vocative`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (11; 92% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 vocative	color:blue
1	Мунігмозыс	мунны	VERB	V	Derivation=Igmoz|Number[psor]=Sing|Person[psor]=3|VerbForm=Conv	3	advcl	_	_
2	он	оз	AUX	V	Mood=Ind|Person=2|Polarity=Neg|Tense=Pres	3	aux:neg	_	_
3	тӧр	тӧрны	VERB	V	Connegative=Yes	0	root	_	_
4	бергӧдчыныс	бергӧдчыны	VERB	V	VerbForm=Inf	3	xcomp	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	7	punct	_	_
6	командир	командир	NOUN	N	Case=Nom|Number=Sing	7	nmod	_	_
7	ёрт	ёрт	NOUN	N	Case=Nom|Number=Sing	3	vocative	_	SpaceAfter=No
8	!	!	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 vocative	color:blue
1	—	—	PUNCT	PUNCT	_	2	punct	_	_
2	Ох	ох	INTJ	Interj	_	7	discourse	_	SpaceAfter=No
3	,	,	PUNCT	CLB	_	4	punct	_	_
4	командир	командир	NOUN	N	Case=Nom|Number=Sing	5	nmod	_	_
5	ёрт	ёрт	NOUN	N	Case=Nom|Number=Sing	7	vocative	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	7	punct	_	_
7	беда	беда	ADV	Adv	_	0	root	_	SpaceAfter=No
8	!	!	PUNCT	CLB	_	7	punct	_	_

~~~


