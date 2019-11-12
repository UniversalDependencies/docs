---
layout: base
title:  'Statistics of det in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `det`

This relation is universal.

3865 nodes (16%) are attached to their parents as `det`.

3865 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1104786545925.

The following 9 pairs of parts of speech are connected with `det`: <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-DET.html">DET</a></tt> (3528; 91% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-DET.html">DET</a></tt> (245; 6% instances), <tt><a href="fr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_pud-pos-DET.html">DET</a></tt> (36; 1% instances), <tt><a href="fr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_pud-pos-DET.html">DET</a></tt> (30; 1% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-ADV.html">ADV</a></tt> (17; 0% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (4; 0% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-X.html">X</a></tt>-<tt><a href="fr_pud-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det	color:blue
1	5000	_	NUM	CD	_	2	nummod	_	_
2	dollars	_	NOUN	NN	Gender=Masc|Number=Plur	0	root	_	_
3	par	_	ADP	IN	_	4	case	_	_
4	personne	_	NOUN	NN	Gender=Fem|Number=Sing	2	nmod	_	SpaceAfter=No
5	,	_	PUNCT	,	_	7	punct	_	_
6	le	_	DET	DT	Gender=Masc|Number=Sing	7	det	_	_
7	maximum	_	NOUN	NN	Gender=Masc|Number=Sing	2	appos	_	_
8	autorisé	_	VERB	VBN	Gender=Masc|Number=Sing|VerbForm=Part	7	acl	_	SpaceAfter=No
9	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	Il	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	3	nsubj	_	_
2	a	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	aux:tense	_	_
3	travaillé	_	VERB	VBN	Gender=Masc|Number=Sing	0	root	_	_
4	pour	_	ADP	IN	_	6	case	_	_
5	la	_	DET	DT	Gender=Fem|Number=Sing	6	det	_	_
6	BBC	_	PROPN	NNP	Gender=Fem|Number=Sing	3	obl	_	_
7	pendant	_	ADP	IN	_	9	case	_	_
8	une	_	DET	DT	Gender=Fem|Number=Sing	9	det	_	_
9	décennie	_	NOUN	NN	Gender=Fem|Number=Sing	3	obl	_	SpaceAfter=No
10	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 det	color:blue
1	Un	_	DET	DT	Gender=Masc|Number=Sing	2	det	_	_
2	niveau	_	NOUN	NN	Gender=Masc|Number=Sing	0	root	_	_
3	qui	_	PRON	WP	Gender=Masc|Number=Sing	13	nsubj	_	SpaceAfter=No
4	,	_	PUNCT	,	_	8	punct	_	_
5	dans	_	ADP	IN	_	8	case	_	_
6	les	_	DET	DT	Gender=Masc|Number=Plur	8	det	_	_
7	deux	_	NUM	CD	_	8	nummod	_	_
8	cas	_	NOUN	NN	Gender=Masc|Number=Plur	13	obl	_	SpaceAfter=No
9	,	_	PUNCT	,	_	8	punct	_	_
10	est	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	13	cop	_	_
11	le	_	DET	DT	Gender=Masc|Number=Sing	12	det	_	_
12	plus	_	ADV	RBR	_	13	advmod	_	_
13	haut	_	ADJ	JJ	Gender=Masc|Number=Sing	2	acl:relcl	_	_
14	de	_	ADP	IN	_	16	case	_	_
15	l'	_	DET	DT	Gender=Fem|Number=Sing	16	det	_	SpaceAfter=No
16	UE	_	PROPN	NNP	Gender=Fem|Number=Sing	13	obl	_	SpaceAfter=No
17	.	_	PUNCT	.	_	2	punct	_	_

~~~


