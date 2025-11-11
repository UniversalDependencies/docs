---
layout: base
title:  'Statistics of dep in UD_Thai-TUD'
udver: '2'
---

## Treebank Statistics: UD_Thai-TUD: Relations: `dep`

This relation is universal.

82 nodes (0%) are attached to their parents as `dep`.

66 instances of `dep` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.54878048780488.

The following 15 pairs of parts of speech are connected with `dep`: <tt><a href="th_tud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_tud-pos-PART.html">PART</a></tt> (32; 39% instances), <tt><a href="th_tud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tud-pos-PART.html">PART</a></tt> (19; 23% instances), <tt><a href="th_tud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tud-pos-NUM.html">NUM</a></tt> (8; 10% instances), <tt><a href="th_tud-pos-NUM.html">NUM</a></tt>-<tt><a href="th_tud-pos-SYM.html">SYM</a></tt> (5; 6% instances), <tt><a href="th_tud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_tud-pos-ADP.html">ADP</a></tt> (3; 4% instances), <tt><a href="th_tud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_tud-pos-NUM.html">NUM</a></tt> (3; 4% instances), <tt><a href="th_tud-pos-PRON.html">PRON</a></tt>-<tt><a href="th_tud-pos-PART.html">PART</a></tt> (3; 4% instances), <tt><a href="th_tud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_tud-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="th_tud-pos-ADV.html">ADV</a></tt>-<tt><a href="th_tud-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="th_tud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_tud-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="th_tud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_tud-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="th_tud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_tud-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="th_tud-pos-PART.html">PART</a></tt>-<tt><a href="th_tud-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="th_tud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tud-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="th_tud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 dep	color:blue
1	แต่	_	CCONJ	_	_	7	cc	_	SpaceAfter=No
2	แค่	_	NOUN	_	_	7	obl	_	SpaceAfter=No
3	นี้	_	DET	_	_	2	det	_	SpaceAfter=No
4	นะ	_	PART	_	_	2	dep	_	SpaceAfter=No
5	เด็ก	_	NOUN	_	_	7	nsubj	_	SpaceAfter=No
6	ไทย	_	PROPN	_	_	5	nmod	_	_
7	ลอง	_	VERB	_	_	0	root	_	SpaceAfter=No
8	ไป	_	VERB	_	_	7	xcomp	_	SpaceAfter=No
9	มอง	_	VERB	_	_	8	compound	_	SpaceAfter=No
10	ดู	_	VERB	_	_	9	compound	_	SpaceAfter=No
11	เด็ก	_	NOUN	_	_	10	obj	_	SpaceAfter=No
12	มะกัน	_	NOUN	_	_	11	nmod	_	SpaceAfter=No
13	บ้าง	_	PART	_	_	7	discourse	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 dep	color:blue
1	ไม่	_	ADV	_	_	2	advmod	_	SpaceAfter=No
2	ใช่	_	VERB	_	_	0	root	_	SpaceAfter=No
3	เลย	_	PART	_	_	2	dep	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 dep	color:blue
1	6	_	NUM	_	_	6	dep	_	SpaceAfter=No
2	.	_	SYM	_	_	1	dep	_	_
3	ชาว	_	NOUN	_	_	6	nsubj	_	_
4	Generation	_	NOUN	_	_	3	nmod	_	_
5	M	_	NOUN	_	_	4	nmod	_	_
6	มี	_	VERB	_	_	0	root	_	SpaceAfter=No
7	สัจจะ	_	NOUN	_	_	8	nsubj	_	SpaceAfter=No
8	น้อย	_	VERB	_	_	6	ccomp	_	SpaceAfter=No
9	ลง	_	ADV	_	_	8	advmod	_	SpaceAfter=No
10	จาก	_	ADP	_	_	11	case	_	_
11	Generation	_	NOUN	_	_	8	obl	_	_
12	ก่อน	_	ADP	_	_	11	orphan	_	SpaceAfter=No
13	ๆ	_	PUNCT	_	_	12	punct	_	SpaceAfter=No
14	มาก	_	ADV	_	_	8	advmod	_	SpaceAfter=No

~~~


