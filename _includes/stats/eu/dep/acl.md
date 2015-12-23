

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Basque)

This relation is universal.

1147 nodes (1%) are attached to their parents as `acl`.

1095 instances of `acl` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.06277244986922.

The following 28 pairs of parts of speech are connected with `acl`: [eu-pos/NOUN]()-[eu-pos/VERB]() (916; 80% instances), [eu-pos/NOUN]()-[eu-pos/ADJ]() (30; 3% instances), [eu-pos/NOUN]()-[eu-pos/NOUN]() (29; 3% instances), [eu-pos/ADJ]()-[eu-pos/VERB]() (28; 2% instances), [eu-pos/ADP]()-[eu-pos/VERB]() (25; 2% instances), [eu-pos/DET]()-[eu-pos/VERB]() (23; 2% instances), [eu-pos/NOUN]()-[eu-pos/AUX]() (14; 1% instances), [eu-pos/NUM]()-[eu-pos/VERB]() (10; 1% instances), [eu-pos/PROPN]()-[eu-pos/VERB]() (10; 1% instances), [eu-pos/NUM]()-[eu-pos/NOUN]() (8; 1% instances), [eu-pos/VERB]()-[eu-pos/VERB]() (7; 1% instances), [eu-pos/ADV]()-[eu-pos/VERB]() (6; 1% instances), [eu-pos/NOUN]()-[eu-pos/ADV]() (5; 0% instances), [eu-pos/PROPN]()-[eu-pos/ADV]() (5; 0% instances), [eu-pos/PROPN]()-[eu-pos/NUM]() (5; 0% instances), [eu-pos/PROPN]()-[eu-pos/NOUN]() (4; 0% instances), [eu-pos/ADJ]()-[eu-pos/NOUN]() (3; 0% instances), [eu-pos/ADJ]()-[eu-pos/NUM]() (3; 0% instances), [eu-pos/NOUN]()-[eu-pos/NUM]() (3; 0% instances), [eu-pos/PROPN]()-[eu-pos/ADJ]() (3; 0% instances), [eu-pos/DET]()-[eu-pos/NOUN]() (2; 0% instances), [eu-pos/NUM]()-[eu-pos/NUM]() (2; 0% instances), [eu-pos/ADJ]()-[eu-pos/ADJ]() (1; 0% instances), [eu-pos/ADP]()-[eu-pos/AUX]() (1; 0% instances), [eu-pos/DET]()-[eu-pos/ADJ]() (1; 0% instances), [eu-pos/DET]()-[eu-pos/PROPN]() (1; 0% instances), [eu-pos/PRON]()-[eu-pos/VERB]() (1; 0% instances), [eu-pos/VERB]()-[eu-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 acl	color:blue
1	Bigarren	bigarren	NUM	_	NumType=Ord	2	amod	_	_
2	marrazkian	marrazki	NOUN	_	Animacy=Inan|Case=Ine|Definite=Def|Number=Sing	3	nmod	_	_
3	agertzen	agertu	VERB	_	Aspect=Imp|VerbForm=Inf	5	acl	_	_
4	den	izan	AUX	_	Mood=Ind|Number[abs]=Sing|Person[abs]=3	3	aux	_	_
5	muntaia	muntaia	NOUN	_	Case=Abs|Definite=Def|Number=Sing	6	dobj	_	_
6	egizu	egin	VERB	_	Aspect=Prog|Mood=Imp|Number[abs]=Sing|Number[erg]=Plur|Person[abs]=3|Person[erg]=1	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl	color:blue
1	Gauak	gau	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Plur	2	nsubj	_	_
2	luzeak	luze	ADJ	_	Case=Abs|Definite=Def|Number=Plur	0	root	_	_
3	ziren	izan	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Plur|Person[abs]=3	2	cop	_	_
4	,	,	PUNCT	_	_	2	punct	_	_
5	eta	eta	CONJ	_	_	3	cc	_	_
6	egunak	egun	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Plur	5	nsubj	_	_
7	are	are	ADV	_	_	9	advmod	_	_
8	eta	eta	CONJ	_	_	7	dep	_	_
9	luzeagoak	luze	ADJ	_	Case=Abs|Definite=Def|Degree=Cmp|Number=Plur	6	acl	_	_
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 acl	color:blue
1	Ugalketa	ugalketa	NOUN	_	Case=Abs|Definite=Def|Number=Sing	2	dobj	_	_
2	xede	xede	NOUN	_	Animacy=Inan|Case=Abs|Definite=Ind	4	acl	_	_
3	duen	ukan	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Number[erg]=Sing|Person[abs]=3|Person[erg]=3	2	cop	_	_
4	klonazioa	klonazio	NOUN	_	Case=Abs|Definite=Def|Number=Sing	5	dobj	_	_
5	debekatzen	debekatu	VERB	_	Aspect=Imp|VerbForm=Inf	0	root	_	_
6	du	*edun	AUX	_	Mood=Ind|Number[abs]=Sing|Number[erg]=Sing|Person[abs]=3|Person[erg]=3	5	aux	_	_
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


