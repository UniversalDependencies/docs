---
layout: base
title:  'Statistics of nummod in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `nummod`

This relation is universal.

815 nodes (1%) are attached to their parents as `nummod`.

728 instances of `nummod` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28834355828221.

The following 9 pairs of parts of speech are connected with `nummod`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (702; 86% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (58; 7% instances), <tt><a href="en_gum-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (35; 4% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (10; 1% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (5; 1% instances), <tt><a href="en_gum-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-PART.html">PART</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	In	in	ADP	IN	_	3	case	_	Discourse=circumstance:110->112
2	fifteen	fifteen	NUM	CD	NumType=Card	3	nummod	_	Entity=(time-136
3	minutes	minute	NOUN	NNS	Number=Plur	7	nmod	_	Entity=time-136)
4	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubj	_	Entity=(person-69)
5	would	would	AUX	MD	VerbForm=Fin	7	aux	_	_
6	be	be	AUX	VB	VerbForm=Inf	7	cop	_	_
7	home	home	NOUN	NN	Number=Sing	0	root	_	Entity=(place-126)
8	and	and	CCONJ	CC	_	12	cc	_	Discourse=sequence:111->110
9	my	my	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	10	nmod:poss	_	Entity=(person-25(person-2)
10	mother	mother	NOUN	NN	Number=Sing	12	nsubj	_	Entity=person-25)
11	would	would	AUX	MD	VerbForm=Fin	12	aux	_	_
12	fry	fry	VERB	VB	VerbForm=Inf	7	conj	_	_
13	eggs	egg	NOUN	NNS	Number=Plur	12	obj	_	Entity=(object-137)|SpaceAfter=No
14	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nummod	color:blue
1	—	—	PUNCT	:	_	2	punct	_	Discourse=attribution:60->54
2	NORTON	Norton	PROPN	NNP	Number=Sing	0	root	_	Entity=(abstract-102(person-1
3	I	I	NUM	NNP	Number=Sing	2	nummod	_	Entity=person-1)|SpaceAfter=No
4	,	,	PUNCT	,	_	5	punct	_	_
5	Emperor	Emperor	PROPN	NNP	Number=Sing	2	appos	_	Entity=(person-1
6	of	of	ADP	IN	_	9	case	_	_
7	the	the	DET	DT	Definite=Def|PronType=Art	9	det	_	Entity=(place-8
8	United	United	PROPN	NNP	Number=Sing	9	amod	_	_
9	States	States	PROPN	NNPS	Number=Plur	5	nmod	_	Entity=abstract-102)person-1)place-8)|SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nummod	color:blue
1	Through	through	ADP	IN	_	2	case	_	Discourse=evidence:53->52
2	them	they	PRON	PRP	Case=Acc|Number=Plur|Person=3|PronType=Prs	5	obl	_	Entity=(organization-66)
3	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	Entity=(event-57)
4	may	may	AUX	MD	VerbForm=Fin	5	aux	_	_
5	cost	cost	VERB	VB	VerbForm=Inf	0	root	_	_
6	£	£	SYM	SYM	_	5	obj	_	Entity=(abstract-68
7	20	20	NUM	CD	NumType=Card	6	nummod	_	Entity=abstract-68)
8	in	in	ADP	IN	_	9	case	_	_
9	total	total	NOUN	NN	Number=Sing	5	obl	_	_
10	per	per	ADP	IN	_	11	case	_	_
11	person	person	NOUN	NN	Number=Sing	9	nmod	_	Entity=(person-69)|SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	_	_

~~~


