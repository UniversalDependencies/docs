---
layout: base
title:  'Statistics of det in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `det`

This relation is universal.

476 nodes (2%) are attached to their parents as `det`.

461 instances of `det` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33613445378151.

The following 6 pairs of parts of speech are connected with `det`: <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (463; 97% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (6; 1% instances), <tt><a href="ru_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Эта	этот	DET	DT	Case=Nom|Gender=Fem|Number=Sing	2	det	_	_
2	структура	структура	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
3	делает	делать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	деньги	деньги	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	3	obj	_	_
5	за	за	ADP	IN	_	7	case	_	_
6	счет	счет	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	fixed	_	_
7	спонсорства	спонсорство	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	3	obl	_	_
8	и	и	CCONJ	CC	_	9	cc	_	_
9	рекламы	реклама	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	7	conj	_	SpaceAfter=No
10	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 det	color:blue
1	Коренные	коренной	ADJ	JJ	Case=Nom|Degree=Pos|Number=Plur	2	amod	_	_
2	американцы	американец	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	9	nsubj	_	_
3	по	по	ADP	IN	_	8	case	_	_
4	всей	весь	DET	DT	Case=Dat|Gender=Fem|Number=Sing	8	det	_	_
5	Северной	северный	ADJ	JJ	Case=Dat|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	Proper=True
6	и	и	CCONJ	CC	_	7	cc	_	_
7	Южной	южный	ADJ	JJ	Case=Dat|Degree=Pos|Gender=Fem|Number=Sing	5	conj	_	Proper=True
8	Америке	Америка	PROPN	NNP	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	2	nmod	_	_
9	использовали	использовать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
10	его	он	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3	9	obj	_	_
11	как	как	SCONJ	IN	_	13	case	_	_
12	основное	основной	ADJ	JJ	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	13	amod	_	_
13	лекарство	лекарство	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	9	obl	_	SpaceAfter=No
14	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	Чтобы	чтобы	SCONJ	IN	_	2	mark	_	_
2	уйти	уйти	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Act	8	advcl	_	_
3	от	от	ADP	IN	_	5	case	_	_
4	всего	весь	DET	DT	Case=Gen|Gender=Neut|Number=Sing	5	det	_	_
5	этого	это	PRON	DT	Case=Gen|Gender=Neut|Number=Sing	2	obl	_	SpaceAfter=No
6	,	,	PUNCT	,	_	2	punct	_	_
7	Реми	Реми	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	_
8	жил	жить	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
9	в	в	ADP	IN	_	10	case	_	_
10	Швейцарии	Швейцария	PROPN	NNP	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	8	obl	_	_
11	большую	большой	ADJ	JJ	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	12	amod	_	_
12	часть	часть	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	8	obl	_	_
13	лета	лето	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	12	nmod	_	_
14	1947	1947	ADJ	ORD	_	15	amod	_	_
15	года	год	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	13	nmod	_	SpaceAfter=No
16	.	.	PUNCT	.	_	8	punct	_	_

~~~


