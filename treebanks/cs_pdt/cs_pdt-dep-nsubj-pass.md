---
layout: base
title:  'Statistics of nsubj:pass in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="cs_pdt-dep-nsubj.html">nsubj</a></tt>.

1719 nodes (1%) are attached to their parents as `nsubj:pass`.

1078 instances of `nsubj:pass` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.59860383944154.

The following 13 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt> (820; 48% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt> (587; 34% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (96; 6% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (75; 4% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt> (42; 2% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt> (26; 2% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (19; 1% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt> (18; 1% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (14; 1% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (7; 0% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-ADV.html">ADV</a></tt> (7; 0% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt> (6; 0% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-ADV.html">ADV</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nsubj:pass	color:blue
1	Rozdíl	rozdíl	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	6	nsubj:pass	6:nsubj:pass	Functor=6:PAT
2	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	4	case	4:case	Entity=(cmpr9410049c198--3-gstype:spec|LId=do-1
3	regulované	regulovaný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	4	amod	4:amod	LDeriv=regulovat|Functor=4:RSTR
4	ceny	cena	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	1	nmod	1:nmod:do:gen	Entity=cmpr9410049c198)|Functor=1:RSTR
5	byl	být	AUX	VpYS----R-AAI--	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	6	aux:pass	6:aux:pass	_
6	hrazen	hrazený	ADJ	VsYS----X-API--	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	LDeriv=hradit|Functor=0:PRED
7	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	8	case	8:case	Bridge=cmpr9410049c131<cmpr9410049c199:subset|Entity=(cmpr9410049c199--2-gstype:gen|LId=z-1
8	dotací	dotace	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	6	obl	6:obl:z:gen	Entity=cmpr9410049c199)|Functor=6:MEANS|SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 nsubj:pass	color:blue
1	Trh	trh	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	4	nsubj	4:nsubj	Entity=(cmpr9410029c22--1-gstype:spec)|Functor=4:ACT
2	nový	nový	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	3	amod	3:amod	Entity=(cmpr9410029c20--2-gstype:gen|Functor=3:RSTR
3	výrobek	výrobek	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	4	obj	4:obj	Entity=cmpr9410029c20)|Functor=4:PAT
4	uvítal	uvítat	VERB	VpYS----R-AAP--	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	Functor=0:PRED
5	a	a	CCONJ	J^-------------	_	10	cc	10:cc	LId=a-1|Functor=10:CONJ
6	celá	celý	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	8	amod	8:amod	Functor=8:RSTR
7	jeho	jeho	DET	P9XXXZS3-------	Gender[psor]=Masc,Neut|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	8	det	8:det	Entity=(cmpr9410029c20--1-gstype:gen)|Functor=8:PAT
8	produkce	produkce	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	10	nsubj:pass	10:nsubj:pass	Functor=10:PAT
9	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	10	expl:pass	10:expl:pass	LGloss=(zvr._zájmeno/částice)
10	prodá	prodat	VERB	VB-S---3P-AAP--	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	0:root|4:conj	SpaceAfter=No|Functor=4:PRED
11	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 nsubj:pass	color:blue
1	Proto	proto	CCONJ	J^-------------	_	2	cc	2:cc	LId=proto-1|LGloss=(proto;_a_proto,_ale_proto,...)|Functor=2:PREC
2	musí	muset	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	odběratel	odběratel	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	2	nsubj	2:nsubj|4:nsubj:xsubj	Entity=(cmpr9410049c104--1-gstype:gen)|Functor=2:ACT
4	platit	platit	VERB	Vf--------A-I--	Aspect=Imp|Polarity=Pos|VerbForm=Inf	2	xcomp	2:xcomp	Functor=2:PRED
5	tolik	tolik	DET	Ca--4----------	Case=Acc|NumType=Card|PronType=Dem	4	obj	4:obj	SpaceAfter=No|LId=tolik-1
6	,	,	PUNCT	Z:-------------	_	9	punct	9:punct	_
7	kolik	kolik	DET	Ca--1----------	Case=Nom|NumType=Card|PronType=Dem,Ind	9	nsubj:pass	9:nsubj:pass	Functor=9:PAT
8	bude	být	AUX	VB-S---3F-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	9	aux:pass	9:aux:pass	_
9	stanoveno	stanovený	ADJ	VsNS----X-APP--	Aspect=Perf|Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	5	amod	5:amod	SpaceAfter=No|LGloss=(určit)|LDeriv=stanovit|Functor=5:EXT
10	.	.	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


