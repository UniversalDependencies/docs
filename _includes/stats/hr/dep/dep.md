

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

9 nodes (0%) are attached to their parents as `dep`.

5 instances of `dep` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.11111111111111.

The following 9 pairs of parts of speech are connected with `dep`: [hr-pos/ADJ]()-[hr-pos/DET]() (1; 11% instances), [hr-pos/ADJ]()-[hr-pos/PRON]() (1; 11% instances), [hr-pos/NOUN]()-[hr-pos/AUX]() (1; 11% instances), [hr-pos/NOUN]()-[hr-pos/VERB]() (1; 11% instances), [hr-pos/PROPN]()-[hr-pos/VERB]() (1; 11% instances), [hr-pos/VERB]()-[hr-pos/ADV]() (1; 11% instances), [hr-pos/VERB]()-[hr-pos/CCONJ]() (1; 11% instances), [hr-pos/VERB]()-[hr-pos/PRON]() (1; 11% instances), [hr-pos/VERB]()-[hr-pos/SCONJ]() (1; 11% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 dep	color:blue
1	Da	da	SCONJ	_	_	5	dep	_	_
2	li	li	PART	_	_	5	aux	_	_
3	bebe	beba	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	5	nsubj	_	_
4	stvarno	stvarno	ADV	_	Degree=Pos	5	advmod	_	_
5	plivaju	plivati	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
6	?	?	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 6 dep	color:blue
1	Rekao	reći	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	aux	_	_
3	kako	kako	SCONJ	_	_	12	mark	_	_
4	će	htjeti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	_
5	obrazovanje	obrazovanje	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	12	nsubj	_	_
6	će	htjeti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	dep	_	_
7	biti	biti	AUX	_	VerbForm=Inf	12	cop	_	_
8	još	još	ADV	_	Degree=Pos	9	advmod	_	_
9	jedan	jedan	NUM	_	Number=Sing|NumType=Card	12	amod	_	_
10	od	od	ADP	_	Case=Gen	12	case	_	_
11	njegovih	njegov	DET	_	Case=Gen|Gender=Masc|Gender[psor]=Masc,Neut|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	12	det	_	_
12	prioriteta	prioritet	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	1	ccomp	_	_
13	kao	kao	SCONJ	_	_	14	case	_	_
14	CiO-a	CiO-a	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	12	flat	_	SpaceAfter=No
15	,	,	PUNCT	_	_	16	punct	_	_
16	ističući	isticati	ADV	_	Degree=Sup	1	xcomp	_	_
17	značaj	značaj	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	16	obj	_	_
18	obrazovanja	obrazovanje	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	17	nmod	_	_
19	za	za	ADP	_	Case=Acc	20	case	_	_
20	uspostavu	uspostava	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	17	nmod	_	_
21	demokratskih	demokratski	ADJ	_	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur	22	amod	_	_
22	institucija	institucija	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	20	nmod	_	SpaceAfter=No
23	,	,	PUNCT	_	_	24	punct	_	_
24	unaprjeđenje	unaprjeđenje	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	20	conj	_	_
25	tolerancije	tolerancija	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	24	nmod	_	_
26	i	i	CCONJ	_	_	27	cc	_	_
27	stvaranje	stvaranje	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	20	conj	_	_
28	uvjeta	uvjet	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	27	nmod	_	_
29	za	za	ADP	_	Case=Acc	32	case	_	_
30	uspješno	uspješan	ADJ	_	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	32	amod	_	_
31	tržišno	tržišan	ADJ	_	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	32	amod	_	_
32	gospodarstvo	gospodarstvo	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	28	nmod	_	SpaceAfter=No
33	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 dep	color:blue
1	Toliko	toliko	ADV	_	NumType=Card|PronType=Dem	4	advmod	_	_
2	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	bio	biti	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	4	cop	_	_
4	jak	jak	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
5	njegov	njegov	DET	_	Case=Nom|Gender=Masc|Gender[psor]=Masc,Neut|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	4	dep	_	SpaceAfter=No
6	.	.	PUNCT	_	_	4	punct	_	_

~~~


