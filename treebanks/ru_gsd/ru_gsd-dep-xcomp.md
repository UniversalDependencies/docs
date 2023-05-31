---
layout: base
title:  'Statistics of xcomp in UD_Russian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Russian-GSD: Relations: `xcomp`

This relation is universal.

1007 nodes (1%) are attached to their parents as `xcomp`.

914 instances of `xcomp` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.9364448857994.

The following 12 pairs of parts of speech are connected with `xcomp`: <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt> (543; 54% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (273; 27% instances), <tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt> (87; 9% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt> (63; 6% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt> (15; 1% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt> (10; 1% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-X.html">X</a></tt> (7; 1% instances), <tt><a href="ru_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Хозяин	хозяин	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	может	мочь	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	устроить	устроить	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Act	2	xcomp	_	_
4	своего	свой	DET	PRP$	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	5	det	_	_
5	питомца	питомец	NOUN	NN	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	3	obj	_	_
6	на	на	ADP	IN	_	7	case	_	_
7	работу	работа	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	3	obl	_	SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	Барыкина	Барыкин	PROPN	NNP	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	3	obj	_	_
2	иногда	иногда	ADV	RB	Degree=Pos	3	advmod	_	_
3	называют	называть	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	``	``	PUNCT	``	_	5	punct	_	SpaceAfter=No
5	отцом	отец	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	3	xcomp	_	_
6	русского	русский	ADJ	JJL	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	7	amod	_	_
7	регги	регги	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
8	&#39;&#39;	&#39;&#39;	PUNCT	&#39;&#39;	_	5	punct	_	SpaceAfter=No
9	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 xcomp	color:blue
1	И	и	CCONJ	CC	_	7	cc	_	_
2	в	в	ADP	IN	_	5	case	_	_
3	то	тот	DET	DT	Case=Acc|Gender=Neut|Number=Sing	5	det	_	_
4	же	же	PART	UH	_	3	advmod	_	_
5	время	время	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	7	obl	_	_
6	малыш	малыш	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
7	должен	должен	ADJ	JJH	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	0	root	_	_
8	как	как	ADV	WRB	_	10	advmod	_	_
9	будто	будто	PART	IN	_	8	fixed	_	_
10	идти	идти	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	7	xcomp	_	_
11	к	к	ADP	IN	_	12	case	_	_
12	папе	папа	NOUN	NN	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	10	obl	_	SpaceAfter=No
13	,	,	PUNCT	,	_	15	punct	_	_
14	к	к	ADP	IN	_	15	case	_	_
15	кораблю	корабль	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	12	conj	_	SpaceAfter=No
16	.	.	PUNCT	.	_	7	punct	_	_

~~~


