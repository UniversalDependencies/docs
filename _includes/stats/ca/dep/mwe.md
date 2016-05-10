

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Catalan)

This relation is universal.

10990 nodes (2%) are attached to their parents as `mwe`.

10983 instances of `mwe` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.54003639672429.

The following 55 pairs of parts of speech are connected with `mwe`: [ca-pos/ADP]()-[ca-pos/NOUN]() (2608; 24% instances), [ca-pos/ADP]()-[ca-pos/ADP]() (2527; 23% instances), [ca-pos/ADP]()-[ca-pos/DET]() (1022; 9% instances), [ca-pos/SCONJ]()-[ca-pos/ADP]() (702; 6% instances), [ca-pos/ADV]()-[ca-pos/SCONJ]() (552; 5% instances), [ca-pos/ADP]()-[ca-pos/ADV]() (461; 4% instances), [ca-pos/NOUN]()-[ca-pos/ADP]() (444; 4% instances), [ca-pos/ADP]()-[ca-pos/SCONJ]() (286; 3% instances), [ca-pos/ADV]()-[ca-pos/ADP]() (232; 2% instances), [ca-pos/CONJ]()-[ca-pos/SCONJ]() (219; 2% instances), [ca-pos/PRON]()-[ca-pos/CONJ]() (206; 2% instances), [ca-pos/NOUN]()-[ca-pos/NOUN]() (152; 1% instances), [ca-pos/NOUN]()-[ca-pos/SCONJ]() (148; 1% instances), [ca-pos/NOUN]()-[ca-pos/DET]() (125; 1% instances), [ca-pos/ADV]()-[ca-pos/CONJ]() (121; 1% instances), [ca-pos/SCONJ]()-[ca-pos/NOUN]() (121; 1% instances), [ca-pos/CONJ]()-[ca-pos/NOUN]() (119; 1% instances), [ca-pos/ADV]()-[ca-pos/PRON]() (116; 1% instances), [ca-pos/PRON]()-[ca-pos/SCONJ]() (113; 1% instances), [ca-pos/DET]()-[ca-pos/NOUN]() (100; 1% instances), [ca-pos/PART]()-[ca-pos/NOUN]() (88; 1% instances), [ca-pos/ADV]()-[ca-pos/NOUN]() (79; 1% instances), [ca-pos/ADV]()-[ca-pos/DET]() (62; 1% instances), [ca-pos/ADP]()-[ca-pos/PRON]() (46; 0% instances), [ca-pos/PART]()-[ca-pos/ADV]() (45; 0% instances), [ca-pos/PRON]()-[ca-pos/NOUN]() (36; 0% instances), [ca-pos/ADP]()-[ca-pos/NUM]() (30; 0% instances), [ca-pos/DET]()-[ca-pos/CONJ]() (30; 0% instances), [ca-pos/DET]()-[ca-pos/SCONJ]() (27; 0% instances), [ca-pos/NOUN]()-[ca-pos/CONJ]() (23; 0% instances), [ca-pos/PRON]()-[ca-pos/ADV]() (23; 0% instances), [ca-pos/SCONJ]()-[ca-pos/SCONJ]() (19; 0% instances), [ca-pos/ADP]()-[ca-pos/ADJ]() (16; 0% instances), [ca-pos/ADV]()-[ca-pos/ADV]() (16; 0% instances), [ca-pos/PRON]()-[ca-pos/ADP]() (11; 0% instances), [ca-pos/ADP]()-[ca-pos/CONJ]() (10; 0% instances), [ca-pos/SCONJ]()-[ca-pos/ADV]() (8; 0% instances), [ca-pos/CONJ]()-[ca-pos/ADV]() (6; 0% instances), [ca-pos/SCONJ]()-[ca-pos/DET]() (6; 0% instances), [ca-pos/NOUN]()-[ca-pos/NUM]() (4; 0% instances), [ca-pos/SCONJ]()-[ca-pos/PART]() (4; 0% instances), [ca-pos/CONJ]()-[ca-pos/ADP]() (3; 0% instances), [ca-pos/CONJ]()-[ca-pos/CONJ]() (3; 0% instances), [ca-pos/DET]()-[ca-pos/DET]() (3; 0% instances), [ca-pos/NOUN]()-[ca-pos/ADV]() (3; 0% instances), [ca-pos/NOUN]()-[ca-pos/VERB]() (3; 0% instances), [ca-pos/ADJ]()-[ca-pos/ADP]() (2; 0% instances), [ca-pos/ADP]()-[ca-pos/PUNCT]() (2; 0% instances), [ca-pos/NOUN]()-[ca-pos/PUNCT]() (2; 0% instances), [ca-pos/ADJ]()-[ca-pos/DET]() (1; 0% instances), [ca-pos/ADJ]()-[ca-pos/SCONJ]() (1; 0% instances), [ca-pos/ADV]()-[ca-pos/NUM]() (1; 0% instances), [ca-pos/CONJ]()-[ca-pos/DET]() (1; 0% instances), [ca-pos/CONJ]()-[ca-pos/PUNCT]() (1; 0% instances), [ca-pos/SCONJ]()-[ca-pos/PUNCT]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 mwe	color:blue
1	per	per	ADP	ADP	AdpType=Prep	7	case	_	MWE=Pel_que_fa_a|MWEPOS=ADP
2	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	1	mwe	_	_
3	que	que	SCONJ	SCONJ	_	1	mwe	_	_
4	fa	fa	NOUN	NOUN	_	1	mwe	_	_
5	a	a	ADP	ADP	AdpType=Prep	1	mwe	_	_
6	les	el	DET	DET	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	7	det	_	_
7	seccions	secció	NOUN	NOUN	Gender=Fem|Number=Plur	12	nmod	_	_
8	,	,	PUNCT	PUNCT	PunctType=Comm	7	punct	_	_
9	se	se	PRON	PRON	_	12	dobj	_	_
10	n'	en	PRON	PRON	Person=3|PronType=Prs	12	nsubj	_	_
11	han	haver	AUX	AUX	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	_
12	creat	crear	VERB	VERB	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
13	de	de	ADP	ADP	AdpType=Prep	14	case	_	_
14	noves	nou	ADJ	ADJ	Gender=Fem|Number=Plur	12	nsubj	_	_
15	.	.	PUNCT	PUNCT	PunctType=Peri	12	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 mwe	color:blue
1	per	per	ADP	ADP	AdpType=Prep	7	case	_	MWE=Pel_que_fa_a|MWEPOS=ADP
2	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	1	mwe	_	_
3	que	que	SCONJ	SCONJ	_	1	mwe	_	_
4	fa	fa	NOUN	NOUN	_	1	mwe	_	_
5	a	a	ADP	ADP	AdpType=Prep	1	mwe	_	_
6	les	el	DET	DET	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	7	det	_	_
7	seccions	secció	NOUN	NOUN	Gender=Fem|Number=Plur	12	nmod	_	_
8	,	,	PUNCT	PUNCT	PunctType=Comm	7	punct	_	_
9	se	se	PRON	PRON	_	12	dobj	_	_
10	n'	en	PRON	PRON	Person=3|PronType=Prs	12	nsubj	_	_
11	han	haver	AUX	AUX	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	_
12	creat	crear	VERB	VERB	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
13	de	de	ADP	ADP	AdpType=Prep	14	case	_	_
14	noves	nou	ADJ	ADJ	Gender=Fem|Number=Plur	12	nsubj	_	_
15	.	.	PUNCT	PUNCT	PunctType=Peri	12	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mwe	color:blue
1	per	per	ADP	ADP	AdpType=Prep	7	case	_	MWE=Pel_que_fa_a|MWEPOS=ADP
2	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	1	mwe	_	_
3	que	que	SCONJ	SCONJ	_	1	mwe	_	_
4	fa	fa	NOUN	NOUN	_	1	mwe	_	_
5	a	a	ADP	ADP	AdpType=Prep	1	mwe	_	_
6	les	el	DET	DET	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	7	det	_	_
7	seccions	secció	NOUN	NOUN	Gender=Fem|Number=Plur	12	nmod	_	_
8	,	,	PUNCT	PUNCT	PunctType=Comm	7	punct	_	_
9	se	se	PRON	PRON	_	12	dobj	_	_
10	n'	en	PRON	PRON	Person=3|PronType=Prs	12	nsubj	_	_
11	han	haver	AUX	AUX	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	_
12	creat	crear	VERB	VERB	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
13	de	de	ADP	ADP	AdpType=Prep	14	case	_	_
14	noves	nou	ADJ	ADJ	Gender=Fem|Number=Plur	12	nsubj	_	_
15	.	.	PUNCT	PUNCT	PunctType=Peri	12	punct	_	_

~~~


