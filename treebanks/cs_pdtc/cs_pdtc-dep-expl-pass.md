---
layout: base
title:  'Statistics of expl:pass in UD_Czech-PDTC'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDTC: Relations: `expl:pass`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `expl`: <tt><a href="cs_pdtc-dep-expl-pv.html">expl:pv</a></tt>.

9809 nodes (0%) are attached to their parents as `expl:pass`.

7788 instances of `expl:pass` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.94117647058824.

The following 6 pairs of parts of speech are connected with `expl:pass`: <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt> (9782; 100% instances), <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt> (15; 0% instances), <tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt> (6; 0% instances), <tt><a href="cs_pdtc-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="cs_pdtc-pos-PART.html">PART</a></tt>-<tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt> (1; 0% instances).


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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 expl:pass	color:blue
1	Pořád	pořád	ADV	Db-------------	_	3	advmod	3:advmod	_
2	nám	my	PRON	PP-P3--1-------	Case=Dat|Number=Plur|Person=1|PronType=Prs	3	obl:arg	3:obl:arg:dat	_
3	chybějí	chybět	VERB	VB-P---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	LGloss=(někde_něco_chybí)
4	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	5:case	LId=v-1
5	extralize	extraliga	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	3	obl	3:obl:v:loc	_
6	zápasy	zápas	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	3	nsubj	3:nsubj	_
7	hrající	hrající	ADJ	AGIP1-----A----	Animacy=Inan|Aspect=Imp|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	6	amod	6:amod	LDeriv=hrát
8	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	expl:pass	7:expl:pass	LGloss=(zvr._zájmeno/částice)
9	'	'	PUNCT	Z:-------------	_	11	punct	11:punct	SpaceAfter=No
10	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	11:case	LId=na-1
11	doraz	doraz	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	7	obl	7:obl:na:acc	SpaceAfter=No
12	'	'	PUNCT	Z:-------------	_	11	punct	11:punct	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 expl:pass	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	2:case	LId=v-1
2	zimě	zima	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	3	obl	3:obl:v:loc	LId=zima-1|Functor=3:TWHEN
3	chodili	chodit	VERB	VpMP----R-AAI--	Animacy=Anim|Aspect=Imp|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	Functor=0:PRED
4	,	,	PUNCT	Z:-------------	_	6	punct	6:punct	_
5	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	6:case	Entity=(pdtsc_ak_140.09e8--2-gstype:spec|LId=na-1
6	chatě	chata	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	3	parataxis	3:parataxis	Entity=pdtsc_ak_140.09e8)|Functor=3:LOC
7	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	6	expl:pass	6:expl:pass	LGloss=(zvr._zájmeno/částice)
8	bylo	být	AUX	VpNS----R-AAI--	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	6	cop	6:cop	Functor=6:PAR
9	už	už	ADV	Db-------------	_	6	advmod	6:advmod	LId=už-1|Functor=6:TWHEN
10	málo	málo	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	6	advmod	6:advmod	LId=málo-3|LGloss=(málo_důsledný)|Functor=6:THO
11	,	,	PUNCT	Z:-------------	_	6	punct	6:punct	_
12	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	13	case	13:case	Entity=(pdtsc_ak_140.09e15--2-gstype:spec|LId=na-1
13	rybník	rybník	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	3	obl	3:obl:na:acc	Entity=pdtsc_ak_140.09e15)|Functor=3:DIR3
14	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	15	case	15:case	LId=na-1
15	brusle	brusle	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur	3	obl	3:obl:na:acc	Functor=3:INTT
16	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


