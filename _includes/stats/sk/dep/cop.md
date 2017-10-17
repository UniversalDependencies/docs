

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is universal.

1342 nodes (1%) are attached to their parents as `cop`.

1148 instances of `cop` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.91281669150522.

The following 11 pairs of parts of speech are connected with `cop`: [sk-pos/NOUN]()-[sk-pos/AUX]() (633; 47% instances), [sk-pos/ADJ]()-[sk-pos/AUX]() (598; 45% instances), [sk-pos/NUM]()-[sk-pos/AUX]() (28; 2% instances), [sk-pos/DET]()-[sk-pos/AUX]() (27; 2% instances), [sk-pos/PRON]()-[sk-pos/AUX]() (24; 2% instances), [sk-pos/PROPN]()-[sk-pos/AUX]() (17; 1% instances), [sk-pos/VERB]()-[sk-pos/AUX]() (7; 1% instances), [sk-pos/ADV]()-[sk-pos/AUX]() (5; 0% instances), [sk-pos/PART]()-[sk-pos/AUX]() (1; 0% instances), [sk-pos/PRON]()-[sk-pos/PRON]() (1; 0% instances), [sk-pos/X]()-[sk-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cop	color:blue
1	Prvou	prvý	ADJ	NAfs7	Case=Ins|Gender=Fem|Number=Sing|NumType=Ord	3	amod	_	_
2	Kimovou	kimov	ADJ	AFfs7x:r	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	_
3	zástavkou	zástavka	NOUN	SSfs7	Case=Ins|Gender=Fem|Number=Sing	0	root	_	_
4	je	byť	AUX	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	cop	_	_
5	centrum	centrum	NOUN	SSns1	Case=Nom|Gender=Neut|Number=Sing	3	nsubj	_	_
6	čínskeho	čínsky	ADJ	AAis2x	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
7	biznisu	biznis	NOUN	SSis2	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
8	-	-	PUNCT	ZIP	VerbForm=Inf	9	punct	_	_
9	Šanghaj	šanghaj	PROPN	SSis1:r	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	appos	_	SpaceAfter=No
10	.	.	PUNCT	ZIP	VerbForm=Inf	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	Po	po	ADP	Eu6	AdpType=Prep|Case=Loc	2	case	_	_
2	Silvestri	silvester	PROPN	SSis6:r	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	4	obl	_	_
3	sú	byť	AUX	VKepc+	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	zničení	zničený	ADJ	AAmp1x	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	_
5	aj	aj	CCONJ	O	_	6	cc	_	_
6	ľudia	človek	NOUN	SSmp1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	SpaceAfter=No
7	,	,	PUNCT	ZIP	VerbForm=Inf	9	punct	_	_
8	aj	aj	CCONJ	O	_	9	cc	_	_
9	zvieratá	zviera	NOUN	SSnp1	Case=Nom|Gender=Neut|Number=Plur	6	conj	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	Jeho	jeho	DET	PUip1	Animacy=Inan|Case=Nom|Gender=Masc|Gender[psor]=Masc,Neut|Number=Plur|Number[psor]=Sing|Poss=Yes|PronType=Prs	2	det	_	_
2	preklady	preklad	NOUN	SSip1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	_
3	sú	byť	AUX	VKepc+	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	jedny	jeden	NUM	NFip1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	0	root	_	_
5	z	z	ADP	Eu2	AdpType=Prep|Case=Gen	6	case	_	_
6	najlepších	dobrý	ADJ	AAip2z	Animacy=Inan|Case=Gen|Degree=Sup|Gender=Masc|Number=Plur	4	amod	_	SpaceAfter=No
7	.	.	PUNCT	Z	_	4	punct	_	_

~~~


