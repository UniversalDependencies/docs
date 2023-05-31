---
layout: base
title:  'Statistics of nummod in UD_Thai-PUD'
udver: '2'
---

## Treebank Statistics: UD_Thai-PUD: Relations: `nummod`

This relation is universal.

372 nodes (2%) are attached to their parents as `nummod`.

249 instances of `nummod` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.06182795698925.

The following 5 pairs of parts of speech are connected with `nummod`: <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-NUM.html">NUM</a></tt> (309; 83% instances), <tt><a href="th_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="th_pud-pos-NUM.html">NUM</a></tt> (38; 10% instances), <tt><a href="th_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="th_pud-pos-NUM.html">NUM</a></tt> (17; 5% instances), <tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="th_pud-pos-NUM.html">NUM</a></tt> (6; 2% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-NUM.html">NUM</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	5,000	_	NUM	CD	_	2	nummod	_	Translit=5,000
2	ดอลลาร์	_	NOUN	NNB	_	0	root	_	SpaceAfter=No|Translit=dɔːllár
3	ต่อ	_	ADP	IN	_	4	case	_	SpaceAfter=No|Translit=t¹'
4	คน	_	NOUN	NN	_	2	nmod	_	Translit=gʰn
5	สูง	_	ADJ	JJ	_	2	conj	_	SpaceAfter=No|Translit=súŋ
6	สุด	_	ADV	RB	_	5	advmod	_	SpaceAfter=No|Translit=sud
7	ตาม	_	ADP	IN	_	10	case	_	SpaceAfter=No|Translit=tám
8	ที่	_	DET	WDT	_	10	nsubj	_	SpaceAfter=No|Translit=dʰí¹
9	ได้รับ	_	AUX	MD	Voice=Pass	10	aux	_	SpaceAfter=No|Translit=dai²râb
10	อนุญาต	_	VERB	VV	_	5	xcomp	_	Translit='nuŷát

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nummod	color:blue
1	นักษัตร	_	NOUN	NN	_	5	nsubj	_	SpaceAfter=No|Translit=nâkšâtr
2	ของ	_	ADP	IN	_	3	case	_	SpaceAfter=No|Translit=kʰɔːŋ
3	เธอ	_	PRON	PRP	Person=3	1	nmod:poss	_	SpaceAfter=No|Translit=ḏʰóé
4	คือ	_	AUX	VC	_	5	cop	_	SpaceAfter=No|Translit=gʰű'
5	วอก	_	NOUN	NN	_	0	root	_	Proper=True|Translit=wɔːk
6	และ	_	CCONJ	CC	_	16	cc	_	SpaceAfter=No|Translit=læ
7	ปี	_	NOUN	NN	_	16	nsubj	_	SpaceAfter=No|Translit=pí
8	แซยิด	_	NOUN	NN	_	7	compound	_	SpaceAfter=No|Translit=cǽyid
9	ครบ	_	VERB	VV	_	8	acl	_	SpaceAfter=No|Translit=gʰrb
10	หก	_	NUM	CD	_	11	nummod	_	SpaceAfter=No|Translit=hk
11	สิบ	_	NUM	CD	_	12	nummod	_	SpaceAfter=No|Translit=sib
12	ปี	_	NOUN	NN	_	9	obj	_	SpaceAfter=No|Translit=pí
13	ของ	_	ADP	IN	_	14	case	_	SpaceAfter=No|Translit=kʰɔːŋ
14	เธอ	_	PRON	PRP	Person=3	7	nmod:poss	_	SpaceAfter=No|Translit=ḏʰóé
15	คือ	_	AUX	VC	_	16	cop	_	SpaceAfter=No|Translit=gʰű'
16	ปี	_	NOUN	NN	_	5	conj	_	Translit=pí
17	1992	_	NUM	CD	_	16	appos	_	Translit=1992

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 nummod	color:blue
1	แหล่ง	_	NOUN	NN	_	8	nsubj	_	SpaceAfter=No|Translit=hǽl¹ŋ
2	ข่าว	_	NOUN	NN	_	1	compound	_	SpaceAfter=No|Translit=kʰá¹w
3	ที่	_	DET	WDT	_	5	nsubj	_	SpaceAfter=No|Translit=dʰí¹
4	เป็น	_	AUX	VC	_	5	cop	_	SpaceAfter=No|Translit=pen
5	ที่	_	NOUN	NN	_	1	acl:relcl	_	SpaceAfter=No|Translit=dʰí¹
6	ปรึกษา	_	VERB	VV	_	5	acl	_	SpaceAfter=No|Translit=prükšá
7	ได้	_	AUX	AS	Aspect=Perf	8	aux	_	SpaceAfter=No|Translit=dai²
8	กล่าว	_	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=klá¹w
9	ว่า	_	ADP	IN	_	13	mark	_	SpaceAfter=No|Translit=wá¹
10	มัน	_	PRON	PRP	Person=3	13	nsubj	_	SpaceAfter=No|Translit=mân
11	คือ	_	AUX	VC	_	13	cop	_	Translit=gʰű'
12	"	_	PUNCT	``	_	13	punct	_	SpaceAfter=No|Translit="
13	คอสพีดัล	_	PROPN	NNP	_	8	ccomp	_	Translit=gʰɔːsbʰídâl
14	100	_	NUM	CD	_	15	nummod	_	SpaceAfter=No|Translit=100
15	%	_	SYM	SYM	_	13	clf	_	SpaceAfter=No|Translit=%
16	"	_	PUNCT	''	_	13	punct	_	Translit="

~~~


