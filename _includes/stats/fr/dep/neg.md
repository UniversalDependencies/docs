

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

2921 nodes (1%) are attached to their parents as `neg`.

2380 instances of `neg` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.9123587812393.

The following 25 pairs of parts of speech are connected with `neg`: [fr-pos/VERB]()-[fr-pos/PART]() (1345; 46% instances), [fr-pos/VERB]()-[fr-pos/ADV]() (876; 30% instances), [fr-pos/ADJ]()-[fr-pos/PART]() (138; 5% instances), [fr-pos/ADJ]()-[fr-pos/ADV]() (127; 4% instances), [fr-pos/NOUN]()-[fr-pos/PART]() (117; 4% instances), [fr-pos/NOUN]()-[fr-pos/ADV]() (115; 4% instances), [fr-pos/NOUN]()-[fr-pos/DET]() (109; 4% instances), [fr-pos/ADV]()-[fr-pos/ADV]() (21; 1% instances), [fr-pos/PRON]()-[fr-pos/ADV]() (11; 0% instances), [fr-pos/ADV]()-[fr-pos/PART]() (9; 0% instances), [fr-pos/PROPN]()-[fr-pos/ADV]() (9; 0% instances), [fr-pos/VERB]()-[fr-pos/PRON]() (9; 0% instances), [fr-pos/PRON]()-[fr-pos/PART]() (8; 0% instances), [fr-pos/PROPN]()-[fr-pos/PART]() (7; 0% instances), [fr-pos/AUX]()-[fr-pos/PART]() (5; 0% instances), [fr-pos/AUX]()-[fr-pos/ADV]() (4; 0% instances), [fr-pos/NOUN]()-[fr-pos/CONJ]() (2; 0% instances), [fr-pos/VERB]()-[fr-pos/SCONJ]() (2; 0% instances), [fr-pos/ADJ]()-[fr-pos/DET]() (1; 0% instances), [fr-pos/ADP]()-[fr-pos/ADV]() (1; 0% instances), [fr-pos/ADP]()-[fr-pos/PART]() (1; 0% instances), [fr-pos/CONJ]()-[fr-pos/ADV]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/SCONJ]()-[fr-pos/ADV]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 neg	color:blue
1	Les	le	DET	_	Definite=Def|Gender=Fem|Number=Plur	2	det	_	_
2	compagnies	compagnie	NOUN	_	Gender=Fem|Number=Plur	8	nsubj	_	_
3	aériennes	aérien	ADJ	_	Gender=Fem|Number=Plur	2	amod	_	_
4	à	à	ADP	_	_	6	case	_	_
5	bas	bas	ADJ	_	Gender=Masc|Number=Sing	6	amod	_	_
6	coût	coût	NOUN	_	Gender=Masc|Number=Sing	2	nmod	_	_
7	ne	ne	PART	_	_	8	neg	_	_
8	connaissent	connaître	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	pas	pas	ADV	_	_	8	neg	_	_
10	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing	11	det	_	_
11	crise	crise	NOUN	_	Gender=Fem|Number=Sing	8	dobj	_	_
12	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 neg	color:blue
1	Les	le	DET	_	Definite=Def|Gender=Fem|Number=Plur	2	det	_	_
2	compagnies	compagnie	NOUN	_	Gender=Fem|Number=Plur	8	nsubj	_	_
3	aériennes	aérien	ADJ	_	Gender=Fem|Number=Plur	2	amod	_	_
4	à	à	ADP	_	_	6	case	_	_
5	bas	bas	ADJ	_	Gender=Masc|Number=Sing	6	amod	_	_
6	coût	coût	NOUN	_	Gender=Masc|Number=Sing	2	nmod	_	_
7	ne	ne	PART	_	_	8	neg	_	_
8	connaissent	connaître	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	pas	pas	ADV	_	_	8	neg	_	_
10	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing	11	det	_	_
11	crise	crise	NOUN	_	Gender=Fem|Number=Sing	8	dobj	_	_
12	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 neg	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
2	ne	ne	PART	_	_	4	neg	_	_
3	sera	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	cop	_	_
4	présent	présent	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
5	que	que	ADV	_	_	10	advmod	_	_
6	durant	durant	ADP	_	_	10	case	_	_
7	les	le	DET	_	Definite=Def|Gender=Fem|Number=Plur	10	det	_	_
8	10	10	NUM	_	_	10	nummod	_	_
9	premières	premier	ADJ	_	Gender=Fem|Number=Plur	10	amod	_	_
10	parties	partie	NOUN	_	Gender=Fem|Number=Plur	4	nmod	_	_
11	.	.	PUNCT	_	_	4	punct	_	_

~~~


