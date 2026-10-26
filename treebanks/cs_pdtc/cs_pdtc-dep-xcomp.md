---
layout: base
title:  'Statistics of xcomp in UD_Czech-PDTC'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDTC: Relations: `xcomp`

This relation is universal.

31843 nodes (1%) are attached to their parents as `xcomp`.

30954 instances of `xcomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.09069497220739.

The following 21 pairs of parts of speech are connected with `xcomp`: <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt> (28032; 88% instances), <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt> (1310; 4% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt> (976; 3% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt> (897; 3% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt> (211; 1% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt> (141; 0% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt> (83; 0% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (62; 0% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-PROPN.html">PROPN</a></tt> (31; 0% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt> (30; 0% instances), <tt><a href="cs_pdtc-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt> (24; 0% instances), <tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt> (16; 0% instances), <tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt> (10; 0% instances), <tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt> (8; 0% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-PART.html">PART</a></tt> (5; 0% instances), <tt><a href="cs_pdtc-pos-PART.html">PART</a></tt>-<tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 xcomp	color:blue
1	Nevíte	vědět	VERB	VB-P---2P-NAI--	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No|Functor=0:PRED
2	,	,	PUNCT	Z:-------------	_	5	punct	5:punct	_
3	co	co	PRON	PQ--4----------	Animacy=Inan|Case=Acc|PronType=Int,Rel	5	obj	5:obj	LId=co-1|Functor=5:PAT
4	kam	kam	ADV	Db-------------	PronType=Int,Rel	5	advmod	5:advmod	Functor=5:DIR3
5	započítat	započítat	VERB	Vf--------A-P--	Aspect=Perf|Polarity=Pos|VerbForm=Inf	1	xcomp	1:xcomp	SpaceAfter=No|Functor=1:EFF
6	?	?	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Jsem	být	AUX	VB-S---1P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	2:cop	Functor=2:EFF
2	ochoten	ochotný	ADJ	ACYS------A----	Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short	9	ccomp	9:ccomp	Functor=9:PAT
3	riskovat	riskovat	VERB	Vf--------A-B--	Aspect=Imp,Perf|Polarity=Pos|VerbForm=Inf	2	xcomp	2:xcomp	Functor=2:PAT
4	i	i	PART	TT-------------	_	5	advmod:emph	5:advmod:emph	LId=i-2|Functor=5:RHEM
5	nařčení	nařčení	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing	3	obj	3:obj	Functor=3:PAT
6	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	7	case	7:case	LId=z-1
7	vyvlastňování	vyvlastňování	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|VerbForm=Vnoun	5	nmod	5:nmod:z:gen	SpaceAfter=No|LDeriv=vyvlastňovat|Functor=5:PAT
8	,	,	PUNCT	Z:-------------	_	2	punct	2:punct	_
9	uvedl	uvést	VERB	VpYS----R-AAP--	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No|Functor=0:PRED
10	.	.	PUNCT	Z:-------------	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 xcomp	color:blue
1	Ceny	cena	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur	6	nsubj	6:nsubj|9:nsubj:xsubj	Entity=(cmpr9410049e206--1-gstype:gen|Functor=6:ACT.cop
2	centrálně	centrálně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	3	advmod	3:advmod	Entity=(cmpr9410049e3--3-gstype:gen|Functor=3:MANN|LDeriv=centrální
3	vyráběného	vyráběný	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	4	amod	4:amod	LDeriv=vyrábět|Functor=4:RSTR
4	tepla	teplo	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing	1	nmod	1:nmod:gen	Entity=cmpr9410049e3)cmpr9410049e206)|Functor=1:PAT|LId=teplo-1
5	by	být	AUX	Vc----------I--	Aspect=Imp|Mood=Cnd|VerbForm=Fin	6	aux	6:aux	_
6	mohly	moci	VERB	VpTP----R-AAI--	Animacy=Inan|Aspect=Imp|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
7	být	být	AUX	Vf--------A-I--	Aspect=Imp|Polarity=Pos|VerbForm=Inf	9	cop	9:cop	Functor=9:PRED
8	i	i	PART	TT-------------	_	9	advmod:emph	9:advmod:emph	LId=i-2|Functor=9:RHEM
9	nižší	nízký	ADJ	AAFP1----2A----	Case=Nom|Degree=Cmp|Gender=Fem|Number=Plur|Polarity=Pos	6	xcomp	6:xcomp	SpaceAfter=No|Functor=6:PAT
10	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


