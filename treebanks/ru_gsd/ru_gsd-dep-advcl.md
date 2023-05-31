---
layout: base
title:  'Statistics of advcl in UD_Russian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Russian-GSD: Relations: `advcl`

This relation is universal.

532 nodes (1%) are attached to their parents as `advcl`.

343 instances of `advcl` (64%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.23684210526316.

The following 17 pairs of parts of speech are connected with `advcl`: <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt> (437; 82% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt> (30; 6% instances), <tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt> (29; 5% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt> (14; 3% instances), <tt><a href="ru_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_gsd-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-DET.html">DET</a></tt>-<tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-X.html">X</a></tt>-<tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-X.html">X</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 advcl	color:blue
1	Они	они	PRON	PRP	Case=Nom|Number=Plur|Person=3	2	nsubj	_	_
2	вели	вести	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	себя	себя	PRON	PRP	Case=Acc|Reflex=Yes	2	obj	_	SpaceAfter=No
4	,	,	PUNCT	,	_	2	punct	_	_
5	словно	словно	SCONJ	IN	_	8	mark	_	_
6	оба	оба	NUM	CD	Animacy=Anim|Case=Nom|Gender=Masc|NumType=Card	8	nsubj	_	_
7	не	не	PART	NEG	Polarity=Neg	8	advmod	_	_
8	ожидали	ожидать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	2	advcl	_	_
9	встретить	встретить	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Act	8	xcomp	_	_
10	друг	друг	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	9	obj	_	_
11	друга	друг	NOUN	NN	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	10	fixed	_	SpaceAfter=No
12	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 advcl	color:blue
1	Как	как	SCONJ	IN	_	2	mark	_	_
2	понял	понять	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	9	advcl	_	_
3	Деворт	Деворт	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	,	_	2	punct	_	_
5	это	это	PRON	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	9	nsubj	_	_
6	были	быть	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	9	cop	_	_
7	те	тот	DET	DT	Case=Nom|Number=Plur	9	det	_	_
8	самые	самый	ADJ	JJL	Case=Nom|Degree=Pos|Number=Plur	9	amod	_	_
9	звуки	звук	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
10	,	,	PUNCT	,	_	12	punct	_	_
11	о	о	ADP	IN	_	12	case	_	_
12	которых	который	PRON	AWP	Animacy=Inan|Case=Loc|Number=Plur	13	obl	_	_
13	писал	писать	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	9	acl:relcl	_	_
14	Лебен	Лебен	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	13	nsubj	_	_
15	в	в	ADP	IN	_	16	case	_	_
16	дневнике	дневник	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	13	obl	_	SpaceAfter=No
17	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 advcl	color:blue
1	Голова	голова	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
2	сверху	сверху	ADV	RB	Degree=Pos	4	advmod	_	_
3	не	не	PART	NEG	Polarity=Neg	4	advmod	_	_
4	видна	видный	ADJ	JJH	Degree=Pos|Gender=Fem|Number=Sing|Variant=Short	0	root	_	SpaceAfter=No
5	,	,	PUNCT	,	_	8	punct	_	_
6	так	так	SCONJ	IN	_	8	mark	_	_
7	как	как	ADV	WRB	_	6	fixed	_	_
8	прикрыта	прикрыть	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	4	advcl	_	_
9	переднеспинкой	переднеспинка	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	8	obl:agent	_	SpaceAfter=No
10	.	.	PUNCT	.	_	4	punct	_	_

~~~


