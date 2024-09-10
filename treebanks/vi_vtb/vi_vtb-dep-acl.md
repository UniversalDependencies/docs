---
layout: base
title:  'Statistics of acl in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `acl`

This relation is universal.
There are 4 language-specific subtypes of `acl`: <tt><a href="vi_vtb-dep-acl-relcl.html">acl:relcl</a></tt>, <tt><a href="vi_vtb-dep-acl-subj.html">acl:subj</a></tt>, <tt><a href="vi_vtb-dep-acl-tmod.html">acl:tmod</a></tt>, <tt><a href="vi_vtb-dep-acl-tonp.html">acl:tonp</a></tt>.

246 nodes (0%) are attached to their parents as `acl`.

245 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.73577235772358.

The following 10 pairs of parts of speech are connected with `acl`: <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (211; 86% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (13; 5% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (7; 3% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 acl	color:blue
1	Tổng bí thư	tổng bí thư	NOUN	N	_	2	nsubj	_	_
2	nêu	nêu	VERB	V	_	0	root	_	_
3	hàng	hàng	ADV	Adv	_	4	advmod	_	_
4	loạt	loạt	NOUN	N	_	2	obj	_	_
5	lĩnh vực	lĩnh vực	NOUN	N	_	4	nmod	_	_
6	'	'	PUNCT	PUNCT	_	7	punct	_	_
7	cần	cần	VERB	V	_	5	acl	_	_
8	tập trung	tập trung	VERB	V	_	7	xcomp	_	_
9	kiểm tra	kiểm tra	VERB	V	_	8	xcomp	_	_
10	'	'	PUNCT	PUNCT	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 acl	color:blue
1	Đấy	đấy	PRON	Pro	_	3	nsubj	_	_
2	là	là	AUX	V	_	3	cop	_	_
3	phòng	phòng	NOUN	N	_	0	root	_	_
4	giá	giá	NOUN	N	_	3	acl	_	_
5	cao	cao	ADJ	Adj	_	4	amod	_	_
6	nhất	nhất	ADV	Adv	_	5	compound	_	_
7	:	:	PUNCT	:	_	8	punct	_	_
8	3, 5	3, 5	NUM	Num	_	3	appos	_	_
9	triệu	triệu	NOUN	N	_	8	flat:number	_	_
10	/	/	PUNCT	/	_	8	punct	_	_
11	tháng	tháng	NOUN	N	_	8	nmod	_	_
12	.	.	PUNCT	.	_	3	punct	_	_

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


