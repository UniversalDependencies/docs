---
layout: base
title:  'Statistics of aux in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="ru_pud-dep-aux-pass.html">aux:pass</a></tt>.

48 nodes (0%) are attached to their parents as `aux`.

34 instances of `aux` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.54166666666667.

The following 8 pairs of parts of speech are connected with `aux`: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (19; 40% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-PART.html">PART</a></tt> (17; 35% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (5; 10% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-PART.html">PART</a></tt> (2; 4% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt>-<tt><a href="ru_pud-pos-PART.html">PART</a></tt> (2; 4% instances), <tt><a href="ru_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="ru_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_pud-pos-PART.html">PART</a></tt> (1; 2% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux	color:blue
1	В	в	ADP	IN	_	4	case	_	_
2	соответствии	соответствии	NOUN	NN	Animacy=Inan|Gender=Neut|Number=Sing	1	fixed	_	_
3	с	с	ADP	IN	_	1	fixed	_	_
4	программой	программа	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	7	obl	_	_
5	она	она	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3	7	nsubj	_	_
6	будет	быть	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut	7	aux	_	_
7	говорить	говорить	VERB	VB	Aspect=Imp	0	root	_	_
8	в	в	ADP	IN	_	9	case	_	_
9	23:45	23:45	NUM	CD	Case=Acc	7	obl	_	SpaceAfter=No
10	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux	color:blue
1	Никто	никто	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
2	не	не	PART	NEG	Polarity=Neg	3	advmod	_	_
3	знает	знать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
4	,	,	PUNCT	,	_	7	punct	_	_
5	как	как	SCONJ	WRB	_	7	mark	_	_
6	бы	бы	PART	RP	_	7	aux	_	_
7	работали	работать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past	3	ccomp	_	_
8	вместе	вместе	ADV	RB	_	7	advmod	_	_
9	эти	этот	DET	DT	Animacy=Anim|Case=Nom|Number=Plur	11	det	_	_
10	два	два	NUM	CD	Animacy=Anim|Case=Nom|Gender=Masc	11	nummod	_	_
11	драматурга	драматург	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	7	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 aux	color:blue
1	Возможно	возможно	ADV	PRED	_	6	parataxis	_	SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	_
3	дресс-код	дресс-код	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
4	был	быть	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	6	aux	_	_
5	слишком	слишком	ADV	RB	_	6	advmod	_	_
6	пуританским	пуританский	ADJ	JJ	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Variant=Long	0	root	_	SpaceAfter=No
7	.	.	PUNCT	.	_	6	punct	_	_

~~~


