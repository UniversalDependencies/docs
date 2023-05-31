---
layout: base
title:  'Statistics of iobj in UD_Russian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Russian-GSD: Relations: `iobj`

This relation is universal.

667 nodes (1%) are attached to their parents as `iobj`.

536 instances of `iobj` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 18 pairs of parts of speech are connected with `iobj`: <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (392; 59% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-PRON.html">PRON</a></tt> (133; 20% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt> (53; 8% instances), <tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (31; 5% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (23; 3% instances), <tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_gsd-pos-PRON.html">PRON</a></tt> (8; 1% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-DET.html">DET</a></tt> (7; 1% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt> (4; 1% instances), <tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="ru_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 iobj	color:blue
1	Жена	жена	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
2	Дзодзуашвили	Дзодзуашвили	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	_
3	приходится	приходиться	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
4	тетей	тетя	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Fem|Number=Sing	3	xcomp	_	_
5	жене	жена	NOUN	NN	Animacy=Anim|Case=Dat|Gender=Fem|Number=Sing	3	iobj	_	_
6	Владимира	Владимир	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
7	Гуцаева	Гуцаев	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	6	flat:name	_	SpaceAfter=No
8	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 iobj	color:blue
1	Она	она	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3	2	nsubj	_	_
2	опустила	опустить	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	в	в	ADP	IN	_	4	case	_	_
4	яму	яма	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	2	obl	_	_
5	палку	палка	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	2	obl	_	_
6	и	и	CCONJ	CC	_	7	cc	_	_
7	помогла	помочь	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	_
8	Жилину	Жилин	PROPN	NNP	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	7	iobj	_	_
9	выбраться	выбраться	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Mid	7	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	_	_

~~~


