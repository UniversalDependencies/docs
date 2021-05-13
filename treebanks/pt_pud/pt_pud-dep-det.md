---
layout: base
title:  'Statistics of det in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `det`

This relation is universal.

3726 nodes (16%) are attached to their parents as `det`.

3713 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16720343531938.

The following 12 pairs of parts of speech are connected with `det`: <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-DET.html">DET</a></tt> (3054; 82% instances), <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-DET.html">DET</a></tt> (360; 10% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-PRON.html">PRON</a></tt> (232; 6% instances), <tt><a href="pt_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pud-pos-DET.html">DET</a></tt> (25; 1% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-DET.html">DET</a></tt> (15; 0% instances), <tt><a href="pt_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_pud-pos-DET.html">DET</a></tt> (13; 0% instances), <tt><a href="pt_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_pud-pos-DET.html">DET</a></tt> (12; 0% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-DET.html">DET</a></tt> (8; 0% instances), <tt><a href="pt_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pud-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 det	color:blue
1	Isto	_	PRON	PDEM	Gender=Masc|Number=Sing	4	nsubj	_	_
2	não	não	ADV	RB	Polarity=Neg	4	advmod	_	_
3	é	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	cop	_	_
4	o	_	PRON	PDEM	Gender=Masc|Number=Sing	0	root	_	_
5	que	_	PRON	WP	_	6	obj	_	_
6	precisamos	precisar	VERB	VBC	Mood=Ind|Number=Plur|Person=1|Tense=Pres	4	acl:relcl	_	_
7	em	em	ADP	INDT	_	10	case	_	_
8	o	o	DET	_	Gender=Masc|Number=Sing	10	det	_	_
9	nosso	_	PRON	DTP$	Gender=Masc|Number=Sing|Number[psor]=Plur|Person=1|PronType=Prs	10	det	_	_
10	país	país	NOUN	NN	Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
11	,	,	PUNCT	,	_	12	punct	_	_
12	pessoal	pessoal	NOUN	NN	Gender=Masc|Number=Sing	4	vocative	_	SpaceAfter=No
13	.	.	PUNCT	.	_	4	punct	_	_

~~~


