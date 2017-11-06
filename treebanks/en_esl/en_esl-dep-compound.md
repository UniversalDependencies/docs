---
layout: base
title:  'Statistics of compound in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="en_esl-dep-compound-prt.html">compound:prt</a></tt>.

1209 nodes (1%) are attached to their parents as `compound`.

1206 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22332506203474.

The following 16 pairs of parts of speech are connected with `compound`: <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (878; 73% instances), <tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (219; 18% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (60; 5% instances), <tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (14; 1% instances), <tt><a href="en_esl-pos-NUM.html">NUM</a></tt>-<tt><a href="en_esl-pos-NUM.html">NUM</a></tt> (12; 1% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-SYM.html">SYM</a></tt> (6; 0% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="en_esl-pos-NUM.html">NUM</a></tt>-<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_esl-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-ADP.html">ADP</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-ADP.html">ADP</a></tt>-<tt><a href="en_esl-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-NUM.html">NUM</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 compound	color:blue
1	_	_	DET	PRP$	_	2	nmod:poss	_	_
2	_	_	NOUN	NNS	_	5	nsubj	_	_
3	_	_	VERB	VBD	_	5	cop	_	_
4	_	_	PART	RB	_	5	neg	_	_
5	_	_	ADJ	JJ	_	0	root	_	_
6	_	_	ADV	RB	_	5	advmod	_	_
7	_	_	PART	TO	_	8	mark	_	_
8	_	_	VERB	VB	_	6	xcomp	_	_
9	_	_	DET	PRP$	_	10	nmod:poss	_	_
10	_	_	NOUN	NN	_	8	dobj	_	_
11	_	_	ADP	IN	_	13	case	_	_
12	_	_	NOUN	NN	_	13	compound	_	_
13	_	_	NOUN	NN	_	10	nmod	_	_
14	_	_	PUNCT	,	_	5	punct	_	_
15	_	_	CONJ	CC	_	5	cc	_	_
16	_	_	DET	DT	_	18	det	_	_
17	_	_	NOUN	NN	_	18	compound	_	_
18	_	_	NOUN	NN	_	20	nsubj	_	_
19	_	_	VERB	VBD	_	20	cop	_	_
20	_	_	ADJ	JJ	_	5	conj	_	_
21	_	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 compound	color:blue
1	_	_	PRON	PRP	_	3	nsubj	_	_
2	_	_	AUX	VBP	_	3	aux	_	_
3	_	_	VERB	VBG	_	0	root	_	_
4	_	_	PART	TO	_	5	mark	_	_
5	_	_	VERB	VB	_	3	xcomp	_	_
6	_	_	DET	DT	_	7	det	_	_
7	_	_	NOUN	NN	_	5	dobj	_	_
8	_	_	ADP	IN	_	12	case	_	_
9	_	_	DET	DT	_	12	det	_	_
10	_	_	PROPN	NNP	_	12	amod	_	_
11	_	_	PROPN	NNP	_	12	compound	_	_
12	_	_	PROPN	NNP	_	7	nmod	_	_
13	_	_	ADJ	JJ	_	14	amod	_	_
14	_	_	NOUN	NN	_	5	nmod:tmod	_	_
15	_	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 compound	color:blue
1	_	_	PRON	PRP	_	3	nsubj	_	_
2	_	_	AUX	VBP	_	3	aux	_	_
3	_	_	VERB	VBN	_	0	root	_	_
4	_	_	DET	PRP$	_	5	nmod:poss	_	_
5	_	_	NOUN	NN	_	3	dobj	_	_
6	_	_	ADP	IN	_	11	case	_	_
7	_	_	PUNCT	``	_	9	punct	_	_
8	_	_	DET	DT	_	9	det	_	_
9	_	_	PROPN	NNP	_	11	compound	_	_
10	_	_	PUNCT	''	_	9	punct	_	_
11	_	_	NOUN	NN	_	3	nmod	_	_
12	_	_	ADP	IN	_	14	case	_	_
13	_	_	NOUN	NN	_	14	compound	_	_
14	_	_	PROPN	NNP	_	3	nmod	_	_
15	_	_	PUNCT	,	_	3	punct	_	_
16	_	_	CONJ	CC	_	3	cc	_	_
17	_	_	PRON	PRP	_	18	nsubj	_	_
18	_	_	VERB	VBD	_	3	conj	_	_
19	_	_	ADP	IN	_	21	case	_	_
20	_	_	DET	DT	_	21	det	_	_
21	_	_	NOUN	NN	_	18	nmod	_	_
22	_	_	ADP	IN	_	24	case	_	_
23	_	_	ADJ	JJ	_	24	amod	_	_
24	_	_	PROPN	NNP	_	18	nmod	_	_
25	_	_	PUNCT	.	_	3	punct	_	_

~~~


