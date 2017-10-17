

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician)

This relation is universal.

8187 nodes (8%) are attached to their parents as `amod`.

6541 instances of `amod` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.3097593746183.

The following 24 pairs of parts of speech are connected with `amod`: [gl-pos/NOUN]()-[gl-pos/ADJ]() (7257; 89% instances), [gl-pos/NOUN]()-[gl-pos/NOUN]() (537; 7% instances), [gl-pos/VERB]()-[gl-pos/ADJ]() (91; 1% instances), [gl-pos/ADJ]()-[gl-pos/ADJ]() (81; 1% instances), [gl-pos/NOUN]()-[gl-pos/NUM]() (66; 1% instances), [gl-pos/PROPN]()-[gl-pos/ADJ]() (65; 1% instances), [gl-pos/PRON]()-[gl-pos/ADJ]() (21; 0% instances), [gl-pos/NUM]()-[gl-pos/ADJ]() (19; 0% instances), [gl-pos/NOUN]()-[gl-pos/DET]() (12; 0% instances), [gl-pos/NOUN]()-[gl-pos/PROPN]() (7; 0% instances), [gl-pos/NUM]()-[gl-pos/SYM]() (6; 0% instances), [gl-pos/ADP]()-[gl-pos/ADJ]() (5; 0% instances), [gl-pos/NOUN]()-[gl-pos/PRON]() (5; 0% instances), [gl-pos/VERB]()-[gl-pos/DET]() (3; 0% instances), [gl-pos/SCONJ]()-[gl-pos/ADJ]() (2; 0% instances), [gl-pos/VERB]()-[gl-pos/NOUN]() (2; 0% instances), [gl-pos/ADJ]()-[gl-pos/DET]() (1; 0% instances), [gl-pos/ADJ]()-[gl-pos/PRON]() (1; 0% instances), [gl-pos/CCONJ]()-[gl-pos/ADV]() (1; 0% instances), [gl-pos/DET]()-[gl-pos/ADJ]() (1; 0% instances), [gl-pos/NOUN]()-[gl-pos/PUNCT]() (1; 0% instances), [gl-pos/NUM]()-[gl-pos/NOUN]() (1; 0% instances), [gl-pos/PROPN]()-[gl-pos/DET]() (1; 0% instances), [gl-pos/VERB]()-[gl-pos/PUNCT]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 amod	color:blue
1	Así	así	ADV	RG	_	2	det	_	Treeler:spec
2	mesmo	mesmo	ADV	RG	_	5	case	_	SpaceAfter=No|ToDo=case-upos|Treeler:cc
3	,	,	PUNCT	Fc	_	2	punct	_	Treeler:f
4	serán	ser	VERB	VSIF3P0	_	5	aux	_	Treeler:v
5	publicados	publicar	VERB	VMP00PM	_	0	root	_	Treeler:sentence
6	en	en	ADP	SPS00	_	9	case	_	Treeler:cc
7	o	o	DET	DA0MS0	_	9	det	_	Treeler:spec
8	"	"	PUNCT	Fe	_	9	punct	_	SpaceAfter=No|Treeler:f
9	Boletín	boletín	NOUN	NCMS000	_	5	obl	_	Treeler:sn
10	Oficial	oficial	ADJ	AQ0CS0	_	9	amod	_	Treeler:s.a
11	de	de	ADP	SPS00	_	13	case	_	Treeler:sp
12	el	el	PRON	PP3MS000	_	13	nmod	_	Treeler:sn
13	Estado	estado	NOUN	NCMS000	_	9	nmod	_	SpaceAfter=No|Treeler:sn
14	"	"	PUNCT	Fe	_	9	punct	_	SpaceAfter=No|Treeler:f
15	.	.	PUNCT	Fp	_	5	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 amod	color:blue
1	O	o	DET	DA0MS0	_	2	det	_	Treeler:spec
2	cheque	cheque	NOUN	NCMS000	_	3	nsubj	_	Treeler:suj
3	cruza	cruzar	VERB	VMIP3S0	_	0	root	_	Treeler:sentence
4	se	se	PRON	PP3CN000	_	3	dep	_	Treeler:morfema.pronominal
5	mediante	mediante	ADP	SPS00	_	7	case	_	Treeler:cc
6	a	o	DET	DA0FS0	_	7	det	_	Treeler:spec
7	colocación	colocación	NOUN	NCFS000	_	3	obl	_	Treeler:sn
8	de	de	ADP	SPS00	_	9	case	_	Treeler:sp
9	dúas	dous	NOUN	NCFP000	_	7	nmod	_	Treeler:sn
10	barras	barra	NOUN	NCFP000	_	9	amod	_	Treeler:s.a
11	paralelas	paralelo	ADJ	AQ0FP0	_	9	amod	_	Treeler:s.a
12	en	en	ADP	SPS00	_	14	case	_	Treeler:sp
13	o	o	DET	DA0MS0	_	14	det	_	Treeler:spec
14	anverso	anverso	NOUN	NCMS000	_	7	nmod	_	Treeler:sn
15	de	de	ADP	SPS00	_	17	case	_	Treeler:sp
16	o	o	DET	DA0MS0	_	17	det	_	Treeler:spec
17	cheque	cheque	NOUN	NCMS000	_	14	nmod	_	Treeler:sn
18	por	por	ADP	SPS00	_	19	case	_	Treeler:sp
19	parte	parte	NOUN	NCCS000	_	17	nmod	_	Treeler:sn
20	de	de	ADP	SPS00	_	22	case	_	Treeler:sp
21	o	o	DET	DA0MS0	_	22	det	_	Treeler:spec
22	que	que	PRON	PR0CN000	_	19	nmod	_	Treeler:sn
23	o	o	PRON	PP3MSA00	_	24	obj	_	Treeler:cd
24	estende	estender	VERB	VMIP3S0	_	17	ccomp	_	SpaceAfter=No|Treeler:S
25	.	.	PUNCT	Fp	_	3	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 amod	color:blue
1	Teñen	ter	VERB	VMIP3P0	_	0	root	_	Treeler:sentence
2	moitas	moito	DET	DI0FP0	_	3	det	_	Treeler:spec
3	razóns	razón	NOUN	NCFP000	_	1	nsubj	_	Treeler:suj
4	históricas	histórico	ADJ	AQ0FP0	_	3	amod	_	Treeler:s.a
5	en	en	ADP	SPS00	_	6	case	_	Treeler:cc
6	común	común	ADJ	AQ0CS0	_	1	amod	_	SpaceAfter=No|Treeler:s.a
7	,	,	PUNCT	Fc	_	1	punct	_	Treeler:f
8	pero	pero	CCONJ	CC	_	1	cc	_	ToDo=cc-without-conj|Treeler:coord
9	os	o	DET	DA0MP0	_	10	det	_	Treeler:spec
10	espazos	espazo	NOUN	NCMP000	_	16	nsubj	_	Treeler:suj
11	de	de	ADP	SPS00	_	12	case	_	Treeler:sp
12	actuación	actuación	NOUN	NCFS000	_	10	nmod	_	Treeler:sn
13	non	non	PART	RN	_	16	advmod	_	Treeler:mod
14	son	ser	AUX	VSIP1S0	_	16	cop	_	Treeler:S
15	necesariamente	necesariamente	ADV	RG	_	16	det	_	Treeler:spec
16	unívocos	unívoco	ADJ	AQ0MP0	_	1	ccomp	_	SpaceAfter=No|Treeler:atr
17	.	.	PUNCT	Fp	_	1	punct	_	Treeler:f

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician-TreeGal)

This relation is universal.

817 nodes (5%) are attached to their parents as `amod`.

616 instances of `amod` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.22154222766218.

The following 13 pairs of parts of speech are connected with `amod`: [gl-pos/NOUN]()-[gl-pos/ADJ]() (715; 88% instances), [gl-pos/PROPN]()-[gl-pos/ADJ]() (74; 9% instances), [gl-pos/VERB]()-[gl-pos/ADJ]() (7; 1% instances), [gl-pos/PRON]()-[gl-pos/ADJ]() (5; 1% instances), [gl-pos/ADJ]()-[gl-pos/ADJ]() (4; 0% instances), [gl-pos/NOUN]()-[gl-pos/VERB]() (3; 0% instances), [gl-pos/NUM]()-[gl-pos/ADJ]() (2; 0% instances), [gl-pos/PROPN]()-[gl-pos/PROPN]() (2; 0% instances), [gl-pos/NOUN]()-[gl-pos/NOUN]() (1; 0% instances), [gl-pos/NOUN]()-[gl-pos/PROPN]() (1; 0% instances), [gl-pos/PROPN]()-[gl-pos/DET]() (1; 0% instances), [gl-pos/PROPN]()-[gl-pos/VERB]() (1; 0% instances), [gl-pos/VERB]()-[gl-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 amod	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 amod	color:blue
1	Citroën	citroën	PROPN	Sp00	_	0	root	_	_
2	-	-	PUNCT	Q-	_	1	punct	_	_
3	Zona	zona	PROPN	Sp00	_	1	flat:name	_	_
4	Franca	franco	ADJ	A0fs	_	3	amod	_	SpaceAfter=No
5	;	;	PUNCT	Q;	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 20 amod	color:blue
1	Con	con	ADP	P	AdpType=Prep	3	case	_	_
2	o	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	galardón	galardón	NOUN	Scms	Gender=Masc|Number=Sing	9	obl	_	_
4	norteamericano	norteamericano	ADJ	A0ms	Gender=Masc|Number=Sing	3	amod	_	SpaceAfter=No
5	,	,	PUNCT	Q,	_	3	punct	_	_
6	o	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
7	xove	xove	ADJ	A0ms	Gender=Masc|Number=Sing	8	amod	_	_
8	director	director	NOUN	Scms	Gender=Masc|Number=Sing	9	nsubj	_	_
9	renovou	renovar	VERB	Vei30s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
10	a	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
11	vella	vello	ADJ	A0fs	Gender=Fem|Number=Sing	12	amod	_	_
12	máxima	máxima	NOUN	Scfs	Gender=Fem|Number=Sing	9	obj	_	_
13	de	de	ADP	P	AdpType=Prep	17	mark	_	_
14	que	que	SCONJ	Cs	_	17	mark	_	_
15	o	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	universal	universal	ADJ	A0ms	Gender=Masc|Number=Sing	17	nsubj	_	_
17	comeza	comezar	VERB	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	acl	_	_
18	en	en	ADP	P	AdpType=Prep	20	case	_	_
19	o	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	20	det	_	_
20	local	local	ADJ	A0ms	Gender=Masc|Number=Sing	17	amod	_	SpaceAfter=No
21	.	.	PUNCT	Q.	_	9	punct	_	_

~~~


