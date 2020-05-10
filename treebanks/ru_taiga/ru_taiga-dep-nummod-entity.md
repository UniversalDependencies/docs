---
layout: base
title:  'Statistics of nummod:entity in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `nummod:entity`

This relation is a language-specific subtype of <tt><a href="ru_taiga-dep-nummod.html">nummod</a></tt>.
There are also 1 other language-specific subtypes of `nummod`: <tt><a href="ru_taiga-dep-nummod-gov.html">nummod:gov</a></tt>.

25 nodes (0%) are attached to their parents as `nummod:entity`.

24 instances of `nummod:entity` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.16.

The following 4 pairs of parts of speech are connected with `nummod:entity`: <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (14; 56% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (8; 32% instances), <tt><a href="ru_taiga-pos-SYM.html">SYM</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (2; 8% instances), <tt><a href="ru_taiga-pos-X.html">X</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nummod:entity	color:blue
1	Все	весь	DET	_	Case=Nom|Number=Plur	2	det	_	_
2	вопросы	вопрос	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	0	root	_	_
3	по	по	ADP	_	_	4	case	_	_
4	телефону	телефон	NOUN	_	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	2	orphan	_	_
5	87778830353	87778830353	NUM	_	NumForm=Digit	4	nummod:entity	_	SpaceAfter=No
6	!	!	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nummod:entity	color:blue
1	1	1	NUM	_	NumForm=Digit	0	root	_	SpaceAfter=No
2	.	.	PUNCT	_	_	1	punct	_	_
3	Игровая	игровой	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	_
4	приставка	приставка	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	1	parataxis	_	_
5	Sony	Sony	PROPN	_	Foreign=Yes	4	appos	_	_
6	PlayStation	Playstation	PROPN	_	Foreign=Yes	5	flat:foreign	_	_
7	4	4	NUM	_	NumForm=Digit	5	nummod:entity	_	_
8	500	500	NUM	_	NumForm=Digit	9	nummod:gov	_	SpaceAfter=No
9	GB	GB	PROPN	_	Foreign=Yes	5	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nummod:entity	color:blue
1	Билет	билет	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
2	№	№	SYM	_	_	1	appos	_	_
3	13	13	NUM	_	NumForm=Digit	2	nummod:entity	_	_

~~~


