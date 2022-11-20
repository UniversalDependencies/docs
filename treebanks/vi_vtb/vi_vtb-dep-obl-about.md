---
layout: base
title:  'Statistics of obl:about in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `obl:about`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-obl.html">obl</a></tt>.
There are also 7 other language-specific subtypes of `obl`: <tt><a href="vi_vtb-dep-obl-adj.html">obl:adj</a></tt>, <tt><a href="vi_vtb-dep-obl-adv.html">obl:adv</a></tt>, <tt><a href="vi_vtb-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="vi_vtb-dep-obl-comp.html">obl:comp</a></tt>, <tt><a href="vi_vtb-dep-obl-iobj.html">obl:iobj</a></tt>, <tt><a href="vi_vtb-dep-obl-tmod.html">obl:tmod</a></tt>, <tt><a href="vi_vtb-dep-obl-with.html">obl:with</a></tt>.

62 nodes (0%) are attached to their parents as `obl:about`.

62 instances of `obl:about` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.08064516129032.

The following 8 pairs of parts of speech are connected with `obl:about`: <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (33; 53% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (20; 32% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (3; 5% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-X.html">X</a></tt> (1; 2% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:about	color:blue
1	Rồi	rồi	SCONJ	SC	_	3	cc	_	_
2	ông	ông	NOUN	N	_	3	nsubj	_	_
3	bắt đầu	bắt đầu	VERB	V	_	0	root	_	_
4	kể	kể	VERB	V	_	3	xcomp	_	_
5	về	về	ADP	Pre	_	6	case	_	_
6	nỗi	nỗi	NOUN	N	_	4	obl:about	_	_
7	đau	đau	VERB	V	_	6	compound:vmod	_	_
8	của	của	ADP	Pre	_	9	case	_	_
9	mình	mình	PRON	Pro	_	6	nmod:poss	_	_
10	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 obl:about	color:blue
1	Ở	ở	ADP	Pre	_	2	case	_	_
2	nhà	nhà	NOUN	N	_	6	obl:comp	_	_
3	,	,	PUNCT	,	_	2	punct	_	_
4	chị	chị	NOUN	Nc	_	5	clf:det	_	_
5	Hằng	Hằng	PROPN	NNP	_	6	nsubj	_	_
6	bày tỏ	bày tỏ	VERB	V	_	0	root	_	_
7	sự	sự	NOUN	N	_	6	obj	_	_
8	lo lắng	lo lắng	VERB	V	_	7	compound:vmod	_	_
9	về	về	ADP	Pre	_	11	case	_	_
10	lá	lá	NOUN	Nc	_	11	clf:det	_	_
11	thư	thư	NOUN	N	_	7	obl:about	_	_
12	của	của	ADP	Pre	_	13	case	_	_
13	Tùng	Tùng	PROPN	NNP	_	11	nmod:poss	_	_
14	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obl:about	color:blue
1	Thanh	Thanh	PROPN	NNP	_	2	nsubj	_	_
2	thao thao	thao thao	ADJ	Adj	_	0	root	_	_
3	về	về	ADP	Pre	_	4	case	_	_
4	quá khứ	quá khứ	NOUN	N	_	2	obl:about	_	_
5	,	,	PUNCT	,	_	6	punct	_	_
6	tình hình	tình hình	NOUN	N	_	4	conj	_	_
7	buôn bán	buôn bán	VERB	V	_	6	acl	_	_
8	và	và	CCONJ	CC	_	9	cc	_	_
9	hẹn	hẹn	VERB	V	_	2	conj	_	_
10	gặp	gặp	VERB	V	_	9	xcomp	_	_
11	Hùng	Hùng	PROPN	NNP	_	10	obj	_	_
12	.	.	PUNCT	.	_	2	punct	_	_

~~~


