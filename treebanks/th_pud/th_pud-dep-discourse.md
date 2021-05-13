---
layout: base
title:  'Statistics of discourse in UD_Thai-PUD'
udver: '2'
---

## Treebank Statistics: UD_Thai-PUD: Relations: `discourse`

This relation is universal.

29 nodes (0%) are attached to their parents as `discourse`.

29 instances of `discourse` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.10344827586207.

The following 3 pairs of parts of speech are connected with `discourse`: <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-PART.html">PART</a></tt> (24; 83% instances), <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-PART.html">PART</a></tt> (4; 14% instances), <tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="th_pud-pos-PART.html">PART</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 discourse	color:blue
1	ฉัน	_	PRON	PRP	Person=1	3	nsubj	_	SpaceAfter=No
2	ไม่	_	PART	NEG	Polarity=Neg	3	advmod	_	SpaceAfter=No
3	เรียก	_	VERB	VV	_	0	root	_	SpaceAfter=No
4	มัน	_	PRON	PRP	Person=3	3	obj	_	SpaceAfter=No
5	ว่า	_	VERB	VV	_	3	xcomp	_	SpaceAfter=No
6	สัตว์	_	NOUN	NN	_	5	obj	_	SpaceAfter=No
7	ร้าย	_	ADJ	JJ	_	6	amod	_	SpaceAfter=No
8	หรอก	_	PART	EP	_	3	discourse	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 discourse	color:blue
1	พี่น้อง	_	NOUN	NN	_	6	vocative	_	SpaceAfter=No
2	ครับ	_	PART	EP	_	1	discourse	_	_
3	นี่	_	PRON	PRD	_	6	nsubj	_	SpaceAfter=No
4	ไม่	_	PART	NEG	Polarity=Neg	6	advmod	_	SpaceAfter=No
5	ใช่	_	AUX	VC	_	6	cop	_	SpaceAfter=No
6	สิ่ง	_	NOUN	NN	_	0	root	_	SpaceAfter=No
7	ที่	_	DET	WDT	_	9	obj	_	SpaceAfter=No
8	เรา	_	PRON	PRP	Person=1	9	nsubj	_	SpaceAfter=No
9	ต้องการ	_	VERB	VV	_	6	acl:relcl	_	SpaceAfter=No
10	ใน	_	ADP	IN	_	11	case	_	SpaceAfter=No
11	ประเทศ	_	NOUN	NN	_	9	obl	_	SpaceAfter=No
12	ของ	_	ADP	IN	_	13	case	_	SpaceAfter=No
13	เรา	_	PRON	PRP	Person=1	11	nmod:poss	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 24 discourse	color:blue
1	จาก	_	ADP	IN	_	2	case	_	SpaceAfter=No
2	โพสต์	_	NOUN	NN	_	7	obl	_	SpaceAfter=No
3	แสดง	_	VERB	VV	_	2	acl	_	SpaceAfter=No
4	ความเสียใจ	_	VERB	VV	_	3	obj	_	SpaceAfter=No
5	บน	_	ADP	IN	_	6	case	_	SpaceAfter=No
6	เฟซบุ๊ก	_	PROPN	NNP	_	2	nmod	_	_
7	มี	_	VERB	VV	_	0	root	_	SpaceAfter=No
8	อยู่	_	AUX	AS	Aspect=Perf	7	aux	_	SpaceAfter=No
9	บรรทัด	_	NOUN	NN	_	7	obj	_	SpaceAfter=No
10	หนึ่ง	_	NUM	CD	_	9	nummod	_	SpaceAfter=No
11	ที่	_	DET	WDT	_	13	nsubj	_	SpaceAfter=No
12	ต้อง	_	AUX	MD	_	13	aux	_	SpaceAfter=No
13	ทำให้	_	VERB	VV	_	9	acl:relcl	_	SpaceAfter=No
14	คริส	_	PROPN	NNP	_	13	obj	_	SpaceAfter=No
15	ดีใจ	_	VERB	VV	_	13	xcomp	_	SpaceAfter=No
16	แน่	_	ADV	RB	_	15	advmod	_	SpaceAfter=No
17	:	_	PUNCT	:	_	20	punct	_	_
18	“	_	PUNCT	``	_	20	punct	_	SpaceAfter=No
19	เป็น	_	AUX	VC	_	20	cop	_	SpaceAfter=No
20	แอฟริกัน	_	PROPN	NNP	_	9	acl	_	SpaceAfter=No
21	มาก	_	ADV	RB	_	20	advmod	_	SpaceAfter=No
22	กว่า	_	ADP	IN	_	23	case	_	SpaceAfter=No
23	คุณ	_	PRON	PRP	Person=2	21	obl	_	SpaceAfter=No
24	เหรอ	_	PART	EP	PronType=Int	20	discourse	_	_
25	ฉัน	_	PRON	PRP	Person=1	27	nsubj	_	SpaceAfter=No
26	ไม่	_	PART	NEG	Polarity=Neg	27	advmod	_	SpaceAfter=No
27	รู้	_	VERB	VV	_	20	acl	_	SpaceAfter=No
28	มา	_	AUX	AS	Aspect=Perf	27	aux	_	SpaceAfter=No
29	ก่อน	_	ADV	RB	_	27	advmod	_	SpaceAfter=No
30	เลย	_	ADV	RB	_	27	advmod	_	SpaceAfter=No
31	”	_	PUNCT	''	_	20	punct	_	_

~~~


