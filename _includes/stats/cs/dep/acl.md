

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

22828 nodes (2%) are attached to their parents as `acl`.

22682 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.70093744524268.

The following 41 pairs of parts of speech are connected with `acl`: [cs-pos/NOUN]()-[cs-pos/VERB]() (16176; 71% instances), [cs-pos/PRON]()-[cs-pos/VERB]() (2941; 13% instances), [cs-pos/PROPN]()-[cs-pos/VERB]() (1541; 7% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (740; 3% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (531; 2% instances), [cs-pos/PRON]()-[cs-pos/ADJ]() (186; 1% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (145; 1% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (103; 0% instances), [cs-pos/PRON]()-[cs-pos/NOUN]() (88; 0% instances), [cs-pos/DET]()-[cs-pos/VERB]() (84; 0% instances), [cs-pos/PROPN]()-[cs-pos/NOUN]() (79; 0% instances), [cs-pos/NUM]()-[cs-pos/VERB]() (42; 0% instances), [cs-pos/PROPN]()-[cs-pos/ADJ]() (26; 0% instances), [cs-pos/NOUN]()-[cs-pos/NUM]() (24; 0% instances), [cs-pos/PRON]()-[cs-pos/PRON]() (24; 0% instances), [cs-pos/VERB]()-[cs-pos/VERB]() (20; 0% instances), [cs-pos/ADV]()-[cs-pos/VERB]() (11; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADV]() (10; 0% instances), [cs-pos/NOUN]()-[cs-pos/DET]() (9; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (7; 0% instances), [cs-pos/PRON]()-[cs-pos/ADV]() (5; 0% instances), [cs-pos/NOUN]()-[cs-pos/PART]() (4; 0% instances), [cs-pos/PRON]()-[cs-pos/PART]() (4; 0% instances), [cs-pos/DET]()-[cs-pos/ADJ]() (3; 0% instances), [cs-pos/NOUN]()-[cs-pos/PROPN]() (3; 0% instances), [cs-pos/ADP]()-[cs-pos/VERB]() (2; 0% instances), [cs-pos/DET]()-[cs-pos/NOUN]() (2; 0% instances), [cs-pos/NUM]()-[cs-pos/ADJ]() (2; 0% instances), [cs-pos/NUM]()-[cs-pos/NOUN]() (2; 0% instances), [cs-pos/PRON]()-[cs-pos/NUM]() (2; 0% instances), [cs-pos/PROPN]()-[cs-pos/NUM]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/CONJ]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/CONJ]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/DET]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/PART]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/PART]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/PROPN]() (1; 0% instances), [cs-pos/PROPN]()-[cs-pos/PROPN]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 acl	color:blue
1	Firma	firma	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	8	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	6	punct	_	_
3	která	který	PRON	P4FS1----------	Case=Nom|Gender=Fem|Number=Sing|PronType=Int,Rel	6	nsubj	_	_
4	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	6	nmod	_	LGloss=(zvr._zájmeno/částice)
5	je	on	PRON	PPXP4--3-------	Case=Acc|Number=Plur|Person=3|PronType=Prs	6	dobj	_	LId=on-1|LGloss=(oni/ono)
6	vyžádá	vyžádat	VERB	VB-S---3P-AA---	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	6	punct	_	_
8	platí	platit	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	pouze	pouze	ADV	Db-------------	_	10	advmod:emph	_	_
10	náklady	náklad	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Plur	8	dobj	_	_
11	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	13	case	_	LId=na-1
12	jejich	jeho	DET	PSXXXXP3-------	Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs	13	det	_	LGloss=(přivlast.)
13	pobyt	pobyt	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	10	nmod	_	SpaceAfter=No|LGloss=(př._místo_pobytu)
14	.	.	PUNCT	Z:-------------	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl	color:blue
1	Je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
2	to	ten	PRON	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	nsubj	_	_
3	něco	něco	PRON	PZ--1----------	Case=Nom|PronType=Ind	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	7	punct	_	_
5	co	co	PRON	PQ--4----------	Animacy=Inan|Case=Acc|PronType=Int,Rel	7	dobj	_	LId=co-1
6	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	7	expl	_	LGloss=(zvr._zájmeno/částice)
7	neseme	nést	VERB	VB-P---1P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl	_	_
8	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	9	case	_	LId=v-1
9	podvědomí	podvědomí	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Negative=Pos|Number=Sing	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 acl	color:blue
1	K	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	2	case	_	LId=k-1
2	tomu	ten	PRON	PDZS3----------	Case=Dat|Gender=Masc,Neut|Number=Sing|PronType=Dem	5	advmod	_	_
3	by	být	AUX	Vc-------------	Mood=Cnd|VerbForm=Fin	4	aux	_	_
4	měl	mít	VERB	VpYS---XR-AA---	Gender=Masc|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	pomoci	pomoci	VERB	Vf--------A---1	Negative=Pos|VerbForm=Inf	4	xcomp	_	_
6	Mucha	Mucha	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Negative=Pos|Number=Sing	4	nsubj	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	12	punct	_	_
8	který	který	PRON	P4YS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	12	nsubj	_	_
9	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	12	expl	_	LGloss=(zvr._zájmeno/částice)
10	po	po	ADP	RR--6----------	AdpType=Prep|Case=Loc	11	case	_	LId=po-1
11	letech	rok	NOUN	NNNP6-----A----	Case=Loc|Gender=Neut|Negative=Pos|Number=Plur	12	nmod	_	_
12	vrátil	vrátit	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	6	acl	_	_
13	ze	z	ADP	RV--2----------	AdpType=Voc|Case=Gen	14	case	_	LId=z-1
14	Zlína	Zlín	PROPN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|NameType=Geo|Negative=Pos|Number=Sing	12	nmod	_	SpaceAfter=No
15	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


