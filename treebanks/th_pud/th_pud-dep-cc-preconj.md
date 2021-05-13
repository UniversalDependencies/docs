---
layout: base
title:  'Statistics of cc:preconj in UD_Thai-PUD'
udver: '2'
---

## Treebank Statistics: UD_Thai-PUD: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="th_pud-dep-cc.html">cc</a></tt>.

20 nodes (0%) are attached to their parents as `cc:preconj`.

20 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 7 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-DET.html">DET</a></tt> (9; 45% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-ADP.html">ADP</a></tt> (3; 15% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-DET.html">DET</a></tt> (3; 15% instances), <tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="th_pud-pos-DET.html">DET</a></tt> (2; 10% instances), <tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="th_pud-pos-DET.html">DET</a></tt> (1; 5% instances), <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-ADP.html">ADP</a></tt> (1; 5% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-PART.html">PART</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc:preconj	color:blue
1	ทั้ง	_	DET	DT	_	2	cc:preconj	_	SpaceAfter=No
2	เวลา	_	NOUN	NN	_	9	nsubj	_	SpaceAfter=No
3	และ	_	CCONJ	CC	_	4	cc	_	SpaceAfter=No
4	ลำดับ	_	NOUN	NN	_	2	conj	_	SpaceAfter=No
5	เหตุการณ์	_	NOUN	NN	_	4	compound	_	SpaceAfter=No
6	ของ	_	ADP	IN	_	7	case	_	SpaceAfter=No
7	สถานการณ์	_	NOUN	NN	_	2	nmod:poss	_	SpaceAfter=No
8	นี้	_	DET	DT	_	7	det	_	SpaceAfter=No
9	มี	_	VERB	VV	_	0	root	_	SpaceAfter=No
10	การถกเถียง	_	VERB	VV	_	9	obj	_	SpaceAfter=No
11	กัน	_	PRON	PRP	_	10	obl	_	SpaceAfter=No
12	อย่างเอาจริงเอาจัง	_	ADJ	JJ	_	10	advmod	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 cc:preconj	color:blue
1	แม้	_	ADP	IN	_	6	cc:preconj	_	SpaceAfter=No
2	ว่า	_	ADP	IN	_	1	fixed	_	SpaceAfter=No
3	มัน	_	PRON	PRP	Person=3	6	nsubj	_	SpaceAfter=No
4	จะ	_	AUX	MD	_	6	aux	_	SpaceAfter=No
5	ดู	_	AUX	VV	_	6	cop	_	SpaceAfter=No
6	น่าประหลาดใจ	_	VERB	VV	_	0	root	_	_
7	แต่	_	CCONJ	CC	_	18	cc	_	SpaceAfter=No
8	จริง	_	ADV	RB	_	18	advmod	_	SpaceAfter=No
9	ๆ	_	SYM	SYM	_	8	dep	_	_
10	แล้ว	_	ADV	RB	_	8	advmod	_	SpaceAfter=No
11	แม้	_	ADP	IN	_	13	case	_	SpaceAfter=No
12	แต่	_	CCONJ	CC	_	11	fixed	_	SpaceAfter=No
13	เมฆ	_	NOUN	NN	_	18	obl	_	SpaceAfter=No
14	ฝน	_	NOUN	NN	_	13	compound	_	SpaceAfter=No
15	กรด	_	NOUN	NN	_	13	compound	_	SpaceAfter=No
16	ก็	_	ADV	RB	_	18	advmod	_	SpaceAfter=No
17	ยัง	_	AUX	AS	Aspect=Prog	18	aux	_	SpaceAfter=No
18	มี	_	VERB	VV	_	6	conj	_	SpaceAfter=No
19	สิ่ง	_	NOUN	NN	_	18	obj	_	SpaceAfter=No
20	ดี	_	ADJ	JJ	_	19	amod	_	SpaceAfter=No
21	ๆ	_	SYM	SYM	_	20	dep	_	_
22	ซ่อน	_	VERB	VV	_	18	xcomp	_	SpaceAfter=No
23	อยู่	_	AUX	AS	Aspect=Prog	22	aux	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc:preconj	color:blue
1	กล่าว	_	VERB	VV	_	0	root	_	SpaceAfter=No
2	ได้	_	AUX	MD	_	1	aux	_	SpaceAfter=No
3	เลย	_	ADV	RB	_	1	advmod	_	SpaceAfter=No
4	ว่า	_	ADP	IN	_	8	mark	_	SpaceAfter=No
5	ร็อคโค่	_	PROPN	NNP	_	8	nsubj	_	_
6	คาตาลาโน่	_	PROPN	NNP	_	5	flat:name	_	_
7	ทั้ง	_	DET	DT	_	8	cc:preconj	_	SpaceAfter=No
8	ทำ	_	VERB	VV	_	1	ccomp	_	SpaceAfter=No
9	งาน	_	NOUN	NN	_	8	obj	_	_
10	ใช้	_	VERB	VV	_	8	conj	_	SpaceAfter=No
11	ชีวิต	_	NOUN	NN	_	10	obj	_	_
12	และ	_	CCONJ	CC	_	13	cc	_	SpaceAfter=No
13	หายใจ	_	VERB	VV	_	8	conj	_	SpaceAfter=No
14	เข้า	_	PART	RP	_	13	compound:prt	_	SpaceAfter=No
15	หายใจ	_	VERB	VV	_	13	conj	_	SpaceAfter=No
16	ออก	_	PART	RP	_	15	compound:prt	_	SpaceAfter=No
17	เป็น	_	AUX	VC	_	18	cop	_	SpaceAfter=No
18	เรโทร	_	NOUN	NN	_	8	xcomp	_	_

~~~


