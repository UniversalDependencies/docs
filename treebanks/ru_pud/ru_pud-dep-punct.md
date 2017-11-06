---
layout: base
title:  'Statistics of punct in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `punct`

This relation is universal.

3035 nodes (16%) are attached to their parents as `punct`.

1551 instances of `punct` (51%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.39110378912685.

The following 14 pairs of parts of speech are connected with `punct`: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (1963; 65% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (444; 15% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (298; 10% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (139; 5% instances), <tt><a href="ru_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (68; 2% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (34; 1% instances), <tt><a href="ru_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (28; 1% instances), <tt><a href="ru_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (17; 1% instances), <tt><a href="ru_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (16; 1% instances), <tt><a href="ru_pud-pos-X.html">X</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (11; 0% instances), <tt><a href="ru_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (8; 0% instances), <tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (6; 0% instances), <tt><a href="ru_pud-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="ru_pud-pos-PART.html">PART</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 punct	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 punct	color:blue
1	Будучи	_	AUX	VBG	Aspect=Imp|VerbForm=Part	3	cop	_	_
2	страстным	_	ADJ	JJ	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|Variant=Long	3	amod	_	_
3	гитаристом	_	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|Person=3	6	advcl	_	SpaceAfter=No
4	,	_	PUNCT	,	_	3	punct	_	_
5	он	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	6	nsubj	_	_
6	играл	_	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
7	там	_	ADV	RB	_	6	advmod	_	_
8	концерт	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Person=3	6	obj	_	_
9	в	_	ADP	IN	_	12	case	_	_
10	том	_	DET	DT	Animacy=Inan|Gender=Masc|Number=Sing	12	det	_	_
11	же	_	X	UH	_	10	advmod	_	_
12	году	_	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Person=3	6	obl	_	SpaceAfter=No
13	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 punct	color:blue
1	Игра	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|Person=3	2	nsubj	_	_
2	состоится	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut	0	root	_	_
3	в	_	ADP	IN	_	4	case	_	_
4	субботу	_	PROPN	NNP	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing|Person=3	2	obl	_	SpaceAfter=No
5	,	_	PUNCT	,	_	7	punct	_	_
6	10	_	ADJ	JJ	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|Variant=Long	7	amod	_	_
7	июня	_	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Person=3	4	appos	_	SpaceAfter=No
8	.	_	PUNCT	.	_	2	punct	_	_

~~~


