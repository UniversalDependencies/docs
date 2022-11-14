---
layout: base
title:  'Statistics of flat in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `flat`

This relation is universal.
There are 5 language-specific subtypes of `flat`: <tt><a href="vi_vtb-dep-flat-date.html">flat:date</a></tt>, <tt><a href="vi_vtb-dep-flat-name.html">flat:name</a></tt>, <tt><a href="vi_vtb-dep-flat-number.html">flat:number</a></tt>, <tt><a href="vi_vtb-dep-flat-redup.html">flat:redup</a></tt>, <tt><a href="vi_vtb-dep-flat-time.html">flat:time</a></tt>.

17 nodes (0%) are attached to their parents as `flat`.

17 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.70588235294118.

The following 6 pairs of parts of speech are connected with `flat`: <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (11; 65% instances), <tt><a href="vi_vtb-pos-NUM.html">NUM</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (2; 12% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-CCONJ.html">CCONJ</a></tt> (1; 6% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-SYM.html">SYM</a></tt> (1; 6% instances), <tt><a href="vi_vtb-pos-NUM.html">NUM</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 flat	color:blue
1	15	15	NUM	Num	_	2	nummod	_	_
2	g	g	NOUN	Nu	_	14	obl:tmod	_	_
3	30	30	NUM	Num	_	2	nummod	_	_
4	ngày	ngày	NOUN	N	_	2	flat	_	_
5	11 - 8	11 - 8	NUM	Num	_	4	nummod	_	_
6	,	,	PUNCT	,	_	2	punct	_	_
7	đường	đường	NOUN	N	_	14	nsubj:pass	_	_
8	nước	nước	NOUN	N	_	7	compound	_	_
9	qua	qua	ADP	Pre	_	10	case	_	_
10	tuyến	tuyến	NOUN	N	_	7	obl	_	_
11	ống	ống	NOUN	N	_	10	compound	_	_
12	lại	lại	ADV	Adv	_	14	advmod	_	_
13	được	được	AUX	AUX	_	14	aux:pass	_	_
14	đóng	đóng	VERB	V	_	0	root	_	_
15	.	.	PUNCT	.	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 flat	color:blue
1	Khi	khi	NOUN	N	_	17	obl:tmod	_	_
2	tôi	tôi	PRON	Pro	_	3	nsubj	_	_
3	đọc	đọc	VERB	V	_	1	acl:tmod	_	_
4	tặng	tặng	VERB	V	_	3	xcomp	_	_
5	Mai	Mai	PROPN	NNP	_	4	iobj	_	_
6	bài	bài	NOUN	N	_	4	obj	_	_
7	Đôi	đôi	NUM	Num	_	6	nmod	_	_
8	mắt	mắt	NOUN	N	_	7	flat	_	_
9	người	người	NOUN	Nc	_	7	flat	_	_
10	Sơn Tây	Sơn Tây	PROPN	NNP	_	7	flat	_	_
11	của	của	ADP	Pre	_	12	case	_	_
12	nhà thơ	nhà thơ	NOUN	N	_	6	nmod:poss	_	_
13	Quang Dũng	Quang Dũng	PROPN	NNP	_	12	nmod	_	_
14	,	,	PUNCT	,	_	1	punct	_	_
15	Mai	Mai	PROPN	NNP	_	17	nsubj	_	_
16	đã	đã	ADV	Adv	_	17	advmod	_	_
17	khóc	khóc	VERB	V	_	0	root	_	_
18	...	...	PUNCT	...	_	17	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat	color:blue
1	Lòng	lòng	NOUN	N	_	4	nsubj	_	_
2	địa đạo	địa đạo	NOUN	N	_	1	nmod	_	_
3	không	không	ADV	Adv	_	4	advmod:neg	_	_
4	thẳng	thẳng	ADJ	Adj	_	0	root	_	_
5	mà	mà	SCONJ	SC	_	4	mark	_	_
6	ngoằn ngoèo	ngoằn ngoèo	ADJ	Adj	_	4	conj	_	_
7	uốn khúc	uốn khúc	ADJ	Adj	_	6	flat	_	_
8	,	,	PUNCT	,	_	9	punct	_	_
9	ngoắt	ngoắt	ADJ	Adj	_	4	conj	_	_
10	qua	qua	ADV	Adv	_	9	advmod	_	_
11	ngoắt	ngoắt	ADJ	Adj	_	9	conj	_	_
12	lại	lại	ADV	Adv	_	11	advmod	_	_
13	.	.	PUNCT	.	_	4	punct	_	_

~~~


