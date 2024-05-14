---
layout: base
title:  'Statistics of nsubj:pass in UD_Vietnamese-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-TueCL: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="vi_tuecl-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="vi_tuecl-dep-nsubj-outer.html">nsubj:outer</a></tt>.

7 nodes (0%) are attached to their parents as `nsubj:pass`.

6 instances of `nsubj:pass` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.42857142857143.

The following 2 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt> (5; 71% instances), <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-PRON.html">PRON</a></tt> (2; 29% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj:pass	color:blue
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
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 23 nsubj:pass	color:blue
1	Một	một	NUM	_	NumType=Card	3	nummod	_	_
2	trong	trong	ADP	_	_	3	case	_	_
3	số	số	NOUN	_	_	6	nsubj	_	_
4	đó	đó	DET	_	Deixis=Remt|PronType=Dem	3	det	_	_
5	đã	đã	ADV	_	AdvType=Tim|Tense=Past	6	advmod	_	_
6	có	có	VERB	_	_	0	root	_	_
7	kết quả	kết quả	NOUN	_	_	6	obj	_	_
8	tích cực	tích cực	ADJ	_	_	7	amod	_	_
9	và	và	CCONJ	_	_	12	cc	_	_
10	đã	đã	ADV	_	AdvType=Tim|Tense=Past	12	advmod	_	_
11	được	được	AUX	_	VerbType=Aux|Voice=Pass	12	aux:pass	_	_
12	xuất bản	xuất bản	VERB	_	_	6	conj	_	SpaceAfter=No
13	,	,	PUNCT	_	_	19	punct	_	_
14	nhưng	nhưng	SCONJ	_	_	19	cc	_	_
15	sáu	sáu	NUM	_	NumType=Card	17	nummod	_	_
16	trong	trong	ADP	_	_	17	case	_	_
17	số	số	NOUN	_	_	19	nsubj	_	_
18	đó	đó	DET	_	Deixis=Remt|PronType=Dem	17	det	_	_
19	có	có	VERB	_	_	6	conj	_	_
20	kết quả	kết quả	NOUN	_	_	19	obj	_	_
21	tiêu cực	tiêu cực	ADJ	_	_	20	amod	_	_
22	và	và	CCONJ	_	_	26	cc	_	_
23	chúng	chúng	PRON	_	Number=Plur|Person=3|PronType=Prs	26	nsubj:pass	_	_
24	chưa	chưa	ADV	_	Polarity=Neg	26	advmod	_	_
25	được	được	AUX	_	VerbType=Aux|Voice=Pass	26	aux:pass	_	_
26	công bố	công bố	VERB	_	_	19	conj	_	_
27	.	.	PUNCT	_	_	6	punct	_	SpaceAfter=No

~~~


