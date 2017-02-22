

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician)

This relation is universal.

3481 nodes (3%) are attached to their parents as `cc`.

3264 instances of `cc` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.91266877334099.

The following 31 pairs of parts of speech are connected with `cc`: [gl-pos/NOUN]()-[gl-pos/CONJ]() (1322; 38% instances), [gl-pos/VERB]()-[gl-pos/CONJ]() (955; 27% instances), [gl-pos/ADP]()-[gl-pos/CONJ]() (470; 14% instances), [gl-pos/ADJ]()-[gl-pos/CONJ]() (396; 11% instances), [gl-pos/PROPN]()-[gl-pos/CONJ]() (79; 2% instances), [gl-pos/NUM]()-[gl-pos/CONJ]() (77; 2% instances), [gl-pos/VERB]()-[gl-pos/ADV]() (38; 1% instances), [gl-pos/ADP]()-[gl-pos/ADV]() (34; 1% instances), [gl-pos/DET]()-[gl-pos/CONJ]() (27; 1% instances), [gl-pos/ADV]()-[gl-pos/CONJ]() (14; 0% instances), [gl-pos/NUM]()-[gl-pos/ADP]() (9; 0% instances), [gl-pos/ADJ]()-[gl-pos/ADV]() (8; 0% instances), [gl-pos/NOUN]()-[gl-pos/ADV]() (8; 0% instances), [gl-pos/ADP]()-[gl-pos/SCONJ]() (6; 0% instances), [gl-pos/ADJ]()-[gl-pos/PRON]() (5; 0% instances), [gl-pos/VERB]()-[gl-pos/PRON]() (5; 0% instances), [gl-pos/VERB]()-[gl-pos/SCONJ]() (5; 0% instances), [gl-pos/PRON]()-[gl-pos/CONJ]() (4; 0% instances), [gl-pos/ADP]()-[gl-pos/PRON]() (3; 0% instances), [gl-pos/DET]()-[gl-pos/ADV]() (3; 0% instances), [gl-pos/VERB]()-[gl-pos/ADP]() (2; 0% instances), [gl-pos/VERB]()-[gl-pos/DET]() (2; 0% instances), [gl-pos/ADJ]()-[gl-pos/SCONJ]() (1; 0% instances), [gl-pos/ADP]()-[gl-pos/PUNCT]() (1; 0% instances), [gl-pos/ADV]()-[gl-pos/SCONJ]() (1; 0% instances), [gl-pos/DET]()-[gl-pos/ADP]() (1; 0% instances), [gl-pos/NOUN]()-[gl-pos/ADP]() (1; 0% instances), [gl-pos/NOUN]()-[gl-pos/PRON]() (1; 0% instances), [gl-pos/PART]()-[gl-pos/CONJ]() (1; 0% instances), [gl-pos/PUNCT]()-[gl-pos/NUM]() (1; 0% instances), [gl-pos/SCONJ]()-[gl-pos/CONJ]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cc	color:blue
1	A	o	DET	DA0FS0	_	2	det	_	Treeler:spec
2	unidade	unidade	NOUN	NCFS000	_	9	nsubj	_	Treeler:suj
3	e	e	CONJ	CC	_	2	cc	_	Treeler:coord
4	a	o	DET	DA0FS0	_	5	det	_	Treeler:spec
5	flexibilidade	flexibilidade	NOUN	NCFS000	_	2	nmod	_	Treeler:sn
6	de	de	ADP	SPS00	_	5	case	_	Treeler:sp
7	o	o	DET	DA0MS0	_	8	det	_	Treeler:spec
8	procedemento	procedemento	NOUN	NCMS000	_	6	nmod	_	Treeler:sn
9	permiten	permitir	VERB	VMIP3P0	_	0	root	_	Treeler:sentence
10	en	en	ADP	SPS00	_	9	case	_	Treeler:cc
11	estes	este	DET	DD0MP0	_	12	det	_	Treeler:spec
12	supostos	suposto	NOUN	NCMP000	_	10	nmod	_	Treeler:sn
13	pasar	pasar	VERB	VMN0000	_	9	dobj	_	Treeler:cd
14	de	de	ADP	SPS00	_	13	case	_	Treeler:cc
15	forma	forma	NOUN	NCFS000	_	14	nmod	_	Treeler:sn
16	rápida	rápido	ADJ	AQ0FS0	_	15	amod	_	Treeler:s.a
17	e	e	CONJ	CC	_	16	cc	_	Treeler:coord
18	simple	simple	ADJ	AQ0CS0	_	16	dep	_	Treeler:grup.a
19	á	á	NOUN	NCFS000	_	15	dep	_	Treeler:grup.nom
20	fase	fase	NOUN	NCFS000	_	19	amod	_	Treeler:s.a
21	de	de	ADP	SPS00	_	20	case	_	Treeler:sp
22	liquidación	liquidación	NOUN	NCFS000	_	21	nmod	_	Treeler:sn
23	.	.	PUNCT	Fp	_	9	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 17 cc	color:blue
1	E	e	CONJ	CC	_	3	cc	_	Treeler:et
2	agora	agora	ADV	RG	_	3	case	_	Treeler:cc
3	retomamos	retomar	VERB	VMIP1P0	_	0	root	_	Treeler:sentence
4	a	o	DET	DA0FS0	_	5	det	_	Treeler:spec
5	pregunta	pregunta	NOUN	NCFS000	_	3	dobj	_	Treeler:cd
6	de	de	ADP	SPS00	_	5	case	_	Treeler:sp
7	o	o	DET	DA0MS0	_	8	det	_	Treeler:spec
8	principio	principio	NOUN	NCMS000	_	6	nmod	_	Treeler:sn
9	:	:	PUNCT	Fd	_	10	punct	_	Treeler:f
10	son	ser	VERB	VSIP1S0	_	3	ccomp	_	Treeler:S
11	nova	novo	ADJ	AQ0FS0	_	10	cop	_	Treeler:atr
12	e	e	CONJ	CC	_	10	cc	_	Treeler:coord
13	teño	ter	VERB	VMIP1S0	_	10	ccomp	_	Treeler:S
14	unha	un	DET	DI0FS0	_	15	det	_	Treeler:spec
15	idea	idea	NOUN	NCFS000	_	13	dobj	_	Treeler:cd
16	¿	¿	PUNCT	Fia	_	10	punct	_	Treeler:f
17	e	e	CONJ	CC	_	10	cc	_	Treeler:coord
18	agora	agora	ADV	RG	_	10	ccomp	_	Treeler:S
19	que	que	SCONJ	CS	_	10	cc	_	Treeler:et
20	?	?	PUNCT	Fit	_	10	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 16 cc	color:blue
1	Os	o	DET	DA0MP0	_	2	det	_	Treeler:spec
2	datos	dato	NOUN	NCMP000	_	7	nsubj	_	Treeler:suj
3	para	para	ADP	SPS00	_	2	case	_	Treeler:sp
4	este	este	DET	DD0MS0	_	5	det	_	Treeler:spec
5	traballo	traballo	NOUN	NCMS000	_	3	nmod	_	Treeler:sn
6	foron	ser	VERB	VSIS3P0	_	7	aux	_	Treeler:v
7	tomados	tomar	VERB	VMP00PM	_	0	root	_	Treeler:sentence
8	de	de	ADP	SPS00	_	7	case	_	Treeler:cag
9	a	o	DET	DA0FS0	_	10	det	_	Treeler:spec
10	enquisa	enquisa	NOUN	NCFS000	_	8	nmod	_	Treeler:sn
11	realizada	realizar	VERB	VMP00SF	_	10	ccomp	_	Treeler:S
12	ás	á	NOUN	NCFP000	_	10	nmod	_	Treeler:sn
13	pemes	pemes	PROPN	NP00000	_	12	nmod	_	Treeler:sn
14	de	de	ADP	SPS00	_	12	case	_	Treeler:sp
15	Vigo	vigo	PROPN	NP00000	_	14	nmod	_	Treeler:sn
16	e	e	CONJ	CC	_	8	cc	_	Treeler:coord
17	de	de	ADP	SPS00	_	8	case	_	Treeler:sp
18	a	o	DET	DA0FS0	_	20	det	_	Treeler:spec
19	súa	seu	DET	DP3FS0	_	20	det	_	Treeler:spec
20	área	área	NOUN	NCFS000	_	17	nmod	_	Treeler:sn
21	metropolitana	metropolitano	ADJ	AQ0FS0	_	20	amod	_	Treeler:s.a
22	durante	durante	ADP	SPS00	_	20	case	_	Treeler:sp
23	o	o	DET	DA0MS0	_	24	det	_	Treeler:spec
24	ano	ano	NOUN	NCMS000	_	22	nmod	_	Treeler:sn
25	2000	2000	NUM	Z	_	24	nmod	_	Treeler:sn
26	.	.	PUNCT	Fp	_	7	punct	_	Treeler:f

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician-TreeGal)

This relation is universal.

462 nodes (3%) are attached to their parents as `cc`.

462 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.51948051948052.

The following 16 pairs of parts of speech are connected with `cc`: [gl-pos/NOUN]()-[gl-pos/CCONJ]() (167; 36% instances), [gl-pos/VERB]()-[gl-pos/CCONJ]() (122; 26% instances), [gl-pos/ADJ]()-[gl-pos/CCONJ]() (49; 11% instances), [gl-pos/PROPN]()-[gl-pos/CCONJ]() (37; 8% instances), [gl-pos/VERB]()-[gl-pos/SCONJ]() (20; 4% instances), [gl-pos/NOUN]()-[gl-pos/SCONJ]() (17; 4% instances), [gl-pos/NUM]()-[gl-pos/CCONJ]() (10; 2% instances), [gl-pos/ADV]()-[gl-pos/CCONJ]() (9; 2% instances), [gl-pos/NOUN]()-[gl-pos/ADV]() (8; 2% instances), [gl-pos/ADJ]()-[gl-pos/SCONJ]() (7; 2% instances), [gl-pos/PRON]()-[gl-pos/CCONJ]() (7; 2% instances), [gl-pos/DET]()-[gl-pos/CCONJ]() (3; 1% instances), [gl-pos/PRON]()-[gl-pos/SCONJ]() (2; 0% instances), [gl-pos/VERB]()-[gl-pos/ADV]() (2; 0% instances), [gl-pos/ADJ]()-[gl-pos/ADV]() (1; 0% instances), [gl-pos/PROPN]()-[gl-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc	color:blue
1	O	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	peón	peón	NOUN	Scms	Gender=Masc|Number=Sing	5	nsubj	_	_
3	ou	ou	CCONJ	Cc	_	4	cc	_	_
4	trompo	trompo	NOUN	Scms	Gender=Masc|Number=Sing	2	conj	_	_
5	baila	bailar	VERB	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	enriba	enriba	ADV	Wn	_	9	advmod	_	_
7	de	de	ADP	P	AdpType=Prep	9	case	_	_
8	un	un	DET	Dims	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	pé	pé	NOUN	Scms	Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=No
10	.	.	PUNCT	Q.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cc	color:blue
1	Non	non	ADV	Wn	Polarity=Neg	2	advmod	_	_
2	sucedeu	suceder	VERB	Vei30s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	iso	ese	PRON	Enns	Gender=Neut|Number=Sing|PronType=Dem	2	nsubj	_	_
4	e	e	CCONJ	Cc	_	6	cc	_	_
5	nós	nós	PRON	Rtn1ap	Case=Nom|Gender=Com|Number=Plur|Person=1|PronType=Prs	6	nsubj	_	_
6	entramos	entrar	VERB	Vei10p	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	2	conj	_	_
7	en	en	ADP	P	AdpType=Prep	9	case	_	_
8	o	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	goberno	goberno	NOUN	Scms	Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
10	.	.	PUNCT	Q.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cc	color:blue
1	En	en	ADP	P	AdpType=Prep	4	advmod	_	_
2	xeral	xeral	ADJ	A0ms	Number=Sing	1	fixed	_	_
3	son	ser	AUX	Vpi30p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	palabras	palabra	NOUN	Scfp	Gender=Fem|Number=Plur	0	root	_	_
5	de	de	ADP	P	AdpType=Prep	6	case	_	_
6	uso	uso	NOUN	Scms	Gender=Masc|Number=Sing	4	nmod	_	_
7	técnico	técnico	ADJ	A0ms	Gender=Masc|Number=Sing	6	amod	_	_
8	e	e	CCONJ	Cc	_	9	cc	_	_
9	científico	científico	ADJ	A0ms	Gender=Masc|Number=Sing	7	conj	_	SpaceAfter=No
10	.	.	PUNCT	Q.	_	4	punct	_	_

~~~


