

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

4053 nodes (1%) are attached to their parents as `nummod`.

2163 instances of `nummod` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.35282506785097.

The following 22 pairs of parts of speech are connected with `nummod`: [it-pos/NOUN]()-[it-pos/NUM]() (2792; 69% instances), [it-pos/VERB]()-[it-pos/NUM]() (826; 20% instances), [it-pos/PROPN]()-[it-pos/NUM]() (182; 4% instances), [it-pos/SYM]()-[it-pos/NUM]() (84; 2% instances), [it-pos/ADJ]()-[it-pos/NUM]() (57; 1% instances), [it-pos/NUM]()-[it-pos/NUM]() (33; 1% instances), [it-pos/NOUN]()-[it-pos/X]() (24; 1% instances), [it-pos/PRON]()-[it-pos/NUM]() (22; 1% instances), [it-pos/ADV]()-[it-pos/NUM]() (14; 0% instances), [it-pos/VERB]()-[it-pos/X]() (5; 0% instances), [it-pos/PUNCT]()-[it-pos/NUM]() (2; 0% instances), [it-pos/X]()-[it-pos/X]() (2; 0% instances), [it-pos/ADJ]()-[it-pos/ADJ]() (1; 0% instances), [it-pos/AUX]()-[it-pos/NUM]() (1; 0% instances), [it-pos/DET]()-[it-pos/NUM]() (1; 0% instances), [it-pos/NOUN]()-[it-pos/ADJ]() (1; 0% instances), [it-pos/NOUN]()-[it-pos/NOUN]() (1; 0% instances), [it-pos/NOUN]()-[it-pos/SYM]() (1; 0% instances), [it-pos/NUM]()-[it-pos/X]() (1; 0% instances), [it-pos/PROPN]()-[it-pos/ADJ]() (1; 0% instances), [it-pos/PUNCT]()-[it-pos/SYM]() (1; 0% instances), [it-pos/X]()-[it-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nummod	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Da	da	ADP	E	_	3	case	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	'93	'93	NUM	N	NumType=Card	4	nummod	_	_
4	dirige	dirigere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	Festival	Festival	PROPN	SP	_	4	dobj	_	_
7	di	di	ADP	E	_	8	case	_	_
8	Taormina	Taormina	PROPN	SP	_	6	nmod	_	_
9	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod	color:blue
1	Feb	Feb	PROPN	SP	_	0	root	_	_
2	26	26	NUM	N	NumType=Card	1	nummod	_	_
3	,	,	PUNCT	FF	_	2	punct	_	_
4	2014	2014	NUM	N	NumType=Card	2	compound	_	_
5	.	.	PUNCT	FS	_	1	punct	_	_

~~~


