---
layout: base
title:  'Statistics of aux:pass in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="ru_pud-dep-aux.html">aux</a></tt>.

127 nodes (1%) are attached to their parents as `aux:pass`.

127 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14173228346457.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (126; 99% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:pass	color:blue
1	Он	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	3	nsubj:pass	_	_
2	был	_	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	3	aux:pass	_	_
3	объявлен	_	VERB	VBN	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|Voice=Pass	0	root	_	_
4	природным	_	ADJ	JJ	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Variant=Long	5	amod	_	_
5	заповедником	_	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Person=3	3	advmod	_	_
6	в	_	ADP	IN	_	8	case	_	_
7	1975	_	NUM	JJ	Animacy=Inan|Gender=Masc|Number=Sing|Variant=Long	8	nummod	_	_
8	году	_	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Person=3	3	obl	_	SpaceAfter=No
9	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux:pass	color:blue
1	В	_	ADP	IN	_	3	case	_	_
2	2011	_	NUM	JJ	Animacy=Inan|Gender=Masc|Number=Sing|Variant=Long	3	nummod	_	_
3	году	_	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Person=3	6	nmod	_	_
4	Блант	_	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing|Person=3	6	nsubj:pass	_	_
5	была	_	AUX	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past	6	aux:pass	_	_
6	названа	_	VERB	VBN	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|Variant=Short|Voice=Pass	0	root	_	_
7	послом	_	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|Person=3	6	xcomp	_	_
8	нового	_	ADJ	JJ	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Variant=Long	9	amod	_	_
9	аромата	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Person=3	7	nmod	_	_
10	Yves	_	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing|Person=3	9	nmod	_	_
11	Saint	_	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing|Person=3	10	flat	_	_
12	Laurent	_	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing|Person=3	10	flat	_	_
13	Opium	_	PROPN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Person=3	10	flat	_	SpaceAfter=No
14	.	_	PUNCT	.	_	6	punct	_	_

~~~


