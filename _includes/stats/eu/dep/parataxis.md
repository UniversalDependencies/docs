

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Basque)

This relation is universal.

49 nodes (0%) are attached to their parents as `parataxis`.

47 instances of `parataxis` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.28571428571429.

The following 6 pairs of parts of speech are connected with `parataxis`: [eu-pos/VERB]()-[eu-pos/NUM]() (23; 47% instances), [eu-pos/VERB]()-[eu-pos/VERB]() (13; 27% instances), [eu-pos/VERB]()-[eu-pos/NOUN]() (7; 14% instances), [eu-pos/VERB]()-[eu-pos/PROPN]() (3; 6% instances), [eu-pos/VERB]()-[eu-pos/SYM]() (2; 4% instances), [eu-pos/VERB]()-[eu-pos/AUX]() (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 parataxis	color:blue
1	Baigorri	Baigorri	PROPN	_	Case=Abs|Definite=Def|Number=Sing	6	nsubj	_	_
2	,	,	PUNCT	_	_	6	punct	_	_
3	berriz	berriz	CONJ	_	_	6	advmod	_	_
4	,	,	PUNCT	_	_	6	punct	_	_
5	Orthezen	Orthez	PROPN	_	Case=Ine|Definite=Def|Number=Sing	6	nmod	_	_
6	ariko	ari_izan	VERB	_	_	0	root	_	_
7	da	izan	AUX	_	Mood=Ind|Number[abs]=Sing|Person[abs]=3	6	aux	_	_
8	(	(	PUNCT	_	_	6	punct	_	_
9	17:30	17:30	NUM	_	NumType=Card	6	parataxis	_	_
10	)	)	PUNCT	_	_	6	punct	_	_
11	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 parataxis	color:blue
1	Baina	baina	CONJ	_	_	4	cc	_	_
2	...	...	PUNCT	_	_	4	punct	_	_
3	ura	ur	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Sing	4	dobj	_	_
4	hastiatzen	hastiatu	VERB	_	Aspect=Imp|VerbForm=Inf	0	root	_	_
5	(	(	PUNCT	_	_	4	punct	_	_
6	gorrotatzen	gorrotatu	VERB	_	Aspect=Imp|VerbForm=Inf	4	parataxis	_	_
7	)	)	PUNCT	_	_	4	punct	_	_
8	dut	*edun	AUX	_	Mood=Ind|Number[abs]=Sing|Number[erg]=Sing|Person[abs]=3|Person[erg]=1	4	aux	_	_
9	!	!	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 parataxis	color:blue
1	Iaz	iaz	ADV	_	_	4	advmod	_	_
2	8.950	8.950	NUM	_	_	3	det	_	_
3	kilo	kilo	NOUN	_	Animacy=Inan|Case=Abs|Definite=Ind	4	dobj	_	_
4	leporatu	leporatu	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	_
5	zituen	*edun	AUX	_	Mood=Ind|Number[abs]=Plur|Number[erg]=Sing|Person[abs]=3|Person[erg]=3	4	aux	_	_
6	(	(	PUNCT	_	_	4	punct	_	_
7	57	57	NUM	_	_	8	nummod	_	_
8	jasoaldi	jasoaldi	NOUN	_	Animacy=Inan|Case=Abs|Definite=Ind	4	parataxis	_	_
9	)	)	PUNCT	_	_	4	punct	_	_
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


