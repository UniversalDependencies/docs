

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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 orphan	color:blue
1	Alma	alma	NOUN	NOUN	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	PunctType=Comm	3	punct	_	_
3	corazón	corazón	NOUN	NOUN	Gender=Masc|Number=Sing	1	conj	_	_
4	y	y	CCONJ	CCONJ	_	3	cc	_	_
5	vida	vida	NOUN	NOUN	Gender=Fem|Number=Sing	3	orphan	_	_
6	y	y	CCONJ	CCONJ	_	3	cc	_	_
7	nada	nada	PRON	PRON	Number=Sing|PronType=Ind	3	orphan	_	_
8	menos	menos	ADV	ADV	_	7	advmod	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	PunctType=Peri	1	punct	_	_

~~~


