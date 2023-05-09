---
layout: base
title:  'Statistics of det in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="vi_vtb-dep-det-pmod.html">det:pmod</a></tt>.

1052 nodes (2%) are attached to their parents as `det`.

1049 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1606463878327.

The following 12 pairs of parts of speech are connected with `det`: <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-DET.html">DET</a></tt> (929; 88% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (88; 8% instances), <tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt>-<tt><a href="vi_vtb-pos-DET.html">DET</a></tt> (9; 1% instances), <tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_vtb-pos-DET.html">DET</a></tt> (6; 1% instances), <tt><a href="vi_vtb-pos-NUM.html">NUM</a></tt>-<tt><a href="vi_vtb-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="vi_vtb-pos-NUM.html">NUM</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt>-<tt><a href="vi_vtb-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 det	color:blue
1	Thế là	thế là	SCONJ	C	_	3	cc	_	_
2	lại	lại	ADV	ADV	_	3	advmod	_	_
3	thêm	thêm	VERB	V	_	0	root	_	_
4	những	những	DET	DET	_	6	det	_	_
5	chú	chú	NOUN	N	_	4	clf	_	_
6	chim	chim	NOUN	N	_	3	obj	_	_
7	vô tội	vô tội	ADJ	ADJ	_	6	amod	_	_
8	nữa	nữa	ADV	ADV	_	6	advmod	_	_
9	sa	sa	VERB	V	_	6	acl:subj	_	_
10	lưới	lưới	NOUN	N	_	9	compound:verbnoun	_	_
11	...	...	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 det	color:blue
1	Lần	lần	NOUN	N	_	5	obl:tmod	_	_
2	này	này	PRON	PRO	_	1	det:pmod	_	_
3	ông	ông	NOUN	N	_	5	nsubj	_	_
4	không	không	ADV	ADV	_	5	advmod:neg	_	_
5	bắt tay	bắt tay	VERB	V	_	0	root	_	_
6	tôi	tôi	PRON	PRO	_	5	obj	_	_
7	mà	mà	SCONJ	C	_	8	mark	_	_
8	ôm	ôm	VERB	V	_	5	conj	_	_
9	chặt	chặt	ADJ	ADJ	_	8	xcomp	_	_
10	cả	cả	PRON	PRO	_	12	det	_	_
11	hai	hai	NUM	NUM	_	12	nummod	_	_
12	vai	vai	NOUN	N	_	8	obj	_	_
13	tôi	tôi	PRON	PRO	_	12	nmod	_	_
14	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det	color:blue
1	Vậy	vậy	SCONJ	SC	_	5	mark	_	_
2	ông	ông	NOUN	Nc	_	3	clf:det	_	_
3	Chương	Chương	PROPN	NNP	_	5	nsubj	_	_
4	đang	đang	ADV	Adv	_	5	advmod	_	_
5	có	có	VERB	V	_	0	root	_	_
6	những	những	DET	Det	_	7	det	_	_
7	gì	gì	PRON	Pro	_	5	obj	_	_
8	và	và	CCONJ	CC	_	10	cc	_	_
9	có thể	có thể	ADV	Adv	_	10	advmod	_	_
10	mất	mất	VERB	V	_	5	conj	_	_
11	gì	gì	PRON	Pro	_	10	obj	_	_
12	?	?	PUNCT	?	_	5	punct	_	_

~~~


