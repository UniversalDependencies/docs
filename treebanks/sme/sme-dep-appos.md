---
layout: base
title:  'Statistics of appos in UD_North_Sami'
udver: '2'
---

## Treebank Statistics: UD_North_Sami: Relations: `appos`

This relation is universal.

27 nodes (0%) are attached to their parents as `appos`.

27 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.81481481481481.

The following 6 pairs of parts of speech are connected with `appos`: <tt><a href="sme-pos-PRON.html">PRON</a></tt>-<tt><a href="sme-pos-PRON.html">PRON</a></tt> (8; 30% instances), <tt><a href="sme-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sme-pos-NOUN.html">NOUN</a></tt> (6; 22% instances), <tt><a href="sme-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sme-pos-PROPN.html">PROPN</a></tt> (5; 19% instances), <tt><a href="sme-pos-PRON.html">PRON</a></tt>-<tt><a href="sme-pos-NOUN.html">NOUN</a></tt> (4; 15% instances), <tt><a href="sme-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sme-pos-NOUN.html">NOUN</a></tt> (3; 11% instances), <tt><a href="sme-pos-PRON.html">PRON</a></tt>-<tt><a href="sme-pos-PROPN.html">PROPN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 appos	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 appos	color:blue
1	Šattai	šaddat	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
2	eahket	eahket	NOUN	N	Case=Nom|Number=Sing	1	nsubj	_	_
3	ja	ja	CCONJ	CC	_	1	cc	_	_
4	šattai	šaddat	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	1	conj	_	_
5	iđit	iđit	NOUN	N	Case=Nom|Number=Sing	4	nsubj	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	1	punct	_	_
7	vuosttaš	vuosttaš	ADJ	A	_	8	amod	_	_
8	beaivi	beaivi	NOUN	N	Case=Nom|Number=Sing	5	appos	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 appos	color:blue
1	Sámediggepresideanta	sámediggepresideanta	NOUN	N	Case=Nom|Number=Sing	2	compound:nn	_	_
2	Egil	Egil	PROPN	N	_	4	nsubj	_	_
3	Olli	Olli	PROPN	N	Case=Nom|Number=Sing	2	flat	_	_
4	dovdá	dovdat	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	iežas	ieš	PRON	Pron	Case=Acc|Number[psor]=Sing|Person[psor]=3|PronType=Prs|Reflex=Yes	6	nsubj	_	_
6	beahtahallan	beahtahallat	VERB	V	Aspect=Perf|VerbForm=Part	4	ccomp	_	_
7	iežas	ieš	PRON	Pron	Case=Gen|Number[psor]=Sing|Person[psor]=3|PronType=Prs|Reflex=Yes	8	nmod:poss	_	_
8	bellodahkii	bellodat	NOUN	N	Case=Ill|Number=Sing	6	nmod	_	SpaceAfter=No
9	,	,	PUNCT	CLB	_	4	punct	_	_
10	Bargiidbellodahkii	Bargiidbellodat	PROPN	N	Case=Ill|Number=Sing	8	appos	_	SpaceAfter=No
11	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


