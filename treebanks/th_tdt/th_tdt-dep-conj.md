---
layout: base
title:  'Statistics of conj in UD_Thai-TDT'
udver: '2'
---

## Treebank Statistics: UD_Thai-TDT: Relations: `conj`

This relation is universal.

214 nodes (4%) are attached to their parents as `conj`.

214 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.5981308411215.

The following 10 pairs of parts of speech are connected with `conj`: <tt><a href="th_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tdt-pos-VERB.html">VERB</a></tt> (86; 40% instances), <tt><a href="th_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_tdt-pos-NOUN.html">NOUN</a></tt> (77; 36% instances), <tt><a href="th_tdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="th_tdt-pos-PROPN.html">PROPN</a></tt> (16; 7% instances), <tt><a href="th_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tdt-pos-ADV.html">ADV</a></tt> (11; 5% instances), <tt><a href="th_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_tdt-pos-VERB.html">VERB</a></tt> (9; 4% instances), <tt><a href="th_tdt-pos-NUM.html">NUM</a></tt>-<tt><a href="th_tdt-pos-NUM.html">NUM</a></tt> (8; 4% instances), <tt><a href="th_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tdt-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="th_tdt-pos-NUM.html">NUM</a></tt>-<tt><a href="th_tdt-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="th_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_tdt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="th_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="th_tdt-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 conj	color:blue
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
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 conj	color:blue
1	เป็น	เป็น	AUX	_	_	2	cop	_	SpaceAfter=No|Gloss=BE|Translit=pen
2	คน	คน	NOUN	_	_	0	root	_	SpaceAfter=No|Gloss=person|Translit=khon
3	ที่	ที่	PRON	_	PronType=Rel	4	nsubj	_	SpaceAfter=No|Gloss=that(REL)|Translit=thîː
4	ทุ่มเท	ทุ่มเท	VERB	_	_	2	acl:relcl	_	SpaceAfter=No|Gloss=dedicate|Translit=thûm-theː
5	ทำงาน	ทำงาน	VERB	_	_	4	compound:svc	_	SpaceAfter=No|Gloss=work|Translit=tham-ŋaːn
6	เรียก	เรียก	VERB	_	_	4	conj	_	SpaceAfter=No|Gloss=call|Translit=rîak
7	ใช้	ใช้	VERB	_	_	6	compound:svc	_	SpaceAfter=No|Gloss=use|Translit=cháj
8	ได้	ได้	VERB	_	_	6	advcl	_	SpaceAfter=No|Gloss=get(express potential or permission)|Translit=dâj
9	ทุก	ทุก	DET	_	PronType=Tot	10	det	_	SpaceAfter=No|Gloss=every|Translit=thúk
10	พื้นที่	พื้นที่	NOUN	_	NounType=Clf	4	obl	_	SpaceAfter=No|Gloss=space|Translit=phɯ́ː-thîː
11	ทุก	ทุก	DET	_	PronType=Tot	12	det	_	SpaceAfter=No|Gloss=every|Translit=thúk
12	เวลา	เวลา	NOUN	_	NounType=Clf	10	conj	_	Gloss=time|Translit=weː-laː

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 conj	color:blue
1	"	"	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	ตะวัน	ตะวัน	PROPN	_	_	6	nsubj	_	SpaceAfter=No|Gloss=Tawan|Translit=
3	-	-	SYM	_	_	4	cc	_	SpaceAfter=No
4	แบม	แบม	PROPN	_	_	2	conj	_	SpaceAfter=No|Gloss=Bam|Translit=
5	"	"	PUNCT	_	_	2	punct	_	_
6	ขอ	ขอ	VERB	_	_	0	root	_	SpaceAfter=No|Gloss=ask|Translit=
7	รักษา	รักษา	VERB	_	_	6	xcomp	_	SpaceAfter=No|Gloss=|Translit=
8	ชีวิต	ชีวิต	NOUN	_	_	7	obj	_	SpaceAfter=No|Gloss=life|Translit=
9	เพื่อ	เพื่อ	ADP	_	_	10	mark	_	SpaceAfter=No|Gloss=for|Translit=
10	ต่อสู้	ต่อสู้	VERB	_	_	7	advcl	_	SpaceAfter=No|Gloss=fight|Translit=
11	ทาง	ทาง	NOUN	_	_	10	obl	_	SpaceAfter=No|Gloss=|Translit=
12	การเมือง	การเมือง	NOUN	_	_	11	nmod	_	SpaceAfter=No|Gloss=|Translit=
13	ต่อ	ต่อ	VERB	_	_	10	compound:svc	_	Gloss=|Translit=

~~~


