

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

61 nodes (0%) are attached to their parents as `discourse`.

49 instances of `discourse` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.13114754098361.

The following 11 pairs of parts of speech are connected with `discourse`: [it-pos/VERB]()-[it-pos/INTJ]() (35; 57% instances), [it-pos/NOUN]()-[it-pos/INTJ]() (6; 10% instances), [it-pos/ADV]()-[it-pos/INTJ]() (5; 8% instances), [it-pos/ADJ]()-[it-pos/INTJ]() (3; 5% instances), [it-pos/PROPN]()-[it-pos/INTJ]() (3; 5% instances), [it-pos/VERB]()-[it-pos/ADV]() (3; 5% instances), [it-pos/PRON]()-[it-pos/INTJ]() (2; 3% instances), [it-pos/ADJ]()-[it-pos/NOUN]() (1; 2% instances), [it-pos/ADJ]()-[it-pos/X]() (1; 2% instances), [it-pos/INTJ]()-[it-pos/INTJ]() (1; 2% instances), [it-pos/VERB]()-[it-pos/NOUN]() (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 discourse	color:blue
1	"	"	PUNCT	FB	_	7	punct	_	_
2	Grazie	grazie	INTJ	I	_	7	discourse	_	_
3	Italia	Italia	PROPN	SP	_	2	vocative	_	_
4	,	,	PUNCT	FF	_	2	punct	_	_
5	ti	ti	PRON	PC	Number=Sing|Person=2|PronType=Clit	7	iobj	_	_
6	ho	avere	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	dato	dare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
8	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	9	det	_	_
9	oro	oro	NOUN	S	Gender=Masc|Number=Sing	7	dobj	_	_
10	"	"	PUNCT	FB	_	7	punct	_	_
11	.	.	PUNCT	FS	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 discourse	color:blue
1	Oddio	oddio	INTJ	I	_	9	discourse	_	_
2	,	,	PUNCT	FF	_	1	punct	_	_
3	non	non	ADV	BN	PronType=Neg	9	neg	_	_
4	che	che	SCONJ	CS	_	5	mark	_	_
5	Berlusconi	Berlusconi	PROPN	SP	_	9	csubj	_	_
6	sia	essere	VERB	V	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
7	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
8	gran	grande	ADJ	A	Number=Sing	9	amod	_	_
9	femminista	femminista	NOUN	S	Number=Sing	0	root	_	_
10	.	.	PUNCT	FS	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 discourse	color:blue
1	"	"	PUNCT	FB	_	2	punct	_	_
2	Ma	ma	CONJ	CC	_	7	cc	_	_
3	no	no	INTJ	I	_	7	discourse	_	_
4	,	,	PUNCT	FF	_	3	punct	_	_
5	non	non	ADV	BN	PronType=Neg	7	neg	_	_
6	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	così	così	ADV	B	_	0	root	_	_
8	-	-	PUNCT	FB	_	9	punct	_	_
9	replica	replicare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	parataxis	_	_
10	Ante	Ante	PROPN	SP	_	9	nsubj	_	_
11	-	-	PUNCT	FB	_	9	punct	_	_
12	.	.	PUNCT	FS	_	7	punct	_	_

~~~


