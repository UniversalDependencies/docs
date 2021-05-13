---
layout: base
title:  'Statistics of advcl in UD_Thai-PUD'
udver: '2'
---

## Treebank Statistics: UD_Thai-PUD: Relations: `advcl`

This relation is universal.

341 nodes (2%) are attached to their parents as `advcl`.

286 instances of `advcl` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.78592375366569.

The following 15 pairs of parts of speech are connected with `advcl`: <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-VERB.html">VERB</a></tt> (286; 84% instances), <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-VERB.html">VERB</a></tt> (15; 4% instances), <tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="th_pud-pos-VERB.html">VERB</a></tt> (12; 4% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (10; 3% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="th_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="th_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="th_pud-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="th_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="th_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="th_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="th_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 advcl	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 advcl	color:blue
1	ไม่	_	PART	NEG	Polarity=Neg	4	advmod	_	SpaceAfter=No
2	ใช่	_	AUX	VC	_	4	cop	_	SpaceAfter=No
3	ทุก	_	DET	DT	_	4	det	_	SpaceAfter=No
4	คน	_	NOUN	NNB	_	0	root	_	SpaceAfter=No
5	ที่	_	ADP	IN	_	7	mark	_	SpaceAfter=No
6	สามารถ	_	AUX	MD	_	7	aux	_	SpaceAfter=No
7	อยู่	_	VERB	VV	_	4	advcl	_	SpaceAfter=No
8	เหนือ	_	ADP	IN	_	9	case	_	SpaceAfter=No
9	มัน	_	PRON	PRP	Person=3	7	obl	_	SpaceAfter=No
10	ได้	_	AUX	MD	_	7	aux	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 advcl	color:blue
1	และ	_	CCONJ	CC	_	3	cc	_	SpaceAfter=No
2	แน่นอน	_	ADV	RB	_	3	advmod	_	_
3	มี	_	VERB	VV	_	0	root	_	SpaceAfter=No
4	บ็อบ	_	PROPN	NNP	_	3	obj	_	SpaceAfter=No
5	ซึ่ง	_	DET	WDT	_	7	nsubj	_	SpaceAfter=No
6	เป็น	_	AUX	VC	_	7	cop	_	SpaceAfter=No
7	แหล่ง	_	NOUN	NN	_	4	acl:relcl	_	SpaceAfter=No
8	ความฮา	_	ADJ	JJ	_	7	compound	_	SpaceAfter=No
9	อย่างต่อเนื่อง	_	VERB	VV	_	8	advcl	_	_

~~~


