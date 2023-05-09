---
layout: base
title:  'Statistics of obl:about in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `obl:about`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-obl.html">obl</a></tt>.
There are also 7 other language-specific subtypes of `obl`: <tt><a href="vi_vtb-dep-obl-adj.html">obl:adj</a></tt>, <tt><a href="vi_vtb-dep-obl-adv.html">obl:adv</a></tt>, <tt><a href="vi_vtb-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="vi_vtb-dep-obl-comp.html">obl:comp</a></tt>, <tt><a href="vi_vtb-dep-obl-iobj.html">obl:iobj</a></tt>, <tt><a href="vi_vtb-dep-obl-tmod.html">obl:tmod</a></tt>, <tt><a href="vi_vtb-dep-obl-with.html">obl:with</a></tt>.

75 nodes (0%) are attached to their parents as `obl:about`.

75 instances of `obl:about` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.85333333333333.

The following 8 pairs of parts of speech are connected with `obl:about`: <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (44; 59% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (14; 19% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (8; 11% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (4; 5% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl:about	color:blue
1	Rào cản	rào cản	NOUN	N	_	7	nsubj:pass	_	_
2	về	về	ADP	Pre	_	3	case	_	_
3	thủ tục	thủ tục	NOUN	N	_	1	obl:about	_	_
4	hành chính	hành chính	NOUN	N	_	3	nmod	_	_
5	cũng	cũng	ADV	Adv	_	7	advmod	_	_
6	được	được	AUX	AUX	_	7	aux:pass	_	_
7	đề cập	đề cập	VERB	V	_	0	root	_	_
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 obl:about	color:blue
1	Lực lượng	lực lượng	NOUN	N	_	4	nsubj	_	_
2	QLTT	qltt	NOUN	N	_	1	nmod	_	_
3	cũng	cũng	ADV	Adv	_	4	advmod	_	_
4	tỏ	tỏ	VERB	V	_	0	root	_	_
5	ra	ra	ADV	Adv	_	4	compound:prt	_	_
6	bỡ ngỡ	bỡ ngỡ	ADJ	Adj	_	4	xcomp	_	_
7	với	với	ADP	Pre	_	9	case	_	_
8	những	những	DET	Det	_	9	det	_	_
9	mặt hàng	mặt hàng	NOUN	N	_	6	obl:about	_	_
10	mới	mới	ADJ	Adj	_	9	amod	_	_
11	như	như	SCONJ	SC	_	12	case	_	_
12	cá chim	cá chim	NOUN	N	_	9	obl	_	_
13	trắng	trắng	ADJ	Adj	_	12	amod	_	_
14	,	,	PUNCT	,	_	15	punct	_	_
15	ba ba	ba ba	NOUN	N	_	12	conj	_	_
16	...	...	PUNCT	...	_	4	punct	_	_

~~~


