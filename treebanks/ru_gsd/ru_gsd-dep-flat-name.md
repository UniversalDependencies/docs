---
layout: base
title:  'Statistics of flat:name in UD_Russian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Russian-GSD: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="ru_gsd-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="ru_gsd-dep-flat-foreign.html">flat:foreign</a></tt>.

1058 nodes (1%) are attached to their parents as `flat:name`.

1058 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.22873345935728.

The following 12 pairs of parts of speech are connected with `flat:name`: <tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt> (974; 92% instances), <tt><a href="ru_gsd-pos-X.html">X</a></tt>-<tt><a href="ru_gsd-pos-X.html">X</a></tt> (36; 3% instances), <tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_gsd-pos-PART.html">PART</a></tt> (27; 3% instances), <tt><a href="ru_gsd-pos-PART.html">PART</a></tt>-<tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt> (9; 1% instances), <tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_gsd-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ru_gsd-pos-X.html">X</a></tt>-<tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_gsd-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat:name	color:blue
1	Жена	жена	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
2	Дзодзуашвили	Дзодзуашвили	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	_
3	приходится	приходиться	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
4	тетей	тетя	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Fem|Number=Sing	3	xcomp	_	_
5	жене	жена	NOUN	NN	Animacy=Anim|Case=Dat|Gender=Fem|Number=Sing	3	iobj	_	_
6	Владимира	Владимир	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
7	Гуцаева	Гуцаев	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	6	flat:name	_	SpaceAfter=No
8	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:name	color:blue
1	Оркестром	оркестр	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	2	obj	_	_
2	дирижировал	дирижировать	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	César	César	X	FW	Foreign=Yes	2	nsubj	_	_
4	Mendoza	Mendoza	X	FW	Foreign=Yes	3	flat:name	_	_
5	Lasalle	Lasalle	X	FW	Foreign=Yes	3	flat:name	_	SpaceAfter=No
6	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 flat:name	color:blue
1	При	при	ADP	IN	_	2	case	_	_
2	графе	граф	NOUN	NN	Animacy=Anim|Case=Loc|Gender=Masc|Number=Sing	11	obl	_	_
3	Тибо	Тибо	PROPN	NNP	Animacy=Anim|Case=Loc|Gender=Masc|Number=Sing	2	appos	_	_
4	V	V	ADJ	ORD	Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	_
5	де	Де	PART	UH	_	3	flat:name	_	_
6	Блуа	Блуа	PROPN	NNP	Animacy=Anim|Case=Loc|Gender=Masc|Number=Sing	3	flat:name	_	_
7	в	в	ADP	IN	_	9	case	_	_
8	1170	1170	ADJ	ORD	Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	9	amod	_	_
9	году	год	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	11	obl	_	_
10	был	быть	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	11	aux:pass	_	_
11	возведён	возвести	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
12	донжон	донжон	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	11	nsubj:pass	_	SpaceAfter=No
13	.	.	PUNCT	.	_	11	punct	_	_

~~~


