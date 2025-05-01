---
layout: base
title:  'Statistics of expl:pass in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `expl:pass`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `expl`: <tt><a href="cs_pdt-dep-expl-pv.html">expl:pv</a></tt>.

1084 nodes (0%) are attached to their parents as `expl:pass`.

925 instances of `expl:pass` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.11715867158672.

The following 2 pairs of parts of speech are connected with `expl:pass`: <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt> (1082; 100% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 expl:pass	color:blue
1	Trh	trh	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	4:nsubj	Entity=(cmpr9410029c22--1-gstype:spec)|Functor=4:ACT
2	nový	nový	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	3	amod	3:amod	Entity=(cmpr9410029c20--2-gstype:gen|Functor=3:RSTR
3	výrobek	výrobek	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obj	4:obj	Entity=cmpr9410029c20)|Functor=4:PAT
4	uvítal	uvítat	VERB	VpYS----R-AAP--	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	Functor=0:PRED
5	a	a	CCONJ	J^-------------	_	10	cc	10:cc	LId=a-1|Functor=10:CONJ
6	celá	celý	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	8	amod	8:amod	Functor=8:RSTR
7	jeho	jeho	DET	P9XXXZS3-------	Gender[psor]=Masc,Neut|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	8	det	8:det	Entity=(cmpr9410029c20--1-gstype:gen)|Functor=8:PAT
8	produkce	produkce	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	10	nsubj:pass	10:nsubj:pass	Functor=10:PAT
9	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	10	expl:pass	10:expl:pass	LGloss=(zvr._zájmeno/částice)
10	prodá	prodat	VERB	VB-S---3P-AAP--	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	0:root|4:conj	SpaceAfter=No|Functor=4:PRED
11	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 expl:pass	color:blue
1	Čteme	číst	VERB	VB-P---1P-AAI--	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	16	advcl	16:advcl:li	SpaceAfter=No|Functor=16:COND
2	-	-	PUNCT	Z:-------------	_	1	punct	1:punct	SpaceAfter=No
3	li	li	SCONJ	J,-------------	_	1	mark	1:mark	LId=li-2
4	dnes	dnes	ADV	Db-------------	_	1	advmod	1:advmod	Functor=1:TWHEN
5	Benešovy	Benešův	ADJ	AUFP4M---------	Case=Acc|Gender=Fem|Gender[psor]=Masc|NameType=Giv|Number=Plur|Poss=Yes	7	amod	7:amod	Entity=(lnd94103094c1--1-gstype:spec)|Functor=7:ACT|LDeriv=Beneš
6	diletantské	diletantský	ADJ	AAFP4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	7	amod	7:amod	Functor=7:RSTR
7	charakteristiky	charakteristika	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur	1	obj	1:obj	Functor=1:EFF
8	Stalinova	Stalinův	ADJ	AUIS2M---------	Animacy=Inan|Case=Gen|Gender=Masc|Gender[psor]=Masc|NameType=Giv|Number=Sing|Poss=Yes	14	amod	14:amod	Entity=(lnd94103094c16--1-gstype:spec)|Functor=14:APP|LDeriv=Stalin
9	"	"	PUNCT	Z:-------------	_	12	punct	12:punct	SpaceAfter=No
10	postupně	postupně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	12	advmod	12:advmod	LDeriv=postupný|Functor=12:MANN
11	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	12	expl:pass	12:expl:pass	LGloss=(zvr._zájmeno/částice)
12	humanizujícího	humanizující	ADJ	AGIS2-----A----	Animacy=Inan|Aspect=Imp|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	14	amod	14:amod	SpaceAfter=No|LDeriv=humanizovat|Functor=14:RSTR
13	"	"	PUNCT	Z:-------------	_	12	punct	12:punct	_
14	režimu	režim	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	nmod	7:nmod:gen	SpaceAfter=No|Functor=7:PAT
15	,	,	PUNCT	Z:-------------	_	1	punct	1:punct	_
16	polévá	polévat	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
17	nás	my	PRON	PP-P4--1-------	Case=Acc|Number=Plur|Person=1|PronType=Prs	16	obj	16:obj	Entity=(lnd94103094c6--1-gstype:gen)|Functor=16:PAT
18	hrůza	hrůza	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	16	obl	16:obl	SpaceAfter=No|Functor=16:ACT
19	.	.	PUNCT	Z:-------------	_	16	punct	16:punct	_

~~~


