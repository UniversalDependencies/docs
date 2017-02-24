

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is a language-specific subtype of [compound]().

4 nodes (0%) are attached to their parents as `compound:prt`.

4 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25.

The following 3 pairs of parts of speech are connected with `compound:prt`: [ga-pos/NOUN]()-[ga-pos/ADP]() (2; 50% instances), [ga-pos/ADV]()-[ga-pos/ADP]() (1; 25% instances), [ga-pos/VERB]()-[ga-pos/ADP]() (1; 25% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound:prt	color:blue
1	Bean	Bean	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	4	compound	_	_
2	Uasal	uasal	ADJ	Adj	Case=NomAcc|Gender=Fem|Number=Sing	1	amod	_	SpaceAfter=No
3	:	:	PUNCT	Punct	_	4	punct	_	_
4	Cén	cé	DET	Det	Number=Sing|PronType=Int	5	nsubj	_	_
5	dul	dul	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
6	as	as	ADP	Prep	Gender=Masc|Number=Sing|Person=3	5	compound:prt	_	_
7	a	a	PART	Vb	PartType=Vb|PronType=Rel	8	nsubj	_	_
8	bhí	bí	VERB	VI	Form=Len|Mood=Ind|Tense=Past	5	acl:relcl	_	_
9	agam	ag	ADP	Prep	Number=Sing|Person=1	8	obl:prep	_	SpaceAfter=No
10	?	?	PUNCT	?	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 compound:prt	color:blue
1	Má	má	SCONJ	Subord	_	2	mark	_	_
2	imríonn	imir	VERB	VTI	Mood=Ind|Tense=Pres	11	advcl	_	_
3	siad	siad	PRON	Pers	Number=Plur|Person=3	2	nsubj	_	_
4	faoi	faoi	ADP	Prep	Gender=Masc|Number=Sing|Person=3	2	compound:prt	_	_
5	mar	mar	ADP	Simp	_	2	mark	_	_
6	is	is	AUX	Cop	PronType=Rel|Tense=Pres|VerbForm=Cop	7	cop	_	_
7	féidir	féidir	NOUN	Subst	Number=Sing	2	advcl	_	_
8	leo	le	ADP	Prep	Number=Plur|Person=3	7	obl:prep	_	SpaceAfter=No
9	,	,	PUNCT	Punct	_	11	punct	_	_
10	is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	11	cop	_	_
11	dóigh	dóigh	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	0	root	_	_
12	liom	le	ADP	Prep	Number=Sing|Person=1	11	obl:prep	_	_
13	go	go	PART	Vb	PartType=Cmpl	14	mark:prt	_	_
14	bhfillfidh	fill	VERB	VTI	Form=Ecl|Mood=Ind|Tense=Fut	11	csubj:cop	_	_
15	siad	siad	PRON	Pers	Number=Plur|Person=3	14	nsubj	_	_
16	ar	ar	ADP	Simp	_	17	case	_	_
17	Staid	staid	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	14	obl	_	_
18	Semple	Semple	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	17	compound	_	SpaceAfter=No
19	,	,	PUNCT	Punct	_	20	punct	_	_
20	Lá	Lá	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	14	advmod	_	_
21	'	'	PUNCT	Punct	_	23	punct	_	SpaceAfter=No
22	le	le	ADP	Simp	_	23	case	_	_
23	Pádraig	Pádraig	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	20	nmod	_	SpaceAfter=No
24	,	,	PUNCT	Punct	_	25	punct	_	_
25	ach	ach	SCONJ	Subord	_	27	mark	_	_
26	is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	27	cop	_	_
27	ina	i	ADP	Poss	Gender=Masc|Number=Sing|Person=3|Poss=Yes	11	advcl	_	_
28	lámha	lámh	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Plur	27	nmod	_	_
29	féin	féin	PRON	Ref	Reflex=Yes	28	compound	_	_
30	a	a	PART	Vb	PartType=Vb|PronType=Rel	31	mark:prt	_	_
31	bheidh	bí	VERB	FutInd	Form=Len|Mood=Ind|Tense=Fut	27	csubj:cleft	_	_
32	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	31	nsubj	_	_
33	an	an	PART	Vb	PartType=Vb	31	xcomp:pred	_	_
34	ag	ag	ADP	Simp	_	35	case	_	_
35	imirt	imirt	NOUN	Noun	VerbForm=Vnoun	31	xcomp	_	_
36	nó	nó	CCONJ	Coord	_	37	cc	_	_
37	i	i	ADP	Simp	_	27	conj	_	_
38	measc	measc	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	37	nmod	_	_
39	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	40	det	_	_
40	tslua	slua	NOUN	Noun	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	38	compound	_	_
41	a	a	PART	Vb	PartType=Vb|PronType=Rel	42	mark:prt	_	_
42	bheidh	bí	VERB	FutInd	Form=Len|Mood=Ind|Tense=Fut	37	csubj:cleft	_	_
43	siad	siad	PRON	Pers	Number=Plur|Person=3	42	nsubj	_	SpaceAfter=No
44	.	.	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound:prt	color:blue
1	Bíonn	bí	VERB	PresImp	_	0	root	_	_
2	suas	suas	ADV	Dir	_	1	advmod	_	_
3	le	le	ADP	Simp	_	2	compound:prt	_	_
4	céad	céad	NUM	Num	NumType=Card	5	nummod	_	_
5	cineál	cineál	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	nsubj	_	_
6	éagsúil	éagsúil	ADJ	Adj	Case=NomAcc|Gender=Masc|Number=Sing	5	amod	_	_
7	aimsire	aimsir	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	5	compound	_	_
8	agus	agus	CCONJ	Coord	_	9	cc	_	_
9	feiniméan	feiniméan	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	5	conj	_	_
10	aimsire	aimsir	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	9	compound	_	_
11	san	i	ADP	Art	Number=Sing|PronType=Art	12	case	_	_
12	áireamh	áireamh	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	9	nmod	_	_
13	ag	ag	ADP	Simp	_	14	case	_	_
14	meitéareolaithe	meitéareolaí	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	1	obl	_	SpaceAfter=No
15	,	,	PUNCT	Punct	_	17	punct	_	_
16	ón	ó	ADP	Art	Number=Sing|PronType=Art	17	case	_	_
17	gceobhrán	ceobhrán	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Masc|Number=Sing	1	obl	_	_
18	go	go	ADP	Cmpd	PrepForm=Cmpd	20	case	_	_
19	dtí	dtí	ADP	Cmpd	_	18	fixed	_	_
20	tornádónna	tornádó	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	17	nmod	_	SpaceAfter=No
21	.	.	PUNCT	.	_	1	punct	_	_

~~~


