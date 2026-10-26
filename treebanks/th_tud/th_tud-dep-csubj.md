---
layout: base
title:  'Statistics of csubj in UD_Thai-TUD'
udver: '2'
---

## Treebank Statistics: UD_Thai-TUD: Relations: `csubj`

This relation is universal.

78 nodes (0%) are attached to their parents as `csubj`.

78 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="th_tud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tud-pos-VERB.html">VERB</a></tt> (43; 55% instances), <tt><a href="th_tud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_tud-pos-PRON.html">PRON</a></tt> (9; 12% instances), <tt><a href="th_tud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_tud-pos-VERB.html">VERB</a></tt> (9; 12% instances), <tt><a href="th_tud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tud-pos-PRON.html">PRON</a></tt> (9; 12% instances), <tt><a href="th_tud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tud-pos-NOUN.html">NOUN</a></tt> (6; 8% instances), <tt><a href="th_tud-pos-AUX.html">AUX</a></tt>-<tt><a href="th_tud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="th_tud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_tud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 csubj	color:blue
1	ประเทศ	_	NOUN	_	_	3	nsubj	_	SpaceAfter=No
2	เรา	_	PRON	_	_	1	nmod	_	SpaceAfter=No
3	ส่งออก	_	VERB	_	_	9	csubj	_	SpaceAfter=No
4	พืช	_	NOUN	_	_	3	obj	_	SpaceAfter=No
5	ผล	_	NOUN	_	_	4	nmod	_	_
6	ส่งออก	_	VERB	_	_	3	conj	_	SpaceAfter=No
7	ข้าว	_	NOUN	_	_	6	obj	_	SpaceAfter=No
8	ก็	_	ADV	_	_	9	advmod	_	SpaceAfter=No
9	ดี	_	VERB	_	_	0	root	_	SpaceAfter=No
10	อยู่แล้ว	_	AUX	_	_	9	aux	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 csubj	color:blue
1	การ	_	NOUN	_	_	5	nsubj	_	SpaceAfter=No
2	ประกอบอาหาร	_	VERB	_	_	1	acl	_	SpaceAfter=No
3	เกาหลี	_	PROPN	_	_	1	nmod	_	SpaceAfter=No
4	จะ	_	AUX	_	_	5	aux	_	SpaceAfter=No
5	มี	_	VERB	_	_	0	root	_	SpaceAfter=No
6	ส่วน	_	NOUN	_	_	5	obj	_	SpaceAfter=No
7	ประกอบ	_	VERB	_	_	6	acl	_	SpaceAfter=No
8	ของ	_	ADP	_	_	9	case	_	SpaceAfter=No
9	พริก	_	NOUN	_	_	6	nmod	_	SpaceAfter=No
10	แดง	_	ADJ	_	_	9	amod	_	SpaceAfter=No
11	เป็น	_	VERB	_	_	5	advcl	_	SpaceAfter=No
12	ส่วนใหญ่	_	NOUN	_	_	11	obj	_	SpaceAfter=No
13	ซึ่ง	_	PRON	_	_	15	csubj	_	SpaceAfter=No
14	เป็น	_	AUX	_	_	15	cop	_	SpaceAfter=No
15	เอกลักษณ์	_	NOUN	_	_	5	advcl	_	SpaceAfter=No
16	เฉพาะ	_	ADJ	_	_	15	amod	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 csubj	color:blue
1	ค้น	_	VERB	_	_	8	csubj	_	SpaceAfter=No
2	หา	_	VERB	_	_	1	compound	_	SpaceAfter=No
3	สิ่ง	_	NOUN	_	_	1	obj	_	SpaceAfter=No
4	ที่	_	PRON	_	_	6	obj	_	SpaceAfter=No
5	ตนเอง	_	PRON	_	_	6	nsubj	_	SpaceAfter=No
6	ชอบ	_	VERB	_	_	3	acl	_	_
7	เป็น	_	AUX	_	_	8	cop	_	SpaceAfter=No
8	หนทาง	_	NOUN	_	_	0	root	_	SpaceAfter=No
9	สู่	_	ADP	_	_	10	case	_	SpaceAfter=No
10	ความ	_	NOUN	_	_	8	nmod	_	SpaceAfter=No
11	สำเร็จ	_	VERB	_	_	10	acl	_	SpaceAfter=No

~~~


