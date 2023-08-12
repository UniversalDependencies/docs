---
layout: base
title:  'Statistics of flat:time in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `flat:time`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-flat.html">flat</a></tt>.
There are also 5 other language-specific subtypes of `flat`: <tt><a href="vi_vtb-dep-flat-date.html">flat:date</a></tt>, <tt><a href="vi_vtb-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="vi_vtb-dep-flat-name.html">flat:name</a></tt>, <tt><a href="vi_vtb-dep-flat-number.html">flat:number</a></tt>, <tt><a href="vi_vtb-dep-flat-redup.html">flat:redup</a></tt>.

21 nodes (0%) are attached to their parents as `flat:time`.

21 instances of `flat:time` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14285714285714.

The following 4 pairs of parts of speech are connected with `flat:time`: <tt><a href="vi_vtb-pos-NUM.html">NUM</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (9; 43% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NUM.html">NUM</a></tt> (6; 29% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (3; 14% instances), <tt><a href="vi_vtb-pos-NUM.html">NUM</a></tt>-<tt><a href="vi_vtb-pos-NUM.html">NUM</a></tt> (3; 14% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat:time	color:blue
1	Từ	từ	ADP	PRE	_	2	case	_	_
2	12	12	NUM	NUM	_	12	obl:tmod	_	_
3	g	g	NOUN	NU	_	2	flat:time	_	_
4	khuya	khuya	ADJ	ADJ	_	2	nmod	_	_
5	13	13	NUM	NUM	_	4	nmod	_	_
6	đến	đến	ADP	PRE	_	7	case	_	_
7	rạng	rạng	NOUN	N	_	2	nmod	_	_
8	sáng	sáng	NOUN	N	_	7	compound	_	_
9	14	14	NUM	NUM	_	7	nmod	_	_
10	họ	họ	PRON	PRO	_	12	nsubj	_	_
11	đã	đã	ADV	ADV	_	12	advmod	_	_
12	tìm	tìm	VERB	V	_	0	root	_	_
13	được	được	ADV	ADV	_	12	advmod	_	_
14	xác	xác	NOUN	N	_	12	obj	_	_
15	19	19	NUM	NUM	_	16	nummod	_	_
16	người	người	NOUN	N	_	14	nmod	_	_
17	.	.	PUNCT	PUNCT	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat:time	color:blue
1	9	9	NUM	Num	_	2	nummod	_	_
2	g	g	NOUN	Nu	_	4	obl:tmod	_	_
3	30	30	NUM	Num	_	2	flat:time	_	_
4	móc	móc	VERB	V	_	0	root	_	_
5	ví	ví	NOUN	N	_	4	obj	_	_
6	lấy	lấy	VERB	V	_	4	xcomp	_	_
7	một	một	NUM	Num	_	8	nummod	_	_
8	sim	sim	NOUN	N	_	6	obj	_	_
9	điện thoại	điện thoại	NOUN	N	_	8	nmod	_	_
10	thay	thay	VERB	V	_	6	xcomp	_	_
11	vào	vào	ADP	Pre	_	12	case	_	_
12	máy	máy	NOUN	N	_	10	obl:comp	_	_
13	và	và	CCONJ	CC	_	14	cc	_	_
14	bấm	bấm	VERB	V	_	6	conj	_	_
15	gọi	gọi	VERB	V	_	14	xcomp	_	_
16	...	...	PUNCT	...	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:time	color:blue
1	Gần	gần	ADJ	Adj	_	3	amod	_	_
2	10	10	NUM	Num	_	3	nummod	_	_
3	giờ	giờ	NOUN	N	_	11	obl:tmod	_	_
4	sáng	sáng	NOUN	N	_	3	flat:time	_	_
5	cùng	cùng	ADJ	Adj	_	6	amod	_	_
6	ngày	ngày	NOUN	N	_	3	nmod	_	_
7	,	,	PUNCT	,	_	3	punct	_	_
8	nước	nước	NOUN	N	_	11	nsubj:pass	_	_
9	đã	đã	ADV	Adv	_	11	advmod	_	_
10	được	được	ADV	Adv	_	11	advmod	_	_
11	mở	mở	VERB	V	_	0	root	_	_
12	trở lại	trở lại	VERB	V	_	11	compound:dir	_	_
13	.	.	PUNCT	.	_	11	punct	_	_

~~~


