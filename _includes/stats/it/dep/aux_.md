

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

5271 nodes (2%) are attached to their parents as `aux`.

5263 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.41130715234301.

The following 7 pairs of parts of speech are connected with `aux`: [it-pos/VERB]()-[it-pos/AUX]() (5055; 96% instances), [it-pos/NOUN]()-[it-pos/AUX]() (94; 2% instances), [it-pos/ADJ]()-[it-pos/AUX]() (89; 2% instances), [it-pos/PRON]()-[it-pos/AUX]() (25; 0% instances), [it-pos/PROPN]()-[it-pos/AUX]() (4; 0% instances), [it-pos/ADV]()-[it-pos/AUX]() (3; 0% instances), [it-pos/NUM]()-[it-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 aux	color:blue
1	È	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	vero	vero	ADJ	A	Gender=Masc|Number=Sing	0	root	_	_
3	,	,	PUNCT	FF	_	2	punct	_	_
4	tutti	tutto	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	7	nsubjpass	_	_
5	possiamo	potere	AUX	VM	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	7	aux	_	_
6	essere	essere	AUX	VA	VerbForm=Inf	7	auxpass	_	_
7	sostituiti	sostituire	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	2	parataxis	_	_
8	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 aux	color:blue
1	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	gara	gara	NOUN	S	Gender=Fem|Number=Sing	8	nsubj	_	_
3	di	di	ADP	E	_	4	case	_	_
4	Goteborg	Goteborg	PROPN	SP	_	2	nmod	_	_
5	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
6	stata	essere	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	8	cop	_	_
7	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	passaggio	passaggio	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
9	di	di	ADP	E	_	10	case	_	_
10	consegne	consegna	NOUN	S	Gender=Fem|Number=Plur	8	nmod	_	_
11	:	:	PUNCT	FC	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 aux	color:blue
1	Erano	essere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	2	cop	_	_
2	slegati	slegare	ADJ	A	Gender=Masc|Number=Plur	0	root	_	_
3	e	e	CONJ	CC	_	2	cc	_	_
4	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	cosa	cosa	NOUN	S	Gender=Fem|Number=Sing	9	nsubj	_	_
6	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	_
7	stata	essere	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	9	cop	_	_
8	loro	loro	PRON	PE	Number=Plur|Person=3|PronType=Prs	9	iobj	_	_
9	fatale	fatale	ADJ	A	Number=Sing	2	conj	_	_
10	.	.	PUNCT	FS	_	2	punct	_	_

~~~


