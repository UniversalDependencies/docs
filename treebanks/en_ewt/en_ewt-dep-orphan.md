---
layout: base
title:  'Statistics of orphan in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `orphan`

This relation is universal.

29 nodes (0%) are attached to their parents as `orphan`.

25 instances of `orphan` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.86206896551724.

The following 14 pairs of parts of speech are connected with `orphan`: <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (9; 31% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-VERB.html">VERB</a></tt> (4; 14% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> (3; 10% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (2; 7% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (2; 7% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="en_ewt-pos-AUX.html">AUX</a></tt>-<tt><a href="en_ewt-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="en_ewt-pos-DET.html">DET</a></tt>-<tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (1; 3% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="en_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 16 orphan	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	3:nsubj|10.1:nsubj|12:nsubj	_
2	actually	actually	ADV	RB	_	3	advmod	3:advmod	_
3	loss	lose	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|Typo=Yes|VerbForm=Fin	0	root	0:root	CorrectForm=lose
4	4	4	NUM	CD	NumForm=Digit|NumType=Card	5	nummod	5:nummod	_
5	pounds	pound	NOUN	NNS	Number=Plur	3	obj	3:obj	_
6	after	after	ADP	IN	_	9	case	9:case	_
7	my	my	PRON	PRP$	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	9	nmod:poss	9:nmod:poss	_
8	1st	1st	ADJ	JJ	Degree=Pos|NumType=Ord	9	amod	9:amod	_
9	treatment	treatment	NOUN	NN	Number=Sing	3	obl	3:obl:after	_
10	and	and	CCONJ	CC	_	12	cc	10.1:cc|12:cc	_
11	2	2	NUM	CD	NumForm=Digit|NumType=Card	12	nummod	12:nummod	_
12	pounds	pound	NOUN	NNS	Number=Plur	3	conj	3:conj:and|10.1:obj	_
13	after	after	ADP	IN	_	16	case	16:case	_
14	my	my	PRON	PRP$	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	16	nmod:poss	16:nmod:poss	_
15	2nd	2nd	ADJ	JJ	Degree=Pos|NumType=Ord	16	amod	16:amod	_
16	treatment	treatment	NOUN	NN	Number=Sing	12	orphan	10.1:obl:after	SpaceAfter=No
17	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 16 orphan	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj|7.1:nsubj	_
2	found	find	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	my	my	PRON	PRP$	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	5	nmod:poss	5:nmod:poss	_
4	initial	initial	ADJ	JJ	Degree=Pos	5	amod	5:amod	_
5	selection	selection	NOUN	NN	Number=Sing	2	obj	2:obj|6:nsubj:xsubj	_
6	satisfactory	satisfactory	ADJ	JJ	Degree=Pos	2	xcomp	2:xcomp	_
7	but	but	CCONJ	CC	_	10	cc	7.1:cc	_
8	the	the	DET	DT	Definite=Def|PronType=Art	10	det	10:det	_
9	wine	wine	NOUN	NN	Number=Sing	10	compound	10:compound	_
10	flight	flight	NOUN	NN	Number=Sing	2	conj	7.1:obj|16:nsubj:xsubj	_
11	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	12	nsubj	12:nsubj	_
12	chose	choose	VERB	VBD	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	10	acl:relcl	10:acl:relcl	_
13	to	to	PART	TO	_	16	mark	16:mark	_
14	be	be	AUX	VB	VerbForm=Inf	16	aux:pass	16:aux:pass	_
15	poorly	poorly	ADV	RB	_	16	advmod	16:advmod	_
16	composed	compose	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	10	orphan	7.1:xcomp	SpaceAfter=No
17	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 orphan	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj|9.1:nsubj|10:nsubj	_
2	wish	wish	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	all	all	DET	DT	_	2	iobj	2:iobj	_
4	happy	happy	ADJ	JJ	Degree=Pos	5	amod	5:amod	_
5	holidays	holiday	NOUN	NNS	Number=Plur	2	obj	2:obj	SpaceAfter=No
6	,	,	PUNCT	,	_	10	punct	9.1:punct|10:punct	_
7	and	and	CCONJ	CC	_	10	cc	9.1:cc|10:cc	_
8	moreso	moreso	ADV	RB	_	10	orphan	9.1:advmod	SpaceAfter=No
9	,	,	PUNCT	,	_	10	punct	9.1:punct|10:punct	_
10	peace	peace	NOUN	NN	Number=Sing	2	conj	2:conj:and|9.1:obj	_
11	on	on	ADP	IN	_	12	case	12:case	_
12	earth	earth	NOUN	NN	Number=Sing	10	nmod	10:nmod:on	SpaceAfter=No
13	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


