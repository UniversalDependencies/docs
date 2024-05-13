---
layout: base
title:  'Statistics of csubj:pass in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-csubj.html">csubj</a></tt>.
There are also 2 other language-specific subtypes of `csubj`: <tt><a href="vi_vtb-dep-csubj-asubj.html">csubj:asubj</a></tt>, <tt><a href="vi_vtb-dep-csubj-vsubj.html">csubj:vsubj</a></tt>.

10 nodes (0%) are attached to their parents as `csubj:pass`.

9 instances of `csubj:pass` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.4.

The following 3 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (5; 50% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (4; 40% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 6 csubj:pass	color:blue
1	Đến	đến	ADP	Pre	_	2	case	_	_
2	15	15	NUM	Num	_	12	obl:tmod	_	_
3	giờ	giờ	NOUN	Nu	_	2	flat:number	_	_
4	cùng	cùng	ADJ	Adj	_	5	amod	_	_
5	ngày	ngày	NOUN	N	_	2	obl:adj	_	_
6	dòng	dòng	NOUN	N	_	12	csubj:pass	_	_
7	nước	nước	NOUN	N	_	6	nmod	_	_
8	qua	qua	VERB	V	_	6	acl	_	_
9	đường ống	đường ống	NOUN	N	_	8	obj	_	_
10	đã	đã	ADV	Adv	_	12	advmod	_	_
11	được	được	AUX	AUX	_	12	aux:pass	_	_
12	khóa	khóa	VERB	V	_	0	root	_	_
13	.	.	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 10 csubj:pass	color:blue
1	Hành vi	hành vi	NOUN	N	_	3	nsubj	_	_
2	đó	đó	PRON	Pro	_	1	det:pmod	_	_
3	làm	làm	VERB	V	_	0	root	_	_
4	thủ phạm	thủ phạm	NOUN	N	_	5	nsubj	_	_
5	lo sợ	lo sợ	VERB	V	_	3	ccomp	_	_
6	vân	vân	NOUN	N	_	10	nsubj	_	_
7	tay	tay	NOUN	N	_	6	compound	_	_
8	của	của	ADP	Pre	_	9	obl	_	_
9	mình	mình	PRON	Pro	_	6	nmod:poss	_	_
10	lưu	lưu	VERB	V	_	16	csubj:pass	_	_
11	lại	lại	ADV	Adv	_	10	compound:prt	_	_
12	trên	trên	ADP	Pre	_	13	case	_	_
13	máy fax	máy fax	NOUN	N	_	10	obl	_	_
14	chưa	chưa	ADV	Adv	_	16	advmod:neg	_	_
15	được	được	AUX	AUX	_	16	aux:pass	_	_
16	lau	lau	VERB	V	_	5	ccomp	_	_
17	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 4 csubj:pass	color:blue
1	Năm	năm	NUM	Num	_	2	nummod	_	_
2	thám tử	thám tử	NOUN	N	_	4	nsubj	_	_
3	là	là	AUX	V	_	4	cop	_	_
4	bình	bình	PROPN	NNP	_	14	csubj:pass	_	_
5	,	,	PUNCT	,	_	6	punct	_	_
6	Hậu	Hậu	PROPN	NNP	_	4	conj	_	_
7	,	,	PUNCT	,	_	8	punct	_	_
8	Tiến	Tiến	PROPN	NNP	_	4	conj	_	_
9	,	,	PUNCT	,	_	10	punct	_	_
10	Hải	Hải	PROPN	NNP	_	4	conj	_	_
11	,	,	PUNCT	,	_	12	punct	_	_
12	Hoa	Hoa	PROPN	NNP	_	4	conj	_	_
13	được	được	AUX	AUX	_	14	aux:pass	_	_
14	giao	giao	VERB	V	_	0	root	_	_
15	nhiệm vụ	nhiệm vụ	NOUN	N	_	14	obj	_	_
16	.	.	PUNCT	.	_	14	punct	_	_

~~~


