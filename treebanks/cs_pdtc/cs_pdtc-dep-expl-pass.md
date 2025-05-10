---
layout: base
title:  'Statistics of expl:pass in UD_Czech-PDTC'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDTC: Relations: `expl:pass`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `expl`: <tt><a href="cs_pdtc-dep-expl-pv.html">expl:pv</a></tt>.

1983 nodes (0%) are attached to their parents as `expl:pass`.

1587 instances of `expl:pass` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.94251134644478.

The following 2 pairs of parts of speech are connected with `expl:pass`: <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt> (1979; 100% instances), <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt> (4; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 expl:pass	color:blue
1	Trh	trh	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	4:nsubj	Entity=(cmpr9410029e47--1-gstype:spec)|Functor=4:ACT
2	nový	nový	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	3	amod	3:amod	Entity=(cmpr9410029e41--2-gstype:gen|Functor=3:RSTR
3	výrobek	výrobek	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obj	4:obj	Entity=cmpr9410029e41)|Functor=4:PAT
4	uvítal	uvítat	VERB	VpYS----R-AAP--	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	Functor=0:PRED
5	a	a	CCONJ	J^-------------	_	10	cc	10:cc	LId=a-1|Functor=10:CONJ
6	celá	celý	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	8	amod	8:amod	Functor=8:RSTR
7	jeho	jeho	DET	P9XXXZS3-------	Gender[psor]=Masc,Neut|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	8	det	8:det	Entity=(cmpr9410029e41--1-gstype:gen)|Functor=8:PAT
8	produkce	produkce	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	10	nsubj:pass	10:nsubj:pass	Functor=10:PAT
9	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	10	expl:pass	10:expl:pass	LGloss=(zvr._zájmeno/částice)
10	prodá	prodat	VERB	VB-S---3P-AAP--	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	0:root|4:conj	SpaceAfter=No|Functor=4:PRED
11	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 expl:pass	color:blue
1	Zvolíme	zvolit	VERB	VB-P---1P-AAP--	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	32	advcl	32:advcl:li	SpaceAfter=No
2	-	-	PUNCT	Z:-------------	_	1	punct	1:punct	SpaceAfter=No
3	li	li	SCONJ	J,-------------	_	1	mark	1:mark	LId=li-2
4	dvě	dva	NUM	CnHP4----------	Case=Acc|Gender=Fem,Neut|Number=Plur|NumForm=Word|NumType=Card	6	nummod	6:nummod	LNumValue=2
5	kolmé	kolmý	ADJ	AAFP4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	6	amod	6:amod	_
6	přímky	přímka	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur	1	obj	1:obj	_
7	p	p	NOUN	Q3-------------	Abbr=Yes	6	nmod	6:nmod	SpaceAfter=No|LId=p-33
8	,	,	PUNCT	Z:-------------	_	9	punct	9:punct	_
9	q	q	NOUN	Q3-------------	Abbr=Yes	7	conj	6:nmod|7:conj	LId=q-33
10	protínající	protínající	ADJ	AGFP4-----A----	Aspect=Imp|Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	6	amod	6:amod	LDeriv=protínat
11	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	10	expl:pass	10:expl:pass	LGloss=(zvr._zájmeno/částice)
12	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	13	case	13:case	LId=v-1
13	bodě	bod	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	10	obl	10:obl:v:loc	_
14	S	S	NOUN	Q3-------------	Abbr=Yes	13	nmod	13:nmod	LId=S-33
15	a	a	CCONJ	J^-------------	_	16	cc	16:cc	LId=a-1
16	vedeme	vést	VERB	VB-P---1P-AAI--	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	1:conj|32:advcl:li	_
17	vždy	vždy	ADV	Db-------------	PronType=Tot	16	advmod	16:advmod	_
18	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	20	case	20:case	LId=v-1
19	dané	daný	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	20	amod	20:amod	LId=daný-1|LDeriv=dát
20	vzdálenosti	vzdálenost	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	16	obl	16:obl:v:loc	LDeriv=vzdálený
21	od	od	ADP	RR--2----------	AdpType=Prep|Case=Gen	22	case	22:case	LId=od-1
22	bodu	bod	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	20	nmod	20:nmod:od:gen	_
23	S	S	NOUN	Q3-------------	Abbr=Yes	22	nmod	22:nmod	LId=S-33
24	přímky	přímka	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur	16	obj	16:obj	_
25	kolmé	kolmý	ADJ	AAFP4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	24	amod	24:amod	_
26	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	28	case	28:case	LId=na-1
27	tyto	tento	DET	PDFP4----------	Case=Acc|Gender=Fem|Number=Plur|PronType=Dem	28	det	28:det	_
28	přímky	přímka	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur	25	obl	25:obl:na:acc	SpaceAfter=No
29	,	,	PUNCT	Z:-------------	_	1	punct	1:punct	_
30	budou	být	AUX	VB-P---3F-AAI--	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	32	aux	32:aux	_
31	zprvu	zprvu	ADV	Db-------------	_	32	advmod	32:advmod	_
32	vznikat	vznikat	VERB	Vf--------A-I--	Aspect=Imp|Polarity=Pos|VerbForm=Inf	0	root	0:root	_
33	čtyřúhelníky	čtyřúhelník	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	32	nsubj	32:nsubj	_
34	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	37	case	37:case	LId=o-1
35	stejně	stejně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	36	advmod	36:advmod	LDeriv=stejný
36	dlouhých	dlouhý	ADJ	AAFP6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	37	amod	37:amod	LGloss=(tyč;doba)
37	stranách	strana	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur	33	nmod	33:nmod:o:loc	SpaceAfter=No
38	.	.	PUNCT	Z:-------------	_	32	punct	32:punct	_

~~~


