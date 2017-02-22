

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.

407 nodes (3%) are attached to their parents as `amod`.

395 instances of `amod` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.42751842751843.

The following 13 pairs of parts of speech are connected with `amod`: [ga-pos/NOUN]()-[ga-pos/ADJ]() (360; 88% instances), [ga-pos/VERB]()-[ga-pos/ADJ]() (17; 4% instances), [ga-pos/PROPN]()-[ga-pos/ADJ]() (9; 2% instances), [ga-pos/ADJ]()-[ga-pos/ADJ]() (4; 1% instances), [ga-pos/NOUN]()-[ga-pos/NOUN]() (3; 1% instances), [ga-pos/X]()-[ga-pos/ADJ]() (3; 1% instances), [ga-pos/NOUN]()-[ga-pos/ADV]() (2; 0% instances), [ga-pos/NOUN]()-[ga-pos/X]() (2; 0% instances), [ga-pos/PROPN]()-[ga-pos/ADV]() (2; 0% instances), [ga-pos/SCONJ]()-[ga-pos/ADJ]() (2; 0% instances), [ga-pos/PRON]()-[ga-pos/ADJ]() (1; 0% instances), [ga-pos/PROPN]()-[ga-pos/PROPN]() (1; 0% instances), [ga-pos/X]()-[ga-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 amod	color:blue
1	Anseo	anseo	ADV	Loc	_	3	advmod	_	_
2	arís	arís	ADV	Gn	_	3	advmod	_	_
3	tá	bí	VERB	PresInd	Mood=Ind|Tense=Pres	0	root	_	_
4	dealbh	dealbh	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	3	nsubj	_	_
5	mhór	mór	ADJ	Adj	Case=NomAcc|Gender=Fem|Number=Sing	4	amod	_	_
6	de	de	ADP	Simp	_	7	case	_	_
7	Mhao	Mhao	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	3	xcomp:pred	_	SpaceAfter=No
8	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 amod	color:blue
1	Sásta	sásta	ADJ	Adj	Degree=Pos	5	amod	_	_
2	ar	ar	ADP	Simp	_	3	case	_	_
3	deireadh	deireadh	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	obl	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	5	punct	_	_
5	glacaim	glac	VERB	VT	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	_
6	sos	sos	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	5	obj	_	SpaceAfter=No
7	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 amod	color:blue
1	Bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	sí	sí	PRON	Pers	Gender=Fem|Number=Sing|Person=3	1	nsubj	_	_
3	ag	ag	ADP	Simp	_	4	case	_	_
4	freastal	freastal	NOUN	Noun	VerbForm=Vnoun	1	xcomp	_	_
5	ar	ar	ADP	Simp	_	6	case	_	_
6	Scoil	scoil	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	4	nmod	_	_
7	na	na	DET	Art	Definite=Def|Number=Plur|PronType=Art	8	det	_	_
8	gCailíní	cailín	NOUN	Noun	Case=Gen|Definite=Def|Gender=Masc|NounType=Strong|Number=Plur	6	compound	_	SpaceAfter=No
9	,	,	PUNCT	Punct	_	10	punct	_	_
10	Doirí	Doirí	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	6	compound	_	_
11	Beaga	beag	ADJ	Adj	Case=NomAcc|NounType=NotSlender|Number=Plur	10	amod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	1	punct	_	_

~~~


