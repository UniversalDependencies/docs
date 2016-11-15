

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-Bosque)

This relation is universal.

15 nodes (0%) are attached to their parents as `discourse`.

8 instances of `discourse` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.8.

The following 4 pairs of parts of speech are connected with `discourse`: [pt-pos/VERB]()-[pt-pos/INTJ]() (11; 73% instances), [pt-pos/INTJ]()-[pt-pos/INTJ]() (2; 13% instances), [pt-pos/NOUN]()-[pt-pos/INTJ]() (1; 7% instances), [pt-pos/SCONJ]()-[pt-pos/INTJ]() (1; 7% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 discourse	color:blue
1	«	«	PUNCT	PU|@PU	_	3	punct	_	_
2	Eu	eu	PRON	PERS|M|1S|NOM|@SUBJ>	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	torci	torcer	VERB	<mv>|V|PS|1S|IND|@FS-ACC>	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	12	ccomp	_	_
4	muito	muito	ADV	<quant>|ADV|@<ADVL	_	3	advmod	_	_
5	por	por	ADP	PRP|@<PIV	_	6	case	_	_
6	você	você	PRON	PERS|F|3S|NOM/PIV|@P<	Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	nmod	_	_
7	,	,	PUNCT	PU|@PU	_	3	punct	_	_
8	viu	ver	INTJ	IN|PS|3S|IND|@FS-<ADVL	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	discourse	_	_
9	?	?	PUNCT	PU|@PU	_	3	punct	_	_
10	»	»	PUNCT	PU|@PU	_	3	punct	_	_
11	,	,	PUNCT	PU|@PU	_	3	punct	_	_
12	disse	dizer	VERB	<mv>|V|PS|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
13	Itamar	Itamar	PROPN	PROP|M|S|@<SUBJ	Gender=Masc|Number=Sing	12	nsubj	_	_
14	a	a	ADP	PRP|@<PIV	_	15	case	_	_
15	Fu	Fu	PROPN	PROP|F|S|@P<	Gender=Fem|Number=Sing	12	nmod	_	_
16	.	.	PUNCT	PU|@PU	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 discourse	color:blue
1	Não	não	INTJ	<first-cjt>|IN|@UTT	_	0	root	_	_
2	,	,	PUNCT	PU|@PU	_	1	punct	_	_
3	não	não	INTJ	IN|@UTT	_	1	discourse	_	_
4	e	e	CONJ	KC|@CO	_	1	cc	_	_
5	não	não	INTJ	IN|@UTT	_	1	discourse	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 discourse	color:blue
1	Já	já	ADV	ADV|@>A	_	2	advmod	_	_
2	nem	nem	ADV	ADV|@ADVL>	_	3	advmod	_	_
3	ouvem	ouvir	VERB	<mv>|V|PR|3P|IND|@FS-STA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	a	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	voz	voz	NOUN	<np-def>|N|F|S|@<ACC	Gender=Fem|Number=Sing	3	dobj	_	_
6	de	de	ADP	PRP|@N<	_	8	case	_	_
7	«	«	PUNCT	PU|@PU	_	8	punct	_	_
8	já	já	INTJ	IN|@P<	_	5	discourse	_	_
9	»	»	PUNCT	PU|@PU	_	8	punct	_	_
10	de	de	ADP	<sam->|PRP|@N<	_	12	case	_	_
11	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	instrutor-largador	instrutor-largador	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	5	nmod	_	_
13	.	.	PUNCT	PU|@PU	_	3	punct	_	_

~~~


