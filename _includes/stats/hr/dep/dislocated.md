

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

7 nodes (0%) are attached to their parents as `dislocated`.

7 instances of `dislocated` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.85714285714286.

The following 5 pairs of parts of speech are connected with `dislocated`: [hr-pos/VERB]()-[hr-pos/PRON]() (3; 43% instances), [hr-pos/NUM]()-[hr-pos/CONJ]() (1; 14% instances), [hr-pos/PROPN]()-[hr-pos/PRON]() (1; 14% instances), [hr-pos/SCONJ]()-[hr-pos/ADV]() (1; 14% instances), [hr-pos/VERB]()-[hr-pos/CONJ]() (1; 14% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 dislocated	color:blue
1	Osim	osim	ADP	_	Case=Gen	2	case	_	_
2	toga	taj	PRON	_	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	6	dislocated	_	_
3	,	,	PUNCT	_	_	2	punct	_	_
4	Rehn	Rehn	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
5	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	6	aux	_	_
6	izjavio	izjaviti	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
7	da	da	SCONJ	_	_	22	mark	_	_
8	,	,	PUNCT	_	_	20	punct	_	_
9	budući	budući	ADV	_	Degree=Pos	20	mark	_	_
10	da	da	SCONJ	_	_	9	mwe	_	_
11	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	20	auxpass	_	_
12	spor	spor	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	20	nsubjpass	_	_
13	između	između	ADP	_	Case=Gen	14	case	_	_
14	Hrvatske	Hrvatska	PROPN	_	Case=Gen|Gender=Fem|Number=Sing	12	nmod	_	_
15	i	i	CONJ	_	_	14	cc	_	_
16	Slovenije	Slovenija	PROPN	_	Case=Gen|Gender=Fem|Number=Sing	14	conj	_	_
17	oko	oko	ADP	_	Case=Gen	19	case	_	_
18	graničnog	graničan	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	19	amod	_	_
19	prometa	promet	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	12	nmod	_	_
20	riješen	riješiti	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|VerbForm=Part	22	advcl	_	_
21	,	,	PUNCT	_	_	20	punct	_	_
22	nema	nemati	VERB	_	Number=Sing|Person=3|Tense=Pres	6	ccomp	_	_
23	razloga	razlog	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	22	dobj	_	_
24	za	za	ADP	_	Case=Acc	25	case	_	_
25	odlaganje	odlaganje	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	23	nmod	_	_
26	razgovora	razgovor	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	25	nmod	_	_
27	o	o	ADP	_	Case=Loc	28	case	_	_
28	ribarstvu	ribarstvo	NOUN	_	Case=Loc|Gender=Neut|Number=Sing	26	nmod	_	_
29	i	i	CONJ	_	_	28	cc	_	_
30	vanjskoj	vanjski	ADJ	_	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	31	amod	_	_
31	politici	politika	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	28	conj	_	_
32	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 21 dislocated	color:blue
1	Popust	Popust	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	18	parataxis	_	_
2	tijekom	tijekom	ADP	_	Case=Gen	3	case	_	_
3	trajanja	trajanje	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	1	nmod	_	_
4	manifestacije	manifestacija	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	_
5	Do	do	ADP	_	Case=Gen	6	case	_	_
6	kraja	kraj	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	_
7	Dana	dan	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	6	nmod	_	_
8	trgovine	trgovina	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	_
9	BiH	BiH	PROPN	_	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
10	,	,	PUNCT	_	_	13	punct	_	_
11	koji	koji	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	13	mark	_	_
12	će	htjeti	AUX	_	Number=Sing|Person=3|Tense=Pres	13	aux	_	_
13	trajati	trajati	VERB	_	VerbForm=Inf	1	acl	_	_
14	do	do	ADP	_	Case=Gen	16	case	_	_
15	30.	30.	NUM	_	NumType=Ord	16	nummod	_	_
16	lipnja	lipanj	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	13	nmod	_	_
17	,	,	PUNCT	_	_	13	punct	_	_
18	predviđeno	predvidjeti	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Neut|Number=Sing|VerbForm=Part	0	root	_	_
19	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	18	auxpass	_	_
20	održavanje	održavanje	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	18	nsubjpass	_	_
21	i	i	CONJ	_	_	22	dislocated	_	_
22	drugih	drugi	NUM	_	Case=Gen|Gender=Masc|Number=Plur|NumType=Ord	23	nummod	_	_
23	sadržaja	sadržaj	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	20	nmod	_	_
24	,	,	PUNCT	_	_	29	punct	_	_
25	kojima	koji	PRON	_	Case=Ins|Gender=Masc|Number=Plur|PronType=Ind	29	mark	_	_
26	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	29	auxpass	_	_
27	manifestacija	manifestacija	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	29	nsubjpass	_	_
28	dodatno	dodatno	ADV	_	Degree=Pos	29	advmod	_	_
29	obogaćena	obogatiti	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing|VerbForm=Part	23	acl	_	_
30	.	.	PUNCT	_	_	18	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 20 dislocated	color:blue
1	Izrazivši	izraziti	ADV	_	VerbForm=Part	14	xcomp	_	_
2	nadu	nada	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	1	dobj	_	_
3	da	da	SCONJ	_	_	7	mark	_	_
4	će	htjeti	AUX	_	Number=Sing|Person=3|Tense=Pres	7	aux	_	_
5	u	u	ADP	_	Case=Loc	6	case	_	_
6	budućnosti	budućnost	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	7	nmod	_	_
7	doći	doći	VERB	_	VerbForm=Inf	2	acl	_	_
8	do	do	ADP	_	Case=Gen	10	case	_	_
9	punog	pun	ADJ	_	Case=Gen|Definite=Def|Degree=Pos|Gender=Neut|Number=Sing	10	amod	_	_
10	jedinstva	jedinstvo	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	7	nmod	_	_
11	,	,	PUNCT	_	_	1	punct	_	_
12	Patrijarh	patrijarh	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	14	nsubj	_	_
13	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	14	aux	_	_
14	naglasio	naglasiti	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
15	kako	kako	SCONJ	_	_	25	mark	_	_
16	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	25	dobj	_	_
17	ta	taj	PRON	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	18	det	_	_
18	nada	nada	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	25	nsubj	_	_
19	,	,	PUNCT	_	_	23	punct	_	_
20	baš	baš	ADV	_	Degree=Pos	21	dislocated	_	_
21	kao	kao	SCONJ	_	_	23	case	_	_
22	i	i	CONJ	_	_	21	mwe	_	_
23	jedinstvo	jedinstvo	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	25	nmod	_	_
24	kršćana	kršćanin	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	23	nmod	_	_
25	oslanja	oslanjati	VERB	_	Number=Sing|Person=3|Tense=Pres	14	ccomp	_	_
26	na	na	ADP	_	Case=Acc	28	case	_	_
27	Božju	božji	ADJ	_	Case=Acc|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing|Poss=Yes	28	amod	_	_
28	snagu	snaga	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	25	nmod	_	_
29	.	.	PUNCT	_	_	14	punct	_	_

~~~


