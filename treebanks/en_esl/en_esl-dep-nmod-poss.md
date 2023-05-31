---
layout: base
title:  'Statistics of nmod:poss in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="en_esl-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="en_esl-dep-nmod-npmod.html">nmod:npmod</a></tt>.

2100 nodes (2%) are attached to their parents as `nmod:poss`.

2100 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32952380952381.

The following 12 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-DET.html">DET</a></tt> (1905; 91% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (116; 6% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (33; 2% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-PRON.html">PRON</a></tt> (17; 1% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-DET.html">DET</a></tt> (15; 1% instances), <tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_esl-pos-DET.html">DET</a></tt> (7; 0% instances), <tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-NUM.html">NUM</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 14 nmod:poss	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 nmod:poss	color:blue
1	_	_	CCONJ	CC	_	12	advmod	_	_
2	_	_	ADP	IN	_	5	case	_	_
3	_	_	DET	DT	_	5	det	_	_
4	_	_	ADJ	JJ	_	5	amod	_	_
5	_	_	NOUN	NN	_	12	obl	_	_
6	_	_	PRON	PRP	_	12	nsubj	_	_
7	_	_	AUX	VBD	_	12	cop	_	_
8	_	_	DET	PRP$	_	10	nmod:poss	_	_
9	_	_	ADJ	JJR	_	10	amod	_	_
10	_	_	NOUN	NN	_	12	nmod:poss	_	_
11	_	_	PART	POS	_	10	case	_	_
12	_	_	NOUN	NN	_	0	root	_	_
13	_	_	PUNCT	,	_	12	punct	_	_
14	_	_	PRON	WDT	_	17	obl	_	_
15	_	_	PRON	PRP	_	17	nsubj	_	_
16	_	_	AUX	MD	_	17	aux	_	_
17	_	_	VERB	VB	_	12	acl:relcl	_	_
18	_	_	ADP	IN	_	14	case	_	_
19	_	_	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nmod:poss	color:blue
1	_	_	ADV	RB	_	9	advmod	_	_
2	_	_	DET	PDT	_	4	det:predet	_	_
3	_	_	DET	DT	_	4	det	_	_
4	_	_	PROPN	NNP	_	6	nmod:poss	_	_
5	_	_	PART	POS	_	4	case	_	_
6	_	_	NOUN	NN	_	9	nsubj	_	_
7	_	_	AUX	VBP	_	9	aux	_	_
8	_	_	PART	RB	Polarity=Neg	9	advmod	_	_
9	_	_	VERB	VB	_	0	root	_	_
10	_	_	PRON	PRP	_	9	obj	_	_
11	_	_	ADP	IN	_	13	case	_	_
12	_	_	DET	PRP$	_	13	nmod:poss	_	_
13	_	_	NOUN	NNS	_	9	obl	_	_
14	_	_	SCONJ	IN	_	19	mark	_	_
15	_	_	PROPN	NNP	_	19	nsubj	_	_
16	_	_	AUX	VBZ	_	19	cop	_	_
17	_	_	PART	RB	Polarity=Neg	19	advmod	_	_
18	_	_	ADV	RB	_	19	advmod	_	_
19	_	_	ADJ	JJ	_	9	advcl	_	_
20	_	_	SCONJ	IN	_	21	mark	_	_
21	_	_	VERB	VBG	_	19	advcl	_	_
22	_	_	NOUN	NNS	_	21	obj	_	_
23	_	_	PUNCT	.	_	9	punct	_	_

~~~


