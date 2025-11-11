---
layout: base
title:  'Statistics of cc:preconj in UD_English-CHILDES'
udver: '2'
---

## Treebank Statistics: UD_English-CHILDES: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="en_childes-dep-cc.html">cc</a></tt>.

9 nodes (0%) are attached to their parents as `cc:preconj`.

9 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22222222222222.

The following 6 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_childes-pos-CCONJ.html">CCONJ</a></tt> (2; 22% instances), <tt><a href="en_childes-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_childes-pos-CCONJ.html">CCONJ</a></tt> (2; 22% instances), <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-CCONJ.html">CCONJ</a></tt> (2; 22% instances), <tt><a href="en_childes-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_childes-pos-ADV.html">ADV</a></tt> (1; 11% instances), <tt><a href="en_childes-pos-AUX.html">AUX</a></tt>-<tt><a href="en_childes-pos-ADV.html">ADV</a></tt> (1; 11% instances), <tt><a href="en_childes-pos-PRON.html">PRON</a></tt>-<tt><a href="en_childes-pos-CCONJ.html">CCONJ</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 cc:preconj	color:blue
1	I	I	PRON	PRP	_	2	nsubj	2:nsubj	_
2	think	think	VERB	VBP	_	0	root	0:root	_
3	it	it	PRON	PRP	_	7	nsubj	7:nsubj|10:nsubj	_
4	's	be	AUX	VBZ	_	7	cop	7:cop	_
5	either	either	CCONJ	CC	_	7	cc:preconj	7:cc:preconj	_
6	a	a	DET	DT	_	7	det	7:det	_
7	moustache	moustache	NOUN	NN	_	2	ccomp	2:ccomp	_
8	or	or	CCONJ	CC	_	10	cc	10:cc	_
9	a	a	DET	DT	_	10	det	10:det	_
10	smokestack	smokestack	NOUN	NN	_	7	conj	2:ccomp|7:conj:or	SpaceAfter=No
11	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc:preconj	color:blue
1	The	the	DET	DT	_	3	det	3:det	_
2	next	next	ADJ	JJ	_	3	amod	3:amod	_
3	time	time	NOUN	NN	_	8	obl:unmarked	8:obl:unmarked	_
4	it	it	PRON	PRP	_	8	nsubj	8:nsubj	_
5	will	will	AUX	MD	_	8	aux	8:aux	_
6	be	be	AUX	VB	_	8	cop	8:cop	_
7	either	either	CCONJ	CC	_	8	cc:preconj	8:cc:preconj	_
8	Fraser	Fraser	PROPN	NNP	_	0	root	0:root	_
9	or	or	CCONJ	CC	_	10	cc	10:cc	_
10	Gloria	Gloria	PROPN	NNP	_	8	conj	8:conj:or	SpaceAfter=No
11	.	.	PUNCT	.	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc:preconj	color:blue
1	No	no	INTJ	UH	_	5	discourse	5:discourse	_
2	you	you	PRON	PRP	_	5	nsubj	5:nsubj	_
3	can	can	AUX	MD	_	5	aux	5:aux	_
4	either	either	CCONJ	CC	_	5	cc:preconj	5:cc:preconj	_
5	have	have	VERB	VB	_	0	root	0:root	_
6	one	one	NUM	CD	_	5	obj	5:obj	_
7	or	or	CCONJ	CC	_	9	cc	9:cc	_
8	the	the	DET	DT	_	9	det	9:det	_
9	other	other	ADJ	JJ	_	6	conj	5:obj|6:conj:or	_
10	you	you	PRON	PRP	_	13	nsubj	13:nsubj	_
11	ca	can	AUX	MD	_	13	aux	13:aux	_
12	n't	not	PART	RB	_	13	advmod	13:advmod	_
13	have	have	VERB	VB	_	5	parataxis	5:parataxis	_
14	both	both	CCONJ	CC	_	13	obj	13:obj	SpaceAfter=No
15	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


