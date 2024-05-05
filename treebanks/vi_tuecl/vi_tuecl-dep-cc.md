---
layout: base
title:  'Statistics of cc in UD_Vietnamese-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-TueCL: Relations: `cc`

This relation is universal.

47 nodes (2%) are attached to their parents as `cc`.

47 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.4468085106383.

The following 6 pairs of parts of speech are connected with `cc`: <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-CCONJ.html">CCONJ</a></tt> (23; 49% instances), <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-CCONJ.html">CCONJ</a></tt> (13; 28% instances), <tt><a href="vi_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_tuecl-pos-CCONJ.html">CCONJ</a></tt> (3; 6% instances), <tt><a href="vi_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="vi_tuecl-pos-CCONJ.html">CCONJ</a></tt> (3; 6% instances), <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-SCONJ.html">SCONJ</a></tt> (3; 6% instances), <tt><a href="vi_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_tuecl-pos-CCONJ.html">CCONJ</a></tt> (2; 4% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 cc	color:blue
1	Và	và	CCONJ	_	_	5	cc	_	_
2	cũng	cũng	ADV	_	_	5	advmod	_	_
3	nó	nó	PRON	_	Gender=Neut|Number=Sing|Person=3|Polite=Infm|PronType=Prs	5	nsubj	_	_
4	đã	đã	ADV	_	AdvType=Tim|Tense=Past	5	advmod	_	_
5	giúp	giúp	VERB	_	_	0	root	_	_
6	chúng ta	chúng ta	PRON	_	Number=Plur|Person=1|PronType=Prs	5	obj	_	_
7	nuôi sống	nuôi sống	VERB	_	_	5	xcomp	_	_
8	mấy	mấy	DET	_	_	10	det	_	_
9	đứa	đứa	NOUN	_	_	8	clf	_	_
10	cháu chắt	cháu chắt	NOUN	_	_	7	obj	_	_
11	.	.	PUNCT	_	_	5	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 cc	color:blue
1	Hắn	hắn	PRON	_	Gender=Masc|Number=Sing|Person=3|Polite=Infm|PronType=Prs	2	nsubj	_	_
2	trầm tĩnh	trầm tĩnh	VERB	_	_	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	có	có	VERB	_	_	2	conj	_	_
5	uống	uống	VERB	_	_	4	xcomp	_	_
6	rượu	rượu	NOUN	_	_	5	obj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	11	punct	_	_
8	nhưng	nhưng	CCONJ	_	_	11	cc	_	_
9	không	không	ADV	_	Polarity=Neg	11	advmod	_	_
10	tới	tới	ADP	_	_	11	case	_	_
11	nỗi	nỗi	NOUN	_	_	2	conj	_	_
12	say	say	ADJ	_	_	11	amod	_	_
13	quá	quá	ADV	_	AdvType=Deg	12	advmod	_	_
14	.	.	PUNCT	_	_	2	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 10 cc	color:blue
1	Đừng	đừng	ADV	_	AdvType=Mod|Mood=Imp|Polarity=Neg	3	advmod	_	_
2	chỉ	chỉ	ADV	_	AdvType=Mod	3	advmod	_	_
3	nghĩ	nghĩ	VERB	_	_	0	root	_	_
4	"	"	PUNCT	_	_	6	punct	_	SpaceAfter=No
5	Tôi	tôi	PRON	_	Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
6	có	có	VERB	_	_	3	ccomp	_	_
7	lòng	lòng	NOUN	_	_	6	obj	_	_
8	từ bi	từ bi	ADJ	_	_	7	amod	_	SpaceAfter=No
9	"	"	PUNCT	_	_	8	punct	_	_
10	hoặc	hoặc	CCONJ	_	_	14	cc	_	SpaceAfter=No
11	"	"	PUNCT	_	_	14	punct	_	_
12	tôi	tôi	PRON	_	Number=Sing|Person=1|PronType=Prs	14	nsubj	_	_
13	không	không	ADV	_	Polarity=Neg	14	advmod	_	_
14	từ bi	từ bi	ADJ	_	_	8	conj	_	SpaceAfter=No
15	"	"	PUNCT	_	_	14	punct	_	_
16	và	và	CCONJ	_	_	17	cc	_	_
17	nghĩ	nghĩ	VERB	_	_	3	conj	_	_
18	rằng	rằng	SCONJ	_	_	20	mark	_	_
19	bạn	bạn	PRON	_	Number=Sing|Person=2|PronType=Prs	20	nsubj	_	_
20	mắc kẹt	mắc kẹt	VERB	_	_	17	ccomp	_	_
21	ở	ở	ADP	_	_	22	case	_	_
22	đó	đó	PRON	_	Deixis=Remt|PronType=Dem	20	obl	_	_
23	.	.	PUNCT	_	_	3	punct	_	SpaceAfter=No

~~~


