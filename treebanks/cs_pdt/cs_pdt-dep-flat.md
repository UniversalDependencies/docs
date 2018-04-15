---
layout: base
title:  'Statistics of flat in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `flat`

This relation is universal.
There are 1 language-specific subtypes of `flat`: <tt><a href="cs_pdt-dep-flat-foreign.html">flat:foreign</a></tt>.

13712 nodes (1%) are attached to their parents as `flat`.

13712 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.26414819136523.

The following 7 pairs of parts of speech are connected with `flat`: <tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt> (13531; 99% instances), <tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdt-pos-ADP.html">ADP</a></tt> (78; 1% instances), <tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (60; 0% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt> (37; 0% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdt-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 flat	color:blue
1	P	P	PROPN	NNMXX-----A---8	Abbr=Yes|Animacy=Anim|Gender=Masc|NameType=Giv|Polarity=Pos	0	root	0:root	SpaceAfter=No|LId=P-0
2	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_
3	L	L	PROPN	NNMXX-----A---8	Abbr=Yes|Animacy=Anim|Gender=Masc|NameType=Sur|Polarity=Pos	1	flat	1:flat	SpaceAfter=No|LId=L-9
4	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	1	punct	1:punct	_
6	Ostrava	Ostrava	PROPN	NNFS1-----A----	Case=Nom|Gender=Fem|NameType=Geo|Number=Sing|Polarity=Pos	1	dep	1:dep	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat	color:blue
1	A	a	CCONJ	J^-------------	_	7	cc	7:cc	LId=a-1
2	Jan	Jan	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	7	nsubj	7:nsubj	_
3	De	de	ADP	RR--1----------	AdpType=Prep|Case=Nom|Foreign=Yes	2	flat	2:flat	LGloss=(z_franc._de,_zejm._ve_jménech)
4	Bont	Bont	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	2	flat	2:flat	_
5	pravidla	pravidlo	NOUN	NNNP4-----A----	Case=Acc|Gender=Neut|Number=Plur|Polarity=Pos	7	obj	7:obj	_
6	žánru	žánr	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	5	nmod	5:nmod	_
7	zná	znát	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat	color:blue
1	Foto	foto	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	0	root	0:root	SpaceAfter=No
2	:	:	PUNCT	Z:-------------	_	3	punct	3:punct	_
3	Jan	Jan	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	1	appos	1:appos	_
4	Novotný	Novotný	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	3	flat	3:flat	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	6	punct	6:punct	_
6	předseda	předseda	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	3	appos	3:appos	_
7	Bytového	bytový	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	8	amod	8:amod	_
8	družstva	družstvo	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	6	nmod	6:nmod	_
9	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	10	case	10:case	LId=v-1
10	Ostravě	Ostrava	PROPN	NNFS6-----A----	Case=Loc|Gender=Fem|NameType=Geo|Number=Sing|Polarity=Pos	8	nmod	8:nmod	SpaceAfter=No
11	-	-	PUNCT	Z:-------------	_	12	punct	12:punct	SpaceAfter=No
12	Porubě	Poruba	PROPN	NNFS6-----A----	Case=Loc|Gender=Fem|NameType=Geo|Number=Sing|Polarity=Pos	10	nmod	10:nmod	_

~~~


