---
layout: base
title:  'Statistics of nummod in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `nummod`

This relation is universal.

192 nodes (1%) are attached to their parents as `nummod`.

192 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.07291666666667.

The following 3 pairs of parts of speech are connected with `nummod`: <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-NUM.html">NUM</a></tt> (165; 86% instances), <tt><a href="es_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="es_pud-pos-NUM.html">NUM</a></tt> (21; 11% instances), <tt><a href="es_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="es_pud-pos-NUM.html">NUM</a></tt> (6; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	El	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	máximo	máximo	NOUN	NN	Gender=Masc|Number=Sing	4	nsubj	_	_
3	permitido	_	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	acl	_	_
4	es	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	de	de	ADP	IN	_	7	case	_	_
6	5 000	5 000	NUM	CD	Gender=Masc|NumForm=Digit|NumType=Card	7	nummod	_	_
7	$	_	NOUN	NN	Gender=Masc|Number=Plur	4	obl	_	_
8	por	por	ADP	IN	_	9	case	_	_
9	persona	persona	NOUN	NN	Gender=Fem|Number=Sing	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	Ciudades	_	NOUN	NN	Gender=Fem|Number=Plur	4	nsubj	_	_
2	como	como	ADP	IN	_	3	case	_	_
3	Milán	Milán	PROPN	NNP	Number=Sing	1	nmod	_	_
4	dependían	_	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
5	un	uno	DET	DT	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
6	80	80	NUM	CD	Gender=Masc|NumForm=Digit|NumType=Card	7	nummod	_	SpaceAfter=No
7	%	%	SYM	SYM	_	4	advmod	_	_
8	de	de	ADP	INDT	_	10	case	_	_
9	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	agua	agua	NOUN	NN	Gender=Fem|Number=Sing	4	obl	_	_
11	alpina	_	ADJ	JJ	Gender=Fem|Number=Sing	10	amod	_	SpaceAfter=No|Proper=True
12	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod	color:blue
1	El	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	presupuesto	presupuesto	NOUN	NN	Gender=Masc|Number=Sing	4	nsubj	_	_
3	anual	anual	ADJ	JJ	Gender=Masc|Number=Sing	2	amod	_	_
4	es	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	de	de	ADP	IN	_	6	case	_	_
6	más	_	ADV	RBR	Degree=Cmp	4	xcomp	_	_
7	de	de	ADP	IN	_	10	case	_	_
8	1,4	1,4	NUM	CD	Gender=Masc|NumForm=Digit|NumType=Card	9	nummod	_	_
9	mil	mil	NUM	CD	Gender=Masc|NumForm=Word|NumType=Card	10	nummod	_	_
10	millones	_	NOUN	NN	Gender=Masc|Number=Plur	6	obl	_	_
11	de	de	ADP	IN	_	12	case	_	_
12	dólares	_	NOUN	NN	Gender=Masc|Number=Plur	10	nmod	_	_
13	y	y	CCONJ	CC	_	14	cc	_	_
14	cuenta	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	conj	_	_
15	con	con	ADP	IN	_	16	case	_	_
16	más	_	ADV	RBR	Degree=Cmp	14	xcomp	_	_
17	de	de	ADP	IN	_	19	case	_	_
18	6 000	6 000	NUM	CD	Gender=Masc|NumForm=Digit|NumType=Card	19	nummod	_	_
19	empleados	_	NOUN	NN	Gender=Masc|Number=Plur	16	obl	_	SpaceAfter=No
20	.	.	PUNCT	.	_	4	punct	_	_

~~~


