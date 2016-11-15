

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

1936 nodes (1%) are attached to their parents as `neg`.

1910 instances of `neg` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.89566115702479.

The following 10 pairs of parts of speech are connected with `neg`: [it-pos/VERB]()-[it-pos/ADV]() (1465; 76% instances), [it-pos/ADJ]()-[it-pos/ADV]() (196; 10% instances), [it-pos/NOUN]()-[it-pos/ADV]() (151; 8% instances), [it-pos/ADV]()-[it-pos/ADV]() (74; 4% instances), [it-pos/PRON]()-[it-pos/ADV]() (28; 1% instances), [it-pos/PROPN]()-[it-pos/ADV]() (10; 1% instances), [it-pos/AUX]()-[it-pos/ADV]() (7; 0% instances), [it-pos/CONJ]()-[it-pos/ADV]() (3; 0% instances), [it-pos/NUM]()-[it-pos/ADV]() (1; 0% instances), [it-pos/SCONJ]()-[it-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 neg	color:blue
1	L'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No
2	apprendista	apprendista	NOUN	S	Number=Sing	9	nsubj	_	_
3	stregone	stregone	NOUN	S	Gender=Masc|Number=Sing	2	compound	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	2	punct	_	_
5	evidentemente	evidentemente	ADV	B	_	9	advmod	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	5	punct	_	_
7	non	non	ADV	BN	PronType=Neg	9	neg	_	_
8	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	_
9	rinunciato	rinunciare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
10	"	"	PUNCT	FB	_	9	punct	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 neg	color:blue
1	Invece	invece	ADV	B	_	4	advmod	_	_
2	non	non	ADV	BN	PronType=Neg	4	neg	_	_
3	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	vero	vero	ADJ	A	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
5	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 neg	color:blue
1	Ma	ma	CONJ	CC	_	5	cc	_	_
2	non	non	ADV	BN	PronType=Neg	5	neg	_	_
3	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	caso	caso	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
6	di	di	ADP	E	_	7	mark	_	_
7	pensare	pensare	VERB	V	VerbForm=Inf	5	acl	_	_
8	solo	solo	ADV	B	_	7	advmod	_	_
9	a	a	ADP	E	_	12	case	_	_
10	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	12	det	_	_
11	grandi	grande	ADJ	A	Number=Plur	12	amod	_	_
12	esempi	esempio	NOUN	S	Gender=Masc|Number=Plur	7	nmod	_	_
13	storici	storico	ADJ	A	Gender=Masc|Number=Plur	12	amod	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	5	punct	_	_

~~~


