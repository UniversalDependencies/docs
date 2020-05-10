---
layout: base
title:  'Statistics of iobj in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `iobj`

This relation is universal.

1067 nodes (0%) are attached to their parents as `iobj`.

636 instances of `iobj` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.31677600749766.

The following 9 pairs of parts of speech are connected with `iobj`: <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt> (460; 43% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt> (258; 24% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt> (222; 21% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (58; 5% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (36; 3% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-ADV.html">ADV</a></tt> (21; 2% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (10; 1% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 iobj	color:blue
1	Nebo	nebo	CCONJ	J^-------------	_	2	cc	2:cc	_
2	platit	platit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	0	root	0:root	_
3	nebude	být	AUX	VB-S---3F-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Fut|VerbForm=Fin|Voice=Act	2	aux	2:aux	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	6	punct	6:punct	_
5	ale	ale	CCONJ	J^-------------	_	6	cc	6:cc	_
6	musí	muset	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	0:root|2:conj	_
7	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	8	obl:arg	8:obl:arg:dat	LGloss=(zvr._zájmeno/částice)
8	zajistit	zajistit	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	6	xcomp	6:xcomp	_
9	teplo	teplo	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	8	iobj	8:iobj	LId=teplo-1
10	sám	sám	DET	PLYS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Emp	8	xcomp	8:xcomp	SpaceAfter=No|LGloss=(samotný)
11	.	.	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 iobj	color:blue
1	LN	LN	PROPN	NNFPX-----A---8	Abbr=Yes|Gender=Fem|NameType=Pro|Number=Plur|Polarity=Pos	4	iobj	4:iobj	LId=LN-1|LGloss=(Lidové_noviny,_deník)
2	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	4	obj	4:obj	_
3	včera	včera	ADV	Db-------------	_	4	advmod	4:advmod	_
4	řekl	říci	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
5	místopředseda	místopředseda	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	4	nsubj	4:nsubj	_
6	sněmovny	sněmovna	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	5	nmod	5:nmod:gen	_
7	a	a	CCONJ	J^-------------	_	8	cc	8:cc	LId=a-1
8	KDU	KDU	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Com|Polarity=Pos	6	conj	5:nmod:gen|6:conj	SpaceAfter=No|LGloss=(Křesťansko-demokratická_unie)
9	-	-	PUNCT	Z:-------------	_	10	punct	10:punct	SpaceAfter=No
10	ČSL	ČSL	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Com|Polarity=Pos	8	conj	5:nmod:gen|8:conj	LId=ČSL-1|LGloss=(Česká_[pův._Čsl.]_strana_lidová)
11	Jan	Jan	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	5	flat	5:flat	_
12	Kasal	Kasal	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	5	flat	5:flat	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 iobj	color:blue
1	Jistý	jistý	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	2	amod	2:amod	_
2	člověk	člověk	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	4	nsubj	4:nsubj	_
3	je	on	PRON	PPXP4--3-------	Case=Acc|Number=Plur|Person=3|PronType=Prs	4	iobj	4:iobj	LId=on-1|LGloss=(oni/ono)
4	obvinil	obvinit	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	8	punct	8:punct	_
6	že	že	SCONJ	J,-------------	_	8	mark	8:mark	_
7	mu	on	PRON	PHZS3--3-------	Case=Dat|Gender=Masc,Neut|Number=Sing|Person=3|PronType=Prs|Variant=Short	8	obl:arg	8:obl:arg:dat	LId=on-1
8	odcizili	odcizit	VERB	VpMP---XR-AA---	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	4	ccomp	4:ccomp	_
9	auto	auto	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	8	obj	8:obj	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


