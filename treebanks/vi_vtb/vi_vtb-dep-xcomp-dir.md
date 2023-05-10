---
layout: base
title:  'Statistics of xcomp:dir in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `xcomp:dir`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-xcomp.html">xcomp</a></tt>.
There are also 2 other language-specific subtypes of `xcomp`: <tt><a href="vi_vtb-dep-xcomp-adj.html">xcomp:adj</a></tt>, <tt><a href="vi_vtb-dep-xcomp-vcomp.html">xcomp:vcomp</a></tt>.

17 nodes (0%) are attached to their parents as `xcomp:dir`.

17 instances of `xcomp:dir` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.29411764705882.

The following 4 pairs of parts of speech are connected with `xcomp:dir`: <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (13; 76% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt> (2; 12% instances), <tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 14 xcomp:dir	color:blue
1	Bà	bà	NOUN	N	_	2	nsubj	_	_
2	giặt	giặt	VERB	V	_	0	root	_	_
3	áo khoác	áo khoác	NOUN	N	_	2	obj	_	_
4	và	và	CCONJ	CC	_	5	cc	_	_
5	quần	quần	NOUN	N	_	3	conj	_	_
6	bẩn	bẩn	ADJ	ADJ	_	5	amod	_	_
7	của	của	ADP	PRE	_	8	case	_	_
8	cha	cha	NOUN	N	_	3	nmod:poss	_	_
9	,	,	PUNCT	PUNCT	_	10	punct	_	_
10	lấy	lấy	VERB	V	_	2	conj	_	_
11	ga	ga	NOUN	NB	_	10	obj	_	_
12	trải	trải	VERB	V	_	11	acl:subj	_	_
13	giường	giường	NOUN	N	_	12	obj	_	_
14	ra	ra	VERB	V	_	10	xcomp:dir	_	_
15	phơi	phơi	VERB	V	_	10	xcomp	_	_
16	nắng	nắng	NOUN	N	_	15	obj	_	_
17	và	và	CCONJ	CC	_	18	cc	_	_
18	thay	thay	VERB	V	_	2	conj	_	_
19	vào	vào	VERB	V	_	18	compound:dir	_	_
20	một	một	NUM	NUM	_	22	nummod	_	_
21	chiếc	chiếc	NOUN	N	_	20	clf	_	_
22	chăn	chăn	NOUN	N	_	18	obj	_	_
23	sạch sẽ	sạch sẽ	ADJ	ADJ	_	22	amod	_	_
24	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 20 xcomp:dir	color:blue
1	Vừa	vừa	ADV	ADV	_	2	advmod	_	_
2	nói chuyện	nói chuyện	VERB	V	_	0	root	_	_
3	với	với	ADP	PRE	_	4	case	_	_
4	chúng tôi	chúng tôi	PRON	PRO	_	2	obl:with	_	_
5	,	,	PUNCT	PUNCT	_	9	punct	_	_
6	vợ	vợ	NOUN	N	_	9	nsubj	_	_
7	Mười	Mười	PROPN	NNP	_	6	compound	_	_
8	vừa	vừa	ADV	ADV	_	9	advmod	_	_
9	cân	cân	VERB	V	_	2	conj	_	_
10	mấy	mấy	DET	DET	_	12	det	_	_
11	con	con	NOUN	N	_	10	clf	_	_
12	thú	thú	NOUN	N	_	9	obj	_	_
13	của	của	ADP	PRE	_	16	case	_	_
14	một	một	NUM	NUM	_	16	nummod	_	_
15	người	người	NOUN	N	_	14	clf	_	_
16	đàn ông	đàn ông	NOUN	N	_	12	nmod:poss	_	_
17	bẫy	bẫy	VERB	V	_	16	acl:subj	_	_
18	được	được	ADV	ADV	_	17	advmod	_	_
19	mang	mang	VERB	V	_	17	xcomp	_	_
20	đến	đến	ADV	ADV	_	19	xcomp:dir	_	_
21	bán	bán	VERB	V	_	19	xcomp	_	_
22	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 27 xcomp:dir	color:blue
1	Người	người	NOUN	N	_	12	nsubj	_	_
2	mặc	mặc	VERB	V	_	1	acl:subj	_	_
3	quân phục	quân phục	NOUN	N	_	2	obj	_	_
4	-	-	PUNCT	PUNCT	_	7	punct	_	_
5	sau này	sau này	NOUN	N	_	7	obl:tmod	_	_
6	tôi	tôi	PRON	PRO	_	7	nsubj	_	_
7	biết	biết	VERB	V	_	1	parataxis	_	_
8	là	là	AUX	AUX	_	9	cop	_	_
9	sĩ quan	sĩ quan	NOUN	N	_	7	ccomp	_	_
10	tham mưu	tham mưu	VERB	V	_	9	compound:vmod	_	_
11	-	-	PUNCT	PUNCT	_	7	punct	_	_
12	nói	nói	VERB	V	_	0	root	_	_
13	:	:	PUNCT	PUNCT	_	20	punct	_	_
14	-	-	PUNCT	PUNCT	_	15	punct	_	_
15	báo cáo	báo cáo	VERB	V	_	20	vocative	_	_
16	thủ trưởng	thủ trưởng	NOUN	N	_	15	obj	_	_
17	,	,	PUNCT	PUNCT	_	20	punct	_	_
18	đây	đây	PRON	PRO	_	20	nsubj:nn	_	_
19	là	là	AUX	AUX	_	20	cop	_	_
20	đồng chí	đồng chí	NOUN	N	_	12	parataxis	_	_
21	Đặng Văn Thanh	Đặng Văn Thanh	PROPN	NNP	_	20	compound	_	_
22	,	,	PUNCT	PUNCT	_	24	punct	_	_
23	vừa	vừa	ADV	ADV	_	24	advmod	_	_
24	ở	ở	ADP	PRE	_	20	acl:subj	_	_
25	khu	khu	NOUN	N	_	24	obl:comp	_	_
26	6	6	NUM	NUM	_	25	compound	_	_
27	ra	ra	VERB	V	_	24	xcomp:dir	_	_
28	.	.	PUNCT	PUNCT	_	12	punct	_	_

~~~


