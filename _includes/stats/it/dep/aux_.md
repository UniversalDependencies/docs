

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.
There are 1 language-specific subtypes of `aux`: [aux:pass]().

5678 nodes (2%) are attached to their parents as `aux`.

5667 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.38728425501937.

The following 9 pairs of parts of speech are connected with `aux`: [it-pos/VERB]()-[it-pos/AUX]() (5425; 96% instances), [it-pos/NOUN]()-[it-pos/AUX]() (114; 2% instances), [it-pos/ADJ]()-[it-pos/AUX]() (91; 2% instances), [it-pos/PRON]()-[it-pos/AUX]() (25; 0% instances), [it-pos/AUX]()-[it-pos/AUX]() (9; 0% instances), [it-pos/PROPN]()-[it-pos/AUX]() (8; 0% instances), [it-pos/ADV]()-[it-pos/AUX]() (4; 0% instances), [it-pos/ADP]()-[it-pos/AUX]() (1; 0% instances), [it-pos/NUM]()-[it-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 aux	color:blue
1	È	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	vero	vero	ADJ	A	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	tutti	tutto	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	7	nsubj:pass	_	_
5	possiamo	potere	AUX	VM	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	7	aux	_	_
6	essere	essere	AUX	VA	VerbForm=Inf	7	aux:pass	_	_
7	sostituiti	sostituire	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	2	parataxis	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 aux	color:blue
1	Esordire	esordire	VERB	V	VerbForm=Inf	8	csubj	_	_
2	quasi	quasi	ADV	B	_	4	advmod	_	_
3	da	da	ADP	E	_	4	case	_	_
4	bambino	bambino	NOUN	S	Gender=Masc|Number=Sing	1	obl	_	_
5	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
6	stato	essere	AUX	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	8	cop	_	_
7	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	problema	problema	NOUN	S	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
9	?	?	PUNCT	FS	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 aux	color:blue
1	Erano	essere	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	2	cop	_	_
2	slegati	slegare	ADJ	A	Gender=Masc|Number=Plur	0	root	_	_
3	e	e	CCONJ	CC	_	9	cc	_	_
4	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	cosa	cosa	NOUN	S	Gender=Fem|Number=Sing	9	nsubj	_	_
6	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	_
7	stata	essere	AUX	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	9	cop	_	_
8	loro	loro	PRON	PE	Number=Plur|Person=3|PronType=Prs	9	iobj	_	_
9	fatale	fatale	ADJ	A	Number=Sing	2	conj	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian-ParTUT)

This relation is universal.
There are 1 language-specific subtypes of `aux`: [aux:pass]().

717 nodes (2%) are attached to their parents as `aux`.

713 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.45467224546722.

The following 6 pairs of parts of speech are connected with `aux`: [it-pos/VERB]()-[it-pos/AUX]() (661; 92% instances), [it-pos/ADJ]()-[it-pos/AUX]() (28; 4% instances), [it-pos/NOUN]()-[it-pos/AUX]() (16; 2% instances), [it-pos/PRON]()-[it-pos/AUX]() (9; 1% instances), [it-pos/AUX]()-[it-pos/AUX]() (2; 0% instances), [it-pos/SYM]()-[it-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	Non	non	ADV	BN	PronType=Neg	3	advmod	_	_
2	puoi	potere	AUX	VM	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	concedere	concedere	VERB	V	VerbForm=Inf	0	root	_	_
4	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	5	det	_	SpaceAfter=No
5	opera	opera	NOUN	S	Gender=Fem|Number=Sing	3	obj	_	_
6	in	in	ADP	E	_	7	case	_	_
7	sublicenza	sublicenza	NOUN	S	Gender=Fem|Number=Sing	3	obl	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux	color:blue
1	Credo	credere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	che	che	SCONJ	CS	_	5	mark	_	_
3	dovremmo	dovere	AUX	VM	Mood=Cnd|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	essere	essere	AUX	VA	VerbForm=Inf	5	cop	_	_
5	capaci	capace	ADJ	A	Number=Plur	1	ccomp	_	_
6	di	di	ADP	E	_	7	mark	_	_
7	dir	dire	VERB	V	VerbForm=Inf	5	advcl	_	_
8	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
9	chiaro	chiaro	ADJ	A	Gender=Masc|Number=Sing	7	advmod	_	_
10	e	e	CCONJ	CC	_	11	cc	_	_
11	forte	forte	ADJ	A	Number=Sing	9	conj	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 aux	color:blue
1	Può	potere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
2	essere	essere	AUX	VA	VerbForm=Inf	4	cop	_	_
3	una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	cosa	cosa	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
5	davvero	davvero	ADV	B	_	6	advmod	_	_
6	complicata	complicato	ADJ	A	Gender=Fem|Number=Sing	4	amod	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	4	punct	_	_
8	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	9	det	_	SpaceAfter=No
9	oceano	oceano	NOUN	S	Gender=Masc|Number=Sing	4	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	4	punct	_	_

~~~


