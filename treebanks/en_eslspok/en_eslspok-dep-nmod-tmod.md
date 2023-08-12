---
layout: base
title:  'Statistics of nmod:tmod in UD_English-ESLSpok'
udver: '2'
---

## Treebank Statistics: UD_English-ESLSpok: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="en_eslspok-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_eslspok-dep-nmod-npmod.html">nmod:npmod</a></tt>, <tt><a href="en_eslspok-dep-nmod-poss.html">nmod:poss</a></tt>.

20 nodes (0%) are attached to their parents as `nmod:tmod`.

20 instances of `nmod:tmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.55.

The following 2 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="en_eslspok-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_eslspok-pos-NOUN.html">NOUN</a></tt> (19; 95% instances), <tt><a href="en_eslspok-pos-VERB.html">VERB</a></tt>-<tt><a href="en_eslspok-pos-PROPN.html">PROPN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nmod:tmod	color:blue
1	One	_	NUM	CD	_	2	nummod	_	_
2	day	_	NOUN	NN	_	9	obl:tmod	_	_
3	last	_	ADJ	JJ	_	4	amod	_	_
4	week	_	NOUN	NN	_	2	nmod:tmod	_	_
5	,	_	PUNCT	,	_	2	punct	_	_
6	that	_	DET	DT	_	7	det	_	_
7	day	_	NOUN	NN	_	9	nsubj	_	_
8	was	_	AUX	VBD	_	9	aux	_	_
9	raining	_	VERB	VBG	_	0	root	_	_
10	.	_	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 nmod:tmod	color:blue
1	But	_	CCONJ	CC	_	3	cc	_	_
2	I	_	PRON	PRP	_	3	nsubj	_	_
3	had	_	VERB	VBD	_	0	root	_	_
4	a	_	DET	DT	_	6	det	_	_
5	small	_	ADJ	JJ	_	6	amod	_	_
6	gathering	_	NOUN	NN	_	3	obj	_	_
7	on	_	ADP	IN	_	9	case	_	_
8	last	_	ADJ	JJ	_	9	amod	_	_
9	Saturday	_	PROPN	NNP	_	3	nmod:tmod	_	_
10	.	_	PUNCT	.	_	3	punct	_	_

~~~


