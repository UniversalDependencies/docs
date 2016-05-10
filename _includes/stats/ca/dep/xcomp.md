

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Catalan)

This relation is universal.

2454 nodes (0%) are attached to their parents as `xcomp`.

2333 instances of `xcomp` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.74327628361858.

The following 22 pairs of parts of speech are connected with `xcomp`: [ca-pos/VERB]()-[ca-pos/VERB]() (2152; 88% instances), [ca-pos/ADJ]()-[ca-pos/VERB]() (130; 5% instances), [ca-pos/VERB]()-[ca-pos/NOUN]() (62; 3% instances), [ca-pos/VERB]()-[ca-pos/ADJ]() (41; 2% instances), [ca-pos/ADP]()-[ca-pos/VERB]() (13; 1% instances), [ca-pos/ADV]()-[ca-pos/VERB]() (9; 0% instances), [ca-pos/VERB]()-[ca-pos/AUX]() (8; 0% instances), [ca-pos/CONJ]()-[ca-pos/VERB]() (6; 0% instances), [ca-pos/NOUN]()-[ca-pos/VERB]() (5; 0% instances), [ca-pos/SYM]()-[ca-pos/VERB]() (5; 0% instances), [ca-pos/VERB]()-[ca-pos/PRON]() (5; 0% instances), [ca-pos/AUX]()-[ca-pos/VERB]() (3; 0% instances), [ca-pos/PRON]()-[ca-pos/AUX]() (3; 0% instances), [ca-pos/CONJ]()-[ca-pos/ADJ]() (2; 0% instances), [ca-pos/DET]()-[ca-pos/VERB]() (2; 0% instances), [ca-pos/VERB]()-[ca-pos/ADV]() (2; 0% instances), [ca-pos/ADJ]()-[ca-pos/AUX]() (1; 0% instances), [ca-pos/ADJ]()-[ca-pos/PRON]() (1; 0% instances), [ca-pos/NOUN]()-[ca-pos/ADJ]() (1; 0% instances), [ca-pos/PRON]()-[ca-pos/VERB]() (1; 0% instances), [ca-pos/VERB]()-[ca-pos/NUM]() (1; 0% instances), [ca-pos/VERB]()-[ca-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	No	no	ADV	ADV	Negative=Neg	2	neg	_	_
2	vol	voler	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	obrir	obrir	VERB	VERB	VerbForm=Inf	2	xcomp	_	_
4	una	un	DET	DET	Gender=Fem|Number=Sing|PronType=Ind	5	det	_	_
5	guerra	guerra	NOUN	NOUN	Gender=Fem|Number=Sing	3	dobj	_	_
6	directa	directe	ADJ	ADJ	Gender=Fem|Number=Sing	5	amod	_	_
7	amb	amb	ADP	ADP	AdpType=Prep	9	case	_	_
8	l'	el	DET	DET	Definite=Def|Number=Sing|PronType=Art	9	det	_	_
9	entrenador	entrenador	NOUN	NOUN	Gender=Masc|Number=Sing	5	nmod	_	_
10	.	.	PUNCT	PUNCT	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 xcomp	color:blue
1	Rivaldo	Rivaldo	PROPN	PROPN	_	2	nsubj	_	_
2	segueix	seguir	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	decidit	decidit	ADJ	ADJ	Gender=Masc|Number=Sing|VerbForm=Part	2	dobj	_	_
4	a	a	ADP	ADP	AdpType=Prep	6	mark	_	_
5	no	no	ADV	ADV	Negative=Neg	6	neg	_	_
6	jugar	jugar	VERB	VERB	VerbForm=Inf	3	xcomp	_	_
7	més	més	ADV	ADV	_	6	advmod	_	_
8	com	com	SCONJ	SCONJ	_	10	case	_	MWE=com_a|MWEPOS=ADP
9	a	a	ADP	ADP	AdpType=Prep	8	mwe	_	_
10	extrem	extrem	NOUN	NOUN	Gender=Masc|Number=Sing	6	dobj	_	_
11	.	.	PUNCT	PUNCT	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 12 xcomp	color:blue
1	-	-	PUNCT	PUNCT	PunctType=Dash	3	punct	_	_
2	Jo	jo	PRON	PRON	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	crec	creure	VERB	VERB	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	que	que	SCONJ	SCONJ	_	12	mark	_	_
5	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
6	'	'	SYM	SYM	_	7	nmod	_	_
7	postpujolisme	postpujolisme	NOUN	NOUN	Gender=Masc|Number=Sing	12	nsubj	_	_
8	'	'	SYM	SYM	_	7	nmod	_	_
9	pot	poder	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	_
10	ser	ser	AUX	AUX	VerbForm=Inf	12	cop	_	_
11	un	un	DET	DET	Gender=Masc|Number=Sing|PronType=Ind	12	det	_	_
12	salt	salt	NOUN	NOUN	Gender=Masc|Number=Sing	3	xcomp	_	_
13	per	per	ADP	ADP	AdpType=Prep	15	case	_	_
14	a	a	ADP	ADP	AdpType=Prep	15	case	_	_
15	ERC	ERC	PROPN	PROPN	_	12	nmod	_	_
16	.	.	PUNCT	PUNCT	PunctType=Peri	3	punct	_	_

~~~


