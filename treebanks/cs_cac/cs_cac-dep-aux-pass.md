---
layout: base
title:  'Statistics of aux:pass in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="cs_cac-dep-aux.html">aux</a></tt>.

2521 nodes (1%) are attached to their parents as `aux:pass`.

2498 instances of `aux:pass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.97818326061087.

The following 5 pairs of parts of speech are connected with `aux:pass`: <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-AUX.html">AUX</a></tt> (2508; 99% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-SYM.html">SYM</a></tt> (9; 0% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 aux:pass	color:blue
1	Rekultivační	rekultivační	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	2	amod	2:amod	_
2	výzkum	výzkum	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	4	nsubj	4:nsubj|8:nsubj	_
3	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
4	dlouhodobý	dlouhodobý	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	0	root	0:root	_
5	a	a	CCONJ	J^-------------	_	8	cc	8:cc	LId=a-1
6	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux:pass	8:aux:pass	_
7	průběžně	průběžně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	8	advmod	8:advmod	LDeriv=průběžný
8	zajišťován	zajišťovaný	ADJ	VsYS---XX-AP---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	4	conj	0:root|4:conj	SpaceAfter=No|LDeriv=zajišťovat
9	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 13 aux:pass	color:blue
1	Dřevěné	dřevěný	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	2	amod	2:amod	_
2	obklady	obklad	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	5	nsubj	5:nsubj	_
3	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
4	poměrně	poměrně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	5	advmod	5:advmod|7:advmod|11:advmod	LDeriv=poměrný
5	odolné	odolný	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	0	root	0:root	_
6	a	a	CCONJ	J^-------------	_	7	cc	7:cc	LId=a-1
7	trvanlivé	trvanlivý	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	5	conj	0:root|5:conj	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	11	punct	3.1:punct	_
9	ale	ale	CCONJ	J^-------------	_	11	cc	3.1:cc	_
10	jen	jen	PART	TT-------------	_	11	advmod:emph	11:advmod:emph	LId=jen-1|LGloss=(pouze)
11	tehdy	tehdy	ADV	Db-------------	PronType=Dem	5	conj	3.1:advmod	SpaceAfter=No
12	,	,	PUNCT	Z:-------------	_	16	punct	16:punct	_
13	*	*	SYM	Xx-------------	Abbr=Yes	16	aux:pass	16:aux:pass	_
14	-	-	PUNCT	Z:-------------	_	16	punct	16:punct	_
15	li	li	PART	TT-------------	_	16	mark	16:mark	_
16	osazeny	osazený	ADJ	VsTP---XX-AP---	Animacy=Inan|Aspect=Perf|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	11	orphan	3.1:dep	LDeriv=osadit
17	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	19	case	19:case	LId=na-1
18	suché	suchý	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	19	amod	19:amod	_
19	zdivo	zdivo	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	16	obl	16:obl:na:acc	SpaceAfter=No
20	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 aux:pass	color:blue
1	Tento	tento	DET	PDYS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	2	det	2:det	_
2	cíl	cíl	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	12	nsubj:pass	12:nsubj:pass|14:nsubj:pass	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	4	punct	4:punct	_
4	stanovený	stanovený	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	2	amod	2:amod	LDeriv=stanovit|LGloss=(určit)
5	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	6:case	LId=v-1
6	roce	rok	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	4	obl	4:obl:v:loc	_
7	#	&cyear;	NUM	C=-------------	NumForm=Digit|NumType=Card	6	nummod	6:nummod	_
8	#	&clabel;	NUM	C=-------------	NumForm=Digit|NumType=Card	9	nummod	9:nummod	_
9	sjezdem	sjezd	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	4	obl	4:obl:ins	_
10	strany	strana	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	9	nmod	9:nmod:acc	SpaceAfter=No|LId=strana-2|LGloss=(politická)
11	,	,	PUNCT	Z:-------------	_	4	punct	4:punct	_
12	měl	mít	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
13	být	být	AUX	Vf--------A----	Polarity=Pos|VerbForm=Inf	12	aux:pass	12:aux:pass	_
14	splněn	splněný	ADJ	VsYS---XX-AP---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	12	xcomp	12:xcomp	LDeriv=splnit
15	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	16	case	16:case	LId=v-1
16	roce	rok	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	12	obl	12:obl:v:loc	_
17	#	&cyear;	NUM	C=-------------	NumForm=Digit|NumType=Card	16	nummod	16:nummod	_
18	.	.	PUNCT	Z:-------------	_	12	punct	12:punct	_

~~~


