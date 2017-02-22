

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

33251 nodes (15%) are attached to their parents as `det`.

33078 instances of `det` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1693182159935.

The following 21 pairs of parts of speech are connected with `det`: [pt-pos/NOUN]()-[pt-pos/DET]() (26665; 80% instances), [pt-pos/PROPN]()-[pt-pos/DET]() (5235; 16% instances), [pt-pos/ADJ]()-[pt-pos/DET]() (554; 2% instances), [pt-pos/PRON]()-[pt-pos/DET]() (196; 1% instances), [pt-pos/PRON]()-[pt-pos/PRON]() (192; 1% instances), [pt-pos/VERB]()-[pt-pos/DET]() (156; 0% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (92; 0% instances), [pt-pos/NUM]()-[pt-pos/DET]() (52; 0% instances), [pt-pos/DET]()-[pt-pos/DET]() (29; 0% instances), [pt-pos/X]()-[pt-pos/DET]() (29; 0% instances), [pt-pos/ADP]()-[pt-pos/DET]() (16; 0% instances), [pt-pos/SYM]()-[pt-pos/DET]() (15; 0% instances), [pt-pos/ADV]()-[pt-pos/DET]() (7; 0% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (3; 0% instances), [pt-pos/ADJ]()-[pt-pos/PRON]() (2; 0% instances), [pt-pos/PROPN]()-[pt-pos/PRON]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/PART]()-[pt-pos/DET]() (1; 0% instances), [pt-pos/X]()-[pt-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Um	um	DET	<arti>|ART|M|S|@>N	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	Godard	Godard	PROPN	PROP|M|S|@NPHR	Gender=Masc|Number=Sing	0	root	_	_
3	intergaláctico	intergaláctico	ADJ	ADJ|M|S|@N<	Gender=Masc|Number=Sing	2	amod	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 det	color:blue
1	O	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	crítico	crítico	NOUN	<np-def>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	11	nsubj	_	_
3	(	(	PUNCT	PU|@PU	_	4	punct	_	SpaceAfter=No
4	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	SpaceAfter=No
5	/	/	PUNCT	KC|@CO	_	7	punct	_	SpaceAfter=No
6	deve	dever	AUX	<cjt>|<aux>|V|PR|3S|IND|@FS-QUE	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	ser	ser	AUX	<mv>|V|INF|@ICL-AUX<	VerbForm=Inf	4	conj	_	SpaceAfter=No
8	)	)	PUNCT	PU|@PU	_	4	punct	_	SpaceAfter=No
9	,	,	PUNCT	PU|@PU	_	11	punct	_	_
10	um	um	DET	<arti>|ART|M|S|@>N	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	insolente	insolente	ADJ	<n>|<np-idf>|ADJ|M|S|@<SC	Gender=Masc|Number=Sing	0	root	_	_
12	de	de	ADP	<sam->|PRP|@N<	_	14	case	_	_
13	a	o	DET	<-sam>|<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	razão	razão	NOUN	<np-def>|N|F|S|@P<	Gender=Fem|Number=Sing	11	obl	_	SpaceAfter=No
15	?	?	PUNCT	PU|@PU	_	11	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.
There are 1 language-specific subtypes of `det`: [det:poss]().

41167 nodes (14%) are attached to their parents as `det`.

40906 instances of `det` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.13680860883718.

The following 20 pairs of parts of speech are connected with `det`: [pt-pos/NOUN]()-[pt-pos/DET]() (31287; 76% instances), [pt-pos/PROPN]()-[pt-pos/DET]() (8354; 20% instances), [pt-pos/PRON]()-[pt-pos/DET]() (316; 1% instances), [pt-pos/NUM]()-[pt-pos/DET]() (290; 1% instances), [pt-pos/ADV]()-[pt-pos/DET]() (261; 1% instances), [pt-pos/VERB]()-[pt-pos/DET]() (228; 1% instances), [pt-pos/PART]()-[pt-pos/DET]() (151; 0% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (146; 0% instances), [pt-pos/ADJ]()-[pt-pos/DET]() (51; 0% instances), [pt-pos/ADP]()-[pt-pos/DET]() (35; 0% instances), [pt-pos/PRON]()-[pt-pos/PRON]() (13; 0% instances), [pt-pos/X]()-[pt-pos/DET]() (13; 0% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (7; 0% instances), [pt-pos/DET]()-[pt-pos/DET]() (4; 0% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (4; 0% instances), [pt-pos/CCONJ]()-[pt-pos/DET]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADP]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/AUX]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det	color:blue
1	Foi	_	VERB	VERB	_	4	cop	_	_
2	um	_	DET	DET	_	4	det	_	_
3	grande	_	ADJ	ADJ	_	4	amod	_	_
4	jogador	_	NOUN	NOUN	_	0	root	_	SpaceAfter=No
5	,	_	PUNCT	.	_	9	punct	_	_
6	mas	_	CCONJ	CONJ	_	9	cc	_	_
7	o	_	DET	DET	_	8	det	_	_
8	que	_	PRON	PRON	_	9	nsubj	_	_
9	ganhou	_	VERB	VERB	_	4	conj	_	_
10	como	_	ADP	ADP	_	11	case	_	_
11	técnico	_	NOUN	NOUN	_	9	nmod	_	SpaceAfter=No
12	?	_	PUNCT	.	_	4	punct	_	SpaceAfter=No
13	"	_	PUNCT	.	_	4	punct	_	_

~~~


