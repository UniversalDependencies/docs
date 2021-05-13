---
layout: base
title:  'Statistics of amod in UD_Thai-PUD'
udver: '2'
---

## Treebank Statistics: UD_Thai-PUD: Relations: `amod`

This relation is universal.

654 nodes (3%) are attached to their parents as `amod`.

596 instances of `amod` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.18807339449541.

The following 12 pairs of parts of speech are connected with `amod`: <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt> (591; 90% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt> (28; 4% instances), <tt><a href="th_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt> (12; 2% instances), <tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt> (11; 2% instances), <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="th_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="th_pud-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="th_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="th_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="th_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 amod	color:blue
1	บาง	_	DET	DT	_	2	det	_	SpaceAfter=No
2	ครั้ง	_	NOUN	NNB	_	5	obl:tmod	_	SpaceAfter=No
3	ก็	_	ADV	RB	_	5	advmod	_	SpaceAfter=No
4	คล้าย	_	AUX	VC	_	5	cop	_	SpaceAfter=No
5	พลัง	_	NOUN	NN	_	0	root	_	SpaceAfter=No
6	พิเศษ	_	ADJ	JJ	_	5	amod	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 amod	color:blue
1	แผนก	_	NOUN	NN	_	4	nsubj	_	SpaceAfter=No
2	นี้	_	DET	DT	_	1	det	_	SpaceAfter=No
3	กำลัง	_	AUX	AS	Aspect=Prog	4	aux	_	SpaceAfter=No
4	เผชิญ	_	VERB	VV	_	0	root	_	SpaceAfter=No
5	กับ	_	ADP	IN	_	6	case	_	SpaceAfter=No
6	ความท้าทาย	_	VERB	VV	_	4	obl	_	SpaceAfter=No
7	ใหม่	_	ADJ	JJ	_	6	amod	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 amod	color:blue
1	สิ่ง	_	NOUN	NN	_	18	obj	_	SpaceAfter=No
2	ที่	_	DET	WDT	_	5	obj	_	SpaceAfter=No
3	เธอ	_	PRON	PRP	Person=3	5	nsubj	_	SpaceAfter=No
4	กำลัง	_	AUX	AS	Aspect=Prog	5	aux	_	SpaceAfter=No
5	พูด	_	VERB	VV	_	1	acl:relcl	_	SpaceAfter=No
6	และ	_	CCONJ	CC	_	7	cc	_	SpaceAfter=No
7	สิ่ง	_	NOUN	NN	_	1	conj	_	SpaceAfter=No
8	ที่	_	DET	WDT	_	11	obj	_	SpaceAfter=No
9	เธอ	_	PRON	PRP	Person=3	11	nsubj	_	SpaceAfter=No
10	กำลัง	_	AUX	AS	Aspect=Prog	11	aux	_	SpaceAfter=No
11	ทำ	_	VERB	VV	_	7	acl:relcl	_	_
12	มัน	_	PRON	PRP	Person=3	16	reparandum	_	_
13	—	_	PUNCT	-	_	12	punct	_	_
14	ที่	_	PRON	PRP	_	18	obl	_	SpaceAfter=No
15	จริง	_	ADJ	JJ	_	14	amod	_	_
16	มัน	_	PRON	PRP	Person=3	18	obl	_	SpaceAfter=No
17	ไม่	_	PART	NEG	Polarity=Neg	18	advmod	_	SpaceAfter=No
18	น่าเชื่อ	_	VERB	VV	_	0	root	_	SpaceAfter=No
19	เลย	_	ADV	RB	_	18	advmod	_	_

~~~


