

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

1906 nodes (1%) are attached to their parents as `nsubjpass`.

1335 instances of `nsubjpass` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.96379853095488.

The following 17 pairs of parts of speech are connected with `nsubjpass`: [it-pos/VERB]()-[it-pos/NOUN]() (1486; 78% instances), [it-pos/VERB]()-[it-pos/PRON]() (243; 13% instances), [it-pos/VERB]()-[it-pos/PROPN]() (136; 7% instances), [it-pos/VERB]()-[it-pos/NUM]() (9; 0% instances), [it-pos/ADJ]()-[it-pos/NOUN]() (8; 0% instances), [it-pos/VERB]()-[it-pos/ADJ]() (7; 0% instances), [it-pos/AUX]()-[it-pos/NOUN]() (4; 0% instances), [it-pos/ADJ]()-[it-pos/PROPN]() (2; 0% instances), [it-pos/VERB]()-[it-pos/SYM]() (2; 0% instances), [it-pos/VERB]()-[it-pos/VERB]() (2; 0% instances), [it-pos/ADJ]()-[it-pos/PRON]() (1; 0% instances), [it-pos/AUX]()-[it-pos/PRON]() (1; 0% instances), [it-pos/NOUN]()-[it-pos/NOUN]() (1; 0% instances), [it-pos/NOUN]()-[it-pos/PRON]() (1; 0% instances), [it-pos/NOUN]()-[it-pos/PROPN]() (1; 0% instances), [it-pos/PRON]()-[it-pos/PROPN]() (1; 0% instances), [it-pos/X]()-[it-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubjpass	color:blue
1	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	credito	credito	NOUN	S	Gender=Masc|Number=Sing	5	nsubjpass	_	_
3	relativo	relativo	ADJ	A	Gender=Masc|Number=Sing	2	amod	_	_
4	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	auxpass	_	_
5	privilegiato	privilegiare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	a	a	ADP	E	_	7	case	_	_
7	norma	norma	NOUN	S	Gender=Fem|Number=Sing	5	nmod	_	_
8	di	di	ADP	E	_	10	case	_	_
9	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	10	det	_	_
10	leggi	legge	NOUN	S	Gender=Fem|Number=Plur	7	nmod	_	_
11	speciali	speciale	ADJ	A	Number=Plur	10	amod	_	_
12	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 nsubjpass	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nsubjpass	color:blue
1	Quando	quando	ADV	B	_	3	advmod	_	_
2	venne	venire	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	auxpass	_	_
3	ucciso	uccidere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	John	John	PROPN	SP	_	3	nsubjpass	_	_
5	Lennon	Lennon	PROPN	SP	_	4	name	_	_
6	?	?	PUNCT	FS	_	3	punct	_	_

~~~


