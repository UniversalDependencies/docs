---
layout: base
title:  'Statistics of appos:nmod in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `appos:nmod`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-appos.html">appos</a></tt>.

86 nodes (0%) are attached to their parents as `appos:nmod`.

86 instances of `appos:nmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.96511627906977.

The following 14 pairs of parts of speech are connected with `appos:nmod`: <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (31; 36% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (16; 19% instances), <tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (9; 10% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (7; 8% instances), <tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (7; 8% instances), <tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_vtb-pos-SYM.html">SYM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 appos:nmod	color:blue
1	Chủ	chủ	NOUN	N	_	9	nsubj	_	_
2	nhà	nhà	NOUN	N	_	1	compound	_	_
3	,	,	PUNCT	,	_	4	punct	_	_
4	viện	viện	NOUN	N	_	1	appos:nmod	_	_
5	phó	phó	ADJ	Adj	_	4	amod	_	_
6	một	một	NUM	Num	_	7	nummod	_	_
7	bệnh viện	bệnh viện	NOUN	N	_	4	nmod:poss	_	_
8	,	,	PUNCT	,	_	9	punct	_	_
9	gật	gật	VERB	V	_	0	root	_	_
10	và	và	CCONJ	CC	_	11	cc	_	_
11	đếm	đếm	VERB	V	_	9	conj	_	_
12	tiền	tiền	NOUN	N	_	11	obj	_	_
13	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 appos:nmod	color:blue
1	Cuốn	cuốn	NOUN	Nc	_	2	clf:det	_	_
2	nhật ký	nhật ký	NOUN	N	_	0	root	_	_
3	của	của	ADP	Pre	_	6	case	_	_
4	một	một	NUM	Num	_	6	nummod	_	_
5	người	người	NOUN	Nc	_	4	clf	_	_
6	lính	lính	NOUN	N	_	2	nmod:poss	_	_
7	trẻ	trẻ	ADJ	Adj	_	6	amod	_	_
8	,	,	PUNCT	,	_	11	punct	_	_
9	anh	anh	NOUN	N	_	11	nsubj	_	_
10	là	là	AUX	V	_	11	cop	_	_
11	Nguyễn Kỳ Sơn	Nguyễn Kỳ Sơn	PROPN	NNP	_	6	appos:nmod	_	_
12	.	.	PUNCT	.	_	2	punct	_	_

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


