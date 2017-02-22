

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Catalan)

This relation is universal.

13144 nodes (3%) are attached to their parents as `cc`.

12850 instances of `cc` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.67894096165551.

The following 51 pairs of parts of speech are connected with `cc`: [ca-pos/NOUN]()-[ca-pos/CCONJ]() (4666; 35% instances), [ca-pos/VERB]()-[ca-pos/CCONJ]() (3780; 29% instances), [ca-pos/PROPN]()-[ca-pos/CCONJ]() (2156; 16% instances), [ca-pos/ADJ]()-[ca-pos/CCONJ]() (1047; 8% instances), [ca-pos/NUM]()-[ca-pos/CCONJ]() (347; 3% instances), [ca-pos/ADV]()-[ca-pos/CCONJ]() (234; 2% instances), [ca-pos/PRON]()-[ca-pos/CCONJ]() (118; 1% instances), [ca-pos/NOUN]()-[ca-pos/ADV]() (102; 1% instances), [ca-pos/NOUN]()-[ca-pos/SCONJ]() (71; 1% instances), [ca-pos/VERB]()-[ca-pos/ADV]() (69; 1% instances), [ca-pos/AUX]()-[ca-pos/CCONJ]() (67; 1% instances), [ca-pos/VERB]()-[ca-pos/ADP]() (61; 0% instances), [ca-pos/ADP]()-[ca-pos/CCONJ]() (49; 0% instances), [ca-pos/DET]()-[ca-pos/CCONJ]() (49; 0% instances), [ca-pos/NOUN]()-[ca-pos/ADP]() (47; 0% instances), [ca-pos/SYM]()-[ca-pos/CCONJ]() (32; 0% instances), [ca-pos/NUM]()-[ca-pos/ADP]() (30; 0% instances), [ca-pos/PROPN]()-[ca-pos/SCONJ]() (27; 0% instances), [ca-pos/PROPN]()-[ca-pos/ADV]() (25; 0% instances), [ca-pos/VERB]()-[ca-pos/NOUN]() (22; 0% instances), [ca-pos/CCONJ]()-[ca-pos/PART]() (21; 0% instances), [ca-pos/ADJ]()-[ca-pos/ADV]() (20; 0% instances), [ca-pos/ADJ]()-[ca-pos/SCONJ]() (16; 0% instances), [ca-pos/CCONJ]()-[ca-pos/CCONJ]() (12; 0% instances), [ca-pos/NOUN]()-[ca-pos/NOUN]() (12; 0% instances), [ca-pos/ADJ]()-[ca-pos/ADP]() (7; 0% instances), [ca-pos/ADJ]()-[ca-pos/NOUN]() (5; 0% instances), [ca-pos/VERB]()-[ca-pos/SCONJ]() (5; 0% instances), [ca-pos/ADV]()-[ca-pos/SCONJ]() (4; 0% instances), [ca-pos/DET]()-[ca-pos/SCONJ]() (4; 0% instances), [ca-pos/ADP]()-[ca-pos/ADV]() (3; 0% instances), [ca-pos/CCONJ]()-[ca-pos/ADV]() (3; 0% instances), [ca-pos/PRON]()-[ca-pos/ADV]() (3; 0% instances), [ca-pos/PUNCT]()-[ca-pos/CCONJ]() (3; 0% instances), [ca-pos/VERB]()-[ca-pos/PART]() (3; 0% instances), [ca-pos/ADJ]()-[ca-pos/PART]() (2; 0% instances), [ca-pos/AUX]()-[ca-pos/NOUN]() (2; 0% instances), [ca-pos/DET]()-[ca-pos/ADV]() (2; 0% instances), [ca-pos/NOUN]()-[ca-pos/PART]() (2; 0% instances), [ca-pos/NUM]()-[ca-pos/ADV]() (2; 0% instances), [ca-pos/PART]()-[ca-pos/CCONJ]() (2; 0% instances), [ca-pos/PRON]()-[ca-pos/ADP]() (2; 0% instances), [ca-pos/PROPN]()-[ca-pos/PART]() (2; 0% instances), [ca-pos/ADJ]()-[ca-pos/PRON]() (1; 0% instances), [ca-pos/AUX]()-[ca-pos/PRON]() (1; 0% instances), [ca-pos/AUX]()-[ca-pos/PROPN]() (1; 0% instances), [ca-pos/CCONJ]()-[ca-pos/ADP]() (1; 0% instances), [ca-pos/NUM]()-[ca-pos/NOUN]() (1; 0% instances), [ca-pos/PROPN]()-[ca-pos/ADP]() (1; 0% instances), [ca-pos/SCONJ]()-[ca-pos/ADV]() (1; 0% instances), [ca-pos/SCONJ]()-[ca-pos/CCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cc	color:blue
1	Abundant	abundant	ADJ	ADJ	Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	PunctType=Comm	6	punct	_	_
3	continuada	continuat	ADJ	ADJ	Gender=Fem|Number=Sing|VerbForm=Part	1	advmod	_	_
4	i	i	CCONJ	CCONJ	_	6	cc	_	_
5	en	en	ADP	ADP	AdpType=Prep	6	case	_	_
6	català	català	NOUN	NOUN	Gender=Masc|Number=Sing	1	conj	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	PunctType=Peri	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc	color:blue
1	I	i	CCONJ	CCONJ	_	2	cc	_	_
2	controlar	controlar	VERB	VERB	VerbForm=Inf	0	root	_	_
3	les	ell	PRON	PRON	Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Prs	2	obj	_	_
4	,	,	PUNCT	PUNCT	PunctType=Comm	5	punct	_	_
5	òbviament	òbviament	ADV	ADV	_	2	advmod	_	SpaceAfter=No
6	.	.	PUNCT	PUNCT	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cc	color:blue
1	El	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	pols	pols	NOUN	NOUN	Gender=Masc|Number=Sing	9	nsubj	_	_
3	entre	entre	ADP	ADP	AdpType=Prep	5	case	_	_
4	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	jugador	jugador	NOUN	NOUN	Gender=Masc|Number=Sing	2	nmod	_	_
6	i	i	CCONJ	CCONJ	_	7	cc	_	_
7	Van	Van	PROPN	PROPN	_	5	conj	_	MWE=Van_Gaal|MWEPOS=PROPN
8	Gaal	Gaal	PROPN	PROPN	_	7	flat	_	_
9	segueix	seguir	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
10	obert	obert	ADJ	ADJ	Gender=Masc|Number=Sing|VerbForm=Part	9	obj	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	PunctType=Peri	9	punct	_	_

~~~


