---
layout: base
title:  'Statistics of discourse in UD_Vietnamese'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese: Relations: `discourse`

This relation is universal.

306 nodes (1%) are attached to their parents as `discourse`.

163 instances of `discourse` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.24183006535948.

The following 17 pairs of parts of speech are connected with `discourse`: <tt><a href="vi-pos-VERB.html">VERB</a></tt>-<tt><a href="vi-pos-PART.html">PART</a></tt> (101; 33% instances), <tt><a href="vi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi-pos-PART.html">PART</a></tt> (88; 29% instances), <tt><a href="vi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi-pos-PART.html">PART</a></tt> (44; 14% instances), <tt><a href="vi-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi-pos-PART.html">PART</a></tt> (19; 6% instances), <tt><a href="vi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi-pos-X.html">X</a></tt> (16; 5% instances), <tt><a href="vi-pos-VERB.html">VERB</a></tt>-<tt><a href="vi-pos-INTJ.html">INTJ</a></tt> (11; 4% instances), <tt><a href="vi-pos-ADP.html">ADP</a></tt>-<tt><a href="vi-pos-PART.html">PART</a></tt> (7; 2% instances), <tt><a href="vi-pos-VERB.html">VERB</a></tt>-<tt><a href="vi-pos-X.html">X</a></tt> (4; 1% instances), <tt><a href="vi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi-pos-INTJ.html">INTJ</a></tt> (3; 1% instances), <tt><a href="vi-pos-X.html">X</a></tt>-<tt><a href="vi-pos-PART.html">PART</a></tt> (3; 1% instances), <tt><a href="vi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi-pos-INTJ.html">INTJ</a></tt> (2; 1% instances), <tt><a href="vi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="vi-pos-PART.html">PART</a></tt>-<tt><a href="vi-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="vi-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="vi-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="vi-pos-INTJ.html">INTJ</a></tt>-<tt><a href="vi-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="vi-pos-NUM.html">NUM</a></tt>-<tt><a href="vi-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="vi-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi-pos-INTJ.html">INTJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 discourse	color:blue
1	Chính	Chính	PART	T	_	7	discourse	_	_
2	những	những	DET	L	_	3	det	_	_
3	cảnh	cảnh	NOUN	N	_	7	nsubj	_	_
4	đời	đời	NOUN	N	_	3	compound	_	_
5	này	này	PROPN	P	_	3	det	_	_
6	đã	đã	X	R	_	7	advmod	_	_
7	giữ	giữ	VERB	V	_	0	root	_	_
8	chân	chân	NOUN	N	_	7	obj	_	_
9	anh	anh	NOUN	N	_	7	obj	_	_
10	ở	ở	VERB	V	_	9	xcomp	_	_
11	lại	lại	X	R	_	10	advmod	_	_
12	VN	VN	NOUN	Ny	_	10	obj	_	SpaceAfter=No
13	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 discourse	color:blue
1	Và	Và	CCONJ	C	_	10	cc	_	_
2	chính	chính	PART	T	_	3	discourse	_	_
3	anh	anh	NOUN	N	_	10	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	,	_	10	punct	_	_
5	để	để	ADP	E	_	10	advcl	_	_
6	xác minh	xác minh	VERB	V	_	5	mark	_	SpaceAfter=No
7	,	,	PUNCT	,	_	10	punct	_	_
8	đã	đã	X	R	_	10	advmod	_	_
9	từng	từng	X	R	_	10	advmod	_	_
10	về	về	VERB	V	_	0	root	_	_
11	tận	tận	ADP	E	_	12	case	_	_
12	nhà	nhà	NOUN	N	_	10	obl	_	_
13	nhiều	nhiều	ADJ	A	_	15	amod	_	_
14	đứa	đứa	NOUN	Nc	_	15	compound	_	_
15	trẻ	trẻ	NOUN	N	_	12	compound	_	SpaceAfter=No
16	.	.	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 discourse	color:blue
1	Thật	Thật	PART	T	_	2	discourse	_	_
2	lạ	lạ	ADJ	A	_	5	csubj	_	_
3	là	là	AUX	V	_	5	cop	_	_
4	không	không	X	R	Polarity=Neg	5	advmod	_	_
5	ai	ai	PROPN	P	_	0	root	_	_
6	biết	biết	VERB	V	_	5	xcomp	_	_
7	Hùng	Hùng	NOUN	Np	_	6	obj	_	SpaceAfter=No
8	.	.	PUNCT	.	_	5	punct	_	_

~~~


