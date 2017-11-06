---
layout: base
title:  'Statistics of iobj in UD_Russian'
udver: '2'
---

## Treebank Statistics: UD_Russian: Relations: `iobj`

This relation is universal.

667 nodes (1%) are attached to their parents as `iobj`.

534 instances of `iobj` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.00749625187406.

The following 21 pairs of parts of speech are connected with `iobj`: <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-NOUN.html">NOUN</a></tt> (367; 55% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-PRON.html">PRON</a></tt> (138; 21% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-PROPN.html">PROPN</a></tt> (54; 8% instances), <tt><a href="ru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru-pos-NOUN.html">NOUN</a></tt> (35; 5% instances), <tt><a href="ru-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru-pos-NOUN.html">NOUN</a></tt> (30; 4% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-DET.html">DET</a></tt> (7; 1% instances), <tt><a href="ru-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru-pos-PRON.html">PRON</a></tt> (6; 1% instances), <tt><a href="ru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru-pos-PROPN.html">PROPN</a></tt> (6; 1% instances), <tt><a href="ru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="ru-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="ru-pos-ADV.html">ADV</a></tt>-<tt><a href="ru-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ru-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ru-pos-ADP.html">ADP</a></tt>-<tt><a href="ru-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru-pos-ADV.html">ADV</a></tt>-<tt><a href="ru-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ru-pos-AUX.html">AUX</a></tt>-<tt><a href="ru-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 iobj	color:blue
1	Жена	ЖЕНА	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
2	Дзодзуашвили	ДЗОДЗУАШВИЛИ	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	_
3	приходится	ПРИХОДИТЬСЯ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
4	тетей	ТЕТЯ	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Fem|Number=Sing	3	advmod	_	_
5	жене	ЖЕНА	NOUN	NN	Animacy=Anim|Case=Dat|Gender=Fem|Number=Sing	3	iobj	_	_
6	Владимира	ВЛАДИМИР	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
7	Гуцаева	ГУЦАЕВ	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	6	flat	_	SpaceAfter=No
8	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 iobj	color:blue
1	Benteler	BENTELER	PROPN	NNP	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	4	iobj	_	_
2	в	В	ADP	IN	_	3	case	_	_
3	России	РОССИЯ	PROPN	NNP	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	4	obl	_	_
4	принадлежит	ПРИНАДЛЕЖАТЬ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	две	ДВА	NUM	CD	Animacy=Inan|Case=Nom|Gender=Fem|NumType=Card	6	nummod:gov	_	_
6	компании	КОМПАНИЯ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
7	:	:	PUNCT	:	_	4	punct	_	_

~~~


