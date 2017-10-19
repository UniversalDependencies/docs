---
layout: base
title:  'Statistics of iobj in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `iobj`

This relation is universal.

2125 nodes (0%) are attached to their parents as `iobj`.

1488 instances of `iobj` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.11105882352941.

The following 8 pairs of parts of speech are connected with `iobj`: <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt> (1364; 64% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-PRON.html">PRON</a></tt> (509; 24% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (93; 4% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt> (89; 4% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-PROPN.html">PROPN</a></tt> (50; 2% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-NUM.html">NUM</a></tt> (14; 1% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-SYM.html">SYM</a></tt> (5; 0% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 iobj	color:blue
1	Zvýšené	zvýšený	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	2	amod	_	LDeriv=zvýšit
2	úsilí	úsilí	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	4	obj	_	_
3	budeme	být	AUX	VB-P---1F-AA---	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	4	aux	_	_
4	věnovat	věnovat	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	0	root	_	_
5	zavádění	zavádění	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Number=Sing|Polarity=Pos	4	iobj	_	LDeriv=zavádět
6	nových	nový	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	_	_
7	poznatků	poznatek	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	5	nmod	_	_
8	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	9	case	_	LId=do-1
9	praxe	praxe	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	5	nmod	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 iobj	color:blue
1	Dobrý	dobrý	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	2	amod	_	_
2	vzhled	vzhled	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	4	nsubj	_	_
3	nám	já	PRON	PP-P3--1-------	Case=Dat|Number=Plur|Person=1|PronType=Prs	4	iobj	_	_
4	dodává	dodávat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LDeriv=dodat
5	jistotu	jistota	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	4	obj	_	_
6	a	a	CCONJ	J^-------------	_	7	cc	_	LId=a-1
7	sebevědomí	sebevědomí	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	5	conj	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	10	punct	_	_
9	které	který	DET	P4NS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Int,Rel	10	obj	_	_
10	potřebujeme	potřebovat	VERB	VB-P---1P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	acl	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 iobj	color:blue
1	A	a	CCONJ	J^-------------	_	7	cc	_	_
2	že	že	SCONJ	J,-------------	_	7	advmod	_	_
3	co	co	PRON	PQ--4----------	Animacy=Inan|Case=Acc|PronType=Int,Rel	7	obj	_	LId=co-1
4	by	být	AUX	Vc-X---3-------	Mood=Cnd|Person=3|VerbForm=Fin	7	aux	_	_
5	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	6	case	_	_
6	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	7	iobj	_	_
7	řekly	říci	VERB	VpTP---XR-AA---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	11	punct	_	_
9	když	když	SCONJ	J,-------------	_	11	mark	_	_
10	by	být	AUX	Vc-------------	Mood=Cnd|Person=3|VerbForm=Fin	11	aux	_	_
11	šli	jít	VERB	VpMP---XR-AA---	Animacy=Anim|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	7	advcl	_	_
12	společně	společně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	11	advmod	_	LDeriv=společný
13	darovat	darovat	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	11	advcl	_	_
14	krev	krev	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	13	obj	_	SpaceAfter=No
15	.	.	PUNCT	Z:-------------	_	7	punct	_	_

~~~


