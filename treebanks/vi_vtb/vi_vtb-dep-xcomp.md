---
layout: base
title:  'Statistics of xcomp in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `xcomp`

This relation is universal.
There are 2 language-specific subtypes of `xcomp`: <tt><a href="vi_vtb-dep-xcomp-adj.html">xcomp:adj</a></tt>, <tt><a href="vi_vtb-dep-xcomp-vcomp.html">xcomp:vcomp</a></tt>.

1393 nodes (3%) are attached to their parents as `xcomp`.

1381 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.7724335965542.

The following 20 pairs of parts of speech are connected with `xcomp`: <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1008; 72% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (297; 21% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (27; 2% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (22; 2% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt> (5; 0% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-X.html">X</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-X.html">X</a></tt>-<tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-X.html">X</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 xcomp	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 xcomp	color:blue
1	Chúng tôi	chúng tôi	PRON	Pro	_	2	nsubj	_	_
2	hỏi	hỏi	VERB	V	_	0	root	_	_
3	:	:	PUNCT	:	_	6	punct	_	_
4	"	"	PUNCT	``	_	6	punct	_	_
5	Chị	chị	NOUN	N	_	6	nsubj	_	_
6	hãi	hãi	VERB	V	_	2	parataxis	_	_
7	nhất	nhất	ADJ	Adj	_	6	xcomp	_	_
8	con	con	NOUN	Nc	_	9	clf:det	_	_
9	vật	vật	NOUN	N	_	6	obj	_	_
10	nào	nào	PRON	Pro	_	9	det:pmod	_	_
11	ở	ở	ADP	Pre	_	12	case	_	_
12	vườn	vườn	NOUN	N	_	6	obl:comp	_	_
13	thú	thú	NOUN	N	_	12	compound	_	_
14	này	này	PRON	Pro	_	12	det:pmod	_	_
15	?	?	PUNCT	?	_	6	punct	_	_
16	"	"	PUNCT	``	_	6	punct	_	_
17	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 xcomp	color:blue
1	Khó	khó	ADJ	Adj	_	0	root	_	_
2	mà	mà	SCONJ	SC	_	3	mark	_	_
3	giúp	giúp	VERB	V	_	1	xcomp	_	_
4	được	được	ADV	Adv	_	3	advmod	_	_
5	gì	gì	PRON	Pro	_	3	obj	_	_
6	cho	cho	ADP	Pre	_	7	case	_	_
7	nỗi	nỗi	NOUN	Nc	_	3	obl	_	_
8	buồn	buồn	ADJ	Adj	_	7	acl:tonp	_	_
9	khổ	khổ	ADJ	Adj	_	8	compound:adj	_	_
10	đó	đó	PRON	Pro	_	7	det:pmod	_	_
11	.	.	PUNCT	.	_	1	punct	_	_

~~~


