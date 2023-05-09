---
layout: base
title:  'Statistics of obl:adj in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `obl:adj`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-obl.html">obl</a></tt>.
There are also 7 other language-specific subtypes of `obl`: <tt><a href="vi_vtb-dep-obl-about.html">obl:about</a></tt>, <tt><a href="vi_vtb-dep-obl-adv.html">obl:adv</a></tt>, <tt><a href="vi_vtb-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="vi_vtb-dep-obl-comp.html">obl:comp</a></tt>, <tt><a href="vi_vtb-dep-obl-iobj.html">obl:iobj</a></tt>, <tt><a href="vi_vtb-dep-obl-tmod.html">obl:tmod</a></tt>, <tt><a href="vi_vtb-dep-obl-with.html">obl:with</a></tt>.

136 nodes (0%) are attached to their parents as `obl:adj`.

131 instances of `obl:adj` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.49264705882353.

The following 9 pairs of parts of speech are connected with `obl:adj`: <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (121; 89% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (4; 3% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-NUM.html">NUM</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obl:adj	color:blue
1	Thổ chu	thổ chu	PROPN	NNP	_	3	nsubj	_	_
2	rất	rất	ADV	ADV	_	3	advmod	_	_
3	nhiều	nhiều	ADJ	ADJ	_	0	root	_	_
4	đồi mồi	đồi mồi	NOUN	N	_	3	obl:adj	_	_
5	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 obl:adj	color:blue
1	Tuy nhiên	tuy nhiên	SCONJ	SC	_	10	mark	_	_
2	,	,	PUNCT	PUNCT	_	10	punct	_	_
3	một	một	NUM	NUM	_	4	nummod	_	_
4	năm	năm	NOUN	N	_	10	obl:tmod	_	_
5	gần	gần	ADJ	ADJ	_	4	acl:subj	_	_
6	đây	đây	PRON	PRO	_	5	obl:adj	_	_
7	,	,	PUNCT	PUNCT	_	10	punct	_	_
8	sức khỏe	sức khỏe	NOUN	N	_	10	nsubj	_	_
9	Diệp	diệp	NOUN	N	_	8	compound	_	_
10	yếu	yếu	ADJ	ADJ	_	0	root	_	_
11	đi	đi	VERB	V	_	10	compound:atov	_	_
12	nhiều	nhiều	ADJ	ADJ	_	10	advmod:adj	_	_
13	.	.	PUNCT	PUNCT	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 obl:adj	color:blue
1	Tây nguyên	tây nguyên	PROPN	NNP	_	5	obl	_	_
2	và	và	CCONJ	CC	_	3	cc	_	_
3	Nam bộ	Nam bộ	PROPN	NNP	_	1	conj	_	_
4	:	:	PUNCT	:	_	1	punct	_	_
5	có	có	VERB	V	_	0	root	_	_
6	khả năng	khả năng	NOUN	N	_	5	obj	_	_
7	thiếu	thiếu	VERB	V	_	6	acl:subj	_	_
8	nước	nước	NOUN	N	_	7	obl:adj	_	_
9	trên	trên	ADP	Pre	_	10	case	_	_
10	diện	diện	NOUN	N	_	7	obl	_	_
11	rộng	rộng	ADJ	Adj	_	10	amod	_	_
12	.	.	PUNCT	.	_	5	punct	_	_

~~~


