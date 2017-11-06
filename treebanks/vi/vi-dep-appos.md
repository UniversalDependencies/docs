---
layout: base
title:  'Statistics of appos in UD_Vietnamese'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese: Relations: `appos`

This relation is universal.

84 nodes (0%) are attached to their parents as `appos`.

83 instances of `appos` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.83333333333333.

The following 5 pairs of parts of speech are connected with `appos`: <tt><a href="vi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi-pos-NOUN.html">NOUN</a></tt> (75; 89% instances), <tt><a href="vi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi-pos-SCONJ.html">SCONJ</a></tt> (3; 4% instances), <tt><a href="vi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="vi-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="vi-pos-VERB.html">VERB</a></tt>-<tt><a href="vi-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 appos	color:blue
1	hổ	hổ	NOUN	N	_	5	nsubj	_	_
2	này	này	PROPN	P	_	1	det	_	_
3	là	là	AUX	V	_	5	cop	_	_
4	của	của	ADP	E	_	5	case	_	_
5	ấn độ	ấn độ	NOUN	Np	_	0	root	_	SpaceAfter=No
6	,	,	PUNCT	,	_	11	punct	_	_
7	Bangladesh	Bangladesh	NOUN	Np	_	5	appos	_	SpaceAfter=No
8	,	,	PUNCT	,	_	11	punct	_	_
9	Sri Lanka	Sri Lanka	NOUN	Np	_	5	appos	_	SpaceAfter=No
10	,	,	PUNCT	,	_	11	punct	_	_
11	Nga	Nga	NOUN	Np	_	5	conj	_	SpaceAfter=No
12	,	,	PUNCT	,	_	13	punct	_	_
13	Thái Lan	Thái Lan	NOUN	Np	_	5	conj	_	SpaceAfter=No
14	...	...	PUNCT	...	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 17 appos	color:blue
1	đường	đường	NOUN	N	_	6	nsubj	_	_
2	thứ	thứ	NOUN	N	_	1	compound	_	_
3	ba	ba	NUM	M	NumType=Card	2	nummod	_	_
4	là	là	AUX	V	_	6	cop	_	_
5	từ	từ	ADP	E	_	6	case	_	_
6	Campuchia	Campuchia	NOUN	Np	_	0	root	_	SpaceAfter=No
7	,	,	PUNCT	,	_	9	punct	_	_
8	Lào	Lào	NOUN	Np	_	6	nmod	_	_
9	về	về	VERB	V	_	6	conj	_	_
10	qua	qua	ADP	E	_	12	case	_	_
11	các	các	DET	L	_	12	det	_	_
12	cửa khẩu	cửa khẩu	NOUN	N	_	9	obl	_	_
13	cầu treo	cầu treo	NOUN	Np	_	12	compound	_	_
14	LBKT	LBKT	PUNCT	LBKT	_	13	punct	_	_
15	Hà Tĩnh	Hà Tĩnh	NOUN	Np	_	13	appos	_	_
16	RBKT	RBKT	PUNCT	RBKT	_	13	punct	_	_
17	và	và	SCONJ	CC	_	12	appos	_	_
18	Lai Châu	Lai Châu	NOUN	Np	_	12	appos	_	SpaceAfter=No
19	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 15 appos	color:blue
1	ông	ông	NOUN	Nc	_	2	compound	_	_
2	Phong	Phong	NOUN	Np	_	4	nsubj	_	_
3	đã	đã	X	R	_	4	advmod	_	_
4	có	có	VERB	V	_	0	root	_	_
5	lần	lần	NOUN	N	_	4	obj	_	_
6	gọi	gọi	VERB	V	_	5	xcomp	_	_
7	điện	điện	NOUN	N	_	6	obj	_	_
8	cho	cho	ADP	E	_	10	case	_	_
9	bà	bà	NOUN	Nc	_	10	compound	_	_
10	Nhu	Nhu	NOUN	Np	_	6	obl	_	_
11	LBKT	LBKT	PUNCT	LBKT	_	10	punct	_	_
12	thực tế	thực tế	NOUN	N	_	15	advcl	_	_
13	việc	việc	NOUN	N	_	15	nsubj	_	_
14	này	này	PROPN	P	_	13	det	_	_
15	có	có	VERB	V	_	10	appos	_	_
16	thật	thật	ADJ	A	_	15	xcomp	_	_
17	RBKT	RBKT	PUNCT	RBKT	_	10	punct	_	_
18	bằng	bằng	ADP	E	_	19	case	_	_
19	"	"	PUNCT	"	_	6	punct	_	SpaceAfter=No
20	số	số	NOUN	N	_	19	nmod	_	_
21	điện thoại	điện thoại	NOUN	N	_	20	compound	_	_
22	nhà	nhà	NOUN	N	_	20	compound	_	_
23	Hạnh	Hạnh	NOUN	Np	_	22	compound	_	SpaceAfter=No
24	"	"	PUNCT	"	_	19	punct	_	SpaceAfter=No
25	.	.	PUNCT	.	_	4	punct	_	_

~~~


