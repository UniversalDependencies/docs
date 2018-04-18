---
layout: base
title:  'Statistics of amod in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `amod`

This relation is universal.

1127 nodes (5%) are attached to their parents as `amod`.

1057 instances of `amod` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.15261756876664.

The following 14 pairs of parts of speech are connected with `amod`: <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (1006; 89% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (38; 3% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (30; 3% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (20; 2% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (13; 1% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="ru_taiga-pos-DET.html">DET</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ru_taiga-pos-ADP.html">ADP</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-X.html">X</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Чудесная	чудесный	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	2	amod	_	_
2	бутылочка	бутылочка	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
3	в	в	ADP	_	_	4	case	_	_
4	наличии	наличие	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	2	nmod	_	_
5	и	и	CCONJ	_	_	7	cc	_	_
6	под	под	ADP	_	_	7	case	_	_
7	заказ	заказ	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	conj	_	SpaceAfter=No
8	)	)	SYM	_	_	2	discourse	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 amod	color:blue
1	Это	это	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	2	nsubj	_	_
2	памятник	памятник	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
3	82	82	NUM	_	_	5	nummod	_	_
4	уничтоженным	уничтожить	VERB	_	Aspect=Perf|Case=Dat|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	5	amod	_	_
5	детям	ребенок	NOUN	_	Animacy=Anim|Case=Dat|Gender=Masc|Number=Plur	2	nmod	_	_
6	(	(	PUNCT	_	_	9	punct	_	SpaceAfter=No
7	в	в	ADP	_	_	9	case	_	_
8	натуральную	натуральный	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	9	amod	_	_
9	величину	величина	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	2	nmod	_	SpaceAfter=No
10	.)	.)	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 amod	color:blue
1	@Zhirinovskiy	@Zhirinovskiy	PROPN	_	_	3	nsubj	_	_
2	сам	сам	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	1	amod	_	_
3	проверил	проверить	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	_

~~~


