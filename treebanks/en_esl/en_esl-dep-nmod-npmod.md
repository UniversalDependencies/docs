---
layout: base
title:  'Statistics of nmod:npmod in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `nmod:npmod`

This relation is a language-specific subtype of <tt><a href="en_esl-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_esl-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="en_esl-dep-nmod-tmod.html">nmod:tmod</a></tt>.

179 nodes (0%) are attached to their parents as `nmod:npmod`.

118 instances of `nmod:npmod` (66%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.59217877094972.

The following 17 pairs of parts of speech are connected with `nmod:npmod`: <tt><a href="en_esl-pos-ADV.html">ADV</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (59; 33% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (51; 28% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (27; 15% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (16; 9% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt> (6; 3% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-PRON.html">PRON</a></tt> (5; 3% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="en_esl-pos-ADP.html">ADP</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_esl-pos-ADV.html">ADV</a></tt>-<tt><a href="en_esl-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="en_esl-pos-PRON.html">PRON</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_esl-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:npmod	color:blue
1	_	_	DET	DT	_	2	det	_	_
2	_	_	NOUN	NNS	_	3	nmod:npmod	_	_
3	_	_	ADV	RB	_	6	advmod	_	_
4	_	_	DET	PRP$	_	5	nmod:poss	_	_
5	_	_	NOUN	NN	_	6	nsubj	_	_
6	_	_	VERB	VBD	_	0	root	_	_
7	_	_	DET	DT	_	9	det	_	_
8	_	_	ADJ	JJ	_	9	amod	_	_
9	_	_	NOUN	NN	_	6	dobj	_	_
10	_	_	ADP	IN	_	11	case	_	_
11	_	_	NOUN	NN	_	9	nmod	_	_
12	_	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 3 nmod:npmod	color:blue
1	_	_	CONJ	CC	_	13	cc	_	_
2	_	_	NUM	CD	_	3	nummod	_	_
3	_	_	NOUN	NN	_	13	nmod:npmod	_	_
4	_	_	SCONJ	IN	_	7	mark	_	_
5	_	_	PRON	PRP	_	7	nsubj	_	_
6	_	_	AUX	VBD	_	7	aux	_	_
7	_	_	VERB	VBG	_	13	advcl	_	_
8	_	_	ADV	RB	_	7	advmod	_	_
9	_	_	ADP	IN	_	11	case	_	_
10	_	_	DET	DT	_	11	det	_	_
11	_	_	NOUN	NN	_	7	nmod	_	_
12	_	_	PRON	PRP	_	13	nsubj	_	_
13	_	_	VERB	VBD	_	0	root	_	_
14	_	_	PROPN	NNP	_	13	dobj	_	_
15	_	_	ADP	IN	_	17	case	_	_
16	_	_	DET	DT	_	17	det	_	_
17	_	_	NOUN	NN	_	13	nmod	_	_
18	_	_	ADP	IN	_	21	case	_	_
19	_	_	DET	PRP$	_	21	nmod:poss	_	_
20	_	_	NOUN	NN	_	21	compound	_	_
21	_	_	NOUN	NN	_	17	nmod	_	_
22	_	_	VERB	VBG	_	13	advcl	_	_
23	_	_	ADP	IN	_	25	case	_	_
24	_	_	DET	PRP$	_	25	nmod:poss	_	_
25	_	_	NOUN	NN	_	22	dobj	_	_
26	_	_	PUNCT	.	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nmod:npmod	color:blue
1	_	_	DET	DT	_	3	det	_	_
2	_	_	ADJ	JJ	_	3	amod	_	_
3	_	_	NOUN	NN	_	8	nsubj	_	_
4	_	_	VERB	VBD	_	8	cop	_	_
5	_	_	ADV	RB	_	8	advmod	_	_
6	_	_	NUM	CD	_	7	nummod	_	_
7	_	_	NOUN	NN	_	8	nmod:npmod	_	_
8	_	_	ADJ	JJ	_	0	root	_	_
9	_	_	CONJ	CC	_	8	cc	_	_
10	_	_	ADP	IN	_	12	case	_	_
11	_	_	DET	DT	_	12	det	_	_
12	_	_	NOUN	NN	_	17	nmod	_	_
13	_	_	PUNCT	,	_	17	punct	_	_
14	_	_	PRON	PRP	_	17	expl	_	_
15	_	_	VERB	VBZ	_	17	cop	_	_
16	_	_	ADV	RB	_	17	advmod	_	_
17	_	_	ADJ	JJ	_	8	conj	_	_
18	_	_	PART	TO	_	19	mark	_	_
19	_	_	VERB	VB	_	17	csubj	_	_
20	_	_	DET	PRP$	_	21	nmod:poss	_	_
21	_	_	NOUN	NN	_	19	dobj	_	_
22	_	_	VERB	VBN	_	19	xcomp	_	_
23	_	_	VERB	VBG	_	19	xcomp	_	_
24	_	_	DET	DT	_	26	det	_	_
25	_	_	ADJ	JJ	_	26	amod	_	_
26	_	_	NOUN	NN	_	23	dobj	_	_
27	_	_	PUNCT	.	_	8	punct	_	_

~~~


