---
layout: base
title:  'Statistics of vocative in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `vocative`

This relation is universal.

16 nodes (0%) are attached to their parents as `vocative`.

8 instances of `vocative` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.3125.

The following 5 pairs of parts of speech are connected with `vocative`: <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (11; 69% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (1; 6% instances), <tt><a href="en_esl-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (1; 6% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 vocative	color:blue
1	_	_	VERB	VB	_	0	root	_	_
2	_	_	PRON	PRP	_	1	obj	_	_
3	_	_	PROPN	NNP	_	4	compound	_	_
4	_	_	PROPN	NNP	_	1	vocative	_	_
5	_	_	PROPN	NNP	_	4	flat	_	_
6	_	_	PUNCT	,	_	1	punct	_	_
7	_	_	CCONJ	CC	_	9	cc	_	_
8	_	_	INTJ	UH	_	9	discourse	_	_
9	_	_	VERB	VB	_	1	conj	_	_
10	_	_	PRON	PRP	_	9	obj	_	_
11	_	_	ADV	RB	_	9	advmod	_	_
12	_	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 vocative	color:blue
1	_	_	INTJ	UH	_	2	discourse	_	_
2	_	_	NOUN	NNS	_	7	vocative	_	_
3	_	_	PUNCT	,	_	7	punct	_	_
4	_	_	PRON	WDT	_	7	nsubj	_	_
5	_	_	AUX	VBD	_	7	cop	_	_
6	_	_	DET	DT	_	7	det	_	_
7	_	_	NOUN	NN	_	0	root	_	_
8	_	_	PRON	PRP	_	9	nsubj	_	_
9	_	_	VERB	VBD	_	7	acl:relcl	_	_
10	_	_	VERB	VBD	_	9	xcomp	_	_
11	_	_	ADP	IN	_	13	case	_	_
12	_	_	DET	PRP$	_	13	nmod:poss	_	_
13	_	_	NOUN	NNS	_	10	obl	_	_
14	_	_	ADP	IN	_	17	case	_	_
15	_	_	DET	DT	_	17	det	_	_
16	_	_	ADJ	JJ	_	17	amod	_	_
17	_	_	NOUN	NN	_	10	obl	_	_
18	_	_	PUNCT	,	_	7	punct	_	_
19	_	_	CCONJ	CC	_	30	cc	_	_
20	_	_	ADV	WRB	_	23	advmod	_	_
21	_	_	PRON	PRP	_	23	nsubj	_	_
22	_	_	AUX	MD	_	23	aux	_	_
23	_	_	VERB	VB	_	30	advcl	_	_
24	_	_	DET	DT	_	25	det	_	_
25	_	_	NOUN	NN	_	23	obj	_	_
26	_	_	ADP	IN	_	28	case	_	_
27	_	_	DET	PRP$	_	28	nmod:poss	_	_
28	_	_	NOUN	NN	_	25	nmod	_	_
29	_	_	ADV	RB	_	30	advmod	_	_
30	_	_	VERB	VBP	_	7	conj	_	_
31	_	_	DET	DT	_	35	det	_	_
32	_	_	PUNCT	``	_	35	punct	_	_
33	_	_	PROPN	NNP	_	35	compound	_	_
34	_	_	PUNCT	HYPH	_	35	punct	_	_
35	_	_	NOUN	NN	_	30	obj	_	_
36	_	_	PUNCT	''	_	35	punct	_	_
37	_	_	PUNCT	,	_	30	punct	_	_
38	_	_	ADJ	JJ	_	39	amod	_	_
39	_	_	NOUN	NN	_	30	obl:npmod	_	_
40	_	_	ADV	RB	_	30	advmod	_	_
41	_	_	PUNCT	,	_	30	punct	_	_
42	_	_	CCONJ	CC	_	45	cc	_	_
43	_	_	PRON	PRP	_	45	nsubj	_	_
44	_	_	AUX	MD	_	45	aux	_	_
45	_	_	VERB	VB	_	30	conj	_	_
46	_	_	DET	DT	_	47	det	_	_
47	_	_	NOUN	NN	_	45	obj	_	_
48	_	_	ADP	IN	_	51	case	_	_
49	_	_	DET	DT	_	51	det	_	_
50	_	_	ADJ	JJ	_	51	amod	_	_
51	_	_	NOUN	NN	_	47	nmod	_	_
52	_	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 24 vocative	color:blue
1	_	_	PROPN	NNP	_	3	nsubj	_	_
2	_	_	AUX	MD	_	3	aux	_	_
3	_	_	VERB	VBG	_	0	root	_	_
4	_	_	SCONJ	IN	_	9	mark	_	_
5	_	_	DET	DT	_	6	det	_	_
6	_	_	NOUN	NN	_	9	nsubj	_	_
7	_	_	AUX	MD	_	9	aux	_	_
8	_	_	AUX	VB	_	9	cop	_	_
9	_	_	ADJ	JJ	_	3	ccomp	_	_
10	_	_	ADV	WRB	_	13	advmod	_	_
11	_	_	DET	DT	_	12	det	_	_
12	_	_	NOUN	NN	_	13	nsubj	_	_
13	_	_	VERB	VBD	_	3	advcl	_	_
14	_	_	DET	DT	_	15	det	_	_
15	_	_	NOUN	NNS	_	13	obj	_	_
16	_	_	PUNCT	``	_	19	punct	_	_
17	_	_	PRON	PRP	_	19	nsubj	_	_
18	_	_	AUX	VBP	_	19	cop	_	_
19	_	_	ADJ	JJ	_	15	parataxis	_	_
20	_	_	PART	TO	_	21	mark	_	_
21	_	_	VERB	VB	_	19	ccomp	_	_
22	_	_	PRON	PRP	_	21	obj	_	_
23	_	_	PUNCT	,	_	19	punct	_	_
24	_	_	PROPN	NNP	_	19	vocative	_	_
25	_	_	PUNCT	.	_	19	punct	_	_
26	_	_	PUNCT	''	_	19	punct	_	_

~~~


