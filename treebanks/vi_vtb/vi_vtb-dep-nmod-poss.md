---
layout: base
title:  'Statistics of nmod:poss in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-nmod.html">nmod</a></tt>.

587 nodes (1%) are attached to their parents as `nmod:poss`.

586 instances of `nmod:poss` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.00681431005111.

The following 12 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (385; 66% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (111; 19% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (60; 10% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (10; 2% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (7; 1% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-SYM.html">SYM</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-X.html">X</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nmod:poss	color:blue
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 nmod:poss	color:blue
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


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod:poss	color:blue
1	Lớp học	lớp học	NOUN	N	_	5	nsubj	_	_
2	của	của	ADP	PRE	_	3	case	_	_
3	họ	họ	PRON	PRO	_	1	nmod:poss	_	_
4	ngày càng	ngày càng	ADV	ADV	_	5	advmod	_	_
5	thu hút	thu hút	VERB	V	_	0	root	_	_
6	nhiều	nhiều	ADJ	ADJ	_	7	advmod:adj	_	_
7	học viên	học viên	NOUN	N	_	5	obj	_	_
8	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


