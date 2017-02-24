

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician)

This relation is universal.

1084 nodes (1%) are attached to their parents as `advmod`.

841 instances of `advmod` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.40221402214022.

The following 24 pairs of parts of speech are connected with `advmod`: [gl-pos/VERB]()-[gl-pos/PART]() (349; 32% instances), [gl-pos/NOUN]()-[gl-pos/ADV]() (217; 20% instances), [gl-pos/ADJ]()-[gl-pos/PART]() (105; 10% instances), [gl-pos/VERB]()-[gl-pos/ADV]() (98; 9% instances), [gl-pos/ADJ]()-[gl-pos/ADV]() (63; 6% instances), [gl-pos/NOUN]()-[gl-pos/PART]() (48; 4% instances), [gl-pos/SCONJ]()-[gl-pos/ADV]() (48; 4% instances), [gl-pos/ADV]()-[gl-pos/ADV]() (38; 4% instances), [gl-pos/NUM]()-[gl-pos/ADV]() (34; 3% instances), [gl-pos/ADP]()-[gl-pos/ADV]() (27; 2% instances), [gl-pos/DET]()-[gl-pos/ADV]() (17; 2% instances), [gl-pos/ADP]()-[gl-pos/PART]() (9; 1% instances), [gl-pos/PRON]()-[gl-pos/ADV]() (7; 1% instances), [gl-pos/PROPN]()-[gl-pos/ADV]() (5; 0% instances), [gl-pos/NOUN]()-[gl-pos/DET]() (4; 0% instances), [gl-pos/VERB]()-[gl-pos/DET]() (4; 0% instances), [gl-pos/ADJ]()-[gl-pos/DET]() (2; 0% instances), [gl-pos/ADV]()-[gl-pos/PART]() (2; 0% instances), [gl-pos/PRON]()-[gl-pos/PART]() (2; 0% instances), [gl-pos/ADP]()-[gl-pos/DET]() (1; 0% instances), [gl-pos/CCONJ]()-[gl-pos/ADV]() (1; 0% instances), [gl-pos/CCONJ]()-[gl-pos/PART]() (1; 0% instances), [gl-pos/NOUN]()-[gl-pos/NOUN]() (1; 0% instances), [gl-pos/SCONJ]()-[gl-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 advmod	color:blue
1	A	o	DET	DA0FS0	_	2	det	_	Treeler:spec
2	diferenza	diferenza	NOUN	NCFS000	_	15	nsubj	_	Treeler:suj
3	máis	máis	ADV	RG	_	4	det	_	Treeler:spec
4	inmediata	inmediato	ADJ	AQ0FS0	_	2	amod	_	Treeler:s.a
5	entre	entre	ADP	SPS00	_	7	case	_	Treeler:sp
6	a	o	DET	DA0FS0	_	7	det	_	Treeler:spec
7	varicela	varicela	NOUN	NCFS000	_	2	nmod	_	Treeler:sn
8	en	en	ADP	SPS00	_	9	case	_	Treeler:sp
9	vacinados	vacinar	VERB	VMP00PM	_	7	ccomp	_	Treeler:S
10	e	e	CCONJ	CC	_	9	cc	_	ToDo=cc-without-conj|Treeler:coord
11	non	non	PART	RN	_	12	advmod	_	Treeler:mod
12	vacinados	vacinar	VERB	VMP00PM	_	9	ccomp	_	Treeler:S
13	é	ser	AUX	VSIP3S0	_	15	cop	_	Treeler:sentence
14	o	o	DET	DA0MS0	_	15	det	_	Treeler:spec
15	número	número	NOUN	NCMS000	_	0	root	_	Treeler:atr
16	de	de	ADP	SPS00	_	17	case	_	Treeler:sp
17	lesións	lesión	NOUN	NCFP000	_	15	nmod	_	ToDo=nmod|Treeler:sn
18	que	que	PRON	PR0CN000	_	19	obj	_	Treeler:cd
19	provocan	provocar	VERB	VMIP3P0	_	17	ccomp	_	SpaceAfter=No|Treeler:S
20	.	.	PUNCT	Fp	_	15	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 22 advmod	color:blue
1	A	o	DET	DA0FS0	_	2	det	_	Treeler:spec
2	formación	formación	NOUN	NCFS000	_	7	nsubj	_	Treeler:suj
3	bruta	bruto	ADJ	AQ0FS0	_	2	amod	_	Treeler:s.a
4	de	de	ADP	SPS00	_	5	case	_	Treeler:sp
5	capital	capital	NOUN	NCFS000	_	2	nmod	_	Treeler:sn
6	fixo	fixo	ADJ	AQ0MS0	_	5	amod	_	Treeler:s.a
7	rexistrou	rexistrar	VERB	VMIS3S0	_	0	root	_	Treeler:sentence
8	un	un	DET	DI0MS0	_	9	det	_	Treeler:spec
9	incremento	incremento	NOUN	NCMS000	_	7	obj	_	Treeler:cd
10	de	de	ADP	SPS00	_	12	case	_	Treeler:sp
11	o	o	DET	DA0MS0	_	12	det	_	Treeler:spec
12	7,2	7,2	NUM	Z	_	9	nmod	_	Treeler:sn
13	%	%	SYM	Ft	_	12	nmod	_	Treeler:sn
14	en	en	ADP	SPS00	_	15	case	_	Treeler:cc
15	2005	2005	NUM	Z	_	7	obl	_	SpaceAfter=No|Treeler:sn
16	,	,	PUNCT	Fc	_	19	punct	_	Treeler:f
17	máis	máis	ADV	RG	_	19	advmod	_	Treeler:sadv
18	de	de	ADP	SPS00	_	19	case	_	Treeler:sp
19	dous	dous	NOUN	NCMP000	_	15	nmod	_	Treeler:sn
20	puntos	punto	NOUN	NCMP000	_	19	amod	_	Treeler:s.a
21	por	por	ADP	SPS00	_	22	case	_	Treeler:sp
22	riba	riba	ADV	RG	_	20	advmod	_	Treeler:sadv
23	de	de	ADP	SPS00	_	25	case	_	Treeler:sp
24	o	o	DET	DA0MS0	_	25	det	_	Treeler:spec
25	experimentado	experimentar	VERB	VMP00SM	_	20	nmod	_	Treeler:sn
26	en	en	ADP	SPS00	_	28	case	_	Treeler:cc
27	o	o	DET	DA0MS0	_	28	det	_	Treeler:spec
28	ano	ano	NOUN	NCMS000	_	25	obl	_	Treeler:sn
29	anterior	anterior	ADJ	AQ0CS0	_	28	amod	_	SpaceAfter=No|Treeler:s.a
30	.	.	PUNCT	Fp	_	7	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 13 advmod	color:blue
1	Teñen	ter	VERB	VMIP3P0	_	0	root	_	Treeler:sentence
2	moitas	moito	DET	DI0FP0	_	3	det	_	Treeler:spec
3	razóns	razón	NOUN	NCFP000	_	1	nsubj	_	Treeler:suj
4	históricas	histórico	ADJ	AQ0FP0	_	3	amod	_	Treeler:s.a
5	en	en	ADP	SPS00	_	6	case	_	Treeler:cc
6	común	común	ADJ	AQ0CS0	_	1	amod	_	SpaceAfter=No|Treeler:s.a
7	,	,	PUNCT	Fc	_	1	punct	_	Treeler:f
8	pero	pero	CCONJ	CC	_	1	cc	_	ToDo=cc-without-conj|Treeler:coord
9	os	o	DET	DA0MP0	_	10	det	_	Treeler:spec
10	espazos	espazo	NOUN	NCMP000	_	16	nsubj	_	Treeler:suj
11	de	de	ADP	SPS00	_	12	case	_	Treeler:sp
12	actuación	actuación	NOUN	NCFS000	_	10	nmod	_	Treeler:sn
13	non	non	PART	RN	_	16	advmod	_	Treeler:mod
14	son	ser	AUX	VSIP1S0	_	16	cop	_	Treeler:S
15	necesariamente	necesariamente	ADV	RG	_	16	det	_	Treeler:spec
16	unívocos	unívoco	ADJ	AQ0MP0	_	1	ccomp	_	SpaceAfter=No|Treeler:atr
17	.	.	PUNCT	Fp	_	1	punct	_	Treeler:f

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician-TreeGal)

This relation is universal.

671 nodes (4%) are attached to their parents as `advmod`.

505 instances of `advmod` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.95230998509687.

The following 21 pairs of parts of speech are connected with `advmod`: [gl-pos/VERB]()-[gl-pos/ADV]() (360; 54% instances), [gl-pos/ADJ]()-[gl-pos/ADV]() (81; 12% instances), [gl-pos/NOUN]()-[gl-pos/ADV]() (77; 11% instances), [gl-pos/ADV]()-[gl-pos/ADV]() (42; 6% instances), [gl-pos/VERB]()-[gl-pos/ADP]() (25; 4% instances), [gl-pos/AUX]()-[gl-pos/ADV]() (20; 3% instances), [gl-pos/NOUN]()-[gl-pos/ADP]() (15; 2% instances), [gl-pos/PRON]()-[gl-pos/ADV]() (12; 2% instances), [gl-pos/PROPN]()-[gl-pos/ADV]() (12; 2% instances), [gl-pos/NUM]()-[gl-pos/ADV]() (7; 1% instances), [gl-pos/DET]()-[gl-pos/ADV]() (6; 1% instances), [gl-pos/VERB]()-[gl-pos/PRON]() (3; 0% instances), [gl-pos/ADJ]()-[gl-pos/ADP]() (2; 0% instances), [gl-pos/ADP]()-[gl-pos/ADV]() (2; 0% instances), [gl-pos/NOUN]()-[gl-pos/CCONJ]() (1; 0% instances), [gl-pos/NOUN]()-[gl-pos/PRON]() (1; 0% instances), [gl-pos/NOUN]()-[gl-pos/VERB]() (1; 0% instances), [gl-pos/PROPN]()-[gl-pos/ADP]() (1; 0% instances), [gl-pos/PROPN]()-[gl-pos/SCONJ]() (1; 0% instances), [gl-pos/VERB]()-[gl-pos/ADJ]() (1; 0% instances), [gl-pos/VERB]()-[gl-pos/CCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 advmod	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 advmod	color:blue
1	"	"	PUNCT	Q"	_	2	punct	_	SpaceAfter=No
2	Temos	ter	VERB	Vpi10p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	a	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	xornada	xornada	NOUN	Scfs	Gender=Fem|Number=Sing	2	obj	_	_
5	laboral	laboral	ADJ	A0fs	Gender=Fem|Number=Sing	4	amod	_	_
6	máis	máis	ADV	Wm	_	7	advmod	_	_
7	longa	longo	ADJ	A0fs	Gender=Fem|Number=Sing	4	amod	_	_
8	de	de	ADP	P	AdpType=Prep	9	case	_	_
9	Europa	Europa	PROPN	Sp00	_	7	obl	_	SpaceAfter=No
10	.	.	PUNCT	Q.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 advmod	color:blue
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


