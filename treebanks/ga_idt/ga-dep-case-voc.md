---
layout: base
title:  'Statistics of case:voc in UD_Irish'
udver: '2'
---

## Treebank Statistics: UD_Irish: Relations: `case:voc`

This relation is a language-specific subtype of <tt><a href="ga-dep-case.html">case</a></tt>.

21 nodes (0%) are attached to their parents as `case:voc`.

21 instances of `case:voc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.04761904761905.

The following 2 pairs of parts of speech are connected with `case:voc`: <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-PART.html">PART</a></tt> (11; 52% instances), <tt><a href="ga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga-pos-PART.html">PART</a></tt> (10; 48% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case:voc	color:blue
1	SEANA-BHID	SEANA-BHID	PROPN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	2	nmod	_	_
2	Bid	Bid	PROPN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	0	root	_	_
3	anseo	anseo	ADV	Loc	_	2	advmod	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	6	punct	_	_
5	a	a	PART	Voc	PartType=Voc	6	case:voc	_	_
6	dhaoine	duine	NOUN	Noun	Case=Voc|Definite=Def|Gender=Masc|Number=Plur	2	vocative	_	_
7	uaisle	uasal	ADJ	Adj	Number=Plur|PartType=Voc	6	amod	_	SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case:voc	color:blue
1	Slán	slán	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	0	root	_	_
2	leat	le	ADP	Prep	Number=Sing|Person=2	1	obl:prep	_	SpaceAfter=No
3	,	,	PUNCT	Punct	_	5	punct	_	_
4	a	a	PART	Voc	PartType=Voc	5	case:voc	_	_
5	Mhichíl	Mhichíl	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	vocative	_	_
6	ghrinn	grinn	ADJ	Adj	Gender=Masc|Number=Sing|PartType=Voc	5	amod	_	SpaceAfter=No
7	.	.	PUNCT	.	_	1	punct	_	_

~~~


