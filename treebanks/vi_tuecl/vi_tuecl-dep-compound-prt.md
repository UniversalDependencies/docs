---
layout: base
title:  'Statistics of compound:prt in UD_Vietnamese-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-TueCL: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="vi_tuecl-dep-compound.html">compound</a></tt>.

6 nodes (0%) are attached to their parents as `compound:prt`.

6 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.66666666666667.

The following 3 pairs of parts of speech are connected with `compound:prt`: <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-ADP.html">ADP</a></tt> (3; 50% instances), <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt> (2; 33% instances), <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-PART.html">PART</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 compound:prt	color:blue
1	Nói	nói	VERB	_	_	0	root	_	_
2	anh ta	anh ta	PRON	_	_	1	iobj	_	_
3	đừng	đừng	ADV	_	AdvType=Mod|Mood=Imp|Polarity=Neg	4	advmod	_	_
4	nhúng	nhúng	VERB	_	_	1	xcomp	_	_
5	mũi	mũi	NOUN	_	_	4	obj	_	_
6	vào	vào	ADP	_	_	4	compound:prt	_	SpaceAfter=No
7	,	,	PUNCT	_	_	11	punct	_	_
8	không	không	ADV	_	Polarity=Neg	9	advmod	_	_
9	anh ta	anh ta	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	_
10	sẽ	sẽ	ADV	_	AdvType=Tim|Tense=Fut	11	advmod	_	_
11	gặp	gặp	VERB	_	_	4	conj	_	_
12	rắc rối	rắc rối	NOUN	_	_	11	obl	_	_
13	.	.	PUNCT	_	_	1	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 compound:prt	color:blue
1	Nếu	nếu	SCONJ	_	_	4	mark	_	_
2	ai	ai	PRON	_	PronType=Ind	4	nsubj	_	_
3	đó	đó	DET	_	Deixis=Remt|PronType=Dem	2	det	_	_
4	dỡ	dỡ	VERB	_	_	21	advcl	_	_
5	video	video	NOUN	_	_	4	obj	_	_
6	của	của	ADP	_	_	7	case	_	_
7	bạn	bạn	PRON	_	Number=Sing|Person=2|PronType=Prs	5	nmod:poss	_	_
8	xuống	xuống	VERB	_	_	4	compound:prt	_	_
9	do	do	ADP	_	_	10	case	_	_
10	nhầm lẫn	nhầm lẫn	VERB	_	_	4	obl	_	_
11	hoặc	hoặc	CCONJ	_	_	13	cc	_	_
12	do	do	ADP	_	_	13	case	_	_
13	việc	việc	NOUN	_	_	14	compound	_	_
14	xác định	xác định	VERB	_	_	4	conj	_	_
15	sai	sai	ADJ	_	_	14	amod	_	_
16	tài liệu	tài liệu	NOUN	_	_	14	obj	_	_
17	cần	cần	VERB	_	VerbType=Mod	14	xcomp	_	_
18	bị	bị	AUX	_	VerbType=Mod|Voice=Pass	19	aux:pass	_	_
19	xóa	xóa	VERB	_	_	17	xcomp	_	SpaceAfter=No
20	,	,	PUNCT	_	_	21	punct	_	_
21	hiện	hiện	VERB	_	_	0	root	_	_
22	có	có	VERB	_	_	21	xcomp	_	_
23	quy trình	quy trình	NOUN	_	_	22	obj	_	_
24	thông báo	thông báo	VERB	_	_	23	acl	_	_
25	phản đối	phản đối	VERB	_	_	23	acl	_	_
26	cho	cho	ADP	_	_	27	case	_	_
27	việc	việc	NOUN	_	_	25	obl	_	_
28	này	này	DET	_	PronType=Dem	27	det	_	_
29	.	.	PUNCT	_	_	21	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 compound:prt	color:blue
1	Thực ra	thực ra	ADV	_	_	12	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	12	punct	_	_
3	dù	dù	SCONJ	_	_	5	mark	_	_
4	không	không	ADV	_	Polarity=Neg	5	advmod	_	_
5	biết	biết	VERB	_	_	12	advcl	_	_
6	gì	gì	PRON	_	PronType=Ind	5	obj	_	_
7	về	về	ADP	_	_	8	case	_	_
8	nó	nó	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	nmod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	12	punct	_	_
10	ông	ông	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	nsubj	_	_
11	đã	đã	ADV	_	AdvType=Tim|Tense=Past	12	advmod	_	_
12	phát minh	phát minh	VERB	_	_	0	root	_	_
13	ra	ra	PART	_	_	12	compound:prt	_	_
14	một	một	NUM	_	NumType=Card	15	nummod	_	_
15	thứ	thứ	NOUN	_	_	12	obj	_	_
16	mà	mà	PRON	_	PronType=Rel	19	obj	_	_
17	chúng ta	chúng ta	PRON	_	Number=Plur|Person=2|PronType=Prs	19	nsubj	_	_
18	có thể	có thể	AUX	_	Mood=Pot|VerbType=Mod	19	aux	_	_
19	thấy	thấy	VERB	_	_	15	acl:relcl	_	_
20	ở	ở	ADP	_	_	22	case	_	_
21	bất cứ	bất cứ	DET	_	_	22	det	_	_
22	hộp	hộp	NOUN	_	_	19	obl	_	_
23	bút	bút	NOUN	_	_	22	compound	_	_
24	học sinh	học sinh	NOUN	_	_	22	compound	_	_
25	nào	nào	PRON	_	PronType=Ind	22	det	_	SpaceAfter=No
26	:	:	PUNCT	_	_	22	punct	_	_
27	được	được	AUX	_	VerbType=Mod	28	aux	_	_
28	gọi	gọi	VERB	_	_	12	advcl	_	_
29	là	là	AUX	_	VerbType=Cop	28	cop	_	_
30	"	"	PUNCT	_	_	31	punct	_	SpaceAfter=No
31	bút	bút	NOUN	_	_	28	obj	_	_
32	xóa	xóa	VERB	_	_	31	compound	_	SpaceAfter=No
33	"	"	PUNCT	_	_	12	punct	_	_
34	.	.	PUNCT	_	_	12	punct	_	SpaceAfter=No

~~~


