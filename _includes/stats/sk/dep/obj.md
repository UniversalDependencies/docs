

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is universal.

6521 nodes (7%) are attached to their parents as `obj`.

4358 instances of `obj` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.97224352093237.

The following 27 pairs of parts of speech are connected with `obj`: [sk-pos/VERB]()-[sk-pos/NOUN]() (3702; 57% instances), [sk-pos/VERB]()-[sk-pos/PRON]() (1741; 27% instances), [sk-pos/VERB]()-[sk-pos/DET]() (423; 6% instances), [sk-pos/VERB]()-[sk-pos/PROPN]() (338; 5% instances), [sk-pos/ADJ]()-[sk-pos/NOUN]() (130; 2% instances), [sk-pos/VERB]()-[sk-pos/NUM]() (50; 1% instances), [sk-pos/VERB]()-[sk-pos/ADJ]() (43; 1% instances), [sk-pos/ADJ]()-[sk-pos/PRON]() (24; 0% instances), [sk-pos/ADJ]()-[sk-pos/PROPN]() (18; 0% instances), [sk-pos/VERB]()-[sk-pos/X]() (14; 0% instances), [sk-pos/ADJ]()-[sk-pos/DET]() (9; 0% instances), [sk-pos/VERB]()-[sk-pos/ADV]() (5; 0% instances), [sk-pos/ADV]()-[sk-pos/NOUN]() (4; 0% instances), [sk-pos/X]()-[sk-pos/X]() (3; 0% instances), [sk-pos/ADV]()-[sk-pos/DET]() (2; 0% instances), [sk-pos/NOUN]()-[sk-pos/NOUN]() (2; 0% instances), [sk-pos/NOUN]()-[sk-pos/PRON]() (2; 0% instances), [sk-pos/VERB]()-[sk-pos/SCONJ]() (2; 0% instances), [sk-pos/ADJ]()-[sk-pos/ADJ]() (1; 0% instances), [sk-pos/ADJ]()-[sk-pos/ADV]() (1; 0% instances), [sk-pos/ADJ]()-[sk-pos/NUM]() (1; 0% instances), [sk-pos/ADJ]()-[sk-pos/X]() (1; 0% instances), [sk-pos/ADP]()-[sk-pos/NOUN]() (1; 0% instances), [sk-pos/ADV]()-[sk-pos/PRON]() (1; 0% instances), [sk-pos/NOUN]()-[sk-pos/PROPN]() (1; 0% instances), [sk-pos/SYM]()-[sk-pos/NUM]() (1; 0% instances), [sk-pos/X]()-[sk-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obj	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 obj	color:blue
1	V	v	ADP	Eu6	AdpType=Prep|Case=Loc	2	case	_	_
2	prípade	prípad	NOUN	SSis6	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	9	obl	_	SpaceAfter=No
3	,	,	PUNCT	ZIP	VerbForm=Inf	5	punct	_	_
4	že	že	SCONJ	O	_	5	mark	_	_
5	nebudú	byť	VERB	VBepc-	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Fut|VerbForm=Fin	2	acl	_	_
6	ani	ani	PART	T	_	7	advmod:emph	_	_
7	dedičia	dedič	NOUN	SSmp1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	5	nsubj	_	SpaceAfter=No
8	,	,	PUNCT	ZIP	VerbForm=Inf	5	punct	_	_
9	nahradia	nahradiť	VERB	VKdpc+	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
10	ich	on	PRON	PFmp4	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur|PronType=Prs	9	obj	_	_
11	univerzity	univerzita	NOUN	SSfp1	Case=Nom|Gender=Fem|Number=Plur	9	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	ZIP	VerbForm=Inf	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obj	color:blue
1	Môžete	môcť	VERB	VKepb+	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
2	to	to	DET	PFns4	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	4	obj	_	_
3	ďaleko	ďaleko	ADV	Dx	Degree=Pos	4	advmod	_	_
4	dotiahnuť	dotiahnuť	VERB	VId+	Aspect=Perf|Polarity=Pos|VerbForm=Inf	1	xcomp	_	SpaceAfter=No
5	.	.	PUNCT	ZIP	VerbForm=Inf	1	punct	_	_

~~~


