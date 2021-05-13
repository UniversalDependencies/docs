---
layout: base
title:  'Statistics of punct in UD_Portuguese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-GSD: Relations: `punct`

This relation is universal.

42019 nodes (13%) are attached to their parents as `punct`.

24278 instances of `punct` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.2223755919941.

The following 15 pairs of parts of speech are connected with `punct`: <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-PUNCT.html">PUNCT</a></tt> (18934; 45% instances), <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-PUNCT.html">PUNCT</a></tt> (10228; 24% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-PUNCT.html">PUNCT</a></tt> (7669; 18% instances), <tt><a href="pt_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_gsd-pos-PUNCT.html">PUNCT</a></tt> (1639; 4% instances), <tt><a href="pt_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_gsd-pos-PUNCT.html">PUNCT</a></tt> (1231; 3% instances), <tt><a href="pt_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_gsd-pos-PUNCT.html">PUNCT</a></tt> (850; 2% instances), <tt><a href="pt_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_gsd-pos-PUNCT.html">PUNCT</a></tt> (656; 2% instances), <tt><a href="pt_gsd-pos-PART.html">PART</a></tt>-<tt><a href="pt_gsd-pos-PUNCT.html">PUNCT</a></tt> (373; 1% instances), <tt><a href="pt_gsd-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_gsd-pos-PUNCT.html">PUNCT</a></tt> (198; 0% instances), <tt><a href="pt_gsd-pos-X.html">X</a></tt>-<tt><a href="pt_gsd-pos-PUNCT.html">PUNCT</a></tt> (131; 0% instances), <tt><a href="pt_gsd-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="pt_gsd-pos-PUNCT.html">PUNCT</a></tt> (45; 0% instances), <tt><a href="pt_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_gsd-pos-PUNCT.html">PUNCT</a></tt> (43; 0% instances), <tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="pt_gsd-pos-PUNCT.html">PUNCT</a></tt> (12; 0% instances), <tt><a href="pt_gsd-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="pt_gsd-pos-PUNCT.html">PUNCT</a></tt> (6; 0% instances), <tt><a href="pt_gsd-pos-DET.html">DET</a></tt>-<tt><a href="pt_gsd-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 12 punct	color:blue
1	Ver	ver	VERB	VERB	_	0	root	_	_
2	também	também	ADV	ADV	_	1	advmod	_	_
3	a	o	DET	DET	_	4	det	_	_
4	lista	lista	NOUN	NOUN	_	1	obj	_	_
5	de	de	ADP	ADP	_	6	case	_	_
6	entidades	entidade	NOUN	NOUN	_	4	nmod	_	_
7	que	_	PRON	PRON	_	9	nsubj	_	_
8	tenham	ter	AUX	AUX	_	9	aux	_	_
9	emitido	emitir	VERB	VERB	_	6	acl:relcl	_	_
10	selos	selo	NOUN	NOUN	_	9	obj	_	_
11	postais	postal	ADJ	ADJ	_	10	amod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 punct	color:blue
1	A	o	DET	DET	_	2	det	_	_
2	Nina	_	PROPN	PNOUN	_	5	nsubj	_	_
3	é	ser	AUX	AUX	_	5	cop	_	_
4	a	o	DET	DET	_	5	det	_	_
5	chance	chance	NOUN	NOUN	_	0	root	_	_
6	de	_	ADP	ADP	_	8	mark	_	_
7	ele	_	PRON	PRON	_	8	nsubj	_	_
8	ser	ser	VERB	VERB	_	5	nmod	_	_
9	feliz	feliz	ADJ	ADJ	_	8	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 punct	color:blue
1	Com	_	ADP	ADP	_	3	case	_	_
2	menor	menor	ADJ	ADJ	_	3	amod	_	_
3	índice	índice	NOUN	NOUN	_	5	nmod	_	SpaceAfter=No
4	,	,	PUNCT	.	_	3	punct	_	_
5	Piauí	_	PROPN	PNOUN	_	0	root	_	SpaceAfter=No
6	,	,	PUNCT	.	_	7	punct	_	_
7	Santa	_	PROPN	PNOUN	_	5	conj	_	_
8	Catarina	_	PROPN	PNOUN	_	7	flat	_	_
9	e	e	CCONJ	CONJ	_	10	cc	_	_
10	Alagoas	_	PROPN	PNOUN	_	5	conj	_	SpaceAfter=No
11	.	.	PUNCT	.	_	5	punct	_	_

~~~


