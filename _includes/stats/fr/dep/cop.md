

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

5753 nodes (1%) are attached to their parents as `cop`.

5683 instances of `cop` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.1173300886494.

The following 13 pairs of parts of speech are connected with `cop`: [fr-pos/NOUN]()-[fr-pos/VERB]() (3285; 57% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (1716; 30% instances), [fr-pos/PROPN]()-[fr-pos/VERB]() (320; 6% instances), [fr-pos/PRON]()-[fr-pos/VERB]() (246; 4% instances), [fr-pos/NUM]()-[fr-pos/VERB]() (55; 1% instances), [fr-pos/VERB]()-[fr-pos/VERB]() (52; 1% instances), [fr-pos/ADV]()-[fr-pos/VERB]() (50; 1% instances), [fr-pos/SYM]()-[fr-pos/VERB]() (15; 0% instances), [fr-pos/X]()-[fr-pos/VERB]() (8; 0% instances), [fr-pos/ADP]()-[fr-pos/VERB]() (3; 0% instances), [fr-pos/DET]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/INTJ]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/PART]()-[fr-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 cop	color:blue
1	C'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	9	nsubj	_	_
2	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
3	véritablement	véritablement	ADV	_	_	9	advmod	_	_
4	pour	pour	ADP	_	_	6	case	_	_
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing	6	det	_	_
6	futur	futur	NOUN	_	Gender=Masc|Number=Sing	9	nmod	_	_
7	baptisé	baptiser	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	acl	_	_
8	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Dem	9	det	_	_
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
7	les	le	DET	_	Definite=Def|Gender=Fem|Number=Plur	10	det	_	_
8	10	10	NUM	_	_	10	nummod	_	_
9	premières	premier	ADJ	_	Gender=Fem|Number=Plur	10	amod	_	_
10	parties	partie	NOUN	_	Gender=Fem|Number=Plur	4	nmod	_	_
11	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	L'	le	DET	_	Definite=Def|Gender=Masc|Number=Sing	2	det	_	_
2	éditeur-en-chef	éditeur-en-chef	NOUN	_	Gender=Masc|Number=Sing	4	nsubj	_	_
3	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	Corey	Corey	PROPN	_	_	0	root	_	_
5	S.	S.	PROPN	_	_	4	name	_	_
6	Powell	Powell	PROPN	_	_	4	name	_	_
7	.	.	PUNCT	_	_	4	punct	_	_

~~~


