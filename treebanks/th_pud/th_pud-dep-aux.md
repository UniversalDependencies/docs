---
layout: base
title:  'Statistics of aux in UD_Thai-PUD'
udver: '2'
---

## Treebank Statistics: UD_Thai-PUD: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="th_pud-dep-aux-pass.html">aux:pass</a></tt>.

929 nodes (4%) are attached to their parents as `aux`.

725 instances of `aux` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.66307857911733.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-AUX.html">AUX</a></tt> (865; 93% instances), <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-AUX.html">AUX</a></tt> (30; 3% instances), <tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="th_pud-pos-AUX.html">AUX</a></tt> (21; 2% instances), <tt><a href="th_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="th_pud-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="th_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="th_pud-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="th_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="th_pud-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="th_pud-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux	color:blue
1	5,000	_	NUM	CD	_	2	nummod	_	_
2	ดอลลาร์	_	NOUN	NNB	_	0	root	_	SpaceAfter=No
3	ต่อ	_	ADP	IN	_	4	case	_	SpaceAfter=No
4	คน	_	NOUN	NN	_	2	nmod	_	_
5	สูง	_	ADJ	JJ	_	2	conj	_	SpaceAfter=No
6	สุด	_	ADV	RB	_	5	advmod	_	SpaceAfter=No
7	ตาม	_	ADP	IN	_	10	case	_	SpaceAfter=No
8	ที่	_	DET	WDT	_	10	nsubj	_	SpaceAfter=No
9	ได้รับ	_	AUX	MD	Voice=Pass	10	aux	_	SpaceAfter=No
10	อนุญาต	_	VERB	VV	_	5	xcomp	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 aux	color:blue
1	พวก	_	NOUN	NN	_	6	nsubj	_	SpaceAfter=No
2	เขา	_	PRON	PRP	Person=3	1	compound	_	SpaceAfter=No
3	มัก	_	ADV	RB	_	6	advmod	_	SpaceAfter=No
4	จะ	_	AUX	MD	_	6	aux	_	SpaceAfter=No
5	เป็น	_	AUX	VC	_	6	cop	_	SpaceAfter=No
6	ศิลปิน	_	NOUN	NN	_	0	root	_	SpaceAfter=No
7	ที่	_	DET	WDT	_	8	nsubj	_	SpaceAfter=No
8	ชอบ	_	VERB	VV	_	6	acl:relcl	_	SpaceAfter=No
9	ทำ	_	VERB	VV	_	8	xcomp	_	SpaceAfter=No
10	เรื่อง	_	NOUN	NN	_	9	obj	_	SpaceAfter=No
11	ต่าง	_	ADJ	JJ	_	10	amod	_	SpaceAfter=No
12	ๆ	_	SYM	SYM	_	11	dep	_	_
13	อยู่แล้ว	_	ADV	RB	_	8	advmod	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 aux	color:blue
1	แล้ว	_	CCONJ	CC	_	4	cc	_	SpaceAfter=No
2	ผล	_	NOUN	NN	_	4	nsubj	_	SpaceAfter=No
3	ก็	_	ADV	RB	_	4	advmod	_	SpaceAfter=No
4	ออก	_	VERB	VV	_	0	root	_	SpaceAfter=No
5	มา	_	PART	RP	_	4	compound:prt	_	SpaceAfter=No
6	แทบ	_	ADV	RB	_	10	advmod	_	SpaceAfter=No
7	จะ	_	AUX	MD	_	10	aux	_	SpaceAfter=No
8	ไม่	_	PART	NEG	Polarity=Neg	10	advmod	_	SpaceAfter=No
9	ยอด	_	ADV	RB	_	10	advmod	_	SpaceAfter=No
10	เยี่ยม	_	ADJ	JJ	_	4	ccomp	_	SpaceAfter=No
11	เลย	_	ADV	RB	_	10	advmod	_	_

~~~


