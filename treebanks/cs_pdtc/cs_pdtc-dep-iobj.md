---
layout: base
title:  'Statistics of iobj in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `iobj`

This relation is universal.

138 nodes (0%) are attached to their parents as `iobj`.

96 instances of `iobj` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.31884057971015.

The following 7 pairs of parts of speech are connected with `iobj`: <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt> (61; 44% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt> (47; 34% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt> (17; 12% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (5; 4% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (4; 3% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 iobj	color:blue
1	Nemám	mít	VERB	VB-S---1P-NAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	5	ccomp	5:ccomp	_
2	co	co	PRON	PQ--4----------	Animacy=Inan|Case=Acc|PronType=Int,Rel	3	obj	3:obj	LId=co-1|Functor=3:PAT
3	ztratit	ztratit	VERB	Vf--------A-P--	Aspect=Perf|Polarity=Pos|VerbForm=Inf	1	xcomp	1:xcomp	SpaceAfter=No|Functor=1:EFF
4	,	,	PUNCT	Z:-------------	_	1	punct	1:punct	_
5	hodnotil	hodnotit	VERB	VpYS----R-AAI--	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	Functor=0:PRED
6	své	svůj	DET	P8FP4---------1	Case=Acc|Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	7	det	7:det	Entity=(ln94205120c21--1-gstype:spec)|Functor=7:ACT|LId=svůj-1
7	šance	šance	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur	5	iobj	5:iobj	Functor=5:PAT
8	Vacek	Vacek	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	5	nsubj	5:nsubj	Entity=(ln94205120c21--1-gstype:spec)|Functor=5:ACT|SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 iobj	color:blue
1	LN	LN	PROPN	BNXXX-----A----	Abbr=Yes|NameType=Oth	4	iobj	4:iobj	LId=LN-1|LGloss=(Lidové_noviny)|Functor=4:ADDR
2	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	4	obj	4:obj	Entity=(ln9420340c9--1-gstype:spec)|Functor=4:EFF
3	včera	včera	ADV	Db-------------	_	4	advmod	4:advmod	Entity=(ln9420340c36--1-gstype:spec)|Functor=4:TWHEN
4	řekl	říci	VERB	VpYS----R-AAP--	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	Functor=0:PRED
5	místopředseda	místopředseda	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	4:nsubj	Entity=(ln9420340c12--1-gstype:spec|Functor=4:RSTR
6	sněmovny	sněmovna	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	5	nmod	5:nmod:gen	Bridge=ln9420340c8<ln9420340c10:funct|Entity=(ln9420340c10--1)|Functor=5:APP
7	a	a	CCONJ	J^-------------	_	8	cc	8:cc	LId=a-1|Functor=8:CONJ
8	KDU	KDU	PROPN	BNXXX-----A----	Abbr=Yes|NameType=Oth	6	conj	5:nmod:gen|6:conj	Bridge=ln9420340c2<ln9420340c11:subset|Entity=(ln9420340c11--1-gstype:spec|Functor=6:APP|LGloss=(Křesťansko-demokratická_unie)|SpaceAfter=No
9	-	-	PUNCT	Z:-------------	_	10	punct	10:punct	Functor=10:CONJ|SpaceAfter=No
10	ČSL	ČSL	PROPN	BNXXX-----A----	Abbr=Yes|NameType=Oth	8	conj	5:nmod:gen|8:conj	Entity=ln9420340c11)|Functor=8:APP|LGloss=(Česká_[pův._Čsl.]_strana_lidová)
11	Jan	Jan	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	5	flat	5:flat	Functor=5:RSTR
12	Kasal	Kasal	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	5	flat	5:flat	Entity=ln9420340c12)|Functor=5:ACT|SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 iobj	color:blue
1	Jistý	jistý	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	2	amod	2:amod	Entity=(ln95045028c4--2-gstype:spec|Functor=2:RSTR
2	člověk	člověk	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	4:nsubj	Entity=ln95045028c4)|Functor=4:ACT
3	je	on	PRON	PEXP4--3-------	Case=Acc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs	4	iobj	4:iobj	Entity=(ln95045028c3--1-gstype:spec)|Functor=4:ADDR|LId=on-1
4	obvinil	obvinit	VERB	VpYS----R-AAP--	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No|Functor=0:PRED
5	,	,	PUNCT	Z:-------------	_	8	punct	8:punct	_
6	že	že	SCONJ	J,-------------	_	8	mark	8:mark	LId=že-1
7	mu	on	PRON	P5ZS3--3-------	Case=Dat|Gender=Masc,Neut|Number=Sing|Person=3|PronType=Prs|Variant=Short	8	obl:arg	8:obl:arg:dat	Entity=(ln95045028c4--1-gstype:spec)|Functor=8:ADDR|LId=on-1
8	odcizili	odcizit	VERB	VpMP----R-AAP--	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	4	ccomp	4:ccomp	Functor=4:PAT
9	auto	auto	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing	8	obj	8:obj	Entity=(ln95045028c8--1-gstype:spec)|Functor=8:PAT|SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


