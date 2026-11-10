---
layout: base
title:  'Statistics of xcomp in UD_Thai-TDT'
udver: '2'
---

## Treebank Statistics: UD_Thai-TDT: Relations: `xcomp`

This relation is universal.

219 nodes (4%) are attached to their parents as `xcomp`.

219 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.71689497716895.

The following 4 pairs of parts of speech are connected with `xcomp`: <tt><a href="th_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tdt-pos-VERB.html">VERB</a></tt> (199; 91% instances), <tt><a href="th_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tdt-pos-NOUN.html">NOUN</a></tt> (18; 8% instances), <tt><a href="th_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tdt-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="th_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tdt-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 xcomp	color:blue
1	การันตี	การันตี	VERB	_	Foreign=Yes	0	root	_	SpaceAfter=No|Gloss=guarantee|Translit=kaː-ran-tiː
2	บอก	บอก	VERB	_	_	1	ccomp	_	SpaceAfter=No|Gloss=tell|Translit=bɔ̀ːk
3	ลา	ลา	VERB	_	_	2	compound:svc	_	Gloss=say goodbye|Translit=laː
4	ฝุ่น	ฝุ่น	NOUN	_	_	10	nsubj	_	SpaceAfter=No|Gloss=dust|Translit=fùn
5	พิษ	พิษ	NOUN	_	_	4	nmod	_	SpaceAfter=No|Gloss=poison|Translit=pít
6	ภาย	ภาย	NOUN	_	_	11	obl	_	SpaceAfter=No|Gloss=period|Translit=phaːj
7	ใน	ใน	ADP	_	_	8	case	_	Gloss=in|Translit=naj
8	3	3	NUM	_	_	6	nmod	_	Gloss=3|Translit=sǎːm
9	ปี	ปี	NOUN	_	NounType=Clf	8	clf	_	SpaceAfter=No|Gloss=year|Translit=piː
10	ต้อง	ต้อง	VERB	_	_	3	ccomp	_	SpaceAfter=No|Gloss=must|Translit=tɔ̂ŋ
11	จบ	จบ	VERB	_	_	10	xcomp	_	Gloss=end|Translit=còp

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 xcomp	color:blue
1	ชู	ชู	VERB	_	_	0	root	_	Gloss=raise|Translit=chuː
2	“	“	PUNCT	_	_	3	punct	_	SpaceAfter=No
3	เก่ง	เก่ง	PROPN	_	_	1	obj	_	Gloss=Keng|Translit=kèŋ
4	การุณ	การุณ	PROPN	_	_	3	flat	_	SpaceAfter=No|Gloss=Kaarun|Translit=kaː-run
5	”	”	PUNCT	_	_	3	punct	_	_
6	นัก	นัก	NOUN	_	_	1	xcomp	_	SpaceAfter=No|Gloss=doer|Translit=nák
7	สู้	สู้	VERB	_	_	6	acl	_	SpaceAfter=No|Gloss=fight|Translit=sûː
8	เพื่อ	เพื่อ	ADP	_	_	9	case	_	SpaceAfter=No|Gloss=for|Translit=phɯ̂a
9	ประชาธิปไตย	ประชาธิปไตย	NOUN	_	_	6	nmod	_	SpaceAfter=No|Gloss=democracy|Translit=pràʔ-chaː-thíp-pà-taj
10	ตัว	ตัว	NOUN	_	_	6	nmod	_	SpaceAfter=No|Gloss=person|Translit=tua
11	จริง	จริง	VERB	_	_	10	acl	_	Gloss=real|Translit=ciŋ

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 25 xcomp	color:blue
1	แต่	แต่	ADV	_	_	9	advmod	_	SpaceAfter=No|Gloss=but|Translit=
2	วัน	วัน	NOUN	_	_	9	obl	_	SpaceAfter=No|Gloss=day|Translit=
3	ที่	ที่	NOUN	_	_	2	nmod	_	Gloss=|Translit=
4	29	29	NUM	_	_	3	nmod	_	Gloss=29|Translit=
5	ก.ค.	ก.ค.	NOUN	_	Abbr=Yes	2	nmod	_	Gloss=July|Translit=
6	สำนักงาน	สำนักงาน	NOUN	_	_	9	nsubj	_	SpaceAfter=No|Gloss=|Translit=
7	กำลัง	กำลัง	NOUN	_	ExtPos=PROPN	6	nmod	_	SpaceAfter=No|Gloss=|Translit=
8	พล	พล	NOUN	_	_	7	nmod	_	Gloss=|Translit=
9	กลับ	กลับ	VERB	_	_	0	root	_	SpaceAfter=No|Gloss=|Translit=
10	มี	มี	VERB	_	_	9	xcomp	_	SpaceAfter=No|Gloss=have|Translit=
11	คำ	คำ	NOUN	_	_	10	obl:arg	_	SpaceAfter=No|Gloss=word|Translit=
12	สั่ง	สั่ง	VERB	_	_	11	acl	_	SpaceAfter=No|Gloss=order|Translit=
13	ให้	ให้	VERB	_	_	11	acl	_	SpaceAfter=No|Gloss=give|Translit=
14	ชะลอ	ชะลอ	VERB	_	_	13	compound:svc	_	SpaceAfter=No|Gloss=|Translit=
15	การ	การ	NOUN	_	NounType=Nmlz	14	obj	_	SpaceAfter=No|Gloss=|Translit=
16	ประเมิน	ประเมิน	VERB	_	_	15	acl	_	Gloss=evaluate|Translit=
17	ส่อ	ส่อ	VERB	_	_	9	advcl	_	SpaceAfter=No|Gloss=|Translit=
18	ไป	ไป	VERB	_	_	17	compound:svc	_	SpaceAfter=No|Gloss=go|Translit=
19	ถึง	ถึง	VERB	_	_	18	compound:svc	_	SpaceAfter=No|Gloss=|Translit=
20	เจตนา	เจตนา	NOUN	_	_	19	obl:arg	_	SpaceAfter=No|Gloss=|Translit=
21	ที่	ที่	PRON	_	PronType=Rel	23	nsubj	_	SpaceAfter=No|Gloss=that|Translit=
22	ไม่	ไม่	ADV	_	_	23	advmod	_	SpaceAfter=No|Gloss=not|Translit=
23	ควร	ควร	VERB	_	_	20	acl:relcl	_	SpaceAfter=No|Gloss=|Translit=
24	จะ	จะ	ADV	_	_	25	advmod	_	SpaceAfter=No|Gloss=|Translit=
25	เป็น	เป็น	AUX	_	_	23	xcomp	_	SpaceAfter=No|Gloss=be|Translit=
26	เพราะ	เพราะ	ADP	_	_	28	mark	_	SpaceAfter=No|Gloss=because|Translit=
27	เป็น	เป็น	AUX	_	_	28	cop	_	SpaceAfter=No|Gloss=be|Translit=
28	ฉันทามติ	ฉันทามติ	NOUN	_	_	23	advcl	_	SpaceAfter=No|Gloss=|Translit=
29	ของ	ของ	ADP	_	_	30	case	_	SpaceAfter=No|Gloss=of|Translit=
30	ตำรวจ	ตำรวจ	NOUN	_	_	28	nmod	_	SpaceAfter=No|Gloss=policeman|Translit=
31	ทั้ง	ทั้ง	DET	_	PronType=Tot	32	det	_	SpaceAfter=No|Gloss=|Translit=
32	ประเทศ​	ประเทศ​	NOUN	_	NounType=Clf	30	nmod	_	Gloss=country|Translit=

~~~


