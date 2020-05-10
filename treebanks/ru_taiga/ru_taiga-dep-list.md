---
layout: base
title:  'Statistics of list in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `list`

This relation is universal.

142 nodes (0%) are attached to their parents as `list`.

142 instances of `list` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.5985915492958.

The following 12 pairs of parts of speech are connected with `list`: <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (48; 34% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (37; 26% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (27; 19% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (18; 13% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (3; 2% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="ru_taiga-pos-X.html">X</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 list	color:blue
1	Ференц	Ференц	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
2	Лист	Лист	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	1	flat:name	_	_
3	-	-	PUNCT	_	_	1	punct	_	_
4	Транскрипции	транскрипция	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	1	list	_	_
5	для	для	ADP	_	_	6	case	_	_
6	фортепиано	фортепиано	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	4	nmod	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 list	color:blue
1	*	*	PUNCT	_	_	2	punct	_	_
2	Массон	Массон	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
3	В.	В.	PROPN	_	Abbr=Yes	2	flat:name	_	_
4	М.	М.	PROPN	_	Abbr=Yes	2	flat:name	_	_
5	Средняя	средний	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	_
6	Азия	Азия	PROPN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	2	parataxis	_	_
7	и	и	CCONJ	_	_	9	cc	_	_
8	Древний	древний	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	9	amod	_	_
9	Восток	Восток	PROPN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	conj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	6	punct	_	_
11	М.	Москва	PROPN	_	Abbr=Yes	2	list	_	SpaceAfter=No
12	—	—	PUNCT	_	_	13	punct	_	_
13	Л.	Ленинград	PROPN	_	Abbr=Yes	11	nmod	_	SpaceAfter=No
14	,	,	PUNCT	_	_	15	punct	_	_
15	1964	1964	ADJ	_	NumForm=Digit	11	list	_	SpaceAfter=No
16	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 14 list	color:blue
1	Приглашаем	приглашать	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	и	и	CCONJ	_	_	3	cc	_	_
3	ждем	ждать	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	_
4	всех	все	PRON	_	Animacy=Anim|Case=Acc|Number=Plur	3	obj	_	_
5	по	по	ADP	_	_	6	case	_	_
6	адресу	адрес	NOUN	_	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	3	obl	_	SpaceAfter=No
7	:	:	PUNCT	_	_	6	punct	_	_
8	ул.	улица	NOUN	_	Abbr=Yes	6	appos	_	_
9	Моховая	моховой	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	_
10	д.	дом	NOUN	_	Abbr=Yes	8	list	_	_
11	35	35	NUM	_	NumForm=Digit	10	nummod:entity	_	SpaceAfter=No
12	,	,	PUNCT	_	_	14	punct	_	_
13	312	312	ADJ	_	NumForm=Digit	14	amod	_	_
14	аудитория	аудитория	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	8	list	_	SpaceAfter=No
15	.	.	PUNCT	_	_	1	punct	_	_

~~~


