---
layout: base
title:  'Statistics of amod in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `amod`

This relation is universal.

6130 nodes (17%) are attached to their parents as `amod`.

5396 instances of `amod` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.37634584013051.

The following 7 pairs of parts of speech are connected with `amod`: <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (6112; 100% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="cs_cltt-pos-DET.html">DET</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="cs_cltt-pos-X.html">X</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Výroční	výroční	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	2	amod	_	_
2	zpráva	zpráva	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	0	root	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 24 amod	color:blue
1	2	2	NUM	C}-------------	NumForm=Roman|NumType=Card	30	nmod	_	SpaceAfter=No
2	.	.	PUNCT	Z:-------------	_	1	punct	_	_
3	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	_	LId=v-1
4	případech	případ	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur|Polarity=Pos	30	obl	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	10	punct	_	_
6	kdy	kdy	ADV	Db-------------	PronType=Int,Rel	10	advmod	_	_
7	byl	být	AUX	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	10	aux:pass	_	_
8	projekt	projekt	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	10	nsubj:pass	_	_
9	přeměny	přeměna	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	8	nmod	_	_
10	vypracován	vypracovaný	ADJ	VsYS---XX-AP---	Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	4	amod	_	LDeriv=vypracovat
11	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	12	case	_	LId=podle-2
12	zákona_č._125/2008_Sb.	zákona_č._125/2008_Sb.	X	X@-------------	_	10	obl	_	SpaceAfter=No
13	,	,	PUNCT	Z:-------------	_	15	punct	_	_
14	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	15	case	_	LId=o-1
15	přeměnách	přeměna	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur|Polarity=Pos	12	nmod	_	_
16	obchodních	obchodní	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	17	amod	_	_
17	společností	společnost	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	15	nmod	_	_
18	a	a	CCONJ	J^-------------	_	19	cc	_	LId=a-1
19	družstev	družstvo	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	17	conj	_	SpaceAfter=No
20	,	,	PUNCT	Z:-------------	_	22	punct	_	_
21	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	22	case	_	LId=v-1
22	znění	znění	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	12	nmod	_	_
23	účinném	účinný	ADJ	AANS6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	22	amod	_	_
24	do	do	ADJ	A2--------A----	Hyph=Yes|Polarity=Pos	23	amod	_	LId=do-7
25	31	31	NUM	C}-------------	NumForm=Roman|NumType=Card	27	nummod	_	SpaceAfter=No
26	.	.	PUNCT	Z:-------------	_	25	punct	_	_
27	prosince	prosinec	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	24	obl	_	_
28	2011	2011	NUM	C}-------------	NumForm=Roman|NumType=Card	27	nummod	_	SpaceAfter=No
29	,	,	PUNCT	Z:-------------	_	10	punct	_	_
30	postupuje	postupovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
31	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	30	expl:pass	_	_
32	při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	33	case	_	LId=při-1
33	účtování	účtování	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	30	obl	_	_
34	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	35	case	_	LId=o-1
35	přeměně	přeměna	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	33	nmod	_	_
36	společnosti	společnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	35	nmod	_	_
37	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	38	case	_	LId=podle-2
38	vyhlášky_č._500/2002_Sb.	vyhlášky_č._500/2002_Sb.	X	X@-------------	_	30	obl	_	SpaceAfter=No
39	,	,	PUNCT	Z:-------------	_	41	punct	_	_
40	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	41	case	_	LId=v-1
41	znění	znění	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	38	nmod	_	_
42	účinném	účinný	ADJ	AANS6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	41	amod	_	_
43	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	44	case	_	LId=do-1
44	dne	den	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	42	obl	_	_
45	nabytí	nabytí	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	44	nmod	_	_
46	účinnosti	účinnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	45	nmod	_	_
47	této	tento	DET	PDFS2----------	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	48	det	_	_
48	vyhlášky	vyhláška	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	46	nmod	_	SpaceAfter=No
49	.	.	PUNCT	Z:-------------	_	30	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 19 amod	color:blue
1	(7)	(7)	PUNCT	Z:-------------	_	8	punct	_	_
2	Povinnost	povinnost	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	8	nsubj	_	_
3	zveřejnění	zveřejnění	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	2	nmod	_	_
4	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	6	case	_	LId=podle-2
5	tohoto	tento	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	6	det	_	_
6	ustanovení	ustanovení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	3	nmod	_	_
7	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	8	expl:pv	_	_
8	vztahuje	vztahovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	_	LId=na-1
10	všechny	všechen	DET	PLFP4----------	Case=Acc|Gender=Fem|Number=Plur|PronType=Tot	11	det	_	_
11	informace	informace	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	8	obl:arg	_	_
12	účetní	účetní	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	13	amod	_	LId=účetní-1
13	závěrky	závěrka	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	11	nmod	_	_
14	i	i	CCONJ	J^-------------	_	16	cc	_	LId=i-1
15	výroční	výroční	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	16	amod	_	_
16	zprávy	zpráva	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	11	conj	_	_
17	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	19	case	_	LId=s-1
18	výjimkou	výjimka	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	17	fixed	_	_
19	těch	ten	DET	PDXP2----------	Case=Gen|Number=Plur|PronType=Dem	11	amod	_	SpaceAfter=No
20	,	,	PUNCT	Z:-------------	_	24	punct	_	_
21	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	22	case	_	LId=na-1
22	které	který	DET	P4YP4----------	Case=Acc|Gender=Masc|Number=Plur|PronType=Int,Rel	24	obl:arg	_	_
23	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	24	expl:pv	_	_
24	vztahuje	vztahovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	19	acl:relcl	_	_
25	utajení	utajení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	24	nsubj	_	_
26	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	29	case	_	LId=podle-2
27	zvláštního	zvláštní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	29	amod	_	_
28	právního	právní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	29	amod	_	_
29	předpisu	předpis	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	25	nmod	_	SpaceAfter=No
30	.	.	PUNCT	Z:-------------	_	8	punct	_	_

~~~


