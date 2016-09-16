

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Catalan)

This relation is universal.

9590 nodes (2%) are attached to their parents as `acl`.

9559 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.72064650677789.

The following 39 pairs of parts of speech are connected with `acl`: [ca-pos/NOUN]()-[ca-pos/VERB]() (7796; 81% instances), [ca-pos/PROPN]()-[ca-pos/VERB]() (662; 7% instances), [ca-pos/NOUN]()-[ca-pos/ADJ]() (247; 3% instances), [ca-pos/NOUN]()-[ca-pos/NOUN]() (222; 2% instances), [ca-pos/PRON]()-[ca-pos/VERB]() (186; 2% instances), [ca-pos/ADJ]()-[ca-pos/VERB]() (144; 2% instances), [ca-pos/ADV]()-[ca-pos/VERB]() (49; 1% instances), [ca-pos/NOUN]()-[ca-pos/AUX]() (37; 0% instances), [ca-pos/NOUN]()-[ca-pos/PRON]() (33; 0% instances), [ca-pos/PROPN]()-[ca-pos/NOUN]() (33; 0% instances), [ca-pos/PROPN]()-[ca-pos/ADJ]() (25; 0% instances), [ca-pos/CONJ]()-[ca-pos/VERB]() (23; 0% instances), [ca-pos/NUM]()-[ca-pos/VERB]() (21; 0% instances), [ca-pos/NOUN]()-[ca-pos/PROPN]() (15; 0% instances), [ca-pos/DET]()-[ca-pos/VERB]() (13; 0% instances), [ca-pos/ADP]()-[ca-pos/VERB]() (12; 0% instances), [ca-pos/PRON]()-[ca-pos/ADJ]() (12; 0% instances), [ca-pos/SYM]()-[ca-pos/VERB]() (9; 0% instances), [ca-pos/NOUN]()-[ca-pos/ADV]() (6; 0% instances), [ca-pos/PRON]()-[ca-pos/PRON]() (6; 0% instances), [ca-pos/NOUN]()-[ca-pos/NUM]() (5; 0% instances), [ca-pos/NOUN]()-[ca-pos/SYM]() (4; 0% instances), [ca-pos/PRON]()-[ca-pos/NOUN]() (4; 0% instances), [ca-pos/ADJ]()-[ca-pos/NOUN]() (3; 0% instances), [ca-pos/ADV]()-[ca-pos/NOUN]() (3; 0% instances), [ca-pos/NOUN]()-[ca-pos/ADP]() (3; 0% instances), [ca-pos/ADJ]()-[ca-pos/ADJ]() (2; 0% instances), [ca-pos/CONJ]()-[ca-pos/NOUN]() (2; 0% instances), [ca-pos/PROPN]()-[ca-pos/PRON]() (2; 0% instances), [ca-pos/PROPN]()-[ca-pos/PROPN]() (2; 0% instances), [ca-pos/ADJ]()-[ca-pos/PRON]() (1; 0% instances), [ca-pos/ADV]()-[ca-pos/ADJ]() (1; 0% instances), [ca-pos/DET]()-[ca-pos/PROPN]() (1; 0% instances), [ca-pos/NUM]()-[ca-pos/NOUN]() (1; 0% instances), [ca-pos/PART]()-[ca-pos/VERB]() (1; 0% instances), [ca-pos/PRON]()-[ca-pos/ADV]() (1; 0% instances), [ca-pos/PRON]()-[ca-pos/AUX]() (1; 0% instances), [ca-pos/SYM]()-[ca-pos/NOUN]() (1; 0% instances), [ca-pos/VERB]()-[ca-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 acl	color:blue
1	Estem	estar	VERB	VERB	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	cop	_	_
2	,	,	PUNCT	PUNCT	PunctType=Comm	3	punct	_	_
3	encara	encara	ADV	ADV	_	5	advmod	_	_
4	,	,	PUNCT	PUNCT	PunctType=Comm	3	punct	_	_
5	lluny	lluny	ADV	ADV	_	0	root	_	_
6	de	de	ADP	ADP	AdpType=Prep	8	case	_	_
7	els	el	DET	DET	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	_	_
8	objectius	objectiu	NOUN	NOUN	Gender=Masc|Number=Plur	5	nmod	_	_
9	que	que	PRON	PRON	PronType=Rel	12	dobj	_	_
10	ens	jo	PRON	PRON	Number=Plur|Person=1|PronType=Prs	12	dobj	_	_
11	vam	anar	AUX	AUX	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	12	aux	_	_
12	marcar	marcar	VERB	VERB	VerbForm=Inf	8	acl	_	_
13	.	.	PUNCT	PUNCT	PunctType=Peri	5	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 14 acl	color:blue
1	Aquest	aquest	DET	DET	Gender=Masc|Number=Sing|PronType=Dem	2	det	_	_
2	any	any	NOUN	NOUN	Gender=Masc|Number=Sing	7	nmod	_	_
3	,	,	PUNCT	PUNCT	PunctType=Comm	2	punct	_	_
4	Els	Els	DET	DET	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	_	MWE=Els_Pets|MWEPOS=PROPN
5	Pets	Pets	PROPN	PROPN	_	7	nsubj	_	_
6	han	haver	AUX	AUX	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	editat	editar	VERB	VERB	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
8	Sol	Sol	PROPN	PROPN	_	7	dobj	_	_
9	,	,	PUNCT	PUNCT	PunctType=Comm	14	punct	_	_
10	de	de	ADP	ADP	AdpType=Prep	12	case	_	_
11	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	qual	qual	PRON	PRON	Number=Sing|PronType=Rel	14	dobj	_	_
13	han	haver	AUX	AUX	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	14	aux	_	_
14	venut	vendre	VERB	VERB	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	8	acl	_	_
15	46.000	46000	NUM	NUM	NumForm=Digit	16	nummod	_	_
16	discos	disc	NOUN	NOUN	Gender=Masc|Number=Plur	14	dobj	_	_
17	.	.	PUNCT	PUNCT	PunctType=Peri	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl	color:blue
1	-	-	PUNCT	PUNCT	PunctType=Dash	2	punct	_	_
2	Té	tenir	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	fama	fama	NOUN	NOUN	Gender=Fem|Number=Sing	2	dobj	_	_
4	de	de	ADP	ADP	AdpType=Prep	7	mark	_	_
5	ser	ser	AUX	AUX	VerbForm=Inf	7	cop	_	_
6	molt	molt	ADV	ADV	_	7	advmod	_	_
7	treballadora	treballador	ADJ	ADJ	Gender=Fem|Number=Sing	3	acl	_	_
8	,	,	PUNCT	PUNCT	PunctType=Comm	10	punct	_	_
9	una	un	DET	DET	Gender=Fem|Number=Sing|PronType=Ind	10	det	_	_
10	formigueta	formigueta	NOUN	NOUN	Gender=Fem|Number=Sing	7	dobj	_	_
11	.	.	PUNCT	PUNCT	PunctType=Peri	2	punct	_	_

~~~


