

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

8113 nodes (4%) are attached to their parents as `advmod`.

6000 instances of `advmod` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.85258227536053.

The following 43 pairs of parts of speech are connected with `advmod`: [pt-pos/VERB]()-[pt-pos/ADV]() (4917; 61% instances), [pt-pos/ADJ]()-[pt-pos/ADV]() (1081; 13% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (1060; 13% instances), [pt-pos/ADV]()-[pt-pos/ADV]() (345; 4% instances), [pt-pos/NUM]()-[pt-pos/ADV]() (231; 3% instances), [pt-pos/PRON]()-[pt-pos/ADV]() (110; 1% instances), [pt-pos/PROPN]()-[pt-pos/ADV]() (91; 1% instances), [pt-pos/VERB]()-[pt-pos/SCONJ]() (36; 0% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (29; 0% instances), [pt-pos/SYM]()-[pt-pos/ADV]() (25; 0% instances), [pt-pos/VERB]()-[pt-pos/ADP]() (24; 0% instances), [pt-pos/DET]()-[pt-pos/ADV]() (22; 0% instances), [pt-pos/VERB]()-[pt-pos/DET]() (22; 0% instances), [pt-pos/ADJ]()-[pt-pos/DET]() (20; 0% instances), [pt-pos/ADV]()-[pt-pos/DET]() (16; 0% instances), [pt-pos/NOUN]()-[pt-pos/DET]() (16; 0% instances), [pt-pos/SCONJ]()-[pt-pos/ADV]() (8; 0% instances), [pt-pos/NUM]()-[pt-pos/DET]() (6; 0% instances), [pt-pos/ADP]()-[pt-pos/ADV]() (5; 0% instances), [pt-pos/AUX]()-[pt-pos/ADV]() (5; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (5; 0% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (4; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (3; 0% instances), [pt-pos/ADV]()-[pt-pos/ADJ]() (3; 0% instances), [pt-pos/VERB]()-[pt-pos/INTJ]() (3; 0% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (3; 0% instances), [pt-pos/ADJ]()-[pt-pos/PROPN]() (2; 0% instances), [pt-pos/DET]()-[pt-pos/DET]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/SCONJ]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/NUM]()-[pt-pos/SYM]() (2; 0% instances), [pt-pos/PRON]()-[pt-pos/DET]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/ADJ]()-[pt-pos/SCONJ]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/INTJ]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/X]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/X]()-[pt-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 advmod	color:blue
1	Ela	ela	PRON	PERS|F|3S|NOM|@SUBJ>	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	tem	ter	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	também	também	ADV	ADV|@<ADVL	_	2	advmod	_	_
4	textos	texto	NOUN	<np-idf>|N|M|P|@<ACC	Gender=Masc|Number=Plur	2	obj	_	_
5	com	com	ADP	PRP|@N<	_	6	case	_	_
6	explicações	explicação	NOUN	<np-idf>|N|F|P|@P<	Gender=Fem|Number=Plur	4	nmod	_	_
7	sobre	sobre	ADP	PRP|@N<	_	9	case	_	_
8	cada	cada	DET	<quant>|DET|M|S|@>N	Gender=Masc|Number=Sing|PronType=Tot	9	det	_	_
9	item	item	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	6	nmod	_	_
10	pesquisado	pesquisar	VERB	<mv>|V|PCP|M|S|@ICL-N<	Gender=Masc|Number=Sing|VerbForm=Part	9	acl	_	SpaceAfter=No
11	.	.	PUNCT	PU|@PU	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod	color:blue
1	«	«	PUNCT	PU|@PU	_	4	punct	_	SpaceAfter=No
2	Foi	ser	AUX	<mv>|V|PS|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	cop	_	_
3	um	um	DET	<arti>|ART|M|S|@>N	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	ato	ato	NOUN	<np-idf>|N|M|S|@<SC	Gender=Masc|Number=Sing	0	root	_	_
5	muito	muito	ADV	<quant>|ADV|@>A	_	6	advmod	_	_
6	rigoroso	rigoroso	ADJ	ADJ|M|S|@N<	Gender=Masc|Number=Sing	4	amod	_	SpaceAfter=No
7	.	.	PUNCT	PU|@PU	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 advmod	color:blue
1	Vai	ir	AUX	<aux>|V|PR|3S|IND|@FS-ACC>	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	aux	_	_
2	ter	ter	VERB	<mv>|V|INF|@ICL-AUX<	VerbForm=Inf	11	ccomp	_	_
3	paridade	paridade	NOUN	<np-idf>|N|F|S|@<ACC	Gender=Fem|Number=Sing	2	obj	_	SpaceAfter=No
4	,	,	PUNCT	PU|@PU	_	2	punct	_	_
5	já	já	ADV	ADV|@>A	_	8	advmod	_	_
6	desde	desde	ADP	PRP|@<ADVL	_	8	case	_	_
7	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	começo	começo	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	2	obl	_	SpaceAfter=No
9	»	»	PUNCT	PU|@PU	_	11	punct	_	SpaceAfter=No
10	,	,	PUNCT	PU|@PU	_	2	punct	_	_
11	explicou	explicar	VERB	<mv>|V|PS|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
12	.	.	PUNCT	PU|@PU	_	11	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.

8027 nodes (3%) are attached to their parents as `advmod`.

6192 instances of `advmod` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.44288027905818.

The following 30 pairs of parts of speech are connected with `advmod`: [pt-pos/VERB]()-[pt-pos/ADV]() (5220; 65% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (858; 11% instances), [pt-pos/ADJ]()-[pt-pos/ADV]() (823; 10% instances), [pt-pos/NUM]()-[pt-pos/ADV]() (545; 7% instances), [pt-pos/ADV]()-[pt-pos/ADV]() (272; 3% instances), [pt-pos/PROPN]()-[pt-pos/ADV]() (120; 1% instances), [pt-pos/PRON]()-[pt-pos/ADV]() (79; 1% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (40; 0% instances), [pt-pos/ADP]()-[pt-pos/ADV]() (10; 0% instances), [pt-pos/NUM]()-[pt-pos/ADP]() (9; 0% instances), [pt-pos/VERB]()-[pt-pos/CCONJ]() (8; 0% instances), [pt-pos/NUM]()-[pt-pos/NOUN]() (6; 0% instances), [pt-pos/PART]()-[pt-pos/ADV]() (5; 0% instances), [pt-pos/VERB]()-[pt-pos/X]() (4; 0% instances), [pt-pos/X]()-[pt-pos/ADV]() (4; 0% instances), [pt-pos/ADJ]()-[pt-pos/PART]() (3; 0% instances), [pt-pos/ADV]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/AUX]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/CCONJ]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/PART]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/DET]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/PART]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/PART]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/X]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advmod	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 advmod	color:blue
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
# visual-style 10 9 advmod	color:blue
1	"	_	PUNCT	.	_	3	punct	_	SpaceAfter=No
2	Sempre	_	ADV	ADV	_	3	advmod	_	_
3	quis	_	VERB	VERB	_	0	root	_	_
4	dançar	_	VERB	VERB	_	3	xcomp	_	SpaceAfter=No
5	,	_	PUNCT	.	_	8	punct	_	_
6	mas	_	CCONJ	CONJ	_	8	cc	_	_
7	não	_	ADV	ADV	Polarity=Neg	8	advmod	_	_
8	é	_	VERB	VERB	_	3	conj	_	_
9	tão	_	ADV	ADV	_	10	advmod	_	_
10	fácil	_	ADJ	ADJ	_	8	xcomp:adj	_	SpaceAfter=No
11	.	_	PUNCT	.	_	3	punct	_	_

~~~


