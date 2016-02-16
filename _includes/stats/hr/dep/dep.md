

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

6 nodes (0%) are attached to their parents as `dep`.

3 instances of `dep` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5.

The following 5 pairs of parts of speech are connected with `dep`: [hr-pos/ADJ]()-[hr-pos/PRON]() (2; 33% instances), [hr-pos/NOUN]()-[hr-pos/AUX]() (1; 17% instances), [hr-pos/NOUN]()-[hr-pos/VERB]() (1; 17% instances), [hr-pos/VERB]()-[hr-pos/ADV]() (1; 17% instances), [hr-pos/VERB]()-[hr-pos/PRON]() (1; 17% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 dep	color:blue
1	Toliko	toliko	ADV	_	Degree=Pos	4	advmod	_	_
2	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	4	aux	_	_
3	bio	biti	AUX	_	Gender=Masc|Number=Sing|VerbForm=Part	4	cop	_	_
4	jak	jak	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
5	njegov	njegov	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|Poss=Yes	4	dep	_	_
6	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 dep	color:blue
1	Dužnosnici	dužnosnik	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	_
2	UNMIK-a	UNMIK	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	_
3	održali	održati	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	_
4	su	biti	AUX	_	Number=Plur|Person=3|Tense=Pres	3	aux	_	_
5	tijekom	tijekom	ADP	_	Case=Gen	6	case	_	_
6	vikenda	vikend	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
7	razgovore	razgovor	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	3	dobj	_	_
8	s	s	ADP	_	Case=Ins	9	case	_	_
9	prosvjednicima	prosvjednik	NOUN	_	Case=Ins|Gender=Masc|Number=Plur	3	nmod	_	_
10	u	u	ADP	_	Case=Loc	11	case	_	_
11	pokušaju	pokušaj	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	3	nmod	_	_
12	uvjeriti	uvjeriti	VERB	_	VerbForm=Inf	11	dep	_	_
13	ih	oni	PRON	_	Case=Acc|Number=Plur|Person=3|PronType=Prs	12	dobj	_	_
14	da	da	SCONJ	_	_	15	mark	_	_
15	napuste	napustiti	VERB	_	Number=Plur|Person=3|Tense=Pres	12	ccomp	_	_
16	zgradu	zgrada	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	15	dobj	_	_
17	,	,	PUNCT	_	_	22	punct	_	_
18	ali	ali	SCONJ	_	_	15	cc	_	_
19	su	biti	AUX	_	Number=Plur|Person=3|Tense=Pres	22	aux	_	_
20	prosvjednici	prosvjednik	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	22	nsubj	_	_
21	to	taj	PRON	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	22	dobj	_	_
22	odbili	odbiti	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	15	conj	_	_
23	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 dep	color:blue
1	Kampanja	kampanja	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
2	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	4	aux	_	_
3	službeno	službeno	ADV	_	Degree=Pos	4	advmod	_	_
4	započela	započeti	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	_
5	u	u	ADP	_	Case=Acc	6	case	_	_
6	subotu	subota	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	4	nmod	_	_
7	(	(	PUNCT	_	_	9	punct	_	_
8	3.	3.	NUM	_	NumType=Ord	9	nummod	_	_
9	studenog	studeni	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	6	parataxis	_	_
10	)	)	PUNCT	_	_	9	punct	_	_
11	,	,	PUNCT	_	_	15	punct	_	_
12	kada	kada	ADV	_	Degree=Pos	15	mark	_	_
13	kada	kada	ADV	_	Degree=Pos	15	dep	_	_
14	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	15	aux	_	_
15	istekao	isteći	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	4	advcl	_	_
16	krajnji	krajnji	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	17	amod	_	_
17	rok	rok	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	15	nsubj	_	_
18	za	za	ADP	_	Case=Acc	20	case	_	_
19	sve	sav	ADJ	_	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	20	det	_	_
20	kandidate	kandidat	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	17	nmod	_	_
21	za	za	ADP	_	Case=Acc	22	case	_	_
22	predaju	predaja	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	17	nmod	_	_
23	lista	lista	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	22	nmod	_	_
24	Državnom	državan	ADJ	_	Case=Dat|Degree=Pos|Gender=Neut|Number=Sing	26	compound	_	_
25	izbornom	izboran	ADJ	_	Case=Dat|Degree=Pos|Gender=Neut|Number=Sing	26	compound	_	_
26	povjerenstvu	povjerenstvo	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	22	nmod	_	_
27	.	.	PUNCT	_	_	4	punct	_	_

~~~


