---
layout: base
title:  'Statistics of root in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `root`

This relation is universal.

1000 nodes (5%) are attached to their parents as `root`.

1000 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.256.

The following 12 pairs of parts of speech are connected with `root`: -<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (868; 87% instances), -<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (52; 5% instances), -<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (45; 5% instances), -<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (12; 1% instances), -<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (7; 1% instances), -<tt><a href="ru_pud-pos-NUM.html">NUM</a></tt> (5; 1% instances), -<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (4; 0% instances), -<tt><a href="ru_pud-pos-PRON.html">PRON</a></tt> (3; 0% instances), -<tt><a href="ru_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), -<tt><a href="ru_pud-pos-PART.html">PART</a></tt> (1; 0% instances), -<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), -<tt><a href="ru_pud-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Нужно	_	VERB	PRED	_	0	root	_	_
2	провести	_	VERB	VB	Aspect=Perf	1	xcomp	_	_
3	параллель	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing|Person=3	2	obj	_	_
4	между	_	ADP	IN	_	5	case	_	_
5	играми	_	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Plur|Person=3	2	obl	_	_
6	и	_	CCONJ	CC	_	9	cc	_	_
7	нашей	_	DET	PRP$	Case=Ins|Gender=Fem|Number=Sing|Number[psor]=Plur|Person=1|PronType=Prs	9	det	_	_
8	повседневной	_	ADJ	JJ	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing|Variant=Long	9	amod	_	_
9	жизнью	_	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing|Person=3	5	conj	_	SpaceAfter=No
10	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 9 root	color:blue
1	Максимально	_	ADV	RB	_	2	advmod	_	_
2	допустимая	_	ADJ	JJ	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|Variant=Long	3	amod	_	_
3	сумма	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|Person=3	9	nsubj	_	_
4	на	_	ADP	IN	_	6	case	_	_
5	одного	_	NUM	CD	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	6	nummod	_	_
6	человека	_	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing|Person=3	3	nmod	_	_
7	—	_	PUNCT	-	_	3	punct	_	OrigForm=--
8	5000	_	NUM	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur|Person=3	9	nummod	_	_
9	долларов	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Person=3	0	root	_	_
10	США	_	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Person=3	9	nmod	_	SpaceAfter=No
11	.	_	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 6 root	color:blue
1	Возможно	_	ADV	PRED	_	6	discourse	_	SpaceAfter=No
2	,	_	PUNCT	,	_	1	punct	_	_
3	дресс-код	_	X	GW	_	6	nsubj	_	_
4	был	_	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	6	cop	_	_
5	слишком	_	ADV	RB	_	6	advmod	_	_
6	пуританским	_	ADJ	JJ	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Variant=Long	0	root	_	SpaceAfter=No
7	.	_	PUNCT	.	_	6	punct	_	_

~~~


