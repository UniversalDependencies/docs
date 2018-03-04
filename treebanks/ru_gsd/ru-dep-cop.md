---
layout: base
title:  'Statistics of cop in UD_Russian'
udver: '2'
---

## Treebank Statistics: UD_Russian: Relations: `cop`

This relation is universal.

392 nodes (0%) are attached to their parents as `cop`.

302 instances of `cop` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.33928571428571.

The following 11 pairs of parts of speech are connected with `cop`: <tt><a href="ru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru-pos-AUX.html">AUX</a></tt> (258; 66% instances), <tt><a href="ru-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru-pos-AUX.html">AUX</a></tt> (96; 24% instances), <tt><a href="ru-pos-NUM.html">NUM</a></tt>-<tt><a href="ru-pos-AUX.html">AUX</a></tt> (19; 5% instances), <tt><a href="ru-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru-pos-AUX.html">AUX</a></tt> (6; 2% instances), <tt><a href="ru-pos-ADV.html">ADV</a></tt>-<tt><a href="ru-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="ru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="ru-pos-DET.html">DET</a></tt>-<tt><a href="ru-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="ru-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ru-pos-DET.html">DET</a></tt>-<tt><a href="ru-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ru-pos-PRON.html">PRON</a></tt>-<tt><a href="ru-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ru-pos-SYM.html">SYM</a></tt>-<tt><a href="ru-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 cop	color:blue
1	Величиной	ВЕЛИЧИНА	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	,	_	3	punct	_	_
3	обратной	ОБРАТНЫЙ	ADJ	JJL	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	1	amod	_	_
4	КПИ	КПИ	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	3	obj	_	SpaceAfter=No
5	,	,	PUNCT	,	_	3	punct	_	_
6	является	ЯВЛЯТЬСЯ	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	1	cop	_	_
7	энергоемкость	ЭНЕРГОЕМКОСТЬ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	1	nsubj	_	SpaceAfter=No
8	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 cop	color:blue
1	Правый	ПРАВЫЙ	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	amod	_	_
2	фланг	ФЛАНГ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
3	был	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	5	cop	_	_
4	также	ТАКЖЕ	PART	IN	_	5	advmod	_	_
5	уязвим	УЯЗВИМЫЙ	ADJ	JJH	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Variant=Short	0	root	_	SpaceAfter=No
6	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cop	color:blue
1	Был	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	2	cop	_	_
2	одним	ОДИН	NUM	CD	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|NumType=Card	0	root	_	_
3	из	ИЗ	ADP	IN	_	4	case	_	_
4	организаторов	ОРГАНИЗАТОР	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	2	nmod	_	ToDo=nmod
5	борьбы	БОРЬБА	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	_
6	с	С	ADP	IN	_	7	case	_	_
7	филлоксерой	ФИЛЛОКСЕРА	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Fem|Number=Sing	5	nmod	_	SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


