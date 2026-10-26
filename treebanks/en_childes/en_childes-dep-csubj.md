---
layout: base
title:  'Statistics of csubj in UD_English-CHILDES'
udver: '2'
---

## Treebank Statistics: UD_English-CHILDES: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="en_childes-dep-csubj-pass.html">csubj:pass</a></tt>.

52 nodes (0%) are attached to their parents as `csubj`.

42 instances of `csubj` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.67307692307692.

The following 11 pairs of parts of speech are connected with `csubj`: <tt><a href="en_childes-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_childes-pos-VERB.html">VERB</a></tt> (29; 56% instances), <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-VERB.html">VERB</a></tt> (8; 15% instances), <tt><a href="en_childes-pos-AUX.html">AUX</a></tt>-<tt><a href="en_childes-pos-VERB.html">VERB</a></tt> (4; 8% instances), <tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_childes-pos-VERB.html">VERB</a></tt> (4; 8% instances), <tt><a href="en_childes-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_childes-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="en_childes-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_childes-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_childes-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="en_childes-pos-PRON.html">PRON</a></tt>-<tt><a href="en_childes-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj	color:blue
1	This	this	PRON	DT	_	3	nsubj:outer	3:nsubj:outer	_
2	is	be	AUX	VBZ	_	3	cop	3:cop	_
3	hard	hard	ADJ	JJ	_	0	root	0:root	_
4	to	to	PART	TO	_	5	mark	5:mark	_
5	do	do	VERB	VB	_	3	csubj	3:csubj	SpaceAfter=No
6	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj	color:blue
1	It	it	PRON	PRP	_	3	nsubj:outer	3:nsubj:outer	_
2	's	be	AUX	VBZ	_	3	aux	3:aux	_
3	hurting	hurt	VERB	VBG	_	0	root	0:root	_
4	my	my	PRON	PRP$	_	5	nmod:poss	5:nmod:poss	_
5	eyes	eye	NOUN	NNS	_	3	obj	3:obj	_
6	to	to	PART	TO	_	7	mark	7:mark	_
7	look	look	VERB	VB	_	3	csubj	3:csubj	_
8	at	at	ADP	IN	_	10	case	10:case	_
9	that	that	DET	DT	_	10	det	10:det	_
10	tractor	tractor	NOUN	NN	_	7	obl	7:obl:at	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 csubj	color:blue
1	I	I	PRON	PRP	_	2	nsubj	2:nsubj	_
2	think	think	VERB	VBP	_	0	root	0:root	_
3	what	what	PRON	WP	_	7	obj	7:obj	_
4	we	we	PRON	PRP	_	5	nsubj	5:nsubj|7:nsubj:xsubj	_
5	haf	have	VERB	VBP	_	9	csubj	9:csubj	_
6	ta	to	PART	TO	_	7	mark	7:mark	_
7	have	have	VERB	VB	_	5	xcomp	5:xcomp	_
8	then	then	ADV	RB	_	7	advmod	7:advmod	_
9	is	be	AUX	VBZ	_	2	ccomp	2:ccomp	_
10	you	you	PRON	PRP	_	11	nsubj	11:nsubj	_
11	have	have	VERB	VBP	_	9	ccomp	9:ccomp	_
12	this	this	DET	DT	_	13	det	13:det	_
13	medicine	medicine	NOUN	NN	_	11	obj	11:obj	SpaceAfter=No
14	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


