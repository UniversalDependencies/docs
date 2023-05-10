---
layout: base
title:  'Statistics of nmod in UD_English-ESLSpok'
udver: '2'
---

## Treebank Statistics: UD_English-ESLSpok: Relations: `nmod`

This relation is universal.
There are 3 language-specific subtypes of `nmod`: <tt><a href="en_eslspok-dep-nmod-npmod.html">nmod:npmod</a></tt>, <tt><a href="en_eslspok-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="en_eslspok-dep-nmod-tmod.html">nmod:tmod</a></tt>.

264 nodes (1%) are attached to their parents as `nmod`.

262 instances of `nmod` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.6969696969697.

The following 15 pairs of parts of speech are connected with `nmod`: <tt><a href="en_eslspok-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_eslspok-pos-NOUN.html">NOUN</a></tt> (185; 70% instances), <tt><a href="en_eslspok-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_eslspok-pos-PROPN.html">PROPN</a></tt> (30; 11% instances), <tt><a href="en_eslspok-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_eslspok-pos-PRON.html">PRON</a></tt> (20; 8% instances), <tt><a href="en_eslspok-pos-NUM.html">NUM</a></tt>-<tt><a href="en_eslspok-pos-NOUN.html">NOUN</a></tt> (8; 3% instances), <tt><a href="en_eslspok-pos-DET.html">DET</a></tt>-<tt><a href="en_eslspok-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="en_eslspok-pos-DET.html">DET</a></tt>-<tt><a href="en_eslspok-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="en_eslspok-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_eslspok-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="en_eslspok-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_eslspok-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_eslspok-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_eslspok-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="en_eslspok-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_eslspok-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_eslspok-pos-ADP.html">ADP</a></tt>-<tt><a href="en_eslspok-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_eslspok-pos-ADP.html">ADP</a></tt>-<tt><a href="en_eslspok-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_eslspok-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_eslspok-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_eslspok-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_eslspok-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_eslspok-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_eslspok-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 nmod	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nmod	color:blue
1	in	_	ADP	IN	_	3	case	_	_
2	higher	_	ADJ	JJR	_	3	amod	_	_
3	level	_	NOUN	NN	_	0	root	_	_
4	of	_	ADP	IN	_	5	case	_	_
5	English	_	PROPN	NNP	_	3	nmod	_	_
6	or	_	CCONJ	CC	_	7	cc	_	_
7	skills	_	NOUN	NNS	_	5	conj	_	_
8	in	_	ADP	IN	_	10	case	_	_
9	the	_	DET	DT	_	10	det	_	_
10	area	_	NOUN	NN	_	7	nmod	_	_
11	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 nmod	color:blue
1	And	_	CCONJ	CC	_	4	cc	_	_
2	she	_	PRON	PRP	_	4	nsubj	_	_
3	was	_	AUX	VBD	_	4	aux	_	_
4	looking	_	VERB	VBG	_	0	root	_	_
5	for	_	ADP	IN	_	8	case	_	_
6	a	_	DET	DT	_	8	det	_	_
7	nice	_	ADJ	JJ	_	8	amod	_	_
8	gift	_	NOUN	NN	_	4	obl	_	_
9	for	_	ADP	IN	_	10	case	_	_
10	him	_	PRON	PRP	_	8	nmod	_	_
11	.	_	PUNCT	.	_	4	punct	_	_

~~~


