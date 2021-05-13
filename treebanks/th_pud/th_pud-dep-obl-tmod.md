---
layout: base
title:  'Statistics of obl:tmod in UD_Thai-PUD'
udver: '2'
---

## Treebank Statistics: UD_Thai-PUD: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="th_pud-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="th_pud-dep-obl-poss.html">obl:poss</a></tt>.

252 nodes (1%) are attached to their parents as `obl:tmod`.

164 instances of `obl:tmod` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.21428571428571.

The following 13 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (74; 29% instances), <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (66; 26% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-DET.html">DET</a></tt> (38; 15% instances), <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-NUM.html">NUM</a></tt> (33; 13% instances), <tt><a href="th_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (20; 8% instances), <tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="th_pud-pos-DET.html">DET</a></tt> (4; 2% instances), <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-DET.html">DET</a></tt> (4; 2% instances), <tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="th_pud-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="th_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="th_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="th_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 obl:tmod	color:blue
1	ป้าย	_	NOUN	NN	_	2	obj	_	SpaceAfter=No
2	เขียน	_	VERB	VV	_	0	root	_	SpaceAfter=No
3	ว่า	_	ADP	IN	_	8	mark	_	_
4	คืน	_	NOUN	NN	_	8	obl:tmod	_	SpaceAfter=No
5	นี้	_	DET	DT	_	4	det	_	SpaceAfter=No
6	เรา	_	PRON	PRP	Person=1	8	nsubj	_	SpaceAfter=No
7	จะ	_	AUX	MD	_	8	aux	_	SpaceAfter=No
8	ทำ	_	VERB	VV	_	2	ccomp	_	SpaceAfter=No
9	โทษ	_	NOUN	NN	_	8	obj	_	SpaceAfter=No
10	ด้วย	_	ADP	IN	_	11	case	_	SpaceAfter=No
11	ไฟ	_	NOUN	NN	_	8	obl	_	SpaceAfter=No
12	สูง	_	ADJ	JJ	_	11	amod	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 obl:tmod	color:blue
1	บาง	_	DET	DT	_	2	det	_	SpaceAfter=No
2	ครั้ง	_	NOUN	NNB	_	5	obl:tmod	_	SpaceAfter=No
3	ก็	_	ADV	RB	_	5	advmod	_	SpaceAfter=No
4	คล้าย	_	AUX	VC	_	5	cop	_	SpaceAfter=No
5	พลัง	_	NOUN	NN	_	0	root	_	SpaceAfter=No
6	พิเศษ	_	ADJ	JJ	_	5	amod	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 obl:tmod	color:blue
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


