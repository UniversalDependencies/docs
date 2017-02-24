

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician)

This relation is universal.

10414 nodes (10%) are attached to their parents as `punct`.

6990 instances of `punct` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.3908200499328.

The following 25 pairs of parts of speech are connected with `punct`: [gl-pos/VERB]()-[gl-pos/PUNCT]() (4274; 41% instances), [gl-pos/NOUN]()-[gl-pos/PUNCT]() (3396; 33% instances), [gl-pos/ADJ]()-[gl-pos/PUNCT]() (658; 6% instances), [gl-pos/NUM]()-[gl-pos/PUNCT]() (562; 5% instances), [gl-pos/ADV]()-[gl-pos/PUNCT]() (500; 5% instances), [gl-pos/PROPN]()-[gl-pos/PUNCT]() (428; 4% instances), [gl-pos/ADP]()-[gl-pos/PUNCT]() (199; 2% instances), [gl-pos/PRON]()-[gl-pos/PUNCT]() (117; 1% instances), [gl-pos/NOUN]()-[gl-pos/SYM]() (103; 1% instances), [gl-pos/SCONJ]()-[gl-pos/PUNCT]() (70; 1% instances), [gl-pos/DET]()-[gl-pos/PUNCT]() (36; 0% instances), [gl-pos/VERB]()-[gl-pos/SYM]() (23; 0% instances), [gl-pos/PROPN]()-[gl-pos/SYM]() (14; 0% instances), [gl-pos/ADJ]()-[gl-pos/SYM]() (8; 0% instances), [gl-pos/PART]()-[gl-pos/PUNCT]() (7; 0% instances), [gl-pos/NUM]()-[gl-pos/SYM]() (6; 0% instances), [gl-pos/CCONJ]()-[gl-pos/PUNCT]() (2; 0% instances), [gl-pos/INTJ]()-[gl-pos/PUNCT]() (2; 0% instances), [gl-pos/PUNCT]()-[gl-pos/PUNCT]() (2; 0% instances), [gl-pos/SCONJ]()-[gl-pos/DET]() (2; 0% instances), [gl-pos/ADP]()-[gl-pos/SYM]() (1; 0% instances), [gl-pos/NOUN]()-[gl-pos/DET]() (1; 0% instances), [gl-pos/NUM]()-[gl-pos/VERB]() (1; 0% instances), [gl-pos/PRON]()-[gl-pos/SYM]() (1; 0% instances), [gl-pos/PRON]()-[gl-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 15 punct	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 punct	color:blue
1	Táboa	táboa	NOUN	NCFS000	_	0	root	_	Treeler:sentence
2	44	44	NUM	Z	_	1	amod	_	SpaceAfter=No|Treeler:s.a
3	.	.	PUNCT	Fp	_	1	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 20 punct	color:blue
1	E	e	CCONJ	CC	_	3	cc	_	Treeler:et
2	agora	agora	ADV	RG	_	3	case	_	Treeler:cc
3	retomamos	retomar	VERB	VMIP1P0	_	0	root	_	Treeler:sentence
4	a	o	DET	DA0FS0	_	5	det	_	Treeler:spec
5	pregunta	pregunta	NOUN	NCFS000	_	3	obj	_	Treeler:cd
6	de	de	ADP	SPS00	_	8	case	_	Treeler:sp
7	o	o	DET	DA0MS0	_	8	det	_	Treeler:spec
8	principio	principio	NOUN	NCMS000	_	5	nmod	_	SpaceAfter=No|Treeler:sn
9	:	:	PUNCT	Fd	_	11	punct	_	Treeler:f
10	son	ser	AUX	VSIP1S0	_	11	cop	_	Treeler:S
11	nova	novo	ADJ	AQ0FS0	_	3	ccomp	_	Treeler:atr
12	e	e	CCONJ	CC	_	11	cc	_	ToDo=cc-without-conj|Treeler:coord
13	teño	ter	VERB	VMIP1S0	_	11	ccomp	_	Treeler:S
14	unha	un	DET	DI0FS0	_	15	det	_	Treeler:spec
15	idea	idea	NOUN	NCFS000	_	13	obj	_	Treeler:cd
16	¿	¿	PUNCT	Fia	_	11	punct	_	SpaceAfter=No|Treeler:f
17	e	e	CCONJ	CC	_	11	cc	_	ToDo=cc-without-conj|Treeler:coord
18	agora	agora	ADV	RG	_	11	ccomp	_	Treeler:S
19	que	que	SCONJ	CS	_	11	cc	_	SpaceAfter=No|ToDo=cc-without-conj|Treeler:et
20	?	?	PUNCT	Fit	_	11	punct	_	Treeler:f

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician-TreeGal)

This relation is universal.

1607 nodes (10%) are attached to their parents as `punct`.

1172 instances of `punct` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.91972619788426.

The following 14 pairs of parts of speech are connected with `punct`: [gl-pos/VERB]()-[gl-pos/PUNCT]() (814; 51% instances), [gl-pos/NOUN]()-[gl-pos/PUNCT]() (412; 26% instances), [gl-pos/PROPN]()-[gl-pos/PUNCT]() (140; 9% instances), [gl-pos/ADJ]()-[gl-pos/PUNCT]() (102; 6% instances), [gl-pos/PRON]()-[gl-pos/PUNCT]() (45; 3% instances), [gl-pos/NUM]()-[gl-pos/PUNCT]() (30; 2% instances), [gl-pos/ADV]()-[gl-pos/PUNCT]() (28; 2% instances), [gl-pos/ADP]()-[gl-pos/PUNCT]() (14; 1% instances), [gl-pos/DET]()-[gl-pos/PUNCT]() (8; 0% instances), [gl-pos/AUX]()-[gl-pos/PUNCT]() (5; 0% instances), [gl-pos/PUNCT]()-[gl-pos/PUNCT]() (4; 0% instances), [gl-pos/INTJ]()-[gl-pos/PUNCT]() (3; 0% instances), [gl-pos/SCONJ]()-[gl-pos/PUNCT]() (1; 0% instances), [gl-pos/X]()-[gl-pos/PUNCT]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 punct	color:blue
1	En	en	ADP	P	AdpType=Prep	2	case	_	_
2	titulares	titular	NOUN	Scmp	Gender=Masc|Number=Plur	3	obl	_	_
3	escribe	escribir	VERB	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
4	:	:	PUNCT	Q:	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 punct	color:blue
1	"	"	PUNCT	Q"	_	10	punct	_	SpaceAfter=No
2	A	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	cultura	cultura	NOUN	Scfs	Gender=Fem|Number=Sing	10	nsubj	_	_
4	subsidiada	subsidiado	ADJ	A0fs	Gender=Fem|Number=Sing	3	amod	_	_
5	_	_	PUNCT	Q_	_	6	punct	_	SpaceAfter=No
6	di	dicir	VERB	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	parataxis	_	SpaceAfter=No
7	_	_	PUNCT	Q_	_	6	punct	_	_
8	non	non	ADV	Wn	Polarity=Neg	10	advmod	_	_
9	é	ser	AUX	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
10	cultura	cultura	NOUN	Scfs	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
11	"	"	PUNCT	Q"	_	10	punct	_	SpaceAfter=No
12	.	.	PUNCT	Q.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 punct	color:blue
1	A	a	ADP	P	AdpType=Prep	3	case	_	_
2	a	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	dereita	dereita	NOUN	Scfs	Gender=Fem|Number=Sing	5	nmod	_	SpaceAfter=No
4	,	,	PUNCT	Q,	_	5	punct	_	_
5	Lech	lech	PROPN	Spm0	Gender=Masc	0	root	_	_
6	Walesa	walesa	PROPN	Spm0	Gender=Masc	5	flat:name	_	_
7	en	en	ADP	P	AdpType=Prep	9	case	_	_
8	unha	un	DET	Difs	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	fotografía	fotografía	NOUN	Scfs	Gender=Fem|Number=Sing	5	nmod	_	_
10	de	de	ADP	P	AdpType=Prep	11	case	_	_
11	1999	1999	NUM	Ncnms	Gender=Masc|Number=Sing|NumType=Card	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	Q.	_	5	punct	_	_

~~~


