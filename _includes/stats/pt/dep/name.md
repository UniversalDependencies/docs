

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

6843 nodes (3%) are attached to their parents as `name`.

6843 instances of `name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.78752009352623.

The following 12 pairs of parts of speech are connected with `name`: [pt-pos/PROPN]()-[pt-pos/PROPN]() (6663; 97% instances), [pt-pos/ADJ]()-[pt-pos/PROPN]() (60; 1% instances), [pt-pos/DET]()-[pt-pos/PROPN]() (44; 1% instances), [pt-pos/PROPN]()-[pt-pos/ADJ]() (33; 0% instances), [pt-pos/NUM]()-[pt-pos/PROPN]() (25; 0% instances), [pt-pos/X]()-[pt-pos/PROPN]() (7; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADP]() (3; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADV]() (3; 0% instances), [pt-pos/PROPN]()-[pt-pos/CONJ]() (2; 0% instances), [pt-pos/CONJ]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/DET]() (1; 0% instances), [pt-pos/X]()-[pt-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 name	color:blue
1	Um	um	NUM	num|<card>|M|S	Gender=Masc|Number=Sing|NumType=Card	6	nsubj	_	_
2	de	de	ADP	prp|<sam->	AdpType=Prep	3	case	_	_
3	eles	eles	PRON	pron-pers|<-sam>|M|3P|NOM/PIV	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs	1	nmod	_	_
4	era	ser	VERB	v-fin|IMPF|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	cop	_	_
5	seu	seu	DET	pron-det|<poss|3S>|M|S	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	6	det	_	_
6	filho	filho	NOUN	n|M|S	Gender=Masc|Number=Sing	0	root	_	_
7	,	,	PUNCT	punc	_	6	punct	_	_
8	Sérgio	Sérgio	PROPN	prop|M|S	_	6	appos	_	MWE=Sérgio_Fioravanti|MWEPOS=PROPN
9	Fioravanti	Fioravanti	PROPN	PROPN	_	8	name	_	_
10	.	.	PUNCT	punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 name	color:blue
1	Grande	Grande	ADJ	prop|M|S	Gender=Masc|Number=Sing	0	root	_	MWE=Grande_Prémio_de_Itália_de_motociclismo|MWEPOS=PROPN
2	Prémio	Prémio	PROPN	PROPN	_	1	name	_	_
3	de	de	ADP	ADP	AdpType=Prep	4	case	_	_
4	Itália	Itália	PROPN	PROPN	_	1	name	_	_
5	de	de	ADP	ADP	AdpType=Prep	6	case	_	_
6	motociclismo	motociclismo	PROPN	PROPN	_	1	name	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 name	color:blue
1	«	«	PUNCT	punc	_	2	punct	_	_
2	A	A	DET	prop|F|S	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	MWE=A_Feira_de_Sorotchinetz|MWEPOS=PROPN
3	Feira	Feira	PROPN	PROPN	_	0	root	_	_
4	de	de	ADP	ADP	AdpType=Prep	5	case	_	_
5	Sorotchinetz	Sorotchinetz	PROPN	PROPN	_	2	name	_	_
6	»	»	PUNCT	punc	_	2	punct	_	_
7	,	,	PUNCT	punc	_	2	punct	_	_
8	Nicolau	Nicolau	PROPN	prop|M|S	_	2	nmod	_	MWE=Nicolau_Gogol|MWEPOS=PROPN
9	Gogol	Gogol	PROPN	PROPN	_	8	name	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-Bosque)

This relation is universal.

5774 nodes (3%) are attached to their parents as `name`.

5774 instances of `name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.27623830966401.

The following 2 pairs of parts of speech are connected with `name`: [pt-pos/PROPN]()-[pt-pos/PROPN]() (5756; 100% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (18; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 name	color:blue
1	Reis	Reis	PROPN	PROP|M|S|@SUBJ>	Gender=Masc|Number=Sing	3	nsubj	_	_
2	não	não	ADV	ADV|@ADVL>	_	3	neg	_	_
3	quis	querer	VERB	<mv>|V|PS|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	dizer	dizer	VERB	<mv>|V|INF|@ICL-<ACC	VerbForm=Inf	3	xcomp	_	_
5	se	se	SCONJ	KS|@SUB	_	7	mark	_	_
6	também	também	ADV	ADV|@ADVL>	_	7	advmod	_	_
7	abandonará	abandonar	VERB	<mv>|V|FUT|3S|IND|@FS-<ACC	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	ccomp	_	_
8	Esperidião	Esperidião	PROPN	PROP|M|S|@<ACC	Gender=Masc|Number=Sing	7	dobj	_	MWE:Esperidião=Amin
9	Amin	Amin	PROPN	PROP|@N<	Number=Sing	8	name	_	_
10	.	.	PUNCT	PU|@PU	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 27 name	color:blue
1	Apesar	Apesar	ADV	ADV|@ADVL>	_	31	advmod	_	MWE:Apesar=de
2	de	de	ADP	PRP|@A<	_	4	case	_	_
3	algumas	algum	DET	<quant>|DET|F|P|@>N	Gender=Fem|Number=Plur	4	det	_	_
4	informações	informação	NOUN	<np-idf>|N|F|P|@P<	Gender=Fem|Number=Plur	1	nmod	_	_
5	que	que	PRON	<rel>|INDP|F|P|@PIV>	Gender=Fem|Number=Plur|PronType=Rel	6	dep	_	_
6	dão	dar	VERB	<mv>|V|PR|3P|IND|@FS-N<	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	_
7	conta	conta	NOUN	<np-idf>|N|M|S|@<ACC	Gender=Masc|Number=Sing	6	dobj	_	_
8	alguns	algum	DET	<quant>|DET|M|P|@>N	Gender=Masc|Number=Plur	9	det	_	_
9	casos	caso	NOUN	<np-idf>|N|M|P|@<SUBJ	Gender=Masc|Number=Plur	6	nsubj	_	_
10	em	em	ADP	PRP|@ADVL>	_	11	case	_	_
11	que	que	PRON	<rel>|INDP|F|P|@P<	Gender=Fem|Number=Plur|PronType=Rel	17	nmod	_	_
12	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	nome	nome	NOUN	<np-def>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	17	nsubj	_	_
14	de	de	ADP	<sam->|PRP|@N<ARG	_	16	case	_	_
15	a	o	DET	<-sam>|<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	firma	firma	NOUN	<np-def>|N|F|S|@P<	Gender=Fem|Number=Sing	13	nmod	_	_
17	aparece	aparecer	VERB	<mv>|V|PR|3S|IND|@FS-N<	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	acl:relcl	_	_
18	citado	citar	VERB	<mv>|V|PCP|M|S|@ICL-<PRED	Gender=Masc|Number=Sing|VerbForm=Part	17	dep	_	_
19	,	,	PUNCT	PU|@PU	_	18	punct	_	_
20	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	_	_
21	presidente	presidente	NOUN	<np-def>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	31	nsubj	_	MWE:presidente=da=Câmara=de=Alcobaça=,
22	de	de	ADP	<sam->|PRP|@N<	_	24	case	_	_
23	a	o	DET	<artd>|<-sam>|DET|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	24	det	_	_
24	Câmara	Câmara	NOUN	N|@P<	_	21	nmod	_	_
25	de	de	ADP	PRP|@N<	_	26	case	_	_
26	Alcobaça	Alcobaça	NOUN	N|@P<	_	24	nmod	_	MWE:Alcobaça=,
27	,	,	PROPN	PROP|@N<	Number=Sing	26	name	_	_
28	Miguel	Miguel	PROPN	PROP|M|S|@APP	Gender=Masc|Number=Sing	21	appos	_	MWE:Miguel=Guerra
29	Guerra	Guerra	PROPN	PROP|@N<	Number=Sing	28	name	_	_
30	,	,	PUNCT	PU|@PU	_	18	punct	_	_
31	referiu	referir	VERB	<mv>|V|PS|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
32	que	que	SCONJ	KS|@SUB	_	18	mark	_	_
33	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	34	det	_	_
34	contrato	contrato	NOUN	<np-def>|N|M|S|@<SUBJ	Gender=Masc|Number=Sing	18	nsubj	_	_
35	ainda	ainda	ADV	ADV|@>A	_	36	advmod	_	_
36	não	não	ADV	ADV|@<ADVL	_	18	neg	_	_
37	estava	estar	VERB	<first-cjt>|<mv>|V|IMPF|3S|IND|@FS-<ACC	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	38	cop	_	_
38	assinado	assinar	VERB	<mv>|V|PCP|M|S|@ICL-<SC	Gender=Masc|Number=Sing|VerbForm=Part	18	dep	_	_
39	,	,	PUNCT	PU|@PU	_	38	punct	_	_
40	e	e	CONJ	<co-fcl>|<co-vfin>|KC|@CO	_	18	cc	_	_
41	que	que	SCONJ	KS|@SUB	_	46	mark	_	_
42	«	«	PUNCT	PU|@PU	_	46	punct	_	_
43	a	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	44	det	_	_
44	empresa	empresa	NOUN	<np-def>|N|F|S|@SUBJ>	Gender=Fem|Number=Sing	46	nsubj	_	_
45	tem	ter	AUX	<cjt>|<aux>|V|PR|3S|IND|@ICL-N<	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	46	aux	_	_
46	tido	ter	VERB	<mv>|<pc-ind>|V|PCP|@ICL-AUX<	VerbForm=Part	18	acl	_	_
47	um	um	DET	<arti>|ART|M|S|@>N	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	48	det	_	_
48	comportamento	comportamento	NOUN	<np-idf>|N|M|S|@<ACC	Gender=Masc|Number=Sing	46	dobj	_	_
49	impecável	impecável	ADJ	ADJ|M|S|@N<	Gender=Masc|Number=Sing	48	amod	_	_
50	com	com	ADP	PRP|@<ADVL	_	52	case	_	_
51	a	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	52	det	_	_
52	Câmara	Câmara	PROPN	PROP|F|S|@P<	Gender=Fem|Number=Sing	46	nmod	_	_
53	»	»	PUNCT	PU|@PU	_	46	punct	_	_
54	.	.	PUNCT	PU|@PU	_	31	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.

6540 nodes (2%) are attached to their parents as `name`.

6540 instances of `name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.33669724770642.

The following 24 pairs of parts of speech are connected with `name`: [pt-pos/PROPN]()-[pt-pos/PROPN]() (5465; 84% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (626; 10% instances), [pt-pos/PART]()-[pt-pos/NOUN]() (236; 4% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (75; 1% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (48; 1% instances), [pt-pos/X]()-[pt-pos/X]() (35; 1% instances), [pt-pos/NUM]()-[pt-pos/PROPN]() (15; 0% instances), [pt-pos/PART]()-[pt-pos/PROPN]() (15; 0% instances), [pt-pos/X]()-[pt-pos/PROPN]() (4; 0% instances), [pt-pos/ADP]()-[pt-pos/PROPN]() (3; 0% instances), [pt-pos/X]()-[pt-pos/NOUN]() (3; 0% instances), [pt-pos/PART]()-[pt-pos/ADJ]() (2; 0% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/ADP]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/PART]()-[pt-pos/PART]() (1; 0% instances), [pt-pos/PART]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/PART]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/X]() (1; 0% instances), [pt-pos/X]()-[pt-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 name	color:blue
1	As	_	DET	DET	_	2	det	_	_
2	informações	_	NOUN	NOUN	_	3	nsubj	_	_
3	são	_	VERB	VERB	_	0	root	_	_
4	do	_	ADP	ADP	_	5	case	_	_
5	jornal	_	NOUN	NOUN	_	3	nmod	_	_
6	O	_	DET	DET	_	7	det	_	_
7	Estado	_	PROPN	PNOUN	_	5	appos	_	_
8	de	_	ADP	ADP	_	9	case	_	_
9	S.	_	PROPN	PNOUN	_	7	nmod	_	_
10	Paulo	_	PROPN	PNOUN	_	9	name	_	_
11	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 name	color:blue
1	Já	_	ADV	ADV	_	6	advmod	_	_
2	um	_	DET	DET	_	3	det	_	_
3	aborto	_	NOUN	NOUN	_	6	nsubj	_	_
4	legal	_	ADJ	ADJ	_	3	amod	_	_
5	era	_	VERB	VERB	_	6	cop	_	_
6	r	_	NOUN	NOUN	_	0	root	_	_
7	$	_	NOUN	NOUN	_	6	name	_	_
8	2400	_	NUM	NUM	NumType=Card	6	nummod	_	_
9	)	_	PUNCT	.	_	6	punct	_	_
10	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 name	color:blue
1	Luizianne	_	PROPN	PNOUN	_	0	root	_	_
2	e	_	CONJ	CONJ	_	1	cc	_	_
3	seu	_	DET	DET	_	8	det:poss	_	_
4	,	_	PUNCT	.	_	6	punct	_	_
5	até	_	ADP	ADP	_	6	mark	_	_
6	então	_	ADV	ADV	_	8	nmod	_	_
7	,	_	PUNCT	.	_	6	punct	_	_
8	arqui	_	PART	PRT	_	1	conj	_	_
9	-	_	PUNCT	.	_	8	punct	_	_
10	Inimigo	_	NOUN	NOUN	_	8	name	_	_
11	Tasso	_	PROPN	PNOUN	_	8	appos	_	_
12	Jereissati	_	PROPN	PNOUN	_	11	name	_	_
13	.	_	PUNCT	.	_	1	punct	_	_

~~~


