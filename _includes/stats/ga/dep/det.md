

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.

1209 nodes (9%) are attached to their parents as `det`.

978 instances of `det` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.06534325889165.

The following 16 pairs of parts of speech are connected with `det`: [ga-pos/NOUN]()-[ga-pos/DET]() (1055; 87% instances), [ga-pos/PROPN]()-[ga-pos/DET]() (77; 6% instances), [ga-pos/NOUN]()-[ga-pos/X]() (15; 1% instances), [ga-pos/NOUN]()-[ga-pos/PRON]() (13; 1% instances), [ga-pos/PRON]()-[ga-pos/PRON]() (10; 1% instances), [ga-pos/ADP]()-[ga-pos/PRON]() (8; 1% instances), [ga-pos/PRON]()-[ga-pos/DET]() (7; 1% instances), [ga-pos/X]()-[ga-pos/DET]() (6; 0% instances), [ga-pos/NUM]()-[ga-pos/DET]() (4; 0% instances), [ga-pos/ADJ]()-[ga-pos/PRON]() (3; 0% instances), [ga-pos/DET]()-[ga-pos/DET]() (3; 0% instances), [ga-pos/VERB]()-[ga-pos/DET]() (3; 0% instances), [ga-pos/ADJ]()-[ga-pos/DET]() (2; 0% instances), [ga-pos/NOUN]()-[ga-pos/NUM]() (1; 0% instances), [ga-pos/PRON]()-[ga-pos/X]() (1; 0% instances), [ga-pos/PROPN]()-[ga-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det	color:blue
1	Ansin	ansin	ADV	Loc	_	6	advmod	_	_
2	nach	is	AUX	Cop	Mood=Int|Polarity=Neg|Tense=Pres|VerbForm=Cop	6	cop	_	_
3	deas	deas	ADJ	Adj	Degree=Pos	6	xcomp:pred	_	_
4	mar	mar	SCONJ	Subord	_	6	mark	_	_
5	a	a	PART	Vb	PartType=Vb|PronType=Rel	6	mark:prt	_	_
6	bheadh	bí	VERB	Cond	Form=Len|Mood=Cnd	0	root	_	_
7	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	8	det	_	_
8	scéal	scéal	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	6	nsubj	_	_
9	a'm	ag	ADP	Prep	Number=Sing|Person=1	6	obl:prep	_	SpaceAfter=No
10	?	?	PUNCT	?	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	(	(	PUNCT	Punct	_	3	punct	_	SpaceAfter=No
2	'	'	PUNCT	Punct	_	3	punct	_	_
3	Oidhe	oidhe	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	0	root	_	_
4	Réalt	réalta	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	3	compound	_	_
5	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	6	det	_	_
6	Ghleanna	Gleanna	PROPN	Noun	Case=Gen|Gender=Masc|Number=Sing	4	compound	_	_
7	'	'	PUNCT	Punct	_	9	punct	_	SpaceAfter=No
8	,	,	PUNCT	Punct	_	9	punct	_	_
9	CP	CP	X	Abr	Abbr=Yes	3	appos	_	SpaceAfter=No
10	)	)	PUNCT	Punct	_	9	punct	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 det	color:blue
1	'	'	PUNCT	Punct	_	10	punct	_	SpaceAfter=No
2	Tá	bí	VERB	PresInd	Mood=Ind|Tense=Pres	10	ccomp	_	_
3	eagla	eagla	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	2	nsubj	_	_
4	orm	ar	ADP	Prep	Number=Sing|Person=1	2	obl:prep	_	SpaceAfter=No
5	,	,	PUNCT	Punct	_	10	punct	_	_
6	a	a	PART	Voc	PartType=Voc	7	case:voc	_	_
7	fheara	fear	NOUN	Noun	Case=Voc|Form=Len|Gender=Masc|Number=Plur	10	vocative	_	SpaceAfter=No
8	,	,	PUNCT	Punct	_	10	punct	_	SpaceAfter=No
9	'	'	PUNCT	Punct	_	10	punct	_	_
10	arsa	arsa	VERB	PastInd	Mood=Ind|Tense=Past	0	root	_	_
11	Fionn	Fionn	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	10	nsubj	_	SpaceAfter=No
12	,	,	PUNCT	Punct	_	10	punct	_	_
13	'	'	PUNCT	Punct	_	10	punct	_	SpaceAfter=No
14	go	go	PART	Vb	PartType=Cmpl	15	mark:prt	_	_
15	mbeidh	bí	VERB	FutInd	Form=Ecl|Mood=Ind|Tense=Fut	10	ccomp	_	_
16	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	17	det	_	_
17	ceo	ceo	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	15	nsubj	_	_
18	so	seo	X	CM	Dialect=Munster|PronType=Dem	17	det	_	_
19	an-dhorcha	an-dhorcha	ADJ	Adj	Degree=Pos	15	xcomp:pred	_	SpaceAfter=No
20	.	.	PUNCT	.	_	10	punct	_	_

~~~


