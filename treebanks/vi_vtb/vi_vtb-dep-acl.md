---
layout: base
title:  'Statistics of acl in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `acl`

This relation is universal.
There are 4 language-specific subtypes of `acl`: <tt><a href="vi_vtb-dep-acl-relcl.html">acl:relcl</a></tt>, <tt><a href="vi_vtb-dep-acl-subj.html">acl:subj</a></tt>, <tt><a href="vi_vtb-dep-acl-tmod.html">acl:tmod</a></tt>, <tt><a href="vi_vtb-dep-acl-tonp.html">acl:tonp</a></tt>.

245 nodes (1%) are attached to their parents as `acl`.

244 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.30612244897959.

The following 8 pairs of parts of speech are connected with `acl`: <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (222; 91% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (6; 2% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 acl	color:blue
1	Vào	vào	ADP	Pre	_	2	case	_	_
2	giờ	giờ	NOUN	N	_	11	obl:tmod	_	_
3	tan	tan	VERB	V	_	2	acl	_	_
4	ca	ca	NOUN	N	_	3	obj	_	_
5	,	,	PUNCT	,	_	2	punct	_	_
6	hàng	hàng	ADV	Adv	_	8	advmod	_	_
7	trăm	trăm	NUM	Num	_	8	nummod	_	_
8	lđ	lđ	NOUN	Ny	_	11	nsubj	_	_
9	các	các	DET	Det	_	10	det	_	_
10	nơi	nơi	NOUN	N	_	8	nmod	_	_
11	đổ	đổ	VERB	V	_	0	root	_	_
12	về	về	VERB	V	_	11	xcomp	_	_
13	...	...	PUNCT	...	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 acl	color:blue
1	Thấy	thấy	VERB	V	_	11	parataxis	_	_
2	cảnh	cảnh	NOUN	N	_	1	ccomp	_	_
3	mẹ con	mẹ con	NOUN	N	_	5	nsubj	_	_
4	người ta	người ta	PRON	Pro	_	3	det:pmod	_	_
5	ríu rít	ríu rít	ADJ	Adj	_	2	acl	_	_
6	đưa	đưa	VERB	V	_	5	xcomp:adj	_	_
7	nhau	nhau	NOUN	N	_	6	obj	_	_
8	đến	đến	ADP	Pre	_	9	case	_	_
9	trường	trường	NOUN	N	_	6	obl:comp	_	_
10	mà	mà	SCONJ	SC	_	11	mark	_	_
11	thèm	thèm	VERB	V	_	0	root	_	_
12	.	.	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 acl	color:blue
1	Có	có	VERB	V	_	0	root	_	_
2	tay	tay	NOUN	N	_	1	obj	_	_
3	cửu vạn	cửu vạn	NOUN	N	_	2	nmod	_	_
4	một mình	một mình	NOUN	N	_	5	nsubj	_	_
5	làm	làm	VERB	V	_	1	acl	_	_
6	hai	hai	NUM	Num	_	7	nummod	_	_
7	vác	vác	NOUN	N	_	5	obj	_	_
8	chạy	chạy	VERB	V	_	5	xcomp	_	_
9	phăm phăm	phăm phăm	ADJ	Adj	_	8	advmod:adj	_	_
10	ra	ra	ADP	Pre	_	8	xcomp	_	_
11	đường	đường	NOUN	N	_	8	obj	_	_
12	.	.	PUNCT	.	_	1	punct	_	_

~~~


