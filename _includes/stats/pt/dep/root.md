

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

8891 nodes (4%) are attached to their parents as `root`.

8891 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.93746485209763.

The following 13 pairs of parts of speech are connected with `root`: [pt-pos/ROOT]()-[pt-pos/VERB]() (6442; 72% instances), [pt-pos/ROOT]()-[pt-pos/NOUN]() (1318; 15% instances), [pt-pos/ROOT]()-[pt-pos/ADJ]() (535; 6% instances), [pt-pos/ROOT]()-[pt-pos/PROPN]() (311; 3% instances), [pt-pos/ROOT]()-[pt-pos/PRON]() (123; 1% instances), [pt-pos/ROOT]()-[pt-pos/ADV]() (66; 1% instances), [pt-pos/ROOT]()-[pt-pos/NUM]() (47; 1% instances), [pt-pos/ROOT]()-[pt-pos/SYM]() (22; 0% instances), [pt-pos/ROOT]()-[pt-pos/INTJ]() (12; 0% instances), [pt-pos/ROOT]()-[pt-pos/DET]() (10; 0% instances), [pt-pos/ROOT]()-[pt-pos/X]() (3; 0% instances), [pt-pos/ROOT]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/ROOT]()-[pt-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 8 root	color:blue
1	Audiência	audiência	NOUN	<np-idf>|N|F|S|@SUBJ>	Gender=Fem|Number=Sing	8	nsubj	_	_
2	em	em	ADP	<sam->|PRP|@N<	_	4	case	_	_
3	a	o	DET	<-sam>|<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	Justiça	justiça	NOUN	<prop>|<np-def>|N|F|S|@P<	Gender=Fem|Number=Sing	1	nmod	_	_
5	de	de	ADP	<sam->|PRP|@N<	_	7	case	_	_
6	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	Pará	Pará	PROPN	PROP|M|S|@P<	Gender=Masc|Number=Sing	4	nmod	_	_
8	discute	discutir	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	diploma	diploma	NOUN	<np-idf>|N|M|S|@<ACC	Gender=Masc|Number=Sing	8	obj	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 8 root	color:blue
1	De	de	ADP	<sam->|PRP|@ADVL>	_	3	case	_	_
2	os	o	DET	<-sam>|<artd>|ART|M|P|@>N	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	_	_
3	fumantes	fumante	NOUN	<np-def>|N|M|P|@P<	Gender=Masc|Number=Plur	8	nmod	_	SpaceAfter=No
4	,	,	PUNCT	PU|@PU	_	3	punct	_	_
5	18,1	18,1	NUM	<card>|NUM|M|P|@>N	NumType=Card	6	nummod	_	_
6	milhões	milhão	NOUN	<np-def>|N|M|P|@SUBJ>	Gender=Masc|Number=Plur	8	nsubj	_	_
7	são	ser	AUX	<first-cjt>|<mv>|V|PR|3P|IND|@FS-STA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	homens	homem	NOUN	<np-idf>|N|M|P|@<SC	Gender=Masc|Number=Plur	0	root	_	_
9	e	e	CCONJ	<co-fcl>|KC|@CO	_	8	cc	_	_
10	12,5	12,5	NUM	<card>|NUM|M|P|@>N	NumType=Card	11	nummod	_	_
11	milhões	milhão	NOUN	<np-def>|N|M|P|@SUBJ>	Gender=Masc|Number=Plur	6	nsubj	_	SpaceAfter=No
12	,	,	PUNCT	PU|@PU	_	8	punct	_	_
13	mulheres	mulher	NOUN	<np-idf>|N|F|P|@<SC	Gender=Fem|Number=Plur	8	conj	_	SpaceAfter=No
14	.	.	PUNCT	PU|@PU	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	Ele	ele	PRON	PERS|M|3S|NOM|@SUBJ>	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	estava	estar	AUX	<mv>|V|IMPF|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	cop	_	_
3	acompanhados	acompanhado	ADJ	<mv>|V|PCP|M|P|@ICL-<SC	Gender=Masc|Number=Plur	0	root	_	_
4	de	de	ADP	PRP|@<PIV	_	6	case	_	_
5	três	três	NUM	<card>|NUM|M|P|@>N	NumType=Card	6	nummod	_	_
6	agentes	agente	NOUN	<np-def>|N|M|P|@P<	Gender=Masc|Number=Plur	3	obl	_	_
7	de	de	ADP	<sam->|PRP|@N<	_	9	case	_	_
8	a	o	DET	<-sam>|<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	PF	PF	PROPN	PROP|F|S|@P<	Gender=Fem|Number=Sing	6	nmod	_	SpaceAfter=No
10	.	.	PUNCT	PU|@PU	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.

10874 nodes (4%) are attached to their parents as `root`.

10874 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.93047636564282.

The following 11 pairs of parts of speech are connected with `root`: [pt-pos/ROOT]()-[pt-pos/VERB]() (9337; 86% instances), [pt-pos/ROOT]()-[pt-pos/NOUN]() (1188; 11% instances), [pt-pos/ROOT]()-[pt-pos/PROPN]() (152; 1% instances), [pt-pos/ROOT]()-[pt-pos/PRON]() (150; 1% instances), [pt-pos/ROOT]()-[pt-pos/NUM]() (14; 0% instances), [pt-pos/ROOT]()-[pt-pos/PART]() (11; 0% instances), [pt-pos/ROOT]()-[pt-pos/ADJ]() (8; 0% instances), [pt-pos/ROOT]()-[pt-pos/X]() (5; 0% instances), [pt-pos/ROOT]()-[pt-pos/ADV]() (4; 0% instances), [pt-pos/ROOT]()-[pt-pos/AUX]() (3; 0% instances), [pt-pos/ROOT]()-[pt-pos/DET]() (2; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Ver	_	VERB	VERB	_	0	root	_	_
2	também	_	ADV	ADV	_	1	advmod	_	_
3	a	_	DET	DET	_	4	det	_	_
4	lista	_	NOUN	NOUN	_	1	obj	_	_
5	de	_	ADP	ADP	_	6	case	_	_
6	entidades	_	NOUN	NOUN	_	4	nmod	_	_
7	que	_	PRON	PRON	_	9	nsubj	_	_
8	tenham	_	AUX	AUX	_	9	aux	_	_
9	emitido	_	VERB	VERB	_	6	acl:relcl	_	_
10	selos	_	NOUN	NOUN	_	9	obj	_	_
11	postais	_	ADJ	ADJ	_	10	amod	_	SpaceAfter=No
12	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
1	A	_	DET	DET	_	2	det	_	_
2	Nina	_	PROPN	PNOUN	_	5	nsubj	_	_
3	é	_	VERB	VERB	_	5	cop	_	_
4	a	_	DET	DET	_	5	det	_	_
5	chance	_	NOUN	NOUN	_	0	root	_	_
6	de	_	ADP	ADP	_	8	mark	_	_
7	ele	_	PRON	PRON	_	8	nsubj	_	_
8	ser	_	VERB	VERB	_	5	nmod	_	_
9	feliz	_	ADJ	ADJ	_	8	xcomp:adj	_	SpaceAfter=No
10	.	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
1	Com	_	ADP	ADP	_	3	case	_	_
2	menor	_	ADJ	ADJ	_	3	amod	_	_
3	índice	_	NOUN	NOUN	_	5	nmod	_	SpaceAfter=No
4	,	_	PUNCT	.	_	3	punct	_	_
5	Piauí	_	PROPN	PNOUN	_	0	root	_	SpaceAfter=No
6	,	_	PUNCT	.	_	7	punct	_	_
7	Santa	_	PROPN	PNOUN	_	5	conj	_	_
8	Catarina	_	PROPN	PNOUN	_	7	flat	_	_
9	e	_	CCONJ	CONJ	_	10	cc	_	_
10	Alagoas	_	PROPN	PNOUN	_	5	conj	_	SpaceAfter=No
11	.	_	PUNCT	.	_	5	punct	_	_

~~~


