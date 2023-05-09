---
layout: base
title:  'Statistics of compound:z in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `compound:z`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-compound.html">compound</a></tt>.
There are also 11 other language-specific subtypes of `compound`: <tt><a href="vi_vtb-dep-compound-adj.html">compound:adj</a></tt>, <tt><a href="vi_vtb-dep-compound-amod.html">compound:amod</a></tt>, <tt><a href="vi_vtb-dep-compound-apr.html">compound:apr</a></tt>, <tt><a href="vi_vtb-dep-compound-atov.html">compound:atov</a></tt>, <tt><a href="vi_vtb-dep-compound-dir.html">compound:dir</a></tt>, <tt><a href="vi_vtb-dep-compound-pron.html">compound:pron</a></tt>, <tt><a href="vi_vtb-dep-compound-prt.html">compound:prt</a></tt>, <tt><a href="vi_vtb-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="vi_vtb-dep-compound-svc.html">compound:svc</a></tt>, <tt><a href="vi_vtb-dep-compound-verbnoun.html">compound:verbnoun</a></tt>, <tt><a href="vi_vtb-dep-compound-vmod.html">compound:vmod</a></tt>.

17 nodes (0%) are attached to their parents as `compound:z`.

15 instances of `compound:z` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 7 pairs of parts of speech are connected with `compound:z`: <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-SYM.html">SYM</a></tt> (6; 35% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (4; 24% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-SYM.html">SYM</a></tt> (3; 18% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-SYM.html">SYM</a></tt> (1; 6% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-X.html">X</a></tt> (1; 6% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-X.html">X</a></tt> (1; 6% instances).


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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound:z	color:blue
1	Người	người	NOUN	N	_	4	nsubj	_	_
2	ấy	ấy	PRON	PRO	_	1	det:pmod	_	_
3	là	là	AUX	AUX	_	4	cop	_	_
4	nguyễn chơn	nguyễn chơn	PROPN	NNP	_	0	root	_	_
5	,	,	PUNCT	PUNCT	_	6	punct	_	_
6	tổng tham mưu	tổng tham mưu	NOUN	N	_	4	appos	_	_
7	phó	phó	NOUN	N	_	6	compound:z	_	_
8	hiện nay	hiện nay	NOUN	N	_	6	nmod	_	_
9	...	...	PUNCT	PUNCT	_	4	punct	_	_

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


