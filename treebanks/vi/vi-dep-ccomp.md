---
layout: base
title:  'Statistics of ccomp in UD_Vietnamese'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese: Relations: `ccomp`

This relation is universal.

1224 nodes (3%) are attached to their parents as `ccomp`.

1198 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.84967320261438.

The following 14 pairs of parts of speech are connected with `ccomp`: <tt><a href="vi-pos-VERB.html">VERB</a></tt>-<tt><a href="vi-pos-VERB.html">VERB</a></tt> (883; 72% instances), <tt><a href="vi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi-pos-VERB.html">VERB</a></tt> (230; 19% instances), <tt><a href="vi-pos-VERB.html">VERB</a></tt>-<tt><a href="vi-pos-NOUN.html">NOUN</a></tt> (49; 4% instances), <tt><a href="vi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi-pos-VERB.html">VERB</a></tt> (21; 2% instances), <tt><a href="vi-pos-VERB.html">VERB</a></tt>-<tt><a href="vi-pos-ADJ.html">ADJ</a></tt> (16; 1% instances), <tt><a href="vi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi-pos-NOUN.html">NOUN</a></tt> (9; 1% instances), <tt><a href="vi-pos-VERB.html">VERB</a></tt>-<tt><a href="vi-pos-PROPN.html">PROPN</a></tt> (7; 1% instances), <tt><a href="vi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="vi-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="vi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="vi-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="vi-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="vi-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="vi-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="vi-pos-VERB.html">VERB</a></tt>-<tt><a href="vi-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="vi-pos-X.html">X</a></tt>-<tt><a href="vi-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 ccomp	color:blue
1	xuống	xuống	VERB	V	_	5	advcl	_	_
2	xe	xe	NOUN	N	_	1	obj	_	SpaceAfter=No
3	,	,	PUNCT	,	_	5	punct	_	_
4	chị	chị	NOUN	N	_	5	nsubj	_	_
5	ngạc nhiên	ngạc nhiên	VERB	V	_	0	root	_	_
6	thấy	thấy	VERB	V	_	5	xcomp	_	_
7	cổng	cổng	NOUN	N	_	10	nsubj	_	_
8	biệt thự	biệt thự	NOUN	N	_	7	compound	_	_
9	không	không	X	R	Polarity=Neg	10	advmod	_	_
10	khóa	khóa	VERB	V	_	6	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 ccomp	color:blue
1	Hằng	Hằng	NOUN	Np	_	2	nsubj	_	_
2	đến	đến	VERB	V	_	0	root	_	_
3	công ty	công ty	NOUN	N	_	2	obj	_	_
4	thám tử	thám tử	NOUN	N	_	3	compound	_	_
5	với	với	ADP	E	_	6	case	_	_
6	yêu cầu	yêu cầu	NOUN	N	_	2	obl	_	_
7	"	"	PUNCT	"	_	8	punct	_	SpaceAfter=No
8	đòi	đòi	VERB	V	_	6	ccomp	_	_
9	lại	lại	X	R	_	8	advmod	_	_
10	đứa	đứa	NOUN	Nc	_	11	compound	_	_
11	con	con	NOUN	N	_	8	obj	_	SpaceAfter=No
12	"	"	PUNCT	"	_	8	punct	_	_
13	cho	cho	ADP	E	_	14	case	_	_
14	chị	chị	NOUN	N	_	8	obl	_	SpaceAfter=No
15	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 ccomp	color:blue
1	Hải	Hải	NOUN	Np	_	2	nsubj	_	_
2	cho	cho	VERB	V	_	0	root	_	_
3	Tùng	Tùng	NOUN	Np	_	2	obj	_	_
4	thấy	thấy	VERB	V	_	2	iobj	_	_
5	Tùng	Tùng	NOUN	Np	_	9	nsubj	_	_
6	cũng	cũng	X	R	_	9	advmod	_	_
7	là	là	AUX	V	_	9	cop	_	_
8	một	một	NUM	M	NumType=Card	9	nummod	_	_
9	thanh niên	thanh niên	NOUN	N	_	4	ccomp	_	_
10	bản lĩnh	bản lĩnh	ADJ	A	_	9	amod	_	_
11	và	và	SCONJ	CC	_	12	cc	_	_
12	tử tế	tử tế	ADJ	A	_	10	conj	_	SpaceAfter=No
13	.	.	PUNCT	.	_	2	punct	_	_

~~~


