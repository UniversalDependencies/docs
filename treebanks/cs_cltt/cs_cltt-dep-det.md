---
layout: base
title:  'Statistics of det in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="cs_cltt-dep-det-nummod.html">det:nummod</a></tt>.

647 nodes (2%) are attached to their parents as `det`.

641 instances of `det` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25502318392581.

The following 4 pairs of parts of speech are connected with `det`: <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (644; 100% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-X.html">X</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Termín	termín	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	5	obj	_	_
2	této	tento	DET	PDFS2----------	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	3	det	_	_
3	inventarizace	inventarizace	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	1	nmod	_	_
4	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	5	obl:arg	_	_
5	stanoví	stanovit	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	sama	sám	DET	PLFS1----------	Case=Nom|Gender=Fem|Number=Sing|PronType=Emp	8	xcomp	_	_
7	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	8	amod	_	LId=účetní-1
8	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	5	nsubj	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 24 det	color:blue
1	Právnické	právnický	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	2	amod	_	_
2	osoby	osoba	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	23	nsubj	_	_
3	založené	založený	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	2	amod	_	_
4	za	za	ADP	RR--7----------	AdpType=Prep|Case=Ins	5	case	_	LId=za-1
5	účelem	účel	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	3	obl	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	10	punct	_	_
7	aby	aby	SCONJ	J,-------------	_	10	mark	_	_
8	by	být	AUX	Vc-------------	Mood=Cnd|Person=3|VerbForm=Fin	10	aux	_	_
9	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	10	expl:pv	_	_
10	staly	stát	VERB	VpTP---XR-AA---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	5	acl	_	LId=stát-2
11	vlastníkem	vlastník	NOUN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	10	obl:arg	_	_
12	domu	dům	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	11	nmod	_	_
13	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	14	case	_	LId=s-1
14	byty	byt	NOUN	NNIP7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur|Polarity=Pos	12	nmod	_	_
15	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	16	case	_	LId=v-1
16	nájmu	nájem	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	14	nmod	_	_
17	společníků	společník	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	16	nmod	_	SpaceAfter=No
18	,	,	PUNCT	Z:-------------	_	19	punct	_	_
19	členů	člen	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	17	conj	_	_
20	nebo	nebo	CCONJ	J^-------------	_	21	cc	_	_
21	zakladatelů	zakladatel	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	17	conj	_	SpaceAfter=No
22	,	,	PUNCT	Z:-------------	_	10	punct	_	_
23	nemusí	muset	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
24	tento	tento	DET	PDYS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	25	det	_	_
25	dlouhodobý	dlouhodobý	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	29	amod	_	_
26	nehmotný	hmotný	ADJ	AAIS4----1N----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Neg	29	amod	_	_
27	a	a	CCONJ	J^-------------	_	28	cc	_	LId=a-1
28	hmotný	hmotný	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	26	conj	_	_
29	majetek	majetek	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	30	obj	_	_
30	odpisovat	odpisovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	23	xcomp	_	SpaceAfter=No
31	,	,	PUNCT	Z:-------------	_	33	punct	_	_
32	pokud	pokud	SCONJ	J,-------------	_	33	mark	_	_
33	neslouží	sloužit	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	23	advcl	_	_
34	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	35	case	_	LId=k-1
35	podnikání	podnikání	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Number=Sing|Polarity=Pos	33	obl	_	SpaceAfter=No
36	.	.	PUNCT	Z:-------------	_	23	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 det	color:blue
1	Pokud	pokud	SCONJ	J,-------------	_	2	mark	_	_
2	dojde	dojít	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	25	advcl	_	_
3	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	5	case	_	LId=v-1
4	výjimečných	výjimečný	ADJ	AAIP6----1A----	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	5	amod	_	_
5	případech	případ	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur|Polarity=Pos	2	obl	_	_
6	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	7	case	_	LId=k-1
7	tomu	ten	DET	PDZS3----------	Case=Dat|Gender=Masc,Neut|Number=Sing|PronType=Dem	2	det	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	18	punct	_	_
9	že	že	SCONJ	J,-------------	_	18	mark	_	_
10	použití	použití	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	18	nsubj	_	_
11	účetních	účetní	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	12	amod	_	LId=účetní-1
12	metod	metoda	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	10	nmod	_	_
13	stanovených	stanovený	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	12	amod	_	_
14	prováděcími	prováděcí	ADJ	AAIP7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	16	amod	_	_
15	právními	právní	ADJ	AAIP7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	16	amod	_	_
16	předpisy	předpis	NOUN	NNIP7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur|Polarity=Pos	13	obl:arg	_	_
17	bude	být	AUX	VB-S---3F-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	18	cop	_	_
18	neslučitelné	slučitelný	ADJ	AANS1----1N----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Neg	7	acl	_	_
19	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	20	case	_	LId=s-1
20	povinností	povinnost	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	18	obl:arg	_	_
21	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	22	case	_	LId=podle-2
22	odstavce	odstavec	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	18	obl	_	_
23	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	22	nummod	_	SpaceAfter=No
24	,	,	PUNCT	Z:-------------	_	2	punct	_	_
25	postupuje	postupovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
26	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	27	amod	_	LId=účetní-1
27	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	25	nsubj	_	_
28	odchylně	odchylně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	25	advmod	_	_
29	tak	tak	ADV	Db-------------	PronType=Dem	25	advmod	_	SpaceAfter=No|LId=tak-3
30	,	,	PUNCT	Z:-------------	_	34	punct	_	_
31	aby	aby	SCONJ	J,-------------	_	34	mark	_	_
32	by	být	AUX	Vc-------------	Mood=Cnd|Person=3|VerbForm=Fin	34	aux	_	_
33	byl	být	AUX	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	34	aux:pass	_	_
34	podán	podaný	ADJ	VsYS---XX-AP---	Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	25	obl	_	LDeriv=podat
35	věrný	věrný	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	38	amod	_	_
36	a	a	CCONJ	J^-------------	_	37	cc	_	LId=a-1
37	poctivý	poctivý	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	35	conj	_	_
38	obraz	obraz	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	34	nsubj:pass	_	SpaceAfter=No
39	.	.	PUNCT	Z:-------------	_	25	punct	_	_

~~~


