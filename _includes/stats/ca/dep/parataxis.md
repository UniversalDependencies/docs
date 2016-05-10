

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Catalan)

This relation is universal.

579 nodes (0%) are attached to their parents as `parataxis`.

302 instances of `parataxis` (52%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.40759930915371.

The following 34 pairs of parts of speech are connected with `parataxis`: [ca-pos/CONJ]()-[ca-pos/VERB]() (258; 45% instances), [ca-pos/VERB]()-[ca-pos/VERB]() (118; 20% instances), [ca-pos/NOUN]()-[ca-pos/VERB]() (67; 12% instances), [ca-pos/ADP]()-[ca-pos/VERB]() (23; 4% instances), [ca-pos/CONJ]()-[ca-pos/NOUN]() (21; 4% instances), [ca-pos/ADV]()-[ca-pos/VERB]() (12; 2% instances), [ca-pos/ADJ]()-[ca-pos/VERB]() (11; 2% instances), [ca-pos/NOUN]()-[ca-pos/NOUN]() (8; 1% instances), [ca-pos/CONJ]()-[ca-pos/ADJ]() (7; 1% instances), [ca-pos/CONJ]()-[ca-pos/PROPN]() (7; 1% instances), [ca-pos/PROPN]()-[ca-pos/VERB]() (7; 1% instances), [ca-pos/ADV]()-[ca-pos/NOUN]() (5; 1% instances), [ca-pos/CONJ]()-[ca-pos/NUM]() (4; 1% instances), [ca-pos/ADP]()-[ca-pos/NOUN]() (3; 1% instances), [ca-pos/PRON]()-[ca-pos/VERB]() (3; 1% instances), [ca-pos/CONJ]()-[ca-pos/SYM]() (2; 0% instances), [ca-pos/DET]()-[ca-pos/NOUN]() (2; 0% instances), [ca-pos/DET]()-[ca-pos/PROPN]() (2; 0% instances), [ca-pos/NOUN]()-[ca-pos/ADJ]() (2; 0% instances), [ca-pos/NOUN]()-[ca-pos/PRON]() (2; 0% instances), [ca-pos/VERB]()-[ca-pos/NOUN]() (2; 0% instances), [ca-pos/ADJ]()-[ca-pos/ADJ]() (1; 0% instances), [ca-pos/ADJ]()-[ca-pos/NOUN]() (1; 0% instances), [ca-pos/ADV]()-[ca-pos/NUM]() (1; 0% instances), [ca-pos/ADV]()-[ca-pos/PROPN]() (1; 0% instances), [ca-pos/AUX]()-[ca-pos/VERB]() (1; 0% instances), [ca-pos/CONJ]()-[ca-pos/AUX]() (1; 0% instances), [ca-pos/NOUN]()-[ca-pos/NUM]() (1; 0% instances), [ca-pos/NUM]()-[ca-pos/VERB]() (1; 0% instances), [ca-pos/PART]()-[ca-pos/NOUN]() (1; 0% instances), [ca-pos/PART]()-[ca-pos/VERB]() (1; 0% instances), [ca-pos/VERB]()-[ca-pos/ADJ]() (1; 0% instances), [ca-pos/VERB]()-[ca-pos/AUX]() (1; 0% instances), [ca-pos/VERB]()-[ca-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 parataxis	color:blue
1	No	no	ADV	ADV	Negative=Neg	4	neg	_	_
2	ens	jo	PRON	PRON	Number=Plur|Person=1	4	iobj	_	_
3	podem	poder	AUX	AUX	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	limitar	limitar	VERB	VERB	VerbForm=Inf	9	parataxis	_	_
5	a	a	ADP	ADP	AdpType=Prep	6	mark	_	_
6	anunciar	anunciar	VERB	VERB	VerbForm=Inf	4	xcomp	_	_
7	-la	ell	PRON	PRON	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	6	dobj	_	_
8	,	,	PUNCT	PUNCT	PunctType=Comm	9	punct	_	_
9	sinó	sinó	CONJ	CONJ	_	0	root	_	MWE=sinó_que|MWEPOS=CONJ
10	que	que	SCONJ	SCONJ	_	9	mwe	_	_
11	l'	ell	PRON	PRON	Case=Acc|Number=Sing|Person=3|PronType=Prs	14	dobj	_	_
12	hem	haver	AUX	AUX	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	14	aux	_	_
13	de	de	ADP	ADP	AdpType=Prep	14	mark	_	_
14	fer	fer	VERB	VERB	VerbForm=Inf	9	advcl	_	_
15	visible	visible	ADJ	ADJ	Number=Sing	14	iobj	_	_
16	.	.	PUNCT	PUNCT	PunctType=Peri	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 parataxis	color:blue
1	-	-	PUNCT	PUNCT	PunctType=Dash	8	punct	_	_
2	La	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	misericòrdia	misericòrdia	NOUN	NOUN	Gender=Fem|Number=Sing	8	nsubj	_	_
4	,	,	PUNCT	PUNCT	PunctType=Comm	6	punct	_	_
5	ho	ho	PRON	PRON	Person=3|PronType=Prs	6	dobj	_	_
6	repeteixo	repetir	VERB	VERB	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	parataxis	_	_
7	,	,	PUNCT	PUNCT	PunctType=Comm	6	punct	_	_
8	pertany	pertànyer	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	a	a	ADP	ADP	AdpType=Prep	10	case	_	_
10	Déu	Déu	PROPN	PROPN	_	8	dobj	_	_
11	.	.	PUNCT	PUNCT	PunctType=Peri	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 parataxis	color:blue
1	És	ser	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
2	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	paradigma	paradigma	NOUN	NOUN	Gender=Masc|Number=Sing	0	root	_	_
4	-	-	PUNCT	PUNCT	PunctType=Dash	5	punct	_	_
5	sentencia	sentenciar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	parataxis	_	_
6	-	-	PUNCT	PUNCT	PunctType=Dash	5	punct	_	_
7	de	de	ADP	ADP	AdpType=Prep	9	case	_	_
8	la	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	prepotència	prepotència	NOUN	NOUN	Gender=Fem|Number=Sing	3	nmod	_	_
10	de	de	ADP	ADP	AdpType=Prep	12	case	_	_
11	l'	el	DET	DET	Definite=Def|Number=Sing|PronType=Art	12	det	_	_
12	home	home	NOUN	NOUN	Gender=Masc|Number=Sing	9	nmod	_	_
13	"	"	PUNCT	PUNCT	PunctType=Quot	3	punct	_	_
14	.	.	PUNCT	PUNCT	PunctType=Peri	3	punct	_	_

~~~


