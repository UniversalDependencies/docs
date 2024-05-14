---
layout: base
title:  'Statistics of mark in UD_Vietnamese-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-TueCL: Relations: `mark`

This relation is universal.

28 nodes (1%) are attached to their parents as `mark`.

28 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.60714285714286.

The following 4 pairs of parts of speech are connected with `mark`: <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-SCONJ.html">SCONJ</a></tt> (20; 71% instances), <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-ADP.html">ADP</a></tt> (5; 18% instances), <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-SCONJ.html">SCONJ</a></tt> (2; 7% instances), <tt><a href="vi_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_tuecl-pos-SCONJ.html">SCONJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 mark	color:blue
1	Rồi	rồi	INTJ	_	_	3	discourse	_	_
2	ta	ta	PRON	_	Number=Plur|Person=1|PronType=Prs	3	nsubj	_	_
3	cứ	cứ	VERB	_	_	0	root	_	_
4	thế	thế	NOUN	_	_	5	obj	_	_
5	phóng to	phóng to	VERB	_	_	3	xcomp	_	_
6	đến khi	đến khi	SCONJ	_	_	7	mark	_	_
7	thấy	thấy	VERB	_	_	5	advcl	_	_
8	trung tâm	trung tâm	NOUN	_	_	7	obj	_	_
9	nghệ thuật	nghệ thuật	NOUN	_	_	8	compound	_	_
10	này	này	DET	_	PronType=Dem	8	det	_	_
11	.	.	PUNCT	_	_	3	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 mark	color:blue
1	Nó	nó	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	không	không	ADV	_	Polarity=Neg	3	advmod	_	_
3	tương tác	tương tác	VERB	_	_	0	root	_	_
4	với	với	ADP	_	_	5	case	_	_
5	quang phổ	quang phổ	NOUN	_	_	3	obl	_	_
6	điện từ	điện từ	ADJ	_	_	5	amod	_	SpaceAfter=No
7	,	,	PUNCT	_	_	5	punct	_	_
8	thứ	thứ	NOUN	_	_	10	obj	_	_
9	chúng ta	chúng ta	PRON	_	Number=Plur|Person=1|PronType=Prs	10	nsubj	_	_
10	dùng	dùng	VERB	_	_	5	acl:relcl	_	_
11	để	để	ADP	_	_	12	mark	_	_
12	phát hiện	phát hiện	VERB	_	_	10	advcl	_	_
13	các	các	DET	_	Number=Plur	14	det	_	_
14	sự vật	sự vật	NOUN	_	_	12	obj	_	_
15	.	.	PUNCT	_	_	3	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 13 mark	color:blue
1	Và	và	CCONJ	_	_	10	cc	_	_
2	nếu	nếu	SCONJ	_	_	3	mark	_	_
3	có	có	VERB	_	_	10	advcl	_	_
4	một	một	NUM	_	NumType=Card	6	nummod	_	_
5	siêu	siêu	ADJ	_	_	6	amod	_	_
6	lỗ	lỗ	NOUN	_	_	3	nsubj	_	_
7	đen	đen	ADJ	_	_	6	amod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	_
9	chúng ta	chúng ta	PRON	_	Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
10	cần	cần	VERB	_	VerbType=Mod	0	root	_	_
11	thừa nhận	thừa nhận	VERB	_	_	10	xcomp	_	_
12	là	là	AUX	_	VerbType=Cop	16	cop	_	_
13	rằng	rằng	SCONJ	_	_	16	mark	_	_
14	đó	đó	PRON	_	Deixis=Remt|PronType=Dem	16	nsubj	_	_
15	là	là	AUX	_	VerbType=Cop	16	cop	_	_
16	lỗ	lỗ	NOUN	_	_	11	ccomp	_	_
17	đen	đen	ADJ	_	_	16	amod	_	_
18	ăn	ăn	VERB	_	_	16	acl:relcl	_	_
19	chay	chay	ADJ	_	_	18	xcomp	_	_
20	.	.	PUNCT	.	_	10	punct	_	SpaceAfter=No

~~~


