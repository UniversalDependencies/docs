---
layout: base
title:  'Statistics of ccomp in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `ccomp`

This relation is universal.

1302 nodes (1%) are attached to their parents as `ccomp`.

1300 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.9247311827957.

The following 20 pairs of parts of speech are connected with `ccomp`: <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-VERB.html">VERB</a></tt> (825; 63% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt> (229; 18% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (119; 9% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-VERB.html">VERB</a></tt> (55; 4% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-ADV.html">ADV</a></tt> (23; 2% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-PRON.html">PRON</a></tt> (10; 1% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt> (9; 1% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (7; 1% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="en_esl-pos-ADV.html">ADV</a></tt>-<tt><a href="en_esl-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="en_esl-pos-AUX.html">AUX</a></tt>-<tt><a href="en_esl-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="en_esl-pos-ADV.html">ADV</a></tt>-<tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-PRON.html">PRON</a></tt>-<tt><a href="en_esl-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 23 ccomp	color:blue
1	_	_	ADP	IN	_	3	case	_	_
2	_	_	DET	DT	_	3	det	_	_
3	_	_	NOUN	NN	_	6	obl	_	_
4	_	_	PUNCT	,	_	6	punct	_	_
5	_	_	PRON	PRP	_	6	nsubj	_	_
6	_	_	VERB	VBD	_	0	root	_	_
7	_	_	ADP	IN	_	8	case	_	_
8	_	_	NOUN	NN	_	6	obl	_	_
9	_	_	ADV	RB	_	8	advmod	_	_
10	_	_	PUNCT	-LRB-	_	11	punct	_	_
11	_	_	CCONJ	CC	_	12	cc	_	_
12	_	_	NOUN	NN	_	8	conj	_	_
13	_	_	ADP	IN	_	16	case	_	_
14	_	_	DET	PRP$	_	16	nmod:poss	_	_
15	_	_	ADJ	JJ	_	16	amod	_	_
16	_	_	NOUN	NN	_	12	nmod	_	_
17	_	_	PUNCT	-RRB-	_	12	punct	_	_
18	_	_	PUNCT	:	_	6	punct	_	_
19	_	_	AUX	VBP	_	21	aux	_	_
20	_	_	PRON	PRP	_	21	nsubj	_	_
21	_	_	VERB	VB	_	6	parataxis	_	_
22	_	_	PRON	NN	_	23	nsubj	_	_
23	_	_	VERB	VBP	_	21	ccomp	_	_
24	_	_	PRON	PRP	_	23	iobj	_	_
25	_	_	ADP	RP	_	23	compound:prt	_	_
26	_	_	PRON	NN	_	23	obj	_	_
27	_	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 14 ccomp	color:blue
1	_	_	PRON	PRP	_	2	nsubj	_	_
2	_	_	VERB	VBD	_	0	root	_	_
3	_	_	PROPN	NNP	_	2	obj	_	_
4	_	_	PART	TO	_	5	mark	_	_
5	_	_	VERB	VB	_	2	xcomp	_	_
6	_	_	ADP	IN	_	7	case	_	_
7	_	_	NOUN	NN	_	5	obl	_	_
8	_	_	SCONJ	IN	_	14	mark	_	_
9	_	_	DET	PRP$	_	10	nmod:poss	_	_
10	_	_	NOUN	NNS	_	14	nsubj	_	_
11	_	_	AUX	MD	_	14	aux	_	_
12	_	_	AUX	VB	_	14	cop	_	_
13	_	_	ADV	RB	_	14	advmod	_	_
14	_	_	ADJ	JJ	_	5	ccomp	_	_
15	_	_	SCONJ	IN	_	17	mark	_	_
16	_	_	PRON	PRP	_	17	nsubj	_	_
17	_	_	VERB	VBD	_	14	advcl	_	_
18	_	_	PART	TO	_	19	mark	_	_
19	_	_	VERB	VB	_	17	xcomp	_	_
20	_	_	PRON	DT	_	19	obj	_	_
21	_	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 16 ccomp	color:blue
1	_	_	VERB	VBG	_	7	advcl	_	_
2	_	_	PRON	PRP	_	1	obj	_	_
3	_	_	ADP	IN	_	4	case	_	_
4	_	_	NOUN	NN	_	1	obl	_	_
5	_	_	PRON	PRP	_	7	nsubj	_	_
6	_	_	AUX	MD	_	7	aux	_	_
7	_	_	VERB	VB	_	0	root	_	_
8	_	_	PART	TO	_	9	mark	_	_
9	_	_	VERB	VB	_	7	xcomp	_	_
10	_	_	SCONJ	IN	_	16	mark	_	_
11	_	_	DET	DT	_	12	det	_	_
12	_	_	NOUN	NN	_	16	nsubj	_	_
13	_	_	AUX	VBZ	_	16	cop	_	_
14	_	_	DET	DT	_	16	det	_	_
15	_	_	ADJ	JJ	_	16	amod	_	_
16	_	_	NOUN	NN	_	9	ccomp	_	_
17	_	_	ADP	IN	_	19	case	_	_
18	_	_	DET	DT	_	19	det	_	_
19	_	_	NOUN	NNS	_	16	obl	_	_
20	_	_	PUNCT	,	_	19	punct	_	_
21	_	_	NOUN	NNS	_	19	conj	_	_
22	_	_	PUNCT	,	_	19	punct	_	_
23	_	_	NOUN	NNS	_	19	conj	_	_
24	_	_	CCONJ	CC	_	26	cc	_	_
25	_	_	ADV	RB	_	26	advmod	_	_
26	_	_	ADV	RB	_	19	advmod	_	_
27	_	_	CCONJ	CC	_	28	cc	_	_
28	_	_	ADV	RB	_	19	advmod	_	_
29	_	_	PUNCT	.	_	7	punct	_	_

~~~


