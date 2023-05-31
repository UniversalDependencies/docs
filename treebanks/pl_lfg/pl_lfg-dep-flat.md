---
layout: base
title:  'Statistics of flat in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `flat`

This relation is universal.

1106 nodes (1%) are attached to their parents as `flat`.

1106 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.37070524412297.

The following 5 pairs of parts of speech are connected with `flat`: <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt> (611; 55% instances), <tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt> (332; 30% instances), <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt> (159; 14% instances), <tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="pl_lfg-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat	color:blue
1	A	a	CCONJ	conj	_	6	cc	6:cc	_
2	nowe	nowy	ADJ	adj:sg:acc:n:pos	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	5	amod	5:amod	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	4	punct	4:punct	_
4	dwupokojowe	dwupokojowy	ADJ	adj:sg:acc:n:pos	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	2	conj	2:conj|5:amod	_
5	mieszkanko	mieszkanko	NOUN	subst:sg:acc:n	Case=Acc|Gender=Neut|Number=Sing	6	obj	6:obj	_
6	otrzymali	otrzymać	VERB	praet:pl:m1:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	państwo	państwo	NOUN	subst:pl:nom:m1	Case=Nom|Gender=Masc|Number=Plur|SubGender=Masc1	6	nsubj	6:nsubj	_
8	Sknerowie	Sknera	PROPN	subst:pl:nom:m1	Case=Nom|Gender=Masc|Number=Plur|SubGender=Masc1	7	flat	7:flat	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat	color:blue
1	Do	do	ADP	prep:gen	AdpType=Prep	2	case	2:case	Case=Gen
2	Lądka	Lądek	PROPN	subst:sg:gen:m3	Case=Gen|Gender=Masc|Number=Sing|SubGender=Masc3	4	obl	4:obl:do	_
3	Zdroju	Zdrój	PROPN	subst:sg:gen:m3	Case=Gen|Gender=Masc|Number=Sing|SubGender=Masc3	2	flat	2:flat	_
4	wysłano	wysłać	VERB	imps:perf	Aspect=Perf|Mood=Ind|Person=0|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	specjalną	specjalny	ADJ	adj:sg:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	6	amod	6:amod	_
6	komisję	komisja	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	4	obj	4:obj	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat	color:blue
1	A	a	CCONJ	conj	_	4	cc	4:cc	_
2	pan	pan	NOUN	subst:sg:nom:m1	Case=Nom|Gender=Masc|Number=Sing|SubGender=Masc1	4	nsubj	4:nsubj	_
3	poseł	poseł	NOUN	subst:sg:nom:m1	Case=Nom|Gender=Masc|Number=Sing|SubGender=Masc1	2	flat	2:flat	_
4	powiedział	powiedzieć	VERB	praet:sg:m1:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
6	że	że	SCONJ	comp	_	8	mark	8:mark	_
7	nie	nie	PART	qub	Polarity=Neg	8	advmod	8:advmod	_
8	chce	chcieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	ccomp:obj	4:ccomp:obj	_
9	Polski	Polska	PROPN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	8	obl	8:obl	_
10	zaściankowej	zaściankowy	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	9	acl	9:acl	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


