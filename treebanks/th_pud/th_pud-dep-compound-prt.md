---
layout: base
title:  'Statistics of compound:prt in UD_Thai-PUD'
udver: '2'
---

## Treebank Statistics: UD_Thai-PUD: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="th_pud-dep-compound.html">compound</a></tt>.

364 nodes (2%) are attached to their parents as `compound:prt`.

364 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.7967032967033.

The following 2 pairs of parts of speech are connected with `compound:prt`: <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-PART.html">PART</a></tt> (361; 99% instances), <tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="th_pud-pos-PART.html">PART</a></tt> (3; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 compound:prt	color:blue
1	ข้อ	_	NOUN	NN	_	7	nsubj	_	SpaceAfter=No
2	กำหนด	_	VERB	VV	_	1	acl	_	SpaceAfter=No
3	เรื่อง	_	NOUN	NN	_	1	compound	_	SpaceAfter=No
4	การแต่ง	_	VERB	VV	_	3	compound	_	SpaceAfter=No
5	กาย	_	NOUN	NN	_	4	obj	_	SpaceAfter=No
6	อาจ	_	AUX	MD	_	7	aux	_	SpaceAfter=No
7	ล้า	_	VERB	VV	_	0	root	_	SpaceAfter=No
8	สมัย	_	NOUN	NN	_	7	obl	_	SpaceAfter=No
9	ไป	_	PART	RP	_	7	compound:prt	_	SpaceAfter=No
10	หน่อย	_	ADV	RB	_	7	advmod	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 19 compound:prt	color:blue
1	มัน	_	PRON	PRP	Person=3	2	nsubj	_	SpaceAfter=No
2	แวะ	_	VERB	VV	_	0	root	_	SpaceAfter=No
3	มา	_	PART	RP	_	2	compound:prt	_	SpaceAfter=No
4	ที่	_	ADP	IN	_	5	case	_	SpaceAfter=No
5	โรง	_	NOUN	NN	_	2	obl	_	SpaceAfter=No
6	นา	_	NOUN	NN	_	5	compound	_	SpaceAfter=No
7	ของ	_	ADP	IN	_	8	case	_	SpaceAfter=No
8	ผม	_	PRON	PRP	Person=1	5	nmod:poss	_	SpaceAfter=No
9	อยู่	_	AUX	AS	Aspect=Prog	2	aux	_	SpaceAfter=No
10	เรื่อย	_	ADV	RB	_	2	advmod	_	SpaceAfter=No
11	ๆ	_	SYM	SYM	_	10	dep	_	_
12	และ	_	CCONJ	CC	_	16	cc	_	SpaceAfter=No
13	ผม	_	PRON	PRP	Person=1	16	nsubj	_	SpaceAfter=No
14	ก็	_	ADV	RB	_	16	advmod	_	SpaceAfter=No
15	พูด	_	AUX	VV	_	16	cop	_	SpaceAfter=No
16	ตลก	_	ADJ	JJ	_	2	conj	_	SpaceAfter=No
17	กับ	_	ADP	IN	_	18	case	_	SpaceAfter=No
18	เขา	_	PRON	PRP	Person=3	16	obl	_	SpaceAfter=No
19	ไป	_	PART	RP	_	16	compound:prt	_	SpaceAfter=No
20	ว่า	_	ADP	IN	_	26	mark	_	_
21	ชัด	_	ADV	RB	_	26	advmod	_	SpaceAfter=No
22	เลย	_	ADV	RB	_	21	advmod	_	SpaceAfter=No
23	ว่า	_	ADP	IN	_	26	mark	_	SpaceAfter=No
24	มัน	_	PRON	PRP	Person=3	26	nsubj	_	SpaceAfter=No
25	ไม่	_	PART	NEG	Polarity=Neg	26	advmod	_	SpaceAfter=No
26	อยาก	_	VERB	VV	_	16	ccomp	_	SpaceAfter=No
27	ถูก	_	AUX	MD	Voice=Pass	28	aux:pass	_	SpaceAfter=No
28	ขาย	_	VERB	VV	_	26	xcomp	_	_

~~~


