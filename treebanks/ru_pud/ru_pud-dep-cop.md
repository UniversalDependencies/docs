---
layout: base
title:  'Statistics of cop in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `cop`

This relation is universal.

87 nodes (0%) are attached to their parents as `cop`.

68 instances of `cop` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.05747126436782.

The following 6 pairs of parts of speech are connected with `cop`: <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (40; 46% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (32; 37% instances), <tt><a href="ru_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (5; 6% instances), <tt><a href="ru_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (4; 5% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (3; 3% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (3; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cop	color:blue
1	Будучи	быть	AUX	VBG	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	3	cop	_	_
2	страстным	страстный	ADJ	JJ	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	_
3	гитаристом	гитарист	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	6	advcl	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	он	он	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	6	nsubj	_	_
6	играл	играть	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
7	там	там	ADV	RB	Degree=Pos	6	advmod	_	_
8	концерт	концерт	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	6	obj	_	_
9	в	в	ADP	IN	_	12	case	_	_
10	том	тот	DET	DT	Case=Loc|Gender=Masc|Number=Sing	12	det	_	_
11	же	же	PART	UH	_	10	advmod	_	_
12	году	год	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
13	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cop	color:blue
1	Возможно	возможно	ADV	PARENTH	Degree=Pos	6	parataxis	_	SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	_
3	дресс-код	дресс-код	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
4	был	быть	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	_	_
5	слишком	слишком	ADV	RB	Degree=Pos	6	advmod	_	_
6	пуританским	пуританский	ADJ	JJ	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
7	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 cop	color:blue
1	В	в	ADP	IN	_	3	case	_	_
2	это	этот	DET	DT	Case=Acc|Gender=Neut|Number=Sing	3	det	_	_
3	время	время	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	5	obl	_	_
4	там	там	ADV	RB	Degree=Pos	5	advmod	_	_
5	жили	жить	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	примерно	примерно	ADV	RB	Degree=Pos	7	advmod	_	_
7	сорок	сорок	NUM	CD	Case=Nom	8	nummod:gov	_	_
8	семей	семья	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	5	nsubj	_	SpaceAfter=No
9	,	,	PUNCT	,	_	13	punct	_	_
10	у	у	ADP	IN	_	11	case	_	_
11	которых	который	PRON	WDT	Case=Gen|Number=Plur	13	obl	_	_
12	было	быть	AUX	VBC	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	13	cop	_	_
13	достаточно	достаточно	ADV	RB	Degree=Pos	8	acl:relcl	_	_
14	хорошей	хороший	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	18	amod	_	_
15	пахотной	пахотный	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	18	amod	_	_
16	и	и	CCONJ	CC	_	17	cc	_	_
17	пастбищной	пастбищный	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	15	conj	_	_
18	земли	земля	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	13	nsubj	_	SpaceAfter=No
19	.	.	PUNCT	.	_	5	punct	_	_

~~~


