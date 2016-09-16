

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Catalan)

This relation is universal.

1528 nodes (0%) are attached to their parents as `iobj`.

773 instances of `iobj` (51%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.69698952879581.

The following 9 pairs of parts of speech are connected with `iobj`: [ca-pos/VERB]()-[ca-pos/PRON]() (676; 44% instances), [ca-pos/VERB]()-[ca-pos/NOUN]() (535; 35% instances), [ca-pos/VERB]()-[ca-pos/PROPN]() (195; 13% instances), [ca-pos/VERB]()-[ca-pos/ADJ]() (114; 7% instances), [ca-pos/VERB]()-[ca-pos/ADV]() (3; 0% instances), [ca-pos/VERB]()-[ca-pos/NUM]() (2; 0% instances), [ca-pos/VERB]()-[ca-pos/ADP]() (1; 0% instances), [ca-pos/VERB]()-[ca-pos/SCONJ]() (1; 0% instances), [ca-pos/VERB]()-[ca-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 iobj	color:blue
1	Ara	ara	ADV	ADV	_	6	advmod	_	_
2	,	,	PUNCT	PUNCT	PunctType=Comm	3	punct	_	_
3	però	però	ADV	ADV	_	6	advmod	_	_
4	,	,	PUNCT	PUNCT	PunctType=Comm	3	punct	_	_
5	es	ell	PRON	PRON	Person=3	6	iobj	_	_
6	proposa	proposar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	augmentar	augmentar	VERB	VERB	VerbForm=Inf	6	xcomp	_	_
8	-ne	en	PRON	PRON	Person=3|PronType=Prs	7	dobj	_	_
9	l'	el	DET	DET	Definite=Def|Number=Sing|PronType=Art	10	det	_	_
10	ús	ús	NOUN	NOUN	Gender=Masc|Number=Sing	7	dobj	_	_
11	social	social	ADJ	ADJ	Number=Sing	10	amod	_	_
12	.	.	PUNCT	PUNCT	PunctType=Peri	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 iobj	color:blue
1	La	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	peregrinació	peregrinació	NOUN	NOUN	Gender=Fem|Number=Sing	5	iobj	_	_
3	l'	ell	PRON	PRON	Case=Acc|Number=Sing|Person=3|PronType=Prs	5	dobj	_	_
4	ha	haver	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	organitzat	organitzar	VERB	VERB	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	sindicat	sindicat	NOUN	NOUN	Gender=Masc|Number=Sing	5	nsubj	_	_
8	Unió	Unió	PROPN	PROPN	_	7	appos	_	MWE=Unió_de_Pagesos|MWEPOS=PROPN
9	de	de	ADP	ADP	AdpType=Prep	10	case	_	_
10	Pagesos	Pagesos	PROPN	PROPN	_	8	name	_	_
11	.	.	PUNCT	PUNCT	PunctType=Peri	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 iobj	color:blue
1	"	"	PUNCT	PUNCT	PunctType=Quot	6	punct	_	_
2	A	a	ADP	ADP	AdpType=Prep	3	case	_	_
3	Dutruel	Dutruel	PROPN	PROPN	_	6	iobj	_	_
4	no	no	ADV	ADV	Negative=Neg	6	neg	_	_
5	el	ell	PRON	PRON	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	dobj	_	_
6	rebran	rebre	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
7	amb	amb	ADP	ADP	AdpType=Prep	8	case	_	_
8	aplaudiments	aplaudiment	NOUN	NOUN	Gender=Masc|Number=Plur	6	nmod	_	_
9	.	.	PUNCT	PUNCT	PunctType=Peri	6	punct	_	_

~~~


