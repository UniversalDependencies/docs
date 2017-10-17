

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

231 nodes (0%) are attached to their parents as `iobj`.

143 instances of `iobj` (62%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.3030303030303.

The following 7 pairs of parts of speech are connected with `iobj`: [pt-pos/VERB]()-[pt-pos/PRON]() (220; 95% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (4; 2% instances), [pt-pos/ADJ]()-[pt-pos/PRON]() (2; 1% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (2; 1% instances), [pt-pos/ADV]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 iobj	color:blue
1	Pouco	pouco	ADV	<quant>|ADV|@>A	_	2	advmod	_	_
2	depois	depois	ADV	ADV|@ADVL>	_	6	advmod	_	SpaceAfter=No
3	,	,	PUNCT	PU|@PU	_	2	punct	_	_
4	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	príncipe	príncipe	NOUN	<np-def>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	6	nsubj	_	_
6	aponta	apontar	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	lhe	ele	PRON	PERS|M|3S|DAT|@<DAT	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	iobj	_	_
8	a	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	arma	arma	NOUN	<np-def>|N|F|S|@<ACC	Gender=Fem|Number=Sing	6	obj	_	_
10	a	a	ADP	<sam->|PRP|@<ADVL	_	12	case	_	_
11	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	ventre	ventre	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
13	.	.	PUNCT	PU|@PU	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 iobj	color:blue
1	O	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	lucro	lucro	NOUN	<np-def>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	3	nsubj	_	_
3	cresceu	crescer	VERB	<first-cjt>|<mv>|V|PS|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	24	24	NUM	<card>|NUM|M|P|@>N	NumType=Card	5	nummod	_	SpaceAfter=No
5	%	%	SYM	<np-def>|N|M|P|@<ACC	Gender=Masc|Number=Plur	3	obj	_	_
6	para	para	ADP	PRP|@<ADVL	_	9	case	_	_
7	US$	US$	SYM	_	Gender=Masc|Number=Plur	9	compound	_	_
8	51	51	NUM	<card>|NUM|M|P|@>N	NumType=Card	9	nummod	_	_
9	milhões	milhão	NOUN	<np-def>|N|M|P|@P<	Gender=Masc|Number=Plur	3	iobj	_	_
10	e	e	CCONJ	<co-fcl>|KC|@CO	_	3	cc	_	_
11	as	o	DET	<artd>|ART|F|P|@>N	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	12	det	_	_
12	vendas	venda	NOUN	<np-def>|N|F|P|@SUBJ>	Gender=Fem|Number=Plur	3	conj	_	SpaceAfter=No
13	,	,	PUNCT	PU|@PU	_	12	punct	_	_
14	18	18	NUM	<card>|NUM|M|P|@>N	NumType=Card	15	nummod	_	SpaceAfter=No
15	%	%	SYM	<Eg>|<np-def>|N|M|P|@<ACC	Gender=Masc|Number=Plur	12	orphan	_	SpaceAfter=No
16	,	,	PUNCT	PU|@PU	_	15	punct	_	_
17	para	para	ADP	PRP|@<ADVL	_	20	case	_	_
18	US$	US$	SYM	_	Gender=Masc|Number=Plur	20	compound	_	_
19	776	776	NUM	<card>|NUM|M|P|@>N	NumType=Card	20	nummod	_	_
20	milhões	milhão	NOUN	<np-def>|N|M|P|@P<	Gender=Masc|Number=Plur	12	orphan	_	SpaceAfter=No
21	.	.	PUNCT	PU|@PU	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 20 iobj	color:blue
1	«	«	PUNCT	PU|@PU	_	23	punct	_	SpaceAfter=No
2	Um	um	DET	<arti>|ART|M|S|@>N	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
3	outro	outro	DET	<diff>|DET|M|S|@>N	Gender=Masc|Number=Sing|PronType=Ind	4	det	_	_
4	poder	poder	NOUN	<np-idf>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	23	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	PU|@PU	_	6	punct	_	_
6	aliado	aliar	VERB	<mv>|<first-cjt>|V|PCP|M|S|@ICL-N<PRED	Gender=Masc|Number=Sing|VerbForm=Part	4	acl	_	_
7	mas	mas	CCONJ	<co-pred>|KC|@CO	_	6	cc	_	_
8	diferente	diferente	ADJ	ADJ|M|S|@ICL-N<PRED	Gender=Masc|Number=Sing	6	dep	_	SpaceAfter=No
9	,	,	PUNCT	PU|@PU	_	6	punct	_	_
10	como	como	ADV	<rel>|ADV|@ADVL>	_	14	advmod	_	_
11	pode	poder	AUX	<aux>|V|PR|3S|IND|@FS-N<PRED	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux	_	_
12	vir	vir	AUX	<aux>|V|INF|@ICL-AUX<	VerbForm=Inf	14	aux	_	_
13	a	a	ADP	PRP|@PRT-AUX<	_	14	obl	_	_
14	ser	ser	VERB	<mv>|V|INF|@ICL-AUX<	VerbForm=Inf	4	acl:relcl	_	_
15	a	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	União	União	PROPN	_	Gender=Fem|Number=Sing	14	nsubj	_	MWE=União_Europeia|MWEPOS=PROPN
17	Europeia	Europeia	PROPN	_	Number=Sing	16	flat:name	_	SpaceAfter=No
18	,	,	PUNCT	PU|@PU	_	14	punct	_	_
19	só	só	ADV	ADV|@ADVL>	_	23	advmod	_	_
20	lhes	eles	PRON	PERS|M|3P|DAT|@DAT>	Case=Dat|Gender=Masc|Number=Plur|Person=3|PronType=Prs	23	iobj	_	_
21	pode	poder	AUX	<aux>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	23	aux	_	_
22	ser	ser	AUX	<mv>|V|INF|@ICL-AUX<	VerbForm=Inf	23	cop	_	_
23	útil	útil	ADJ	ADJ|M|S|@<SC	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
24	»	»	PUNCT	PU|@PU	_	23	punct	_	SpaceAfter=No
25	.	.	PUNCT	PU|@PU	_	23	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.

465 nodes (0%) are attached to their parents as `iobj`.

382 instances of `iobj` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.63870967741935.

The following 9 pairs of parts of speech are connected with `iobj`: [pt-pos/VERB]()-[pt-pos/NOUN]() (248; 53% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (106; 23% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (103; 22% instances), [pt-pos/ADP]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/X]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 iobj	color:blue
1	O	_	DET	DET	_	2	det	_	_
2	veículo	_	NOUN	NOUN	_	3	nsubj	_	_
3	pertence	_	VERB	VERB	_	0	root	_	_
4	a	a	ADP	ADP	_	6	case	_	_
5	o	o	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	sogro	_	NOUN	NOUN	_	3	iobj	_	_
7	de	_	ADP	ADP	_	8	case	_	_
8	Roniere	_	PROPN	PNOUN	_	6	nmod	_	SpaceAfter=No
9	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 iobj	color:blue
1	Todos	_	DET	DET	_	3	det	_	_
2	os	_	DET	DET	_	3	det	_	_
3	centros	_	NOUN	NOUN	_	4	nsubj	_	_
4	pertencem	_	VERB	VERB	_	0	root	_	_
5	a	a	ADP	ADP	_	7	case	_	_
6	a	o	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	DRM	_	PROPN	PNOUN	_	4	iobj	_	_
8	-	_	PUNCT	.	_	7	punct	_	_
9	I	_	NUM	NUM	NumType=Card	7	appos	_	SpaceAfter=No
10	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 iobj	color:blue
1	Não	_	ADV	ADV	Polarity=Neg	2	advmod	_	_
2	faria	_	VERB	VERB	_	0	root	_	_
3	isso	_	PRON	PRON	_	2	obj	_	_
4	com	_	ADP	ADP	_	6	case	_	_
5	um	_	DET	DET	_	6	det	_	_
6	clube	_	NOUN	NOUN	_	2	nmod	_	_
7	que	_	PRON	PRON	_	9	nsubj	_	_
8	me	_	PRON	PRON	_	9	iobj	_	_
9	deu	_	VERB	VERB	_	6	acl:relcl	_	_
10	tanto	_	PRON	PRON	_	9	obj	_	SpaceAfter=No
11	.	_	PUNCT	.	_	2	punct	_	_

~~~


