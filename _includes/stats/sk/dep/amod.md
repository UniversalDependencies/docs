

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is universal.

6523 nodes (7%) are attached to their parents as `amod`.

6245 instances of `amod` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.20282078798099.

The following 11 pairs of parts of speech are connected with `amod`: [sk-pos/NOUN]()-[sk-pos/ADJ]() (6285; 96% instances), [sk-pos/PROPN]()-[sk-pos/ADJ]() (129; 2% instances), [sk-pos/PRON]()-[sk-pos/ADJ]() (41; 1% instances), [sk-pos/NOUN]()-[sk-pos/DET]() (17; 0% instances), [sk-pos/ADV]()-[sk-pos/ADJ]() (13; 0% instances), [sk-pos/ADJ]()-[sk-pos/ADJ]() (11; 0% instances), [sk-pos/DET]()-[sk-pos/ADJ]() (9; 0% instances), [sk-pos/NUM]()-[sk-pos/ADJ]() (8; 0% instances), [sk-pos/X]()-[sk-pos/ADJ]() (7; 0% instances), [sk-pos/NUM]()-[sk-pos/DET]() (2; 0% instances), [sk-pos/INTJ]()-[sk-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Ďalšie	ďalší	ADJ	AAip1x	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	2	amod	_	_
2	kroky	krok	NOUN	SSip1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	5	nsubj	_	_
3	švajčiarskej	švajčiarský	ADJ	AAfs2x	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	_
4	sudkyne	sudkyňa	NOUN	SSfs2	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
5	povedú	poviesť	VERB	VKdpc+	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
6	do	do	ADP	Eu2	AdpType=Prep|Case=Gen	7	case	_	_
7	Belehradu	belehrad	PROPN	SSis2:r	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=No
8	.	.	PUNCT	ZIP	VerbForm=Inf	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 amod	color:blue
1	Medzitým	medzitým	ADV	Dx	Degree=Pos	5	advmod	_	_
2	v	v	ADP	Eu6	AdpType=Prep|Case=Loc	3	case	_	_
3	máji	máj	NOUN	SSis6	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	obl	_	_
4	1832	1832	NUM	0	NumForm=Digit	3	nummod	_	_
5	padla	padnúť	VERB	VLdscf+	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	_	_
6	obliehaná	obliehaný	ADJ	Gtfs1x	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	7	amod	_	_
7	Akka	akka	PROPN	SSfs1:r	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 amod	color:blue
1	A	a	PART	T	_	6	advmod	_	_
2	čo	čo	PRON	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Int,Rel	6	nsubj	_	_
3	hnusné	hnusný	ADJ	AAns1x	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	2	amod	_	_
4	to	to	DET	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	discourse	_	_
5	tu	tu	ADV	Dx	Degree=Pos	6	advmod	_	_
6	rastie	rásť	VERB	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
7	?	?	PUNCT	ZIP	VerbForm=Inf	6	punct	_	_

~~~


