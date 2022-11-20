---
layout: base
title:  'Statistics of compound:amod in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `compound:amod`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-compound.html">compound</a></tt>.
There are also 11 other language-specific subtypes of `compound`: <tt><a href="vi_vtb-dep-compound-adj.html">compound:adj</a></tt>, <tt><a href="vi_vtb-dep-compound-apr.html">compound:apr</a></tt>, <tt><a href="vi_vtb-dep-compound-atov.html">compound:atov</a></tt>, <tt><a href="vi_vtb-dep-compound-dir.html">compound:dir</a></tt>, <tt><a href="vi_vtb-dep-compound-pron.html">compound:pron</a></tt>, <tt><a href="vi_vtb-dep-compound-prt.html">compound:prt</a></tt>, <tt><a href="vi_vtb-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="vi_vtb-dep-compound-svc.html">compound:svc</a></tt>, <tt><a href="vi_vtb-dep-compound-verbnoun.html">compound:verbnoun</a></tt>, <tt><a href="vi_vtb-dep-compound-vmod.html">compound:vmod</a></tt>, <tt><a href="vi_vtb-dep-compound-z.html">compound:z</a></tt>.

35 nodes (0%) are attached to their parents as `compound:amod`.

34 instances of `compound:amod` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `compound:amod`: <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (32; 91% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound:amod	color:blue
1	Đó	đó	PRON	Pro	_	5	nsubj	_	_
2	là	là	AUX	V	_	5	cop	_	_
3	khoảng	khoảng	ADJ	Adj	_	5	advmod:adj	_	_
4	cuối	cuối	ADJ	Adj	_	5	compound:amod	_	_
5	năm	năm	NOUN	N	_	0	root	_	_
6	1963	1963	NUM	Num	_	5	flat:date	_	_
7	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 compound:amod	color:blue
1	Để	để	ADP	Pre	_	21	advcl	_	_
2	chắc chắn	chắc chắn	ADJ	Adj	_	1	amod	_	_
3	hơn	hơn	ADV	Adv	_	2	advmod:adj	_	_
4	,	,	PUNCT	,	_	1	punct	_	_
5	Thọ	Thọ	PROPN	NNP	_	6	nsubj	_	_
6	đợi	đợi	VERB	V	_	21	advcl	_	_
7	lần	lần	NOUN	N	_	6	obj	_	_
8	sau	sau	ADJ	Adj	_	7	nmod	_	_
9	đúng	đúng	ADJ	Adj	_	7	appos:nmod	_	_
10	lúc	lúc	NOUN	N	_	9	obj	_	_
11	số	số	NOUN	N	_	14	nsubj	_	_
12	điện thoại	điện thoại	NOUN	N	_	11	compound	_	_
13	lạ	lạ	ADJ	Adj	_	12	amod	_	_
14	hiện	hiện	VERB	V	_	10	acl:tmod	_	_
15	trên	trên	ADP	Pre	_	16	case	_	_
16	máy	máy	NOUN	N	_	14	obl	_	_
17	cố định	cố định	NOUN	N	_	16	compound:amod	_	_
18	,	,	PUNCT	,	_	9	punct	_	_
19	anh	anh	NOUN	N	_	21	nsubj	_	_
20	lại	lại	ADV	Adv	_	21	advmod	_	_
21	gọi	gọi	VERB	V	_	0	root	_	_
22	về	về	ADP	Pre	_	23	case	_	_
23	nhà	nhà	NOUN	N	_	21	obl	_	_
24	giám đốc	giám đốc	NOUN	N	_	23	nmod	_	_
25	.	.	PUNCT	.	_	21	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 compound:amod	color:blue
1	Ba	ba	NUM	Num	_	2	nummod	_	_
2	lần	lần	NOUN	N	_	3	obl	_	_
3	thay	thay	VERB	V	_	11	advcl	_	_
4	số	số	NOUN	N	_	3	obj	_	_
5	gọi	gọi	VERB	V	_	4	compound:vmod	_	_
6	nhưng	nhưng	SCONJ	SC	_	11	mark	_	_
7	máy	máy	NOUN	N	_	11	nsubj	_	_
8	di động	di động	VERB	V	_	7	compound:amod	_	_
9	kia	kia	PRON	Pro	_	7	det:pmod	_	_
10	vẫn	vẫn	ADV	Adv	_	11	advmod	_	_
11	im lặng	im lặng	ADJ	Adj	_	0	root	_	_
12	.	.	PUNCT	.	_	11	punct	_	_

~~~


