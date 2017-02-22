

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Catalan)

This relation is universal.

15687 nodes (3%) are attached to their parents as `flat`.

15687 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.24918722509084.

The following 23 pairs of parts of speech are connected with `flat`: [ca-pos/PROPN]()-[ca-pos/PROPN]() (15077; 96% instances), [ca-pos/DET]()-[ca-pos/PROPN]() (219; 1% instances), [ca-pos/ADJ]()-[ca-pos/PROPN]() (157; 1% instances), [ca-pos/PROPN]()-[ca-pos/ADJ]() (76; 0% instances), [ca-pos/NUM]()-[ca-pos/PROPN]() (56; 0% instances), [ca-pos/ADV]()-[ca-pos/PROPN]() (16; 0% instances), [ca-pos/PROPN]()-[ca-pos/ADV]() (13; 0% instances), [ca-pos/PROPN]()-[ca-pos/CCONJ]() (12; 0% instances), [ca-pos/SYM]()-[ca-pos/PROPN]() (12; 0% instances), [ca-pos/PUNCT]()-[ca-pos/PROPN]() (11; 0% instances), [ca-pos/PROPN]()-[ca-pos/DET]() (8; 0% instances), [ca-pos/PART]()-[ca-pos/PROPN]() (7; 0% instances), [ca-pos/CCONJ]()-[ca-pos/PROPN]() (4; 0% instances), [ca-pos/DET]()-[ca-pos/ADJ]() (3; 0% instances), [ca-pos/PART]()-[ca-pos/PART]() (3; 0% instances), [ca-pos/PROPN]()-[ca-pos/ADP]() (3; 0% instances), [ca-pos/DET]()-[ca-pos/DET]() (2; 0% instances), [ca-pos/PROPN]()-[ca-pos/SCONJ]() (2; 0% instances), [ca-pos/SYM]()-[ca-pos/PART]() (2; 0% instances), [ca-pos/ADJ]()-[ca-pos/CCONJ]() (1; 0% instances), [ca-pos/ADV]()-[ca-pos/ADV]() (1; 0% instances), [ca-pos/DET]()-[ca-pos/PART]() (1; 0% instances), [ca-pos/PUNCT]()-[ca-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 flat	color:blue
1	La	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	peregrinació	peregrinació	NOUN	NOUN	Gender=Fem|Number=Sing	5	iobj	_	_
3	l'	ell	PRON	PRON	Case=Acc|Number=Sing|Person=3|PronType=Prs	5	obj	_	SpaceAfter=No
4	ha	haver	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	organitzat	organitzar	VERB	VERB	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	sindicat	sindicat	NOUN	NOUN	Gender=Masc|Number=Sing	5	nsubj	_	_
8	Unió	Unió	PROPN	PROPN	_	7	appos	_	MWE=Unió_de_Pagesos|MWEPOS=PROPN
9	de	de	ADP	ADP	AdpType=Prep	10	case	_	_
10	Pagesos	Pagesos	PROPN	PROPN	_	8	flat	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	PunctType=Peri	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 flat	color:blue
1	Anteriorment	anteriorment	ADV	ADV	_	3	advmod	_	_
2	havia	haver	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	aux	_	_
3	publicat	publicar	VERB	VERB	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	'	'	SYM	SYM	_	5	nmod	_	SpaceAfter=No
5	El	El	DET	DET	Gender=Masc|Number=Sing|PronType=Art	6	det	_	MWE=El_plaer_de_mirar|MWEPOS=PROPN
6	plaer	plaer	PROPN	PROPN	_	3	obj	_	_
7	de	de	ADP	ADP	AdpType=Prep	8	case	_	_
8	mirar	mirar	PROPN	PROPN	_	5	flat	_	SpaceAfter=No
9	'	'	SYM	SYM	_	5	nmod	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat	color:blue
1	Reapareix	reaparèixer	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	al	al	ADP	ADP	AdpType=Preppron|Gender=Masc|Number=Sing	3	case	_	_
3	Gran	Gran	ADJ	ADJ	_	1	obl	_	MWE=Gran_Premi_de_Gippingen|MWEPOS=PROPN
4	Premi	Premi	PROPN	PROPN	_	3	flat	_	_
5	de	de	ADP	ADP	AdpType=Prep	6	case	_	_
6	Gippingen	Gippingen	PROPN	PROPN	_	3	flat	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	PunctType=Peri	1	punct	_	_

~~~


