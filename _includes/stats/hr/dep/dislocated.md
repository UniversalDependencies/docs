

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

8 nodes (0%) are attached to their parents as `dislocated`.

8 instances of `dislocated` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.125.

The following 7 pairs of parts of speech are connected with `dislocated`: [hr-pos/VERB]()-[hr-pos/DET]() (2; 25% instances), [hr-pos/ADJ]()-[hr-pos/CCONJ]() (1; 13% instances), [hr-pos/PROPN]()-[hr-pos/PART]() (1; 13% instances), [hr-pos/PROPN]()-[hr-pos/PRON]() (1; 13% instances), [hr-pos/SCONJ]()-[hr-pos/ADV]() (1; 13% instances), [hr-pos/VERB]()-[hr-pos/CCONJ]() (1; 13% instances), [hr-pos/VERB]()-[hr-pos/PRON]() (1; 13% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 dislocated	color:blue
1	Osim	osim	ADP	_	Case=Gen	2	case	_	_
2	toga	taj	DET	_	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	6	dislocated	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	Rehn	Rehn	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
5	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	izjavio	izjaviti	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
7	da	da	SCONJ	_	_	22	mark	_	SpaceAfter=No
8	,	,	PUNCT	_	_	20	punct	_	_
9	budući	budući	ADV	_	Degree=Pos	20	advmod	_	_
10	da	da	SCONJ	_	_	9	fixed	_	_
11	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	aux:pass	_	_
12	spor	spor	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	20	nsubj:pass	_	_
13	između	između	ADP	_	Case=Gen	14	case	_	_
14	Hrvatske	Hrvatska	PROPN	_	Case=Gen|Gender=Fem|Number=Sing	12	nmod	_	_
15	i	i	CCONJ	_	_	16	cc	_	_
16	Slovenije	Slovenija	PROPN	_	Case=Gen|Gender=Fem|Number=Sing	14	conj	_	_
17	oko	oko	ADP	_	Case=Gen	19	case	_	_
18	graničnog	graničan	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	19	amod	_	_
19	prometa	promet	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	12	nmod	_	_
20	riješen	riješiti	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	22	advcl	_	SpaceAfter=No
21	,	,	PUNCT	_	_	20	punct	_	_
22	nema	nemati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	ccomp	_	_
23	razloga	razlog	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	22	obj	_	_
24	za	za	ADP	_	Case=Acc	25	case	_	_
25	odlaganje	odlaganje	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	23	nmod	_	_
26	razgovora	razgovor	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	25	nmod	_	_
27	o	o	ADP	_	Case=Loc	28	case	_	_
28	ribarstvu	ribarstvo	NOUN	_	Case=Loc|Gender=Neut|Number=Sing	26	nmod	_	_
29	i	i	CCONJ	_	_	31	cc	_	_
30	vanjskoj	vanjski	ADJ	_	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	31	amod	_	_
31	politici	politika	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	28	conj	_	SpaceAfter=No
32	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 20 dislocated	color:blue
1	Izrazivši	izraziti	ADV	_	Tense=Past|VerbForm=Conv	14	xcomp	_	_
2	nadu	nada	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	1	obj	_	_
3	da	da	SCONJ	_	_	7	mark	_	_
4	će	htjeti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
5	u	u	ADP	_	Case=Loc	6	case	_	_
6	budućnosti	budućnost	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	7	obl	_	_
7	doći	doći	VERB	_	VerbForm=Inf	2	acl	_	_
8	do	do	ADP	_	Case=Gen	10	case	_	_
9	punog	pun	ADJ	_	Case=Gen|Definite=Def|Degree=Pos|Gender=Neut|Number=Sing	10	amod	_	_
10	jedinstva	jedinstvo	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	7	obl	_	SpaceAfter=No
11	,	,	PUNCT	_	_	1	punct	_	_
12	Patrijarh	patrijarh	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	14	nsubj	_	_
13	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux	_	_
14	naglasio	naglasiti	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
15	kako	kako	SCONJ	_	_	25	mark	_	_
16	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	25	obj	_	_
17	ta	taj	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	18	det	_	_
18	nada	nada	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	25	nsubj	_	SpaceAfter=No
19	,	,	PUNCT	_	_	23	punct	_	_
20	baš	baš	ADV	_	Degree=Pos	21	dislocated	_	_
21	kao	kao	SCONJ	_	_	23	case	_	_
22	i	i	CCONJ	_	_	21	fixed	_	_
23	jedinstvo	jedinstvo	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	25	obl	_	_
24	kršćana	kršćanin	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	23	nmod	_	_
25	oslanja	oslanjati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	ccomp	_	_
26	na	na	ADP	_	Case=Acc	28	case	_	_
27	Božju	božji	ADJ	_	Case=Acc|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing|Poss=Yes	28	amod	_	_
28	snagu	snaga	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	25	obl	_	SpaceAfter=No
29	.	.	PUNCT	_	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 1 dislocated	color:blue
1	Ili	ili	CCONJ	_	_	12	dislocated	_	SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	_
3	kazao	kazati	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	12	parataxis	_	_
4	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	_
5	Traykov	Traykov	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
6	u	u	ADP	_	Case=Loc	7	case	_	_
7	intervjuu	intervju	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	3	obl	_	_
8	sofijskoj	sofijski	ADJ	_	Case=Dat|Degree=Pos|Gender=Fem|Number=Sing	10	amod	_	_
9	Novoj	nov	ADJ	_	Case=Dat|Degree=Pos|Gender=Fem|Number=Sing	10	compound	_	_
10	TV	TV	PROPN	_	Case=Dat|Gender=Fem|Number=Sing	7	obj	_	SpaceAfter=No
11	,	,	PUNCT	_	_	3	punct	_	_
12	pronaći	pronaći	VERB	_	VerbForm=Inf	0	root	_	_
13	drugi	drugi	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	14	amod	_	_
14	put	put	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	12	obj	_	SpaceAfter=No
15	.	.	PUNCT	_	_	12	punct	_	_

~~~


