---
layout: base
title:  'Statistics of compound:prt in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="en_esl-dep-compound.html">compound</a></tt>.

195 nodes (0%) are attached to their parents as `compound:prt`.

195 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.50769230769231.

The following 5 pairs of parts of speech are connected with `compound:prt`: <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-ADP.html">ADP</a></tt> (170; 87% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-ADV.html">ADV</a></tt> (20; 10% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-PART.html">PART</a></tt> (3; 2% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-ADP.html">ADP</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 25 compound:prt	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 compound:prt	color:blue
1	_	_	SCONJ	IN	_	4	mark	_	_
2	_	_	PRON	PRP	_	4	nsubj	_	_
3	_	_	AUX	VBP	_	4	aux	_	_
4	_	_	VERB	VBG	_	0	root	_	_
5	_	_	PRON	PRP	_	4	obj	_	_
6	_	_	PART	TO	_	7	mark	_	_
7	_	_	VERB	VB	_	4	xcomp	_	_
8	_	_	PRON	PRP	_	7	iobj	_	_
9	_	_	ADV	RB	_	7	compound:prt	_	_
10	_	_	ADV	RB	_	11	case	_	_
11	_	_	ADV	RBS	_	12	nmod	_	_
12	_	_	NOUN	NN	_	7	obj	_	_
13	_	_	ADP	IN	_	16	case	_	_
14	_	_	DET	DT	_	16	det	_	_
15	_	_	NOUN	NN	_	16	compound	_	_
16	_	_	NOUN	NN	_	12	nmod	_	_
17	_	_	ADP	IN	_	19	case	_	_
18	_	_	DET	DT	_	19	det	_	_
19	_	_	NOUN	NN	_	7	obl	_	_
20	_	_	PRON	WDT	_	22	nsubj:pass	_	_
21	_	_	AUX	VBD	_	22	aux:pass	_	_
22	_	_	VERB	VBN	_	19	acl:relcl	_	_
23	_	_	ADP	IN	_	24	case	_	_
24	_	_	PRON	PRP	_	22	obl	_	_
25	_	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 compound:prt	color:blue
1	_	_	PRON	PRP	_	2	nsubj	_	_
2	_	_	VERB	VBP	_	0	root	_	_
3	_	_	PART	TO	_	4	mark	_	_
4	_	_	VERB	VB	_	2	xcomp	_	_
5	_	_	SCONJ	IN	_	8	mark	_	_
6	_	_	PRON	PRP	_	8	expl	_	_
7	_	_	AUX	VBZ	_	8	cop	_	_
8	_	_	ADJ	JJ	_	2	ccomp	_	_
9	_	_	PART	TO	_	10	mark	_	_
10	_	_	VERB	VB	_	8	csubj	_	_
11	_	_	PRON	PRP	_	10	iobj	_	_
12	_	_	NOUN	NN	_	10	obj	_	_
13	_	_	PART	RP	_	10	compound:prt	_	_
14	_	_	PUNCT	.	_	2	punct	_	_

~~~


