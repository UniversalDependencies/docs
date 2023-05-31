---
layout: base
title:  'Statistics of csubj:asubj in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `csubj:asubj`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-csubj.html">csubj</a></tt>.
There are also 2 other language-specific subtypes of `csubj`: <tt><a href="vi_vtb-dep-csubj-pass.html">csubj:pass</a></tt>, <tt><a href="vi_vtb-dep-csubj-vsubj.html">csubj:vsubj</a></tt>.

20 nodes (0%) are attached to their parents as `csubj:asubj`.

20 instances of `csubj:asubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.05.

The following 4 pairs of parts of speech are connected with `csubj:asubj`: <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (12; 60% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (6; 30% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="vi_vtb-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 csubj:asubj	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 csubj:asubj	color:blue
1	Gần	gần	ADJ	Adj	_	5	csubj:asubj	_	_
2	đó	đó	PRON	Pro	_	1	det:pmod	_	_
3	cũng	cũng	ADV	Adv	_	5	advmod	_	_
4	vừa	vừa	ADV	Adv	_	5	advmod	_	_
5	mọc	mọc	VERB	V	_	0	root	_	_
6	lên	lên	ADV	Adv	_	5	compound:dir	_	_
7	một	một	NUM	Num	_	8	nummod	_	_
8	nhà văn hóa	nhà văn hóa	NOUN	N	_	5	obj	_	_
9	trị giá	trị giá	VERB	V	_	8	acl:subj	_	_
10	khoảng	khoảng	ADJ	Adj	_	9	advmod:adj	_	_
11	5	5	NUM	Num	_	13	nummod	_	_
12	tỉ	tỉ	NUM	Num	_	11	flat:number	_	_
13	đồng	đồng	NOUN	Nu	_	9	obj	_	_
14	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 14 csubj:asubj	color:blue
1	Ông	ông	NOUN	Nc	_	2	clf:det	_	_
2	Phạm Xuân Ái	Phạm Xuân Ái	PROPN	NNP	_	19	parataxis	_	_
3	,	,	PUNCT	,	_	2	punct	_	_
4	trưởng	trưởng	SYM	Z	_	2	appos:nmod	_	_
5	ban	ban	NOUN	N	_	4	compound	_	_
6	kinh tế	kinh tế	NOUN	N	_	4	nmod	_	_
7	-	-	PUNCT	-	_	8	punct	_	_
8	ngân sách	ngân sách	NOUN	N	_	6	conj	_	_
9	hđnd	hđnd	NOUN	Ny	_	6	conj	_	_
10	TP	tp	NOUN	Ny	_	9	nmod	_	_
11	.	.	PUNCT	.	_	10	punct	_	_
12	HCM	HCM	PROPN	NNP	_	10	compound	_	_
13	:	:	PUNCT	:	_	2	punct	_	_
14	băn khoăn	băn khoăn	ADJ	Adj	_	19	csubj:asubj	_	_
15	của	của	ADP	Pre	_	17	case	_	_
16	người	người	NOUN	Nc	_	17	clf:det	_	_
17	dân	dân	NOUN	N	_	14	obl	_	_
18	là	là	AUX	V	_	19	cop	_	_
19	đúng	đúng	ADJ	Adj	_	0	root	_	_
20	!	!	PUNCT	!	_	19	punct	_	_

~~~


