---
layout: base
title:  'Statistics of obl:iobj in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `obl:iobj`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-obl.html">obl</a></tt>.
There are also 7 other language-specific subtypes of `obl`: <tt><a href="vi_vtb-dep-obl-about.html">obl:about</a></tt>, <tt><a href="vi_vtb-dep-obl-adj.html">obl:adj</a></tt>, <tt><a href="vi_vtb-dep-obl-adv.html">obl:adv</a></tt>, <tt><a href="vi_vtb-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="vi_vtb-dep-obl-comp.html">obl:comp</a></tt>, <tt><a href="vi_vtb-dep-obl-tmod.html">obl:tmod</a></tt>, <tt><a href="vi_vtb-dep-obl-with.html">obl:with</a></tt>.

127 nodes (0%) are attached to their parents as `obl:iobj`.

127 instances of `obl:iobj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.45669291338583.

The following 8 pairs of parts of speech are connected with `obl:iobj`: <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (94; 74% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (17; 13% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (10; 8% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 obl:iobj	color:blue
1	Thưa	thưa	VERB	V	_	7	vocative	_	_
2	ông	ông	NOUN	N	_	1	obj	_	_
3	,	,	PUNCT	PUNCT	_	7	punct	_	_
4	sổ đỏ	sổ đỏ	NOUN	N	_	7	nsubj:pass	_	_
5	đã	đã	ADV	ADV	_	7	advmod	_	_
6	được	được	AUX	AUX	_	7	aux:pass	_	_
7	giao	giao	VERB	V	_	0	root	_	_
8	cho	cho	ADP	PRE	_	9	case	_	_
9	người	người	NOUN	N	_	7	obl:iobj	_	_
10	dân	dân	NOUN	N	_	9	compound	_	_
11	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 obl:iobj	color:blue
1	Ông	ông	NOUN	N	_	3	nsubj	_	_
2	đã	đã	ADV	Adv	_	3	advmod	_	_
3	trực tiếp	trực tiếp	VERB	V	_	0	root	_	_
4	"	"	PUNCT	``	_	5	punct	_	_
5	nghiệm thu	nghiệm thu	VERB	V	_	3	xcomp	_	_
6	"	"	PUNCT	``	_	5	punct	_	_
7	và	và	CCONJ	CC	_	8	cc	_	_
8	công tác	công tác	VERB	V	_	5	conj	_	_
9	tư tưởng	tư tưởng	NOUN	N	_	8	obj	_	_
10	cho	cho	ADP	Pre	_	11	case	_	_
11	Hải	Hải	PROPN	NNP	_	8	obl:iobj	_	_
12	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 obl:iobj	color:blue
1	Tôi	tôi	PRON	PRO	_	2	nsubj	_	_
2	đến	đến	VERB	V	_	0	root	_	_
3	khi	khi	NOUN	N	_	2	obl:tmod	_	_
4	các	các	DET	DET	_	5	det	_	_
5	y sĩ	y sĩ	NOUN	N	_	9	nsubj	_	_
6	ở	ở	ADP	PRE	_	7	case	_	_
7	đây	đây	PRON	PRO	_	5	nmod	_	_
8	vừa	vừa	ADV	ADV	_	9	advmod	_	_
9	làm thuốc	làm thuốc	VERB	V	_	3	acl:tmod	_	_
10	buổi	buổi	NOUN	N	_	9	obl:tmod	_	_
11	chiều	chiều	NOUN	N	_	10	compound	_	_
12	cho	cho	ADP	PRE	_	13	case	_	_
13	họ	họ	PRON	PRO	_	9	obl:iobj	_	_
14	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


