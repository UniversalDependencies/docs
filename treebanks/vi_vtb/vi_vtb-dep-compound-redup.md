---
layout: base
title:  'Statistics of compound:redup in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `compound:redup`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-compound.html">compound</a></tt>.
There are also 11 other language-specific subtypes of `compound`: <tt><a href="vi_vtb-dep-compound-adj.html">compound:adj</a></tt>, <tt><a href="vi_vtb-dep-compound-amod.html">compound:amod</a></tt>, <tt><a href="vi_vtb-dep-compound-apr.html">compound:apr</a></tt>, <tt><a href="vi_vtb-dep-compound-atov.html">compound:atov</a></tt>, <tt><a href="vi_vtb-dep-compound-dir.html">compound:dir</a></tt>, <tt><a href="vi_vtb-dep-compound-pron.html">compound:pron</a></tt>, <tt><a href="vi_vtb-dep-compound-prt.html">compound:prt</a></tt>, <tt><a href="vi_vtb-dep-compound-svc.html">compound:svc</a></tt>, <tt><a href="vi_vtb-dep-compound-verbnoun.html">compound:verbnoun</a></tt>, <tt><a href="vi_vtb-dep-compound-vmod.html">compound:vmod</a></tt>, <tt><a href="vi_vtb-dep-compound-z.html">compound:z</a></tt>.

4 nodes (0%) are attached to their parents as `compound:redup`.

4 instances of `compound:redup` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `compound:redup`: <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt> (2; 50% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (2; 50% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 14 compound:redup	color:blue
1	Mới	mới	ADV	Adv	_	2	discourse	_	_
2	hay	hay	VERB	V	_	11	advcl	_	_
3	tất cả	tất cả	DET	Det	_	4	det	_	_
4	chúng tôi	chúng tôi	PRON	Pro	_	11	nsubj:pass	_	_
5	đã	đã	ADV	Adv	_	11	advmod	_	_
6	được	được	AUX	AUX	_	11	aux:pass	_	_
7	hai	hai	NUM	Num	_	8	nummod	_	_
8	ông bà	ông bà	NOUN	N	_	11	obl:agent	_	_
9	người	người	NOUN	Nc	_	10	clf:det	_	_
10	Tàu	Tàu	PROPN	NNP	_	8	nmod	_	_
11	mua	mua	VERB	V	_	0	root	_	_
12	đi	đi	ADV	Adv	_	11	compound:redup	_	_
13	bán	bán	VERB	V	_	11	compound:redup	_	_
14	lại	lại	ADV	Adv	_	11	compound:redup	_	_
15	từ	từ	ADP	Pre	_	16	case	_	_
16	người	người	NOUN	N	_	11	obl	_	_
17	khác	khác	ADJ	Adj	_	16	amod	_	_
18	như	như	SCONJ	SC	_	21	case	_	_
19	những	những	DET	Det	_	20	det	_	_
20	món	món	NOUN	N	_	21	nmod	_	_
21	hàng	hàng	NOUN	N	_	11	obl	_	_
22	.	.	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 compound:redup	color:blue
1	Thanh	thanh	PROPN	NNP	_	2	nsubj	_	_
2	bắt chuyện	bắt chuyện	VERB	V	_	0	root	_	_
3	với	với	ADP	Pre	_	4	case	_	_
4	Hùng	Hùng	PROPN	NNP	_	2	obl:with	_	_
5	và	và	CCONJ	CC	_	6	cc	_	_
6	nói	nói	VERB	V	_	2	conj	_	_
7	:	:	PUNCT	:	_	10	punct	_	_
8	"	"	PUNCT	``	_	10	punct	_	_
9	Tôi	tôi	PRON	Pro	_	10	nsubj	_	_
10	trông	trông	VERB	V	_	2	parataxis	_	_
11	ông	ông	NOUN	N	_	10	obj	_	_
12	quen quen	quen quen	VERB	V	_	10	compound:redup	_	_
13	?	?	PUNCT	?	_	10	punct	_	_
14	"	"	PUNCT	``	_	10	punct	_	_
15	.	.	PUNCT	.	_	2	punct	_	_

~~~


