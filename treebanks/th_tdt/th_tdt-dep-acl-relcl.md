---
layout: base
title:  'Statistics of acl:relcl in UD_Thai-TDT'
udver: '2'
---

## Treebank Statistics: UD_Thai-TDT: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="th_tdt-dep-acl.html">acl</a></tt>.

118 nodes (2%) are attached to their parents as `acl:relcl`.

118 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.15254237288136.

The following 5 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="th_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_tdt-pos-VERB.html">VERB</a></tt> (107; 91% instances), <tt><a href="th_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_tdt-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="th_tdt-pos-NUM.html">NUM</a></tt>-<tt><a href="th_tdt-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="th_tdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="th_tdt-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="th_tdt-pos-PRON.html">PRON</a></tt>-<tt><a href="th_tdt-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl:relcl	color:blue
1	อ้อน	อ้อน	VERB	_	_	0	root	_	SpaceAfter=No|Gloss=beg|Translit=ʔɔ̂ːn
2	คน	คน	NOUN	_	_	1	obj	_	SpaceAfter=No|Gloss=person|Translit=khon
3	ดอนเมือง	ดอนเมือง	PROPN	_	_	2	nmod	_	Gloss=Don Mueang|Translit=dɔːn-mɯaŋ
4	เลือก	เลือก	VERB	_	_	1	xcomp	_	SpaceAfter=No|Gloss=choose|Translit=lɯ̂ak
5	เก่ง	เก่ง	PROPN	_	_	4	obj	_	Gloss=Keng|Translit=kèŋ
6	คน	คน	NOUN	_	_	5	nmod	_	SpaceAfter=No|Gloss=person|Translit=khon
7	ที่	ที่	PRON	_	PronType=Rel	9	nsubj	_	SpaceAfter=No|Gloss=that(REL)|Translit=thîː
8	ไม่	ไม่	ADV	_	_	9	advmod	_	SpaceAfter=No|Gloss=not|Translit=mâj
9	เคย	เคย	VERB	_	_	6	acl:relcl	_	SpaceAfter=No|Gloss=ever|Translit=khɤːj
10	ทิ้ง	ทิ้ง	VERB	_	_	9	xcomp	_	SpaceAfter=No|Gloss=leave|Translit=thíŋ
11	ชาว	ชาว	NOUN	_	_	10	obj	_	SpaceAfter=No|Gloss=folk|Translit=chaːw
12	ดอนเมือง	ดอนเมือง	PROPN	_	_	11	nmod	_	Gloss=Don Mueang|Translit=dɔːn-mɯaŋ

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 20 acl:relcl	color:blue
1	เจตนารมณ์	เจตนารมณ์	NOUN	_	_	2	dislocated	_	SpaceAfter=No|Gloss=|Translit=
2	ต้องการ	ต้องการ	VERB	_	_	0	root	_	SpaceAfter=No|Gloss=want|Translit=
3	ให้	ให้	VERB	_	_	2	xcomp	_	SpaceAfter=No|Gloss=give|Translit=
4	คน	คน	NOUN	_	_	3	obj	_	SpaceAfter=No|Gloss=person|Translit=
5	ทำงาน	ทำงาน	VERB	_	_	4	acl	_	SpaceAfter=No|Gloss=work|Translit=
6	ได้	ได้	VERB	_	_	3	compound:svc	_	SpaceAfter=No|Gloss=|Translit=
7	รับ	รับ	VERB	_	_	6	xcomp	_	SpaceAfter=No|Gloss=receive|Translit=
8	ขวัญ	ขวัญ	NOUN	_	_	7	obj	_	SpaceAfter=No|Gloss=|Translit=
9	กำลังใจ	กำลังใจ	NOUN	_	_	8	conj	_	Gloss=|Translit=
10	ใน	ใน	ADP	_	_	11	case	_	SpaceAfter=No|Gloss=in|Translit=
11	การ	การ	NOUN	_	NounType=Nmlz	7	obl	_	SpaceAfter=No|Gloss=|Translit=
12	ที่	ที่	PRON	_	PronType=Rel	13	nsubj	_	SpaceAfter=No|Gloss=that(REL)|Translit=
13	ได้	ได้	VERB	_	_	11	acl:relcl	_	SpaceAfter=No|Gloss=|Translit=
14	พิจารณา	พิจารณา	VERB	_	_	13	xcomp	_	SpaceAfter=No|Gloss=consider|Translit=
15	ความรู้	ความรู้	NOUN	_	_	14	obj	_	SpaceAfter=No|Gloss=knowledge|Translit=
16	ความ	ความ	NOUN	_	NounType=Nmlz	15	conj	_	SpaceAfter=No|Gloss=|Translit=
17	สามารถ	สามารถ	VERB	_	_	16	acl	_	Gloss=|Translit=
18	ซึ่ง	ซึ่ง	PRON	_	PronType=Rel	20	nsubj	_	SpaceAfter=No|Gloss=that(REL)|Translit=
19	เป็น	เป็น	AUX	_	_	20	cop	_	SpaceAfter=No|Gloss=be|Translit=
20	ประโยชน์	ประโยชน์	NOUN	_	_	15	acl:relcl	_	SpaceAfter=No|Gloss=|Translit=
21	ต่อ	ต่อ	ADP	_	_	22	case	_	SpaceAfter=No|Gloss=to|Translit=
22	สำนักงาน	สำนักงาน	NOUN	_	_	20	obj	_	SpaceAfter=No|Gloss=|Translit=
23	ตำรวจ	ตำรวจ	NOUN	_	_	22	nmod	_	SpaceAfter=No|Gloss=policeman|Translit=
24	แห่ง	แห่ง	ADP	_	_	25	case	_	SpaceAfter=No|Gloss=of|Translit=
25	ชาติ	ชาติ	NOUN	_	_	22	nmod	_	Gloss=nation|Translit=

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 27 acl:relcl	color:blue
1	จึง	จึง	ADV	_	_	2	advmod	_	SpaceAfter=No|Gloss=thus|Translit=cɯŋ
2	มั่นใจ	มั่นใจ	VERB	_	_	0	root	_	SpaceAfter=No|Gloss=confident|Translit=mân-caj
3	ว่า	ว่า	SCONJ	_	_	7	mark	_	SpaceAfter=No|CorrectSpaceAfter=Yes|Gloss=that(COMP)|Translit=wâː
4	นาย	นาย	NOUN	_	_	7	nsubj	_	SpaceAfter=No|Gloss=Mister|Translit=naːj
5	การุณ	การุณ	PROPN	_	_	4	nmod	_	CorrectSpaceAfter=No|Gloss=Karun|Translit=kaː-run
6	จะ	จะ	ADV	_	_	7	advmod	_	SpaceAfter=No|Gloss=will(express the future time)|Translit=càʔ
7	สามารถ	สามารถ	VERB	_	_	2	ccomp	_	SpaceAfter=No|Gloss=be able to|Translit=sǎː-mâːt
8	ปัก	ปัก	VERB	_	_	7	xcomp	_	SpaceAfter=No|Gloss=pin|Translit=pàk
9	ธง	ธง	NOUN	_	_	8	obj	_	SpaceAfter=No|Gloss=flag|Translit=thoŋ
10	ใน	ใน	ADP	_	_	11	case	_	SpaceAfter=No|Gloss=in|Translit=naj
11	เขต	เขต	NOUN	_	_	8	obl	_	SpaceAfter=No|Gloss=district|Translit=khèːt
12	ดอนเมือง	ดอนเมือง	PROPN	_	_	11	nmod	_	SpaceAfter=No|Gloss=hill|Translit=dɔːn-mɯaŋ
13	ได้	ได้	VERB	_	_	8	advcl	_	SpaceAfter=No|Gloss=get(express potential or permission)|Translit=dâj
14	อีก	อีก	DET	_	PronType=Ind	15	det	_	SpaceAfter=No|Gloss=another|Translit=ʔìːk
15	ครั้ง	ครั้ง	NOUN	_	NounType=Clf	8	obl	_	Gloss=time|Translit=khráŋ
16	และ	และ	CCONJ	_	_	20	cc	_	SpaceAfter=No|Gloss=and|Translit=lɛ́ʔ
17	จะ	จะ	ADV	_	_	20	advmod	_	SpaceAfter=No|Gloss=will(express the future time)|Translit=càʔ
18	เป็น	เป็น	AUX	_	_	20	cop	_	SpaceAfter=No|Gloss=BE|Translit=pen
19	อีก	อีก	DET	_	PronType=Ind	20	det	_	SpaceAfter=No|Gloss=another|Translit=ʔìːk
20	หนึ่ง	หนึ่ง	NUM	_	_	7	conj	_	SpaceAfter=No|Gloss=one|Translit=nɯ̀ŋ
21	กำลัง	กำลัง	NOUN	_	NounType=Clf	20	clf	_	SpaceAfter=No|Gloss=power|Translit=kam-laŋ
22	ของ	ของ	ADP	_	_	24	case	_	SpaceAfter=No|Gloss=of|Translit=khɔ̌ːŋ
23	ไทย	ไทย	PROPN	_	_	24	nsubj	_	SpaceAfter=No|Gloss=Thai|Translit=thaj
24	สร้าง	สร้าง	VERB	_	ExtPos=PROPN	20	nmod	_	SpaceAfter=No|Gloss=build|Translit=sâːŋ
25	ไทย	ไทย	PROPN	_	_	24	obj	_	SpaceAfter=No|Gloss=Thai|Translit=thaj
26	ที่	ที่	PRON	_	PronType=Rel	27	nsubj	_	SpaceAfter=No|Gloss=that(REL)|Translit=thîː
27	ช่วย	ช่วย	VERB	_	_	20	acl:relcl	_	SpaceAfter=No|Gloss=help|Translit=chûaj
28	กัน	กัน	ADV	_	_	27	advmod	_	SpaceAfter=No|Gloss=together|Translit=kan
29	สร้าง	สร้าง	VERB	_	_	27	xcomp	_	SpaceAfter=No|Gloss=build|Translit=sâːŋ
30	ทาง	ทาง	NOUN	_	_	29	obj	_	SpaceAfter=No|Gloss=path|Translit=thaːŋ
31	รอด	รอด	VERB	_	_	30	acl	_	SpaceAfter=No|Gloss=survive|Translit=rɔ̂ːt
32	ให้	ให้	VERB	_	_	29	compound:svc	_	SpaceAfter=No|Gloss=give|Translit=hâj
33	กับ	กับ	ADP	_	_	34	case	_	SpaceAfter=No|Gloss=with|Translit=kàp
34	ประเทศ	ประเทศ	NOUN	_	_	32	obl	_	SpaceAfter=No|Gloss=country|Translit=pràʔ-thêt
35	ไทย	ไทย	PROPN	_	_	34	nmod	_	SpaceAfter=No|Gloss=Thai|Translit=thaj
36	ได้	ได้	VERB	_	_	29	advcl	_	SpaceAfter=No|Gloss=get(express potential or permission)|Translit=dâj

~~~


