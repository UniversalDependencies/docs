---
layout: base
title:  'Statistics of compound:prt in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-compound.html">compound</a></tt>.
There are also 11 other language-specific subtypes of `compound`: <tt><a href="vi_vtb-dep-compound-adj.html">compound:adj</a></tt>, <tt><a href="vi_vtb-dep-compound-amod.html">compound:amod</a></tt>, <tt><a href="vi_vtb-dep-compound-apr.html">compound:apr</a></tt>, <tt><a href="vi_vtb-dep-compound-atov.html">compound:atov</a></tt>, <tt><a href="vi_vtb-dep-compound-dir.html">compound:dir</a></tt>, <tt><a href="vi_vtb-dep-compound-pron.html">compound:pron</a></tt>, <tt><a href="vi_vtb-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="vi_vtb-dep-compound-svc.html">compound:svc</a></tt>, <tt><a href="vi_vtb-dep-compound-verbnoun.html">compound:verbnoun</a></tt>, <tt><a href="vi_vtb-dep-compound-vmod.html">compound:vmod</a></tt>, <tt><a href="vi_vtb-dep-compound-z.html">compound:z</a></tt>.

104 nodes (0%) are attached to their parents as `compound:prt`.

104 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 7 pairs of parts of speech are connected with `compound:prt`: <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt> (92; 88% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt> (6; 6% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 compound:prt	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 compound:prt	color:blue
1	Gái	gái	NOUN	N	_	0	root	_	_
2	Hà Nội	Hà Nội	PROPN	NNP	_	1	compound	_	_
3	nhưng	nhưng	SCONJ	SC	_	8	cc	_	_
4	chữ	chữ	NOUN	N	_	8	obl	_	_
5	công dung ngôn hạnh	công dung ngôn hạnh	X	X	_	4	compound	_	_
6	ít	ít	ADJ	Adj	_	7	advmod:adj	_	_
7	người	người	NOUN	N	_	8	nsubj	_	_
8	bì	bì	VERB	V	_	1	conj	_	_
9	kịp	kịp	ADJ	Adj	_	8	compound:prt	_	_
10	.	.	PUNCT	.	_	1	punct	_	_

~~~


