---
layout: base
title:  'Statistics of obl in UD_Thai-PUD'
udver: '2'
---

## Treebank Statistics: UD_Thai-PUD: Relations: `obl`

This relation is universal.
There are 2 language-specific subtypes of `obl`: <tt><a href="th_pud-dep-obl-poss.html">obl:poss</a></tt>, <tt><a href="th_pud-dep-obl-tmod.html">obl:tmod</a></tt>.

1204 nodes (5%) are attached to their parents as `obl`.

1045 instances of `obl` (87%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.18521594684385.

The following 18 pairs of parts of speech are connected with `obl`: <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (892; 74% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt> (155; 13% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-VERB.html">VERB</a></tt> (79; 7% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-PRON.html">PRON</a></tt> (27; 2% instances), <tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (12; 1% instances), <tt><a href="th_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (12; 1% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt> (8; 1% instances), <tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="th_pud-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="th_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="th_pud-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="th_pud-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="th_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="th_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="th_pud-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="th_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="th_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="th_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="th_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="th_pud-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 obl	color:blue
1	ป้าย	_	NOUN	NN	_	2	obj	_	SpaceAfter=No
2	เขียน	_	VERB	VV	_	0	root	_	SpaceAfter=No
3	ว่า	_	ADP	IN	_	8	mark	_	_
4	คืน	_	NOUN	NN	_	8	obl:tmod	_	SpaceAfter=No
5	นี้	_	DET	DT	_	4	det	_	SpaceAfter=No
6	เรา	_	PRON	PRP	Person=1	8	nsubj	_	SpaceAfter=No
7	จะ	_	VERB	MD	_	8	aux	_	SpaceAfter=No
8	ทำ	_	VERB	VV	_	2	ccomp	_	SpaceAfter=No
9	โทษ	_	NOUN	NN	_	8	obj	_	SpaceAfter=No
10	ด้วย	_	ADP	IN	_	11	case	_	SpaceAfter=No
11	ไฟ	_	NOUN	NN	_	8	obl	_	SpaceAfter=No
12	สูง	_	ADJ	JJ	_	11	amod	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 obl	color:blue
1	เขา	_	PRON	PRP	Person=3	2	nsubj	_	SpaceAfter=No
2	ทำ	_	VERB	VV	_	0	root	_	SpaceAfter=No
3	งาน	_	NOUN	NN	_	2	obj	_	SpaceAfter=No
4	กับ	_	ADP	IN	_	5	case	_	SpaceAfter=No
5	บีบีซี	_	PROPN	NNP	_	2	obl	_	SpaceAfter=No
6	มา	_	PART	AS	Aspect=Perf	2	aux	_	SpaceAfter=No
7	หนึ่ง	_	NUM	CD	_	8	nummod	_	SpaceAfter=No
8	ทศวรรษ	_	NOUN	NNB	_	2	obl:tmod	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 obl	color:blue
1	กลวิธี	_	NOUN	NN	_	3	nsubj	_	SpaceAfter=No
2	นี้	_	DET	DT	_	1	det	_	SpaceAfter=No
3	ทำ	_	VERB	VV	_	0	root	_	SpaceAfter=No
4	เงิน	_	NOUN	NN	_	3	obj	_	SpaceAfter=No
5	ผ่าน	_	ADP	IN	_	6	case	_	SpaceAfter=No
6	การสนับสนุน	_	VERB	VV	_	3	obl	_	SpaceAfter=No
7	และ	_	CCONJ	CC	_	8	cc	_	SpaceAfter=No
8	การโฆษณา	_	NOUN	NN	_	6	conj	_	_

~~~


