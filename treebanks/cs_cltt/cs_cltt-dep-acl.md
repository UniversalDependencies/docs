---
layout: base
title:  'Statistics of acl in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="cs_cltt-dep-acl-relcl.html">acl:relcl</a></tt>.

85 nodes (0%) are attached to their parents as `acl`.

85 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.67058823529412.

The following 7 pairs of parts of speech are connected with `acl`: <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (60; 71% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (12; 14% instances), <tt><a href="cs_cltt-pos-DET.html">DET</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (8; 9% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="cs_cltt-pos-DET.html">DET</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="cs_cltt-pos-DET.html">DET</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 acl	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	_	LId=v-1
2	případě	případ	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	9	obl	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	6	punct	_	_
4	že	že	SCONJ	J,-------------	_	6	mark	_	_
5	je	on	PRON	PPXP4--3-------	Case=Acc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs	7	obj	_	LId=on-1
6	nelze	lze	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl	_	_
7	přiřadit	přiřadit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	6	csubj	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	6	punct	_	_
9	uvedou	uvést	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	9	expl:pass	_	_
11	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	13	case	_	LId=v-1
12	provozní	provozní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	13	amod	_	_
13	činnosti	činnost	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	9	obl	_	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 14 acl	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	_	LId=v-1
2	případě	případ	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	16	obl	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	14	punct	_	_
4	že	že	SCONJ	J,-------------	_	14	mark	_	_
5	informace	informace	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	14	nsubj	_	_
6	uváděné	uváděný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	5	amod	_	_
7	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	12	case	_	LId=za-1
8	minulé	minulý	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	12	amod	_	_
9	a	a	CCONJ	J^-------------	_	10	cc	_	LId=a-1
10	běžné	běžný	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	8	conj	_	_
11	účetní	účetní	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	12	amod	_	LId=účetní-1
12	období	období	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	6	obl	_	_
13	nejsou	být	AUX	VB-P---3P-NA---	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	14	cop	_	_
14	srovnatelné	srovnatelný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	2	acl	_	SpaceAfter=No
15	,	,	PUNCT	Z:-------------	_	14	punct	_	_
16	upraví	upravit	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
17	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	16	expl:pass	_	_
18	informace	informace	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	16	nsubj:pass	_	_
19	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	22	case	_	LId=za-1
20	minulé	minulý	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	22	amod	_	_
21	účetní	účetní	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	22	amod	_	LId=účetní-1
22	období	období	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	18	nmod	_	_
23	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	26	case	_	LId=s-1
24	ohledem	ohled	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	23	fixed	_	_
25	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	23	fixed	_	LId=na-1
26	významnost	významnost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	16	obl	_	_
27	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	28	case	_	LId=podle-2
28	§_19_odst._6_zákona	§_19_odst._6_zákona	X	X@-------------	_	16	obl	_	SpaceAfter=No
29	.	.	PUNCT	Z:-------------	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 16 acl	color:blue
1	Tuto	tento	DET	PDFS4----------	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	2	det	_	_
2	dokumentaci	dokumentace	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	3	obj	_	_
3	uschovávají	uschovávat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	5	amod	_	LId=účetní-1
5	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	3	nsubj	_	_
6	po	po	ADP	RR--4----------	AdpType=Prep|Case=Acc	7	case	_	LId=po-1
7	dobu	doba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	3	obl	_	_
8	stanovenou	stanovený	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	7	amod	_	_
9	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	10	case	_	LId=v-1
10	§_31_odst._2	§_31_odst._2	X	X@-------------	_	8	obl	_	_
11	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	12	case	_	LId=podle-2
12	toho	ten	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	3	obl	_	SpaceAfter=No
13	,	,	PUNCT	Z:-------------	_	16	punct	_	_
14	jakou	jaký	DET	P4FS4----------	Case=Acc|Gender=Fem|Number=Sing|PronType=Int,Rel	15	det	_	_
15	funkci	funkce	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	16	obj	_	_
16	plní	plnit	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	12	acl	_	_
17	při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	18	case	_	LId=při-1
18	vedení	vedení	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	16	obl	_	_
19	účetnictví	účetnictví	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	18	nmod	_	SpaceAfter=No
20	,	,	PUNCT	Z:-------------	_	21	punct	_	_
21	nejde-li	nejde-li	X	X@-------------	_	3	obl	_	_
22	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	23	case	_	LId=o-1
23	případ	případ	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	21	obl:arg	_	_
24	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	25	case	_	LId=podle-2
25	odstavce	odstavec	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	23	nmod	_	_
26	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	25	nummod	_	SpaceAfter=No
27	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


