---
layout: base
title:  'Statistics of appos:nmod in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `appos:nmod`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-appos.html">appos</a></tt>.

173 nodes (0%) are attached to their parents as `appos:nmod`.

173 instances of `appos:nmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.72254335260116.

The following 15 pairs of parts of speech are connected with `appos:nmod`: <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (90; 52% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (27; 16% instances), <tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (18; 10% instances), <tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (11; 6% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (7; 4% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (5; 3% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_vtb-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 appos:nmod	color:blue
1	Áo	áo	NOUN	N	_	0	root	_	_
2	trắng	trắng	ADJ	ADJ	_	1	amod	_	_
3	xuống đường	xuống đường	VERB	V	_	1	acl:subj	_	_
4	LBKT	lbkt	PUNCT	PUNCT	_	5	punct	_	_
5	kỳ	kỳ	NOUN	N	_	1	appos:nmod	_	_
6	2	2	NUM	NUM	_	5	nmod	_	_
7	RBKT	rbkt	PUNCT	PUNCT	_	5	punct	_	_
8	:	:	PUNCT	PUNCT	_	9	punct	_	_
9	giành	giành	VERB	V	_	1	parataxis	_	_
10	lấy	lấy	ADV	ADV	_	9	compound:prt	_	_
11	ngọn	ngọn	NOUN	N	_	9	obj	_	_
12	cờ	cờ	NOUN	N	_	11	compound	_	_
13	đại diện	đại diện	VERB	V	_	11	acl:subj	_	_
14	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 appos:nmod	color:blue
1	Ba	ba	NUM	Num	_	2	nummod	_	_
2	thám tử	thám tử	NOUN	N	_	9	nsubj	_	_
3	:	:	PUNCT	:	_	2	punct	_	_
4	bằng	bằng	PROPN	NNP	_	2	appos:nmod	_	_
5	,	,	PUNCT	,	_	6	punct	_	_
6	Khoa	Khoa	PROPN	NNP	_	4	conj	_	_
7	,	,	PUNCT	,	_	8	punct	_	_
8	Minh	Minh	PROPN	NNP	_	4	conj	_	_
9	nhận	nhận	VERB	V	_	0	root	_	_
10	nhiệm vụ	nhiệm vụ	NOUN	N	_	9	obj	_	_
11	vào	vào	VERB	V	_	9	advcl	_	_
12	TP.HCM	tp.hcm	NOUN	Ny	_	11	obj	_	_
13	xác minh	xác minh	VERB	V	_	11	advcl:objective	_	_
14	cái	cái	NOUN	Nc	_	13	obj	_	_
15	chết	chết	VERB	V	_	14	acl:tonp	_	_
16	của	của	ADP	Pre	_	18	case	_	_
17	bà	bà	NOUN	Nc	_	18	nmod:poss	_	_
18	Sinh	Sinh	PROPN	NNP	_	14	nmod:poss	_	_
19	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 appos:nmod	color:blue
1	Ông	ông	NOUN	N	_	3	nsubj	_	_
2	là	là	AUX	V	_	3	cop	_	_
3	hùng	hùng	PROPN	NNP	_	0	root	_	_
4	,	,	PUNCT	,	_	5	punct	_	_
5	lớp	lớp	NOUN	N	_	3	appos:nmod	_	_
6	tại chức	tại chức	ADJ	Adj	_	5	amod	_	_
7	K7	K7	PROPN	NNP	_	5	nmod	_	_
8	thương mại	thương mại	NOUN	N	_	5	nmod	_	_
9	đúng	đúng	ADJ	Adj	_	3	amod	_	_
10	không	không	ADV	Adv	_	9	advmod:neg	_	_
11	?	?	PUNCT	?	_	3	punct	_	_

~~~


