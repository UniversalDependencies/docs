

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is universal.

220 nodes (0%) are attached to their parents as `nsubjpass`.

143 instances of `nsubjpass` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.91363636363636.

The following 4 pairs of parts of speech are connected with `nsubjpass`: [sk-pos/VERB]()-[sk-pos/NOUN]() (170; 77% instances), [sk-pos/VERB]()-[sk-pos/PRON]() (29; 13% instances), [sk-pos/VERB]()-[sk-pos/PROPN]() (15; 7% instances), [sk-pos/VERB]()-[sk-pos/NUM]() (6; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubjpass	color:blue
1	Mŕtvoly	mŕtvola	NOUN	SSfp1	Case=Nom|Gender=Fem|Number=Plur	4	nsubjpass	_	_
2	boli	byť	AUX	VLepcf+	Aspect=Imp|Gender=Fem|Negative=Pos|Number=Plur|Person=3|Tense=Past|VerbForm=Part	4	auxpass	_	_
3	hromadne	hromadne	ADV	Dx	Degree=Pos	4	advmod	_	_
4	spaľované	spaľovaný	VERB	Gtfp1x	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	_
5	v	v	ADP	Eu6	AdpType=Prep|Case=Loc	6	case	_	_
6	krematóriách	krematórium	NOUN	SSnp6	Case=Loc|Gender=Neut|Number=Plur	4	nmod	_	_
7	.	.	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 nsubjpass	color:blue
1	Od	od	X	Q	Hyph=Yes	2	case	_	_
2	malička	malička	ADV	Dx	Degree=Pos	8	advmod	_	_
3	mi	ja	PRON	PPhs3	Case=Dat|Number=Sing|PronType=Prs	8	dobj	_	_
4	bolo	byť	AUX	VLescn+	Aspect=Imp|Gender=Neut|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbForm=Part	8	auxpass	_	_
5	z	z	ADP	Eu2	AdpType=Prep|Case=Gen	7	case	_	_
6	každej	každý	PRON	PAfs2	Case=Gen|Gender=Fem|Number=Sing|PronType=Prs	7	nmod	_	_
7	strany	strana	NOUN	SSfs2	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
8	vštepovaných	vštepovaný	VERB	Gtfp2x	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	_
9	niekoľko	niekoľko	PRON	PUns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Prs	8	nsubjpass	_	_
10	vecí	vec	NOUN	SSfp2	Case=Gen|Gender=Fem|Number=Plur	9	nmod	_	_
11	.	.	PUNCT	ZIP	VerbForm=Inf	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubjpass	color:blue
1	Bush	bush	PROPN	SSms1:r	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	nsubjpass	_	_
2	bol	byť	AUX	VLescm+	Animacy=Anim|Aspect=Imp|Gender=Masc|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbForm=Part	3	auxpass	_	_
3	inaugurovaný	inaugurovaný	VERB	Gtms1x	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
4	za	za	ADP	Eu4	AdpType=Prep|Case=Acc	5	case	_	_
5	prezidenta	prezident	NOUN	SSms4	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	3	dobj	_	_
6	20	20	NUM	0	NumForm=Digit	8	nummod	_	_
7	.	.	PUNCT	Z	_	6	punct	_	_
8	januára	január	NOUN	SSis2	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
9	2001	2001	NUM	0	NumForm=Digit	8	nummod	_	_
10	.	.	PUNCT	Z	_	3	punct	_	_

~~~


