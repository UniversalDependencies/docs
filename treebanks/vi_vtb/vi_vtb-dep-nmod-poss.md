---
layout: base
title:  'Statistics of nmod:poss in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-nmod.html">nmod</a></tt>.

462 nodes (1%) are attached to their parents as `nmod:poss`.

461 instances of `nmod:poss` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.82034632034632.

The following 13 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (278; 60% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (102; 22% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (57; 12% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (7; 2% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-SYM.html">SYM</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-X.html">X</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 nmod:poss	color:blue
1	Mục đích	mục đích	NOUN	N	_	5	nsubj	_	_
2	của	của	ADP	Pre	_	4	case	_	_
3	hai	hai	NUM	Num	_	4	nummod	_	_
4	bà	bà	NOUN	N	_	1	nmod:poss	_	_
5	là	là	AUX	V	_	0	root	_	_
6	ông	ông	NOUN	Nc	_	7	clf:det	_	_
7	Chương	Chương	PROPN	NNP	_	8	nsubj	_	_
8	chán	chán	VERB	V	_	5	ccomp	_	_
9	Hà Nội	Hà Nội	PROPN	NNP	_	8	obj	_	_
10	,	,	PUNCT	,	_	11	punct	_	_
11	xin	xin	VERB	V	_	8	conj	_	_
12	về	về	VERB	V	_	11	compound:svc	_	_
13	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 nmod:poss	color:blue
1	Như vậy	như vậy	SCONJ	SC	_	3	cc	_	_
2	có thể	có thể	ADV	Adv	_	3	advmod	_	_
3	có	có	VERB	V	_	0	root	_	_
4	người	người	NOUN	N	_	6	nsubj	_	_
5	đã	đã	ADV	Adv	_	6	advmod	_	_
6	tham mưu	tham mưu	VERB	V	_	3	ccomp	_	_
7	cho	cho	ADP	Pre	_	8	case	_	_
8	vợ	vợ	NOUN	N	_	6	obl:comp	_	_
9	ông	ông	NOUN	Nc	_	10	clf:det	_	_
10	Chương	Chương	PROPN	NNP	_	8	nmod:poss	_	_
11	!	!	PUNCT	!	_	6	punct	_	_
12	?	?	PUNCT	?	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 nmod:poss	color:blue
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


