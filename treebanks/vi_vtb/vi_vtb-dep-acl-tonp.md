---
layout: base
title:  'Statistics of acl:tonp in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `acl:tonp`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-acl.html">acl</a></tt>.
There are also 3 other language-specific subtypes of `acl`: <tt><a href="vi_vtb-dep-acl-relcl.html">acl:relcl</a></tt>, <tt><a href="vi_vtb-dep-acl-subj.html">acl:subj</a></tt>, <tt><a href="vi_vtb-dep-acl-tmod.html">acl:tmod</a></tt>.

97 nodes (0%) are attached to their parents as `acl:tonp`.

97 instances of `acl:tonp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.01030927835052.

The following 4 pairs of parts of speech are connected with `acl:tonp`: <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (76; 78% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (18; 19% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 acl:tonp	color:blue
1	Thứ	thứ	NOUN	N	_	7	obl	_	_
2	nhất	nhất	NUM	Num	_	1	nummod	_	_
3	,	,	PUNCT	,	_	1	punct	_	_
4	đây	đây	PRON	Pro	_	7	nsubj	_	_
5	đơn thuần	đơn thuần	ADJ	Adj	_	7	advmod:adj	_	_
6	là	là	AUX	V	_	7	cop	_	_
7	sự	sự	NOUN	Nc	_	0	root	_	_
8	trêu chọc	trêu chọc	VERB	V	_	7	acl:tonp	_	_
9	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 acl:tonp	color:blue
1	Nỗi	nỗi	NOUN	N	_	0	root	_	_
2	bất lực	bất lực	ADJ	ADJ	_	1	acl:tonp	_	_
3	của	của	ADP	PRE	_	4	case	_	_
4	chủ	chủ	NOUN	N	_	1	nmod:poss	_	_
5	rừng	rừng	NOUN	N	_	4	compound	_	_
6	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 acl:tonp	color:blue
1	Phải	phải	AUX	AUX	_	2	aux	_	_
2	vay	vay	VERB	V	_	7	csubj:vsubj	_	_
3	nợ	nợ	NOUN	N	_	2	obj	_	_
4	ngân hàng	ngân hàng	NOUN	N	_	3	nmod	_	_
5	lẫn	lẫn	SCONJ	C	_	6	cc	_	_
6	người thân	người thân	NOUN	N	_	3	conj	_	_
7	tổng cộng	tổng cộng	NOUN	N	_	0	root	_	_
8	khoảng	khoảng	NOUN	N	_	7	nmod	_	_
9	35 triệu	35 triệu	NUM	NUM	_	10	nummod	_	_
10	baht	baht	NOUN	NU	_	8	nmod	_	_
11	để	để	ADP	PRE	_	12	mark:pcomp	_	_
12	cầm cự	cầm cự	VERB	V	_	7	advcl:objective	_	_
13	trang trại	trang trại	NOUN	N	_	12	obj	_	_
14	của	của	ADP	PRE	_	15	case	_	_
15	mình	mình	PRON	PRO	_	13	nmod:poss	_	_
16	trước	trước	ADP	PRE	_	17	case	_	_
17	sự	sự	NOUN	N	_	12	obl	_	_
18	sụt giá	sụt giá	NOUN	N	_	17	acl:tonp	_	_
19	ghê gớm	ghê gớm	ADJ	ADJ	_	17	amod	_	_
20	của	của	ADP	PRE	_	21	case	_	_
21	heo	heo	NOUN	N	_	17	nmod:poss	_	_
22	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


