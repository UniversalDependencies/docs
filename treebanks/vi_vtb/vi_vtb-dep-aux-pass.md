---
layout: base
title:  'Statistics of aux:pass in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-aux.html">aux</a></tt>.

366 nodes (1%) are attached to their parents as `aux:pass`.

363 instances of `aux:pass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5327868852459.

The following 4 pairs of parts of speech are connected with `aux:pass`: <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-AUX.html">AUX</a></tt> (339; 93% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-AUX.html">AUX</a></tt> (12; 3% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-AUX.html">AUX</a></tt> (12; 3% instances), <tt><a href="vi_vtb-pos-X.html">X</a></tt>-<tt><a href="vi_vtb-pos-AUX.html">AUX</a></tt> (3; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:pass	color:blue
1	Thưa	thưa	VERB	V	_	7	vocative	_	_
2	ông	ông	NOUN	N	_	1	obj	_	_
3	,	,	PUNCT	PUNCT	_	7	punct	_	_
4	sổ đỏ	sổ đỏ	NOUN	N	_	7	nsubj:pass	_	_
5	đã	đã	ADV	ADV	_	7	advmod	_	_
6	được	được	AUX	AUX	_	7	aux:pass	_	_
7	giao	giao	VERB	V	_	0	root	_	_
8	cho	cho	ADP	PRE	_	9	case	_	_
9	người	người	NOUN	N	_	7	obl:iobj	_	_
10	dân	dân	NOUN	N	_	9	compound	_	_
11	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
1	Đất	đất	NOUN	N	_	4	nsubj:pass	_	_
2	rừng	rừng	NOUN	N	_	1	compound	_	_
3	bị	bị	AUX	AUX	_	4	aux:pass	_	_
4	manh mún	manh mún	ADJ	ADJ	_	0	root	_	_
5	,	,	PUNCT	PUNCT	_	6	punct	_	_
6	xé lẻ	xé lẻ	VERB	V	_	4	conj	_	_
7	,	,	PUNCT	PUNCT	_	10	punct	_	_
8	rừng	rừng	NOUN	N	_	10	nsubj	_	_
9	ngày càng	ngày càng	ADV	ADV	_	10	advmod	_	_
10	nghèo	nghèo	ADJ	ADJ	_	4	conj	_	_
11	kiệt	kiệt	VERB	V	_	10	xcomp:adj	_	_
12	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 aux:pass	color:blue
1	Mà	mà	SCONJ	C	_	4	mark	_	_
2	chồng	chồng	NOUN	N	_	4	nsubj	_	_
3	có	có	ADV	ADV	_	4	advmod	_	_
4	được	được	VERB	V	_	0	root	_	_
5	như	như	SCONJ	C	_	6	case	_	_
6	người	người	NOUN	N	_	4	obl	_	_
7	thường	thường	ADJ	ADJ	_	6	compound:amod	_	_
8	đâu	đâu	PART	PRT	_	4	discourse	_	_
9	,	,	PUNCT	PUNCT	_	13	punct	_	_
10	ông	ông	NOUN	N	_	13	nsubj:pass	_	_
11	này	này	PRON	PRO	_	10	det:pmod	_	_
12	bị	bị	AUX	AUX	_	13	aux:pass	_	_
13	tật	tật	NOUN	N	_	4	parataxis	_	_
14	hai	hai	NUM	NUM	_	15	nummod	_	_
15	chân	chân	NOUN	N	_	13	nmod	_	_
16	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


