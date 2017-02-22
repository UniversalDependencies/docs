

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

8572 nodes (4%) are attached to their parents as `amod`.

5913 instances of `amod` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.28208119458703.

The following 16 pairs of parts of speech are connected with `amod`: [pt-pos/NOUN]()-[pt-pos/ADJ]() (8153; 95% instances), [pt-pos/PROPN]()-[pt-pos/ADJ]() (206; 2% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (82; 1% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (62; 1% instances), [pt-pos/PRON]()-[pt-pos/ADJ]() (18; 0% instances), [pt-pos/NUM]()-[pt-pos/ADJ]() (10; 0% instances), [pt-pos/SYM]()-[pt-pos/ADJ]() (10; 0% instances), [pt-pos/X]()-[pt-pos/ADJ]() (9; 0% instances), [pt-pos/DET]()-[pt-pos/ADJ]() (6; 0% instances), [pt-pos/ADV]()-[pt-pos/ADJ]() (5; 0% instances), [pt-pos/ADP]()-[pt-pos/ADJ]() (3; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/X]() (2; 0% instances), [pt-pos/ADV]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 amod	color:blue
1	Horário	horário	NOUN	<np-idf>|N|M|S|@NPHR	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
2	:	:	PUNCT	PU|@PU	_	1	punct	_	_
3	em	em	ADP	<sam->|PRP|@N<PRED	_	5	case	_	_
4	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	dia	dia	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	1	nmod	_	_
6	12	12	NUM	<card>|NUM|M|P|@N<	NumType=Card	5	nummod	_	SpaceAfter=No
7	,	,	PUNCT	PU|@PU	_	10	punct	_	_
8	de	de	ADP	<first-cjt>|<sam->|PRP|@N<PRED	_	10	case	_	_
9	as	o	DET	<-sam>|<artd>|ART|F|P|@>N	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	10	det	_	_
10	19h	19h	NOUN	<np-def>|N|F|P|@P<	Gender=Fem|Number=Plur	1	nmod	_	_
11	a	a	ADP	<sam->|<cjt>|PRP|@N<PRED	_	14	case	_	_
12	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
13	último	último	ADJ	<NUM-ord>|ADJ|M|S|@>N	Gender=Masc|Number=Sing|NumType=Ord	14	amod	_	_
14	cliente	cliente	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	10	nmod	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 amod	color:blue
1	Um	um	DET	<arti>|ART|M|S|@>N	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	Godard	Godard	PROPN	PROP|M|S|@NPHR	Gender=Masc|Number=Sing	0	root	_	_
3	intergaláctico	intergaláctico	ADJ	ADJ|M|S|@N<	Gender=Masc|Number=Sing	2	amod	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 amod	color:blue
1	O	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	jovem	jovem	ADJ	<n>|<np-def>|ADJ|M|S|@SUBJ>	Gender=Masc|Number=Sing	7	nsubj	_	_
3	sportinguista	sportinguista	ADJ	ADJ|M|S|@N<	Gender=Masc|Number=Sing	2	amod	_	_
4	Nélson	Nélson	PROPN	PROP|M|S|@N<	Gender=Masc|Number=Sing	2	nmod:npmod	_	_
5	terá	ter	AUX	<aux>|V|FUT|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	7	aux	_	_
6	de	de	ADP	PRP|@PRT-AUX<	_	7	obl	_	_
7	esperar	esperar	VERB	<mv>|V|INF|@ICL-AUX<	VerbForm=Inf	0	root	_	SpaceAfter=No
8	.	.	PUNCT	PU|@PU	_	7	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.

14504 nodes (5%) are attached to their parents as `amod`.

9934 instances of `amod` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.28019856591285.

The following 26 pairs of parts of speech are connected with `amod`: [pt-pos/NOUN]()-[pt-pos/ADJ]() (10658; 73% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (2937; 20% instances), [pt-pos/PROPN]()-[pt-pos/ADJ]() (545; 4% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (115; 1% instances), [pt-pos/PRON]()-[pt-pos/ADJ]() (44; 0% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (39; 0% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (35; 0% instances), [pt-pos/ADJ]()-[pt-pos/PART]() (29; 0% instances), [pt-pos/NUM]()-[pt-pos/ADJ]() (28; 0% instances), [pt-pos/PART]()-[pt-pos/ADJ]() (26; 0% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (18; 0% instances), [pt-pos/ADP]()-[pt-pos/ADJ]() (6; 0% instances), [pt-pos/ADP]()-[pt-pos/PROPN]() (3; 0% instances), [pt-pos/NOUN]()-[pt-pos/PART]() (3; 0% instances), [pt-pos/NOUN]()-[pt-pos/X]() (3; 0% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/NUM]() (2; 0% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/X]()-[pt-pos/ADJ]() (2; 0% instances), [pt-pos/ADV]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/CCONJ]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/PART]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 amod	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 amod	color:blue
1	En	en	ADP	ADP	_	3	case	_	_
2	a	o	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	madrugada	_	NOUN	NOUN	_	11	nmod	_	_
4	de	_	ADP	ADP	_	7	case	_	_
5	segunda	_	PROPN	PNOUN	_	7	amod	_	_
6	-	_	PUNCT	.	_	7	punct	_	_
7	feira	_	PROPN	PNOUN	_	3	nmod	_	_
8	outro	_	DET	DET	_	9	det	_	_
9	roubo	_	NOUN	NOUN	_	11	nsubj:pass	_	_
10	foi	_	AUX	AUX	_	11	aux:pass	_	_
11	registrado	_	VERB	VERB	_	0	root	_	SpaceAfter=No
12	.	_	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 amod	color:blue
1	O	_	DET	DET	_	2	det	_	_
2	caso	_	NOUN	NOUN	_	4	nsubj:pass	_	_
3	será	_	AUX	AUX	_	4	aux:pass	_	_
4	investigado	_	VERB	VERB	_	0	root	_	_
5	por	por	ADP	ADP	_	9	case	_	_
6	a	o	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
7	1	_	ADJ	ADJ	_	9	amod	_	_
8	ª	_	PUNCT	.	_	7	punct	_	_
9	Delegacia	_	PROPN	PNOUN	_	4	nmod	_	_
10	de	de	ADP	ADP	_	12	case	_	_
11	a	o	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	cidade	_	NOUN	NOUN	_	9	nmod	_	SpaceAfter=No
13	.	_	PUNCT	.	_	4	punct	_	_

~~~


