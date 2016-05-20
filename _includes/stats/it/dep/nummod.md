

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

3488 nodes (1%) are attached to their parents as `nummod`.

2011 instances of `nummod` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.97993119266055.

The following 17 pairs of parts of speech are connected with `nummod`: [it-pos/NOUN]()-[it-pos/NUM]() (2604; 75% instances), [it-pos/VERB]()-[it-pos/NUM]() (494; 14% instances), [it-pos/PROPN]()-[it-pos/NUM]() (165; 5% instances), [it-pos/SYM]()-[it-pos/NUM]() (84; 2% instances), [it-pos/ADJ]()-[it-pos/NUM]() (41; 1% instances), [it-pos/NUM]()-[it-pos/NUM]() (33; 1% instances), [it-pos/NOUN]()-[it-pos/X]() (24; 1% instances), [it-pos/PRON]()-[it-pos/NUM]() (18; 1% instances), [it-pos/ADV]()-[it-pos/NUM]() (11; 0% instances), [it-pos/VERB]()-[it-pos/X]() (5; 0% instances), [it-pos/PUNCT]()-[it-pos/NUM]() (2; 0% instances), [it-pos/X]()-[it-pos/X]() (2; 0% instances), [it-pos/AUX]()-[it-pos/NUM]() (1; 0% instances), [it-pos/DET]()-[it-pos/NUM]() (1; 0% instances), [it-pos/NOUN]()-[it-pos/SYM]() (1; 0% instances), [it-pos/NUM]()-[it-pos/X]() (1; 0% instances), [it-pos/X]()-[it-pos/NUM]() (1; 0% instances).


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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 nummod	color:blue
1	L'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	2	det	_	_
2	usufruttuario	usufruttuario	NOUN	S	Gender=Masc|Number=Sing	5	nsubj	_	_
3	deve	dovere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	inoltre	inoltre	ADV	B	_	5	advmod	_	_
5	dare	dare	VERB	V	VerbForm=Inf	0	root	_	_
6	idonea	idoneo	ADJ	A	Gender=Fem|Number=Sing	7	amod	_	_
7	garanzia	garanzia	NOUN	S	Gender=Fem|Number=Sing	5	dobj	_	_
8	(	(	PUNCT	FB	_	9	punct	_	_
9	1179	1179	NUM	N	NumType=Card	5	nummod	_	_
10	)	)	PUNCT	FB	_	9	punct	_	_
11	.	.	PUNCT	FS	_	5	punct	_	_

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


