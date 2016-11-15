

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician)

This relation is universal.

4430 nodes (3%) are attached to their parents as `cc`.

4158 instances of `cc` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.92325056433409.

The following 34 pairs of parts of speech are connected with `cc`: [gl-pos/NOUN]()-[gl-pos/CONJ]() (1716; 39% instances), [gl-pos/VERB]()-[gl-pos/CONJ]() (1189; 27% instances), [gl-pos/ADP]()-[gl-pos/CONJ]() (588; 13% instances), [gl-pos/ADJ]()-[gl-pos/CONJ]() (500; 11% instances), [gl-pos/NUM]()-[gl-pos/CONJ]() (106; 2% instances), [gl-pos/PROPN]()-[gl-pos/CONJ]() (103; 2% instances), [gl-pos/VERB]()-[gl-pos/ADV]() (46; 1% instances), [gl-pos/ADP]()-[gl-pos/ADV]() (42; 1% instances), [gl-pos/DET]()-[gl-pos/CONJ]() (31; 1% instances), [gl-pos/ADV]()-[gl-pos/CONJ]() (20; 0% instances), [gl-pos/NUM]()-[gl-pos/ADP]() (16; 0% instances), [gl-pos/ADJ]()-[gl-pos/ADV]() (9; 0% instances), [gl-pos/NOUN]()-[gl-pos/ADV]() (9; 0% instances), [gl-pos/ADP]()-[gl-pos/SCONJ]() (7; 0% instances), [gl-pos/DET]()-[gl-pos/ADV]() (6; 0% instances), [gl-pos/VERB]()-[gl-pos/SCONJ]() (6; 0% instances), [gl-pos/ADJ]()-[gl-pos/PRON]() (5; 0% instances), [gl-pos/VERB]()-[gl-pos/PRON]() (5; 0% instances), [gl-pos/ADP]()-[gl-pos/PRON]() (4; 0% instances), [gl-pos/PRON]()-[gl-pos/CONJ]() (4; 0% instances), [gl-pos/PART]()-[gl-pos/CONJ]() (3; 0% instances), [gl-pos/VERB]()-[gl-pos/ADP]() (2; 0% instances), [gl-pos/VERB]()-[gl-pos/DET]() (2; 0% instances), [gl-pos/ADJ]()-[gl-pos/ADP]() (1; 0% instances), [gl-pos/ADJ]()-[gl-pos/SCONJ]() (1; 0% instances), [gl-pos/ADP]()-[gl-pos/PUNCT]() (1; 0% instances), [gl-pos/ADV]()-[gl-pos/SCONJ]() (1; 0% instances), [gl-pos/DET]()-[gl-pos/ADP]() (1; 0% instances), [gl-pos/NOUN]()-[gl-pos/ADP]() (1; 0% instances), [gl-pos/NOUN]()-[gl-pos/PRON]() (1; 0% instances), [gl-pos/NUM]()-[gl-pos/SYM]() (1; 0% instances), [gl-pos/PROPN]()-[gl-pos/ADV]() (1; 0% instances), [gl-pos/PUNCT]()-[gl-pos/NUM]() (1; 0% instances), [gl-pos/SCONJ]()-[gl-pos/CONJ]() (1; 0% instances).


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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 cc	color:blue
1	E	e	CONJ	CC	_	6	cc	_	Treeler:et
2	a	o	DET	DA0FS0	_	3	det	_	Treeler:spec
3	quen	quen	PRON	PR0CC000	_	6	case	_	Treeler:cc
4	se	se	PRON	PP3CN000	_	6	iobj	_	Treeler:ci
5	lle	lle	PRON	PP3CSD00	_	6	iobj	_	Treeler:ci
6	pide	pedir	VERB	VMIP3S0	_	0	root	_	Treeler:sentence
7	a	o	DET	DA0FS0	_	8	det	_	Treeler:spec
8	fe	fe	NOUN	NCFS000	_	6	dobj	_	Treeler:cd
9	de	de	ADP	SPS00	_	8	case	_	Treeler:sp
10	bautismo	bautismo	NOUN	NCMS000	_	9	nmod	_	Treeler:sn
11	?	?	PUNCT	Fit	_	6	punct	_	Treeler:f

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

776 nodes (3%) are attached to their parents as `cc`.

752 instances of `cc` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.86855670103093.

The following 20 pairs of parts of speech are connected with `cc`: [gl-pos/NOUN]()-[gl-pos/CONJ]() (289; 37% instances), [gl-pos/VERB]()-[gl-pos/CONJ]() (187; 24% instances), [gl-pos/ADJ]()-[gl-pos/CONJ]() (95; 12% instances), [gl-pos/PROPN]()-[gl-pos/CONJ]() (84; 11% instances), [gl-pos/VERB]()-[gl-pos/SCONJ]() (38; 5% instances), [gl-pos/NOUN]()-[gl-pos/SCONJ]() (18; 2% instances), [gl-pos/ADJ]()-[gl-pos/SCONJ]() (12; 2% instances), [gl-pos/NUM]()-[gl-pos/CONJ]() (11; 1% instances), [gl-pos/PRON]()-[gl-pos/CONJ]() (11; 1% instances), [gl-pos/NOUN]()-[gl-pos/ADV]() (8; 1% instances), [gl-pos/ADV]()-[gl-pos/CONJ]() (7; 1% instances), [gl-pos/PROPN]()-[gl-pos/SCONJ]() (4; 1% instances), [gl-pos/ADV]()-[gl-pos/SCONJ]() (2; 0% instances), [gl-pos/DET]()-[gl-pos/CONJ]() (2; 0% instances), [gl-pos/NOUN]()-[gl-pos/VERB]() (2; 0% instances), [gl-pos/PROPN]()-[gl-pos/ADV]() (2; 0% instances), [gl-pos/ADJ]()-[gl-pos/ADV]() (1; 0% instances), [gl-pos/ADP]()-[gl-pos/CONJ]() (1; 0% instances), [gl-pos/PRON]()-[gl-pos/SCONJ]() (1; 0% instances), [gl-pos/VERB]()-[gl-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cc	color:blue
1	e	e	CONJ	Cc	_	4	cc	_	_
2	de	de	ADP	P	AdpType=Prep	4	case	_	_
3	un	un	DET	Dims	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	provocador	provocador	NOUN	Scms	Gender=Masc|Number=Sing	0	root	_	_
5	a	a	ADP	P	AdpType=Prep	6	case	_	_
6	outro	outro	PRON	Inms	Gender=Masc|Number=Sing|PronType=Ind	4	nmod	_	_
7	.	.	PUNCT	Q.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 cc	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 cc	color:blue
1	en_xeral	en_xeral	ADV	La0	_	3	advmod	_	_
2	son	ser	VERB	Vpi30p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	palabras	palabra	NOUN	Scfp	Gender=Fem|Number=Plur	0	root	_	_
4	de	de	ADP	P	AdpType=Prep	5	case	_	_
5	uso	uso	NOUN	Scms	Gender=Masc|Number=Sing	3	nmod	_	_
6	técnico	técnico	ADJ	A0ms	Gender=Masc|Number=Sing	5	amod	_	_
7	e	e	CONJ	Cc	_	6	cc	_	_
8	científico	científico	ADJ	A0ms	Gender=Masc|Number=Sing	6	conj	_	_
9	.	.	PUNCT	Q.	_	3	punct	_	_

~~~


