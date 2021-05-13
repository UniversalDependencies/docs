---
layout: base
title:  'Statistics of dep in UD_Thai-PUD'
udver: '2'
---

## Treebank Statistics: UD_Thai-PUD: Relations: `dep`

This relation is universal.

117 nodes (1%) are attached to their parents as `dep`.

115 instances of `dep` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 6 pairs of parts of speech are connected with `dep`: <tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="th_pud-pos-SYM.html">SYM</a></tt> (77; 66% instances), <tt><a href="th_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="th_pud-pos-SYM.html">SYM</a></tt> (26; 22% instances), <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-SYM.html">SYM</a></tt> (5; 4% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-SYM.html">SYM</a></tt> (5; 4% instances), <tt><a href="th_pud-pos-DET.html">DET</a></tt>-<tt><a href="th_pud-pos-SYM.html">SYM</a></tt> (2; 2% instances), <tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="th_pud-pos-SYM.html">SYM</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 dep	color:blue
1	พวก	_	NOUN	NN	_	6	nsubj	_	SpaceAfter=No
2	เขา	_	PRON	PRP	Person=3	1	compound	_	SpaceAfter=No
3	มัก	_	ADV	RB	_	6	advmod	_	SpaceAfter=No
4	จะ	_	AUX	MD	_	6	aux	_	SpaceAfter=No
5	เป็น	_	AUX	VC	_	6	cop	_	SpaceAfter=No
6	ศิลปิน	_	NOUN	NN	_	0	root	_	SpaceAfter=No
7	ที่	_	DET	WDT	_	8	nsubj	_	SpaceAfter=No
8	ชอบ	_	VERB	VV	_	6	acl:relcl	_	SpaceAfter=No
9	ทำ	_	VERB	VV	_	8	xcomp	_	SpaceAfter=No
10	เรื่อง	_	NOUN	NN	_	9	obj	_	SpaceAfter=No
11	ต่าง	_	ADJ	JJ	_	10	amod	_	SpaceAfter=No
12	ๆ	_	SYM	SYM	_	11	dep	_	_
13	อยู่แล้ว	_	ADV	RB	_	8	advmod	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 dep	color:blue
1	เสียง	_	NOUN	NN	_	4	obj	_	SpaceAfter=No
2	ของ	_	ADP	IN	_	3	case	_	SpaceAfter=No
3	เธอ	_	PRON	PRP	Person=3	1	nmod:poss	_	SpaceAfter=No
4	ส่ง	_	VERB	VV	_	11	ccomp	_	SpaceAfter=No
5	ไป	_	PART	RP	_	4	compound:prt	_	SpaceAfter=No
6	ทั่ว	_	ADJ	JJ	_	7	amod	_	SpaceAfter=No
7	โลก	_	NOUN	NN	_	4	obl	_	SpaceAfter=No
8	จริง	_	ADV	RB	_	4	advmod	_	SpaceAfter=No
9	ๆ	_	SYM	SYM	_	8	dep	_	Proper=True
10	ลีฟ	_	PROPN	NNP	_	11	nsubj	_	SpaceAfter=No
11	กล่าว	_	VERB	VV	_	0	root	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 22 dep	color:blue
1	หาก	_	ADP	IN	_	10	mark	_	SpaceAfter=No
2	คู่	_	NOUN	NN	_	10	nsubj:pass	_	SpaceAfter=No
3	แข่ง	_	VERB	VV	_	2	acl	_	SpaceAfter=No
4	ของ	_	ADP	IN	_	5	case	_	SpaceAfter=No
5	เขา	_	PRON	PRP	Person=3	2	nmod:poss	_	SpaceAfter=No
6	จาก	_	ADP	IN	_	7	case	_	SpaceAfter=No
7	พรรค	_	NOUN	NN	_	2	nmod	_	Proper=True|SpaceAfter=No
8	เดโมแครต	_	PROPN	NNP	_	7	flat:name	_	SpaceAfter=No
9	ได้รับ	_	AUX	MD	Voice=Pass	10	aux:pass	_	SpaceAfter=No
10	เลือกตั้ง	_	VERB	VV	_	12	advcl	_	_
11	เขา	_	PRON	PRP	Person=3	12	nsubj	_	SpaceAfter=No
12	ยืนยัน	_	VERB	VV	_	0	root	_	SpaceAfter=No
13	ว่า	_	ADP	IN	_	19	mark	_	SpaceAfter=No
14	เธอ	_	PRON	PRP	Person=3	19	nsubj:pass	_	SpaceAfter=No
15	จะ	_	AUX	MD	_	19	aux	_	SpaceAfter=No
16	ต้อง	_	AUX	MD	_	19	aux	_	_
17	‘	_	PUNCT	``	_	16	punct	_	SpaceAfter=No
18	ถูก	_	AUX	MD	Voice=Pass	19	aux:pass	_	SpaceAfter=No
19	สืบสวน	_	VERB	VV	_	12	ccomp	_	SpaceAfter=No
20	เป็น	_	AUX	VC	_	21	cop	_	SpaceAfter=No
21	ปี	_	NOUN	NN	_	19	xcomp	_	SpaceAfter=No
22	ๆ	_	SYM	SYM	_	21	dep	_	SpaceAfter=No
23	’	_	PUNCT	''	_	19	punct	_	_

~~~


