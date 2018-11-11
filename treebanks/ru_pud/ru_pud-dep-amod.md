---
layout: base
title:  'Statistics of amod in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `amod`

This relation is universal.

1782 nodes (9%) are attached to their parents as `amod`.

1761 instances of `amod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18125701459035.

The following 13 pairs of parts of speech are connected with `amod`: <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (1530; 86% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-NUM.html">NUM</a></tt> (146; 8% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (64; 4% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (18; 1% instances), <tt><a href="ru_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="ru_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_pud-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-X.html">X</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 amod	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
1	Зимняя	зимний	ADJ	JJ	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|Variant=Long	2	amod	_	Proper=True
2	Универсиада	универсиада	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	6	nsubj:pass	_	_
3	2019	2019	NUM	JJ	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Variant=Long	4	amod	_	Proper=True
4	года	год	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
5	будет	быть	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut	6	aux:pass	_	_
6	проводиться	проводиться	VERB	VB	Aspect=Imp	0	root	_	_
7	в	в	ADP	IN	_	8	case	_	_
8	Красноярске	Красноярск	PROPN	NNP	Animacy=Inan|Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
9	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 amod	color:blue
1	Это	это	PRON	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	3	nsubj:pass	_	_
2	было	быть	AUX	VBC	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past	3	aux:pass	_	_
3	привезено	привезти	VERB	VBN	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|Voice=Pass	0	root	_	_
4	на	на	ADP	IN	_	5	case	_	_
5	лодке	лодка	NOUN	NN	Animacy=Inan|Gender=Fem|Number=Sing	3	obl	_	_
6	из	из	ADP	IN	_	8	case	_	_
7	континентальной	континентальный	ADJ	JJ	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Variant=Long	8	amod	_	_
8	Европы	Европа	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	3	obl	_	SpaceAfter=No
9	.	.	PUNCT	.	_	3	punct	_	_

~~~


