---
layout: base
title:  'Statistics of csubj:vsubj in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `csubj:vsubj`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-csubj.html">csubj</a></tt>.
There are also 2 other language-specific subtypes of `csubj`: <tt><a href="vi_vtb-dep-csubj-asubj.html">csubj:asubj</a></tt>, <tt><a href="vi_vtb-dep-csubj-pass.html">csubj:pass</a></tt>.

56 nodes (0%) are attached to their parents as `csubj:vsubj`.

56 instances of `csubj:vsubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.30357142857143.

The following 4 pairs of parts of speech are connected with `csubj:vsubj`: <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (33; 59% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (11; 20% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (11; 20% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 csubj:vsubj	color:blue
1	Hồi	hồi	NOUN	N	_	6	obl:tmod	_	_
2	đó	đó	PRON	PRO	_	1	det:pmod	_	_
3	,	,	PUNCT	PUNCT	_	6	punct	_	_
4	tôi	tôi	PRON	PRO	_	6	nsubj	_	_
5	chỉ	chỉ	ADV	ADV	_	6	advmod	_	_
6	học	học	VERB	V	_	0	root	_	_
7	đủ	đủ	ADJ	ADJ	_	6	xcomp	_	_
8	để	để	ADP	PRE	_	11	mark:pcomp	_	_
9	thi	thi	VERB	V	_	11	csubj:vsubj	_	_
10	không	không	ADV	ADV	_	11	advmod:neg	_	_
11	rớt	rớt	VERB	V	_	6	advcl:objective	_	_
12	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 csubj:vsubj	color:blue
1	Ế	ế	VERB	V	_	4	csubj:vsubj	_	_
2	cũng	cũng	ADV	ADV	_	4	advmod	_	_
3	phải	phải	AUX	V	_	4	aux	_	_
4	trẻ	trẻ	ADJ	ADJ	_	10	csubj	_	_
5	,	,	PUNCT	PUNCT	_	6	punct	_	_
6	khỏe	khỏe	ADJ	ADJ	_	4	conj	_	_
7	và	và	CCONJ	CC	_	8	cc	_	_
8	đẹp	đẹp	ADJ	ADJ	_	4	conj	_	_
9	mới	mới	ADV	ADV	_	10	advmod	_	_
10	chịu	chịu	VERB	V	_	0	root	_	_
11	chứ	chứ	PART	PRT	_	10	discourse	_	_
12	.	.	PUNCT	PUNCT	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 csubj:vsubj	color:blue
1	Nhưng	nhưng	SCONJ	SC	_	6	mark	_	_
2	đáng	đáng	VERB	V	_	6	csubj:vsubj	_	_
3	nói	nói	VERB	V	_	2	xcomp	_	_
4	nhất	nhất	ADJ	Adj	_	3	advmod:adj	_	_
5	là	là	AUX	V	_	6	cop	_	_
6	làng	làng	NOUN	N	_	0	root	_	_
7	đã	đã	ADV	Adv	_	8	advmod	_	_
8	hình thành	hình thành	VERB	V	_	6	acl:subj	_	_
9	một	một	NUM	Num	_	10	nummod	_	_
10	đội	đội	NOUN	N	_	8	obj	_	_
11	thợ mộc	thợ mộc	NOUN	N	_	10	nmod	_	_
12	.	.	PUNCT	.	_	6	punct	_	_

~~~


