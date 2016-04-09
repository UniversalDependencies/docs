

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

11 nodes (0%) are attached to their parents as `foreign`.

8 instances of `foreign` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.45454545454545.

The following 4 pairs of parts of speech are connected with `foreign`: [hr-pos/PROPN]()-[hr-pos/PROPN]() (5; 45% instances), [hr-pos/X]()-[hr-pos/X]() (4; 36% instances), [hr-pos/NOUN]()-[hr-pos/X]() (1; 9% instances), [hr-pos/VERB]()-[hr-pos/X]() (1; 9% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 foreign	color:blue
1	SZO	SZO	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
2	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	3	cop	_	_
3	nasljednica	nasljednica	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
4	Zdravstvene	zdravstven	ADJ	_	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	5	compound	_	_
5	organizacije	organizacija	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	_
6	(	(	PUNCT	_	_	9	punct	_	_
7	engleski	engleski	ADV	_	Degree=Pos	9	advmod	_	_
8	Health	health	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	9	foreign	_	_
9	Organisation	Organisation	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	5	appos	_	_
10	)	)	PUNCT	_	_	9	punct	_	_
11	,	,	PUNCT	_	_	12	punct	_	_
12	agencije	agencija	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	5	appos	_	_
13	Lige	liga	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	12	nmod	_	_
14	naroda	narod	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	13	compound	_	_
15	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 foreign	color:blue
1	Tehnički	tehnički	ADV	_	Degree=Pos	3	advmod	_	_
2	još	još	ADV	_	Degree=Pos	3	advmod	_	_
3	dio	dio	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	6	appos	_	_
4	Srbije	Srbija	PROPN	_	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	_
5	,	,	PUNCT	_	_	3	punct	_	_
6	Kosovo	Kosovo	PROPN	_	Case=Nom|Gender=Neut|Number=Sing	11	nsubj	_	_
7	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	11	cop	_	_
8	de	de	X	_	_	9	foreign	_	_
9	facto	facto	X	_	_	11	advmod	_	_
10	pod	pod	ADP	_	Case=Ins	11	case	_	_
11	upravom	uprava	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	0	root	_	_
12	UN-a	UN	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	11	nmod	_	_
13	od	od	ADP	_	Case=Gen	14	case	_	_
14	konca	konac	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	11	nmod	_	_
15	sukoba	sukob	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	14	nmod	_	_
16	1998	1998	NUM	_	NumType=Card	15	nmod	_	_
17	-	-	PUNCT	_	_	16	punct	_	_
18	1999	1999	NUM	_	NumType=Card	16	conj	_	_
19	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 25 foreign	color:blue
1	Ovo	ovaj	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	nsubj	_	_
2	utječe	utjecati	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	na	na	ADP	_	Case=Acc	4	case	_	_
4	sposobnost	sposobnost	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	2	nmod	_	_
5	za	za	ADP	_	Case=Acc	6	case	_	_
6	pružanje	pružanje	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	4	nmod	_	_
7	materijalne	materijalan	ADJ	_	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	_
8	pomoći	pomoć	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	_
9	saveznicima	saveznik	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	8	nmod	_	_
10	,	,	PUNCT	_	_	14	punct	_	_
11	kako	kako	SCONJ	_	_	14	mark	_	_
12	su	biti	AUX	_	Number=Plur|Person=3|Tense=Pres	14	aux	_	_
13	to	taj	PRON	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	14	dobj	_	_
14	činili	činiti	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	6	parataxis	_	_
15	tijekom	tijekom	ADP	_	Case=Gen	17	case	_	_
16	hladnog	hladan	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	17	amod	_	_
17	rata	rat	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	14	nmod	_	_
18	,	,	PUNCT	_	_	14	punct	_	_
19	te	te	CONJ	_	_	2	cc	_	_
20	SAD	SAD	PROPN	_	Case=Nom|Gender=Fem|Number=Plur	23	nsubj	_	_
21	danas	danas	ADV	_	Degree=Pos	23	advmod	_	_
22	nužno	nužno	ADV	_	Degree=Pos	23	advmod	_	_
23	zahtijevaju	zahtijevati	VERB	_	Number=Plur|Person=3|Tense=Pres	2	conj	_	_
24	odgovarajuće	odgovarajući	ADJ	_	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	28	amod	_	_
25	quid	quid	X	_	_	28	foreign	_	_
26	pro	pro	X	_	_	27	foreign	_	_
27	quo	quo	X	_	_	25	foreign	_	_
28	aranžmane	aranžman	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	23	dobj	_	_
29	.	.	PUNCT	_	_	2	punct	_	_

~~~


