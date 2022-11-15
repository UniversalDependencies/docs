---
layout: base
title:  'Statistics of compound:verbnoun in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `compound:verbnoun`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-compound.html">compound</a></tt>.
There are also 11 other language-specific subtypes of `compound`: <tt><a href="vi_vtb-dep-compound-adj.html">compound:adj</a></tt>, <tt><a href="vi_vtb-dep-compound-amod.html">compound:amod</a></tt>, <tt><a href="vi_vtb-dep-compound-apr.html">compound:apr</a></tt>, <tt><a href="vi_vtb-dep-compound-atov.html">compound:atov</a></tt>, <tt><a href="vi_vtb-dep-compound-dir.html">compound:dir</a></tt>, <tt><a href="vi_vtb-dep-compound-pron.html">compound:pron</a></tt>, <tt><a href="vi_vtb-dep-compound-prt.html">compound:prt</a></tt>, <tt><a href="vi_vtb-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="vi_vtb-dep-compound-svc.html">compound:svc</a></tt>, <tt><a href="vi_vtb-dep-compound-vmod.html">compound:vmod</a></tt>, <tt><a href="vi_vtb-dep-compound-z.html">compound:z</a></tt>.

57 nodes (0%) are attached to their parents as `compound:verbnoun`.

57 instances of `compound:verbnoun` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 6 pairs of parts of speech are connected with `compound:verbnoun`: <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (46; 81% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (4; 7% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NUM.html">NUM</a></tt> (2; 4% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (2; 4% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound:verbnoun	color:blue
1	Tan	tan	VERB	V	_	4	advcl	_	_
2	ca	ca	NOUN	N	_	1	compound:verbnoun	_	_
3	,	,	PUNCT	,	_	1	punct	_	_
4	về	về	VERB	V	_	0	root	_	_
5	tụm	tụm	VERB	V	_	4	compound:svc	_	_
6	với	với	ADP	Pre	_	7	case	_	_
7	nhau	nhau	NOUN	N	_	4	obl:with	_	_
8	,	,	PUNCT	,	_	9	punct	_	_
9	ôm	ôm	VERB	V	_	4	conj	_	_
10	cái	cái	NOUN	Nc	_	11	clf:det	_	_
11	tivi	tivi	NOUN	N	_	9	obj	_	_
12	là	là	PART	Prt	_	13	mark	_	_
13	hết	hết	PART	Prt	_	11	discourse	_	_
14	...	...	PUNCT	...	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 20 compound:verbnoun	color:blue
1	Bỏ	bỏ	VERB	V	_	8	advcl	_	_
2	con	con	NOUN	N	_	3	clf:det	_	_
3	cá	cá	NOUN	N	_	1	dep	_	_
4	làm	làm	VERB	V	_	3	acl	_	_
5	dở	dở	ADJ	Adj	_	4	xcomp	_	_
6	,	,	PUNCT	,	_	1	punct	_	_
7	Thu	Thu	PROPN	NNP	_	8	nsubj	_	_
8	đọc	đọc	VERB	V	_	0	root	_	_
9	mẩu	mẩu	NOUN	N	_	8	obj	_	_
10	tin	tin	NOUN	N	_	9	nmod	_	_
11	,	,	PUNCT	,	_	13	punct	_	_
12	mặt	mặt	NOUN	N	_	13	nsubj	_	_
13	tái mét	tái mét	ADJ	Adj	_	8	conj	_	_
14	,	,	PUNCT	,	_	16	punct	_	_
15	tay	tay	NOUN	N	_	16	nsubj	_	_
16	run	run	VERB	V	_	8	conj	_	_
17	như	như	SCONJ	SC	_	18	case	_	_
18	người	người	NOUN	N	_	16	obl	_	_
19	cảm	cảm	VERB	V	_	18	compound:vmod	_	_
20	lạnh	lạnh	ADJ	Adj	_	19	compound:verbnoun	_	_
21	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound:verbnoun	color:blue
1	Đây	đây	PRON	Pro	_	3	nsubj	_	_
2	là	là	AUX	V	_	3	cop	_	_
3	giờ	giờ	NOUN	N	_	11	advcl	_	_
4	tan tầm	tan tầm	VERB	V	_	3	compound:verbnoun	_	_
5	,	,	PUNCT	,	_	3	punct	_	_
6	các	các	DET	Det	_	7	det	_	_
7	chủng loại	chủng loại	NOUN	N	_	11	nsubj	_	_
8	xe	xe	NOUN	N	_	7	nmod	_	_
9	ngoại tỉnh	ngoại tỉnh	NOUN	N	_	7	nmod	_	_
10	cũng	cũng	ADV	Adv	_	11	advmod	_	_
11	ồ ạt	ồ ạt	ADJ	Adj	_	0	root	_	_
12	tiến	tiến	VERB	V	_	11	xcomp	_	_
13	vào	vào	ADP	Pre	_	14	case	_	_
14	nội thành	nội thành	NOUN	N	_	12	obl:comp	_	_
15	qua	qua	ADP	Pre	_	16	case	_	_
16	tuyến	tuyến	NOUN	N	_	12	obl:comp	_	_
17	này	này	PRON	Pro	_	16	det:pmod	_	_
18	.	.	PUNCT	.	_	11	punct	_	_

~~~


