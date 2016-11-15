

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-Bosque)

This relation is universal.

9 nodes (0%) are attached to their parents as `dislocated`.

8 instances of `dislocated` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.

The following 5 pairs of parts of speech are connected with `dislocated`: [pt-pos/VERB]()-[pt-pos/NOUN]() (5; 56% instances), [pt-pos/ADV]()-[pt-pos/DET]() (1; 11% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (1; 11% instances), [pt-pos/NUM]()-[pt-pos/PRON]() (1; 11% instances), [pt-pos/VERB]()-[pt-pos/DET]() (1; 11% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 dislocated	color:blue
1	As	o	DET	<artd>|ART|F|P|@>N	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	2	det	_	_
2	esculturas	escultura	NOUN	<np-def>|N|F|P|@TOP	Gender=Fem|Number=Plur	5	dislocated	_	_
3	,	,	PUNCT	PU|@PU	_	2	punct	_	_
4	ela	ela	PRON	PERS|F|3S|NOM|@SUBJ>	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
5	diz	dizer	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	que	que	SCONJ	KS|@SUB	_	7	mark	_	_
7	faz	fazer	VERB	<mv>|V|PR|3S|IND|@FS-<ACC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	ccomp	_	_
8	em	em	ADP	PRP|@<ADVL	_	10	case	_	_
9	seis	seis	NUM	<card>|NUM|M|P|@>N	_	10	nummod	_	_
10	meses	mês	NOUN	<np-def>|N|M|P|@P<	Gender=Masc|Number=Plur	7	nmod	_	_
11	.	.	PUNCT	PU|@PU	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 18 dislocated	color:blue
1	Obviamente	obviamente	ADV	ADV|@ADVL>	_	6	advmod	_	_
2	,	,	PUNCT	PU|@PU	_	1	punct	_	_
3	Carlos	Carlos	PROPN	PROP|M|S|@SUBJ>	Gender=Masc|Number=Sing	6	nsubj	_	MWE:Carlos=Resende
4	Resende	Resende	PROPN	PROP|@N<	Number=Sing	3	name	_	_
5	será	ser	VERB	<mv>|V|FUT|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	6	cop	_	_
6	uma	um	NUM	<card>|NUM|F|S|@<SC	_	0	root	_	_
7	de	de	ADP	<sam->|PRP|@A<	_	9	case	_	_
8	as	o	DET	<-sam>|<artd>|ART|F|P|@>N	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	9	det	_	_
9	peças	peça	NOUN	<np-def>|N|F|P|@P<	Gender=Fem|Number=Plur	6	nmod	_	_
10	fulcrais	fulcral	ADJ	ADJ|F|P|@N<	Gender=Fem|Number=Plur	9	amod	_	_
11	de	de	ADP	PRP|@N<	_	13	case	_	_
12	a	o	DET	<-sam>|<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	estratégia	estratégia	NOUN	<np-def>|N|F|S|@P<	Gender=Fem|Number=Sing	9	nmod	_	_
14	de	de	ADP	<sam->|PRP|@N<	_	16	case	_	_
15	os	o	DET	<-sam>|<artd>|ART|M|P|@>N	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	16	det	_	_
16	bracarenses	bracarense	NOUN	<np-def>|N|M|P|@P<	Gender=Masc|Number=Plur	13	nmod	_	_
17	,	,	PUNCT	PU|@PU	_	6	punct	_	_
18	ele	ele	PRON	PERS|M|3S|NOM|@TOP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	dislocated	_	_
19	que	que	PRON	<rel>|INDP|M|S|@SUBJ>	Gender=Masc|Number=Sing|PronType=Rel	22	nsubj	_	_
20	tem	ter	AUX	<aux>|V|PR|3S|IND|@FS-N<	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	aux	_	_
21	sido	ser	VERB	<mv>|<pc-ind>|V|PCP|@ICL-AUX<	VerbForm=Part	22	cop	_	_
22	um	um	NUM	<card>|NUM|M|S|@<SC	_	18	nmod	_	_
23	de	de	ADP	<sam->|PRP|@A<	_	26	case	_	_
24	os	o	DET	<-sam>|<artd>|ART|M|P|@>N	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	26	det	_	_
25	maiores	grande	ADJ	<KOMP>|<COMP>|ADJ|M|P|@>N	Gender=Masc|Number=Plur	26	amod	_	_
26	responsáveis	responsável	ADJ	<n>|<np-def>|ADJ|M|P|@P<	Gender=Masc|Number=Plur	22	nmod	_	_
27	por	por	ADP	<sam->|PRP|@N<	_	29	case	_	_
28	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	29	det	_	_
29	momento	momento	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	26	nmod	_	_
30	tranquilo	tranquilo	ADJ	ADJ|M|S|@N<	Gender=Masc|Number=Sing	29	amod	_	_
31	que	que	PRON	<rel>|INDP|M|S|@ACC>	Gender=Masc|Number=Sing|PronType=Rel	35	dobj	_	_
32	a	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	34	det	_	_
33	sua	seu	DET	<poss>|DET|F|S|@>N	Gender=Fem|Number=Sing	34	det	_	_
34	equipa	equipa	NOUN	<np-def>|N|F|S|@SUBJ>	Gender=Fem|Number=Sing	35	nsubj	_	_
35	atravessa	atravessar	VERB	<mv>|V|PR|3S|IND|@FS-N<	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	29	acl:relcl	_	_
36	em	em	ADP	<sam->|PRP|@<ADVL	_	38	case	_	_
37	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	38	det	_	_
38	campeonato	campeonato	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	35	nmod	_	_
39	nacional	nacional	ADJ	ADJ|M|S|@N<	Gender=Masc|Number=Sing	38	amod	_	_
40	--	--	PUNCT	PU|@PU	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 dislocated	color:blue
1	mas	mas	CONJ	KC|@CO	_	8	cc	_	_
2	a	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	coluna	coluna	NOUN	<np-def>|N|F|S|@SUBJ>	Gender=Fem|Number=Sing	8	nsubj	_	_
4	é	ser	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
5	ela	ele	PRON	PERS|F|3S|NOM|@TOP	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	dislocated	_	_
6	própria	próprio	DET	<ident>|DET|F|S|@N<	Gender=Fem|Number=Sing	5	det	_	_
7	uma	um	DET	<arti>|ART|F|S|@>N	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	metáfora	metáfora	NOUN	<np-idf>|N|F|S|@<SC	Gender=Fem|Number=Sing	0	root	_	_
9	de	de	ADP	<first-cjt>|<sam->|PRP|@N<	_	11	case	_	_
10	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	corpo	corpo	NOUN	<first-cjt>|<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	8	nmod	_	_
12	que	que	PRON	<rel>|INDP|M|S|@ACC>	Gender=Masc|Number=Sing|PronType=Rel	13	dobj	_	_
13	sustenta	sustentar	VERB	<mv>|V|PR|3S|IND|@FS-N<	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	acl:relcl	_	_
14	,	,	PUNCT	PU|@PU	_	11	punct	_	_
15	de	de	ADP	<cjt>|<sam->|PRP|@N<	_	17	case	_	_
16	a	o	DET	<-sam>|<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	_
17	força	força	NOUN	<np-def>|N|F|S|@P<	Gender=Fem|Number=Sing	11	conj	_	_
18	que	que	PRON	<rel>|INDP|F|S|@ACC>	Gender=Fem|Number=Sing|PronType=Rel	20	dobj	_	_
19	tudo	tudo	PRON	<quant>|INDP|M|S|@SUBJ>	Gender=Masc|Number=Sing|PronType=Ind	20	nsubj	_	_
20	suporta	suportar	VERB	<mv>|V|PR|3S|IND|@FS-N<	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	acl:relcl	_	_
21	.	.	PUNCT	PU|@PU	_	8	punct	_	_

~~~


