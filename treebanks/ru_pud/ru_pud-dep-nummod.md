---
layout: base
title:  'Statistics of nummod in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `nummod`

This relation is universal.
There are 2 language-specific subtypes of `nummod`: <tt><a href="ru_pud-dep-nummod-entity.html">nummod:entity</a></tt>, <tt><a href="ru_pud-dep-nummod-gov.html">nummod:gov</a></tt>.

183 nodes (1%) are attached to their parents as `nummod`.

177 instances of `nummod` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.27868852459016.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-NUM.html">NUM</a></tt> (142; 78% instances), <tt><a href="ru_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="ru_pud-pos-NUM.html">NUM</a></tt> (20; 11% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (16; 9% instances), <tt><a href="ru_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_pud-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod	color:blue
1	В	в	ADP	IN	_	6	advmod	_	_
2	настоящее	настоящее	ADJ	JJ	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	1	fixed	_	_
3	время	время	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	1	fixed	_	_
4	период	период	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
5	ожидания	ожидание	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	4	nmod	_	_
6	составляет	составлять	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	восемь	восемь	NUM	CD	Case=Acc	8	nummod	_	_
8	недель	неделя	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	6	obj	_	SpaceAfter=No
9	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod	color:blue
1	Такие	такой	DET	DT	Case=Nom|Number=Plur	2	det	_	_
2	города	город	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	6	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	,	_	5	punct	_	_
4	как	как	SCONJ	IN	_	5	case	_	_
5	Милан	Милан	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	nmod	_	_
6	потребляют	потреблять	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	80	80	NUM	CD	_	8	nummod	_	SpaceAfter=No
8	%	%	SYM	SYM	_	6	obj	_	_
9	воды	вода	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
10	из	из	ADP	IN	_	12	case	_	_
11	альпийского	альпийский	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	12	amod	_	_
12	стока	сток	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
13	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 nummod	color:blue
1	В	в	ADP	IN	_	3	case	_	_
2	1987	1987	ADJ	ORD	_	3	amod	_	_
3	году	год	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	9	obl	_	_
4	перевезенный	перевезти	VERB	VBNL	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	7	acl	_	_
5	по	по	ADP	IN	_	6	case	_	_
6	Дунаю	Дунай	PROPN	NNP	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	4	obl	_	_
7	объем	объем	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	_
8	продукции	продукция	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	7	nmod	_	_
9	увеличился	увеличиться	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	_
10	до	до	ADP	IN	_	12	case	_	_
11	100	100	NUM	CD	_	12	nummod	_	_
12	миллионов	миллион	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	13	nummod	_	_
13	тонн	тонна	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	9	obl	_	SpaceAfter=No
14	.	.	PUNCT	.	_	9	punct	_	_

~~~


