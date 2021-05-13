---
layout: base
title:  'Statistics of nummod in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `nummod`

This relation is universal.

909 nodes (1%) are attached to their parents as `nummod`.

838 instances of `nummod` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31683168316832.

The following 9 pairs of parts of speech are connected with `nummod`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (801; 88% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (50; 6% instances), <tt><a href="en_gum-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (35; 4% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (12; 1% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="en_gum-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	In	in	ADP	IN	_	3	case	3:case	Discourse=circumstance:110->112
2	fifteen	fifteen	NUM	CD	NumForm=Word|NumType=Card	3	nummod	3:nummod	Entity=(time-136
3	minutes	minute	NOUN	NNS	Number=Plur	7	nmod	7:nmod:in	Entity=time-136)
4	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubj	7:nsubj	Entity=(person-69)
5	would	would	AUX	MD	VerbForm=Fin	7	aux	7:aux	_
6	be	be	AUX	VB	VerbForm=Inf	7	cop	7:cop	_
7	home	home	ADV	RB	Degree=Pos	0	root	0:root	Entity=(place-126)
8	and	and	CCONJ	CC	_	12	cc	12:cc	Discourse=sequence:111->110
9	my	my	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	10	nmod:poss	10:nmod:poss	Entity=(person-25(person-2)
10	mother	mother	NOUN	NN	Number=Sing	12	nsubj	12:nsubj	Entity=person-25)
11	would	would	AUX	MD	VerbForm=Fin	12	aux	12:aux	_
12	fry	fry	VERB	VB	VerbForm=Inf	7	conj	7:conj:and	_
13	eggs	egg	NOUN	NNS	Number=Plur	12	obj	12:obj	Entity=(object-137)|SpaceAfter=No
14	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nummod	color:blue
1	—	—	PUNCT	:	_	2	punct	2:punct	Discourse=attribution:60->54
2	NORTON	Norton	PROPN	NNP	Number=Sing	0	root	0:root	Entity=(abstract-102(person-1-Emperor_Norton
3	I	I	NUM	CD	NumForm=Roman|NumType=Card	2	nummod	2:nummod	Entity=person-1-Emperor_Norton)|SpaceAfter=No
4	,	,	PUNCT	,	_	5	punct	5:punct	_
5	Emperor	Emperor	PROPN	NNP	Number=Sing	2	appos	2:appos	Entity=(person-1-Emperor_Norton
6	of	of	ADP	IN	_	9	case	9:case	_
7	the	the	DET	DT	Definite=Def|PronType=Art	9	det	9:det	Entity=(place-8-United_States
8	United	Unite	VERB	NNP	Tense=Past|VerbForm=Part	9	amod	9:amod	_
9	States	State	PROPN	NNPS	Number=Plur	5	nmod	5:nmod:of	Entity=abstract-102)person-1-Emperor_Norton)place-8-United_States)|SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nummod	color:blue
1	Through	through	ADP	IN	_	2	case	2:case	Discourse=evidence:53->52
2	them	they	PRON	PRP	Case=Acc|Number=Plur|Person=3|PronType=Prs	5	obl	5:obl:through	Entity=(organization-67)
3	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	5:nsubj	Entity=(event-58)
4	may	may	AUX	MD	VerbForm=Fin	5	aux	5:aux	_
5	cost	cost	VERB	VB	VerbForm=Inf	0	root	0:root	_
6	£	£	SYM	SYM	_	5	obj	5:obj	Entity=(abstract-69
7	20	20	NUM	CD	NumForm=Digit|NumType=Card	6	nummod	6:nummod	Entity=abstract-69)
8	in	in	ADP	IN	_	9	case	9:case	_
9	total	total	NOUN	NN	Number=Sing	5	obl	5:obl:in	_
10	per	per	ADP	IN	_	11	case	11:case	_
11	person	person	NOUN	NN	Number=Sing	9	nmod	9:nmod:per	Entity=(person-70)|SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


