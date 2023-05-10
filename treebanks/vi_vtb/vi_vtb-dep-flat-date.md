---
layout: base
title:  'Statistics of flat:date in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `flat:date`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-flat.html">flat</a></tt>.
There are also 5 other language-specific subtypes of `flat`: <tt><a href="vi_vtb-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="vi_vtb-dep-flat-name.html">flat:name</a></tt>, <tt><a href="vi_vtb-dep-flat-number.html">flat:number</a></tt>, <tt><a href="vi_vtb-dep-flat-redup.html">flat:redup</a></tt>, <tt><a href="vi_vtb-dep-flat-time.html">flat:time</a></tt>.

122 nodes (0%) are attached to their parents as `flat:date`.

122 instances of `flat:date` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.59836065573771.

The following 5 pairs of parts of speech are connected with `flat:date`: <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NUM.html">NUM</a></tt> (98; 80% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-SYM.html">SYM</a></tt> (19; 16% instances), <tt><a href="vi_vtb-pos-NUM.html">NUM</a></tt>-<tt><a href="vi_vtb-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="vi_vtb-pos-NUM.html">NUM</a></tt>-<tt><a href="vi_vtb-pos-SYM.html">SYM</a></tt> (2; 2% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat:date	color:blue
1	Xinmei	xinmei	NOUN	N	_	2	nsubj	_	_
2	mua	mua	VERB	V	_	0	root	_	_
3	vé	vé	NOUN	N	_	2	obj	_	_
4	cho	cho	ADP	PRE	_	5	case	_	_
5	mẹ	mẹ	NOUN	N	_	2	obl:iobj	_	_
6	trở về	trở về	VERB	V	_	5	acl:subj	_	_
7	ngày	ngày	NOUN	N	_	6	obl:tmod	_	_
8	30/10	30/10	NUM	NUM	_	7	flat:date	_	_
9	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 flat:date	color:blue
1	Ngày	ngày	NOUN	N	_	10	obl:tmod	_	_
2	2	2	NUM	Num	_	1	nummod	_	_
3	-	-	SYM	-	_	1	flat:date	_	_
4	1	1	NUM	Num	_	1	flat:date	_	_
5	–	–	SYM	–	_	1	flat:date	_	_
6	2004	2004	NUM	Num	_	1	flat:date	_	_
7	,	,	PUNCT	,	_	1	punct	_	_
8	Hồ Văn Trương	Hồ Văn Trương	PROPN	NNP	_	10	nsubj	_	_
9	bị	bị	AUX	AUX	_	10	aux	_	_
10	té	té	VERB	V	_	0	root	_	_
11	lầu	lầu	NOUN	N	_	10	obj	_	_
12	trong	trong	ADP	Pre	_	13	case	_	_
13	khi	khi	NOUN	N	_	10	obl:tmod	_	_
14	làm việc	làm việc	VERB	V	_	13	acl:tmod	_	_
15	.	.	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 flat:date	color:blue
1	Kỷ niệm	kỷ niệm	NOUN	N	_	0	root	_	_
2	59	59	NUM	Num	_	3	nummod	_	_
3	năm	năm	NOUN	N	_	1	nmod	_	_
4	cách mạng	cách mạng	NOUN	N	_	3	nmod	_	_
5	tháng	tháng	NOUN	N	_	4	compound	_	_
6	Tám	tám	NUM	Num	_	5	compound	_	_
7	và	và	CCONJ	CC	_	8	cc	_	_
8	quốc khánh	quốc khánh	NOUN	N	_	4	conj	_	_
9	2	2	NUM	Num	_	8	compound	_	_
10	-	-	SYM	-	_	9	flat:date	_	_
11	9	9	NUM	Num	_	9	flat:date	_	_
12	.	.	PUNCT	.	_	1	punct	_	_

~~~


