

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.
There are 1 language-specific subtypes of `aux`: [aux:pass]().

2345 nodes (1%) are attached to their parents as `aux`.

2329 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.87121535181237.

The following 10 pairs of parts of speech are connected with `aux`: [pt-pos/VERB]()-[pt-pos/AUX]() (2160; 92% instances), [pt-pos/ADJ]()-[pt-pos/AUX]() (84; 4% instances), [pt-pos/NOUN]()-[pt-pos/AUX]() (76; 3% instances), [pt-pos/PRON]()-[pt-pos/AUX]() (13; 1% instances), [pt-pos/NUM]()-[pt-pos/AUX]() (4; 0% instances), [pt-pos/ADV]()-[pt-pos/AUX]() (3; 0% instances), [pt-pos/ADP]()-[pt-pos/AUX]() (2; 0% instances), [pt-pos/AUX]()-[pt-pos/AUX]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/AUX]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
1	O	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	bombeiro	bombeiro	NOUN	<np-def>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	3	nsubj	_	_
3	suspeita	suspeitar	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	que	que	SCONJ	KS|@SUB	_	8	mark	_	_
5	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	golfinho	golfinho	NOUN	<np-def>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	8	nsubj	_	_
7	tenha	ter	AUX	<aux>|V|PR|3S|SUBJ|@FS-<ACC	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	morrido	morrer	VERB	<mv>|<pc-subj>|V|PCP|@ICL-AUX<	VerbForm=Part	3	ccomp	_	_
9	afogado	afogar	VERB	<mv>|V|PCP|M|S|@ICL-<ADVL	Gender=Masc|Number=Sing|VerbForm=Part	8	advcl	_	SpaceAfter=No
10	.	.	PUNCT	PU|@PU	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 aux	color:blue
1	«	«	PUNCT	PU|@PU	_	7	punct	_	SpaceAfter=No
2	A	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	situação	situação	NOUN	<np-def>|N|F|S|@SUBJ>	Gender=Fem|Number=Sing	7	nsubj	_	_
4	pode	poder	AUX	<aux>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
5	ser	ser	AUX	<mv>|V|INF|@ICL-AUX<	VerbForm=Inf	7	cop	_	_
6	potencialmente	potencialmente	ADV	ADV|@>A	_	7	advmod	_	_
7	horrível	horrível	ADJ	ADJ|F|S|@<SC	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
8	.	.	PUNCT	PU|@PU	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 aux	color:blue
1	«	«	PUNCT	PU|@PU	_	6	punct	_	SpaceAfter=No
2	Senão	senão	ADV	ADV|@ADVL>	_	6	advmod	_	_
3	ele	ele	PRON	PERS|M|3S|NOM|@SUBJ>	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
4	vai	ir	AUX	<aux>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
5	ser	ser	AUX	<mv>|V|INF|@ICL-AUX<	VerbForm=Inf	6	cop	_	_
6	alvo	alvo	NOUN	<np-idf>|N|M|S|@<SC	Gender=Masc|Number=Sing	0	root	_	_
7	fácil	fácil	ADJ	ADJ|M|S|@N<	Gender=Masc|Number=Sing	6	amod	_	_
8	de	de	ADP	<sam->|PRP|@N<	_	10	case	_	_
9	as	o	DET	<-sam>|<artd>|ART|F|P|@>N	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	10	det	_	_
10	críticas	crítica	NOUN	<np-def>|N|F|P|@P<	Gender=Fem|Number=Plur	6	nmod	_	_
11	se	se	SCONJ	KS|@SUB	_	14	mark	_	_
12	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	time	time	NOUN	<np-def>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	14	nsubj	_	_
14	perder	perder	VERB	<mv>|V|FUT|3S|SUBJ|@FS-<ADVL	Mood=Sub|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	6	advcl	_	SpaceAfter=No
15	.	.	PUNCT	PU|@PU	_	6	punct	_	SpaceAfter=No
16	»	»	PUNCT	PU|@PU	_	6	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.
There are 1 language-specific subtypes of `aux`: [aux:pass]().

2533 nodes (1%) are attached to their parents as `aux`.

2527 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.52112120015792.

The following 7 pairs of parts of speech are connected with `aux`: [pt-pos/VERB]()-[pt-pos/AUX]() (2428; 96% instances), [pt-pos/NOUN]()-[pt-pos/AUX]() (68; 3% instances), [pt-pos/PRON]()-[pt-pos/AUX]() (11; 0% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (11; 0% instances), [pt-pos/VERB]()-[pt-pos/VERB]() (8; 0% instances), [pt-pos/PROPN]()-[pt-pos/AUX]() (6; 0% instances), [pt-pos/AUX]()-[pt-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 aux	color:blue
1	"	_	PUNCT	.	_	7	punct	_	SpaceAfter=No
2	Eles	_	PRON	PRON	_	7	nsubj:pass	_	_
3	não	_	ADV	ADV	Polarity=Neg	7	advmod	_	_
4	podem	_	AUX	AUX	_	7	aux	_	_
5	ser	_	AUX	AUX	_	7	aux:pass	_	_
6	considerados	_	VERB	VERB	_	7	cop	_	_
7	marginais	_	NOUN	NOUN	_	10	ccomp	_	SpaceAfter=No
8	"	_	PUNCT	.	_	7	punct	_	SpaceAfter=No
9	,	_	PUNCT	.	_	10	punct	_	_
10	disse	_	VERB	VERB	_	0	root	_	_
11	ele	_	PRON	PRON	_	10	nsubj	_	SpaceAfter=No
12	.	_	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux	color:blue
1	O	_	DET	DET	_	2	det	_	_
2	mimo	_	NOUN	NOUN	_	7	nsubj	_	_
3	em	_	ADP	ADP	_	4	case	_	_
4	questão	_	NOUN	NOUN	_	2	nmod	_	_
5	foi	_	VERB	VERB	_	7	cop	_	_
6	o	_	DET	DET	_	7	det	_	_
7	CD	_	NOUN	NOUN	_	0	root	_	_
8	"	_	PUNCT	.	_	10	punct	_	SpaceAfter=No
9	Deixa	_	PROPN	PNOUN	_	10	aux	_	_
10	clarear	_	PROPN	PNOUN	_	7	parataxis	_	SpaceAfter=No
11	"	_	PUNCT	.	_	10	punct	_	SpaceAfter=No
12	,	_	PUNCT	.	_	14	punct	_	_
13	de	_	ADP	ADP	_	14	case	_	_
14	Zeca	_	PROPN	PNOUN	_	7	nmod	_	_
15	Pagodinho	_	PROPN	PNOUN	_	14	flat	_	SpaceAfter=No
16	.	_	PUNCT	.	_	7	punct	_	_

~~~


