---
layout: base
title:  'Statistics of vocative in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `vocative`

This relation is universal.

53 nodes (0%) are attached to their parents as `vocative`.

31 instances of `vocative` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.56603773584906.

The following 11 pairs of parts of speech are connected with `vocative`: <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (24; 45% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (11; 21% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (8; 15% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="ga_idt-pos-AUX.html">AUX</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 vocative	color:blue
1	TOMÁS	Tomás	NOUN	Noun	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
2	:	:	PUNCT	Punct	_	4	punct	_	_
3	Cé	cé	PRON	Q	PronType=Int	4	nsubj	_	_
4	bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	1	parataxis	_	SpaceAfter=No
5	,	,	PUNCT	Punct	_	7	punct	_	_
6	a	a	PART	Voc	PartType=Voc	7	case:voc	_	_
7	stór	stór	NOUN	Noun	Case=Voc|Gender=Masc|Number=Sing	4	vocative	_	SpaceAfter=No
8	?	?	PUNCT	?	_	1	punct	_	_

~~~


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


