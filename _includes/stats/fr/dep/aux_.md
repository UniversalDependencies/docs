

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

6156 nodes (2%) are attached to their parents as `aux`.

6147 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.55994152046784.

The following 11 pairs of parts of speech are connected with `aux`: [fr-pos/VERB]()-[fr-pos/AUX]() (5819; 95% instances), [fr-pos/NOUN]()-[fr-pos/AUX]() (149; 2% instances), [fr-pos/ADJ]()-[fr-pos/AUX]() (146; 2% instances), [fr-pos/PROPN]()-[fr-pos/AUX]() (14; 0% instances), [fr-pos/PRON]()-[fr-pos/AUX]() (13; 0% instances), [fr-pos/VERB]()-[fr-pos/VERB]() (6; 0% instances), [fr-pos/NUM]()-[fr-pos/AUX]() (4; 0% instances), [fr-pos/ADV]()-[fr-pos/AUX]() (2; 0% instances), [fr-pos/AUX]()-[fr-pos/AUX]() (1; 0% instances), [fr-pos/INTJ]()-[fr-pos/AUX]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux	color:blue
1	Elle	elle	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	fonce	foncer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	et	et	CONJ	_	_	2	cc	_	_
4	c'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	5	nsubj	_	_
5	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	conj	_	_
6	cette	ce	DET	_	Gender=Fem|Number=Sing	7	det	_	_
7	audace	audace	NOUN	_	Gender=Fem|Number=Sing	5	dobj	_	_
8	qui	qui	PRON	_	PronType=Rel	10	nsubj	_	_
9	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
10	récompensée	récompenser	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	7	acl:relcl	_	_
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
3	également	également	ADV	_	_	5	advmod	_	_
4	été	être	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	cop	_	_
5	capitaine	capitaine	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
6	de	de	ADP	_	_	8	case	_	_
7	l'	le	DET	_	Definite=Def|Gender=Fem|Number=Sing	8	det	_	_
8	équipe	équipe	NOUN	_	Gender=Fem|Number=Sing	5	nmod	_	_
9	bruxelloise	bruxellois	ADJ	_	Gender=Fem|Number=Sing	8	amod	_	_
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux	color:blue
1	En	en	ADP	_	_	2	case	_	_
2	1927	1927	NUM	_	_	6	nmod	_	_
3	Marilyn	Marilyn	PROPN	_	_	6	nsubj	_	_
4	Monroe	Monroe	PROPN	_	_	3	name	_	_
5	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	aux	_	_
6	âgée	âgé	ADJ	_	Gender=Fem|Number=Sing	0	root	_	_
7	d'	de	ADP	_	_	9	case	_	_
8	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Dem	9	det	_	_
9	an	an	NOUN	_	Gender=Masc|Number=Sing	6	nmod	_	_
10	.	.	PUNCT	_	_	6	punct	_	_

~~~


