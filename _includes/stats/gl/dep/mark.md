

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician)

This relation is universal.

1514 nodes (1%) are attached to their parents as `mark`.

1512 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.42404227212682.

The following 13 pairs of parts of speech are connected with `mark`: [gl-pos/VERB]()-[gl-pos/SCONJ]() (1349; 89% instances), [gl-pos/ADP]()-[gl-pos/SCONJ]() (68; 4% instances), [gl-pos/NOUN]()-[gl-pos/SCONJ]() (52; 3% instances), [gl-pos/ADJ]()-[gl-pos/SCONJ]() (14; 1% instances), [gl-pos/ADV]()-[gl-pos/SCONJ]() (10; 1% instances), [gl-pos/PROPN]()-[gl-pos/SCONJ]() (7; 0% instances), [gl-pos/PRON]()-[gl-pos/SCONJ]() (4; 0% instances), [gl-pos/VERB]()-[gl-pos/DET]() (3; 0% instances), [gl-pos/NUM]()-[gl-pos/SCONJ]() (2; 0% instances), [gl-pos/VERB]()-[gl-pos/CONJ]() (2; 0% instances), [gl-pos/DET]()-[gl-pos/CONJ]() (1; 0% instances), [gl-pos/PART]()-[gl-pos/SCONJ]() (1; 0% instances), [gl-pos/PROPN]()-[gl-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 mark	color:blue
1	Se	se	SCONJ	CS	_	4	mark	_	Treeler:conj
2	a	o	DET	DA0FS0	_	3	det	_	Treeler:spec
3	vítima	vítima	NOUN	NCFS000	_	4	nsubj	_	Treeler:suj
4	presenta	presentar	VERB	VMIP3S0	_	15	dep	_	Treeler:ao
5	signos	signo	NOUN	NCMP000	_	4	dobj	_	Treeler:cd
6	de	de	ADP	SPS00	_	5	case	_	Treeler:sp
7	obstrución	obstrución	NOUN	NCFS000	_	6	nmod	_	Treeler:sn
8	lixeira	lixeiro	ADJ	AQ0FS0	_	7	amod	_	Treeler:s.a
9	de	de	ADP	SPS00	_	5	case	_	Treeler:sp
10	a	o	DET	DA0FS0	_	11	det	_	Treeler:spec
11	vía	vía	NOUN	NCFS000	_	9	nmod	_	Treeler:sn
12	aérea	aéreo	ADJ	AQ0FS0	_	11	amod	_	Treeler:s.a
13	,	,	PUNCT	Fc	_	4	punct	_	Treeler:f
14	debemos	deber	VERB	VMIP1P0	_	15	aux	_	Treeler:v
15	animar	animar	VERB	VMN0000	_	0	root	_	Treeler:sentence
16	o	o	PRON	PP3MSA00	_	15	dobj	_	Treeler:cd
17	a	a	ADP	SPS00	_	15	case	_	Treeler:creg
18	seguir	seguir	VERB	VMN0000	_	19	aux	_	Treeler:v
19	tusindo	tusir	VERB	VMG0000	_	17	ccomp	_	Treeler:S
20	e	e	CONJ	CC	_	15	cc	_	Treeler:coord
21	non	non	PART	RN	_	22	advmod	_	Treeler:mod
22	facer	facer	VERB	VMN0000	_	15	ccomp	_	Treeler:S
23	nada	nada	PRON	PI0CN000	_	22	dobj	_	Treeler:cd
24	máis	máis	ADV	RG	_	22	case	_	Treeler:cc
25	.	.	PUNCT	Fp	_	15	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 mark	color:blue
1	NIÑO	niño	NOUN	NCMS000	_	0	root	_	Treeler:sentence
2	ROTO	roto	ADJ	AQ0MS0	_	1	amod	_	Treeler:s.a
3	:	:	PUNCT	Fd	_	4	punct	_	Treeler:f
4	niño	niñar	VERB	VMIP1S0	_	1	ccomp	_	Treeler:S
5	deteriorado	deteriorar	VERB	VMP00SM	_	4	cop	_	Treeler:cpred
6	que	que	SCONJ	CS	_	7	mark	_	Treeler:conj
7	por	por	ADP	SPS00	_	5	case	_	Treeler:cag
8	o	o	DET	DA0MS0	_	10	det	_	Treeler:spec
9	seu	seu	DET	DP3MS0	_	10	det	_	Treeler:spec
10	estado	estado	NOUN	NCMS000	_	7	nmod	_	Treeler:sn
11	de	de	ADP	SPS00	_	10	case	_	Treeler:sp
12	conservación	conservación	NOUN	NCFS000	_	11	nmod	_	Treeler:sn
13	,	,	PUNCT	Fc	_	14	punct	_	Treeler:f
14	con	con	ADP	SPS00	_	10	case	_	Treeler:sp
15	seguridade	seguridade	NOUN	NCFS000	_	14	nmod	_	Treeler:sn
16	non	non	PART	RN	_	17	advmod	_	Treeler:mod
17	foi	ser	VERB	VSIS3S0	_	4	dep	_	Treeler:ao
18	empregado	empregado	NOUN	NCMS000	_	17	cop	_	Treeler:atr
19	en	en	ADP	SPS00	_	17	case	_	Treeler:cc
20	a	o	DET	DA0FS0	_	22	det	_	Treeler:spec
21	actual	actual	ADJ	AQ0CS0	_	22	amod	_	Treeler:s.a
22	tempada	tempada	NOUN	NCFS000	_	19	nmod	_	Treeler:sn
23	de	de	ADP	SPS00	_	22	case	_	Treeler:sp
24	cría	cría	NOUN	NCFS000	_	23	nmod	_	Treeler:sn
25	.	.	PUNCT	Fp	_	1	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 mark	color:blue
1	Para	para	ADP	SPS00	_	0	root	_	Treeler:sentence
2	que	que	SCONJ	CS	_	4	mark	_	Treeler:conj
3	tanto	tanto	DET	DI0MS0	_	4	det	_	Treeler:spec
4	esforzo	esforzo	NOUN	NCMS000	_	1	ccomp	_	Treeler:S
5	?	?	PUNCT	Fit	_	1	punct	_	Treeler:f

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician-TreeGal)

This relation is universal.

858 nodes (4%) are attached to their parents as `mark`.

857 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.99184149184149.

The following 22 pairs of parts of speech are connected with `mark`: [gl-pos/VERB]()-[gl-pos/SCONJ]() (369; 43% instances), [gl-pos/VERB]()-[gl-pos/ADP]() (339; 40% instances), [gl-pos/NOUN]()-[gl-pos/SCONJ]() (36; 4% instances), [gl-pos/ADJ]()-[gl-pos/SCONJ]() (24; 3% instances), [gl-pos/VERB]()-[gl-pos/CONJ]() (20; 2% instances), [gl-pos/VERB]()-[gl-pos/ADV]() (19; 2% instances), [gl-pos/ADV]()-[gl-pos/SCONJ]() (9; 1% instances), [gl-pos/NOUN]()-[gl-pos/ADP]() (7; 1% instances), [gl-pos/PRON]()-[gl-pos/SCONJ]() (7; 1% instances), [gl-pos/ADV]()-[gl-pos/CONJ]() (4; 0% instances), [gl-pos/NOUN]()-[gl-pos/ADV]() (4; 0% instances), [gl-pos/PRON]()-[gl-pos/ADP]() (4; 0% instances), [gl-pos/PROPN]()-[gl-pos/SCONJ]() (3; 0% instances), [gl-pos/ADJ]()-[gl-pos/ADP]() (2; 0% instances), [gl-pos/ADV]()-[gl-pos/ADP]() (2; 0% instances), [gl-pos/NOUN]()-[gl-pos/CONJ]() (2; 0% instances), [gl-pos/VERB]()-[gl-pos/VERB]() (2; 0% instances), [gl-pos/ADJ]()-[gl-pos/ADV]() (1; 0% instances), [gl-pos/ADJ]()-[gl-pos/CONJ]() (1; 0% instances), [gl-pos/VERB]()-[gl-pos/DET]() (1; 0% instances), [gl-pos/VERB]()-[gl-pos/NOUN]() (1; 0% instances), [gl-pos/VERB]()-[gl-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 mark	color:blue
1	esa	ese	DET	Edfs	Gender=Fem|Number=Sing|PronType=Dem	2	det	_	_
2	compañía	compañía	NOUN	Scfs	Gender=Fem|Number=Sing	3	nsubj	_	_
3	di	dicir	VERB	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	que	que	SCONJ	Cs	_	9	mark	_	_
5	a	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
6	única	único	ADJ	A0fs	Gender=Fem|Number=Sing	7	amod	_	_
7	saída	saída	NOUN	Scfs	Gender=Fem|Number=Sing	9	nsubj	_	_
8	é	ser	VERB	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
9	continuar	continuar	VERB	V0f000	VerbForm=Inf	3	ccomp	_	_
10	onde	onde	ADV	Wr	PronType=Rel	9	advcl	_	_
11	está	estar	VERB	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
12	.	.	PUNCT	Q.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 mark	color:blue
1	por	por	ADP	P	AdpType=Prep	2	mark	_	_
2	emocionar	emocionar	VERB	V0f000	VerbForm=Inf	0	root	_	_
3	nos	nos	PRON	Raa1ap	Case=Acc|Gender=Com|Number=Plur|Person=1|PronType=Clit	2	dobj	_	_
4	e	e	CONJ	Cc	_	2	cc	_	_
5	facer	facer	VERB	V0f000	VerbForm=Inf	2	conj	_	_
6	nos	nos	PRON	Raa1ap	Case=Acc|Gender=Com|Number=Plur|Person=1|PronType=Clit	5	dobj	_	_
7	sentir	sentir	VERB	V0f000	VerbForm=Inf	5	xcomp	_	_
8	.	.	PUNCT	Q.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 mark	color:blue
1	coida	coidar	VERB	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	que	que	SCONJ	Cs	_	5	mark	_	_
3	é	ser	VERB	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	unha	un	DET	Difs	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	arte	arte	NOUN	Scfs	Gender=Fem|Number=Sing	1	ccomp	_	_
6	apreciada	apreciado	ADJ	A0fs	Gender=Fem|Number=Sing	5	amod	_	_
7	en	en	ADP	P	AdpType=Prep	8	case	_	_
8	Galiza	Galiza	PROPN	Sp00	_	6	nmod	_	_
9	?	?	PUNCT	Q?	_	1	punct	_	_

~~~


