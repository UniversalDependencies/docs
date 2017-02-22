

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.

10 nodes (0%) are attached to their parents as `vocative`.

7 instances of `vocative` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.2.

The following 4 pairs of parts of speech are connected with `vocative`: [ga-pos/NOUN]()-[ga-pos/PROPN]() (4; 40% instances), [ga-pos/VERB]()-[ga-pos/NOUN]() (3; 30% instances), [ga-pos/VERB]()-[ga-pos/PROPN]() (2; 20% instances), [ga-pos/PROPN]()-[ga-pos/NOUN]() (1; 10% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 vocative	color:blue
1	'	'	PUNCT	Punct	_	2	punct	_	SpaceAfter=No
2	Slán	slán	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	0	root	_	_
3	leat	le	ADP	Prep	Number=Sing|Person=2	2	obl:prep	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	2	punct	_	_
5	a	a	PART	Voc	PartType=Voc	6	case:voc	_	_
6	Dhoráid	Dhoráid	PROPN	Noun	Case=Voc|Gender=Masc|Number=Sing	2	vocative	_	SpaceAfter=No
7	!	!	PUNCT	!	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 vocative	color:blue
1	(	(	PUNCT	Punct	_	3	punct	_	SpaceAfter=No
2	Ag	ag	ADP	Simp	_	3	case	_	_
3	béicíl	béicíl	NOUN	Noun	VerbForm=Vnoun	5	xcomp	_	SpaceAfter=No
4	)	)	PUNCT	Punct	_	3	punct	_	_
5	Téigh	téigh	VERB	VTI	Mood=Imp|Number=Sing|Person=2	0	root	_	_
6	abhaile	abhaile	ADV	Dir	_	5	advmod	_	SpaceAfter=No
7	,	,	PUNCT	Punct	_	8	punct	_	_
8	a	a	PART	Voc	PartType=Voc	9	case:voc	_	_
9	bhithiúnaigh	bithiúnach	NOUN	Noun	Case=Voc|Form=Len|Gender=Masc|Number=Sing	5	vocative	_	SpaceAfter=No
10	!	!	PUNCT	!	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 vocative	color:blue
1	Faisean	faisean	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	0	root	_	_
2	le	le	ADP	Simp	_	3	case	_	_
3	Úna	Úna	PROPN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	1	nmod	_	_
4	Ní	ní	PART	Pat	PartType=Pat	3	flat:name	_	_
5	Bhrannagáin	Bhrannagáin	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	3	flat:name	_	_
6	Ná	ná	PART	Vb	Mood=Imp|PartType=Vb	7	mark:prt	_	_
7	híocaigí	híoc	VERB	Imper	Mood=Imp|Number=Plur|Person=2	1	ccomp	_	_
8	na	na	DET	Art	Definite=Def|Number=Plur|PronType=Art	9	det	_	_
9	táillí	táille	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Plur	7	obj	_	_
10	-	-	PUNCT	Punct	_	11	punct	_	_
11	Fahey	Fahey	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	7	vocative	_	_
12	Brú	Brú	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	nmod	_	_
13	Tráchta	trácht	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	12	compound	_	_
14	i	i	ADP	Simp	_	15	case	_	_
15	Maigh	Maigh	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	12	nmod	_	_
16	Eo	Eo	PROPN	Noun	_	15	flat	_	SpaceAfter=No
17	.	.	PUNCT	.	_	1	punct	_	_

~~~


