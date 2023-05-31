---
layout: base
title:  'Statistics of csubj in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `csubj`

This relation is universal.
There are 3 language-specific subtypes of `csubj`: <tt><a href="vi_vtb-dep-csubj-asubj.html">csubj:asubj</a></tt>, <tt><a href="vi_vtb-dep-csubj-pass.html">csubj:pass</a></tt>, <tt><a href="vi_vtb-dep-csubj-vsubj.html">csubj:vsubj</a></tt>.

110 nodes (0%) are attached to their parents as `csubj`.

109 instances of `csubj` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.59090909090909.

The following 12 pairs of parts of speech are connected with `csubj`: <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (69; 63% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (13; 12% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (10; 9% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (5; 5% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (4; 4% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-X.html">X</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 csubj	color:blue
1	"	"	PUNCT	PUNCT	_	6	punct	_	_
2	bắt	bắt	VERB	V	_	6	csubj	_	_
3	kiểu	kiểu	NOUN	N	_	2	obj	_	_
4	này	này	PRON	PRO	_	3	det:pmod	_	_
5	ngày	ngày	NOUN	N	_	6	obl:tmod	_	_
6	được	được	VERB	V	_	0	root	_	_
7	bao nhiêu	bao nhiêu	DET	DET	_	8	det	_	_
8	con	con	NOUN	N	_	6	obj	_	_
9	?	?	PUNCT	PUNCT	_	6	punct	_	_
10	"	"	PUNCT	PUNCT	_	6	punct	_	_
11	-	-	PUNCT	PUNCT	_	13	punct	_	_
12	tôi	tôi	PRON	PRO	_	13	nsubj	_	_
13	hỏi	hỏi	VERB	V	_	6	parataxis	_	_
14	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 csubj	color:blue
1	Vé	vé	NOUN	N	_	2	nsubj	_	_
2	bán	bán	VERB	V	_	8	csubj	_	_
3	hết	hết	VERB	V	_	2	compound:svc	_	_
4	vèo	vèo	ADJ	ADJ	_	2	xcomp	_	_
5	chỉ	chỉ	ADV	ADV	_	8	advmod	_	_
6	trong	trong	ADP	PRE	_	8	case	_	_
7	ít	ít	ADJ	ADJ	_	8	advmod:adj	_	_
8	giờ	giờ	NOUN	N	_	0	root	_	_
9	.	.	PUNCT	PUNCT	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 csubj	color:blue
1	Người	người	NOUN	N	_	2	clf:det	_	_
2	chồng	chồng	NOUN	N	_	5	nsubj:nn	_	_
3	trẻ	trẻ	ADJ	ADJ	_	2	amod	_	_
4	là	là	AUX	AUX	_	5	cop	_	_
5	bộ đội	bộ đội	NOUN	N	_	7	csubj	_	_
6	đã	đã	ADV	ADV	_	7	advmod	_	_
7	nhiễm	nhiễm	VERB	V	_	0	root	_	_
8	HIV	hiv	NOUN	NY	_	7	obj	_	_
9	và	và	CCONJ	CC	_	10	cc	_	_
10	chết	chết	VERB	V	_	7	conj	_	_
11	cách	cách	VERB	V	_	10	advcl	_	_
12	đây	đây	PRON	PRO	_	11	obj	_	_
13	bảy	bảy	NUM	NUM	_	14	nummod	_	_
14	năm	năm	NOUN	N	_	11	obl:tmod	_	_
15	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


