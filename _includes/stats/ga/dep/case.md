

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.
There are 1 language-specific subtypes of `case`: [case:voc]().

1731 nodes (13%) are attached to their parents as `case`.

1727 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.38821490467938.

The following 20 pairs of parts of speech are connected with `case`: [ga-pos/NOUN]()-[ga-pos/ADP]() (1542; 89% instances), [ga-pos/PROPN]()-[ga-pos/ADP]() (94; 5% instances), [ga-pos/PRON]()-[ga-pos/ADP]() (23; 1% instances), [ga-pos/X]()-[ga-pos/ADP]() (18; 1% instances), [ga-pos/NUM]()-[ga-pos/ADP]() (17; 1% instances), [ga-pos/VERB]()-[ga-pos/ADP]() (11; 1% instances), [ga-pos/ADJ]()-[ga-pos/ADP]() (5; 0% instances), [ga-pos/PART]()-[ga-pos/ADP]() (3; 0% instances), [ga-pos/ADP]()-[ga-pos/ADP]() (2; 0% instances), [ga-pos/CCONJ]()-[ga-pos/ADP]() (2; 0% instances), [ga-pos/NOUN]()-[ga-pos/PART]() (2; 0% instances), [ga-pos/NOUN]()-[ga-pos/SCONJ]() (2; 0% instances), [ga-pos/NOUN]()-[ga-pos/X]() (2; 0% instances), [ga-pos/VERB]()-[ga-pos/PART]() (2; 0% instances), [ga-pos/ADV]()-[ga-pos/ADP]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/ADV]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/AUX]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/PROPN]() (1; 0% instances), [ga-pos/PRON]()-[ga-pos/X]() (1; 0% instances), [ga-pos/SCONJ]()-[ga-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 case	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 case	color:blue
1	Limistéar	limistéar	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	0	root	_	_
2	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	Meánmhara	muir	NOUN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	1	compound	_	_
4	is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	5	cop	_	_
5	áit	áit	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	1	ccomp	_	_
6	dúcháis	dúchas	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	5	compound	_	_
7	don	do	ADP	Art	Number=Sing|PronType=Art	9	case	_	_
8	Rós	Rós	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	9	compound	_	_
9	Mhuire	Muire	PROPN	Noun	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 case	color:blue
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


