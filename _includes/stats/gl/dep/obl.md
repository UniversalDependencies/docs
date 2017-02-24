

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician)

This relation is universal.

5275 nodes (5%) are attached to their parents as `obl`.

4150 instances of `obl` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.79526066350711.

The following 27 pairs of parts of speech are connected with `obl`: [gl-pos/VERB]()-[gl-pos/NOUN]() (3788; 72% instances), [gl-pos/ADJ]()-[gl-pos/NOUN]() (545; 10% instances), [gl-pos/VERB]()-[gl-pos/PRON]() (238; 5% instances), [gl-pos/ADV]()-[gl-pos/NOUN]() (176; 3% instances), [gl-pos/VERB]()-[gl-pos/PROPN]() (139; 3% instances), [gl-pos/VERB]()-[gl-pos/NUM]() (105; 2% instances), [gl-pos/VERB]()-[gl-pos/ADJ]() (52; 1% instances), [gl-pos/VERB]()-[gl-pos/VERB]() (33; 1% instances), [gl-pos/ADJ]()-[gl-pos/PROPN]() (31; 1% instances), [gl-pos/ADJ]()-[gl-pos/ADJ]() (19; 0% instances), [gl-pos/ADJ]()-[gl-pos/NUM]() (19; 0% instances), [gl-pos/ADV]()-[gl-pos/NUM]() (19; 0% instances), [gl-pos/VERB]()-[gl-pos/ADP]() (19; 0% instances), [gl-pos/ADJ]()-[gl-pos/PRON]() (17; 0% instances), [gl-pos/VERB]()-[gl-pos/ADV]() (17; 0% instances), [gl-pos/ADJ]()-[gl-pos/VERB]() (14; 0% instances), [gl-pos/ADJ]()-[gl-pos/ADP]() (12; 0% instances), [gl-pos/ADV]()-[gl-pos/PROPN]() (11; 0% instances), [gl-pos/ADV]()-[gl-pos/ADJ]() (6; 0% instances), [gl-pos/VERB]()-[gl-pos/DET]() (4; 0% instances), [gl-pos/ADV]()-[gl-pos/VERB]() (3; 0% instances), [gl-pos/ADJ]()-[gl-pos/ADV]() (2; 0% instances), [gl-pos/ADV]()-[gl-pos/DET]() (2; 0% instances), [gl-pos/ADV]()-[gl-pos/ADP]() (1; 0% instances), [gl-pos/ADV]()-[gl-pos/PRON]() (1; 0% instances), [gl-pos/NOUN]()-[gl-pos/NOUN]() (1; 0% instances), [gl-pos/PROPN]()-[gl-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 obl	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 3 obl	color:blue
1	A	a	ADP	SPS00	_	3	case	_	Treeler:cc
2	este	este	DET	DD0MS0	_	3	det	_	Treeler:spec
3	respecto	respecto	NOUN	NCMS000	_	13	obl	_	SpaceAfter=No|Treeler:sn
4	,	,	PUNCT	Fc	_	3	punct	_	Treeler:f
5	os	o	DET	DA0MP0	_	6	det	_	Treeler:spec
6	cambios	cambio	NOUN	NCMP000	_	13	nsubj	_	Treeler:suj
7	en	en	ADP	SPS00	_	9	case	_	Treeler:sp
8	o	o	DET	DA0MS0	_	9	det	_	Treeler:spec
9	estilo	estilo	NOUN	NCMS000	_	6	nmod	_	Treeler:sn
10	de	de	ADP	SPS00	_	11	case	_	Treeler:sp
11	vida	vida	NOUN	NCFS000	_	9	nmod	_	Treeler:sn
12	son	ser	AUX	VSIP1S0	_	13	cop	_	Treeler:sentence
13	básicos	básico	ADJ	AQ0MP0	_	0	root	_	Treeler:atr
14	para	para	ADP	SPS00	_	15	case	_	Treeler:sp
15	controlar	controlar	VERB	VMN0000	_	13	ccomp	_	Treeler:S
16	a	o	DET	DA0FS0	_	17	det	_	Treeler:spec
17	evolución	evolución	NOUN	NCFS000	_	15	obj	_	Treeler:cd
18	e	e	CCONJ	CC	_	15	cc	_	ToDo=cc-without-conj|Treeler:coord
19	mellorar	mellorar	VERB	VMN0000	_	15	ccomp	_	Treeler:S
20	a	o	DET	DA0FS0	_	21	det	_	Treeler:spec
21	circulación	circulación	NOUN	NCFS000	_	19	obj	_	SpaceAfter=No|Treeler:cd
22	.	.	PUNCT	Fp	_	13	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 obl	color:blue
1	En	en	ADP	SPS00	_	2	case	_	Treeler:cc
2	canto	canto	PRON	PR0MS000	_	9	obl	_	Treeler:sn
3	a	a	ADP	SPS00	_	2	iobj	_	Treeler:ci
4	os	o	DET	DA0MP0	_	5	det	_	Treeler:spec
5	estranxeiros	estranxeiro	NOUN	NCMP000	_	3	nmod	_	SpaceAfter=No|ToDo=nmod|Treeler:sn
6	,	,	PUNCT	Fc	_	2	punct	_	Treeler:f
7	por	por	ADP	SPS00	_	8	case	_	Treeler:cc
8	países	país	NOUN	NCMP000	_	9	obl	_	Treeler:sn
9	destacan	destacar	VERB	VMIP3P0	_	0	root	_	Treeler:sentence
10	Alemania	alemania	PROPN	NP00000	_	9	nsubj	_	SpaceAfter=No|Treeler:suj
11	,	,	PUNCT	Fc	_	13	punct	_	Treeler:f
12	con	con	ADP	SPS00	_	13	case	_	Treeler:sp
13	algo	algo	PRON	PI0CN000	_	10	nmod	_	Treeler:sn
14	máis	máis	ADV	RG	_	13	advmod	_	Treeler:sadv
15	de	de	ADP	SPS00	_	17	case	_	Treeler:sp
16	o	o	DET	DA0MS0	_	17	det	_	Treeler:spec
17	5	5	NUM	Z	_	14	obl	_	Treeler:sn
18	%	%	SYM	Ft	_	17	nmod	_	SpaceAfter=No|Treeler:sn
19	,	,	PUNCT	Fc	_	13	punct	_	Treeler:f
20	e	e	CCONJ	CC	_	10	cc	_	ToDo=cc-without-conj|Treeler:coord
21	Francia	francia	PROPN	NP00000	_	10	dep	_	Treeler:grup.nom
22	e	e	CCONJ	CC	_	21	cc	_	ToDo=cc-without-conj|Treeler:coord
23	Portugal	portugal	PROPN	NP00000	_	21	dep	_	Treeler:grup.nom
24	con	con	ADP	SPS00	_	25	case	_	Treeler:sp
25	algo	algo	PRON	PI0CN000	_	21	nmod	_	Treeler:sn
26	menos	menos	ADV	RG	_	25	advmod	_	Treeler:sadv
27	de	de	ADP	SPS00	_	29	case	_	Treeler:sp
28	ese	ese	DET	DD0MS0	_	29	det	_	Treeler:spec
29	5	5	NUM	Z	_	26	obl	_	Treeler:sn
30	%	%	SYM	Ft	_	9	punct	_	SpaceAfter=No|Treeler:f
31	.	.	PUNCT	Fp	_	9	punct	_	Treeler:f

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician-TreeGal)

This relation is universal.

793 nodes (5%) are attached to their parents as `obl`.

607 instances of `obl` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.34552332912989.

The following 16 pairs of parts of speech are connected with `obl`: [gl-pos/VERB]()-[gl-pos/NOUN]() (480; 61% instances), [gl-pos/VERB]()-[gl-pos/PRON]() (96; 12% instances), [gl-pos/VERB]()-[gl-pos/PROPN]() (85; 11% instances), [gl-pos/ADJ]()-[gl-pos/NOUN]() (60; 8% instances), [gl-pos/VERB]()-[gl-pos/NUM]() (21; 3% instances), [gl-pos/ADV]()-[gl-pos/NOUN]() (18; 2% instances), [gl-pos/ADJ]()-[gl-pos/PROPN]() (11; 1% instances), [gl-pos/ADJ]()-[gl-pos/PRON]() (8; 1% instances), [gl-pos/VERB]()-[gl-pos/ADJ]() (6; 1% instances), [gl-pos/ADP]()-[gl-pos/NOUN]() (2; 0% instances), [gl-pos/ADJ]()-[gl-pos/ADJ]() (1; 0% instances), [gl-pos/CCONJ]()-[gl-pos/PROPN]() (1; 0% instances), [gl-pos/NOUN]()-[gl-pos/PRON]() (1; 0% instances), [gl-pos/PROPN]()-[gl-pos/NUM]() (1; 0% instances), [gl-pos/PROPN]()-[gl-pos/PROPN]() (1; 0% instances), [gl-pos/VERB]()-[gl-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl	color:blue
1	En	en	ADP	P	AdpType=Prep	2	case	_	_
2	titulares	titular	NOUN	Scmp	Gender=Masc|Number=Plur	3	obl	_	_
3	escribe	escribir	VERB	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
4	:	:	PUNCT	Q:	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl	color:blue
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


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 obl	color:blue
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


