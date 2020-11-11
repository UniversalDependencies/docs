---
layout: base
title:  'Statistics of nummod in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `nummod`

This relation is universal.

3088 nodes (1%) are attached to their parents as `nummod`.

2145 instances of `nummod` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 23 pairs of parts of speech are connected with `nummod`: <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (1939; 63% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (531; 17% instances), <tt><a href="en_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (331; 11% instances), <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (90; 3% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (56; 2% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (34; 1% instances), <tt><a href="en_ewt-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (25; 1% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (16; 1% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (16; 1% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (14; 0% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-DET.html">DET</a></tt> (8; 0% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (7; 0% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="en_ewt-pos-X.html">X</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-X.html">X</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	Four	four	NUM	CD	NumType=Card	2	nummod	2:nummod	_
2	months	month	NOUN	NNS	Number=Plur	3	obl:npmod	3:obl:npmod	_
3	later	later	ADV	RB	_	7	advmod	7:advmod	SpaceAfter=No
4	,	,	PUNCT	,	_	7	punct	7:punct	_
5	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubj:pass	7:nsubj:pass	_
6	were	be	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	7	aux:pass	7:aux:pass	_
7	married	marry	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nummod	color:blue
1	Darin	Darin	PROPN	NNP	Number=Sing	3	nsubj	3:nsubj	_
2	Fisher	Fisher	PROPN	NNP	Number=Sing	1	flat	1:flat	_
3	wrote	write	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	0:root	_
4	this	this	DET	DT	Number=Sing|PronType=Dem	5	det	5:det	_
5	response	response	NOUN	NN	Number=Sing	3	obj	3:obj	_
6	on	on	ADP	IN	_	7	case	7:case	_
7	January	January	PROPN	NNP	Number=Sing	3	obl	3:obl:on	_
8	25	25	NUM	CD	NumType=Card	7	nummod	7:nummod	SpaceAfter=No
9	,	,	PUNCT	,	_	7	punct	7:punct	_
10	2005	2005	NUM	CD	NumType=Card	7	nummod	7:nummod	SpaceAfter=No
11	:	:	PUNCT	:	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 nummod	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	3:nsubj|5:nsubj:xsubj	_
2	am	be	AUX	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	aux	3:aux	_
3	expecting	expect	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	_
4	to	to	PART	TO	_	5	mark	5:mark	_
5	pay	pay	VERB	VB	VerbForm=Inf	3	xcomp	3:xcomp	_
6	something	something	PRON	NN	Number=Sing	5	obj	5:obj	_
7	in	in	ADP	IN	_	14	case	14:case	_
8	the	the	DET	DT	Definite=Def|PronType=Art	14	det	14:det	_
9	$	$	SYM	$	_	14	compound	14:compound	SpaceAfter=No
10	3,	3,	NUM	CD	NumType=Card	9	nummod	9:nummod	SpaceAfter=No
11	to	to	ADP	IN	_	12	case	12:case	_
12	$	$	SYM	$	_	9	nmod	9:nmod:to	SpaceAfter=No
13	5,000	5,000	NUM	CD	NumType=Card	12	nummod	12:nummod	_
14	range	range	NOUN	NN	Number=Sing	6	nmod	6:nmod:in	SpaceAfter=No
15	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


