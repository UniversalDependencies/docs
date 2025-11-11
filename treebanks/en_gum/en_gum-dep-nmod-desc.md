---
layout: base
title:  'Statistics of nmod:desc in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `nmod:desc`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_gum-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="en_gum-dep-nmod-unmarked.html">nmod:unmarked</a></tt>.

336 nodes (0%) are attached to their parents as `nmod:desc`.

332 instances of `nmod:desc` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.10119047619048.

The following 3 pairs of parts of speech are connected with `nmod:desc`: <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (259; 77% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (76; 23% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:desc	color:blue
1	Emperor	Emperor	PROPN	NNP	Number=Sing	2	nmod:desc	2:nmod:desc	Discourse=organization-heading:1->2:6:grf-ly-_-_+sem-synym-1-19-_|Entity=(1-person-new-sssss-cf1-1,2-coref-Emperor_Norton
2	Norton	Norton	PROPN	NNP	Number=Sing	0	root	0:root	Entity=1)

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:desc	color:blue
1	File	file	NOUN	NN	Number=Sing	2	compound	2:compound	Discourse=context-background:2->9:3:grf-ly-_-_|Entity=(4-abstract-new-nnnnn-cf2-2-coref
2	photo	photo	NOUN	NN	Number=Sing	0	root	0:root	_
3	of	of	ADP	IN	_	5	case	5:case	_
4	interviewee	interviewee	NOUN	NN	Number=Sing	5	nmod:desc	5:nmod:desc	Entity=(5-person-new-nnnnn-cf1-2,3-coref-David_Titley|MSeg=interview-ee
5	David	David	PROPN	NNP	Number=Sing	2	nmod	2:nmod:of	MSeg=Dav-id
6	Titley	Titley	PROPN	NNP	Number=Sing	5	flat	5:flat	Entity=5)4)|SpaceAfter=No
7	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nmod:desc	color:blue
1	King	King	PROPN	NNP	Number=Sing	4	nmod:desc	4:nmod:desc	Discourse=elaboration-additional:166->163:1:sem-rpt-996-998,1000-1003-_|Entity=(89-abstract-giv:act-sssns-cf1*-4-coref-The_King_of_Fighters_XIV
2	of	of	ADP	IN	_	3	case	3:case	_
3	Fighters	Fighter	PROPN	NNPS	Number=Plur	4	nmod	4:nmod:of	MSeg=Fighter-s
4	XIV	XIV	NUM	CD	NumForm=Roman|NumType=Card	0	root	0:root	Entity=89)|SpaceAfter=No
5	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


