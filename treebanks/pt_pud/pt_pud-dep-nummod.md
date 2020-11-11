---
layout: base
title:  'Statistics of nummod in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `nummod`

This relation is universal.

201 nodes (1%) are attached to their parents as `nummod`.

161 instances of `nummod` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.12437810945274.

The following 5 pairs of parts of speech are connected with `nummod`: <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-NUM.html">NUM</a></tt> (140; 70% instances), <tt><a href="pt_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_pud-pos-NUM.html">NUM</a></tt> (40; 20% instances), <tt><a href="pt_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_pud-pos-NUM.html">NUM</a></tt> (19; 9% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod	color:blue
1	O	o	DET	DT	Gender=Masc|Number=Sing	3	det	_	_
2	atual	atual	ADJ	JJ	Gender=Masc|Number=Sing	3	amod	_	_
3	período	período	NOUN	NN	Gender=Masc|Number=Sing	6	nsubj	_	_
4	de	de	ADP	IN	_	5	case	_	_
5	espera	espera	NOUN	NN	Gender=Fem|Number=Sing	3	nmod	_	_
6	é	ser	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
7	de	de	ADP	IN	_	9	case	_	_
8	oito	_	NUM	CD	_	9	nummod	_	_
9	semanas	semana	NOUN	NN	Gender=Fem|Number=Plur	6	obl	_	SpaceAfter=No
10	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod	color:blue
1	$	_	SYM	SYM	_	0	root	_	SpaceAfter=No
2	5,000	_	NUM	CD	_	1	nummod	_	OrigForm=$5000
3	por	por	ADP	IN	_	4	case	_	_
4	pessoa	pessoa	NOUN	NN	Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
5	,	,	PUNCT	,	_	7	punct	_	_
6	o	o	DET	DT	Gender=Masc|Number=Sing	7	det	_	_
7	máximo	máximo	NOUN	NN	Gender=Masc|Number=Sing	1	appos	_	_
8	permitido	permitido	ADJ	JJ	Gender=Masc|Number=Sing	7	amod	_	SpaceAfter=No
9	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod	color:blue
1	Seu	seu	DET	DT	Gender=Masc|Number=Sing	2	det	_	_
2	orçamento	orçamento	NOUN	NN	Gender=Masc|Number=Sing	7	nsubj	_	_
3	anual	anual	ADJ	JJ	Gender=Masc|Number=Sing	2	amod	_	_
4	é	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	7	cop	_	_
5	maior	maior	ADJ	JJR	Gender=Masc|Number=Sing	7	advmod	_	_
6	que	_	ADP	IN	_	7	case	_	_
7	$	_	SYM	SYM	_	0	root	_	SpaceAfter=No
8	1.4	_	NUM	CD	_	9	nummod	_	_
9	bilhões	_	NUM	CD	Number=Plur	7	nummod	_	_
10	e	e	CCONJ	CC	_	11	cc	_	_
11	emprega	empregar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	7	conj	_	_
12	mais	mais	ADV	RBR	_	11	advmod	_	_
13	de	de	ADP	IN	_	15	case	_	_
14	6.000	_	NUM	CD	_	15	nummod	_	_
15	pessoas	pessoa	NOUN	NN	Gender=Fem|Number=Plur	12	obl	_	SpaceAfter=No
16	.	.	PUNCT	.	_	7	punct	_	_

~~~


