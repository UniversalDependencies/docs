---
layout: base
title:  'Statistics of clf in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `clf`

This relation is universal.
There are 1 language-specific subtypes of `clf`: <tt><a href="vi_vtb-dep-clf-det.html">clf:det</a></tt>.

250 nodes (0%) are attached to their parents as `clf`.

207 instances of `clf` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.024.

The following 8 pairs of parts of speech are connected with `clf`: <tt><a href="vi_vtb-pos-NUM.html">NUM</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (133; 53% instances), <tt><a href="vi_vtb-pos-DET.html">DET</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (68; 27% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (44; 18% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 clf	color:blue
1	Nhà	nhà	NOUN	N	_	5	nsubj	_	_
2	anh	anh	NOUN	N	_	3	clf:det	_	_
3	Diên	Diên	PROPN	NNP	_	1	nmod	_	_
4	cũng	cũng	ADV	ADV	_	5	advmod	_	_
5	ở	ở	VERB	V	_	0	root	_	_
6	trên	trên	ADP	PRE	_	9	case	_	_
7	một	một	NUM	NUM	_	9	nummod	_	_
8	con	con	NOUN	N	_	7	clf	_	_
9	đường	đường	NOUN	N	_	5	obl:comp	_	_
10	đẹp	đẹp	ADJ	ADJ	_	9	amod	_	_
11	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 clf	color:blue
1	Thế là	thế là	SCONJ	C	_	3	cc	_	_
2	lại	lại	ADV	ADV	_	3	advmod	_	_
3	thêm	thêm	VERB	V	_	0	root	_	_
4	những	những	DET	DET	_	6	det	_	_
5	chú	chú	NOUN	N	_	4	clf	_	_
6	chim	chim	NOUN	N	_	3	obj	_	_
7	vô tội	vô tội	ADJ	ADJ	_	6	amod	_	_
8	nữa	nữa	ADV	ADV	_	6	advmod	_	_
9	sa	sa	VERB	V	_	6	acl:subj	_	_
10	lưới	lưới	NOUN	N	_	9	compound:verbnoun	_	_
11	...	...	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 clf	color:blue
1	Đổi	đổi	VERB	V	_	0	root	_	_
2	những	những	DET	Det	_	4	det	_	_
3	giọt	giọt	NOUN	Nc	_	4	clf	_	_
4	nước mắt	nước mắt	NOUN	N	_	1	obj	_	_
5	lấy	lấy	VERB	V	_	1	xcomp	_	_
6	một	một	NUM	Num	_	7	nummod	_	_
7	nụ	nụ	NOUN	N	_	5	obj	_	_
8	cười	cười	VERB	V	_	7	compound:vmod	_	_
9	.	.	PUNCT	.	_	1	punct	_	_

~~~


