---
layout: base
title:  'Statistics of xcomp in UD_Russian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Russian-GSD: Relations: `xcomp`

This relation is universal.

984 nodes (1%) are attached to their parents as `xcomp`.

895 instances of `xcomp` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.94105691056911.

The following 18 pairs of parts of speech are connected with `xcomp`: <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt> (549; 56% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (139; 14% instances), <tt><a href="ru_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (118; 12% instances), <tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt> (91; 9% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt> (36; 4% instances), <tt><a href="ru_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt> (19; 2% instances), <tt><a href="ru_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt> (11; 1% instances), <tt><a href="ru_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt> (7; 1% instances), <tt><a href="ru_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Хозяин	ХОЗЯИН	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	может	МОЧЬ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	устроить	УСТРОИТЬ	VERB	VB	Aspect=Perf|VerbForm=Inf	2	xcomp	_	_
4	своего	СВОЙ	DET	PRP$	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|Reflex=Yes	5	det	_	_
5	питомца	ПИТОМЕЦ	NOUN	NN	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	3	obj	_	_
6	на	НА	ADP	IN	_	7	case	_	_
7	работу	РАБОТА	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	3	obl	_	SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	Барыкина	БАРЫКИН	PROPN	NNP	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	3	obj	_	_
2	иногда	ИНОГДА	ADV	RB	_	3	advmod	_	_
3	называют	НАЗЫВАТЬ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	``	``	PUNCT	``	_	5	punct	_	SpaceAfter=No
5	отцом	ОТЕЦ	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	3	xcomp	_	_
6	русского	РУССКИЙ	ADJ	JJL	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	7	amod	_	_
7	регги	РЕГГИ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
8	&#39;&#39;	&#39;&#39;	PUNCT	&#39;&#39;	_	5	punct	_	SpaceAfter=No
9	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 xcomp	color:blue
1	Величиной	ВЕЛИЧИНА	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	6	xcomp	_	SpaceAfter=No
2	,	,	PUNCT	,	_	3	punct	_	_
3	обратной	ОБРАТНЫЙ	ADJ	JJL	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	1	amod	_	_
4	КПИ	КПИ	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	3	obj	_	SpaceAfter=No
5	,	,	PUNCT	,	_	3	punct	_	_
6	является	ЯВЛЯТЬСЯ	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
7	энергоемкость	ЭНЕРГОЕМКОСТЬ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	SpaceAfter=No
8	.	.	PUNCT	.	_	6	punct	_	_

~~~


