

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

8495 nodes (1%) are attached to their parents as `iobj`.

5114 instances of `iobj` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.00235432607416.

The following 8 pairs of parts of speech are connected with `iobj`: [cs-pos/VERB]()-[cs-pos/NOUN]() (4565; 54% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (2658; 31% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (712; 8% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (472; 6% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (61; 1% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (24; 0% instances), [cs-pos/VERB]()-[cs-pos/SYM]() (2; 0% instances), [cs-pos/VERB]()-[cs-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 iobj	color:blue
1	Mohou	moci	VERB	VB-P---3P-AA--1	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LGloss=(mít_možnost_[něco_dělat])
2	zde	zde	ADV	Db-------------	_	1	advmod	_	_
3	porovnat	porovnat	VERB	Vf--------A----	Aspect=Perf|Negative=Pos|VerbForm=Inf	1	xcomp	_	_
4	svůj	svůj	DET	P8IS4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	5	det	_	LId=svůj-1|LGloss=(přivlast.)
5	vývoj	vývoj	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	3	dobj	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	5	punct	_	_
7	záměry	záměr	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Plur	5	conj	_	_
8	se	s	ADP	RV--7----------	AdpType=Voc|Case=Ins	10	case	_	LId=s-1
9	světovými	světový	ADJ	AAIP7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	10	amod	_	_
10	trendy	trend	NOUN	NNIP7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Negative=Pos|Number=Plur	3	iobj	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 iobj	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 iobj	color:blue
1	LN	LN	PROPN	NNFPX-----A---8	Abbr=Yes|Gender=Fem|NameType=Pro|Negative=Pos|Number=Plur	4	iobj	_	LId=LN-1|LGloss=(Lidové_noviny,_deník)
2	to	ten	PRON	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	4	dobj	_	_
3	včera	včera	ADV	Db-------------	_	4	advmod	_	_
4	řekl	říci	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	místopředseda	místopředseda	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	11	nmod	_	_
6	sněmovny	sněmovna	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	5	nmod	_	_
7	a	a	CONJ	J^-------------	_	6	cc	_	LId=a-1
8	KDU	KDU	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Com|Negative=Pos	6	conj	_	SpaceAfter=No|LGloss=(Křesťansko-demokratická_unie)
9	-	-	PUNCT	Z:-------------	_	8	punct	_	SpaceAfter=No
10	ČSL	ČSL	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Com|Negative=Pos	8	conj	_	LId=ČSL-1|LGloss=(Česká_[pův._Čsl.]_strana_lidová)
11	Jan	Jan	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Negative=Pos|Number=Sing	4	nsubj	_	_
12	Kasal	Kasal	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Negative=Pos|Number=Sing	11	name	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


