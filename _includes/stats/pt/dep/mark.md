

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

4519 nodes (2%) are attached to their parents as `mark`.

4494 instances of `mark` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.5545474662536.

The following 33 pairs of parts of speech are connected with `mark`: [pt-pos/VERB]()-[pt-pos/ADP]() (2195; 49% instances), [pt-pos/VERB]()-[pt-pos/SCONJ]() (1545; 34% instances), [pt-pos/ADJ]()-[pt-pos/SCONJ]() (199; 4% instances), [pt-pos/NOUN]()-[pt-pos/SCONJ]() (182; 4% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (159; 4% instances), [pt-pos/ADJ]()-[pt-pos/ADP]() (49; 1% instances), [pt-pos/NOUN]()-[pt-pos/ADP]() (38; 1% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (30; 1% instances), [pt-pos/PRON]()-[pt-pos/SCONJ]() (18; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (16; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADV]() (12; 0% instances), [pt-pos/ADP]()-[pt-pos/ADP]() (12; 0% instances), [pt-pos/PROPN]()-[pt-pos/SCONJ]() (12; 0% instances), [pt-pos/ADV]()-[pt-pos/SCONJ]() (8; 0% instances), [pt-pos/VERB]()-[pt-pos/DET]() (7; 0% instances), [pt-pos/DET]()-[pt-pos/SCONJ]() (5; 0% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (5; 0% instances), [pt-pos/NUM]()-[pt-pos/SCONJ]() (4; 0% instances), [pt-pos/ADJ]()-[pt-pos/PROPN]() (3; 0% instances), [pt-pos/PRON]()-[pt-pos/ADP]() (3; 0% instances), [pt-pos/ADV]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/PRON]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/ADP]()-[pt-pos/SCONJ]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/DET]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/SYM]()-[pt-pos/SCONJ]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 mark	color:blue
1	PF	PF	PROPN	PROP|F|S|@SUBJ>	Gender=Fem|Number=Sing	2	nsubj	_	_
2	prende	prender	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	dois	dois	NUM	<card>|NUM|M|P|@<ACC	NumType=Card	2	obj	_	_
4	por	por	ADP	PRP|@<ADVL	_	5	mark	_	_
5	cobrar	cobrar	VERB	<mv>|V|INF|@ICL-P<	VerbForm=Inf	2	advcl	_	_
6	ágio	ágio	NOUN	<np-idf>|N|M|S|@<ACC	Gender=Masc|Number=Sing	5	obj	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 mark	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 mark	color:blue
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




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.

6050 nodes (2%) are attached to their parents as `mark`.

6042 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.12148760330579.

The following 31 pairs of parts of speech are connected with `mark`: [pt-pos/VERB]()-[pt-pos/ADP]() (2743; 45% instances), [pt-pos/VERB]()-[pt-pos/CCONJ]() (2338; 39% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (239; 4% instances), [pt-pos/ADV]()-[pt-pos/ADP]() (227; 4% instances), [pt-pos/NOUN]()-[pt-pos/CCONJ]() (182; 3% instances), [pt-pos/ADJ]()-[pt-pos/ADP]() (78; 1% instances), [pt-pos/NOUN]()-[pt-pos/ADP]() (70; 1% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (31; 1% instances), [pt-pos/VERB]()-[pt-pos/DET]() (24; 0% instances), [pt-pos/VERB]()-[pt-pos/VERB]() (22; 0% instances), [pt-pos/PRON]()-[pt-pos/CCONJ]() (17; 0% instances), [pt-pos/PROPN]()-[pt-pos/CCONJ]() (12; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADP]() (11; 0% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (9; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (8; 0% instances), [pt-pos/PRON]()-[pt-pos/ADP]() (8; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADV]() (5; 0% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (5; 0% instances), [pt-pos/AUX]()-[pt-pos/CCONJ]() (3; 0% instances), [pt-pos/NOUN]()-[pt-pos/DET]() (3; 0% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/PRON]()-[pt-pos/PRON]() (2; 0% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/PART]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/DET]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/CCONJ]() (1; 0% instances), [pt-pos/PART]()-[pt-pos/CCONJ]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 mark	color:blue
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
# visual-style 8 7 mark	color:blue
1	"	_	PUNCT	.	_	4	punct	_	SpaceAfter=No
2	Não	_	ADV	ADV	Polarity=Neg	4	advmod	_	_
3	podemos	_	AUX	AUX	_	4	aux	_	_
4	fazer	_	VERB	VERB	_	0	root	_	_
5	outra	_	DET	DET	_	6	det	_	_
6	coisa	_	NOUN	NOUN	_	4	obj	_	_
7	que	_	CCONJ	CONJ	_	8	mark	_	_
8	sair	_	VERB	VERB	_	4	advcl	_	_
9	a	a	ADP	ADP	_	11	case	_	_
10	as	o	DET	DET	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	11	det	_	_
11	ruas	_	NOUN	NOUN	_	8	nmod	_	SpaceAfter=No
12	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 mark	color:blue
1	Anos	_	NOUN	NOUN	_	2	nmod	_	_
2	depois	_	ADV	ADV	_	5	mark	_	_
3	de	_	ADP	ADP	_	2	fixed	_	_
4	ter	_	AUX	AUX	_	5	aux	_	_
5	entregue	_	VERB	VERB	_	0	root	_	_
6	o	_	DET	DET	_	7	det	_	_
7	governo	_	NOUN	NOUN	_	5	obj	_	_
8	de	de	ADP	ADP	_	10	case	_	_
9	o	o	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	Paraná	_	PROPN	PNOUN	_	7	nmod	_	SpaceAfter=No
11	,	_	PUNCT	.	_	13	punct	_	_
12	o	_	DET	DET	_	13	det	_	_
13	dr	_	NOUN	NOUN	_	5	dep	_	SpaceAfter=No
14	.	_	PUNCT	.	_	5	punct	_	_

~~~


