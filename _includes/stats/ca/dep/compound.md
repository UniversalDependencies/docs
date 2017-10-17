

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Catalan)

This relation is universal.

2991 nodes (1%) are attached to their parents as `compound`.

2986 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.91407556001337.

The following 37 pairs of parts of speech are connected with `compound`: [ca-pos/NUM]()-[ca-pos/NOUN]() (679; 23% instances), [ca-pos/NOUN]()-[ca-pos/NUM]() (620; 21% instances), [ca-pos/VERB]()-[ca-pos/NOUN]() (593; 20% instances), [ca-pos/NOUN]()-[ca-pos/NOUN]() (446; 15% instances), [ca-pos/NUM]()-[ca-pos/NUM]() (387; 13% instances), [ca-pos/VERB]()-[ca-pos/VERB]() (77; 3% instances), [ca-pos/DET]()-[ca-pos/DET]() (33; 1% instances), [ca-pos/NOUN]()-[ca-pos/PUNCT]() (29; 1% instances), [ca-pos/AUX]()-[ca-pos/NOUN]() (18; 1% instances), [ca-pos/ADP]()-[ca-pos/NOUN]() (16; 1% instances), [ca-pos/DET]()-[ca-pos/ADP]() (14; 0% instances), [ca-pos/NUM]()-[ca-pos/ADP]() (14; 0% instances), [ca-pos/VERB]()-[ca-pos/ADP]() (9; 0% instances), [ca-pos/NOUN]()-[ca-pos/ADP]() (7; 0% instances), [ca-pos/NOUN]()-[ca-pos/CCONJ]() (5; 0% instances), [ca-pos/CCONJ]()-[ca-pos/NOUN]() (4; 0% instances), [ca-pos/DET]()-[ca-pos/NOUN]() (4; 0% instances), [ca-pos/VERB]()-[ca-pos/DET]() (4; 0% instances), [ca-pos/NUM]()-[ca-pos/DET]() (3; 0% instances), [ca-pos/ADP]()-[ca-pos/PRON]() (2; 0% instances), [ca-pos/AUX]()-[ca-pos/AUX]() (2; 0% instances), [ca-pos/CCONJ]()-[ca-pos/ADV]() (2; 0% instances), [ca-pos/CCONJ]()-[ca-pos/PUNCT]() (2; 0% instances), [ca-pos/DET]()-[ca-pos/NUM]() (2; 0% instances), [ca-pos/NUM]()-[ca-pos/PUNCT]() (2; 0% instances), [ca-pos/PRON]()-[ca-pos/CCONJ]() (2; 0% instances), [ca-pos/PRON]()-[ca-pos/PRON]() (2; 0% instances), [ca-pos/PUNCT]()-[ca-pos/NOUN]() (2; 0% instances), [ca-pos/PUNCT]()-[ca-pos/PUNCT]() (2; 0% instances), [ca-pos/SYM]()-[ca-pos/NOUN]() (2; 0% instances), [ca-pos/ADV]()-[ca-pos/NOUN]() (1; 0% instances), [ca-pos/AUX]()-[ca-pos/ADP]() (1; 0% instances), [ca-pos/CCONJ]()-[ca-pos/CCONJ]() (1; 0% instances), [ca-pos/DET]()-[ca-pos/PRON]() (1; 0% instances), [ca-pos/NOUN]()-[ca-pos/DET]() (1; 0% instances), [ca-pos/NOUN]()-[ca-pos/PART]() (1; 0% instances), [ca-pos/PRON]()-[ca-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 compound	color:blue
1	La	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	inauguració	inauguració	NOUN	NOUN	Gender=Fem|Number=Sing	5	nsubj	_	_
3	oficial	oficial	ADJ	ADJ	Number=Sing	2	amod	_	_
4	es	es	PRON	PRON	_	5	obj	_	_
5	farà	fer	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
6	demà	demà	ADV	ADV	_	5	advmod	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	PunctType=Comm	10	punct	_	_
8	a	a	ADP	ADP	AdpType=Prep	10	case	_	_
9	les	el	DET	DET	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	10	det	_	_
10	12	12	NUM	NUM	NumForm=Digit|NumType=Card	5	obl	_	MWE=12_del_migdia|MWEPOS=NOUN
11	del	del	ADP	ADP	AdpType=Preppron|Gender=Masc|Number=Sing	12	case	_	_
12	migdia	migdia	NOUN	NOUN	_	10	compound	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	PunctType=Peri	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 compound	color:blue
1	Va	anar	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	aux	_	_
2	tornar	tornar	VERB	VERB	VerbForm=Inf	0	root	_	_
3	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	març	març	NOUN	NOUN	_	2	obl	_	MWE=març_del_1986|MWEPOS=NOUN
5	del	del	ADP	ADP	AdpType=Preppron|Gender=Masc|Number=Sing	6	case	_	_
6	1986	1986	NUM	NUM	NumForm=Digit|NumType=Card	4	compound	_	_
7	i	i	CCONJ	CCONJ	_	10	cc	_	_
8	es	ell	PRON	PRON	Person=3	10	obj	_	_
9	va	anar	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
10	presentar	presentar	VERB	VERB	VerbForm=Inf	2	conj	_	_
11	davant	davant	ADP	ADP	AdpType=Prep	13	case	_	_
12	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	jutge	jutge	NOUN	NOUN	Gender=Masc|Number=Sing	10	obl	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound	color:blue
1	En	en	ADP	ADP	AdpType=Prep	3	case	_	_
2	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	concurs	concurs	NOUN	NOUN	Gender=Masc|Number=Sing	6	obj	_	_
4	hi	hi	PRON	PRON	Person=3|PronType=Prs	6	obj	_	_
5	ha	haver	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	pres	prendre	VERB	VERB	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	MWE=pres_part|MWEPOS=VERB
7	part	part	NOUN	NOUN	Number=Sing	6	compound	_	_
8	133	133	NUM	NUM	NumForm=Digit	9	nummod	_	_
9	equips	equip	NOUN	NOUN	Gender=Masc|Number=Plur	6	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	PunctType=Peri	6	punct	_	_

~~~


