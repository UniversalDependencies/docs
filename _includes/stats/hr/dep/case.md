

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

17728 nodes (10%) are attached to their parents as `case`.

17700 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.46119133574007.

The following 49 pairs of parts of speech are connected with `case`: [hr-pos/NOUN]()-[hr-pos/ADP]() (13293; 75% instances), [hr-pos/PROPN]()-[hr-pos/ADP]() (2229; 13% instances), [hr-pos/DET]()-[hr-pos/ADP]() (660; 4% instances), [hr-pos/PRON]()-[hr-pos/ADP]() (356; 2% instances), [hr-pos/NOUN]()-[hr-pos/SCONJ]() (323; 2% instances), [hr-pos/ADJ]()-[hr-pos/ADP]() (267; 2% instances), [hr-pos/NUM]()-[hr-pos/ADP]() (226; 1% instances), [hr-pos/ADV]()-[hr-pos/ADP]() (80; 0% instances), [hr-pos/NOUN]()-[hr-pos/ADV]() (42; 0% instances), [hr-pos/SYM]()-[hr-pos/ADP]() (33; 0% instances), [hr-pos/ADP]()-[hr-pos/ADP]() (29; 0% instances), [hr-pos/ADJ]()-[hr-pos/SCONJ]() (19; 0% instances), [hr-pos/NOUN]()-[hr-pos/NOUN]() (17; 0% instances), [hr-pos/VERB]()-[hr-pos/ADP]() (17; 0% instances), [hr-pos/PROPN]()-[hr-pos/SCONJ]() (16; 0% instances), [hr-pos/VERB]()-[hr-pos/AUX]() (14; 0% instances), [hr-pos/X]()-[hr-pos/ADP]() (12; 0% instances), [hr-pos/PROPN]()-[hr-pos/ADV]() (10; 0% instances), [hr-pos/VERB]()-[hr-pos/SCONJ]() (9; 0% instances), [hr-pos/DET]()-[hr-pos/SCONJ]() (8; 0% instances), [hr-pos/PRON]()-[hr-pos/SCONJ]() (8; 0% instances), [hr-pos/NOUN]()-[hr-pos/CCONJ]() (5; 0% instances), [hr-pos/PROPN]()-[hr-pos/X]() (5; 0% instances), [hr-pos/ADV]()-[hr-pos/SCONJ]() (4; 0% instances), [hr-pos/AUX]()-[hr-pos/ADP]() (4; 0% instances), [hr-pos/VERB]()-[hr-pos/PRON]() (4; 0% instances), [hr-pos/DET]()-[hr-pos/ADV]() (3; 0% instances), [hr-pos/NOUN]()-[hr-pos/VERB]() (3; 0% instances), [hr-pos/NUM]()-[hr-pos/ADV]() (3; 0% instances), [hr-pos/NUM]()-[hr-pos/SCONJ]() (3; 0% instances), [hr-pos/PART]()-[hr-pos/ADP]() (3; 0% instances), [hr-pos/VERB]()-[hr-pos/CCONJ]() (3; 0% instances), [hr-pos/ADJ]()-[hr-pos/ADJ]() (2; 0% instances), [hr-pos/ADV]()-[hr-pos/CCONJ]() (2; 0% instances), [hr-pos/NOUN]()-[hr-pos/ADJ]() (2; 0% instances), [hr-pos/ADJ]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/ADJ]()-[hr-pos/CCONJ]() (1; 0% instances), [hr-pos/ADJ]()-[hr-pos/NOUN]() (1; 0% instances), [hr-pos/ADV]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/AUX]()-[hr-pos/SCONJ]() (1; 0% instances), [hr-pos/CCONJ]()-[hr-pos/ADP]() (1; 0% instances), [hr-pos/DET]()-[hr-pos/DET]() (1; 0% instances), [hr-pos/DET]()-[hr-pos/NOUN]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/PROPN]() (1; 0% instances), [hr-pos/PROPN]()-[hr-pos/ADJ]() (1; 0% instances), [hr-pos/PROPN]()-[hr-pos/NOUN]() (1; 0% instances), [hr-pos/SCONJ]()-[hr-pos/SCONJ]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/DET]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 case	color:blue
1	Do	do	ADP	_	Case=Gen	2	case	_	_
2	sada	sada	ADV	_	Degree=Pos|PronType=Dem	6	advmod	_	_
3	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:pass	_	_
4	takav	takav	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	_
5	tim	tim	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	6	nsubj:pass	_	_
6	ustrojen	ustrojiti	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
7	u	u	ADP	_	Case=Loc	8	case	_	_
8	Federaciji	federacija	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	6	obl	_	_
9	BiH	BiH	PROPN	_	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 case	color:blue
1	"	"	PUNCT	_	_	5	punct	_	SpaceAfter=No
2	Već	već	ADV	_	Degree=Pos	3	advmod	_	_
3	20	20	NUM	_	NumType=Card	4	nummod	_	_
4	godina	godina	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	5	obl	_	_
5	čekamo	čekati	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
6	bolji	dobar	ADJ	_	Case=Acc|Definite=Ind|Degree=Cmp|Gender=Masc|Number=Sing	7	amod	_	_
7	život	život	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	obj	_	_
8	u	u	ADP	_	Case=Loc	9	case	_	_
9	Moldaviji	Moldavija	PROPN	_	Case=Loc|Gender=Fem|Number=Sing	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 case	color:blue
1	Crvenkovski	Crvenkovski	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	5	parataxis	_	SpaceAfter=No
2	:	:	PUNCT	_	_	1	punct	_	_
3	Iskreno	iskreno	ADV	_	Degree=Pos	5	discourse	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	nadam	nadati	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
6	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	5	expl:pv	_	_
7	kako	kako	SCONJ	_	_	11	mark	_	_
8	do	do	ADP	_	Case=Gen	9	case	_	_
9	toga	taj	DET	_	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	11	obl	_	_
10	neće	htjeti	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	11	aux	_	_
11	doći	doći	VERB	_	VerbForm=Inf	5	ccomp	_	SpaceAfter=No
12	.	.	PUNCT	_	_	5	punct	_	_

~~~


