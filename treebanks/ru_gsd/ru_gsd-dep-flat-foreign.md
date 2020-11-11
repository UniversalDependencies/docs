---
layout: base
title:  'Statistics of flat:foreign in UD_Russian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Russian-GSD: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="ru_gsd-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="ru_gsd-dep-flat-name.html">flat:name</a></tt>.

756 nodes (1%) are attached to their parents as `flat:foreign`.

756 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.22619047619048.

The following 17 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="ru_gsd-pos-X.html">X</a></tt>-<tt><a href="ru_gsd-pos-X.html">X</a></tt> (619; 82% instances), <tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt> (60; 8% instances), <tt><a href="ru_gsd-pos-X.html">X</a></tt>-<tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt> (19; 3% instances), <tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_gsd-pos-X.html">X</a></tt> (12; 2% instances), <tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_gsd-pos-PART.html">PART</a></tt> (8; 1% instances), <tt><a href="ru_gsd-pos-PART.html">PART</a></tt>-<tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt> (7; 1% instances), <tt><a href="ru_gsd-pos-X.html">X</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (7; 1% instances), <tt><a href="ru_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_gsd-pos-ADV.html">ADV</a></tt> (5; 1% instances), <tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ru_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-PART.html">PART</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-X.html">X</a></tt>-<tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-X.html">X</a></tt>-<tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat:foreign	color:blue
1	В	в	ADP	IN	_	3	case	_	_
2	1979	1979	ADJ	ORD	Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	_
3	году	год	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	obl	_	_
4	Франке	Франке	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
5	основал	основать	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	Ars	Ars	X	FW	Foreign=Yes	5	obj	_	_
7	Electronica	Electronica	X	FW	Foreign=Yes	6	flat:foreign	_	_
8	в	в	ADP	IN	_	9	case	_	_
9	Линце	Линц	PROPN	NNP	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=No
10	,	,	PUNCT	,	_	9	punct	_	_
11	Австрия	Австрия	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	9	list	_	SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 flat:foreign	color:blue
1	Сено	Сено	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	5	nsubj	_	_
2	(	(	PUNCT	(	_	1	punct	_	SpaceAfter=No
3	)	)	PUNCT	)	_	1	punct	_	_
4	--	--	PUNCT	--	_	5	punct	_	_
5	одна	один	NUM	CD	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|NumType=Card	0	root	_	_
6	из	из	ADP	IN	_	8	case	_	_
7	45	45	NUM	CD	Case=Gen|NumType=Card	8	nummod	_	_
8	провинций	провинция	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	5	nmod	_	_
9	Буркина	Буркина	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
10	-	-	PUNCT	-	_	9	punct	_	SpaceAfter=No
11	Фасо	Фасо	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	9	flat:foreign	_	SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 16 flat:foreign	color:blue
1	Расположен	расположить	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
2	на	на	ADP	IN	_	3	case	_	_
3	границе	граница	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	1	obl	_	_
4	коммун	коммуна	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	3	nmod	_	_
5	(	(	PUNCT	(	_	6	punct	_	SpaceAfter=No
6	департамент	департамент	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	appos	_	_
7	Коррез	Коррез	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	appos	_	SpaceAfter=No
8	)	)	PUNCT	)	_	11	punct	_	_
9	и	и	CCONJ	CC	_	11	cc	_	_
10	(	(	PUNCT	(	_	11	punct	_	SpaceAfter=No
11	департамент	департамент	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	conj	_	_
12	Пюи	пюи	X	FW	Foreign=Yes	11	appos	_	SpaceAfter=No
13	-	-	PUNCT	-	_	14	punct	_	SpaceAfter=No
14	де	де	X	FW	Foreign=Yes	12	flat:foreign	_	SpaceAfter=No
15	-	-	PUNCT	-	_	16	punct	_	SpaceAfter=No
16	Дом	Дом	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	12	flat:foreign	_	SpaceAfter=No
17	)	)	PUNCT	)	_	11	punct	_	SpaceAfter=No
18	.	.	PUNCT	.	_	1	punct	_	_

~~~


