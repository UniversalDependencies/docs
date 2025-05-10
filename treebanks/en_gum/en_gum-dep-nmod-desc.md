---
layout: base
title:  'Statistics of nmod:desc in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `nmod:desc`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_gum-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="en_gum-dep-nmod-unmarked.html">nmod:unmarked</a></tt>.

260 nodes (0%) are attached to their parents as `nmod:desc`.

256 instances of `nmod:desc` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.10769230769231.

The following 3 pairs of parts of speech are connected with `nmod:desc`: <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (256; 98% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:desc	color:blue
1	Emperor	Emperor	PROPN	NNP	Number=Sing	2	nmod:desc	2:nmod:desc	Discourse=organization-heading:1->2:6:grf-ly-+sem-synym-1-19|Entity=(1-person-new-sssss-cf1-1,2-coref-Emperor_Norton
2	Norton	Norton	PROPN	NNP	Number=Sing	0	root	0:root	Entity=1)

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 nmod:desc	color:blue
1	John	John	PROPN	NNP	Number=Sing	3	nsubj	3:nsubj|18:nsubj	Discourse=context-background:26->60:6:_|Entity=(38-person-giv:inact-snnnn-cf1-1-coref)
2	's	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	3:cop	_
3	up	up	ADV	RB	Degree=Pos	0	root	0:root	_
4	first	first	ADV	RB	Degree=Pos|NumForm=Word|NumType=Ord	3	advmod	3:advmod	_
5	out	out	ADP	IN	ExtPos=ADP	8	case	8:case	_
6	of	of	ADP	IN	_	5	fixed	5:fixed	_
7	Clifton	Clifton	PROPN	NNP	Number=Sing	8	compound	8:compound	Entity=(53-place-new-nnnnn-cf2-1,2,4,5-sgl-Clifton_Park%2C_New_York
8	Park	Park	PROPN	NNP	Number=Sing	1	nmod	1:nmod:out_of	SpaceAfter=No
9	,	,	PUNCT	,	_	11	punct	11:punct	_
10	New	New	ADJ	NNP	Degree=Pos	11	amod	11:amod	Entity=(54-place-new-nnnnn-cf3-1,2-sgl-New_York_%28state%29
11	York	York	PROPN	NNP	Number=Sing	8	nmod:unmarked	8:nmod:unmarked	Entity=54)53)|SpaceAfter=No
12	,	,	PUNCT	,	_	13	punct	13:punct	_
13	and	and	CCONJ	CC	_	18	cc	18:cc	_
14	independent	independent	NOUN	NN	Number=Sing	15	nmod:desc	15:nmod:desc	Entity=(38-person-giv:act-snnnn-cf1-2-coref|MSeg=in-de-pend-ent
15	John	John	PROPN	NNP	Number=Sing	18	vocative	18:vocative	Entity=38)|SpaceAfter=No
16	,	,	PUNCT	,	_	15	punct	15:punct	_
17	good	good	ADJ	JJ	Degree=Pos	18	amod	18:amod	Entity=(55-time-new-nnnnn-cf4-2-coref
18	morning	morning	NOUN	NN	Number=Sing	3	conj	3:conj:and	Entity=55)|MSeg=morn-ing|SpaceAfter=No
19	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nmod:desc	color:blue
1	King	King	PROPN	NNP	Number=Sing	4	nmod:desc	4:nmod:desc	Discourse=elaboration-additional:166->163:1:sem-rpt-996-998,1000-1003|Entity=(89-abstract-giv:act-sssns-cf1*-4-coref-The_King_of_Fighters_XIV
2	of	of	ADP	IN	_	3	case	3:case	_
3	Fighters	Fighter	PROPN	NNPS	Number=Plur	4	nmod	4:nmod:of	MSeg=Fighter-s
4	XIV	XIV	NUM	CD	NumForm=Roman|NumType=Card	0	root	0:root	Entity=89)|SpaceAfter=No
5	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


