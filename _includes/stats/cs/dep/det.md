

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.
There are 2 language-specific subtypes of `det`: [det:numgov](), [det:nummod]().

26231 nodes (2%) are attached to their parents as `det`.

26028 instances of `det` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33155426785102.

The following 4 pairs of parts of speech are connected with `det`: [cs-pos/NOUN]()-[cs-pos/DET]() (25975; 99% instances), [cs-pos/PROPN]()-[cs-pos/DET]() (100; 0% instances), [cs-pos/ADJ]()-[cs-pos/DET]() (81; 0% instances), [cs-pos/PRON]()-[cs-pos/DET]() (75; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	Může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LGloss=(mít_možnost_[něco_dělat])
2	po	po	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	LId=po-1
3	mně	já	PRON	PP-S6--1-------	Case=Loc|Number=Sing|Person=1|PronType=Prs	7	iobj	_	_
4	takové	takový	DET	PDIP4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|PronType=Dem	5	det	_	_
5	údaje	údaj	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Plur	7	dobj	_	_
6	pojišťovna	pojišťovna	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	1	nsubj	_	_
7	vyžadovat	vyžadovat	VERB	Vf--------A----	Aspect=Imp|Negative=Pos|VerbForm=Inf	1	xcomp	_	SpaceAfter=No
8	?	?	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Ten	ten	DET	PDYS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	2	det	_	_
2	Hemingway	Hemingway	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Negative=Pos|Number=Sing	5	nsubj	_	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl	_	LGloss=(zvr._zájmeno/částice)
4	skutečně	skutečně	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	5	advmod	_	LDeriv=skutečný
5	vyznal	vyznat	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	7	ccomp	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	5	punct	_	_
7	řekla	říci	VERB	VpQW---XR-AA---	Aspect=Perf|Gender=Fem,Neut|Negative=Pos|Number=Plur,Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
8	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	_
9	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	7	iobj	_	SpaceAfter=No|LGloss=(zvr._zájmeno/částice)
10	.	.	PUNCT	Z:-------------	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Teprve	teprve	ADV	Db-------------	_	3	advmod:emph	_	_
2	ta	ten	DET	PDFS1----------	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	3	det	_	_
3	druhá	druhý	ADJ	CrFS1----------	Case=Nom|Gender=Fem|Number=Sing|NumType=Ord	4	nsubj	_	_
4	dělá	dělat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	6	case	_	LId=z-1
6	kýče	kýč	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	4	iobj	_	_
7	kýč	kýč	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	4	dobj	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	4	punct	_	SpaceAfter=No
9	"	"	PUNCT	Z:-------------	_	4	punct	_	_

~~~


