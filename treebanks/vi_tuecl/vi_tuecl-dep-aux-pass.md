---
layout: base
title:  'Statistics of aux:pass in UD_Vietnamese-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-TueCL: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="vi_tuecl-dep-aux.html">aux</a></tt>.

16 nodes (1%) are attached to their parents as `aux:pass`.

15 instances of `aux:pass` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.0625.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-AUX.html">AUX</a></tt> (15; 94% instances), <tt><a href="vi_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_tuecl-pos-AUX.html">AUX</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux:pass	color:blue
1	Quân đội	quân đội	NOUN	_	_	5	nsubj:pass	_	_
2	ông ấy	ông ấy	PRON	_	Gender=Masc|Number=Sing|Person=3|Polite=Form|PronType=Prs	1	nmod:poss	_	_
3	đã	đã	ADV	_	AdvType=Tim|Tense=Past	5	advmod	_	_
4	được	được	AUX	_	VerbType=Aux|Voice=Pass	5	aux:pass	_	_
5	rèn	rèn	VERB	_	_	0	root	_	_
6	dũa	dũa	VERB	_	Typo=Yes	5	xcomp	_	CorrectForm=giũa
7	qua	qua	ADP	_	_	8	case	_	_
8	hàng	hàng	NOUN	_	_	5	obl	_	_
9	trăm	trăm	NUM	_	_	8	nummod	_	_
10	trận	trận	NOUN	_	_	8	nmod	_	_
11	với	với	ADP	_	_	12	case	_	_
12	quân	quân	NOUN	_	_	10	nmod	_	_
13	Anh	Anh	ADJ	_	_	12	amod	_	_
14	.	.	PUNCT	_	_	5	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:pass	color:blue
1	Mối	mối	NOUN	_	_	2	clf	_	_
2	quan hệ	quan hệ	NOUN	_	_	7	nsubj	_	_
3	của	của	ADP	_	_	4	case	_	_
4	chúng ta	chúng ta	PRON	_	Number=Plur|Person=1|PronType=Prs	2	nmod	_	_
5	sẽ	sẽ	ADV	_	AdvType=Tim|Tense=Fut	7	advmod	_	_
6	được	được	AUX	_	VerbType=Aux|Voice=Pass	7	aux:pass	_	_
7	nhiều	nhiều	ADJ	_	_	0	root	_	_
8	hơn	hơn	ADP	_	_	10	case	_	_
9	là	là	AUX	_	VerbType=Cop	10	cop	_	_
10	có	có	NOUN	_	_	7	obl	_	_
11	qua	qua	NOUN	_	_	10	fixed	_	_
12	có	có	NOUN	_	_	10	fixed	_	_
13	lại	lại	NOUN	_	_	10	fixed	_	_
14	.	.	PUNCT	_	_	7	punct	_	SpaceAfter=No

~~~


