---
layout: base
title:  'Statistics of parataxis in UD_Kyrgyz-KTMU'
udver: '2'
---

## Treebank Statistics: UD_Kyrgyz-KTMU: Relations: `parataxis`

This relation is universal.

20 nodes (0%) are attached to their parents as `parataxis`.

20 instances of `parataxis` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.

The following 3 pairs of parts of speech are connected with `parataxis`: <tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt> (18; 90% instances), <tt><a href="ky_ktmu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_ktmu-pos-ADJ.html">ADJ</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 parataxis	color:blue
1	Жүр	Жүр	VERB	VB	Mood=Imp|Number=Sing|Person=3|Person[psor]=1|Polarity=Pos|Tense=Pres	5	parataxis	_	SpaceAfter=No
2	,	,	PUNCT	PCT	_	1	punct	_	_
3	шаймандарды	шайман	NOUN	NN	Case=Acc|Number=Plur|Person=3	5	obj	_	_
4	үйгө	үй	NOUN	NN	Case=Dat|Number=Sing|Person=3	5	nmod	_	_
5	алпаралы	алпар	VERB	VB	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Fut|VerbForm=Fin	0	root	_	SpaceAfter=No
6	.	.	PUNCT	PCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 parataxis	color:blue
1	Чек	Чек	NOUN	NN	Case=Nom|Number=Sing|Person=3	2	nmod	_	_
2	талап	талап	NOUN	NN	Case=Nom|Number=Sing|Person=3	3	nmod	_	_
3	кылып	кыл	VERB	VB	Polarity=Pos|Tense=Pres|VerbForm=Conv	7	parataxis	_	SpaceAfter=No
4	,	,	PUNCT	PCT	_	3	punct	_	_
5	байге	байге	NOUN	NN	Case=Nom|Number=Sing|Person=3	6	nmod	_	_
6	утуп	утуп	VERB	VB	Polarity=Pos|Tense=Pres|VerbForm=Conv	7	compound	_	_
7	ал	ал	NOUN	NN	Case=Nom|Number=Sing|Person=3	0	root	_	SpaceAfter=No
8	!	!	PUNCT	PCT	_	7	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 parataxis	color:blue
1	ШКУнун	ШКУ	PROPN	PROP	Abbr=Yes|Case=Gen|Number=Sing|Person=3	2	nmod	_	_
2	башкы	баш	NOUN	NN	Case=Acc|Number=Sing|Person=3	3	amod	_	_
3	катчысы	катчы	NOUN	NN	Case=Acc|Number=Sing|Person=3	10	nsubj	_	_
4	Ульяновсктагы	Ульяновск	PROPN	PROP	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	nmod:poss	_	_
5	кырсыкка	кырсык	NOUN	NN	Case=Dat|Number=Sing|Person=3	6	nmod	_	_
6	байланыштуу	байланыштуу	ADJ	ADJ	_	10	parataxis	_	_
7	кыргыз	кыргыз	PROPN	PROP	Case=Nom|Number=Sing|Person=3	8	nmod	_	_
8	элине	эли	NOUN	NN	Case=Nom|Number=Sing|Person=3	10	obl	_	_
9	көңүл	көңүл	NOUN	NN	Case=Nom|Number=Sing|Person=3	10	obj	_	_
10	айтты	айт	VERB	VB	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
11	.	.	PUNCT	PCT	_	10	punct	_	_

~~~


