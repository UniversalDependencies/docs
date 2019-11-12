---
layout: base
title:  'Statistics of nummod in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `nummod`

This relation is universal.

219 nodes (1%) are attached to their parents as `nummod`.

189 instances of `nummod` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.10958904109589.

The following 4 pairs of parts of speech are connected with `nummod`: <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-NUM.html">NUM</a></tt> (150; 68% instances), <tt><a href="fr_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="fr_pud-pos-NUM.html">NUM</a></tt> (33; 15% instances), <tt><a href="fr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_pud-pos-NUM.html">NUM</a></tt> (18; 8% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-NUM.html">NUM</a></tt> (18; 8% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nummod	color:blue
1	Les	_	DET	DT	Gender=Fem|Number=Plur	2	det	_	_
2	sources	_	NOUN	NN	Gender=Fem|Number=Plur	5	nsubj	_	_
3	consultées	_	ADJ	JJ	Gender=Fem|Number=Plur	2	amod	_	_
4	ont	_	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	5	aux:tense	_	_
5	indiqué	_	VERB	VBN	Gender=Masc|Number=Sing	0	root	_	_
6	que	_	SCONJ	IN	_	12	mark	_	_
7	c’	_	PRON	PDEM	_	12	nsubj	_	OrigForm=c'|SpaceAfter=No
8	est	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	12	cop	_	_
9	«	_	PUNCT	``	_	12	punct	_	_
10	100	_	NUM	CD	_	11	nummod	_	SpaceAfter=No
11	%	_	SYM	SYM	_	12	advmod	_	_
12	Cospedal	_	PROPN	NNP	Gender=Fem|Number=Sing	5	ccomp	_	_
13	»	_	PUNCT	''	_	12	punct	_	SpaceAfter=No
14	.	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 nummod	color:blue
1	La	_	DET	DT	Gender=Fem|Number=Sing	2	det	_	_
2	quantité	_	NOUN	NN	Gender=Fem|Number=Sing	10	nsubj	_	_
3	de	_	ADP	IN	_	4	case	_	_
4	marchandises	_	NOUN	NN	Gender=Fem|Number=Plur	2	nmod	_	_
5	transportées	_	VERB	VBN	Gender=Fem|Number=Plur|VerbForm=Part	4	acl	_	_
6	via	_	ADP	IN	_	8	case	_	_
7	le	_	DET	DT	Gender=Masc|Number=Sing	8	det	_	_
8	Danube	_	PROPN	NNP	Gender=Masc|Number=Sing	5	obl	_	_
9	a	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	10	aux:tense	_	_
10	augmenté	_	VERB	VBN	Gender=Masc|Number=Sing	0	root	_	_
11	de	_	ADP	IN	_	15	case	_	_
12	près	_	ADV	RB	_	14	advmod	_	_
13	de	_	ADP	IN	_	12	fixed	_	_
14	100	_	NUM	CD	_	15	nummod	_	_
15	millions	_	NUM	CD	_	10	obl	_	_
16	de	_	ADP	IN	_	17	case	_	_
17	tonnes	_	NOUN	NN	Gender=Fem|Number=Plur	15	nmod	_	_
18	en	_	ADP	IN	_	19	case	_	_
19	1987	_	NUM	CD	_	10	obl	_	SpaceAfter=No
20	.	_	PUNCT	.	_	10	punct	_	_

~~~


