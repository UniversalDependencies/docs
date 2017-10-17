

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.

14 nodes (0%) are attached to their parents as `parataxis`.

14 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 17.0714285714286.

The following 7 pairs of parts of speech are connected with `parataxis`: [ga-pos/VERB]()-[ga-pos/VERB]() (5; 36% instances), [ga-pos/ADJ]()-[ga-pos/VERB]() (2; 14% instances), [ga-pos/NOUN]()-[ga-pos/VERB]() (2; 14% instances), [ga-pos/VERB]()-[ga-pos/NOUN]() (2; 14% instances), [ga-pos/CCONJ]()-[ga-pos/VERB]() (1; 7% instances), [ga-pos/VERB]()-[ga-pos/PRON]() (1; 7% instances), [ga-pos/VERB]()-[ga-pos/SCONJ]() (1; 7% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 19 parataxis	color:blue
1	Fágann	fág	VERB	VTI	Mood=Ind|Tense=Pres	0	root	_	_
2	siad	siad	PRON	Pers	Number=Plur|Person=3	1	nsubj	_	_
3	scoilt	scoilt	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	1	obj	_	_
4	agus	agus	CCONJ	Coord	_	5	cc	_	_
5	cogadh	cogadh	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	3	conj	_	_
6	ina	i	ADP	Poss	Number=Plur|Person=3|Poss=Yes	7	case	_	_
7	ndiaidh	diaidh	NOUN	Subst	Form=Ecl|Number=Sing	1	obl	_	_
8	chun	chun	SCONJ	Subord	_	10	mark	_	_
9	go	go	SCONJ	Subord	_	8	fixed	_	_
10	mbeidh	bí	VERB	FutInd	Form=Ecl|Mood=Ind|Tense=Fut	1	advcl	_	_
11	siad	siad	PRON	Pers	Number=Plur|Person=3	10	nsubj	_	_
12	ábalta	ábalta	ADJ	Adj	Degree=Pos	10	xcomp:pred	_	_
13	a	a	PART	Inf	PartType=Inf	14	mark	_	_
14	rá	rá	NOUN	Noun	VerbForm=Inf	12	xcomp	_	_
15	lena	le	ADP	Poss	Number=Plur|Person=3|Poss=Yes	16	case	_	_
16	bpobal	pobal	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Masc|Number=Sing	14	nmod	_	_
17	féin	féin	PRON	Ref	Reflex=Yes	16	compound	_	SpaceAfter=No
18	:	:	PUNCT	Punct	_	19	punct	_	_
19	féach	féach	VERB	VTI	Mood=Imp|Number=Sing|Person=2	1	parataxis	_	SpaceAfter=No
20	,	,	PUNCT	Punct	_	22	punct	_	_
21	nach	is	AUX	Cop	Polarity=Neg|PronType=Rel|Tense=Pres|VerbForm=Cop	22	cop	_	_
22	maith	maith	ADJ	Adj	Degree=Pos	1	ccomp	_	_
23	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	24	det	_	_
24	rud	rud	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	22	nsubj	_	_
25	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	24	nmod	_	_
26	go	go	SCONJ	Subord	_	27	mark:prt	_	_
27	bhfuilimid	bí	VERB	PresInd	Form=Ecl|Mood=Ind|Number=Plur|Person=1|Tense=Pres	22	ccomp	_	_
28	amach	amach	ADV	Dir	_	27	xcomp:pred	_	_
29	as	as	ADP	Simp	_	30	case	_	_
30	sin	sin	PRON	Dem	PronType=Dem	27	obl	_	SpaceAfter=No
31	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 12 parataxis	color:blue
1	Sa	i	ADP	Art	Number=Sing|PronType=Art	2	case	_	_
2	tsean-am	am	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	3	obl	_	_
3	bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
4	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	5	det	_	_
5	cál	cál	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	3	nsubj	_	_
6	nó	nó	CCONJ	Coord	_	8	cc	_	_
7	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	8	det	_	_
8	cabáiste	cabáiste	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	5	conj	_	_
9	an-ghann	gann	ADJ	Adj	Degree=Pos|Form=Len	3	xcomp:pred	_	SpaceAfter=No
10	;	;	PUNCT	Punct	_	12	punct	_	_
11	b'	is	AUX	Cop	Form=VF|Tense=Past|VerbForm=Cop	12	cop	_	SpaceAfter=No
12	fhéidir	féidir	NOUN	Subst	Form=Len|Number=Sing	3	parataxis	_	_
13	nach	nach	PART	Vb	PartType=Cmpl|Polarity=Neg	14	mark:prt	_	_
14	mbeadh	bí	VERB	Cond	Form=Ecl|Mood=Cnd	12	csubj:cop	_	_
15	i	i	ADP	Simp	_	17	case	_	_
16	ngach	gach	DET	Det	Definite=Def|Form=Ecl	17	det	_	_
17	baile	baile	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	14	xcomp:pred	_	_
18	ach	ach	SCONJ	Subord	_	14	mark:prt	_	_
19	aon	aon	DET	Det	PronType=Ind	20	det	_	_
20	gharraí	garraí	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	14	nsubj	_	_
21	amháin	amháin	ADJ	Adj	Degree=Pos	20	amod	_	SpaceAfter=No
22	.	.	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 14 parataxis	color:blue
1	Ní	is	AUX	Cop	Polarity=Neg|Tense=Pres|VerbForm=Cop	2	cop	_	_
2	cosúil	cosúil	ADJ	Adj	Degree=Pos	0	root	_	_
3	go	go	PART	Vb	PartType=Cmpl	4	mark:prt	_	_
4	raibh	bí	VERB	PastInd	Form=Ecl|Mood=Ind|Tense=Past	2	csubj:cop	_	_
5	mórán	mórán	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	4	nsubj	_	_
6	le	le	ADP	Cmpd	PrepForm=Cmpd	9	case	_	_
7	cois	cois	ADP	Cmpd	_	6	fixed	_	_
8	dhá	dó	NUM	Num	NumType=Card	9	nummod	_	_
9	scór	scór	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	5	nmod	_	_
10	uilig	uile	DET	Det	_	9	det	_	_
11	acu	ag	ADP	Prep	Number=Plur|Person=3	10	compound	_	_
12	istigh	istigh	ADV	Dir	_	4	xcomp:pred	_	_
13	-	-	PUNCT	Punct	_	14	punct	_	_
14	bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	2	parataxis	_	_
15	100	100	NUM	Num	_	14	nsubj	_	_
16	i	i	ADP	Simp	_	17	case	_	_
17	nGaillimh	Gaillimh	PROPN	Noun	Case=NomAcc|Form=Ecl|Gender=Fem|Number=Sing	14	obl	_	SpaceAfter=No
18	.	.	PUNCT	.	_	2	punct	_	_

~~~


