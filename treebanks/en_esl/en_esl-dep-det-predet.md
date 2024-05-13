---
layout: base
title:  'Statistics of det:predet in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `det:predet`

This relation is a language-specific subtype of <tt><a href="en_esl-dep-det.html">det</a></tt>.

198 nodes (0%) are attached to their parents as `det:predet`.

198 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.2979797979798.

The following 7 pairs of parts of speech are connected with `det:predet`: <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-DET.html">DET</a></tt> (186; 94% instances), <tt><a href="en_esl-pos-PRON.html">PRON</a></tt>-<tt><a href="en_esl-pos-DET.html">DET</a></tt> (4; 2% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-DET.html">DET</a></tt> (3; 2% instances), <tt><a href="en_esl-pos-DET.html">DET</a></tt>-<tt><a href="en_esl-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="en_esl-pos-ADV.html">ADV</a></tt>-<tt><a href="en_esl-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_esl-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 det:predet	color:blue
1	_	_	DET	DT	_	2	det	_	_
2	_	_	NOUN	NN	_	4	nsubj	_	_
3	_	_	AUX	MD	_	4	aux	_	_
4	_	_	VERB	VB	_	0	root	_	_
5	_	_	DET	PDT	_	8	det:predet	_	_
6	_	_	DET	DT	_	8	det	_	_
7	_	_	ADJ	JJS	_	8	amod	_	_
8	_	_	NOUN	NN	_	4	obj	_	_
9	_	_	ADP	IN	_	13	case	_	_
10	_	_	DET	DT	_	13	det	_	_
11	_	_	ADV	RB	_	12	advmod	_	_
12	_	_	ADJ	JJ	_	13	amod	_	_
13	_	_	NOUN	NN	_	8	nmod	_	_
14	_	_	ADP	IN	_	16	case	_	_
15	_	_	NOUN	NNS	_	16	compound	_	_
16	_	_	NOUN	NN	_	13	nmod	_	_
17	_	_	ADP	IN	_	18	case	_	_
18	_	_	NOUN	NN	_	13	nmod	_	_
19	_	_	X	GW	_	18	goeswith	_	_
20	_	_	CCONJ	CC	_	22	cc	_	_
21	_	_	ADJ	JJ	_	22	amod	_	_
22	_	_	NOUN	NNS	_	18	conj	_	_
23	_	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 19 det:predet	color:blue
1	_	_	CCONJ	CC	_	7	cc	_	_
2	_	_	PUNCT	,	_	7	punct	_	_
3	_	_	DET	DT	_	6	det	_	_
4	_	_	ADV	RB	_	5	advmod	_	_
5	_	_	ADJ	JJ	_	6	amod	_	_
6	_	_	NOUN	NN	_	7	nsubj	_	_
7	_	_	VERB	VBZ	_	0	root	_	_
8	_	_	PUNCT	,	_	7	punct	_	_
9	_	_	SCONJ	IN	_	10	mark	_	_
10	_	_	VERB	VBG	_	23	advcl	_	_
11	_	_	PRON	NN	_	10	obj	_	_
12	_	_	PRON	PRP	_	13	nsubj	_	_
13	_	_	VERB	VBD	_	11	acl:relcl	_	_
14	_	_	CCONJ	CC	_	15	cc	_	_
15	_	_	VERB	VBG	_	10	conj	_	_
16	_	_	ADV	RB	_	17	advmod	_	_
17	_	_	ADJ	JJ	_	15	xcomp	_	_
18	_	_	ADP	IN	_	20	case	_	_
19	_	_	DET	PDT	_	20	det:predet	_	_
20	_	_	PRON	DT	_	17	obl	_	_
21	_	_	PUNCT	,	_	23	punct	_	_
22	_	_	PRON	PRP	_	23	nsubj	_	_
23	_	_	VERB	VBP	_	7	ccomp	_	_
24	_	_	SCONJ	IN	_	26	mark	_	_
25	_	_	PRON	PRP	_	26	nsubj	_	_
26	_	_	VERB	VBD	_	23	ccomp	_	_
27	_	_	ADJ	JJR	_	28	amod	_	_
28	_	_	NOUN	NN	_	26	obj	_	_
29	_	_	SCONJ	IN	_	31	mark	_	_
30	_	_	PRON	PRP	_	31	nsubj	_	_
31	_	_	VERB	MD	_	27	advcl	_	_
32	_	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 11 det:predet	color:blue
1	_	_	PRON	PRP	_	3	nsubj	_	_
2	_	_	AUX	VBP	_	3	aux	_	_
3	_	_	VERB	VBG	_	0	root	_	_
4	_	_	PRON	PRP	_	3	obj	_	_
5	_	_	SCONJ	IN	_	7	mark	_	_
6	_	_	PRON	PRP	_	7	nsubj	_	_
7	_	_	VERB	VBD	_	3	advcl	_	_
8	_	_	PART	TO	_	9	mark	_	_
9	_	_	VERB	VB	_	7	xcomp	_	_
10	_	_	PRON	PRP	_	9	obj	_	_
11	_	_	DET	WDT	_	16	det:predet	_	_
12	_	_	DET	DT	_	14	det	_	_
13	_	_	ADJ	JJ	_	14	amod	_	_
14	_	_	NOUN	NN	_	16	obj	_	_
15	_	_	PRON	PRP	_	16	nsubj	_	_
16	_	_	VERB	VBD	_	9	ccomp	_	_
17	_	_	ADP	IN	_	19	case	_	_
18	_	_	DET	PRP$	_	19	nmod:poss	_	_
19	_	_	NOUN	NNS	_	16	obl	_	_
20	_	_	ADV	WRB	_	22	mark	_	_
21	_	_	PRON	PRP	_	22	nsubj	_	_
22	_	_	VERB	VBD	_	16	advcl	_	_
23	_	_	PART	TO	_	24	mark	_	_
24	_	_	VERB	VB	_	22	xcomp	_	_
25	_	_	DET	DT	_	26	det	_	_
26	_	_	NOUN	NN	_	24	obj	_	_
27	_	_	ADP	IN	_	29	case	_	_
28	_	_	DET	PRP$	_	29	nmod:poss	_	_
29	_	_	NOUN	NN	_	24	obl	_	_
30	_	_	PUNCT	.	_	3	punct	_	_

~~~


