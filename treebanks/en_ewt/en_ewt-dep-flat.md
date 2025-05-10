---
layout: base
title:  'Statistics of flat in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `flat`

This relation is universal.

2467 nodes (1%) are attached to their parents as `flat`.

2467 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.44142683421159.

The following 16 pairs of parts of speech are connected with `flat`: <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (1849; 75% instances), <tt><a href="en_ewt-pos-X.html">X</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (201; 8% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (169; 7% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (87; 4% instances), <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (81; 3% instances), <tt><a href="en_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (37; 1% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (22; 1% instances), <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (5; 0% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="en_ewt-pos-X.html">X</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_ewt-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-X.html">X</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	Ben	Ben	PROPN	NNP	Number=Sing	6	nsubj	6:nsubj	_
2	Goodger	Goodger	PROPN	NNP	Number=Sing	1	flat	1:flat	_
3	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	6:cop	_
4	the	the	DET	DT	Definite=Def|PronType=Art	6	det	6:det	_
5	lead	lead	ADJ	JJ	Degree=Pos	6	amod	6:amod	_
6	engineer	engineer	NOUN	NN	Number=Sing	0	root	0:root	_
7	for	for	ADP	IN	_	9	case	9:case	_
8	Mozilla	Mozilla	PROPN	NNP	Number=Sing	9	compound	9:compound	_
9	Firefox	Firefox	PROPN	NNP	Number=Sing	6	nmod	6:nmod:for	SpaceAfter=No
10	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	A	a	X	FW	Foreign=Yes	0	root	0:root	_
2	la	la	X	FW	Foreign=Yes	1	flat	1:flat	_
3	guerre	guerre	X	FW	Foreign=Yes	1	flat	1:flat	_
4	c'est	c'est	X	FW	Foreign=Yes	1	flat	1:flat	_
5	comme	comme	X	FW	Foreign=Yes	1	flat	1:flat	_
6	a	a	X	FW	Foreign=Yes	1	flat	1:flat	_
7	la	la	X	FW	Foreign=Yes	1	flat	1:flat	_
8	guerre	guerre	X	FW	Foreign=Yes	1	flat	1:flat	SpaceAfter=No
9	!	!	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat	color:blue
1	Analyst	analyst	NOUN	NN	Number=Sing	2	compound	2:compound	_
2	Team	team	NOUN	NN	Number=Sing	0	root	0:root	FlatType=Enumerated
3	1	1	NUM	CD	NumForm=Digit|NumType=Card	2	flat	2:flat	SpaceAfter=No
4	:	:	PUNCT	:	_	5	punct	5:punct	_
5	Coach	coach	NOUN	NN	Number=Sing	2	list	2:list	SpaceAfter=No
6	:	:	PUNCT	:	_	7	punct	7:punct	_
7	Lisa	Lisa	PROPN	NNP	Number=Sing	5	appos	5:appos	_
8	Gilette	Gilette	PROPN	NNP	Number=Sing	7	flat	7:flat	_

~~~


