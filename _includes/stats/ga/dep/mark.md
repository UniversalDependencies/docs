

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.
There are 1 language-specific subtypes of `mark`: [mark:prt]().

411 nodes (3%) are attached to their parents as `mark`.

397 instances of `mark` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.9294403892944.

The following 25 pairs of parts of speech are connected with `mark`: [ga-pos/NOUN]()-[ga-pos/PART]() (155; 38% instances), [ga-pos/VERB]()-[ga-pos/SCONJ]() (120; 29% instances), [ga-pos/VERB]()-[ga-pos/CCONJ]() (28; 7% instances), [ga-pos/NOUN]()-[ga-pos/SCONJ]() (24; 6% instances), [ga-pos/NOUN]()-[ga-pos/CCONJ]() (23; 6% instances), [ga-pos/VERB]()-[ga-pos/ADP]() (7; 2% instances), [ga-pos/ADJ]()-[ga-pos/CCONJ]() (5; 1% instances), [ga-pos/ADJ]()-[ga-pos/SCONJ]() (5; 1% instances), [ga-pos/PRON]()-[ga-pos/SCONJ]() (5; 1% instances), [ga-pos/PROPN]()-[ga-pos/CCONJ]() (5; 1% instances), [ga-pos/ADP]()-[ga-pos/CCONJ]() (4; 1% instances), [ga-pos/NOUN]()-[ga-pos/ADP]() (4; 1% instances), [ga-pos/VERB]()-[ga-pos/NOUN]() (4; 1% instances), [ga-pos/ADP]()-[ga-pos/SCONJ]() (3; 1% instances), [ga-pos/PRON]()-[ga-pos/CCONJ]() (3; 1% instances), [ga-pos/VERB]()-[ga-pos/PART]() (3; 1% instances), [ga-pos/ADJ]()-[ga-pos/NOUN]() (2; 0% instances), [ga-pos/ADV]()-[ga-pos/CCONJ]() (2; 0% instances), [ga-pos/ADV]()-[ga-pos/SCONJ]() (2; 0% instances), [ga-pos/NOUN]()-[ga-pos/NOUN]() (2; 0% instances), [ga-pos/CCONJ]()-[ga-pos/PART]() (1; 0% instances), [ga-pos/NUM]()-[ga-pos/CCONJ]() (1; 0% instances), [ga-pos/SCONJ]()-[ga-pos/SCONJ]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/ADV]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/PUNCT]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 mark	color:blue
1	Ar	is	AUX	Cop	Tense=Past|VerbForm=Cop	2	cop	_	_
2	mhaith	maith	ADJ	Adj	Degree=Pos|Form=Len	0	root	_	_
3	leat	le	ADP	Prep	Number=Sing|Person=2	2	obl:prep	_	_
4	teach	teach	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	6	obj	_	_
5	a	a	PART	Inf	PartType=Inf	6	mark	_	_
6	cheannach	ceannach	NOUN	Noun	Form=Len|VerbForm=Inf	2	nsubj	_	SpaceAfter=No
7	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 mark	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 mark	color:blue
1	'	'	PUNCT	Punct	_	2	punct	_	SpaceAfter=No
2	Athraíonn	athraigh	VERB	VTI	Mood=Ind|Tense=Pres	0	root	_	_
3	sí	sí	PRON	Pers	Gender=Fem|Number=Sing|Person=3	2	nsubj	_	_
4	a	a	DET	Det	Gender=Fem|Number=Sing|Person=3|Poss=Yes	5	nmod:poss	_	_
5	haigne	aigne	NOUN	Noun	Case=NomAcc|Form=HPref|Gender=Fem|Number=Sing	2	obj	_	_
6	ansin	ansin	ADV	Loc	_	2	advmod	_	_
7	chomh	chomh	ADV	Its	_	8	advmod	_	_
8	luath	luath	ADJ	Adj	Degree=Pos	2	amod	_	_
9	is	agus	CCONJ	Coord	_	11	mark	_	_
10	a	a	PART	Vb	PartType=Vb|PronType=Rel	11	mark:prt	_	_
11	chastar	cas	VERB	VTI	Form=Len|Mood=Ind|Tense=Pres|Voice=Auto	2	advcl	_	_
12	ar	ar	ADP	Simp	_	14	case	_	_
13	a	a	DET	Det	Number=Plur|Person=3|Poss=Yes	14	nmod:poss	_	_
14	chéile	céile	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	11	obl	_	_
15	iad	iad	PRON	Pers	Number=Plur|Person=3	11	obj	_	SpaceAfter=No
16	!	!	PUNCT	!	_	2	punct	_	_

~~~


