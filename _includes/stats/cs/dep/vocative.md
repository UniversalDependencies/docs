

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

81 nodes (0%) are attached to their parents as `vocative`.

45 instances of `vocative` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.34567901234568.

The following 11 pairs of parts of speech are connected with `vocative`: [cs-pos/VERB]()-[cs-pos/NOUN]() (49; 60% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (15; 19% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (6; 7% instances), [cs-pos/NOUN]()-[cs-pos/PROPN]() (3; 4% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (2; 2% instances), [cs-pos/CONJ]()-[cs-pos/NOUN]() (1; 1% instances), [cs-pos/INTJ]()-[cs-pos/PROPN]() (1; 1% instances), [cs-pos/NUM]()-[cs-pos/PROPN]() (1; 1% instances), [cs-pos/PART]()-[cs-pos/PROPN]() (1; 1% instances), [cs-pos/PRON]()-[cs-pos/NOUN]() (1; 1% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 vocative	color:blue
1	Občane	občan	NOUN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|Negative=Pos|Number=Sing	3	vocative	_	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	3	punct	_	_
3	chceš	chtít	VERB	VB-S---2P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	dýchat	dýchat	VERB	Vf--------A----	Aspect=Imp|Negative=Pos|VerbForm=Inf	3	xcomp	_	_
5	čistý	čistý	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	6	amod	_	_
6	vzduch	vzduch	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	4	dobj	_	_
7	a	a	CONJ	J^-------------	_	4	cc	_	LId=a-1
8	mít	mít	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	4	conj	_	_
9	také	také	ADV	Db-------------	_	8	advmod	_	LGloss=(rovněž)
10	teplo	teplo	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	8	dobj	_	SpaceAfter=No|LId=teplo-1
11	?	?	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 vocative	color:blue
1	Co	co	PRON	PQ--4----------	Animacy=Inan|Case=Acc|PronType=Int,Rel	4	dobj	_	LId=co-1
2	by	být	AUX	Vc-------------	Mood=Cnd|VerbForm=Fin	4	aux	_	_
3	tomu	ten	PRON	PDZS3----------	Case=Dat|Gender=Masc,Neut|Number=Sing|PronType=Dem	4	iobj	_	_
4	řekl	říci	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	9	ccomp	_	_
5	táta	táta	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	4	nsubj	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	4	punct	_	_
7	Pavle	Pavel	PROPN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|NameType=Giv|Negative=Pos|Number=Sing	4	vocative	_	SpaceAfter=No|LId=Pavel-1
8	?	?	PUNCT	Z:-------------	_	4	punct	_	_
9	zeptá	zeptat	VERB	VB-S---3P-AA---	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	9	expl	_	LGloss=(zvr._zájmeno/částice)
11	jednoduše	jednoduše	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	9	advmod	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 vocative	color:blue
1	Skleněná	skleněný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	2	amod	_	_
2	louka	louka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	0	root	_	SpaceAfter=No
3	:	:	PUNCT	Z:-------------	_	4	punct	_	_
4	Máj	máj	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	2	appos	_	_
5	(	(	PUNCT	Z:-------------	_	7	punct	_	SpaceAfter=No
6	Ó	ó	INTJ	II-------------	_	7	dep	_	LId=ó-1
7	králi	král	NOUN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|Negative=Pos|Number=Sing	2	vocative	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	7	punct	_	_
9	dobrou	dobrý	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	10	amod	_	_
10	noc	noc	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	7	conj	_	SpaceAfter=No
11	!	!	PUNCT	Z:-------------	_	7	punct	_	SpaceAfter=No
12	)	)	PUNCT	Z:-------------	_	7	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is universal.

58 nodes (0%) are attached to their parents as `vocative`.

32 instances of `vocative` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.53448275862069.

The following 7 pairs of parts of speech are connected with `vocative`: [cs-pos/VERB]()-[cs-pos/NOUN]() (42; 72% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (8; 14% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (3; 5% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (2; 3% instances), [cs-pos/ADV]()-[cs-pos/NOUN]() (1; 2% instances), [cs-pos/PRON]()-[cs-pos/PROPN]() (1; 2% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 vocative	color:blue
1	Soudruhu	soudruh	NOUN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|Negative=Pos|Number=Sing	2	nmod	_	_
2	doktore	doktor	NOUN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|Negative=Pos|Number=Sing	10	vocative	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	10	punct	_	_
4	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	_	LId=o-1
5	čem	co	PRON	PQ--6----------	Animacy=Inan|Case=Loc|PronType=Int,Rel	10	dobj	_	LId=co-1
6	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	10	auxpass:reflex	_	LGloss=(zvr._zájmeno/částice)
7	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	8	case	_	LId=na-1
8	besedě	beseda	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Negative=Pos|Number=Sing	10	nmod	_	_
9	hlavně	hlavně	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	10	advmod	_	LDeriv=hlavní
10	hovořilo	hovořit	VERB	VpNS---XR-AA---	Aspect=Imp|Gender=Neut|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 vocative	color:blue
1	"	"	PUNCT	Z:-------------	_	7	punct	_	_
2	Ladislave	Ladislav	PROPN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|NameType=Giv|Negative=Pos|Number=Sing	7	vocative	_	_
3	Falto	Falta	PROPN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|NameType=Sur|Negative=Pos|Number=Sing	2	name	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	7	punct	_	_
5	už	už	ADV	Db-------------	_	7	advmod	_	_
6	jste	být	AUX	VB-P---2P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	_
7	sbalil	sbalit	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
8	kufr	kufr	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	7	dobj	_	SpaceAfter=No
9	?	?	PUNCT	Z:-------------	_	7	punct	_	_
10	"	"	PUNCT	Z:-------------	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 vocative	color:blue
1	"	"	PUNCT	Z:-------------	_	3	punct	_	_
2	Váš	tvůj	DET	PSYS1-P2-------	Case=Nom|Gender=Masc|Number=Sing|Number[psor]=Plur|Person=2|Poss=Yes|PronType=Prs	3	det	_	LGloss=(přivlast.)
3	závěr	závěr	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	0	root	_	SpaceAfter=No|LGloss=(př._z_jednání,_úvah)
4	,	,	PUNCT	Z:-------------	_	3	punct	_	_
5	soudruhu	soudruh	NOUN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|Negative=Pos|Number=Sing	6	nmod	_	_
6	náměstku	náměstek	NOUN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|Negative=Pos|Number=Sing	3	vocative	_	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	3	punct	_	_
8	"	"	PUNCT	Z:-------------	_	3	punct	_	_

~~~


