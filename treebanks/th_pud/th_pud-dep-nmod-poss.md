---
layout: base
title:  'Statistics of nmod:poss in UD_Thai-PUD'
udver: '2'
---

## Treebank Statistics: UD_Thai-PUD: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="th_pud-dep-nmod.html">nmod</a></tt>.

438 nodes (2%) are attached to their parents as `nmod:poss`.

438 instances of `nmod:poss` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.11643835616438.

The following 10 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (201; 46% instances), <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt> (113; 26% instances), <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-PRON.html">PRON</a></tt> (79; 18% instances), <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-VERB.html">VERB</a></tt> (30; 7% instances), <tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt> (4; 1% instances), <tt><a href="th_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="th_pud-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="th_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nmod:poss	color:blue
1	เห็น	_	VERB	VV	_	0	root	_	SpaceAfter=No
2	ได้	_	AUX	MD	_	1	aux	_	SpaceAfter=No
3	ชัด	_	ADV	RB	_	1	advmod	_	SpaceAfter=No
4	ที่สุด	_	ADV	RB	_	3	advmod	_	SpaceAfter=No
5	เมื่อ	_	ADP	IN	_	10	mark	_	SpaceAfter=No
6	ชื่อ	_	NOUN	NN	_	10	nsubj	_	SpaceAfter=No
7	ของ	_	ADP	IN	_	8	case	_	SpaceAfter=No
8	ดารา	_	NOUN	NN	_	6	nmod:poss	_	SpaceAfter=No
9	นั้น	_	DET	DT	_	8	det	_	SpaceAfter=No
10	หา	_	VERB	VV	_	1	ccomp	_	SpaceAfter=No
11	ยาก	_	ADV	RB	_	10	advmod	_	SpaceAfter=No
12	ตั้ง	_	VERB	VV	_	14	case	_	SpaceAfter=No
13	แต่	_	ADP	IN	_	12	fixed	_	SpaceAfter=No
14	แรก	_	ADJ	JJ	_	10	xcomp	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nmod:poss	color:blue
1	แล้ว	_	CCONJ	CC	_	2	cc	_	SpaceAfter=No
2	ท่าที	_	NOUN	NN	_	0	root	_	SpaceAfter=No
3	ของ	_	ADP	IN	_	4	case	_	SpaceAfter=No
4	ออสเตรเลีย	_	PROPN	NNP	_	2	nmod:poss	_	SpaceAfter=No
5	ล่ะ	_	PART	EP	_	2	discourse	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 14 nmod:poss	color:blue
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


