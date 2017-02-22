

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is a language-specific subtype of [aux]().

2762 nodes (1%) are attached to their parents as `aux:pass`.

2760 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.24475018102824.

The following 4 pairs of parts of speech are connected with `aux:pass`: [fr-pos/VERB]()-[fr-pos/AUX]() (2754; 100% instances), [fr-pos/NOUN]()-[fr-pos/AUX]() (4; 0% instances), [fr-pos/ADJ]()-[fr-pos/AUX]() (3; 0% instances), [fr-pos/PRON]()-[fr-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:pass	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj:pass	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
3	fêté	fêter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
5	22	22	NUM	_	_	6	nummod	_	_
6	mai	mai	NOUN	_	Gender=Masc|Number=Sing	3	obl	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj:pass	_	_
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	aux:pass	_	_
4	intendant	intendant	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
5	de	de	ADP	_	_	7	case	_	_
6	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	Guadeloupe	Guadeloupe	PROPN	_	_	4	nmod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	_
9	puis	puis	SCONJ	_	_	12	cc	_	_
10	de	de	ADP	_	_	12	case	_	_
11	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	Martinique	Martinique	PROPN	_	_	7	conj	_	_
13	jusqu'	jusque	ADP	_	_	15	case	_	SpaceAfter=No
14	en	en	ADP	_	_	15	case	_	_
15	1790	1790	NUM	_	_	12	nmod	_	SpaceAfter=No
16	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux:pass	color:blue
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	compagnie	compagnie	NOUN	_	Gender=Fem|Number=Sing	5	nsubj:pass	_	_
3	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	aux:pass	_	_
5	publicly-traded	publicly-traded	ADJ	_	_	0	root	_	_
6	depuis	depuis	ADP	_	_	7	case	_	_
7	1992	1992	NUM	_	_	5	obl	_	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-ParTUT)

This relation is a language-specific subtype of [aux]().

133 nodes (1%) are attached to their parents as `aux:pass`.

133 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.20300751879699.

The following 2 pairs of parts of speech are connected with `aux:pass`: [fr-pos/VERB]()-[fr-pos/AUX]() (132; 99% instances), [fr-pos/ADJ]()-[fr-pos/AUX]() (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux:pass	color:blue
1	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	titre	titre	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
3	de	de	ADP	E	_	5	case	_	_
4	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	5	det	_	SpaceAfter=No
5	oeuvre	oeuvre	NOUN	S	Gender=Masc|Number=Sing	2	nmod	_	_
6	originale	originale	ADJ	A	Gender=Masc|Number=Sing	5	amod	_	_
7	s'	si	ADP	E	_	10	mark	_	SpaceAfter=No
8	il	il	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj:pass	_	_
9	est	être	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux:pass	_	_
10	indiqué	indiquer	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	acl	_	SpaceAfter=No
11	;	;	PUNCT	FC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux:pass	color:blue
1	Les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	2	det	_	_
2	stocks	stocks	NOUN	S	Gender=Fem|Number=Plur	9	nsubj:pass	_	_
3	visés	viser	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	2	acl	_	_
4	à	à	ADP	E	_	6	case	_	_
5	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	point	point	NOUN	S	Gender=Masc|Number=Sing	3	obl	_	_
7	1	1	NUM	N	NumType=Card	6	nummod	_	_
8	sont	être	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	aux:pass	_	_
9	déduits	déduits	ADJ	A	Number=Plur	0	root	_	_
10	de	de	ADP	E	_	12	case	_	_
11	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	quantité	quantité	NOUN	S	Gender=Fem|Number=Sing	9	obl	_	_
13	excédant	excéder	VERB	V	Tense=Pres|VerbForm=Part	12	acl	_	_
14	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	report	report	ADJ	A	Number=Sing	13	obj	_	_
16	normal	normal	ADJ	A	Gender=Masc|Number=Sing	15	amod	_	_
17	de	de	ADP	E	_	18	case	_	_
18	stocks	stocks	ADJ	A	Number=Plur	15	obl	_	SpaceAfter=No
19	.	.	PUNCT	FS	_	9	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-Sequoia)

This relation is a language-specific subtype of [aux]().

657 nodes (1%) are attached to their parents as `aux:pass`.

657 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25570776255708.

The following 3 pairs of parts of speech are connected with `aux:pass`: [fr-pos/VERB]()-[fr-pos/AUX]() (641; 98% instances), [fr-pos/NOUN]()-[fr-pos/AUX]() (13; 2% instances), [fr-pos/ADJ]()-[fr-pos/AUX]() (3; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux:pass	color:blue
1	Comment	comment	ADV	_	PronType=Int	5	advmod	_	_
2	Angiox	Angiox	PROPN	_	_	5	nsubj:pass	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:pass	_	SpaceAfter=No
4	-il	il	PRON	_	Gender=Masc|Number=Sing|Person=3	5	expl	_	_
5	utilisé	utiliser	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
6	?	?	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 aux:pass	color:blue
1	Ce	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	2	det	_	_
2	procédé	procédé	NOUN	_	Gender=Masc|Number=Sing	6	nsubj:pass	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:pass	_	_
4	appelé	appeler	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	6	cop	_	_
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	remodelage	remodelage	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
7	osseux	osseux	ADJ	_	Gender=Masc	6	amod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 12 aux:pass	color:blue
1	L'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No
2	enquête	enquête	NOUN	_	Gender=Fem|Number=Sing	10	nsubj:pass	_	_
3	sur	sur	ADP	_	_	5	case	_	_
4	sa	son	DET	_	Gender=Fem|Number=Sing|Poss=Yes	5	nmod:poss	_	_
5	mort	mort	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	_
6	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
7	été	être	AUX	_	Tense=Past|VerbForm=Part	10	aux:pass	_	_
8	classée	classer	AUX	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	10	cop	_	_
9	sans	sans	ADP	_	_	10	case	_	_
10	suite	suite	NOUN	_	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
11	,	,	PUNCT	_	_	10	punct	_	_
12	étant	être	AUX	_	Tense=Pres|VerbForm=Part	15	aux:pass	_	_
13	considérée	considérer	AUX	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	15	cop	_	_
14	comme	comme	ADP	_	_	15	mark	_	_
15	accidentelle	accidentel	ADJ	_	Gender=Fem|Number=Sing	2	acl	_	SpaceAfter=No
16	.	.	PUNCT	_	_	10	punct	_	_

~~~


