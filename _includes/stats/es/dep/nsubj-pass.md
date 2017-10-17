

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish)

This relation is a language-specific subtype of [nsubj]().

1161 nodes (0%) are attached to their parents as `nsubj:pass`.

1104 instances of `nsubj:pass` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.57967269595177.

The following 26 pairs of parts of speech are connected with `nsubj:pass`: [es-pos/VERB]()-[es-pos/NOUN]() (771; 66% instances), [es-pos/VERB]()-[es-pos/PRON]() (175; 15% instances), [es-pos/VERB]()-[es-pos/PROPN]() (149; 13% instances), [es-pos/NOUN]()-[es-pos/PROPN]() (12; 1% instances), [es-pos/NOUN]()-[es-pos/NOUN]() (11; 1% instances), [es-pos/ADJ]()-[es-pos/NOUN]() (9; 1% instances), [es-pos/PROPN]()-[es-pos/NOUN]() (4; 0% instances), [es-pos/VERB]()-[es-pos/NUM]() (4; 0% instances), [es-pos/VERB]()-[es-pos/SYM]() (4; 0% instances), [es-pos/PROPN]()-[es-pos/PRON]() (3; 0% instances), [es-pos/PROPN]()-[es-pos/PROPN]() (2; 0% instances), [es-pos/VERB]()-[es-pos/ADJ]() (2; 0% instances), [es-pos/VERB]()-[es-pos/DET]() (2; 0% instances), [es-pos/ADJ]()-[es-pos/NUM]() (1; 0% instances), [es-pos/ADJ]()-[es-pos/PRON]() (1; 0% instances), [es-pos/ADJ]()-[es-pos/PROPN]() (1; 0% instances), [es-pos/ADP]()-[es-pos/NOUN]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/PRON]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/VERB]() (1; 0% instances), [es-pos/PRON]()-[es-pos/PROPN]() (1; 0% instances), [es-pos/VERB]()-[es-pos/ADV]() (1; 0% instances), [es-pos/VERB]()-[es-pos/AUX]() (1; 0% instances), [es-pos/VERB]()-[es-pos/CCONJ]() (1; 0% instances), [es-pos/VERB]()-[es-pos/VERB]() (1; 0% instances), [es-pos/VERB]()-[es-pos/X]() (1; 0% instances), [es-pos/X]()-[es-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 nsubj:pass	color:blue
1	Según	según	ADP	_	_	2	case	_	_
2	figura	figurar	NOUN	_	Gender=Fem|Number=Sing	10	obl	_	_
3	en	en	ADP	_	_	5	case	_	_
4	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	portada	portada	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	2	punct	_	_
7	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	libro	libro	NOUN	_	Gender=Masc|Number=Sing	10	nsubj:pass	_	_
9	fue	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	aux:pass	_	_
10	publicado	publicar	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
11	en	en	ADP	_	_	12	case	_	_
12	1535	1535	NUM	_	NumType=Card	10	obl	_	SpaceAfter=No
13	;	;	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Éstas	ésta	PRON	_	Gender=Fem|Number=Plur|PronType=Dem	3	nsubj:pass	_	_
2	son	ser	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
3	vendidas	vender	VERB	_	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	_
4	con	con	ADP	_	_	5	case	_	_
5	Windows	windows	PROPN	_	_	3	obl	_	_
6	Mobile	mobile	PROPN	_	_	5	appos	_	_
7	2003	2003	NUM	_	NumType=Card	5	nummod	_	_
8	como	como	ADP	_	_	9	case	_	_
9	estándar	estándar	NOUN	_	Number=Sing	3	obl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Trudón	trudón	PROPN	_	_	3	nsubj:pass	_	_
2	fue	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	enterrado	enterrar	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	en	en	ADP	_	_	6	case	_	_
5	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	iglesia	iglesia	NOUN	_	Gender=Fem|Number=Sing	3	obl	_	_
7	de	de	ADP	_	_	9	case	_	_
8	su	su	DET	_	Number=Sing|Person=3|Poss=Yes|PronType=Prs	9	det	_	_
9	monasterio	monasterio	NOUN	_	Gender=Masc|Number=Sing	6	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish-AnCora)

This relation is a language-specific subtype of [nsubj]().

36 nodes (0%) are attached to their parents as `nsubj:pass`.

19 instances of `nsubj:pass` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.25.

The following 5 pairs of parts of speech are connected with `nsubj:pass`: [es-pos/VERB]()-[es-pos/NOUN]() (25; 69% instances), [es-pos/VERB]()-[es-pos/PRON]() (4; 11% instances), [es-pos/VERB]()-[es-pos/PROPN]() (4; 11% instances), [es-pos/ADJ]()-[es-pos/PRON]() (2; 6% instances), [es-pos/PRON]()-[es-pos/NOUN]() (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	El	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	accidente	accidente	NOUN	NOUN	Gender=Masc|Number=Sing	4	nsubj:pass	_	_
3	se	se	PRON	PRON	_	4	expl:pass	_	_
4	saldó	saldar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	sin	sin	ADP	ADP	AdpType=Prep	6	case	_	_
6	heridos	herido	NOUN	NOUN	Gender=Masc|Number=Plur	4	obl	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	PunctType=Peri	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:pass	color:blue
1	LA	la	DET	DET	Gender=Fem|Number=Sing|PronType=Dem	2	det	_	_
2	REAL	real	PROPN	PROPN	_	6	nsubj:pass	_	MWE=REAL_SOCIEDAD|MWEPOS=PROPN
3	SOCIEDAD	sociedad	PROPN	PROPN	_	2	flat	_	_
4	NO	no	ADV	ADV	Polarity=Neg	6	advmod	_	_
5	SE	se	PRON	PRON	_	6	expl:pass	_	_
6	ALEJA	aleja	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	DEL	del	ADP	ADP	AdpType=Preppron|Gender=Masc|Number=Sing	8	case	_	_
8	PRECIPICIO	precipicio	NOUN	NOUN	Gender=Masc|Number=Sing	6	obl	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 nsubj:pass	color:blue
1	Incluso	incluso	ADV	ADV	_	2	advmod	_	_
2	Italia	Italia	PROPN	PROPN	_	18	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	PunctType=Comm	5	punct	_	_
4	otro	otro	DET	DET	Gender=Masc|Number=Sing|PronType=Ind	5	det	_	_
5	país	país	NOUN	NOUN	Gender=Masc|Number=Sing	2	appos	_	_
6	que	que	PRON	PRON	PronType=Rel	9	nsubj:pass	_	_
7	no	no	ADV	ADV	Polarity=Neg	9	advmod	_	_
8	se	se	PRON	PRON	_	9	expl:pass	_	_
9	caracteriza	caracterizar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	acl	_	_
10	por	por	ADP	ADP	AdpType=Prep	12	case	_	_
11	su	su	DET	DET	Number=Sing|Person=3|Poss=Yes|PronType=Prs	12	det	_	_
12	sensibilidad	sensibilidad	NOUN	NOUN	Gender=Fem|Number=Sing	9	obj	_	_
13	pública	público	ADJ	ADJ	Gender=Fem|Number=Sing	12	amod	_	_
14	hacia	hacia	ADP	ADP	AdpType=Prep	16	case	_	_
15	la	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	familia	familia	NOUN	NOUN	Gender=Fem|Number=Sing	12	nmod	_	SpaceAfter=No
17	,	,	PUNCT	PUNCT	PunctType=Comm	5	punct	_	_
18	tiene	tener	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
19	un	uno	DET	DET	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	20	det	_	_
20	6%	6/100	SYM	SYM	NumForm=Digit|NumType=Frac	18	obj	_	_
21	de	de	ADP	ADP	AdpType=Prep	22	case	_	_
22	infantes	infante	NOUN	NOUN	Gender=Masc|Number=Plur	20	nmod	_	_
23	cubiertos	cubierto	ADJ	ADJ	Gender=Masc|Number=Plur|VerbForm=Part	22	amod	_	SpaceAfter=No
24	.	.	PUNCT	PUNCT	PunctType=Peri	18	punct	_	_

~~~


