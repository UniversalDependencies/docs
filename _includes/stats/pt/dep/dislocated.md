

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

8 nodes (0%) are attached to their parents as `dislocated`.

7 instances of `dislocated` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.375.

The following 4 pairs of parts of speech are connected with `dislocated`: [pt-pos/VERB]()-[pt-pos/NOUN]() (5; 63% instances), [pt-pos/ADV]()-[pt-pos/DET]() (1; 13% instances), [pt-pos/NUM]()-[pt-pos/PRON]() (1; 13% instances), [pt-pos/VERB]()-[pt-pos/DET]() (1; 13% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 dislocated	color:blue
1	Os	o	DET	<artd>|ART|M|P|@>N	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	_	_
2	automobilistas	automobilista	NOUN	<np-def>|N|M|P|@TOP	Gender=Masc|Number=Plur	6	dislocated	_	SpaceAfter=No
3	,	,	PUNCT	PU|@PU	_	2	punct	_	_
4	esses	esse	PRON	<dem>|DET|M|P|@SUBJ>	Gender=Masc|Number=Plur|PronType=Dem	6	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	PU|@PU	_	4	punct	_	_
6	continuam	continuar	VERB	<mv>|V|PR|3P|IND|@FS-STA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	a	a	ADP	<sam->|PRP|@<ADVL	_	9	case	_	_
8	a	o	DET	<-sam>|<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	espera	espera	NOUN	<np-def>|N|F|S|@P<	Gender=Fem|Number=Sing	6	obl	_	_
10	...	...	PUNCT	PU|@PU	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 18 dislocated	color:blue
1	Obviamente	obviamente	ADV	ADV|@ADVL>	_	6	advmod	_	SpaceAfter=No
2	,	,	PUNCT	PU|@PU	_	1	punct	_	_
3	Carlos	Carlos	PROPN	_	Gender=Masc|Number=Sing	6	nsubj	_	MWE=Carlos_Resende|MWEPOS=PROPN
4	Resende	Resende	PROPN	_	Number=Sing	3	flat:name	_	_
5	será	ser	AUX	<mv>|V|FUT|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	6	cop	_	_
6	uma	um	NUM	<card>|NUM|F|S|@<SC	NumType=Card	0	root	_	_
7	de	de	ADP	<sam->|PRP|@A<	_	9	case	_	_
8	as	o	DET	<-sam>|<artd>|ART|F|P|@>N	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	9	det	_	_
9	peças	peça	NOUN	<np-def>|N|F|P|@P<	Gender=Fem|Number=Plur	6	nmod	_	_
10	fulcrais	fulcral	ADJ	ADJ|F|P|@N<	Gender=Fem|Number=Plur	9	amod	_	_
11	de	de	ADP	PRP|@N<	_	13	case	_	_
12	a	o	DET	<-sam>|<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	estratégia	estratégia	NOUN	<np-def>|N|F|S|@P<	Gender=Fem|Number=Sing	9	nmod	_	_
14	de	de	ADP	<sam->|PRP|@N<	_	16	case	_	_
15	os	o	DET	<-sam>|<artd>|ART|M|P|@>N	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	16	det	_	_
16	bracarenses	bracarense	NOUN	<np-def>|N|M|P|@P<	Gender=Masc|Number=Plur	13	nmod	_	SpaceAfter=No
17	,	,	PUNCT	PU|@PU	_	6	punct	_	_
18	ele	ele	PRON	PERS|M|3S|NOM|@TOP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	dislocated	_	_
19	que	que	PRON	<rel>|INDP|M|S|@SUBJ>	Gender=Masc|Number=Sing|PronType=Rel	22	nsubj	_	_
20	tem	ter	AUX	<aux>|V|PR|3S|IND|@FS-N<	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	aux	_	_
21	sido	ser	AUX	<mv>|<pc-ind>|V|PCP|@ICL-AUX<	VerbForm=Part	22	cop	_	_
22	um	um	NUM	<card>|NUM|M|S|@<SC	NumType=Card	18	nmod	_	_
23	de	de	ADP	<sam->|PRP|@A<	_	26	case	_	_
24	os	o	DET	<-sam>|<artd>|ART|M|P|@>N	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	26	det	_	_
25	maiores	grande	ADJ	<KOMP>|<COMP>|ADJ|M|P|@>N	Gender=Masc|Number=Plur	26	amod	_	_
26	responsáveis	responsável	ADJ	<n>|<np-def>|ADJ|M|P|@P<	Gender=Masc|Number=Plur	22	nmod	_	_
27	por	por	ADP	<sam->|PRP|@N<	_	29	case	_	_
28	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	29	det	_	_
29	momento	momento	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	26	obl	_	_
30	tranquilo	tranquilo	ADJ	ADJ|M|S|@N<	Gender=Masc|Number=Sing	29	amod	_	_
31	que	que	PRON	<rel>|INDP|M|S|@ACC>	Gender=Masc|Number=Sing|PronType=Rel	35	obj	_	_
32	a	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	34	det	_	_
33	sua	seu	DET	<poss>|DET|F|S|@>N	Gender=Fem|Number=Sing|PronType=Prs	34	det	_	_
34	equipa	equipa	NOUN	<np-def>|N|F|S|@SUBJ>	Gender=Fem|Number=Sing	35	nsubj	_	_
35	atravessa	atravessar	VERB	<mv>|V|PR|3S|IND|@FS-N<	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	29	acl:relcl	_	_
36	em	em	ADP	<sam->|PRP|@<ADVL	_	38	case	_	_
37	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	38	det	_	_
38	campeonato	campeonato	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	35	obl	_	_
39	nacional	nacional	ADJ	ADJ|M|S|@N<	Gender=Masc|Number=Sing	38	amod	_	_
40	--	--	PUNCT	PU|@PU	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 dislocated	color:blue
1	O	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	PCP	PCP	PROPN	PROP|M|S|@SUBJ>	Gender=Masc|Number=Sing	8	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	PU|@PU	_	2	punct	_	_
4	esse	esse	DET	<dem>|DET|M|S|@TOP	Gender=Masc|Number=Sing|PronType=Dem	8	dislocated	_	SpaceAfter=No
5	,	,	PUNCT	PU|@PU	_	4	punct	_	_
6	está	estar	AUX	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
7	sempre	sempre	ADV	ADV|@>A	_	8	advmod	_	_
8	bem	bem	ADV	<first-cjt>|<quant>|ADV|@<SC	_	0	root	_	_
9	e	e	CCONJ	<co-sc>|KC|@CO	_	12	cc	_	_
10	com	com	ADP	<cjt>|PRP|@<SC	_	12	case	_	_
11	pouco	pouco	DET	<quant>|DET|M|S|@>N	Gender=Masc|Number=Sing|PronType=Ind	12	det	_	_
12	trabalho	trabalho	NOUN	<np-idf>|N|M|S|@P<	Gender=Masc|Number=Sing	8	conj	_	_
13	por	por	ADP	<sam->|PRP|@N<	_	15	case	_	_
14	a	o	DET	<-sam>|<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	frente	frente	NOUN	<np-def>|N|F|S|@P<	Gender=Fem|Number=Sing	12	nmod	_	SpaceAfter=No
16	.	.	PUNCT	PU|@PU	_	8	punct	_	_

~~~


