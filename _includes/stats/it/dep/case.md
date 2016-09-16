

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

38276 nodes (14%) are attached to their parents as `case`.

38274 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.75702790260215.

The following 23 pairs of parts of speech are connected with `case`: [it-pos/NOUN]()-[it-pos/ADP]() (29677; 78% instances), [it-pos/PROPN]()-[it-pos/ADP]() (5074; 13% instances), [it-pos/PRON]()-[it-pos/ADP]() (1629; 4% instances), [it-pos/NUM]()-[it-pos/ADP]() (768; 2% instances), [it-pos/NOUN]()-[it-pos/ADV]() (265; 1% instances), [it-pos/ADV]()-[it-pos/ADP]() (252; 1% instances), [it-pos/ADJ]()-[it-pos/ADP]() (202; 1% instances), [it-pos/VERB]()-[it-pos/ADP]() (117; 0% instances), [it-pos/SYM]()-[it-pos/ADP]() (57; 0% instances), [it-pos/PROPN]()-[it-pos/ADV]() (41; 0% instances), [it-pos/NOUN]()-[it-pos/NOUN]() (35; 0% instances), [it-pos/PRON]()-[it-pos/ADV]() (31; 0% instances), [it-pos/SCONJ]()-[it-pos/ADP]() (30; 0% instances), [it-pos/ADP]()-[it-pos/ADP]() (27; 0% instances), [it-pos/NUM]()-[it-pos/ADV]() (20; 0% instances), [it-pos/ADV]()-[it-pos/ADV]() (17; 0% instances), [it-pos/X]()-[it-pos/ADP]() (14; 0% instances), [it-pos/SCONJ]()-[it-pos/ADV]() (9; 0% instances), [it-pos/ADJ]()-[it-pos/ADV]() (5; 0% instances), [it-pos/PROPN]()-[it-pos/NOUN]() (3; 0% instances), [it-pos/ADJ]()-[it-pos/NOUN]() (1; 0% instances), [it-pos/PUNCT]()-[it-pos/VERB]() (1; 0% instances), [it-pos/VERB]()-[it-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	Corriere	Corriere	PROPN	SP	_	0	root	_	_
2	Sport	Sport	PROPN	SP	_	1	name	_	_
3	da	da	ADP	E	_	4	case	_	_
4	pagina	pagina	NOUN	S	Gender=Fem|Number=Sing	1	nmod	_	_
5	23	23	NUM	N	NumType=Card	4	nummod	_	_
6	a	a	ADP	E	_	7	case	_	_
7	pagina	pagina	NOUN	S	Gender=Fem|Number=Sing	1	nmod	_	_
8	26	26	NUM	N	NumType=Card	7	nummod	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 case	color:blue
1	Alcune	alcuno	DET	DI	Gender=Fem|Number=Plur|PronType=Ind	2	det	_	_
2	chiamate	chiamata	NOUN	S	Gender=Fem|Number=Plur	3	nsubj	_	_
3	partirono	partire	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	da	da	ADP	E	_	6	case	_	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	Quirinale	Quirinale	PROPN	SP	_	3	nmod	_	_
7	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 case	color:blue
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
13	sono	essere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	acl:relcl	_	_
14	.	.	PUNCT	FS	_	5	punct	_	_

~~~


