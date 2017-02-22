

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Catalan)

This relation is universal.

4307 nodes (1%) are attached to their parents as `cop`.

4102 instances of `cop` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.98165776642675.

The following 22 pairs of parts of speech are connected with `cop`: [ca-pos/NOUN]()-[ca-pos/AUX]() (1910; 44% instances), [ca-pos/ADJ]()-[ca-pos/AUX]() (1826; 42% instances), [ca-pos/PRON]()-[ca-pos/AUX]() (202; 5% instances), [ca-pos/PROPN]()-[ca-pos/AUX]() (114; 3% instances), [ca-pos/NUM]()-[ca-pos/AUX]() (69; 2% instances), [ca-pos/ADV]()-[ca-pos/AUX]() (68; 2% instances), [ca-pos/VERB]()-[ca-pos/AUX]() (41; 1% instances), [ca-pos/NOUN]()-[ca-pos/DET]() (22; 1% instances), [ca-pos/ADP]()-[ca-pos/AUX]() (13; 0% instances), [ca-pos/SYM]()-[ca-pos/AUX]() (13; 0% instances), [ca-pos/SCONJ]()-[ca-pos/AUX]() (9; 0% instances), [ca-pos/PROPN]()-[ca-pos/DET]() (8; 0% instances), [ca-pos/DET]()-[ca-pos/AUX]() (3; 0% instances), [ca-pos/ADJ]()-[ca-pos/DET]() (1; 0% instances), [ca-pos/ADJ]()-[ca-pos/PRON]() (1; 0% instances), [ca-pos/NOUN]()-[ca-pos/ADP]() (1; 0% instances), [ca-pos/NOUN]()-[ca-pos/ADV]() (1; 0% instances), [ca-pos/NOUN]()-[ca-pos/CCONJ]() (1; 0% instances), [ca-pos/NUM]()-[ca-pos/DET]() (1; 0% instances), [ca-pos/PRON]()-[ca-pos/ADP]() (1; 0% instances), [ca-pos/PRON]()-[ca-pos/DET]() (1; 0% instances), [ca-pos/PROPN]()-[ca-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 cop	color:blue
1	El	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	pressupost	pressupost	NOUN	NOUN	Gender=Masc|Number=Sing	9	nsubj	_	_
3	base	base	NOUN	NOUN	Gender=Fem|Number=Sing	2	nmod	_	_
4	del	del	ADP	ADP	AdpType=Preppron|Gender=Masc|Number=Sing	5	case	_	_
5	concurs	concurs	NOUN	NOUN	Gender=Masc|Number=Sing	2	nmod	_	_
6	és	ser	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
7	de	de	ADP	ADP	AdpType=Prep	9	case	_	_
8	1.173.978,53	1173978.53	NUM	NUM	NumForm=Digit	9	nummod	_	_
9	euros	euro	NOUN	NOUN	NumForm=Digit	0	root	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	PunctType=Peri	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	El	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	camí	camí	NOUN	NOUN	Gender=Masc|Number=Sing	4	nsubj	_	_
3	és	ser	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	ple	ple	ADJ	ADJ	Gender=Masc|Number=Sing	0	root	_	_
5	d'	de	ADP	ADP	AdpType=Prep	6	case	_	SpaceAfter=No
6	entrebancs	entrebanc	NOUN	NOUN	Gender=Masc|Number=Plur	4	nmod	_	_
7	que	que	PRON	PRON	PronType=Rel	11	obj	_	_
8	hem	haver	AUX	AUX	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	11	aux	_	_
9	d'	de	ADP	ADP	AdpType=Prep	11	mark	_	SpaceAfter=No
10	anar	anar	AUX	AUX	VerbForm=Inf	11	aux	_	_
11	superant	superar	VERB	VERB	VerbForm=Ger	6	acl	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	PunctType=Peri	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 cop	color:blue
1	Què	què	PRON	PRON	Number=Sing|PronType=Int	0	root	_	_
2	li	ell	PRON	PRON	Case=Dat|Number=Sing|Person=3|PronType=Prs	1	obj	_	_
3	semblen	semblar	AUX	AUX	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
4	aquestes	aquest	DET	DET	Gender=Fem|Number=Plur|PronType=Dem	5	det	_	_
5	declaracions	declaració	NOUN	NOUN	Gender=Fem|Number=Plur	1	nsubj	_	SpaceAfter=No
6	?	?	PUNCT	PUNCT	PunctSide=Fin|PunctType=Qest	1	punct	_	_

~~~


