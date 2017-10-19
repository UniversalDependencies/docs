

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is a language-specific subtype of [nsubj]().

384 nodes (1%) are attached to their parents as `nsubj:pass`.

224 instances of `nsubj:pass` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.25.

The following 4 pairs of parts of speech are connected with `nsubj:pass`: [-pos/VERB]()-[-pos/NOUN]() (348; 91% instances), [-pos/VERB]()-[-pos/PRON]() (32; 8% instances), [-pos/VERB]()-[-pos/ADV]() (3; 1% instances), [-pos/NOUN]()-[-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	Zřizovací	zřizovací	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	2	amod	_	_
2	výdaje	výdaj	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	4	nsubj:pass	_	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	expl:pass	_	_
4	odpisují	odpisovat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	nejvýše	vysoko	ADV	Dg-------2A---1	Degree=Cmp|Polarity=Pos	4	advmod	_	LId=vysoko-1
6	po	po	ADP	RR--4----------	AdpType=Prep|Case=Acc	7	case	_	LId=po-1
7	dobu	doba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	4	obl	_	_
8	pěti	pět	NUM	Cn-P2----------	Case=Gen|Number=Plur|NumForm=Word|NumType=Card	9	nummod	_	LId=pět-1
9	let	rok	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 nsubj:pass	color:blue
1	Účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	2	amod	_	LId=účetní-1
2	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	4	nsubj	_	_
3	dále	dále	ADV	Db------------1	_	4	advmod	_	LId=dále-3
4	uvede	uvést	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	informace	informace	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	4	obj	_	_
6	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	_	LId=o-1
7	druzích	druh	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur|Polarity=Pos	5	nmod	_	LId=druh-1
8	zvířat	zvíře	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	7	nmod	_	SpaceAfter=No
9	,	,	PUNCT	Z:-------------	_	12	punct	_	_
10	která	který	PRON	P4NP1----------	Case=Nom|Gender=Neut|Number=Plur|PronType=Int,Rel	12	nsubj:pass	_	_
11	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	12	aux:pass	_	_
12	vykazována	vykazovat	VERB	VsQW---XX-AP---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	8	acl	_	_
13	jako	jako	SCONJ	J,-------------	_	16	mark	_	_
14	dlouhodobý	dlouhodobý	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	16	amod	_	_
15	hmotný	hmotný	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	16	amod	_	_
16	majetek	majetek	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	10	xcomp	_	_
17	a	a	CCONJ	J^-------------	_	18	cc	_	LId=a-1
18	zásoby	zásoba	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	16	conj	_	SpaceAfter=No
19	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 nsubj:pass	color:blue
1	(1)	(1)	PUNCT	Z:-------------	_	9	punct	_	_
2	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	_	LId=v-1
3	konsolidovaném	konsolidovaný	ADJ	AAIS6----1A----	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	4	amod	_	_
4	výkazu	výkaz	NOUN	NNIS6-----A---1	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	9	obl	_	_
5	zisku	zisk	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	4	nmod	_	_
6	a	a	CCONJ	J^-------------	_	7	cc	_	LId=a-1
7	ztráty	ztráta	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	5	conj	_	_
8	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	9	expl:pass	_	_
9	uvádí	uvádět	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	výše	vysoko	ADV	Dg-------2A---1	Degree=Cmp|Polarity=Pos	9	nsubj:pass	_	LId=vysoko-1
11	nákladů	náklad	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	10	obl	_	_
12	a	a	CCONJ	J^-------------	_	13	cc	_	LId=a-1
13	výnosů	výnos	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	11	conj	_	_
14	odděleně	odděleně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	9	advmod	_	_
15	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	18	case	_	LId=za-1
16	běžné	běžný	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	18	amod	_	_
17	účetní	účetní	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	18	amod	_	LId=účetní-1
18	období	období	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	11	nmod	_	_
19	a	a	CCONJ	J^-------------	_	22	cc	_	LId=a-1
20	minulé	minulý	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	22	amod	_	_
21	účetní	účetní	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	22	amod	_	LId=účetní-1
22	období	období	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	18	conj	_	SpaceAfter=No
23	.	.	PUNCT	Z:-------------	_	9	punct	_	_

~~~


