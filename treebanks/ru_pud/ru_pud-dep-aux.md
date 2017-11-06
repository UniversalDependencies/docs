---
layout: base
title:  'Statistics of aux in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="ru_pud-dep-aux-pass.html">aux:pass</a></tt>.

40 nodes (0%) are attached to their parents as `aux`.

22 instances of `aux` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.275.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (19; 48% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-PART.html">PART</a></tt> (14; 35% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-PART.html">PART</a></tt> (2; 5% instances), <tt><a href="ru_pud-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ru_pud-pos-PART.html">PART</a></tt> (2; 5% instances), <tt><a href="ru_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_pud-pos-PART.html">PART</a></tt> (1; 3% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt>-<tt><a href="ru_pud-pos-PART.html">PART</a></tt> (1; 3% instances), <tt><a href="ru_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_pud-pos-PART.html">PART</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux	color:blue
1	В	_	ADP	IN	_	4	case	_	_
2	соответствии	_	NOUN	NN	Animacy=Inan|Gender=Neut|Number=Sing|Person=3	1	fixed	_	_
3	с	_	ADP	IN	_	1	fixed	_	_
4	программой	_	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing|Person=3	7	obl	_	_
5	она	_	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3	7	nsubj	_	_
6	будет	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut	7	aux	_	_
7	говорить	_	VERB	VB	Aspect=Imp	0	root	_	_
8	в	_	ADP	IN	_	9	case	_	_
9	23:45	_	NUM	CD	Case=Acc	7	obl	_	SpaceAfter=No
10	.	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 aux	color:blue
1	Во	_	ADP	IN	_	2	case	_	_
2	вторник	_	PROPN	NNP	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Person=3	6	obl	_	_
3	Соединенные	_	ADJ	JJ	Animacy=Inan|Case=Nom|Number=Plur|Variant=Long	4	amod	_	Proper=True
4	Штаты	_	PROPN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Person=3	6	nsubj	_	_
5	Америки	_	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Person=3	4	nmod	_	_
6	могли	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past	0	root	_	_
7	бы	_	PART	RP	_	6	aux	_	_
8	выбрать	_	VERB	VB	Aspect=Perf	6	xcomp	_	_
9	первую	_	ADJ	JJ	Animacy=Anim|Case=Acc|Gender=Fem|Number=Sing|Variant=Long	10	amod	_	_
10	женщину	_	NOUN	NN	Animacy=Anim|Case=Acc|Gender=Fem|Number=Sing|Person=3	8	obj	_	SpaceAfter=No
11	-	_	PUNCT	-	_	12	punct	_	SpaceAfter=No
12	президента	_	NOUN	NN	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|Person=3	10	appos	_	_
13	в	_	ADP	IN	_	15	case	_	_
14	своей	_	DET	PRP$	Gender=Fem|Number=Sing|Reflex=Yes	15	det	_	_
15	истории	_	NOUN	NN	Animacy=Inan|Gender=Fem|Number=Sing|Person=3	9	obl	_	SpaceAfter=No
16	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 14 aux	color:blue
1	Большая	_	ADJ	JJ	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|Variant=Long	2	amod	_	_
2	высота	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|Person=3	6	nsubj	_	_
3	над	_	ADP	IN	_	4	case	_	_
4	уровнем	_	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Person=3	2	nmod	_	_
5	моря	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|Person=3	4	nmod	_	_
6	делает	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
7	климат	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Person=3	6	obj	_	_
8	более	_	ADV	RBR	_	9	advmod	_	_
9	прохладным	_	ADJ	JJ	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Variant=Long	6	xcomp	_	SpaceAfter=No
10	,	_	PUNCT	,	_	16	punct	_	_
11	иначе	_	CCONJ	CC	_	16	cc	_	_
12	он	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	16	nsubj	_	_
13	был	_	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	16	cop	_	_
14	бы	_	PART	RP	_	16	aux	_	_
15	очень	_	ADV	RB	_	16	advmod	_	_
16	жарким	_	ADJ	JJ	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Variant=Long	6	conj	_	SpaceAfter=No
17	.	_	PUNCT	.	_	6	punct	_	_

~~~


