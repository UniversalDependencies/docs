

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.
There are 2 language-specific subtypes of `det`: [det:poss](), [det:predet]().

45276 nodes (15%) are attached to their parents as `det`.

45262 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14433695556145.

The following 11 pairs of parts of speech are connected with `det`: [it-pos/NOUN]()-[it-pos/DET]() (39792; 88% instances), [it-pos/PROPN]()-[it-pos/DET]() (3196; 7% instances), [it-pos/NUM]()-[it-pos/DET]() (1060; 2% instances), [it-pos/PRON]()-[it-pos/DET]() (679; 1% instances), [it-pos/ADJ]()-[it-pos/DET]() (189; 0% instances), [it-pos/VERB]()-[it-pos/DET]() (157; 0% instances), [it-pos/SYM]()-[it-pos/DET]() (83; 0% instances), [it-pos/ADV]()-[it-pos/DET]() (72; 0% instances), [it-pos/ADP]()-[it-pos/DET]() (29; 0% instances), [it-pos/X]()-[it-pos/DET]() (13; 0% instances), [it-pos/PUNCT]()-[it-pos/DET]() (6; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Tutti	tutto	DET	T	Gender=Masc|Number=Plur|PronType=Predet	3	det:predet	_	_
2	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	_	_
3	esseri	essere	NOUN	S	Gender=Masc|Number=Plur	5	nsubj	_	_
4	umani	umano	ADJ	A	Gender=Masc|Number=Plur	3	amod	_	_
5	sanno	sapere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	di	di	ADP	E	_	9	mark	_	_
7	poter	potere	AUX	VM	VerbForm=Inf	9	aux	_	_
8	essere	essere	VERB	V	VerbForm=Inf	9	cop	_	_
9	più	più	ADV	B	_	5	xcomp	_	_
10	di	di	ADP	E	_	11	case	_	_
11	ciò	ciò	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	9	nmod	_	_
12	che	che	PRON	PR	PronType=Rel	13	nsubj	_	_
13	sono	essere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	acl:relcl	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	Alcune	alcuno	DET	DI	Gender=Fem|Number=Plur|PronType=Ind	2	det	_	_
2	chiamate	chiamata	NOUN	S	Gender=Fem|Number=Plur	3	nsubj	_	_
3	partirono	partire	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	da	da	ADP	E	_	6	case	_	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	Quirinale	Quirinale	PROPN	SP	_	3	nmod	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Da	da	ADP	E	_	3	case	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	'93	'93	NUM	N	NumType=Card	4	nmod	_	_
4	dirige	dirigere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	Festival	Festival	PROPN	SP	_	4	dobj	_	_
7	di	di	ADP	E	_	8	case	_	_
8	Taormina	Taormina	PROPN	SP	_	6	nmod	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	4	punct	_	_

~~~


