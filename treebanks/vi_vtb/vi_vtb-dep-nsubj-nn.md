---
layout: base
title:  'Statistics of nsubj:nn in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `nsubj:nn`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-nsubj.html">nsubj</a></tt>.
There are also 2 other language-specific subtypes of `nsubj`: <tt><a href="vi_vtb-dep-nsubj-pass.html">nsubj:pass</a></tt>, <tt><a href="vi_vtb-dep-nsubj-xsubj.html">nsubj:xsubj</a></tt>.

38 nodes (0%) are attached to their parents as `nsubj:nn`.

38 instances of `nsubj:nn` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.07894736842105.

The following 8 pairs of parts of speech are connected with `nsubj:nn`: <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (21; 55% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (5; 13% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (3; 8% instances), <tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (3; 8% instances), <tt><a href="vi_vtb-pos-NUM.html">NUM</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (2; 5% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj:nn	color:blue
1	Khi	khi	NOUN	N	_	5	obl:tmod	_	_
2	ấy	ấy	PRON	Pro	_	1	det:pmod	_	_
3	anh	anh	NOUN	N	_	5	nsubj:nn	_	_
4	20	20	NUM	Num	_	5	nummod	_	_
5	tuổi	tuổi	NOUN	N	_	0	root	_	_
6	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubj:nn	color:blue
1	Bà	bà	NOUN	N	_	2	nsubj	_	_
2	bảo	bảo	VERB	V	_	0	root	_	_
3	:	:	PUNCT	:	_	7	punct	_	_
4	"	"	PUNCT	``	_	7	punct	_	_
5	Nó	nó	PRON	Pro	_	7	nsubj:nn	_	_
6	là	là	AUX	V	_	7	cop	_	_
7	con trai	con trai	NOUN	N	_	2	parataxis	_	_
8	tôi	tôi	PRON	Pro	_	7	det:pmod	_	_
9	mà	mà	PART	Prt	_	7	discourse	_	_
10	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 nsubj:nn	color:blue
1	Bác sĩ	bác sĩ	NOUN	N	_	3	nsubj	_	_
2	Dung	Dung	PROPN	NNP	_	1	nmod	_	_
3	giở	giở	VERB	V	_	0	root	_	_
4	sổ	sổ	NOUN	N	_	3	obj	_	_
5	đọc	đọc	VERB	V	_	3	xcomp	_	_
6	to	to	ADJ	Adj	_	5	xcomp	_	_
7	:	:	PUNCT	:	_	11	punct	_	_
8	anh	anh	NOUN	Nc	_	9	clf:det	_	_
9	Kiều	Kiều	PROPN	NNP	_	11	nsubj:nn	_	_
10	5	5	NUM	Num	_	11	nummod	_	_
11	lạng	lạng	NOUN	Nu	_	3	parataxis	_	_
12	,	,	PUNCT	,	_	15	punct	_	_
13	bác	bác	NOUN	Nc	_	14	clf:det	_	_
14	Vui	Vui	PROPN	NNP	_	15	nsubj:nn	_	_
15	3	3	NUM	Num	_	11	conj	_	_
16	,	,	PUNCT	,	_	19	punct	_	_
17	chị	chị	NOUN	Nc	_	18	clf:det	_	_
18	Hoa	Hoa	PROPN	NNP	_	19	nsubj:nn	_	_
19	4	4	NUM	Num	_	11	conj	_	_
20	...	...	PUNCT	...	_	3	punct	_	_

~~~


