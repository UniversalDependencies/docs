---
layout: base
title:  'Statistics of case:dec in UD_Chinese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Chinese-GSD: Relations: `case:dec`

This relation is a language-specific subtype of <tt><a href="zh_gsd-dep-case.html">case</a></tt>.
There are also 2 other language-specific subtypes of `case`: <tt><a href="zh_gsd-dep-case-pref.html">case:pref</a></tt>, <tt><a href="zh_gsd-dep-case-suff.html">case:suff</a></tt>.

3285 nodes (3%) are attached to their parents as `case:dec`.

3285 instances of `case:dec` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.54733637747336.

The following 10 pairs of parts of speech are connected with `case:dec`: <tt><a href="zh_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (1790; 54% instances), <tt><a href="zh_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (518; 16% instances), <tt><a href="zh_gsd-pos-PART.html">PART</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (428; 13% instances), <tt><a href="zh_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (256; 8% instances), <tt><a href="zh_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (159; 5% instances), <tt><a href="zh_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (41; 1% instances), <tt><a href="zh_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (31; 1% instances), <tt><a href="zh_gsd-pos-X.html">X</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (29; 1% instances), <tt><a href="zh_gsd-pos-DET.html">DET</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (27; 1% instances), <tt><a href="zh_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (6; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 case:dec	color:blue
1	大	大	ADV	RB	_	2	advmod	_	SpaceAfter=No
2	多數	多數	ADJ	JJ	_	6	amod	_	SpaceAfter=No
3	的	的	PART	DEC	Case=Gen	2	case:dec	_	SpaceAfter=No
4	加長	加長	VERB	VV	_	5	compound	_	SpaceAfter=No
5	型	型	PART	SFN	_	6	nmod	_	SpaceAfter=No
6	禮車	禮車	NOUN	NN	_	11	nsubj	_	SpaceAfter=No
7	則是	則是	AUX	VC	_	11	cop	_	SpaceAfter=No
8	租車	租車	NOUN	NN	_	9	nmod	_	SpaceAfter=No
9	公司	公司	NOUN	NN	_	11	nmod	_	SpaceAfter=No
10	的	的	PART	DEC	Case=Gen	9	case:dec	_	SpaceAfter=No
11	財產	財產	NOUN	NN	_	0	root	_	SpaceAfter=No
12	。	。	PUNCT	.	_	11	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 case:dec	color:blue
1	但是	但是	ADV	RB	_	9	mark	_	SpaceAfter=No
2	迪士尼	迪士尼	PROPN	NNP	_	5	nmod	_	SpaceAfter=No
3	的	的	PART	DEC	Case=Gen	2	case:dec	_	SpaceAfter=No
4	公主	公主	NOUN	NN	_	5	compound	_	SpaceAfter=No
5	們	們	PART	SFN	Number=Plur	9	nsubj	_	SpaceAfter=No
6	不會	不會	AUX	MD	_	9	aux	_	SpaceAfter=No
7	都	都	ADV	RB	_	9	mark	_	SpaceAfter=No
8	太	太	ADV	RB	_	9	advmod	_	SpaceAfter=No
9	侷限	侷限	VERB	VV	_	0	root	_	SpaceAfter=No
10	於	於	VERB	VV	_	9	mark	_	SpaceAfter=No
11	一	一	NUM	CD	NumType=Card	12	nummod	_	SpaceAfter=No
12	個	個	NOUN	NNB	_	13	clf	_	SpaceAfter=No
13	範圍	範圍	NOUN	NN	_	9	obj	_	SpaceAfter=No
14	之內	之內	ADP	IN	_	13	acl	_	SpaceAfter=No
15	了	了	PART	UH	_	9	discourse	_	SpaceAfter=No
16	嗎	嗎	PART	UH	Mood=Inter	9	discourse	_	SpaceAfter=No
17	？	？	PUNCT	.	_	9	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 case:dec	color:blue
1	他	他	PRON	PRP	Person=3	7	nsubj	_	SpaceAfter=No
2	花費	花費	VERB	VV	_	7	advcl	_	SpaceAfter=No
3	了	了	PART	AS	Aspect=Perf	2	aux:aspect	_	SpaceAfter=No
4	許多	許多	NUM	CD	NumType=Card	5	nummod	_	SpaceAfter=No
5	時間	時間	NOUN	NN	_	2	obj	_	SpaceAfter=No
6	來	來	ADV	RB	_	7	mark	_	SpaceAfter=No
7	比較	比較	VERB	VV	_	0	root	_	SpaceAfter=No
8	加拿大	加拿大	PROPN	NNP	_	13	nmod	_	SpaceAfter=No
9	地質	地質	NOUN	NN	_	13	nmod	_	SpaceAfter=No
10	調查	調查	VERB	VV	_	11	compound	_	SpaceAfter=No
11	局	局	PART	SFN	_	13	nmod	_	SpaceAfter=No
12	博物	博物	NOUN	NN	_	13	compound	_	SpaceAfter=No
13	館	館	PART	SFN	_	17	nmod	_	SpaceAfter=No
14	中	中	NOUN	NN	_	13	acl	_	SpaceAfter=No
15	的	的	PART	DEC	Case=Gen	13	case:dec	_	SpaceAfter=No
16	恐龍	恐龍	NOUN	NN	_	17	nmod	_	SpaceAfter=No
17	化石	化石	NOUN	NN	_	7	obj	_	SpaceAfter=No
18	。	。	PUNCT	.	_	7	punct	_	SpaceAfter=No

~~~


