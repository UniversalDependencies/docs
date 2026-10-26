---
layout: base
title:  'Statistics of discourse in UD_Thai-PUD'
udver: '2'
---

## Treebank Statistics: UD_Thai-PUD: Relations: `discourse`

This relation is universal.

29 nodes (0%) are attached to their parents as `discourse`.

29 instances of `discourse` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.13793103448276.

The following 3 pairs of parts of speech are connected with `discourse`: <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-PART.html">PART</a></tt> (24; 83% instances), <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-PART.html">PART</a></tt> (4; 14% instances), <tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="th_pud-pos-PART.html">PART</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 discourse	color:blue
1	ฉัน	ฉัน	PRON	PRP	Person=1|PronType=Prs	3	nsubj	_	Gloss=I|SpaceAfter=No|Translit=čʰạn|LTranslit=čʰạn
2	ไม่	ไม่	PART	NEG	Polarity=Neg	3	advmod	_	SpaceAfter=No|Translit=mạì|LTranslit=mạì
3	เรียก	เรียก	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=riaːk|LTranslit=riaːk
4	มัน	มัน	PRON	PRP	Person=3|PronType=Prs	3	obj	_	Gloss=it|SpaceAfter=No|Translit=mạn|LTranslit=mạn
5	ว่า	ว่า	VERB	VV	_	3	xcomp	_	SpaceAfter=No|Translit=wàː|LTranslit=wàː
6	สัตว์	สัตว์	NOUN	NN	_	5	obj	_	SpaceAfter=No|Translit=sạtw|LTranslit=sạtw
7	ร้าย	ร้าย	ADJ	JJ	_	6	amod	_	SpaceAfter=No|Translit=râːy|LTranslit=râːy
8	หรอก	หรอก	PART	EP	_	3	discourse	_	Translit=hrɔːk|LTranslit=hrɔːk

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 discourse	color:blue
1	พี่น้อง	พี่น้อง	NOUN	NN	_	5	vocative	_	SpaceAfter=No|Translit=bʰìːnɔ̂ːŋ|LTranslit=bʰìːnɔ̂ːŋ
2	ครับ	ครับ	PART	EP	_	1	discourse	_	Translit=gʰrạb|LTranslit=gʰrạb
3	นี่	นี่	PRON	PRD	PronType=Dem	5	nsubj	_	Gloss=this|SpaceAfter=No|Translit=nìː|LTranslit=nìː
4	ไม่	ไม่	PART	NEG	Polarity=Neg	5	advmod	_	SpaceAfter=No|Translit=mạì|LTranslit=mạì
5	ใช่	ใช่	VERB	VC	_	0	root	_	SpaceAfter=No|Translit=ćʰaì|LTranslit=ćʰaì
6	สิ่ง	สิ่ง	NOUN	NN	_	5	xcomp	_	SpaceAfter=No|Translit=sìŋ|LTranslit=sìŋ
7	ที่	ที่	DET	WDT	PronType=Rel	9	obj	_	Gloss=that,which|SpaceAfter=No|Translit=dʰìː|LTranslit=dʰìː
8	เรา	เรา	PRON	PRP	Person=1|PronType=Prs	9	nsubj	_	Gloss=we|SpaceAfter=No|Translit=raoː|LTranslit=raoː
9	ต้องการ	ต้องการ	VERB	VV	_	6	acl:relcl	_	SpaceAfter=No|Translit=tɔ̂ːŋkaːr|LTranslit=tɔ̂ːŋkaːr
10	ใน	ใน	ADP	IN	_	11	case	_	SpaceAfter=No|Translit=nai|LTranslit=nai
11	ประเทศ	ประเทศ	NOUN	NN	_	9	obl	_	SpaceAfter=No|Translit=pradʰeːś|LTranslit=pradʰeːś
12	ของ	ของ	ADP	IN	_	13	case	_	SpaceAfter=No|Translit=kʰɔːŋ|LTranslit=kʰɔːŋ
13	เรา	เรา	PRON	PRP	Person=1|PronType=Prs	11	nmod:poss	_	Gloss=we|Translit=raoː|LTranslit=raoː

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 24 discourse	color:blue
1	จาก	จาก	ADP	IN	_	2	case	_	SpaceAfter=No|Translit=čaːk|LTranslit=čaːk
2	โพสต์	โพสต์	NOUN	NN	_	8	obl	_	SpaceAfter=No|Translit=bʰoːst|LTranslit=bʰoːst
3	แสดง	แสดง	VERB	VV	_	2	acl	_	SpaceAfter=No|Translit=sæːdŋ|LTranslit=sæːdŋ
4	ความเสียใจ	ความเสียใจ	VERB	VV	_	3	obj	_	SpaceAfter=No|Translit=gʰwaːmsiaːčai|LTranslit=gʰwaːmsiaːčai
5	บน	บน	ADP	IN	_	6	case	_	SpaceAfter=No|Translit=bn|LTranslit=bn
6	เฟซบุ๊ก	เฟซบุ๊ก	PROPN	NNP	_	2	nmod	_	Translit=feːcbúk|LTranslit=feːcbúk
7	มี	มี	VERB	VV	_	8	xcomp	_	SpaceAfter=No|Translit=miː|LTranslit=miː
8	อยู่	อยู่	VERB	AS	Aspect=Perf	0	root	_	SpaceAfter=No|Translit='yùː|LTranslit='yùː
9	บรรทัด	บรรทัด	NOUN	NN	_	8	obj	_	SpaceAfter=No|Translit=brrdʰạd|LTranslit=brrdʰạd
10	หนึ่ง	หนึ่ง	NUM	CD	_	9	nummod	_	SpaceAfter=No|Translit=hnǜŋ|LTranslit=hnǜŋ
11	ที่	ที่	DET	WDT	PronType=Rel	13	nsubj	_	Gloss=that,which|SpaceAfter=No|Translit=dʰìː|LTranslit=dʰìː
12	ต้อง	ต้อง	AUX	MD	_	13	aux	_	SpaceAfter=No|Translit=tɔ̂ːŋ|LTranslit=tɔ̂ːŋ
13	ทำให้	ทำให้	VERB	VV	_	9	acl:relcl	_	SpaceAfter=No|Translit=dʰãːhaî|LTranslit=dʰãːhaî
14	คริส	คริส	PROPN	NNP	_	13	obj	_	SpaceAfter=No|Translit=gʰris|LTranslit=gʰris
15	ดีใจ	ดีใจ	VERB	VV	_	13	xcomp	_	SpaceAfter=No|Translit=diːčai|LTranslit=diːčai
16	แน่	แน่	ADV	RB	_	15	advmod	_	SpaceAfter=No|Translit=næ̀ː|LTranslit=næ̀ː
17	:	:	PUNCT	:	_	20	punct	_	Translit=:|LTranslit=:
18	“	“	PUNCT	``	_	20	punct	_	SpaceAfter=No|Translit=“|LTranslit=“
19	เป็น	เป็น	AUX	VC	_	20	cop	_	SpaceAfter=No|Translit=pen|LTranslit=pen
20	แอฟริกัน	แอฟริกัน	PROPN	NNP	_	9	acl	_	SpaceAfter=No|Translit='æːfrikạn|LTranslit='æːfrikạn
21	มาก	มาก	ADV	RB	_	20	advmod	_	SpaceAfter=No|Translit=maːk|LTranslit=maːk
22	กว่า	กว่า	ADP	IN	_	23	case	_	SpaceAfter=No|Translit=kwàː|LTranslit=kwàː
23	คุณ	คุณ	PRON	PRP	Person=2|PronType=Prs	21	obl	_	Gloss=you|SpaceAfter=No|Translit=gʰuṇ|LTranslit=gʰuṇ
24	เหรอ	เหรอ	PART	EP	PronType=Int	20	discourse	_	Translit=heːrɔː|LTranslit=heːrɔː
25	ฉัน	ฉัน	PRON	PRP	Person=1|PronType=Prs	27	nsubj	_	Gloss=I|SpaceAfter=No|Translit=čʰạn|LTranslit=čʰạn
26	ไม่	ไม่	PART	NEG	Polarity=Neg	27	advmod	_	SpaceAfter=No|Translit=mạì|LTranslit=mạì
27	รู้	รู้	VERB	VV	_	20	acl	_	SpaceAfter=No|Translit=rûː|LTranslit=rûː
28	มา	มา	AUX	AS	Aspect=Perf	27	aux	_	SpaceAfter=No|Translit=maː|LTranslit=maː
29	ก่อน	ก่อน	ADV	RB	_	27	advmod	_	SpaceAfter=No|Translit=kɔ̀ːn|LTranslit=kɔ̀ːn
30	เลย	เลย	ADV	RB	_	27	advmod	_	SpaceAfter=No|Translit=leːy|LTranslit=leːy
31	”	”	PUNCT	''	_	20	punct	_	Translit=”|LTranslit=”

~~~


