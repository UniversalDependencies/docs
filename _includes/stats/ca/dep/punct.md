

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Catalan)

This relation is universal.

53377 nodes (10%) are attached to their parents as `punct`.

36803 instances of `punct` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.6515727747906.

The following 17 pairs of parts of speech are connected with `punct`: [ca-pos/VERB]()-[ca-pos/PUNCT]() (23702; 44% instances), [ca-pos/NOUN]()-[ca-pos/PUNCT]() (13356; 25% instances), [ca-pos/PROPN]()-[ca-pos/PUNCT]() (7356; 14% instances), [ca-pos/ADJ]()-[ca-pos/PUNCT]() (3610; 7% instances), [ca-pos/ADV]()-[ca-pos/PUNCT]() (1891; 4% instances), [ca-pos/ADP]()-[ca-pos/PUNCT]() (814; 2% instances), [ca-pos/NUM]()-[ca-pos/PUNCT]() (753; 1% instances), [ca-pos/PRON]()-[ca-pos/PUNCT]() (635; 1% instances), [ca-pos/CONJ]()-[ca-pos/PUNCT]() (373; 1% instances), [ca-pos/DET]()-[ca-pos/PUNCT]() (278; 1% instances), [ca-pos/SYM]()-[ca-pos/PUNCT]() (216; 0% instances), [ca-pos/AUX]()-[ca-pos/PUNCT]() (180; 0% instances), [ca-pos/PART]()-[ca-pos/PUNCT]() (90; 0% instances), [ca-pos/SCONJ]()-[ca-pos/PUNCT]() (65; 0% instances), [ca-pos/PUNCT]()-[ca-pos/PUNCT]() (44; 0% instances), [ca-pos/INTJ]()-[ca-pos/PUNCT]() (12; 0% instances), [ca-pos/X]()-[ca-pos/PUNCT]() (2; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 punct	color:blue
1	D'	de	ADP	ADP	AdpType=Prep	3	case	_	_
2	aquestes	aquest	DET	DET	Gender=Fem|Number=Plur|PronType=Dem	3	det	_	_
3	activitats	activitat	NOUN	NOUN	Gender=Fem|Number=Plur	9	nmod	_	_
4	,	,	PUNCT	PUNCT	PunctType=Comm	3	punct	_	_
5	algunes	algun	PRON	PRON	Gender=Fem|Number=Plur|PronType=Ind	9	nsubj	_	_
6	no	no	ADV	ADV	Negative=Neg	9	neg	_	_
7	s'	es	PRON	PRON	_	9	dobj	_	_
8	han	haver	AUX	AUX	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	_
9	obert	obrir	VERB	VERB	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
10	a	a	ADP	ADP	AdpType=Prep	12	case	_	_
11	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	públic	públic	NOUN	NOUN	Gender=Masc|Number=Sing	9	dobj	_	_
13	.	.	PUNCT	PUNCT	PunctType=Peri	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 punct	color:blue
1	D'	de	ADP	ADP	AdpType=Prep	3	case	_	_
2	aquestes	aquest	DET	DET	Gender=Fem|Number=Plur|PronType=Dem	3	det	_	_
3	activitats	activitat	NOUN	NOUN	Gender=Fem|Number=Plur	9	nmod	_	_
4	,	,	PUNCT	PUNCT	PunctType=Comm	3	punct	_	_
5	algunes	algun	PRON	PRON	Gender=Fem|Number=Plur|PronType=Ind	9	nsubj	_	_
6	no	no	ADV	ADV	Negative=Neg	9	neg	_	_
7	s'	es	PRON	PRON	_	9	dobj	_	_
8	han	haver	AUX	AUX	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	_
9	obert	obrir	VERB	VERB	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
10	a	a	ADP	ADP	AdpType=Prep	12	case	_	_
11	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	públic	públic	NOUN	NOUN	Gender=Masc|Number=Sing	9	dobj	_	_
13	.	.	PUNCT	PUNCT	PunctType=Peri	9	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 11 punct	color:blue
1	Ramon	Ramon	PROPN	PROPN	_	0	root	_	MWE=Ramon_Barnils|MWEPOS=PROPN
2	Barnils	Barnils	PROPN	PROPN	_	1	name	_	_
3	El	El	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	MWE=El_Temps|MWEPOS=PROPN
4	Temps	Temps	PROPN	PROPN	_	1	name	_	_
5	,	,	PUNCT	PUNCT	PunctType=Comm	6	punct	_	_
6	7	7	NUM	NUM	NumForm=Digit|NumType=Card	1	appos	_	MWE=7_de_juliol_de_1986|MWEPOS=NOUN
7	de	de	ADP	ADP	AdpType=Prep	8	case	_	_
8	juliol	juliol	NOUN	NOUN	_	6	compound	_	_
9	de	de	ADP	ADP	AdpType=Prep	10	case	_	_
10	1986	1986	NUM	NUM	NumForm=Digit|NumType=Card	6	compound	_	_
11	.	.	PUNCT	PUNCT	PunctType=Peri	1	punct	_	_

~~~


