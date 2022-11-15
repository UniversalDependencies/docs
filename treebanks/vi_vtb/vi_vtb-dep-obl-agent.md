---
layout: base
title:  'Statistics of obl:agent in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-obl.html">obl</a></tt>.
There are also 7 other language-specific subtypes of `obl`: <tt><a href="vi_vtb-dep-obl-about.html">obl:about</a></tt>, <tt><a href="vi_vtb-dep-obl-adj.html">obl:adj</a></tt>, <tt><a href="vi_vtb-dep-obl-adv.html">obl:adv</a></tt>, <tt><a href="vi_vtb-dep-obl-comp.html">obl:comp</a></tt>, <tt><a href="vi_vtb-dep-obl-iobj.html">obl:iobj</a></tt>, <tt><a href="vi_vtb-dep-obl-tmod.html">obl:tmod</a></tt>, <tt><a href="vi_vtb-dep-obl-with.html">obl:with</a></tt>.

37 nodes (0%) are attached to their parents as `obl:agent`.

35 instances of `obl:agent` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.56756756756757.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (33; 89% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (3; 8% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 obl:agent	color:blue
1	Tiền	tiền	NOUN	N	_	13	nsubj	_	_
2	các	các	DET	Det	_	3	det	_	_
3	con gái	con gái	NOUN	N	_	4	nsubj	_	_
4	gửi	gửi	VERB	V	_	1	acl	_	_
5	về	về	ADV	Adv	_	4	compound:svc	_	_
6	cho	cho	ADP	Pre	_	7	case	_	_
7	ông	ông	NOUN	N	_	4	obl:iobj	_	_
8	bao nhiêu	bao nhiêu	PRON	Pro	_	4	obj	_	_
9	bị	bị	AUX	AUX	_	13	aux:pass	_	_
10	con	con	NOUN	N	_	13	obl:agent	_	_
11	út	út	ADJ	Adj	_	10	amod	_	_
12	"	"	PUNCT	``	_	13	punct	_	_
13	trấn	trấn	VERB	V	_	0	root	_	_
14	"	"	PUNCT	``	_	13	punct	_	_
15	hết	hết	ADV	Adv	_	13	compound:svc	_	_
16	.	.	PUNCT	.	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 20 obl:agent	color:blue
1	Bảy	bảy	NUM	Num	_	2	nummod	_	_
2	nhân viên	nhân viên	NOUN	N	_	19	nsubj	_	_
3	có	có	VERB	V	_	2	acl:subj	_	_
4	"	"	PUNCT	``	_	5	punct	_	_
5	khả năng	khả năng	NOUN	N	_	3	obj	_	_
6	"	"	PUNCT	``	_	5	punct	_	_
7	(	(	PUNCT	(	_	8	punct	_	_
8	bất mãn	bất mãn	VERB	V	_	5	appos:nmod	_	_
9	,	,	PUNCT	,	_	10	punct	_	_
10	có	có	VERB	V	_	8	conj	_	_
11	trình độ	trình độ	NOUN	N	_	10	obj	_	_
12	viết	viết	VERB	V	_	11	acl:subj	_	_
13	và	và	CCONJ	CC	_	14	cc	_	_
14	gửi	gửi	VERB	V	_	12	conj	_	_
15	lá	lá	NOUN	Nc	_	16	clf:det	_	_
16	đơn	đơn	NOUN	N	_	14	obj	_	_
17	trên	trên	NOUN	N	_	16	nmod	_	_
18	)	)	PUNCT	)	_	8	punct	_	_
19	được	được	VERB	V	_	0	root	_	_
20	Hào	Hào	PROPN	NNP	_	19	obl:agent	_	_
21	khoanh	khoanh	VERB	V	_	20	acl:subj	_	_
22	vùng	vùng	NOUN	N	_	21	obj	_	_
23	.	.	PUNCT	.	_	19	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 obl:agent	color:blue
1	Thưa	thưa	VERB	V	_	11	vocative	_	_
2	ông	ông	NOUN	N	_	1	obj	_	_
3	,	,	PUNCT	,	_	1	punct	_	_
4	một	một	NUM	Num	_	5	nummod	_	_
5	vấn đề	vấn đề	NOUN	N	_	9	nsubj	_	_
6	được	được	AUX	AUX	_	9	aux:pass	_	_
7	nhiều	nhiều	ADJ	Adj	_	8	amod	_	_
8	nvơnn	nvơnn	NOUN	Ny	_	9	obl:agent	_	_
9	băn khoăn	băn khoăn	ADJ	Adj	_	11	csubj	_	_
10	là	là	AUX	V	_	11	cop	_	_
11	tư cách pháp nhân	tư cách pháp nhân	NOUN	N	_	0	root	_	_
12	của	của	ADP	Pre	_	13	case	_	_
13	bà con	bà con	NOUN	N	_	11	nmod:poss	_	_
14	tại	tại	ADP	Pre	_	15	case	_	_
15	nước	nước	NOUN	N	_	13	advcl	_	_
16	sở tại	sở tại	ADJ	Adj	_	15	amod	_	_
17	để	để	ADP	Pre	_	20	mark:pcomp	_	_
18	bà con	bà con	NOUN	N	_	20	nsubj	_	_
19	có thể	có thể	AUX	AUX	_	20	aux	_	_
20	cư trú	cư trú	VERB	V	_	11	advcl:objective	_	_
21	và	và	CCONJ	CC	_	22	cc	_	_
22	làm ăn	làm ăn	VERB	V	_	20	conj	_	_
23	một cách	một cách	NOUN	N	_	22	obj	_	_
24	chính đáng	chính đáng	ADJ	Adj	_	23	amod	_	_
25	.	.	PUNCT	.	_	11	punct	_	_

~~~


