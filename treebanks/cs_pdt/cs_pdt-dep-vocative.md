---
layout: base
title:  'Statistics of vocative in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `vocative`

This relation is universal.

25 nodes (0%) are attached to their parents as `vocative`.

19 instances of `vocative` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.36.

The following 7 pairs of parts of speech are connected with `vocative`: <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt> (14; 56% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt> (5; 20% instances), <tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 vocative	color:blue
1	Občane	občan	NOUN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|Number=Sing|Polarity=Pos	3	vocative	3:vocative	Entity=(cmpr9410049c3--1-gstype:gen)|Functor=3:VOCAT|SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	3	punct	3:punct	_
3	chceš	chtít	VERB	VB-S---2P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	dýchat	dýchat	VERB	Vf--------A-I--	Aspect=Imp|Polarity=Pos|VerbForm=Inf	3	xcomp	3:xcomp	Functor=3:PRED
5	čistý	čistý	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	6	amod	6:amod	Functor=6:RSTR
6	vzduch	vzduch	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	4	obj	4:obj	Functor=4:PAT
7	a	a	CCONJ	J^-------------	_	8	cc	8:cc	LId=a-1|Functor=8:CONJ
8	mít	mít	VERB	Vf--------A-I--	Aspect=Imp|Polarity=Pos|VerbForm=Inf	4	conj	3:xcomp|4:conj	Functor=4:PRED
9	také	také	ADV	Db-------------	_	8	advmod	8:advmod	Functor=8:RHEM
10	teplo	teplo	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	8	obj	8:obj	Entity=(cmpr9410049c2--1-gstype:gen)|Functor=8:PAT|LId=teplo-1|SpaceAfter=No
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
4	Baryku	Baryk	PROPN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	6	vocative	6:vocative	Entity=(lnd94103085c35--1-gstype:spec)|Functor=6:VOCAT|SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	4	punct	4:punct	_
6	běž	běžet	VERB	Vi-S---2--A-I--	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|Polarity=Pos|VerbForm=Fin	10	advcl	10:advcl	Functor=10:EFF
7	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	8	case	8:case	LId=na-1
8	místo	místo	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	6	obl	6:obl:na:acc	SpaceAfter=No|LId=místo-1|LGloss=(fyzické_umístění)|Functor=6:DIR3
9	,	,	PUNCT	Z:-------------	_	6	punct	6:punct	_
10	zkoušela	zkoušet	VERB	VpQW----R-AAI--	Aspect=Imp|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	Functor=0:PRED
11	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	10	obj	10:obj	Functor=10:PAT
12	přítelkyně	přítelkyně	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	10	nsubj	10:nsubj	Entity=(lnd94103085c34--1-gstype:spec)|Functor=10:ACT|SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 vocative	color:blue
1	Pane	pan	NOUN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|Number=Sing|Polarity=Pos	2	nmod	2:nmod	Entity=(ln9420736c36--2-gstype:spec|Functor=2:RSTR
2	doktore	doktor	NOUN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|Number=Sing|Polarity=Pos	6	vocative	6:vocative	Entity=ln9420736c36)|Functor=6:VOCAT|SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	6	punct	6:punct	_
4	po	po	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	5:case	Entity=(ln9420736c37--2-gstype:gen|LId=po-1
5	úrazu	úraz	NOUN	NNIS6-----A---1	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	6	obl	6:obl:po:loc	Entity=ln9420736c37)|Functor=6:TWHEN
6	je	být	AUX	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
7	větší	velký	ADJ	AANS1----2A----	Case=Nom|Degree=Cmp|Gender=Neut|Number=Sing|Polarity=Pos	8	amod	8:amod	Functor=8:RSTR
8	procento	procento	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	6	nsubj	6:nsubj	Functor=6:PAT
9	těch	ten	DET	PDXP2----------	Case=Gen|Number=Plur|PronType=Dem	8	det	8:det|12:nsubj	Entity=(ln9420736c38--1|Functor=8:ACT|SpaceAfter=No
10	,	,	PUNCT	Z:-------------	_	12	punct	12:punct	_
11	kteří	který	DET	P4MP1----------	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|PronType=Int,Rel	12	nsubj	9:ref	Bridge=ln9420736c44<ln9420736c38:subset|Entity=(ln9420736c38--1)|Functor=12:ACT
12	zažívají	zažívat	VERB	VB-P---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	9	acl:relcl	9:acl:relcl	LDeriv=zažít|Functor=9:RSTR
13	trauma	trauma	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	12	obj	12:obj	Entity=ln9420736c38)|Functor=12:PAT|SpaceAfter=No
14	,	,	PUNCT	Z:-------------	_	16	punct	16:punct	_
15	nebo	nebo	CCONJ	J^-------------	_	16	cc	16:cc	Functor=16:DISJ
16	těch	ten	DET	PDXP2----------	Case=Gen|Number=Plur|PronType=Dem	9	conj	8:det|9:conj|20:nsubj|24:nsubj:xsubj	Entity=(ln9420736c39--1|Functor=9:ACT,24:ACT|SpaceAfter=No
17	,	,	PUNCT	Z:-------------	_	20	punct	20:punct	_
18	kteří	který	DET	P4MP1----------	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|PronType=Int,Rel	20	nsubj	16:ref	Entity=(ln9420736c39--1)|Functor=20:ACT
19	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	24	expl:pv	24:expl:pv	Entity=(ln9420736c42[1/2]--4-gstype:gen)|LGloss=(zvr._zájmeno/částice)
20	dokáží	dokázat	VERB	VB-P---3P-AAP-1	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	16	acl:relcl	16:acl:relcl	Functor=16:RSTR
21	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	23	case	23:case	Entity=(ln9420736c42[2/2]--4-gstype:gen|LId=v-1
22	jiných	jiný	ADJ	AAFP6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	23	amod	23:amod	Functor=23:RSTR
23	rovinách	rovina	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur|Polarity=Pos	20	obl	20:obl:v:loc	Functor=20:LOC
24	vrátit	vrátit	VERB	Vf--------A-P--	Aspect=Perf|Polarity=Pos|VerbForm=Inf	20	xcomp	20:xcomp	Functor=20:PAT
25	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	26	case	26:case	Entity=(ln9420736c40--2|LId=do-1
26	života	život	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	24	obl	24:obl:do:gen	Entity=ln9420736c40)ln9420736c42[2/2])ln9420736c39)|Functor=24:DIR3|SpaceAfter=No
27	?	?	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


