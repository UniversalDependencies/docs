---
layout: base
title:  'Statistics of csubj:pass in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="ru_pud-dep-csubj.html">csubj</a></tt>.

1 nodes (0%) are attached to their parents as `csubj:pass`.

1 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 csubj:pass	color:blue
1	Было	_	VERB	VBC	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past	2	aux:pass	_	_
2	предсказано	_	VERB	VBN	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|Voice=Pass	0	root	_	SpaceAfter=No
3	,	_	PUNCT	,	_	6	punct	_	_
4	что	_	ADP	IN	_	6	mark	_	_
5	он	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	6	nsubj	_	_
6	умрет	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut	2	csubj:pass	_	_
7	либо	_	CCONJ	CC	_	9	cc:preconj	_	_
8	от	_	ADP	IN	_	9	case	_	_
9	старости	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Person=3	6	obl	_	SpaceAfter=No
10	,	_	PUNCT	,	_	17	punct	_	_
11	после	_	ADP	IN	_	17	case	_	_
12	тихой	_	ADJ	JJ	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Variant=Long	17	amod	_	SpaceAfter=No
13	,	_	PUNCT	,	_	15	punct	_	_
14	не	_	PART	NEG	Polarity=Neg	15	advmod	_	_
15	богатой	_	ADJ	JJ	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Variant=Long	12	conj	_	_
16	событиями	_	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Neut|Number=Plur|Person=3	15	nmod	_	_
17	жизни	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Person=3	9	appos	_	SpaceAfter=No
18	,	_	PUNCT	,	_	21	punct	_	_
19	или	_	CCONJ	CC	_	21	cc	_	_
20	же	_	X	UH	_	19	advmod	_	_
21	молодым	_	ADJ	JJ	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|Variant=Long	9	conj	_	_
22	на	_	ADP	IN	_	23	case	_	_
23	поле	_	NOUN	NN	Animacy=Inan|Gender=Neut|Number=Sing|Person=3	21	obl	_	_
24	боя	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Person=3	23	nmod	_	_
25	и	_	CCONJ	CC	_	26	cc	_	_
26	получит	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut	6	conj	_	_
27	бессмертие	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|Person=3	26	obj	_	_
28	через	_	ADP	IN	_	29	case	_	_
29	поэзию	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing|Person=3	26	obl	_	SpaceAfter=No
30	.	_	PUNCT	.	_	2	punct	_	_

~~~


