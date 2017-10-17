

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.

457 nodes (3%) are attached to their parents as `conj`.

457 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.08533916849015.

The following 39 pairs of parts of speech are connected with `conj`: [ga-pos/NOUN]()-[ga-pos/NOUN]() (208; 46% instances), [ga-pos/VERB]()-[ga-pos/VERB]() (92; 20% instances), [ga-pos/ADJ]()-[ga-pos/ADJ]() (15; 3% instances), [ga-pos/VERB]()-[ga-pos/NOUN]() (13; 3% instances), [ga-pos/ADP]()-[ga-pos/ADP]() (12; 3% instances), [ga-pos/PROPN]()-[ga-pos/NOUN]() (10; 2% instances), [ga-pos/VERB]()-[ga-pos/ADJ]() (10; 2% instances), [ga-pos/NUM]()-[ga-pos/NUM]() (8; 2% instances), [ga-pos/NOUN]()-[ga-pos/ADP]() (7; 2% instances), [ga-pos/PRON]()-[ga-pos/NOUN]() (7; 2% instances), [ga-pos/PROPN]()-[ga-pos/PROPN]() (7; 2% instances), [ga-pos/NOUN]()-[ga-pos/PROPN]() (6; 1% instances), [ga-pos/PRON]()-[ga-pos/PRON]() (5; 1% instances), [ga-pos/ADJ]()-[ga-pos/NOUN]() (4; 1% instances), [ga-pos/ADV]()-[ga-pos/ADV]() (4; 1% instances), [ga-pos/NOUN]()-[ga-pos/ADJ]() (4; 1% instances), [ga-pos/NOUN]()-[ga-pos/NUM]() (4; 1% instances), [ga-pos/PART]()-[ga-pos/PROPN]() (4; 1% instances), [ga-pos/SCONJ]()-[ga-pos/SCONJ]() (4; 1% instances), [ga-pos/ADP]()-[ga-pos/NOUN]() (3; 1% instances), [ga-pos/NOUN]()-[ga-pos/VERB]() (3; 1% instances), [ga-pos/VERB]()-[ga-pos/ADP]() (3; 1% instances), [ga-pos/X]()-[ga-pos/NOUN]() (3; 1% instances), [ga-pos/ADV]()-[ga-pos/NOUN]() (2; 0% instances), [ga-pos/PRON]()-[ga-pos/PROPN]() (2; 0% instances), [ga-pos/PRON]()-[ga-pos/VERB]() (2; 0% instances), [ga-pos/VERB]()-[ga-pos/PRON]() (2; 0% instances), [ga-pos/X]()-[ga-pos/X]() (2; 0% instances), [ga-pos/ADJ]()-[ga-pos/PRON]() (1; 0% instances), [ga-pos/ADP]()-[ga-pos/PRON]() (1; 0% instances), [ga-pos/ADP]()-[ga-pos/VERB]() (1; 0% instances), [ga-pos/ADV]()-[ga-pos/PRON]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/PRON]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/X]() (1; 0% instances), [ga-pos/PART]()-[ga-pos/NOUN]() (1; 0% instances), [ga-pos/PART]()-[ga-pos/PART]() (1; 0% instances), [ga-pos/PROPN]()-[ga-pos/ADP]() (1; 0% instances), [ga-pos/SCONJ]()-[ga-pos/ADP]() (1; 0% instances), [ga-pos/X]()-[ga-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 conj	color:blue
1	Bronnfar	bronn	VERB	VT	Mood=Ind|Tense=Fut|Voice=Auto	0	root	_	_
2	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	1	obj	_	_
3	ar	ar	ADP	Simp	_	5	case	_	_
4	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	5	det	_	_
5	Chnuasach	cnuasach	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	1	obl	_	_
6	Gearrscéalta	gearrscéal	NOUN	Noun	Case=Gen|Gender=Masc|NounType=Strong|Number=Plur	5	compound	_	_
7	nó	nó	CCONJ	Coord	_	9	cc	_	_
8	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	9	det	_	_
9	dráma	dráma	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	5	conj	_	_
10	is	is	PART	Sup	_	11	mark:prt	_	_
11	fearr	maith	ADJ	Adj	Degree=Cmp,Sup	5	amod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 conj	color:blue
1	Bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	3	det	_	_
3	lá	lá	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	1	nsubj	_	_
4	an-te	te	ADJ	Adj	Degree=Pos	1	xcomp:pred	_	_
5	agus	agus	CCONJ	Coord	_	6	cc	_	_
6	bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	1	conj	_	_
7	gach	gach	DET	Det	Definite=Def	8	det	_	_
8	duine	duine	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	6	nsubj	_	_
9	spalptha	spalptha	ADJ	Adj	VerbForm=Part	6	xcomp:pred	_	_
10	leis	le	ADP	Simp	_	12	case	_	_
11	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	12	det	_	_
12	tart	tart	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	9	obl	_	SpaceAfter=No
13	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 conj	color:blue
1	Thiocfadh	tar	VERB	VI	Form=Len|Mood=Cnd	0	root	_	_
2	leat	le	ADP	Prep	Number=Sing|Person=2	1	obl:prep	_	_
3	caint	caint	NOUN	Noun	VerbForm=Inf	1	nsubj	_	_
4	agus	agus	CCONJ	Coord	_	5	cc	_	_
5	scríobh	scríobh	NOUN	Noun	VerbForm=Inf	3	conj	_	_
6	fá	faoi	X	CU	Dialect=Ulster|Gender=Masc|Number=Sing|Person=3	7	case	_	_
7	seo	seo	PRON	Dem	PronType=Dem	3	nmod	_	_
8	go	go	PART	Ad	PartType=Ad	9	mark:prt	_	_
9	minic	minic	ADJ	Adj	Degree=Pos	1	advmod	_	_
10	agus	agus	CCONJ	Coord	_	12	cc	_	_
11	go	go	PART	Ad	PartType=Ad	12	mark:prt	_	_
12	fada	fada	ADJ	Adj	Degree=Pos	9	conj	_	SpaceAfter=No
13	.	.	PUNCT	.	_	1	punct	_	_

~~~


