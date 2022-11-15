---
layout: base
title:  'Statistics of ccomp in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `ccomp`

This relation is universal.

423 nodes (1%) are attached to their parents as `ccomp`.

421 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.52009456264775.

The following 16 pairs of parts of speech are connected with `ccomp`: <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (287; 68% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (43; 10% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (36; 9% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (34; 8% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="vi_vtb-pos-AUX.html">AUX</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-X.html">X</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-X.html">X</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 ccomp	color:blue
1	Ông	ông	NOUN	N	_	3	nsubj	_	_
2	cũng	cũng	ADV	Adv	_	3	advmod	_	_
3	thú nhận	thú nhận	VERB	V	_	0	root	_	_
4	với	với	ADP	Pre	_	5	case	_	_
5	Kim	Kim	PROPN	NNP	_	3	obl:with	_	_
6	là	là	SCONJ	SC	_	9	mark	_	_
7	mình	mình	PRON	Pro	_	9	nsubj	_	_
8	đã	đã	ADV	Adv	_	9	advmod	_	_
9	có	có	VERB	V	_	3	ccomp	_	_
10	vợ	vợ	NOUN	N	_	9	obj	_	_
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 ccomp	color:blue
1	Có	có	VERB	V	_	0	root	_	_
2	người	người	NOUN	N	_	5	nsubj	_	_
3	đã	đã	ADV	Adv	_	5	advmod	_	_
4	là	là	AUX	V	_	5	cop	_	_
5	cô giáo	cô giáo	NOUN	N	_	1	ccomp	_	_
6	dạy	dạy	VERB	V	_	5	acl:subj	_	_
7	THCS	thcs	NOUN	Ny	_	6	obj	_	_
8	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 ccomp	color:blue
1	"	"	PUNCT	``	_	5	punct	_	_
2	Thế	thế	PART	Prt	_	5	discourse	_	_
3	còn	còn	SCONJ	SC	_	5	cc	_	_
4	con	con	NOUN	Nc	_	5	clf	_	_
5	vật	vật	NOUN	N	_	0	root	_	_
6	chị	chị	NOUN	N	_	7	nsubj	_	_
7	yêu thích	yêu thích	VERB	V	_	5	ccomp	_	_
8	nhất	nhất	ADJ	Adj	_	7	xcomp	_	_
9	?	?	PUNCT	?	_	5	punct	_	_
10	"	"	PUNCT	``	_	5	punct	_	_
11	.	.	PUNCT	.	_	5	punct	_	_

~~~


