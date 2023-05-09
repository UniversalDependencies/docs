---
layout: base
title:  'Statistics of compound:pron in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `compound:pron`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-compound.html">compound</a></tt>.
There are also 11 other language-specific subtypes of `compound`: <tt><a href="vi_vtb-dep-compound-adj.html">compound:adj</a></tt>, <tt><a href="vi_vtb-dep-compound-amod.html">compound:amod</a></tt>, <tt><a href="vi_vtb-dep-compound-apr.html">compound:apr</a></tt>, <tt><a href="vi_vtb-dep-compound-atov.html">compound:atov</a></tt>, <tt><a href="vi_vtb-dep-compound-dir.html">compound:dir</a></tt>, <tt><a href="vi_vtb-dep-compound-prt.html">compound:prt</a></tt>, <tt><a href="vi_vtb-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="vi_vtb-dep-compound-svc.html">compound:svc</a></tt>, <tt><a href="vi_vtb-dep-compound-verbnoun.html">compound:verbnoun</a></tt>, <tt><a href="vi_vtb-dep-compound-vmod.html">compound:vmod</a></tt>, <tt><a href="vi_vtb-dep-compound-z.html">compound:z</a></tt>.

46 nodes (0%) are attached to their parents as `compound:pron`.

46 instances of `compound:pron` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `compound:pron`: <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (40; 87% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (4; 9% instances), <tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 compound:pron	color:blue
1	Khi	khi	NOUN	N	_	4	obl:tmod	_	_
2	ấy	ấy	PRON	PRO	_	1	det:pmod	_	_
3	,	,	PUNCT	PUNCT	_	4	punct	_	_
4	nghe	nghe	VERB	V	_	0	root	_	_
5	như	như	SCONJ	C	_	6	mark	_	_
6	có	có	VERB	V	_	4	ccomp	_	_
7	ai	ai	PRON	PRO	_	6	obj	_	_
8	cầm	cầm	VERB	V	_	7	acl:subj	_	_
9	roi	roi	NOUN	N	_	8	obj	_	_
10	quất	quất	VERB	V	_	8	xcomp	_	_
11	vào	vào	ADP	PRE	_	12	case	_	_
12	mặt	mặt	NOUN	N	_	10	obl:comp	_	_
13	mình	mình	PRON	PRO	_	12	compound:pron	_	_
14	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 compound:pron	color:blue
1	Lần	lần	NOUN	N	_	4	obl:tmod	_	_
2	đầu tiên	đầu tiên	ADJ	ADJ	_	1	amod	_	_
3	cô	cô	NOUN	N	_	4	nsubj	_	_
4	uống	uống	VERB	V	_	0	root	_	_
5	¼	¼	NUM	NUM	_	6	nummod	_	_
6	viên	viên	NOUN	N	_	4	obj	_	_
7	,	,	PUNCT	PUNCT	_	10	punct	_	_
8	"	"	PUNCT	PUNCT	_	10	punct	_	_
9	tôi	tôi	PRON	PRO	_	10	nsubj	_	_
10	thấy	thấy	VERB	V	_	4	parataxis	_	_
11	người	người	NOUN	N	_	13	nsubj	_	_
12	mình	mình	NOUN	N	_	11	compound:pron	_	_
13	lâng lâng	lâng lâng	ADJ	ADJ	_	10	ccomp	_	_
14	và	và	CCONJ	CC	_	17	cc	_	_
15	chỉ	chỉ	ADV	ADV	_	17	advmod	_	_
16	muốn	muốn	AUX	AUX	_	17	aux	_	_
17	khóc	khóc	VERB	V	_	13	conj	_	_
18	"	"	PUNCT	PUNCT	_	10	punct	_	_
19	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound:pron	color:blue
1	Tuy nhiên	tuy nhiên	SCONJ	SC	_	5	mark	_	_
2	hắn	hắn	PRON	Pro	_	5	nsubj	_	_
3	ta	ta	PRON	Pro	_	2	compound:pron	_	_
4	chỉ	chỉ	ADV	Adv	_	5	advmod	_	_
5	đạt	đạt	VERB	V	_	0	root	_	_
6	được	được	ADV	Adv	_	5	advmod	_	_
7	mục đích	mục đích	NOUN	N	_	5	obj	_	_
8	một	một	NUM	Num	_	7	nummod	_	_
9	...	...	PUNCT	...	_	5	punct	_	_

~~~


