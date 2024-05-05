---
layout: base
title:  'Statistics of csubj in UD_Vietnamese-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-TueCL: Relations: `csubj`

This relation is universal.

2 nodes (0%) are attached to their parents as `csubj`.

2 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.5.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt> (1; 50% instances), <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 12 csubj	color:blue
1	Tôi	tôi	PRON	_	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	nhớ	nhớ	VERB	_	_	0	root	_	_
3	là	là	AUX	_	VerbType=Cop	2	cop	_	_
4	có	có	VERB	_	_	2	ccomp	_	_
5	lần	lần	NOUN	_	_	4	obj	_	_
6	mẹ	mẹ	NOUN	_	_	9	nsubj	_	_
7	tôi	tôi	PRON	_	Number=Sing|Person=1|PronType=Prs	6	nmod:poss	_	_
8	từng	từng	ADV	_	_	9	advmod	_	_
9	nói	nói	VERB	_	_	2	ccomp	_	SpaceAfter=No
10	,	,	PUNCT	_	_	12	punct	_	_
11	ai	ai	PRON	_	PronType=Rel	12	nsubj	_	_
12	có	có	VERB	_	_	20	csubj	_	_
13	lòng	lòng	NOUN	_	_	12	obj	_	_
14	kiên nhẫn	kiên nhẫn	ADJ	_	_	13	amod	_	_
15	đến	đến	ADP	_	_	16	case	_	_
16	cùng	cùng	NOUN	_	_	13	nmod	_	_
17	sẽ	sẽ	ADV	_	AdvType=Tim|Tense=Fut	19	advmod	_	_
18	là	là	AUX	_	VerbType=Cop	19	cop	_	_
19	người	người	NOUN	_	_	20	clf	_	_
20	chiến thắng	chiến thắng	NOUN	_	_	9	ccomp	_	_
21	.	.	PUNCT	_	_	2	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 17 csubj	color:blue
1	Tôi	tôi	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	rất	rất	ADV	_	AdvType=Deg	3	advmod	_	_
3	thích	thích	VERB	_	VerbType=Mod	0	root	_	_
4	chủ đề	chủ đề	NOUN	_	_	3	obj	_	_
5	lần	lần	NOUN	_	_	3	obl:tmod	_	_
6	này	này	DET	_	PronType=Dem	5	det	_	SpaceAfter=No
7	,	,	PUNCT	_	_	3	punct	_	_
8	-	-	PUNCT	_	_	3	punct	_	_
9	"	"	PUNCT	_	_	10	punct	_	SpaceAfter=No
10	The	The	PROPN	_	Foreign=Yes|NameType=Oth	3	parataxis	_	_
11	Future	Future	PROPN	_	Foreign=Yes|NameType=Oth	10	flat	_	_
12	You	You	PROPN	_	Foreign=Yes|NameType=Oth	11	flat	_	SpaceAfter=No
13	"	"	PUNCT	_	_	10	punct	_	_
14	-	-	PUNCT	_	_	3	punct	_	_
15	bởi lẽ	bởi lẽ	SCONJ	_	_	20	mark	_	_
16	việc	việc	NOUN	_	_	17	compound	_	_
17	hướng	hướng	VERB	_	_	20	csubj	_	_
18	đến	đến	ADP	_	_	19	case	_	_
19	tương lai	tương lai	NOUN	_	_	17	obl	_	_
20	cho	cho	VERB	_	_	3	advcl	_	_
21	ta	ta	PRON	_	Number=Plur|Person=1|PronType=Prs	20	iobj	_	_
22	cơ hội	cơ hội	NOUN	_	_	20	obj	_	_
23	tranh luận	tranh luận	VERB	_	_	22	xcomp	_	_
24	ở	ở	ADP	_	_	25	case	_	_
25	hiện tại	hiện tại	NOUN	_	_	23	obl	_	SpaceAfter=No
26	,	,	PUNCT	_	_	27	punct	_	_
27	cho	cho	VERB	_	_	20	parataxis	_	_
28	ta	ta	PRON	_	Number=Plur|Person=1|PronType=Prs	27	obj	_	_
29	nhìn	nhìn	VERB	_	_	27	xcomp	_	_
30	tương lai	tương lai	NOUN	_	_	29	obj	_	_
31	qua	qua	ADP	_	_	32	case	_	_
32	lăng kính	lăng kính	NOUN	_	_	29	obl	_	_
33	của	của	ADP	_	_	35	case	_	_
34	từng	từng	DET	_	_	35	det	_	_
35	người	người	NOUN	_	_	32	nmod:poss	_	_
36	.	.	PUNCT	_	_	3	punct	_	SpaceAfter=No

~~~


