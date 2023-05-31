---
layout: base
title:  'Statistics of aux:pass in UD_Vietnamese'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="vi-dep-aux.html">aux</a></tt>.

374 nodes (1%) are attached to their parents as `aux:pass`.

307 instances of `aux:pass` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.90106951871658.

The following 13 pairs of parts of speech are connected with `aux:pass`: <tt><a href="vi-pos-VERB.html">VERB</a></tt>-<tt><a href="vi-pos-VERB.html">VERB</a></tt> (306; 82% instances), <tt><a href="vi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi-pos-VERB.html">VERB</a></tt> (21; 6% instances), <tt><a href="vi-pos-VERB.html">VERB</a></tt>-<tt><a href="vi-pos-X.html">X</a></tt> (16; 4% instances), <tt><a href="vi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi-pos-VERB.html">VERB</a></tt> (14; 4% instances), <tt><a href="vi-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="vi-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="vi-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="vi-pos-VERB.html">VERB</a></tt>-<tt><a href="vi-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="vi-pos-X.html">X</a></tt>-<tt><a href="vi-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="vi-pos-PART.html">PART</a></tt>-<tt><a href="vi-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="vi-pos-VERB.html">VERB</a></tt>-<tt><a href="vi-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="vi-pos-VERB.html">VERB</a></tt>-<tt><a href="vi-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="vi-pos-VERB.html">VERB</a></tt>-<tt><a href="vi-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="vi-pos-VERB.html">VERB</a></tt>-<tt><a href="vi-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
1	Và	Và	CCONJ	C	_	4	cc	_	_
2	tôi	tôi	PROPN	P	_	4	nsubj	_	_
3	được	được	VERB	V	_	4	aux:pass	_	_
4	cử	cử	VERB	V	_	0	root	_	_
5	sang	sang	VERB	V	_	4	xcomp	_	_
6	VN	VN	NOUN	Np	_	4	obj	_	_
7	để	để	ADP	E	_	8	case	_	_
8	giúp	giúp	VERB	V	_	4	mark	_	_
9	người	người	NOUN	N	_	8	obj	_	_
10	VN	VN	NOUN	Ny	_	9	compound	_	_
11	chống	chống	VERB	V	_	8	iobj	_	_
12	phát xít	phát xít	NOUN	N	_	11	obj	_	_
13	Nhật	Nhật	NOUN	Np	_	12	compound	_	SpaceAfter=No
14	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 aux:pass	color:blue
1	Người	Người	NOUN	N	_	3	nsubj	_	_
2	được	được	VERB	V	_	3	aux:pass	_	_
3	giao	giao	VERB	V	_	9	aux:pass	_	_
4	nhiệm vụ	nhiệm vụ	NOUN	N	_	3	obj	_	_
5	giúp	giúp	VERB	V	_	4	xcomp	_	_
6	ông	ông	NOUN	Nc	_	7	compound	_	_
7	Chương	Chương	NOUN	Np	_	5	obj	_	_
8	là	là	AUX	V	_	9	cop	_	_
9	thám tử	thám tử	NOUN	N	_	0	root	_	_
10	Hùng	Hùng	NOUN	Np	_	9	compound	_	SpaceAfter=No
11	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux:pass	color:blue
1	Chúng	Chúng	PROPN	P	_	4	nsubj	_	_
2	cũng	cũng	X	R	_	4	advmod	_	_
3	là	là	AUX	V	_	4	cop	_	_
4	người	người	NOUN	N	_	0	root	_	SpaceAfter=No
5	,	,	PUNCT	,	_	4	punct	_	_
6	chúng	chúng	PROPN	P	_	9	nsubj	_	_
7	phải	phải	VERB	V	_	9	aux	_	_
8	được	được	X	R	_	9	aux:pass	_	_
9	sống	sống	VERB	V	_	4	advmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	4	punct	_	_

~~~


