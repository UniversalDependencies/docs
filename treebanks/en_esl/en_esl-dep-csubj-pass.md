---
layout: base
title:  'Statistics of csubj:pass in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="en_esl-dep-csubj.html">csubj</a></tt>.

31 nodes (0%) are attached to their parents as `csubj:pass`.

30 instances of `csubj:pass` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.38709677419355.

The following 5 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-VERB.html">VERB</a></tt> (18; 58% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt> (5; 16% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (4; 13% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (3; 10% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-NUM.html">NUM</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 csubj:pass	color:blue
1	_	_	CCONJ	CC	_	5	cc	_	_
2	_	_	AUX	VBZ	_	5	aux:pass	_	_
3	_	_	PRON	PRP	_	5	expl	_	_
4	_	_	ADV	RB	_	5	advmod	_	_
5	_	_	VERB	VBN	_	0	root	_	_
6	_	_	PART	TO	_	7	mark	_	_
7	_	_	VERB	VBG	_	5	csubj:pass	_	_
8	_	_	DET	PRP$	_	9	nmod:poss	_	_
9	_	_	NOUN	NN	_	7	obj	_	_
10	_	_	ADP	IN	_	7	obl	_	_
11	_	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 19 csubj:pass	color:blue
1	_	_	VERB	VBG	_	8	advcl	_	_
2	_	_	ADP	IN	_	4	case	_	_
3	_	_	ADJ	JJ	_	4	amod	_	_
4	_	_	NOUN	NNS	_	1	obl	_	_
5	_	_	PUNCT	,	_	8	punct	_	_
6	_	_	PRON	PRP	_	8	expl	_	_
7	_	_	AUX	VBD	_	8	aux:pass	_	_
8	_	_	VERB	VBN	_	0	root	_	_
9	_	_	SCONJ	IN	_	19	mark	_	_
10	_	_	NOUN	NN	_	19	nsubj	_	_
11	_	_	CCONJ	CC	_	12	cc	_	_
12	_	_	NOUN	NN	_	10	conj	_	_
13	_	_	PUNCT	,	_	10	punct	_	_
14	_	_	NOUN	NN	_	10	conj	_	_
15	_	_	CCONJ	CC	_	17	cc	_	_
16	_	_	NOUN	NN	_	17	compound	_	_
17	_	_	PROPN	NNP	_	10	conj	_	_
18	_	_	AUX	VBP	_	19	cop	_	_
19	_	_	ADJ	JJ	_	8	csubj:pass	_	_
20	_	_	SCONJ	IN	_	21	mark	_	_
21	_	_	VERB	VBG	_	19	advcl	_	_
22	_	_	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 csubj:pass	color:blue
1	_	_	ADV	RB	_	7	advmod	_	_
2	_	_	ADP	IN	_	3	case	_	_
3	_	_	DET	DT	_	1	obl	_	_
4	_	_	PUNCT	,	_	7	punct	_	_
5	_	_	PRON	PRP	_	7	expl	_	_
6	_	_	AUX	VBZ	_	7	aux	_	_
7	_	_	VERB	VBN	_	0	root	_	_
8	_	_	SCONJ	IN	_	12	mark	_	_
9	_	_	DET	DT	_	10	det	_	_
10	_	_	NOUN	NNS	_	12	nsubj	_	_
11	_	_	AUX	VBD	_	12	cop	_	_
12	_	_	PROPN	NNP	_	7	csubj:pass	_	_
13	_	_	PROPN	NNP	_	12	flat	_	_
14	_	_	CCONJ	CC	_	15	cc	_	_
15	_	_	PROPN	NNP	_	12	conj	_	_
16	_	_	PROPN	NNP	_	15	flat	_	_
17	_	_	CCONJ	CC	_	22	cc	_	_
18	_	_	DET	DT	_	19	det	_	_
19	_	_	NOUN	NN	_	22	nsubj	_	_
20	_	_	AUX	VBD	_	22	cop	_	_
21	_	_	PART	RB	Polarity=Neg	22	advmod	_	_
22	_	_	PROPN	NNP	_	7	conj	_	_
23	_	_	PROPN	NNP	_	22	flat	_	_
24	_	_	PUNCT	.	_	7	punct	_	_

~~~


