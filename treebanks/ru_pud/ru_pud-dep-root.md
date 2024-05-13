---
layout: base
title:  'Statistics of root in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `root`

This relation is universal.

1000 nodes (5%) are attached to their parents as `root`.

1000 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.222.

The following 9 pairs of parts of speech are connected with `root`: -<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (839; 84% instances), -<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (62; 6% instances), -<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (57; 6% instances), -<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (22; 2% instances), -<tt><a href="ru_pud-pos-NUM.html">NUM</a></tt> (7; 1% instances), -<tt><a href="ru_pud-pos-PRON.html">PRON</a></tt> (6; 1% instances), -<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (5; 1% instances), -<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (1; 0% instances), -<tt><a href="ru_pud-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 6 root	color:blue
1	Так	так	ADV	RB	Degree=Pos	6	advmod	_	_
2	или	или	CCONJ	CC	_	3	cc	_	_
3	иначе	иначе	ADV	RB	Degree=Pos	1	conj	_	SpaceAfter=No
4	,	,	PUNCT	,	_	1	punct	_	_
5	я	я	PRON	PRP	Case=Nom|Number=Sing|Person=1	6	nsubj	_	_
6	попаду	попасть	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	_
7	в	в	ADP	IN	_	8	case	_	_
8	тюрьму	тюрьма	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	6	obl	_	SpaceAfter=No
9	,	,	PUNCT	,	_	10	punct	_	_
10	надеюсь	надеяться	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Mid	6	conj	_	SpaceAfter=No
11	,	,	PUNCT	,	_	13	punct	_	_
12	это	это	PRON	DT	Case=Acc|Gender=Neut|Number=Sing	13	nsubj	_	_
13	стоило	стоить	VERB	VBC	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	10	ccomp	_	_
14	сделать	сделать	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Act	13	xcomp	_	SpaceAfter=No
15	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 14 root	color:blue
1	То	то	PRON	DT	Case=Nom|Gender=Neut|Number=Sing	14	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	,	_	5	punct	_	_
3	что	что	SCONJ	IN	_	5	obj	_	_
4	она	она	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3	5	nsubj	_	_
5	говорит	говорить	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl	_	_
6	и	и	CCONJ	CC	_	9	cc	_	_
7	что	что	SCONJ	IN	_	9	obj	_	_
8	она	она	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3	9	nsubj	_	_
9	делает	делать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	SpaceAfter=No
10	,	,	PUNCT	,	_	5	punct	_	_
11	на	на	ADP	IN	_	13	case	_	_
12	самом	самый	ADJ	JJ	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing	13	amod	_	_
13	деле	дело	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	14	obl	_	_
14	невероятно	невероятный	ADJ	JJH	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	0	root	_	SpaceAfter=No
15	.	.	PUNCT	.	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 9 root	color:blue
1	Максимально	максимально	ADV	RB	Degree=Pos	2	advmod	_	_
2	допустимая	допустимый	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	_
3	сумма	сумма	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	_
4	на	на	ADP	IN	_	6	case	_	_
5	одного	один	NUM	CD	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	6	nummod	_	_
6	человека	человек	NOUN	NN	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	3	nmod	_	_
7	—	—	PUNCT	-	_	9	punct	_	_
8	5000	5000	NUM	CD	_	9	nummod	_	_
9	долларов	доллар	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	0	root	_	_
10	США	США	PROPN	NNP	Abbr=Yes|Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	9	nmod	_	SpaceAfter=No
11	.	.	PUNCT	.	_	9	punct	_	_

~~~


