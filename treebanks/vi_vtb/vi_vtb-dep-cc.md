---
layout: base
title:  'Statistics of cc in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `cc`

This relation is universal.

1038 nodes (2%) are attached to their parents as `cc`.

1025 instances of `cc` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.21965317919075.

The following 17 pairs of parts of speech are connected with `cc`: <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-CCONJ.html">CCONJ</a></tt> (365; 35% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-CCONJ.html">CCONJ</a></tt> (235; 23% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-SCONJ.html">SCONJ</a></tt> (231; 22% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-CCONJ.html">CCONJ</a></tt> (65; 6% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-SCONJ.html">SCONJ</a></tt> (54; 5% instances), <tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_vtb-pos-CCONJ.html">CCONJ</a></tt> (35; 3% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-SCONJ.html">SCONJ</a></tt> (26; 3% instances), <tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt>-<tt><a href="vi_vtb-pos-CCONJ.html">CCONJ</a></tt> (9; 1% instances), <tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt>-<tt><a href="vi_vtb-pos-SCONJ.html">SCONJ</a></tt> (4; 0% instances), <tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_vtb-pos-SCONJ.html">SCONJ</a></tt> (4; 0% instances), <tt><a href="vi_vtb-pos-NUM.html">NUM</a></tt>-<tt><a href="vi_vtb-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt>-<tt><a href="vi_vtb-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt>-<tt><a href="vi_vtb-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="vi_vtb-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	Cần	cần	AUX	AUX	_	2	aux	_	_
2	về	về	VERB	V	_	0	root	_	_
3	khảo sát	khảo sát	VERB	V	_	2	xcomp	_	_
4	và	và	CCONJ	CC	_	5	cc	_	_
5	ra	ra	VERB	V	_	2	conj	_	_
6	báo cáo	báo cáo	VERB	V	_	5	xcomp	_	_
7	lại	lại	VERB	V	_	6	xcomp	_	_
8	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc	color:blue
1	Bờ	bờ	NOUN	N	_	8	nsubj	_	_
2	tre	tre	NOUN	N	_	1	nmod	_	_
3	ruộng	ruộng	NOUN	N	_	1	conj	_	_
4	lúa	lúa	NOUN	N	_	3	nmod	_	_
5	và	và	CCONJ	CC	_	6	cc	_	_
6	nhà	nhà	NOUN	N	_	1	conj	_	_
7	cổ	cổ	ADJ	ADJ	_	6	compound:amod	_	_
8	hấp dẫn	hấp dẫn	VERB	V	_	0	root	_	_
9	du khách	du khách	NOUN	N	_	8	obj	_	_
10	.	.	PUNCT	PUNCT	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc	color:blue
1	Thế là	thế là	SCONJ	C	_	3	cc	_	_
2	lại	lại	ADV	ADV	_	3	advmod	_	_
3	thêm	thêm	VERB	V	_	0	root	_	_
4	những	những	DET	DET	_	6	det	_	_
5	chú	chú	NOUN	N	_	4	clf	_	_
6	chim	chim	NOUN	N	_	3	obj	_	_
7	vô tội	vô tội	ADJ	ADJ	_	6	amod	_	_
8	nữa	nữa	ADV	ADV	_	6	advmod	_	_
9	sa	sa	VERB	V	_	6	acl:subj	_	_
10	lưới	lưới	NOUN	N	_	9	compound:verbnoun	_	_
11	...	...	PUNCT	PUNCT	_	3	punct	_	_

~~~


