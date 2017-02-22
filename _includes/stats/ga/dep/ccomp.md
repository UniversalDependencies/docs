

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.

188 nodes (1%) are attached to their parents as `ccomp`.

177 instances of `ccomp` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 21.1808510638298.

The following 26 pairs of parts of speech are connected with `ccomp`: [ga-pos/VERB]()-[ga-pos/VERB]() (78; 41% instances), [ga-pos/NOUN]()-[ga-pos/VERB]() (26; 14% instances), [ga-pos/VERB]()-[ga-pos/NOUN]() (15; 8% instances), [ga-pos/VERB]()-[ga-pos/ADJ]() (12; 6% instances), [ga-pos/NOUN]()-[ga-pos/NOUN]() (11; 6% instances), [ga-pos/ADJ]()-[ga-pos/VERB]() (8; 4% instances), [ga-pos/VERB]()-[ga-pos/PRON]() (6; 3% instances), [ga-pos/NOUN]()-[ga-pos/ADJ]() (4; 2% instances), [ga-pos/NOUN]()-[ga-pos/ADP]() (3; 2% instances), [ga-pos/VERB]()-[ga-pos/ADP]() (3; 2% instances), [ga-pos/VERB]()-[ga-pos/X]() (3; 2% instances), [ga-pos/ADJ]()-[ga-pos/NOUN]() (2; 1% instances), [ga-pos/NOUN]()-[ga-pos/PRON]() (2; 1% instances), [ga-pos/PROPN]()-[ga-pos/VERB]() (2; 1% instances), [ga-pos/VERB]()-[ga-pos/AUX]() (2; 1% instances), [ga-pos/ADJ]()-[ga-pos/ADJ]() (1; 1% instances), [ga-pos/ADP]()-[ga-pos/VERB]() (1; 1% instances), [ga-pos/AUX]()-[ga-pos/NOUN]() (1; 1% instances), [ga-pos/CCONJ]()-[ga-pos/NOUN]() (1; 1% instances), [ga-pos/NOUN]()-[ga-pos/ADV]() (1; 1% instances), [ga-pos/NOUN]()-[ga-pos/SCONJ]() (1; 1% instances), [ga-pos/PRON]()-[ga-pos/VERB]() (1; 1% instances), [ga-pos/SCONJ]()-[ga-pos/AUX]() (1; 1% instances), [ga-pos/SCONJ]()-[ga-pos/VERB]() (1; 1% instances), [ga-pos/VERB]()-[ga-pos/CCONJ]() (1; 1% instances), [ga-pos/VERB]()-[ga-pos/SCONJ]() (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 ccomp	color:blue
1	Bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	a	a	DET	Det	Gender=Masc|Number=Sing|Person=3|Poss=Yes	3	nmod:poss	_	_
3	mhaide	maide	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	1	nsubj	_	_
4	siúil	siúl	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	3	compound	_	_
5	ina	i	ADP	Poss	Gender=Masc|Number=Sing|Person=3|Poss=Yes	6	case	_	_
6	láimh	lámh	NOUN	Noun	Case=Dat|Gender=Fem|Number=Sing	1	xcomp:pred	_	_
7	aige	ag	ADP	Prep	Gender=Masc|Number=Sing|Person=3	6	obl:prep	_	SpaceAfter=No
8	...	...	PUNCT	Punct	_	9	punct	_	_
9	Bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	1	ccomp	_	_
10	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	11	det	_	_
11	áit	áit	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Sing	9	nsubj	_	_
12	réabtha	réabtha	ADJ	Adj	VerbForm=Part	9	xcomp:pred	_	_
13	dóite	dóite	ADJ	Adj	VerbForm=Part	12	amod	_	SpaceAfter=No
14	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 ccomp	color:blue
1	Cad	cad	PRON	Q	PronType=Int	0	root	_	_
2	ina	i	ADP	Poss	Gender=Masc|Number=Sing|Person=3|Poss=Yes	3	case	_	_
3	thaobh	taobh	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	1	xcomp:pred	_	_
4	ná	nach	PART	Vb	PartType=Cmpl|Polarity=Neg	5	obj	_	_
5	haithneodh	haithneodh	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	acl:relcl	_	SpaceAfter=No
6	,	,	PUNCT	Punct	_	8	punct	_	_
7	ná	nach	PART	Vb	PartType=Cmpl|Polarity=Neg	8	mark:prt	_	_
8	fuil	bí	VERB	PresInd	Form=Ecl|Mood=Ind|Tense=Pres	5	ccomp	_	_
9	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	8	nsubj	_	_
10	do	do	ADP	Simp	_	12	case	_	_
11	mo	mo	DET	Det	Number=Sing|Person=1|Poss=Yes	12	nmod:poss	_	_
12	mhúineadh	múineadh	NOUN	Noun	Form=Len|VerbForm=Inf	8	xcomp	_	SpaceAfter=No
13	?	?	PUNCT	?	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 ccomp	color:blue
1	Bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	máthair	máthair	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	1	nsubj	_	_
3	Jamesie	Jamesie	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	2	compound	_	_
4	ag	ag	ADP	Simp	_	5	case	_	_
5	éirí	éirí	NOUN	Noun	VerbForm=Vnoun	1	xcomp	_	_
6	ar	ar	ADP	Simp	_	7	case	_	_
7	mire	mire	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	4	nmod	_	_
8	gur	is	AUX	Cop	Tense=Past|VerbForm=Cop	9	cop	_	_
9	tubaist	tubaist	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	1	ccomp	_	_
10	éigin	éigin	ADJ	Adj	Case=NomAcc|Gender=Fem|Number=Sing	9	amod	_	_
11	trom	trom	ADJ	Adj	Degree=Pos	9	amod	_	_
12	a	a	PART	Vb	PartType=Vb|PronType=Rel	13	mark:prt	_	_
13	bhain	bain	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	9	csubj:cleft	_	_
14	dóibh	do	ADP	Prep	Number=Plur|Person=3	13	obl:prep	_	SpaceAfter=No
15	.	.	PUNCT	.	_	1	punct	_	_

~~~


