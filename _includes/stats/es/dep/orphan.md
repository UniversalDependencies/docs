

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish-AnCora)

This relation is universal.

29 nodes (0%) are attached to their parents as `orphan`.

29 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.17241379310345.

The following 4 pairs of parts of speech are connected with `orphan`: [es-pos/NOUN]()-[es-pos/NOUN]() (19; 66% instances), [es-pos/PROPN]()-[es-pos/PROPN]() (8; 28% instances), [es-pos/NOUN]()-[es-pos/PRON]() (1; 3% instances), [es-pos/NOUN]()-[es-pos/VERB]() (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 orphan	color:blue
1	Juego	juego	NOUN	NOUN	Gender=Masc|Number=Sing	0	root	_	_
2	diversión	diversión	NOUN	NOUN	Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	PunctType=Comm	4	punct	_	_
4	lucidez	lucidez	NOUN	NOUN	Gender=Fem|Number=Sing	1	conj	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	PunctType=Comm	4	punct	_	_
6	espectáculo	espectáculo	NOUN	NOUN	Gender=Masc|Number=Sing	4	orphan	_	_
7	al	al	ADP	ADP	AdpType=Preppron|Gender=Masc|Number=Sing	6	advmod	_	MWE=al_fin|MWEPOS=ADV
8	fin	fin	NOUN	NOUN	_	7	fixed	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	PunctType=Peri	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 orphan	color:blue
1	Fran	Fran	PROPN	PROPN	_	0	root	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	PunctType=Comm	3	punct	_	_
3	Bebeto	Bebeto	PROPN	PROPN	_	1	conj	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	PunctType=Comm	3	punct	_	_
5	Aldana	Aldana	PROPN	PROPN	_	3	orphan	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	PunctType=Comm	3	punct	_	_
7	Nando	Nando	PROPN	PROPN	_	3	orphan	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	PunctType=Comm	3	punct	_	_
9	Djukic	Djukic	PROPN	PROPN	_	3	orphan	_	SpaceAfter=No
10	,	,	PUNCT	PUNCT	PunctType=Comm	3	punct	_	_
11	Mauro	Mauro	PROPN	PROPN	_	3	orphan	_	MWE=Mauro_Silva|MWEPOS=PROPN
12	Silva	Silva	PROPN	PROPN	_	11	flat	_	_
13	...	...	PUNCT	PUNCT	PunctType=Comm	1	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 16 orphan	color:blue
1	Sonetos	soneto	NOUN	NOUN	Gender=Masc|Number=Plur	0	root	_	_
2	clásicos	clásico	ADJ	ADJ	Gender=Masc|Number=Plur	1	amod	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	PunctType=Comm	2	punct	_	_
4	perfectamente	perfectamente	ADV	ADV	_	5	advmod	_	_
5	formales	formal	ADJ	ADJ	Number=Plur	2	amod	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	PunctType=Comm	8	punct	_	_
7	o	o	CCONJ	CCONJ	_	8	cc	_	_
8	expresiones	expresión	NOUN	NOUN	Gender=Fem|Number=Plur	1	conj	_	_
9	poéticas	poético	ADJ	ADJ	Gender=Fem|Number=Plur	8	amod	_	_
10	de	de	ADP	ADP	AdpType=Prep	12	case	_	_
11	las	el	DET	DET	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	12	det	_	_
12	clases	clase	NOUN	NOUN	Gender=Fem|Number=Plur	8	nmod	_	_
13	populares	popular	ADJ	ADJ	Number=Plur	12	amod	_	SpaceAfter=No
14	,	,	PUNCT	PUNCT	PunctType=Comm	8	punct	_	_
15	pero	pero	CCONJ	CCONJ	_	8	cc	_	_
16	experimentando	experimentar	VERB	VERB	VerbForm=Ger	8	orphan	_	_
17	siempre	siempre	ADV	ADV	_	16	advmod	_	_
18	para	para	ADP	ADP	AdpType=Prep	19	mark	_	_
19	buscar	buscar	VERB	VERB	VerbForm=Inf	16	advcl	_	_
20	nuevas	nuevo	ADJ	ADJ	Gender=Fem|Number=Plur	21	amod	_	_
21	formas	forma	NOUN	NOUN	Gender=Fem|Number=Plur	19	obj	_	SpaceAfter=No
22	,	,	PUNCT	PUNCT	PunctType=Comm	33	punct	_	_
23	logrando	lograr	VERB	VERB	VerbForm=Ger	16	advcl	_	_
24	con	con	ADP	ADP	AdpType=Prep	26	case	_	_
25	sus	su	DET	DET	Number=Plur|Person=3|Poss=Yes|PronType=Prs	26	det	_	_
26	malabarismos	malabarismo	NOUN	NOUN	Gender=Masc|Number=Plur	23	obl	_	_
27	verbales	verbal	ADJ	ADJ	Number=Plur	26	amod	_	_
28	efectos	efecto	NOUN	NOUN	Gender=Masc|Number=Plur	23	obj	_	_
29	sorprendentes	sorprendente	ADJ	ADJ	Number=Plur	28	amod	_	_
30	del	del	ADP	ADP	AdpType=Preppron|Gender=Masc|Number=Sing	31	case	_	_
31	lenguaje	lenguaje	NOUN	NOUN	Gender=Masc|Number=Sing	28	nmod	_	_
32	y	y	CCONJ	CCONJ	_	33	cc	_	_
33	dando	dar	VERB	VERB	VerbForm=Ger	16	conj	_	_
34	al	al	ADP	ADP	AdpType=Preppron|Gender=Masc|Number=Sing	35	case	_	_
35	lector	lector	NOUN	NOUN	Gender=Masc|Number=Sing	33	obj	_	_
36	con	con	ADP	ADP	AdpType=Prep	38	case	_	_
37	su	su	DET	DET	Number=Sing|Person=3|Poss=Yes|PronType=Prs	38	det	_	_
38	mente	mente	NOUN	NOUN	Gender=Fem|Number=Sing	33	obl	_	_
39	de	de	ADP	ADP	AdpType=Prep	40	case	_	_
40	ilusionista	ilusionista	NOUN	NOUN	Number=Sing	38	nmod	_	_
41	imágenes	imagen	NOUN	NOUN	Gender=Fem|Number=Plur	33	obj	_	_
42	del	del	ADP	ADP	AdpType=Preppron|Gender=Masc|Number=Sing	44	advmod	_	MWE=del_todo|MWEPOS=ADV
43	todo	todo	PRON	PRON	Gender=Masc|Number=Sing|PronType=Tot	42	fixed	_	_
44	nuevas	nuevo	ADJ	ADJ	Gender=Fem|Number=Plur	41	amod	_	SpaceAfter=No
45	.	.	PUNCT	PUNCT	PunctType=Peri	1	punct	_	_

~~~


