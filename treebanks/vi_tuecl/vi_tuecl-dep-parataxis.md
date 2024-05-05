---
layout: base
title:  'Statistics of parataxis in UD_Vietnamese-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-TueCL: Relations: `parataxis`

This relation is universal.

16 nodes (1%) are attached to their parents as `parataxis`.

16 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.9375.

The following 6 pairs of parts of speech are connected with `parataxis`: <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt> (10; 63% instances), <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt> (2; 13% instances), <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-AUX.html">AUX</a></tt> (1; 6% instances), <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-PROPN.html">PROPN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 parataxis	color:blue
1	Tôi	tôi	PRON	_	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
2	chỉ	chỉ	ADV	_	AdvType=Mod	4	advmod	_	_
3	không	không	ADV	_	Polarity=Neg	4	advmod	_	_
4	vượt qua	vượt qua	VERB	_	_	0	root	_	_
5	được	được	AUX	_	VerbType=Mod	4	aux	_	_
6	nó	nó	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	obj	_	_
7	--	--	PUNCT	_	_	4	punct	_	_
8	Bạn	bạn	PRON	_	Number=Sing|Person=2|PronType=Prs	9	nsubj	_	_
9	có	có	VERB	_	_	4	parataxis	_	_
10	những	những	DET	_	_	12	det	_	_
11	cái	cái	NOUN	_	_	10	clf	_	_
12	ống khói	ống khói	NOUN	_	_	9	obj	_	_
13	nhỏ	nhỏ	ADJ	_	_	12	amod	_	_
14	nhả	nhả	VERB	_	_	12	acl:relcl	_	_
15	khói	khói	NOUN	_	_	14	obj	_	_
16	đi	đi	VERB	_	_	14	xcomp	_	_
17	.	.	PUNCT	_	_	4	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 parataxis	color:blue
1	Vụ	vụ	NOUN	_	_	2	clf	_	_
2	triệt sản	triệt sản	NOUN	_	_	0	root	_	_
3	mà	mà	PRON	_	PronType=Rel	6	obj	_	_
4	Sơ	Sơ	PROPN	_	NameType=Prs	6	nsubj	_	_
5	Jude	Jude	PROPN	_	NameType=Giv	4	flat	_	_
6	bảo	bảo	VERB	_	_	2	acl:relcl	_	_
7	làm	làm	VERB	_	_	6	xcomp	_	SpaceAfter=No
8	...	...	PUNCT	_	_	2	punct	_	_
9	ông	ông	PRON	_	Gender=Masc|Number=Sing|Person=2|PronType=Prs	10	nsubj	_	_
10	làm	làm	VERB	_	_	2	parataxis	_	_
11	ẩu	ẩu	ADV	_	_	10	advmod	_	_
12	đấy	đấy	PART	_	_	10	discourse	_	SpaceAfter=No
13	,	,	PUNCT	_	_	10	punct	_	_
14	Arthur	Arthur	PROPN	_	Case=Voc|NameType=Prs	10	vocative	_	_
15	.	.	PUNCT	_	_	2	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 25 parataxis	color:blue
1	Ngài	ngài	PRON	_	Number=Sing|Polite=Form|PronType=Prs	3	nsubj	_	_
2	là	là	AUX	_	_	3	cop	_	_
3	tiếng nói	tiếng nói	NOUN	_	_	0	root	_	_
4	của	của	ADP	_	_	5	case	_	_
5	hòa bình	hòa bình	NOUN	_	_	3	nmod	_	SpaceAfter=No
6	...	...	PUNCT	_	_	3	punct	_	_
7	một	một	NUM	_	NumType=Card	8	nummod	_	_
8	giọng nói	giọng nói	NOUN	_	_	3	appos	_	_
9	mà	mà	PRON	_	PronType=Rel	12	nsubj	_	_
10	lúc	lúc	NOUN	_	_	12	obl	_	_
11	này	này	DET	_	PronType=Dem	10	det	_	_
12	cần	cần	VERB	_	VerbType=Mod	8	acl:relcl	_	_
13	phải	phải	AUX	_	VerbType=Mod	15	aux	_	_
14	được	được	AUX	_	VerbType=Aux|Voice=Pass	15	aux:pass	_	_
15	lắng nghe	lắng nghe	VERB	_	_	12	xcomp	_	SpaceAfter=No
16	...	...	PUNCT	_	_	3	punct	_	_
17	hơn	hơn	ADP	_	_	18	case	_	_
18	bao giờ	bao giờ	ADV	_	AdvType=Tim	19	obl	_	_
19	hết	hết	ADJ	_	_	25	advmod	_	_
20	những	những	DET	_	_	21	det	_	_
21	người	người	NOUN	_	_	25	nsubj	_	_
22	như	như	ADP	_	_	23	case	_	_
23	Abdul	Abdul	PROPN	_	NameType=Giv	21	nmod	_	_
24	Nazari	Nazari	PROPN	_	NameType=Sur	23	flat	_	_
25	có vẻ	có vẻ	AUX	_	VerbType=Aux	3	parataxis	_	_
26	rất	rất	ADV	_	AdvType=Deg	27	advmod	_	_
27	khó	khó	ADJ	_	_	25	xcomp	_	_
28	để	để	ADP	_	_	29	case	_	_
29	tìm thấy	tìm thấy	VERB	_	_	27	advcl	_	_
30	.	.	PUNCT	_	_	3	punct	_	SpaceAfter=No

~~~


