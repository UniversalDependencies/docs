

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

45 nodes (0%) are attached to their parents as `discourse`.

34 instances of `discourse` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.95555555555556.

The following 6 pairs of parts of speech are connected with `discourse`: [fr-pos/VERB]()-[fr-pos/INTJ]() (26; 58% instances), [fr-pos/NOUN]()-[fr-pos/INTJ]() (11; 24% instances), [fr-pos/ADJ]()-[fr-pos/INTJ]() (5; 11% instances), [fr-pos/PRON]()-[fr-pos/INTJ]() (1; 2% instances), [fr-pos/PROPN]()-[fr-pos/INTJ]() (1; 2% instances), [fr-pos/VERB]()-[fr-pos/SYM]() (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 discourse	color:blue
1	Tournons	tourner	VERB	_	Mood=Imp|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	dans	dans	ADP	_	_	4	case	_	_
3	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	Morsure	Morsure	PROPN	_	_	1	nmod	_	_
5	:	:	PUNCT	_	_	1	punct	_	_
6	Ah	ah	INTJ	_	_	1	discourse	_	_
7	!	!	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	Ô	ô	INTJ	_	_	3	discourse	_	_
2	ma	son	DET	_	Gender=Fem|Number=Sing|PronType=Prs	3	nmod:poss	_	_
3	vigne	vigne	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
4	bien	bien	ADV	_	_	5	advmod	_	_
5	aimée	aimer	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	3	amod	_	_
6	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 discourse	color:blue
1	Oui	oui	INTJ	_	_	5	discourse	_	_
2	,	,	PUNCT	_	_	1	punct	_	_
3	c'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	5	nsubj	_	_
4	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	excellent	excellent	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
6	,	,	PUNCT	_	_	5	punct	_	_
7	magnifique	magnifique	ADJ	_	Gender=Masc|Number=Sing	5	conj	_	_
8	,	,	PUNCT	_	_	5	punct	_	_
9	magistral	magistral	ADJ	_	Gender=Masc|Number=Sing	5	conj	_	_
10	!	!	PUNCT	_	_	5	punct	_	_

~~~


