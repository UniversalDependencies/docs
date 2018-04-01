---
layout: base
title:  'Statistics of amod in UD_Vietnamese'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese: Relations: `amod`

This relation is universal.

1298 nodes (3%) are attached to their parents as `amod`.

1140 instances of `amod` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.49537750385208.

The following 11 pairs of parts of speech are connected with `amod`: <tt><a href="vi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi-pos-ADJ.html">ADJ</a></tt> (1159; 89% instances), <tt><a href="vi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi-pos-ADJ.html">ADJ</a></tt> (76; 6% instances), <tt><a href="vi-pos-VERB.html">VERB</a></tt>-<tt><a href="vi-pos-ADJ.html">ADJ</a></tt> (20; 2% instances), <tt><a href="vi-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi-pos-ADJ.html">ADJ</a></tt> (19; 1% instances), <tt><a href="vi-pos-ADP.html">ADP</a></tt>-<tt><a href="vi-pos-ADJ.html">ADJ</a></tt> (8; 1% instances), <tt><a href="vi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi-pos-X.html">X</a></tt> (7; 1% instances), <tt><a href="vi-pos-NUM.html">NUM</a></tt>-<tt><a href="vi-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="vi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="vi-pos-X.html">X</a></tt>-<tt><a href="vi-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="vi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="vi-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="vi-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 amod	color:blue
1	Đó	Đó	PROPN	P	_	3	nsubj	_	_
2	là	là	AUX	V	_	3	cop	_	_
3	cuộc	cuộc	NOUN	N	_	0	root	_	_
4	chiến tranh	chiến tranh	NOUN	N	_	3	compound	_	_
5	phi nghĩa	phi nghĩa	ADJ	A	_	3	amod	_	SpaceAfter=No
6	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 amod	color:blue
1	Bác Hồ	Bác Hồ	NOUN	Np	_	3	nsubj	_	_
2	là	là	AUX	V	_	3	cop	_	_
3	hiện thân	hiện thân	NOUN	N	_	0	root	_	_
4	tất cả	tất cả	PROPN	P	_	3	det	_	_
5	những	những	DET	L	_	4	det	_	_
6	gì	gì	PROPN	P	_	4	det	_	_
7	tốt đẹp	tốt đẹp	ADJ	A	_	4	amod	_	_
8	nhất	nhất	ADJ	A	_	7	amod	_	SpaceAfter=No
9	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 amod	color:blue
1	ấp úng	ấp úng	VERB	V	_	8	advcl	_	_
2	trong	trong	ADP	E	_	3	case	_	_
3	phòng	phòng	NOUN	N	_	1	obl	_	_
4	giám đốc	giám đốc	NOUN	N	_	3	compound	_	SpaceAfter=No
5	,	,	PUNCT	,	_	8	punct	_	_
6	Tuấn	Tuấn	NOUN	Np	_	8	nsubj	_	_
7	không	không	X	R	Polarity=Neg	8	advmod	_	_
8	biết	biết	VERB	V	_	0	root	_	_
9	cần	cần	VERB	V	_	8	xcomp	_	_
10	hỏi	hỏi	VERB	V	_	9	xcomp	_	_
11	gì	gì	PROPN	P	_	9	obj	_	_
12	cho	cho	ADP	E	_	13	case	_	_
13	đủ	đủ	ADJ	A	_	9	amod	_	SpaceAfter=No
14	.	.	PUNCT	.	_	8	punct	_	_

~~~


