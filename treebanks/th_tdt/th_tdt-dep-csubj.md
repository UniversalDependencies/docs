---
layout: base
title:  'Statistics of csubj in UD_Thai-TDT'
udver: '2'
---

## Treebank Statistics: UD_Thai-TDT: Relations: `csubj`

This relation is universal.

2 nodes (0%) are attached to their parents as `csubj`.

2 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.5.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="th_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tdt-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="th_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tdt-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 csubj	color:blue
1	ผล	ผล	NOUN	_	_	6	nsubj	_	SpaceAfter=No|Gloss=result|Translit=
2	ที่	ที่	PRON	_	PronType=Rel	3	nsubj	_	SpaceAfter=No|Gloss=that(REL)|Translit=
3	ออก	ออก	VERB	_	_	1	acl:relcl	_	SpaceAfter=No|Gloss=|Translit=
4	มา	มา	VERB	_	_	3	compound:svc	_	SpaceAfter=No|Gloss=come|Translit=
5	เป็น	เป็น	AUX	_	_	6	cop	_	SpaceAfter=No|Gloss=be|Translit=
6	เครื่อง	เครื่อง	NOUN	_	_	9	csubj	_	SpaceAfter=No|Gloss=|Translit=
7	ชี้	ชี้	VERB	_	_	6	acl	_	SpaceAfter=No|Gloss=|Translit=
8	เจตนา	เจตนา	NOUN	_	_	7	obj	_	Gloss=|Translit=
9	ชัดเจน	ชัดเจน	VERB	_	_	0	root	_	SpaceAfter=No|Gloss=be clear|Translit=
10	ว่า	ว่า	SCONJ	_	_	14	mark	_	SpaceAfter=No|Gloss=that(COMP)|Translit=
11	การ	การ	NOUN	_	NounType=Nmlz	14	nsubj	_	SpaceAfter=No|Gloss=|Translit=
12	พิจารณา	พิจารณา	VERB	_	_	11	acl	_	SpaceAfter=No|Gloss=consider|Translit=
13	ไม่	ไม่	ADV	_	_	14	advmod	_	SpaceAfter=No|Gloss=not|Translit=
14	ได้	ได้	VERB	_	_	9	ccomp	_	SpaceAfter=No|Gloss=|Translit=
15	ใช้	ใช้	VERB	_	_	14	xcomp	_	SpaceAfter=No|Gloss=use|Translit=
16	หลัก	หลัก	NOUN	_	_	15	obj	_	SpaceAfter=No|Gloss=|Translit=
17	การ	การ	NOUN	_	NounType=Nmlz	16	nmod	_	SpaceAfter=No|Gloss=|Translit=
18	ประเมิน	ประเมิน	VERB	_	_	17	acl	_	Gloss=evaluate|Translit=
19	แต่	แต่	CCONJ	_	_	20	cc	_	SpaceAfter=No|Gloss=but|Translit=
20	ใช้	ใช้	VERB	_	_	14	conj	_	SpaceAfter=No|Gloss=use|Translit=
21	หลัก	หลัก	NOUN	_	_	20	obj	_	SpaceAfter=No|Gloss=|Translit=
22	ดุลยพินิจ	ดุลยพินิจ	NOUN	_	_	21	nmod	_	Gloss=|Translit=

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 csubj	color:blue
1	ถาม	ถาม	VERB	_	_	0	root	_	SpaceAfter=No|Gloss=ask|Translit=thǎːm
2	ย้ำ	ย้ำ	ADV	_	_	1	advmod	_	SpaceAfter=No|Gloss=repeat|Translit=jám
3	ว่า	ว่า	SCONJ	_	_	6	mark	_	Gloss=that(COMP)|Translit=wâː
4	หลัง	หลัง	ADP	_	_	5	mark	_	SpaceAfter=No|Gloss=after|Translit=lǎŋ
5	เลือกตั้ง	เลือกตั้ง	VERB	_	_	6	advcl	_	SpaceAfter=No|Gloss=vote|Translit=lɯ̂ak-tâŋ
6	ยืนยัน	ยืนยัน	VERB	_	_	1	ccomp	_	SpaceAfter=No|Gloss=insist|Translit=jɯːn-jan
7	ว่า	ว่า	SCONJ	_	_	12	mark	_	SpaceAfter=No|CorrectSpaceAfter=Yes|Gloss=that(COMP)|Translit=wâː
8	จะ	จะ	ADV	_	_	10	advmod	_	SpaceAfter=No|Gloss=will(express the future time)|Translit=càʔ
9	ไม่	ไม่	ADV	_	_	10	advmod	_	SpaceAfter=No|Gloss=not|Translit=mâj
10	จับ	จับ	VERB	_	_	12	csubj	_	SpaceAfter=No|Gloss=hold|Translit=càp
11	มือ	มือ	NOUN	_	_	10	obj	_	SpaceAfter=No|Gloss=hands|Translit=mɯː
12	ใช่	ใช่	VERB	_	_	6	ccomp	_	SpaceAfter=No|Gloss=correct|Translit=châj
13	หรือ	หรือ	CCONJ	_	_	14	cc	_	SpaceAfter=No|Gloss=or|Translit=rɯ̌ː
14	ไม่	ไม่	ADV	_	_	12	conj	_	Gloss=not|Translit=mâj

~~~


