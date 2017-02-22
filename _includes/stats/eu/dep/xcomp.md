

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Basque)

This relation is universal.

1120 nodes (1%) are attached to their parents as `xcomp`.

918 instances of `xcomp` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.20178571428571.

The following 28 pairs of parts of speech are connected with `xcomp`: [eu-pos/VERB]()-[eu-pos/VERB]() (818; 73% instances), [eu-pos/VERB]()-[eu-pos/NOUN]() (118; 11% instances), [eu-pos/VERB]()-[eu-pos/ADJ]() (78; 7% instances), [eu-pos/NOUN]()-[eu-pos/VERB]() (37; 3% instances), [eu-pos/VERB]()-[eu-pos/ADV]() (10; 1% instances), [eu-pos/ADJ]()-[eu-pos/VERB]() (8; 1% instances), [eu-pos/AUX]()-[eu-pos/VERB]() (8; 1% instances), [eu-pos/VERB]()-[eu-pos/NUM]() (8; 1% instances), [eu-pos/VERB]()-[eu-pos/PROPN]() (5; 0% instances), [eu-pos/NOUN]()-[eu-pos/NOUN]() (4; 0% instances), [eu-pos/NOUN]()-[eu-pos/ADJ]() (3; 0% instances), [eu-pos/PUNCT]()-[eu-pos/VERB]() (3; 0% instances), [eu-pos/CCONJ]()-[eu-pos/VERB]() (2; 0% instances), [eu-pos/VERB]()-[eu-pos/DET]() (2; 0% instances), [eu-pos/X]()-[eu-pos/NOUN]() (2; 0% instances), [eu-pos/X]()-[eu-pos/VERB]() (2; 0% instances), [eu-pos/ADJ]()-[eu-pos/ADJ]() (1; 0% instances), [eu-pos/ADP]()-[eu-pos/VERB]() (1; 0% instances), [eu-pos/AUX]()-[eu-pos/ADJ]() (1; 0% instances), [eu-pos/AUX]()-[eu-pos/ADV]() (1; 0% instances), [eu-pos/AUX]()-[eu-pos/NOUN]() (1; 0% instances), [eu-pos/AUX]()-[eu-pos/PROPN]() (1; 0% instances), [eu-pos/CCONJ]()-[eu-pos/ADJ]() (1; 0% instances), [eu-pos/DET]()-[eu-pos/NOUN]() (1; 0% instances), [eu-pos/NOUN]()-[eu-pos/ADV]() (1; 0% instances), [eu-pos/NUM]()-[eu-pos/NOUN]() (1; 0% instances), [eu-pos/PROPN]()-[eu-pos/NOUN]() (1; 0% instances), [eu-pos/VERB]()-[eu-pos/CCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 xcomp	color:blue
1	Athleticek	Athletic	PROPN	_	Case=Erg|Definite=Def|Number=Sing	5	nsubj	_	_
2	presio	presio	NOUN	_	_	4	obj	_	_
3	itzela	itzel	ADJ	_	Case=Abs|Definite=Def|Number=Sing	2	amod	_	_
4	pairatu	pairatu	VERB	_	VerbForm=Part	5	xcomp	_	_
5	beharko	behar_izan	VERB	_	_	0	root	_	_
6	du	*edun	AUX	_	Mood=Ind|Number[abs]=Sing|Number[erg]=Sing|Person[abs]=3|Person[erg]=3	5	aux	_	SpaceAfter=No
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 xcomp	color:blue
1	Altxor	altxor	NOUN	_	_	6	nsubj	_	_
2	hauek	hauek	DET	_	Case=Abs|Definite=Def|Number=Plur	1	det	_	_
3	"	"	PUNCT	_	_	6	punct	_	SpaceAfter=No
4	antzinatekoak	antzinate	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Plur	6	xcomp	_	SpaceAfter=No
5	"	"	PUNCT	_	_	6	punct	_	_
6	deitzen	deitu	VERB	_	Aspect=Imp|VerbForm=Inf	0	root	_	_
7	dira	izan	AUX	_	Mood=Ind|Number[abs]=Plur|Person[abs]=3	6	aux	_	SpaceAfter=No
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 xcomp	color:blue
1	Leial	leial	ADJ	_	Case=Abs|Definite=Ind	3	xcomp	_	_
2	ez	ez	PART	_	Polarity=Neg	3	advmod	_	_
3	jokatzea	jokatu	VERB	_	Case=Abs	4	xcomp	_	_
4	leporatu	leporatu	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	_
5	zien	*edun	AUX	_	Mood=Ind|Number[abs]=Sing|Number[dat]=Plur|Number[erg]=Sing|Person[abs]=3|Person[dat]=3|Person[erg]=3	4	aux	_	_
6	Mayorrek	Mayor	PROPN	_	Case=Erg|Definite=Def|Number=Sing	4	nsubj	_	_
7	alderdi	alderdi	NOUN	_	_	4	iobj	_	_
8	abertzaleei	abertzale	ADJ	_	Case=Dat|Definite=Def|Number=Plur	7	amod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	4	punct	_	_

~~~


