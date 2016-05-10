

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

17180 nodes (1%) are attached to their parents as `expl`.

14052 instances of `expl` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.36711292200233.

The following 4 pairs of parts of speech are connected with `expl`: [cs-pos/VERB]()-[cs-pos/PRON]() (16638; 97% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (538; 3% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (3; 0% instances), [cs-pos/PROPN]()-[cs-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 expl	color:blue
1	Z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	2	case	_	LId=z-1
2	kukly	kukla	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	4	nmod	_	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	expl	_	LGloss=(zvr._zájmeno/částice)
4	vyklubal	vyklubat	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	motýl	motýl	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	4	nsubj	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 8 expl	color:blue
1	Dá	dát	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	auxpass:reflex	_	LGloss=(zvr._zájmeno/částice)
3	určit	určit	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	1	xcomp	_	_
4	nějaký	nějaký	DET	PZYS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	5	det	_	_
5	mezník	mezník	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	1	nsubjpass	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	13	punct	_	_
7	kdy	kdy	ADV	Db-------------	_	13	advmod	_	_
8	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	13	expl	_	LGloss=(zvr._zájmeno/částice)
9	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	cop	_	_
10	nevidomý	nevidomý	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	13	nsubj	_	_
11	sám	sám	PRON	PLYS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Tot	10	xcomp	_	LGloss=(samotný)
12	sebou	se	PRON	P6-X7----------	Case=Ins|PronType=Prs|Reflex=Yes	13	dobj	_	LGloss=(zvr._zájmeno/částice)
13	jistý	jistý	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	5	acl	_	SpaceAfter=No
14	?	?	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 expl	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	LId=v-1
2	lidové	lidový	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	3	amod	_	_
3	pověře	pověra	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Negative=Pos|Number=Sing	7	nmod	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	expl	_	LGloss=(zvr._zájmeno/částice)
5	Jan	Jan	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Negative=Pos|Number=Sing	7	nsubj	_	_
6	stal	stát	VERB	VpYS---XR-AA---	Gender=Masc|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	7	cop	_	LId=stát-2|LGloss=(něco_se_přihodilo)
7	ochráncem	ochránce	NOUN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Negative=Pos|Number=Sing	0	root	_	_
8	mostu	most	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	7	nmod	_	_
9	a	a	CONJ	J^-------------	_	7	cc	_	LId=a-1
10	pánem	pán	NOUN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Negative=Pos|Number=Sing	7	conj	_	_
11	nad	nad	ADP	RR--7----------	AdpType=Prep|Case=Ins	12	case	_	LId=nad-1
12	řekou	řeka	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Negative=Pos|Number=Sing	10	nmod	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	7	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is universal.

6066 nodes (1%) are attached to their parents as `expl`.

4766 instances of `expl` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.08984503791625.

The following 4 pairs of parts of speech are connected with `expl`: [cs-pos/VERB]()-[cs-pos/PRON]() (5780; 95% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (253; 4% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (17; 0% instances), [cs-pos/SYM]()-[cs-pos/PRON]() (16; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 expl	color:blue
1	Za	za	ADP	RR--7----------	AdpType=Prep|Case=Ins	3	case	_	LId=za-1
2	tím	ten	DET	PDZS7----------	Case=Ins|Gender=Masc,Neut|Number=Sing|PronType=Dem	3	det	_	_
3	účelem	účel	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Negative=Pos|Number=Sing	5	nmod	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl	_	LGloss=(zvr._zájmeno/částice)
5	zavazujeme	zavazovat	VERB	VB-P---1P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 expl	color:blue
1	Tuto	tento	DET	PDFS4----------	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	2	det	_	_
2	zásadu	zásada	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	3	dobj	_	_
3	zakotvili	zakotvit	VERB	VpMP---XR-AA---	Animacy=Anim|Aspect=Perf|Gender=Masc|Negative=Pos|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
4	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	6	case	_	LId=do-1
5	všech	všechno	PRON	PLXP2----------	Case=Gen|Number=Plur|PronType=Tot	6	nmod	_	_
6	opatření	opatření	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Plur	3	nmod	_	LDeriv=opatřit
7	týkajících	týkající	ADJ	AGNP2-----A----	Aspect=Imp|Case=Gen|Gender=Neut|Negative=Pos|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	6	amod	_	LDeriv=týkat
8	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	expl	_	LGloss=(zvr._zájmeno/částice)
9	této	tento	DET	PDFS2----------	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	10	det	_	_
10	sféry	sféra	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	7	dobj	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 expl	color:blue
1	Učení	učení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Negative=Pos|Number=Sing	5	nsubj	_	LDeriv=učit
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl	_	LGloss=(zvr._zájmeno/částice)
3	novým	nový	ADJ	AAFP3----1A----	Case=Dat|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	4	amod	_	_
4	odpovědím	odpověď	NOUN	NNFP3-----A----	Case=Dat|Gender=Fem|Negative=Pos|Number=Plur	1	nmod	_	_
5	závisí	záviset	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	8	case	_	_
7	jejím	jeho	DET	PSZS6FS3-------	Case=Loc|Gender=Masc,Neut|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	8	det	_	LGloss=(přivlast.)
8	uplatnění	uplatnění	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Negative=Pos|Number=Sing	5	dobj	_	SpaceAfter=No|LDeriv=uplatnit
9	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

113 nodes (0%) are attached to their parents as `expl`.

78 instances of `expl` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.74336283185841.

The following 4 pairs of parts of speech are connected with `expl`: [cs-pos/VERB]()-[cs-pos/PRON]() (80; 71% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (28; 25% instances), [cs-pos/X]()-[cs-pos/PRON]() (3; 3% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (2; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 expl	color:blue
1	Vykazují	vykazovat	VERB	VB-P---3P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl	_	_
3	zde	zde	ADV	Db-------------	_	1	advmod	_	_
4	i	i	CONJ	J^-------------	_	7	advmod:emph	_	LId=i-1
5	nakoupené	nakoupený	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	7	amod	_	_
6	opční	opční	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	7	amod	_	_
7	listy	list	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Plur	1	nsubj	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 expl	color:blue
1	Každou	každý	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	2	amod	_	_
2	skutečnost	skutečnost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	11	dobj	_	_
3	týkající	týkající	ADJ	AGFS4-----A----	Aspect=Imp|Case=Acc|Gender=Fem|Negative=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	2	amod	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	expl	_	_
5	vedení	vedení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	3	dobj	_	_
6	účetnictví	účetnictví	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	5	nmod	_	_
7	jsou	být	VERB	VB-P---3P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
8	účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	9	amod	_	LId=účetní-1
9	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Plur	10	nsubj	_	_
10	povinny	povinný	ADJ	ACTP------A----	Animacy=Inan|Gender=Fem,Masc|Negative=Pos|Number=Plur|Variant=Short	0	root	_	_
11	zaznamenávat	zaznamenávat	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	10	xcomp	_	_
12	výhradně	výhradně	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	11	advmod	_	_
13	jen	jen	PART	TT-------------	_	15	advmod:emph	_	LId=jen-1
14	účetními	účetní	ADJ	AAIP7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	15	amod	_	LId=účetní-1
15	záznamy	záznam	NOUN	NNIP7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Negative=Pos|Number=Plur	11	nmod	_	SpaceAfter=No
16	.	.	PUNCT	Z:-------------	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 28 expl	color:blue
1	(4)	(4)	PUNCT	Z:-------------	_	8	punct	_	_
2	Účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	3	amod	_	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Plur	8	nsubj	_	_
4	uvedené	uvedený	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	3	amod	_	_
5	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	_	LId=v-1
6	§_1_odst._2_písm._f)	§_1_odst._2_písm._f)	X	X@-------------	_	4	advmod	_	_
7	jsou	být	VERB	VB-P---3P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
8	povinny	povinný	ADJ	ACTP------A----	Animacy=Inan|Gender=Fem,Masc|Negative=Pos|Number=Plur|Variant=Short	0	root	_	_
9	vést	vést	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	8	xcomp	_	LId=vést-1
10	účetnictví	účetnictví	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	9	dobj	_	_
11	od	od	ADP	RR--2----------	AdpType=Prep|Case=Gen	13	case	_	LId=od-1
12	prvního	první	ADJ	CrIS2----------	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|NumType=Ord	13	amod	_	_
13	dne	den	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	9	nmod	_	_
14	účetního	účetní	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Negative=Pos|Number=Sing	15	amod	_	LId=účetní-1
15	období	období	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	13	nmod	_	_
16	následujícího	následující	ADJ	AGNS2-----A----	Aspect=Imp|Case=Gen|Gender=Neut|Negative=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	15	amod	_	_
17	po	po	ADP	RR--6----------	AdpType=Prep|Case=Loc	18	case	_	LId=po-1
18	období	období	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Negative=Pos|Number=Sing	16	nmod	_	SpaceAfter=No
19	,	,	PUNCT	Z:-------------	_	23	punct	_	_
20	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	21	case	_	LId=v-1
21	kterém	který	PRON	P4ZS6----------	Case=Loc|Gender=Masc,Neut|Number=Sing|PronType=Int,Rel	23	advmod	_	_
22	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	23	expl	_	_
23	rozhodly	rozhodnout	VERB	VpTP---XR-AA--1	Animacy=Inan|Gender=Fem,Masc|Negative=Pos|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	18	acl	_	_
24	vést	vést	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	23	xcomp	_	LId=vést-1
25	účetnictví	účetnictví	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	24	dobj	_	SpaceAfter=No
26	,	,	PUNCT	Z:-------------	_	27	punct	_	_
27	nerozhodnou-li	nerozhodnou-li	X	X@-------------	_	8	advmod	_	_
28	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	27	expl	_	_
29	vést	vést	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	27	xcomp	_	LId=vést-1
30	účetnictví	účetnictví	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Negative=Pos|Number=Sing	29	dobj	_	_
31	již	již	ADV	Db-------------	_	33	advmod:emph	_	_
32	ode	od	ADP	RV--2----------	AdpType=Voc|Case=Gen	33	case	_	LId=od-1
33	dne	den	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	29	nmod	_	_
34	zahájení	zahájení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	33	nmod	_	_
35	podnikání	podnikání	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	34	nmod	_	_
36	nebo	nebo	CONJ	J^-------------	_	35	cc	_	_
37	jiné	jiný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	40	amod	_	_
38	samostatné	samostatný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	40	amod	_	_
39	výdělečné	výdělečný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	40	amod	_	_
40	činnosti	činnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	35	conj	_	SpaceAfter=No
41	,	,	PUNCT	Z:-------------	_	44	punct	_	_
42	až	až	PART	TT-------------	_	44	advmod:emph	_	LId=až-3
43	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	44	case	_	LId=do-1
44	dne	den	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	29	nmod	_	_
45	ukončení	ukončení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	44	nmod	_	_
46	uvedených	uvedený	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	47	amod	_	_
47	činností	činnost	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Plur	45	nmod	_	_
48	nebo	nebo	CONJ	J^-------------	_	44	cc	_	_
49	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	51	case	_	LId=do-1
50	posledního	poslední	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	51	amod	_	_
51	dne	den	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	44	nmod	_	_
52	účetního	účetní	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Negative=Pos|Number=Sing	53	amod	_	LId=účetní-1
53	období	období	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	51	nmod	_	SpaceAfter=No
54	,	,	PUNCT	Z:-------------	_	58	punct	_	_
55	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	56	case	_	LId=v-1
56	kterém	který	PRON	P4ZS6----------	Case=Loc|Gender=Masc,Neut|Number=Sing|PronType=Int,Rel	58	advmod	_	_
57	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	58	expl	_	_
58	rozhodly	rozhodnout	VERB	VpTP---XR-AA--1	Animacy=Inan|Gender=Fem,Masc|Negative=Pos|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	53	acl	_	_
59	vedení	vedení	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Negative=Pos|Number=Sing	61	dobj	_	_
60	účetnictví	účetnictví	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	59	nmod	_	_
61	ukončit	ukončit	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	58	xcomp	_	SpaceAfter=No
62	,	,	PUNCT	Z:-------------	_	27	punct	_	_
63	a	a	CONJ	J^-------------	_	27	cc	_	LId=a-1
64	nevznikla-li	nevznikla-li	X	X@-------------	_	27	conj	_	_
65	jim	on	PRON	PPXP3--3-------	Case=Dat|Number=Plur|Person=3|PronType=Prs	64	dobj	_	LId=on-1
66	povinnost	povinnost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	64	nsubj	_	_
67	vést	vést	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	66	acl	_	LId=vést-1
68	účetnictví	účetnictví	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	67	dobj	_	_
69	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	70	case	_	LId=podle-2
70	§_1_odst._2_písm._d),_e),_g)	§_1_odst._2_písm._d),_e),_g)	X	X@-------------	_	67	advmod	_	_
71	nebo	nebo	CONJ	J^-------------	_	70	cc	_	_
72	h)	h)	X	X@-------------	_	70	conj	_	SpaceAfter=No
73	.	.	PUNCT	Z:-------------	_	8	punct	_	_

~~~


