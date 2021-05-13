---
layout: base
title:  'Statistics of acl:relcl in UD_Thai-PUD'
udver: '2'
---

## Treebank Statistics: UD_Thai-PUD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="th_pud-dep-acl.html">acl</a></tt>.

613 nodes (3%) are attached to their parents as `acl:relcl`.

612 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.16965742251223.

The following 17 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-VERB.html">VERB</a></tt> (400; 65% instances), <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt> (80; 13% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-VERB.html">VERB</a></tt> (42; 7% instances), <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (34; 6% instances), <tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="th_pud-pos-VERB.html">VERB</a></tt> (19; 3% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt> (13; 2% instances), <tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="th_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="th_pud-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="th_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="th_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl:relcl	color:blue
1	พี่น้อง	_	NOUN	NN	_	6	vocative	_	SpaceAfter=No
2	ครับ	_	PART	EP	_	1	discourse	_	_
3	นี่	_	PRON	PRD	_	6	nsubj	_	SpaceAfter=No
4	ไม่	_	PART	NEG	Polarity=Neg	6	advmod	_	SpaceAfter=No
5	ใช่	_	AUX	VC	_	6	cop	_	SpaceAfter=No
6	สิ่ง	_	NOUN	NN	_	0	root	_	SpaceAfter=No
7	ที่	_	DET	WDT	_	9	obj	_	SpaceAfter=No
8	เรา	_	PRON	PRP	Person=1	9	nsubj	_	SpaceAfter=No
9	ต้องการ	_	VERB	VV	_	6	acl:relcl	_	SpaceAfter=No
10	ใน	_	ADP	IN	_	11	case	_	SpaceAfter=No
11	ประเทศ	_	NOUN	NN	_	9	obl	_	SpaceAfter=No
12	ของ	_	ADP	IN	_	13	case	_	SpaceAfter=No
13	เรา	_	PRON	PRP	Person=1	11	nmod:poss	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl:relcl	color:blue
1	เรา	_	PRON	PRP	Person=1	2	nsubj	_	SpaceAfter=No
2	มี	_	VERB	VV	_	0	root	_	SpaceAfter=No
3	ทีม	_	NOUN	NN	_	2	obj	_	SpaceAfter=No
4	ที่	_	DET	WDT	_	5	nsubj	_	SpaceAfter=No
5	ดี	_	ADJ	JJ	_	3	acl:relcl	_	SpaceAfter=No
6	และ	_	CCONJ	CC	_	8	cc	_	SpaceAfter=No
7	เป็น	_	AUX	VC	_	8	cop	_	SpaceAfter=No
8	โอกาส	_	NOUN	NN	_	2	conj	_	SpaceAfter=No
9	ให้	_	VERB	VV	_	8	acl	_	SpaceAfter=No
10	เรา	_	PRON	PRP	Person=1	9	obj	_	SpaceAfter=No
11	ก้าว	_	VERB	VV	_	9	xcomp	_	SpaceAfter=No
12	ไป	_	PART	RP	_	11	compound:prt	_	SpaceAfter=No
13	ข้าง	_	NOUN	NN	_	11	obl	_	SpaceAfter=No
14	หน้า	_	ADJ	JJ	_	13	amod	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 acl:relcl	color:blue
1	ไม่	_	PART	NEG	Polarity=Neg	4	advmod	_	SpaceAfter=No
2	ใช่	_	AUX	VC	_	4	cop	_	SpaceAfter=No
3	ทุก	_	DET	DT	_	4	det	_	SpaceAfter=No
4	การเปลี่ยนแปลง	_	VERB	VV	_	0	root	_	SpaceAfter=No
5	ใน	_	ADP	IN	_	6	case	_	SpaceAfter=No
6	ภูมิภาค	_	NOUN	NN	_	4	obl	_	SpaceAfter=No
7	ที่	_	DET	WDT	_	9	nsubj	_	SpaceAfter=No
8	จะ	_	AUX	MD	_	9	aux	_	SpaceAfter=No
9	สำเร็จ	_	VERB	VV	_	4	acl:relcl	_	SpaceAfter=No
10	ลุล่วง	_	ADV	RB	_	9	advmod	_	_

~~~


