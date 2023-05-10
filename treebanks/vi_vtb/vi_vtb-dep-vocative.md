---
layout: base
title:  'Statistics of vocative in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `vocative`

This relation is universal.

14 nodes (0%) are attached to their parents as `vocative`.

9 instances of `vocative` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.92857142857143.

The following 7 pairs of parts of speech are connected with `vocative`: <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (4; 29% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (3; 21% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (2; 14% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (2; 14% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-SCONJ.html">SCONJ</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 14 vocative	color:blue
1	Tôi	tôi	PRON	PRO	_	2	nsubj	_	_
2	bước	bước	VERB	V	_	0	root	_	_
3	tới	tới	VERB	V	_	2	compound:dir	_	_
4	gần	gần	ADJ	ADJ	_	2	xcomp	_	_
5	làm quen	làm quen	VERB	V	_	2	xcomp	_	_
6	:	:	PUNCT	PUNCT	_	11	punct	_	_
7	"	"	PUNCT	PUNCT	_	11	punct	_	_
8	Mấy	mấy	NUM	NUM	_	9	nummod:det	_	_
9	hôm	hôm	NOUN	N	_	11	obl:tmod	_	_
10	rày	rày	PRON	PRO	_	9	det:pmod	_	_
11	làm	làm	VERB	V	_	2	parataxis	_	_
12	được	được	ADV	ADV	_	11	advmod	_	_
13	không	không	ADV	ADV	_	11	advmod	_	_
14	em	em	NOUN	N	_	11	vocative	_	_
15	?	?	PUNCT	PUNCT	_	11	punct	_	_
16	"	"	PUNCT	PUNCT	_	11	punct	_	_
17	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 vocative	color:blue
1	Ông	ông	NOUN	Nc	_	2	clf:det	_	_
2	Phong	Phong	PROPN	NNP	_	3	nsubj	_	_
3	nói	nói	VERB	V	_	0	root	_	_
4	:	:	PUNCT	:	_	6	punct	_	_
5	"	"	PUNCT	``	_	6	punct	_	_
6	Hạnh	Hạnh	PROPN	NNP	_	3	vocative	_	_
7	!	!	PUNCT	!	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 1 vocative	color:blue
1	Thưa	thưa	VERB	V	_	11	vocative	_	_
2	ông	ông	NOUN	N	_	1	obj	_	_
3	,	,	PUNCT	,	_	1	punct	_	_
4	một	một	NUM	Num	_	5	nummod	_	_
5	vấn đề	vấn đề	NOUN	N	_	9	nsubj	_	_
6	được	được	AUX	AUX	_	9	aux:pass	_	_
7	nhiều	nhiều	ADJ	Adj	_	8	amod	_	_
8	nvơnn	nvơnn	NOUN	Ny	_	9	obl:agent	_	_
9	băn khoăn	băn khoăn	ADJ	Adj	_	11	csubj	_	_
10	là	là	AUX	V	_	11	cop	_	_
11	tư cách pháp nhân	tư cách pháp nhân	NOUN	N	_	0	root	_	_
12	của	của	ADP	Pre	_	13	case	_	_
13	bà con	bà con	NOUN	N	_	11	nmod:poss	_	_
14	tại	tại	ADP	Pre	_	15	case	_	_
15	nước	nước	NOUN	N	_	13	advcl	_	_
16	sở tại	sở tại	ADJ	Adj	_	15	amod	_	_
17	để	để	ADP	Pre	_	20	mark:pcomp	_	_
18	bà con	bà con	NOUN	N	_	20	nsubj	_	_
19	có thể	có thể	AUX	AUX	_	20	aux	_	_
20	cư trú	cư trú	VERB	V	_	11	advcl:objective	_	_
21	và	và	CCONJ	CC	_	22	cc	_	_
22	làm ăn	làm ăn	VERB	V	_	20	conj	_	_
23	một cách	một cách	NOUN	N	_	22	obj	_	_
24	chính đáng	chính đáng	ADJ	Adj	_	23	amod	_	_
25	.	.	PUNCT	.	_	11	punct	_	_

~~~


