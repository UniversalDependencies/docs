---
layout: base
title:  'Statistics of amod in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `amod`

This relation is universal.

1126 nodes (2%) are attached to their parents as `amod`.

1060 instances of `amod` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.3214920071048.

The following 16 pairs of parts of speech are connected with `amod`: <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (1040; 92% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (31; 3% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (16; 1% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (11; 1% instances), <tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (8; 1% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="vi_vtb-pos-NUM.html">NUM</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-DET.html">DET</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-NUM.html">NUM</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 amod	color:blue
1	Hàng	hàng	NOUN	N	_	0	root	_	_
2	VN	vn	PROPN	NNPY	_	1	compound	_	_
3	chất lượng	chất lượng	NOUN	N	_	1	nmod	_	_
4	cao	cao	ADJ	ADJ	_	3	amod	_	_
5	giữa	giữa	ADP	PRE	_	6	case	_	_
6	lòng	lòng	NOUN	N	_	1	nmod	_	_
7	Phnom Penh	Phnom Penh	PROPN	NNP	_	6	nmod	_	_
8	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 amod	color:blue
1	"	"	PUNCT	``	_	4	punct	_	_
2	Đây	đây	PRON	Pro	_	4	nsubj	_	_
3	là	là	AUX	V	_	4	cop	_	_
4	lĩnh vực	lĩnh vực	NOUN	N	_	0	root	_	_
5	cần	cần	VERB	V	_	4	acl:subj	_	_
6	đầu tư	đầu tư	VERB	V	_	5	xcomp	_	_
7	lớn	lớn	ADJ	Adj	_	6	amod	_	_
8	,	,	PUNCT	,	_	9	punct	_	_
9	thu hồi	thu hồi	VERB	V	_	5	conj	_	_
10	vốn	vốn	NOUN	N	_	9	obj	_	_
11	lại	lại	ADV	Adv	_	12	advmod	_	_
12	chậm	chậm	ADJ	Adj	_	9	amod	_	_
13	"	"	PUNCT	``	_	4	punct	_	_
14	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 amod	color:blue
1	Quý	quý	NOUN	N	_	4	nsubj	_	_
2	1	1	NUM	Num	_	1	nummod	_	_
3	là	là	AUX	V	_	4	cop	_	_
4	thời điểm	thời điểm	NOUN	N	_	0	root	_	_
5	biểu hiện	biểu hiện	VERB	V	_	4	acl	_	_
6	rõ	rõ	ADJ	Adj	_	5	advmod:adj	_	_
7	nhất	nhất	ADJ	Adj	_	6	amod	_	_
8	sự	sự	NOUN	Nc	_	5	obj	_	_
9	thiếu	thiếu	VERB	V	_	8	acl:tonp	_	_
10	bền vững	bền vững	ADJ	Adj	_	8	amod	_	_
11	này	này	PRON	Pro	_	8	det:pmod	_	_
12	"	"	PUNCT	``	_	4	punct	_	_
13	.	.	PUNCT	.	_	4	punct	_	_

~~~


