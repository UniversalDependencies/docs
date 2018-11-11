---
layout: base
title:  'Statistics of det in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `det`

This relation is universal.

472 nodes (2%) are attached to their parents as `det`.

468 instances of `det` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32627118644068.

The following 9 pairs of parts of speech are connected with `det`: <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (456; 97% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (5; 1% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-X.html">X</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Эта	этот	DET	DT	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	2	det	_	_
2	структура	структура	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
3	делает	делать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	деньги	деньги	NOUN	NN	Animacy=Inan|Case=Acc|Number=Plur	3	obj	_	_
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
1	Коренные	коренной	ADJ	JJ	Animacy=Anim|Case=Nom|Number=Plur|Variant=Long	2	amod	_	_
2	американцы	американец	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	9	nsubj	_	_
3	по	по	ADP	IN	_	8	case	_	_
4	всей	весь	DET	DT	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	8	det	_	_
5	Северной	северный	ADJ	JJ	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing|Variant=Long	8	amod	_	Proper=True
6	и	и	CCONJ	CC	_	7	cc	_	_
7	Южной	южный	ADJ	JJ	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing|Variant=Long	5	conj	_	Proper=True
8	Америке	Америка	PROPN	NNP	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	2	nmod	_	_
9	использовали	использовать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past	0	root	_	_
10	его	он	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3	9	obj	_	_
11	как	как	SCONJ	IN	_	13	case	_	_
12	основное	основной	ADJ	JJ	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|Variant=Long	13	amod	_	_
13	лекарство	лекарство	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	9	nmod	_	SpaceAfter=No
14	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	Настоящая	настоящий	ADJ	JJ	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|Variant=Long	2	amod	_	_
2	теология	теология	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	7	nsubj:pass	_	SpaceAfter=No
3	,	,	PUNCT	,	_	5	punct	_	_
4	таким	таким	ADJ	JJ	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Variant=Long	5	det	_	_
5	образом	образом	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	7	parataxis	_	SpaceAfter=No
6	,	,	PUNCT	,	_	5	punct	_	_
7	должна	должен	ADJ	JJ	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|Variant=Short	0	root	_	_
8	быть	быть	AUX	VB	Aspect=Imp	9	aux:pass	_	_
9	создана	создать	VERB	VBN	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|Variant=Short|Voice=Pass	7	xcomp	_	_
10	с	с	ADP	IN	_	11	case	_	_
11	учетом	учет	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	9	obl	_	_
12	ее	ее	DET	PRP$	Case=Gen|Gender[psor]=Fem|Number[psor]=Sing|Person=3|PronType=Prs	14	det	_	_
13	будущей	будущий	ADJ	JJ	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Variant=Long	14	amod	_	_
14	цели	цель	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	11	nmod	_	SpaceAfter=No
15	.	.	PUNCT	.	_	7	punct	_	_

~~~


