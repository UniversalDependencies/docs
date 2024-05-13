---
layout: base
title:  'Statistics of aux in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="ru_pud-dep-aux-pass.html">aux:pass</a></tt>.

42 nodes (0%) are attached to their parents as `aux`.

27 instances of `aux` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.52380952380952.

The following 6 pairs of parts of speech are connected with `aux`: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (32; 76% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (5; 12% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (2; 5% instances), <tt><a href="ru_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="ru_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux	color:blue
1	Никто	никто	PRON	DT	Case=Nom	3	nsubj	_	_
2	не	не	PART	NEG	Polarity=Neg	3	advmod	_	_
3	знает	знать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	,	_	7	punct	_	_
5	как	как	ADV	WRB	Degree=Pos	7	advmod	_	_
6	бы	бы	AUX	RP	Mood=Cnd	7	aux	_	_
7	работали	работать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	3	ccomp	_	_
8	вместе	вместе	ADV	RB	Degree=Pos	7	advmod	_	_
9	эти	этот	DET	DT	Case=Nom|Number=Plur	11	det	_	_
10	два	два	NUM	CD	Case=Nom|Gender=Masc	11	nummod:gov	_	_
11	драматурга	драматург	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	7	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 14 aux	color:blue
1	Большая	большой	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	2	amod	_	_
2	высота	высота	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	_
3	над	над	ADP	IN	_	4	case	_	_
4	уровнем	уровень	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	2	nmod	_	_
5	моря	море	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	4	nmod	_	_
6	делает	делать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	климат	климат	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	6	obj	_	_
8	более	более	ADV	RBR	Degree=Cmp	9	advmod	_	_
9	прохладным	прохладный	ADJ	JJ	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	6	xcomp	_	SpaceAfter=No
10	,	,	PUNCT	,	_	16	punct	_	_
11	иначе	иначе	CCONJ	CC	_	16	cc	_	_
12	он	он	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	16	nsubj	_	_
13	был	быть	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	16	cop	_	_
14	бы	бы	AUX	RP	Mood=Cnd	16	aux	_	_
15	очень	очень	ADV	RB	Degree=Pos	16	advmod	_	_
16	жарким	жаркий	ADJ	JJ	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	6	conj	_	SpaceAfter=No
17	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 aux	color:blue
1	Какими	какой	DET	WDT	Case=Ins|Number=Plur	9	advcl	_	_
2	бы	бы	AUX	RP	Mood=Cnd	1	aux	_	_
3	ни	ни	PART	NEG	Polarity=Neg	1	advmod	_	_
4	были	быть	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	1	cop	_	_
5	правила	правило	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	1	nsubj	_	SpaceAfter=No
6	,	,	PUNCT	,	_	1	punct	_	_
7	бои	бой	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	9	nsubj	_	_
8	часто	часто	ADV	RB	Degree=Pos	9	advmod	_	_
9	приводили	приводить	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
10	к	к	ADP	IN	_	11	case	_	_
11	гибели	гибель	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	9	obl	_	_
12	одного	один	NUM	CD	Case=Gen|Gender=Masc|Number=Sing	9	iobj	_	_
13	из	из	ADP	IN	_	14	case	_	_
14	жеребцов	жеребец	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	12	nmod	_	SpaceAfter=No
15	.	.	PUNCT	.	_	9	punct	_	_

~~~


