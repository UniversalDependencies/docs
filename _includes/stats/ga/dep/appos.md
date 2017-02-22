

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.

66 nodes (0%) are attached to their parents as `appos`.

66 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.59090909090909.

The following 12 pairs of parts of speech are connected with `appos`: [ga-pos/NOUN]()-[ga-pos/NOUN]() (23; 35% instances), [ga-pos/NOUN]()-[ga-pos/PROPN]() (11; 17% instances), [ga-pos/PROPN]()-[ga-pos/NOUN]() (9; 14% instances), [ga-pos/X]()-[ga-pos/NOUN]() (7; 11% instances), [ga-pos/NOUN]()-[ga-pos/X]() (6; 9% instances), [ga-pos/PROPN]()-[ga-pos/PROPN]() (3; 5% instances), [ga-pos/PRON]()-[ga-pos/NOUN]() (2; 3% instances), [ga-pos/CCONJ]()-[ga-pos/PRON]() (1; 2% instances), [ga-pos/NOUN]()-[ga-pos/NUM]() (1; 2% instances), [ga-pos/NOUN]()-[ga-pos/PRON]() (1; 2% instances), [ga-pos/NOUN]()-[ga-pos/VERB]() (1; 2% instances), [ga-pos/PROPN]()-[ga-pos/ADJ]() (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 appos	color:blue
1	Cuimhní	cuimhne	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Plur	0	root	_	_
2	ó	ó	ADP	Simp	_	3	case	_	_
3	áit	áit	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	1	nmod	_	_
4	éigin	éigin	ADJ	Adj	Case=NomAcc|Gender=Fem|Number=Sing	3	amod	_	_
5	eile	eile	DET	Det	PronType=Dem	3	det	_	SpaceAfter=No
6	,	,	PUNCT	Punct	_	8	punct	_	_
7	na	na	DET	Art	Definite=Def|Number=Plur|PronType=Art	8	det	_	_
8	blianta	bliain	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Plur	1	appos	_	_
9	fada	fada	ADJ	Adj	Degree=Pos	8	amod	_	_
10	ó	ó	ADP	Simp	_	11	case	_	_
11	shin	sin	PRON	Dem	PronType=Dem	8	nmod	_	SpaceAfter=No
12	?	?	PUNCT	?	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 appos	color:blue
1	Ba	is	AUX	Cop	Tense=Past|VerbForm=Cop	4	cop	_	_
2	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	4	nmod	_	_
3	a	a	DET	Det	Gender=Masc|Number=Sing|Person=3|Poss=Yes	4	nmod:poss	_	_
4	dheartháir	deartháir	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	0	root	_	_
5	Ian	Ian	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	4	compound	_	_
6	agus	agus	CCONJ	Coord	_	7	cc	_	_
7	fear	fear	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	4	conj	_	_
8	eile	eile	DET	Det	PronType=Dem	7	det	_	_
9	Tom	Tom	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	7	appos	_	_
10	Sheldon	Sheldon	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	9	flat:name	_	_
11	a	a	PART	Vb	PartType=Vb|PronType=Rel	12	mark:prt	_	_
12	bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	4	csubj:cleft	_	_
13	i	i	ADP	Cmpd	PrepForm=Cmpd	16	case	_	_
14	mbun	mbun	ADP	Cmpd	_	13	fixed	_	_
15	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	seirbhíse	seirbhís	NOUN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	12	xcomp:pred	_	_
17	seo	seo	DET	Det	PronType=Dem	16	det	_	SpaceAfter=No
18	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 appos	color:blue
1	Iarmhairt	iarmhairt	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	0	root	_	_
2	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	3	det	_	_
3	Chogaidh	cogadh	NOUN	Noun	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	1	compound	_	_
4	i	i	ADP	Simp	_	5	case	_	_
5	Murascaill	murascaill	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	1	nmod	_	_
6	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	Peirse	Peirse	PROPN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	5	compound	_	_
8	Muireann	Muireann	PROPN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	1	nmod	_	_
9	Ó	ó	PART	Pat	PartType=Pat	8	flat:name	_	_
10	Briain	Briain	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	8	flat:name	_	_
11	Cairt	cairt	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	8	appos	_	_
12	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	Náisiún	náisiún	NOUN	Noun	Case=Gen|Definite=Def|Gender=Masc|NounType=Weak|Number=Plur	11	compound	_	_
14	Aontaithe	aontaithe	ADJ	Adj	VerbForm=Part	13	amod	_	SpaceAfter=No
15	.	.	PUNCT	.	_	1	punct	_	_

~~~


