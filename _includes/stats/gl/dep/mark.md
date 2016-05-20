

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


