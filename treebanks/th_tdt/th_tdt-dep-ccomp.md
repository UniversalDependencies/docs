---
layout: base
title:  'Statistics of ccomp in UD_Thai-TDT'
udver: '2'
---

## Treebank Statistics: UD_Thai-TDT: Relations: `ccomp`

This relation is universal.

128 nodes (2%) are attached to their parents as `ccomp`.

125 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.765625.

The following 3 pairs of parts of speech are connected with `ccomp`: <tt><a href="th_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tdt-pos-VERB.html">VERB</a></tt> (111; 87% instances), <tt><a href="th_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tdt-pos-NOUN.html">NOUN</a></tt> (16; 13% instances), <tt><a href="th_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tdt-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 ccomp	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 ccomp	color:blue
1	ชี้	ชี้	VERB	_	_	0	root	_	Gloss=|Translit=
2	เป็น	เป็น	AUX	_	_	3	cop	_	SpaceAfter=No|Gloss=|Translit=
3	อำนาจ	อำนาจ	NOUN	_	_	1	ccomp	_	SpaceAfter=No|Gloss=power|Translit=
4	ประธาน	ประธาน	NOUN	_	_	3	nmod	_	SpaceAfter=No|Gloss=|Translit=
5	สภา	สภา	NOUN	_	_	4	nmod	_	Gloss=|Translit=
6	วินิจฉัย	วินิจฉัย	VERB	_	_	4	acl	_	SpaceAfter=No|Gloss=|Translit=
7	เลือก	เลือก	VERB	_	_	6	xcomp	_	SpaceAfter=No|Gloss=choose|Translit=
8	นายก	นายก	NOUN	_	_	7	obj	_	SpaceAfter=No|Gloss=|Translit=
9	ฯ	_	SYM	_	_	8	nmod	_	Gloss=|Translit=
10	คน	คน	NOUN	_	NounType=Clf	8	clf	_	SpaceAfter=No|Gloss=person|Translit=
11	ใหม่	ใหม่	VERB	_	_	8	acl	_	SpaceAfter=No|Gloss=new|Translit=
12	ต้อง	ต้อง	VERB	_	_	6	advcl	_	SpaceAfter=No|Gloss=must|Translit=
13	ชะลอ	ชะลอ	VERB	_	_	12	xcomp	_	SpaceAfter=No|Gloss=|Translit=
14	หรือ	หรือ	CCONJ	_	_	15	cc	_	SpaceAfter=No|Gloss=or|Translit=
15	ไม่	ไม่	ADV	_	_	12	conj	_	Gloss=not|Translit=

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 ccomp	color:blue
1	เปลี่ยน	เปลี่ยน	VERB	_	_	0	root	_	SpaceAfter=No|Gloss=change|Translit=
2	เกณฑ์	เกณฑ์	NOUN	_	_	1	obj	_	SpaceAfter=No|Gloss=|Translit=
3	ใหม่	ใหม่	ADV	_	_	1	advmod	_	SpaceAfter=No|Gloss=new|Translit=
4	ให้	ให้	VERB	_	_	1	advcl	_	SpaceAfter=No|Gloss=give|Translit=
5	สันนิษฐาน	สันนิษฐาน	VERB	_	_	4	compound:svc	_	SpaceAfter=No|Gloss=|Translit=
6	ว่า	ว่า	SCONJ	_	_	8	mark	_	SpaceAfter=No|Gloss=that(COMP)|Translit=
7	แค่	แค่	DET	_	PronType=Ind	8	det	_	Gloss=only|Translit=
8	1	1	NUM	_	_	5	ccomp	_	Gloss=1|Translit=
9	เม็ด	เม็ด	NOUN	_	NounType=Clf	8	clf	_	Gloss=|Translit=
10	คือ	คือ	CCONJ	_	_	11	cc	_	SpaceAfter=No|Gloss=namely|Translit=
11	การ	การ	NOUN	_	NounType=Nmlz	8	conj	_	SpaceAfter=No|Gloss=|Translit=
12	มี	มี	VERB	_	_	11	acl	_	SpaceAfter=No|Gloss=have|Translit=
13	ไว้	ไว้	ADV	_	_	12	advmod	_	SpaceAfter=No|Gloss=|Translit=
14	เสพ	เสพ	VERB	_	_	12	advcl	_	Gloss=|Translit=
15	ซึ่ง	ซึ่ง	SCONJ	_	_	18	mark	_	SpaceAfter=No|Gloss=|Translit=
16	โทษ	โทษ	NOUN	_	_	18	nsubj	_	SpaceAfter=No|Gloss=punishment|Translit=
17	ก็	ก็	ADV	_	_	18	advmod	_	SpaceAfter=No|Gloss=|Translit=
18	เบา	เบา	VERB	_	_	8	orphan	_	Gloss=|Translit=

~~~


