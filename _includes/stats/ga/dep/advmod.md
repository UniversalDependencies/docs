

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.

411 nodes (3%) are attached to their parents as `advmod`.

275 instances of `advmod` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.0705596107056.

The following 34 pairs of parts of speech are connected with `advmod`: [ga-pos/VERB]()-[ga-pos/ADV]() (130; 32% instances), [ga-pos/NOUN]()-[ga-pos/ADV]() (63; 15% instances), [ga-pos/VERB]()-[ga-pos/PART]() (49; 12% instances), [ga-pos/VERB]()-[ga-pos/ADJ]() (35; 9% instances), [ga-pos/ADJ]()-[ga-pos/ADV]() (31; 8% instances), [ga-pos/NOUN]()-[ga-pos/ADJ]() (21; 5% instances), [ga-pos/VERB]()-[ga-pos/NOUN]() (15; 4% instances), [ga-pos/VERB]()-[ga-pos/SCONJ]() (13; 3% instances), [ga-pos/NOUN]()-[ga-pos/NOUN]() (10; 2% instances), [ga-pos/ADJ]()-[ga-pos/ADJ]() (4; 1% instances), [ga-pos/NOUN]()-[ga-pos/SCONJ]() (4; 1% instances), [ga-pos/PROPN]()-[ga-pos/ADV]() (4; 1% instances), [ga-pos/ADJ]()-[ga-pos/CCONJ]() (3; 1% instances), [ga-pos/NOUN]()-[ga-pos/CCONJ]() (3; 1% instances), [ga-pos/ADV]()-[ga-pos/ADV]() (2; 0% instances), [ga-pos/NOUN]()-[ga-pos/ADP]() (2; 0% instances), [ga-pos/SCONJ]()-[ga-pos/ADV]() (2; 0% instances), [ga-pos/VERB]()-[ga-pos/CCONJ]() (2; 0% instances), [ga-pos/VERB]()-[ga-pos/PROPN]() (2; 0% instances), [ga-pos/X]()-[ga-pos/PART]() (2; 0% instances), [ga-pos/ADJ]()-[ga-pos/PART]() (1; 0% instances), [ga-pos/ADP]()-[ga-pos/ADV]() (1; 0% instances), [ga-pos/ADP]()-[ga-pos/NOUN]() (1; 0% instances), [ga-pos/ADP]()-[ga-pos/SCONJ]() (1; 0% instances), [ga-pos/ADV]()-[ga-pos/SCONJ]() (1; 0% instances), [ga-pos/CCONJ]()-[ga-pos/ADJ]() (1; 0% instances), [ga-pos/CCONJ]()-[ga-pos/ADV]() (1; 0% instances), [ga-pos/CCONJ]()-[ga-pos/SCONJ]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/NUM]() (1; 0% instances), [ga-pos/NUM]()-[ga-pos/ADV]() (1; 0% instances), [ga-pos/PRON]()-[ga-pos/ADV]() (1; 0% instances), [ga-pos/PROPN]()-[ga-pos/SCONJ]() (1; 0% instances), [ga-pos/SCONJ]()-[ga-pos/ADJ]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 advmod	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 advmod	color:blue
1	Do	do	PART	Vb	PartType=Vb	2	mark:prt	_	_
2	mhothaigh	mothaigh	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
3	sí	sí	PRON	Pers	Gender=Fem|Number=Sing|Person=3	2	nsubj	_	_
4	súile	súil	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Plur	2	obj	_	_
5	na	na	DET	Art	Definite=Def|Number=Plur|PronType=Art	6	det	_	_
6	ndaoine	duine	NOUN	Noun	Case=Gen|Form=Ecl|Gender=Masc|NounType=Strong|Number=Plur	4	compound	_	_
7	á	do	ADP	Poss	Number=Plur|Person=3|Poss=Yes|PronType=Prs	8	case	_	_
8	gcur	cur	NOUN	Noun	Form=Ecl|VerbForm=Inf	2	xcomp	_	_
9	tríthi	tríthi	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	8	obj	_	_
10	aniar	aniar	ADV	Dir	_	8	advmod	_	SpaceAfter=No
11	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod	color:blue
1	Ach	ach	SCONJ	Subord	_	3	advmod	_	_
2	níor	níor	PART	Vb	PartType=Vb|Polarity=Neg|Tense=Past	3	advmod	_	_
3	mhair	mair	VERB	VTI	Form=Len|Mood=Ind|Polarity=Neg|Tense=Past	0	root	_	_
4	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	5	det	_	_
5	cumann	cumann	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	3	nsubj	_	_
6	beag	beag	ADJ	Adj	Case=NomAcc|Gender=Masc|Number=Sing	5	amod	_	_
7	carthanach	carthanach	ADJ	Adj	Case=NomAcc|Gender=Masc|Number=Sing	5	amod	_	_
8	seo	seo	DET	Det	PronType=Dem	5	det	_	_
9	ach	ach	SCONJ	Subord	_	3	mark:prt	_	_
10	seal	seal	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	9	compound	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


