---
layout: base
title:  'Statistics of vocative in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `vocative`

This relation is universal.

2 nodes (0%) are attached to their parents as `vocative`.

1 instances of `vocative` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.

The following 2 pairs of parts of speech are connected with `vocative`: <tt><a href="ru_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 vocative	color:blue
1	Это	это	PRON	DT	Case=Nom|Gender=Neut|Number=Sing	3	nsubj	_	_
2	не	не	PART	NEG	Polarity=Neg	3	advmod	_	_
3	то	то	PRON	DT	Case=Nom|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	,	_	6	punct	_	_
5	что	что	PRON	WP	Case=Nom	6	nsubj	_	_
6	нужно	нужный	ADJ	PRED	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	3	ccomp	_	_
7	нашей	наш	DET	PRP$	Case=Dat|Gender=Fem|Number=Sing	8	det	_	_
8	стране	страна	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	6	iobj	_	SpaceAfter=No
9	,	,	PUNCT	,	_	10	punct	_	_
10	ребята	ребята	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Neut|Number=Plur	3	vocative	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 14 vocative	color:blue
1	«	«	PUNCT	``	_	9	punct	_	SpaceAfter=No
2	К	к	ADP	IN	_	3	case	_	_
3	счастью	счастие	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Neut|Number=Sing	9	parataxis	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	кто-то	кто-то	PRON	WP	Case=Nom	9	nsubj	_	_
6	в	в	ADP	IN	_	7	case	_	_
7	Sony	Sony	PROPN	NNP	Foreign=Yes	9	obl	_	_
8	Australia	Australia	PROPN	NNP	Foreign=Yes	7	flat:foreign	_	_
9	сказал	сказать	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
10	:	:	PUNCT	:	_	9	punct	_	_
11	„	„	PUNCT	``	_	23	punct	_	SpaceAfter=No
12	Эй	эй	INTJ	UH	_	23	discourse	_	SpaceAfter=No
13	,	,	PUNCT	,	_	14	punct	_	_
14	ребята	ребята	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Neut|Number=Plur	23	vocative	_	SpaceAfter=No
15	,	,	PUNCT	,	_	14	punct	_	_
16	а	а	CCONJ	CC	_	23	cc	_	_
17	это	это	PRON	DT	Case=Nom|Gender=Neut|Number=Sing	23	obj	_	_
18	вы	вы	PRON	PRP	Case=Nom|Number=Plur|Person=2	23	nsubj	_	SpaceAfter=No
19	,	,	PUNCT	,	_	20	punct	_	_
20	между	между	ADP	IN	_	23	discourse	_	_
21	прочим	прочее	PRON	DT	Case=Ins|Gender=Neut|Number=Sing	20	fixed	_	SpaceAfter=No
22	,	,	PUNCT	,	_	20	punct	_	_
23	заметили	заметить	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	9	parataxis	_	SpaceAfter=No
24	?	?	PUNCT	.	_	23	punct	_	SpaceAfter=No
25	“	“	PUNCT	``	_	23	punct	_	SpaceAfter=No
26	»	»	PUNCT	'	_	9	punct	_	SpaceAfter=No
27	,	,	PUNCT	,	_	29	punct	_	_
28	—	—	PUNCT	-	_	29	punct	_	_
29	говорит	говорить	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	parataxis	_	_
30	Пэлл	Пэлл	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	29	nsubj	_	SpaceAfter=No
31	.	.	PUNCT	.	_	9	punct	_	_

~~~


