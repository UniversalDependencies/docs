---
layout: base
title:  'Statistics of nmod:npmod in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `nmod:npmod`

This relation is a language-specific subtype of <tt><a href="en_esl-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="en_esl-dep-nmod-poss.html">nmod:poss</a></tt>.

27 nodes (0%) are attached to their parents as `nmod:npmod`.

17 instances of `nmod:npmod` (63%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.55555555555556.

The following 6 pairs of parts of speech are connected with `nmod:npmod`: <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (16; 59% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-PRON.html">PRON</a></tt> (7; 26% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="en_esl-pos-PRON.html">PRON</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_esl-pos-PRON.html">PRON</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod:npmod	color:blue
1	_	_	NOUN	NN	_	0	root	_	_
2	_	_	DET	DT	_	3	det	_	_
3	_	_	NOUN	NN	_	1	nmod:npmod	_	_
4	_	_	ADP	IN	_	7	case	_	_
5	_	_	DET	PRP$	_	7	nmod:poss	_	_
6	_	_	ADJ	JJ	_	7	amod	_	_
7	_	_	NOUN	NN	_	1	nmod	_	_
8	_	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 nmod:npmod	color:blue
1	_	_	DET	DT	_	2	det	_	_
2	_	_	NOUN	NNS	_	5	nsubj	_	_
3	_	_	AUX	MD	_	5	aux	_	_
4	_	_	PART	RB	Polarity=Neg	5	advmod	_	_
5	_	_	VERB	VB	_	0	root	_	_
6	_	_	DET	DT	_	7	det	_	_
7	_	_	NOUN	NNS	_	5	obj	_	_
8	_	_	ADP	IN	_	10	case	_	_
9	_	_	DET	DT	_	10	det	_	_
10	_	_	NOUN	NN	_	7	nmod	_	_
11	_	_	PRON	PRP	_	10	nmod:npmod	_	_
12	_	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 nmod:npmod	color:blue
1	_	_	PRON	PRP	_	3	nsubj	_	_
2	_	_	DET	DT	_	3	det	_	_
3	_	_	VERB	VBD	_	0	root	_	_
4	_	_	PART	TO	_	5	mark	_	_
5	_	_	VERB	VB	_	3	xcomp	_	_
6	_	_	PART	TO	_	7	mark	_	_
7	_	_	VERB	VB	_	5	xcomp	_	_
8	_	_	DET	DT	_	9	det	_	_
9	_	_	NOUN	NN	_	7	obj	_	_
10	_	_	ADP	IN	_	12	case	_	_
11	_	_	DET	DT	_	12	det	_	_
12	_	_	NOUN	NN	_	9	nmod	_	_
13	_	_	PART	RB	Polarity=Neg	14	advmod	_	_
14	_	_	ADJ	JJ	_	12	nmod:npmod	_	_
15	_	_	ADP	IN	_	17	case	_	_
16	_	_	ADP	IN	_	17	case	_	_
17	_	_	PROPN	NNP	_	14	obl	_	_
18	_	_	PUNCT	.	_	3	punct	_	_

~~~


