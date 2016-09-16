

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.

299 nodes (1%) are attached to their parents as `advcl`.

245 instances of `advcl` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.1705685618729.

The following 30 pairs of parts of speech are connected with `advcl`: [ga-pos/VERB]()-[ga-pos/VERB]() (152; 51% instances), [ga-pos/NOUN]()-[ga-pos/VERB]() (29; 10% instances), [ga-pos/VERB]()-[ga-pos/NOUN]() (20; 7% instances), [ga-pos/SCONJ]()-[ga-pos/VERB]() (16; 5% instances), [ga-pos/ADJ]()-[ga-pos/VERB]() (14; 5% instances), [ga-pos/ADP]()-[ga-pos/VERB]() (10; 3% instances), [ga-pos/VERB]()-[ga-pos/ADJ]() (8; 3% instances), [ga-pos/VERB]()-[ga-pos/PRON]() (7; 2% instances), [ga-pos/CONJ]()-[ga-pos/VERB]() (5; 2% instances), [ga-pos/PRON]()-[ga-pos/VERB]() (5; 2% instances), [ga-pos/ADJ]()-[ga-pos/ADJ]() (4; 1% instances), [ga-pos/ADJ]()-[ga-pos/NOUN]() (4; 1% instances), [ga-pos/NOUN]()-[ga-pos/NOUN]() (3; 1% instances), [ga-pos/NOUN]()-[ga-pos/ADJ]() (2; 1% instances), [ga-pos/SCONJ]()-[ga-pos/ADJ]() (2; 1% instances), [ga-pos/SCONJ]()-[ga-pos/NOUN]() (2; 1% instances), [ga-pos/VERB]()-[ga-pos/ADP]() (2; 1% instances), [ga-pos/X]()-[ga-pos/VERB]() (2; 1% instances), [ga-pos/ADJ]()-[ga-pos/PRON]() (1; 0% instances), [ga-pos/ADP]()-[ga-pos/ADP]() (1; 0% instances), [ga-pos/ADP]()-[ga-pos/PRON]() (1; 0% instances), [ga-pos/ADV]()-[ga-pos/VERB]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/ADP]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/PROPN]() (1; 0% instances), [ga-pos/PRON]()-[ga-pos/ADJ]() (1; 0% instances), [ga-pos/PROPN]()-[ga-pos/ADP]() (1; 0% instances), [ga-pos/PROPN]()-[ga-pos/NOUN]() (1; 0% instances), [ga-pos/PROPN]()-[ga-pos/SCONJ]() (1; 0% instances), [ga-pos/PROPN]()-[ga-pos/VERB]() (1; 0% instances), [ga-pos/SCONJ]()-[ga-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 advcl	color:blue
1	Seasadh	seas	VERB	VTI	Mood=Ind|Tense=Past|Voice=Auto	0	root	_	_
2	leis	le	ADP	Simp	_	4	case	_	_
3	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	4	det	_	_
4	diúltú	diúltú	NOUN	Noun	Case=Com|Definite=Def|Gender=Masc|Number=Sing	1	nmod	_	_
5	nuair	nuair	SCONJ	Subord	_	7	mark	_	_
6	a	a	PART	Vb	PartType=Vb|PronType=Rel	7	mark:prt	_	_
7	rinne	déan	VERB	VTI	Mood=Ind|Tense=Past	1	advcl	_	_
8	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	7	nsubj	_	_
9	achomharc	achomharc	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	7	dobj	_	_
10	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 4 advcl	color:blue
1	Agus	agus	CONJ	Coord	_	11	advmod	_	_
2	nuair	nuair	SCONJ	Subord	_	4	mark	_	_
3	a	a	PART	Vb	PartType=Vb|PronType=Rel	4	mark:prt	_	_
4	bhíodh	bí	VERB	PastImp	Form=Len|Mood=Imp|Tense=Past	11	advcl	_	_
5	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	4	nsubj	_	_
6	ag	ag	ADP	Simp	_	7	case	_	_
7	insint	insint	NOUN	Noun	VerbForm=Inf	4	xcomp	_	_
8	scéil	scéal	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	7	dobj	_	_
9	,	,	PUNCT	Punct	_	11	punct	_	_
10	ní	is	VERB	Cop	Negative=Neg|Tense=Pres|VerbForm=Cop	11	cop	_	_
11	scéal	scéal	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	0	root	_	_
12	scéil	scéal	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	11	compound	_	_
13	a	a	PART	Vb	PartType=Vb|PronType=Rel	14	mark:prt	_	_
14	bhíodh	bí	VERB	PastImp	Form=Len|Mood=Imp|Tense=Past	11	csubj:cleft	_	_
15	aige	ag	ADP	Prep	Gender=Masc|Number=Sing|Person=3	14	nmod:prep	_	_
16	.	.	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 advcl	color:blue
1	Ach	ach	SCONJ	Subord	_	2	mark	_	_
2	oiread	oiread	NOUN	Subst	Number=Sing	6	advcl	_	_
3	le	le	ADP	Simp	_	4	case	_	_
4	Jurassic	Jurassic	PROPN	Noun	Case=Com|Gender=Masc|Number=Sing	2	nmod	_	_
5	Park	Park	PROPN	Noun	Case=Com|Gender=Masc|Number=Sing	4	compound	_	_
6	tá	bí	VERB	PresInd	Mood=Ind|Tense=Pres	0	root	_	_
7	bunchlocha	bunchloch	NOUN	Noun	Case=Com|Gender=Fem|Number=Plur	6	nsubj	_	_
8	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	9	det	_	_
9	scéil	scéal	NOUN	Noun	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	7	compound	_	_
10	seo	seo	DET	Det	PronType=Dem	9	det	_	_
11	an-áiféiseach	áiféiseach	ADJ	Adj	Degree=Pos	6	xcomp:pred	_	_
12	.	.	PUNCT	.	_	6	punct	_	_

~~~


