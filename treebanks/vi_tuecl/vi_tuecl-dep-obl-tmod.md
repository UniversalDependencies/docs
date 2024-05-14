---
layout: base
title:  'Statistics of obl:tmod in UD_Vietnamese-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-TueCL: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="vi_tuecl-dep-obl.html">obl</a></tt>.

6 nodes (0%) are attached to their parents as `obl:tmod`.

4 instances of `obl:tmod` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.66666666666667.

The following 4 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt> (3; 50% instances), <tt><a href="vi_tuecl-pos-ADV.html">ADV</a></tt>-<tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 17% instances), <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 17% instances), <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-ADV.html">ADV</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 obl:tmod	color:blue
1	Cậu	cậu	PRON	_	Gender=Masc|Number=Sing|Person=2|PronType=Prs	2	nsubj	_	_
2	thấy	thấy	VERB	_	_	0	root	_	_
3	sao	sao	ADV	_	AdvType=Man	2	advmod	_	_
4	nếu	nếu	SCONJ	_	_	10	mark	_	_
5	tôi	tôi	PRON	_	Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
6	và	và	CCONJ	_	_	7	cc	_	_
7	cậu	cậu	PRON	_	Gender=Masc|Number=Sing|Person=2|PronType=Prs	5	conj	_	_
8	tối	tối	NOUN	_	_	10	obl:tmod	_	_
9	nay	nay	DET	_	PronType=Dem	8	det	_	_
10	đi	đi	VERB	_	_	2	advcl	_	_
11	dự	dự	VERB	_	_	10	xcomp	_	_
12	bữa	bữa	NOUN	_	_	13	clf	_	_
13	tiệc	tiệc	NOUN	_	_	11	obj	_	_
14	mà	mà	PRON	_	PronType=Rel	17	obj	_	_
15	tôi	tôi	PRON	_	Number=Sing|Person=1|PronType=Prs	17	nsubj	_	_
16	vừa	vừa	ADV	_	AdvType=Tim|Tense=Past	17	advmod	_	_
17	hóng	hóng	VERB	_	_	13	acl:relcl	_	_
18	được	được	ADV	_	AdvType=Mod	17	advmod	_	_
19	?	?	PUNCT	_	_	2	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 obl:tmod	color:blue
1	Tôi	tôi	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	đã	đã	ADV	_	AdvType=Tim|Tense=Past	3	advmod	_	_
3	gặp	gặp	VERB	_	_	0	root	_	_
4	Sanghamitra	Sanghamitra	PROPN	_	NameType=Prs	3	obj	_	_
5	tám	tám	NUM	_	NumType=Card	6	nummod	_	_
6	năm	năm	NOUN	_	_	7	obl:tmod	_	_
7	trước đây	trước đây	ADV	_	AdvType=Tim	3	advmod	_	_
8	khi	khi	ADV	_	_	11	advmod	_	_
9	tôi	tôi	PRON	_	Number=Sing|Person=1|PronType=Prs	11	nsubj	_	_
10	ở	ở	ADP	_	_	11	case	_	_
11	Bangalore	Bangalore	PROPN	_	NameType=Geo	3	advcl	_	_
12	tổ chức	tổ chức	VERB	_	_	11	advcl	_	_
13	một	một	NUM	_	NumType=Card	14	nummod	_	_
14	hội thảo	hội thảo	NOUN	_	_	12	obj	_	_
15	với	với	ADP	_	_	17	case	_	_
16	các	các	DET	_	Number=Plur	17	det	_	_
17	lãnh đạo	lãnh đạo	NOUN	_	_	14	nmod	_	_
18	của	của	ADP	_	_	20	case	_	_
19	các	các	DET	_	Number=Plur	20	det	_	_
20	tổ chức	tổ chức	NOUN	_	_	17	nmod	_	_
21	phi	phi	PART	_	Polarity=Neg	22	compound	_	_
22	chính phủ	chính phủ	NOUN	_	_	20	compound	_	_
23	khác nhau	khác nhau	ADJ	_	_	20	amod	_	_
24	làm việc	làm việc	VERB	_	_	20	acl	_	_
25	trong	trong	ADP	_	_	27	case	_	_
26	những	những	DET	_	_	27	det	_	_
27	lĩnh vực	lĩnh vực	NOUN	_	_	24	obl	_	_
28	nan giải	nan giải	ADJ	_	_	27	amod	_	_
29	nhất	nhất	ADV	_	AdvType=Deg	28	advmod	_	_
30	của	của	ADP	_	_	31	case	_	_
31	xã hội	xã hội	NOUN	_	_	27	nmod	_	_
32	.	.	PUNCT	_	_	3	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 obl:tmod	color:blue
1	Giờ	giờ	NOUN	_	_	7	obl:tmod	_	_
2	này	này	DET	_	PronType=Dem	1	det	_	_
3	hôm qua	hôm qua	NOUN	_	_	7	nmod:tmod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	7	punct	_	_
5	bệnh cúm	bệnh cúm	NOUN	_	_	7	nsubj	_	_
6	là	là	AUX	_	VerbType=Cop	7	cop	_	_
7	điều	điều	NOUN	_	_	0	root	_	_
8	mà	mà	PRON	_	PronType=Rel	11	nsubj	_	_
9	ta	ta	PRON	_	Number=Plur|Person=1|PronType=Prs	11	obj	_	_
10	ít	ít	ADV	_	_	12	advmod	_	_
11	lo	lo	VERB	_	_	7	acl:relcl	_	_
12	nhất	nhất	ADV	_	AdvType=Deg	11	advmod	_	_
13	.	.	PUNCT	_	_	7	punct	_	SpaceAfter=No

~~~


