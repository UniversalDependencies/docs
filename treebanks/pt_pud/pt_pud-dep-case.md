---
layout: base
title:  'Statistics of case in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `case`

This relation is universal.

3600 nodes (15%) are attached to their parents as `case`.

3594 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.76944444444444.

The following 19 pairs of parts of speech are connected with `case`: <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (2456; 68% instances), <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (541; 15% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (241; 7% instances), <tt><a href="pt_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (186; 5% instances), <tt><a href="pt_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (75; 2% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (24; 1% instances), <tt><a href="pt_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (19; 1% instances), <tt><a href="pt_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (16; 0% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-ADV.html">ADV</a></tt> (15; 0% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (8; 0% instances), <tt><a href="pt_pud-pos-DET.html">DET</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (4; 0% instances), <tt><a href="pt_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="pt_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pud-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="pt_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="pt_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="pt_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 case	color:blue
1	Ele	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
2	trabalhou	trabalhar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
3	para	para	ADP	IN	_	5	case	_	_
4	a	o	DET	DT	Gender=Fem|Number=Sing	5	det	_	_
5	BBC	BBC	PROPN	NNP	Gender=Fem|Number=Sing	2	obl	_	_
6	por	por	ADP	IN	_	8	case	_	_
7	uma	um	DET	CD	Gender=Fem	8	det	_	_
8	década	década	NOUN	NN	Gender=Fem|Number=Sing	2	obl	_	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 case	color:blue
1	Para	_	ADP	IN	_	2	case	_	_
2	já	já	ADV	RB	_	7	xcomp	_	SpaceAfter=No
3	,	,	PUNCT	,	_	2	punct	_	_
4	os	o	DET	DT	Gender=Masc|Number=Plur	5	det	_	_
5	analistas	analista	NOUN	NN	Gender=Masc|Number=Plur	7	nsubj	_	_
6	estão	estar	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	7	cop	_	_
7	hesitantes	hesitante	ADJ	JJ	Gender=Masc|Number=Plur	0	root	_	_
8	em	em	ADP	IN	_	9	case	_	_
9	eliminar	_	VERB	VB	_	7	xcomp	_	_
10	o	o	DET	DT	Gender=Masc|Number=Sing	11	det	_	_
11	serviço	serviço	NOUN	NN	Gender=Masc|Number=Sing	9	obj	_	SpaceAfter=No
12	.	.	PUNCT	.	_	7	punct	_	_

~~~


