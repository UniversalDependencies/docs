---
layout: base
title:  'Statistics of nsubj:pass in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-nsubj.html">nsubj</a></tt>.
There are also 2 other language-specific subtypes of `nsubj`: <tt><a href="vi_vtb-dep-nsubj-nn.html">nsubj:nn</a></tt>, <tt><a href="vi_vtb-dep-nsubj-xsubj.html">nsubj:xsubj</a></tt>.

228 nodes (0%) are attached to their parents as `nsubj:pass`.

227 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.67543859649123.

The following 13 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (179; 79% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (16; 7% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (12; 5% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (7; 3% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="vi_vtb-pos-X.html">X</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-AUX.html">AUX</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 nsubj:pass	color:blue
1	Thưa	thưa	VERB	V	_	7	vocative	_	_
2	ông	ông	NOUN	N	_	1	obj	_	_
3	,	,	PUNCT	PUNCT	_	7	punct	_	_
4	sổ đỏ	sổ đỏ	NOUN	N	_	7	nsubj:pass	_	_
5	đã	đã	ADV	ADV	_	7	advmod	_	_
6	được	được	AUX	AUX	_	7	aux:pass	_	_
7	giao	giao	VERB	V	_	0	root	_	_
8	cho	cho	ADP	PRE	_	9	case	_	_
9	người	người	NOUN	N	_	7	obl:iobj	_	_
10	dân	dân	NOUN	N	_	9	compound	_	_
11	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 nsubj:pass	color:blue
1	Chúng	chúng	PRON	Pro	_	4	nsubj	_	_
2	cũng	cũng	ADV	Adv	_	4	advmod	_	_
3	là	là	AUX	V	_	4	cop	_	_
4	người	người	NOUN	N	_	0	root	_	_
5	,	,	PUNCT	,	_	9	punct	_	_
6	chúng	chúng	PRON	Pro	_	9	nsubj:pass	_	_
7	phải	phải	AUX	AUX	_	9	aux	_	_
8	được	được	ADV	Adv	_	9	advmod	_	_
9	sống	sống	VERB	V	_	4	conj	_	_
10	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nsubj:pass	color:blue
1	Ở	ở	VERB	V	_	8	advcl	_	_
2	Campuchia	Campuchia	PROPN	NNP	_	1	obl:comp	_	_
3	một	một	NUM	NUM	_	4	nummod	_	_
4	tuần	tuần	NOUN	N	_	1	obl:tmod	_	_
5	,	,	PUNCT	PUNCT	_	8	punct	_	_
6	Vy	Vy	PROPN	NNP	_	8	nsubj:pass	_	_
7	được	được	AUX	AUX	_	8	aux:pass	_	_
8	đưa	đưa	VERB	V	_	0	root	_	_
9	sang	sang	VERB	V	_	8	compound:dir	_	_
10	Malaysia	Malaysia	PROPN	NNP	_	8	obj	_	_
11	cũng	cũng	ADV	ADV	_	13	advmod	_	_
12	bằng	bằng	ADP	PRE	_	13	case	_	_
13	xe đò	xe đò	NOUN	N	_	8	obl	_	_
14	.	.	PUNCT	PUNCT	_	8	punct	_	_

~~~


