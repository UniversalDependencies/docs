

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is a language-specific subtype of [expl]().
There are also 1 other language-specific subtypes of `expl`: [expl:pass]().

15234 nodes (1%) are attached to their parents as `expl:pv`.

12474 instances of `expl:pv` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.38473152159643.

The following 3 pairs of parts of speech are connected with `expl:pv`: [cs-pos/VERB]()-[cs-pos/PRON]() (14747; 97% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (485; 3% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (2; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 expl:pv	color:blue
1	Z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	2	case	_	LId=z-1
2	kukly	kukla	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	4	obl	_	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	expl:pv	_	LGloss=(zvr._zájmeno/částice)
4	vyklubal	vyklubat	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	motýl	motýl	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	4	nsubj	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 8 expl:pv	color:blue
1	Dá	dát	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pass	_	LGloss=(zvr._zájmeno/částice)
3	určit	určit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	1	xcomp	_	_
4	nějaký	nějaký	DET	PZYS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	5	det	_	_
5	mezník	mezník	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	1	nsubj:pass	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	13	punct	_	_
7	kdy	kdy	ADV	Db-------------	PronType=Int,Rel	13	advmod	_	_
8	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	13	expl:pv	_	LGloss=(zvr._zájmeno/částice)
9	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	13	cop	_	_
10	nevidomý	nevidomý	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	13	nsubj	_	_
11	sám	sám	DET	PLYS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Emp	10	xcomp	_	LGloss=(samotný)
12	sebou	se	PRON	P6-X7----------	Case=Ins|PronType=Prs|Reflex=Yes	13	obj	_	LGloss=(zvr._zájmeno/částice)
13	jistý	jistý	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	5	acl	_	SpaceAfter=No
14	?	?	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 expl:pv	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	LId=v-1
2	lidové	lidový	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	3	amod	_	_
3	pověře	pověra	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	7	obl	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	expl:pv	_	LGloss=(zvr._zájmeno/částice)
5	Jan	Jan	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	7	nsubj	_	_
6	stal	stát	AUX	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	7	cop	_	LId=stát-2|LGloss=(něco_se_přihodilo)
7	ochráncem	ochránce	NOUN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	0	root	_	_
8	mostu	most	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	7	nmod	_	_
9	a	a	CCONJ	J^-------------	_	10	cc	_	LId=a-1
10	pánem	pán	NOUN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	7	conj	_	_
11	nad	nad	ADP	RR--7----------	AdpType=Prep|Case=Ins	12	case	_	LId=nad-1
12	řekou	řeka	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	10	nmod	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	7	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is a language-specific subtype of [expl]().
There are also 1 other language-specific subtypes of `expl`: [expl:pass]().

5941 nodes (1%) are attached to their parents as `expl:pv`.

4667 instances of `expl:pv` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.09274532906918.

The following 4 pairs of parts of speech are connected with `expl:pv`: [cs-pos/VERB]()-[cs-pos/PRON]() (5661; 95% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (247; 4% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (17; 0% instances), [cs-pos/SYM]()-[cs-pos/PRON]() (16; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 expl:pv	color:blue
1	Za	za	ADP	RR--7----------	AdpType=Prep|Case=Ins	3	case	_	LId=za-1
2	tím	ten	DET	PDZS7----------	Case=Ins|Gender=Masc,Neut|Number=Sing|PronType=Dem	3	det	_	_
3	účelem	účel	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	5	obl	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pv	_	LGloss=(zvr._zájmeno/částice)
5	zavazujeme	zavazovat	VERB	VB-P---1P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 expl:pv	color:blue
1	K	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	2	case	_	LId=k-1
2	lékaři	lékař	NOUN	NNMS3-----A----	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	3	obl	_	_
3	přivede	přivést	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	nemocného	nemocný	NOUN	NNMS4-----A----	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	3	obj	_	LId=nemocný-1|LGloss=(pacient)
5	bolest	bolest	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	3	nsubj	_	_
6	nebo	nebo	CCONJ	J^-------------	_	9	cc	_	_
7	zvětšující	zvětšující	ADJ	AGFP1-----A----	Aspect=Imp|Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	9	amod	_	LDeriv=zvětšovat
8	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	expl:pv	_	LGloss=(zvr._zájmeno/částice)
9	žíly	žíla	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	5	conj	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 expl:pv	color:blue
1	Učení	učení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	5	nsubj	_	LDeriv=učit
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pv	_	LGloss=(zvr._zájmeno/částice)
3	novým	nový	ADJ	AAFP3----1A----	Case=Dat|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	4	amod	_	_
4	odpovědím	odpověď	NOUN	NNFP3-----A----	Case=Dat|Gender=Fem|Number=Plur|Polarity=Pos	1	nmod	_	_
5	závisí	záviset	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	8	case	_	_
7	jejím	jeho	DET	PSZS6FS3-------	Case=Loc|Gender=Masc,Neut|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	8	det	_	LGloss=(přivlast.)
8	uplatnění	uplatnění	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	5	obj	_	SpaceAfter=No|LDeriv=uplatnit
9	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is a language-specific subtype of [expl]().
There are also 1 other language-specific subtypes of `expl`: [expl:pass]().

68 nodes (0%) are attached to their parents as `expl:pv`.

48 instances of `expl:pv` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.83823529411765.

The following 4 pairs of parts of speech are connected with `expl:pv`: [cs-pos/VERB]()-[cs-pos/PRON]() (50; 74% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (15; 22% instances), [cs-pos/X]()-[cs-pos/PRON]() (2; 3% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 expl:pv	color:blue
1	Vykazují	vykazovat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pv	_	_
3	zde	zde	ADV	Db-------------	_	1	advmod	_	_
4	i	i	CCONJ	J^-------------	_	7	advmod:emph	_	LId=i-1
5	nakoupené	nakoupený	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	_	_
6	opční	opční	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	_	_
7	listy	list	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	1	nsubj	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 expl:pv	color:blue
1	Každou	každý	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	2	amod	_	_
2	skutečnost	skutečnost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	11	obj	_	_
3	týkající	týkající	ADJ	AGFS4-----A----	Aspect=Imp|Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	2	amod	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	expl:pv	_	_
5	vedení	vedení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	3	obj	_	_
6	účetnictví	účetnictví	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	5	nmod	_	_
7	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
8	účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	9	amod	_	LId=účetní-1
9	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	10	nsubj	_	_
10	povinny	povinný	ADJ	ACTP------A----	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short	0	root	_	_
11	zaznamenávat	zaznamenávat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	10	xcomp	_	_
12	výhradně	výhradně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	11	advmod	_	_
13	jen	jen	PART	TT-------------	_	15	advmod:emph	_	LId=jen-1
14	účetními	účetní	ADJ	AAIP7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	15	amod	_	LId=účetní-1
15	záznamy	záznam	NOUN	NNIP7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur|Polarity=Pos	11	obl	_	SpaceAfter=No
16	.	.	PUNCT	Z:-------------	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 32 33 expl:pv	color:blue
1	(4)	(4)	PUNCT	Z:-------------	_	13	punct	_	_
2	Účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	_	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	13	nsubj	_	_
4	uvedené	uvedený	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	_	_
5	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	_	LId=v-1
6	§	§	X	X@-------------	_	4	advmod	_	_
7	1	1	X	X@-------------	_	6	flat	_	_
8	odst.	odst.	X	X@-------------	_	6	flat	_	_
9	2	2	X	X@-------------	_	6	flat	_	_
10	písm.	písm.	X	X@-------------	_	6	flat	_	_
11	f)	f)	X	X@-------------	_	6	flat	_	_
12	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	13	cop	_	_
13	povinny	povinný	ADJ	ACTP------A----	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short	0	root	_	_
14	vést	vést	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	13	xcomp	_	LId=vést-1
15	účetnictví	účetnictví	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	14	obj	_	_
16	od	od	ADP	RR--2----------	AdpType=Prep|Case=Gen	18	case	_	LId=od-1
17	prvního	první	ADJ	CrIS2----------	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|NumType=Ord	18	amod	_	_
18	dne	den	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	14	obl	_	_
19	účetního	účetní	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	20	amod	_	LId=účetní-1
20	období	období	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	18	nmod	_	_
21	následujícího	následující	ADJ	AGNS2-----A----	Aspect=Imp|Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	20	amod	_	_
22	po	po	ADP	RR--6----------	AdpType=Prep|Case=Loc	23	case	_	LId=po-1
23	období	období	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	21	obl	_	SpaceAfter=No
24	,	,	PUNCT	Z:-------------	_	28	punct	_	_
25	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	26	case	_	LId=v-1
26	kterém	který	PRON	P4ZS6----------	Case=Loc|Gender=Masc,Neut|Number=Sing|PronType=Int,Rel	28	advmod	_	_
27	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	28	expl:pv	_	_
28	rozhodly	rozhodnout	VERB	VpTP---XR-AA--1	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	23	acl	_	_
29	vést	vést	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	28	xcomp	_	LId=vést-1
30	účetnictví	účetnictví	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	29	obj	_	SpaceAfter=No
31	,	,	PUNCT	Z:-------------	_	32	punct	_	_
32	nerozhodnou-li	nerozhodnou-li	X	X@-------------	_	13	advmod	_	_
33	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	32	expl:pv	_	_
34	vést	vést	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	32	xcomp	_	LId=vést-1
35	účetnictví	účetnictví	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	34	obj	_	_
36	již	již	ADV	Db-------------	_	38	advmod:emph	_	_
37	ode	od	ADP	RV--2----------	AdpType=Voc|Case=Gen	38	case	_	LId=od-1
38	dne	den	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	34	obl	_	_
39	zahájení	zahájení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	38	nmod	_	_
40	podnikání	podnikání	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	39	nmod	_	_
41	nebo	nebo	CCONJ	J^-------------	_	45	cc	_	_
42	jiné	jiný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	45	amod	_	_
43	samostatné	samostatný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	45	amod	_	_
44	výdělečné	výdělečný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	45	amod	_	_
45	činnosti	činnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	40	conj	_	SpaceAfter=No
46	,	,	PUNCT	Z:-------------	_	49	punct	_	_
47	až	až	PART	TT-------------	_	49	advmod:emph	_	LId=až-3
48	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	49	case	_	LId=do-1
49	dne	den	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	34	obl	_	_
50	ukončení	ukončení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	49	nmod	_	_
51	uvedených	uvedený	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	52	amod	_	_
52	činností	činnost	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	50	nmod	_	_
53	nebo	nebo	CCONJ	J^-------------	_	49	cc	_	ToDo=cc-without-conj
54	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	56	case	_	LId=do-1
55	posledního	poslední	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	56	amod	_	_
56	dne	den	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	49	obl	_	_
57	účetního	účetní	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	58	amod	_	LId=účetní-1
58	období	období	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	56	nmod	_	SpaceAfter=No
59	,	,	PUNCT	Z:-------------	_	63	punct	_	_
60	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	61	case	_	LId=v-1
61	kterém	který	PRON	P4ZS6----------	Case=Loc|Gender=Masc,Neut|Number=Sing|PronType=Int,Rel	63	advmod	_	_
62	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	63	expl:pv	_	_
63	rozhodly	rozhodnout	VERB	VpTP---XR-AA--1	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	58	acl	_	_
64	vedení	vedení	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Number=Sing|Polarity=Pos	66	obj	_	_
65	účetnictví	účetnictví	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	64	nmod	_	_
66	ukončit	ukončit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	63	xcomp	_	SpaceAfter=No
67	,	,	PUNCT	Z:-------------	_	69	punct	_	_
68	a	a	CCONJ	J^-------------	_	69	cc	_	LId=a-1
69	nevznikla-li	nevznikla-li	X	X@-------------	_	32	conj	_	_
70	jim	on	PRON	PPXP3--3-------	Case=Dat|Number=Plur|Person=3|PronType=Prs	69	obj	_	LId=on-1
71	povinnost	povinnost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	69	nsubj	_	_
72	vést	vést	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	71	acl	_	LId=vést-1
73	účetnictví	účetnictví	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	72	obj	_	_
74	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	75	case	_	LId=podle-2
75	§	§	X	X@-------------	_	72	advmod	_	_
76	1	1	X	X@-------------	_	75	flat	_	_
77	odst.	odst.	X	X@-------------	_	75	flat	_	_
78	2	2	X	X@-------------	_	75	flat	_	_
79	písm.	písm.	X	X@-------------	_	75	flat	_	_
80	d),	d),	X	X@-------------	_	75	flat	_	_
81	e),	e),	X	X@-------------	_	75	flat	_	_
82	g)	g)	X	X@-------------	_	75	flat	_	_
83	nebo	nebo	CCONJ	J^-------------	_	84	cc	_	_
84	h)	h)	X	X@-------------	_	75	conj	_	SpaceAfter=No
85	.	.	PUNCT	Z:-------------	_	13	punct	_	_

~~~


