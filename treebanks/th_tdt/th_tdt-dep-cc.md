---
layout: base
title:  'Statistics of cc in UD_Thai-TDT'
udver: '2'
---

## Treebank Statistics: UD_Thai-TDT: Relations: `cc`

This relation is universal.

125 nodes (2%) are attached to their parents as `cc`.

125 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.344.

The following 11 pairs of parts of speech are connected with `cc`: <tt><a href="th_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_tdt-pos-CCONJ.html">CCONJ</a></tt> (48; 38% instances), <tt><a href="th_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tdt-pos-CCONJ.html">CCONJ</a></tt> (43; 34% instances), <tt><a href="th_tdt-pos-ADV.html">ADV</a></tt>-<tt><a href="th_tdt-pos-CCONJ.html">CCONJ</a></tt> (11; 9% instances), <tt><a href="th_tdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="th_tdt-pos-SYM.html">SYM</a></tt> (8; 6% instances), <tt><a href="th_tdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="th_tdt-pos-CCONJ.html">CCONJ</a></tt> (6; 5% instances), <tt><a href="th_tdt-pos-NUM.html">NUM</a></tt>-<tt><a href="th_tdt-pos-CCONJ.html">CCONJ</a></tt> (4; 3% instances), <tt><a href="th_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_tdt-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="th_tdt-pos-NUM.html">NUM</a></tt>-<tt><a href="th_tdt-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="th_tdt-pos-PRON.html">PRON</a></tt>-<tt><a href="th_tdt-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="th_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tdt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="th_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tdt-pos-SYM.html">SYM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc	color:blue
1	ตน	ตน	PRON	_	Person=1|PronType=Prs	2	nsubj	_	SpaceAfter=No|Gloss=I|Translit=ton
2	มี	มี	VERB	_	_	0	root	_	SpaceAfter=No|Gloss=have|Translit=miː
3	หัวหน้า	หัวหน้า	NOUN	_	_	2	obl:arg	_	SpaceAfter=No|Gloss=chief|Translit=hùa-nâː
4	พรรค	พรรค	NOUN	_	_	3	nmod	_	CorrectSpaceAfter=No|Gloss=party|Translit=phák
5	และ	และ	CCONJ	_	_	6	cc	_	SpaceAfter=No|Gloss=and|Translit=lɛ́ʔ
6	แกนนำ	แกนนำ	NOUN	_	_	3	conj	_	SpaceAfter=No|Gloss=leader|Translit=kɛːn-nam
7	พรรค	พรรค	NOUN	_	_	6	nmod	_	SpaceAfter=No|Gloss=party|Translit=phák
8	คน	คน	NOUN	_	_	6	clf	_	SpaceAfter=No|Gloss=person|Translit=khon
9	อื่น	อื่น	ADJ	_	_	6	amod	_	SpaceAfter=No|CorrectSpaceAfter=Yes|Gloss=other|Translit=ʔɯ̀ːn
10	ๆ	ๆ	SYM	_	ExtPos=ADJ	9	compound:redup	_	Gloss=other|Translit=ʔɯ̀ːn
11	เป็น	เป็น	AUX	_	_	12	cop	_	SpaceAfter=No|Gloss=BE|Translit=pen
12	แรง	แรง	NOUN	_	_	3	acl	_	SpaceAfter=No|Gloss=power|Translit=rɛːŋ
13	บัลดาลใจ	บันดาลใจ	VERB	_	Typo=Yes	12	acl	_	CorrectForm=บันดาล|Gloss=inspire|Translit=ban-daːn-jaj

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc	color:blue
1	เห็น	เห็น	VERB	_	_	0	root	_	SpaceAfter=No|Gloss=see|Translit=hěn
2	ปัญหา	ปัญหา	NOUN	_	_	1	obj	_	SpaceAfter=No|CorrectSpaceAfter=Yes|Gloss=problem|Translit=pan-hǎː
3	เห็น	เห็น	VERB	_	_	1	conj	_	SpaceAfter=No|Gloss=see|Translit=hěn
4	ความ	ความ	NOUN	_	NounType=Nmlz	3	obj	_	SpaceAfter=No|Gloss=condition(nominalizer)|Translit=khwaːm
5	ทุกข์	ทุกข์	VERB	_	_	4	acl	_	SpaceAfter=No|Gloss=sufferring|Translit=thúk
6	ยาก	ยาก	VERB	_	_	5	flat	_	SpaceAfter=No|CorrectSpaceAfter=Yes|Gloss=difficult|Translit=jâːk
7	และ	และ	CCONJ	_	_	8	cc	_	SpaceAfter=No|Gloss=and|Translit=lɛ́ʔ
8	คอย	คอย	VERB	_	_	1	conj	_	SpaceAfter=No|Gloss=wait|Translit=khɔːj
9	ดูแล	ดูแล	VERB	_	_	8	xcomp	_	SpaceAfter=No|Gloss=look after|Translit=duː-lɛː
10	ช่วยเหลือ	ช่วยเหลือ	VERB	_	_	9	conj	_	SpaceAfter=No|Gloss=help|Translit=chûaj-lɯa
11	กัน	กัน	ADV	_	_	9	advmod	_	SpaceAfter=No|Gloss=together|Translit=kan
12	มา	มา	ADV	_	_	9	advmod	_	SpaceAfter=No|Gloss=come(express aspect)|Translit=maː
13	ตลอด	ตลอด	VERB	_	_	9	advcl	_	Gloss=throughout|Translit=tà-lɔːt

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 cc	color:blue
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


