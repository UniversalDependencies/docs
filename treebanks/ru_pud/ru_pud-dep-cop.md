---
layout: base
title:  'Statistics of cop in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `cop`

This relation is universal.

83 nodes (0%) are attached to their parents as `cop`.

67 instances of `cop` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.97590361445783.

The following 11 pairs of parts of speech are connected with `cop`: <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (34; 41% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (33; 40% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (4; 5% instances), <tt><a href="ru_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (3; 4% instances), <tt><a href="ru_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (2; 2% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-X.html">X</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cop	color:blue
1	Возможно	_	ADV	PRED	_	6	discourse	_	SpaceAfter=No
2	,	_	PUNCT	,	_	1	punct	_	_
3	дресс-код	_	X	GW	_	6	nsubj	_	_
4	был	_	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	6	cop	_	_
5	слишком	_	ADV	RB	_	6	advmod	_	_
6	пуританским	_	ADJ	JJ	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Variant=Long	0	root	_	SpaceAfter=No
7	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cop	color:blue
1	Будучи	_	AUX	VBG	Aspect=Imp|VerbForm=Part	3	cop	_	_
2	страстным	_	ADJ	JJ	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|Variant=Long	3	amod	_	_
3	гитаристом	_	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|Person=3	6	advcl	_	SpaceAfter=No
4	,	_	PUNCT	,	_	3	punct	_	_
5	он	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	6	nsubj	_	_
6	играл	_	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
7	там	_	ADV	RB	_	6	advmod	_	_
8	концерт	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Person=3	6	obj	_	_
9	в	_	ADP	IN	_	12	case	_	_
10	том	_	DET	DT	Animacy=Inan|Gender=Masc|Number=Sing	12	det	_	_
11	же	_	X	UH	_	10	advmod	_	_
12	году	_	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Person=3	6	obl	_	SpaceAfter=No
13	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 cop	color:blue
1	Какими	_	DET	WDT	Animacy=Inan|Case=Ins|Number=Plur	9	advcl	_	_
2	бы	_	PART	RP	_	1	aux	_	_
3	ни	_	PART	NEG	Polarity=Neg	1	advmod	_	_
4	были	_	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past	1	cop	_	_
5	правила	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur|Person=3	1	nsubj	_	SpaceAfter=No
6	,	_	PUNCT	,	_	1	punct	_	_
7	бои	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Person=3	9	nsubj	_	_
8	часто	_	ADV	RB	_	9	advmod	_	_
9	приводили	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past	0	root	_	_
10	к	_	ADP	IN	_	11	case	_	_
11	гибели	_	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing|Person=3	9	obl	_	_
12	одного	_	NUM	CD	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	11	nmod	_	_
13	из	_	ADP	IN	_	14	case	_	_
14	жеребцов	_	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Person=3	12	nmod	_	SpaceAfter=No
15	.	_	PUNCT	.	_	9	punct	_	_

~~~


