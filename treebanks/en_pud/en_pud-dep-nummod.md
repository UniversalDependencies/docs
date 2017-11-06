---
layout: base
title:  'Statistics of nummod in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `nummod`

This relation is universal.

254 nodes (1%) are attached to their parents as `nummod`.

187 instances of `nummod` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2755905511811.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (159; 63% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (46; 18% instances), <tt><a href="en_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (38; 15% instances), <tt><a href="en_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (6; 2% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="en_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	4	det	_	_
2	current	current	ADJ	JJ	Degree=Pos	4	amod	_	_
3	waiting	waiting	NOUN	NN	Number=Sing	4	compound	_	_
4	period	period	NOUN	NN	Number=Sing	7	nsubj	_	_
5	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
6	eight	eight	NUM	CD	NumType=Card	7	nummod	_	_
7	weeks	week	NOUN	NNS	Number=Plur	0	root	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod	color:blue
1	They	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	3	nsubj	_	_
2	will	will	AUX	MD	VerbForm=Fin	3	aux	_	_
3	play	play	VERB	VB	VerbForm=Inf	0	root	_	_
4	on	on	ADP	IN	_	5	case	_	_
5	Saturday	Saturday	PROPN	NNP	Number=Sing	3	obl	_	SpaceAfter=No
6	,	,	PUNCT	,	_	5	punct	_	_
7	10	10	NUM	CD	NumType=Card	8	nummod	_	_
8	June	June	PROPN	NNP	Number=Sing	5	appos	_	SpaceAfter=No
9	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod	color:blue
1	$	$	SYM	$	_	0	root	_	SpaceAfter=No
2	5,000	5,000	NUM	CD	NumType=Card	1	nummod	_	_
3	per	per	ADP	IN	_	4	case	_	_
4	person	person	NOUN	NN	Number=Sing	1	nmod	_	SpaceAfter=No
5	,	,	PUNCT	,	_	1	punct	_	_
6	the	the	DET	DT	Definite=Def|PronType=Art	7	det	_	_
7	maximum	maximum	NOUN	NN	Number=Sing	1	appos	_	_
8	allowed	allow	VERB	VBN	Tense=Past|VerbForm=Part	7	acl	_	SpaceAfter=No
9	.	.	PUNCT	.	_	1	punct	_	_

~~~


