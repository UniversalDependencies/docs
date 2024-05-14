---
layout: base
title:  'Statistics of iobj in UD_Vietnamese-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-TueCL: Relations: `iobj`

This relation is universal.

6 nodes (0%) are attached to their parents as `iobj`.

6 instances of `iobj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 3 pairs of parts of speech are connected with `iobj`: <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-PRON.html">PRON</a></tt> (4; 67% instances), <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-PRON.html">PRON</a></tt> (1; 17% instances), <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 iobj	color:blue
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
# visual-style 45	bgColor:blue
# visual-style 45	fgColor:white
# visual-style 44	bgColor:blue
# visual-style 44	fgColor:white
# visual-style 44 45 iobj	color:blue
1	Khi	khi	ADV	_	_	4	advmod	_	_
2	mỗi	mỗi	DET	_	PronType=Tot	3	det	_	_
3	người	người	NOUN	_	_	4	nsubj	_	_
4	thích	thích	VERB	_	VerbType=Mod	37	advcl	_	_
5	các	các	DET	_	Number=Plur	6	det	_	_
6	thứ	thứ	NOUN	_	_	4	obj	_	_
7	khác nhau	khác nhau	ADJ	_	_	6	amod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	13	punct	_	_
9	chẳng hạn	chẳng hạn	ADV	_	_	13	obl	_	_
10	như	như	ADP	_	_	9	case	_	_
11	một	một	NUM	_	NumType=Card	12	nummod	_	_
12	thành viên	thành viên	NOUN	_	_	13	nsubj	_	_
13	thích	thích	VERB	_	VerbType=Mod	4	parataxis	_	_
14	táo	táo	NOUN	_	_	13	obj	_	SpaceAfter=No
15	,	,	PUNCT	_	_	16	punct	_	_
16	chuối	chuối	NOUN	_	_	14	conj	_	_
17	và	và	CCONJ	_	_	18	cc	_	_
18	dừa	dừa	NOUN	_	_	14	conj	_	SpaceAfter=No
19	,	,	PUNCT	_	_	13	punct	_	_
20	thành viên	thành viên	NOUN	_	_	23	nsubj	_	_
21	khác	khác	ADJ	_	_	20	amod	_	_
22	lại	lại	ADV	_	_	23	advmod	_	_
23	thích	thích	VERB	_	VerbType=Mod	13	parataxis	_	_
24	chuối	chuối	NOUN	_	_	23	obj	_	SpaceAfter=No
25	,	,	PUNCT	_	_	26	punct	_	_
26	dừa	dừa	NOUN	_	_	24	conj	_	_
27	và	và	CCONJ	_	_	28	cc	_	_
28	táo	táo	NOUN	_	_	24	conj	_	SpaceAfter=No
29	...	...	PUNCT	_	_	23	punct	_	_
30	với	với	ADP	_	_	32	case	_	_
31	những	những	DET	_	_	32	det	_	_
32	ý kiến	ý kiến	NOUN	_	_	37	obl	_	_
33	khác nhau	khác nhau	ADJ	_	_	32	amod	_	_
34	đó	đó	DET	_	Deixis=Remt|PronType=Dem	32	det	_	SpaceAfter=No
35	,	,	PUNCT	_	_	37	punct	_	_
36	vấn đề	vấn đề	NOUN	_	_	37	nsubj	_	_
37	trở nên	trở nên	VERB	_	_	0	root	_	_
38	có	có	VERB	_	_	37	xcomp	_	_
39	chút	chút	NOUN	_	_	40	obl	_	_
40	phức tạp	phức tạp	ADJ	_	_	38	xcomp	_	_
41	để	để	ADP	_	_	42	mark	_	_
42	định	định	VERB	_	_	40	advcl	_	_
43	ra	ra	VERB	_	_	42	compound:prt	_	_
44	thứ	thứ	NOUN	_	_	42	obj	_	_
45	tự	tự	PRON	_	PronType=Prs|Reflex=Yes	44	iobj	_	_
46	ưu tiên	ưu tiên	VERB	_	_	44	acl:relcl	_	_
47	của	của	ADP	_	_	48	case	_	_
48	gia đình	gia đình	NOUN	_	_	44	nmod	_	_
49	.	.	PUNCT	_	_	37	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 iobj	color:blue
1	Và	và	CCONJ	_	_	5	cc	_	_
2	học	học	NOUN	_	_	5	nsubj	_	_
3	tập hạn	tập hạn	NOUN	_	_	2	compound	_	_
4	giám sát	giám sát	VERB	_	_	2	compound	_	_
5	đề cập	đề cập	VERB	_	_	0	root	_	_
6	đến	đến	ADP	_	_	8	case	_	_
7	một	một	NUM	_	NumType=Card	8	nummod	_	_
8	thực tế	thực tế	NOUN	_	_	5	obl	_	_
9	rằng	rằng	SCONJ	_	_	12	mark	_	_
10	chúng tôi	chúng tôi	PRON	_	Number=Plur|Person=1|PronType=Prs	12	nsubj	_	_
11	đã	đã	ADV	_	AdvType=Tim|Tense=Past	12	advmod	_	_
12	cung cấp	cung cấp	VERB	_	_	8	acl	_	_
13	các	các	DET	_	Number=Plur	14	det	_	_
14	thuật toán	thuật toán	NOUN	_	_	12	iobj	_	_
15	một	một	NUM	_	NumType=Card	16	nummod	_	_
16	tập	tập	NOUN	_	_	12	obj	_	_
17	dữ liệu	dữ liệu	NOUN	_	_	16	compound	_	_
18	bằng	bằng	ADP	_	_	20	case	_	_
19	các	các	DET	_	Number=Plur	20	det	_	_
20	dấu ngoặc kép	dấu ngoặc kép	NOUN	_	_	12	obl	_	_
21	câu	câu	NOUN	_	_	22	compound	_	_
22	trả lời	trả lời	NOUN	_	_	20	nmod	_	_
23	đúng	đúng	ADJ	_	_	24	amod	_	_
24	chức	chức	NOUN	_	_	22	nmod	_	_
25	.	.	PUNCT	_	_	5	punct	_	SpaceAfter=No

~~~


