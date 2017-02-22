

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Basque)

This relation is universal.

3340 nodes (3%) are attached to their parents as `amod`.

2393 instances of `amod` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.07664670658683.

The following 16 pairs of parts of speech are connected with `amod`: [eu-pos/NOUN]()-[eu-pos/ADJ]() (2753; 82% instances), [eu-pos/NOUN]()-[eu-pos/NUM]() (437; 13% instances), [eu-pos/PROPN]()-[eu-pos/ADJ]() (51; 2% instances), [eu-pos/ADJ]()-[eu-pos/ADJ]() (26; 1% instances), [eu-pos/PROPN]()-[eu-pos/NUM]() (22; 1% instances), [eu-pos/ADP]()-[eu-pos/NUM]() (21; 1% instances), [eu-pos/DET]()-[eu-pos/ADJ]() (9; 0% instances), [eu-pos/NUM]()-[eu-pos/NUM]() (6; 0% instances), [eu-pos/CCONJ]()-[eu-pos/NUM]() (5; 0% instances), [eu-pos/ADJ]()-[eu-pos/NUM]() (3; 0% instances), [eu-pos/PUNCT]()-[eu-pos/NUM]() (2; 0% instances), [eu-pos/ADJ]()-[eu-pos/NOUN]() (1; 0% instances), [eu-pos/ADJ]()-[eu-pos/PROPN]() (1; 0% instances), [eu-pos/NUM]()-[eu-pos/ADJ]() (1; 0% instances), [eu-pos/SYM]()-[eu-pos/ADJ]() (1; 0% instances), [eu-pos/VERB]()-[eu-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 amod	color:blue
1	Athleticek	Athletic	PROPN	_	Case=Erg|Definite=Def|Number=Sing	5	nsubj	_	_
2	presio	presio	NOUN	_	_	4	obj	_	_
3	itzela	itzel	ADJ	_	Case=Abs|Definite=Def|Number=Sing	2	amod	_	_
4	pairatu	pairatu	VERB	_	VerbForm=Part	5	xcomp	_	_
5	beharko	behar_izan	VERB	_	_	0	root	_	_
6	du	*edun	AUX	_	Mood=Ind|Number[abs]=Sing|Number[erg]=Sing|Person[abs]=3|Person[erg]=3	5	aux	_	SpaceAfter=No
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Bigarren	bigarren	NUM	_	NumType=Ord	2	amod	_	_
2	marrazkian	marrazki	NOUN	_	Animacy=Inan|Case=Ine|Definite=Def|Number=Sing	3	obl	_	_
3	agertzen	agertu	VERB	_	Aspect=Imp|VerbForm=Inf	5	acl	_	_
4	den	izan	AUX	_	Mood=Ind|Number[abs]=Sing|Person[abs]=3	3	aux	_	_
5	muntaia	muntaia	NOUN	_	Case=Abs|Definite=Def|Number=Sing	6	obj	_	_
6	egizu	egin	VERB	_	Aspect=Prog|Mood=Imp|Number[abs]=Sing|Number[erg]=Plur|Person[abs]=3|Person[erg]=1	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 amod	color:blue
1	A	a	INTJ	_	_	6	discourse	_	_
2	bon	bon	INTJ	_	_	6	discourse	_	_
3	Merzedez	Merzedez	PROPN	_	_	5	obj	_	_
4	berria	berri	ADJ	_	Case=Abs|Definite=Def|Number=Sing	3	amod	_	_
5	ezarria	ezarri	VERB	_	Case=Abs|Definite=Def|Number=Sing|VerbForm=Part	0	root	_	_
6	duzue	ukan	AUX	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Number[erg]=Plur|Person[abs]=3|Person[erg]=2	5	cop	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	zoin	zein	DET	_	Case=Abs|Definite=Ind	7	obj	_	SpaceAfter=No
9	?	?	PUNCT	_	_	5	punct	_	_

~~~


