

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician)

This relation is universal.

1079 nodes (1%) are attached to their parents as `aux`.

1055 instances of `aux` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.52548656163114.

The following 16 pairs of parts of speech are connected with `aux`: [gl-pos/VERB]()-[gl-pos/VERB]() (960; 89% instances), [gl-pos/NOUN]()-[gl-pos/VERB]() (46; 4% instances), [gl-pos/ADJ]()-[gl-pos/VERB]() (42; 4% instances), [gl-pos/VERB]()-[gl-pos/PRON]() (8; 1% instances), [gl-pos/ADP]()-[gl-pos/VERB]() (5; 0% instances), [gl-pos/PRON]()-[gl-pos/VERB]() (5; 0% instances), [gl-pos/SCONJ]()-[gl-pos/VERB]() (2; 0% instances), [gl-pos/VERB]()-[gl-pos/ADP]() (2; 0% instances), [gl-pos/VERB]()-[gl-pos/DET]() (2; 0% instances), [gl-pos/ADP]()-[gl-pos/NUM]() (1; 0% instances), [gl-pos/ADV]()-[gl-pos/VERB]() (1; 0% instances), [gl-pos/DET]()-[gl-pos/VERB]() (1; 0% instances), [gl-pos/NOUN]()-[gl-pos/DET]() (1; 0% instances), [gl-pos/PRON]()-[gl-pos/ADJ]() (1; 0% instances), [gl-pos/PRON]()-[gl-pos/DET]() (1; 0% instances), [gl-pos/PROPN]()-[gl-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 aux	color:blue
1	Galiza	galiza	PROPN	NP00000	_	6	nsubj	_	Treeler:suj
2	deixou	deixar	VERB	VMIS3S0	_	6	aux	_	Treeler:v
3	de	de	ADP	SPS00	_	6	case	_	Treeler:s
4	ser	ser	AUX	VSN0000	_	6	cop	_	Treeler:sentence
5	un	un	DET	DI0MS0	_	6	det	_	Treeler:spec
6	país	país	NOUN	NCMS000	_	0	root	_	Treeler:atr
7	exportador	exportador	ADJ	AQ0MS0	_	6	amod	_	Treeler:s.a
8	de	de	ADP	SPS00	_	9	case	_	Treeler:sp
9	man	man	NOUN	NCFS000	_	6	nmod	_	ToDo=nmod|Treeler:sn
10	de	de	ADP	SPS00	_	11	case	_	Treeler:sp
11	obra	obra	NOUN	NCFS000	_	9	nmod	_	Treeler:sn
12	barata	barato	ADJ	AQ0FS0	_	9	amod	_	Treeler:s.a
13	para	para	ADP	SPS00	_	14	case	_	Treeler:cc
14	se	se	PRON	PP3CN000	_	6	nmod	_	ToDo=nmod|Treeler:sn
15	converter	converter	VERB	VMN0000	_	14	ccomp	_	Treeler:S
16	en	en	ADP	SPS00	_	17	case	_	Treeler:cc
17	receptor	receptor	NOUN	NCMS000	_	15	obl	_	Treeler:sn
18	de	de	ADP	SPS00	_	19	case	_	Treeler:sp
19	continxentes	continxente	NOUN	NCMP000	_	17	nmod	_	Treeler:sn
20	migratorios	migratorio	ADJ	AQ0MP0	_	19	amod	_	SpaceAfter=No|Treeler:s.a
21	.	.	PUNCT	Fp	_	6	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 aux	color:blue
1	Todos	todo	DET	DI0MP0	_	2	det	_	Treeler:d
2	estes	este	DET	DD0MP0	_	3	det	_	Treeler:spec
3	países	país	NOUN	NCMP000	_	8	nsubj	_	Treeler:suj
4	deixaron	deixar	VERB	VMIS3P0	_	8	aux	_	Treeler:v
5	de	de	ADP	SPS00	_	4	case	_	Treeler:creg
6	ser	ser	AUX	VSN0000	_	8	cop	_	Treeler:sentence
7	os	o	DET	DA0MP0	_	8	det	_	Treeler:spec
8	principais	principal	ADJ	AQ0CP0	_	0	root	_	Treeler:atr
9	en	en	ADP	SPS00	_	11	case	_	Treeler:sp
10	a	o	DET	DA0FS0	_	11	det	_	Treeler:spec
11	actualidade	actualidade	NOUN	NCFS000	_	8	obl	_	Treeler:sn
12	por	por	ADP	SPS00	_	14	case	_	Treeler:sp
13	a	o	DET	DA0FS0	_	14	det	_	Treeler:spec
14	competencia	competencia	NOUN	NCFS000	_	11	nmod	_	Treeler:sn
15	vía	vía	NOUN	NCFS000	_	14	amod	_	Treeler:s.a
16	prezos	prezo	NOUN	NCMP000	_	14	nmod	_	Treeler:sn
17	de	de	ADP	SPS00	_	18	case	_	Treeler:sp
18	países	país	NOUN	NCMP000	_	16	nmod	_	Treeler:sn
19	coma	coma	SCONJ	CS	_	20	mark	_	Treeler:conj
20	Marrocos	marrocos	PROPN	NP00000	_	14	nmod	_	SpaceAfter=No|Treeler:sn
21	.	.	PUNCT	Fp	_	8	punct	_	Treeler:f

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician-TreeGal)

This relation is universal.
There are 1 language-specific subtypes of `aux`: [aux:pass]().

118 nodes (1%) are attached to their parents as `aux`.

117 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.54237288135593.

The following 5 pairs of parts of speech are connected with `aux`: [gl-pos/VERB]()-[gl-pos/AUX]() (104; 88% instances), [gl-pos/NOUN]()-[gl-pos/AUX]() (9; 8% instances), [gl-pos/PRON]()-[gl-pos/AUX]() (3; 3% instances), [gl-pos/ADJ]()-[gl-pos/AUX]() (1; 1% instances), [gl-pos/ADV]()-[gl-pos/AUX]() (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	Quen	quen	PRON	Gnas	Gender=Com|Number=Sing|PronType=Int	3	nsubj	_	_
2	vai	ir	AUX	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	marcar	marcar	VERB	V0f000	VerbForm=Inf	0	root	_	_
4	agora	agora	ADV	Wn	_	3	advmod	_	_
5	a	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	política	política	NOUN	Scfs	Gender=Fem|Number=Sing	3	obj	_	_
7	en	en	ADP	P	AdpType=Prep	9	case	_	_
8	o	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	concello	concello	NOUN	Scms	Gender=Masc|Number=Sing	3	obl	_	SpaceAfter=No
10	?	?	PUNCT	Q?	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 aux	color:blue
1	De	de	ADP	P	AdpType=Prep	3	mark	_	_
2	ser	ser	AUX	V0f000	VerbForm=Inf	3	cop	_	_
3	así	así	ADV	Wn	_	8	advcl	_	SpaceAfter=No
4	,	,	PUNCT	Q,	_	3	punct	_	_
5	habería	haber	AUX	Vci30s	Mood=Cnd,Ind|Number=Sing|Person=3|VerbForm=Fin	8	aux	_	_
6	que	que	SCONJ	Cs	_	8	mark	_	_
7	ir	ir	AUX	V0f000	VerbForm=Inf	8	aux	_	_
8	pensando	pensar	VERB	V0x000	VerbForm=Ger	0	root	_	_
9	en	en	ADP	P	AdpType=Prep	14	mark	_	_
10	que	que	SCONJ	Cs	_	14	mark	_	_
11	Ferrol	Ferrol	PROPN	Sp00	_	14	nsubj	_	_
12	podería	poder	AUX	Vci30s	Mood=Cnd,Ind|Number=Sing|Person=3|VerbForm=Fin	14	aux	_	_
13	ser	ser	AUX	V0f000	VerbForm=Inf	14	cop	_	_
14	escenario	escenario	NOUN	Scms	Gender=Masc|Number=Sing	8	ccomp	_	_
15	de	de	ADP	P	AdpType=Prep	17	case	_	_
16	as	o	DET	Ddfp	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	17	det	_	_
17	consecuencias	consecuencia	NOUN	Scfp	Gender=Fem|Number=Plur	14	nmod	_	_
18	de	de	ADP	P	AdpType=Prep	20	case	_	_
19	o	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	20	det	_	_
20	paro	paro	NOUN	Scms	Gender=Masc|Number=Sing	17	nmod	_	_
21	en	en	ADP	P	AdpType=Prep	23	case	_	_
22	a	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	23	det	_	_
23	seguridade	seguridade	NOUN	Scfs	Gender=Fem|Number=Sing	17	nmod	_	SpaceAfter=No
24	.	.	PUNCT	Q.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 aux	color:blue
1	Sigo	seguir	AUX	Vpi10s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	aux	_	_
2	a	a	ADP	P	AdpType=Prep	4	mark	_	_
3	ser	ser	AUX	V0f000	VerbForm=Inf	4	cop	_	_
4	lo	o	PRON	Raa3ms	Case=Acc|Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	0	root	_	_
5	.	.	PUNCT	Q.	_	4	punct	_	_

~~~


