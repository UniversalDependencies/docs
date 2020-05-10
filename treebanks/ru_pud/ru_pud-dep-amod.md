---
layout: base
title:  'Statistics of amod in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `amod`

This relation is universal.

1791 nodes (9%) are attached to their parents as `amod`.

1771 instances of `amod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17811278615299.

The following 9 pairs of parts of speech are connected with `amod`: <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (1668; 93% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (69; 4% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (30; 2% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (11; 1% instances), <tt><a href="ru_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (9; 1% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 amod	color:blue
1	То	то	PRON	DT	Case=Nom|Gender=Neut|Number=Sing	14	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	,	_	5	punct	_	_
3	что	что	SCONJ	IN	_	5	obj	_	_
4	она	она	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3	5	nsubj	_	_
5	говорит	говорить	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl	_	_
6	и	и	CCONJ	CC	_	9	cc	_	_
7	что	что	SCONJ	IN	_	9	obj	_	_
8	она	она	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3	9	nsubj	_	_
9	делает	делать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	SpaceAfter=No
10	,	,	PUNCT	,	_	5	punct	_	_
11	на	на	ADP	IN	_	13	case	_	_
12	самом	самый	ADJ	JJ	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing	13	amod	_	_
13	деле	дело	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	14	obl	_	_
14	невероятно	невероятный	ADJ	JJH	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	0	root	_	SpaceAfter=No
15	.	.	PUNCT	.	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	Штат	штат	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
2	Северная	северный	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	Proper=True
3	Каролина	Каролина	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	1	nmod	_	_
4	является	являться	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
5	отправной	отправной	ADJ	JJ	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	_
6	точкой	точка	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	4	xcomp	_	_
7	этих	этот	DET	DT	Case=Gen|Number=Plur	8	det	_	_
8	выборов	выбор	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	6	nmod	_	SpaceAfter=No
9	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Самой	самый	ADJ	JJ	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	2	amod	_	_
2	главной	главный	ADJ	JJ	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	_
3	была	быть	AUX	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	cop	_	_
4	река	река	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	_
5	Огайо	Огайо	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	nmod	_	SpaceAfter=No
6	,	,	PUNCT	,	_	8	punct	_	_
7	которая	который	PRON	WDT	Case=Nom|Gender=Fem|Number=Sing	8	nsubj	_	_
8	впадала	впадать	VERB	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	acl:relcl	_	_
9	в	в	ADP	IN	_	10	case	_	_
10	реку	река	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	8	obl	_	_
11	Миссисипи	Миссисипи	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	10	nmod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	2	punct	_	_

~~~


