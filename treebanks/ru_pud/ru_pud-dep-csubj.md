---
layout: base
title:  'Statistics of csubj in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="ru_pud-dep-csubj-pass.html">csubj:pass</a></tt>.

12 nodes (0%) are attached to their parents as `csubj`.

8 instances of `csubj` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.91666666666667.

The following 5 pairs of parts of speech are connected with `csubj`: <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (4; 33% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (4; 33% instances), <tt><a href="ru_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (2; 17% instances), <tt><a href="ru_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 8% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 csubj	color:blue
1	Стивен	_	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=3	6	nsubj	_	_
2	Уилер	_	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=3	1	flat	_	SpaceAfter=No
3	,	_	PUNCT	,	_	4	punct	_	_
4	редактор	_	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=3	1	appos	_	SpaceAfter=No
5	,	_	PUNCT	,	_	4	punct	_	_
6	загружал	_	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
7	Киплинга	_	PROPN	NNP	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|Person=3	6	obj	_	_
8	работой	_	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing|Person=3	6	iobj	_	SpaceAfter=No
9	,	_	PUNCT	,	_	12	punct	_	_
10	но	_	CCONJ	CC	_	12	cc	_	_
11	Киплинга	_	PROPN	NNP	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|Person=3	14	obj	_	_
12	невозможно	_	ADJ	JJ	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|Variant=Short	6	conj	_	_
13	было	_	AUX	VBC	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past	12	cop	_	_
14	остановить	_	VERB	VB	Aspect=Perf	12	csubj	_	SpaceAfter=No
15	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 csubj	color:blue
1	Норман	_	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=3	3	nsubj	_	_
2	—	_	PUNCT	-	_	1	punct	_	OrigForm=--
3	один	_	NUM	CD	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
4	из	_	ADP	IN	_	7	case	_	_
5	моих	_	DET	PRP$	Animacy=Anim|Case=Gen|Number=Plur|Number[psor]=Sing|Person=1|PronType=Prs	7	det	_	_
6	хороших	_	ADJ	JJ	Animacy=Anim|Case=Gen|Number=Plur|Variant=Long	7	amod	_	_
7	приятелей	_	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Person=3	3	nmod	_	SpaceAfter=No
8	,	_	PUNCT	,	_	14	punct	_	_
9	так	_	ADV	RB	_	14	mark	_	_
10	что	_	SCONJ	IN	_	9	fixed	_	_
11	мне	_	PRON	PRP	Case=Dat|Number=Sing|Person=1	14	iobj	_	_
12	было	_	VERB	VBC	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past	14	aux	_	_
13	ужасно	_	ADV	RB	_	14	advmod	_	_
14	обидно	_	VERB	PRED	_	3	advcl	_	_
15	увидеть	_	VERB	VB	Aspect=Perf	14	csubj	_	_
16	его	_	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3	15	obj	_	_
17	в	_	ADP	IN	_	19	case	_	_
18	таком	_	ADJ	JJ	Animacy=Inan|Gender=Neut|Number=Sing|Variant=Long	19	amod	_	_
19	состоянии	_	NOUN	NN	Animacy=Inan|Gender=Neut|Number=Sing|Person=3	15	obl	_	SpaceAfter=No
20	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 csubj	color:blue
1	Платон	_	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
2	считал	_	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	0	root	_	SpaceAfter=No
3	,	_	PUNCT	,	_	8	punct	_	_
4	что	_	SCONJ	IN	_	8	mark	_	_
5	было	_	VERB	VBC	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past	8	cop	_	_
6	бы	_	PART	RP	_	8	aux	_	_
7	гораздо	_	ADV	RB	_	8	advmod	_	_
8	безопаснее	_	ADV	RBR	_	2	ccomp	_	_
9	доверить	_	VERB	VB	Aspect=Perf	8	csubj	_	_
10	власть	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing|Person=3	9	obj	_	_
11	хорошо	_	ADV	RB	_	12	advmod	_	_
12	образованным	_	ADJ	JJ	Animacy=Anim|Case=Dat|Number=Plur|Variant=Long	13	acl	_	_
13	хранителям	_	NOUN	NN	Animacy=Anim|Case=Dat|Gender=Masc|Number=Plur|Person=3	9	iobj	_	_
14	мудрости	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Person=3	13	nmod	_	SpaceAfter=No
15	.	_	PUNCT	.	_	2	punct	_	_

~~~


