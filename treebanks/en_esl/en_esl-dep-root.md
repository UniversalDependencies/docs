---
layout: base
title:  'Statistics of root in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `root`

This relation is universal.

5124 nodes (5%) are attached to their parents as `root`.

5124 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.34445745511319.

The following 13 pairs of parts of speech are connected with `root`: -<tt><a href="en_esl-pos-VERB.html">VERB</a></tt> (3733; 73% instances), -<tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt> (732; 14% instances), -<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (510; 10% instances), -<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (51; 1% instances), -<tt><a href="en_esl-pos-ADV.html">ADV</a></tt> (31; 1% instances), -<tt><a href="en_esl-pos-NUM.html">NUM</a></tt> (31; 1% instances), -<tt><a href="en_esl-pos-PRON.html">PRON</a></tt> (15; 0% instances), -<tt><a href="en_esl-pos-DET.html">DET</a></tt> (8; 0% instances), -<tt><a href="en_esl-pos-AUX.html">AUX</a></tt> (6; 0% instances), -<tt><a href="en_esl-pos-INTJ.html">INTJ</a></tt> (3; 0% instances), -<tt><a href="en_esl-pos-SYM.html">SYM</a></tt> (2; 0% instances), -<tt><a href="en_esl-pos-ADP.html">ADP</a></tt> (1; 0% instances), -<tt><a href="en_esl-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	_	_	PRON	EX	_	2	expl	_	_
2	_	_	VERB	VBZ	_	0	root	_	_
3	_	_	DET	DT	_	5	det	_	_
4	_	_	ADJ	JJ	_	5	amod	_	_
5	_	_	NOUN	NN	_	2	nsubj	_	_
6	_	_	PART	TO	_	7	mark	_	_
7	_	_	VERB	VB	_	5	acl	_	_
8	_	_	ADV	RB	_	7	advmod	_	_
9	_	_	SCONJ	IN	_	12	mark	_	_
10	_	_	DET	DT	_	11	det	_	_
11	_	_	NOUN	NNS	_	12	nsubj	_	_
12	_	_	VERB	VBP	_	2	advcl	_	_
13	_	_	PART	RB	Polarity=Neg	12	advmod	_	_
14	_	_	VERB	VB	_	12	xcomp	_	_
15	_	_	PRON	NN	_	14	obj	_	_
16	_	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
1	_	_	DET	PRP$	_	2	nmod:poss	_	_
2	_	_	NOUN	NNS	_	5	nsubj	_	_
3	_	_	AUX	VBD	_	5	cop	_	_
4	_	_	PART	RB	Polarity=Neg	5	advmod	_	_
5	_	_	ADJ	JJ	_	0	root	_	_
6	_	_	ADV	RB	_	5	advmod	_	_
7	_	_	PART	TO	_	8	mark	_	_
8	_	_	VERB	VB	_	6	xcomp	_	_
9	_	_	DET	PRP$	_	10	nmod:poss	_	_
10	_	_	NOUN	NN	_	8	obj	_	_
11	_	_	ADP	IN	_	13	case	_	_
12	_	_	NOUN	NN	_	13	compound	_	_
13	_	_	NOUN	NN	_	10	nmod	_	_
14	_	_	PUNCT	,	_	5	punct	_	_
15	_	_	CCONJ	CC	_	20	cc	_	_
16	_	_	DET	DT	_	18	det	_	_
17	_	_	NOUN	NN	_	18	compound	_	_
18	_	_	NOUN	NN	_	20	nsubj	_	_
19	_	_	AUX	VBD	_	20	cop	_	_
20	_	_	ADJ	JJ	_	5	conj	_	_
21	_	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	_	_	DET	DT	_	2	det	_	_
2	_	_	NOUN	NN	_	0	root	_	_
3	_	_	PUNCT	,	_	2	punct	_	_
4	_	_	DET	DT	_	5	det	_	_
5	_	_	NOUN	NN	_	6	nsubj	_	_
6	_	_	VERB	VBD	_	2	parataxis	_	_
7	_	_	ADP	IN	_	8	case	_	_
8	_	_	NUM	CD	_	6	obl	_	_
9	_	_	ADP	IN	_	11	case	_	_
10	_	_	DET	DT	_	11	det	_	_
11	_	_	NOUN	NN	_	6	obl	_	_
12	_	_	ADP	IN	_	13	case	_	_
13	_	_	NOUN	CD	_	11	nmod	_	_
14	_	_	CCONJ	CC	_	21	cc	_	_
15	_	_	ADV	WRB	_	17	mark	_	_
16	_	_	PRON	PRP	_	17	nsubj	_	_
17	_	_	VERB	VBD	_	21	advcl	_	_
18	_	_	PRON	PRP	_	21	nsubj	_	_
19	_	_	AUX	MD	_	21	aux	_	_
20	_	_	PART	RB	Polarity=Neg	21	advmod	_	_
21	_	_	VERB	VB	_	6	conj	_	_
22	_	_	DET	DT	_	23	det	_	_
23	_	_	NOUN	NN	_	21	obj	_	_
24	_	_	SCONJ	IN	_	30	mark	_	_
25	_	_	DET	DT	_	26	det	_	_
26	_	_	NOUN	NN	_	28	nmod:poss	_	_
27	_	_	PART	POS	_	26	case	_	_
28	_	_	NOUN	NN	_	30	nsubj	_	_
29	_	_	AUX	VBD	_	30	cop	_	_
30	_	_	ADJ	JJ	_	21	advcl	_	_
31	_	_	PUNCT	-LRB-	_	33	punct	_	_
32	_	_	PRON	PRP	_	33	nsubj	_	_
33	_	_	VERB	VBZ	_	30	parataxis	_	_
34	_	_	ADP	IN	_	35	case	_	_
35	_	_	NUM	CD	_	33	obl	_	_
36	_	_	PUNCT	-RRB-	_	33	punct	_	_
37	_	_	PUNCT	.	_	2	punct	_	_

~~~


