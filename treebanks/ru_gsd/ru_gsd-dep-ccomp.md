---
layout: base
title:  'Statistics of ccomp in UD_Russian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Russian-GSD: Relations: `ccomp`

This relation is universal.

246 nodes (0%) are attached to their parents as `ccomp`.

241 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.65040650406504.

The following 16 pairs of parts of speech are connected with `ccomp`: <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt> (166; 67% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt> (19; 8% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (19; 8% instances), <tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt> (17; 7% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt> (10; 4% instances), <tt><a href="ru_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="ru_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="ru_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 ccomp	color:blue
1	Они	они	PRON	PRP	Case=Nom|Number=Plur|Person=3	2	nsubj	_	_
2	сказали	сказать	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	мне	я	PRON	PRP	Case=Dat|Number=Sing|Person=1	2	iobj	_	SpaceAfter=No
4	,	,	PUNCT	,	_	8	punct	_	_
5	что	что	SCONJ	IN	_	8	mark	_	_
6	им	они	PRON	PRP	Case=Dat|Number=Plur|Person=3	8	iobj	_	_
7	очень	очень	ADV	RB	Degree=Pos	8	advmod	_	_
8	понравилось	понравиться	VERB	VBC	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	2	ccomp	_	_
9	мое	мой	DET	PRP$	Case=Nom|Gender=Neut|Number=Sing	10	det	_	_
10	выступление	выступление	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	8	nsubj	_	SpaceAfter=No
11	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 ccomp	color:blue
1	Он	он	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
2	утверждал	утверждать	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	,	_	2	punct	_	_
4	что	что	SCONJ	IN	_	9	mark	_	_
5	по	по	ADP	IN	_	7	case	_	_
6	своей	свой	DET	PRP$	Case=Dat|Gender=Fem|Number=Sing	7	det	_	_
7	природе	природа	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	9	obl	_	_
8	вирус	вирус	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	_
9	жидкий	жидкий	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	ccomp	_	SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 17 ccomp	color:blue
1	Когда	когда	SCONJ	IN	_	3	mark	_	_
2	Эд	Эд	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
3	выходит	выходить	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	advcl	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	один	один	NUM	CD	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|NumType=Card	6	nummod	_	_
6	оператор	оператор	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
7	остается	оставаться	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
8	с	с	ADP	IN	_	9	case	_	_
9	Шэри	Шэри	PROPN	NNP	Animacy=Anim|Case=Ins|Gender=Fem|Number=Sing	7	obl	_	SpaceAfter=No
10	,	,	PUNCT	,	_	11	punct	_	_
11	говоря	говорить	VERB	VBG	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	7	advcl	_	SpaceAfter=No
12	,	,	PUNCT	,	_	17	punct	_	_
13	что	что	SCONJ	IN	_	17	mark	_	_
14	это	это	PRON	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	17	nsubj	_	_
15	--	--	PUNCT	--	_	17	punct	_	_
16	новая	новый	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	17	amod	_	_
17	идея	идея	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	11	ccomp	_	_
18	продюсеров	продюсер	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	17	nmod	_	SpaceAfter=No
19	.	.	PUNCT	.	_	7	punct	_	_

~~~


