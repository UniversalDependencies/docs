---
layout: base
title:  'Statistics of dislocated in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `dislocated`

This relation is universal.

2 nodes (0%) are attached to their parents as `dislocated`.

1 instances of `dislocated` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.

The following 2 pairs of parts of speech are connected with `dislocated`: <tt><a href="en_esl-pos-PRON.html">PRON</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 1 dislocated	color:blue
1	_	_	NOUN	NN	_	11	dislocated	_	_
2	_	_	CCONJ	CC	_	3	cc	_	_
3	_	_	NOUN	NN	_	1	conj	_	_
4	_	_	PUNCT	,	_	1	punct	_	_
5	_	_	DET	WDT	_	6	nsubj	_	_
6	_	_	VERB	VBP	_	1	acl:relcl	_	_
7	_	_	ADP	IN	_	9	case	_	_
8	_	_	DET	PRP$	_	9	nmod:poss	_	_
9	_	_	NOUN	NN	_	6	obl	_	_
10	_	_	PUNCT	,	_	11	punct	_	_
11	_	_	PRON	PRP	_	13	nsubj	_	_
12	_	_	AUX	MD	_	13	aux	_	_
13	_	_	VERB	VB	_	0	root	_	_
14	_	_	PRON	PRP	_	13	obj	_	_
15	_	_	ADJ	JJR	_	13	xcomp	_	_
16	_	_	CCONJ	CC	_	18	cc	_	_
17	_	_	ADV	RB	Polarity=Neg	18	advmod	_	_
18	_	_	ADJ	JJ	_	15	conj	_	_
19	_	_	PART	TO	_	20	mark	_	_
20	_	_	VERB	VB	_	18	ccomp	_	_
21	_	_	PUNCT	.	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 13 dislocated	color:blue
1	_	_	PROPN	NNP	_	7	nsubj	_	_
2	_	_	CCONJ	CC	_	3	cc	_	_
3	_	_	PROPN	NNP	_	1	conj	_	_
4	_	_	AUX	VBP	_	7	aux	_	_
5	_	_	AUX	VBN	_	7	cop	_	_
6	_	_	ADJ	JJ	_	7	amod	_	_
7	_	_	NOUN	NNS	_	0	root	_	_
8	_	_	ADP	IN	_	10	case	_	_
9	_	_	NUM	CD	_	10	nummod	_	_
10	_	_	NOUN	NNS	_	7	obl	_	_
11	_	_	PUNCT	,	_	7	punct	_	_
12	_	_	DET	PRP$	_	13	nmod:poss	_	_
13	_	_	NOUN	NN	_	1	dislocated	_	_
14	_	_	ADV	RB	_	13	advmod	_	_
15	_	_	PUNCT	.	_	7	punct	_	_

~~~


