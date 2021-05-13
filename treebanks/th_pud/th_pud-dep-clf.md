---
layout: base
title:  'Statistics of clf in UD_Thai-PUD'
udver: '2'
---

## Treebank Statistics: UD_Thai-PUD: Relations: `clf`

This relation is universal.

247 nodes (1%) are attached to their parents as `clf`.

247 instances of `clf` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.92307692307692.

The following 7 pairs of parts of speech are connected with `clf`: <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (214; 87% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (19; 8% instances), <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt> (5; 2% instances), <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-SYM.html">SYM</a></tt> (4; 2% instances), <tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="th_pud-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 clf	color:blue
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


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 clf	color:blue
1	การพิมพ์	_	VERB	VV	_	4	nsubj	_	SpaceAfter=No
2	ครั้ง	_	NOUN	NNB	_	1	clf	_	SpaceAfter=No
3	แรก	_	ADJ	JJ	_	2	amod	_	SpaceAfter=No
4	ตีพิมพ์	_	VERB	VV	_	0	root	_	SpaceAfter=No
5	เพียง	_	ADV	RB	_	6	advmod	_	_
6	3,000	_	NUM	CD	_	7	nummod	_	_
7	ฉบับ	_	NOUN	NNB	_	4	obj	_	SpaceAfter=No
8	เท่านั้น	_	ADV	RB	_	4	advmod	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 clf	color:blue
1	สงคราม	_	NOUN	NN	_	7	nsubj	_	Proper=True|SpaceAfter=No
2	โลก	_	NOUN	NN	_	1	flat:name	_	Proper=True|SpaceAfter=No
3	ครั้ง	_	PROPN	NNB	_	1	clf	_	Proper=True|SpaceAfter=No
4	ที่	_	NOUN	NN	_	3	flat:name	_	Proper=True
5	1	_	NUM	CD	_	4	nummod	_	_
6	ได้	_	AUX	AS	Aspect=Perf	7	aux	_	SpaceAfter=No
7	นำ	_	VERB	VV	_	0	root	_	SpaceAfter=No
8	มา	_	PART	RP	_	7	compound:prt	_	SpaceAfter=No
9	ซึ่ง	_	ADP	IN	_	10	case	_	SpaceAfter=No
10	ความเปลี่ยนแปลง	_	VERB	VV	_	7	obl	_	SpaceAfter=No
11	และ	_	CCONJ	CC	_	12	cc	_	SpaceAfter=No
12	การพัฒนา	_	VERB	VV	_	10	conj	_	SpaceAfter=No
13	ใหม่	_	ADJ	JJ	_	12	amod	_	SpaceAfter=No
14	ๆ	_	SYM	SYM	_	13	dep	_	SpaceAfter=No
15	ใน	_	ADP	IN	_	16	case	_	SpaceAfter=No
16	การ	_	NOUN	NN	_	10	obl	_	SpaceAfter=No
17	เมือง	_	NOUN	NN	_	16	compound	_	SpaceAfter=No
18	ยุค	_	NOUN	NN	_	16	compound	_	SpaceAfter=No
19	อาณานิคม	_	NOUN	NN	_	16	compound	_	_

~~~


