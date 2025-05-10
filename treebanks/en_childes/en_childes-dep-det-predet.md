---
layout: base
title:  'Statistics of det:predet in UD_English-CHILDES'
udver: '2'
---

## Treebank Statistics: UD_English-CHILDES: Relations: `det:predet`

This relation is a language-specific subtype of <tt><a href="en_childes-dep-det.html">det</a></tt>.

233 nodes (0%) are attached to their parents as `det:predet`.

233 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.12875536480687.

The following 10 pairs of parts of speech are connected with `det:predet`: <tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_childes-pos-DET.html">DET</a></tt> (188; 81% instances), <tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_childes-pos-PRON.html">PRON</a></tt> (29; 12% instances), <tt><a href="en_childes-pos-PRON.html">PRON</a></tt>-<tt><a href="en_childes-pos-DET.html">DET</a></tt> (7; 3% instances), <tt><a href="en_childes-pos-ADV.html">ADV</a></tt>-<tt><a href="en_childes-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="en_childes-pos-DET.html">DET</a></tt>-<tt><a href="en_childes-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="en_childes-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_childes-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_childes-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_childes-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_childes-pos-ADP.html">ADP</a></tt>-<tt><a href="en_childes-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_childes-pos-PRON.html">PRON</a></tt>-<tt><a href="en_childes-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_childes-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_childes-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 det:predet	color:blue
1	Did	do	AUX	VBD	_	3	aux	3:aux	_
2	you	you	PRON	PRP	_	3	nsubj	3:nsubj	_
3	ask	ask	VERB	VB	_	0	root	0:root	_
4	him	he	PRON	PRP	_	3	iobj	3:iobj	_
5	who	who	PRON	WP	_	3	ccomp	3:ccomp	_
6	all	all	DET	PDT	_	8	det:predet	8:det:predet	_
7	these	this	DET	DT	_	8	det	8:det	_
8	people	people	NOUN	NNS	_	5	nsubj	5:nsubj	_
9	were	be	AUX	VBD	_	5	cop	5:cop	SpaceAfter=No
10	?	?	PUNCT	?	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 det:predet	color:blue
1	All	all	PRON	PDT	_	3	det:predet	3:det:predet	_
2	the	the	DET	DT	_	3	det	3:det	_
3	books	book	NOUN	NNS	_	0	root	0:root	SpaceAfter=No
4	?	?	PUNCT	?	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 det:predet	color:blue
1	I	I	PRON	PRP	_	4	nsubj	4:nsubj	_
2	do	do	AUX	VBP	_	4	aux	4:aux	_
3	n't	not	PART	RB	_	4	advmod	4:advmod	_
4	know	know	VERB	VB	_	0	root	0:root	_
5	how	how	SCONJ	WRB	_	8	mark	8:mark	_
6	we	we	PRON	PRP	_	8	nsubj	8:nsubj|11:nsubj:xsubj	_
7	're	be	AUX	VBP	_	8	aux	8:aux	_
8	gon	go	VERB	VBG	_	4	ccomp	4:ccomp	_
9	na	to	PART	TO	_	11	mark	11:mark	_
10	be	be	AUX	VB	_	11	cop	11:cop	_
11	happy	happy	ADJ	JJ	_	8	xcomp	8:xcomp	_
12	after	after	ADP	IN	_	14	case	14:case	_
13	all	all	DET	DT	_	14	det:predet	14:det:predet	_
14	that	that	PRON	DT	_	11	obl	11:obl:after	SpaceAfter=No
15	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


