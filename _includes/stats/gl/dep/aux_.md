

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician)

This relation is universal.

1363 nodes (1%) are attached to their parents as `aux`.

1338 instances of `aux` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31988261188555.

The following 9 pairs of parts of speech are connected with `aux`: [gl-pos/VERB]()-[gl-pos/VERB]() (1330; 98% instances), [gl-pos/NOUN]()-[gl-pos/VERB]() (10; 1% instances), [gl-pos/VERB]()-[gl-pos/PRON]() (10; 1% instances), [gl-pos/VERB]()-[gl-pos/DET]() (5; 0% instances), [gl-pos/ADJ]()-[gl-pos/VERB]() (2; 0% instances), [gl-pos/ADP]()-[gl-pos/VERB]() (2; 0% instances), [gl-pos/PRON]()-[gl-pos/VERB]() (2; 0% instances), [gl-pos/ADP]()-[gl-pos/NUM]() (1; 0% instances), [gl-pos/ADV]()-[gl-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 aux	color:blue
1	Non	non	PART	RN	_	2	advmod	_	Treeler:mod
2	somos	ser	VERB	VSIP1P0	_	0	root	_	Treeler:sentence
3	quen	quen	PRON	PR0CC000	_	8	nsubj	_	Treeler:suj
4	de	de	ADP	SPS00	_	8	case	_	Treeler:creg
5	pensar	pensar	VERB	VMN0000	_	4	ccomp	_	Treeler:S
6	como	como	PRON	PR0CN000	_	8	nsubj	_	Treeler:suj
7	podemos	poder	VERB	VMIP1P0	_	8	aux	_	Treeler:v
8	evitar	evitar	VERB	VMN0000	_	2	ccomp	_	Treeler:S
9	seres	ser	NOUN	NCMP000	_	8	dobj	_	Treeler:cd
10	como	como	PRON	PR0CN000	_	8	aux	_	Treeler:v
11	Bush	bush	PROPN	NP00000	_	8	nsubj	_	Treeler:suj
12	,	,	PUNCT	Fc	_	13	punct	_	Treeler:f
13	asasinos	asasino	NOUN	NCMP000	_	11	nmod	_	Treeler:sn
14	como	como	PRON	PR0CN000	_	16	dep	_	Treeler:relatiu
15	os	o	DET	DA0MP0	_	16	det	_	Treeler:spec
16	de	de	ADP	SPS00	_	13	case	_	Treeler:sp
17	ETA	eta	NOUN	NCMS000	_	16	nmod	_	Treeler:sn
18	,	,	PUNCT	Fc	_	13	punct	_	Treeler:f
19	despropósitos	despropósito	NOUN	NCMP000	_	11	nmod	_	Treeler:sn
20	como	como	PRON	PR0CN000	_	21	dep	_	Treeler:relatiu
21	Air	air	PROPN	NP00000	_	19	ccomp	_	Treeler:S
22	Madrid	madrid	PROPN	NP00000	_	21	nmod	_	Treeler:sn
23	e	e	CONJ	CC	_	11	cc	_	Treeler:coord
24	un	un	DET	DI0MS0	_	26	det	_	Treeler:spec
25	longo	longo	ADJ	AQ0MS0	_	26	amod	_	Treeler:s.a
26	etcétera	etcétera	NOUN	NCMC000	_	11	nmod	_	Treeler:sn
27	.	.	PUNCT	Fp	_	2	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 21 aux	color:blue
1	O	o	DET	DA0MS0	_	2	det	_	Treeler:spec
2	territorio	territorio	NOUN	NCMS000	_	3	nsubj	_	Treeler:suj
3	será	ser	VERB	VSIF3S0	_	0	root	_	Treeler:sentence
4	a	o	DET	DA0FS0	_	5	det	_	Treeler:spec
5	área	área	NOUN	NCFS000	_	3	cop	_	Treeler:atr
6	sobre	sobre	ADP	SPS00	_	5	case	_	Treeler:sp
7	a	o	DET	DA0FS0	_	8	det	_	Treeler:spec
8	que	que	PRON	PR0CN000	_	6	nmod	_	Treeler:sn
9	o	o	DET	DA0MS0	_	10	det	_	Treeler:spec
10	estado	estado	NOUN	NCMS000	_	11	nsubj	_	Treeler:suj
11	exercerá	exercer	VERB	VMIF3S0	_	5	ccomp	_	Treeler:S
12	o	o	DET	DA0MS0	_	14	det	_	Treeler:spec
13	seu	seu	DET	DP3MS0	_	12	det	_	Treeler:d
14	poder	poder	VERB	VMN0000	_	11	dobj	_	Treeler:cd
15	de	de	ADP	SPS00	_	14	case	_	Treeler:sp
16	mando	mando	NOUN	NCMS000	_	15	nmod	_	Treeler:sn
17	,	,	PUNCT	Fc	_	15	punct	_	Treeler:f
18	_	_	SYM	Fz	_	22	punct	_	Treeler:f
19	o	o	DET	DA0MS0	_	22	det	_	Treeler:spec
20	seu	seu	DET	DP3MS0	_	22	det	_	Treeler:spec
21	poder	poder	VERB	VMN0000	_	22	aux	_	Treeler:v
22	originário	originário	NOUN	NCMS000	_	27	dobj	_	Treeler:cd
23	de	de	ADP	SPS00	_	22	case	_	Treeler:sp
24	mando	mando	NOUN	NCMS000	_	23	nmod	_	Treeler:sn
25	_	_	SYM	Fz	_	22	punct	_	Treeler:f
26	,	,	PUNCT	Fc	_	27	punct	_	Treeler:f
27	segundo	segundo	ADP	SPS00	_	11	case	_	Treeler:cc
28	indica	indicar	VERB	VMIP3S0	_	27	nmod	_	Treeler:sn
29	Jorge	jorge	PROPN	NP00000	_	28	nsubj	_	Treeler:suj
30	Jellineck	jellineck	PROPN	NP00000	_	28	nsubj	_	Treeler:suj
31	.	.	PUNCT	Fp	_	3	punct	_	Treeler:f

~~~


