---
layout: base
title:  'Statistics of vocative in UD_Vietnamese-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-TueCL: Relations: `vocative`

This relation is universal.

4 nodes (0%) are attached to their parents as `vocative`.

3 instances of `vocative` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.75.

The following 3 pairs of parts of speech are connected with `vocative`: <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-PROPN.html">PROPN</a></tt> (2; 50% instances), <tt><a href="vi_tuecl-pos-NUM.html">NUM</a></tt>-<tt><a href="vi_tuecl-pos-PROPN.html">PROPN</a></tt> (1; 25% instances), <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 14 vocative	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 vocative	color:blue
1	Four-six	Four-six	PROPN	_	Foreign=Yes|NameType=Com	8	vocative	_	_
2	Special	Special	PROPN	_	Foreign=Yes|NameType=Com	1	flat	_	_
3	Ops	Ops	PROPN	_	Foreign=Yes|NameType=Com	2	flat	_	_
4	Sergeant	Sergeant	PROPN	_	Foreign=Yes|NameType=Com	3	flat	_	SpaceAfter=No
5	,	,	PUNCT	_	_	8	punct	_	_
6	các anh	các anh	PRON	_	Gender=Masc|Number=Plur|Person=2|PronType=Prs	8	nsubj	_	_
7	có thể	có thể	AUX	_	Mood=Pot|VerbType=Mod	8	aux	_	_
8	10-25	10-25	NUM	_	_	0	root	_	_
9	đến	đến	ADP	_	_	10	case	_	_
10	River	River	PROPN	_	Foreign=Yes|NameType=Geo	8	nmod	_	_
11	Parkway	Parkway	PROPN	_	Foreign=Yes|NameType=Geo	10	flat	_	_
12	và	và	CCONJ	_	_	13	cc	_	_
13	Fordham	Fordham	PROPN	_	Foreign=Yes|NameType=Geo	11	conj	_	_
14	Road	Road	PROPN	_	Foreign=Yes|NameType=Geo	13	flat	_	_
15	.	.	PUNCT	_	_	8	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 vocative	color:blue
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


