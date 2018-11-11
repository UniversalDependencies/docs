---
layout: base
title:  'Statistics of root in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `root`

This relation is universal.

1000 nodes (5%) are attached to their parents as `root`.

1000 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.224.

The following 10 pairs of parts of speech are connected with `root`: -<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (869; 87% instances), -<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (58; 6% instances), -<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (43; 4% instances), -<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (10; 1% instances), -<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (7; 1% instances), -<tt><a href="ru_pud-pos-NUM.html">NUM</a></tt> (6; 1% instances), -<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (3; 0% instances), -<tt><a href="ru_pud-pos-PRON.html">PRON</a></tt> (2; 0% instances), -<tt><a href="ru_pud-pos-PART.html">PART</a></tt> (1; 0% instances), -<tt><a href="ru_pud-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Нужно	нужно	VERB	PRED	_	0	root	_	_
2	провести	провести	VERB	VB	Aspect=Perf	1	csubj	_	_
3	параллель	параллель	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	2	obj	_	_
4	между	между	ADP	IN	_	5	case	_	_
5	играми	игра	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Plur	2	obl	_	_
6	и	и	CCONJ	CC	_	9	cc	_	_
7	нашей	наш	DET	PRP$	Case=Ins|Gender=Fem|Number=Sing|Number[psor]=Plur|Person=1|PronType=Prs	9	det	_	_
8	повседневной	повседневный	ADJ	JJ	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing|Variant=Long	9	amod	_	_
9	жизнью	жизнь	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	5	conj	_	SpaceAfter=No
10	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 9 root	color:blue
1	Максимально	максимально	ADV	RB	_	2	advmod	_	_
2	допустимая	допустимый	ADJ	JJ	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|Variant=Long	3	amod	_	_
3	сумма	сумма	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	_
4	на	на	ADP	IN	_	6	case	_	_
5	одного	один	NUM	CD	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	6	nummod	_	_
6	человека	человек	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
7	—	—	PUNCT	-	_	9	punct	_	OrigForm=--
8	5000	5000	NUM	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	9	nummod	_	_
9	долларов	доллар	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	0	root	_	_
10	США	США	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	9	nmod	_	SpaceAfter=No
11	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 6 root	color:blue
1	Возможно	возможно	ADV	PRED	_	6	parataxis	_	SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	_
3	дресс-код	дресс-код	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
4	был	быть	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	6	aux	_	_
5	слишком	слишком	ADV	RB	_	6	advmod	_	_
6	пуританским	пуританский	ADJ	JJ	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Variant=Long	0	root	_	SpaceAfter=No
7	.	.	PUNCT	.	_	6	punct	_	_

~~~


