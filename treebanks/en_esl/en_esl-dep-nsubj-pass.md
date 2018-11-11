---
layout: base
title:  'Statistics of nsubj:pass in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="en_esl-dep-nsubj.html">nsubj</a></tt>.

415 nodes (0%) are attached to their parents as `nsubj:pass`.

412 instances of `nsubj:pass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.13253012048193.

The following 11 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (192; 46% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-PRON.html">PRON</a></tt> (166; 40% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-DET.html">DET</a></tt> (32; 8% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (11; 3% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="en_esl-pos-ADV.html">ADV</a></tt>-<tt><a href="en_esl-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-ADV.html">ADV</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-ADV.html">ADV</a></tt>-<tt><a href="en_esl-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 12 nsubj:pass	color:blue
1	_	_	ADP	IN	_	2	case	_	_
2	_	_	NOUN	NN	_	6	obl	_	_
3	_	_	PUNCT	,	_	6	punct	_	_
4	_	_	PRON	PRP	_	6	nsubj	_	_
5	_	_	AUX	MD	_	6	aux	_	_
6	_	_	VERB	VB	_	0	root	_	_
7	_	_	PART	TO	_	8	mark	_	_
8	_	_	VERB	VB	_	6	xcomp	_	_
9	_	_	DET	PRP$	_	10	nmod:poss	_	_
10	_	_	NOUN	NN	_	8	obj	_	_
11	_	_	ADV	WRB	_	15	advmod	_	_
12	_	_	NOUN	NN	_	15	nsubj:pass	_	_
13	_	_	AUX	MD	_	15	aux	_	_
14	_	_	AUX	VB	_	15	aux:pass	_	_
15	_	_	VERB	VBN	_	10	acl	_	_
16	_	_	ADP	IN	_	18	case	_	_
17	_	_	DET	DT	_	18	det	_	_
18	_	_	NOUN	NN	_	15	obl	_	_
19	_	_	ADP	IN	_	21	case	_	_
20	_	_	DET	DT	_	21	det	_	_
21	_	_	NOUN	NN	_	18	nmod	_	_
22	_	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 nsubj:pass	color:blue
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
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 14 nsubj:pass	color:blue
1	_	_	ADV	RB	_	5	advmod	_	_
2	_	_	PRON	PRP	_	5	nsubj	_	_
3	_	_	AUX	MD	_	5	aux	_	_
4	_	_	AUX	VB	_	5	cop	_	_
5	_	_	ADJ	JJ	_	0	root	_	_
6	_	_	SCONJ	IN	_	10	mark	_	_
7	_	_	PRON	PRP	_	10	nsubj	_	_
8	_	_	AUX	MD	_	10	aux	_	_
9	_	_	AUX	VB	_	10	cop	_	_
10	_	_	VERB	VBD	_	5	advcl	_	_
11	_	_	ADP	IN	_	13	case	_	_
12	_	_	NOUN	NN	_	13	compound	_	_
13	_	_	NOUN	NN	_	10	obl	_	_
14	_	_	DET	WDT	_	17	nsubj:pass	_	_
15	_	_	AUX	VBZ	_	17	aux	_	_
16	_	_	AUX	VBN	_	17	aux:pass	_	_
17	_	_	VERB	VBN	_	13	acl:relcl	_	_
18	_	_	ADP	IN	_	20	case	_	_
19	_	_	ADJ	JJ	_	20	amod	_	_
20	_	_	NOUN	NN	_	17	obl	_	_
21	_	_	PUNCT	.	_	5	punct	_	_

~~~


