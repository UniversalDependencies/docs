

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician)

This relation is universal.

19693 nodes (18%) are attached to their parents as `det`.

19370 instances of `det` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.20052810643376.

The following 37 pairs of parts of speech are connected with `det`: [gl-pos/NOUN]()-[gl-pos/DET]() (16225; 82% instances), [gl-pos/VERB]()-[gl-pos/DET]() (549; 3% instances), [gl-pos/NUM]()-[gl-pos/DET]() (452; 2% instances), [gl-pos/ADJ]()-[gl-pos/ADV]() (427; 2% instances), [gl-pos/DET]()-[gl-pos/DET]() (405; 2% instances), [gl-pos/ADJ]()-[gl-pos/DET]() (363; 2% instances), [gl-pos/PROPN]()-[gl-pos/DET]() (301; 2% instances), [gl-pos/NOUN]()-[gl-pos/NUM]() (278; 1% instances), [gl-pos/PRON]()-[gl-pos/DET]() (242; 1% instances), [gl-pos/ADP]()-[gl-pos/DET]() (159; 1% instances), [gl-pos/ADV]()-[gl-pos/ADV]() (66; 0% instances), [gl-pos/NOUN]()-[gl-pos/ADV]() (37; 0% instances), [gl-pos/ADV]()-[gl-pos/DET]() (33; 0% instances), [gl-pos/DET]()-[gl-pos/NUM]() (26; 0% instances), [gl-pos/NOUN]()-[gl-pos/PRON]() (26; 0% instances), [gl-pos/NOUN]()-[gl-pos/ADJ]() (24; 0% instances), [gl-pos/NOUN]()-[gl-pos/NOUN]() (21; 0% instances), [gl-pos/NUM]()-[gl-pos/NUM]() (11; 0% instances), [gl-pos/ADV]()-[gl-pos/PART]() (9; 0% instances), [gl-pos/ADV]()-[gl-pos/PRON]() (7; 0% instances), [gl-pos/ADJ]()-[gl-pos/PRON]() (4; 0% instances), [gl-pos/PROPN]()-[gl-pos/NUM]() (4; 0% instances), [gl-pos/ADJ]()-[gl-pos/NUM]() (3; 0% instances), [gl-pos/NOUN]()-[gl-pos/PUNCT]() (3; 0% instances), [gl-pos/DET]()-[gl-pos/ADJ]() (2; 0% instances), [gl-pos/NOUN]()-[gl-pos/ADP]() (2; 0% instances), [gl-pos/NUM]()-[gl-pos/ADJ]() (2; 0% instances), [gl-pos/PROPN]()-[gl-pos/PRON]() (2; 0% instances), [gl-pos/VERB]()-[gl-pos/NUM]() (2; 0% instances), [gl-pos/ADJ]()-[gl-pos/PART]() (1; 0% instances), [gl-pos/DET]()-[gl-pos/PART]() (1; 0% instances), [gl-pos/DET]()-[gl-pos/PUNCT]() (1; 0% instances), [gl-pos/INTJ]()-[gl-pos/DET]() (1; 0% instances), [gl-pos/NUM]()-[gl-pos/PUNCT]() (1; 0% instances), [gl-pos/PART]()-[gl-pos/DET]() (1; 0% instances), [gl-pos/SCONJ]()-[gl-pos/DET]() (1; 0% instances), [gl-pos/VERB]()-[gl-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Para	para	ADP	SPS00	_	0	root	_	Treeler:sentence
2	que	que	SCONJ	CS	_	4	mark	_	Treeler:conj
3	tanto	tanto	DET	DI0MS0	_	4	det	_	Treeler:spec
4	esforzo	esforzo	NOUN	NCMS000	_	1	ccomp	_	SpaceAfter=No|Treeler:S
5	?	?	PUNCT	Fit	_	1	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 det	color:blue
1	Ningunha	ningún	DET	DI0FS0	_	5	det	_	Treeler:spec
2	de	de	ADP	SPS00	_	3	case	_	Treeler:s
3	elas	el	PRON	PP3FP000	_	1	nmod	_	Treeler:sn
4	se	se	PRON	PP3CN000	_	5	obj	_	Treeler:cd
5	chegou	chegar	VERB	VMIS3S0	_	0	root	_	Treeler:sentence
6	a	a	ADP	SPS00	_	7	case	_	Treeler:creg
7	instalar	instalar	VERB	VMN0000	_	5	ccomp	_	Treeler:S
8	por	por	ADP	SPS00	_	10	case	_	Treeler:cc
9	a	o	DET	DA0FS0	_	10	det	_	Treeler:spec
10	oposición	oposición	NOUN	NCFS000	_	7	obl	_	Treeler:sn
11	directa	directo	ADJ	AQ0FS0	_	10	amod	_	Treeler:s.a
12	de	de	ADP	SPS00	_	14	case	_	Treeler:sp
13	a	o	DET	DA0FS0	_	14	det	_	Treeler:spec
14	poboación	poboación	NOUN	NCFS000	_	10	nmod	_	SpaceAfter=No|Treeler:sn
15	.	.	PUNCT	Fp	_	5	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 det	color:blue
1	A	o	DET	DA0FS0	_	3	det	_	Treeler:spec
2	súa	seu	DET	DP3FS0	_	3	det	_	Treeler:spec
3	taxa	taxa	NOUN	NCFS000	_	6	nsubj	_	Treeler:suj
4	de	de	ADP	SPS00	_	5	case	_	Treeler:sp
5	crecemento	crecemento	NOUN	NCMS000	_	3	nmod	_	Treeler:sn
6	sitúa	situar	VERB	VMIP3S0	_	0	root	_	Treeler:sentence
7	se	se	PRON	PP3CN000	_	6	dep	_	Treeler:morfema.pronominal
8	en	en	ADP	SPS00	_	10	case	_	Treeler:cc
9	o	o	DET	DA0MS0	_	10	det	_	Treeler:spec
10	4,1	4,1	NUM	Z	_	6	obl	_	Treeler:sn
11	%	%	SYM	Ft	_	10	nmod	_	Treeler:sn
12	e	e	CCONJ	CC	_	6	cc	_	ToDo=cc-without-conj|Treeler:coord
13	a	o	DET	DA0FS0	_	15	det	_	Treeler:spec
14	súa	seu	DET	DP3FS0	_	15	det	_	Treeler:spec
15	contribución	contribución	NOUN	NCFS000	_	19	nsubj	_	Treeler:suj
16	a	a	ADP	SPS00	_	18	case	_	Treeler:sp
17	o	o	DET	DA0MS0	_	18	det	_	Treeler:spec
18	PIB	pib	PROPN	NP00000	_	15	nmod	_	Treeler:sn
19	cifra	cifrar	VERB	VMIP3S0	_	6	ccomp	_	Treeler:S
20	se	se	PRON	PP3CN000	_	19	dep	_	Treeler:morfema.pronominal
21	en	en	ADP	SPS00	_	23	case	_	Treeler:cc
22	0,3	0,3	NUM	Z	_	23	det	_	Treeler:spec
23	puntos	punto	NOUN	NCMP000	_	19	obl	_	SpaceAfter=No|Treeler:sn
24	.	.	PUNCT	Fp	_	6	punct	_	Treeler:f

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician-TreeGal)

This relation is universal.

2506 nodes (16%) are attached to their parents as `det`.

2506 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16759776536313.

The following 9 pairs of parts of speech are connected with `det`: [gl-pos/NOUN]()-[gl-pos/DET]() (2061; 82% instances), [gl-pos/PROPN]()-[gl-pos/DET]() (295; 12% instances), [gl-pos/PRON]()-[gl-pos/DET]() (64; 3% instances), [gl-pos/ADJ]()-[gl-pos/DET]() (44; 2% instances), [gl-pos/NUM]()-[gl-pos/DET]() (26; 1% instances), [gl-pos/VERB]()-[gl-pos/DET]() (12; 0% instances), [gl-pos/DET]()-[gl-pos/DET]() (2; 0% instances), [gl-pos/INTJ]()-[gl-pos/DET]() (1; 0% instances), [gl-pos/SYM]()-[gl-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Europeizar	europeizar	VERB	V0f000	VerbForm=Inf	0	root	_	_
2	o	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	horario	horario	NOUN	Scms	Gender=Masc|Number=Sing	1	obj	_	_
4	de	de	ADP	P	AdpType=Prep	5	case	_	_
5	traballo	traballo	NOUN	Scms	Gender=Masc|Number=Sing	3	nmod	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	(	(	PUNCT	Q(	_	3	punct	_	SpaceAfter=No
2	La	la	DET	D0fs	PronType=Art	3	det	_	_
3	Vanguardia	vanguardia	PROPN	Sp00	_	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Q,	_	3	punct	_	_
5	28	28	NUM	Ncnms	Gender=Masc|Number=Sing|NumType=Card	3	nmod	_	_
6	de	de	ADP	P	AdpType=Prep	7	case	_	_
7	febreiro	febreiro	NOUN	Scms	Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
8	)	)	PUNCT	Q)	_	3	punct	_	SpaceAfter=No
9	.	.	PUNCT	Q.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	A	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	mesma	mesmo	PRON	Infs	Gender=Fem|Number=Sing|PronType=Ind	0	root	_	_
3	que	que	SCONJ	Cs	_	4	mark	_	_
4	hai	haber	VERB	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
5	catro	catro	NUM	Ncdmp	Gender=Masc|Number=Plur|NumType=Card	6	nummod	_	_
6	anos	ano	NOUN	Scmp	Gender=Masc|Number=Plur	4	obj	_	_
7	e	e	CCONJ	Cc	_	9	cc	_	_
8	que	que	SCONJ	Cs	_	13	mark	_	_
9	a	o	PRON	Ddfs	Gender=Fem|Number=Sing|Person=3|PronType=Art	2	conj	_	_
10	de	de	ADP	P	AdpType=Prep	11	case	_	_
11	Abel	abel	PROPN	Spm0	Gender=Masc	9	nmod	_	_
12	Caballero	caballero	PROPN	Spm0	Gender=Masc	11	flat:name	_	_
13	hai	haber	VERB	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	ccomp	_	_
14	oito	oito	NUM	Ncnmp	Gender=Masc|Number=Plur|NumType=Card	13	obj	_	SpaceAfter=No
15	:	:	PUNCT	Q:	_	2	punct	_	_

~~~


