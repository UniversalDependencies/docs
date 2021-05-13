---
layout: base
title:  'Statistics of acl in UD_Thai-PUD'
udver: '2'
---

## Treebank Statistics: UD_Thai-PUD: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="th_pud-dep-acl-relcl.html">acl:relcl</a></tt>.

975 nodes (4%) are attached to their parents as `acl`.

974 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.99179487179487.

The following 12 pairs of parts of speech are connected with `acl`: <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-VERB.html">VERB</a></tt> (668; 69% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-VERB.html">VERB</a></tt> (243; 25% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (28; 3% instances), <tt><a href="th_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="th_pud-pos-VERB.html">VERB</a></tt> (15; 2% instances), <tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="th_pud-pos-VERB.html">VERB</a></tt> (7; 1% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="th_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 acl	color:blue
1	ข้อ	_	NOUN	NN	_	7	nsubj	_	SpaceAfter=No
2	กำหนด	_	VERB	VV	_	1	acl	_	SpaceAfter=No
3	เรื่อง	_	NOUN	NN	_	1	compound	_	SpaceAfter=No
4	การแต่ง	_	VERB	VV	_	3	compound	_	SpaceAfter=No
5	กาย	_	NOUN	NN	_	4	obj	_	SpaceAfter=No
6	อาจ	_	AUX	MD	_	7	aux	_	SpaceAfter=No
7	ล้า	_	VERB	VV	_	0	root	_	SpaceAfter=No
8	สมัย	_	NOUN	NN	_	7	obl	_	SpaceAfter=No
9	ไป	_	PART	RP	_	7	compound:prt	_	SpaceAfter=No
10	หน่อย	_	ADV	RB	_	7	advmod	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 acl	color:blue
1	พวก	_	NOUN	NN	_	3	nsubj	_	SpaceAfter=No
2	เขา	_	PRON	PRP	Person=3	1	compound	_	SpaceAfter=No
3	มี	_	VERB	VV	_	0	root	_	SpaceAfter=No
4	โอกาส	_	NOUN	NN	_	3	obj	_	SpaceAfter=No
5	เดียว	_	ADJ	JJ	_	4	amod	_	SpaceAfter=No
6	ที่	_	DET	WDT	_	8	obl:tmod	_	SpaceAfter=No
7	จะ	_	AUX	MD	_	8	aux	_	SpaceAfter=No
8	ไถ่	_	VERB	VV	_	4	acl:relcl	_	SpaceAfter=No
9	ตัว	_	NOUN	NN	_	8	obj	_	SpaceAfter=No
10	คืน	_	VERB	VV	_	8	acl	_	SpaceAfter=No
11	โดย	_	ADP	IN	_	12	case	_	SpaceAfter=No
12	การเอาชนะ	_	VERB	VV	_	3	xcomp	_	SpaceAfter=No
13	อังกฤษ	_	PROPN	NNP	_	12	obj	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 acl	color:blue
1	แน่นอน	_	ADJ	JJ	_	0	root	_	SpaceAfter=No
2	ว่า	_	ADP	IN	_	5	mark	_	SpaceAfter=No
3	นี่	_	PRON	PRD	_	5	nsubj	_	SpaceAfter=No
4	คือ	_	AUX	VC	_	5	cop	_	SpaceAfter=No
5	การเลือกตั้ง	_	VERB	VV	_	1	ccomp	_	_
6	ไม่	_	PART	NEG	Polarity=Neg	9	advmod	_	SpaceAfter=No
7	ใช่	_	AUX	VC	_	9	cop	_	_
8	"	_	PUNCT	``	_	9	punct	_	SpaceAfter=No
9	มหาศึก	_	NOUN	NN	_	5	acl	_	Proper=True|SpaceAfter=No
10	ชิง	_	VERB	VV	_	9	acl	_	Proper=True|SpaceAfter=No
11	บัลลังก์	_	NOUN	NN	_	10	obj	_	Proper=True|SpaceAfter=No
12	"	_	PUNCT	''	_	9	punct	_	_

~~~


