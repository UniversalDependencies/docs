

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is universal.
There are 1 language-specific subtypes of `det`: [det:nummod]().

21263 nodes (10%) are attached to their parents as `det`.

21237 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.41019611531769.

The following 13 pairs of parts of speech are connected with `det`: [nl-pos/NOUN]()-[nl-pos/DET]() (18543; 87% instances), [nl-pos/PROPN]()-[nl-pos/DET]() (1671; 8% instances), [nl-pos/VERB]()-[nl-pos/DET]() (361; 2% instances), [nl-pos/X]()-[nl-pos/DET]() (278; 1% instances), [nl-pos/ADJ]()-[nl-pos/DET]() (274; 1% instances), [nl-pos/NUM]()-[nl-pos/DET]() (60; 0% instances), [nl-pos/PRON]()-[nl-pos/DET]() (51; 0% instances), [nl-pos/ADV]()-[nl-pos/DET]() (11; 0% instances), [nl-pos/DET]()-[nl-pos/DET]() (6; 0% instances), [nl-pos/AUX]()-[nl-pos/DET]() (4; 0% instances), [nl-pos/ADP]()-[nl-pos/DET]() (2; 0% instances), [nl-pos/CONJ]()-[nl-pos/DET]() (1; 0% instances), [nl-pos/INTJ]()-[nl-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Voor	voor	ADP	Prep|voor	AdpType=Prep	3	case	_	_
2	het	het	DET	Art|bep|onzijd|neut	Definite=Def|Gender=Neut|PronType=Art	3	det	_	_
3	oefendrieluik	oefen_drieluik	NOUN	N|soort|ev|neut	Number=Sing	6	nmod	_	_
4	met	met	ADP	Prep|voor	AdpType=Prep	5	case	_	_
5	Pakistan	Pakistan	PROPN	N|eigen|ev|neut	Number=Sing	3	nmod	_	_
6	zette	zet_in	VERB	V|trans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Tran|Tense=Past|VerbForm=Fin	0	root	_	_
7	Bellaart	Bellaart	PROPN	N|eigen|ev|neut	Number=Sing	6	nsubj	_	_
8	hoog	hoog	ADJ	Adj|attr|stell|onverv	Degree=Pos	6	advmod	_	_
9	in	in	ADV	Adv|deelv	PartType=Vbp	6	compound:prt	_	_
10	.	.	PUNCT	Punc|punt	PunctType=Peri	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	Volgende	volg	VERB	V|intrans|tegdw|vervneut	Case=Nom|Subcat=Intr|Tense=Pres|VerbForm=Part	2	acl	_	_
2	week	week	NOUN	N|soort|ev|neut	Number=Sing	3	nmod	_	_
3	is	ben	AUX	V|hulpofkopp|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Aux,Cop	0	root	_	_
4	de	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	5	det	_	_
5	return	return	PROPN	N|eigen|ev|neut	Number=Sing	3	nsubj	_	_
6	in	in	ADP	Prep|voor	AdpType=Prep	8	case	_	_
7	het	het	DET	Art|bep|onzijd|neut	Definite=Def|Gender=Neut|PronType=Art	8	det	_	_
8	Abe	Abe	PROPN	N_N|eigen|ev|neut_eigen|ev|neut	_	3	advmod	_	MWE=Abe_Lenstra-stadion|MWEPOS=X
9	Lenstra-stadion	Lenstra-stadion	PROPN	PROPN	_	8	name	_	_
10	.	.	PUNCT	Punc|punt	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Sterry	Sterry	PROPN	N|eigen|ev|neut	Number=Sing	2	nsubj	_	_
2	wist	weet	VERB	V|trans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Tran|Tense=Past|VerbForm=Fin	0	root	_	_
3	het	het	DET	Art|bep|onzijd|neut	Definite=Def|Gender=Neut|PronType=Art	4	det	_	_
4	preken	preek	VERB	V|trans|inf|subst	Subcat=Tran|VerbForm=Inf	12	xcomp	_	_
5	28	28	NUM	Num|hoofd|bep|attr|onverv	Definite=Def|NumType=Card	6	nummod	_	_
6	uur	uur	NOUN	N|soort|ev|neut	Number=Sing	12	nmod	_	_
7	en	en	CONJ	Conj|neven	_	6	cc	_	_
8	45	45	NUM	Num|hoofd|bep|attr|onverv	Definite=Def|NumType=Card	9	nummod	_	_
9	minuten	minuut	NOUN	N|soort|mv|neut	Number=Plur	6	conj	_	_
10	vol	vol	ADJ	Adj|attr|stell|onverv	Degree=Pos	12	compound:prt	_	_
11	te	te	ADP	Prep|voorinf	AdpType=Prep|PartType=Inf	12	mark	_	_
12	houden	houd_vol	VERB	V|trans|inf	Subcat=Tran|VerbForm=Inf	2	xcomp	_	_
13	.	.	PUNCT	Punc|punt	PunctType=Peri	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch-LassySmall)

This relation is universal.

10894 nodes (11%) are attached to their parents as `det`.

10886 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.42794198641454.

The following 25 pairs of parts of speech are connected with `det`: [nl-pos/NOUN]()-[nl-pos/DET]() (8917; 82% instances), [nl-pos/PROPN]()-[nl-pos/DET]() (1012; 9% instances), [nl-pos/ADJ]()-[nl-pos/DET]() (450; 4% instances), [nl-pos/VERB]()-[nl-pos/DET]() (132; 1% instances), [nl-pos/NUM]()-[nl-pos/DET]() (86; 1% instances), [nl-pos/X]()-[nl-pos/DET]() (58; 1% instances), [nl-pos/NOUN]()-[nl-pos/PROPN]() (45; 0% instances), [nl-pos/NOUN]()-[nl-pos/PRON]() (43; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADJ]() (42; 0% instances), [nl-pos/NOUN]()-[nl-pos/NOUN]() (35; 0% instances), [nl-pos/NOUN]()-[nl-pos/NUM]() (35; 0% instances), [nl-pos/PRON]()-[nl-pos/DET]() (11; 0% instances), [nl-pos/SYM]()-[nl-pos/DET]() (9; 0% instances), [nl-pos/ADV]()-[nl-pos/DET]() (4; 0% instances), [nl-pos/DET]()-[nl-pos/DET]() (3; 0% instances), [nl-pos/PROPN]()-[nl-pos/NUM]() (2; 0% instances), [nl-pos/VERB]()-[nl-pos/NUM]() (2; 0% instances), [nl-pos/ADP]()-[nl-pos/DET]() (1; 0% instances), [nl-pos/NUM]()-[nl-pos/NOUN]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/NOUN]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/PROPN]() (1; 0% instances), [nl-pos/SYM]()-[nl-pos/NUM]() (1; 0% instances), [nl-pos/SYM]()-[nl-pos/PRON]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/NOUN]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	Plechtige	plechtig	ADJ	_	Degree=Pos	2	amod	_	_
2	aankondiging	aankondiging	NOUN	_	Gender=Com|Number=Sing	0	root	_	_
3	van	van	ADP	_	_	5	case	_	_
4	de	de	DET	_	Definite=Def	5	det	_	_
5	dood	dood	NOUN	_	Gender=Com|Number=Sing	2	nmod	_	_
6	des	de	DET	_	Definite=Def	7	det	_	_
7	Konings	koning	NOUN	_	Number=Sing	5	nmod	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	de	de	DET	_	Definite=Def	2	det	_	_
2	Zavel	Zavel	PROPN	_	Gender=Com|Number=Sing	0	root	_	_
3	,	,	PUNCT	_	_	2	punct	_	_
4	wijk	wijk	NOUN	_	Gender=Com|Number=Sing	2	appos	_	_
5	van	van	ADP	_	_	7	case	_	_
6	de	de	DET	_	Definite=Def	7	det	_	_
7	antiekhandel	antiekhandel	NOUN	_	Gender=Com|Number=Sing	4	nmod	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Website	website	NOUN	_	Gender=Com|Number=Sing	0	root	_	_
2	van	van	ADP	_	_	4	case	_	_
3	het	het	DET	_	Definite=Def	4	det	_	_
4	Brussels	Brussels	ADJ	_	Degree=Pos	1	nmod	_	_
5	Hoofdstedelijk	hoofdstedelijk	ADJ	_	Degree=Pos	4	mwe	_	_
6	Parlement	parlement	NOUN	_	Gender=Neut|Number=Sing	4	mwe	_	_

~~~


