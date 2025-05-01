---
layout: base
title:  'Statistics of vocative in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `vocative`

This relation is universal.

25 nodes (0%) are attached to their parents as `vocative`.

19 instances of `vocative` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.44.

The following 7 pairs of parts of speech are connected with `vocative`: <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt> (14; 56% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt> (5; 20% instances), <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="cs_pdt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 vocative	color:blue
1	Občane	občan	NOUN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|Number=Sing	3	vocative	3:vocative	Entity=(cmpr9410049c3--1-gstype:gen)|Functor=3:VOCAT|SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	3	punct	3:punct	_
3	chceš	chtít	VERB	VB-S---2P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	dýchat	dýchat	VERB	Vf--------A-I--	Aspect=Imp|Polarity=Pos|VerbForm=Inf	3	xcomp	3:xcomp	Functor=3:PRED
5	čistý	čistý	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	6	amod	6:amod	Functor=6:RSTR
6	vzduch	vzduch	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obj	4:obj	Functor=4:PAT
7	a	a	CCONJ	J^-------------	_	8	cc	8:cc	LId=a-1|Functor=8:CONJ
8	mít	mít	VERB	Vf--------A-I--	Aspect=Imp|Polarity=Pos|VerbForm=Inf	4	conj	3:xcomp|4:conj	Functor=4:PRED
9	také	také	ADV	Db-------------	_	8	advmod	8:advmod	Functor=8:RHEM
10	teplo	teplo	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing	8	obj	8:obj	Entity=(cmpr9410049c2--1-gstype:gen)|Functor=8:PAT|LId=teplo-1|SpaceAfter=No
11	?	?	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 vocative	color:blue
1	No	no	PART	TT-------------	_	6	dep	6:dep	Functor=6:PARTL
2	tak	tak	ADV	Db-------------	PronType=Dem	6	dep	6:dep	SpaceAfter=No|LId=tak-3|Functor=6:PARTL
3	,	,	PUNCT	Z:-------------	_	4	punct	4:punct	_
4	Baryku	Baryk	PROPN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|NameType=Giv|Number=Sing	6	vocative	6:vocative	Entity=(lnd94103085c35--1-gstype:spec)|Functor=6:VOCAT|SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	4	punct	4:punct	_
6	běž	běžet	VERB	Vi-S---2--A-I--	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|Polarity=Pos|VerbForm=Fin	10	advcl	10:advcl	Functor=10:EFF
7	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	8	case	8:case	LId=na-1
8	místo	místo	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing	6	obl	6:obl:na:acc	SpaceAfter=No|LId=místo-1|LGloss=(fyzické_umístění)|Functor=6:DIR3
9	,	,	PUNCT	Z:-------------	_	6	punct	6:punct	_
10	zkoušela	zkoušet	VERB	VpQW----R-AAI--	Aspect=Imp|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	Functor=0:PRED
11	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	10	obj	10:obj	Functor=10:PAT
12	přítelkyně	přítelkyně	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	10	nsubj	10:nsubj	Entity=(lnd94103085c34--1-gstype:spec)|Functor=10:ACT|SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 vocative	color:blue
1	Vážení	vážený	ADJ	AAMP5----1A----	Animacy=Anim|Case=Voc|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	2	amod	2:amod	Entity=(ln94210111c2--2-gstype:gen|Functor=2:RSTR|LDeriv=vážit
2	čtenáři	čtenář	NOUN	NNMP5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|Number=Plur	7	vocative	7:vocative	Entity=ln94210111c2)|Functor=7:VOCAT|SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	7	punct	7:punct	_
4	je	být	AUX	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	Functor=7:PRED
5	tomu	ten	DET	PDZS3----------	Case=Dat|Gender=Masc,Neut|Number=Sing|PronType=Dem	7	nsubj	7:nsubj	Functor=7:ACT.cop
6	právě	právě	ADV	Db-------------	_	7	advmod	7:advmod	LId=právě-1|Functor=7:RHEM
7	rok	rok	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root|12:obl	Entity=(ln94210111c1--1-gstype:spec|Functor=0:THL|SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	12	punct	12:punct	_
9	kdy	kdy	ADV	Db-------------	PronType=Int,Rel	12	advmod	7:ref	Entity=(ln94210111c1--1-gstype:spec)|Functor=12:TWHEN
10	jsme	být	AUX	VB-P---1P-AAI--	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	12	aux	12:aux	_
11	vám	vy	PRON	PP-P3--2-------	Case=Dat|Number=Plur|Person=2|PronType=Prs	12	obl:arg	12:obl:arg:dat	Entity=(ln94210111c2--1-gstype:gen)|Functor=12:ADDR
12	oznamovali	oznamovat	VERB	VpMP----R-AAI--	Animacy=Anim|Aspect=Imp|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	7	acl:relcl	7:acl:relcl	Functor=7:RSTR
13	nepopulární	populární	ADJ	AAFS4----1N----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Neg	14	amod	14:amod	Functor=14:RSTR
14	informaci	informace	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	12	obj	12:obj	SpaceAfter=No|Functor=12:EFF
15	,	,	PUNCT	Z:-------------	_	21	punct	21:punct	_
16	že	že	SCONJ	J,-------------	_	21	mark	21:mark	LId=že-1
17	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	21	expl:pass	21:expl:pass	LGloss=(zvr._zájmeno/částice)
18	cena	cena	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	21	nsubj:pass	21:nsubj:pass	Entity=(ln94210111c4--1-gstype:spec|Functor=21:PAT
19	našich	náš	DET	PSXP2-P1-------	Case=Gen|Number=Plur|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	20	det	20:det	Bridge=ln94210111c6<ln94210111c3:subset|Entity=(ln94210111c5--2-gstype:gen(ln94210111c3--1-gstype:spec)|Functor=20:APP
20	novin	noviny	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur	18	nmod	18:nmod:gen	Entity=ln94210111c5)ln94210111c4)|Functor=18:PAT|LGloss=(tisk)
21	zvyšuje	zvyšovat	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	14	acl	14:acl:že	Entity=ln94210111c1)|Functor=14:PAT|SpaceAfter=No
22	.	.	PUNCT	Z:-------------	_	7	punct	7:punct	_

~~~


