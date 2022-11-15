---
layout: base
title:  'Statistics of xcomp:vcomp in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `xcomp:vcomp`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-xcomp.html">xcomp</a></tt>.
There are also 1 other language-specific subtypes of `xcomp`: <tt><a href="vi_vtb-dep-xcomp-adj.html">xcomp:adj</a></tt>.

3 nodes (0%) are attached to their parents as `xcomp:vcomp`.

3 instances of `xcomp:vcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.66666666666667.

The following 2 pairs of parts of speech are connected with `xcomp:vcomp`: <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (2; 67% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 xcomp:vcomp	color:blue
1	Tôi	tôi	PRON	Pro	_	2	nsubj	_	_
2	nghĩ	nghĩ	VERB	V	_	0	root	_	_
3	hiện nay	hiện nay	NOUN	N	_	13	obl:tmod	_	_
4	việc	việc	NOUN	N	_	13	nsubj	_	_
5	đảm bảo	đảm bảo	VERB	V	_	4	acl:subj	_	_
6	không	không	ADV	Adv	_	7	advmod:neg	_	_
7	xảy	xảy	VERB	V	_	5	xcomp:vcomp	_	_
8	ra	ra	ADV	Adv	_	7	compound:prt	_	_
9	ách tắc	ách tắc	VERB	V	_	7	xcomp	_	_
10	giao thông	giao thông	NOUN	N	_	9	obj	_	_
11	là	là	AUX	V	_	13	cop	_	_
12	chưa	chưa	ADV	Adv	_	13	advmod:neg	_	_
13	đảm bảo	đảm bảo	VERB	V	_	2	ccomp	_	_
14	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 xcomp:vcomp	color:blue
1	Kim	kim	PROPN	NNP	_	2	nsubj	_	_
2	xuống	xuống	VERB	V	_	0	root	_	_
3	Hà Nội	Hà Nội	PROPN	NNP	_	2	obj	_	_
4	vừa	vừa	ADV	Adv	_	5	advmod	_	_
5	chăm	chăm	VERB	V	_	2	advcl:objective	_	_
6	bố	bố	NOUN	N	_	5	obj	_	_
7	,	,	PUNCT	,	_	9	punct	_	_
8	vừa	vừa	ADV	Adv	_	9	advmod	_	_
9	kiếm	kiếm	VERB	V	_	2	conj	_	_
10	việc	việc	NOUN	N	_	9	obj	_	_
11	làm thuê	làm thuê	VERB	V	_	10	xcomp:vcomp	_	_
12	.	.	PUNCT	.	_	2	punct	_	_

~~~


