---
layout: base
title:  'Statistics of cc in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `cc`

This relation is universal.

598 nodes (3%) are attached to their parents as `cc`.

598 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.27090301003344.

The following 13 pairs of parts of speech are connected with `cc`: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (234; 39% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (211; 35% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (60; 10% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (53; 9% instances), <tt><a href="ru_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (10; 2% instances), <tt><a href="ru_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (8; 1% instances), <tt><a href="ru_pud-pos-X.html">X</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (6; 1% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="ru_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (4; 1% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-ADP.html">ADP</a></tt> (4; 1% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 cc	color:blue
1	То	то	PRON	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	14	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	,	_	5	punct	_	_
3	что	что	SCONJ	WP	Animacy=Inan|Case=Acc|Gender=Neut	5	obj	_	_
4	она	она	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3	5	nsubj	_	_
5	говорит	говорить	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	1	acl	_	_
6	и	и	CCONJ	CC	_	9	cc	_	_
7	что	что	SCONJ	WP	Animacy=Inan|Case=Acc|Gender=Neut	9	obj	_	_
8	она	она	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3	9	nsubj	_	_
9	делает	делать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	conj	_	SpaceAfter=No
10	,	,	PUNCT	,	_	5	punct	_	_
11	на	на	ADP	IN	_	13	case	_	_
12	самом	самый	ADJ	JJ	Animacy=Inan|Gender=Neut|Number=Sing|Variant=Long	13	amod	_	_
13	деле	дело	NOUN	NN	Animacy=Inan|Gender=Neut|Number=Sing	14	obl	_	_
14	невероятно	невероятно	ADV	RB	_	0	root	_	SpaceAfter=No
15	.	.	PUNCT	.	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cc	color:blue
1	Эта	этот	DET	DT	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	2	det	_	_
2	структура	структура	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
3	делает	делать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	деньги	деньги	NOUN	NN	Animacy=Inan|Case=Acc|Number=Plur	3	obj	_	_
5	за	за	ADP	IN	_	7	case	_	_
6	счет	счет	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	fixed	_	_
7	спонсорства	спонсорство	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	3	obl	_	_
8	и	и	CCONJ	CC	_	9	cc	_	_
9	рекламы	реклама	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	7	conj	_	SpaceAfter=No
10	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc	color:blue
1	«	«	PUNCT	``	_	3	punct	_	SpaceAfter=No
2	Мне	я	PRON	PRP	Case=Dat|Number=Sing|Person=1	3	iobj	_	_
3	нравились	нравиться	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past	0	root	_	_
4	горячие	горячий	ADJ	JJ	Animacy=Inan|Case=Nom|Number=Plur|Variant=Long	7	amod	_	_
5	и	и	CCONJ	CC	_	6	cc	_	_
6	страстные	страстный	ADJ	JJ	Animacy=Inan|Case=Nom|Number=Plur|Variant=Long	4	conj	_	_
7	цвета	цвет	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	SpaceAfter=No
8	»	»	PUNCT	''	_	3	punct	_	SpaceAfter=No
9	,	,	PUNCT	,	_	11	punct	_	_
10	—	—	PUNCT	-	_	11	punct	_	OrigForm=--
11	говорит	говорить	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	parataxis	_	_
12	он	он	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	11	nsubj	_	SpaceAfter=No
13	.	.	PUNCT	.	_	3	punct	_	_

~~~


