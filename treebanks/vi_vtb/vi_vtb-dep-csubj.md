---
layout: base
title:  'Statistics of csubj in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `csubj`

This relation is universal.
There are 3 language-specific subtypes of `csubj`: <tt><a href="vi_vtb-dep-csubj-asubj.html">csubj:asubj</a></tt>, <tt><a href="vi_vtb-dep-csubj-pass.html">csubj:pass</a></tt>, <tt><a href="vi_vtb-dep-csubj-vsubj.html">csubj:vsubj</a></tt>.

89 nodes (0%) are attached to their parents as `csubj`.

87 instances of `csubj` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.48314606741573.

The following 10 pairs of parts of speech are connected with `csubj`: <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (56; 63% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (11; 12% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (9; 10% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (5; 6% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-X.html">X</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 csubj	color:blue
1	Đứa	đứa	NOUN	Nc	_	3	nsubj	_	_
2	nào	nào	PRON	Pro	_	1	det:pmod	_	_
3	có	có	VERB	V	_	7	csubj	_	_
4	bạn	bạn	NOUN	N	_	3	obj	_	_
5	thì	thì	SCONJ	SC	_	7	mark	_	_
6	"	"	PUNCT	``	_	7	punct	_	_
7	chát chít	chát chít	VERB	V	_	0	root	_	_
8	"	"	PUNCT	``	_	7	punct	_	_
9	...	...	PUNCT	...	_	7	punct	_	_
10	ngoài	ngoài	ADP	Pre	_	11	case	_	_
11	phố	phố	NOUN	N	_	7	obl	_	_
12	một chút	một chút	DET	Det	_	7	obj	_	_
13	rồi	rồi	SCONJ	SC	_	14	cc	_	_
14	về	về	VERB	V	_	7	conj	_	_
15	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 csubj	color:blue
1	Người	người	NOUN	N	_	3	nsubj:pass	_	_
2	được	được	AUX	AUX	_	3	aux:pass	_	_
3	giao	giao	VERB	V	_	9	csubj	_	_
4	nhiệm vụ	nhiệm vụ	NOUN	N	_	3	obj	_	_
5	giúp	giúp	VERB	V	_	4	acl	_	_
6	ông	ông	NOUN	Nc	_	7	clf:det	_	_
7	Chương	Chương	PROPN	NNP	_	5	obj	_	_
8	là	là	AUX	V	_	9	cop	_	_
9	thám tử	thám tử	NOUN	N	_	0	root	_	_
10	Hùng	Hùng	PROPN	NNP	_	9	nmod	_	_
11	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 4 csubj	color:blue
1	Trong	trong	ADP	Pre	_	2	case	_	_
2	khi	khi	NOUN	N	_	11	obl:tmod	_	_
3	đó	đó	PRON	Pro	_	2	det:pmod	_	_
4	số	số	NOUN	N	_	11	csubj	_	_
5	người	người	NOUN	N	_	4	compound	_	_
6	nhiễm	nhiễm	VERB	V	_	4	acl:subj	_	_
7	HIV	hiv	X	SYM	_	6	nmod	_	_
8	tại	tại	ADP	Pre	_	9	case	_	_
9	VN	vn	NOUN	Ny	_	6	obl	_	_
10	vẫn	vẫn	ADV	Adv	_	11	advmod	_	_
11	tiếp tục	tiếp tục	VERB	V	_	0	root	_	_
12	gia tăng	gia tăng	VERB	V	_	11	xcomp	_	_
13	.	.	PUNCT	.	_	11	punct	_	_

~~~


