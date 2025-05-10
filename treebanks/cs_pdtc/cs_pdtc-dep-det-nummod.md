---
layout: base
title:  'Statistics of det:nummod in UD_Czech-PDTC'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDTC: Relations: `det:nummod`

This relation is a language-specific subtype of <tt><a href="cs_pdtc-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="cs_pdtc-dep-det-numgov.html">det:numgov</a></tt>.

244 nodes (0%) are attached to their parents as `det:nummod`.

239 instances of `det:nummod` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.47950819672131.

The following 4 pairs of parts of speech are connected with `det:nummod`: <tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (232; 95% instances), <tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (10; 4% instances), <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="cs_pdtc-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det:nummod	color:blue
1	Zahrnul	zahrnout	VERB	VpYS----R-AAP--	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	Functor=0:PRED
2	jste	být	AUX	VB-P---2P-AAI--	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux	1:aux	_
3	mne	já	PRON	PP-S4--1-------	Case=Acc|Number=Sing|Person=1|PronType=Prs	1	obj	1:obj	Bridge=cmpr9410019e214<cmpr9410019e55:subset|Entity=(cmpr9410019e55--1-gstype:spec)|Functor=1:ADDR
4	mnoha	mnoho	DET	Ca--7----------	Case=Ins|NumType=Card|PronType=Ind	5	det:nummod	5:det:nummod	Entity=(cmpr9410019e170--2-gstype:spec|Functor=5:RSTR|LId=mnoho-1
5	profesemi	profese	NOUN	NNFP7-----A----	Case=Ins|Gender=Fem|Number=Plur	1	obl:arg	1:obl:arg:ins	Entity=cmpr9410019e170)|Functor=1:PAT|SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det:nummod	color:blue
1	Přitom	přitom	ADV	Db-------------	_	10	advmod:emph	10:advmod:emph	_
2	obě	oba	NUM	CnHP1----------	Case=Nom|Gender=Fem,Neut|Number=Plur|NumForm=Word|NumType=Card	3	nummod	3:nummod	LNumValue=2
3	veličiny	veličina	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur	10	nsubj	10:nsubj	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	10	expl:pv	10:expl:pv	LGloss=(zvr._zájmeno/částice)
5	během	během	ADP	RR--2----------	AdpType=Prep|Case=Gen	9	case	9:case	_
6	posledních	poslední	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	8	amod	8:amod	_
7	několika	několik	DET	Ca--2----------	Case=Gen|NumType=Card|PronType=Ind	8	det:nummod	8:det:nummod	_
8	miliard	miliarda	NUM	CzFP2----------	Case=Gen|Gender=Fem|Number=Plur|NumType=Card	9	nummod:gov	9:nummod:gov	LNumValue=1000000000
9	let	léta	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur	10	obl	10:obl:během:gen	_
10	měnily	měnit	VERB	VpTP----R-AAI--	Animacy=Inan|Aspect=Imp|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
11	drasticky	drasticky	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	10	advmod	10:advmod	SpaceAfter=No|LDeriv=drastický
12	.	.	PUNCT	Z:-------------	_	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 36 38 det:nummod	color:blue
1	Phillip	Phillip	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	9	nsubj	9:nsubj	Entity=(wsj0116001e52--1-gstype:spec|Functor=9:RSTR
2	Riese	Riese	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	1	flat	1:flat	SpaceAfter=No|Functor=1:ACT
3	,	,	PUNCT	Z:-------------	_	5	punct	5:punct	Functor=5:APPS
4	výkonný	výkonný	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	5	amod	5:amod	Functor=5:RSTR
5	viceprezident	viceprezident	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	1	appos	1:appos	Functor=1:ACT
6	American	American	X	F%-------------	Foreign=Yes	5	nmod	5:nmod	Entity=(wsj0116001e23--1-gstype:spec|Functor=5:FPHR|LId=American-77
7	Express	Express	X	F%-------------	Foreign=Yes	6	flat	6:flat	Entity=wsj0116001e23)wsj0116001e52)|Functor=6:FPHR|LId=Express-77|SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	5	punct	5:punct	_
9	říká	říkat	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No|Functor=0:PRED
10	,	,	PUNCT	Z:-------------	_	19	punct	19:punct	_
11	že	že	SCONJ	J,-------------	_	19	mark	19:mark	LId=že-1
12	propagační	propagační	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	13	amod	13:amod	Entity=(wsj0116001e14--2-gstype:spec|Functor=13:RSTR
13	akce	akce	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	19	nsubj	19:nsubj	Functor=19:ACT.cop
14	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	15	case	15:case	Entity=(wsj0116001e21--2-gstype:spec|LId=s-1
15	Buickem	Buick	PROPN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|NameType=Oth|Number=Sing	13	nmod	13:nmod:s:ins	Entity=wsj0116001e21)wsj0116001e14)|Functor=13:ACMP
16	je	být	AUX	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	19	cop	19:cop	Functor=19:EFF
17	první	první	ADJ	CrFS1----------	Case=Nom|Gender=Fem|Number=Sing|NumType=Ord	19	amod	19:amod	LId=první-1|Functor=19:RSTR
18	společná	společný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	19	amod	19:amod	Functor=19:RSTR
19	akce	akce	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	9	ccomp	9:ccomp	Functor=9:PAT
20	jeho	jeho	DET	P9XXXZS3-------	Gender[psor]=Masc,Neut|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	21	det	21:det	Entity=(wsj0116001e23--2-gstype:spec(wsj0116001e52--1-gstype:spec)|Functor=21:RSTR
21	společnosti	společnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	19	nmod	19:nmod:gen	Entity=wsj0116001e23)|Functor=19:RSTR|LDeriv=společný
22	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	23	case	23:case	LId=s-1
23	výrobcem	výrobce	NOUN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	19	nmod	19:nmod:s:ins	Functor=19:ACMP
24	aut	auto	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur	23	nmod	23:nmod:gen	SpaceAfter=No|Functor=23:RSTR
25	,	,	PUNCT	Z:-------------	_	29	punct	29:punct	_
26	ale	ale	CCONJ	J^-------------	_	29	cc	29:cc	Functor=29:ADVS
27	že	že	SCONJ	J,-------------	_	29	mark	29:mark	LId=že-1
28	"	"	PUNCT	Z:-------------	_	29	punct	29:punct	SpaceAfter=No
29	má	mít	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	19	conj	9:ccomp|19:conj	Functor=19:EFF
30	naději	naděje	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	29	obj	29:obj	SpaceAfter=No|Functor=29:CPHR
31	,	,	PUNCT	Z:-------------	_	36	punct	36:punct	_
32	že	že	SCONJ	J,-------------	_	36	mark	36:mark	LId=že-1
33	(	(	PUNCT	Z:-------------	_	36	punct	36:punct	SpaceAfter=No
34	bude	být	AUX	VB-S---3F-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	36	cop	36:cop	SpaceAfter=No|Functor=36:RSTR
35	)	)	PUNCT	Z:-------------	_	36	punct	36:punct	_
36	první	první	ADJ	CrFS1----------	Case=Nom|Gender=Fem|Number=Sing|NumType=Ord	30	acl	30:acl:že	LId=první-1|Functor=30:PAT
37	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	38	case	38:case	LId=z-1
38	mnoha	mnoho	DET	Ca--2----------	Case=Gen|NumType=Card|PronType=Ind	36	det:nummod	36:det:nummod	SpaceAfter=No|LId=mnoho-1|Functor=36:RSTR
39	"	"	PUNCT	Z:-------------	_	38	punct	38:punct	_
40	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc|ExtPos=ADP	42	case	42:case	LId=v-1
41	rámci	rámec	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	40	fixed	40:fixed	_
42	snah	snaha	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur	36	obl	36:obl:v_rámci:gen	Functor=36:REG
43	společnosti	společnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	42	nmod	42:nmod:gen	Entity=(wsj0116001e23--1-gstype:spec)|Functor=42:RSTR|LDeriv=společný
44	propagovat	propagovat	VERB	Vf--------A-I--	Aspect=Imp|Polarity=Pos|VerbForm=Inf	42	acl	42:acl	Entity=(wsj0116001e63--1-gstype:spec|Functor=42:RSTR
45	svou	svůj	DET	P8FS4---------1	Case=Acc|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	47	det	47:det	Entity=(wsj0116001e23--1-gstype:spec)|Functor=47:RSTR|LId=svůj-1
46	zelenou	zelený	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	47	amod	47:amod	Functor=47:RSTR
47	kartu	karta	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	44	obj	44:obj	Functor=44:PAT
48	jako	jako	SCONJ	J,-------------	_	51	mark	51:mark	Entity=(wsj0116001e58--4|LId=jako-1
49	"	"	PUNCT	Z:-------------	_	50	punct	50:punct	SpaceAfter=No
50	jedinou	jediný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	51	amod	51:amod	Functor=51:RSTR
51	kartu	karta	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	44	xcomp	44:xcomp|59:obj	Functor=44:COMPL|SpaceAfter=No
52	,	,	PUNCT	Z:-------------	_	59	punct	59:punct	_
53	kterou	který	DET	P4FS4----------	Case=Acc|Gender=Fem|Number=Sing|PronType=Int,Rel	59	obj	51:ref	Entity=(wsj0116001e58--1)|Functor=59:PAT
54	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	55	case	55:case	LId=pro-1
55	péči	péče	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	59	obl	59:obl:pro:acc	Functor=59:BEN
56	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	57	case	57:case	LId=o-1
57	auto	auto	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing	55	nmod	55:nmod:o:acc	Functor=55:RSTR
58	budete	být	AUX	VB-P---2F-AAI--	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	59	aux	59:aux	_
59	potřebovat	potřebovat	VERB	Vf--------A-I--	Aspect=Imp|Polarity=Pos|VerbForm=Inf	51	acl:relcl	51:acl:relcl	Entity=wsj0116001e58)wsj0116001e63)|Functor=51:RSTR|SpaceAfter=No
60	"	"	PUNCT	Z:-------------	_	59	punct	59:punct	SpaceAfter=No
61	.	.	PUNCT	Z:-------------	_	9	punct	9:punct	_

~~~


