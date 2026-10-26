---
layout: base
title:  'Statistics of advcl:relcl in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="cs_pud-dep-advcl.html">advcl</a></tt>.

1 nodes (0%) are attached to their parents as `advcl:relcl`.

1 instances of `advcl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 19.

The following 1 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 23 advcl:relcl	color:blue
1	Vedoucí	vedoucí	ADJ	AGMP1-----A----	Animacy=Anim|Aspect=Imp|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	2	amod	2:amod	LDeriv=vést
2	pracovníci	pracovník	NOUN	NNMP1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	4	nsubj	4:nsubj	_
3	také	také	ADV	Db-------------	_	4	advmod	4:advmod	_
4	dostávali	dostávat	VERB	VpMP---XR-AA---	Animacy=Anim|Aspect=Imp|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	LDeriv=dostat
5	tzv	takzvaný	ADJ	AAXXX----1A---8	Abbr=Yes|Degree=Pos|Polarity=Pos	9	amod	9:amod	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_
7	„	"	PUNCT	Z:-------------	_	9	punct	9:punct	SpaceAfter=No
8	výkonnostní	výkonnostní	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	9	amod	9:amod	_
9	plat	plat	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obj	4:obj	SpaceAfter=No|LGloss=(mzda)
10	“	"	PUNCT	Z:-------------	_	9	punct	9:punct	_
11	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	12	case	12:case	_
12	úspěchy	úspěch	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	4	obl:arg	4:obl:arg:za:acc	_
13	nebo	nebo	CCONJ	J^-------------	_	15	cc	15:cc	_
14	když	když	SCONJ	J,-------------	_	15	mark	15:mark	_
15	překonali	překonat	VERB	VpMP---XR-AA---	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	12	conj	4:obl:arg:za:acc|12:conj	_
16	očekávání	očekávání	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|VerbForm=Vnoun	15	obj	15:obj	SpaceAfter=No|LDeriv=očekávat
17	,	,	PUNCT	Z:-------------	_	23	punct	23:punct	_
18	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	19	case	19:case	LId=na-1
19	což	což	PRON	PE--4----------	Case=Acc|PronType=Rel	23	obl	23:obl:na:acc	LId=což-1
20	mezi	mezi	ADP	RR--4----------	AdpType=Prep|Case=Acc	21	case	21:case	LId=mezi-1
21	ně	on	PRON	P5XP4--3-------	Case=Acc|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs	23	obl	23:obl:mezi:acc	LId=on-1
22	bylo	být	AUX	VpNS---XR-AA---	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	23	aux:pass	23:aux:pass	_
23	rozděleno	rozdělený	ADJ	VsNS---XX-AP---	Aspect=Perf|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	4	advcl:relcl	4:advcl:relcl	LDeriv=rozdělit
24	1,5	1,5	NUM	C=-------------	NumForm=Digit|NumType=Card	25	nummod:gov	25:nummod:gov	_
25	milionu	milión	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	23	nsubj:pass	23:nsubj:pass	LNumValue=1000000
26	dolarů	dolar	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	25	nmod	25:nmod:gen	SpaceAfter=No
27	,	,	PUNCT	Z:-------------	_	32	punct	32:punct	_
28	tedy	tedy	CCONJ	J^-------------	_	32	cc	32:cc	LId=tedy-2
29	odhadem	odhad	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	32	nmod	32:nmod:ins	_
30	průměrně	průměrně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	32	advmod	32:advmod	LDeriv=průměrný
31	15000	15000	NUM	C=-------------	NumForm=Digit|NumType=Card	32	nummod:gov	32:nummod:gov	_
32	dolarů	dolar	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	25	appos	25:appos	_
33	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	34	case	34:case	LId=na-1
34	osobu	osoba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	32	nmod	32:nmod:na:acc	SpaceAfter=No
35	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


