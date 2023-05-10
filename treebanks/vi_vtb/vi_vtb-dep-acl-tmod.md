---
layout: base
title:  'Statistics of acl:tmod in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `acl:tmod`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-acl.html">acl</a></tt>.
There are also 3 other language-specific subtypes of `acl`: <tt><a href="vi_vtb-dep-acl-relcl.html">acl:relcl</a></tt>, <tt><a href="vi_vtb-dep-acl-subj.html">acl:subj</a></tt>, <tt><a href="vi_vtb-dep-acl-tonp.html">acl:tonp</a></tt>.

236 nodes (0%) are attached to their parents as `acl:tmod`.

236 instances of `acl:tmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.27542372881356.

The following 9 pairs of parts of speech are connected with `acl:tmod`: <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (211; 89% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (9; 4% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (9; 4% instances), <tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 acl:tmod	color:blue
1	Nhưng	nhưng	SCONJ	C	_	5	mark	_	_
2	khủng khiếp	khủng khiếp	ADJ	ADJ	_	5	csubj:asubj	_	_
3	nhất	nhất	ADV	ADV	_	2	advmod	_	_
4	là	là	AUX	AUX	_	5	cop	_	_
5	lúc	lúc	NOUN	N	_	0	root	_	_
6	bị	bị	AUX	AUX	_	9	aux:pass	_	_
7	sóng	sóng	NOUN	N	_	9	obl:agent	_	_
8	nhồi	nhồi	VERB	V	_	7	compound:vmod	_	_
9	đập	đập	VERB	V	_	5	acl:tmod	_	_
10	vào	vào	ADP	PRE	_	11	case	_	_
11	thành	thành	NOUN	N	_	9	obl:comp	_	_
12	tàu	tàu	NOUN	N	_	11	compound	_	_
13	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl:tmod	color:blue
1	Nhưng	nhưng	SCONJ	C	_	4	mark	_	_
2	chỉ	chỉ	ADV	ADV	_	3	advmod	_	_
3	đến	đến	ADP	PRE	_	4	case	_	_
4	lúc	lúc	NOUN	N	_	15	obl:tmod	_	_
5	cháu	cháu	NOUN	N	_	7	nsubj	_	_
6	gái	gái	NOUN	N	_	5	nmod	_	_
7	đủ	đủ	ADJ	ADJ	_	4	acl:tmod	_	_
8	tuổi	tuổi	NOUN	N	_	7	obl:adj	_	_
9	đi	đi	VERB	V	_	8	acl:subj	_	_
10	học	học	VERB	V	_	9	compound:svc	_	_
11	,	,	PUNCT	PUNCT	_	15	punct	_	_
12	bà	bà	NOUN	N	_	13	clf:det	_	_
13	Năm	Năm	PROPN	NNP	_	15	nsubj	_	_
14	mới	mới	ADV	ADV	_	15	advmod	_	_
15	thấm thía	thấm thía	VERB	V	_	0	root	_	_
16	.	.	PUNCT	PUNCT	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 acl:tmod	color:blue
1	Sáng	sáng	NOUN	N	_	6	obl:tmod	_	_
2	hôm	hôm	NOUN	N	_	1	acl:tmod	_	_
3	sau	sau	ADJ	Adj	_	2	amod	_	_
4	,	,	PUNCT	,	_	1	punct	_	_
5	Cường	Cường	PROPN	NNP	_	6	nsubj	_	_
6	gặp	gặp	VERB	V	_	0	root	_	_
7	riêng	riêng	ADJ	Adj	_	6	xcomp	_	_
8	Thọ	Thọ	PROPN	NNP	_	6	obj	_	_
9	.	.	PUNCT	.	_	6	punct	_	_

~~~


