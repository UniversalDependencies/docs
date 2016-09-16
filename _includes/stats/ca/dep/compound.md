

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Catalan)

This relation is universal.

3400 nodes (1%) are attached to their parents as `compound`.

3395 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.96088235294118.

The following 36 pairs of parts of speech are connected with `compound`: [ca-pos/NUM]()-[ca-pos/NOUN]() (769; 23% instances), [ca-pos/NOUN]()-[ca-pos/NUM]() (707; 21% instances), [ca-pos/VERB]()-[ca-pos/NOUN]() (674; 20% instances), [ca-pos/NOUN]()-[ca-pos/NOUN]() (523; 15% instances), [ca-pos/NUM]()-[ca-pos/NUM]() (429; 13% instances), [ca-pos/VERB]()-[ca-pos/VERB]() (90; 3% instances), [ca-pos/DET]()-[ca-pos/DET]() (40; 1% instances), [ca-pos/NOUN]()-[ca-pos/PUNCT]() (34; 1% instances), [ca-pos/AUX]()-[ca-pos/NOUN]() (20; 1% instances), [ca-pos/ADP]()-[ca-pos/NOUN]() (17; 1% instances), [ca-pos/DET]()-[ca-pos/ADP]() (16; 0% instances), [ca-pos/NUM]()-[ca-pos/ADP]() (16; 0% instances), [ca-pos/VERB]()-[ca-pos/ADP]() (10; 0% instances), [ca-pos/NOUN]()-[ca-pos/ADP]() (7; 0% instances), [ca-pos/DET]()-[ca-pos/NOUN]() (5; 0% instances), [ca-pos/NOUN]()-[ca-pos/CONJ]() (5; 0% instances), [ca-pos/CONJ]()-[ca-pos/NOUN]() (4; 0% instances), [ca-pos/VERB]()-[ca-pos/DET]() (4; 0% instances), [ca-pos/NUM]()-[ca-pos/DET]() (3; 0% instances), [ca-pos/ADP]()-[ca-pos/PRON]() (2; 0% instances), [ca-pos/AUX]()-[ca-pos/AUX]() (2; 0% instances), [ca-pos/CONJ]()-[ca-pos/ADV]() (2; 0% instances), [ca-pos/CONJ]()-[ca-pos/PUNCT]() (2; 0% instances), [ca-pos/DET]()-[ca-pos/NUM]() (2; 0% instances), [ca-pos/NUM]()-[ca-pos/PUNCT]() (2; 0% instances), [ca-pos/PRON]()-[ca-pos/CONJ]() (2; 0% instances), [ca-pos/PRON]()-[ca-pos/PRON]() (2; 0% instances), [ca-pos/PUNCT]()-[ca-pos/NOUN]() (2; 0% instances), [ca-pos/PUNCT]()-[ca-pos/PUNCT]() (2; 0% instances), [ca-pos/ADV]()-[ca-pos/NOUN]() (1; 0% instances), [ca-pos/AUX]()-[ca-pos/ADP]() (1; 0% instances), [ca-pos/CONJ]()-[ca-pos/CONJ]() (1; 0% instances), [ca-pos/DET]()-[ca-pos/PRON]() (1; 0% instances), [ca-pos/NOUN]()-[ca-pos/DET]() (1; 0% instances), [ca-pos/PRON]()-[ca-pos/VERB]() (1; 0% instances), [ca-pos/SYM]()-[ca-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 compound	color:blue
1	La	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	inauguració	inauguració	NOUN	NOUN	Gender=Fem|Number=Sing	5	nsubj	_	_
3	oficial	oficial	ADJ	ADJ	Number=Sing	2	amod	_	_
4	es	es	PRON	PRON	_	5	dobj	_	_
5	farà	fer	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
6	demà	demà	ADV	ADV	_	5	advmod	_	_
7	,	,	PUNCT	PUNCT	PunctType=Comm	10	punct	_	_
8	a	a	ADP	ADP	AdpType=Prep	10	case	_	_
9	les	el	DET	DET	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	10	det	_	_
10	12	12	NUM	NUM	NumForm=Digit|NumType=Card	5	nmod	_	MWE=12_del_migdia|MWEPOS=NOUN
11	de	de	ADP	ADP	AdpType=Prep	13	case	_	_
12	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	migdia	migdia	NOUN	NOUN	_	10	compound	_	_
14	.	.	PUNCT	PUNCT	PunctType=Peri	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 compound	color:blue
1	Va	anar	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	aux	_	_
2	tornar	tornar	VERB	VERB	VerbForm=Inf	0	root	_	_
3	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	març	març	NOUN	NOUN	_	2	nmod	_	MWE=març_del_1986|MWEPOS=NOUN
5	de	de	ADP	ADP	AdpType=Prep	7	case	_	_
6	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	1986	1986	NUM	NUM	NumForm=Digit|NumType=Card	4	compound	_	_
8	i	i	CONJ	CONJ	_	2	cc	_	_
9	es	ell	PRON	PRON	Person=3	11	dobj	_	_
10	va	anar	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux	_	_
11	presentar	presentar	VERB	VERB	VerbForm=Inf	2	conj	_	_
12	davant	davant	ADP	ADP	AdpType=Prep	14	case	_	_
13	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	jutge	jutge	NOUN	NOUN	Gender=Masc|Number=Sing	11	nmod	_	_
15	.	.	PUNCT	PUNCT	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound	color:blue
1	En	en	ADP	ADP	AdpType=Prep	3	case	_	_
2	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	concurs	concurs	NOUN	NOUN	Gender=Masc|Number=Sing	6	dobj	_	_
4	hi	hi	PRON	PRON	Person=3|PronType=Prs	6	dobj	_	_
5	ha	haver	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	pres	prendre	VERB	VERB	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	MWE=pres_part|MWEPOS=VERB
7	part	part	NOUN	NOUN	Number=Sing	6	compound	_	_
8	133	133	NUM	NUM	NumForm=Digit	9	nummod	_	_
9	equips	equip	NOUN	NOUN	Gender=Masc|Number=Plur	6	nsubj	_	_
10	.	.	PUNCT	PUNCT	PunctType=Peri	6	punct	_	_

~~~


