

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

381 nodes (0%) are attached to their parents as `discourse`.

328 instances of `discourse` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.14435695538058.

The following 19 pairs of parts of speech are connected with `discourse`: [cs-pos/VERB]()-[cs-pos/PRON]() (250; 66% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (29; 8% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (25; 7% instances), [cs-pos/PRON]()-[cs-pos/PRON]() (23; 6% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (18; 5% instances), [cs-pos/VERB]()-[cs-pos/CONJ]() (11; 3% instances), [cs-pos/VERB]()-[cs-pos/PART]() (4; 1% instances), [cs-pos/VERB]()-[cs-pos/SCONJ]() (4; 1% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (2; 1% instances), [cs-pos/ADJ]()-[cs-pos/CONJ]() (2; 1% instances), [cs-pos/NOUN]()-[cs-pos/ADV]() (2; 1% instances), [cs-pos/NOUN]()-[cs-pos/CONJ]() (2; 1% instances), [cs-pos/NOUN]()-[cs-pos/SCONJ]() (2; 1% instances), [cs-pos/NUM]()-[cs-pos/PRON]() (2; 1% instances), [cs-pos/ADV]()-[cs-pos/PRON]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/INTJ]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/CONJ]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	To	ten	PRON	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	4	discourse	_	_
2	byste	být	AUX	Vc-P---2-------	Mood=Cnd|Number=Plur|Person=2|VerbForm=Fin	4	aux	_	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	expl	_	LGloss=(zvr._zájmeno/částice)
4	divil	divit	VERB	VpYS---XR-AA---	Aspect=Imp|Gender=Masc|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
5	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 discourse	color:blue
1	Tak	tak	ADV	Db-------------	_	6	discourse	_	LId=tak-3
2	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	3	case	_	LId=na-1
3	to	ten	PRON	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	6	dobj	_	_
4	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	6	expl	_	LGloss=(zvr._zájmeno/částice)
5	ještě	ještě	ADV	Db-------------	_	6	advmod	_	_
6	počkáte	počkat	VERB	VB-P---2P-AA---	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	6	punct	_	_
8	tam	tam	ADV	Db-------------	_	10	advmod	_	_
9	mě	já	PRON	PH-S4--1-------	Case=Acc|Number=Sing|Person=1|PronType=Prs|Variant=Short	10	dobj	_	_
10	uvidíte	uvidět	VERB	VB-P---2P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	_
11	tak	tak	ADV	Db-------------	_	13	advmod:emph	_	LId=tak-3
12	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	13	case	_	LId=v-1
13	padesáti	padesát	NUM	Cn-P6----------	Case=Loc|Number=Plur|NumForm=Word|NumType=Card	10	advmod	_	SpaceAfter=No|LNumValue=50
14	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 discourse	color:blue
1	Co	co	PRON	PQ--1----------	Animacy=Inan|Case=Nom|PronType=Int,Rel	4	nsubj	_	LId=co-1
2	to	ten	PRON	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	4	discourse	_	_
3	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	nedisciplinovanost	disciplinovanost	NOUN	NNFS1-----N----	Case=Nom|Gender=Fem|Negative=Neg|Number=Sing	0	root	_	LDeriv=disciplinovaný
5	po	po	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	_	LId=po-1
6	siréně	siréna	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Negative=Pos|Number=Sing	4	nmod	_	_

~~~


