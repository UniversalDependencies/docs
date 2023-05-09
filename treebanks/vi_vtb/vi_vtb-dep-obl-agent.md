---
layout: base
title:  'Statistics of obl:agent in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-obl.html">obl</a></tt>.
There are also 7 other language-specific subtypes of `obl`: <tt><a href="vi_vtb-dep-obl-about.html">obl:about</a></tt>, <tt><a href="vi_vtb-dep-obl-adj.html">obl:adj</a></tt>, <tt><a href="vi_vtb-dep-obl-adv.html">obl:adv</a></tt>, <tt><a href="vi_vtb-dep-obl-comp.html">obl:comp</a></tt>, <tt><a href="vi_vtb-dep-obl-iobj.html">obl:iobj</a></tt>, <tt><a href="vi_vtb-dep-obl-tmod.html">obl:tmod</a></tt>, <tt><a href="vi_vtb-dep-obl-with.html">obl:with</a></tt>.

76 nodes (0%) are attached to their parents as `obl:agent`.

73 instances of `obl:agent` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.27631578947368.

The following 4 pairs of parts of speech are connected with `obl:agent`: <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (71; 93% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 obl:agent	color:blue
1	Nhưng	nhưng	SCONJ	C	_	5	mark	_	_
2	khủng khiếp	khủng khiếp	ADJ	ADJ	_	5	csubj:asubj	_	_
3	nhất	nhất	ADV	ADV	_	2	advmod	_	_
4	là	là	AUX	AUX	_	5	cop	_	_
5	lúc	lúc	NOUN	N	_	0	root	_	_
6	bị	bị	AUX	AUX	_	9	aux:pass	_	_
7	sóng	sóng	NOUN	N	_	9	obl:agent	_	_
8	nhồi	nhồi	VERB	V	_	7	compound:vmod	_	_
9	đập	đập	VERB	V	_	5	acl:tmod	_	_
10	vào	vào	ADP	PRE	_	11	case	_	_
11	thành	thành	NOUN	N	_	9	obl:comp	_	_
12	tàu	tàu	NOUN	N	_	11	compound	_	_
13	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 obl:agent	color:blue
1	Loan	loan	PROPN	NNP	_	2	nsubj	_	_
2	bảo	bảo	VERB	V	_	0	root	_	_
3	ở	ở	VERB	V	_	16	advcl	_	_
4	nhà	nhà	NOUN	N	_	3	obl:comp	_	_
5	tên	tên	NOUN	N	_	4	nmod	_	_
6	Hồng	Hồng	PROPN	NNP	_	5	compound	_	_
7	một	một	NUM	NUM	_	8	nummod	_	_
8	tuần	tuần	NOUN	N	_	3	obl:tmod	_	_
9	thì	thì	SCONJ	C	_	16	mark	_	_
10	hầu như	hầu như	ADV	ADV	_	11	advmod	_	_
11	ngày	ngày	NOUN	N	_	16	obl:tmod	_	_
12	nào	nào	PRON	PRO	_	11	nmod	_	_
13	cũng	cũng	ADV	ADV	_	16	advmod	_	_
14	bị	bị	AUX	AUX	_	16	aux:pass	_	_
15	nó	nó	PRON	PRO	_	16	obl:agent	_	_
16	cưỡng hiếp	cưỡng hiếp	VERB	V	_	2	ccomp	_	_
17	.	.	PUNCT	PUNCT	_	2	punct	_	_

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


