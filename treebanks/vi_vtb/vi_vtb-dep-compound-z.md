---
layout: base
title:  'Statistics of compound:z in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `compound:z`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-compound.html">compound</a></tt>.
There are also 11 other language-specific subtypes of `compound`: <tt><a href="vi_vtb-dep-compound-adj.html">compound:adj</a></tt>, <tt><a href="vi_vtb-dep-compound-amod.html">compound:amod</a></tt>, <tt><a href="vi_vtb-dep-compound-apr.html">compound:apr</a></tt>, <tt><a href="vi_vtb-dep-compound-atov.html">compound:atov</a></tt>, <tt><a href="vi_vtb-dep-compound-dir.html">compound:dir</a></tt>, <tt><a href="vi_vtb-dep-compound-pron.html">compound:pron</a></tt>, <tt><a href="vi_vtb-dep-compound-prt.html">compound:prt</a></tt>, <tt><a href="vi_vtb-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="vi_vtb-dep-compound-svc.html">compound:svc</a></tt>, <tt><a href="vi_vtb-dep-compound-verbnoun.html">compound:verbnoun</a></tt>, <tt><a href="vi_vtb-dep-compound-vmod.html">compound:vmod</a></tt>.

18 nodes (0%) are attached to their parents as `compound:z`.

17 instances of `compound:z` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.05555555555556.

The following 5 pairs of parts of speech are connected with `compound:z`: <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-SYM.html">SYM</a></tt> (12; 67% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-SYM.html">SYM</a></tt> (3; 17% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-SYM.html">SYM</a></tt> (1; 6% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-X.html">X</a></tt> (1; 6% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-X.html">X</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound:z	color:blue
1	Đường	đường	NOUN	N	_	0	root	_	_
2	liên	liên	SYM	Z	_	1	compound:z	_	_
3	cảng	cảng	NOUN	N	_	2	compound	_	_
4	A5	A5	PROPN	NNP	_	1	nmod	_	_
5	:	:	PUNCT	:	_	6	punct	_	_
6	liệu	liệu	VERB	V	_	1	parataxis	_	_
7	có	có	VERB	V	_	6	xcomp	_	_
8	"	"	PUNCT	``	_	9	punct	_	_
9	chìm xuồng	chìm xuồng	X	X	_	7	obj	_	_
10	"	"	PUNCT	``	_	9	punct	_	_
11	?	?	PUNCT	?	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 compound:z	color:blue
1	Hà nội	hà nội	PROPN	NNP	_	11	obl	_	_
2	:	:	PUNCT	:	_	1	punct	_	_
3	98	98	NUM	Num	_	8	nummod	_	_
4	%	%	NOUN	Ny	_	3	flat:number	_	_
5	-	-	PUNCT	-	_	6	punct	_	_
6	100	100	NUM	Num	_	8	nummod	_	_
7	%	%	NOUN	Ny	_	6	flat:number	_	_
8	người	người	NOUN	N	_	11	nsubj	_	_
9	nghiện	nghiện	VERB	V	_	8	compound:vmod	_	_
10	tái	tái	SYM	Z	_	11	compound:z	_	_
11	nghiện	nghiện	VERB	V	_	0	root	_	_
12	.	.	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 21 compound:z	color:blue
1	Nguyễn văn nhã	nguyễn văn nhã	PROPN	NNP	_	9	nsubj	_	_
2	,	,	PUNCT	,	_	4	punct	_	_
3	anh	anh	NOUN	Nc	_	4	clf:det	_	_
4	con trai	con trai	NOUN	N	_	1	appos	_	_
5	lớn	lớn	ADJ	Adj	_	4	amod	_	_
6	của	của	ADP	Pre	_	7	case	_	_
7	bà	bà	PRON	Pro	_	4	nmod:poss	_	_
8	,	,	PUNCT	,	_	4	punct	_	_
9	đi	đi	VERB	V	_	0	root	_	_
10	thanh niên	thanh niên	NOUN	N	_	9	obj	_	_
11	xung phong	xung phong	VERB	V	_	10	compound:vmod	_	_
12	vài	vài	DET	Det	_	13	det	_	_
13	tháng	tháng	NOUN	N	_	9	obl:tmod	_	_
14	thì	thì	SCONJ	SC	_	16	cc	_	_
15	bị	bị	AUX	AUX	_	16	aux:pass	_	_
16	trả	trả	VERB	V	_	9	conj	_	_
17	về	về	ADV	Adv	_	16	compound:dir	_	_
18	vì	vì	ADP	Pre	_	19	case	_	_
19	có	có	VERB	V	_	16	obl	_	_
20	biểu hiện	biểu hiện	NOUN	N	_	19	obj	_	_
21	bất	bất	SYM	Z	_	22	compound:z	_	_
22	bình thường	bình thường	ADJ	Adj	_	20	amod	_	_
23	.	.	PUNCT	.	_	9	punct	_	_

~~~


