---
layout: base
title:  'Statistics of flat in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `flat`

This relation is universal.

2114 nodes (1%) are attached to their parents as `flat`.

2114 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.46830652790918.

The following 9 pairs of parts of speech are connected with `flat`: <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (1840; 87% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (156; 7% instances), <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (69; 3% instances), <tt><a href="en_ewt-pos-X.html">X</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (38; 2% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="en_ewt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (1; 0% instances).


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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat	color:blue
1	-	-	PUNCT	NFP	_	2	punct	2:punct	_
2	ENRON-CPS	enron-cps	NOUN	GW	_	0	root	0:root	_
3	(	(	X	GW	_	2	flat	2:flat	SpaceAfter=No
4	GISB	GISB	X	GW	_	2	flat	2:flat	_
5	rev1	rev1	X	GW	_	2	flat	2:flat	SpaceAfter=No
6	)	)	X	GW	_	2	flat	2:flat	SpaceAfter=No
7	.doc	.doc	X	NN	Number=Sing	2	flat	2:flat	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 flat	color:blue
1	HAS	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	aux	2:aux	_
2	MOVED	move	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	_
3	TO	to	ADP	IN	_	6	case	6:case	_
4	4783	4783	NUM	CD	NumForm=Digit|NumType=Card	6	nummod	6:nummod	_
5	Bay	Bay	PROPN	NNP	Number=Sing	6	compound	6:compound	_
6	Rd	Rd	PROPN	NNP	Number=Sing	2	obl	2:obl:to	_
7	Saginaw	Saginaw	PROPN	NNP	Number=Sing	6	appos	6:appos	SpaceAfter=No
8	,	,	PUNCT	,	_	9	punct	9:punct	_
9	Michigan	Michigan	PROPN	NNP	Number=Sing	7	appos	7:appos	_
10	48604	48604	NUM	CD	NumForm=Digit|NumType=Card	6	appos	6:appos	_
11	(	(	PUNCT	-LRB-	_	12	punct	12:punct	SpaceAfter=No
12	989	989	NUM	CD	NumForm=Digit|NumType=Card	6	list	6:list	SpaceAfter=No
13	)	)	PUNCT	-RRB-	_	12	punct	12:punct	SpaceAfter=No
14	755-1109	755-1109	NUM	CD	NumForm=Digit|NumType=Card	12	flat	12:flat	_

~~~


