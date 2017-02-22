

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Catalan)

This relation is universal.

8587 nodes (2%) are attached to their parents as `acl`.

8557 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.59799697216723.

The following 40 pairs of parts of speech are connected with `acl`: [ca-pos/NOUN]()-[ca-pos/VERB]() (6956; 81% instances), [ca-pos/PROPN]()-[ca-pos/VERB]() (586; 7% instances), [ca-pos/NOUN]()-[ca-pos/ADJ]() (225; 3% instances), [ca-pos/NOUN]()-[ca-pos/NOUN]() (202; 2% instances), [ca-pos/PRON]()-[ca-pos/VERB]() (174; 2% instances), [ca-pos/ADJ]()-[ca-pos/VERB]() (130; 2% instances), [ca-pos/NOUN]()-[ca-pos/AUX]() (46; 1% instances), [ca-pos/ADV]()-[ca-pos/VERB]() (45; 1% instances), [ca-pos/PROPN]()-[ca-pos/NOUN]() (30; 0% instances), [ca-pos/NOUN]()-[ca-pos/PRON]() (26; 0% instances), [ca-pos/CCONJ]()-[ca-pos/VERB]() (22; 0% instances), [ca-pos/PROPN]()-[ca-pos/ADJ]() (22; 0% instances), [ca-pos/NUM]()-[ca-pos/VERB]() (19; 0% instances), [ca-pos/ADP]()-[ca-pos/VERB]() (14; 0% instances), [ca-pos/DET]()-[ca-pos/VERB]() (11; 0% instances), [ca-pos/NOUN]()-[ca-pos/PROPN]() (11; 0% instances), [ca-pos/PRON]()-[ca-pos/ADJ]() (11; 0% instances), [ca-pos/SYM]()-[ca-pos/VERB]() (8; 0% instances), [ca-pos/PRON]()-[ca-pos/PRON]() (6; 0% instances), [ca-pos/NOUN]()-[ca-pos/ADV]() (4; 0% instances), [ca-pos/NOUN]()-[ca-pos/NUM]() (4; 0% instances), [ca-pos/PRON]()-[ca-pos/NOUN]() (4; 0% instances), [ca-pos/PROPN]()-[ca-pos/AUX]() (4; 0% instances), [ca-pos/ADJ]()-[ca-pos/NOUN]() (3; 0% instances), [ca-pos/ADV]()-[ca-pos/NOUN]() (3; 0% instances), [ca-pos/NOUN]()-[ca-pos/SYM]() (3; 0% instances), [ca-pos/CCONJ]()-[ca-pos/NOUN]() (2; 0% instances), [ca-pos/NOUN]()-[ca-pos/ADP]() (2; 0% instances), [ca-pos/PRON]()-[ca-pos/AUX]() (2; 0% instances), [ca-pos/PROPN]()-[ca-pos/PRON]() (2; 0% instances), [ca-pos/ADJ]()-[ca-pos/ADJ]() (1; 0% instances), [ca-pos/ADJ]()-[ca-pos/PRON]() (1; 0% instances), [ca-pos/ADV]()-[ca-pos/ADJ]() (1; 0% instances), [ca-pos/DET]()-[ca-pos/PROPN]() (1; 0% instances), [ca-pos/NUM]()-[ca-pos/NOUN]() (1; 0% instances), [ca-pos/PART]()-[ca-pos/VERB]() (1; 0% instances), [ca-pos/PRON]()-[ca-pos/ADV]() (1; 0% instances), [ca-pos/PROPN]()-[ca-pos/PROPN]() (1; 0% instances), [ca-pos/SYM]()-[ca-pos/NOUN]() (1; 0% instances), [ca-pos/VERB]()-[ca-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 acl	color:blue
1	Estem	estar	AUX	AUX	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	cop	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	PunctType=Comm	3	punct	_	_
3	encara	encara	ADV	ADV	_	5	advmod	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	PunctType=Comm	3	punct	_	_
5	lluny	lluny	ADV	ADV	_	0	root	_	_
6	dels	del	ADP	ADP	AdpType=Preppron|Gender=Masc|Number=Plur	7	case	_	_
7	objectius	objectiu	NOUN	NOUN	Gender=Masc|Number=Plur	5	obl	_	_
8	que	que	PRON	PRON	PronType=Rel	11	obj	_	_
9	ens	jo	PRON	PRON	Number=Plur|Person=1|PronType=Prs	11	obj	_	_
10	vam	anar	AUX	AUX	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	11	aux	_	_
11	marcar	marcar	VERB	VERB	VerbForm=Inf	7	acl	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	PunctType=Peri	5	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 13 acl	color:blue
1	Aquest	aquest	DET	DET	Gender=Masc|Number=Sing|PronType=Dem	2	det	_	_
2	any	any	NOUN	NOUN	Gender=Masc|Number=Sing	7	obl	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	PunctType=Comm	2	punct	_	_
4	Els	Els	DET	DET	Gender=Masc|Number=Plur|PronType=Art	5	det	_	MWE=Els_Pets|MWEPOS=PROPN
5	Pets	Pets	PROPN	PROPN	_	7	nsubj	_	_
6	han	haver	AUX	AUX	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	editat	editar	VERB	VERB	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
8	Sol	Sol	PROPN	PROPN	_	7	obj	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	PunctType=Comm	13	punct	_	_
10	del	del	ADP	ADP	AdpType=Preppron|Gender=Masc|Number=Sing	11	case	_	_
11	qual	qual	PRON	PRON	Number=Sing|PronType=Rel	13	obj	_	_
12	han	haver	AUX	AUX	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	13	aux	_	_
13	venut	vendre	VERB	VERB	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	8	acl	_	_
14	46.000	46000	NUM	NUM	NumForm=Digit	15	nummod	_	_
15	discos	disc	NOUN	NOUN	Gender=Masc|Number=Plur	13	obj	_	SpaceAfter=No
16	.	.	PUNCT	PUNCT	PunctType=Peri	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl	color:blue
1	-	-	PUNCT	PUNCT	PunctType=Dash	2	punct	_	_
2	Té	tenir	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	fama	fama	NOUN	NOUN	Gender=Fem|Number=Sing	2	obj	_	_
4	de	de	ADP	ADP	AdpType=Prep	7	mark	_	_
5	ser	ser	AUX	AUX	VerbForm=Inf	7	cop	_	_
6	molt	molt	ADV	ADV	_	7	advmod	_	_
7	treballadora	treballador	ADJ	ADJ	Gender=Fem|Number=Sing	3	acl	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	PunctType=Comm	10	punct	_	_
9	una	un	DET	DET	Gender=Fem|Number=Sing|PronType=Ind	10	det	_	_
10	formigueta	formigueta	NOUN	NOUN	Gender=Fem|Number=Sing	7	obj	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	PunctType=Peri	2	punct	_	_

~~~


