

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician)

This relation is universal.

526 nodes (0%) are attached to their parents as `xcomp`.

511 instances of `xcomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.71863117870722.

The following 35 pairs of parts of speech are connected with `xcomp`: [gl-pos/VERB]()-[gl-pos/ADJ]() (195; 37% instances), [gl-pos/VERB]()-[gl-pos/VERB]() (151; 29% instances), [gl-pos/VERB]()-[gl-pos/NOUN]() (26; 5% instances), [gl-pos/VERB]()-[gl-pos/PRON]() (22; 4% instances), [gl-pos/PRON]()-[gl-pos/VERB]() (17; 3% instances), [gl-pos/ADJ]()-[gl-pos/NOUN]() (16; 3% instances), [gl-pos/NOUN]()-[gl-pos/NOUN]() (15; 3% instances), [gl-pos/ADJ]()-[gl-pos/VERB]() (9; 2% instances), [gl-pos/PRON]()-[gl-pos/ADP]() (7; 1% instances), [gl-pos/VERB]()-[gl-pos/ADP]() (6; 1% instances), [gl-pos/ADV]()-[gl-pos/VERB]() (5; 1% instances), [gl-pos/PRON]()-[gl-pos/NOUN]() (5; 1% instances), [gl-pos/ADJ]()-[gl-pos/ADJ]() (4; 1% instances), [gl-pos/NOUN]()-[gl-pos/ADJ]() (4; 1% instances), [gl-pos/NOUN]()-[gl-pos/PRON]() (4; 1% instances), [gl-pos/NOUN]()-[gl-pos/VERB]() (4; 1% instances), [gl-pos/PRON]()-[gl-pos/PRON]() (4; 1% instances), [gl-pos/VERB]()-[gl-pos/DET]() (4; 1% instances), [gl-pos/VERB]()-[gl-pos/SCONJ]() (4; 1% instances), [gl-pos/VERB]()-[gl-pos/PROPN]() (3; 1% instances), [gl-pos/ADP]()-[gl-pos/NOUN]() (2; 0% instances), [gl-pos/ADP]()-[gl-pos/VERB]() (2; 0% instances), [gl-pos/ADV]()-[gl-pos/ADP]() (2; 0% instances), [gl-pos/NOUN]()-[gl-pos/NUM]() (2; 0% instances), [gl-pos/NUM]()-[gl-pos/NOUN]() (2; 0% instances), [gl-pos/PRON]()-[gl-pos/ADJ]() (2; 0% instances), [gl-pos/ADJ]()-[gl-pos/ADP]() (1; 0% instances), [gl-pos/ADJ]()-[gl-pos/PRON]() (1; 0% instances), [gl-pos/ADP]()-[gl-pos/ADP]() (1; 0% instances), [gl-pos/DET]()-[gl-pos/ADJ]() (1; 0% instances), [gl-pos/NUM]()-[gl-pos/SYM]() (1; 0% instances), [gl-pos/PROPN]()-[gl-pos/PRON]() (1; 0% instances), [gl-pos/SCONJ]()-[gl-pos/NOUN]() (1; 0% instances), [gl-pos/VERB]()-[gl-pos/ADV]() (1; 0% instances), [gl-pos/VERB]()-[gl-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 23 xcomp	color:blue
1	Esa	ese	DET	DD0FS0	_	2	det	_	Treeler:spec
2	sensación	sensación	NOUN	NCFS000	_	7	nsubj	_	Treeler:suj
3	de	de	ADP	SPS00	_	5	case	_	Treeler:sp
4	unha	un	DET	DI0FS0	_	5	det	_	Treeler:spec
5	demanda	demanda	NOUN	NCFS000	_	2	nmod	_	Treeler:sn
6	débil	débil	ADJ	AQ0CS0	_	5	amod	_	Treeler:s.a
7	desaparece	desaparecer	VERB	VMIP3S0	_	0	root	_	Treeler:sentence
8	en	en	ADP	SPS00	_	10	case	_	Treeler:cc
9	o	o	DET	DA0MS0	_	10	det	_	Treeler:spec
10	mes	mes	NOUN	NCMS000	_	7	obl	_	Treeler:sn
11	de	de	ADP	SPS00	_	12	case	_	Treeler:sp
12	xullo	xullo	NOUN	NCMS000	_	10	nmod	_	SpaceAfter=No|Treeler:sn
13	,	,	PUNCT	Fc	_	12	punct	_	Treeler:f
14	período	período	NOUN	NCMS000	_	12	dep	_	Treeler:grup.nom
15	en	en	ADP	SPS00	_	22	case	_	Treeler:sp
16	o	o	DET	DA0MS0	_	22	det	_	Treeler:spec
17	que	que	SCONJ	CS	_	22	mark	_	Treeler:conj
18	a	o	DET	DA0FS0	_	19	det	_	Treeler:spec
19	demanda	demanda	NOUN	NCFS000	_	22	nsubj	_	Treeler:suj
20	xa	xa	ADV	RG	_	22	case	_	Treeler:cc
21	se	se	PRON	PP3CN000	_	22	obj	_	Treeler:cd
22	considera	considerar	VERB	VMIP3S0	_	14	ccomp	_	Treeler:S
23	normal	normal	ADJ	AQ0CS0	_	22	xcomp	_	SpaceAfter=No|Treeler:cpred
24	.	.	PUNCT	Fp	_	7	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 xcomp	color:blue
1	Por	por	ADP	SPS00	_	3	case	_	Treeler:cc
2	o	o	DET	DA0MS0	_	3	det	_	Treeler:spec
3	lado	lado	NOUN	NCMS000	_	8	obl	_	Treeler:sn
4	de	de	ADP	SPS00	_	6	case	_	Treeler:sp
5	os	o	DET	DA0MP0	_	6	det	_	Treeler:spec
6	elementos	elemento	NOUN	NCMP000	_	3	nmod	_	Treeler:sn
7	institucionais	institucional	ADJ	AQ0CP0	_	6	amod	_	Treeler:s.a
8	aparecen	aparecer	VERB	VMIP3P0	_	0	root	_	Treeler:sentence
9	variables	variable	ADJ	AQ0CP0	_	8	xcomp	_	Treeler:cpred
10	relacionadas	relacionar	VERB	VMP00PF	_	8	xcomp	_	Treeler:cpred
11	con	con	ADP	SPS00	_	13	case	_	Treeler:creg
12	o	o	DET	DA0MS0	_	13	det	_	Treeler:spec
13	nivel	nivel	NOUN	NCMS000	_	10	obl	_	Treeler:sn
14	competencial	competencial	ADJ	AQ0MS0	_	13	amod	_	SpaceAfter=No|Treeler:s.a
15	,	,	PUNCT	Fc	_	17	punct	_	Treeler:f
16	as	o	DET	DA0FP0	_	17	det	_	Treeler:spec
17	CC	cc	PROPN	NP00000	_	13	nmod	_	SpaceAfter=No|Treeler:sn
18	.	.	PUNCT	Fp	_	8	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 xcomp	color:blue
1	Non	non	PART	RN	_	2	advmod	_	Treeler:mod
2	aconteceu	acontecer	VERB	VMIS3S0	_	0	root	_	Treeler:sentence
3	o	o	DET	DA0MS0	_	5	det	_	Treeler:spec
4	mesmo	mesmo	DET	DI0MS0	_	3	det	_	Treeler:d
5	coa	coar	VERB	VMIP3S0	_	2	obj	_	Treeler:cd
6	chamada	chamar	VERB	VMP00SF	_	5	xcomp	_	Treeler:cpred
7	"	"	PUNCT	Fe	_	8	punct	_	SpaceAfter=No|Treeler:f
8	lei	lei	NOUN	NCFS000	_	6	xcomp	_	Treeler:cpred
9	de	de	ADP	SPS00	_	11	case	_	Treeler:sp
10	as	o	DET	DA0FP0	_	11	det	_	Treeler:spec
11	rías	ría	NOUN	NCFP000	_	8	nmod	_	SpaceAfter=No|Treeler:sn
12	"	"	PUNCT	Fe	_	8	punct	_	SpaceAfter=No|Treeler:f
13	,	,	PUNCT	Fc	_	14	punct	_	Treeler:f
14	promovida	promover	VERB	VMP00SF	_	8	ccomp	_	Treeler:S
15	por	por	ADP	SPS00	_	17	case	_	Treeler:cag
16	a	o	DET	DA0FS0	_	17	det	_	Treeler:spec
17	Consellería	consellería	NOUN	NCFS000	_	14	obl	_	Treeler:sn
18	de	de	ADP	SPS00	_	19	case	_	Treeler:sp
19	Política	política	NOUN	NCFS000	_	17	nmod	_	Treeler:sn
20	Territorial	territorial	ADJ	AQ0CS0	_	19	amod	_	Treeler:s.a
21	e	e	CCONJ	CC	_	19	cc	_	ToDo=cc-without-conj|Treeler:coord
22	Obras	obra	NOUN	NCFP000	_	19	dep	_	Treeler:grup.nom
23	Públicas	público	ADJ	AQ0FP0	_	22	amod	_	SpaceAfter=No|Treeler:s.a
24	.	.	PUNCT	Fp	_	2	punct	_	Treeler:f

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician-TreeGal)

This relation is universal.

124 nodes (1%) are attached to their parents as `xcomp`.

123 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.79032258064516.

The following 8 pairs of parts of speech are connected with `xcomp`: [gl-pos/VERB]()-[gl-pos/VERB]() (93; 75% instances), [gl-pos/VERB]()-[gl-pos/ADJ]() (14; 11% instances), [gl-pos/VERB]()-[gl-pos/NOUN]() (8; 6% instances), [gl-pos/ADJ]()-[gl-pos/VERB]() (5; 4% instances), [gl-pos/NOUN]()-[gl-pos/ADJ]() (1; 1% instances), [gl-pos/NOUN]()-[gl-pos/VERB]() (1; 1% instances), [gl-pos/PRON]()-[gl-pos/VERB]() (1; 1% instances), [gl-pos/PROPN]()-[gl-pos/ADJ]() (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 xcomp	color:blue
1	A	a	ADP	P	AdpType=Prep	3	case	_	_
2	as	o	DET	Ddfp	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	3	det	_	_
3	cinco	cinco	NUM	Ncnfp	Gender=Fem|Number=Plur|NumType=Card	4	obl	_	_
4	remata	rematar	VERB	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	se	se	PRON	Rao3aa	Clitic=Yes|Gender=Com|Person=3|PronType=Prs	4	expl	_	_
6	de	de	ADP	P	AdpType=Prep	7	mark	_	_
7	traballar	traballar	VERB	V0f000	VerbForm=Inf	4	xcomp	_	SpaceAfter=No
8	"	"	PUNCT	Q"	_	4	punct	_	SpaceAfter=No
9	.	.	PUNCT	Q.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 xcomp	color:blue
1	Mais	mais	SCONJ	Cs	_	4	mark	_	_
2	han	haber	AUX	Vpi30p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	de	de	ADP	P	AdpType=Prep	4	mark	_	_
4	voar	voar	VERB	V0f000	VerbForm=Inf	0	root	_	_
5	xa	xa	ADV	Wn	_	4	advmod	_	_
6	para	para	ADP	P	AdpType=Prep	10	mark	_	_
7	que	que	SCONJ	Cs	_	10	mark	_	_
8	non	non	ADV	Wn	Polarity=Neg	10	advmod	_	_
9	nos	nos	PRON	Raa1mp	Case=Acc|Clitic=Yes|Gender=Masc|Number=Plur|Person=1|PronType=Prs	10	obj	_	_
10	pillen	pillar	VERB	Vps30p	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	advcl	_	_
11	adormecidos	adormecido	ADJ	A0mp	Gender=Masc|Number=Plur	10	xcomp	_	SpaceAfter=No
12	.	.	PUNCT	Q.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 xcomp	color:blue
1	Dende	dende	ADP	P	AdpType=Prep	2	case	_	_
2	entón	entón	ADV	Wn	_	3	advmod	_	_
3	considero	considerar	VERB	Vpi10s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	o	o	PRON	Raa3ms	Case=Acc|Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	obj	_	_
5	o	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
6	mellor	mellor	ADJ	Acms	Degree=Cmp|Gender=Masc|Number=Sing	7	amod	_	_
7	profesor	profesor	NOUN	Scms	Gender=Masc|Number=Sing	3	xcomp	_	_
8	que	que	PRON	Tnms	Gender=Masc|Number=Sing|PronType=Rel	9	nsubj	_	_
9	tiven	ter	VERB	Vei10s	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	7	acl	_	SpaceAfter=No
10	.	.	PUNCT	Q.	_	3	punct	_	_

~~~


