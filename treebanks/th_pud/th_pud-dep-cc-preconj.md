---
layout: base
title:  'Statistics of cc:preconj in UD_Thai-PUD'
udver: '2'
---

## Treebank Statistics: UD_Thai-PUD: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="th_pud-dep-cc.html">cc</a></tt>.

20 nodes (0%) are attached to their parents as `cc:preconj`.

20 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.85.

The following 8 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-CCONJ.html">CCONJ</a></tt> (9; 45% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-ADP.html">ADP</a></tt> (3; 15% instances), <tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="th_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 10% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 10% instances), <tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="th_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 5% instances), <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-ADP.html">ADP</a></tt> (1; 5% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-DET.html">DET</a></tt> (1; 5% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-PART.html">PART</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc:preconj	color:blue
1	ทั้ง	ทั้ง	CCONJ	DT	_	2	cc:preconj	_	SpaceAfter=No|Translit=dʰâ²ŋ|LTranslit=dʰâ²ŋ
2	เวลา	เวลา	NOUN	NN	_	9	nsubj	_	SpaceAfter=No|Translit=wélá|LTranslit=wélá
3	และ	และ	CCONJ	CC	_	4	cc	_	SpaceAfter=No|Translit=læ|LTranslit=læ
4	ลำดับ	ลำดับ	NOUN	NN	_	2	conj	_	SpaceAfter=No|Translit=lãdâb|LTranslit=lãdâb
5	เหตุการณ์	เหตุการณ์	NOUN	NN	_	4	compound	_	SpaceAfter=No|Translit=hétukárṇ|LTranslit=hétukárṇ
6	ของ	ของ	ADP	IN	_	7	case	_	SpaceAfter=No|Translit=kʰɔːŋ|LTranslit=kʰɔːŋ
7	สถานการณ์	สถานการณ์	NOUN	NN	_	2	nmod:poss	_	SpaceAfter=No|Translit=stʰánkárṇ|LTranslit=stʰánkárṇ
8	นี้	นี้	DET	DT	_	7	det	_	SpaceAfter=No|Translit=ní²|LTranslit=ní²
9	มี	มี	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=mí|LTranslit=mí
10	การถกเถียง	การถกเถียง	VERB	VV	_	9	obj	_	SpaceAfter=No|Translit=kártʰktʰíáŋ|LTranslit=kártʰktʰíáŋ
11	กัน	กัน	PRON	PRP	_	10	obl	_	SpaceAfter=No|Translit=kân|LTranslit=kân
12	อย่างเอาจริงเอาจัง	อย่างเอาจริงเอาจัง	ADJ	JJ	_	10	advmod	_	Translit='yá¹ŋ'aočriŋ'aočâŋ|LTranslit='yá¹ŋ'aočriŋ'aočâŋ

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 cc:preconj	color:blue
1	แม้	แม้	ADP	IN	_	5	cc:preconj	_	SpaceAfter=No|Translit=mǽ²|LTranslit=mǽ²
2	ว่า	ว่า	ADP	IN	_	1	fixed	_	SpaceAfter=No|Translit=wá¹|LTranslit=wá¹
3	มัน	มัน	PRON	PRP	Person=3	5	nsubj	_	SpaceAfter=No|Translit=mân|LTranslit=mân
4	จะ	จะ	AUX	MD	_	5	aux	_	SpaceAfter=No|Translit=ča|LTranslit=ča
5	ดู	ดู	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=dú|LTranslit=dú
6	น่าประหลาดใจ	น่าประหลาดใจ	VERB	VV	_	5	xcomp	_	Translit=ná¹prahládčai|LTranslit=ná¹prahládčai
7	แต่	แต่	CCONJ	CC	_	17	cc	_	SpaceAfter=No|Translit=tǽ¹|LTranslit=tǽ¹
8	จริง	จริง	ADV	RB	_	17	advmod	_	SpaceAfter=No|Translit=čriŋ|LTranslit=čriŋ
9	ๆ	ๆ	SYM	SYM	_	8	dep	_	Translit=|LTranslit=
10	แล้ว	แล้ว	ADV	RB	_	8	advmod	_	SpaceAfter=No|Translit=lǽ²w|LTranslit=lǽ²w
11	แม้	แม้	ADP	IN	_	13	case	_	SpaceAfter=No|Translit=mǽ²|LTranslit=mǽ²
12	แต่	แต่	CCONJ	CC	_	11	fixed	_	SpaceAfter=No|Translit=tǽ¹|LTranslit=tǽ¹
13	เมฆ	เมฆ	NOUN	NN	_	17	obl	_	SpaceAfter=No|Translit=méqʰ|LTranslit=méqʰ
14	ฝน	ฝน	NOUN	NN	_	13	compound	_	SpaceAfter=No|Translit=fʰn|LTranslit=fʰn
15	กรด	กรด	NOUN	NN	_	13	compound	_	SpaceAfter=No|Translit=krd|LTranslit=krd
16	ก็	ก็	ADV	RB	_	17	advmod	_	SpaceAfter=No|Translit=kɔ|LTranslit=kɔ
17	ยัง	ยัง	VERB	AS	Aspect=Prog	6	conj	_	SpaceAfter=No|Translit=yâŋ|LTranslit=yâŋ
18	มี	มี	VERB	VV	_	17	xcomp	_	SpaceAfter=No|Translit=mí|LTranslit=mí
19	สิ่ง	สิ่ง	NOUN	NN	_	17	obj	_	SpaceAfter=No|Translit=si¹ŋ|LTranslit=si¹ŋ
20	ดี	ดี	ADJ	JJ	_	19	amod	_	SpaceAfter=No|Translit=dí|LTranslit=dí
21	ๆ	ๆ	SYM	SYM	_	20	dep	_	Translit=|LTranslit=
22	ซ่อน	ซ่อน	VERB	VV	_	23	xcomp	_	SpaceAfter=No|Translit=c¹'n|LTranslit=c¹'n
23	อยู่	อยู่	VERB	AS	Aspect=Prog	18	xcomp	_	Translit='yú¹|LTranslit='yú¹

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 22 cc:preconj	color:blue
1	ใน	ใน	ADP	IN	_	2	case	_	SpaceAfter=No|Translit=nai|LTranslit=nai
2	การกล่าว	การกล่าว	VERB	VV	_	20	xcomp	_	SpaceAfter=No|Translit=kárklá¹w|LTranslit=kárklá¹w
3	อย่างสั้น	อย่างสั้น	ADJ	JJ	_	2	advmod	_	SpaceAfter=No|Translit='yá¹ŋsâ²n|LTranslit='yá¹ŋsâ²n
4	ๆ	ๆ	SYM	SYM	_	3	dep	_	Translit=|LTranslit=
5	ต่อ	ต่อ	ADP	IN	_	6	case	_	SpaceAfter=No|Translit=t¹'|LTranslit=t¹'
6	คณะ	คณะ	NOUN	NN	_	2	obl	_	SpaceAfter=No|Translit=gʰṇa|LTranslit=gʰṇa
7	รัฐมนตรี	รัฐมนตรี	NOUN	NN	_	6	compound	_	SpaceAfter=No|Translit=râṭʰmntrí|LTranslit=râṭʰmntrí
8	หลัง	หลัง	ADP	IN	_	15	mark	_	SpaceAfter=No|Translit=hlâŋ|LTranslit=hlâŋ
9	จาก	จาก	ADP	IN	_	8	fixed	_	SpaceAfter=No|Translit=čák|LTranslit=čák
10	ที่	ที่	ADP	IN	_	8	fixed	_	SpaceAfter=No|Translit=dʰí¹|LTranslit=dʰí¹
11	กอง	กอง	NOUN	NN	_	15	nsubj	_	SpaceAfter=No|Translit=kɔːŋ|LTranslit=kɔːŋ
12	กำลัง	กำลัง	NOUN	NN	_	11	compound	_	SpaceAfter=No|Translit=kãlâŋ|LTranslit=kãlâŋ
13	เยอรมัน	เยอรมัน	PROPN	NNP	_	11	compound	_	SpaceAfter=No|Translit=yóérmân|LTranslit=yóérmân
14	ได้	ได้	AUX	AS	Aspect=Perf	15	aux	_	SpaceAfter=No|Translit=dai²|LTranslit=dai²
15	ข้าม	ข้าม	VERB	VV	_	2	advcl	_	SpaceAfter=No|Translit=kʰá²m|LTranslit=kʰá²m
16	ชาย	ชาย	NOUN	NN	_	15	obj	_	SpaceAfter=No|Translit=ćʰáy|LTranslit=ćʰáy
17	แดน	แดน	NOUN	NN	_	16	compound	_	SpaceAfter=No|Translit=dǽn|LTranslit=dǽn
18	แล้ว	แล้ว	AUX	AS	Aspect=Perf	15	aux	_	Translit=lǽ²w|LTranslit=lǽ²w
19	แชมเบอร์เลน	แชมเบอร์เลน	PROPN	NNP	_	20	nsubj	_	SpaceAfter=No|Translit=ćʰǽmbóérlén|LTranslit=ćʰǽmbóérlén
20	กล่าว	กล่าว	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=klá¹w|LTranslit=klá¹w
21	ตำหนิ	ตำหนิ	VERB	VV	_	20	xcomp	_	SpaceAfter=No|Translit=tãhni|LTranslit=tãhni
22	ทั้ง	ทั้ง	CCONJ	DT	_	23	cc:preconj	_	SpaceAfter=No|Translit=dʰâ²ŋ|LTranslit=dʰâ²ŋ
23	เยอรมนี	เยอรมนี	PROPN	NNP	_	21	obj	_	SpaceAfter=No|Translit=yóérmní|LTranslit=yóérmní
24	และ	และ	CCONJ	CC	_	25	cc	_	SpaceAfter=No|Translit=læ|LTranslit=læ
25	ออสเตรีย	ออสเตรีย	PROPN	NNP	_	23	conj	_	Translit='ɔːstéríy|LTranslit='ɔːstéríy

~~~


