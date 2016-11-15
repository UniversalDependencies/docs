

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.

649 nodes (3%) are attached to their parents as `cc`.

649 instances of `cc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.19414483821263.

The following 16 pairs of parts of speech are connected with `cc`: [ga-pos/NOUN]()-[ga-pos/CONJ]() (327; 50% instances), [ga-pos/VERB]()-[ga-pos/CONJ]() (176; 27% instances), [ga-pos/ADJ]()-[ga-pos/CONJ]() (32; 5% instances), [ga-pos/PROPN]()-[ga-pos/CONJ]() (32; 5% instances), [ga-pos/ADP]()-[ga-pos/CONJ]() (22; 3% instances), [ga-pos/PRON]()-[ga-pos/CONJ]() (19; 3% instances), [ga-pos/X]()-[ga-pos/CONJ]() (9; 1% instances), [ga-pos/NUM]()-[ga-pos/CONJ]() (8; 1% instances), [ga-pos/ADV]()-[ga-pos/CONJ]() (7; 1% instances), [ga-pos/SCONJ]()-[ga-pos/CONJ]() (6; 1% instances), [ga-pos/NOUN]()-[ga-pos/PUNCT]() (4; 1% instances), [ga-pos/VERB]()-[ga-pos/SCONJ]() (3; 0% instances), [ga-pos/ADJ]()-[ga-pos/PUNCT]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/NOUN]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/SCONJ]() (1; 0% instances), [ga-pos/PROPN]()-[ga-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cc	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 cc	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cc	color:blue
1	Éire	Éire	PROPN	Noun	Case=Com|Gender=Fem|Number=Sing	0	root	_	_
2	agus	agus	CONJ	Coord	_	1	cc	_	_
3	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	4	det	_	_
4	dúshaothrú	dúshaothrú	NOUN	Noun	VerbForm=Inf	1	conj	_	_
5	a	a	PART	Vb	PartType=Vb|PronType=Rel	6	dobj	_	_
6	rinneadh	déan	VERB	PastInd	Mood=Ind|Tense=Past|Voice=Auto	4	acl:relcl	_	_
7	uirthi	ar	ADP	Prep	Gender=Fem|Number=Sing|Person=3	6	nmod:prep	_	_
8	san	i	ADP	Art	Number=Sing|PronType=Art	9	case	_	_
9	am	am	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	6	nmod	_	_
10	atá	bí	VERB	PresInd	Mood=Ind|PronType=Rel|Tense=Pres	9	acl:relcl	_	_
11	thart	thart	ADV	Dir	_	10	xcomp:pred	_	_
12	.	.	PUNCT	.	_	1	punct	_	_

~~~


