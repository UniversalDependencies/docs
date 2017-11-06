---
layout: base
title:  'Statistics of nmod:poss in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="ru_pud-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="ru_pud-dep-nmod-gmod.html">nmod:gmod</a></tt>.

1 nodes (0%) are attached to their parents as `nmod:poss`.

1 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-PRON.html">PRON</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 20 nmod:poss	color:blue
1	Также	_	CCONJ	CC	_	3	cc:preconj	_	_
2	там	_	ADV	RB	_	3	advmod	_	_
3	есть	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	возможность	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|Person=3	3	nsubj	_	_
5	отправлять	_	VERB	VB	Aspect=Imp|VerbForm=Inf	4	xcomp	_	_
6	смайлики	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Person=3	5	obj	_	SpaceAfter=No
7	,	_	PUNCT	,	_	8	punct	_	_
8	GIF	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Person=3	6	conj	_	SpaceAfter=No
9	,	_	PUNCT	,	_	11	punct	_	_
10	пользовательские	_	ADJ	JJ	Animacy=Inan|Case=Acc|Number=Plur|Variant=Long	11	amod	_	_
11	мемы	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Person=3	6	conj	_	_
12	и	_	CCONJ	CC	_	13	cc	_	_
13	стикеры	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Person=3	6	conj	_	_
14	через	_	ADP	IN	_	15	case	_	_
15	приложение	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|Person=3	5	obl	_	SpaceAfter=No
16	,	_	PUNCT	,	_	19	punct	_	_
17	а	_	CCONJ	CC	_	19	cc	_	_
18	также	_	CCONJ	CC	_	17	fixed	_	_
19	подключить	_	VERB	VB	Aspect=Perf	5	conj	_	_
20	свой	_	PRON	PRP$	Case=Acc|Gender=Masc|Number=Sing|Reflex=Yes	21	nmod:poss	_	_
21	Twitter	_	PROPN	NNP	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Person=3	19	obj	_	SpaceAfter=No
22	.	_	PUNCT	.	_	3	punct	_	_

~~~


