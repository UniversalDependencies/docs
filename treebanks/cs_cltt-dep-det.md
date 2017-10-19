

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.
There are 1 language-specific subtypes of `det`: [det:nummod]().

593 nodes (2%) are attached to their parents as `det`.

592 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.20067453625632.

The following 2 pairs of parts of speech are connected with `det`: [-pos/NOUN]()-[-pos/DET]() (592; 100% instances), [-pos/ADJ]()-[-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
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
11	vlastníkem	vlastník	NOUN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	10	obj	_	_
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


