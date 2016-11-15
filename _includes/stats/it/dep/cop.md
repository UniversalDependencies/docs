

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

3032 nodes (1%) are attached to their parents as `cop`.

2419 instances of `cop` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.65798153034301.

The following 10 pairs of parts of speech are connected with `cop`: [it-pos/ADJ]()-[it-pos/VERB]() (1153; 38% instances), [it-pos/NOUN]()-[it-pos/VERB]() (1020; 34% instances), [it-pos/PRON]()-[it-pos/VERB]() (696; 23% instances), [it-pos/PROPN]()-[it-pos/VERB]() (68; 2% instances), [it-pos/VERB]()-[it-pos/VERB]() (34; 1% instances), [it-pos/ADV]()-[it-pos/VERB]() (32; 1% instances), [it-pos/NUM]()-[it-pos/VERB]() (23; 1% instances), [it-pos/X]()-[it-pos/VERB]() (3; 0% instances), [it-pos/ADJ]()-[it-pos/AUX]() (2; 0% instances), [it-pos/SYM]()-[it-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cop	color:blue
1	È	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	vero	vero	ADJ	A	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	tutti	tutto	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	7	nsubjpass	_	_
5	possiamo	potere	AUX	VM	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	7	aux	_	_
6	essere	essere	AUX	VA	VerbForm=Inf	7	auxpass	_	_
7	sostituiti	sostituire	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	2	parataxis	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 cop	color:blue
1	Questa	questo	DET	DD	Gender=Fem|Number=Sing|PronType=Dem	2	det	_	_
2	ricchezza	ricchezza	NOUN	S	Gender=Fem|Number=Sing	5	nsubj	_	_
3	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	tutta	tutto	PRON	PI	Gender=Fem|Number=Sing|PronType=Ind	5	nmod	_	_
5	apparenza	apparenza	NOUN	S	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	È	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	_
2	stata	essere	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	3	cop	_	_
3	quello	quello	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	0	root	_	_
4	che	che	PRON	PR	PronType=Rel	7	dobj	_	_
5	ci	ci	PRON	PC	PronType=Clit	7	expl	_	_
6	si	si	PRON	PC	Person=3|PronType=Clit	7	expl:impers	_	_
7	attendeva	attendere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	acl:relcl	_	SpaceAfter=No
8	:	:	PUNCT	FC	_	3	punct	_	_

~~~


