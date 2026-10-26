---
layout: base
title:  'Statistics of appos in UD_English-CHILDES'
udver: '2'
---

## Treebank Statistics: UD_English-CHILDES: Relations: `appos`

This relation is universal.

137 nodes (0%) are attached to their parents as `appos`.

137 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.88321167883212.

The following 18 pairs of parts of speech are connected with `appos`: <tt><a href="en_childes-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt> (31; 23% instances), <tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt> (24; 18% instances), <tt><a href="en_childes-pos-PRON.html">PRON</a></tt>-<tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt> (24; 18% instances), <tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_childes-pos-PROPN.html">PROPN</a></tt> (16; 12% instances), <tt><a href="en_childes-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_childes-pos-PROPN.html">PROPN</a></tt> (11; 8% instances), <tt><a href="en_childes-pos-PRON.html">PRON</a></tt>-<tt><a href="en_childes-pos-PROPN.html">PROPN</a></tt> (8; 6% instances), <tt><a href="en_childes-pos-PRON.html">PRON</a></tt>-<tt><a href="en_childes-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="en_childes-pos-ADP.html">ADP</a></tt>-<tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_childes-pos-ADV.html">ADV</a></tt>-<tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_childes-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="en_childes-pos-PRON.html">PRON</a></tt>-<tt><a href="en_childes-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="en_childes-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_childes-pos-ADV.html">ADV</a></tt>-<tt><a href="en_childes-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="en_childes-pos-DET.html">DET</a></tt>-<tt><a href="en_childes-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_childes-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="en_childes-pos-PRON.html">PRON</a></tt>-<tt><a href="en_childes-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 appos	color:blue
1	It	it	PRON	PRP	_	2	nsubj	2:nsubj	_
2	helps	help	VERB	VBZ	_	0	root	0:root	_
3	Bob	Bob	PROPN	NNP	_	2	obj	2:obj	_
4	the	the	DET	DT	_	5	det	5:det	_
5	builder	builder	NOUN	NN	_	3	appos	3:appos	SpaceAfter=No
6	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 appos	color:blue
1	This	this	PRON	DT	_	4	nsubj	4:nsubj	_
2	is	be	AUX	VBZ	_	4	cop	4:cop	_
3	the	the	DET	DT	_	4	det	4:det	_
4	letter	letter	NOUN	NN	_	0	root	0:root	_
5	h	h	NOUN	UH	_	4	appos	4:appos	SpaceAfter=No
6	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 appos	color:blue
1	You	you	PRON	PRP	_	4	nsubj	4:nsubj	_
2	guys	guy	NOUN	NNS	_	1	appos	1:appos	_
3	can	can	AUX	MD	_	4	aux	4:aux	_
4	play	play	VERB	VB	_	0	root	0:root	_
5	in	in	ADP	IN	_	6	case	6:case	_
6	there	there	ADV	RB	_	4	obl	4:obl:in	_
7	I	I	PRON	PRP	_	9	nsubj	9:nsubj	_
8	already	already	ADV	RB	_	9	advmod	9:advmod	_
9	set	set	VERB	VBP	_	4	parataxis	4:parataxis	_
10	up	up	ADP	RP	_	9	compound:prt	9:compound:prt	SpaceAfter=No
11	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


