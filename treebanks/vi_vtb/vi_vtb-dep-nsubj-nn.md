---
layout: base
title:  'Statistics of nsubj:nn in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `nsubj:nn`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-nsubj.html">nsubj</a></tt>.
There are also 2 other language-specific subtypes of `nsubj`: <tt><a href="vi_vtb-dep-nsubj-pass.html">nsubj:pass</a></tt>, <tt><a href="vi_vtb-dep-nsubj-xsubj.html">nsubj:xsubj</a></tt>.

122 nodes (0%) are attached to their parents as `nsubj:nn`.

122 instances of `nsubj:nn` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.99180327868852.

The following 10 pairs of parts of speech are connected with `nsubj:nn`: <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (68; 56% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (20; 16% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (15; 12% instances), <tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (11; 9% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-NUM.html">NUM</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:nn	color:blue
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


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:nn	color:blue
1	Đó	đó	PRON	PRO	_	3	nsubj:nn	_	_
2	là	là	AUX	AUX	_	3	cop	_	_
3	ước mơ	ước mơ	NOUN	N	_	0	root	_	_
4	và	và	CCONJ	CC	_	5	cc	_	_
5	quyết tâm	quyết tâm	NOUN	N	_	3	conj	_	_
6	của	của	ADP	PRE	_	7	case	_	_
7	nàng	nàng	NOUN	N	_	5	nmod:poss	_	_
8	dâu	dâu	NOUN	N	_	7	compound	_	_
9	tuổi	tuổi	NOUN	N	_	7	nmod	_	_
10	30	30	NUM	NUM	_	9	nmod	_	_
11	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nsubj:nn	color:blue
1	Mẹ	mẹ	NOUN	N	_	2	nsubj	_	_
2	mất	mất	VERB	V	_	0	root	_	_
3	khi	khi	NOUN	N	_	2	obl:tmod	_	_
4	vy	vy	PROPN	NNP	_	6	nsubj:nn	_	_
5	6	6	NUM	NUM	_	6	nummod	_	_
6	tuổi	tuổi	NOUN	N	_	3	acl:subj	_	_
7	,	,	PUNCT	PUNCT	_	13	punct	_	_
8	còn	còn	SCONJ	C	_	13	cc	_	_
9	em út	em út	NOUN	N	_	13	nsubj	_	_
10	của	của	ADP	PRE	_	11	case	_	_
11	Vy	Vy	PROPN	NNP	_	9	nmod:poss	_	_
12	mới	mới	ADV	ADV	_	13	advmod	_	_
13	được	được	VERB	V	_	6	conj	_	_
14	15	15	NUM	NUM	_	15	nummod	_	_
15	ngày	ngày	NOUN	N	_	13	obl:comp	_	_
16	tuổi	tuổi	NOUN	N	_	15	compound	_	_
17	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


