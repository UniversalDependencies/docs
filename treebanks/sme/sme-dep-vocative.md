---
layout: base
title:  'Statistics of vocative in UD_North_Sami'
udver: '2'
---

## Treebank Statistics: UD_North_Sami: Relations: `vocative`

This relation is universal.

5 nodes (0%) are attached to their parents as `vocative`.

3 instances of `vocative` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.4.

The following 4 pairs of parts of speech are connected with `vocative`: <tt><a href="sme-pos-VERB.html">VERB</a></tt>-<tt><a href="sme-pos-PROPN.html">PROPN</a></tt> (2; 40% instances), <tt><a href="sme-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sme-pos-PROPN.html">PROPN</a></tt> (1; 20% instances), <tt><a href="sme-pos-PRON.html">PRON</a></tt>-<tt><a href="sme-pos-PRON.html">PRON</a></tt> (1; 20% instances), <tt><a href="sme-pos-VERB.html">VERB</a></tt>-<tt><a href="sme-pos-NOUN.html">NOUN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 vocative	color:blue
1	Gula	gullat	VERB	V	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	1	punct	_	_
3	Pippi	Pippi	PROPN	N	Case=Nom|Number=Sing	1	vocative	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	1	punct	_	_
5	oažžugo	oažžut	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	conj	_	_
6	čoaggit	čoaggit	VERB	V	VerbForm=Inf	5	ccomp	_	_
7	visot	visot	PRON	Pron	PronType=Ind	6	obj	_	_
8	maid	mii	PRON	Pron	Case=Acc|Number=Sing|PronType=Rel	7	appos	_	_
9	dievás	dievvá	NOUN	N	Case=Loc|Number=Sing	10	obl	_	_
10	gávdná	gávdnat	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	acl	_	SpaceAfter=No
11	?	?	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 vocative	color:blue
1	Biera	Biera	PROPN	N	Case=Nom|Number=Sing	4	vocative	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	4	punct	_	_
3	du	don	PRON	Pron	Case=Gen|Number=Sing|Person=2|PronType=Prs	4	nmod:poss	_	_
4	sabehiid	sabet	NOUN	N	Case=Acc|Number=Plur	0	root	_	SpaceAfter=No
5	!	^excl	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 vocative	color:blue
1	Mun	mun	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	vocative	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	6	punct	_	_
3	Johanas	Johanas	PROPN	N	Case=Nom|Number=Sing	1	appos	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	lean	leat	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	dat	dat	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	0	root	_	_
7	guhte	guhte	PRON	Pron	Case=Nom|Number=Sing|PronType=Rel	9	nsubj	_	_
8	lean	leat	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	9	aux	_	_
9	gullan	gullat	VERB	V	Aspect=Perf|VerbForm=Part	6	acl:relcl	_	_
10	ja	ja	CCONJ	CC	_	9	cc	_	_
11	oaidnán	oaidnit	VERB	V	Aspect=Perf|VerbForm=Part	9	conj	_	_
12	buot	buot	ADV	Adv	_	13	advmod	_	_
13	dán	dát	PRON	Pron	Case=Acc|Number=Sing|PronType=Dem	11	obj	_	SpaceAfter=No
14	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


