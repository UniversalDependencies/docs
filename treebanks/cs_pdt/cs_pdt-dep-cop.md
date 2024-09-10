---
layout: base
title:  'Statistics of cop in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `cop`

This relation is universal.

5716 nodes (2%) are attached to their parents as `cop`.

4552 instances of `cop` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.35899230230931.

The following 12 pairs of parts of speech are connected with `cop`: <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (2572; 45% instances), <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (2298; 40% instances), <tt><a href="cs_pdt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (358; 6% instances), <tt><a href="cs_pdt-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (185; 3% instances), <tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (107; 2% instances), <tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (100; 2% instances), <tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (61; 1% instances), <tt><a href="cs_pdt-pos-PART.html">PART</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (17; 0% instances), <tt><a href="cs_pdt-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="cs_pdt-pos-X.html">X</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="cs_pdt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="cs_pdt-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cop	color:blue
1	Jsou	být	AUX	VB-P---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	Functor=3:PRED
2	vám	vy	PRON	PP-P3--2-------	Case=Dat|Number=Plur|Person=2|PronType=Prs	3	obl:arg	3:obl:arg:dat	Entity=(cmpr9410009c1--1-gstype:gen)|Functor=3:BEN
3	nejasná	jasný	ADJ	AANP1----1N----	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur|Polarity=Neg	0	root	0:root	Functor=0:PAT
4	některá	některý	DET	PZNP1----------	Case=Nom|Gender=Neut|Number=Plur|PronType=Ind	5	det	5:det	Functor=5:RSTR
5	ustanovení	ustanovení	NOUN	NNNP1-----A----	Case=Nom|Gender=Neut|Number=Plur|Polarity=Pos|VerbForm=Vnoun	3	nsubj	3:nsubj	LDeriv=ustanovit|Functor=3:ACT.cop
6	daňových	daňový	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	7:amod	Functor=7:RSTR
7	zákonů	zákon	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	5	nmod	5:nmod:gen	SpaceAfter=No|Functor=5:APP
8	?	?	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 cop	color:blue
1	*	*	PUNCT	Z:-------------	_	8	punct	8:punct	_
2	Ale	ale	CCONJ	J^-------------	_	8	cc	8:cc	Entity=(cmpr9410019c69--7|Functor=8:PREC
3	vyučení	vyučení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	8	nsubj	8:nsubj|10:nsubj:xsubj	SpaceAfter=No|LDeriv=vyučit|Functor=8:ACT
4	,	,	PUNCT	Z:-------------	_	6	punct	6:punct	_
5	či	či	CCONJ	J^-------------	_	6	cc	6:cc	LId=či-1|Functor=6:CONJ
6	přeškolení	přeškolení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	3	conj	3:conj|8:nsubj|10:nsubj:xsubj	LDeriv=přeškolit|Functor=3:ACT
7	by	být	AUX	Vc----------I--	Aspect=Imp|Mood=Cnd|VerbForm=Fin	8	aux	8:aux	_
8	mělo	mít	VERB	VpNS----R-AAI--	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
9	být	být	AUX	Vf--------A-I--	Aspect=Imp|Polarity=Pos|VerbForm=Inf	10	cop	10:cop	Functor=10:PRED
10	zárukou	záruka	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	8	xcomp	8:xcomp	Functor=8:PAT
11	kvalifikace	kvalifikace	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	10	nmod	10:nmod:gen	Entity=(cmpr9410019c67--1)cmpr9410019c69)|Functor=10:PAT|SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cop	color:blue
1	*	*	PUNCT	Z:-------------	_	3	punct	3:punct	_
2	Takže	takže	SCONJ	J,-------------	_	3	mark	3:mark	Functor=3:PREC
3	jak	jak	ADV	Db-------------	PronType=Int,Rel	0	root	0:root	LId=jak-3|Functor=0:MANN
4	jsme	být	AUX	VB-P---1P-AAI--	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	Functor=3:PRED
5	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	6:case	LId=na-1
6	tom	ten	DET	PDZS6----------	Case=Loc|Gender=Masc,Neut|Number=Sing|PronType=Dem	3	obl	3:obl:na:loc	Functor=3:DPHR
7	-	-	PUNCT	Z:-------------	_	9	punct	9:punct	Functor=9:CONJ
8	jsme	být	AUX	VB-P---1P-AAI--	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	9:cop	Functor=9:PRED
9	kvalifikovaní	kvalifikovaný	ADJ	AAMP1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	3	conj	0:root|3:conj	LDeriv=kvalifikovat|Functor=3:PAT
10	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	11:case	Entity=(cmpr9410019c2--2-gstype:spec|LId=pro-1
11	Evropu	Evropa	PROPN	NNFS4-----A----	Case=Acc|Gender=Fem|NameType=Geo,Giv|Number=Sing|Polarity=Pos	9	obl	9:obl:pro:acc	Entity=cmpr9410019c2)|Functor=9:BEN|SpaceAfter=No
12	?	?	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


