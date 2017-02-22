

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is universal.

1758 nodes (2%) are attached to their parents as `mark`.

1757 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.65927189988623.

The following 23 pairs of parts of speech are connected with `mark`: [sk-pos/VERB]()-[sk-pos/SCONJ]() (1279; 73% instances), [sk-pos/NOUN]()-[sk-pos/SCONJ]() (194; 11% instances), [sk-pos/VERB]()-[sk-pos/CCONJ]() (110; 6% instances), [sk-pos/ADJ]()-[sk-pos/SCONJ]() (76; 4% instances), [sk-pos/VERB]()-[sk-pos/PART]() (22; 1% instances), [sk-pos/ADJ]()-[sk-pos/CCONJ]() (11; 1% instances), [sk-pos/PRON]()-[sk-pos/SCONJ]() (11; 1% instances), [sk-pos/PROPN]()-[sk-pos/SCONJ]() (11; 1% instances), [sk-pos/ADV]()-[sk-pos/SCONJ]() (9; 1% instances), [sk-pos/VERB]()-[sk-pos/ADV]() (8; 0% instances), [sk-pos/NOUN]()-[sk-pos/ADV]() (7; 0% instances), [sk-pos/DET]()-[sk-pos/SCONJ]() (5; 0% instances), [sk-pos/NOUN]()-[sk-pos/CCONJ]() (3; 0% instances), [sk-pos/NUM]()-[sk-pos/SCONJ]() (3; 0% instances), [sk-pos/ADJ]()-[sk-pos/PART]() (1; 0% instances), [sk-pos/ADV]()-[sk-pos/ADV]() (1; 0% instances), [sk-pos/ADV]()-[sk-pos/CCONJ]() (1; 0% instances), [sk-pos/NOUN]()-[sk-pos/ADP]() (1; 0% instances), [sk-pos/NOUN]()-[sk-pos/PART]() (1; 0% instances), [sk-pos/PRON]()-[sk-pos/CCONJ]() (1; 0% instances), [sk-pos/VERB]()-[sk-pos/ADP]() (1; 0% instances), [sk-pos/VERB]()-[sk-pos/PRON]() (1; 0% instances), [sk-pos/X]()-[sk-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 mark	color:blue
1	Väčšina	väčšina	NOUN	SSfs1	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
2	zdrojov	zdroj	NOUN	SSip2	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	1	nmod	_	_
3	však	však	PART	T	_	4	advmod	_	_
4	uvádza	uvádzať	VERB	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	,	,	PUNCT	ZIP	VerbForm=Inf	8	punct	_	_
6	že	že	SCONJ	O	_	8	mark	_	_
7	by	by	AUX	Y	Mood=Cnd	8	aux	_	_
8	mal	mať	VERB	VLescm+	Animacy=Anim|Aspect=Imp|Gender=Masc|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Part	4	ccomp	_	_
9	byť	byť	VERB	VIe+	Aspect=Imp|Polarity=Pos|VerbForm=Inf	8	xcomp	_	_
10	v	v	ADP	Eu6	AdpType=Prep|Case=Loc	11	case	_	_
11	Šanghaji	šanghaj	PROPN	SSis6:r	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	9	obl	_	SpaceAfter=No
12	.	.	PUNCT	ZIP	VerbForm=Inf	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 mark	color:blue
1	24	24	NUM	0	NumForm=Digit	3	nummod	_	SpaceAfter=No
2	.	.	PUNCT	Z	_	1	punct	_	_
3	júla	júl	NOUN	SSis2	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	6	obl	_	_
4	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	6	expl:pv	_	_
5	astronauti	astronaut	NOUN	SSmp1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	6	nsubj	_	_
6	vrátili	vrátiť	VERB	VLdpcm+	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Plur|Person=3|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	_	_
7	na	na	ADP	Eu4	AdpType=Prep|Case=Acc	8	case	_	_
8	Zem	zem	PROPN	SSfs4:r	Case=Acc|Gender=Fem|Number=Sing	6	obl	_	_
9	ako	ako	SCONJ	O	_	10	mark	_	_
10	hrdinovia	hrdina	NOUN	SSmp1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	5	xcomp	_	SpaceAfter=No
11	.	.	PUNCT	Z	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 mark	color:blue
1	Či	či	CCONJ	O	_	4	mark	_	_
2	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	4	expl:pv	_	_
3	to	to	DET	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	4	nsubj	_	_
4	stalo	stať	VERB	VLdscn+	Aspect=Perf|Gender=Neut|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Part	10	csubj	_	_
5	s	s	ADP	Eu7	AdpType=Prep|Case=Ins	7	case	_	_
6	Husravovým	husravov	ADJ	AFns7x:r	Case=Ins|Degree=Pos|Gender=Neut|Number=Sing	7	amod	_	_
7	vedomím	vedomie	NOUN	SSns7	Case=Ins|Gender=Neut|Number=Sing	4	obl	_	SpaceAfter=No
8	,	,	PUNCT	Z	_	4	punct	_	_
9	je	byť	AUX	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	10	cop	_	_
10	nejasné	nejasný	ADJ	AAns1x	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No
11	.	.	PUNCT	Z	_	10	punct	_	_

~~~


