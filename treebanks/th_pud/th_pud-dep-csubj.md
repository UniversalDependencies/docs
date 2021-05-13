---
layout: base
title:  'Statistics of csubj in UD_Thai-PUD'
udver: '2'
---

## Treebank Statistics: UD_Thai-PUD: Relations: `csubj`

This relation is universal.

49 nodes (0%) are attached to their parents as `csubj`.

49 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.51020408163265.

The following 4 pairs of parts of speech are connected with `csubj`: <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-VERB.html">VERB</a></tt> (39; 80% instances), <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-VERB.html">VERB</a></tt> (8; 16% instances), <tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="th_pud-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-ADP.html">ADP</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 csubj	color:blue
1	ใน	_	ADP	IN	_	2	case	_	SpaceAfter=No
2	บริบท	_	NOUN	NN	_	6	obl	_	SpaceAfter=No
3	นี้	_	DET	DT	_	2	det	_	_
4	การต่อต้าน	_	VERB	VV	_	6	csubj	_	SpaceAfter=No
5	การค้า	_	VERB	VV	_	4	obj	_	SpaceAfter=No
6	ดู	_	VERB	VV	_	0	root	_	SpaceAfter=No
7	สมเหตุสมผล	_	ADJ	JJ	_	6	xcomp	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 16 csubj	color:blue
1	ใน	_	ADP	IN	_	2	case	_	SpaceAfter=No
2	หมู่	_	NOUN	NN	_	11	nmod	_	SpaceAfter=No|ToDo=nmod
3	มนุษย์	_	NOUN	NN	_	2	compound	_	_
4	ทั้ง	_	DET	DT	_	5	cc:preconj	_	SpaceAfter=No
5	ชาย	_	NOUN	NN	_	11	nsubj	_	SpaceAfter=No
6	และ	_	CCONJ	CC	_	7	cc	_	SpaceAfter=No
7	หญิง	_	NOUN	NN	_	5	conj	_	SpaceAfter=No
8	ต่าง	_	PRON	PRP	Person=3	11	obl	_	SpaceAfter=No
9	ก็	_	ADV	RB	_	11	advmod	_	SpaceAfter=No
10	เป็น	_	AUX	VC	_	11	cop	_	SpaceAfter=No
11	นัก	_	NOUN	NN	_	0	root	_	SpaceAfter=No
12	ร้อง	_	VERB	VV	_	11	acl	_	SpaceAfter=No
13	ที่	_	DET	WDT	_	14	nsubj	_	SpaceAfter=No
14	ร้อนแรง	_	ADJ	JJ	_	11	acl:relcl	_	_
15	และ	_	CCONJ	CC	_	21	cc	_	SpaceAfter=No
16	การทำ	_	VERB	VV	_	21	csubj	_	SpaceAfter=No
17	ดนตรี	_	NOUN	NN	_	16	obj	_	SpaceAfter=No
18	ส่วน	_	NOUN	NN	_	21	obl	_	SpaceAfter=No
19	ใหญ่	_	ADJ	JJ	_	18	amod	_	SpaceAfter=No
20	เป็น	_	AUX	VC	_	21	cop	_	SpaceAfter=No
21	กิจกรรม	_	NOUN	NN	_	11	conj	_	SpaceAfter=No
22	ทาง	_	ADP	IN	_	23	case	_	SpaceAfter=No
23	สังคม	_	NOUN	NN	_	21	nmod	_	ToDo=nmod

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 1 csubj	color:blue
1	การเน้น	_	VERB	VV	_	22	csubj	_	SpaceAfter=No
2	ถ้อยคำ	_	NOUN	NN	_	1	obj	_	_
3	การเย้ยหยัน	_	VERB	VV	_	1	conj	_	SpaceAfter=No
4	อย่างแยบยล	_	ADJ	JJ	_	3	advmod	_	_
5	คำ	_	NOUN	NN	_	1	conj	_	SpaceAfter=No
6	ประชด	_	VERB	VV	_	5	acl	_	SpaceAfter=No
7	ทื่อ	_	ADJ	JJ	_	5	amod	_	SpaceAfter=No
8	ๆ	_	SYM	SYM	_	7	dep	_	_
9	และ	_	CCONJ	CC	_	10	cc	_	SpaceAfter=No
10	เครื่องมือ	_	NOUN	NN	_	1	conj	_	SpaceAfter=No
11	ทาง	_	ADP	IN	_	12	case	_	SpaceAfter=No
12	คำ	_	NOUN	NN	_	10	nmod	_	SpaceAfter=No
13	พูด	_	VERB	VV	_	12	acl	_	SpaceAfter=No
14	อื่น	_	ADJ	JJ	_	10	amod	_	SpaceAfter=No
15	ๆ	_	SYM	SYM	_	14	dep	_	_
16	ที่	_	DET	WDT	_	17	obj	_	SpaceAfter=No
17	นำ	_	VERB	VV	_	10	acl:relcl	_	SpaceAfter=No
18	มา	_	PART	RP	_	17	compound:prt	_	SpaceAfter=No
19	ใช้	_	VERB	VV	_	17	xcomp	_	SpaceAfter=No
20	อย่างพอดี	_	ADV	RB	_	19	advmod	_	SpaceAfter=No
21	นั้น	_	DET	DT	_	1	det	_	SpaceAfter=No
22	เหมาะ	_	ADJ	JJ	_	0	root	_	SpaceAfter=No
23	กับ	_	ADP	IN	_	24	case	_	SpaceAfter=No
24	การปราศรัย	_	VERB	VV	_	22	obl	_	SpaceAfter=No
25	ใน	_	ADP	IN	_	26	case	_	SpaceAfter=No
26	รัฐสภา	_	NOUN	NN	_	24	obl	_	_
27	แต่	_	CCONJ	CC	_	39	cc	_	SpaceAfter=No
28	ตลก	_	NOUN	NN	_	39	nsubj	_	SpaceAfter=No
29	แบบ	_	NOUN	NN	_	28	compound	_	SpaceAfter=No
30	เจ็บ	_	VERB	VV	_	29	acl	_	SpaceAfter=No
31	ตัว	_	NOUN	NN	_	30	obj	_	SpaceAfter=No
32	หรือ	_	CCONJ	CC	_	33	cc	_	SpaceAfter=No
33	เอา	_	VERB	VV	_	30	conj	_	SpaceAfter=No
34	ถาด	_	NOUN	NN	_	33	obj	_	SpaceAfter=No
35	ตี	_	VERB	VV	_	33	xcomp	_	SpaceAfter=No
36	หัว	_	NOUN	NN	_	35	obj	_	SpaceAfter=No
37	มิ	_	PART	NEG	Polarity=Neg	38	advmod	_	SpaceAfter=No
38	ได้	_	AUX	AS	Aspect=Perf	39	aux	_	SpaceAfter=No
39	เป็น	_	VERB	VC	_	22	conj	_	SpaceAfter=No
40	เช่น	_	ADP	IN	_	41	case	_	SpaceAfter=No
41	นั้น	_	PRON	PRD	_	39	obl	_	_

~~~


