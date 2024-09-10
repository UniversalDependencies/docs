---
layout: base
title:  'Statistics of nummod in UD_Vietnamese-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-TueCL: Relations: `nummod`

This relation is universal.

55 nodes (3%) are attached to their parents as `nummod`.

53 instances of `nummod` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25454545454545.

The following 2 pairs of parts of speech are connected with `nummod`: <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-NUM.html">NUM</a></tt> (52; 95% instances), <tt><a href="vi_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="vi_tuecl-pos-NUM.html">NUM</a></tt> (3; 5% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 nummod	color:blue
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 nummod	color:blue
1	Mọi	mọi	DET	_	_	2	det	_	_
2	thứ	thứ	NOUN	_	_	4	nsubj	_	_
3	đều	đều	ADV	_	_	4	advmod	_	_
4	hỗn độn	hỗn độn	ADJ	_	_	0	root	_	_
5	và	và	CCONJ	_	_	7	cc	_	_
6	chẳng	chẳng	ADV	_	Polarity=Neg	7	advmod	_	_
7	có	có	VERB	_	_	4	conj	_	_
8	ai	ai	PRON	_	PronType=Ind	7	nsubj	_	_
9	muốn	muốn	VERB	_	VerbType=Mod	8	acl	_	_
10	phải	phải	AUX	_	VerbType=Aux	9	aux	_	_
11	một	một	NUM	_	NumType=Card	12	nummod	_	_
12	mình	mình	PRON	_	PronType=Prs|Reflex=Yes	9	xcomp	_	_
13	.	.	PUNCT	_	_	4	punct	_	SpaceAfter=No

~~~


