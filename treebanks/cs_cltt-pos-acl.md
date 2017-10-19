

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

635 nodes (2%) are attached to their parents as `acl`.

635 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.77795275590551.

The following 11 pairs of parts of speech are connected with `acl`: [-pos/NOUN]()-[-pos/VERB]() (506; 80% instances), [-pos/NOUN]()-[-pos/NOUN]() (63; 10% instances), [-pos/NOUN]()-[-pos/ADJ]() (39; 6% instances), [-pos/PRON]()-[-pos/VERB]() (16; 3% instances), [-pos/NOUN]()-[-pos/PRON]() (4; 1% instances), [-pos/NOUN]()-[-pos/ADV]() (2; 0% instances), [-pos/NOUN]()-[-pos/DET]() (1; 0% instances), [-pos/PRON]()-[-pos/ADJ]() (1; 0% instances), [-pos/PRON]()-[-pos/NOUN]() (1; 0% instances), [-pos/VERB]()-[-pos/ADJ]() (1; 0% instances), [-pos/X]()-[-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 acl	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	_	LId=v-1
2	případě	případ	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	9	obl	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	6	punct	_	_
4	že	že	SCONJ	J,-------------	_	6	mark	_	_
5	je	on	PRON	PPXP4--3-------	Case=Acc|Number=Plur|Person=3|PronType=Prs	7	obj	_	LId=on-1
6	nelze	lze	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl	_	_
7	přiřadit	přiřadit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	6	csubj	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	6	punct	_	_
9	uvedou	uvést	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	9	expl:pass	_	_
11	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	13	case	_	LId=v-1
12	provozní	provozní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	13	amod	_	_
13	činnosti	činnost	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	9	obl	_	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 acl	color:blue
1	Účetním	účetní	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	2	amod	_	LId=účetní-1
2	záznamem	záznam	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	4	obj	_	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	expl:pass	_	_
4	rozumí	rozumět	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	data	datum	NOUN	NNNP1-----A----	Case=Nom|Gender=Neut|Number=Plur|Polarity=Pos	4	nsubj:pass	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	9	punct	_	_
7	která	který	PRON	P4NP1----------	Case=Nom|Gender=Neut|Number=Plur|PronType=Int,Rel	9	nsubj	_	_
8	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	_
9	záznamem	záznam	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	5	acl	_	_
10	veškerých	veškerý	PRON	PLXP2----------	Case=Gen|Number=Plur|PronType=Tot	11	nmod	_	_
11	skutečností	skutečnost	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	9	nmod	_	ToDo=nmod
12	týkajících	týkající	ADJ	AGFP2-----A----	Aspect=Imp|Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	11	amod	_	_
13	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	12	expl:pv	_	_
14	vedení	vedení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	12	obj	_	_
15	účetnictví	účetnictví	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	14	nmod	_	SpaceAfter=No
16	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 acl	color:blue
1	Tyto	tento	DET	PDFP1----------	Case=Nom|Gender=Fem|Number=Plur|PronType=Dem	2	det	_	_
2	povinnosti	povinnost	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	3	obj	_	_
3	mají	mít	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	5	amod	_	LId=účetní-1
5	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	3	nsubj	_	_
6	po	po	ADP	RR--4----------	AdpType=Prep|Case=Acc	7	case	_	LId=po-1
7	dobu	doba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	3	obl	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	12	punct	_	_
9	po	po	ADP	RR--4----------	AdpType=Prep|Case=Acc	10	case	_	LId=po-1
10	kterou	který	PRON	P4FS4----------	Case=Acc|Gender=Fem|Number=Sing|PronType=Int,Rel	12	advmod	_	_
11	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	_	_
12	povinny	povinný	ADJ	ACTP------A----	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short	7	acl	_	_
13	vést	vést	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	12	xcomp	_	LId=vést-1
14	nebo	nebo	CCONJ	J^-------------	_	15	cc	_	_
15	uschovávat	uschovávat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	13	conj	_	_
16	uvedené	uvedený	ADJ	AAIP4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	18	amod	_	_
17	účetní	účetní	ADJ	AAIP4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	18	amod	_	LId=účetní-1
18	záznamy	záznam	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	13	obj	_	SpaceAfter=No
19	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


