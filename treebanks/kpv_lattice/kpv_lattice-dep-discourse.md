---
layout: base
title:  'Statistics of discourse in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `discourse`

This relation is universal.

2 nodes (0%) are attached to their parents as `discourse`.

2 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.5.

The following 2 pairs of parts of speech are connected with `discourse`: <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-INTJ.html">INTJ</a></tt> (1; 50% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 discourse	color:blue
1	—	—	PUNCT	PUNCT	_	2	punct	_	_
2	Ох	ох	INTJ	Interj	_	7	discourse	_	SpaceAfter=No
3	,	,	PUNCT	CLB	_	4	punct	_	_
4	командир	командир	NOUN	N	Case=Nom|Number=Sing	5	nmod	_	_
5	ёрт	ёрт	NOUN	N	Case=Nom|Number=Sing	7	vocative	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	7	punct	_	_
7	беда	беда	ADV	Adv	_	0	root	_	SpaceAfter=No
8	!	!	PUNCT	CLB	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 discourse	color:blue
1	Тыдалӧ	тыдавны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	9	discourse	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	9	punct	_	_
3	разведкаыс	разведка	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	nsubj	_	_
4	сійӧ	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	5	det	_	_
5	луннас	лун	NOUN	N	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	obl:tmod	_	_
6	вӧлі	вӧвны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	9	cop	_	_
7	сэтшӧм	сэтшӧм	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	8	det	_	_
8	важнӧй	важнӧй	ADJ	A	Case=Nom|Number=Sing	9	amod	_	_
9	делӧӧн	делӧ	NOUN	N	Case=Ins|Number=Sing	0	root	_	SpaceAfter=No
10	,	,	PUNCT	CLB	_	13	punct	_	_
11	мый	мый	SCONJ	CS	_	13	cc	_	_
12	Ворошилов	Ворошилов	PROPN	N	Case=Nom|Number=Sing	13	nsubj	_	_
13	решитчис	решитчыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	9	acl	_	_
14	мунны	мунны	VERB	V	VerbForm=Inf	13	xcomp	_	_
15	ачыс	ас	PRON	Pron	Case=Nom|Person=3|Reflex=Yes	14	nmod	_	SpaceAfter=No
16	.	.	PUNCT	CLB	_	9	punct	_	_

~~~


