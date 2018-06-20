---
layout: base
title:  'Statistics of compound in UD_Russian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Russian-GSD: Relations: `compound`

This relation is universal.

77 nodes (0%) are attached to their parents as `compound`.

77 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.06493506493506.

The following 9 pairs of parts of speech are connected with `compound`: <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt> (47; 61% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (9; 12% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt> (8; 10% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt> (4; 5% instances), <tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt> (3; 4% instances), <tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt> (2; 3% instances), <tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 compound	color:blue
1	По	ПО	ADP	IN	_	3	case	_	_
2	официальным	ОФИЦИАЛЬНЫЙ	ADJ	JJL	Animacy=Inan|Case=Dat|Number=Plur	3	amod	_	_
3	данным	ДАННЫЕ	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Neut|Number=Plur	5	obl	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	погибло	ПОГИБНУТЬ	VERB	VBC	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
6	более	БОЛЕЕ	ADV	RBR	Degree=Cmp	8	advmod	_	_
7	двух	ДВА	NUM	CD	Animacy=Inan|Case=Gen|Gender=Fem|NumType=Card	8	compound	_	_
8	тысяч	ТЫСЯЧА	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	9	nummod:gov	_	_
9	человек	ЧЕЛОВЕК	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	5	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 compound	color:blue
1	Участие	УЧАСТИЕ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	9	nsubj	_	_
2	Брэнда	БРЭНД	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	_
3	в	В	ADP	IN	_	7	case	_	_
4	MTV	MTV	PROPN	NNP	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	compound	_	_
5	Video	VIDEO	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	6	compound	_	_
6	Music	MUSIC	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	7	compound	_	_
7	Awards	AWARD	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Plur	1	nmod	_	_
8	не	НЕ	PART	NEG	Polarity=Neg	9	advmod	_	_
9	обошлось	ОБОЙТИСЬ	VERB	VBC	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	_
10	без	БЕЗ	ADP	IN	_	11	case	_	_
11	полемики	ПОЛЕМИКА	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	9	obl	_	_
12	и	И	CCONJ	CC	_	13	cc	_	_
13	скандалов	СКАНДАЛ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	11	conj	_	SpaceAfter=No
14	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 compound	color:blue
1	В	В	ADP	IN	_	2	case	_	_
2	городе	ГОРОД	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	3	obl	_	_
3	вещают	ВЕЩАТЬ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	7	7	NUM	CD	Case=Nom|NumType=Card	5	nummod:gov	_	_
5	радиостанций	РАДИОСТАНЦИЯ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	3	nsubj	_	_
6	в	В	ADP	IN	_	8	case	_	_
7	FM	FM	PROPN	NNP	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	8	compound	_	_
8	диапазоне	ДИАПАЗОН	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	3	obl	_	_

~~~


