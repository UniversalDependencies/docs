---
layout: base
title:  'Statistics of nmod:poss in UD_English-ESLSpok'
udver: '2'
---

## Treebank Statistics: UD_English-ESLSpok: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="en_eslspok-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_eslspok-dep-nmod-npmod.html">nmod:npmod</a></tt>, <tt><a href="en_eslspok-dep-nmod-tmod.html">nmod:tmod</a></tt>.

414 nodes (2%) are attached to their parents as `nmod:poss`.

414 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.256038647343.

The following 7 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="en_eslspok-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_eslspok-pos-PRON.html">PRON</a></tt> (372; 90% instances), <tt><a href="en_eslspok-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_eslspok-pos-NOUN.html">NOUN</a></tt> (31; 7% instances), <tt><a href="en_eslspok-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_eslspok-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="en_eslspok-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_eslspok-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="en_eslspok-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_eslspok-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_eslspok-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_eslspok-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_eslspok-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="en_eslspok-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	My	_	PRON	PRP$	_	2	nmod:poss	_	_
2	father	_	NOUN	NN	_	0	root	_	_
3	,	_	PUNCT	,	_	5	punct	_	_
4	my	_	PRON	PRP$	_	5	nmod:poss	_	_
5	mother	_	NOUN	NN	_	2	conj	_	_
6	,	_	PUNCT	,	_	9	punct	_	_
7	and	_	CCONJ	CC	_	9	cc	_	_
8	two	_	NUM	CD	_	9	nummod	_	_
9	sisters	_	NOUN	NNS	_	2	conj	_	_
10	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 7 nmod:poss	color:blue
1	And	_	CCONJ	CC	_	5	cc	_	_
2	so	_	CCONJ	CC	_	5	advmod	_	_
3	this	_	DET	DT	_	4	det	_	_
4	accident	_	NOUN	NN	_	5	nsubj	_	_
5	became	_	VERB	VBD	_	0	root	_	_
6	the	_	DET	DT	_	7	det	_	_
7	man	_	NOUN	NN	_	12	nmod:poss	_	_
8	on	_	ADP	IN	_	10	case	_	_
9	the	_	DET	DT	_	10	det	_	_
10	motorcycle	_	NOUN	NN	_	7	nmod	_	_
11	's	_	PART	POS	_	7	case	_	_
12	fault	_	NOUN	NN	_	5	obj	_	_
13	.	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nmod:poss	color:blue
1	I	_	PRON	PRP	_	3	nsubj	_	_
2	really	_	ADV	RB	_	3	advmod	_	_
3	like	_	VERB	VBP	_	0	root	_	_
4	this	_	DET	DT	_	5	det	_	_
5	coat	_	NOUN	NN	_	3	obj	_	_
6	because	_	SCONJ	IN	_	11	mark	_	_
7	this	_	DET	DT	_	8	det	_	_
8	design	_	NOUN	NN	_	11	nsubj	_	_
9	is	_	AUX	VBZ	_	11	cop	_	_
10	my	_	PRON	PRP$	_	11	nmod:poss	_	_
11	favorite	_	ADJ	JJ	_	3	advcl	_	_
12	.	_	PUNCT	.	_	3	punct	_	_

~~~


