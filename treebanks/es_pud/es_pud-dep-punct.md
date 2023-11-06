---
layout: base
title:  'Statistics of punct in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `punct`

This relation is universal.

2292 nodes (10%) are attached to their parents as `punct`.

1498 instances of `punct` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.82940663176265.

The following 12 pairs of parts of speech are connected with `punct`: <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-PUNCT.html">PUNCT</a></tt> (1278; 56% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-PUNCT.html">PUNCT</a></tt> (585; 26% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-PUNCT.html">PUNCT</a></tt> (120; 5% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-PUNCT.html">PUNCT</a></tt> (118; 5% instances), <tt><a href="es_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="es_pud-pos-PUNCT.html">PUNCT</a></tt> (63; 3% instances), <tt><a href="es_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="es_pud-pos-PUNCT.html">PUNCT</a></tt> (48; 2% instances), <tt><a href="es_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="es_pud-pos-PUNCT.html">PUNCT</a></tt> (46; 2% instances), <tt><a href="es_pud-pos-DET.html">DET</a></tt>-<tt><a href="es_pud-pos-PUNCT.html">PUNCT</a></tt> (14; 1% instances), <tt><a href="es_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="es_pud-pos-PUNCT.html">PUNCT</a></tt> (10; 0% instances), <tt><a href="es_pud-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="es_pud-pos-PUNCT.html">PUNCT</a></tt> (5; 0% instances), <tt><a href="es_pud-pos-X.html">X</a></tt>-<tt><a href="es_pud-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances), <tt><a href="es_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="es_pud-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 punct	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 punct	color:blue
1	Eso	eso	DET	DT	Gender=Masc|Number=Sing|PronType=Dem	2	nsubj	_	_
2	es	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	lo	él	PRON	DT	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	4	det	_	_
4	que	que	PRON	REL	Gender=Masc|Number=Sing|PronType=Rel	6	obj	_	_
5	no	_	ADV	RB	Polarity=Neg	6	advmod	_	_
6	necesitamos	_	VERB	VBC	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
7	en	en	ADP	IN	_	9	case	_	_
8	nuestro	nuestro	PRON	DTP$	Gender=Masc|Number=Sing|Person=1|Poss=Yes|PronType=Prs	9	det	_	_
9	país	país	NOUN	NN	Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
10	,	,	PUNCT	,	_	11	punct	_	_
11	amigos	_	NOUN	NN	Gender=Masc|Number=Plur	2	vocative	_	SpaceAfter=No
12	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 punct	color:blue
1	A	a	ADP	IN	_	10	advmod	_	_
2	lo	él	PRON	DT	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	1	fixed	_	_
3	mejor	mejor	NOUN	NN	Gender=Masc|Number=Sing	1	fixed	_	_
4	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	código	código	NOUN	NN	Gender=Masc|Number=Sing	10	nsubj	_	_
6	de	de	ADP	IN	_	7	case	_	_
7	vestimenta	vestimenta	NOUN	NN	Gender=Fem|Number=Sing	5	nmod	_	_
8	era	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	10	cop	_	_
9	muy	muy	ADV	RB	_	10	advmod	_	_
10	conservador	conservador	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
11	.	.	PUNCT	.	_	10	punct	_	_

~~~


