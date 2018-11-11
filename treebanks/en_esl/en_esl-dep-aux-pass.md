---
layout: base
title:  'Statistics of aux:pass in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="en_esl-dep-aux.html">aux</a></tt>.

495 nodes (1%) are attached to their parents as `aux:pass`.

495 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11919191919192.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-AUX.html">AUX</a></tt> (490; 99% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="en_esl-pos-ADV.html">ADV</a></tt>-<tt><a href="en_esl-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 aux:pass	color:blue
1	_	_	PRON	PRP	_	2	nsubj	_	_
2	_	_	VERB	VBD	_	0	root	_	_
3	_	_	ADP	IN	_	5	case	_	_
4	_	_	ADJ	JJ	_	5	amod	_	_
5	_	_	NOUN	NNS	_	2	obl	_	_
6	_	_	PUNCT	,	_	5	punct	_	_
7	_	_	NOUN	NN	_	5	conj	_	_
8	_	_	PRON	WDT	_	11	nsubj:pass	_	_
9	_	_	AUX	VBD	_	11	aux:pass	_	_
10	_	_	ADV	RB	_	11	advmod	_	_
11	_	_	VERB	VBN	_	7	acl:relcl	_	_
12	_	_	ADP	IN	_	11	obl	_	_
13	_	_	CCONJ	CC	_	15	cc	_	_
14	_	_	PRON	PRP	_	15	nsubj	_	_
15	_	_	VERB	VBD	_	2	conj	_	_
16	_	_	ADP	IN	_	17	case	_	_
17	_	_	PRON	NN	_	15	obl	_	_
18	_	_	PRON	WP	_	21	iobj	_	_
19	_	_	PRON	PRP	_	21	nsubj	_	_
20	_	_	AUX	MD	_	21	aux	_	_
21	_	_	VERB	VB	_	17	acl:relcl	_	_
22	_	_	DET	PRP$	_	24	nmod:poss	_	_
23	_	_	ADJ	JJ	_	24	amod	_	_
24	_	_	NOUN	NNS	_	21	obj	_	_
25	_	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:pass	color:blue
1	_	_	PRON	PRP	_	3	nsubj:pass	_	_
2	_	_	AUX	VBZ	_	3	aux:pass	_	_
3	_	_	ADJ	JJ	_	0	root	_	_
4	_	_	ADP	IN	_	5	case	_	_
5	_	_	NUM	CD	_	3	obl	_	_
6	_	_	ADP	IN	_	7	case	_	_
7	_	_	NUM	CD	_	3	obl	_	_
8	_	_	CCONJ	CC	_	12	cc	_	_
9	_	_	PRON	PRP	_	12	nsubj	_	_
10	_	_	AUX	VBZ	_	12	cop	_	_
11	_	_	ADP	IN	_	12	case	_	_
12	_	_	ADJ	JJ	_	3	conj	_	_
13	_	_	ADP	IN	_	14	case	_	_
14	_	_	NOUN	NN	_	12	obl	_	_
15	_	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 23 aux:pass	color:blue
1	_	_	ADV	RB	_	6	advmod	_	_
2	_	_	ADP	IN	_	4	case	_	_
3	_	_	DET	DT	_	4	det	_	_
4	_	_	NOUN	NN	_	5	nmod	_	_
5	_	_	NOUN	NN	_	6	nsubj	_	_
6	_	_	VERB	VBZ	_	0	root	_	_
7	_	_	PUNCT	``	_	8	punct	_	_
8	_	_	NOUN	NNS	_	6	obj	_	_
9	_	_	ADJ	JJ	_	8	xcomp	_	_
10	_	_	PUNCT	''	_	8	punct	_	_
11	_	_	CCONJ	CC	_	15	cc	_	_
12	_	_	DET	DT	Polarity=Neg	13	det	_	_
13	_	_	NOUN	NN	_	15	obl	_	_
14	_	_	PRON	PRP	_	15	nsubj	_	_
15	_	_	VERB	VBD	_	6	conj	_	_
16	_	_	PART	TO	_	17	mark	_	_
17	_	_	VERB	VBD	_	15	xcomp	_	_
18	_	_	ADJ	JJ	_	19	amod	_	_
19	_	_	SYM	$	_	17	obj	_	_
20	_	_	NUM	CD	_	19	nummod	_	_
21	_	_	CCONJ	CC	_	24	cc	_	_
22	_	_	NOUN	NN	_	24	nsubj:pass	_	_
23	_	_	AUX	VBD	_	24	aux:pass	_	_
24	_	_	ADV	RB	_	15	conj	_	_
25	_	_	ADP	IN	_	27	case	_	_
26	_	_	ADP	IN	_	25	fixed	_	_
27	_	_	VERB	VBG	_	24	obl	_	_
28	_	_	PRON	NN	_	27	obj	_	_
29	_	_	PUNCT	.	_	6	punct	_	_

~~~


