

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

4885 nodes (1%) are attached to their parents as `cop`.

4825 instances of `cop` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.15516888433982.

The following 13 pairs of parts of speech are connected with `cop`: [fr-pos/NOUN]()-[fr-pos/VERB]() (2875; 59% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (1509; 31% instances), [fr-pos/PRON]()-[fr-pos/VERB]() (227; 5% instances), [fr-pos/PROPN]()-[fr-pos/VERB]() (145; 3% instances), [fr-pos/ADV]()-[fr-pos/VERB]() (46; 1% instances), [fr-pos/VERB]()-[fr-pos/VERB]() (34; 1% instances), [fr-pos/NUM]()-[fr-pos/VERB]() (28; 1% instances), [fr-pos/SYM]()-[fr-pos/VERB]() (12; 0% instances), [fr-pos/ADP]()-[fr-pos/VERB]() (3; 0% instances), [fr-pos/X]()-[fr-pos/VERB]() (3; 0% instances), [fr-pos/DET]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/INTJ]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/PART]()-[fr-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 cop	color:blue
1	C'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	9	nsubj	_	_
2	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
3	véritablement	véritablement	ADV	_	_	9	advmod	_	_
4	pour	pour	ADP	_	_	7	case	_	_
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
6	futur	futur	ADJ	_	Gender=Masc|Number=Sing	7	amod	_	_
7	baptisé	baptiser	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	9	nmod	_	_
8	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	changement	changement	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
10	de	de	ADP	_	_	11	case	_	_
11	cap	cap	NOUN	_	Gender=Masc|Number=Sing	9	nmod	_	_
12	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
2	ne	ne	PART	_	_	4	neg	_	_
3	sera	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	cop	_	_
4	présent	présent	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
5	que	que	ADV	_	_	10	advmod	_	_
6	durant	durant	ADP	_	_	10	case	_	_
7	les	le	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	10	det	_	_
8	10	10	NUM	_	_	10	nummod	_	_
9	premières	premier	ADJ	_	Gender=Fem|Number=Plur	10	amod	_	_
10	parties	partie	NOUN	_	Gender=Fem|Number=Plur	4	nmod	_	_
11	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cop	color:blue
1	Qu'	que	PRON	_	_	0	root	_	_
2	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	-ce	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	1	expl	_	_
4	qui	qui	PRON	_	_	3	mwe	_	_
5	va	aller	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	augmenter	augmenter	VERB	_	VerbForm=Inf	3	acl:relcl	_	_
7	?	?	PUNCT	_	_	1	punct	_	_

~~~


