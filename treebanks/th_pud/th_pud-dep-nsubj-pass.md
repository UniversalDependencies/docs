---
layout: base
title:  'Statistics of nsubj:pass in UD_Thai-PUD'
udver: '2'
---

## Treebank Statistics: UD_Thai-PUD: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="th_pud-dep-nsubj.html">nsubj</a></tt>.

70 nodes (0%) are attached to their parents as `nsubj:pass`.

70 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.75714285714286.

The following 5 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (42; 60% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt> (14; 20% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-PRON.html">PRON</a></tt> (7; 10% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-DET.html">DET</a></tt> (6; 9% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 7 nsubj:pass	color:blue
1	ใน	_	ADP	IN	_	2	case	_	SpaceAfter=No
2	ยุค	_	NOUN	NN	_	12	obl	_	SpaceAfter=No
3	หลัง	_	ADP	IN	_	4	case	_	SpaceAfter=No
4	คลาสสิค	_	NOUN	NN	_	2	nmod	_	SpaceAfter=No
5	ใน	_	ADP	IN	_	6	case	_	SpaceAfter=No
6	ยูกาตัง	_	PROPN	NNP	_	2	nmod	_	_
7	ระบบ	_	NOUN	NN	_	12	nsubj:pass	_	SpaceAfter=No
8	ที่	_	NOUN	NN	_	7	compound	_	SpaceAfter=No
9	สาม	_	NUM	CD	_	8	nummod	_	SpaceAfter=No
10	ได้	_	AUX	AS	Aspect=Perf	12	aux	_	SpaceAfter=No
11	ถูก	_	AUX	MD	Voice=Pass	12	aux:pass	_	SpaceAfter=No
12	นำ	_	VERB	VV	_	0	root	_	SpaceAfter=No
13	มา	_	PART	RP	_	12	compound:prt	_	SpaceAfter=No
14	ใช้	_	VERB	VV	_	12	xcomp	_	SpaceAfter=No
15	งาน	_	NOUN	NN	_	14	obj	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	ซีซาร์	_	PROPN	NNP	_	3	nsubj:pass	_	SpaceAfter=No
2	ได้รับ	_	AUX	MD	Voice=Pass	3	aux:pass	_	SpaceAfter=No
3	แจ้ง	_	VERB	VV	_	0	root	_	SpaceAfter=No
4	ถึง	_	ADP	IN	_	5	case	_	SpaceAfter=No
5	การกระทำ	_	VERB	VV	_	3	obl	_	SpaceAfter=No
6	ของ	_	ADP	IN	_	7	case	_	SpaceAfter=No
7	ปอมปีย์	_	PROPN	NNP	_	5	obl:poss	_	SpaceAfter=No
8	จาก	_	ADP	IN	_	9	case	_	SpaceAfter=No
9	คิวริโอ	_	PROPN	NNP	_	3	obl	_	SpaceAfter=No
10	ผู้	_	NOUN	NN	_	9	appos	_	SpaceAfter=No
11	ซึ่ง	_	DET	WDT	_	12	nsubj	_	SpaceAfter=No
12	หมด	_	VERB	VV	_	10	acl:relcl	_	SpaceAfter=No
13	วาระ	_	NOUN	NN	_	12	obj	_	SpaceAfter=No
14	ใน	_	ADP	IN	_	15	case	_	SpaceAfter=No
15	ขณะ	_	NOUN	NN	_	12	obl	_	SpaceAfter=No
16	นั้น	_	DET	DT	_	15	det	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	เธอ	_	PRON	PRP	Person=3	3	nsubj:pass	_	SpaceAfter=No
2	ถูก	_	AUX	MD	Voice=Pass	3	aux:pass	_	SpaceAfter=No
3	ตั้ง	_	VERB	VV	_	0	root	_	SpaceAfter=No
4	ข้อหา	_	NOUN	NN	_	3	obj	_	SpaceAfter=No
5	ฐาน	_	ADP	IN	_	6	mark	_	SpaceAfter=No
6	พยายาม	_	VERB	VV	_	3	advcl	_	SpaceAfter=No
7	ฆ่า	_	VERB	VV	_	6	xcomp	_	SpaceAfter=No
8	บุตร	_	NOUN	NN	_	7	obj	_	SpaceAfter=No
9	สาว	_	NOUN	NN	_	8	compound	_	SpaceAfter=No
10	วัย	_	NOUN	NN	_	8	compound	_	_
11	2	_	NUM	CD	_	12	nummod	_	_
12	ขวบ	_	NOUN	NNB	_	10	clf	_	SpaceAfter=No
13	ของ	_	ADP	IN	_	14	case	_	SpaceAfter=No
14	เธอ	_	PRON	PRP	Person=3	8	nmod:poss	_	SpaceAfter=No
15	ด้วย	_	ADV	RB	_	3	advmod	_	_

~~~


