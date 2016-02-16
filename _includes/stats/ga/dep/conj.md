

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.

737 nodes (3%) are attached to their parents as `conj`.

736 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.05563093622795.

The following 46 pairs of parts of speech are connected with `conj`: [ga-pos/NOUN]()-[ga-pos/NOUN]() (333; 45% instances), [ga-pos/VERB]()-[ga-pos/VERB]() (144; 20% instances), [ga-pos/PROPN]()-[ga-pos/PROPN]() (32; 4% instances), [ga-pos/ADJ]()-[ga-pos/ADJ]() (27; 4% instances), [ga-pos/VERB]()-[ga-pos/NOUN]() (21; 3% instances), [ga-pos/ADP]()-[ga-pos/ADP]() (18; 2% instances), [ga-pos/NOUN]()-[ga-pos/PROPN]() (14; 2% instances), [ga-pos/PROPN]()-[ga-pos/NOUN]() (14; 2% instances), [ga-pos/NOUN]()-[ga-pos/ADP]() (11; 1% instances), [ga-pos/VERB]()-[ga-pos/ADJ]() (11; 1% instances), [ga-pos/NUM]()-[ga-pos/NUM]() (10; 1% instances), [ga-pos/PRON]()-[ga-pos/PRON]() (9; 1% instances), [ga-pos/PRON]()-[ga-pos/NOUN]() (8; 1% instances), [ga-pos/NOUN]()-[ga-pos/VERB]() (7; 1% instances), [ga-pos/NOUN]()-[ga-pos/NUM]() (6; 1% instances), [ga-pos/SCONJ]()-[ga-pos/SCONJ]() (6; 1% instances), [ga-pos/X]()-[ga-pos/NOUN]() (6; 1% instances), [ga-pos/ADJ]()-[ga-pos/NOUN]() (5; 1% instances), [ga-pos/ADV]()-[ga-pos/ADV]() (4; 1% instances), [ga-pos/NOUN]()-[ga-pos/ADJ]() (4; 1% instances), [ga-pos/VERB]()-[ga-pos/PRON]() (4; 1% instances), [ga-pos/X]()-[ga-pos/X]() (4; 1% instances), [ga-pos/ADP]()-[ga-pos/NOUN]() (3; 0% instances), [ga-pos/ADP]()-[ga-pos/VERB]() (3; 0% instances), [ga-pos/CONJ]()-[ga-pos/ADP]() (3; 0% instances), [ga-pos/VERB]()-[ga-pos/ADP]() (3; 0% instances), [ga-pos/ADJ]()-[ga-pos/PRON]() (2; 0% instances), [ga-pos/ADV]()-[ga-pos/NOUN]() (2; 0% instances), [ga-pos/NOUN]()-[ga-pos/X]() (2; 0% instances), [ga-pos/PRON]()-[ga-pos/PROPN]() (2; 0% instances), [ga-pos/PRON]()-[ga-pos/VERB]() (2; 0% instances), [ga-pos/PROPN]()-[ga-pos/ADP]() (2; 0% instances), [ga-pos/X]()-[ga-pos/VERB]() (2; 0% instances), [ga-pos/ADJ]()-[ga-pos/DET]() (1; 0% instances), [ga-pos/ADJ]()-[ga-pos/VERB]() (1; 0% instances), [ga-pos/ADJ]()-[ga-pos/X]() (1; 0% instances), [ga-pos/ADP]()-[ga-pos/PRON]() (1; 0% instances), [ga-pos/CONJ]()-[ga-pos/PRON]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/CONJ]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/DET]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/PRON]() (1; 0% instances), [ga-pos/NUM]()-[ga-pos/NOUN]() (1; 0% instances), [ga-pos/PROPN]()-[ga-pos/VERB]() (1; 0% instances), [ga-pos/SCONJ]()-[ga-pos/ADP]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/PROPN]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 conj	color:blue
1	Thiocfadh	tar	VERB	VI	Form=Len|Mood=Cnd	0	root	_	_
2	leat	le	ADP	Prep	Number=Sing|Person=2	1	nmod:prep	_	_
3	caint	caint	NOUN	Noun	VerbForm=Ger	1	nsubj	_	_
4	agus	agus	CONJ	Coord	_	3	cc	_	_
5	scríobh	scríobh	NOUN	Noun	VerbForm=Inf	3	conj	_	_
6	fá	faoi	X	CU	Dialect=Ulster|Gender=Masc|Number=Sing|Person=3	7	case	_	_
7	seo	seo	PRON	Dem	PronType=Dem	3	nmod	_	_
8	go	go	PART	Ad	PartType=Ad	9	mark:prt	_	_
9	minic	minic	ADJ	Adj	Degree=Pos	1	advmod	_	_
10	agus	agus	CONJ	Coord	_	9	cc	_	_
11	go	go	PART	Ad	PartType=Ad	12	mark:prt	_	_
12	fada	fada	ADJ	Adj	Degree=Pos	9	conj	_	_
13	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 conj	color:blue
1	Bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	3	det	_	_
3	lá	lá	NOUN	Noun	Case=Com|Definite=Def|Gender=Masc|Number=Sing	1	nsubj	_	_
4	an-te	te	ADJ	Adj	Degree=Pos	1	xcomp:pred	_	_
5	agus	agus	CONJ	Coord	_	1	cc	_	_
6	bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	1	conj	_	_
7	gach	gach	DET	Det	Definite=Def	8	det	_	_
8	duine	duine	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	6	nsubj	_	_
9	spalptha	spalptha	ADJ	Adj	VerbForm=Part	6	xcomp:pred	_	_
10	leis	le	ADP	Simp	_	12	case	_	_
11	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	12	det	_	_
12	tart	tart	NOUN	Noun	Case=Com|Definite=Def|Gender=Masc|Number=Sing	9	nmod	_	_
13	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 conj	color:blue
1	Conas	conas	ADV	Q	PronType=Int	3	advmod	_	_
2	a	a	PART	Vb	PartType=Vb|PronType=Rel	3	mark:prt	_	_
3	chosnaíonn	cosain	VERB	VTI	Form=Len|Mood=Ind|Tense=Pres	0	root	_	_
4	Beckett	Beckett	PROPN	Noun	Case=Com|Gender=Masc|Number=Sing	3	nsubj	_	_
5	,	,	PUNCT	Punct	_	6	punct	_	_
6	Joyce	Joyce	PROPN	Noun	Case=Com|Gender=Masc|Number=Sing	4	conj	_	_
7	ar	ar	ADP	Simp	_	9	case	_	_
8	na	na	DET	Art	Definite=Def|Number=Plur|PronType=Art	9	det	_	_
9	gearáin	gearán	NOUN	Noun	Case=Com|Definite=Def|Gender=Masc|Number=Plur	3	nmod	_	_
10	seo	seo	DET	Det	PronType=Dem	9	det	_	_
11	?	?	PUNCT	?	_	3	punct	_	_

~~~


