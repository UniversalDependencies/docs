---
layout: base
title:  'Statistics of ccomp in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `ccomp`

This relation is universal.

558 nodes (1%) are attached to their parents as `ccomp`.

558 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.94444444444444.

The following 16 pairs of parts of speech are connected with `ccomp`: <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (395; 71% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (59; 11% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (52; 9% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (24; 4% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (6; 1% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (5; 1% instances), <tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-AUX.html">AUX</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-X.html">X</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-X.html">X</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 ccomp	color:blue
1	Các	các	DET	DET	_	2	det	_	_
2	anh	anh	NOUN	N	_	3	nsubj	_	_
3	biết	biết	VERB	V	_	0	root	_	_
4	không	không	ADV	ADV	_	3	advmod	_	_
5	,	,	PUNCT	PUNCT	_	9	punct	_	_
6	lúc	lúc	NOUN	N	_	9	obl:tmod	_	_
7	đó	đó	PRON	PRO	_	6	det:pmod	_	_
8	tôi	tôi	PRON	PRO	_	9	nsubj	_	_
9	thấy	thấy	VERB	V	_	3	ccomp	_	_
10	mình	mình	PRON	PRO	_	11	nsubj	_	_
11	có	có	VERB	V	_	9	ccomp	_	_
12	lỗi	lỗi	NOUN	N	_	11	obj	_	_
13	vô cùng	vô cùng	ADV	ADV	_	11	advmod	_	_
14	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 ccomp	color:blue
1	Vy	vy	PROPN	NNP	_	2	nsubj	_	_
2	cười	cười	VERB	V	_	0	root	_	_
3	thật	thật	ADV	ADV	_	4	advmod	_	_
4	tươi	tươi	ADJ	ADJ	_	2	advmod:adj	_	_
5	khi	khi	NOUN	N	_	2	obl:tmod	_	_
6	biết	biết	VERB	V	_	5	acl:tmod	_	_
7	chúng tôi	chúng tôi	PRON	PRO	_	9	nsubj:nn	_	_
8	là	là	AUX	AUX	_	9	cop	_	_
9	người	người	NOUN	N	_	6	ccomp	_	_
10	VN	vn	PROPN	NNPY	_	9	compound	_	_
11	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 ccomp	color:blue
1	Tùng	tùng	PROPN	NNP	_	2	nsubj	_	_
2	nói	nói	VERB	V	_	0	root	_	_
3	không	không	ADV	Adv	_	5	advmod:neg	_	_
4	nên	nên	VERB	V	_	3	compound:atov	_	_
5	vội vàng	vội vàng	ADJ	Adj	_	2	ccomp	_	_
6	mà	mà	SCONJ	SC	_	9	cc	_	_
7	mẹ	mẹ	NOUN	N	_	9	nsubj	_	_
8	phải	phải	AUX	AUX	_	9	aux	_	_
9	âm thầm	âm thầm	ADJ	Adj	_	5	conj	_	_
10	tìm hiểu	tìm hiểu	VERB	V	_	9	xcomp:adj	_	_
11	.	.	PUNCT	.	_	2	punct	_	_

~~~


