---
layout: base
title:  'Statistics of csubj in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="en_lines-dep-csubj-pass.html">csubj:pass</a></tt>.

156 nodes (0%) are attached to their parents as `csubj`.

89 instances of `csubj` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.42948717948718.

The following 12 pairs of parts of speech are connected with `csubj`: <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (68; 44% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (43; 28% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (33; 21% instances), <tt><a href="en_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="en_lines-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 csubj	color:blue
1	This	this	DET	DEM-SG	_	2	det	_	_
2	indexing	index	VERB	ING	_	4	csubj	_	_
3	also	also	ADV	_	_	4	advmod	_	_
4	includes	include	VERB	PRES	_	0	root	_	_
5	the	the	DET	DEF	_	6	det	_	_
6	notion	notion	NOUN	SG-NOM	_	4	obj	_	_
7	of	of	ADP	_	_	9	case	_	_
8	an	an	DET	IND-SG	_	9	det	_	_
9	accelerator	accelerator	NOUN	SG-NOM	_	6	nmod	_	SpaceAfter=No
10	.	.	PUNCT	Period	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 csubj	color:blue
1	Is	be	AUX	PRES	_	3	cop	_	_
2	it	it	PRON	PERS-SG	_	3	expl	_	_
3	possible	possible	ADJ	POS	_	0	root	_	_
4	that	that	SCONJ	_	_	6	mark	_	_
5	you	you	PRON	PERS-P2	_	6	nsubj	_	_
6	know	know	VERB	PRES	_	3	csubj	_	_
7	the	the	DET	DEF	_	8	det	_	_
8	people	people	NOUN	PL-NOM	_	6	obj	_	_
9	involved	involve	VERB	PASS	_	8	amod	_	SpaceAfter=No
10	?	?	PUNCT	QuestionMark	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 csubj	color:blue
1	It	it	PRON	PERS-SG	_	4	expl	_	SpaceAfter=No
2	's	be	AUX	PRES	_	4	cop	_	_
3	no	no	DET	NEG	_	4	det	_	_
4	trouble	trouble	NOUN	SG-NOM	_	0	root	_	_
5	making	make	VERB	ING	_	4	csubj	_	_
6	it	it	PRON	PERS-SG	_	5	obj	_	_
7	for	for	ADP	_	_	8	case	_	_
8	two	two	NUM	CARD-PL	_	5	obl	_	SpaceAfter=No
9	.	.	PUNCT	Period	_	4	punct	_	_

~~~


