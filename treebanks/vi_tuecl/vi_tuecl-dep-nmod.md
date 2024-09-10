---
layout: base
title:  'Statistics of nmod in UD_Vietnamese-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-TueCL: Relations: `nmod`

This relation is universal.
There are 2 language-specific subtypes of `nmod`: <tt><a href="vi_tuecl-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="vi_tuecl-dep-nmod-tmod.html">nmod:tmod</a></tt>.

64 nodes (3%) are attached to their parents as `nmod`.

63 instances of `nmod` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.796875.

The following 8 pairs of parts of speech are connected with `nmod`: <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt> (41; 64% instances), <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-PRON.html">PRON</a></tt> (10; 16% instances), <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-PROPN.html">PROPN</a></tt> (7; 11% instances), <tt><a href="vi_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="vi_tuecl-pos-NUM.html">NUM</a></tt>-<tt><a href="vi_tuecl-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="vi_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="vi_tuecl-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="vi_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 nmod	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 nmod	color:blue
1	Đức	đức	NOUN	_	_	2	clf	_	_
2	vua	vua	NOUN	_	Case=Voc|Polite=Elev	7	vocative	_	SpaceAfter=No
3	,	,	PUNCT	_	_	7	punct	_	_
4	các	các	DET	_	Number=Plur	5	det	_	_
5	chòm sao	chòm sao	NOUN	_	_	7	nsubj	_	_
6	đã	đã	ADV	_	AdvType=Tim|Tense=Past	7	advmod	_	_
7	nói	nói	VERB	_	_	0	root	_	_
8	về	về	ADP	_	_	9	case	_	_
9	việc	việc	NOUN	_	_	7	obl	_	_
10	chúng ta	chúng ta	PRON	_	Number=Plur|Person=1|PronType=Prs	9	nmod	_	_
11	ở	ở	ADP	_	_	12	case	_	_
12	đây	đây	PRON	_	Deixis=Prox|PronType=Dem	7	obl	_	_
13	.	.	PUNCT	_	_	7	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 17 nmod	color:blue
1	Đây	đây	PRON	_	Deixis=Prox|PronType=Dem	3	nsubj	_	_
2	là	là	AUX	_	VerbType=Cop	3	cop	_	_
3	vị trí	vị trí	NOUN	_	_	0	root	_	_
4	mục tiêu	mục tiêu	NOUN	_	_	3	compound	_	SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	suối	suối	NOUN	_	_	3	appos	_	_
7	nước	nước	NOUN	_	_	6	compound	_	_
8	nóng	nóng	ADJ	_	_	7	amod	_	_
9	sâu	sâu	ADJ	_	_	6	amod	_	_
10	nhất	nhất	ADV	_	AdvType=Deg	9	advmod	_	_
11	thế giới	thế giới	NOUN	_	_	6	nmod:poss	_	_
12	tại	tại	ADP	_	_	14	case	_	_
13	Cenote	Cenote	PROPN	_	Foreign=Yes|NameType=Geo	14	compound	_	_
14	Zacaton	Zacaton	PROPN	_	Foreign=Yes|NameType=Geo	6	nmod	_	_
15	phía	phía	NOUN	_	_	14	nmod	_	_
16	bắc	bắc	ADJ	_	_	15	amod	_	_
17	Mexico	Mexico	PROPN	_	NameType=Geo|Typo=Yes	15	nmod	_	CorrectForm=México
18	.	.	PUNCT	_	_	3	punct	_	SpaceAfter=No

~~~


