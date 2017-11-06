---
layout: base
title:  'Statistics of case in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `case`

This relation is universal.

3597 nodes (15%) are attached to their parents as `case`.

3588 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.76897414512093.

The following 21 pairs of parts of speech are connected with `case`: <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (2474; 69% instances), <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (523; 15% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (241; 7% instances), <tt><a href="pt_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (187; 5% instances), <tt><a href="pt_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (71; 2% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (24; 1% instances), <tt><a href="pt_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (19; 1% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-ADV.html">ADV</a></tt> (17; 0% instances), <tt><a href="pt_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (14; 0% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (8; 0% instances), <tt><a href="pt_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (4; 0% instances), <tt><a href="pt_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="pt_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="pt_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 case	color:blue
1	$5,000	_	NUM	CD	_	0	root	_	OrigForm=$5000
2	por	_	ADP	IN	_	3	case	_	_
3	pessoa	_	NOUN	NN	Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
4	,	_	PUNCT	,	_	6	punct	_	_
5	o	_	DET	DT	Gender=Masc|Number=Sing	6	det	_	_
6	máximo	_	NOUN	NN	Gender=Masc|Number=Sing	1	appos	_	_
7	permitido	_	ADJ	JJ	Gender=Masc|Number=Sing	6	amod	_	SpaceAfter=No
8	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 case	color:blue
1	Ele	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
2	trabalhou	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
3	para	_	ADP	IN	_	5	case	_	_
4	a	_	DET	DT	Gender=Fem|Number=Sing	5	det	_	_
5	BBC	_	PROPN	NNP	Gender=Fem|Number=Sing	2	obl	_	_
6	por	_	ADP	IN	_	8	case	_	_
7	uma	_	DET	CD	Gender=Fem	8	det	_	_
8	década	_	NOUN	NN	Gender=Fem|Number=Sing	2	obl	_	SpaceAfter=No
9	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 case	color:blue
1	Para	_	ADP	IN	_	2	case	_	_
2	já	_	ADV	RB	_	7	xcomp	_	SpaceAfter=No
3	,	_	PUNCT	,	_	2	punct	_	_
4	os	_	DET	DT	Gender=Masc|Number=Plur	5	det	_	_
5	analistas	_	NOUN	NN	Gender=Masc|Number=Plur	7	nsubj	_	_
6	estão	_	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres	7	cop	_	_
7	hesitantes	_	ADJ	JJ	Gender=Masc|Number=Plur	0	root	_	_
8	em	_	ADP	IN	_	9	case	_	_
9	eliminar	_	VERB	VB	_	7	xcomp	_	_
10	o	_	DET	DT	Gender=Masc|Number=Sing	11	det	_	_
11	serviço	_	NOUN	NN	Gender=Masc|Number=Sing	9	obj	_	SpaceAfter=No
12	.	_	PUNCT	.	_	7	punct	_	_

~~~


