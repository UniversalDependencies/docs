---
layout: base
title:  'Statistics of auxpass in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `auxpass`

This relation is universal.

453 nodes (1%) are attached to their parents as `auxpass`.

453 instances of `auxpass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11037527593819.

The following 3 pairs of parts of speech are connected with `auxpass`: <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-AUX.html">AUX</a></tt> (448; 99% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="en_esl-pos-ADV.html">ADV</a></tt>-<tt><a href="en_esl-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 auxpass	color:blue
1	_	_	PRON	PRP	_	2	nsubj	_	_
2	_	_	VERB	VBD	_	0	root	_	_
3	_	_	ADP	IN	_	5	case	_	_
4	_	_	ADJ	JJ	_	5	amod	_	_
5	_	_	NOUN	NNS	_	2	nmod	_	_
6	_	_	PUNCT	,	_	5	punct	_	_
7	_	_	NOUN	NN	_	5	conj	_	_
8	_	_	PRON	WDT	_	11	nsubjpass	_	_
9	_	_	AUX	VBD	_	11	auxpass	_	_
10	_	_	ADV	RB	_	11	advmod	_	_
11	_	_	VERB	VBN	_	7	acl:relcl	_	_
12	_	_	ADP	IN	_	11	nmod	_	_
13	_	_	CONJ	CC	_	2	cc	_	_
14	_	_	PRON	PRP	_	15	nsubj	_	_
15	_	_	VERB	VBD	_	2	conj	_	_
16	_	_	ADP	IN	_	17	case	_	_
17	_	_	PRON	NN	_	15	nmod	_	_
18	_	_	PRON	WP	_	21	iobj	_	_
19	_	_	PRON	PRP	_	21	nsubj	_	_
20	_	_	AUX	MD	_	21	aux	_	_
21	_	_	VERB	VB	_	17	acl:relcl	_	_
22	_	_	DET	PRP$	_	24	nmod:poss	_	_
23	_	_	ADJ	JJ	_	24	amod	_	_
24	_	_	NOUN	NNS	_	21	dobj	_	_
25	_	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 auxpass	color:blue
1	_	_	PRON	PRP	_	3	nsubjpass	_	_
2	_	_	AUX	VBZ	_	3	auxpass	_	_
3	_	_	ADJ	JJ	_	0	root	_	_
4	_	_	ADP	IN	_	5	case	_	_
5	_	_	NUM	CD	_	3	nmod	_	_
6	_	_	ADP	IN	_	7	case	_	_
7	_	_	NUM	CD	_	3	nmod	_	_
8	_	_	CONJ	CC	_	3	cc	_	_
9	_	_	PRON	PRP	_	12	nsubj	_	_
10	_	_	VERB	VBZ	_	12	cop	_	_
11	_	_	ADP	IN	_	12	case	_	_
12	_	_	ADJ	JJ	_	3	conj	_	_
13	_	_	ADP	IN	_	14	case	_	_
14	_	_	NOUN	NN	_	12	nmod	_	_
15	_	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 23 auxpass	color:blue
1	_	_	ADV	RB	_	6	advmod	_	_
2	_	_	ADP	IN	_	4	case	_	_
3	_	_	DET	DT	_	4	det	_	_
4	_	_	NOUN	NN	_	5	nmod	_	_
5	_	_	NOUN	NN	_	6	nsubj	_	_
6	_	_	VERB	VBZ	_	0	root	_	_
7	_	_	PUNCT	``	_	8	punct	_	_
8	_	_	NOUN	NNS	_	6	dobj	_	_
9	_	_	ADJ	JJ	_	8	xcomp	_	_
10	_	_	PUNCT	''	_	8	punct	_	_
11	_	_	CONJ	CC	_	6	cc	_	_
12	_	_	DET	DT	_	13	neg	_	_
13	_	_	NOUN	NN	_	15	nmod	_	_
14	_	_	PRON	PRP	_	15	nsubj	_	_
15	_	_	VERB	VBD	_	6	conj	_	_
16	_	_	PART	TO	_	17	mark	_	_
17	_	_	VERB	VBD	_	15	xcomp	_	_
18	_	_	ADJ	JJ	_	19	amod	_	_
19	_	_	SYM	$	_	17	dobj	_	_
20	_	_	NUM	CD	_	19	nummod	_	_
21	_	_	CONJ	CC	_	15	cc	_	_
22	_	_	NOUN	NN	_	24	nsubjpass	_	_
23	_	_	AUX	VBD	_	24	auxpass	_	_
24	_	_	ADV	RB	_	15	conj	_	_
25	_	_	ADP	IN	_	27	case	_	_
26	_	_	ADP	IN	_	25	mwe	_	_
27	_	_	VERB	VBG	_	24	nmod	_	_
28	_	_	PRON	NN	_	27	dobj	_	_
29	_	_	PUNCT	.	_	6	punct	_	_

~~~


