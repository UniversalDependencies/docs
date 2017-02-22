

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish)

This relation is universal.
There are 1 language-specific subtypes of `acl`: [acl:relcl]().

5470 nodes (1%) are attached to their parents as `acl`.

4985 instances of `acl` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.34753199268739.

The following 43 pairs of parts of speech are connected with `acl`: [es-pos/VERB]()-[es-pos/VERB]() (2569; 47% instances), [es-pos/NOUN]()-[es-pos/VERB]() (2244; 41% instances), [es-pos/PROPN]()-[es-pos/VERB]() (206; 4% instances), [es-pos/NOUN]()-[es-pos/PROPN]() (70; 1% instances), [es-pos/PRON]()-[es-pos/VERB]() (69; 1% instances), [es-pos/ADJ]()-[es-pos/VERB]() (66; 1% instances), [es-pos/VERB]()-[es-pos/NOUN]() (54; 1% instances), [es-pos/NOUN]()-[es-pos/NOUN]() (35; 1% instances), [es-pos/PROPN]()-[es-pos/PROPN]() (20; 0% instances), [es-pos/VERB]()-[es-pos/PROPN]() (17; 0% instances), [es-pos/VERB]()-[es-pos/ADJ]() (12; 0% instances), [es-pos/NOUN]()-[es-pos/ADJ]() (11; 0% instances), [es-pos/NUM]()-[es-pos/VERB]() (10; 0% instances), [es-pos/X]()-[es-pos/VERB]() (10; 0% instances), [es-pos/ADP]()-[es-pos/VERB]() (9; 0% instances), [es-pos/VERB]()-[es-pos/PRON]() (9; 0% instances), [es-pos/DET]()-[es-pos/VERB]() (8; 0% instances), [es-pos/PRON]()-[es-pos/NOUN]() (5; 0% instances), [es-pos/SCONJ]()-[es-pos/NOUN]() (4; 0% instances), [es-pos/ADJ]()-[es-pos/NOUN]() (3; 0% instances), [es-pos/AUX]()-[es-pos/VERB]() (3; 0% instances), [es-pos/PRON]()-[es-pos/PROPN]() (3; 0% instances), [es-pos/PROPN]()-[es-pos/ADJ]() (3; 0% instances), [es-pos/PROPN]()-[es-pos/NOUN]() (3; 0% instances), [es-pos/ADJ]()-[es-pos/ADJ]() (2; 0% instances), [es-pos/ADV]()-[es-pos/VERB]() (2; 0% instances), [es-pos/NOUN]()-[es-pos/ADV]() (2; 0% instances), [es-pos/NOUN]()-[es-pos/PRON]() (2; 0% instances), [es-pos/PROPN]()-[es-pos/X]() (2; 0% instances), [es-pos/SCONJ]()-[es-pos/VERB]() (2; 0% instances), [es-pos/VERB]()-[es-pos/ADV]() (2; 0% instances), [es-pos/VERB]()-[es-pos/X]() (2; 0% instances), [es-pos/ADV]()-[es-pos/NOUN]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/DET]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/NUM]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/X]() (1; 0% instances), [es-pos/NUM]()-[es-pos/NOUN]() (1; 0% instances), [es-pos/PRON]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/SCONJ]()-[es-pos/PRON]() (1; 0% instances), [es-pos/SCONJ]()-[es-pos/X]() (1; 0% instances), [es-pos/SYM]()-[es-pos/VERB]() (1; 0% instances), [es-pos/VERB]()-[es-pos/DET]() (1; 0% instances), [es-pos/X]()-[es-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 acl	color:blue
1	El	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	sitio	sitio	NOUN	_	Gender=Masc|Number=Sing	3	nsubj	_	_
3	tiene	tener	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	terraza	terraza	NOUN	_	Gender=Fem|Number=Sing	3	obj	_	_
5	en	en	ADP	_	_	6	case	_	_
6	verano	verano	NOUN	_	Gender=Masc|Number=Sing	3	obl	_	_
7	para	para	ADP	_	_	8	mark	_	_
8	comer	comer	VERB	_	VerbForm=Inf	3	acl	_	_
9	o	o	CCONJ	_	_	10	cc	_	_
10	cenar	cenar	VERB	_	VerbForm=Inf	8	conj	_	_
11	fuera	fuera	ADV	_	_	10	advmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 acl	color:blue
1	Cumplieron	cumplir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
2	los	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	_	_
3	plazos	plazo	NOUN	_	Gender=Masc|Number=Plur	1	obj	_	_
4	previstos	previsto	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	3	acl	_	_
5	y	y	CCONJ	_	_	7	cc	_	_
6	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	presupuesto	presupuesto	NOUN	_	Gender=Masc|Number=Sing	3	conj	_	_
8	inicial	inicial	ADJ	_	Number=Sing	7	amod	_	SpaceAfter=No
9	!	!	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 acl	color:blue
1	Genera	genera	PROPN	_	Number=Sing	0	root	_	_
2	Plantarum	plantarum	PROPN	_	_	1	flat	_	_
3	Florae	florae	PROPN	_	_	1	flat	_	_
4	Germanicae	germanicae	PROPN	_	_	1	flat	_	SpaceAfter=No
5	,	,	PUNCT	_	_	1	punct	_	_
6	(	(	PUNCT	_	_	7	punct	_	SpaceAfter=No
7	abreviado	abreviado	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	1	acl	_	_
8	Gen.	gen.	X	_	_	9	compound	_	_
9	Fl	fl	X	_	_	7	appos	_	SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish-AnCora)

This relation is universal.

9596 nodes (2%) are attached to their parents as `acl`.

9555 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.38130471029596.

The following 42 pairs of parts of speech are connected with `acl`: [es-pos/NOUN]()-[es-pos/VERB]() (7417; 77% instances), [es-pos/PROPN]()-[es-pos/VERB]() (782; 8% instances), [es-pos/ADJ]()-[es-pos/VERB]() (282; 3% instances), [es-pos/NOUN]()-[es-pos/ADJ]() (259; 3% instances), [es-pos/PRON]()-[es-pos/VERB]() (211; 2% instances), [es-pos/NOUN]()-[es-pos/NOUN]() (208; 2% instances), [es-pos/NOUN]()-[es-pos/AUX]() (117; 1% instances), [es-pos/PROPN]()-[es-pos/NOUN]() (54; 1% instances), [es-pos/ADV]()-[es-pos/VERB]() (43; 0% instances), [es-pos/NOUN]()-[es-pos/PRON]() (39; 0% instances), [es-pos/PROPN]()-[es-pos/ADJ]() (24; 0% instances), [es-pos/CCONJ]()-[es-pos/VERB]() (21; 0% instances), [es-pos/NOUN]()-[es-pos/PROPN]() (13; 0% instances), [es-pos/PRON]()-[es-pos/ADJ]() (13; 0% instances), [es-pos/PROPN]()-[es-pos/AUX]() (13; 0% instances), [es-pos/DET]()-[es-pos/VERB]() (12; 0% instances), [es-pos/NUM]()-[es-pos/VERB]() (12; 0% instances), [es-pos/PRON]()-[es-pos/NOUN]() (10; 0% instances), [es-pos/NOUN]()-[es-pos/ADV]() (8; 0% instances), [es-pos/NOUN]()-[es-pos/NUM]() (7; 0% instances), [es-pos/PRON]()-[es-pos/AUX]() (6; 0% instances), [es-pos/ADJ]()-[es-pos/ADJ]() (5; 0% instances), [es-pos/DET]()-[es-pos/NOUN]() (4; 0% instances), [es-pos/NOUN]()-[es-pos/ADP]() (4; 0% instances), [es-pos/PRON]()-[es-pos/PRON]() (4; 0% instances), [es-pos/ADJ]()-[es-pos/AUX]() (3; 0% instances), [es-pos/ADJ]()-[es-pos/NOUN]() (3; 0% instances), [es-pos/ADP]()-[es-pos/VERB]() (3; 0% instances), [es-pos/NOUN]()-[es-pos/DET]() (2; 0% instances), [es-pos/NOUN]()-[es-pos/SYM]() (2; 0% instances), [es-pos/PROPN]()-[es-pos/PRON]() (2; 0% instances), [es-pos/PROPN]()-[es-pos/PROPN]() (2; 0% instances), [es-pos/VERB]()-[es-pos/VERB]() (2; 0% instances), [es-pos/ADJ]()-[es-pos/ADV]() (1; 0% instances), [es-pos/ADV]()-[es-pos/NOUN]() (1; 0% instances), [es-pos/CCONJ]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/DET]()-[es-pos/PRON]() (1; 0% instances), [es-pos/INTJ]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/NUM]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/PRON]()-[es-pos/ADV]() (1; 0% instances), [es-pos/PROPN]()-[es-pos/ADP]() (1; 0% instances), [es-pos/PUNCT]()-[es-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 acl	color:blue
1	Es	ser	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
2	un	uno	DET	DET	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	efecto	efecto	NOUN	NOUN	Gender=Masc|Number=Sing	0	root	_	_
4	especial	especial	ADJ	ADJ	Number=Sing	3	amod	_	_
5	que	que	PRON	PRON	PronType=Rel	8	nsubj	_	_
6	se	se	PRON	PRON	_	8	obj	_	_
7	les	él	PRON	PRON	Case=Dat|Number=Plur|Person=3|PronType=Prs	8	obj	_	_
8	olvidó	olvidar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	acl	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl	color:blue
1	Por	por	ADP	ADP	AdpType=Prep	2	case	_	_
2	él	él	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	obl	_	_
3	suspiró	suspirar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	Yehudi	Yehudi	PROPN	PROPN	_	3	nsubj	_	MWE=Yehudi_Menuhin|MWEPOS=PROPN
5	Menuhin	Menuhin	PROPN	PROPN	_	4	flat	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	PunctType=Comm	8	punct	_	_
7	que	que	PRON	PRON	PronType=Rel	8	nsubj	_	_
8	elogió	elogiar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	acl	_	_
9	su	su	DET	DET	Number=Sing|Person=3|Poss=Yes|PronType=Prs	10	det	_	_
10	sonoridad	sonoridad	NOUN	NOUN	Gender=Fem|Number=Sing	8	obj	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 acl	color:blue
1	Y	y	CCONJ	CCONJ	_	7	advmod	_	_
2	la	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
3	que	que	PRON	PRON	PronType=Rel	4	obj	_	_
4	tiene	tener	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	csubj	_	_
5	es	ser	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
6	más	más	ADV	ADV	_	7	advmod	_	_
7	amarga	amargo	ADJ	ADJ	Gender=Fem|Number=Sing	0	root	_	_
8	de	de	ADP	ADP	AdpType=Prep	12	mark	_	_
9	lo	el	DET	DET	Definite=Def|Number=Sing|PronType=Art	12	det	_	_
10	que	que	PRON	PRON	PronType=Rel	12	obj	_	_
11	él	él	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	nsubj	_	_
12	denuncia	denunciar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	acl	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	PunctType=Peri	7	punct	_	_

~~~


