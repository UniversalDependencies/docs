---
layout: base
title:  'Statistics of appos in UD_Vietnamese-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-TueCL: Relations: `appos`

This relation is universal.

6 nodes (0%) are attached to their parents as `appos`.

6 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.33333333333333.

The following 2 pairs of parts of speech are connected with `appos`: <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt> (5; 83% instances), <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-PROPN.html">PROPN</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 appos	color:blue
1	Đó	đó	PRON	_	Deixis=Remt|PronType=Dem	3	nsubj:outer	_	_
2	là	là	AUX	_	VerbType=Cop	3	cop	_	_
3	vì sao	vì sao	ADV	_	AdvType=Cau	0	root	_	_
4	họ	họ	PRON	_	Number=Plur|Person=3|PronType=Prs	6	nsubj	_	_
5	đã	đã	ADV	_	AdvType=Tim|Tense=Past	6	advmod	_	_
6	bắt đầu	bắt đầu	VERB	_	_	3	advcl	_	_
7	cung cấp	cung cấp	VERB	_	_	6	xcomp	_	_
8	những	những	DET	_	_	9	det	_	_
9	ống	ống	NOUN	_	_	7	obj	_	_
10	nhôm	nhôm	NOUN	_	_	9	compound	_	SpaceAfter=No
11	,	,	PUNCT	_	_	13	punct	_	_
12	những	những	DET	_	_	13	det	_	_
13	trại	trại	NOUN	_	_	9	appos	_	_
14	làm	làm	VERB	_	_	13	acl	_	_
15	bằng	bằng	ADP	_	_	16	case	_	_
16	nhôm	nhôm	NOUN	_	_	14	obl	_	_
17	.	.	PUNCT	_	_	3	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 appos	color:blue
1	Với	với	ADP	_	_	3	case	_	_
2	những	những	DET	_	_	3	det	_	_
3	người	người	NOUN	_	_	11	obl	_	_
4	có thể	có thể	AUX	_	Mood=Pot|VerbType=Mod	5	aux	_	_
5	phân biệt	phân biệt	VERB	_	_	3	acl:relcl	_	_
6	được	được	VERB	_	VerbType=Mod	5	xcomp	_	_
7	khi	khi	ADV	_	_	8	advmod	_	_
8	bỏ	bỏ	VERB	_	_	5	advcl	_	_
9	nhãn	nhãn	NOUN	_	_	8	obj	_	_
10	họ	họ	PRON	_	Number=Plur|Person=3|PronType=Prs	11	nsubj	_	_
11	chọn	chọn	VERB	_	_	0	root	_	_
12	màu	màu	NOUN	_	_	11	obj	_	_
13	"	"	PUNCT	_	_	14	punct	_	_
14	Đáng	Đáng	PROPN	_	NameType=Pro	12	appos	_	_
15	Yêu	Yêu	PROPN	_	NameType=Pro	14	flat	_	SpaceAfter=No
16	"	"	PUNCT	_	_	14	punct	_	_
17	nhưng	nhưng	CCONJ	_	_	22	cc	_	_
18	khi	khi	ADV	_	_	19	advmod	_	_
19	có	có	VERB	_	_	22	advcl	_	_
20	nhãn	nhãn	NOUN	_	_	19	nsubj	_	_
21	họ	họ	PRON	_	Number=Plur|Person=3|PronType=Prs	22	nsubj	_	_
22	chọn	chọn	VERB	_	_	11	conj	_	_
23	"	"	PUNCT	_	_	24	punct	_	_
24	Giày	Giày	PROPN	_	NameType=Pro	22	obj	_	_
25	Ba	Ba	PROPN	_	NameType=Pro	24	flat	_	_
26	Lê	Lê	PROPN	_	NameType=Pro	25	flat	_	SpaceAfter=No
27	"	"	PUNCT	_	_	24	punct	_	_
28	.	.	PUNCT	_	_	11	punct	_	SpaceAfter=No

~~~


