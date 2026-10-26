---
layout: base
title:  'Statistics of nummod in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `nummod`

This relation is universal.

195 nodes (1%) are attached to their parents as `nummod`.

174 instances of `nummod` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31282051282051.

The following 5 pairs of parts of speech are connected with `nummod`: <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (148; 76% instances), <tt><a href="en_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (38; 19% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (3; 2% instances), <tt><a href="en_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (3; 2% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (3; 2% instances).


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
6	eight	eight	NUM	CD	NumForm=Word|NumType=Card	7	nummod	7:nummod	_
7	weeks	week	NOUN	NNS	Number=Plur	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod	color:blue
1	$	$	SYM	$	_	0	root	0:root	SpaceAfter=No
2	5,000	5000	NUM	CD	NumForm=Digit|NumType=Card	1	nummod	1:nummod	_
3	per	per	ADP	IN	_	4	case	4:case	_
4	person	person	NOUN	NN	Number=Sing	1	nmod	1:nmod:per	SpaceAfter=No
5	,	,	PUNCT	,	_	1	punct	1:punct	_
6	the	the	DET	DT	Definite=Def|PronType=Art	7	det	7:det	_
7	maximum	maximum	NOUN	NN	Number=Sing	1	appos	1:appos	_
8	allowed	allow	VERB	VBN	Tense=Past|VerbForm=Part	7	acl	7:acl	SpaceAfter=No
9	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 11 nummod	color:blue
1	She	she	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	nsubj:pass	5:nsubj:pass	_
2	has	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	5:aux	_
3	also	also	ADV	RB	_	5	advmod	5:advmod	_
4	been	be	AUX	VBN	Tense=Past|VerbForm=Part	5	aux:pass	5:aux:pass	_
5	charged	charge	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	_
6	with	with	SCONJ	IN	_	7	mark	7:mark	_
7	trying	try	VERB	VBG	VerbForm=Ger	5	advcl	5:advcl:with	_
8	to	to	PART	TO	_	9	mark	9:mark	_
9	kill	kill	VERB	VB	VerbForm=Inf	7	xcomp	7:xcomp	_
10	her	her	PRON	PRP$	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	16	nmod:poss	16:nmod:poss	_
11	two	two	NUM	CD	NumForm=Word|NumType=Card	15	nummod	15:nummod	SpaceAfter=No
12	-	-	PUNCT	HYPH	_	15	punct	15:punct	SpaceAfter=No
13	year	year	NOUN	NN	Number=Sing	15	obl:unmarked	15:obl:unmarked	SpaceAfter=No
14	-	-	PUNCT	HYPH	_	15	punct	15:punct	SpaceAfter=No
15	old	old	ADJ	JJ	Degree=Pos	16	amod	16:amod	_
16	daughter	daughter	NOUN	NN	Number=Sing	9	obj	9:obj	SpaceAfter=No
17	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


