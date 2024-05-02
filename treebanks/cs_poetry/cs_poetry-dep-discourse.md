---
layout: base
title:  'Statistics of discourse in UD_Czech-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Czech-Poetry: Relations: `discourse`

This relation is universal.

5 nodes (0%) are attached to their parents as `discourse`.

5 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.8.

The following 3 pairs of parts of speech are connected with `discourse`: <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-INTJ.html">INTJ</a></tt> (2; 40% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-CCONJ.html">CCONJ</a></tt> (2; 40% instances), <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-DET.html">DET</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 43	bgColor:blue
# visual-style 43	fgColor:white
# visual-style 44	bgColor:blue
# visual-style 44	fgColor:white
# visual-style 44 43 discourse	color:blue
1	Kde	kde	ADV	Db-------------	PronType=Rel	2	advmod	_	_
2	přestanu	přestat	VERB	VB-S---1P-AA---	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	advcl	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	2	punct	_	_
4	tam	tam	ADV	Db-------------	PronType=Dem	7	advmod	_	_
5	kouzelnice	kouzelnice	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	7	nsubj	_	_
6	Noc	noc	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	5	flat	_	_
7	začíná	začínat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	tkáti	tkát	VERB	Vf--------A---2	Aspect=Imp|Polarity=Pos|VerbForm=Inf	7	xcomp	_	_
9	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	_	_
10	myšlének	myšlenka	NOUN	NNIS4-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	11	nmod	_	_
11	stavu	stav	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	8	nmod	_	SpaceAfter=No
12	,	,	PUNCT	Z:-------------	_	14	punct	_	_
13	kam	kam	ADV	Db-------------	PronType=Rel	14	advmod	_	_
14	nedospěl	dospět	VERB	VpYS---XR-NA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Act	11	acl:relcl	_	_
15	jsem	být	AUX	VB-S---1P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	14	aux	_	SpaceAfter=No
16	,	,	PUNCT	Z:-------------	_	17	punct	_	_
17	jde	jít	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	parataxis	_	_
18	mi	já	PRON	PH-S3--1-------	Case=Dat|Number=Sing|Person=1|PronType=Prs|Variant=Short	17	obl:arg	_	_
19	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	20	case	_	_
20	pomoc	pomoc	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	17	obl	_	SpaceAfter=No
21	,	,	PUNCT	Z:-------------	_	25	punct	_	_
22	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	23	case	_	_
23	hvězdy	hvězda	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	25	obl	_	_
24	nebes	nebesa	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	23	nmod	_	_
25	zloupí	zloupit	VERB	VB-S---3P-AA---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	parataxis	_	_
26	vlastní	vlastní	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	27	amod	_	_
27	hlavu	hlava	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	25	obj	_	SpaceAfter=No
28	,	,	PUNCT	Z:-------------	_	32	punct	_	_
29	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	30	case	_	_
30	nim	on	PRON	P5XP3--3-------	Case=Dat|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs	32	obl	_	_
31	rosu	rosa	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	32	obj	_	_
32	dá	dát	VERB	VB-S---3P-AA---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	25	conj	_	SpaceAfter=No
33	,	,	PUNCT	Z:-------------	_	38	punct	_	_
34	co	co	PRON	PQ--1----------	Case=Nom|PronType=Rel	38	nsubj	_	_
35	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	36	case	_	_
36	květinách	květina	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur|Polarity=Pos	38	obl	_	_
37	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	38	expl:pv	_	_
38	třpytí	třpytit	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	31	acl:relcl	_	SpaceAfter=No
39	,	,	PUNCT	Z:-------------	_	40	punct	_	_
40	řkouc	řkouc	VERB	VeFS------A----	Aspect=Imp|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Conv|Voice=Act	32	advcl	_	_
41	tiše	tiše	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	40	advmod	_	SpaceAfter=No
42	:	:	PUNCT	Z:-------------	_	44	punct	_	_
43	Ejhle	ejhle	INTJ	II-------------	_	44	discourse	_	_
44	žití	žití	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	40	ccomp	_	SpaceAfter=No
45	!	!	PUNCT	Z:-------------	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	Leč	leč	CCONJ	J,-------------	_	3	discourse	_	_
2	jeden	jeden	NUM	ClYS1----------	Case=Nom|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card	3	nsubj	_	_
3	chybí	chybět	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 discourse	color:blue
1	Proč	proč	ADV	Db-------------	PronType=Int	2	advmod	_	SpacesBefore=\s
2	musil	muset	VERB	VpYS---XR-AA---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
3	jsi	být	AUX	VpYS---XR-AA---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	2	aux	_	_
4	umřít	umřít	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	2	xcomp	_	_
5	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	_	_
6	onom	onen	DET	PDZS6----------	Case=Loc|Gender=Masc|Number=Sing|PronType=Dem	7	det	_	_
7	soumraku	soumrak	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	4	obl	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	12	punct	_	_
9	jakou	jaký	DET	P4FS7----------	Case=Ins|Gender=Fem|Number=Sing|PronType=Int	11	det	_	_
10	to	ten	DET	PDNS4----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	12	discourse	_	_
11	vůlí	vůle	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	12	obl:agent	_	_
12	zlomena	zlomený	ADJ	VsQW---XX-AP---	Aspect=Perf|Gender=Fem|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	2	parataxis	_	_
13	tvá	tvůj	DET	PSFS1-S1------1	Case=Nom|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	14	det	_	_
14	vůle	vůle	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	12	nsubj:pass	_	SpaceAfter=No
15	,	,	PUNCT	Z:-------------	_	18	punct	_	_
16	že	že	SCONJ	NNMS1-----A----	_	18	mark	_	_
17	jsi	být	AUX	NNMS1-----A----	_	18	aux	_	_
18	odešel	odejít	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	12	advcl	_	_
19	v	v	ADP	RR--4----------	AdpType=Prep|Case=Acc	20	case	_	_
20	den	den	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	18	obl	_	_
21	strašných	strašný	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	22	amod	_	_
22	přízraků	přízrak	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	20	nmod	_	SpaceAfter=No
23	,	,	PUNCT	Z:-------------	_	26	punct	_	_
24	kdy	kdy	ADV	Db-------------	PronType=Rel	26	advmod	_	_
25	příští	příští	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	26	nsubj	_	_
26	bylo	být	AUX	VpNS---XR-AA---	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	22	acl:relcl	_	_
27	mnohem	mnohem	ADV	Db-------------	_	28	advmod	_	_
28	dál	daleko	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	26	advmod	_	_
29	než	než	SCONJ	J,-------------	_	30	mark	_	_
30	Thule	Thule	PROPN	NNNXX-----A----	Case=Nom|Gender=Fem|NameType=Geo|Number=Sing|Polarity=Pos	28	obl	_	SpaceAfter=No
31	?	?	PUNCT	Z:-------------	_	2	punct	_	_

~~~


