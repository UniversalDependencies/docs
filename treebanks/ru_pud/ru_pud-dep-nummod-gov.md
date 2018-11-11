---
layout: base
title:  'Statistics of nummod:gov in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `nummod:gov`

This relation is a language-specific subtype of <tt><a href="ru_pud-dep-nummod.html">nummod</a></tt>.

50 nodes (0%) are attached to their parents as `nummod:gov`.

49 instances of `nummod:gov` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2.

The following 5 pairs of parts of speech are connected with `nummod:gov`: <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-NUM.html">NUM</a></tt> (45; 90% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="ru_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_pud-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-NUM.html">NUM</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod:gov	color:blue
1	Олдрин	Олдрин	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
2	был	быть	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	3	cop	_	_
3	женат	женатый	ADJ	JJ	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Variant=Short	0	root	_	_
4	три	три	NUM	CD	Animacy=Inan|Case=Acc	5	nummod:gov	_	_
5	раза	раз	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	3	obl	_	SpaceAfter=No
6	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod:gov	color:blue
1	Многочисленные	многочисленный	ADJ	JJ	Animacy=Inan|Case=Nom|Number=Plur|Variant=Long	3	amod	_	_
2	коренные	коренной	ADJ	JJ	Animacy=Inan|Case=Nom|Number=Plur|Variant=Long	3	amod	_	_
3	народы	народ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	_
4	оккупировали	оккупировать	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past	0	root	_	_
5	Аляску	Аляска	PROPN	NNP	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	4	obj	_	_
6	за	за	ADP	IN	_	7	case	_	_
7	тысячи	тысяча	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	8	nummod:gov	_	_
8	лет	год	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	4	obl	_	_
9	до	до	ADP	IN	_	10	case	_	_
10	прихода	приход	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	_
11	европейских	европейский	ADJ	JJ	Animacy=Inan|Case=Gen|Number=Plur|Variant=Long	12	amod	_	_
12	народов	народ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	10	nmod	_	_
13	в	в	ADP	IN	_	15	case	_	_
14	этот	этот	DET	DT	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	15	det	_	_
15	регион	регион	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	10	nmod	_	SpaceAfter=No
16	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nummod:gov	color:blue
1	По	по	ADP	IN	_	2	case	_	_
2	состоянию	состояние	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Neut|Number=Sing	8	obl	_	_
3	на	на	ADP	IN	_	4	case	_	_
4	август	август	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	2	nmod	_	_
5	2015	2015	NUM	JJ	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Variant=Long	6	amod	_	_
6	года	год	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	_
7	Кеша	Кеша	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	8	nsubj	_	_
8	обнародовала	обнародовать	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
9	довольно	довольно	ADV	RB	_	10	advmod	_	_
10	мало	мало	DET	DT	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	11	nummod:gov	_	_
11	информации	информация	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	8	obj	_	_
12	о	о	ADP	IN	_	17	case	_	_
13	ее	ее	DET	PRP$	Case=Gen|Gender[psor]=Fem|Number[psor]=Sing|Person=3|PronType=Prs	17	det	_	_
14	следующем	следовать	ADJ	JJ	Animacy=Inan|Gender=Masc|Number=Sing|Variant=Long	17	amod	_	_
15	третьем	третий	ADJ	JJ	Animacy=Inan|Gender=Masc|Number=Sing|Variant=Long	17	amod	_	_
16	студийном	студийный	ADJ	JJ	Animacy=Inan|Gender=Masc|Number=Sing|Variant=Long	17	amod	_	_
17	альбоме	альбом	NOUN	NN	Animacy=Inan|Gender=Masc|Number=Sing	11	nmod	_	SpaceAfter=No
18	.	.	PUNCT	.	_	8	punct	_	_

~~~


