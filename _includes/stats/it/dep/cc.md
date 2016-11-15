

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

8026 nodes (3%) are attached to their parents as `cc`.

7383 instances of `cc` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.7126837777224.

The following 25 pairs of parts of speech are connected with `cc`: [it-pos/NOUN]()-[it-pos/CONJ]() (3578; 45% instances), [it-pos/VERB]()-[it-pos/CONJ]() (2501; 31% instances), [it-pos/ADJ]()-[it-pos/CONJ]() (913; 11% instances), [it-pos/PROPN]()-[it-pos/CONJ]() (585; 7% instances), [it-pos/PRON]()-[it-pos/CONJ]() (150; 2% instances), [it-pos/NUM]()-[it-pos/CONJ]() (139; 2% instances), [it-pos/ADV]()-[it-pos/CONJ]() (71; 1% instances), [it-pos/NOUN]()-[it-pos/ADV]() (13; 0% instances), [it-pos/VERB]()-[it-pos/SCONJ]() (10; 0% instances), [it-pos/DET]()-[it-pos/CONJ]() (9; 0% instances), [it-pos/CONJ]()-[it-pos/CONJ]() (7; 0% instances), [it-pos/SCONJ]()-[it-pos/CONJ]() (7; 0% instances), [it-pos/NOUN]()-[it-pos/ADP]() (6; 0% instances), [it-pos/X]()-[it-pos/CONJ]() (6; 0% instances), [it-pos/ADP]()-[it-pos/CONJ]() (5; 0% instances), [it-pos/AUX]()-[it-pos/CONJ]() (5; 0% instances), [it-pos/VERB]()-[it-pos/ADV]() (5; 0% instances), [it-pos/ADJ]()-[it-pos/ADV]() (4; 0% instances), [it-pos/NOUN]()-[it-pos/SCONJ]() (4; 0% instances), [it-pos/INTJ]()-[it-pos/CONJ]() (2; 0% instances), [it-pos/SYM]()-[it-pos/CONJ]() (2; 0% instances), [it-pos/ADJ]()-[it-pos/ADP]() (1; 0% instances), [it-pos/NOUN]()-[it-pos/NOUN]() (1; 0% instances), [it-pos/PROPN]()-[it-pos/ADP]() (1; 0% instances), [it-pos/PROPN]()-[it-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cc	color:blue
1	E	e	CONJ	CC	_	4	cc	_	_
2	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	4	det	_	_
3	"	"	PUNCT	FB	_	4	punct	_	SpaceAfter=No
4	colleghi	collega	NOUN	S	Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
5	"	"	PUNCT	FB	_	4	punct	_	_
6	di	di	ADP	E	_	7	case	_	_
7	Saxa	Saxa	PROPN	SP	_	4	nmod	_	_
8	Rubra	Rubra	PROPN	SP	_	7	name	_	SpaceAfter=No
9	?	?	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 cc	color:blue
1	Allora	allora	ADV	B	_	4	cc	_	_
2	mi	mi	PRON	PC	Number=Sing|Person=1|PronType=Clit	4	expl	_	_
3	sono	essere	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	innervosita	innervosire	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	e	e	CONJ	CC	_	4	cc	_	_
6	ho	avere	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	temuto	temere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	conj	_	_
8	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	beffa	beffa	NOUN	S	Gender=Fem|Number=Sing	7	dobj	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 cc	color:blue
1	"	"	PUNCT	FB	_	3	punct	_	SpaceAfter=No
2	Mi	mi	PRON	PC	Number=Sing|Person=1|PronType=Clit	3	iobj	_	_
3	pare	parere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	che	che	SCONJ	CS	_	6	mark	_	_
5	siano	essere	VERB	V	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	proposte	proposta	NOUN	S	Gender=Fem|Number=Plur	3	csubj	_	_
7	serie	serio	ADJ	A	Gender=Fem|Number=Plur	6	amod	_	_
8	e	e	CONJ	CC	_	7	cc	_	_
9	condivisibili	condivisibile	ADJ	A	Number=Plur	7	conj	_	SpaceAfter=No
10	"	"	PUNCT	FB	_	3	punct	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	3	punct	_	_

~~~


