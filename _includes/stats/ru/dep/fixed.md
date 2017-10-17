

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.

299 nodes (0%) are attached to their parents as `fixed`.

299 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.49163879598662.

The following 35 pairs of parts of speech are connected with `fixed`: [ru-pos/CCONJ]()-[ru-pos/CCONJ]() (74; 25% instances), [ru-pos/SCONJ]()-[ru-pos/ADV]() (26; 9% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (25; 8% instances), [ru-pos/PRON]()-[ru-pos/ADV]() (17; 6% instances), [ru-pos/ADP]()-[ru-pos/NOUN]() (16; 5% instances), [ru-pos/PRON]()-[ru-pos/PART]() (16; 5% instances), [ru-pos/NOUN]()-[ru-pos/ADP]() (13; 4% instances), [ru-pos/ADV]()-[ru-pos/CCONJ]() (11; 4% instances), [ru-pos/PART]()-[ru-pos/PART]() (10; 3% instances), [ru-pos/PRON]()-[ru-pos/VERB]() (10; 3% instances), [ru-pos/SCONJ]()-[ru-pos/ADP]() (9; 3% instances), [ru-pos/DET]()-[ru-pos/PROPN]() (8; 3% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (6; 2% instances), [ru-pos/ADP]()-[ru-pos/ADV]() (5; 2% instances), [ru-pos/ADP]()-[ru-pos/DET]() (5; 2% instances), [ru-pos/ADP]()-[ru-pos/PRON]() (5; 2% instances), [ru-pos/ADV]()-[ru-pos/ADP]() (5; 2% instances), [ru-pos/CCONJ]()-[ru-pos/ADV]() (5; 2% instances), [ru-pos/DET]()-[ru-pos/NOUN]() (5; 2% instances), [ru-pos/ADP]()-[ru-pos/CCONJ]() (4; 1% instances), [ru-pos/CCONJ]()-[ru-pos/PART]() (4; 1% instances), [ru-pos/ADP]()-[ru-pos/VERB]() (2; 1% instances), [ru-pos/ADV]()-[ru-pos/ADV]() (2; 1% instances), [ru-pos/DET]()-[ru-pos/ADP]() (2; 1% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (2; 1% instances), [ru-pos/NOUN]()-[ru-pos/VERB]() (2; 1% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (2; 1% instances), [ru-pos/ADP]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/PART]() (1; 0% instances), [ru-pos/CCONJ]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/DET]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/PART]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/PART]()-[ru-pos/DET]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 fixed	color:blue
1	В	В	ADP	IN	_	2	case	_	_
2	этом	ЭТО	PRON	DT	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	4	nmod	_	_
3	он	ОН	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	nsubj	_	_
4	близок	БЛИЗКИЙ	ADJ	JJH	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Variant=Short	0	root	_	_
5	как	КАК	CCONJ	CC	_	7	cc:preconj	_	_
6	к	К	ADP	IN	_	7	case	_	_
7	традиции	ТРАДИЦИЯ	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	4	nmod	_	_
8	символизма	СИМВОЛИЗМ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	_
9	так	ТАК	CCONJ	CC	_	11	cc	_	_
10	и	И	CCONJ	CC	_	9	fixed	_	_
11	к	К	ADP	IN	_	7	conj	_	_
12	поэзии	ПОЭЗИЯ	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	11	nmod	_	_
13	вещей	ВЕЩЬ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	12	nmod	_	_
14	(	(	PUNCT	(	_	15	punct	_	SpaceAfter=No
15	Dinggedicht	DINGGEDICHT	ADV	FW	_	13	appos	_	SpaceAfter=No
16	)	)	PUNCT	)	_	15	punct	_	SpaceAfter=No
17	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 fixed	color:blue
1	Голова	ГОЛОВА	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
2	сверху	СВЕРХУ	ADV	RB	_	4	advmod	_	_
3	не	НЕ	PART	NEG	Polarity=Neg	4	advmod	_	_
4	видна	ВИДНЫЙ	ADJ	JJH	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|Variant=Short	0	root	_	SpaceAfter=No
5	,	,	PUNCT	,	_	8	punct	_	_
6	так	ТАК	SCONJ	IN	_	8	mark	_	_
7	как	КАК	ADV	WRB	_	6	fixed	_	_
8	прикрыта	ПРИКРЫТЬ	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	4	advcl	_	_
9	переднеспинкой	ПЕРЕДНЕСПИНКА	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	8	iobj	_	SpaceAfter=No
10	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 fixed	color:blue
1	В	В	ADP	IN	_	2	case	_	_
2	течение	ТЕЧЕНИЕ	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	5	obl	_	_
3	долгого	ДОЛГИЙ	ADJ	JJL	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	2	amod	_	_
4	времени	ВРЕМЯ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	2	fixed	_	_
5	изучал	ИЗУЧАТЬ	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
6	язык	ЯЗЫК	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	obj	_	_
7	майя	МАЙЯ	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	6	nmod	_	SpaceAfter=No
8	.	.	PUNCT	.	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is universal.

8366 nodes (1%) are attached to their parents as `fixed`.

7965 instances of `fixed` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.04829070045422.

The following 91 pairs of parts of speech are connected with `fixed`: [ru-pos/ADP]()-[ru-pos/NOUN]() (2394; 29% instances), [ru-pos/ADV]()-[ru-pos/SCONJ]() (802; 10% instances), [ru-pos/PRON]()-[ru-pos/VERB]() (457; 5% instances), [ru-pos/ADV]()-[ru-pos/PART]() (423; 5% instances), [ru-pos/NOUN]()-[ru-pos/ADP]() (405; 5% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (389; 5% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (332; 4% instances), [ru-pos/ADP]()-[ru-pos/ADJ]() (330; 4% instances), [ru-pos/PART]()-[ru-pos/PART]() (307; 4% instances), [ru-pos/DET]()-[ru-pos/NOUN]() (267; 3% instances), [ru-pos/ADP]()-[ru-pos/DET]() (261; 3% instances), [ru-pos/ADV]()-[ru-pos/ADP]() (232; 3% instances), [ru-pos/ADP]()-[ru-pos/PRON]() (207; 2% instances), [ru-pos/ADV]()-[ru-pos/ADV]() (204; 2% instances), [ru-pos/PRON]()-[ru-pos/ADJ]() (186; 2% instances), [ru-pos/SCONJ]()-[ru-pos/NOUN]() (177; 2% instances), [ru-pos/PRON]()-[ru-pos/PART]() (160; 2% instances), [ru-pos/PART]()-[ru-pos/ADV]() (138; 2% instances), [ru-pos/PRON]()-[ru-pos/ADV]() (83; 1% instances), [ru-pos/SCONJ]()-[ru-pos/PART]() (78; 1% instances), [ru-pos/PART]()-[ru-pos/SCONJ]() (70; 1% instances), [ru-pos/NOUN]()-[ru-pos/SCONJ]() (57; 1% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (41; 0% instances), [ru-pos/PART]()-[ru-pos/PRON]() (37; 0% instances), [ru-pos/PART]()-[ru-pos/ADP]() (27; 0% instances), [ru-pos/PRON]()-[ru-pos/SCONJ]() (26; 0% instances), [ru-pos/CCONJ]()-[ru-pos/PART]() (22; 0% instances), [ru-pos/PART]()-[ru-pos/VERB]() (21; 0% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (15; 0% instances), [ru-pos/PART]()-[ru-pos/NOUN]() (14; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADJ]() (13; 0% instances), [ru-pos/VERB]()-[ru-pos/PART]() (12; 0% instances), [ru-pos/VERB]()-[ru-pos/VERB]() (12; 0% instances), [ru-pos/PUNCT]()-[ru-pos/SCONJ]() (11; 0% instances), [ru-pos/DET]()-[ru-pos/PART]() (10; 0% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (10; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (8; 0% instances), [ru-pos/PROPN]()-[ru-pos/NOUN]() (8; 0% instances), [ru-pos/ADV]()-[ru-pos/VERB]() (7; 0% instances), [ru-pos/_]()-[ru-pos/NOUN]() (6; 0% instances), [ru-pos/ADP]()-[ru-pos/VERB]() (5; 0% instances), [ru-pos/ADV]()-[ru-pos/PRON]() (5; 0% instances), [ru-pos/CCONJ]()-[ru-pos/ADV]() (5; 0% instances), [ru-pos/CCONJ]()-[ru-pos/SCONJ]() (5; 0% instances), [ru-pos/PUNCT]()-[ru-pos/NOUN]() (5; 0% instances), [ru-pos/PUNCT]()-[ru-pos/VERB]() (5; 0% instances), [ru-pos/SCONJ]()-[ru-pos/SCONJ]() (5; 0% instances), [ru-pos/DET]()-[ru-pos/ADV]() (4; 0% instances), [ru-pos/PROPN]()-[ru-pos/PROPN]() (4; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADV]() (3; 0% instances), [ru-pos/CCONJ]()-[ru-pos/PRON]() (3; 0% instances), [ru-pos/NOUN]()-[ru-pos/PART]() (3; 0% instances), [ru-pos/PRON]()-[ru-pos/NOUN]() (3; 0% instances), [ru-pos/PUNCT]()-[ru-pos/PART]() (3; 0% instances), [ru-pos/SCONJ]()-[ru-pos/ADV]() (3; 0% instances), [ru-pos/X]()-[ru-pos/X]() (3; 0% instances), [ru-pos/CCONJ]()-[ru-pos/NOUN]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/VERB]() (2; 0% instances), [ru-pos/PART]()-[ru-pos/CCONJ]() (2; 0% instances), [ru-pos/PUNCT]()-[ru-pos/DET]() (2; 0% instances), [ru-pos/VERB]()-[ru-pos/PRON]() (2; 0% instances), [ru-pos/_]()-[ru-pos/DET]() (2; 0% instances), [ru-pos/ADP]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/CCONJ]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/CCONJ]()-[ru-pos/DET]() (1; 0% instances), [ru-pos/DET]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/DET]()-[ru-pos/SCONJ]() (1; 0% instances), [ru-pos/DET]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/CCONJ]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/SYM]() (1; 0% instances), [ru-pos/PART]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/PART]()-[ru-pos/DET]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/CCONJ]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/INTJ]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/PUNCT]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/_]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/_]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/_]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/_]()-[ru-pos/PART]() (1; 0% instances), [ru-pos/_]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/_]()-[ru-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 fixed	color:blue
1	Альпинизм	альпинизм	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	_
2	за	за	ADP	_	_	1	advmod	1:advmod	_
3	рубежом	рубеж	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	2	fixed	2:fixed	SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Так	так	ADV	_	Degree=Pos	4	mark	4:mark	_
2	что	что	SCONJ	_	_	1	fixed	1:fixed	_
3	-	-	PUNCT	_	_	2	punct	2:punct	_
4	спасибо	спасибо	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	4:punct	_
6	власть	власть	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	parataxis	4:parataxis	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	6:punct	_
8	спасибо	спасибо	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	4	conj	4:conj	SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	8:punct	_
10	Путин	путин	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	8	parataxis	8:parataxis	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	То	то	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	4	mark	4:mark	_
2	есть	быть	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	fixed	1:fixed	_
3	человек	человек	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	4:nsubj	_
4	смотрел	смотреть	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	так	так	ADV	_	Degree=Pos	4	advmod	4:advmod	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	5:punct	_
7	как	как	ADV	_	Degree=Pos	10	advmod	10:advmod	_
8	ему	он	PRON	_	Case=Dat|Gender=Masc|Number=Sing|Person=3	10	nmod	10:nmod	_
9	было	быть	AUX	_	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	10	cop	10:cop	_
10	удобнее	удобный	ADJ	_	Degree=Cmp	5	acl	5:acl	SpaceAfter=No
11	"	"	PUNCT	_	_	10	punct	10:punct	SpaceAfter=No
12	.	.	PUNCT	_	_	10	punct	10:punct	_

~~~


