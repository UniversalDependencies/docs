

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

385 nodes (0%) are attached to their parents as `parataxis`.

295 instances of `parataxis` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.6441558441558.

The following 23 pairs of parts of speech are connected with `parataxis`: [it-pos/VERB]()-[it-pos/VERB]() (216; 56% instances), [it-pos/NOUN]()-[it-pos/VERB]() (46; 12% instances), [it-pos/ADJ]()-[it-pos/VERB]() (37; 10% instances), [it-pos/VERB]()-[it-pos/NOUN]() (19; 5% instances), [it-pos/NOUN]()-[it-pos/NOUN]() (15; 4% instances), [it-pos/PROPN]()-[it-pos/PROPN]() (11; 3% instances), [it-pos/PROPN]()-[it-pos/VERB]() (8; 2% instances), [it-pos/PRON]()-[it-pos/VERB]() (5; 1% instances), [it-pos/ADV]()-[it-pos/VERB]() (4; 1% instances), [it-pos/NUM]()-[it-pos/VERB]() (3; 1% instances), [it-pos/PROPN]()-[it-pos/NOUN]() (3; 1% instances), [it-pos/ADJ]()-[it-pos/NOUN]() (2; 1% instances), [it-pos/NOUN]()-[it-pos/ADJ]() (2; 1% instances), [it-pos/NOUN]()-[it-pos/PROPN]() (2; 1% instances), [it-pos/VERB]()-[it-pos/ADJ]() (2; 1% instances), [it-pos/VERB]()-[it-pos/PRON]() (2; 1% instances), [it-pos/VERB]()-[it-pos/PROPN]() (2; 1% instances), [it-pos/ADJ]()-[it-pos/ADV]() (1; 0% instances), [it-pos/INTJ]()-[it-pos/VERB]() (1; 0% instances), [it-pos/PRON]()-[it-pos/ADJ]() (1; 0% instances), [it-pos/PROPN]()-[it-pos/ADJ]() (1; 0% instances), [it-pos/PROPN]()-[it-pos/PRON]() (1; 0% instances), [it-pos/X]()-[it-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 parataxis	color:blue
1	«	«	PUNCT	FB	_	3	punct	_	SpaceAfter=No
2	Non	non	ADV	BN	PronType=Neg	3	neg	_	_
3	ho	avere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	preclusioni	preclusione	NOUN	S	Gender=Fem|Number=Plur	3	dobj	_	_
5	ideologiche	ideologico	ADJ	A	Gender=Fem|Number=Plur	4	amod	_	SpaceAfter=No
6	»	»	PUNCT	FB	_	3	punct	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	3	punct	_	_
8	spiega	spiegare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	parataxis	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 parataxis	color:blue
1	"	"	PUNCT	FB	_	10	punct	_	SpaceAfter=No
2	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	religione	religione	NOUN	S	Gender=Fem|Number=Sing	10	nsubj	_	_
4	-	-	PUNCT	FB	_	5	punct	_	_
5	sento	sentire	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	parataxis	_	_
6	dire	dire	VERB	V	VerbForm=Inf	5	ccomp	_	_
7	-	-	PUNCT	FB	_	5	punct	_	_
8	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
9	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	fatto	fatto	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
11	privato	privato	ADJ	A	Gender=Masc|Number=Sing	10	amod	_	SpaceAfter=No
12	"	"	PUNCT	FB	_	5	punct	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 parataxis	color:blue
1	È	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	vero	vero	ADJ	A	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	tutti	tutto	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	7	nsubjpass	_	_
5	possiamo	potere	AUX	VM	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	7	aux	_	_
6	essere	essere	AUX	VA	VerbForm=Inf	7	auxpass	_	_
7	sostituiti	sostituire	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	2	parataxis	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	2	punct	_	_

~~~


