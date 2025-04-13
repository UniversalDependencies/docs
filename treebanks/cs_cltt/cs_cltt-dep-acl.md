---
layout: base
title:  'Statistics of acl in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="cs_cltt-dep-acl-relcl.html">acl:relcl</a></tt>.

84 nodes (0%) are attached to their parents as `acl`.

84 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.55952380952381.

The following 7 pairs of parts of speech are connected with `acl`: <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (59; 70% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (12; 14% instances), <tt><a href="cs_cltt-pos-DET.html">DET</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (8; 10% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="cs_cltt-pos-DET.html">DET</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="cs_cltt-pos-DET.html">DET</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 acl	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	2:case	LId=v-1
2	případě	případ	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	9	obl	9:obl:v:loc	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	6	punct	6:punct	_
4	že	že	SCONJ	J,-------------	_	6	mark	6:mark	_
5	je	on	PRON	PPXP4--3-------	Case=Acc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs	7	obj	7:obj	LId=on-1
6	nelze	lze	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl	2:acl:že	_
7	přiřadit	přiřadit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	6	csubj	6:csubj	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	6	punct	6:punct	_
9	uvedou	uvést	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
10	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	9	expl:pass	9:expl:pass	_
11	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	13	case	13:case	LId=v-1
12	provozní	provozní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	13	amod	13:amod	_
13	činnosti	činnost	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	9	obl	9:obl:v:loc	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 14 acl	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	2:case	LId=v-1
2	případě	případ	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	16	obl	16:obl:v:loc	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	14	punct	14:punct	_
4	že	že	SCONJ	J,-------------	_	14	mark	14:mark	_
5	informace	informace	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur	14	nsubj	14:nsubj	_
6	uváděné	uváděný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	5	amod	5:amod	_
7	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	12	case	12:case	LId=za-1
8	minulé	minulý	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	12	amod	12:amod	_
9	a	a	CCONJ	J^-------------	_	10	cc	10:cc	LId=a-1
10	běžné	běžný	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	8	conj	8:conj|12:amod	_
11	účetní	účetní	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	12	amod	12:amod	LId=účetní-1
12	období	období	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing	6	obl	6:obl:za:acc	_
13	nejsou	být	AUX	VB-P---3P-NA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	14	cop	14:cop	_
14	srovnatelné	srovnatelný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	2	acl	2:acl:že	SpaceAfter=No
15	,	,	PUNCT	Z:-------------	_	14	punct	14:punct	_
16	upraví	upravit	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
17	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	16	expl:pass	16:expl:pass	_
18	informace	informace	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur	16	nsubj:pass	16:nsubj:pass	_
19	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	22	case	22:case	LId=za-1
20	minulé	minulý	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	22	amod	22:amod	_
21	účetní	účetní	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	22	amod	22:amod	LId=účetní-1
22	období	období	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing	18	nmod	18:nmod:za:acc	_
23	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	26	case	26:case	LId=s-1
24	ohledem	ohled	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	23	fixed	23:fixed	_
25	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	23	fixed	23:fixed	LId=na-1
26	významnost	významnost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	16	obl	16:obl:s_ohledem_na:acc	_
27	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	28	case	28:case	LId=podle-2
28	§_19_odst._6_zákona	§_19_odst._6_zákona	X	X@-------------	_	16	obl	16:obl:podle:gen	SpaceAfter=No
29	.	.	PUNCT	Z:-------------	_	16	punct	16:punct	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 16 acl	color:blue
1	Tuto	tento	DET	PDFS4----------	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	2	det	2:det	_
2	dokumentaci	dokumentace	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	3	obj	3:obj	_
3	uschovávají	uschovávat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	5	amod	5:amod	LId=účetní-1
5	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur	3	nsubj	3:nsubj	_
6	po	po	ADP	RR--4----------	AdpType=Prep|Case=Acc	7	case	7:case	LId=po-1
7	dobu	doba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	3	obl	3:obl:po:acc	_
8	stanovenou	stanovený	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	7	amod	7:amod	_
9	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	10	case	10:case	LId=v-1
10	§_31_odst._2	§_31_odst._2	X	X@-------------	_	8	obl	8:obl:v:loc	_
11	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	12	case	12:case	LId=podle-2
12	toho	ten	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	3	obl	3:obl:podle:gen	SpaceAfter=No
13	,	,	PUNCT	Z:-------------	_	16	punct	16:punct	_
14	jakou	jaký	DET	P4FS4----------	Case=Acc|Gender=Fem|Number=Sing|PronType=Int,Rel	15	det	15:det	_
15	funkci	funkce	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	16	obj	16:obj	_
16	plní	plnit	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	12	acl	12:acl	_
17	při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	18	case	18:case	LId=při-1
18	vedení	vedení	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing	16	obl	16:obl:při:loc	_
19	účetnictví	účetnictví	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing	18	nmod	18:nmod:gen	SpaceAfter=No
20	,	,	PUNCT	Z:-------------	_	21	punct	21:punct	_
21	nejde-li	nejde-li	X	X@-------------	_	3	obl	3:obl	_
22	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	23	case	23:case	LId=o-1
23	případ	případ	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	21	obl:arg	21:obl:arg:o:acc	_
24	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	25	case	25:case	LId=podle-2
25	odstavce	odstavec	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	23	nmod	23:nmod:podle:gen	_
26	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	25	nummod	25:nummod	SpaceAfter=No
27	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


