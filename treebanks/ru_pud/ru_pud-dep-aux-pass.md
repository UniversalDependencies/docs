---
layout: base
title:  'Statistics of aux:pass in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="ru_pud-dep-aux.html">aux</a></tt>.

128 nodes (1%) are attached to their parents as `aux:pass`.

128 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.140625.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (127; 99% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux:pass	color:blue
1	Зимняя	зимний	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	2	amod	_	Proper=True
2	Универсиада	универсиада	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	6	nsubj:pass	_	_
3	2019	2019	ADJ	ORD	_	4	amod	_	Proper=True
4	года	год	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
5	будет	быть	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	6	aux:pass	_	_
6	проводиться	проводиться	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Pass	0	root	_	_
7	в	в	ADP	IN	_	8	case	_	_
8	Красноярске	Красноярск	PROPN	NNP	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
9	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux:pass	color:blue
1	Несколько	несколько	NUM	RB	Case=Nom	3	nummod:gov	_	_
2	древних	древний	ADJ	JJ	Case=Gen|Degree=Pos|Number=Plur	3	amod	_	_
3	цивилизаций	цивилизация	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	5	nsubj:pass	_	_
4	были	быть	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	5	aux:pass	_	_
5	расположены	расположенный	ADJ	JJH	Degree=Pos|Number=Plur|Variant=Short	0	root	_	_
6	вокруг	вокруг	ADP	IN	_	7	case	_	_
7	берегов	берег	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	5	obl	_	_
8	Средиземного	средиземный	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	9	amod	_	Proper=True
9	моря	море	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	7	nmod	_	_
10	и	и	CCONJ	CC	_	12	cc	_	_
11	значительно	значительно	ADV	RB	Degree=Pos	12	advmod	_	_
12	зависели	зависеть	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	5	conj	_	_
13	от	от	ADP	IN	_	15	case	_	_
14	близкого	близкий	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	15	amod	_	_
15	выхода	выход	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	12	obl	_	_
16	к	к	ADP	IN	_	17	case	_	_
17	морю	море	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Neut|Number=Sing	15	nmod	_	SpaceAfter=No
18	.	.	PUNCT	.	_	5	punct	_	_

~~~


