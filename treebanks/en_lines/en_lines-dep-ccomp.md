---
layout: base
title:  'Statistics of ccomp in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `ccomp`

This relation is universal.

482 nodes (1%) are attached to their parents as `ccomp`.

453 instances of `ccomp` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.27593360995851.

The following 15 pairs of parts of speech are connected with `ccomp`: <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (427; 89% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (11; 2% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (9; 2% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (8; 2% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (7; 1% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 ccomp	color:blue
1	I	I	PRON	PERS-P1SG-NOM	_	2	nsubj	_	_
2	wish	wish	VERB	PRES	_	0	root	_	_
3	it	it	PRON	PERS-SG	_	4	nsubj	_	_
4	was	be	VERB	PAST	_	2	ccomp	_	SpaceAfter=No
5	.	.	PUNCT	Period	_	4	punct	_	_
6	But	but	CCONJ	_	_	8	cc	_	_
7	this	this	PRON	DEM-SG	_	8	nsubj	_	_
8	has	have	VERB	PRES	_	4	conj	_	_
9	nothing	nothing	PRON	NEG-SG	_	8	obj	_	_
10	to	to	PART	_	_	11	mark	_	_
11	do	do	VERB	INF	_	9	acl	_	_
12	with	with	ADP	_	_	13	case	_	_
13	literature	literature	NOUN	SG-NOM	_	11	obl	_	SpaceAfter=No
14	.	.	PUNCT	Period	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 ccomp	color:blue
1	At	at	ADP	_	_	4	case	_	_
2	the	the	DET	DEF	_	4	det	_	_
3	same	same	ADJ	POS	_	4	amod	_	_
4	time	time	NOUN	SG-NOM	_	7	obl	_	SpaceAfter=No
5	,	,	PUNCT	Comma	_	1	punct	_	_
6	he	he	PRON	PERS-P3SG-NOM	_	7	nsubj	_	_
7	knew	know	VERB	PAST	_	0	root	_	_
8	it	it	PRON	PERS-SG	_	12	nsubj	_	_
9	was	be	AUX	PAST	_	12	cop	_	_
10	all	all	PRON	TOT-SG	_	12	advmod	_	_
11	an	an	DET	IND-SG	_	12	det	_	_
12	illusion	illusion	NOUN	SG-NOM	_	7	ccomp	_	SpaceAfter=No
13	.	.	PUNCT	Period	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 ccomp	color:blue
1	He	he	PRON	PERS-P3SG-NOM	_	4	nsubj	_	_
2	had	have	AUX	PAST	_	4	aux	_	_
3	to	to	PART	_	_	4	mark	_	_
4	claim	claim	VERB	INF	_	0	root	_	_
5	that	that	SCONJ	_	_	8	mark	_	_
6	it	it	PRON	PERS-SG	_	8	nsubj	_	_
7	was	be	AUX	PAST	_	8	cop	_	_
8	real	real	ADJ	POS	_	4	ccomp	_	SpaceAfter=No
9	.	.	PUNCT	Period	_	4	punct	_	_

~~~


