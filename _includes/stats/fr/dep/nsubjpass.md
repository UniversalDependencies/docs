

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

2730 nodes (1%) are attached to their parents as `nsubjpass`.

2703 instances of `nsubjpass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.66996336996337.

The following 20 pairs of parts of speech are connected with `nsubjpass`: [fr-pos/VERB]()-[fr-pos/NOUN]() (1645; 60% instances), [fr-pos/VERB]()-[fr-pos/PRON]() (699; 26% instances), [fr-pos/VERB]()-[fr-pos/PROPN]() (216; 8% instances), [fr-pos/NOUN]()-[fr-pos/PRON]() (52; 2% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (22; 1% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (19; 1% instances), [fr-pos/VERB]()-[fr-pos/NUM]() (17; 1% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (16; 1% instances), [fr-pos/PROPN]()-[fr-pos/NOUN]() (14; 1% instances), [fr-pos/ADJ]()-[fr-pos/PRON]() (8; 0% instances), [fr-pos/PROPN]()-[fr-pos/PRON]() (5; 0% instances), [fr-pos/ADJ]()-[fr-pos/PROPN]() (3; 0% instances), [fr-pos/PROPN]()-[fr-pos/PROPN]() (3; 0% instances), [fr-pos/VERB]()-[fr-pos/SYM]() (3; 0% instances), [fr-pos/VERB]()-[fr-pos/X]() (3; 0% instances), [fr-pos/AUX]()-[fr-pos/PROPN]() (1; 0% instances), [fr-pos/NUM]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/PROPN]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubjpass	color:blue
1	Un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Dem	2	det	_	_
2	autel	autel	NOUN	_	Gender=Masc|Number=Sing	6	nsubjpass	_	_
3	à	à	ADP	_	_	4	case	_	_
4	Jupiter	Jupiter	PROPN	_	_	2	nmod	_	_
5	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	auxpass	_	_
6	érigé	ériger	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
7	à	à	ADP	_	_	9	case	_	_
8	l'	le	DET	_	Definite=Def|Gender=Masc|Number=Sing	9	det	_	_
9	emplacement	emplacement	NOUN	_	Gender=Masc|Number=Sing	6	nmod	_	_
10	de	de	ADP	_	_	12	case	_	_
11	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing	12	det	_	_
12	Temple	temple	NOUN	_	Gender=Masc|Number=Sing	9	nmod	_	_
13	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubjpass	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubjpass	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	auxpass	_	_
3	fêté	fêter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing	6	det	_	_
5	22	22	NUM	_	_	6	nummod	_	_
6	mai	mai	NOUN	_	Gender=Masc|Number=Sing	3	nmod	_	_
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nsubjpass	color:blue
1	Lorgue	Lorgue	PROPN	_	_	7	nsubjpass	_	_
2	de	de	ADP	_	_	3	case	_	_
3	Barbarie	Barbarie	PROPN	_	_	1	nmod	_	_
4	portatif	portatif	ADJ	_	Gender=Masc|Number=Sing	1	amod	_	_
5	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
6	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	7	auxpass	_	_
7	créé	créer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
8	en	en	ADP	_	_	9	case	_	_
9	1890	1890	NUM	_	_	7	nmod	_	_
10	.	.	PUNCT	_	_	7	punct	_	_

~~~


