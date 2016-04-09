

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

6217 nodes (0%) are attached to their parents as `csubj`.

5643 instances of `csubj` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.71529676692939.

The following 25 pairs of parts of speech are connected with `csubj`: [cs-pos/VERB]()-[cs-pos/VERB]() (3133; 50% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (1962; 32% instances), [cs-pos/NOUN]()-[cs-pos/VERB]() (691; 11% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (99; 2% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (70; 1% instances), [cs-pos/ADV]()-[cs-pos/VERB]() (61; 1% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (59; 1% instances), [cs-pos/NUM]()-[cs-pos/VERB]() (33; 1% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (25; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (22; 0% instances), [cs-pos/PRON]()-[cs-pos/VERB]() (19; 0% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (15; 0% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (7; 0% instances), [cs-pos/PRON]()-[cs-pos/NOUN]() (3; 0% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (3; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/DET]() (2; 0% instances), [cs-pos/ADV]()-[cs-pos/NOUN]() (2; 0% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (2; 0% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/ADJ]()-[cs-pos/PROPN]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 csubj	color:blue
1	Přesto	přesto	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	3	cc	_	_
2	však	však	CONJ	J^-------------	_	3	cc	_	_
3	lze	lze	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	zaznamenat	zaznamenat	VERB	Vf--------A----	Aspect=Perf|Negative=Pos|VerbForm=Inf	3	csubj	_	_
5	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	_	LId=v-1
6	podniku	podnik	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Negative=Pos|Number=Sing	3	nmod	_	_
7	citelné	citelný	ADJ	AAFP4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	8	amod	_	_
8	změny	změna	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Plur	4	dobj	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 csubj	color:blue
1	Změny	změna	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Plur	3	nsubj	_	_
2	jsou	být	VERB	VB-P---3P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	citelné	citelný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	3	punct	_	_
5	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
6	třeba	třeba	ADJ	ACNS------A----	Gender=Neut|Negative=Pos|Number=Sing|Variant=Short	3	conj	_	LId=třeba-1
7	je	on	PRON	PPXP4--3-------	Case=Acc|Number=Plur|Person=3|PronType=Prs	9	dobj	_	LId=on-1|LGloss=(oni/ono)
8	lépe	dobře	ADV	Dg-------2A----	Degree=Cmp|Negative=Pos	9	advmod	_	_
9	prezentovat	prezentovat	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	6	csubj	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 csubj	color:blue
1	Stavět	stavět	VERB	Vf--------A----	Aspect=Imp|Negative=Pos|VerbForm=Inf	7	csubj	_	_
2	vlastní	vlastní	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	3	amod	_	LId=vlastní-1|LGloss=(příslušný_k_něčemu)
3	výtopnu	výtopna	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	1	dobj	_	_
4	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
5	prozatím	prozatím	ADV	Db-------------	_	7	advmod	_	_
6	patrně	patrně	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	7	cc	_	LDeriv=patrný
7	risk	risk	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	0	root	_	_

~~~


