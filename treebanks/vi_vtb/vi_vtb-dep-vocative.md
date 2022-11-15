---
layout: base
title:  'Statistics of vocative in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `vocative`

This relation is universal.

9 nodes (0%) are attached to their parents as `vocative`.

6 instances of `vocative` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.22222222222222.

The following 6 pairs of parts of speech are connected with `vocative`: <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (3; 33% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (2; 22% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 11% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 11% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-SCONJ.html">SCONJ</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 vocative	color:blue
1	Ông	ông	NOUN	Nc	_	2	clf:det	_	_
2	Phong	Phong	PROPN	NNP	_	3	nsubj	_	_
3	nói	nói	VERB	V	_	0	root	_	_
4	:	:	PUNCT	:	_	6	punct	_	_
5	"	"	PUNCT	``	_	6	punct	_	_
6	Hạnh	Hạnh	PROPN	NNP	_	3	vocative	_	_
7	!	!	PUNCT	!	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 vocative	color:blue
1	Vấn đề	vấn đề	NOUN	N	_	5	nsubj:pass	_	_
2	này	này	PRON	Pro	_	1	det:pmod	_	_
3	sẽ	sẽ	ADV	Adv	_	5	advmod	_	_
4	được	được	AUX	AUX	_	5	aux:pass	_	_
5	quan tâm	quan tâm	VERB	V	_	0	root	_	_
6	như thế nào	như thế nào	X	X	_	5	obl	_	_
7	thưa	thưa	VERB	V	_	5	vocative	_	_
8	ông	ông	NOUN	N	_	7	obj	_	_
9	?	?	PUNCT	?	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 19 vocative	color:blue
1	Tinh thần	tinh thần	NOUN	N	_	6	nsubj	_	_
2	của	của	ADP	Pre	_	3	case	_	_
3	nghị quyết	nghị quyết	NOUN	N	_	1	nmod:poss	_	_
4	lần	lần	NOUN	N	_	3	nmod	_	_
5	này	này	PRON	Pro	_	4	det:pmod	_	_
6	có	có	VERB	V	_	0	root	_	_
7	những	những	DET	Det	_	8	det	_	_
8	điểm	điểm	NOUN	N	_	6	obj	_	_
9	mới	mới	ADV	Adv	_	10	advmod	_	_
10	nổi bật	nổi bật	ADJ	Adj	_	8	amod	_	_
11	nào	nào	PRON	Pro	_	10	det:pmod	_	_
12	so	so	VERB	V	_	10	compound:atov	_	_
13	với	với	ADP	Pre	_	15	case	_	_
14	các	các	DET	Det	_	15	det	_	_
15	chính sách	chính sách	NOUN	N	_	12	obl:with	_	_
16	trước	trước	ADJ	Adj	_	15	obl:tmod	_	_
17	đây	đây	PRON	Pro	_	16	det:pmod	_	_
18	,	,	PUNCT	,	_	10	punct	_	_
19	thưa	thưa	VERB	V	_	10	vocative	_	_
20	ông	ông	NOUN	N	_	19	obj	_	_
21	?	?	PUNCT	?	_	6	punct	_	_

~~~


