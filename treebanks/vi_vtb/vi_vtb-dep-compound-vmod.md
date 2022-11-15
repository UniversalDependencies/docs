---
layout: base
title:  'Statistics of compound:vmod in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `compound:vmod`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-compound.html">compound</a></tt>.
There are also 11 other language-specific subtypes of `compound`: <tt><a href="vi_vtb-dep-compound-adj.html">compound:adj</a></tt>, <tt><a href="vi_vtb-dep-compound-amod.html">compound:amod</a></tt>, <tt><a href="vi_vtb-dep-compound-apr.html">compound:apr</a></tt>, <tt><a href="vi_vtb-dep-compound-atov.html">compound:atov</a></tt>, <tt><a href="vi_vtb-dep-compound-dir.html">compound:dir</a></tt>, <tt><a href="vi_vtb-dep-compound-pron.html">compound:pron</a></tt>, <tt><a href="vi_vtb-dep-compound-prt.html">compound:prt</a></tt>, <tt><a href="vi_vtb-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="vi_vtb-dep-compound-svc.html">compound:svc</a></tt>, <tt><a href="vi_vtb-dep-compound-verbnoun.html">compound:verbnoun</a></tt>, <tt><a href="vi_vtb-dep-compound-z.html">compound:z</a></tt>.

552 nodes (1%) are attached to their parents as `compound:vmod`.

551 instances of `compound:vmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.05072463768116.

The following 8 pairs of parts of speech are connected with `compound:vmod`: <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (525; 95% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (9; 2% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (7; 1% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 compound:vmod	color:blue
1	Đêm	đêm	NOUN	N	_	7	obl:tmod	_	_
2	,	,	PUNCT	,	_	1	punct	_	_
3	đội	đội	NOUN	N	_	7	nsubj	_	_
4	quân	quân	NOUN	N	_	3	compound	_	_
5	từ	từ	ADP	Pre	_	6	case	_	_
6	mặt đất	mặt đất	NOUN	N	_	7	obl:comp	_	_
7	tỏa	tỏa	VERB	V	_	0	root	_	_
8	lên	lên	ADV	Adv	_	7	compound:prt	_	_
9	đặt	đặt	VERB	V	_	7	xcomp	_	_
10	mìn	mìn	NOUN	N	_	9	obj	_	_
11	gạt	gạt	VERB	V	_	10	compound:vmod	_	_
12	,	,	PUNCT	,	_	13	punct	_	_
13	gài	gài	VERB	V	_	9	conj	_	_
14	chông	chông	NOUN	N	_	13	obj	_	_
15	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound:vmod	color:blue
1	Hạnh	hạnh	PROPN	NNP	_	2	nsubj	_	_
2	lễ phép	lễ phép	ADJ	Adj	_	0	root	_	_
3	chào	chào	VERB	V	_	2	compound:vmod	_	_
4	bà	bà	NOUN	Nc	_	5	clf:det	_	_
5	Liễu	Liễu	PROPN	NNP	_	2	obj	_	_
6	và	và	CCONJ	CC	_	7	cc	_	_
7	ngồi	ngồi	VERB	V	_	2	conj	_	_
8	ghé	ghé	VERB	V	_	7	xcomp	_	_
9	bên	bên	NOUN	N	_	8	obj	_	_
10	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 compound:vmod	color:blue
1	Không	không	ADV	Adv	_	2	advmod:neg	_	_
2	ngờ	ngờ	VERB	V	_	4	discourse	_	_
3	ông	ông	NOUN	N	_	4	nsubj	_	_
4	gặp	gặp	VERB	V	_	0	root	_	_
5	lại	lại	ADV	Adv	_	4	advmod	_	_
6	cố nhân	cố nhân	NOUN	N	_	4	obj	_	_
7	ngay	ngay	PART	Prt	_	9	discourse	_	_
8	tại	tại	ADP	Pre	_	9	case	_	_
9	xưởng	xưởng	NOUN	N	_	4	advcl	_	_
10	vẽ	vẽ	NOUN	N	_	9	compound:vmod	_	_
11	thuở	thuở	NOUN	N	_	9	obl:tmod	_	_
12	nào	nào	PRON	Pro	_	11	det:pmod	_	_
13	.	.	PUNCT	.	_	4	punct	_	_

~~~


