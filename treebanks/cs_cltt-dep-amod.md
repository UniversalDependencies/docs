

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

6084 nodes (16%) are attached to their parents as `amod`.

5411 instances of `amod` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33119658119658.

The following 6 pairs of parts of speech are connected with `amod`: [-pos/NOUN]()-[-pos/ADJ]() (6070; 100% instances), [-pos/ADJ]()-[-pos/ADJ]() (6; 0% instances), [-pos/NOUN]()-[-pos/PRON]() (4; 0% instances), [-pos/VERB]()-[-pos/ADJ]() (2; 0% instances), [-pos/ADV]()-[-pos/ADJ]() (1; 0% instances), [-pos/X]()-[-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	OBSAHOVÉ	obsahový	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	2	amod	_	_
2	VYMEZENÍ	vymezení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	0	root	_	_
3	NĚKTERÝCH	některý	DET	PZXP2----------	Case=Gen|Number=Plur|PronType=Ind	4	det	_	_
4	POLOŽEK	položka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	2	nmod	_	_
5	ROZVAHY	rozvaha	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	4	nmod	_	_
6	(	(	PUNCT	Z:-------------	_	7	punct	_	SpaceAfter=No
7	BILANCE	bilance	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	5	appos	_	SpaceAfter=No
8	)	)	PUNCT	Z:-------------	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 27 amod	color:blue
1	2	2	NUM	C}-------------	NumForm=Roman|NumType=Card	33	obl	_	SpaceAfter=No
2	.	.	PUNCT	Z:-------------	_	1	punct	_	_
3	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	_	LId=v-1
4	případech	případ	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur|Polarity=Pos	33	obl	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	10	punct	_	_
6	kdy	kdy	ADV	Db-------------	_	10	advmod	_	_
7	byl	být	AUX	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	10	aux:pass	_	_
8	projekt	projekt	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	10	nsubj:pass	_	_
9	přeměny	přeměna	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	8	nmod	_	_
10	vypracován	vypracovat	VERB	VsYS---XX-AP---	Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	4	acl	_	_
11	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	12	case	_	LId=podle-2
12	zákona	zákona	X	X@-------------	_	10	advmod	_	_
13	č.	č.	X	X@-------------	_	12	flat	_	_
14	125/2008	125/2008	X	X@-------------	_	12	flat	_	_
15	Sb.	Sb.	X	X@-------------	_	12	flat	_	SpaceAfter=No
16	,	,	PUNCT	Z:-------------	_	18	punct	_	_
17	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	18	case	_	LId=o-1
18	přeměnách	přeměna	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur|Polarity=Pos	12	nmod	_	ToDo=nmod
19	obchodních	obchodní	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	20	amod	_	_
20	společností	společnost	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	18	nmod	_	_
21	a	a	CCONJ	J^-------------	_	22	cc	_	LId=a-1
22	družstev	družstvo	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	20	conj	_	SpaceAfter=No
23	,	,	PUNCT	Z:-------------	_	25	punct	_	_
24	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	25	case	_	LId=v-1
25	znění	znění	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	12	nmod	_	ToDo=nmod
26	účinném	účinný	ADJ	AANS6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	25	amod	_	_
27	do	do	ADJ	A2--------A----	Hyph=Yes|Polarity=Pos	26	amod	_	LId=do-7
28	31	31	NUM	C}-------------	NumForm=Roman|NumType=Card	30	nummod	_	SpaceAfter=No
29	.	.	PUNCT	Z:-------------	_	28	punct	_	_
30	prosince	prosinec	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	27	obl	_	_
31	2011	2011	NUM	C}-------------	NumForm=Roman|NumType=Card	30	nummod	_	SpaceAfter=No
32	,	,	PUNCT	Z:-------------	_	10	punct	_	_
33	postupuje	postupovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
34	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	33	expl:pass	_	_
35	při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	36	case	_	LId=při-1
36	účtování	účtování	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	33	obl	_	_
37	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	38	case	_	LId=o-1
38	přeměně	přeměna	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	36	nmod	_	_
39	společnosti	společnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	38	nmod	_	_
40	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	41	case	_	LId=podle-2
41	vyhlášky	vyhlášky	X	X@-------------	_	33	advmod	_	_
42	č.	č.	X	X@-------------	_	41	flat	_	_
43	500/2002	500/2002	X	X@-------------	_	41	flat	_	_
44	Sb.	Sb.	X	X@-------------	_	41	flat	_	SpaceAfter=No
45	,	,	PUNCT	Z:-------------	_	47	punct	_	_
46	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	47	case	_	LId=v-1
47	znění	znění	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	41	nmod	_	ToDo=nmod
48	účinném	účinný	ADJ	AANS6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	47	amod	_	_
49	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	50	case	_	LId=do-1
50	dne	den	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	48	obl	_	_
51	nabytí	nabytí	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	50	nmod	_	_
52	účinnosti	účinnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	51	nmod	_	_
53	této	tento	DET	PDFS2----------	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	54	det	_	_
54	vyhlášky	vyhláška	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	52	nmod	_	SpaceAfter=No
55	.	.	PUNCT	Z:-------------	_	33	punct	_	_

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
10	všechny	všechen	PRON	PLFP4----------	Case=Acc|Gender=Fem|Number=Plur|PronType=Tot	11	nmod	_	_
11	informace	informace	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	8	obj	_	_
12	účetní	účetní	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	13	amod	_	LId=účetní-1
13	závěrky	závěrka	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	11	nmod	_	_
14	i	i	CCONJ	J^-------------	_	16	cc	_	LId=i-1
15	výroční	výroční	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	16	amod	_	_
16	zprávy	zpráva	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	11	conj	_	_
17	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	19	case	_	LId=s-1
18	výjimkou	výjimka	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	17	fixed	_	_
19	těch	ten	PRON	PDXP2----------	Case=Gen|Number=Plur|PronType=Dem	11	amod	_	SpaceAfter=No
20	,	,	PUNCT	Z:-------------	_	24	punct	_	_
21	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	22	case	_	LId=na-1
22	které	který	PRON	P4YP4----------	Case=Acc|Gender=Masc|Number=Plur|PronType=Int,Rel	24	obj	_	_
23	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	24	expl:pv	_	_
24	vztahuje	vztahovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	19	acl	_	_
25	utajení	utajení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	24	nsubj	_	_
26	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	29	case	_	LId=podle-2
27	zvláštního	zvláštní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	29	amod	_	_
28	právního	právní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	29	amod	_	_
29	předpisu	předpis	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	25	nmod	_	SpaceAfter=No
30	.	.	PUNCT	Z:-------------	_	8	punct	_	_

~~~


