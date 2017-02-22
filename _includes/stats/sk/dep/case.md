

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is universal.

7368 nodes (8%) are attached to their parents as `case`.

7355 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.39888707926167.

The following 18 pairs of parts of speech are connected with `case`: [sk-pos/NOUN]()-[sk-pos/ADP]() (5768; 78% instances), [sk-pos/PRON]()-[sk-pos/ADP]() (629; 9% instances), [sk-pos/PROPN]()-[sk-pos/ADP]() (522; 7% instances), [sk-pos/DET]()-[sk-pos/ADP]() (249; 3% instances), [sk-pos/NUM]()-[sk-pos/ADP]() (50; 1% instances), [sk-pos/ADJ]()-[sk-pos/ADP]() (44; 1% instances), [sk-pos/X]()-[sk-pos/ADP]() (36; 0% instances), [sk-pos/ADV]()-[sk-pos/ADP]() (17; 0% instances), [sk-pos/NOUN]()-[sk-pos/ADV]() (14; 0% instances), [sk-pos/X]()-[sk-pos/X]() (12; 0% instances), [sk-pos/ADV]()-[sk-pos/X]() (11; 0% instances), [sk-pos/NOUN]()-[sk-pos/NOUN]() (5; 0% instances), [sk-pos/PROPN]()-[sk-pos/ADV]() (4; 0% instances), [sk-pos/PRON]()-[sk-pos/ADV]() (3; 0% instances), [sk-pos/DET]()-[sk-pos/SCONJ]() (1; 0% instances), [sk-pos/INTJ]()-[sk-pos/ADP]() (1; 0% instances), [sk-pos/NOUN]()-[sk-pos/X]() (1; 0% instances), [sk-pos/NUM]()-[sk-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 case	color:blue
1	Spor	spor	NOUN	SSis1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
2	o	o	ADP	Eu4	AdpType=Prep|Case=Acc	3	case	_	_
3	generála	generál	NOUN	SSms4	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	1	nmod	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 case	color:blue
1	KĽDR	kľdr	X	W	Abbr=Yes	2	nsubj	_	_
2	je	byť	VERB	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
3	však	však	PART	T	_	2	advmod	_	_
4	na	na	ADP	Eu6	AdpType=Prep|Case=Loc	5	case	_	_
5	kolenách	koleno	NOUN	SSnp6	Case=Loc|Gender=Neut|Number=Plur	2	obl	_	_
6	počas	počas	ADP	Eu2	AdpType=Prep|Case=Gen	7	case	_	_
7	kalamity	kalamita	NOUN	SSfs2	Case=Gen|Gender=Fem|Number=Sing	2	obl	_	_
8	aj	aj	CCONJ	O	_	10	cc	_	_
9	po	po	ADP	Eu6	AdpType=Prep|Case=Loc	10	case	_	_
10	nej	ona	PRON	PFfs6	Case=Loc|Gender=Fem|Number=Sing|PronType=Prs	7	conj	_	SpaceAfter=No
11	.	.	PUNCT	ZIP	VerbForm=Inf	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 case	color:blue
1	Ďalšie	ďalší	ADJ	AAip1x	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	2	amod	_	_
2	kroky	krok	NOUN	SSip1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	5	nsubj	_	_
3	švajčiarskej	švajčiarský	ADJ	AAfs2x	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	_
4	sudkyne	sudkyňa	NOUN	SSfs2	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
5	povedú	poviesť	VERB	VKdpc+	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
6	do	do	ADP	Eu2	AdpType=Prep|Case=Gen	7	case	_	_
7	Belehradu	belehrad	PROPN	SSis2:r	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=No
8	.	.	PUNCT	ZIP	VerbForm=Inf	5	punct	_	_

~~~


