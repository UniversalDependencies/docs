

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

24 nodes (0%) are attached to their parents as `list`.

21 instances of `list` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.45833333333333.

The following 12 pairs of parts of speech are connected with `list`: [hr-pos/NOUN]()-[hr-pos/NOUN]() (9; 38% instances), [hr-pos/ADJ]()-[hr-pos/VERB]() (2; 8% instances), [hr-pos/NUM]()-[hr-pos/NUM]() (2; 8% instances), [hr-pos/PROPN]()-[hr-pos/PROPN]() (2; 8% instances), [hr-pos/VERB]()-[hr-pos/VERB]() (2; 8% instances), [hr-pos/ADJ]()-[hr-pos/ADV]() (1; 4% instances), [hr-pos/NOUN]()-[hr-pos/ADV]() (1; 4% instances), [hr-pos/NOUN]()-[hr-pos/PROPN]() (1; 4% instances), [hr-pos/PROPN]()-[hr-pos/ADJ]() (1; 4% instances), [hr-pos/VERB]()-[hr-pos/ADV]() (1; 4% instances), [hr-pos/VERB]()-[hr-pos/PRON]() (1; 4% instances), [hr-pos/VERB]()-[hr-pos/SCONJ]() (1; 4% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 list	color:blue
1	Ukoliko	ukoliko	SCONJ	_	_	5	mark	_	_
2	navedena	navesti	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Neut|Number=Plur|VerbForm=Part	3	amod	_	_
3	ponašanja	ponašanje	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	5	nsubj	_	_
4	budu	biti	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	učestala	učestao	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Neut|Number=Plur	8	advcl	_	_
6	i	i	CCONJ	_	_	7	cc	_	_
7	intenzivna	intenzivan	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Neut|Number=Plur	5	conj	_	_
8	potrebno	potreban	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
9	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
10	potražiti	potražiti	VERB	_	VerbForm=Inf	8	csubj	_	_
11	pomoć	pomoć	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	10	obj	_	_
12	stručnjaka	stručnjak	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	11	nmod	_	SpaceAfter=No
13	,	,	PUNCT	_	_	12	punct	_	_
14	psihologa	psiholog	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	12	list	_	SpaceAfter=No
15	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 23 list	color:blue
1	Ali	ali	CCONJ	_	_	4	cc	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	kad	kad	ADV	_	Degree=Pos|PronType=Int,Rel	4	advmod	_	_
4	staneš	stati	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
5	ispred	ispred	ADP	_	Case=Gen	6	case	_	_
6	njih	oni	PRON	_	Case=Gen|Number=Plur|Person=3|PronType=Prs	4	obl	_	_
7	nekoliko	nekoliko	DET	_	NumType=Card|PronType=Ind	6	det	_	SpaceAfter=No
8	,	,	PUNCT	_	_	4	punct	_	_
9	kad	kad	ADV	_	Degree=Pos|PronType=Int,Rel	13	advmod	_	_
10	ti	ti	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	13	iobj	_	_
11	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	13	expl:pv	_	_
12	oči	oko	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	13	nsubj	_	_
13	zasjaje	zasjajiti	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	list	_	_
14	više	mnogo	ADV	_	Degree=Cmp|NumType=Card|PronType=Ind	13	advmod	_	_
15	nego	nego	CCONJ	_	_	19	mark	_	_
16	što	što	SCONJ	_	_	15	fixed	_	_
17	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	19	expl:pv	_	_
18	on	on	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	19	nsubj	_	_
19	sjaji	sjajiti	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	advcl	_	SpaceAfter=No
20	,	,	PUNCT	_	_	4	punct	_	_
21	kad	kad	ADV	_	Degree=Pos|PronType=Int,Rel	23	advmod	_	_
22	ipak	ipak	ADV	_	Degree=Pos	23	advmod	_	_
23	sjedneš	sjesti	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	list	_	SpaceAfter=No
24	...	...	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 24 list	color:blue
1	Jedanaest	jedanaest	NUM	_	NumType=Card	2	nummod	_	_
2	mjeseci	mjesec	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	38	obl	_	_
3	nakon	nakon	SCONJ	_	_	16	mark	_	_
4	što	što	SCONJ	_	_	3	fixed	_	_
5	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	aux	_	_
6	hrvatska	hrvatski	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	_
7	zrakoplovna	zrakoplovni	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	_
8	kompanija	kompanija	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	16	nsubj	_	_
9	Croatia	Croatia	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	8	appos	_	_
10	Airlines	Airlines	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	9	compound	_	SpaceAfter=No
11	,	,	PUNCT	_	_	13	punct	_	_
12	zbog	zbog	ADP	_	Case=Gen	13	case	_	_
13	racionalizacije	racionalizacija	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	16	obl	_	_
14	poslovanja	poslovanje	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	13	nmod	_	SpaceAfter=No
15	,	,	PUNCT	_	_	13	punct	_	_
16	ukinula	ukinuti	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	2	advcl	_	_
17	sezonsku	sezonski	ADJ	_	Case=Acc|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	19	amod	_	_
18	avionsku	avionski	ADJ	_	Case=Acc|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	19	amod	_	_
19	liniju	linija	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	16	obj	_	_
20	Zagreb	Zagreb	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	19	appos	_	_
21	-	-	PUNCT	_	_	20	punct	_	_
22	Rijeka	Rijeka	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	20	list	_	_
23	-	-	PUNCT	_	_	20	punct	_	_
24	London	London	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	20	list	_	SpaceAfter=No
25	,	,	PUNCT	_	_	16	punct	_	_
26	direktor	direktor	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	38	nsubj	_	_
27	Croatia	Croatia	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	26	nmod	_	_
28	Airlinesa	Airlines	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	27	compound	_	_
29	Šimunović	Šimunović	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	26	appos	_	_
30	i	i	CCONJ	_	_	32	cc	_	_
31	primorsko-goranski	primorsko-goranski	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	32	amod	_	_
32	župan	Župan	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	26	conj	_	_
33	Komadina	Komadina	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	32	appos	_	_
34	na	na	ADP	_	Case=Loc	37	case	_	_
35	županovom	županov	ADJ	_	Case=Loc|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing|Poss=Yes	37	amod	_	_
36	su	biti	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	38	aux	_	_
37	kolegiju	kolegij	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	38	obl	_	_
38	najavili	najaviti	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
39	povratak	povratak	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	38	obj	_	_
40	domaće	domaći	ADJ	_	Case=Gen|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	41	amod	_	_
41	aviokompanije	aviokompanija	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	39	nmod	_	_
42	na	na	ADP	_	Case=Acc	43	case	_	_
43	otok	otok	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	39	nmod	_	_
44	Krk	Krk	PROPN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	43	appos	_	_
45	u	u	ADP	_	Case=Loc	46	case	_	_
46	2011.	2011.	ADJ	_	NumType=Ord	39	nmod	_	SpaceAfter=No
47	,	,	PUNCT	_	_	52	punct	_	_
48	što	što	SCONJ	_	_	52	mark	_	_
49	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	52	aux	_	_
50	župan	župan	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	52	nsubj	_	_
51	Komadina	Komadina	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	50	appos	_	_
52	ocijenio	ocijeniti	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	38	advcl	_	_
53	važnim	važan	ADJ	_	Case=Ins|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	54	amod	_	_
54	korakom	korak	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	52	xcomp	_	_
55	za	za	ADP	_	Case=Acc	56	case	_	_
56	repozicioniranje	repozicioniranje	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	54	nmod	_	_
57	Kvarnera	Kvarner	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	56	nmod	_	_
58	kao	kao	SCONJ	_	_	59	case	_	_
59	aviodestinacije	aviodestinacija	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	57	nmod	_	_
60	i	i	CCONJ	_	_	61	cc	_	_
61	povezivanja	povezivanje	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	56	conj	_	_
62	regije	regija	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	61	nmod	_	_
63	s	sa	ADP	_	Case=Ins	64	case	_	_
64	Europom	Europa	PROPN	_	Case=Ins|Gender=Fem|Number=Sing	61	nmod	_	_
65	i	i	CCONJ	_	_	66	cc	_	_
66	SAD-om	SAD	PROPN	_	Case=Ins|Gender=Masc|Number=Sing	64	conj	_	SpaceAfter=No
67	.	.	PUNCT	_	_	38	punct	_	_

~~~


