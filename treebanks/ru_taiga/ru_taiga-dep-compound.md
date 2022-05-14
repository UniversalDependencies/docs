---
layout: base
title:  'Statistics of compound in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `compound`

This relation is universal.

179 nodes (0%) are attached to their parents as `compound`.

179 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.15083798882682.

The following 17 pairs of parts of speech are connected with `compound`: <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (51; 28% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (42; 23% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (16; 9% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (12; 7% instances), <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_taiga-pos-SYM.html">SYM</a></tt> (11; 6% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (11; 6% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (10; 6% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt> (6; 3% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="ru_taiga-pos-X.html">X</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (3; 2% instances), <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (1; 1% instances).


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
10	.	.	PUNCT	_	_	1	punct	_	_~

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 compound	color:blue
1	От	от	ADP	_	_	2	case	_	_
2	радикал-демократов	радикал-демократ	NOUN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	0	root	_	_
3	через	через	ADP	_	_	4	case	_	_
4	Едро	Едро	PROPN	_	Animacy=Inan|Case=Acc|Gender=Neut|NameType=Com|Number=Sing	2	obl	_	_
5	к	к	ADP	_	_	8	case	_	_
6	радикал	радикал	X	_	_	8	compound	_	_
7	же	же	PART	_	_	6	advmod	_	_
8	нацистам	нацист	NOUN	_	Animacy=Anim|Case=Dat|Gender=Masc|Number=Plur	2	obl	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_~

~~~


