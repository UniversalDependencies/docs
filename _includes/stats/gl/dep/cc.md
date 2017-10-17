

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician)

This relation is universal.

3481 nodes (3%) are attached to their parents as `cc`.

3264 instances of `cc` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.64550416546969.

The following 33 pairs of parts of speech are connected with `cc`: [gl-pos/NOUN]()-[gl-pos/CCONJ]() (1745; 50% instances), [gl-pos/VERB]()-[gl-pos/CCONJ]() (856; 25% instances), [gl-pos/ADJ]()-[gl-pos/CCONJ]() (472; 14% instances), [gl-pos/PROPN]()-[gl-pos/CCONJ]() (87; 2% instances), [gl-pos/NUM]()-[gl-pos/CCONJ]() (86; 2% instances), [gl-pos/ADP]()-[gl-pos/CCONJ]() (44; 1% instances), [gl-pos/VERB]()-[gl-pos/ADV]() (39; 1% instances), [gl-pos/NOUN]()-[gl-pos/ADV]() (32; 1% instances), [gl-pos/DET]()-[gl-pos/CCONJ]() (27; 1% instances), [gl-pos/ADV]()-[gl-pos/CCONJ]() (15; 0% instances), [gl-pos/ADJ]()-[gl-pos/ADV]() (10; 0% instances), [gl-pos/PRON]()-[gl-pos/CCONJ]() (10; 0% instances), [gl-pos/NUM]()-[gl-pos/ADP]() (9; 0% instances), [gl-pos/ADJ]()-[gl-pos/PRON]() (5; 0% instances), [gl-pos/VERB]()-[gl-pos/PRON]() (5; 0% instances), [gl-pos/ADJ]()-[gl-pos/SCONJ]() (4; 0% instances), [gl-pos/ADP]()-[gl-pos/ADV]() (4; 0% instances), [gl-pos/DET]()-[gl-pos/ADV]() (4; 0% instances), [gl-pos/NOUN]()-[gl-pos/PRON]() (4; 0% instances), [gl-pos/NOUN]()-[gl-pos/SCONJ]() (4; 0% instances), [gl-pos/VERB]()-[gl-pos/SCONJ]() (3; 0% instances), [gl-pos/PRON]()-[gl-pos/ADV]() (2; 0% instances), [gl-pos/SCONJ]()-[gl-pos/CCONJ]() (2; 0% instances), [gl-pos/VERB]()-[gl-pos/ADP]() (2; 0% instances), [gl-pos/VERB]()-[gl-pos/DET]() (2; 0% instances), [gl-pos/ADP]()-[gl-pos/SCONJ]() (1; 0% instances), [gl-pos/ADV]()-[gl-pos/SCONJ]() (1; 0% instances), [gl-pos/CCONJ]()-[gl-pos/CCONJ]() (1; 0% instances), [gl-pos/DET]()-[gl-pos/ADP]() (1; 0% instances), [gl-pos/NOUN]()-[gl-pos/ADP]() (1; 0% instances), [gl-pos/NOUN]()-[gl-pos/PUNCT]() (1; 0% instances), [gl-pos/PART]()-[gl-pos/CCONJ]() (1; 0% instances), [gl-pos/VERB]()-[gl-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 cc	color:blue
1	Como	como	SCONJ	CS	_	6	mark	_	Treeler:conj
2	a	o	DET	DA0FS0	_	3	det	_	Treeler:spec
3	hepatite	hepatite	NOUN	NCFS000	_	6	nsubj	_	Treeler:suj
4	B	b	NOUN	NCMS000	_	3	amod	_	Treeler:s.a
5	se	se	PRON	PP3CN000	_	6	obj	_	Treeler:cd
6	transmite	transmitir	VERB	VMIP3S0	_	0	root	_	Treeler:sentence
7	por	por	ADP	SPS00	_	8	case	_	Treeler:cc
8	vía	vía	NOUN	NCFS000	_	6	obl	_	Treeler:sn
9	parenteral	parenteral	ADJ	AQ0CS0	_	8	amod	_	SpaceAfter=No|Treeler:s.a
10	,	,	PUNCT	Fc	_	12	punct	_	Treeler:f
11	por	por	ADP	SPS00	_	12	case	_	Treeler:sp
12	vía	vía	NOUN	NCFS000	_	8	nmod	_	Treeler:sn
13	sexual	sexual	ADJ	AQ0CS0	_	12	amod	_	Treeler:s.a
14	ou	ou	CCONJ	CC	_	12	cc	_	ToDo=cc-without-conj|Treeler:coord
15	de	de	ADP	SPS00	_	16	case	_	Treeler:sp
16	nai	nai	NOUN	NCFS000	_	12	nmod	_	Treeler:sn
17	a	a	ADP	SPS00	_	18	case	_	Treeler:sp
18	fillo	fillo	NOUN	NCMS000	_	16	nmod	_	SpaceAfter=No|Treeler:sn
19	,	,	PUNCT	Fc	_	12	punct	_	Treeler:f
20	estes	este	DET	DD0MP0	_	21	det	_	Treeler:spec
21	portadores	portador	NOUN	NCMP000	_	23	nsubj	_	Treeler:suj
22	crónicos	crónico	ADJ	AQ0MP0	_	21	amod	_	Treeler:s.a
23	constitúen	constituír	VERB	VMIP3P0	_	6	ccomp	_	Treeler:S
24	unha	un	DET	DI0FS0	_	25	det	_	Treeler:spec
25	fonte	fonte	NOUN	NCFS000	_	23	obj	_	Treeler:cd
26	de	de	ADP	SPS00	_	28	case	_	Treeler:sp
27	posible	posible	ADJ	AQ0CS0	_	28	amod	_	Treeler:s.a
28	contaxio	contaxio	NOUN	NCMS000	_	25	nmod	_	SpaceAfter=No|Treeler:sn
29	.	.	PUNCT	Fp	_	6	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc	color:blue
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


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 17 cc	color:blue
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


