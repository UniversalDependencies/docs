

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

622 nodes (0%) are attached to their parents as `expl`.

541 instances of `expl` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.41800643086817.

The following 19 pairs of parts of speech are connected with `expl`: [fr-pos/VERB]()-[fr-pos/PRON]() (267; 43% instances), [fr-pos/PRON]()-[fr-pos/PART]() (161; 26% instances), [fr-pos/PRON]()-[fr-pos/PRON]() (54; 9% instances), [fr-pos/VERB]()-[fr-pos/SCONJ]() (46; 7% instances), [fr-pos/PROPN]()-[fr-pos/ADP]() (24; 4% instances), [fr-pos/NOUN]()-[fr-pos/PRON]() (18; 3% instances), [fr-pos/NOUN]()-[fr-pos/ADP]() (11; 2% instances), [fr-pos/ADJ]()-[fr-pos/ADP]() (10; 2% instances), [fr-pos/ADJ]()-[fr-pos/PRON]() (8; 1% instances), [fr-pos/NOUN]()-[fr-pos/SCONJ]() (7; 1% instances), [fr-pos/ADJ]()-[fr-pos/SCONJ]() (3; 0% instances), [fr-pos/ADV]()-[fr-pos/PRON]() (3; 0% instances), [fr-pos/VERB]()-[fr-pos/ADP]() (3; 0% instances), [fr-pos/PROPN]()-[fr-pos/PRON]() (2; 0% instances), [fr-pos/ADV]()-[fr-pos/ADP]() (1; 0% instances), [fr-pos/ADV]()-[fr-pos/SCONJ]() (1; 0% instances), [fr-pos/NUM]()-[fr-pos/ADP]() (1; 0% instances), [fr-pos/NUM]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 expl	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
2	n'	ne	PART	_	_	6	neg	_	_
3	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
4	pas	pas	ADV	_	_	6	neg	_	_
5	aussi	aussi	ADV	_	_	6	advmod	_	_
6	anxieux	anxieux	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
7	qu'	que	SCONJ	_	_	10	mark	_	_
8	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
9	y	y	PRON	_	_	10	expl	_	_
10	paraît	paraître	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	advcl	_	_
11	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 expl	color:blue
1	C'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	4	nsubj	_	_
2	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	l'	l'	PART	_	_	4	expl	_	_
4	une	un	PRON	_	Gender=Fem|Number=Sing	0	root	_	_
5	de	de	ADP	_	_	8	case	_	_
6	les	le	DET	_	Definite=Def|Gender=Fem|Number=Plur	8	det	_	_
7	trois	trois	NUM	_	_	8	nummod	_	_
8	banlieues	banlieue	NOUN	_	Gender=Fem|Number=Plur	4	nmod	_	_
9	où	où	PRON	_	PronType=Rel	12	nmod	_	_
10	ce	ce	DET	_	Gender=Masc|Number=Sing	11	det	_	_
11	trafic	trafic	NOUN	_	Gender=Masc|Number=Sing	12	nsubj	_	_
12	domine	dominer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	acl:relcl	_	_
13	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 expl	color:blue
1	Qu'	que	PRON	_	_	0	root	_	_
2	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	-ce	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	1	expl	_	_
4	qui	qui	PRON	_	_	3	mwe	_	_
5	va	aller	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	augmenter	augmenter	VERB	_	VerbForm=Inf	3	acl:relcl	_	_
7	?	?	PUNCT	_	_	1	punct	_	_

~~~


