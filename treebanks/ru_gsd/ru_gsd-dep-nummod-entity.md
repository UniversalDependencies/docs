---
layout: base
title:  'Statistics of nummod:entity in UD_Russian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Russian-GSD: Relations: `nummod:entity`

This relation is a language-specific subtype of <tt><a href="ru_gsd-dep-nummod.html">nummod</a></tt>.
There are also 1 other language-specific subtypes of `nummod`: <tt><a href="ru_gsd-dep-nummod-gov.html">nummod:gov</a></tt>.

151 nodes (0%) are attached to their parents as `nummod:entity`.

150 instances of `nummod:entity` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.65562913907285.

The following 5 pairs of parts of speech are connected with `nummod:entity`: <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt> (62; 41% instances), <tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt> (49; 32% instances), <tt><a href="ru_gsd-pos-X.html">X</a></tt>-<tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt> (36; 24% instances), <tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="ru_gsd-pos-PART.html">PART</a></tt>-<tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nummod:entity	color:blue
1	Имеет	иметь	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	индекс	индекс	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	1	obj	_	_
3	Хирша	Хирш	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
4	45	45	NUM	CD	Case=Nom|NumType=Card	2	nummod:entity	_	SpaceAfter=No
5	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nummod:entity	color:blue
1	Аэродром	аэродром	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	сохранил	сохранить	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	за	за	ADP	IN	_	4	case	_	_
4	собой	себя	PRON	PRP	Case=Ins|Reflex=Yes	2	obl	_	_
5	название	название	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	2	obj	_	_
6	Североморск	Североморск	PROPN	NNP	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	appos	_	SpaceAfter=No
7	-	-	PUNCT	-	_	8	punct	_	SpaceAfter=No
8	2	2	NUM	CD	_	6	nummod:entity	_	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 nummod:entity	color:blue
1	Сериал	сериал	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	продержался	продержаться	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	_
3	три	три	NUM	CD	Animacy=Inan|Case=Acc|NumType=Card	4	nummod:gov	_	_
4	сезона	сезон	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	obl	_	_
5	и	и	CCONJ	CC	_	6	cc	_	_
6	транслировался	транслироваться	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	2	conj	_	_
7	каналом	канал	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	6	obl:agent	_	_
8	Sat.	Sat.	X	FW	Foreign=Yes	7	appos	_	_
9	1	1	NUM	CD	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|NumType=Card	8	nummod:entity	_	SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	_	_

~~~


