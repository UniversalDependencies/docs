

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish)

This relation is universal.

46295 nodes (11%) are attached to their parents as `punct`.

28125 instances of `punct` (61%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.03445296468301.

The following 28 pairs of parts of speech are connected with `punct`: [es-pos/VERB]()-[es-pos/PUNCT]() (20059; 43% instances), [es-pos/NOUN]()-[es-pos/PUNCT]() (12723; 27% instances), [es-pos/PROPN]()-[es-pos/PUNCT]() (7121; 15% instances), [es-pos/ADJ]()-[es-pos/PUNCT]() (2544; 5% instances), [es-pos/NUM]()-[es-pos/PUNCT]() (1207; 3% instances), [es-pos/X]()-[es-pos/PUNCT]() (691; 1% instances), [es-pos/PRON]()-[es-pos/PUNCT]() (680; 1% instances), [es-pos/ADV]()-[es-pos/PUNCT]() (570; 1% instances), [es-pos/SYM]()-[es-pos/PUNCT]() (278; 1% instances), [es-pos/ADP]()-[es-pos/PUNCT]() (192; 0% instances), [es-pos/CCONJ]()-[es-pos/PUNCT]() (85; 0% instances), [es-pos/DET]()-[es-pos/PUNCT]() (59; 0% instances), [es-pos/NOUN]()-[es-pos/X]() (20; 0% instances), [es-pos/AUX]()-[es-pos/PUNCT]() (19; 0% instances), [es-pos/PUNCT]()-[es-pos/PUNCT]() (12; 0% instances), [es-pos/PART]()-[es-pos/PUNCT]() (8; 0% instances), [es-pos/VERB]()-[es-pos/X]() (8; 0% instances), [es-pos/SCONJ]()-[es-pos/PUNCT]() (7; 0% instances), [es-pos/VERB]()-[es-pos/CCONJ]() (2; 0% instances), [es-pos/X]()-[es-pos/X]() (2; 0% instances), [es-pos/ADJ]()-[es-pos/ADP]() (1; 0% instances), [es-pos/ADJ]()-[es-pos/SYM]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/ADV]() (1; 0% instances), [es-pos/PRON]()-[es-pos/X]() (1; 0% instances), [es-pos/PROPN]()-[es-pos/ADP]() (1; 0% instances), [es-pos/SYM]()-[es-pos/X]() (1; 0% instances), [es-pos/VERB]()-[es-pos/SYM]() (1; 0% instances), [es-pos/X]()-[es-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 punct	color:blue
1	Aun	aun	ADV	_	_	2	advmod	_	_
2	hay	haber	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	otros	otro	PRON	_	Gender=Masc|Number=Plur|PronType=Ind	2	obj	_	_
4	reclutados	reclutado	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	3	acl	_	_
5	por	por	ADP	_	_	7	case	_	_
6	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	Ejército	ejército	NOUN	_	_	4	obl	_	_
8	Blanco	blanco	PROPN	_	_	7	amod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 punct	color:blue
1	Ir	ir	VERB	_	VerbForm=Inf	10	csubj	_	_
2	a	a	ADP	_	_	4	case	_	_
3	este	este	DET	_	Gender=Masc|Number=Sing|PronType=Dem	4	det	_	_
4	colegio	colegio	NOUN	_	Gender=Masc|Number=Sing	1	obl	_	SpaceAfter=No
5	,	,	PUNCT	_	_	10	punct	_	_
6	para	para	ADP	_	_	7	case	_	_
7	mí	yo	PRON	_	Case=Acc|Number=Sing|Person=1|PrepCase=Pre|PronType=Prs	10	nmod	_	_
8	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
9	peor	peor	ADJ	_	Degree=Cmp|Number=Sing	10	amod	_	_
10	experiencia	experiencia	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
11	de	de	ADP	_	_	13	case	_	_
12	mi	mi	DET	_	Number=Sing|Person=1|Poss=Yes|PronType=Prs	13	det	_	_
13	vida	vida	NOUN	_	Gender=Fem|Number=Sing	10	nmod	_	SpaceAfter=No
14	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 punct	color:blue
1	La	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	ciudad	ciudad	NOUN	_	Gender=Fem|Number=Sing	8	nsubj	_	_
3	más	más	ADV	_	Degree=Cmp	4	advmod	_	_
4	cercana	cercano	ADJ	_	Gender=Fem|Number=Sing	2	amod	_	_
5	a	a	ADP	_	_	6	case	_	_
6	Ist	ist	PROPN	_	_	4	nmod	_	_
7	es	ser	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	Zadar	zadar	PROPN	_	_	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish-AnCora)

This relation is universal.

59160 nodes (12%) are attached to their parents as `punct`.

34320 instances of `punct` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.37128127112914.

The following 16 pairs of parts of speech are connected with `punct`: [es-pos/VERB]()-[es-pos/PUNCT]() (26312; 44% instances), [es-pos/NOUN]()-[es-pos/PUNCT]() (14623; 25% instances), [es-pos/PROPN]()-[es-pos/PUNCT]() (6603; 11% instances), [es-pos/ADJ]()-[es-pos/PUNCT]() (4808; 8% instances), [es-pos/ADV]()-[es-pos/PUNCT]() (1688; 3% instances), [es-pos/AUX]()-[es-pos/PUNCT]() (1333; 2% instances), [es-pos/ADP]()-[es-pos/PUNCT]() (1177; 2% instances), [es-pos/NUM]()-[es-pos/PUNCT]() (869; 1% instances), [es-pos/PRON]()-[es-pos/PUNCT]() (860; 1% instances), [es-pos/CCONJ]()-[es-pos/PUNCT]() (269; 0% instances), [es-pos/DET]()-[es-pos/PUNCT]() (195; 0% instances), [es-pos/INTJ]()-[es-pos/PUNCT]() (111; 0% instances), [es-pos/SYM]()-[es-pos/PUNCT]() (108; 0% instances), [es-pos/SCONJ]()-[es-pos/PUNCT]() (92; 0% instances), [es-pos/PART]()-[es-pos/PUNCT]() (66; 0% instances), [es-pos/PUNCT]()-[es-pos/PUNCT]() (46; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 punct	color:blue
1	Desde	desde	ADP	ADP	AdpType=Prep	2	case	_	_
2	entonces	entonces	ADV	ADV	_	3	advmod	_	_
3	entró	entrar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	en	en	ADP	ADP	AdpType=Prep	5	case	_	_
5	silencio	silencio	NOUN	NOUN	Gender=Masc|Number=Sing	3	obl	_	_
6	absoluto	absoluto	ADJ	ADJ	Gender=Masc|Number=Sing	5	amod	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 punct	color:blue
1	Sí	sí	ADV	ADV	_	3	advmod	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	PunctType=Comm	1	punct	_	_
3	señor	señor	NOUN	NOUN	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
4	.	.	PUNCT	PUNCT	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 punct	color:blue
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


