---
layout: base
title:  'Statistics of vocative in UD_Irish'
udver: '2'
---

## Treebank Statistics: UD_Irish: Relations: `vocative`

This relation is universal.

20 nodes (0%) are attached to their parents as `vocative`.

13 instances of `vocative` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.05.

The following 7 pairs of parts of speech are connected with `vocative`: <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-PROPN.html">PROPN</a></tt> (6; 30% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-PROPN.html">PROPN</a></tt> (5; 25% instances), <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (5; 25% instances), <tt><a href="ga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="ga-pos-PRON.html">PRON</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="ga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 vocative	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 vocative	color:blue
1	Slán	slán	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	0	root	_	_
2	leat	le	ADP	Prep	Number=Sing|Person=2	1	obl:prep	_	SpaceAfter=No
3	,	,	PUNCT	Punct	_	5	punct	_	_
4	a	a	PART	Voc	PartType=Voc	5	case:voc	_	_
5	Mhichíl	Mhichíl	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	vocative	_	_
6	ghrinn	grinn	ADJ	Adj	Gender=Masc|Number=Sing|PartType=Voc	5	amod	_	SpaceAfter=No
7	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 vocative	color:blue
1	(	(	PUNCT	Punct	_	3	punct	_	SpaceAfter=No
2	Ag	ag	ADP	Simp	_	3	case	_	_
3	béicíl	béicíl	NOUN	Noun	VerbForm=Vnoun	5	xcomp	_	SpaceAfter=No
4	)	)	PUNCT	Punct	_	3	punct	_	_
5	Téigh	téigh	VERB	VTI	Mood=Imp|Number=Sing|Person=2	0	root	_	_
6	abhaile	abhaile	ADV	Dir	_	5	advmod	_	SpaceAfter=No
7	,	,	PUNCT	Punct	_	8	punct	_	_
8	a	a	PART	Voc	PartType=Voc	9	case:voc	_	_
9	bhithiúnaigh	bithiúnach	NOUN	Noun	Case=Voc|Form=Len|Gender=Masc|Number=Sing	5	vocative	_	SpaceAfter=No
10	!	!	PUNCT	!	_	5	punct	_	_

~~~


