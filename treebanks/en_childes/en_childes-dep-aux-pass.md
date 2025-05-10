---
layout: base
title:  'Statistics of aux:pass in UD_English-CHILDES'
udver: '2'
---

## Treebank Statistics: UD_English-CHILDES: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="en_childes-dep-aux.html">aux</a></tt>.

266 nodes (0%) are attached to their parents as `aux:pass`.

266 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28947368421053.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-AUX.html">AUX</a></tt> (255; 96% instances), <tt><a href="en_childes-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_childes-pos-AUX.html">AUX</a></tt> (11; 4% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux:pass	color:blue
1	It	it	PRON	PRP	_	4	nsubj	4:nsubj	_
2	's	be	AUX	VBZ	_	4	cop	4:cop	_
3	a	a	DET	DT	_	4	det	4:det	_
4	celebration	celebration	NOUN	NN	_	0	root	0:root	_
5	of	of	ADP	IN	_	7	case	7:case	_
6	the	the	DET	DT	_	7	det	7:det	_
7	day	day	NOUN	NN	_	4	nmod	4:nmod:of	_
8	you	you	PRON	PRP	_	10	nsubj:pass	10:nsubj:pass	_
9	got	get	AUX	VBD	_	10	aux:pass	10:aux:pass	_
10	born	bear	VERB	VBN	_	7	acl:relcl	7:acl:relcl	SpaceAfter=No
11	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux:pass	color:blue
1	It	it	PRON	PRP	_	4	nsubj:pass	4:nsubj:pass	_
2	's	be	AUX	VBZ	_	4	aux:pass	4:aux:pass	_
3	not	not	PART	RB	_	4	advmod	4:advmod	_
4	stuck	stuck	ADJ	JJ	_	0	root	0:root	SpaceAfter=No
5	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


