---
layout: base
title:  'Statistics of csubj:asubj in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `csubj:asubj`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-csubj.html">csubj</a></tt>.
There are also 2 other language-specific subtypes of `csubj`: <tt><a href="vi_vtb-dep-csubj-pass.html">csubj:pass</a></tt>, <tt><a href="vi_vtb-dep-csubj-vsubj.html">csubj:vsubj</a></tt>.

20 nodes (0%) are attached to their parents as `csubj:asubj`.

20 instances of `csubj:asubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.55.

The following 5 pairs of parts of speech are connected with `csubj:asubj`: <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (9; 45% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (6; 30% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (2; 10% instances), <tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (2; 10% instances), <tt><a href="vi_vtb-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 csubj:asubj	color:blue
1	Và	và	SCONJ	CC	_	6	cc	_	_
2	nguy hiểm	nguy hiểm	ADJ	Adj	_	6	csubj:asubj	_	_
3	nhất	nhất	ADV	Adv	_	2	advmod	_	_
4	vẫn	vẫn	ADV	Adv	_	6	advmod	_	_
5	là	là	AUX	V	_	6	cop	_	_
6	vấn đề	vấn đề	NOUN	N	_	0	root	_	_
7	qui hoạch	qui hoạch	VERB	V	_	6	compound:vmod	_	_
8	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 csubj:asubj	color:blue
1	"	"	PUNCT	``	_	2	punct	_	_
2	ngon	ngon	ADJ	Adj	_	7	csubj:asubj	_	_
3	lắm	lắm	ADV	Adv	_	2	advmod	_	_
4	"	"	PUNCT	``	_	2	punct	_	_
5	là	là	AUX	V	_	7	cop	_	_
6	được	được	AUX	AUX	_	7	aux	_	_
7	cấp	cấp	VERB	V	_	0	root	_	_
8	súng	súng	NOUN	N	_	7	obj	_	_
9	tự tạo	tự tạo	ADJ	Adj	_	8	amod	_	_
10	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 csubj:asubj	color:blue
1	Ở	ở	ADP	Pre	_	3	case	_	_
2	nhiều	nhiều	ADJ	Adj	_	3	advmod:adj	_	_
3	đoạn	đoạn	NOUN	N	_	8	obl	_	_
4	,	,	PUNCT	,	_	8	punct	_	_
5	địa đạo	địa đạo	NOUN	N	_	8	nsubj	_	_
6	ở	ở	ADP	Pre	_	7	case	_	_
7	ngoài	ngoài	NOUN	N	_	8	obl	_	_
8	to	to	ADJ	Adj	_	0	root	_	_
9	,	,	PUNCT	,	_	13	punct	_	_
10	sâu	sâu	ADJ	Adj	_	13	csubj:asubj	_	_
11	vào	vào	ADP	Pre	_	12	case	_	_
12	trong	trong	ADJ	Adj	_	10	obl:comp	_	_
13	nhỏ	nhỏ	ADJ	Adj	_	8	conj	_	_
14	lại	lại	ADV	Adv	_	13	compound:atov	_	_
15	như	như	SCONJ	SC	_	16	case	_	_
16	toi	toi	NOUN	N	_	13	obl	_	_
17	nơm	nơm	NOUN	N	_	16	nmod	_	_
18	cá	cá	NOUN	N	_	17	nmod	_	_
19	.	.	PUNCT	.	_	8	punct	_	_

~~~


