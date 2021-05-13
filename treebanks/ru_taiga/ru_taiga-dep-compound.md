---
layout: base
title:  'Statistics of compound in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `compound`

This relation is universal.

178 nodes (0%) are attached to their parents as `compound`.

178 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.15730337078652.

The following 17 pairs of parts of speech are connected with `compound`: <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (51; 29% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (39; 22% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (17; 10% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (12; 7% instances), <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_taiga-pos-SYM.html">SYM</a></tt> (11; 6% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (11; 6% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (10; 6% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt> (6; 3% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="ru_taiga-pos-X.html">X</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (3; 2% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	-	-	PUNCT	_	_	3	punct	_	SpaceAfter=No
2	Какао	какао	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	3	compound	_	_
3	порошок	порошок	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
4	-	-	PUNCT	_	_	7	punct	_	_
5	1	1	NUM	_	NumForm=Digit|NumType=Card	7	nummod	_	_
6	столовая	столовый	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	_
7	ложка	ложка	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	3	parataxis	_	_
8	,	,	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	5	5	NUM	_	NumForm=Digit|NumType=Card	0	root	_	SpaceAfter=No
2	.	.	PUNCT	_	_	1	punct	_	_
3	Пропуск	пропуск	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	1	parataxis	_	_
4	в	в	ADP	_	_	5	case	_	_
5	погран	пограничный	ADJ	_	Abbr=Yes	6	compound	_	_
6	зону	зона	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	3	nmod	_	_
7	(	(	PUNCT	_	_	8	punct	_	SpaceAfter=No
8	заранее	заранее	ADV	_	Degree=Pos	6	parataxis	_	SpaceAfter=No
9	)	)	PUNCT	_	_	8	punct	_	SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 compound	color:blue
1	Анти	анти	X	_	_	3	compound	_	_
2	российские	российский	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	1	goeswith	_	_
3	законы	закон	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	0	root	_	_
4	на	на	ADP	_	_	5	case	_	_
5	Украине	Украина	PROPN	_	Animacy=Inan|Case=Loc|Gender=Fem|NameType=Geo|Number=Sing	3	nmod	_	_
6	причины	причина	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	3	parataxis	_	_
7	и	и	CCONJ	_	_	8	cc	_	_
8	последствия	последствие	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	6	conj	_	_
9	22.04.2015	22.04.2015	NUM	_	NumForm=Digit	3	list	_	_

~~~


