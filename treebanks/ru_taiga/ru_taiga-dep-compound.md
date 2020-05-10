---
layout: base
title:  'Statistics of compound in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `compound`

This relation is universal.

27 nodes (0%) are attached to their parents as `compound`.

27 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18518518518519.

The following 13 pairs of parts of speech are connected with `compound`: <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (8; 30% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (3; 11% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (2; 7% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-SYM.html">SYM</a></tt> (2; 7% instances), <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (2; 7% instances), <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_taiga-pos-SYM.html">SYM</a></tt> (2; 7% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (2; 7% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (1; 4% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (1; 4% instances), <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="ru_taiga-pos-X.html">X</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	-	-	PUNCT	_	_	3	punct	_	SpaceAfter=No
2	Какао	какао	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	3	compound	_	_
3	порошок	порошок	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	0	root	_	_
4	-	-	PUNCT	_	_	7	punct	_	_
5	1	1	NUM	_	NumForm=Digit	7	nummod	_	_
6	столовая	столовый	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	_
7	ложка	ложка	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	3	parataxis	_	_
8	,	,	PUNCT	_	_	3	punct	_	_

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
4	Едро	Едро	PROPN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	2	obl	_	_
5	к	к	ADP	_	_	8	case	_	_
6	радикал	радикал	X	_	_	8	compound	_	_
7	же	же	PART	_	_	6	advmod	_	_
8	нацистам	нацист	NOUN	_	Animacy=Anim|Case=Dat|Gender=Masc|Number=Plur	2	obl	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	Но	но	CCONJ	_	_	5	cc	_	_
2	это	это	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	5	nsubj	_	_
3	-	-	PUNCT	_	_	5	punct	_	_
4	ЕЛЬЦИН	Ельцин	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	5	compound	_	_
5	ЦЕНТР	центр	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
6	!!!	!!!	PUNCT	_	_	5	punct	_	_

~~~


