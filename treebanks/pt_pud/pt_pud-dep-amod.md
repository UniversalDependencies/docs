---
layout: base
title:  'Statistics of amod in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `amod`

This relation is universal.

1328 nodes (6%) are attached to their parents as `amod`.

975 instances of `amod` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.16942771084337.

The following 5 pairs of parts of speech are connected with `amod`: <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (1282; 97% instances), <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (42; 3% instances), <tt><a href="pt_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="pt_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 amod	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 amod	color:blue
1	Isto	_	PRON	PDEM	Gender=Masc|Number=Sing	2	nsubj	_	_
2	foi	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
3	de	de	ADP	IN	_	4	case	_	_
4	barco	barco	NOUN	NN	Gender=Masc|Number=Sing	2	obl	_	_
5	a	_	ADP	IN	_	9	case	_	_
6	partir	_	VERB	VB	_	5	fixed	_	_
7	de	de	ADP	INDT	_	5	fixed	_	_
8	a	o	DET	_	Gender=Fem|Number=Sing	9	det	_	_
9	Europa	Europa	PROPN	NNP	Gender=Fem|Number=Sing	2	obl	_	_
10	continental	continental	ADJ	JJ	Gender=Fem|Number=Sing	9	amod	_	SpaceAfter=No
11	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 amod	color:blue
1	Em	_	ADP	IN	_	2	case	_	_
2	1340	_	NUM	CD	Gender=Masc	6	obl	_	SpaceAfter=No
3	,	,	PUNCT	,	_	2	punct	_	_
4	o	o	DET	DT	Gender=Masc|Number=Sing	5	det	_	_
5	Cairo	Cairo	PROPN	NNP	Gender=Masc|Number=Sing	6	nsubj	_	_
6	tinha	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
7	uma	um	DET	DT	Gender=Fem|Number=Sing	8	det	_	_
8	população	população	NOUN	NN	Gender=Fem|Number=Sing	6	obj	_	_
9	de	de	ADP	IN	_	13	case	_	_
10	cerca	cerca	ADV	RB	_	13	advmod	_	_
11	de	de	ADP	IN	_	10	fixed	_	_
12	meio	meio	ADJ	JJ	Gender=Masc|Number=Sing	13	amod	_	_
13	milhão	_	NUM	CD	Number=Sing	8	nmod	_	SpaceAfter=No
14	,	,	PUNCT	,	_	20	punct	_	_
15	tornando	_	AUX	VBG	_	20	cop	_	SpaceAfter=No
16	-	-	PUNCT	-	_	15	punct	_	SpaceAfter=No
17	a	_	PRON	PRP	Case=Acc|Gender=Fem|Number=Sing|Person=3	20	obj	_	_
18	a	o	DET	DT	Gender=Fem|Number=Sing	20	det	_	_
19	maior	maior	ADJ	JJS	Gender=Fem|Number=Sing	20	amod	_	_
20	cidade	cidade	NOUN	NN	Gender=Fem|Number=Sing	6	acl	_	_
21	a	_	ADP	IN	_	22	case	_	_
22	oeste	oeste	NOUN	NN	Gender=Masc|Number=Sing	20	nmod	_	ToDo=nmod
23	de	de	ADP	INDT	_	25	case	_	_
24	a	o	DET	_	Gender=Fem|Number=Sing	25	det	_	_
25	China	China	PROPN	NNP	Gender=Fem|Number=Sing	22	nmod	_	SpaceAfter=No
26	.	.	PUNCT	.	_	6	punct	_	_

~~~


