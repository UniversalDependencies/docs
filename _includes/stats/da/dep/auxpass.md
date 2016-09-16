

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

606 nodes (1%) are attached to their parents as `auxpass`.

604 instances of `auxpass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.88778877887789.

The following 5 pairs of parts of speech are connected with `auxpass`: [da-pos/VERB]()-[da-pos/AUX]() (573; 95% instances), [da-pos/ADJ]()-[da-pos/AUX]() (16; 3% instances), [da-pos/NOUN]()-[da-pos/AUX]() (14; 2% instances), [da-pos/ADV]()-[da-pos/AUX]() (2; 0% instances), [da-pos/PROPN]()-[da-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 auxpass	color:blue
1	Kelds	Keld	PROPN	_	Case=Gen	2	nmod:poss	_	_
2	oplæg	oplæg	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	4	nsubjpass	_	_
3	blev	blive	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	4	auxpass	_	_
4	fulgt	følge	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part,Trans	9	ccomp	_	_
5	100	100	NUM	_	NumType=Card	6	nummod	_	_
6	procent	procent	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	4	nmod	_	_
7	,	,	PUNCT	_	_	4	punct	_	_
8	"	"	PUNCT	_	_	4	punct	_	_
9	pointerer	pointere	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	Susan	Susan	PROPN	_	_	9	nsubj	_	_
11	Mackensie	Mackensie	PROPN	_	_	10	name	_	_
12	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 auxpass	color:blue
1	-	-	PUNCT	_	_	7	punct	_	_
2	Er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	7	auxpass	_	_
3	du	du	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=2|PronType=Prs	7	nsubjpass	_	_
4	da	da	ADV	_	_	7	advmod	_	_
5	blevet	blive	AUX	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part,Trans	7	cop	_	_
6	helt	helt	ADV	_	Degree=Pos	7	advmod	_	_
7	forrykt	forrykt	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	0	root	_	_
8	?	?	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 auxpass	color:blue
1	Internt	internt	ADV	_	Degree=Pos	7	advmod	_	_
2	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	7	auxpass	_	_
3	bryllups-reportagen	bryllups-reportage	NOUN	_	Definite=Def|Gender=Com|Number=Sing	7	nsubjpass	_	_
4	blevet	blive	AUX	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part,Trans	7	cop	_	_
5	en	en	DET	_	Gender=Com|Number=Sing|PronType=Ind	7	det	_	_
6	varm	varm	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	7	amod	_	_
7	kartoffel	kartoffel	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	0	root	_	_
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


