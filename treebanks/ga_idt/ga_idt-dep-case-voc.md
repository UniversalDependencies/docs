---
layout: base
title:  'Statistics of case:voc in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `case:voc`

This relation is a language-specific subtype of <tt><a href="ga_idt-dep-case.html">case</a></tt>.

21 nodes (0%) are attached to their parents as `case:voc`.

21 instances of `case:voc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.04761904761905.

The following 2 pairs of parts of speech are connected with `case:voc`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (11; 52% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (10; 48% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 case:voc	color:blue
1	PÁIDÍ	Páidí	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	2	vocative	_	_
2	Cuir	cuir	VERB	VTI	Mood=Imp|Number=Sing|Person=2	0	root	_	_
3	do	do	DET	Det	Number=Sing|Person=2|Poss=Yes	4	nmod:poss	_	_
4	lámh	lámh	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	2	obj	_	_
5	thar	thar	ADP	Simp	_	7	case	_	_
6	mo	mo	DET	Det	Number=Sing|Person=1|Poss=Yes	7	nmod:poss	_	_
7	ghualainn	gualainn	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Fem|Number=Sing	2	obl	_	SpaceAfter=No
8	,	,	PUNCT	Punct	_	10	punct	_	_
9	a	a	PART	Voc	PartType=Voc	10	case:voc	_	_
10	sheanduine	duine	NOUN	Noun	Case=Voc|Gender=Masc|Number=Sing	2	vocative	_	SpaceAfter=No
11	.	.	PUNCT	.	_	2	punct	_	_

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


