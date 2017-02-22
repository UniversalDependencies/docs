

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

7829 nodes (4%) are attached to their parents as `obj`.

7067 instances of `obj` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.39213181760123.

The following 30 pairs of parts of speech are connected with `obj`: [pt-pos/VERB]()-[pt-pos/NOUN]() (6107; 78% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (1078; 14% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (342; 4% instances), [pt-pos/VERB]()-[pt-pos/SYM]() (88; 1% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (59; 1% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (44; 1% instances), [pt-pos/VERB]()-[pt-pos/ADP]() (29; 0% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (19; 0% instances), [pt-pos/VERB]()-[pt-pos/SCONJ]() (12; 0% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (10; 0% instances), [pt-pos/VERB]()-[pt-pos/X]() (6; 0% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (5; 0% instances), [pt-pos/VERB]()-[pt-pos/INTJ]() (5; 0% instances), [pt-pos/VERB]()-[pt-pos/VERB]() (5; 0% instances), [pt-pos/ADV]()-[pt-pos/NOUN]() (3; 0% instances), [pt-pos/VERB]()-[pt-pos/DET]() (3; 0% instances), [pt-pos/ADJ]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/ADP]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/SCONJ]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/X]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/DET]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 obj	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obj	color:blue
1	Cartões	cartão	NOUN	<np-idf>|N|M|P|@NPHR	Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
2	:	:	PUNCT	PU|@PU	_	1	punct	_	_
3	aceita	aceitar	VERB	<mv>|V|PR|3S|IND|@FS-N<PRED	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	acl:relcl	_	_
4	todos	todo	PRON	<quant>|DET|M|P|@<ACC	Gender=Masc|Number=Plur|PronType=Tot	3	obj	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obj	color:blue
1	O	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	governo	governo	NOUN	<np-def>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	4	nsubj	_	_
3	vai	ir	AUX	<aux>|V|PR|3S|IND|@FS-ACC>	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	usar	usar	VERB	<mv>|V|INF|@ICL-AUX<	VerbForm=Inf	11	ccomp	_	_
5	a	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	URV	URV	PROPN	PROP|F|S|@<ACC	Gender=Fem|Number=Sing	4	obj	_	_
7	para	para	ADP	PRP|@<ADVL	_	8	mark	_	_
8	corrigir	corrigir	VERB	<mv>|V|INF|@ICL-P<	VerbForm=Inf	4	advcl	_	_
9	impostos	imposto	NOUN	<np-idf>|N|M|P|@<ACC	Gender=Masc|Number=Plur	8	obj	_	SpaceAfter=No
10	,	,	PUNCT	PU|@PU	_	4	punct	_	_
11	garantiu	garantir	VERB	<mv>|V|PS|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
12	FHC	FHC	PROPN	PROP|M|S|@<SUBJ	Gender=Masc|Number=Sing	11	nsubj	_	SpaceAfter=No
13	.	.	PUNCT	PU|@PU	_	11	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.

9968 nodes (3%) are attached to their parents as `obj`.

9102 instances of `obj` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.14355939004815.

The following 30 pairs of parts of speech are connected with `obj`: [pt-pos/VERB]()-[pt-pos/NOUN]() (8035; 81% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (1188; 12% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (574; 6% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (42; 0% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (30; 0% instances), [pt-pos/VERB]()-[pt-pos/PART]() (24; 0% instances), [pt-pos/ADP]()-[pt-pos/NOUN]() (13; 0% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (9; 0% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (8; 0% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (7; 0% instances), [pt-pos/VERB]()-[pt-pos/CCONJ]() (5; 0% instances), [pt-pos/VERB]()-[pt-pos/X]() (5; 0% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (4; 0% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (3; 0% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (3; 0% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (2; 0% instances), [pt-pos/PROPN]()-[pt-pos/PRON]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/ADV]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/AUX]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/CCONJ]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/DET]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/PART]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/DET]() (1; 0% instances), [pt-pos/X]()-[pt-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 obj	color:blue
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
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 obj	color:blue
1	Dois	_	NUM	NUM	NumType=Card	2	nummod	_	_
2	anos	_	NOUN	NOUN	_	3	nmod	_	_
3	depois	_	ADV	ADV	_	7	advmod	_	SpaceAfter=No
4	,	_	PUNCT	.	_	3	punct	_	_
5	ele	_	PRON	PRON	_	7	nsubj:pass	_	_
6	foi	_	AUX	AUX	_	7	aux:pass	_	_
7	preso	_	VERB	VERB	_	0	root	_	_
8	--	_	PUNCT	.	_	13	punct	_	_
9	e	_	CCONJ	CONJ	_	13	cc	_	_
10	eu	_	PRON	PRON	_	13	nsubj	_	_
11	nunca	_	ADV	ADV	_	13	advmod	_	_
12	o	_	PRON	PRON	_	13	obj	_	_
13	vi	_	VERB	VERB	_	7	conj	_	_
14	novamente	_	ADV	ADV	_	13	advmod	_	SpaceAfter=No
15	.	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 obj	color:blue
1	Carta	_	NOUN	NOUN	_	0	root	_	SpaceAfter=No
2	:	_	PUNCT	.	_	1	punct	_	_
3	3	_	NUM	NUM	NumType=Card	1	appos	_	_
4	de	_	ADP	ADP	_	5	case	_	_
5	Espadas	_	PROPN	PNOUN	_	3	nmod	_	SpaceAfter=No
6	,	_	PUNCT	.	_	8	punct	_	_
7	que	_	PRON	PRON	_	8	nsubj	_	_
8	significa	_	VERB	VERB	_	3	acl:relcl	_	_
9	Amizade	_	PROPN	PNOUN	_	8	obj	_	SpaceAfter=No
10	.	_	PUNCT	.	_	1	punct	_	_

~~~


