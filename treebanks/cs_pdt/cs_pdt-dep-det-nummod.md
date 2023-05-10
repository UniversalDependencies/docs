---
layout: base
title:  'Statistics of det:nummod in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `det:nummod`

This relation is a language-specific subtype of <tt><a href="cs_pdt-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="cs_pdt-dep-det-numgov.html">det:numgov</a></tt>.

121 nodes (0%) are attached to their parents as `det:nummod`.

119 instances of `det:nummod` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.40495867768595.

The following 3 pairs of parts of speech are connected with `det:nummod`: <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (116; 96% instances), <tt><a href="cs_pdt-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (4; 3% instances), <tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det:nummod	color:blue
1	Zahrnul	zahrnout	VERB	VpYS----R-AAP--	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	Functor=0:PRED
2	jste	být	AUX	VB-P---2P-AAI--	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux	1:aux	_
3	mne	já	PRON	PP-S4--1-------	Case=Acc|Number=Sing|Person=1|PronType=Prs	1	obj	1:obj	Bridge=cmpr9410019c89<cmpr9410019c28:subset|Entity=(cmpr9410019c28--1-gstype:spec)|Functor=1:ADDR
4	mnoha	mnoho	DET	Ca--7----------	Case=Ins|NumType=Card|PronType=Ind	5	det:nummod	5:det:nummod	Entity=(cmpr9410019c72--2-gstype:spec|Functor=5:RSTR|LId=mnoho-1
5	profesemi	profese	NOUN	NNFP7-----A----	Case=Ins|Gender=Fem|Number=Plur|Polarity=Pos	1	obl:arg	1:obl:arg:ins	Entity=cmpr9410019c72)|Functor=1:PAT|SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det:nummod	color:blue
1	Přitom	přitom	ADV	Db-------------	_	10	advmod	10:advmod	_
2	obě	oba	NUM	CnHP1----------	Case=Nom|Gender=Fem,Neut|Number=Plur|NumForm=Word|NumType=Card	3	nummod	3:nummod	LNumValue=2
3	veličiny	veličina	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	10	nsubj	10:nsubj	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	10	expl:pv	10:expl:pv	LGloss=(zvr._zájmeno/částice)
5	během	během	ADP	RR--2----------	AdpType=Prep|Case=Gen	8	case	8:case	_
6	posledních	poslední	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	8	amod	8:amod	_
7	několika	několik	DET	Ca--2----------	Case=Gen|NumType=Card|PronType=Ind	8	det:nummod	8:det:nummod	_
8	miliard	miliarda	DET	CzFP2----------	Case=Gen|Gender=Fem|Number=Plur|NumType=Ord|PronType=Int,Rel	10	obl	10:obl:během:gen	LNumValue=1000000000
9	let	léta	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	8	nmod	8:nmod:gen	_
10	měnily	měnit	VERB	VpTP----R-AAI--	Animacy=Inan|Aspect=Imp|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
11	drasticky	drasticky	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	10	advmod	10:advmod	SpaceAfter=No|LDeriv=drastický
12	.	.	PUNCT	Z:-------------	_	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 det:nummod	color:blue
1	Oba	oba	NUM	CnYP1----------	Case=Nom|Gender=Masc|Number=Plur|NumForm=Word|NumType=Card	3	nummod	3:nummod	LNumValue=2
2	ty	ten	DET	PDIP1----------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	3	det	3:det	_
3	způsoby	způsob	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	7	nsubj	7:nsubj	_
4	národa	národ	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	3	nmod	3:nmod:gen	_
5	jsou	být	AUX	VB-P---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
6	zřejmou	zřejmý	ADJ	AAFS7----1A----	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	7	amod	7:amod	_
7	pošetilostí	pošetilost	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	0	root	0:root	SpaceAfter=No|LDeriv=pošetilý
8	,	,	PUNCT	Z:-------------	_	9	punct	9:punct	_
9	jednou	jeden	NUM	CnFS7----------	Case=Ins|Gender=Fem|Number=Sing|NumForm=Word|NumType=Card	7	appos	7:appos|14:obl:arg:dat	LNumValue=1
10	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	11	case	11:case	LId=z-1
11	mnoha	mnoho	DET	Ca--2----------	Case=Gen|NumType=Card|PronType=Ind	9	det:nummod	9:det:nummod	SpaceAfter=No|LId=mnoho-1
12	,	,	PUNCT	Z:-------------	_	14	punct	14:punct	_
13	jimž	jenž	PRON	P4XP3----------	Case=Dat|Number=Plur|PrepCase=Npr|PronType=Rel	14	obl:arg	9:ref	LGloss=(který_[ve_vedl.větě])
14	podléhali	podléhat	VERB	VpMP----R-AAI--	Animacy=Anim|Aspect=Imp|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	9	acl:relcl	9:acl:relcl	_
15	naši	náš	DET	PSMP1-P1-------	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	16	det	16:det|18:det	_
16	dědové	děd	NOUN	NNMP1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	14	nsubj	14:nsubj	_
17	a	a	CCONJ	J^-------------	_	18	cc	18:cc	LId=a-1
18	otcové	otec	NOUN	NNMP1-----A---1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	16	conj	14:nsubj|16:conj	SpaceAfter=No
19	.	.	PUNCT	Z:-------------	_	7	punct	7:punct	_

~~~


