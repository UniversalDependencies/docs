

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

365 nodes (0%) are attached to their parents as `csubj`.

263 instances of `csubj` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.83013698630137.

The following 18 pairs of parts of speech are connected with `csubj`: [pt-pos/ADJ]()-[pt-pos/VERB]() (137; 38% instances), [pt-pos/VERB]()-[pt-pos/VERB]() (124; 34% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (45; 12% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (21; 6% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (18; 5% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (4; 1% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (2; 1% instances), [pt-pos/ADV]()-[pt-pos/VERB]() (2; 1% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (2; 1% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (2; 1% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 csubj	color:blue
1	Mais	mais	ADV	<quant>|ADV|@>A	_	2	advmod	_	_
2	inesperado	inesperado	ADJ	ADJ|M|S|@SC>	Gender=Masc|Number=Sing	0	root	_	_
3	ainda	ainda	ADV	ADV|@A<	_	2	advmod	_	_
4	é	ser	AUX	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
5	encontrar	encontrar	VERB	<mv>|V|INF|@ICL-<SUBJ	VerbForm=Inf	2	csubj	_	_
6	uma	um	DET	<arti>|ART|F|S|@>N	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	criança	criança	NOUN	<np-idf>|N|F|S|@<ACC	Gender=Fem|Number=Sing	5	obj	_	_
8	assassina	assassino	ADJ	ADJ|F|S|@N<	Gender=Fem|Number=Sing	7	amod	_	SpaceAfter=No
9	.	.	PUNCT	PU|@PU	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 csubj	color:blue
1	Quem	quem	PRON	<rel>|INDP|M/F|S|@SUBJ>	Gender=Unsp|Number=Sing|PronType=Rel	2	nsubj	_	_
2	quiser	querer	VERB	<mv>|V|FUT|3S|SUBJ|@FS-SUBJ>	Mood=Sub|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	csubj	_	SpaceAfter=No
3	,	,	PUNCT	PU|@PU	_	2	punct	_	_
4	vai	ir	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	em	em	ADP	PRP|@<PIV	_	6	case	_	_
6	excursão	excursão	NOUN	<np-idf>|N|F|S|@P<	Gender=Fem|Number=Sing	4	obl	_	_
7	até	até	ADP	PRP|@<ADVL	_	9	case	_	_
8	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	resort	resort	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	4	obl	_	_
10	local	local	ADJ	ADJ|M|S|@N<	Gender=Masc|Number=Sing	9	amod	_	SpaceAfter=No
11	,	,	PUNCT	PU|@PU	_	12	punct	_	_
12	Casa	Casa	PROPN	PROP|M|S|@APP	Gender=Masc|Number=Sing	9	appos	_	MWE=Casa_de_Campo
13	de	de	ADP	PRP|@N<	_	14	case	_	_
14	Campo	Campo	PROPN	PROP|@P<	Number=Sing	12	nmod	_	SpaceAfter=No
15	.	.	PUNCT	PU|@PU	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	Pena	pena	NOUN	<first-cjt>|<np-idf>|N|F|S|@NPHR	Gender=Fem|Number=Sing	0	root	_	_
2	não	não	ADV	_	Polarity=Neg	3	advmod	_	_
3	ter	ter	VERB	<mv>|V|INF|3S|@ICL-<SUBJ	Number=Sing|Person=3|VerbForm=Inf	1	csubj	_	_
4	mais	muito	DET	<quant>|DET|M|S|@>N	Gender=Masc|Number=Sing|PronType=Ind	5	det	_	_
5	tempo	tempo	NOUN	<np-idf>|N|M|S|@<ACC	Gender=Masc|Number=Sing	3	obj	_	_
6	para	para	ADP	PRP|@N<	_	7	mark	_	_
7	ir	ir	VERB	<mv>|V|INF|@ICL-P<	VerbForm=Inf	5	acl	_	_
8	a	a	ADP	<sam->|PRP|@<SA	_	10	case	_	_
9	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	teatro	teatro	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	7	obl	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.
There are 1 language-specific subtypes of `csubj`: [csubj:pass]().

588 nodes (0%) are attached to their parents as `csubj`.

488 instances of `csubj` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.55612244897959.

The following 11 pairs of parts of speech are connected with `csubj`: [pt-pos/VERB]()-[pt-pos/VERB]() (309; 53% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (211; 36% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (34; 6% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (8; 1% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (8; 1% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (6; 1% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (4; 1% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (4; 1% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	É	_	VERB	VERB	_	0	root	_	_
2	possível	_	ADJ	ADJ	_	1	xcomp:adj	_	_
3	acabar	_	VERB	VERB	_	1	csubj	_	_
4	com	_	ADP	ADP	_	6	case	_	_
5	essa	_	DET	DET	_	6	det	_	_
6	história	_	NOUN	NOUN	_	3	nmod	_	SpaceAfter=No
7	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 csubj	color:blue
1	O	_	DET	DET	_	3	det	_	_
2	mais	_	DET	DET	_	3	det	_	_
3	importante	_	NOUN	NOUN	_	0	root	_	_
4	é	_	VERB	VERB	_	3	cop	_	_
5	que	_	CCONJ	CONJ	_	9	mark	_	_
6	as	_	DET	DET	_	7	det	_	_
7	chamadas	_	NOUN	NOUN	_	9	nsubj	_	_
8	não	_	ADV	ADV	Polarity=Neg	9	advmod	_	_
9	caiam	_	VERB	VERB	_	3	csubj	_	SpaceAfter=No
10	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 csubj	color:blue
1	"	_	PUNCT	.	_	2	punct	_	SpaceAfter=No
2	O	_	PRON	PRON	_	0	root	_	_
3	que	_	PRON	PRON	_	6	obj	_	_
4	nós	_	PRON	PRON	_	6	nsubj	_	_
5	vamos	_	AUX	AUX	_	6	aux	_	_
6	fazer	_	VERB	VERB	_	2	acl:relcl	_	_
7	agora	_	ADV	ADV	_	6	advmod	_	_
8	é	_	VERB	VERB	_	2	cop	_	_
9	responder	_	VERB	VERB	_	2	csubj	_	_
10	a	a	ADP	ADP	_	12	case	_	_
11	os	o	DET	DET	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	12	det	_	_
12	termos	_	NOUN	NOUN	_	9	nmod	_	_
13	de	de	ADP	ADP	_	15	case	_	_
14	a	o	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	ação	_	NOUN	NOUN	_	12	nmod	_	SpaceAfter=No
16	.	_	PUNCT	.	_	2	punct	_	_

~~~


