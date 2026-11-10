---
layout: base
title:  'Statistics of obl in UD_Thai-TDT'
udver: '2'
---

## Treebank Statistics: UD_Thai-TDT: Relations: `obl`

This relation is universal.
There are 1 language-specific subtypes of `obl`: <tt><a href="th_tdt-dep-obl-arg.html">obl:arg</a></tt>.

312 nodes (5%) are attached to their parents as `obl`.

241 instances of `obl` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.57051282051282.

The following 9 pairs of parts of speech are connected with `obl`: <tt><a href="th_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tdt-pos-NOUN.html">NOUN</a></tt> (252; 81% instances), <tt><a href="th_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tdt-pos-PRON.html">PRON</a></tt> (24; 8% instances), <tt><a href="th_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tdt-pos-NUM.html">NUM</a></tt> (17; 5% instances), <tt><a href="th_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tdt-pos-PROPN.html">PROPN</a></tt> (8; 3% instances), <tt><a href="th_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_tdt-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="th_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_tdt-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="th_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_tdt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="th_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tdt-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="th_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tdt-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obl	color:blue
1	เผยแพร่	เผยแพร่	VERB	_	_	0	root	_	Gloss=publicize|Translit=phɤ̌ːj-phrɛ̂ː
2	วัน	วัน	NOUN	_	_	1	obl	_	SpaceAfter=No|Gloss=day|Translit=wan
3	อาทิตย์	อาทิตย์	NOUN	_	_	2	nmod	_	SpaceAfter=No|Gloss=Sunday|Translit=ʔaː-thít
4	ที่	ที่	NOUN	_	_	2	nmod	_	Gloss=rank|Translit=thîː
5	12	12	NUM	_	_	4	nmod	_	Gloss=12|Translit=sìp-sɔ̌ːŋ
6	มีนาคม	มีนาคม	NOUN	_	_	2	nmod	_	Gloss=March|Translit=miː-naː-khom
7	พ.ศ.	พ.ศ.	NOUN	_	Abbr=Yes	6	nmod	_	SpaceAfter=No|CorrectSpaceAfter=Yes|Gloss=Buddhist Era|Translit=phɔː-sɔ̌ː
8	2566	2566	NUM	_	_	7	nmod	_	Gloss=2566|Translit=sɔ̌ːŋ-phan-hâː-rɔ́j-hòk-sìp-hòk

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl	color:blue
1	จาก	จาก	ADP	_	_	2	case	_	SpaceAfter=No|Gloss=from|Translit=
2	นั้น	นั้น	PRON	_	PronType=Dem	4	obl	_	SpaceAfter=No|Gloss=that|Translit=
3	ผบ.ตร.	ผบ.ตร.	NOUN	_	Abbr=Yes	4	nsubj	_	Gloss=|Translit=
4	ส่ง	ส่ง	VERB	_	_	0	root	_	SpaceAfter=No|Gloss=send|Translit=
5	การ	การ	NOUN	_	NounType=Nmlz	4	obj	_	SpaceAfter=No|Gloss=|Translit=
6	ประเมิน	ประเมิน	VERB	_	_	5	acl	_	SpaceAfter=No|Gloss=|Translit=
7	ให้	ให้	VERB	_	_	4	compound:svc	_	SpaceAfter=No|Gloss=give|Translit=
8	กับ	กับ	ADP	_	_	9	case	_	SpaceAfter=No|Gloss=with|Translit=
9	กอง	กอง	NOUN	_	_	7	obl	_	SpaceAfter=No|Gloss=|Translit=
10	บัญชาการ	บัญชาการ	VERB	_	_	9	acl	_	SpaceAfter=No|Gloss=|Translit=
11	ต่าง	ต่าง	VERB	_	_	9	acl	_	SpaceAfter=No|Gloss=different|Translit=
12	ๆ	_	SYM	_	_	11	compound:redup	_	Gloss=|Translit=
13	ประมาณ	ประมาณ	DET	_	PronType=Ind	14	det	_	SpaceAfter=No|Gloss=|Translit=
14	วัน	วัน	NOUN	_	_	4	obl	_	SpaceAfter=No|Gloss=day|Translit=
15	ที่	ที่	NOUN	_	_	14	nmod	_	Gloss=|Translit=
16	20	20	NUM	_	_	15	nmod	_	Gloss=20|Translit=
17	ก.ค.	ก.ค.	NOUN	_	Abbr=Yes	14	nmod	_	Gloss=July|Translit=

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obl	color:blue
1	เดิน	เดิน	VERB	_	_	0	root	_	SpaceAfter=No|Gloss=walk|Translit=
2	หน้า	หน้า	ADV	_	_	1	advmod	_	SpaceAfter=No|Gloss=forward|Translit=
3	ปรับ	ปรับ	VERB	_	_	1	advcl	_	SpaceAfter=No|Gloss=|Translit=
4	ครอบครอง	ครอบครอง	VERB	_	_	3	compound:svc	_	SpaceAfter=No|Gloss=|Translit=
5	มาก	มาก	VERB	_	_	4	xcomp	_	SpaceAfter=No|Gloss=very|Translit=
6	กว่า	กว่า	ADP	_	_	7	case	_	Gloss=than|Translit=
7	1	1	NUM	_	_	5	obl	_	Gloss=1|Translit=
8	เม็ด	เม็ด	NOUN	_	NounType=Clf	7	clf	_	SpaceAfter=No|Gloss=|Translit=
9	เป็น	เป็น	AUX	_	_	10	cop	_	SpaceAfter=No|Gloss=BE|Translit=
10	ผู้	ผู้	NOUN	_	_	3	xcomp	_	SpaceAfter=No|Gloss=person|Translit=
11	ค้า	ค้า	VERB	_	_	10	acl	_	Gloss=|Translit=

~~~


