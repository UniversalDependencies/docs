

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is a language-specific subtype of [det]().
There are also 1 other language-specific subtypes of `det`: [det:nummod]().

978 nodes (0%) are attached to their parents as `det:numgov`.

916 instances of `det:numgov` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 3 pairs of parts of speech are connected with `det:numgov`: [cs-pos/NOUN]()-[cs-pos/DET]() (955; 98% instances), [cs-pos/PRON]()-[cs-pos/DET]() (18; 2% instances), [cs-pos/PROPN]()-[cs-pos/DET]() (5; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 det:numgov	color:blue
1	I	i	CONJ	J^-------------	_	3	advmod:emph	_	LId=i-1
2	velké	velký	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	3	amod	_	_
3	firmy	firma	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Plur	5	nsubj	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	dobj	_	LGloss=(zvr._zájmeno/částice)
5	specializují	specializovat	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	jen	jen	PART	TT-------------	_	8	advmod:emph	_	LId=jen-1|LGloss=(pouze)
7	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	10	case	_	LId=na-1
8	několik	několik	DET	Ca--4----------	Case=Acc|NumType=Card|PronType=Dem,Ind	10	det:numgov	_	_
9	málo	málo	DET	Ca--4----------	Case=Acc|NumType=Card|PronType=Dem,Ind	10	det:numgov	_	LId=málo-1|LGloss=(málo_+_2._p.,_málo_peněz)
10	teritorií	teritorium	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Plur	5	iobj	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det:numgov	color:blue
1	Kdoví	kdoví	PART	TT-------------	_	0	root	_	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	5	punct	_	_
3	kolik	kolik	DET	C?--1----------	Case=Nom|NumType=Card|PronType=Int,Rel	4	det:numgov	_	_
4	jich	on	PRON	PPXP2--3-------	Case=Gen|Number=Plur|Person=3|PronType=Prs	5	nsubj	_	LId=on-1
5	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	dep	_	_
6	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	8	case	_	LId=v-1
7	samotné	samotný	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	8	amod	_	_
8	Jihlavě	Jihlava	PROPN	NNFS6-----A----	Case=Loc|Gender=Fem|NameType=Geo|Negative=Pos|Number=Sing	5	nmod	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det:numgov	color:blue
1	Mnoho	mnoho	DET	Ca--1----------	Case=Nom|NumType=Card|PronType=Dem,Ind	2	det:numgov	_	LId=mnoho-1
2	Kubánců	Kubánec	PROPN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Nat|Negative=Pos|Number=Plur	3	nsubj	_	_
3	vzalo	vzít	VERB	VpNS---XR-AA---	Gender=Neut|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	LGloss=(př._sebrat_něco;_brát_ohled,_zřetel,...)
4	totiž	totiž	ADV	Db-------------	_	3	cc	_	_
5	Castrovo	Castrův	ADJ	AUNS4M---------	Case=Acc|Gender=Neut|Gender[psor]=Masc|NameType=Sur|Number=Sing|Poss=Yes	6	amod	_	LDeriv=Castro
6	prohlášení	prohlášení	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	3	dobj	_	LDeriv=prohlásit
7	jako	jako	SCONJ	J,-------------	_	9	mark	_	_
8	životní	životní	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	9	amod	_	LGloss=(souvisí_se_životem;_prostředí,...)
9	příležitost	příležitost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	6	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


