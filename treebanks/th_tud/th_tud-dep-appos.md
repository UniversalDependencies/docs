---
layout: base
title:  'Statistics of appos in UD_Thai-TUD'
udver: '2'
---

## Treebank Statistics: UD_Thai-TUD: Relations: `appos`

This relation is universal.

77 nodes (0%) are attached to their parents as `appos`.

77 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.85714285714286.

The following 8 pairs of parts of speech are connected with `appos`: <tt><a href="th_tud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_tud-pos-NOUN.html">NOUN</a></tt> (30; 39% instances), <tt><a href="th_tud-pos-NUM.html">NUM</a></tt>-<tt><a href="th_tud-pos-NOUN.html">NOUN</a></tt> (16; 21% instances), <tt><a href="th_tud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_tud-pos-NUM.html">NUM</a></tt> (8; 10% instances), <tt><a href="th_tud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="th_tud-pos-NOUN.html">NOUN</a></tt> (8; 10% instances), <tt><a href="th_tud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="th_tud-pos-PROPN.html">PROPN</a></tt> (7; 9% instances), <tt><a href="th_tud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_tud-pos-PROPN.html">PROPN</a></tt> (5; 6% instances), <tt><a href="th_tud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_tud-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="th_tud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_tud-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 appos	color:blue
1	ผม	_	PRON	_	_	2	nsubj	_	SpaceAfter=No
2	รอ	_	VERB	_	_	0	root	_	SpaceAfter=No
3	จนถึง	_	ADP	_	_	4	case	_	SpaceAfter=No
4	โอกาส	_	NOUN	_	_	2	obl	_	SpaceAfter=No
5	พิเศษ	_	ADJ	_	_	4	amod	_	_
6	"	_	PUNCT	_	_	7	punct	_	SpaceAfter=No
7	วัน	_	NOUN	_	_	4	appos	_	SpaceAfter=No
8	วาเลนไทน์	_	PROPN	_	_	7	nmod	_	SpaceAfter=No
9	"	_	PUNCT	_	_	7	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 15 appos	color:blue
1	ความ	_	NOUN	_	_	7	nsubj	_	SpaceAfter=No
2	หมาย	_	VERB	_	_	1	acl	_	SpaceAfter=No
3	ของ	_	ADP	_	_	4	case	_	SpaceAfter=No
4	ความ	_	NOUN	_	_	1	nmod	_	SpaceAfter=No
5	กตัญญู	_	VERB	_	_	4	acl	_	SpaceAfter=No
6	กตเวที	_	VERB	_	_	5	compound	_	_
7	มา	_	VERB	_	_	0	root	_	SpaceAfter=No
8	จาก	_	ADP	_	_	9	case	_	SpaceAfter=No
9	นิยาม	_	NOUN	_	_	7	obl	_	SpaceAfter=No
10	ของ	_	ADP	_	_	11	case	_	SpaceAfter=No
11	คำ	_	NOUN	_	_	9	nmod	_	_
12	2	_	NUM	_	_	11	nummod	_	_
13	คำ	_	NOUN	_	_	12	clf	_	_
14	คือ	_	SCONJ	_	_	15	mark	_	_
15	ความ	_	NOUN	_	_	12	appos	_	SpaceAfter=No
16	กตัญญู	_	VERB	_	_	15	acl	_	_
17	และ	_	CCONJ	_	_	18	cc	_	_
18	กตเวที	_	VERB	_	_	16	conj	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 appos	color:blue
1	ยุค	_	NOUN	_	_	11	nsubj	_	SpaceAfter=No
2	แรก	_	ADJ	_	_	1	amod	_	SpaceAfter=No
3	ของ	_	ADP	_	_	4	case	_	SpaceAfter=No
4	ลัทธิ	_	NOUN	_	_	1	nmod	_	SpaceAfter=No
5	ขงจื่อสมัยใหม่	_	PROPN	_	_	4	nmod	_	_
6	(	_	PUNCT	_	_	7	punct	_	SpaceAfter=No
7	2464	_	NUM	_	_	1	appos	_	SpaceAfter=No
8	-	_	PUNCT	_	_	9	punct	_	SpaceAfter=No
9	2492	_	NUM	_	_	7	nummod	_	SpaceAfter=No
10	)	_	PUNCT	_	_	7	punct	_	_
11	เป็น	_	VERB	_	_	0	root	_	SpaceAfter=No
12	เพื่อ	_	ADP	_	_	13	case	_	SpaceAfter=No
13	การ	_	NOUN	_	_	11	obl	_	SpaceAfter=No
14	ตอบ	_	VERB	_	_	13	acl	_	SpaceAfter=No
15	สนอง	_	VERB	_	_	14	compound	_	SpaceAfter=No
16	ต่อ	_	ADP	_	_	17	case	_	SpaceAfter=No
17	ขบวน	_	NOUN	_	_	13	nmod	_	SpaceAfter=No
18	การ	_	NOUN	_	_	17	compound	_	SpaceAfter=No
19	เคลื่อน	_	VERB	_	_	17	acl	_	SpaceAfter=No
20	ไหว	_	VERB	_	_	19	compound	_	SpaceAfter=No
21	สี่	_	NUM	_	_	17	nmod	_	SpaceAfter=No
22	พฤษภาคม	_	NOUN	_	_	21	flat	_	_
23	และ	_	CCONJ	_	_	24	cc	_	SpaceAfter=No
24	มี	_	VERB	_	_	11	conj	_	SpaceAfter=No
25	ท่า	_	NOUN	_	_	24	obj	_	SpaceAfter=No
26	ที	_	NOUN	_	_	25	compound	_	SpaceAfter=No
27	ต่อ	_	VERB	_	_	25	acl	_	SpaceAfter=No
28	ต้าน	_	VERB	_	_	27	compound	_	SpaceAfter=No
29	ลัทธิ	_	NOUN	_	_	27	obj	_	SpaceAfter=No
30	ขงจื่อ	_	PROPN	_	_	29	nmod	_	SpaceAfter=No

~~~


