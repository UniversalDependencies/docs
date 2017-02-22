

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is universal.

5103 nodes (5%) are attached to their parents as `obl`.

2983 instances of `obl` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.75896531452087.

The following 31 pairs of parts of speech are connected with `obl`: [sk-pos/VERB]()-[sk-pos/NOUN]() (3769; 74% instances), [sk-pos/VERB]()-[sk-pos/PRON]() (402; 8% instances), [sk-pos/ADJ]()-[sk-pos/NOUN]() (247; 5% instances), [sk-pos/VERB]()-[sk-pos/PROPN]() (215; 4% instances), [sk-pos/VERB]()-[sk-pos/DET]() (143; 3% instances), [sk-pos/VERB]()-[sk-pos/NUM]() (61; 1% instances), [sk-pos/NOUN]()-[sk-pos/NOUN]() (52; 1% instances), [sk-pos/VERB]()-[sk-pos/ADV]() (48; 1% instances), [sk-pos/VERB]()-[sk-pos/ADJ]() (44; 1% instances), [sk-pos/ADV]()-[sk-pos/NOUN]() (29; 1% instances), [sk-pos/ADJ]()-[sk-pos/PROPN]() (20; 0% instances), [sk-pos/ADJ]()-[sk-pos/PRON]() (13; 0% instances), [sk-pos/ADJ]()-[sk-pos/DET]() (12; 0% instances), [sk-pos/NOUN]()-[sk-pos/PROPN]() (10; 0% instances), [sk-pos/ADJ]()-[sk-pos/NUM]() (7; 0% instances), [sk-pos/ADV]()-[sk-pos/NUM]() (4; 0% instances), [sk-pos/ADV]()-[sk-pos/PRON]() (4; 0% instances), [sk-pos/ADJ]()-[sk-pos/ADV]() (3; 0% instances), [sk-pos/ADV]()-[sk-pos/PROPN]() (3; 0% instances), [sk-pos/NUM]()-[sk-pos/ADJ]() (3; 0% instances), [sk-pos/NOUN]()-[sk-pos/PRON]() (2; 0% instances), [sk-pos/NUM]()-[sk-pos/NOUN]() (2; 0% instances), [sk-pos/PRON]()-[sk-pos/NOUN]() (2; 0% instances), [sk-pos/ADJ]()-[sk-pos/ADJ]() (1; 0% instances), [sk-pos/ADV]()-[sk-pos/ADV]() (1; 0% instances), [sk-pos/DET]()-[sk-pos/ADV]() (1; 0% instances), [sk-pos/DET]()-[sk-pos/PRON]() (1; 0% instances), [sk-pos/INTJ]()-[sk-pos/NOUN]() (1; 0% instances), [sk-pos/NOUN]()-[sk-pos/DET]() (1; 0% instances), [sk-pos/NUM]()-[sk-pos/NUM]() (1; 0% instances), [sk-pos/PROPN]()-[sk-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obl	color:blue
1	V	v	ADP	Eu6	AdpType=Prep|Case=Loc	3	case	_	_
2	prvom	prvý	ADJ	NAis6	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|NumType=Ord	3	amod	_	_
3	rade	rad	NOUN	SSis6	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	obl	_	_
4	vraj	vraj	PART	T	_	5	advmod	_	_
5	došlo	dôjsť	VERB	VLdscn+	Aspect=Perf|Gender=Neut|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	_	_
6	k	k	ADP	Eu3	AdpType=Prep|Case=Dat	7	case	_	_
7	nepochopeniu	nepochopenie	NOUN	SSns3	Case=Dat|Gender=Neut|Number=Sing	5	obj	_	SpaceAfter=No
8	.	.	PUNCT	ZIP	VerbForm=Inf	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl	color:blue
1	Spolu	spolu	ADP	Eu7	AdpType=Prep|Case=Ins	3	case	_	_
2	s	s	ADP	Eu7	AdpType=Prep|Case=Ins	1	fixed	_	_
3	ním	on	PRON	PFms7	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|PronType=Prs	4	obl	_	_
4	padli	padnúť	VERB	VLdpcf+	Aspect=Perf|Gender=Fem|Number=Plur|Person=3|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	_	_
5	dve	dva	NUM	NNfp1	Case=Nom|Gender=Fem|Number=Plur	6	nummod	_	_
6	tretiny	tretina	NOUN	SSfp1	Case=Nom|Gender=Fem|Number=Plur	4	nsubj	_	_
7	vojakov	vojak	NOUN	SSmp2	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	6	nmod	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 obl	color:blue
1	"	"	PUNCT	ZIP	VerbForm=Inf	9	punct	_	SpaceAfter=No
2	Naša	náš	DET	PFfs1	Case=Nom|Gender=Fem|Number=Sing|Number[psor]=Plur|Poss=Yes|PronType=Prs	3	det	_	_
3	mačka	mačka	NOUN	SSfs1	Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	_
4	je	byť	AUX	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	9	cop	_	_
5	už	už	PART	T	_	6	advmod:emph	_	_
6	druhý	druhý	ADJ	NAis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|NumType=Ord	7	amod	_	_
7	deň	deň	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	9	obl	_	_
8	veľmi	veľmi	ADV	Dx	Degree=Pos	9	advmod	_	_
9	nepokojná	nepokojný	ADJ	AAfs1x	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
10	.	.	PUNCT	ZIP	VerbForm=Inf	9	punct	_	_

~~~


