

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.

167 nodes (1%) are attached to their parents as `advcl`.

142 instances of `advcl` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.688622754491.

The following 22 pairs of parts of speech are connected with `advcl`: [ga-pos/VERB]()-[ga-pos/VERB]() (92; 55% instances), [ga-pos/NOUN]()-[ga-pos/VERB]() (15; 9% instances), [ga-pos/VERB]()-[ga-pos/NOUN]() (9; 5% instances), [ga-pos/SCONJ]()-[ga-pos/VERB]() (7; 4% instances), [ga-pos/ADJ]()-[ga-pos/VERB]() (6; 4% instances), [ga-pos/ADP]()-[ga-pos/VERB]() (6; 4% instances), [ga-pos/ADJ]()-[ga-pos/ADJ]() (4; 2% instances), [ga-pos/VERB]()-[ga-pos/ADJ]() (4; 2% instances), [ga-pos/ADJ]()-[ga-pos/NOUN]() (3; 2% instances), [ga-pos/CCONJ]()-[ga-pos/VERB]() (3; 2% instances), [ga-pos/NOUN]()-[ga-pos/NOUN]() (3; 2% instances), [ga-pos/VERB]()-[ga-pos/PRON]() (3; 2% instances), [ga-pos/PRON]()-[ga-pos/VERB]() (2; 1% instances), [ga-pos/VERB]()-[ga-pos/ADP]() (2; 1% instances), [ga-pos/ADJ]()-[ga-pos/PRON]() (1; 1% instances), [ga-pos/ADP]()-[ga-pos/ADP]() (1; 1% instances), [ga-pos/ADV]()-[ga-pos/VERB]() (1; 1% instances), [ga-pos/NOUN]()-[ga-pos/ADJ]() (1; 1% instances), [ga-pos/NOUN]()-[ga-pos/ADP]() (1; 1% instances), [ga-pos/PROPN]()-[ga-pos/ADP]() (1; 1% instances), [ga-pos/SCONJ]()-[ga-pos/ADJ]() (1; 1% instances), [ga-pos/X]()-[ga-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 advcl	color:blue
1	Tá's	bí	VERB	PresInd	Case=NomAcc|Gender=Masc|Mood=Ind|Number=Sing|Tense=Pres	0	root	_	_
2	ag	ag	ADP	Simp	_	4	case	_	_
3	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	4	det	_	_
4	lá	lá	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	1	obl	_	_
5	ach	ach	SCONJ	Subord	_	7	mark	_	_
6	go	go	PART	Vb	PartType=Cmpl	7	mark:prt	_	_
7	rabhas	bí	VERB	PastInd	Form=Ecl|Mood=Ind|Number=Sing|Person=1|Tense=Past	1	advcl	_	_
8	ag	ag	ADP	Simp	_	9	case	_	_
9	caoineachán	caoineachán	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	7	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 4 advcl	color:blue
1	Agus	agus	CCONJ	Coord	_	11	advmod	_	_
2	nuair	nuair	SCONJ	Subord	_	4	mark	_	_
3	a	a	PART	Vb	PartType=Vb|PronType=Rel	4	mark:prt	_	_
4	bhíodh	bí	VERB	PastImp	Form=Len|Mood=Imp|Tense=Past	11	advcl	_	_
5	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	4	nsubj	_	_
6	ag	ag	ADP	Simp	_	7	case	_	_
7	insint	insint	NOUN	Noun	VerbForm=Vnoun	4	xcomp	_	_
8	scéil	scéal	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	7	obj	_	SpaceAfter=No
9	,	,	PUNCT	Punct	_	11	punct	_	_
10	ní	is	AUX	Cop	Polarity=Neg|Tense=Pres|VerbForm=Cop	11	cop	_	_
11	scéal	scéal	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	0	root	_	_
12	scéil	scéal	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	11	compound	_	_
13	a	a	PART	Vb	PartType=Vb|PronType=Rel	14	mark:prt	_	_
14	bhíodh	bí	VERB	PastImp	Form=Len|Mood=Imp|Tense=Past	11	csubj:cleft	_	_
15	aige	ag	ADP	Prep	Gender=Masc|Number=Sing|Person=3	14	obl:prep	_	SpaceAfter=No
16	.	.	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 16 advcl	color:blue
1	Nuair	nuair	SCONJ	Subord	_	3	mark	_	_
2	a	a	PART	Vb	PartType=Vb|PronType=Rel	3	mark:prt	_	_
3	tógadh	tóg	VERB	VTI	Mood=Ind|Tense=Past|Voice=Auto	8	advcl	_	_
4	na	na	DET	Art	Definite=Def|Number=Plur|PronType=Art	5	det	_	_
5	scadáin	scadán	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Plur	3	obj	_	_
6	ar	ar	ADP	Simp	_	7	case	_	_
7	bord	bord	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	3	obl	_	_
8	fuair	faigh	VERB	VT	Mood=Ind|Tense=Past	0	root	_	_
9	duine	duine	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	8	nsubj	_	_
10	den	de	ADP	Art	Number=Sing|PronType=Art	11	case	_	_
11	chriú	criú	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	9	compound	_	_
12	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	13	det	_	_
13	slibire	slibire	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	8	obj	_	_
14	seo	seo	DET	Det	PronType=Dem	13	det	_	_
15	agus	agus	SCONJ	Subord	_	16	mark	_	_
16	gob	gob	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	8	advcl	_	_
17	fada	fada	ADJ	Adj	Case=NomAcc|Gender=Masc|Number=Sing	16	amod	_	_
18	air	ar	ADP	Prep	Gender=Masc|Number=Sing|Person=3	16	obl:prep	_	SpaceAfter=No
19	.	.	PUNCT	.	_	8	punct	_	_

~~~


