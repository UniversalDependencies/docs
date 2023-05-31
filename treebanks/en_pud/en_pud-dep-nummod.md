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
1	The	the	DET	DT	Definite=Def|PronType=Art	4	det	4:det	_
2	current	current	ADJ	JJ	Degree=Pos	4	amod	4:amod	_
3	waiting	waiting	NOUN	NN	Number=Sing	4	compound	4:compound	_
4	period	period	NOUN	NN	Number=Sing	7	nsubj	7:nsubj	_
5	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	7:cop	_
6	eight	eight	NUM	CD	NumType=Card	7	nummod	7:nummod	_
7	weeks	week	NOUN	NNS	Number=Plur	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod	color:blue
1	They	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	3	nsubj	3:nsubj	_
2	will	will	AUX	MD	VerbForm=Fin	3	aux	3:aux	_
3	play	play	VERB	VB	VerbForm=Inf	0	root	0:root	_
4	on	on	ADP	IN	_	5	case	5:case	_
5	Saturday	Saturday	PROPN	NNP	Number=Sing	3	obl	3:obl:on	SpaceAfter=No
6	,	,	PUNCT	,	_	5	punct	5:punct	_
7	10	10	NUM	CD	NumType=Card	8	nummod	8:nummod	_
8	June	June	PROPN	NNP	Number=Sing	5	appos	5:appos	SpaceAfter=No
9	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod	color:blue
1	$	$	SYM	$	_	0	root	0:root	SpaceAfter=No
2	5,000	5,000	NUM	CD	NumType=Card	1	nummod	1:nummod	_
3	per	per	ADP	IN	_	4	case	4:case	_
4	person	person	NOUN	NN	Number=Sing	1	nmod	1:nmod:per	SpaceAfter=No
5	,	,	PUNCT	,	_	1	punct	1:punct	_
6	the	the	DET	DT	Definite=Def|PronType=Art	7	det	7:det	_
7	maximum	maximum	NOUN	NN	Number=Sing	1	appos	1:appos	_
8	allowed	allow	VERB	VBN	Tense=Past|VerbForm=Part	7	acl	7:acl	SpaceAfter=No
9	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


