---
layout: base
title:  'Statistics of nmod:tmod in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="en_esl-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_esl-dep-nmod-npmod.html">nmod:npmod</a></tt>, <tt><a href="en_esl-dep-nmod-poss.html">nmod:poss</a></tt>.

259 nodes (0%) are attached to their parents as `nmod:tmod`.

151 instances of `nmod:tmod` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.92664092664093.

The following 13 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (195; 75% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (15; 6% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (14; 5% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (9; 3% instances), <tt><a href="en_esl-pos-ADV.html">ADV</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (8; 3% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-NUM.html">NUM</a></tt> (6; 2% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_esl-pos-ADP.html">ADP</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-AUX.html">AUX</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-DET.html">DET</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 nmod:tmod	color:blue
1	_	_	PRON	PRP	_	2	nsubj	_	_
2	_	_	VERB	VBD	_	0	root	_	_
3	_	_	DET	DT	_	4	det	_	_
4	_	_	NOUN	NNS	_	2	dobj	_	_
5	_	_	CONJ	CC	_	2	cc	_	_
6	_	_	PRON	PRP	_	8	nsubj	_	_
7	_	_	AUX	MD	_	8	aux	_	_
8	_	_	VERB	VB	_	2	conj	_	_
9	_	_	PRON	PRP	_	8	dobj	_	_
10	_	_	ADP	IN	_	11	case	_	_
11	_	_	PRON	PRP	_	8	nmod	_	_
12	_	_	ADV	WRB	_	14	mark	_	_
13	_	_	PRON	PRP	_	14	nsubj	_	_
14	_	_	VERB	VBP	_	8	advcl	_	_
15	_	_	ADJ	JJ	_	16	amod	_	_
16	_	_	NOUN	NN	_	14	nmod:tmod	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod:tmod	color:blue
1	_	_	NOUN	NN	_	0	root	_	_
2	_	_	DET	DT	_	3	det	_	_
3	_	_	NOUN	NN	_	1	nmod:tmod	_	_
4	_	_	DET	DT	_	5	det	_	_
5	_	_	NOUN	NNS	_	12	nsubj	_	_
6	_	_	PUNCT	,	_	5	punct	_	_
7	_	_	DET	WDT	_	10	dobj	_	_
8	_	_	PRON	PRP	_	10	nsubj	_	_
9	_	_	AUX	VBD	_	10	aux	_	_
10	_	_	VERB	VBN	_	5	acl:relcl	_	_
11	_	_	VERB	VBD	_	12	cop	_	_
12	_	_	ADJ	JJ	_	1	parataxis	_	_
13	_	_	CONJ	CC	_	12	cc	_	_
14	_	_	PRON	EX	_	15	expl	_	_
15	_	_	VERB	VBD	_	12	conj	_	_
16	_	_	DET	DT	_	17	det	_	_
17	_	_	NOUN	NN	_	15	nsubj	_	_
18	_	_	ADP	IN	_	19	case	_	_
19	_	_	NOUN	NN	_	17	nmod	_	_
20	_	_	ADP	IN	_	22	case	_	_
21	_	_	DET	DT	_	22	det	_	_
22	_	_	NOUN	NN	_	15	nmod	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 nmod:tmod	color:blue
1	_	_	PRON	PRP	_	2	nsubj	_	_
2	_	_	VERB	VBP	_	0	root	_	_
3	_	_	SCONJ	IN	_	14	mark	_	_
4	_	_	ADV	RB	_	5	advmod	_	_
5	_	_	ADJ	JJR	_	7	amod	_	_
6	_	_	ADJ	JJ	_	7	amod	_	_
7	_	_	NOUN	NNS	_	14	nsubj	_	_
8	_	_	ADP	IN	_	9	case	_	_
9	_	_	NOUN	NNS	_	7	nmod	_	_
10	_	_	CONJ	CC	_	9	cc	_	_
11	_	_	NOUN	NNS	_	9	conj	_	_
12	_	_	AUX	MD	_	14	aux	_	_
13	_	_	VERB	VB	_	14	cop	_	_
14	_	_	ADJ	JJ	_	2	ccomp	_	_
15	_	_	ADJ	JJ	_	16	amod	_	_
16	_	_	NOUN	NN	_	14	nmod:tmod	_	_
17	_	_	PUNCT	.	_	2	punct	_	_

~~~


