

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

173 nodes (0%) are attached to their parents as `dep`.

109 instances of `dep` (63%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.86705202312139.

The following 34 pairs of parts of speech are connected with `dep`: [fr-pos/VERB]()-[fr-pos/NOUN]() (36; 21% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (18; 10% instances), [fr-pos/VERB]()-[fr-pos/PRON]() (15; 9% instances), [fr-pos/VERB]()-[fr-pos/VERB]() (11; 6% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (10; 6% instances), [fr-pos/VERB]()-[fr-pos/PROPN]() (10; 6% instances), [fr-pos/PROPN]()-[fr-pos/PROPN]() (9; 5% instances), [fr-pos/VERB]()-[fr-pos/ADP]() (8; 5% instances), [fr-pos/NOUN]()-[fr-pos/VERB]() (7; 4% instances), [fr-pos/VERB]()-[fr-pos/SYM]() (6; 3% instances), [fr-pos/NOUN]()-[fr-pos/DET]() (4; 2% instances), [fr-pos/PROPN]()-[fr-pos/X]() (4; 2% instances), [fr-pos/NOUN]()-[fr-pos/ADP]() (3; 2% instances), [fr-pos/PRON]()-[fr-pos/NOUN]() (3; 2% instances), [fr-pos/ADJ]()-[fr-pos/SYM]() (2; 1% instances), [fr-pos/ADV]()-[fr-pos/NOUN]() (2; 1% instances), [fr-pos/INTJ]()-[fr-pos/PROPN]() (2; 1% instances), [fr-pos/NOUN]()-[fr-pos/NUM]() (2; 1% instances), [fr-pos/NOUN]()-[fr-pos/SYM]() (2; 1% instances), [fr-pos/PRON]()-[fr-pos/VERB]() (2; 1% instances), [fr-pos/PROPN]()-[fr-pos/SYM]() (2; 1% instances), [fr-pos/PROPN]()-[fr-pos/VERB]() (2; 1% instances), [fr-pos/VERB]()-[fr-pos/NUM]() (2; 1% instances), [fr-pos/ADJ]()-[fr-pos/NUM]() (1; 1% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (1; 1% instances), [fr-pos/ADP]()-[fr-pos/SYM]() (1; 1% instances), [fr-pos/ADV]()-[fr-pos/PRON]() (1; 1% instances), [fr-pos/CCONJ]()-[fr-pos/PRON]() (1; 1% instances), [fr-pos/INTJ]()-[fr-pos/SYM]() (1; 1% instances), [fr-pos/NOUN]()-[fr-pos/ADV]() (1; 1% instances), [fr-pos/NOUN]()-[fr-pos/X]() (1; 1% instances), [fr-pos/PROPN]()-[fr-pos/ADV]() (1; 1% instances), [fr-pos/PROPN]()-[fr-pos/NUM]() (1; 1% instances), [fr-pos/VERB]()-[fr-pos/DET]() (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 dep	color:blue
1	Remarque	remarque	NOUN	_	Gender=Fem|Number=Sing	5	dep	_	_
2	:	:	PUNCT	_	_	1	punct	_	_
3	Chypre	Chypre	PROPN	_	_	5	nsubj	_	_
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	entré	entrer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	en	en	ADP	_	_	7	case	_	_
7	zone	zone	NOUN	_	Gender=Fem|Number=Sing	5	obl	_	_
8	euro	euro	NOUN	_	Gender=Masc|Number=Sing	7	compound	_	_
9	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
10	1	premier	ADJ	_	Gender=Masc|Number=Sing	11	nummod	_	_
11	janvier	janvier	NOUN	_	Gender=Masc|Number=Sing	5	obl	_	_
12	2008	2008	NUM	_	_	11	nmod	_	SpaceAfter=No
13	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 dep	color:blue
1	En	en	ADP	_	_	2	dep	_	_
2	résumé	résumé	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
3	:	:	PUNCT	_	_	2	punct	_	_
4	escrocs	escroc	NOUN	_	Gender=Masc|Number=Plur	2	dep	_	SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	menteurs	menteur	NOUN	_	Gender=Masc|Number=Plur	4	conj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	voleurs	voleur	NOUN	_	Gender=Masc|Number=Plur	4	conj	_	SpaceAfter=No
9	,	,	PUNCT	_	_	2	punct	_	SpaceAfter=No
10	......	......	PUNCT	_	_	2	punct	_	_
11	FUYEZ	fuir	VERB	_	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	2	parataxis	_	_
12	CE	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	13	det	_	_
13	GARAGE	garage	NOUN	_	Gender=Masc|Number=Sing	11	obj	_	_
14	OU	ou	CCONJ	_	_	17	cc	_	_
15	VOUS	vous	PRON	_	Number=Plur|Person=2|PronType=Prs	17	nsubj	_	_
16	N'	ne	ADV	_	Polarity=Neg	17	advmod	_	SpaceAfter=No
17	AUREZ	avoir	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Fut|VerbForm=Fin	11	conj	_	_
18	QUE	que	SCONJ	_	_	17	expl	_	_
19	DES	un	DET	_	Definite=Ind|Gender=Masc|Number=Plur|PronType=Art	20	det	_	_
20	ENNUIS	ennui	NOUN	_	Gender=Masc|Number=Plur	17	obj	_	_
21	!	!	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 dep	color:blue
1	S'	se	PRON	_	Person=3|PronType=Prs	2	dep	_	SpaceAfter=No
2	agit	agir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
3	-il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
4	de	de	ADP	_	_	6	case	_	_
5	«	«	PUNCT	_	_	6	punct	_	_
6	correlajas	correlajas	NOUN	_	Gender=Fem|Number=Plur	2	obl	_	_
7	»	»	PUNCT	_	_	6	punct	_	_
8	ou	ou	CCONJ	_	_	11	cc	_	_
9	de	de	ADP	_	_	11	case	_	_
10	vraies	vrai	ADJ	_	Gender=Fem|Number=Plur	11	amod	_	_
11	corridas	corrida	NOUN	_	Gender=Fem|Number=Plur	6	conj	_	_
12	?	?	PUNCT	_	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-ParTUT)

This relation is universal.

1 nodes (0%) are attached to their parents as `dep`.

1 instances of `dep` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `dep`: [fr-pos/VERB]()-[fr-pos/VERB]() (1; 100% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 dep	color:blue
1	Parallèlement	parallèlement	ADV	B	_	10	advmod	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	nombre	nombre	NOUN	S	Gender=Masc|Number=Sing	10	nsubj	_	_
5	de	de	ADP	E	_	7	case	_	_
6	fausses	faux	ADJ	A	Gender=Fem|Number=Plur	7	amod	_	_
7	pièces	pièces	NOUN	S	Gender=Fem|Number=Plur	4	nmod	_	_
8	en	en	ADP	E	_	9	case	_	_
9	euros	euro	NOUN	S	Gender=Masc|Number=Plur	7	nmod	_	_
10	continue	continuer	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
11	d'	de	ADP	E	_	12	mark	_	SpaceAfter=No
12	augmenter	augmenter	VERB	V	VerbForm=Inf	10	xcomp	_	SpaceAfter=No
13	,	,	PUNCT	FF	_	12	punct	_	_
14	tout	tout	ADV	B	_	16	advmod	_	_
15	en	en	ADP	E	_	16	case	_	_
16	demeurant	demeurer	VERB	V	VerbForm=Ger	12	advcl	_	_
17	limité	limiter	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	16	dep	_	_
18	dans	dans	ADP	E	_	20	case	_	_
19	une	un	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	20	det	_	_
20	perspective	perspective	NOUN	S	Gender=Fem|Number=Sing	17	obl	_	_
21	historique	historique	ADJ	A	Number=Sing	20	amod	_	SpaceAfter=No
22	.	.	PUNCT	FS	_	10	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-Sequoia)

This relation is universal.

263 nodes (0%) are attached to their parents as `dep`.

165 instances of `dep` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.01140684410646.

The following 27 pairs of parts of speech are connected with `dep`: [fr-pos/X]()-[fr-pos/X]() (57; 22% instances), [fr-pos/PROPN]()-[fr-pos/X]() (45; 17% instances), [fr-pos/NOUN]()-[fr-pos/PRON]() (35; 13% instances), [fr-pos/NOUN]()-[fr-pos/ADP]() (31; 12% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (21; 8% instances), [fr-pos/NOUN]()-[fr-pos/X]() (10; 4% instances), [fr-pos/PROPN]()-[fr-pos/PROPN]() (10; 4% instances), [fr-pos/DET]()-[fr-pos/DET]() (6; 2% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (6; 2% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (5; 2% instances), [fr-pos/PRON]()-[fr-pos/ADP]() (5; 2% instances), [fr-pos/ADV]()-[fr-pos/PRON]() (4; 2% instances), [fr-pos/PRON]()-[fr-pos/PRON]() (4; 2% instances), [fr-pos/ADJ]()-[fr-pos/PRON]() (3; 1% instances), [fr-pos/NUM]()-[fr-pos/DET]() (3; 1% instances), [fr-pos/VERB]()-[fr-pos/VERB]() (3; 1% instances), [fr-pos/X]()-[fr-pos/PROPN]() (3; 1% instances), [fr-pos/ADJ]()-[fr-pos/ADJ]() (2; 1% instances), [fr-pos/ADV]()-[fr-pos/NOUN]() (2; 1% instances), [fr-pos/ADV]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/ADV]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADV]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/PUNCT]() (1; 0% instances), [fr-pos/NUM]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/NUM]()-[fr-pos/X]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 dep	color:blue
1	European	European	X	_	_	3	dep	_	_
2	Medicines	Medicines	X	_	_	3	dep	_	_
3	Agency	Agency	X	_	_	0	root	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 dep	color:blue
1	Hälsa	Hälsa	X	_	_	8	dep	_	_
2	Pharma	Pharma	X	_	_	8	dep	_	_
3	GmbH	GmbH	X	_	_	8	dep	_	_
4	Immermannstraße	Immermannstraße	X	_	_	8	dep	_	_
5	9	9	NUM	_	NumType=Card	8	dep	_	_
6	33619	33619	NUM	_	NumType=Card	5	fixed	_	_
7	Bielefeld	Bielefeld	X	_	_	8	dep	_	_
8	Allemagne	Allemagne	PROPN	_	Gender=Fem|Number=Sing	0	root	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 dep	color:blue
1	Appel	appel	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
2	interjeté	interjeter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	1	acl	_	_
3	ce	ce	PRON	_	PronType=Rel	1	dep	_	_
4	qui	qui	PRON	_	PronType=Rel	5	nsubj	_	_
5	suspend	suspendre	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	acl:relcl	_	_
6	son	son	DET	_	Number=Sing|Poss=Yes	7	nmod:poss	_	_
7	application	application	NOUN	_	Gender=Fem|Number=Sing	5	obj	_	SpaceAfter=No
8	.	.	PUNCT	_	_	1	punct	_	_

~~~


