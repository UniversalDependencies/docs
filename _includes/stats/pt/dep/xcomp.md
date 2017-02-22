

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

1839 nodes (1%) are attached to their parents as `xcomp`.

1815 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.01794453507341.

The following 40 pairs of parts of speech are connected with `xcomp`: [pt-pos/VERB]()-[pt-pos/VERB]() (1170; 64% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (264; 14% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (213; 12% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (40; 2% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (23; 1% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (23; 1% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (12; 1% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (12; 1% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (8; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (7; 0% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (7; 0% instances), [pt-pos/ADV]()-[pt-pos/NOUN]() (6; 0% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (5; 0% instances), [pt-pos/ADV]()-[pt-pos/ADJ]() (4; 0% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (4; 0% instances), [pt-pos/ADJ]()-[pt-pos/PROPN]() (3; 0% instances), [pt-pos/DET]()-[pt-pos/ADJ]() (3; 0% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (3; 0% instances), [pt-pos/PRON]()-[pt-pos/ADJ]() (3; 0% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (3; 0% instances), [pt-pos/SCONJ]()-[pt-pos/ADJ]() (3; 0% instances), [pt-pos/ADV]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/DET]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (2; 0% instances), [pt-pos/PRON]()-[pt-pos/PRON]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/ADJ]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/AUX]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/SCONJ]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/SCONJ]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 xcomp	color:blue
1	Apesar	apesar	ADV	ADV|@ADVL>	_	7	advmod	_	MWE=Apesar_de
2	de	de	ADP	PRP|@A<	_	4	case	_	_
3	as	o	DET	<-sam>|<artd>|ART|F|P|@>N	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	4	det	_	_
4	críticas	crítica	NOUN	<np-def>|N|F|P|@P<	Gender=Fem|Number=Plur	1	obl	_	SpaceAfter=No
5	,	,	PUNCT	PU|@PU	_	1	punct	_	_
6	Vogts	Vogts	PROPN	PROP|M|S|@SUBJ>	Gender=Masc|Number=Sing	7	nsubj	_	_
7	prefere	preferir	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	manter	manter	VERB	<mv>|V|INF|@ICL-<ACC	VerbForm=Inf	7	xcomp	_	_
9	a	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	discrição	discrição	NOUN	<np-def>|N|F|S|@<ACC	Gender=Fem|Number=Sing	8	obj	_	SpaceAfter=No
11	:	:	PUNCT	PU|@PU	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 xcomp	color:blue
1	Feminino	feminino	NOUN	<np-idf>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	2	nsubj	_	_
2	bate	bater	VERB	<first-cjt>|<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	Cuba	Cuba	PROPN	PROP|F|S|@<ACC	Gender=Fem|Number=Sing	2	obj	_	_
4	e	e	CCONJ	<co-sta>|KC|@CO	_	5	cc	_	_
5	fica	ficar	VERB	<cjt>|<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	conj	_	_
6	com	com	ADP	PRP|@<SC	_	7	case	_	_
7	título	título	NOUN	<np-idf>|N|M|S|@P<	Gender=Masc|Number=Sing	5	xcomp	_	_
8	em	em	ADP	PRP|@N<	_	9	case	_	_
9	PE	PE	PROPN	PROP|M|S|@P<	Gender=Masc|Number=Sing	7	nmod	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 xcomp	color:blue
1	«	«	PUNCT	PU|@PU	_	3	punct	_	SpaceAfter=No
2	Toda	todo	DET	<quant>|DET|F|S|@>N	Gender=Fem|Number=Sing|PronType=Tot	3	det	_	_
3	platéia	platéia	NOUN	<np-def>|N|F|S|@SUBJ>	Gender=Fem|Number=Sing	11	nsubj	_	_
4	de	de	ADP	PRP|@N<	_	5	case	_	_
5	música	música	NOUN	<np-idf>|N|F|S|@P<	Gender=Fem|Number=Sing	3	nmod	_	_
6	erudita	erudito	ADJ	ADJ|F|S|@N<	Gender=Fem|Number=Sing	5	amod	_	_
7	é	ser	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	tradicionalista	tradicionalista	ADJ	ADJ|F|S|@SC>	Gender=Fem|Number=Sing	11	xcomp	_	SpaceAfter=No
9	»	»	PUNCT	PU|@PU	_	3	punct	_	SpaceAfter=No
10	,	,	PUNCT	PU|@PU	_	7	punct	_	_
11	explica	explicar	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	parataxis	_	SpaceAfter=No
12	.	.	PUNCT	PU|@PU	_	7	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: [xcomp:adj]().

860 nodes (0%) are attached to their parents as `xcomp`.

856 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.77790697674419.

The following 11 pairs of parts of speech are connected with `xcomp`: [pt-pos/VERB]()-[pt-pos/VERB]() (683; 79% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (131; 15% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (33; 4% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (4; 0% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (3; 0% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/AUX]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/PART]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 xcomp	color:blue
1	Quero	_	VERB	VERB	_	10	ccomp	_	_
2	dar	_	VERB	VERB	_	1	xcomp	_	_
3	o	_	DET	DET	_	4	det	_	_
4	máximo	_	NOUN	NOUN	_	2	obj	_	_
5	e	_	CCONJ	CONJ	_	6	cc	_	_
6	sair	_	VERB	VERB	_	2	conj	_	_
7	satisfeito	_	ADJ	ADJ	_	6	xcomp:adj	_	_
8	'	_	PUNCT	.	_	1	punct	_	SpaceAfter=No
9	,	_	PUNCT	.	_	10	punct	_	_
10	afirmou	_	VERB	VERB	_	0	root	_	SpaceAfter=No
11	.	_	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 xcomp	color:blue
1	E	_	CCONJ	CONJ	_	4	cc	_	_
2	era	_	VERB	VERB	_	4	cop	_	_
3	uma	_	DET	DET	_	4	det	_	_
4	coisa	_	NOUN	NOUN	_	0	root	_	_
5	que	_	PRON	PRON	_	7	nsubj	_	_
6	nos	_	PRON	PRON	_	8	nsubj	_	_
7	deixava	_	VERB	VERB	_	4	acl:relcl	_	_
8	confortáveis	_	ADJ	ADJ	_	7	xcomp	_	SpaceAfter=No
9	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 xcomp	color:blue
1	Por	_	ADP	ADP	_	2	case	_	_
2	isso	_	PRON	PRON	_	7	nmod	_	SpaceAfter=No
3	,	_	PUNCT	.	_	2	punct	_	_
4	administrar	_	VERB	VERB	_	7	csubj	_	_
5	nem	_	ADV	ADV	_	7	advmod	_	_
6	sempre	_	ADV	ADV	_	7	advmod	_	_
7	significa	_	VERB	VERB	_	0	root	_	_
8	ser	_	VERB	VERB	_	9	cop	_	_
9	estadista	_	NOUN	NOUN	_	7	xcomp	_	SpaceAfter=No
10	.	_	PUNCT	.	_	7	punct	_	_

~~~


