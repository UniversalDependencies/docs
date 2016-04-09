

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

13658 nodes (1%) are attached to their parents as `name`.

13658 instances of `name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.27039097964563.

The following 8 pairs of parts of speech are connected with `name`: [cs-pos/PROPN]()-[cs-pos/PROPN]() (13557; 99% instances), [cs-pos/PROPN]()-[cs-pos/ADJ]() (52; 0% instances), [cs-pos/ADJ]()-[cs-pos/PROPN]() (37; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (4; 0% instances), [cs-pos/NOUN]()-[cs-pos/PROPN]() (4; 0% instances), [cs-pos/PROPN]()-[cs-pos/ADP]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADP]() (1; 0% instances), [cs-pos/PROPN]()-[cs-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 name	color:blue
1	P	P	PROPN	NNMXX-----A---8	Abbr=Yes|Animacy=Anim|Gender=Masc|NameType=Giv|Negative=Pos	0	root	_	SpaceAfter=No|LId=P-0
2	.	.	PUNCT	Z:-------------	_	1	punct	_	_
3	L	L	PROPN	NNMXX-----A---8	Abbr=Yes|Animacy=Anim|Gender=Masc|NameType=Sur|Negative=Pos	1	name	_	SpaceAfter=No|LId=L-9
4	.	.	PUNCT	Z:-------------	_	1	punct	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	1	punct	_	_
6	Ostrava	Ostrava	PROPN	NNFS1-----A----	Case=Nom|Gender=Fem|NameType=Geo|Negative=Pos|Number=Sing	1	dep	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 name	color:blue
1	Foto	foto	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Negative=Pos|Number=Sing	0	root	_	SpaceAfter=No
2	:	:	PUNCT	Z:-------------	_	6	punct	_	_
3	Jan	Jan	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Negative=Pos|Number=Sing	1	appos	_	_
4	Novotný	Novotný	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|NameType=Sur|Negative=Pos|Number=Sing	3	name	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	6	punct	_	_
6	předseda	předseda	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	3	appos	_	_
7	Bytového	bytový	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Negative=Pos|Number=Sing	8	amod	_	_
8	družstva	družstvo	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	6	nmod	_	_
9	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	10	case	_	LId=v-1
10	Ostravě	Ostrava	PROPN	NNFS6-----A----	Case=Loc|Gender=Fem|NameType=Geo|Negative=Pos|Number=Sing	8	nmod	_	SpaceAfter=No
11	-	-	PUNCT	Z:-------------	_	12	punct	_	SpaceAfter=No
12	Porubě	Poruba	PROPN	NNFS6-----A----	Case=Loc|Gender=Fem|NameType=Geo|Negative=Pos|Number=Sing	10	nmod	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 name	color:blue
1	Absolutním	absolutní	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	2	amod	_	_
2	snem	sen	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Negative=Pos|Number=Sing	0	root	_	_
3	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	_
4	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	_	LId=pro-1
5	mě	já	PRON	PH-S4--1-------	Case=Acc|Number=Sing|Person=1|PronType=Prs|Variant=Short	2	nmod	_	_
6	film	film	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	2	nsubj	_	_
7	typu	typ	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	6	nmod	_	_
8	Formanova	Formanův	ADJ	AUMS2M---------	Animacy=Anim|Case=Gen|Gender=Masc|Gender[psor]=Masc|NameType=Sur|Number=Sing|Poss=Yes	7	nmod	_	LDeriv=Forman
9	Amadea	Amadeus	PROPN	NNMS2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Giv|Negative=Pos|Number=Sing	8	name	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


