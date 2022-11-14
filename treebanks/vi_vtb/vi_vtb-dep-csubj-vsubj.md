---
layout: base
title:  'Statistics of csubj:vsubj in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `csubj:vsubj`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-csubj.html">csubj</a></tt>.
There are also 2 other language-specific subtypes of `csubj`: <tt><a href="vi_vtb-dep-csubj-asubj.html">csubj:asubj</a></tt>, <tt><a href="vi_vtb-dep-csubj-pass.html">csubj:pass</a></tt>.

67 nodes (0%) are attached to their parents as `csubj:vsubj`.

66 instances of `csubj:vsubj` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.49253731343284.

The following 5 pairs of parts of speech are connected with `csubj:vsubj`: <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (45; 67% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (11; 16% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (9; 13% instances), <tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 csubj:vsubj	color:blue
1	Lừa	lừa	VERB	V	_	4	csubj:vsubj	_	_
2	thông thường	thông thường	ADJ	Adj	_	1	advmod:adj	_	_
3	là	là	AUX	V	_	4	cop	_	_
4	tráo	tráo	VERB	V	_	0	root	_	_
5	bằng	bằng	ADP	Pre	_	6	case	_	_
6	xương	xương	NOUN	N	_	4	obl:comp	_	_
7	gấu	gấu	NOUN	N	_	6	nmod	_	_
8	,	,	PUNCT	,	_	9	punct	_	_
9	xương	xương	NOUN	N	_	6	conj	_	_
10	báo	báo	NOUN	N	_	9	nmod	_	_
11	,	,	PUNCT	,	_	12	punct	_	_
12	xương	xương	NOUN	N	_	6	conj	_	_
13	ngựa	ngựa	NOUN	N	_	12	nmod	_	_
14	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 csubj:vsubj	color:blue
1	Nhìn	nhìn	VERB	V	_	6	csubj:vsubj	_	_
2	Hải	Hải	PROPN	NNP	_	1	obj	_	_
3	lúc	lúc	NOUN	N	_	1	obl:tmod	_	_
4	đó	đó	PRON	Pro	_	3	det:pmod	_	_
5	rất	rất	ADV	Adv	_	6	advmod	_	_
6	bối rối	bối rối	ADJ	Adj	_	0	root	_	_
7	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj:vsubj	color:blue
1	Cuối cùng	cuối cùng	NOUN	N	_	0	root	_	_
2	là	là	AUX	AUX	_	1	cop	_	_
3	viết	viết	VERB	V	_	1	csubj:vsubj	_	_
4	giấy	giấy	NOUN	N	_	3	obj	_	_
5	cam kết	cam kết	VERB	V	_	4	compound:vmod	_	_
6	và	và	CCONJ	CC	_	7	cc	_	_
7	xin lỗi	xin lỗi	VERB	V	_	3	conj	_	_
8	.	.	PUNCT	.	_	1	punct	_	_

~~~


