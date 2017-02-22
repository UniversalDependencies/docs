

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

1493 nodes (1%) are attached to their parents as `ccomp`.

1163 instances of `ccomp` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.77494976557267.

The following 17 pairs of parts of speech are connected with `ccomp`: [pt-pos/VERB]()-[pt-pos/VERB]() (1137; 76% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (138; 9% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (135; 9% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (23; 2% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (16; 1% instances), [pt-pos/ADV]()-[pt-pos/VERB]() (12; 1% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (10; 1% instances), [pt-pos/NUM]()-[pt-pos/VERB]() (5; 0% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (3; 0% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (3; 0% instances), [pt-pos/VERB]()-[pt-pos/SYM]() (3; 0% instances), [pt-pos/DET]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (2; 0% instances), [pt-pos/CCONJ]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 ccomp	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 ccomp	color:blue
1	Se	se	SCONJ	KS|@SUB	_	2	mark	_	_
2	reagir	reagir	VERB	<mv>|V|FUT|3S|SUBJ|@FS-ADVL>	Mood=Sub|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	advcl	_	_
3	é	ser	AUX	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	interessante	interessante	ADJ	ADJ|M|S|@<SC	Gender=Masc|Number=Sing	0	root	_	_
5	porque	porque	SCONJ	KS|@SUB	_	6	mark	_	_
6	mostrará	mostrar	VERB	<mv>|V|FUT|3S|IND|@FS-<ADVL	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	advcl	_	_
7	que	que	SCONJ	KS|@SUB	_	9	mark	_	_
8	está	estar	AUX	<mv>|V|PR|3S|IND|@FS-<ACC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
9	vivo	vivo	ADJ	ADJ|M|S|@<SC	Gender=Masc|Number=Sing	6	ccomp	_	SpaceAfter=No
10	.	.	PUNCT	PU|@PU	_	4	punct	_	SpaceAfter=No
11	»	»	PUNCT	PU|@PU	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 ccomp	color:blue
1	É	ser	AUX	<mv>|V|PR|3S|IND|@FS-ACC>	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
2	uma	um	DET	<arti>|ART|F|S|@>N	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	situação	situação	NOUN	<np-idf>|N|F|S|@<SC	Gender=Fem|Number=Sing	7	ccomp	_	_
4	absurda	absurdo	ADJ	ADJ|F|S|@N<	Gender=Fem|Number=Sing	3	amod	_	SpaceAfter=No
5	»	»	PUNCT	PU|@PU	_	7	punct	_	SpaceAfter=No
6	,	,	PUNCT	PU|@PU	_	3	punct	_	_
7	disse	dizer	VERB	<mv>|V|PS|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
8	Taylor	Taylor	PROPN	PROP|M|S|@<SUBJ	Gender=Masc|Number=Sing	7	nsubj	_	SpaceAfter=No
9	,	,	PUNCT	PU|@PU	_	10	punct	_	_
10	49	49	NUM	<card>|NUM|M|P|@N<PRED	NumType=Card	8	appos	_	SpaceAfter=No
11	.	.	PUNCT	PU|@PU	_	7	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.

2135 nodes (1%) are attached to their parents as `ccomp`.

1478 instances of `ccomp` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.0088992974239.

The following 14 pairs of parts of speech are connected with `ccomp`: [pt-pos/VERB]()-[pt-pos/VERB]() (1848; 87% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (210; 10% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (44; 2% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (9; 0% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (7; 0% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (4; 0% instances), [pt-pos/VERB]()-[pt-pos/AUX]() (3; 0% instances), [pt-pos/VERB]()-[pt-pos/CCONJ]() (3; 0% instances), [pt-pos/VERB]()-[pt-pos/ADP]() (2; 0% instances), [pt-pos/ADP]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/CCONJ]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 ccomp	color:blue
1	O	_	DET	DET	_	2	det	_	_
2	couro	_	NOUN	NOUN	_	7	nsubj	_	_
3	de	de	ADP	ADP	_	5	case	_	_
4	o	o	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	peixe	_	NOUN	NOUN	_	2	nmod	_	_
6	sempre	_	ADV	ADV	_	7	advmod	_	_
7	rende	_	VERB	VERB	_	10	ccomp	_	_
8	"	_	PUNCT	.	_	7	punct	_	SpaceAfter=No
9	,	_	PUNCT	.	_	10	punct	_	_
10	conta	_	VERB	VERB	_	0	root	_	SpaceAfter=No
11	.	_	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 ccomp	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 ccomp	color:blue
1	O	_	DET	DET	_	2	det	_	_
2	grupo	_	NOUN	NOUN	_	4	nsubj	_	_
3	é	_	VERB	VERB	_	4	cop	_	_
4	esse	_	PRON	PRON	_	10	ccomp	_	_
5	que	_	PRON	PRON	_	6	nsubj	_	_
6	está	_	VERB	VERB	_	4	acl:relcl	_	_
7	aqui	_	ADV	ADV	_	6	advmod	_	_
8	"	_	PUNCT	.	_	4	punct	_	SpaceAfter=No
9	,	_	PUNCT	.	_	10	punct	_	_
10	declarou	_	VERB	VERB	_	0	root	_	SpaceAfter=No
11	.	_	PUNCT	.	_	10	punct	_	_

~~~


