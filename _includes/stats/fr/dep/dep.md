

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

184 nodes (0%) are attached to their parents as `dep`.

119 instances of `dep` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.91847826086957.

The following 35 pairs of parts of speech are connected with `dep`: [fr-pos/VERB]()-[fr-pos/NOUN]() (36; 20% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (18; 10% instances), [fr-pos/VERB]()-[fr-pos/PRON]() (14; 8% instances), [fr-pos/VERB]()-[fr-pos/VERB]() (13; 7% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (11; 6% instances), [fr-pos/VERB]()-[fr-pos/PROPN]() (11; 6% instances), [fr-pos/PROPN]()-[fr-pos/PROPN]() (9; 5% instances), [fr-pos/NOUN]()-[fr-pos/VERB]() (8; 4% instances), [fr-pos/VERB]()-[fr-pos/ADP]() (8; 4% instances), [fr-pos/VERB]()-[fr-pos/SYM]() (7; 4% instances), [fr-pos/NOUN]()-[fr-pos/DET]() (5; 3% instances), [fr-pos/PROPN]()-[fr-pos/X]() (4; 2% instances), [fr-pos/NOUN]()-[fr-pos/ADP]() (3; 2% instances), [fr-pos/NOUN]()-[fr-pos/NUM]() (3; 2% instances), [fr-pos/PRON]()-[fr-pos/NOUN]() (3; 2% instances), [fr-pos/PROPN]()-[fr-pos/NUM]() (3; 2% instances), [fr-pos/VERB]()-[fr-pos/NUM]() (3; 2% instances), [fr-pos/ADJ]()-[fr-pos/SYM]() (2; 1% instances), [fr-pos/ADV]()-[fr-pos/NOUN]() (2; 1% instances), [fr-pos/NOUN]()-[fr-pos/SYM]() (2; 1% instances), [fr-pos/NOUN]()-[fr-pos/X]() (2; 1% instances), [fr-pos/PRON]()-[fr-pos/VERB]() (2; 1% instances), [fr-pos/PROPN]()-[fr-pos/SYM]() (2; 1% instances), [fr-pos/PROPN]()-[fr-pos/VERB]() (2; 1% instances), [fr-pos/ADJ]()-[fr-pos/NUM]() (1; 1% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (1; 1% instances), [fr-pos/ADP]()-[fr-pos/SYM]() (1; 1% instances), [fr-pos/ADV]()-[fr-pos/PRON]() (1; 1% instances), [fr-pos/CONJ]()-[fr-pos/PRON]() (1; 1% instances), [fr-pos/INTJ]()-[fr-pos/PROPN]() (1; 1% instances), [fr-pos/INTJ]()-[fr-pos/SYM]() (1; 1% instances), [fr-pos/NOUN]()-[fr-pos/ADV]() (1; 1% instances), [fr-pos/PROPN]()-[fr-pos/ADV]() (1; 1% instances), [fr-pos/VERB]()-[fr-pos/DET]() (1; 1% instances), [fr-pos/X]()-[fr-pos/X]() (1; 1% instances).


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
7	zone	zone	NOUN	_	Gender=Fem|Number=Sing	5	nmod	_	_
8	euro	euro	NOUN	_	Gender=Masc|Number=Sing	7	compound	_	_
9	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
10	1	premier	ADJ	_	Gender=Masc|Number=Sing	11	nummod	_	_
11	janvier	janvier	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	_
12	2008	2008	NUM	_	_	11	nmod	_	_
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
4	escrocs	escroc	NOUN	_	Gender=Masc|Number=Plur	2	dep	_	_
5	,	,	PUNCT	_	_	4	punct	_	_
6	menteurs	menteur	NOUN	_	Gender=Masc|Number=Plur	4	conj	_	_
7	,	,	PUNCT	_	_	4	punct	_	_
8	voleurs	voleur	NOUN	_	Gender=Masc|Number=Plur	4	conj	_	_
9	,	,	PUNCT	_	_	2	punct	_	_
10	......	......	PUNCT	_	_	2	punct	_	_
11	FUYEZ	fuir	VERB	_	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	2	parataxis	_	_
12	CE	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	13	det	_	_
13	GARAGE	garage	NOUN	_	Gender=Masc|Number=Sing	11	dobj	_	_
14	OU	ou	CONJ	_	_	11	cc	_	_
15	VOUS	vous	PRON	_	Number=Plur|Person=2|PronType=Prs	17	nsubj	_	_
16	N'	ne	PART	_	_	17	neg	_	_
17	AUREZ	avoir	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Fut|VerbForm=Fin	11	conj	_	_
18	QUE	que	SCONJ	_	_	17	expl	_	_
19	DES	un	DET	_	Definite=Ind|Gender=Masc|Number=Plur|PronType=Art	20	det	_	_
20	ENNUIS	ennui	NOUN	_	Gender=Masc|Number=Plur	17	dobj	_	_
21	!	!	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 dep	color:blue
1	S'	se	PRON	_	Person=3|PronType=Prs	2	dep	_	_
2	agit	agir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	-il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
4	de	de	ADP	_	_	6	case	_	_
5	«	«	PUNCT	_	_	6	punct	_	_
6	correlajas	correlajas	NOUN	_	Gender=Fem|Number=Plur	2	nmod	_	_
7	»	»	PUNCT	_	_	6	punct	_	_
8	ou	ou	CONJ	_	_	6	cc	_	_
9	de	de	ADP	_	_	11	case	_	_
10	vraies	vrai	ADJ	_	Gender=Fem|Number=Plur	11	amod	_	_
11	corridas	corrida	NOUN	_	Gender=Fem|Number=Plur	6	conj	_	_
12	?	?	PUNCT	_	_	2	punct	_	_

~~~


