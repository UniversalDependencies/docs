

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

2841 nodes (1%) are attached to their parents as `advcl`.

2227 instances of `advcl` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.72016895459345.

The following 29 pairs of parts of speech are connected with `advcl`: [fr-pos/VERB]()-[fr-pos/VERB]() (2292; 81% instances), [fr-pos/NOUN]()-[fr-pos/VERB]() (194; 7% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (114; 4% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (77; 3% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (49; 2% instances), [fr-pos/ADJ]()-[fr-pos/ADJ]() (17; 1% instances), [fr-pos/PRON]()-[fr-pos/VERB]() (17; 1% instances), [fr-pos/NOUN]()-[fr-pos/ADJ]() (14; 0% instances), [fr-pos/ADV]()-[fr-pos/VERB]() (13; 0% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (9; 0% instances), [fr-pos/PROPN]()-[fr-pos/VERB]() (9; 0% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (7; 0% instances), [fr-pos/VERB]()-[fr-pos/PRON]() (6; 0% instances), [fr-pos/VERB]()-[fr-pos/PROPN]() (4; 0% instances), [fr-pos/NOUN]()-[fr-pos/PRON]() (2; 0% instances), [fr-pos/NUM]()-[fr-pos/VERB]() (2; 0% instances), [fr-pos/VERB]()-[fr-pos/ADV]() (2; 0% instances), [fr-pos/VERB]()-[fr-pos/NUM]() (2; 0% instances), [fr-pos/ADJ]()-[fr-pos/ADV]() (1; 0% instances), [fr-pos/ADP]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/ADV]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/DET]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADV]() (1; 0% instances), [fr-pos/NUM]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/SCONJ]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/SYM]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/X]()-[fr-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 advcl	color:blue
1	Elle	elle	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	lutte	lutter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	pour	pour	ADP	_	_	4	mark	_	_
4	échapper	échapper	VERB	_	VerbForm=Inf	2	advcl	_	_
5	à	à	ADP	_	_	7	case	_	_
6	les	le	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	7	det	_	_
7	tueurs	tueur	NOUN	_	Gender=Masc|Number=Plur	4	obl	_	_
8	à	à	ADP	_	_	10	case	_	_
9	ses	son	DET	_	Gender=Fem|Number=Plur|PronType=Prs	10	nmod:poss	_	_
10	trousses	trousses	NOUN	_	Gender=Fem|Number=Plur	4	obl	_	SpaceAfter=No
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 advcl	color:blue
1	Une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
2	bonne	bon	ADJ	_	Gender=Fem|Number=Sing	3	amod	_	_
3	raison	raison	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
4	pour	pour	ADP	_	_	5	mark	_	_
5	faire	faire	VERB	_	VerbForm=Inf	3	advcl	_	_
6	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	détour	détour	NOUN	_	Gender=Masc|Number=Sing	5	obj	_	_
8	à	à	ADP	_	_	9	case	_	_
9	saint	saint	NOUN	_	Gender=Masc|Number=Sing	7	nmod	_	_
10	Jean	Jean	PROPN	_	_	9	flat:name	_	_
11	de	de	ADP	_	_	9	flat:name	_	_
12	Maurienne	Maurienne	PROPN	_	_	9	flat:name	_	SpaceAfter=No
13	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 advcl	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
2	n'	ne	ADV	_	Polarity=Neg	6	advmod	_	SpaceAfter=No
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
4	pas	pas	ADV	_	Polarity=Neg	6	advmod	_	_
5	aussi	aussi	ADV	_	_	6	advmod	_	_
6	anxieux	anxieux	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
7	qu'	que	SCONJ	_	_	10	mark	_	SpaceAfter=No
8	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
9	y	y	PRON	_	_	10	expl	_	_
10	paraît	paraître	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	advcl	_	SpaceAfter=No
11	.	.	PUNCT	_	_	6	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-ParTUT)

This relation is universal.

210 nodes (1%) are attached to their parents as `advcl`.

149 instances of `advcl` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.74285714285714.

The following 12 pairs of parts of speech are connected with `advcl`: [fr-pos/VERB]()-[fr-pos/VERB]() (153; 73% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (29; 14% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (8; 4% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (8; 4% instances), [fr-pos/ADJ]()-[fr-pos/ADJ]() (4; 2% instances), [fr-pos/NOUN]()-[fr-pos/VERB]() (2; 1% instances), [fr-pos/ADV]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/ADV]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 advcl	color:blue
1	Je	je	PRON	PE	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	le	le	PRON	P	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	obj	_	_
3	dis	dire	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	pour	pour	ADP	E	_	5	mark	_	_
5	rappeler	rappeler	VERB	V	VerbForm=Inf	3	advcl	_	_
6	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	position	position	NOUN	S	Gender=Fem|Number=Sing	5	obj	_	_
8	de	de	ADP	E	_	10	case	_	_
9	le	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	10	det	_	_
10	parlement	parlement	NOUN	S	Gender=Masc|Number=Sing	7	nmod	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 advcl	color:blue
1	Quand	quand	SCONJ	CS	_	3	mark	_	_
2	vous	vous	PRON	PE	Number=Plur|Person=2|PronType=Prs	3	nsubj	_	_
3	regardez	regarder	VERB	V	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	10	advcl	_	_
4	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	mycélium	mycélium	NOUN	S	Gender=Masc|Number=Sing	3	obj	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	3	punct	_	_
7	il	il	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
8	est	être	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
9	très	très	ADV	B	_	10	advmod	_	_
10	ramifié	ramifié	ADJ	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 advcl	color:blue
1	Il	il	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
2	est	être	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	difficile	difficile	ADJ	A	Number=Sing	0	root	_	_
4	de	de	ADP	E	_	6	expl	_	_
5	s'	se	PRON	_	Person=3|PronType=Prs	6	expl	_	SpaceAfter=No
6	imaginer	imaginer	VERB	V	VerbForm=Inf	3	csubj	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	6	punct	_	_
8	quand	quand	SCONJ	CS	_	11	mark	_	_
9	on	on	PRON	P	Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	_
10	est	être	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
11	bord	bord	ADJ	A	Number=Sing	6	advcl	_	_
12	de	de	ADP	E	_	14	case	_	_
13	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	Méditerranée	Méditerranée	PROPN	SP	_	11	obl	_	SpaceAfter=No
15	,	,	PUNCT	FF	_	6	punct	_	_
16	qu'	que	SCONJ	CS	_	21	mark	_	SpaceAfter=No
17	en	en	ADP	E	_	18	case	_	_
18	Laponie	Laponie	PROPN	SP	_	21	obl	_	_
19	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	20	det	_	_
20	température	température	NOUN	S	Gender=Fem|Number=Sing	21	nsubj	_	_
21	descend	descendre	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	ccomp	_	_
22	nettement	nettement	ADV	B	_	24	advmod	_	_
23	en	en	ADP	E	_	24	case	_	_
24	dessous	dessous	ADV	B	_	21	advmod	_	_
25	de	de	ADP	E	_	27	case	_	_
26	cette	ce	DET	DD	Gender=Fem|Number=Sing|PronType=Dem	27	det	_	_
27	limite	limite	NOUN	S	Gender=Fem|Number=Sing	24	obl	_	SpaceAfter=No
28	.	.	PUNCT	FS	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-Sequoia)

This relation is universal.

417 nodes (1%) are attached to their parents as `advcl`.

305 instances of `advcl` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.5347721822542.

The following 11 pairs of parts of speech are connected with `advcl`: [fr-pos/VERB]()-[fr-pos/VERB]() (340; 82% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (31; 7% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (13; 3% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (12; 3% instances), [fr-pos/ADJ]()-[fr-pos/ADJ]() (7; 2% instances), [fr-pos/NOUN]()-[fr-pos/VERB]() (7; 2% instances), [fr-pos/ADV]()-[fr-pos/VERB]() (3; 1% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/DET]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 advcl	color:blue
1	Si	si	SCONJ	_	_	5	mark	_	_
2	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	saignement	saignement	NOUN	_	Gender=Masc|Number=Sing	5	nsubj	_	_
4	se	le/lui	PRON	_	Person=3|Reflex=Yes	5	expl	_	_
5	produit	produire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	advcl	_	SpaceAfter=No
6	,	,	PUNCT	_	_	10	punct	_	_
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	traitement	traitement	NOUN	_	Gender=Masc|Number=Sing	10	nsubj:pass	_	_
9	sera	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	10	aux:pass	_	_
10	arrêté	arrêter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 advcl	color:blue
1	Quelques	quelque	DET	_	Definite=Ind|Number=Plur|PronType=Art	2	det	_	_
2	mois	mois	NOUN	_	Gender=Masc|Number=Plur	5	nsubj	_	_
3	auront	avoir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	5	aux	_	_
4	été	être	AUX	_	Tense=Past|VerbForm=Part	5	cop	_	_
5	nécessaires	nécessaire	ADJ	_	Number=Plur	0	root	_	_
6	pour	pour	ADP	_	_	7	mark	_	_
7	mettre	mettre	VERB	_	VerbForm=Inf	5	advcl	_	_
8	en	en	ADP	_	_	9	case	_	_
9	scène	scène	NOUN	_	Gender=Fem|Number=Sing	7	obl	_	_
10	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
11	Petit	petit	ADJ	_	Gender=Masc|Number=Sing	12	amod	_	_
12	Prince	Prince	PROPN	_	Gender=Masc|Number=Sing	7	obj	_	SpaceAfter=No
13	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 10 advcl	color:blue
1	Si	si	SCONJ	_	_	10	mark	_	_
2	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	refus	refus	NOUN	_	Gender=Masc|Number=Sing	10	nsubj	_	_
4	de	de	ADP	_	_	5	mark	_	_
5	sortir	sortir	VERB	_	VerbForm=Inf	3	acl	_	_
6	de	de	ADP	_	_	8	case	_	_
7	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	8	det	_	_
8	tranchées	tranchée	NOUN	_	Gender=Fem|Number=Plur	5	obl	_	_
9	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	10	cop	_	_
10	indiscutable	indiscutable	ADJ	_	Number=Sing	15	advcl	_	SpaceAfter=No
11	,	,	PUNCT	_	_	15	punct	_	_
12	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	faute	faute	NOUN	_	Gender=Fem|Number=Sing	15	nsubj:pass	_	_
14	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	15	aux:pass	_	_
15	partagée	partager	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
16	entre	entre	ADP	_	_	19	case	_	_
17	tous	tout	ADJ	_	Gender=Masc|Number=Plur	19	amod	_	_
18	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	19	det	_	_
19	hommes	homme	NOUN	_	Gender=Masc|Number=Plur	15	obl	_	_
20	et	et	CCONJ	_	_	29	cc	_	_
21	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	_	_
22	choix	choix	NOUN	_	Gender=Masc|Number=Sing	29	nsubj	_	_
23	de	de	ADP	_	_	26	case	_	_
24	ces	ce	DET	_	Number=Plur|PronType=Dem	26	det	_	_
25	4	4	NUM	_	NumType=Card	26	nummod	_	_
26	caporaux	caporal	NOUN	_	Gender=Masc|Number=Plur	22	nmod	_	_
27	fut	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	29	cop	_	_
28	totalement	totalement	ADV	_	_	29	advmod	_	_
29	arbitraire	arbitraire	ADJ	_	Number=Sing	15	conj	_	SpaceAfter=No
30	.	.	PUNCT	_	_	15	punct	_	_

~~~


