---
layout: base
title:  'Statistics of nummod:gov in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `nummod:gov`

This relation is a language-specific subtype of <tt><a href="ru_pud-dep-nummod.html">nummod</a></tt>.
There are also 1 other language-specific subtypes of `nummod`: <tt><a href="ru_pud-dep-nummod-entity.html">nummod:entity</a></tt>.

73 nodes (0%) are attached to their parents as `nummod:gov`.

72 instances of `nummod:gov` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.20547945205479.

The following 5 pairs of parts of speech are connected with `nummod:gov`: <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-NUM.html">NUM</a></tt> (66; 90% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-NUM.html">NUM</a></tt> (2; 3% instances), <tt><a href="ru_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod:gov	color:blue
1	Олдрин	Олдрин	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
2	был	быть	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	_	_
3	женат	женатый	ADJ	JJH	Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	0	root	_	_
4	три	три	NUM	CD	Animacy=Inan|Case=Acc	5	nummod:gov	_	_
5	раза	раз	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	3	obl	_	SpaceAfter=No
6	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod:gov	color:blue
1	В	в	ADP	IN	_	2	case	_	_
2	ответ	ответ	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obl	_	_
3	Uber	Uber	PROPN	NNP	Foreign=Yes	4	nsubj	_	_
4	получит	получить	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	_
5	инвестиции	инвестиция	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	4	obj	_	_
6	на	на	ADP	IN	_	7	case	_	_
7	сумму	сумма	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	5	nmod	_	_
8	миллиард	миллиард	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	9	nummod:gov	_	_
9	долларов	доллар	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	7	nmod	_	_
10	и	и	CCONJ	CC	_	11	cc	_	_
11	место	место	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	5	conj	_	_
12	в	в	ADP	IN	_	13	case	_	_
13	совете	совет	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	11	nmod	_	_
14	директоров	директор	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	13	nmod	_	_
15	китайской	китайский	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	16	amod	_	_
16	компании	компания	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	14	nmod	_	SpaceAfter=No
17	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 nummod:gov	color:blue
1	С	с	ADP	IN	_	3	case	_	_
2	другой	другой	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	_
3	стороны	сторона	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	14	parataxis	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	отношения	отношение	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	14	nsubj	_	_
6	г-жи	г-жа	NOUN	NN	Abbr=Yes|Animacy=Anim|Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	_
7	Клинтон	Клинтон	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Fem|Number=Sing	6	flat:name	_	_
8	с	с	ADP	IN	_	9	case	_	_
9	континентом	континент	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	5	nmod	_	_
10	за	за	ADP	IN	_	13	case	_	_
11	последние	последний	ADJ	JJ	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	12	amod	_	_
12	двадцать	двадцать	NUM	CD	Case=Acc	13	nummod	_	_
13	лет	год	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	14	obl	_	_
14	оставляют	оставлять	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
15	желать	желать	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	14	xcomp	_	_
16	много	много	NUM	RB	Animacy=Inan|Case=Acc	17	nummod:gov	_	_
17	лучшего	лучший	ADJ	JJS	Case=Gen|Degree=Sup|Gender=Masc|Number=Sing	15	obj	_	SpaceAfter=No
18	.	.	PUNCT	.	_	14	punct	_	_

~~~


