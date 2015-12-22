

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

20711 nodes (1%) are attached to their parents as `cop`.

17342 instances of `cop` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.36217468977838.

The following 19 pairs of parts of speech are connected with `cop`: [cs-pos/ADJ]()-[cs-pos/VERB]() (9162; 44% instances), [cs-pos/NOUN]()-[cs-pos/VERB]() (7522; 36% instances), [cs-pos/VERB]()-[cs-pos/VERB]() (2509; 12% instances), [cs-pos/PRON]()-[cs-pos/VERB]() (737; 4% instances), [cs-pos/NUM]()-[cs-pos/VERB]() (467; 2% instances), [cs-pos/ADV]()-[cs-pos/VERB]() (192; 1% instances), [cs-pos/PROPN]()-[cs-pos/VERB]() (67; 0% instances), [cs-pos/PART]()-[cs-pos/VERB]() (18; 0% instances), [cs-pos/DET]()-[cs-pos/VERB]() (17; 0% instances), [cs-pos/SYM]()-[cs-pos/VERB]() (4; 0% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (3; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (2; 0% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (2; 0% instances), [cs-pos/NOUN]()-[cs-pos/SYM]() (2; 0% instances), [cs-pos/NUM]()-[cs-pos/SYM]() (2; 0% instances), [cs-pos/PART]()-[cs-pos/PART]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cop	color:blue
1	BESO	Beso	PROPN	NNNS1-----A----	Case=Nom|Gender=Neut|NameType=Com|Negative=Pos|Number=Sing	6	nsubj	_	_
2	a	a	CONJ	J^-------------	_	1	cc	_	LId=a-1
3	SES	SES	PROPN	NNXXX-----A---8	Abbr=Yes|NameType=Com|Negative=Pos	1	conj	_	_
4	jsou	být	VERB	VB-P---3P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
5	dvě	dva	NUM	ClHP1----------	Case=Nom|Gender=Fem,Neut|Number=Plur|NumForm=Word|NumType=Card|NumValue=1,2,3	6	nummod	_	LNumValue=2
6	organizace	organizace	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Plur	0	root	_	_
7	se	s	ADP	RV--7----------	AdpType=Voc|Case=Ins	9	case	_	LId=s-1
8	stejným	stejný	ADJ	AANS7----1A----	Case=Ins|Degree=Pos|Gender=Neut|Negative=Pos|Number=Sing	9	amod	_	_
9	posláním	poslání	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Negative=Pos|Number=Sing	6	nmod	_	SpaceAfter=No|LDeriv=poslat
10	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	Většinou	většina	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Negative=Pos|Number=Sing	3	nmod	_	_
2	byly	být	VERB	VpTP---XR-AA---	Animacy=Inan|Gender=Fem,Masc|Negative=Pos|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	3	cop	_	_
3	určeny	určit	VERB	VsTP---XX-AP---	Animacy=Inan|Gender=Fem,Masc|Negative=Pos|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	_
4	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	_	LId=na-1
5	vývoz	vývoz	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	3	nmod	_	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


