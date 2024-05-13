---
layout: base
title:  'Statistics of compound:prt in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-compound.html">compound</a></tt>.
There are also 11 other language-specific subtypes of `compound`: <tt><a href="vi_vtb-dep-compound-adj.html">compound:adj</a></tt>, <tt><a href="vi_vtb-dep-compound-amod.html">compound:amod</a></tt>, <tt><a href="vi_vtb-dep-compound-apr.html">compound:apr</a></tt>, <tt><a href="vi_vtb-dep-compound-atov.html">compound:atov</a></tt>, <tt><a href="vi_vtb-dep-compound-dir.html">compound:dir</a></tt>, <tt><a href="vi_vtb-dep-compound-pron.html">compound:pron</a></tt>, <tt><a href="vi_vtb-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="vi_vtb-dep-compound-svc.html">compound:svc</a></tt>, <tt><a href="vi_vtb-dep-compound-verbnoun.html">compound:verbnoun</a></tt>, <tt><a href="vi_vtb-dep-compound-vmod.html">compound:vmod</a></tt>, <tt><a href="vi_vtb-dep-compound-z.html">compound:z</a></tt>.

89 nodes (0%) are attached to their parents as `compound:prt`.

89 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 6 pairs of parts of speech are connected with `compound:prt`: <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt> (75; 84% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt> (5; 6% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (5; 6% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PART.html">PART</a></tt> (2; 2% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound:prt	color:blue
1	Hằng	hằng	ADV	ADV	_	2	advmod	_	_
2	ngày	ngày	NOUN	N	_	4	obl:tmod	_	_
3	em	em	NOUN	N	_	4	nsubj	_	_
4	xuất	xuất	VERB	V	_	0	root	_	_
5	đi	đi	ADV	ADV	_	4	compound:prt	_	_
6	mấy	mấy	DET	DET	_	7	det	_	_
7	tạ	tạ	NUM	NUM	_	8	nummod	_	_
8	thịt	thịt	NOUN	N	_	4	obj	_	_
9	nhưng	nhưng	SCONJ	C	_	12	cc	_	_
10	vẫn	vẫn	ADV	ADV	_	12	advmod	_	_
11	không	không	ADV	ADV	_	12	advmod:neg	_	_
12	hụt	hụt	ADJ	ADJ	_	4	conj	_	_
13	một	một	NUM	NUM	_	14	nummod	_	_
14	gam	gam	NOUN	NU	_	12	obj	_	_
15	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound:prt	color:blue
1	Nhưng	nhưng	SCONJ	SC	_	2	mark	_	_
2	khi	khi	NOUN	N	_	9	obl:tmod	_	_
3	hàng	hàng	NOUN	N	_	5	nsubj	_	_
4	đã	đã	ADV	Adv	_	5	advmod	_	_
5	chui	chui	VERB	V	_	2	acl:tmod	_	_
6	vào	vào	ADP	Pre	_	5	compound:prt	_	_
7	thị trường	thị trường	NOUN	N	_	6	obj	_	_
8	thì	thì	SCONJ	SC	_	9	mark	_	_
9	chịu	chịu	VERB	V	_	0	root	_	_
10	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 compound:prt	color:blue
1	Trong	trong	ADP	Pre	_	2	case	_	_
2	đó	đó	PRON	Pro	_	14	obl	_	_
3	hai	hai	NUM	Num	_	4	nummod	_	_
4	người	người	NOUN	N	_	14	nsubj	_	_
5	mới	mới	ADV	Adv	_	6	advmod	_	_
6	đến	đến	VERB	V	_	4	acl:subj	_	_
7	và	và	CCONJ	CC	_	9	cc	_	_
8	một	một	NUM	Num	_	9	nummod	_	_
9	người	người	NOUN	N	_	4	conj	_	_
10	có	có	VERB	V	_	9	acl:subj	_	_
11	cảm tình	cảm tình	NOUN	N	_	10	obj	_	_
12	với	với	ADP	Pre	_	13	case	_	_
13	giám đốc	giám đốc	NOUN	N	_	11	obl:about	_	_
14	được	được	VERB	V	_	0	root	_	_
15	loại	loại	VERB	V	_	14	xcomp	_	_
16	ra	ra	VERB	V	_	15	compound:prt	_	_
17	.	.	PUNCT	.	_	14	punct	_	_

~~~


