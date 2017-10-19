

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

437 nodes (1%) are attached to their parents as `cop`.

402 instances of `cop` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.32723112128146.

The following 7 pairs of parts of speech are connected with `cop`: [-pos/ADJ]()-[-pos/AUX]() (195; 45% instances), [-pos/NOUN]()-[-pos/AUX]() (135; 31% instances), [-pos/VERB]()-[-pos/AUX]() (99; 23% instances), [-pos/PRON]()-[-pos/AUX]() (4; 1% instances), [-pos/ADV]()-[-pos/AUX]() (2; 0% instances), [-pos/DET]()-[-pos/AUX]() (1; 0% instances), [-pos/NUM]()-[-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	(5)	(5)	PUNCT	Z:-------------	_	4	punct	_	_
2	Rezervy	rezerva	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	5	obj	_	_
3	není	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	možné	možný	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	0	root	_	_
5	používat	používat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	4	csubj	_	_
6	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	7	case	_	LId=k-1
7	úpravám	úprava	NOUN	NNFP3-----A----	Case=Dat|Gender=Fem|Number=Plur|Polarity=Pos	5	obl	_	_
8	výše	výše	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	7	nmod	_	_
9	ocenění	ocenění	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	8	nmod	_	_
10	aktiv	aktivum	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	9	nmod	_	SpaceAfter=No|LId=aktivum-1
11	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 cop	color:blue
1	Účetní	účetní	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	2	amod	_	LId=účetní-1
2	období	období	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	5	nsubj	_	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pv	_	_
4	buď	buď	CCONJ	J^-------------	_	5	cc	_	_
5	shoduje	shodovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	8	case	_	LId=s-1
7	kalendářním	kalendářní	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	8	amod	_	_
8	rokem	rok	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	5	obj	_	_
9	nebo	nebo	CCONJ	J^-------------	_	12	cc	_	_
10	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	_	_
11	hospodářským	hospodářský	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	12	amod	_	_
12	rokem	rok	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	5	conj	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cop	color:blue
1	Směrná	směrný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	3	amod	_	_
2	účtová	účtový	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	3	amod	_	_
3	osnova	osnova	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	5	nsubj	_	_
4	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
5	uvedena	uvést	VERB	VsQW---XX-AP---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	_	_
6	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	_	LId=v-1
7	příloze	příloha	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	5	obl	_	_
8	č.	č.	X	X@-------------	_	7	nmod	_	_
9	4	4	X	X@-------------	_	8	flat	_	_
10	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	12	case	_	LId=k-1
11	této	tento	DET	PDFS3----------	Case=Dat|Gender=Fem|Number=Sing|PronType=Dem	12	det	_	_
12	vyhlášce	vyhláška	NOUN	NNFS3-----A----	Case=Dat|Gender=Fem|Number=Sing|Polarity=Pos	7	nmod	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


