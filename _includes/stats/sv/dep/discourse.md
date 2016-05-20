

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

18 nodes (0%) are attached to their parents as `discourse`.

18 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.22222222222222.

The following 3 pairs of parts of speech are connected with `discourse`: [sv-pos/VERB]()-[sv-pos/INTJ]() (14; 78% instances), [sv-pos/ADJ]()-[sv-pos/INTJ]() (2; 11% instances), [sv-pos/NOUN]()-[sv-pos/INTJ]() (2; 11% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 discourse	color:blue
1	Jo	jo	INTJ	IN	_	5	discourse	_	_
2	,	,	PUNCT	MID	_	5	punct	_	_
3	kvinnorna	kvinna	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	5	nsubj	_	_
4	måste	måste	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
5	betrakta	betrakta	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	_	_
6	även	även	ADV	AB	_	7	advmod	_	_
7	detta	denna	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Dem	5	dobj	_	_
8	som	som	CONJ	KN	_	10	mark	_	_
9	sin	sig	DET	PS|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	10	nmod:poss	_	_
10	angelägenhet	angelägenhet	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	xcomp	_	_
11	.	.	PUNCT	MAD	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 1 discourse	color:blue
1	Ja	ja	INTJ	IN	_	21	discourse	_	_
2	,	,	PUNCT	MID	_	21	punct	_	_
3	först	först	ADV	AB	_	21	advmod	_	_
4	och	och	CONJ	KN	_	3	mwe	_	_
5	främst	främst	ADV	AB|SUV	Degree=Sup	3	mwe	_	_
6	är	vara	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	21	cop	_	_
7	ju	ju	ADV	AB	_	21	advmod	_	_
8	detta	denna	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Dem	21	nsubj	_	_
9	-	-	PUNCT	MID	_	21	punct	_	_
10	sett	se	ADJ	PC|PRF|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part	21	advcl	_	_
11	i	i	ADP	PP	_	16	case	_	_
12	ett	en	DET	DT|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	16	det	_	_
13	globalt	global	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	16	amod	_	_
14	och	och	CONJ	KN	_	13	cc	_	_
15	historiskt	historisk	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	13	conj	_	_
16	perspektiv	perspektiv	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	10	nmod	_	_
17	-	-	PUNCT	MID	_	21	punct	_	_
18	ingalunda	ingalunda	ADV	AB	_	21	neg	_	_
19	något	någon	DET	DT|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Ind	21	det	_	_
20	särskilt	särskilt	ADV	AB	_	21	advmod	_	_
21	karakteristiskt	karakteristisk	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
22	för	för	ADP	PP	_	23	case	_	_
23	kristendomen	kristendom	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	21	nmod	_	_
24	.	.	PUNCT	MAD	_	21	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	Jo	jo	INTJ	IN	_	4	discourse	_	_
2	,	,	PUNCT	MID	_	4	punct	_	_
3	ett	en	DET	DT|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	4	det	_	_
4	uttalande	uttalande	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	0	root	_	_
5	i	i	ADP	PP	_	6	case	_	_
6	Expressen	Expressen	PROPN	PM|NOM	Case=Nom	4	nmod	_	_
7	av	av	ADP	PP	_	8	case	_	_
8	Rose	Rose	PROPN	PM|NOM	Case=Nom	4	nmod	_	_
9	Kennedy	Kennedy	PROPN	PM|NOM	Case=Nom	8	name	_	_
10	.	.	PUNCT	MAD	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is universal.

177 nodes (0%) are attached to their parents as `discourse`.

177 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.15819209039548.

The following 25 pairs of parts of speech are connected with `discourse`: [sv-pos/VERB]()-[sv-pos/INTJ]() (68; 38% instances), [sv-pos/NOUN]()-[sv-pos/NUM]() (18; 10% instances), [sv-pos/ADJ]()-[sv-pos/INTJ]() (17; 10% instances), [sv-pos/NOUN]()-[sv-pos/INTJ]() (11; 6% instances), [sv-pos/VERB]()-[sv-pos/NOUN]() (9; 5% instances), [sv-pos/ADV]()-[sv-pos/INTJ]() (6; 3% instances), [sv-pos/PRON]()-[sv-pos/INTJ]() (6; 3% instances), [sv-pos/PROPN]()-[sv-pos/INTJ]() (6; 3% instances), [sv-pos/ADP]()-[sv-pos/INTJ]() (5; 3% instances), [sv-pos/VERB]()-[sv-pos/VERB]() (5; 3% instances), [sv-pos/VERB]()-[sv-pos/NUM]() (4; 2% instances), [sv-pos/INTJ]()-[sv-pos/INTJ]() (3; 2% instances), [sv-pos/VERB]()-[sv-pos/ADV]() (3; 2% instances), [sv-pos/VERB]()-[sv-pos/PROPN]() (3; 2% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (2; 1% instances), [sv-pos/VERB]()-[sv-pos/PRON]() (2; 1% instances), [sv-pos/ADJ]()-[sv-pos/NUM]() (1; 1% instances), [sv-pos/ADJ]()-[sv-pos/PRON]() (1; 1% instances), [sv-pos/AUX]()-[sv-pos/INTJ]() (1; 1% instances), [sv-pos/AUX]()-[sv-pos/PRON]() (1; 1% instances), [sv-pos/PART]()-[sv-pos/INTJ]() (1; 1% instances), [sv-pos/PRON]()-[sv-pos/ADV]() (1; 1% instances), [sv-pos/PRON]()-[sv-pos/VERB]() (1; 1% instances), [sv-pos/PROPN]()-[sv-pos/NUM]() (1; 1% instances), [sv-pos/VERB]()-[sv-pos/ADP]() (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 discourse	color:blue
1	Men	_	CONJ	_	_	2	cc	_	_
2	nej	_	INTJ	_	_	5	discourse	_	_
3	,	_	PUNCT	Comma	_	2	punct	_	_
4	det	_	PRON	EX-P3SG	_	5	expl	_	_
5	verkade	_	VERB	PAST-ACT	_	0	root	_	_
6	ändå	_	ADV	_	_	5	advmod	_	_
7	inte	_	PART	NEG	_	5	neg	_	_
8	så	_	ADV	_	_	5	advmod	_	_
9	.	_	PUNCT	Period	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 discourse	color:blue
1	1	_	NUM	ID	_	2	discourse	_	_
2	Filterfält	_	NOUN	IND-NOM	_	0	root	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 discourse	color:blue
1	Ja	_	INTJ	_	_	6	discourse	_	_
2	,	_	PUNCT	Comma	_	1	punct	_	_
3	det	_	PRON	PERS-P3SG	_	6	nsubj	_	_
4	var	_	VERB	PAST-ACT	_	6	cop	_	_
5	fullt	_	ADV	_	_	6	advmod	_	_
6	möjligt	_	ADJ	POS-SG-IND	_	0	root	_	_
7	.	_	PUNCT	Period	_	6	punct	_	_

~~~


