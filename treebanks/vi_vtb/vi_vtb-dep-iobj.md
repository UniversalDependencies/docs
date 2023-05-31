---
layout: base
title:  'Statistics of iobj in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `iobj`

This relation is universal.

34 nodes (0%) are attached to their parents as `iobj`.

34 instances of `iobj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.97058823529412.

The following 3 pairs of parts of speech are connected with `iobj`: <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (23; 68% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (7; 21% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (4; 12% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 iobj	color:blue
1	Chúng tôi	chúng tôi	PRON	Pro	_	2	nsubj	_	_
2	chôn	chôn	VERB	V	_	0	root	_	_
3	hộ	hộ	VERB	V	_	2	xcomp	_	_
4	bà	bà	NOUN	N	_	2	iobj	_	_
5	ấy	ấy	PRON	Pro	_	4	det:pmod	_	_
6	...	...	PUNCT	...	_	2	punct	_	_
7	"	"	PUNCT	``	_	2	punct	_	_
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 iobj	color:blue
1	Chuyện	chuyện	NOUN	N	_	5	dislocated	_	_
2	này	này	PRON	Pro	_	1	det:pmod	_	_
3	Thu	Thu	PROPN	NNP	_	5	nsubj	_	_
4	phải	phải	AUX	AUX	_	5	aux	_	_
5	giấu	giấu	VERB	V	_	0	root	_	_
6	Thọ	Thọ	PROPN	NNP	_	5	iobj	_	_
7	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 19 iobj	color:blue
1	Học	học	VERB	V	_	9	obl:tmod	_	_
2	hết	hết	ADV	Adv	_	1	advmod	_	_
3	cấp	cấp	NOUN	N	_	1	obj	_	_
4	II	ii	NUM	Num	_	3	compound	_	_
5	,	,	PUNCT	,	_	1	punct	_	_
6	nó	nó	PRON	Pro	_	9	nsubj:pass	_	_
7	được	được	AUX	AUX	_	9	aux:pass	_	_
8	bà	bà	NOUN	N	_	9	obl:agent	_	_
9	gửi	gửi	VERB	V	_	0	root	_	_
10	người	người	NOUN	N	_	9	obj	_	_
11	quen	quen	VERB	V	_	10	compound:vmod	_	_
12	làm	làm	VERB	V	_	10	acl:subj	_	_
13	thợ may	thợ may	NOUN	N	_	12	obj	_	_
14	ở	ở	ADP	Pre	_	15	case	_	_
15	Hà Nội	Hà Nội	PROPN	NNP	_	10	obl:comp	_	_
16	dạy	dạy	VERB	V	_	10	advcl:objective	_	_
17	nghề	nghề	NOUN	N	_	16	obj	_	_
18	cho	cho	ADP	Pre	_	19	case	_	_
19	nó	nó	PRON	Pro	_	16	iobj	_	_
20	...	...	PUNCT	...	_	9	punct	_	_

~~~


