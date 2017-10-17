

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Basque)

This relation is universal.

55 nodes (0%) are attached to their parents as `discourse`.

37 instances of `discourse` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.87272727272727.

The following 15 pairs of parts of speech are connected with `discourse`: [eu-pos/VERB]()-[eu-pos/PART]() (14; 25% instances), [eu-pos/VERB]()-[eu-pos/INTJ]() (10; 18% instances), [eu-pos/AUX]()-[eu-pos/INTJ]() (6; 11% instances), [eu-pos/VERB]()-[eu-pos/CCONJ]() (5; 9% instances), [eu-pos/AUX]()-[eu-pos/PART]() (4; 7% instances), [eu-pos/VERB]()-[eu-pos/ADJ]() (4; 7% instances), [eu-pos/AUX]()-[eu-pos/X]() (2; 4% instances), [eu-pos/VERB]()-[eu-pos/ADV]() (2; 4% instances), [eu-pos/VERB]()-[eu-pos/X]() (2; 4% instances), [eu-pos/AUX]()-[eu-pos/ADJ]() (1; 2% instances), [eu-pos/AUX]()-[eu-pos/ADV]() (1; 2% instances), [eu-pos/CCONJ]()-[eu-pos/ADV]() (1; 2% instances), [eu-pos/CCONJ]()-[eu-pos/PART]() (1; 2% instances), [eu-pos/VERB]()-[eu-pos/DET]() (1; 2% instances), [eu-pos/VERB]()-[eu-pos/PRON]() (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 discourse	color:blue
1	Ez	ez	PART	_	Polarity=Neg	6	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	6	punct	_	_
3	ez	ez	PART	_	Polarity=Neg	6	advmod	_	_
4	naiz	izan	AUX	_	Mood=Ind|Number[abs]=Sing|Person[abs]=1	6	aux	_	_
5	bakarrik	bakarrik	ADV	_	_	6	advmod	_	_
6	egoiten	egon	VERB	_	Aspect=Imp|VerbForm=Inf	0	root	_	_
7	e	e	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Sing	6	vocative	_	SpaceAfter=No
8	!	!	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 discourse	color:blue
1	-	-	PUNCT	_	_	8	punct	_	_
2	Eskerrak	eskerrak	INTJ	_	_	8	discourse	_	_
3	ez	ez	PART	_	Polarity=Neg	8	advmod	_	_
4	nintzen	izan	AUX	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Person[abs]=1	8	aux	_	_
5	garai	garai	NOUN	_	_	8	obl	_	_
6	hartan	hura	DET	_	Case=Ine|Definite=Def|Number=Sing	5	det	_	_
7	bizi	bizi	NOUN	_	Case=Abs|Definite=Ind	8	compound	_	_
8	izan	izan	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	SpaceAfter=No
9	!	!	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 discourse	color:blue
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


