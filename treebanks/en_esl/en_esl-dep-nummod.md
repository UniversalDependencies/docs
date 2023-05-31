---
layout: base
title:  'Statistics of nummod in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `nummod`

This relation is universal.

528 nodes (1%) are attached to their parents as `nummod`.

485 instances of `nummod` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14204545454545.

The following 12 pairs of parts of speech are connected with `nummod`: <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-NUM.html">NUM</a></tt> (461; 87% instances), <tt><a href="en_esl-pos-SYM.html">SYM</a></tt>-<tt><a href="en_esl-pos-NUM.html">NUM</a></tt> (35; 7% instances), <tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_esl-pos-NUM.html">NUM</a></tt> (20; 4% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="en_esl-pos-NUM.html">NUM</a></tt>-<tt><a href="en_esl-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="en_esl-pos-ADV.html">ADV</a></tt>-<tt><a href="en_esl-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-PRON.html">PRON</a></tt>-<tt><a href="en_esl-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="en_esl-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-X.html">X</a></tt>-<tt><a href="en_esl-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nummod	color:blue
1	_	_	ADP	IN	_	2	case	_	_
2	_	_	PRON	DT	_	4	obl	_	_
3	_	_	AUX	MD	_	4	aux	_	_
4	_	_	VERB	VB	_	0	root	_	_
5	_	_	DET	DT	_	6	det	_	_
6	_	_	NOUN	NN	_	4	obj	_	_
7	_	_	DET	WDT	_	8	nsubj	_	_
8	_	_	VERB	VBZ	_	6	acl:relcl	_	_
9	_	_	NUM	CD	_	10	nummod	_	_
10	_	_	NOUN	NNS	_	8	obj	_	_
11	_	_	ADP	IN	_	12	case	_	_
12	_	_	NOUN	NN	_	10	nmod	_	_
13	_	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 nummod	color:blue
1	_	_	NUM	CD	_	8	nsubj	_	_
2	_	_	ADP	IN	_	4	case	_	_
3	_	_	DET	PRP$	_	4	nmod:poss	_	_
4	_	_	NOUN	NN	_	1	nmod	_	_
5	_	_	PUNCT	,	_	4	punct	_	_
6	_	_	PROPN	NNP	_	4	appos	_	_
7	_	_	PUNCT	,	_	8	punct	_	_
8	_	_	VERB	VBD	_	0	root	_	_
9	_	_	PART	TO	_	10	mark	_	_
10	_	_	VERB	VB	_	8	xcomp	_	_
11	_	_	DET	DT	_	13	det	_	_
12	_	_	ADJ	JJ	_	13	amod	_	_
13	_	_	NOUN	NN	_	10	obj	_	_
14	_	_	DET	WDT	_	15	nsubj	_	_
15	_	_	VERB	VBZ	_	13	acl:relcl	_	_
16	_	_	SYM	$	_	15	obj	_	_
17	_	_	NUM	CD	_	16	nummod	_	_
18	_	_	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 nummod	color:blue
1	_	_	CCONJ	CC	_	10	cc	_	_
2	_	_	DET	DT	_	4	det	_	_
3	_	_	ADJ	JJ	_	4	amod	_	_
4	_	_	NOUN	NN	_	10	nsubj	_	_
5	_	_	ADP	IN	_	7	case	_	_
6	_	_	DET	DT	_	7	det	_	_
7	_	_	NOUN	NN	_	4	nmod	_	_
8	_	_	AUX	VBZ	_	10	cop	_	_
9	_	_	DET	DT	_	10	det	_	_
10	_	_	NOUN	NN	_	0	root	_	_
11	_	_	DET	WDT	_	14	nsubj	_	_
12	_	_	AUX	VBZ	_	14	cop	_	_
13	_	_	ADP	IN	_	14	case	_	_
14	_	_	PROPN	NNP	_	10	acl:relcl	_	_
15	_	_	NUM	CD	_	16	nummod	_	_
16	_	_	PROPN	NNP	_	14	appos	_	_
17	_	_	ADP	IN	_	18	case	_	_
18	_	_	NUM	CD	_	14	obl	_	_
19	_	_	ADP	IN	_	20	case	_	_
20	_	_	NUM	CD	_	14	obl	_	_
21	_	_	PUNCT	.	_	10	punct	_	_

~~~


