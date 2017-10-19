

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

4942 nodes (13%) are attached to their parents as `nmod`.

4553 instances of `nmod` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.57102387697289.

The following 20 pairs of parts of speech are connected with `nmod`: [-pos/NOUN]()-[-pos/NOUN]() (4108; 83% instances), [-pos/NOUN]()-[-pos/X]() (615; 12% instances), [-pos/NOUN]()-[-pos/PRON]() (58; 1% instances), [-pos/X]()-[-pos/NOUN]() (37; 1% instances), [-pos/NOUN]()-[-pos/NUM]() (27; 1% instances), [-pos/NUM]()-[-pos/X]() (26; 1% instances), [-pos/NUM]()-[-pos/NOUN]() (22; 0% instances), [-pos/NUM]()-[-pos/SYM]() (13; 0% instances), [-pos/PRON]()-[-pos/NOUN]() (8; 0% instances), [-pos/SYM]()-[-pos/NOUN]() (8; 0% instances), [-pos/X]()-[-pos/X]() (5; 0% instances), [-pos/NOUN]()-[-pos/CCONJ]() (4; 0% instances), [-pos/NOUN]()-[-pos/ADP]() (3; 0% instances), [-pos/ADP]()-[-pos/NOUN]() (2; 0% instances), [-pos/ADP]()-[-pos/X]() (1; 0% instances), [-pos/DET]()-[-pos/NOUN]() (1; 0% instances), [-pos/NOUN]()-[-pos/PART]() (1; 0% instances), [-pos/NOUN]()-[-pos/SYM]() (1; 0% instances), [-pos/PRON]()-[-pos/PRON]() (1; 0% instances), [-pos/X]()-[-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nmod	color:blue
1	OBSAHOVÉ	obsahový	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	2	amod	_	_
2	VYMEZENÍ	vymezení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	0	root	_	_
3	NĚKTERÝCH	některý	DET	PZXP2----------	Case=Gen|Number=Plur|PronType=Ind	4	det	_	_
4	POLOŽEK	položka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	2	nmod	_	_
5	ROZVAHY	rozvaha	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	4	nmod	_	_
6	(	(	PUNCT	Z:-------------	_	7	punct	_	SpaceAfter=No
7	BILANCE	bilance	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	5	appos	_	SpaceAfter=No
8	)	)	PUNCT	Z:-------------	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nmod	color:blue
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


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 nmod	color:blue
1	Nestanoví-li	Nestanoví-li	NOUN	NNNXX-----A----	Gender=Neut|Polarity=Pos	6	obl	_	_
2	tento	tento	DET	PDIS4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
3	zákon	zákon	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	1	nsubj	_	_
4	jinak	jinak	ADV	Db-------------	_	1	advmod	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	1	punct	_	_
6	platí	platit	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	8	case	_	LId=pro-1
8	nakládání	nakládání	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	6	obl	_	_
9	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	10	case	_	LId=s-1
10	nimi	on	PRON	P5XP7--3-------	Case=Ins|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs	8	nmod	_	LId=on-1
11	zvláštní	zvláštní	ADJ	AAIP4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	13	amod	_	_
12	právní	právní	ADJ	AAIP4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	13	amod	_	_
13	předpisy	předpis	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	6	nsubj	_	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


