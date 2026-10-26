---
layout: base
title:  'Statistics of nsubj:pass in UD_Thai-PUD'
udver: '2'
---

## Treebank Statistics: UD_Thai-PUD: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="th_pud-dep-nsubj.html">nsubj</a></tt>.

70 nodes (0%) are attached to their parents as `nsubj:pass`.

70 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.74285714285714.

The following 5 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (42; 60% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt> (14; 20% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-PRON.html">PRON</a></tt> (7; 10% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-DET.html">DET</a></tt> (6; 9% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 7 nsubj:pass	color:blue
1	ใน	ใน	ADP	IN	_	2	case	_	SpaceAfter=No|Translit=nai|LTranslit=nai
2	ยุค	ยุค	NOUN	NN	_	12	obl	_	SpaceAfter=No|Translit=yugʰ|LTranslit=yugʰ
3	หลัง	หลัง	ADP	IN	_	4	case	_	SpaceAfter=No|Translit=hlạŋ|LTranslit=hlạŋ
4	คลาสสิค	คลาสสิค	NOUN	NN	_	2	nmod	_	SpaceAfter=No|Translit=gʰlaːssigʰ|LTranslit=gʰlaːssigʰ
5	ใน	ใน	ADP	IN	_	6	case	_	SpaceAfter=No|Translit=nai|LTranslit=nai
6	ยูกาตัง	ยูกาตัง	PROPN	NNP	_	2	nmod	_	Translit=yuːkaːtạŋ|LTranslit=yuːkaːtạŋ
7	ระบบ	ระบบ	NOUN	NN	_	12	nsubj:pass	_	SpaceAfter=No|Translit=rabb|LTranslit=rabb
8	ที่	ที่	NOUN	NN	_	7	compound	_	SpaceAfter=No|Translit=dʰìː|LTranslit=dʰìː
9	สาม	สาม	NUM	CD	_	8	nummod	_	SpaceAfter=No|Translit=saːm|LTranslit=saːm
10	ได้	ได้	AUX	AS	Aspect=Perf	12	aux	_	SpaceAfter=No|Translit=dạî|LTranslit=dạî
11	ถูก	ถูก	AUX	MD	Voice=Pass	12	aux:pass	_	SpaceAfter=No|Translit=tʰuːk|LTranslit=tʰuːk
12	นำ	นำ	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=nãː|LTranslit=nãː
13	มา	มา	PART	RP	_	12	compound:prt	_	SpaceAfter=No|Translit=maː|LTranslit=maː
14	ใช้	ใช้	VERB	VV	_	12	xcomp	_	SpaceAfter=No|Translit=ćʰaî|LTranslit=ćʰaî
15	งาน	งาน	NOUN	NN	_	14	obj	_	Translit=ŋaːn|LTranslit=ŋaːn

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	ซีซาร์	ซีซาร์	PROPN	NNP	_	3	nsubj:pass	_	SpaceAfter=No|Translit=ciːcaːr|LTranslit=ciːcaːr
2	ได้รับ	ได้รับ	AUX	MD	Voice=Pass	3	aux:pass	_	SpaceAfter=No|Translit=dạîrạb|LTranslit=dạîrạb
3	แจ้ง	แจ้ง	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=čæ̂ːŋ|LTranslit=čæ̂ːŋ
4	ถึง	ถึง	ADP	IN	_	5	case	_	SpaceAfter=No|Translit=tʰüŋ|LTranslit=tʰüŋ
5	การกระทำ	การกระทำ	VERB	VV	_	3	obl	_	SpaceAfter=No|Translit=kaːrkradʰãː|LTranslit=kaːrkradʰãː
6	ของ	ของ	ADP	IN	_	7	case	_	SpaceAfter=No|Translit=kʰɔːŋ|LTranslit=kʰɔːŋ
7	ปอมปีย์	ปอมปีย์	PROPN	NNP	_	5	obl:poss	_	SpaceAfter=No|Translit=pɔːmpiːy|LTranslit=pɔːmpiːy
8	จาก	จาก	ADP	IN	_	9	case	_	SpaceAfter=No|Translit=čaːk|LTranslit=čaːk
9	คิวริโอ	คิวริโอ	PROPN	NNP	_	3	obl	_	SpaceAfter=No|Translit=gʰiwri'oː|LTranslit=gʰiwri'oː
10	ผู้	ผู้	NOUN	NN	_	9	appos	_	SpaceAfter=No|Translit=pʰûː|LTranslit=pʰûː
11	ซึ่ง	ซึ่ง	DET	WDT	PronType=Rel	12	nsubj	_	Gloss=which,that|SpaceAfter=No|Translit=cǜŋ|LTranslit=cǜŋ
12	หมด	หมด	VERB	VV	_	10	acl:relcl	_	SpaceAfter=No|Translit=hmd|LTranslit=hmd
13	วาระ	วาระ	NOUN	NN	_	12	obj	_	SpaceAfter=No|Translit=waːra|LTranslit=waːra
14	ใน	ใน	ADP	IN	_	15	case	_	SpaceAfter=No|Translit=nai|LTranslit=nai
15	ขณะ	ขณะ	NOUN	NN	_	12	obl	_	SpaceAfter=No|Translit=kʰṇa|LTranslit=kʰṇa
16	นั้น	นั้น	DET	DT	PronType=Dem	15	det	_	Gloss=that|Translit=nận|LTranslit=nận

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	เธอ	เธอ	PRON	PRP	Person=3|PronType=Prs	3	nsubj:pass	_	Gloss=you,she|SpaceAfter=No|Translit=ḏʰœː|LTranslit=ḏʰœː
2	ถูก	ถูก	AUX	MD	Voice=Pass	3	aux:pass	_	SpaceAfter=No|Translit=tʰuːk|LTranslit=tʰuːk
3	ตั้ง	ตั้ง	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=tậŋ|LTranslit=tậŋ
4	ข้อหา	ข้อหา	NOUN	NN	_	3	obj	_	SpaceAfter=No|Translit=kʰɔ̂ːhaː|LTranslit=kʰɔ̂ːhaː
5	ฐาน	ฐาน	ADP	IN	_	6	mark	_	SpaceAfter=No|Translit=ṭʰaːn|LTranslit=ṭʰaːn
6	พยายาม	พยายาม	VERB	VV	_	3	advcl	_	SpaceAfter=No|Translit=bʰyaːyaːm|LTranslit=bʰyaːyaːm
7	ฆ่า	ฆ่า	VERB	VV	_	6	xcomp	_	SpaceAfter=No|Translit=qʰàː|LTranslit=qʰàː
8	บุตร	บุตร	NOUN	NN	_	7	obj	_	SpaceAfter=No|Translit=butr|LTranslit=butr
9	สาว	สาว	NOUN	NN	_	8	compound	_	SpaceAfter=No|Translit=saːw|LTranslit=saːw
10	วัย	วัย	NOUN	NN	_	8	compound	_	Translit=wạy|LTranslit=wạy
11	2	2	NUM	CD	_	10	nummod	_	Translit=2|LTranslit=2
12	ขวบ	ขวบ	NOUN	NNB	_	11	clf	_	SpaceAfter=No|Translit=kʰwb|LTranslit=kʰwb
13	ของ	ของ	ADP	IN	_	14	case	_	SpaceAfter=No|Translit=kʰɔːŋ|LTranslit=kʰɔːŋ
14	เธอ	เธอ	PRON	PRP	Person=3|PronType=Prs	8	nmod:poss	_	Gloss=you,she|SpaceAfter=No|Translit=ḏʰœː|LTranslit=ḏʰœː
15	ด้วย	ด้วย	ADV	RB	_	3	advmod	_	Translit=də̂wy|LTranslit=də̂wy

~~~


