---
layout: base
title:  'Statistics of mark:pcomp in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `mark:pcomp`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-mark.html">mark</a></tt>.

158 nodes (0%) are attached to their parents as `mark:pcomp`.

157 instances of `mark:pcomp` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.34177215189873.

The following 6 pairs of parts of speech are connected with `mark:pcomp`: <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt> (141; 89% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt> (10; 6% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt>-<tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 mark:pcomp	color:blue
1	Nhưng	nhưng	SCONJ	SC	_	2	mark	_	_
2	bắn	bắn	VERB	V	_	0	root	_	_
3	tin	tin	NOUN	N	_	2	obj	_	_
4	qua	qua	ADP	Pre	_	5	case	_	_
5	ai	ai	PRON	Pro	_	2	obl:comp	_	_
6	để	để	ADP	Pre	_	7	mark:pcomp	_	_
7	có	có	VERB	V	_	2	advcl:objective	_	_
8	hiệu quả	hiệu quả	NOUN	N	_	7	obj	_	_
9	và	và	CCONJ	CC	_	10	cc	_	_
10	hợp lý	hợp lý	ADJ	Adj	_	7	conj	_	_
11	?	?	PUNCT	?	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 mark:pcomp	color:blue
1	Cô	cô	NOUN	N	_	2	nsubj	_	_
2	chỉ	chỉ	VERB	V	_	0	root	_	_
3	cho	cho	ADP	Pre	_	4	case	_	_
4	tôi	tôi	PRON	Pro	_	2	obl:iobj	_	_
5	biết	biết	VERB	V	_	4	acl:subj	_	_
6	làm	làm	VERB	V	_	5	xcomp	_	_
7	thế nào	thế nào	PRON	Pro	_	6	obl	_	_
8	để	để	ADP	Pre	_	10	mark:pcomp	_	_
9	được	được	AUX	AUX	_	10	aux:pass	_	_
10	yên ổn	yên ổn	ADJ	Adj	_	6	advcl:objective	_	_
11	?	?	PUNCT	?	_	6	punct	_	_
12	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 15 mark:pcomp	color:blue
1	Mặt	mặt	NOUN	N	_	3	nsubj	_	_
2	Thọ	Thọ	PROPN	NNP	_	1	nmod	_	_
3	sa sầm	sa sầm	VERB	V	_	0	root	_	_
4	,	,	PUNCT	,	_	5	punct	_	_
5	giọng	giọng	NOUN	N	_	3	conj	_	_
6	lạnh	lạnh	ADJ	Adj	_	5	amod	_	_
7	như	như	SCONJ	SC	_	8	case	_	_
8	băng	băng	NOUN	N	_	6	obl	_	_
9	:	:	PUNCT	:	_	11	punct	_	_
10	Em	em	NOUN	N	_	11	nsubj	_	_
11	làm	làm	VERB	V	_	3	parataxis	_	_
12	gì	gì	PRON	Pro	_	11	det:pmod	_	_
13	quá đáng	quá đáng	ADJ	Adj	_	11	advmod:adj	_	_
14	mà	mà	SCONJ	SC	_	17	mark	_	_
15	để	để	VERB	V	_	17	mark:pcomp	_	_
16	người yêu	người yêu	NOUN	N	_	17	nsubj	_	_
17	giận	giận	VERB	V	_	11	advcl:objective	_	_
18	này	này	PRON	Pro	_	17	discourse	_	_
19	!	!	PUNCT	!	_	11	punct	_	_
20	"	"	PUNCT	``	_	11	punct	_	_
21	.	.	PUNCT	.	_	3	punct	_	_

~~~


