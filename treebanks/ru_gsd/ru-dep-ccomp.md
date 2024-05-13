---
layout: base
title:  'Statistics of ccomp in UD_Russian'
udver: '2'
---

## Treebank Statistics: UD_Russian: Relations: `ccomp`

This relation is universal.

275 nodes (0%) are attached to their parents as `ccomp`.

269 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.70181818181818.

The following 21 pairs of parts of speech are connected with `ccomp`: <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-VERB.html">VERB</a></tt> (189; 69% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-NOUN.html">NOUN</a></tt> (24; 9% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-ADJ.html">ADJ</a></tt> (19; 7% instances), <tt><a href="ru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru-pos-VERB.html">VERB</a></tt> (11; 4% instances), <tt><a href="ru-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru-pos-VERB.html">VERB</a></tt> (8; 3% instances), <tt><a href="ru-pos-PRON.html">PRON</a></tt>-<tt><a href="ru-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="ru-pos-ADV.html">ADV</a></tt>-<tt><a href="ru-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="ru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="ru-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="ru-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="ru-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ru-pos-ADP.html">ADP</a></tt>-<tt><a href="ru-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ru-pos-ADV.html">ADV</a></tt>-<tt><a href="ru-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ru-pos-ADV.html">ADV</a></tt>-<tt><a href="ru-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ru-pos-PRON.html">PRON</a></tt>-<tt><a href="ru-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ru-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 ccomp	color:blue
1	Они	ОНИ	PRON	PRP	Case=Nom|Number=Plur|Person=3	2	nsubj	_	_
2	сказали	СКАЗАТЬ	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	_
3	мне	Я	PRON	PRP	Case=Dat|Number=Sing|Person=1	2	iobj	_	SpaceAfter=No
4	,	,	PUNCT	,	_	8	punct	_	_
5	что	ЧТО	SCONJ	IN	_	8	mark	_	_
6	им	ОНИ	PRON	PRP	Case=Dat|Number=Plur|Person=3	8	iobj	_	_
7	очень	ОЧЕНЬ	ADV	RB	_	8	advmod	_	_
8	понравилось	ПОНРАВИТЬСЯ	VERB	VBC	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	2	ccomp	_	_
9	мое	МОЙ	DET	PRP$	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|Person=1	10	det	_	_
10	выступление	ВЫСТУПЛЕНИЕ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	8	nsubj	_	SpaceAfter=No
11	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 17 ccomp	color:blue
1	Когда	КОГДА	SCONJ	IN	_	3	mark	_	_
2	Эд	ЭД	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
3	выходит	ВЫХОДИТЬ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	advcl	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	один	ОДИН	NUM	CD	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|NumType=Card	6	nummod	_	_
6	оператор	ОПЕРАТОР	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
7	остается	ОСТАВАТЬСЯ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
8	с	С	ADP	IN	_	9	case	_	_
9	Шэри	ШЭРИ	PROPN	NNP	Animacy=Anim|Case=Ins|Gender=Fem|Number=Sing	7	obl	_	SpaceAfter=No
10	,	,	PUNCT	,	_	11	punct	_	_
11	говоря	ГОВОРИТЬ	VERB	VBG	Aspect=Imp|VerbForm=Conv	7	advcl	_	SpaceAfter=No
12	,	,	PUNCT	,	_	17	punct	_	_
13	что	ЧТО	SCONJ	IN	_	17	mark	_	_
14	это	ЭТО	PRON	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	17	nsubj	_	_
15	--	--	PUNCT	--	_	17	punct	_	_
16	новая	НОВЫЙ	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	17	amod	_	_
17	идея	ИДЕЯ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	11	ccomp	_	_
18	продюсеров	ПРОДЮСЕР	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	17	nmod	_	SpaceAfter=No
19	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 ccomp	color:blue
1	Он	ОН	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
2	утверждал	УТВЕРЖДАТЬ	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
3	,	,	PUNCT	,	_	2	punct	_	_
4	что	ЧТО	SCONJ	IN	_	9	mark	_	_
5	по	ПО	ADP	IN	_	7	case	_	_
6	своей	СВОЙ	DET	PRP$	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing|Reflex=Yes	7	det	_	_
7	природе	ПРИРОДА	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	9	obl	_	_
8	вирус	ВИРУС	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	_
9	жидкий	ЖИДКИЙ	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	ccomp	_	SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	_	_

~~~


