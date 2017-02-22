

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician)

This relation is universal.

19359 nodes (18%) are attached to their parents as `case`.

16952 instances of `case` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.79141484580815.

The following 38 pairs of parts of speech are connected with `case`: [gl-pos/NOUN]()-[gl-pos/ADP]() (9941; 51% instances), [gl-pos/VERB]()-[gl-pos/ADP]() (5526; 29% instances), [gl-pos/VERB]()-[gl-pos/ADV]() (1361; 7% instances), [gl-pos/ADP]()-[gl-pos/ADP]() (583; 3% instances), [gl-pos/ADJ]()-[gl-pos/ADP]() (580; 3% instances), [gl-pos/VERB]()-[gl-pos/VERB]() (394; 2% instances), [gl-pos/NUM]()-[gl-pos/ADP]() (346; 2% instances), [gl-pos/ADV]()-[gl-pos/ADP]() (229; 1% instances), [gl-pos/VERB]()-[gl-pos/NOUN]() (79; 0% instances), [gl-pos/VERB]()-[gl-pos/PRON]() (76; 0% instances), [gl-pos/PROPN]()-[gl-pos/ADP]() (57; 0% instances), [gl-pos/PRON]()-[gl-pos/ADP]() (55; 0% instances), [gl-pos/NOUN]()-[gl-pos/SCONJ]() (29; 0% instances), [gl-pos/VERB]()-[gl-pos/SCONJ]() (26; 0% instances), [gl-pos/DET]()-[gl-pos/ADP]() (23; 0% instances), [gl-pos/ADJ]()-[gl-pos/PRON]() (7; 0% instances), [gl-pos/VERB]()-[gl-pos/ADJ]() (7; 0% instances), [gl-pos/VERB]()-[gl-pos/PART]() (5; 0% instances), [gl-pos/SCONJ]()-[gl-pos/ADP]() (4; 0% instances), [gl-pos/ADP]()-[gl-pos/PRON]() (3; 0% instances), [gl-pos/PUNCT]()-[gl-pos/PRON]() (3; 0% instances), [gl-pos/VERB]()-[gl-pos/NUM]() (3; 0% instances), [gl-pos/VERB]()-[gl-pos/PROPN]() (3; 0% instances), [gl-pos/ADP]()-[gl-pos/NOUN]() (2; 0% instances), [gl-pos/ADV]()-[gl-pos/PRON]() (2; 0% instances), [gl-pos/NOUN]()-[gl-pos/PRON]() (2; 0% instances), [gl-pos/PROPN]()-[gl-pos/SCONJ]() (2; 0% instances), [gl-pos/ADJ]()-[gl-pos/ADV]() (1; 0% instances), [gl-pos/CONJ]()-[gl-pos/PART]() (1; 0% instances), [gl-pos/DET]()-[gl-pos/PRON]() (1; 0% instances), [gl-pos/NUM]()-[gl-pos/PRON]() (1; 0% instances), [gl-pos/NUM]()-[gl-pos/PUNCT]() (1; 0% instances), [gl-pos/NUM]()-[gl-pos/SCONJ]() (1; 0% instances), [gl-pos/PART]()-[gl-pos/PRON]() (1; 0% instances), [gl-pos/PRON]()-[gl-pos/PRON]() (1; 0% instances), [gl-pos/PROPN]()-[gl-pos/PRON]() (1; 0% instances), [gl-pos/VERB]()-[gl-pos/CONJ]() (1; 0% instances), [gl-pos/VERB]()-[gl-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 case	color:blue
1	En	en	ADP	SPS00	_	0	root	_	Treeler:sentence
2	1985	1985	NUM	Z	_	1	nmod	_	Treeler:sn
3	a	o	DET	DA0FS0	_	4	det	_	Treeler:spec
4	Administración	administración	NOUN	NCFS000	_	1	nmod	_	Treeler:sn
5	de	de	ADP	SPS00	_	4	case	_	Treeler:sp
6	St	st	PROPN	NP00000	_	5	nmod	_	Treeler:sn
7	.	.	PUNCT	Fp	_	1	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 case	color:blue
1	Así	así	ADV	RG	_	2	det	_	Treeler:spec
2	mesmo	mesmo	ADV	RG	_	5	case	_	Treeler:cc
3	,	,	PUNCT	Fc	_	2	punct	_	Treeler:f
4	serán	ser	VERB	VSIF3P0	_	5	aux	_	Treeler:v
5	publicados	publicar	VERB	VMP00PM	_	0	root	_	Treeler:sentence
6	en	en	ADP	SPS00	_	5	case	_	Treeler:cc
7	o	o	DET	DA0MS0	_	9	det	_	Treeler:spec
8	"	"	PUNCT	Fe	_	9	punct	_	Treeler:f
9	Boletín	boletín	NOUN	NCMS000	_	6	nmod	_	Treeler:sn
10	Oficial	oficial	ADJ	AQ0CS0	_	9	amod	_	Treeler:s.a
11	de	de	ADP	SPS00	_	9	case	_	Treeler:sp
12	el	el	PRON	PP3MS000	_	11	nmod	_	Treeler:sn
13	Estado	estado	NOUN	NCMS000	_	11	nmod	_	Treeler:sn
14	"	"	PUNCT	Fe	_	9	punct	_	Treeler:f
15	.	.	PUNCT	Fp	_	5	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 case	color:blue
1	Así	así	ADV	RG	_	2	det	_	Treeler:spec
2	mesmo	mesmo	ADV	RG	_	5	case	_	Treeler:cc
3	,	,	PUNCT	Fc	_	2	punct	_	Treeler:f
4	serán	ser	VERB	VSIF3P0	_	5	aux	_	Treeler:v
5	publicados	publicar	VERB	VMP00PM	_	0	root	_	Treeler:sentence
6	en	en	ADP	SPS00	_	5	case	_	Treeler:cc
7	o	o	DET	DA0MS0	_	9	det	_	Treeler:spec
8	"	"	PUNCT	Fe	_	9	punct	_	Treeler:f
9	Boletín	boletín	NOUN	NCMS000	_	6	nmod	_	Treeler:sn
10	Oficial	oficial	ADJ	AQ0CS0	_	9	amod	_	Treeler:s.a
11	de	de	ADP	SPS00	_	9	case	_	Treeler:sp
12	el	el	PRON	PP3MS000	_	11	nmod	_	Treeler:sn
13	Estado	estado	NOUN	NCMS000	_	11	nmod	_	Treeler:sn
14	"	"	PUNCT	Fe	_	9	punct	_	Treeler:f
15	.	.	PUNCT	Fp	_	5	punct	_	Treeler:f

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician-TreeGal)

This relation is universal.

2069 nodes (13%) are attached to their parents as `case`.

2069 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.77863702271629.

The following 26 pairs of parts of speech are connected with `case`: [gl-pos/NOUN]()-[gl-pos/ADP]() (1373; 66% instances), [gl-pos/PROPN]()-[gl-pos/ADP]() (401; 19% instances), [gl-pos/PRON]()-[gl-pos/ADP]() (144; 7% instances), [gl-pos/NUM]()-[gl-pos/ADP]() (30; 1% instances), [gl-pos/NOUN]()-[gl-pos/ADV]() (27; 1% instances), [gl-pos/ADJ]()-[gl-pos/ADP]() (21; 1% instances), [gl-pos/ADV]()-[gl-pos/ADP]() (14; 1% instances), [gl-pos/VERB]()-[gl-pos/ADP]() (13; 1% instances), [gl-pos/NOUN]()-[gl-pos/SCONJ]() (9; 0% instances), [gl-pos/PROPN]()-[gl-pos/PROPN]() (6; 0% instances), [gl-pos/DET]()-[gl-pos/ADP]() (5; 0% instances), [gl-pos/PROPN]()-[gl-pos/SCONJ]() (4; 0% instances), [gl-pos/NOUN]()-[gl-pos/NOUN]() (3; 0% instances), [gl-pos/NOUN]()-[gl-pos/PROPN]() (3; 0% instances), [gl-pos/PRON]()-[gl-pos/SCONJ]() (3; 0% instances), [gl-pos/PROPN]()-[gl-pos/ADV]() (2; 0% instances), [gl-pos/VERB]()-[gl-pos/ADV]() (2; 0% instances), [gl-pos/ADJ]()-[gl-pos/SCONJ]() (1; 0% instances), [gl-pos/ADV]()-[gl-pos/ADV]() (1; 0% instances), [gl-pos/INTJ]()-[gl-pos/ADP]() (1; 0% instances), [gl-pos/NOUN]()-[gl-pos/ADJ]() (1; 0% instances), [gl-pos/NUM]()-[gl-pos/NOUN]() (1; 0% instances), [gl-pos/PRON]()-[gl-pos/VERB]() (1; 0% instances), [gl-pos/PROPN]()-[gl-pos/NOUN]() (1; 0% instances), [gl-pos/SYM]()-[gl-pos/ADP]() (1; 0% instances), [gl-pos/VERB]()-[gl-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case	color:blue
1	Europeizar	europeizar	VERB	V0f000	VerbForm=Inf	0	root	_	_
2	o	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	horario	horario	NOUN	Scms	Gender=Masc|Number=Sing	1	obj	_	_
4	de	de	ADP	P	AdpType=Prep	5	case	_	_
5	traballo	traballo	NOUN	Scms	Gender=Masc|Number=Sing	3	nmod	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 case	color:blue
1	"	"	PUNCT	Q"	_	2	punct	_	SpaceAfter=No
2	Temos	ter	VERB	Vpi10p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	a	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	xornada	xornada	NOUN	Scfs	Gender=Fem|Number=Sing	2	obj	_	_
5	laboral	laboral	ADJ	A0fs	Gender=Fem|Number=Sing	4	amod	_	_
6	máis	máis	ADV	Wm	_	7	advmod	_	_
7	longa	longo	ADJ	A0fs	Gender=Fem|Number=Sing	4	amod	_	_
8	de	de	ADP	P	AdpType=Prep	9	case	_	_
9	Europa	Europa	PROPN	Sp00	_	7	obl	_	SpaceAfter=No
10	.	.	PUNCT	Q.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 case	color:blue
1	Por	por	ADP	P	AdpType=Prep	2	case	_	_
2	iso	ese	PRON	Enns	Gender=Neut|Number=Sing|PronType=Dem	3	obl	_	_
3	deixei	deixar	VERB	Vei10s	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
4	o	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	partido	partido	NOUN	Scms	Gender=Masc|Number=Sing	3	obj	_	_
6	cando	cando	ADV	Wr	PronType=Rel	8	mark	_	_
7	se	se	PRON	Rao3aa	Clitic=Yes|Gender=Com|Person=3|PronType=Prs	8	nsubj	_	_
8	integrou	integrar	VERB	Vei30s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	advcl	_	_
9	en	en	ADP	P	AdpType=Prep	11	case	_	_
10	o	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	Bloque	Bloque	PROPN	Spms	Gender=Masc|Number=Sing	8	obl	_	SpaceAfter=No
12	.	.	PUNCT	Q.	_	3	punct	_	_

~~~


