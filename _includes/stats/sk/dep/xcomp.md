

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is universal.

1087 nodes (1%) are attached to their parents as `xcomp`.

1013 instances of `xcomp` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.01931922723091.

The following 27 pairs of parts of speech are connected with `xcomp`: [sk-pos/VERB]()-[sk-pos/VERB]() (836; 77% instances), [sk-pos/VERB]()-[sk-pos/ADJ]() (56; 5% instances), [sk-pos/VERB]()-[sk-pos/NOUN]() (35; 3% instances), [sk-pos/ADJ]()-[sk-pos/VERB]() (24; 2% instances), [sk-pos/NOUN]()-[sk-pos/NOUN]() (24; 2% instances), [sk-pos/NOUN]()-[sk-pos/ADJ]() (21; 2% instances), [sk-pos/VERB]()-[sk-pos/DET]() (21; 2% instances), [sk-pos/PROPN]()-[sk-pos/ADJ]() (10; 1% instances), [sk-pos/PROPN]()-[sk-pos/NOUN]() (9; 1% instances), [sk-pos/NOUN]()-[sk-pos/DET]() (7; 1% instances), [sk-pos/ADV]()-[sk-pos/VERB]() (6; 1% instances), [sk-pos/DET]()-[sk-pos/ADJ]() (5; 0% instances), [sk-pos/PRON]()-[sk-pos/ADJ]() (5; 0% instances), [sk-pos/PROPN]()-[sk-pos/DET]() (5; 0% instances), [sk-pos/ADJ]()-[sk-pos/NOUN]() (4; 0% instances), [sk-pos/DET]()-[sk-pos/NOUN]() (3; 0% instances), [sk-pos/PRON]()-[sk-pos/DET]() (3; 0% instances), [sk-pos/ADJ]()-[sk-pos/ADJ]() (2; 0% instances), [sk-pos/PRON]()-[sk-pos/NOUN]() (2; 0% instances), [sk-pos/PROPN]()-[sk-pos/VERB]() (2; 0% instances), [sk-pos/ADJ]()-[sk-pos/DET]() (1; 0% instances), [sk-pos/NOUN]()-[sk-pos/VERB]() (1; 0% instances), [sk-pos/PROPN]()-[sk-pos/NUM]() (1; 0% instances), [sk-pos/PROPN]()-[sk-pos/PROPN]() (1; 0% instances), [sk-pos/VERB]()-[sk-pos/ADP]() (1; 0% instances), [sk-pos/VERB]()-[sk-pos/PART]() (1; 0% instances), [sk-pos/VERB]()-[sk-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 xcomp	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 xcomp	color:blue
1	Zo	z	ADP	Ev2	AdpType=Voc|Case=Gen	2	case	_	_
2	zbierky	zbierka	NOUN	SSfs2	Case=Gen|Gender=Fem|Number=Sing	3	obl	_	_
3	vyplýva	vyplývať	VERB	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z	_	8	punct	_	_
5	že	že	SCONJ	O	_	8	mark	_	_
6	každé	každý	DET	PAns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	7	det	_	_
7	zlo	zlo	NOUN	SSns1	Case=Nom|Gender=Neut|Number=Sing	8	nsubj	_	_
8	musí	musieť	VERB	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	csubj	_	_
9	byť	byť	AUX	VIe+	Aspect=Imp|Polarity=Pos|VerbForm=Inf	10	cop	_	_
10	potrestané	potrestaný	ADJ	Gtns1x	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	8	xcomp	_	SpaceAfter=No
11	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 xcomp	color:blue
1	Ako	ako	SCONJ	O	_	2	mark	_	_
2	dôvod	dôvod	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	xcomp	_	_
3	administratíva	administratíva	NOUN	SSfs1	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
4	uviedla	uviesť	VERB	VLdscf+	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Z	_	10	punct	_	_
6	že	že	SCONJ	O	_	10	mark	_	_
7	už	už	PART	T	_	10	advmod	_	_
8	nie	nie	PART	T	_	10	advmod	_	_
9	je	byť	AUX	VKesc-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	10	cop	_	_
10	relevantná	relevantný	ADJ	AAfs1x	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	4	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	Z	_	4	punct	_	_

~~~


