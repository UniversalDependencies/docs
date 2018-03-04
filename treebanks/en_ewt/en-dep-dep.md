---
layout: base
title:  'Statistics of dep in UD_English'
udver: '2'
---

## Treebank Statistics: UD_English: Relations: `dep`

This relation is universal.

11 nodes (0%) are attached to their parents as `dep`.

8 instances of `dep` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.90909090909091.

The following 8 pairs of parts of speech are connected with `dep`: <tt><a href="en-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en-pos-X.html">X</a></tt> (2; 18% instances), <tt><a href="en-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="en-pos-NOUN.html">NOUN</a></tt> (2; 18% instances), <tt><a href="en-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="en-pos-PUNCT.html">PUNCT</a></tt> (2; 18% instances), <tt><a href="en-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en-pos-ADP.html">ADP</a></tt> (1; 9% instances), <tt><a href="en-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="en-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="en-pos-VERB.html">VERB</a></tt>-<tt><a href="en-pos-ADV.html">ADV</a></tt> (1; 9% instances), <tt><a href="en-pos-VERB.html">VERB</a></tt>-<tt><a href="en-pos-VERB.html">VERB</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 12 dep	color:blue
1	Price	price	NOUN	NN	Number=Sing	0	root	0:root	SpaceAfter=No
2	:	:	PUNCT	:	_	1	punct	1:punct	SpaceAfter=No
3	3,40	3,40	NUM	CD	NumType=Card	4	nummod	4:nummod	_
4	Euros	euro	NOUN	NNS	Number=Plur	1	appos	1:appos	SpaceAfter=No
5	,	,	PUNCT	,	_	7	punct	7:punct	_
6	5	5	NUM	CD	NumType=Card	7	nummod	7:nummod	_
7	Euros	euro	NOUN	NNS	Number=Plur	4	conj	4:conj	_
8	or	or	CCONJ	CC	_	10	cc	10:cc	_
9	7,5	7,5	NUM	CD	NumType=Card	10	nummod	10:nummod	_
10	Euros	euro	NOUN	NNS	Number=Plur	4	conj	4:conj	_
11	(	(	PUNCT	-LRB-	_	12	punct	12:punct	SpaceAfter=No
12	1	1	X	LS	_	4	dep	4:dep	SpaceAfter=No
13	)	)	PUNCT	-RRB-	_	12	punct	12:punct	_
14	for	for	ADP	IN	_	18	case	18:case	_
15	a	a	DET	DT	Definite=Ind|PronType=Art	18	det	18:det	_
16	72	72	NUM	CD	NumType=Card	17	nummod	17:nummod	_
17	heures	heure	NOUN	NNS	Number=Plur	18	compound	18:compound	_
18	lenght	lenght	NOUN	NN	Number=Sing	4	nmod	4:nmod	SpaceAfter=No
19	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 dep	color:blue
1	Category	category	NOUN	NN	Number=Sing	0	root	0:root	SpaceAfter=No
2	:	:	PUNCT	:	_	1	punct	1:punct	_
3	Science	science	NOUN	NN	Number=Sing	1	appos	1:appos	_
4	>	>	PUNCT	,	_	3	punct	3:punct	_
5	Astronomy	astronomy	NOUN	NN	Number=Sing	4	dep	4:dep	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 dep	color:blue
1	---------------------------------------------------------------------------	---------------------------------------------------------------------------	PUNCT	NFP	_	2	dep	2:dep	_
2	-----	-----	PUNCT	NFP	_	0	root	0:root	_

~~~


