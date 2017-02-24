

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician)

This relation is universal.

111 nodes (0%) are attached to their parents as `nummod`.

109 instances of `nummod` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.77477477477477.

The following 6 pairs of parts of speech are connected with `nummod`: [gl-pos/DET]()-[gl-pos/NUM]() (81; 73% instances), [gl-pos/ADV]()-[gl-pos/NUM]() (25; 23% instances), [gl-pos/NUM]()-[gl-pos/NUM]() (2; 2% instances), [gl-pos/CCONJ]()-[gl-pos/NUM]() (1; 1% instances), [gl-pos/PROPN]()-[gl-pos/NUM]() (1; 1% instances), [gl-pos/VERB]()-[gl-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 nummod	color:blue
1	Os	o	DET	DA0MP0	_	2	det	_	Treeler:spec
2	resultados	resultado	NOUN	NCMP000	_	3	nsubj	_	Treeler:suj
3	indican	indicar	VERB	VMIP3P0	_	0	root	_	Treeler:sentence
4	un	un	DET	DI0MS0	_	5	det	_	Treeler:spec
5	custo	custo	NOUN	NCMS000	_	3	obj	_	Treeler:cd
6	que	que	PRON	PR0CN000	_	7	nsubj	_	Treeler:suj
7	oscila	oscilar	VERB	VMIP3S0	_	5	ccomp	_	Treeler:S
8	entre	entre	ADP	SPS00	_	14	case	_	Treeler:cc
9	os	o	DET	DA0MP0	_	14	det	_	Treeler:spec
10	88.000	88.000	NUM	Z	_	9	nummod	_	Treeler:z
11	e	e	CCONJ	CC	_	9	cc	_	ToDo=cc-without-conj|Treeler:coord
12	os	o	DET	DA0MP0	_	14	det	_	Treeler:spec
13	134.300	134.300	NUM	Z	_	12	nummod	_	Treeler:z
14	millóns	millón	NOUN	NCMP000	_	7	obl	_	Treeler:sn
15	de	de	ADP	SPS00	_	16	case	_	Treeler:sp
16	pesetas	peseta	NOUN	NCFP000	_	14	nmod	_	Treeler:sn
17	(	(	PUNCT	Fpa	_	19	punct	_	SpaceAfter=No|Treeler:f
18	de	de	ADP	SPS00	_	19	case	_	Treeler:sp
19	467	467	NUM	Z	_	14	nmod	_	Treeler:sn
20	a	a	ADP	SPS00	_	22	case	_	Treeler:sp
21	707	707	NUM	Z	_	22	det	_	Treeler:spec
22	millóns	millón	NOUN	NCMP000	_	19	nmod	_	Treeler:sn
23	de	de	ADP	SPS00	_	24	case	_	Treeler:sp
24	dólares	dólar	NOUN	NCMP000	_	22	nmod	_	SpaceAfter=No|Treeler:sn
25	)	)	PUNCT	Fpt	_	19	punct	_	SpaceAfter=No|Treeler:f
26	.	.	PUNCT	Fp	_	3	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nummod	color:blue
1	Como	como	SCONJ	CS	_	20	mark	_	Treeler:conj
2	só	só	ADV	RG	_	1	advmod	_	Treeler:sadv
3	o	o	DET	DA0MS0	_	4	det	_	Treeler:spec
4	16	16	NUM	Z	_	2	nummod	_	Treeler:z
5	%	%	SYM	Ft	_	4	nmod	_	Treeler:sn
6	de	de	ADP	SPS00	_	8	case	_	Treeler:sp
7	a	o	DET	DA0FS0	_	8	det	_	Treeler:spec
8	poboación	poboación	NOUN	NCFS000	_	4	nmod	_	Treeler:sn
9	en	en	ADP	SPS00	_	10	case	_	Treeler:sp
10	disposición	disposición	NOUN	NCFS000	_	8	nmod	_	Treeler:sn
11	de	de	ADP	SPS00	_	12	case	_	Treeler:sp
12	traballar	traballar	VERB	VMN0000	_	10	ccomp	_	Treeler:S
13	vive	vivir	VERB	VMIP3S0	_	12	ccomp	_	Treeler:S
14	en	en	ADP	SPS00	_	16	case	_	Treeler:cc
15	os	o	DET	DA0MP0	_	16	det	_	Treeler:spec
16	países	país	NOUN	NCMP000	_	13	obl	_	Treeler:sn
17	ricos	rico	ADJ	AQ0MP0	_	16	amod	_	SpaceAfter=No|Treeler:s.a
18	,	,	PUNCT	Fc	_	1	punct	_	Treeler:f
19	estes	este	DET	DD0MP0	_	20	det	_	Treeler:d
20	necesitan	necesitar	VERB	VMIP3P0	_	0	root	_	Treeler:sentence
21	man	man	NOUN	NCFS000	_	20	obj	_	Treeler:cd
22	de	de	ADP	SPS00	_	23	case	_	Treeler:sp
23	obra	obra	NOUN	NCFS000	_	21	nmod	_	Treeler:sn
24	e	e	CCONJ	CC	_	20	cc	_	ToDo=cc-without-conj|Treeler:coord
25	reciben	recibir	VERB	VMIP3P0	_	20	ccomp	_	Treeler:S
26	o	o	DET	DA0MS0	_	27	det	_	Treeler:spec
27	60	60	NUM	Z	_	25	obj	_	Treeler:cd
28	%	%	SYM	Ft	_	27	nmod	_	Treeler:sn
29	de	de	ADP	SPS00	_	31	case	_	Treeler:sp
30	a	o	DET	DA0FS0	_	31	det	_	Treeler:spec
31	migración	migración	NOUN	NCFS000	_	27	nmod	_	SpaceAfter=No|Treeler:sn
32	.	.	PUNCT	Fp	_	20	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 29 nummod	color:blue
1	Citemos	citar	VERB	VMSP1P0	_	0	root	_	Treeler:sentence
2	como	como	SCONJ	CS	_	3	mark	_	Treeler:conj
3	mostra	mostrar	VERB	VMIP3S0	_	1	case	_	SpaceAfter=No|ToDo=case-upos|Treeler:cc
4	,	,	PUNCT	Fc	_	6	punct	_	Treeler:f
5	para	para	ADP	SPS00	_	6	case	_	Treeler:cc
6	evitar	evitar	VERB	VMN0000	_	3	ccomp	_	Treeler:S
7	reiteracións	reiteración	NOUN	NCFP000	_	6	obj	_	SpaceAfter=No|Treeler:cd
8	,	,	PUNCT	Fc	_	18	punct	_	Treeler:f
9	que	que	PRON	PR0CN000	_	18	nsubj	_	Treeler:suj
10	en	en	ADP	SPS00	_	12	case	_	Treeler:cc
11	o	o	DET	DA0MS0	_	12	det	_	Treeler:spec
12	capítulo	capítulo	NOUN	NCMS000	_	18	obl	_	Treeler:sn
13	CII	cii	PROPN	NP00000	_	12	nmod	_	Treeler:sn
14	de	de	ADP	SPS00	_	16	case	_	Treeler:sp
15	o	o	DET	DA0MS0	_	16	det	_	Treeler:spec
16	libro	libro	NOUN	NCMS000	_	12	nmod	_	Treeler:sn
17	I	i	NOUN	NCMS000	_	16	amod	_	Treeler:s.a
18	menciona	mencionar	VERB	VMIP3S0	_	7	ccomp	_	Treeler:S
19	se	se	PRON	PP3CN000	_	18	dep	_	Treeler:morfema.pronominal
20	o	o	DET	DA0MS0	_	21	det	_	Treeler:spec
21	Reino	reino	NOUN	NCMS000	_	18	obj	_	Treeler:cd
22	de	de	ADP	SPS00	_	23	case	_	Treeler:sp
23	Galicia	galicia	PROPN	NP00000	_	21	nmod	_	Treeler:sn
24	(	(	PUNCT	Fpa	_	25	punct	_	SpaceAfter=No|Treeler:f
25	Ibídem	ibídem	NOUN	NCMS000	_	23	nmod	_	SpaceAfter=No|Treeler:sn
26	,	,	PUNCT	Fc	_	25	punct	_	Treeler:f
27	1994	1994	NUM	Z	_	25	nmod	_	SpaceAfter=No|Treeler:sn
28	:	:	PUNCT	Fd	_	29	punct	_	Treeler:f
29	242	242	NUM	Z	_	27	nummod	_	SpaceAfter=No|Treeler:z
30	)	)	PUNCT	Fpt	_	25	punct	_	SpaceAfter=No|Treeler:f
31	.	.	PUNCT	Fp	_	1	punct	_	Treeler:f

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician-TreeGal)

This relation is universal.

92 nodes (1%) are attached to their parents as `nummod`.

75 instances of `nummod` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1304347826087.

The following 5 pairs of parts of speech are connected with `nummod`: [gl-pos/NOUN]()-[gl-pos/NUM]() (86; 93% instances), [gl-pos/PROPN]()-[gl-pos/NUM]() (3; 3% instances), [gl-pos/NOUN]()-[gl-pos/DET]() (1; 1% instances), [gl-pos/NUM]()-[gl-pos/NOUN]() (1; 1% instances), [gl-pos/SYM]()-[gl-pos/NUM]() (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod	color:blue
1	Algúns	algún	PRON	Inmp	Gender=Masc|Number=Plur|PronType=Ind	2	nsubj	_	_
2	fan	facer	VERB	Vpi30p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	xornadas	xornada	NOUN	Scfp	Gender=Fem|Number=Plur	2	obj	_	_
4	de	de	ADP	P	AdpType=Prep	5	case	_	_
5	máis	máis	ADV	Wn	_	3	advmod	_	_
6	de	de	ADP	P	AdpType=Prep	8	case	_	_
7	12	12	NUM	Ncdfp	Gender=Fem|Number=Plur|NumType=Card	8	nummod	_	_
8	horas	hora	NOUN	Scfp	Gender=Fem|Number=Plur	5	obl	_	SpaceAfter=No
9	.	.	PUNCT	Q.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 nummod	color:blue
1	Respecto	respecto	NOUN	Scms	Gender=Masc|Number=Sing	3	case	_	_
2	a	a	ADP	P	AdpType=Prep	1	fixed	_	_
3	competencias	competencia	NOUN	Scfp	Gender=Fem|Number=Plur	13	obl	_	SpaceAfter=No
4	,	,	PUNCT	Q,	_	5	punct	_	_
5	recollidas	recoller	VERB	V0p0fp	Gender=Fem|Number=Plur|VerbForm=Part	3	acl	_	_
6	en	en	ADP	P	AdpType=Prep	8	case	_	_
7	a	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	Base	base	PROPN	Spfs	Gender=Fem|Number=Sing	5	obl	_	_
9	XII	xii	NUM	N0000	NumType=Card	8	nummod	_	SpaceAfter=No
10	,	,	PUNCT	Q,	_	5	punct	_	_
11	sería	ser	AUX	Vci30s	Mood=Cnd,Ind|Number=Sing|Person=3|VerbForm=Fin	13	cop	_	_
12	moi	moito	ADV	Wm	_	13	advmod	_	_
13	longo	longo	ADJ	A0ms	Gender=Masc|Number=Sing	0	root	_	_
14	e	e	CCONJ	Cc	_	15	cc	_	_
15	difícil	difícil	ADJ	A0ms	Gender=Masc|Number=Sing	13	conj	_	_
16	presentar	presentar	VERB	V0f000	VerbForm=Inf	13	ccomp	_	_
17	aquí	aquí	ADV	Wn	_	16	advmod	_	_
18	un	un	DET	Dims	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	19	det	_	_
19	resume	resume	NOUN	Scms	Gender=Masc|Number=Sing	16	obj	_	SpaceAfter=No
20	.	.	PUNCT	Q.	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	Unha	un	DET	Difs	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	2	nummod	_	_
2	semana	semana	NOUN	Scfs	Gender=Fem|Number=Sing	5	obl	_	_
3	despois	despois	ADV	Wm	_	2	advmod	_	SpaceAfter=No
4	,	,	PUNCT	Q,	_	2	punct	_	_
5	semella	semellar	VERB	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	que	que	SCONJ	Cs	_	10	mark	_	_
7	Pérez	pérez	PROPN	Sp00	_	10	nsubj	_	_
8	Touriño	touriño	PROPN	Sp00	_	7	flat:name	_	_
9	xa	xa	ADV	Wn	_	10	advmod	_	_
10	tiña	ter	VERB	Vii30s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	ccomp	_	_
11	unha	un	DET	Difs	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	estratexia	estratexia	NOUN	Scfs	Gender=Fem|Number=Sing	10	obj	_	SpaceAfter=No
13	.	.	PUNCT	Q.	_	5	punct	_	_

~~~


