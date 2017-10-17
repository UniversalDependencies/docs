

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

7 nodes (0%) are attached to their parents as `orphan`.

7 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.14285714285714.

The following 6 pairs of parts of speech are connected with `orphan`: [pt-pos/NOUN]()-[pt-pos/NOUN]() (2; 29% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (1; 14% instances), [pt-pos/NOUN]()-[pt-pos/NUM]() (1; 14% instances), [pt-pos/NOUN]()-[pt-pos/SYM]() (1; 14% instances), [pt-pos/PROPN]()-[pt-pos/NUM]() (1; 14% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (1; 14% instances).


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 20 orphan	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 orphan	color:blue
1	O	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	Opala	opala	NOUN	<prop>|<np-def>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	3	nsubj	_	_
3	durou	durar	VERB	<first-cjt>|<mv>|V|PS|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	23	23	NUM	<card>|NUM|M|P|@>N	NumType=Card	5	nummod	_	_
5	anos	ano	NOUN	<np-def>|N|M|P|@<SA	Gender=Masc|Number=Plur	3	obj	_	SpaceAfter=No
6	,	,	PUNCT	PU|@PU	_	3	punct	_	_
7	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	Chevette	Chevette	PROPN	PROP|M|S|@SUBJ>	Gender=Masc|Number=Sing	3	parataxis	_	SpaceAfter=No
9	,	,	PUNCT	PU|@PU	_	8	punct	_	_
10	20	20	NUM	<card>|<Eg>|NUM|M|P|@<SA	NumType=Card	8	orphan	_	SpaceAfter=No
11	,	,	PUNCT	PU|@PU	_	10	punct	_	_
12	a	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	Kombi	Kombi	PROPN	PROP|F|S|@SUBJ>	Gender=Fem|Number=Sing	14	nsubj	_	_
14	segue	seguir	VERB	<cjt>|<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	parataxis	_	_
15	firme	firme	ADJ	<mente>|ADJ|F|S|@<ADVL	Gender=Fem|Number=Sing	14	advmod	_	_
16	desde	desde	ADP	PRP|@<ADVL	_	17	case	_	_
17	1957	1957	NUM	<year>|<card>|<date>|NUM|M|S|@P<	NumType=Card	14	obl	_	SpaceAfter=No
18	.	.	PUNCT	PU|@PU	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 26 orphan	color:blue
1	Dizia	dizer	VERB	<first-cjt>|<mv>|V|IMPF|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
2	se	se	PRON	PERS|M/F|3S/P|ACC|@<SUBJ	Case=Acc|Gender=Unsp|PronType=Prs	1	nsubj	_	_
3	que	que	SCONJ	KS|@SUB	_	12	mark	_	_
4	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	Carlos	Carlos	PROPN	_	Gender=Masc|Number=Sing	12	nsubj	_	MWE=Carlos_Resende|MWEPOS=PROPN
6	Resende	Resende	PROPN	_	Number=Sing	5	flat:name	_	_
7	e	e	CCONJ	<co-subj>|KC|@CO	_	9	cc	_	_
8	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	Filipe	Filipe	PROPN	_	Gender=Masc|Number=Sing	5	conj	_	MWE=Filipe_Cruz|MWEPOS=PROPN
10	Cruz	Cruz	PROPN	_	Number=Sing	9	flat:name	_	_
11	podiam	poder	AUX	<first-cjt>|<aux>|V|IMPF|3P|IND|@FS-<ACC	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	12	aux	_	_
12	ir	ir	VERB	<mv>|V|INF|@ICL-AUX<	VerbForm=Inf	1	ccomp	_	_
13	para	para	ADP	PRP|@<SA	_	15	case	_	_
14	a	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	Alemanha	Alemanha	PROPN	PROP|F|S|@P<	Gender=Fem|Number=Sing	12	obl	_	_
16	e	e	CCONJ	<co-fcl>|<co-fmc>|<co-vfin>|KC|@CO	_	12	cc	_	_
17	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	_	_
18	Carlos	Carlos	PROPN	_	Gender=Masc|Number=Sing	12	conj	_	MWE=Carlos_Galambas|MWEPOS=PROPN
19	Galambas	Galambas	PROPN	_	Number=Sing	18	flat:name	_	_
20	e	e	CCONJ	<co-cjt>|<co-subj>|KC|@CO	_	22	cc	_	_
21	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	_	_
22	Álvaro	Álvaro	PROPN	_	Gender=Masc|Number=Sing	18	conj	_	MWE=Álvaro_Martins|MWEPOS=PROPN
23	Martins	Martins	PROPN	_	Number=Sing	22	flat:name	_	_
24	para	para	ADP	<cjt>|PRP|@<SA	_	26	case	_	_
25	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	26	det	_	_
26	Benfica	Benfica	PROPN	PROP|M|S|@P<	Gender=Masc|Number=Sing	18	orphan	_	SpaceAfter=No
27	,	,	PUNCT	PU|@PU	_	30	punct	_	_
28	mas	mas	CCONJ	<co-fcl>|<co-fmc>|<co-vfin>|KC|@CO	_	30	cc	_	_
29	é	ser	AUX	<cjt>|<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	30	cop	_	_
30	mentira	mentira	NOUN	<np-idf>|N|F|S|@<SC	Gender=Fem|Number=Sing	1	conj	_	SpaceAfter=No
31	.	.	PUNCT	PU|@PU	_	1	punct	_	_

~~~


