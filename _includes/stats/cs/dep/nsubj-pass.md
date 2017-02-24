

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is a language-specific subtype of [nsubj]().

6832 nodes (1%) are attached to their parents as `nsubj:pass`.

4364 instances of `nsubj:pass` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.73741217798595.

The following 15 pairs of parts of speech are connected with `nsubj:pass`: [cs-pos/ADJ]()-[cs-pos/NOUN]() (3111; 46% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (2306; 34% instances), [cs-pos/ADJ]()-[cs-pos/DET]() (440; 6% instances), [cs-pos/VERB]()-[cs-pos/DET]() (313; 5% instances), [cs-pos/ADJ]()-[cs-pos/PROPN]() (287; 4% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (84; 1% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (83; 1% instances), [cs-pos/ADJ]()-[cs-pos/NUM]() (55; 1% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (35; 1% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (35; 1% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (28; 0% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (23; 0% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (18; 0% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (13; 0% instances), [cs-pos/NOUN]()-[cs-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nsubj:pass	color:blue
1	Rozdíl	rozdíl	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	6	nsubj:pass	_	_
2	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	4	case	_	LId=do-1
3	regulované	regulovaný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	_	LDeriv=regulovat
4	ceny	cena	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	1	nmod	_	LId=cena-1|LGloss=(v_penězích,_naturální,_nevyčíslitelná,...)
5	byl	být	AUX	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	6	aux:pass	_	_
6	hrazen	hrazený	ADJ	VsYS---XX-AP---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
7	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	8	case	_	LId=z-1
8	dotací	dotace	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	6	obl	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nsubj:pass	color:blue
1	Hodnota	hodnota	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	7	nsubj:pass	_	_
2	thajského	thajský	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	3	amod	_	_
3	vývozu	vývoz	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	1	nmod	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	expl:pass	_	LGloss=(zvr._zájmeno/částice)
5	každým	každý	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	6	amod	_	_
6	rokem	rok	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	7	obl	_	_
7	zvyšuje	zvyšovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	9	case	_	LId=o-1
9	více	hodně	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	7	advmod	_	_
10	než	než	SCONJ	J,-------------	_	11	mark	_	LId=než-2
11	12	12	NUM	C=-------------	NumForm=Digit|NumType=Card	9	obl	_	_
12	%	%	SYM	Z:-------------	_	9	nmod	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 nsubj:pass	color:blue
1	Proto	proto	CCONJ	J^-------------	_	2	cc	_	LId=proto-1|LGloss=(proto;_a_proto,_ale_proto,...)
2	musí	muset	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	odběratel	odběratel	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	2	nsubj	_	_
4	platit	platit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	2	xcomp	_	_
5	tolik	tolik	DET	Ca--4----------	Case=Acc|NumType=Card|PronType=Dem	4	obj	_	SpaceAfter=No|LId=tolik-1
6	,	,	PUNCT	Z:-------------	_	9	punct	_	_
7	kolik	kolik	DET	C?--1----------	Case=Nom|NumType=Card|PronType=Int,Rel	9	nsubj:pass	_	_
8	bude	být	AUX	VB-S---3F-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	9	aux:pass	_	_
9	stanoveno	stanovený	ADJ	VsNS---XX-AP---	Aspect=Perf|Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	5	amod	_	SpaceAfter=No|LGloss=(určit)
10	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is a language-specific subtype of [nsubj]().

3400 nodes (1%) are attached to their parents as `nsubj:pass`.

1761 instances of `nsubj:pass` (52%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.275.

The following 18 pairs of parts of speech are connected with `nsubj:pass`: [cs-pos/ADJ]()-[cs-pos/NOUN]() (1698; 50% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (1249; 37% instances), [cs-pos/ADJ]()-[cs-pos/DET]() (173; 5% instances), [cs-pos/VERB]()-[cs-pos/DET]() (75; 2% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (38; 1% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (33; 1% instances), [cs-pos/ADJ]()-[cs-pos/NUM]() (24; 1% instances), [cs-pos/ADJ]()-[cs-pos/PROPN]() (24; 1% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (19; 1% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (15; 0% instances), [cs-pos/ADJ]()-[cs-pos/SYM]() (12; 0% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (12; 0% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (10; 0% instances), [cs-pos/VERB]()-[cs-pos/SYM]() (6; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (5; 0% instances), [cs-pos/SYM]()-[cs-pos/NOUN]() (5; 0% instances), [cs-pos/VERB]()-[cs-pos/CCONJ]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Úkol	úkol	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	2	nsubj:pass	_	_
2	rozpracován	rozpracovaný	ADJ	VsYS---XX-AP---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
3	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	_	LId=v-1
4	rámci	rámec	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	3	fixed	_	_
5	KRBu	KRB	PROPN	NNIS2-----A----	Abbr=Yes|Animacy=Inan|Case=Gen|Gender=Masc|NameType=Com|Number=Sing|Polarity=Pos	2	obl	_	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 nsubj:pass	color:blue
1	Provádí	provádět	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pass	_	LGloss=(zvr._zájmeno/částice)
3	přípravné	přípravný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	4	amod	_	_
4	práce	práce	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	1	nsubj:pass	_	SpaceAfter=No|LGloss=(jako_činnost_i_místo)
5	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nsubj:pass	color:blue
1	To	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	7	nsubj:pass	_	_
2	není	být	AUX	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux:pass	_	_
3	vždycky	vždycky	ADV	Db-------------	_	7	advmod	_	_
4	a	a	CCONJ	J^-------------	_	5	cc	_	LId=a-1
5	všude	všude	ADV	Db-------------	PronType=Tot	3	conj	_	_
6	správně	správně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	7	advmod	_	LGloss=(podle_něj._měřítek;_př._chlap,_míra,...)|LDeriv=správný
7	pochopeno	pochopený	ADJ	VsNS---XX-AP---	Aspect=Perf|Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	7	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is a language-specific subtype of [nsubj]().

262 nodes (1%) are attached to their parents as `nsubj:pass`.

154 instances of `nsubj:pass` (59%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.68702290076336.

The following 4 pairs of parts of speech are connected with `nsubj:pass`: [cs-pos/VERB]()-[cs-pos/NOUN]() (235; 90% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (25; 10% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (1; 0% instances).


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


