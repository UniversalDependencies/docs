

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is universal.

1967 nodes (1%) are attached to their parents as `nummod`.

1589 instances of `nummod` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.53431621759024.

The following 8 pairs of parts of speech are connected with `nummod`: [nl-pos/NOUN]()-[nl-pos/NUM]() (1750; 89% instances), [nl-pos/PROPN]()-[nl-pos/NUM]() (138; 7% instances), [nl-pos/ADJ]()-[nl-pos/NUM]() (25; 1% instances), [nl-pos/PRON]()-[nl-pos/NUM]() (21; 1% instances), [nl-pos/ADV]()-[nl-pos/NUM]() (17; 1% instances), [nl-pos/VERB]()-[nl-pos/NUM]() (11; 1% instances), [nl-pos/X]()-[nl-pos/NUM]() (3; 0% instances), [nl-pos/SYM]()-[nl-pos/NUM]() (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Hij	hij	PRON	Pron|per|3|ev|nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	rekende	reken	VERB	V|intrans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Intr|Tense=Past|VerbForm=Fin	0	root	_	_
3	op	op	ADP	Prep|voor	AdpType=Prep	5	case	_	_
4	drie	drie	NUM	Num|hoofd|bep|attr|onverv	Definite=Def|NumType=Card	5	nummod	_	_
5	overwinningen	overwinning	NOUN	N|soort|mv|neut	Number=Plur	2	dobj	_	_
6	.	.	PUNCT	Punc|punt	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	BASISTAKENPAKKET	basis_taken_pakket	ADP	Prep|voor	AdpType=Prep	0	root	_	_
2	JEUGDGEZONDHEIDSZORG	jeugd_gezondheid_zorg	PROPN	N|eigen|ev|neut	Number=Sing	1	dep	_	_
3	0-19	0-19	NUM	Num|hoofd|bep|attr|onverv	Definite=Def|NumType=Card	4	nummod	_	_
4	JAAR	JAAR	PROPN	N|eigen|ev|neut	Number=Sing	1	dep	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Een	Een	X	Art_N_Conj	Number=Sing|PronType=Ind	5	advmod	_	MWE=Een_stuk_of|MWEPOS=X
2	stuk	stuk	X	X	Number=Sing|PronType=Ind	1	compound	_	_
3	of	of	X	X	Number=Sing|PronType=Ind	1	compound	_	_
4	drie	drie	NUM	Num|hoofd|bep|attr|onverv	Definite=Def|NumType=Card	5	cc	_	_
5	vier	vier	NUM	Num|hoofd|bep|attr|onverv	Definite=Def|NumType=Card	6	nummod	_	_
6	aanwezigen	aanwezig	ADJ	Adj|zelfst|stell|vervmv	Degree=Pos|Number=Plur	0	root	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch-LassySmall)

This relation is universal.

1386 nodes (1%) are attached to their parents as `nummod`.

1103 instances of `nummod` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5981240981241.

The following 14 pairs of parts of speech are connected with `nummod`: [nl-pos/NOUN]()-[nl-pos/NUM]() (1086; 78% instances), [nl-pos/PROPN]()-[nl-pos/NUM]() (159; 11% instances), [nl-pos/SYM]()-[nl-pos/NUM]() (60; 4% instances), [nl-pos/DET]()-[nl-pos/NUM]() (25; 2% instances), [nl-pos/ADJ]()-[nl-pos/NUM]() (15; 1% instances), [nl-pos/X]()-[nl-pos/NUM]() (10; 1% instances), [nl-pos/VERB]()-[nl-pos/NUM]() (9; 1% instances), [nl-pos/NOUN]()-[nl-pos/SYM]() (7; 1% instances), [nl-pos/SYM]()-[nl-pos/SYM]() (4; 0% instances), [nl-pos/ADV]()-[nl-pos/NUM]() (3; 0% instances), [nl-pos/NUM]()-[nl-pos/NUM]() (3; 0% instances), [nl-pos/ADP]()-[nl-pos/NUM]() (2; 0% instances), [nl-pos/PRON]()-[nl-pos/NUM]() (2; 0% instances), [nl-pos/PROPN]()-[nl-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Zij	zij	PRON	_	Case=Nom|Person=3|PronType=Prs	2	nsubj	_	_
2	kregen	krijgen	VERB	_	Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	_
3	vier	vier	NUM	_	_	4	nummod	_	_
4	kinderen	kind	NOUN	_	Number=Plur	2	dobj	_	_
5	:	:	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nummod	color:blue
1	Filip	Filip	PROPN	_	Gender=Com|Number=Sing	0	root	_	_
2	(	(	PUNCT	_	_	1	punct	_	_
3	1960	1960	NUM	_	_	1	nummod	_	_
4	)	)	PUNCT	_	_	1	punct	_	_
5	,	,	PUNCT	_	_	1	punct	_	_
6	Hertog	Hertog	PROPN	_	_	1	appos	_	_
7	van	van	ADP	_	_	6	mwe	_	_
8	Brabant	Brabant	PROPN	_	Gender=Neut|Number=Sing	6	mwe	_	_
9	;	;	PUNCT	_	_	1	punct	_	_
10	zoon	zoon	NOUN	_	Gender=Com|Number=Sing	1	appos	_	_
11	van	van	ADP	_	_	12	case	_	_
12	Koning	koning	NOUN	_	Gender=Com|Number=Sing	10	nmod	_	_
13	Albert	Albert	PROPN	_	_	12	appos	_	_
14	II	II	PROPN	_	_	13	name	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	1962	1962	NUM	_	_	3	parataxis	_	_
2	Europese	Europees	ADJ	_	Degree=Pos	3	amod	_	_
3	titel	titel	NOUN	_	Gender=Com|Number=Sing	0	root	_	_
4	3000	3000	NUM	_	_	5	nummod	_	_
5	m	m	SYM	_	_	3	appos	_	_
6	steeplechase	steeplechase	NOUN	_	Gender=Com|Number=Sing	5	nmod	_	_
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


