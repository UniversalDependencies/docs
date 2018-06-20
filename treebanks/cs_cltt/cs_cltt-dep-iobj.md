---
layout: base
title:  'Statistics of iobj in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `iobj`

This relation is universal.

21 nodes (0%) are attached to their parents as `iobj`.

15 instances of `iobj` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.66666666666667.

The following 3 pairs of parts of speech are connected with `iobj`: <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (15; 71% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt> (4; 19% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (2; 10% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 iobj	color:blue
1	(1)	(1)	PUNCT	Z:-------------	_	4	punct	4:punct	_
2	Účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	3:amod	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	4	nsubj	4:nsubj	_
4	mohou	moci	VERB	VB-P---3P-AA--1	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	pověřit	pověřit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	4	xcomp	4:xcomp	_
6	vedením	vedení	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	5	iobj	5:iobj	_
7	svého	svůj	DET	P8ZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	8	det	8:det	LId=svůj-1
8	účetnictví	účetnictví	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	6	nmod	6:nmod	_
9	i	i	CCONJ	J^-------------	_	14	advmod:emph	14:advmod:emph	LId=i-1
10	jinou	jiný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	14	amod	14:amod	_
11	právnickou	právnický	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	14	amod	14:amod	_
12	nebo	nebo	CCONJ	J^-------------	_	13	cc	13:cc	_
13	fyzickou	fyzický	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	11	conj	11:conj|14:amod	_
14	osobu	osoba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	5	obj	5:obj	SpaceAfter=No
15	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 15 iobj	color:blue
1	(5)	(5)	PUNCT	Z:-------------	_	7	punct	7:punct	_
2	Účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	3:amod	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	7	nsubj	7:nsubj	_
4	uvedené	uvedený	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	3:amod	_
5	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	6:case	LId=v-1
6	§_20_odst._1_písm._e)	§_20_odst._1_písm._e)	X	X@-------------	_	4	advmod	4:advmod	_
7	vyhotovují	vyhotovovat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
8	výroční	výroční	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	9	amod	9:amod	_
9	zprávu	zpráva	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	7	obj	7:obj	_
10	nebo	nebo	CCONJ	J^-------------	_	12	cc	12:cc	_
11	obdobný	obdobný	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	12	amod	12:amod	_
12	dokument	dokument	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	9	conj	7:obj|9:conj	SpaceAfter=No
13	,	,	PUNCT	Z:-------------	_	18	punct	18:punct	_
14	pokud	pokud	SCONJ	J,-------------	_	18	mark	18:mark	_
15	jim	on	PRON	PPXP3--3-------	Case=Dat|Number=Plur|Person=3|PronType=Prs	18	iobj	18:iobj	LId=on-1
16	tuto	tuto	ADV	Db-------------	_	17	advmod	17:advmod	_
17	povinnost	povinnost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	18	obj	18:obj	_
18	stanoví	stanovit	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	advcl	7:advcl	_
19	zvláštní	zvláštní	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	21	amod	21:amod	_
20	právní	právní	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	21	amod	21:amod	_
21	předpis	předpis	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	18	nsubj	18:nsubj	SpaceAfter=No
22	.	.	PUNCT	Z:-------------	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 41	bgColor:blue
# visual-style 41	fgColor:white
# visual-style 41 38 iobj	color:blue
1	(1)	(1)	PUNCT	Z:-------------	_	8	punct	8:punct	_
2	Z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	4	case	4:case	LId=z-1
3	účetních	účetní	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	4	amod	4:amod	LId=účetní-1
4	jednotek	jednotka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	26	nmod	26:nmod|36:nmod	_
5	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	6	case	6:case	LId=podle-2
6	§_1_odst._2	§_1_odst._2	X	X@-------------	_	4	nmod	4:nmod	_
7	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	8:cop	_
8	povinny	povinný	ADJ	ACTP------A----	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short	0	root	0:root	_
9	účetní	účetní	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	10	amod	10:amod	LId=účetní-1
10	závěrku	závěrka	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	25	obj	25:obj	_
11	i	i	CCONJ	J^-------------	_	13	cc	13:cc	LId=i-1
12	výroční	výroční	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	13	amod	13:amod	_
13	zprávu	zpráva	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	10	conj	10:conj|25:obj	SpaceAfter=No
14	,	,	PUNCT	Z:-------------	_	15	punct	15:punct	_
15	vyžaduje-li	vyžaduje-li	X	X@-------------	_	25	advmod	25:advmod	_
16	její	jeho	DET	PSNS4FS3-------	Case=Acc|Gender=Neut|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	17	det	17:det	_
17	vyhotovení	vyhotovení	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	15	obj	15:obj	_
18	tento	tento	DET	PDYS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	19	det	19:det	_
19	zákon	zákon	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	15	nsubj	15:nsubj	_
20	nebo	nebo	CCONJ	J^-------------	_	23	cc	23:cc	_
21	zvláštní	zvláštní	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	23	amod	23:amod	_
22	právní	právní	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	23	amod	23:amod	_
23	předpis	předpis	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	19	conj	15:nsubj|19:conj	SpaceAfter=No
24	,	,	PUNCT	Z:-------------	_	15	punct	15:punct	_
25	zveřejnit	zveřejnit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	8	xcomp	8:xcomp	_
26	ty	ten	DET	PDFP4----------	Case=Acc|Gender=Fem|Number=Plur|PronType=Dem	8	nsubj	8:nsubj	SpaceAfter=No
27	,	,	PUNCT	Z:-------------	_	30	punct	30:punct	_
28	které	který	DET	P4FP1----------	Case=Nom|Gender=Fem|Number=Plur|PronType=Int,Rel	30	nsubj:pass	30:nsubj:pass	_
29	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	30	expl:pass	30:expl:pass	_
30	zapisují	zapisovat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	26	acl	26:acl	_
31	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	33	case	33:case	LId=do-1
32	obchodního	obchodní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	33	amod	33:amod	_
33	rejstříku	rejstřík	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	30	obl	30:obl	SpaceAfter=No
34	,	,	PUNCT	Z:-------------	_	36	punct	36:punct	_
35	nebo	nebo	CCONJ	J^-------------	_	36	cc	36:cc	_
36	ty	ten	DET	PDMP4----------	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur|PronType=Dem	26	conj	8:nsubj|26:conj	SpaceAfter=No
37	,	,	PUNCT	Z:-------------	_	41	punct	41:punct	_
38	kterým	který	DET	P4XP3----------	Case=Dat|Number=Plur|PronType=Int,Rel	41	iobj	41:iobj	_
39	tuto	tuto	ADV	Db-------------	_	40	advmod	40:advmod	_
40	povinnost	povinnost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	41	obj	41:obj	_
41	stanoví	stanovit	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	36	acl	36:acl	_
42	zvláštní	zvláštní	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	44	amod	44:amod	_
43	právní	právní	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	44	amod	44:amod	_
44	předpis	předpis	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	41	nsubj	41:nsubj	SpaceAfter=No
45	.	.	PUNCT	Z:-------------	_	8	punct	8:punct	_

~~~


