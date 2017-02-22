

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: [xcomp:pred]().

339 nodes (2%) are attached to their parents as `xcomp`.

330 instances of `xcomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.40117994100295.

The following 12 pairs of parts of speech are connected with `xcomp`: [ga-pos/VERB]()-[ga-pos/NOUN]() (217; 64% instances), [ga-pos/NOUN]()-[ga-pos/NOUN]() (82; 24% instances), [ga-pos/ADJ]()-[ga-pos/NOUN]() (12; 4% instances), [ga-pos/NOUN]()-[ga-pos/VERB]() (8; 2% instances), [ga-pos/VERB]()-[ga-pos/VERB]() (6; 2% instances), [ga-pos/PRON]()-[ga-pos/NOUN]() (4; 1% instances), [ga-pos/VERB]()-[ga-pos/ADP]() (3; 1% instances), [ga-pos/ADP]()-[ga-pos/NOUN]() (2; 1% instances), [ga-pos/NOUN]()-[ga-pos/ADJ]() (2; 1% instances), [ga-pos/AUX]()-[ga-pos/NOUN]() (1; 0% instances), [ga-pos/PART]()-[ga-pos/NOUN]() (1; 0% instances), [ga-pos/SCONJ]()-[ga-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 xcomp	color:blue
1	'	'	PUNCT	Punct	_	2	punct	_	SpaceAfter=No
2	Cén	cé	PRON	Q	Number=Sing|PronType=Int	0	root	_	_
3	diabhal	diabhal	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	2	xcomp:pred	_	_
4	útamála	útamáil	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	3	compound	_	_
5	atá	bí	VERB	PresInd	Mood=Ind|PronType=Rel|Tense=Pres	2	csubj:cleft	_	_
6	ar	ar	ADP	Simp	_	7	case	_	_
7	siúl	siúl	NOUN	Noun	VerbForm=Inf	5	xcomp	_	_
8	ansin	ansin	ADV	Loc	_	5	advmod	_	_
9	thíos	thíos	ADV	Dir	_	5	advmod	_	SpaceAfter=No
10	?	?	PUNCT	?	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 xcomp	color:blue
1	'	'	PUNCT	Punct	_	3	punct	_	SpaceAfter=No
2	Ach	ach	SCONJ	Subord	_	3	advmod	_	_
3	caithfidh	caith	VERB	FutInd	Mood=Ind|Tense=Fut	0	root	_	_
4	mise	mise	PRON	Pers	Number=Sing|Person=1|PronType=Emp	3	nsubj	_	_
5	a	a	PART	Inf	PartType=Inf	6	mark	_	_
6	bheith	bheith	NOUN	Noun	Form=Len|VerbForm=Inf	3	xcomp	_	_
7	ar	ar	ADP	Simp	_	8	case	_	_
8	shiúl	siúl	NOUN	Noun	Form=Len|VerbForm=Inf	6	xcomp	_	_
9	chun	chun	ADP	Simp	_	11	case	_	_
10	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	11	det	_	_
11	tsiopa	siopa	NOUN	Noun	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 17 xcomp	color:blue
1	Tuigtear	tuig	VERB	VTI	Mood=Ind|Tense=Pres|Voice=Auto	0	root	_	_
2	dom	do	ADP	Prep	Number=Sing|Person=1	1	obl:prep	_	SpaceAfter=No
3	,	,	PUNCT	Punct	_	4	punct	_	_
4	áfach	áfach	ADV	Gn	_	1	advmod	_	SpaceAfter=No
5	,	,	PUNCT	Punct	_	7	punct	_	_
6	go	go	PART	Vb	PartType=Cmpl	7	mark:prt	_	_
7	bhfuil	bí	VERB	PresInd	Form=Ecl|Mood=Ind|Tense=Pres	1	ccomp	_	_
8	roinnt	roinnt	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	7	nsubj	_	_
9	siopaí	siopa	NOUN	Noun	Case=Gen|Gender=Masc|NounType=Strong|Number=Plur	8	compound	_	_
10	i	i	ADP	Simp	_	11	case	_	_
11	dTír	tír	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Fem|Number=Sing	7	xcomp:pred	_	_
12	Chonaill	Conall	PROPN	Noun	Case=Gen|Form=Len|Gender=Masc	11	compound	_	_
13	atá	bí	VERB	PresInd	Mood=Ind|PronType=Rel|Tense=Pres	9	acl:relcl	_	_
14	sásta	sásta	ADJ	Adj	Degree=Pos	13	xcomp:pred	_	_
15	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	17	obj	_	_
16	a	a	PART	Inf	PartType=Inf	17	mark	_	_
17	dhíol	díol	NOUN	Noun	Form=Len|VerbForm=Inf	14	xcomp	_	_
18	i	i	ADP	Simp	_	19	case	_	_
19	gclúdach	clúdach	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Masc|Number=Sing	17	nmod	_	_
20	donn	donn	ADJ	Adj	Case=NomAcc|Gender=Masc|Number=Sing	19	amod	_	_
21	faoin	faoi	ADP	Art	Number=Sing|PronType=Art	22	case	_	_
22	chuntar	cuntar	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	17	nmod	_	SpaceAfter=No
23	.	.	PUNCT	.	_	1	punct	_	_

~~~


