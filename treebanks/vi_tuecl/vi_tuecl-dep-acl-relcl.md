---
layout: base
title:  'Statistics of acl:relcl in UD_Vietnamese-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-TueCL: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="vi_tuecl-dep-acl.html">acl</a></tt>.

37 nodes (2%) are attached to their parents as `acl:relcl`.

36 instances of `acl:relcl` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.48648648648649.

The following 6 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt> (31; 84% instances), <tt><a href="vi_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt> (2; 5% instances), <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-AUX.html">AUX</a></tt> (1; 3% instances), <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="vi_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 acl:relcl	color:blue
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


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 acl:relcl	color:blue
1	Tôi	tôi	PRON	_	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	tin	tin	VERB	_	_	0	root	_	_
3	rằng	rằng	SCONJ	_	_	6	mark	_	_
4	tôi	tôi	PRON	_	Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
5	đã	đã	ADV	_	AdvType=Tim|Tense=Past	6	advmod	_	_
6	làm	làm	VERB	_	_	2	ccomp	_	_
7	tốt	tốt	ADV	_	_	6	advmod	_	_
8	hơn	hơn	ADP	_	_	10	case	_	_
9	những	những	DET	_	_	10	det	_	_
10	gì	gì	PRON	_	PronType=Rel	7	obl	_	_
11	anh	anh	PRON	_	Gender=Masc|Number=Sing|Person=2|PronType=Prs	12	nsubj	_	_
12	yêu cầu	yêu cầu	VERB	_	_	10	acl:relcl	_	SpaceAfter=No
13	,	,	PUNCT	_	_	2	punct	_	_
14	nên	nên	ADV	_	_	18	advmod	_	SpaceAfter=No
15	,	,	PUNCT	_	_	18	punct	_	_
16	hai	hai	NUM	_	NumType=Card	17	nummod	_	_
17	ta	ta	PRON	_	Number=Plur|Person=2|PronType=Prs	18	nsubj	_	_
18	hoà	hoà	ADJ	_	_	2	parataxis	_	_
19	rồi	rồi	ADV	_	AdvType=Tim|Tense=Past	18	advmod	_	SpaceAfter=No
20	,	,	PUNCT	_	_	18	punct	_	_
21	nhé	nhé	PART	_	_	18	discourse	_	_
22	?	?	PUNCT	_	_	2	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 12 acl:relcl	color:blue
1	Khu vực	khu vực	NOUN	_	_	16	nsubj	_	_
2	thương mại	thương mại	NOUN	_	_	1	compound	_	_
3	tự do	tự do	ADJ	_	_	1	amod	_	_
4	đang	đang	ADV	_	AdvType=Tim|Tense=Pres	5	advmod	_	_
5	lớn lên	lớn lên	VERB	_	_	1	amod	_	_
6	của	của	ADP	_	_	7	case	_	_
7	Châu Á	Châu Á	PROPN	_	NameType=Nat	1	nmod:poss	_	SpaceAfter=No
8	,	,	PUNCT	_	_	1	punct	_	_
9	hầu như	hầu như	ADV	_	_	12	advmod	_	_
10	là	là	AUX	_	VerbType=Cop	12	cop	_	_
11	hoàn toàn	hoàn toàn	ADV	_	_	12	advmod	_	_
12	tự do	tự do	ADJ	_	_	1	acl:relcl	_	SpaceAfter=No
13	,	,	PUNCT	_	_	16	punct	_	_
14	giờ	giờ	ADV	_	_	16	advmod	_	_
15	đã	đã	ADV	_	AdvType=Tim|Tense=Past	16	advmod	_	_
16	có	có	VERB	_	_	0	root	_	_
17	lượng	lượng	NOUN	_	_	16	obj	_	_
18	trao đổi	trao đổi	NOUN	_	_	17	compound	_	_
19	hàng hóa	hàng hóa	NOUN	_	_	18	compound	_	_
20	lớn	lớn	ADJ	_	_	17	amod	_	_
21	hơn	hơn	ADP	_	_	25	case	_	_
22	cả	cả	DET	_	_	25	det	_	_
23	ở	ở	ADP	_	_	25	case	_	_
24	phía	phía	NOUN	_	_	25	compound	_	_
25	bên	bên	NOUN	_	_	16	obl	_	_
26	kia	kia	DET	_	PronType=Dem	25	det	_	_
27	Thái Bình Dương	Thái Bình Dương	PROPN	_	NameType=Geo	25	nmod	_	_
28	.	.	PUNCT	_	_	16	punct	_	SpaceAfter=No

~~~


