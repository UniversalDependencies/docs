---
layout: base
title:  'Statistics of cc in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="ru_pud-dep-cc-preconj.html">cc:preconj</a></tt>.

565 nodes (3%) are attached to their parents as `cc`.

564 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.07964601769911.

The following 12 pairs of parts of speech are connected with `cc`: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (222; 39% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (188; 33% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (68; 12% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (59; 10% instances), <tt><a href="ru_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (9; 2% instances), <tt><a href="ru_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (6; 1% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (4; 1% instances), <tt><a href="ru_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (4; 1% instances), <tt><a href="ru_pud-pos-X.html">X</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="ru_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 cc	color:blue
1	То	_	PRON	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	14	nsubj	_	SpaceAfter=No
2	,	_	PUNCT	,	_	5	punct	_	_
3	что	_	SCONJ	WP	Animacy=Inan|Case=Acc|Gender=Neut	5	mark	_	_
4	она	_	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3	5	nsubj	_	_
5	говорит	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	1	ccomp	_	_
6	и	_	CCONJ	CC	_	9	cc	_	_
7	что	_	SCONJ	WP	Animacy=Inan|Case=Acc|Gender=Neut	9	mark	_	_
8	она	_	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3	9	nsubj	_	_
9	делает	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	conj	_	SpaceAfter=No
10	,	_	PUNCT	,	_	5	punct	_	_
11	на	_	ADP	IN	_	13	case	_	_
12	самом	_	ADJ	JJ	Animacy=Inan|Gender=Neut|Number=Sing|Variant=Long	13	amod	_	_
13	деле	_	NOUN	NN	Animacy=Inan|Gender=Neut|Number=Sing|Person=3	14	nmod	_	_
14	невероятно	_	ADV	RB	_	0	root	_	SpaceAfter=No
15	.	_	PUNCT	.	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cc	color:blue
1	Эта	_	DET	DT	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	2	det	_	_
2	структура	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|Person=3	3	nsubj	_	_
3	делает	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	деньги	_	NOUN	NN	Animacy=Inan|Case=Acc|Number=Plur|Person=3	3	obj	_	_
5	за	_	ADP	IN	_	6	case	_	_
6	счет	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Person=3	3	obl	_	_
7	спонсорства	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|Person=3	6	nmod	_	_
8	и	_	CCONJ	CC	_	9	cc	_	_
9	рекламы	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Person=3	7	conj	_	SpaceAfter=No
10	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 cc	color:blue
1	Потому	_	ADV	RB	_	8	mark	_	_
2	что	_	ADP	IN	_	1	fixed	_	_
3	каждое	_	ADJ	JJ	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|Variant=Long	4	amod	_	_
4	чудо	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|Person=3	8	nsubj	_	_
5	и	_	CCONJ	CC	_	7	cc	_	_
6	каждый	_	ADJ	JJ	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Variant=Long	7	amod	_	_
7	район	_	PROPN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Person=3	4	conj	_	_
8	занимают	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	_
9	отдельное	_	ADJ	JJ	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|Variant=Long	10	amod	_	_
10	поле	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|Person=3	8	obj	_	SpaceAfter=No
11	.	_	PUNCT	.	_	8	punct	_	_

~~~


