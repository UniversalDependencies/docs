---
layout: base
title:  'Statistics of compound:dir in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `compound:dir`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-compound.html">compound</a></tt>.
There are also 11 other language-specific subtypes of `compound`: <tt><a href="vi_vtb-dep-compound-adj.html">compound:adj</a></tt>, <tt><a href="vi_vtb-dep-compound-amod.html">compound:amod</a></tt>, <tt><a href="vi_vtb-dep-compound-apr.html">compound:apr</a></tt>, <tt><a href="vi_vtb-dep-compound-atov.html">compound:atov</a></tt>, <tt><a href="vi_vtb-dep-compound-pron.html">compound:pron</a></tt>, <tt><a href="vi_vtb-dep-compound-prt.html">compound:prt</a></tt>, <tt><a href="vi_vtb-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="vi_vtb-dep-compound-svc.html">compound:svc</a></tt>, <tt><a href="vi_vtb-dep-compound-verbnoun.html">compound:verbnoun</a></tt>, <tt><a href="vi_vtb-dep-compound-vmod.html">compound:vmod</a></tt>, <tt><a href="vi_vtb-dep-compound-z.html">compound:z</a></tt>.

177 nodes (0%) are attached to their parents as `compound:dir`.

177 instances of `compound:dir` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14689265536723.

The following 6 pairs of parts of speech are connected with `compound:dir`: <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt> (91; 51% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (56; 32% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt> (24; 14% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound:dir	color:blue
1	Nếu	nếu	SCONJ	SC	_	3	mark	_	_
2	tôi	tôi	PRON	Pro	_	3	nsubj	_	_
3	ngã	ngã	VERB	V	_	6	advcl	_	_
4	xuống	xuống	ADV	Adv	_	3	compound:dir	_	_
5	,	,	PUNCT	,	_	3	punct	_	_
6	mong	mong	VERB	V	_	0	root	_	_
7	các	các	DET	Det	_	8	det	_	_
8	bạn	bạn	NOUN	N	_	10	nsubj	_	_
9	hãy	hãy	ADV	Adv	_	10	advmod	_	_
10	tin	tin	VERB	V	_	6	ccomp	_	_
11	cho	cho	ADP	Pre	_	12	case	_	_
12	bố mẹ	bố mẹ	NOUN	N	_	10	obl:iobj	_	_
13	tôi	tôi	PRON	Pro	_	12	nmod:poss	_	_
14	...	...	PUNCT	...	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 compound:dir	color:blue
1	Cứ	cứ	ADV	Adv	_	2	advmod	_	_
2	thấy	thấy	VERB	V	_	7	advcl	_	_
3	trẻ con	trẻ con	NOUN	N	_	2	obj	_	_
4	mồ côi	mồ côi	ADJ	Adj	_	3	amod	_	_
5	là	là	SCONJ	SC	_	7	discourse	_	_
6	tui	tui	PRON	Pro	_	7	nsubj	_	_
7	dẫn	dẫn	VERB	V	_	0	root	_	_
8	về	về	VERB	V	_	7	compound:dir	_	_
9	nuôi	nuôi	VERB	V	_	7	xcomp	_	_
10	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 compound:dir	color:blue
1	Chị	chị	NOUN	N	_	2	nsubj	_	_
2	đặt	đặt	VERB	V	_	0	root	_	_
3	cả	cả	PRON	Pro	_	4	det	_	_
4	sự nghiệp	sự nghiệp	NOUN	N	_	2	obj	_	_
5	của	của	ADP	Pre	_	6	case	_	_
6	mình	mình	PRON	Pro	_	4	nmod:poss	_	_
7	lên	lên	ADP	Pre	_	2	compound:dir	_	_
8	hai	hai	NUM	Num	_	10	nummod	_	_
9	con	con	NOUN	Nc	_	8	clf:det	_	_
10	hổ	hổ	NOUN	N	_	2	iobj	_	_
11	.	.	PUNCT	.	_	2	punct	_	_

~~~


