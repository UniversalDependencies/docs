---
layout: base
title:  'Statistics of flat in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `flat`

This relation is universal.
There are 6 language-specific subtypes of `flat`: <tt><a href="vi_vtb-dep-flat-date.html">flat:date</a></tt>, <tt><a href="vi_vtb-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="vi_vtb-dep-flat-name.html">flat:name</a></tt>, <tt><a href="vi_vtb-dep-flat-number.html">flat:number</a></tt>, <tt><a href="vi_vtb-dep-flat-redup.html">flat:redup</a></tt>, <tt><a href="vi_vtb-dep-flat-time.html">flat:time</a></tt>.

16 nodes (0%) are attached to their parents as `flat`.

16 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.75.

The following 6 pairs of parts of speech are connected with `flat`: <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (9; 56% instances), <tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt>-<tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt> (2; 13% instances), <tt><a href="vi_vtb-pos-NUM.html">NUM</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="vi_vtb-pos-NUM.html">NUM</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (1; 6% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 6% instances).


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
# visual-style 37	bgColor:blue
# visual-style 37	fgColor:white
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 36 37 flat	color:blue
1	Vừa	vừa	ADV	ADV	_	2	advmod	_	_
2	bám	bám	VERB	V	_	0	root	_	_
3	giữ	giữ	VERB	V	_	2	xcomp	_	_
4	cho	cho	ADV	ADV	_	3	advmod	_	_
5	được	được	ADV	ADV	_	4	flat	_	_
6	theo	theo	ADP	PRE	_	8	case	_	_
7	sợi	sợi	NOUN	N	_	8	clf:det	_	_
8	dây	dây	NOUN	N	_	3	obl	_	_
9	người ta	người ta	PRON	PRO	_	10	nsubj	_	_
10	thả	thả	VERB	V	_	8	acl	_	_
11	xuống	xuống	VERB	V	_	10	compound:dir	_	_
12	từ	từ	ADP	PRE	_	14	case	_	_
13	trên	trên	NOUN	N	_	14	nmod	_	_
14	tàu	tàu	NOUN	N	_	10	obl:comp	_	_
15	,	,	PUNCT	PUNCT	_	17	punct	_	_
16	vừa	vừa	ADV	ADV	_	17	advmod	_	_
17	lượn	lượn	VERB	V	_	2	conj	_	_
18	người	người	NOUN	N	_	17	obj	_	_
19	để	để	ADP	PRE	_	20	mark:pcomp	_	_
20	giảm	giảm	VERB	V	_	17	advcl:objective	_	_
21	sức	sức	NOUN	N	_	20	obj	_	_
22	va đập	va đập	VERB	V	_	21	compound:vmod	_	_
23	do	do	ADP	PRE	_	25	mark	_	_
24	sóng	sóng	NOUN	N	_	25	nsubj	_	_
25	đánh	đánh	VERB	V	_	21	advcl	_	_
26	dập	dập	VERB	V	_	25	xcomp	_	_
27	mình	mình	NOUN	N	_	26	obj	_	_
28	vào	vào	ADP	PRE	_	29	case	_	_
29	thành	thành	NOUN	N	_	26	obl:comp	_	_
30	tàu	tàu	NOUN	N	_	29	compound	_	_
31	,	,	PUNCT	PUNCT	_	34	punct	_	_
32	đồng thời	đồng thời	ADV	ADV	_	34	advmod	_	_
33	phải	phải	AUX	AUX	_	34	aux	_	_
34	gắng sức	gắng sức	VERB	V	_	2	conj	_	_
35	bám	bám	VERB	V	_	34	xcomp	_	_
36	cho	cho	ADV	ADV	_	35	advmod	_	_
37	được	được	ADV	ADV	_	36	flat	_	_
38	vào	vào	ADP	PRE	_	39	case	_	_
39	thang	thang	NOUN	N	_	35	obl:comp	_	_
40	dây	dây	NOUN	N	_	39	compound	_	_
41	.	.	PUNCT	PUNCT	_	2	punct	_	_

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


