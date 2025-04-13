---
layout: base
title:  'Statistics of nsubj:pass in UD_Czech-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Czech-Poetry: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="cs_poetry-dep-nsubj.html">nsubj</a></tt>.

12 nodes (0%) are attached to their parents as `nsubj:pass`.

7 instances of `nsubj:pass` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.91666666666667.

The following 3 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (8; 67% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (3; 25% instances), <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-PRON.html">PRON</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nsubj:pass	color:blue
1	Z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	2	case	_	_
2	chrámu	chrám	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	obl	_	_
3	srdce	srdce	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing	2	nmod	_	_
4	vypáčeny	vypáčený	ADJ	VsTP---XX-AP---	Aspect=Perf|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
5	dvéře	dveře	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Style=Rare	4	nsubj:pass	_	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Umění	umění	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|VerbForm=Vnoun	3	nsubj:pass	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	expl:pass	_	_
3	restauruje	restaurovat	VERB	VB-S---3P-AA---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	:	:	PUNCT	Z:-------------	_	6	punct	_	_
5	rytíř	rytíř	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
6	dostává	dostávat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
7	co	co	PRON	PQ--4----------	Animacy=Inan|Case=Acc|PronType=Int	6	obj	_	_
8	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	7	fixed	_	_
9	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	7	fixed	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 28 nsubj:pass	color:blue
1	Vždyť	vždyť	CCONJ	J^-------------	_	2	advmod:emph	_	_
2	poznali	poznat	VERB	VpMP---XR-AA---	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
3	jste	být	AUX	VB-P---2P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	2	aux	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	17	punct	_	_
5	že	že	SCONJ	J,-------------	_	17	mark	_	_
6	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	_	_
7	hroudě	hrouda	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	17	obl	_	_
8	této	tento	DET	PDFS6----------	Case=Loc|Gender=Fem|Number=Sing|PronType=Dem	7	det	_	SpaceAfter=No
9	,	,	PUNCT	Z:-------------	_	13	punct	_	_
10	již	jenž	PRON	PJFS4----------	Case=Acc|Gender=Fem|Number=Sing|PrepCase=Npr|PronType=Rel	13	obj	_	_
11	osud	osud	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	13	nsubj	_	_
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
22	právo	právo	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing	23	obj	_	_
23	ctí	ctít	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	16	acl:relcl	_	SpaceAfter=No
24	,	,	PUNCT	Z:-------------	_	26	punct	_	_
25	že	že	SCONJ	J,-------------	_	26	mark	_	_
26	chcem	chtít	VERB	VB-S---1P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	17	conj	_	SpaceAfter=No
27	,	,	PUNCT	Z:-------------	_	30	punct	_	_
28	co	co	PRON	PQ--1----------	Animacy=Inan|Case=Nom|PronType=Rel	30	nsubj:pass	_	_
29	dědy	děd	NOUN	NNMS2-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Number=Plur	30	obl:agent	_	_
30	seto	sít	ADJ	VpNS---XR-AA---	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	34	csubj	_	SpaceAfter=No
31	,	,	PUNCT	Z:-------------	_	34	punct	_	_
32	by	aby	SCONJ	Vc-------------	_	34	mark	_	_
33	vnukům	vnuk	NOUN	NNMP3-----A----	Animacy=Anim|Case=Dat|Gender=Masc|Number=Plur	34	obl:arg	_	_
34	zrálo	zrát	VERB	VpNS---XR-AA---	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	26	ccomp	_	_
35	v	v	ADP	RR--4----------	AdpType=Prep|Case=Acc	36	case	_	_
36	žeň	žeň	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	34	obl:arg	_	_
37	a	a	CCONJ	J^-------------	_	38	cc	_	_
38	zdar	zdar	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	36	conj	_	_
39	a	a	CCONJ	J^-------------	_	40	cc	_	_
40	štěstí	štěstí	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing	36	conj	_	SpaceAfter=No
41	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


