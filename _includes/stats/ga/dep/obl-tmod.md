

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is a language-specific subtype of [obl]().
There are also 1 other language-specific subtypes of `obl`: [obl:prep]().

24 nodes (0%) are attached to their parents as `obl:tmod`.

16 instances of `obl:tmod` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.20833333333333.

The following 4 pairs of parts of speech are connected with `obl:tmod`: [ga-pos/VERB]()-[ga-pos/NOUN]() (13; 54% instances), [ga-pos/NOUN]()-[ga-pos/NOUN]() (6; 25% instances), [ga-pos/VERB]()-[ga-pos/PART]() (4; 17% instances), [ga-pos/ADJ]()-[ga-pos/NOUN]() (1; 4% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 obl:tmod	color:blue
1	Cothaíonn	cothaigh	VERB	VTI	Mood=Ind|Tense=Pres	0	root	_	_
2	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	1	nsubj	_	_
3	a	a	DET	Det	Gender=Masc|Number=Sing|Person=3|Poss=Yes	4	nmod:poss	_	_
4	chuid	cuid	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Fem|Number=Sing	1	obj	_	_
5	Ghaeilge	Gaeilge	PROPN	Noun	Case=Gen|Form=Len|Gender=Fem|Number=Sing	4	compound	_	_
6	gach	gach	DET	Det	Definite=Def	7	det	_	_
7	bliain	bliain	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	1	obl:tmod	_	_
8	ar	ar	ADP	Simp	_	9	case	_	_
9	saoire	saoire	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	1	obl	_	_
10	sa	i	ADP	Art	Number=Sing|PronType=Art	11	case	_	_
11	Spidéal	Spidéal	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	obl	_	SpaceAfter=No
12	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 obl:tmod	color:blue
1	Agus	agus	CCONJ	Coord	_	2	advmod	_	_
2	ranganna	rang	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	0	root	_	_
3	seiteanna	seit	NOUN	Noun	Case=Gen|Gender=Masc|NounType=Strong|Number=Plur	2	compound	_	_
4	agus	agus	CCONJ	Coord	_	5	cc	_	_
5	céilí	céile	NOUN	Noun	Case=Gen|Gender=Masc|NounType=Strong|Number=Plur	2	conj	_	_
6	do	do	ADP	Simp	_	7	case	_	_
7	dhaoine	duine	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Plur	2	nmod	_	_
8	fásta	fásta	ADJ	Adj	VerbForm=Part	7	amod	_	_
9	gach	gach	DET	Det	Definite=Def	10	det	_	_
10	oíche	oíche	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	2	obl:tmod	_	_
11	Dé	Dé	NOUN	Subst	Number=Sing	12	compound	_	_
12	Luain	luain	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	10	compound	_	_
13	ag	ag	ADP	Simp	_	14	case	_	_
14	8.30	8.30	NUM	Num	_	2	nmod	_	SpaceAfter=No
15	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obl:tmod	color:blue
1	B'	is	AUX	Cop	Form=VF|Tense=Past|VerbForm=Cop	2	cop	_	SpaceAfter=No
2	shin	sin	PRON	Dem	PronType=Dem	0	root	_	_
3	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	4	det	_	_
4	uair	uair	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Sing	2	nsubj	_	_
5	a	a	PART	Vb	PartType=Vb|PronType=Rel	6	obl:tmod	_	_
6	gcuireadh	cuir	VERB	VTI	Form=Ecl|Mood=Imp|Tense=Past	4	acl:relcl	_	_
7	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	8	det	_	_
8	Cadhan	cadhan	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	6	obj	_	_
9	Mór	Mór	ADJ	Adj	Case=NomAcc|Gender=Fem|Number=Sing	8	amod	_	_
10	thar	thar	ADP	Simp	_	11	case	_	_
11	maoil	maoil	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	6	obl	_	_
12	agus	agus	CCONJ	Coord	_	14	cc	_	_
13	a	a	PART	Vb	PartType=Vb|PronType=Rel	14	mark:prt	_	_
14	dtuilleadh	tuill	VERB	VT	Form=Ecl|Mood=Imp|Tense=Past	6	conj	_	_
15	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	14	nsubj	_	_
16	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	17	det	_	_
17	leasainm	leasainm	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	14	obj	_	_
18	a	a	PART	Vb	PartType=Vb|PronType=Rel	19	obj	_	_
19	bhaist	baist	VERB	VT	Form=Len|Mood=Ind|Tense=Past	17	acl:relcl	_	_
20	Ó	ó	PART	Pat	PartType=Pat	19	nsubj	_	_
21	Ríordáin	Ríordáin	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	20	flat:name	_	_
22	air	ar	ADP	Prep	Gender=Masc|Number=Sing|Person=3	19	obl:prep	_	SpaceAfter=No
23	,	,	PUNCT	Punct	_	24	punct	_	_
24	Raidhse	raidhse	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	17	appos	_	SpaceAfter=No
25	.	.	PUNCT	.	_	2	punct	_	_

~~~


