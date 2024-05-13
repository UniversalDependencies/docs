---
layout: base
title:  'Statistics of csubj in UD_Czech-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Czech-Poetry: Relations: `csubj`

This relation is universal.

10 nodes (0%) are attached to their parents as `csubj`.

7 instances of `csubj` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.8.

The following 3 pairs of parts of speech are connected with `csubj`: <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt> (7; 70% instances), <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt> (2; 20% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 csubj	color:blue
1	Kteří	který	DET	P4MP1----------	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|PronType=Int	3	nsubj	_	_
2	ještě	ještě	ADV	Db-------------	_	3	advmod	_	_
3	bdíte	bdít	VERB	VB-P---2P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	10	csubj	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	3	punct	_	_
5	Dobrý	dobrý	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	6	amod	_	_
6	pozor	pozor	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	10	obj	_	_
7	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	9	case	_	_
8	má	můj	DET	P8NP4---------1	Case=Acc|Gender=Neut|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	9	det	_	_
9	slova	slovo	NOUN	NNNP4-----A----	Case=Acc|Gender=Neut|Number=Plur|Polarity=Pos	6	nmod	_	_
10	dejte	dát	VERB	Vi-P---2--A----	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|Polarity=Pos|VerbForm=Fin	0	root	_	SpaceAfter=No
11	,	,	PUNCT	Z:-------------	_	16	punct	_	_
12	Neslýchané	slýchaný	ADJ	AAFP4----1N----	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Neg|VerbForm=Part|Voice=Pass	15	dep	_	SpaceAfter=No
13	,	,	PUNCT	Z:-------------	_	14	punct	_	_
14	nové	nový	ADJ	AAFP4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	12	conj	_	_
15	věci	věc	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	16	amod	_	_
16	zvíte	zvědět	VERB	VB-P---2P-AA---	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	10	parataxis	_	SpaceAfter=No
17	!	!	PUNCT	Z:-------------	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj	color:blue
1	Je	být	AUX	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
2	ovšem	ovšem	CCONJ	J^-------------	_	3	advmod:emph	_	_
3	nutno	nutný	ADJ	ACNS------A----	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	5	punct	_	_
5	přečkat	přečkat	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	3	csubj	_	_
6	bouři	bouře	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	5	obj	_	_
7	tuto	tento	DET	PDFS4----------	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	6	det	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	21	punct	_	_
9	pak	pak	ADV	Db-------------	_	21	advmod	_	_
10	za	za	ADP	RR--2----------	AdpType=Prep|Case=Gen	11	case	_	_
11	pohody	pohoda	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	21	obl	_	SpaceAfter=No
12	,	,	PUNCT	Z:-------------	_	14	punct	_	_
13	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	14	case	_	_
14	čase	čas	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	11	appos	_	_
15	bezemračném	bezmračný	ADJ	AAIS6----1A----	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Style=Rare	14	amod	_	_
16	své	svůj	DET	P8NS4---------1	Case=Acc|Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	17	det	_	_
17	hnízdo	hnízdo	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	20	obj	_	_
18	sobě	se	PRON	P6-X3----------	Case=Dat|PronType=Prs|Reflex=Yes	20	obl:arg	_	_
19	hezky	hezky	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	20	advmod	_	_
20	stavět	stavět	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	21	xcomp	_	_
21	začnem	začít	VERB	VB-S---1P-AA---	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Style=Coll|Tense=Pres|VerbForm=Fin|Voice=Act	3	parataxis	_	SpaceAfter=No
22	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 34 30 csubj	color:blue
1	Vždyť	vždyť	CCONJ	J^-------------	_	2	advmod:emph	_	_
2	poznali	poznat	VERB	VpMP---XR-AA---	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
3	jste	být	AUX	VB-P---2P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	2	aux	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	17	punct	_	_
5	že	že	SCONJ	J,-------------	_	17	mark	_	_
6	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	_	_
7	hroudě	hrouda	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	17	obl	_	_
8	této	tento	DET	PDFS6----------	Case=Loc|Gender=Fem|Number=Sing|PronType=Dem	7	det	_	SpaceAfter=No
9	,	,	PUNCT	Z:-------------	_	13	punct	_	_
10	již	jenž	PRON	PJFS4----------	Case=Acc|Gender=Fem|Number=Sing|PrepCase=Npr|PronType=Rel	13	obj	_	_
11	osud	osud	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	13	nsubj	_	_
12	nám	já	PRON	PP-P3--1-------	Case=Dat|Number=Plur|Person=1|PronType=Prs	13	obl:arg	_	_
13	dal	dát	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	7	acl:relcl	_	SpaceAfter=No
14	,	,	PUNCT	Z:-------------	_	13	punct	_	_
15	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	16	case	_	_
16	každým	každý	DET	AAMS7----1A----	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|PronType=Tot	19	obl:arg	_	_
17	chcem	chtít	VERB	VB-S---1P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Style=Coll|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	_
18	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	19	expl:pv	_	_
19	snésti	snést	VERB	Vf--------A---2	Aspect=Perf|Polarity=Pos|VerbForm=Inf	17	xcomp	_	SpaceAfter=No
20	,	,	PUNCT	Z:-------------	_	23	punct	_	_
21	kdo	kdo	PRON	PKM-1----------	Animacy=Anim|Case=Nom|Gender=Masc|PronType=Rel	23	nsubj	_	_
22	právo	právo	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	23	obj	_	_
23	ctí	ctít	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	16	acl:relcl	_	SpaceAfter=No
24	,	,	PUNCT	Z:-------------	_	26	punct	_	_
25	že	že	SCONJ	J,-------------	_	26	mark	_	_
26	chcem	chtít	VERB	VB-S---1P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	17	conj	_	SpaceAfter=No
27	,	,	PUNCT	Z:-------------	_	30	punct	_	_
28	co	co	PRON	PQ--1----------	Animacy=Inan|Case=Nom|PronType=Rel	30	nsubj:pass	_	_
29	dědy	děd	NOUN	NNMS2-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Number=Plur|Polarity=Pos	30	obl:agent	_	_
30	seto	sít	ADJ	VpNS---XR-AA---	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	34	csubj	_	SpaceAfter=No
31	,	,	PUNCT	Z:-------------	_	34	punct	_	_
32	by	aby	SCONJ	Vc-------------	_	34	mark	_	_
33	vnukům	vnuk	NOUN	NNMP3-----A----	Animacy=Anim|Case=Dat|Gender=Masc|Number=Plur|Polarity=Pos	34	obl:arg	_	_
34	zrálo	zrát	VERB	VpNS---XR-AA---	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	26	ccomp	_	_
35	v	v	ADP	RR--4----------	AdpType=Prep|Case=Acc	36	case	_	_
36	žeň	žeň	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	34	obl:arg	_	_
37	a	a	CCONJ	J^-------------	_	38	cc	_	_
38	zdar	zdar	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	36	conj	_	_
39	a	a	CCONJ	J^-------------	_	40	cc	_	_
40	štěstí	štěstí	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	36	conj	_	SpaceAfter=No
41	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


