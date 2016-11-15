

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

2812 nodes (1%) are attached to their parents as `auxpass`.

2810 instances of `auxpass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.24288762446657.

The following 4 pairs of parts of speech are connected with `auxpass`: [fr-pos/VERB]()-[fr-pos/AUX]() (2804; 100% instances), [fr-pos/NOUN]()-[fr-pos/AUX]() (4; 0% instances), [fr-pos/ADJ]()-[fr-pos/AUX]() (3; 0% instances), [fr-pos/PRON]()-[fr-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 auxpass	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubjpass	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	auxpass	_	_
3	fêté	fêter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
5	22	22	NUM	_	_	6	nummod	_	_
6	mai	mai	NOUN	_	Gender=Masc|Number=Sing	3	nmod	_	_
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 auxpass	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubjpass	_	_
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	auxpass	_	_
4	intendant	intendant	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
5	de	de	ADP	_	_	7	case	_	_
6	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	Guadeloupe	Guadeloupe	PROPN	_	_	4	nmod	_	_
8	,	,	PUNCT	_	_	4	punct	_	_
9	puis	puis	ADV	_	_	12	advmod	_	_
10	de	de	ADP	_	_	12	case	_	_
11	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	Martinique	Martinique	PROPN	_	_	4	nmod	_	_
13	jusqu'	jusque	ADP	_	_	15	case	_	_
14	en	en	ADP	_	_	15	case	_	_
15	1790	1790	NUM	_	_	4	nmod	_	_
16	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 auxpass	color:blue
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	compagnie	compagnie	NOUN	_	Gender=Fem|Number=Sing	5	nsubjpass	_	_
3	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	auxpass	_	_
5	publicly-traded	publicly-traded	ADJ	_	_	0	root	_	_
6	depuis	depuis	ADP	_	_	7	case	_	_
7	1992	1992	NUM	_	_	5	nmod	_	_
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


