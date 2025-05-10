---
layout: base
title:  'Statistics of csubj in UD_English-CHILDES'
udver: '2'
---

## Treebank Statistics: UD_English-CHILDES: Relations: `csubj`

This relation is universal.

44 nodes (0%) are attached to their parents as `csubj`.

37 instances of `csubj` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.68181818181818.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="en_childes-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_childes-pos-VERB.html">VERB</a></tt> (27; 61% instances), <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-VERB.html">VERB</a></tt> (7; 16% instances), <tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_childes-pos-VERB.html">VERB</a></tt> (4; 9% instances), <tt><a href="en_childes-pos-AUX.html">AUX</a></tt>-<tt><a href="en_childes-pos-VERB.html">VERB</a></tt> (3; 7% instances), <tt><a href="en_childes-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_childes-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_childes-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 csubj	color:blue
1	It	it	PRON	PRP	_	3	expl	3:expl	_
2	's	be	AUX	VBZ	_	3	aux	3:aux	_
3	going	go	VERB	VBG	_	0	root	0:root	_
4	to	to	PART	TO	_	6	mark	6:mark	_
5	be	be	AUX	VB	_	6	cop	6:cop	_
6	difficult	difficult	ADJ	JJ	_	3	xcomp	3:xcomp	_
7	to	to	PART	TO	_	8	mark	8:mark	_
8	work	work	VERB	VB	_	6	csubj	6:csubj	_
9	here	here	ADV	RB	_	8	advmod	8:advmod	SpaceAfter=No
10	.	.	PUNCT	.	_	3	punct	3:punct	_

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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 csubj	color:blue
1	It	it	PRON	PRP	_	2	nsubj	2:nsubj	_
2	's	be	AUX	VBZ	_	6	reparandum	6:reparandum	repetition
3	it	it	PRON	PRP	_	6	nsubj:outer	6:nsubj:outer	_
4	's	be	AUX	VBZ	_	6	cop	6:cop	_
5	a	a	DET	DT	_	6	det	6:det	_
6	game	game	NOUN	NN	_	0	root	0:root	_
7	to	to	PART	TO	_	8	mark	8:mark	_
8	see	see	VERB	VB	_	6	csubj	6:csubj	_
9	how	how	ADV	WRB	_	10	advmod	10:advmod	_
10	long	long	ADV	RB	_	12	advmod	12:advmod	_
11	you	you	PRON	PRP	_	12	nsubj	12:nsubj	_
12	play	play	VERB	VBP	_	8	ccomp	8:ccomp	SpaceAfter=No
13	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


