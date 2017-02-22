

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

9 nodes (0%) are attached to their parents as `dep`.

5 instances of `dep` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.11111111111111.

The following 9 pairs of parts of speech are connected with `dep`: [hr-pos/ADJ]()-[hr-pos/DET]() (1; 11% instances), [hr-pos/ADJ]()-[hr-pos/PRON]() (1; 11% instances), [hr-pos/NOUN]()-[hr-pos/AUX]() (1; 11% instances), [hr-pos/NOUN]()-[hr-pos/VERB]() (1; 11% instances), [hr-pos/PROPN]()-[hr-pos/VERB]() (1; 11% instances), [hr-pos/VERB]()-[hr-pos/ADV]() (1; 11% instances), [hr-pos/VERB]()-[hr-pos/CCONJ]() (1; 11% instances), [hr-pos/VERB]()-[hr-pos/PRON]() (1; 11% instances), [hr-pos/VERB]()-[hr-pos/SCONJ]() (1; 11% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 dep	color:blue
1	Okvirni	okviran	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	_
2	zakon	zakon	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
3	provodit	provoditi	VERB	_	VerbForm=Inf	0	root	_	_
4	će	htjeti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	_
5	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	3	expl:pv	_	_
6	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	3	dep	_	_
7	u	u	ADP	_	Case=Loc	8	case	_	_
8	fazama	faza	NOUN	_	Case=Loc|Gender=Fem|Number=Plur	3	obl	_	SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	_
10	kaže	kazati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	parataxis	_	_
11	Diamantopoulou	Diamantopoulou	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	10	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	_

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


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 dep	color:blue
1	Kampanja	kampanja	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
2	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	službeno	službeno	ADV	_	Degree=Pos	4	advmod	_	_
4	započela	započeti	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	u	u	ADP	_	Case=Acc	6	case	_	_
6	subotu	subota	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	4	obl	_	_
7	(	(	PUNCT	_	_	9	punct	_	SpaceAfter=No
8	3.	3.	ADJ	_	NumType=Ord	9	amod	_	_
9	studenog	studeni	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	6	parataxis	_	SpaceAfter=No
10	)	)	PUNCT	_	_	9	punct	_	SpaceAfter=No
11	,	,	PUNCT	_	_	15	punct	_	_
12	kada	kada	ADV	_	Degree=Pos|PronType=Int,Rel	15	advmod	_	_
13	kada	kada	ADV	_	Degree=Pos|PronType=Int,Rel	15	dep	_	_
14	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	aux	_	_
15	istekao	isteći	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	4	advcl	_	_
16	krajnji	krajnji	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	17	amod	_	_
17	rok	rok	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	15	nsubj	_	_
18	za	za	ADP	_	Case=Acc	20	case	_	_
19	sve	sav	DET	_	Case=Acc|Gender=Masc|Number=Plur|PronType=Tot	20	det	_	_
20	kandidate	kandidat	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	17	nmod	_	_
21	za	za	ADP	_	Case=Acc	22	case	_	_
22	predaju	predaja	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	17	nmod	_	_
23	lista	lista	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	22	nmod	_	_
24	Državnom	državan	ADJ	_	Case=Dat|Degree=Pos|Gender=Neut|Number=Sing	26	compound	_	_
25	izbornom	izboran	ADJ	_	Case=Dat|Degree=Pos|Gender=Neut|Number=Sing	26	compound	_	_
26	povjerenstvu	povjerenstvo	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	22	nmod	_	SpaceAfter=No
27	.	.	PUNCT	_	_	4	punct	_	_

~~~


