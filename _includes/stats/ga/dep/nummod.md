

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.

360 nodes (2%) are attached to their parents as `nummod`.

227 instances of `nummod` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.075.

The following 17 pairs of parts of speech are connected with `nummod`: [ga-pos/NOUN]()-[ga-pos/NUM]() (232; 64% instances), [ga-pos/NOUN]()-[ga-pos/X]() (48; 13% instances), [ga-pos/VERB]()-[ga-pos/X]() (23; 6% instances), [ga-pos/X]()-[ga-pos/NUM]() (12; 3% instances), [ga-pos/NOUN]()-[ga-pos/NOUN]() (10; 3% instances), [ga-pos/PROPN]()-[ga-pos/NUM]() (10; 3% instances), [ga-pos/VERB]()-[ga-pos/NUM]() (6; 2% instances), [ga-pos/NUM]()-[ga-pos/NUM]() (4; 1% instances), [ga-pos/ADP]()-[ga-pos/NUM]() (3; 1% instances), [ga-pos/NUM]()-[ga-pos/X]() (3; 1% instances), [ga-pos/ADP]()-[ga-pos/X]() (2; 1% instances), [ga-pos/X]()-[ga-pos/X]() (2; 1% instances), [ga-pos/ADJ]()-[ga-pos/NUM]() (1; 0% instances), [ga-pos/CONJ]()-[ga-pos/NUM]() (1; 0% instances), [ga-pos/CONJ]()-[ga-pos/X]() (1; 0% instances), [ga-pos/PRON]()-[ga-pos/X]() (1; 0% instances), [ga-pos/PROPN]()-[ga-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod	color:blue
1	Nótaí	nóta	NOUN	Noun	Case=Com|Gender=Masc|Number=Plur	0	root	_	_
2	01	01	NUM	Num	_	1	nummod	_	_
3	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nummod	color:blue
1	Taisce	taisce	NOUN	Noun	Case=Com|Gender=Fem|Number=Sing	0	root	_	_
2	ábhair	ábhar	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	1	compound	_	_
3	léitheoireachta	léitheoireacht	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	2	compound	_	_
4	(11)	(11)	X	Item	_	2	nummod	_	_
5	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nummod	color:blue
1	B	B	X	Item	_	3	nummod	_	_
2	:	:	PUNCT	Punct	_	3	punct	_	_
3	Deir	abair	VERB	VTI	Mood=Ind|Tense=Pres	0	root	_	_
4	mo	mo	DET	Det	Number=Sing|Person=1|Poss=Yes	5	nmod:poss	_	_
5	chairde	cara	NOUN	Noun	Case=Com|Form=Len|Gender=Masc|Number=Plur	3	nsubj	_	_
6	liom	le	ADP	Prep	Number=Sing|Person=1	3	nmod:prep	_	_
7	go	go	PART	Vb	PartType=Cmpl	8	mark:prt	_	_
8	bhfuil	bí	VERB	PresInd	Form=Ecl|Mood=Ind|Tense=Pres	3	ccomp	_	_
9	Mel	Mel	PROPN	Noun	Case=Com|Gender=Masc|Number=Sing	10	compound	_	_
10	Gibson	Gibson	PROPN	Noun	Case=Com|Gender=Masc|Number=Sing	8	nsubj	_	_
11	go	go	PART	Ad	PartType=Ad	12	mark:prt	_	_
12	hiontach	iontach	ADJ	Adj	Degree=Pos|Form=HPref	8	xcomp:pred	_	_
13	sa	i	ADP	Art	Number=Sing|PronType=Art	14	case	_	_
14	scannán	scannán	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	8	nmod	_	_
15	sin	sin	DET	Det	PronType=Dem	14	det	_	_
16	.	.	PUNCT	.	_	3	punct	_	_

~~~


