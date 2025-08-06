---
layout: base
title:  'Statistics of det:nummod in UD_Czech-PDTC'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDTC: Relations: `det:nummod`

This relation is a language-specific subtype of <tt><a href="cs_pdtc-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="cs_pdtc-dep-det-numgov.html">det:numgov</a></tt>.

1295 nodes (0%) are attached to their parents as `det:nummod`.

1279 instances of `det:nummod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.40617760617761.

The following 5 pairs of parts of speech are connected with `det:nummod`: <tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (1225; 95% instances), <tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (58; 4% instances), <tt><a href="cs_pdtc-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (6; 0% instances), <tt><a href="cs_pdtc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (2; 0% instances).


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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det:nummod	color:blue
1	Často	často	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	3	advmod	3:advmod	Functor=3:THO
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	expl:pass	3:expl:pass	LGloss=(zvr._zájmeno/částice)
3	dopravují	dopravovat	VERB	VB-P---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
4	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	5:case	LId=na-1
5	vzdálenost	vzdálenost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	3	obl	3:obl:na:acc	LDeriv=vzdálený|Functor=3:DIR3
6	několika	několik	DET	Ca--2----------	Case=Gen|NumType=Card|PronType=Ind	7	det:nummod	7:det:nummod	Functor=7:RSTR
7	tisíc	tisíc	NUM	CzIXX----------	Animacy=Inan|Gender=Masc|NumType=Card	8	nummod:gov	8:nummod:gov	LNumValue=1000|Functor=8:RSTR
8	kilometrů	kilometr	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	5	nmod	5:nmod	SpaceAfter=No|Functor=5:MAT
9	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 14 det:nummod	color:blue
1	Celý	celý	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	2	amod	2:amod	Functor=2:RSTR
2	život	život	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obl	4:obl:acc	Functor=4:THL
3	jsem	být	AUX	VB-S---1P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
4	chtěl	chtít	VERB	VpYS----R-AAI--	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
5	sepsat	sepsat	VERB	Vf--------A-P--	Aspect=Perf|Polarity=Pos|VerbForm=Inf	4	xcomp	4:xcomp	Functor=4:PRED
6	svoje	svůj	DET	P8XP4----------	Case=Acc|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	7	det	7:det	Entity=(pdtsc_lk16379_07.01e133--2-gstype:spec(pdtsc_lk16379_07.01e13--1-gstype:spec)|Functor=7:RSTR|LId=svůj-1
7	zážitky	zážitek	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	5	obj	5:obj|12:obl:arg:gen	Functor=5:PAT
8	,	,	PUNCT	Z:-------------	_	11	punct	11:punct	_
9	kterých	který	DET	P4XP2----------	Case=Gen|Number=Plur|PronType=Int,Rel	12	obl:arg	7:ref	Entity=(pdtsc_lk16379_07.01e133[1/2]--1-gstype:spec)|Functor=12:PAT
10	bych	být	AUX	Vc----------Ic-	Aspect=Imp|Mood=Cnd|Number=Sing|Person=1|VerbForm=Fin	11	aux	11:aux	_
11	mohl	moci	VERB	VpYS----R-AAI--	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	7	acl:relcl	7:acl:relcl	_
12	vyjmenovat	vyjmenovat	VERB	Vf--------A-P--	Aspect=Perf|Polarity=Pos|VerbForm=Inf	11	xcomp	11:xcomp	Functor=11:RSTR
13	třikrát	třikrát	ADV	Cv-------------	NumType=Mult	14	obl	14:obl	Entity=(pdtsc_lk16379_07.01e133[2/2]--1-gstype:spec|Functor=14:EXT|LNumValue=3
14	tolik	tolik	DET	Ca--4----------	Case=Acc|NumType=Card|PronType=Dem	9	det:nummod	9:det:nummod	Entity=pdtsc_lk16379_07.01e133[2/2])pdtsc_lk16379_07.01e133)|Functor=9:RSTR|LId=tolik-1
15	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


