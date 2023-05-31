---
layout: base
title:  'Statistics of mark:pcomp in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `mark:pcomp`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-mark.html">mark</a></tt>.

221 nodes (0%) are attached to their parents as `mark:pcomp`.

220 instances of `mark:pcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33484162895928.

The following 6 pairs of parts of speech are connected with `mark:pcomp`: <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt> (206; 93% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt> (8; 4% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt>-<tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 mark:pcomp	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 mark:pcomp	color:blue
1	Để	để	ADP	Pre	_	2	mark:pcomp	_	_
2	chắc chắn	chắc chắn	ADJ	Adj	_	9	advcl:objective	_	_
3	Thư	Thư	PROPN	NNP	_	5	nsubj	_	_
4	sẽ	sẽ	ADV	Adv	_	5	advmod	_	_
5	đến	đến	VERB	V	_	2	ccomp	_	_
6	,	,	PUNCT	,	_	2	punct	_	_
7	anh	anh	NOUN	N	_	9	nsubj	_	_
8	phải	phải	AUX	AUX	_	9	aux	_	_
9	thông báo	thông báo	VERB	V	_	0	root	_	_
10	có	có	VERB	V	_	9	xcomp	_	_
11	nghi vấn	nghi vấn	NOUN	N	_	10	obj	_	_
12	chồng	chồng	NOUN	N	_	14	nsubj	_	_
13	Thư	Thư	PROPN	NNP	_	12	nmod	_	_
14	gặp	gặp	VERB	V	_	11	ccomp	_	_
15	Liên	Liên	PROPN	NNP	_	14	obj	_	_
16	trước	trước	ADP	Pre	_	17	case	_	_
17	ngày	ngày	NOUN	N	_	14	obl:tmod	_	_
18	đoạn tuyệt	đoạn tuyệt	VERB	V	_	17	compound:vmod	_	_
19	.	.	PUNCT	.	_	9	punct	_	_

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


