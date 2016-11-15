

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

9 nodes (0%) are attached to their parents as `dep`.

5 instances of `dep` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.11111111111111.

The following 8 pairs of parts of speech are connected with `dep`: [hr-pos/ADJ]()-[hr-pos/PRON]() (2; 22% instances), [hr-pos/NOUN]()-[hr-pos/AUX]() (1; 11% instances), [hr-pos/NOUN]()-[hr-pos/VERB]() (1; 11% instances), [hr-pos/PROPN]()-[hr-pos/VERB]() (1; 11% instances), [hr-pos/SCONJ]()-[hr-pos/PUNCT]() (1; 11% instances), [hr-pos/VERB]()-[hr-pos/ADV]() (1; 11% instances), [hr-pos/VERB]()-[hr-pos/PRON]() (1; 11% instances), [hr-pos/VERB]()-[hr-pos/SCONJ]() (1; 11% instances).


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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 6 dep	color:blue
1	Rekao	reći	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
2	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	1	aux	_	_
3	kako	kako	SCONJ	_	_	12	mark	_	_
4	će	htjeti	AUX	_	Number=Sing|Person=3|Tense=Pres	12	aux	_	_
5	obrazovanje	obrazovanje	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	12	nsubj	_	_
6	će	htjeti	AUX	_	Number=Sing|Person=3|Tense=Pres	12	dep	_	_
7	biti	biti	AUX	_	VerbForm=Inf	12	cop	_	_
8	još	još	ADV	_	Degree=Pos	9	advmod	_	_
9	jedan	jedan	NUM	_	Number=Sing|NumType=Card	12	amod	_	_
10	od	od	ADP	_	Case=Gen	12	case	_	_
11	njegovih	njegov	PRON	_	Case=Gen|Gender=Masc|Number=Plur|Person=3|Poss=Yes	12	nmod	_	_
12	prioriteta	prioritet	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	1	ccomp	_	_
13	kao	kao	SCONJ	_	_	14	case	_	_
14	CiO-a	CiO-a	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	12	name	_	_
15	,	,	PUNCT	_	_	16	punct	_	_
16	ističući	isticati	ADV	_	Degree=Sup	1	xcomp	_	_
17	značaj	značaj	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	16	dobj	_	_
18	obrazovanja	obrazovanje	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	17	nmod	_	_
19	za	za	ADP	_	Case=Acc	20	case	_	_
20	uspostavu	uspostava	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	17	nmod	_	_
21	demokratskih	demokratski	ADJ	_	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur	22	amod	_	_
22	institucija	institucija	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	20	nmod	_	_
23	,	,	PUNCT	_	_	20	punct	_	_
24	unaprjeđenje	unaprjeđenje	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	20	conj	_	_
25	tolerancije	tolerancija	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	24	nmod	_	_
26	i	i	CONJ	_	_	20	cc	_	_
27	stvaranje	stvaranje	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	20	conj	_	_
28	uvjeta	uvjet	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	27	nmod	_	_
29	za	za	ADP	_	Case=Acc	32	case	_	_
30	uspješno	uspješan	ADJ	_	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	32	amod	_	_
31	tržišno	tržišan	ADJ	_	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	32	amod	_	_
32	gospodarstvo	gospodarstvo	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	28	nmod	_	_
33	.	.	PUNCT	_	_	1	punct	_	_

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


