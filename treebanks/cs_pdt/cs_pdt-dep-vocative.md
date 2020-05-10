---
layout: base
title:  'Statistics of vocative in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `vocative`

This relation is universal.

81 nodes (0%) are attached to their parents as `vocative`.

45 instances of `vocative` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.2962962962963.

The following 11 pairs of parts of speech are connected with `vocative`: <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt> (52; 64% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt> (11; 14% instances), <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt> (7; 9% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="cs_pdt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="cs_pdt-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="cs_pdt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="cs_pdt-pos-PART.html">PART</a></tt>-<tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 vocative	color:blue
1	Občane	občan	NOUN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|Number=Sing|Polarity=Pos	3	vocative	3:vocative	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	3	punct	3:punct	_
3	chceš	chtít	VERB	VB-S---2P-AA---	Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	dýchat	dýchat	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	3	xcomp	3:xcomp	_
5	čistý	čistý	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	6	amod	6:amod	_
6	vzduch	vzduch	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	4	obj	4:obj	_
7	a	a	CCONJ	J^-------------	_	8	cc	8:cc	LId=a-1
8	mít	mít	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	4	conj	3:xcomp|4:conj	_
9	také	také	ADV	Db-------------	_	8	advmod	8:advmod	LGloss=(rovněž)
10	teplo	teplo	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	8	obj	8:obj	SpaceAfter=No|LId=teplo-1
11	?	?	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 vocative	color:blue
1	No	no	PART	TT-------------	_	6	dep	6:dep	_
2	tak	tak	ADV	Db-------------	PronType=Dem	6	dep	6:dep	SpaceAfter=No|LId=tak-3
3	,	,	PUNCT	Z:-------------	_	4	punct	4:punct	_
4	Baryku	Baryk	PROPN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	6	vocative	6:vocative	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	4	punct	4:punct	_
6	běž	běžet	VERB	Vi-S---2--A----	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|VerbForm=Fin	10	advcl	10:advcl	_
7	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	8	case	8:case	LId=na-1
8	místo	místo	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	6	obl	6:obl:na:acc	SpaceAfter=No|LId=místo-1|LGloss=(fyzické_umístění)
9	,	,	PUNCT	Z:-------------	_	6	punct	6:punct	_
10	zkoušela	zkoušet	VERB	VpQW---XR-AA---	Aspect=Imp|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
11	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	10	obj	10:obj	_
12	přítelkyně	přítelkyně	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	10	nsubj	10:nsubj	SpaceAfter=No|LGloss=(^FY*4ec)
13	.	.	PUNCT	Z:-------------	_	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 vocative	color:blue
1	Skleněná	skleněný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	2	amod	2:amod	_
2	louka	louka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	0	root	0:root	SpaceAfter=No
3	:	:	PUNCT	Z:-------------	_	4	punct	4:punct	_
4	Máj	máj	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	2	appos	2:appos	_
5	(	(	PUNCT	Z:-------------	_	7	punct	7:punct	SpaceAfter=No
6	Ó	ó	INTJ	II-------------	_	7	dep	7:dep|10:dep	LId=ó-1
7	králi	král	NOUN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|Number=Sing|Polarity=Pos	2	vocative	2:vocative	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	10	punct	10:punct	_
9	dobrou	dobrý	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	10	amod	10:amod	_
10	noc	noc	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	7	conj	2:vocative|7:conj	SpaceAfter=No
11	!	!	PUNCT	Z:-------------	_	7	punct	7:punct	SpaceAfter=No
12	)	)	PUNCT	Z:-------------	_	7	punct	7:punct	_

~~~


