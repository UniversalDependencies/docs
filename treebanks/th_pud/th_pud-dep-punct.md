---
layout: base
title:  'Statistics of punct in UD_Thai-PUD'
udver: '2'
---

## Treebank Statistics: UD_Thai-PUD: Relations: `punct`

This relation is universal.

272 nodes (1%) are attached to their parents as `punct`.

143 instances of `punct` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.73161764705882.

The following 9 pairs of parts of speech are connected with `punct`: <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-PUNCT.html">PUNCT</a></tt> (95; 35% instances), <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-PUNCT.html">PUNCT</a></tt> (94; 35% instances), <tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="th_pud-pos-PUNCT.html">PUNCT</a></tt> (48; 18% instances), <tt><a href="th_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="th_pud-pos-PUNCT.html">PUNCT</a></tt> (19; 7% instances), <tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="th_pud-pos-PUNCT.html">PUNCT</a></tt> (6; 2% instances), <tt><a href="th_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="th_pud-pos-PUNCT.html">PUNCT</a></tt> (3; 1% instances), <tt><a href="th_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="th_pud-pos-PUNCT.html">PUNCT</a></tt> (3; 1% instances), <tt><a href="th_pud-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="th_pud-pos-PUNCT.html">PUNCT</a></tt> (2; 1% instances), <tt><a href="th_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="th_pud-pos-PUNCT.html">PUNCT</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 punct	color:blue
1	ใคร	_	PRON	WP	PronType=Int	3	nsubj	_	SpaceAfter=No
2	จะ	_	AUX	MD	_	3	aux	_	SpaceAfter=No
3	หยุด	_	VERB	VV	_	0	root	_	SpaceAfter=No
4	ฝั่ง	_	NOUN	NN	_	3	obj	_	SpaceAfter=No
5	ออสเตรเลีย	_	PROPN	NNP	_	4	compound	_	SpaceAfter=No
6	นี้	_	DET	DT	_	4	det	_	SpaceAfter=No
7	ได้	_	AUX	MD	_	3	aux	_	SpaceAfter=No
8	?	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 punct	color:blue
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


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 punct	color:blue
1	เพลง	_	NOUN	NN	_	5	nsubj	_	SpaceAfter=No
2	ฮิต	_	ADJ	JJ	_	1	amod	_	SpaceAfter=No
3	คือ	_	AUX	VC	_	5	cop	_	_
4	“	_	PUNCT	``	_	5	punct	_	SpaceAfter=No
5	เจอโรนิโม	_	PROPN	NNP	_	0	root	_	SpaceAfter=No
6	”	_	PUNCT	''	_	5	punct	_	_
7	โดย	_	ADP	IN	_	8	case	_	SpaceAfter=No
8	เชพเพิร์ด	_	PROPN	NNP	_	5	nmod	_	ToDo=nmod

~~~


