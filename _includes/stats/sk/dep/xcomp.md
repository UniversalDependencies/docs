

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is universal.

1212 nodes (1%) are attached to their parents as `xcomp`.

1130 instances of `xcomp` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.0503300330033.

The following 28 pairs of parts of speech are connected with `xcomp`: [sk-pos/VERB]()-[sk-pos/VERB]() (944; 78% instances), [sk-pos/VERB]()-[sk-pos/NOUN]() (42; 3% instances), [sk-pos/NOUN]()-[sk-pos/NOUN]() (38; 3% instances), [sk-pos/VERB]()-[sk-pos/ADJ]() (37; 3% instances), [sk-pos/VERB]()-[sk-pos/PRON]() (24; 2% instances), [sk-pos/ADJ]()-[sk-pos/VERB]() (19; 2% instances), [sk-pos/NOUN]()-[sk-pos/VERB]() (14; 1% instances), [sk-pos/PROPN]()-[sk-pos/NOUN]() (14; 1% instances), [sk-pos/NOUN]()-[sk-pos/ADJ]() (9; 1% instances), [sk-pos/ADV]()-[sk-pos/VERB]() (8; 1% instances), [sk-pos/NOUN]()-[sk-pos/PRON]() (8; 1% instances), [sk-pos/PRON]()-[sk-pos/NOUN]() (6; 0% instances), [sk-pos/PRON]()-[sk-pos/VERB]() (6; 0% instances), [sk-pos/PROPN]()-[sk-pos/PRON]() (6; 0% instances), [sk-pos/PROPN]()-[sk-pos/VERB]() (6; 0% instances), [sk-pos/VERB]()-[sk-pos/NUM]() (6; 0% instances), [sk-pos/PROPN]()-[sk-pos/NUM]() (5; 0% instances), [sk-pos/PRON]()-[sk-pos/ADJ]() (4; 0% instances), [sk-pos/ADJ]()-[sk-pos/NOUN]() (3; 0% instances), [sk-pos/PRON]()-[sk-pos/PRON]() (3; 0% instances), [sk-pos/PART]()-[sk-pos/VERB]() (2; 0% instances), [sk-pos/PROPN]()-[sk-pos/ADJ]() (2; 0% instances), [sk-pos/ADJ]()-[sk-pos/PRON]() (1; 0% instances), [sk-pos/NOUN]()-[sk-pos/X]() (1; 0% instances), [sk-pos/PRON]()-[sk-pos/NUM]() (1; 0% instances), [sk-pos/PROPN]()-[sk-pos/PROPN]() (1; 0% instances), [sk-pos/VERB]()-[sk-pos/ADP]() (1; 0% instances), [sk-pos/VERB]()-[sk-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 xcomp	color:blue
1	Väčšina	väčšina	NOUN	SSfs1	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
2	zdrojov	zdroj	NOUN	SSip2	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	1	nmod	_	_
3	však	však	PART	T	_	4	advmod	_	_
4	uvádza	uvádzať	VERB	VKesc+	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	,	,	PUNCT	ZIP	VerbForm=Inf	8	punct	_	_
6	že	že	CONJ	O	_	8	mark	_	_
7	by	by	AUX	Y	Mood=Cnd	8	aux	_	_
8	mal	mať	VERB	VLescm+	Animacy=Anim|Aspect=Imp|Gender=Masc|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbForm=Part	4	ccomp	_	_
9	byť	byť	VERB	VIe+	Aspect=Imp|Negative=Pos|VerbForm=Inf	8	xcomp	_	_
10	v	v	ADP	Eu6	AdpType=Prep|Case=Loc	11	case	_	_
11	Šanghaji	šanghaj	PROPN	SSis6:r	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	9	nmod	_	_
12	.	.	PUNCT	ZIP	VerbForm=Inf	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 xcomp	color:blue
1	Ako	ako	CONJ	O	_	2	mark	_	_
2	dôvod	dôvod	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	xcomp	_	_
3	administratíva	administratíva	NOUN	SSfs1	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
4	uviedla	uviesť	VERB	VLdscf+	Aspect=Perf|Gender=Fem|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbForm=Part	0	root	_	_
5	,	,	PUNCT	Z	_	10	punct	_	_
6	že	že	CONJ	O	_	10	mark	_	_
7	už	už	PART	T	_	10	advmod	_	_
8	nie	nie	PART	T	_	10	neg	_	_
9	je	nebyť	VERB	VKesc-	Aspect=Imp|Mood=Ind|Negative=Neg|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
10	relevantná	relevantný	ADJ	AAfs1x	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	4	ccomp	_	_
11	.	.	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 xcomp	color:blue
1	24	24	NUM	0	NumForm=Digit	3	nummod	_	_
2	.	.	PUNCT	Z	_	1	punct	_	_
3	júla	júl	NOUN	SSis2	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	_
4	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	6	expl	_	_
5	astronauti	astronaut	NOUN	SSmp1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	6	nsubj	_	_
6	vrátili	vrátiť	VERB	VLdpcm+	Animacy=Anim|Aspect=Perf|Gender=Masc|Negative=Pos|Number=Plur|Person=3|Tense=Past|VerbForm=Part	0	root	_	_
7	na	na	ADP	Eu4	AdpType=Prep|Case=Acc	8	case	_	_
8	Zem	zem	PROPN	SSfs4:r	Case=Acc|Gender=Fem|Number=Sing	6	nmod	_	_
9	ako	ako	CONJ	O	_	10	mark	_	_
10	hrdinovia	hrdina	NOUN	SSmp1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	5	xcomp	_	_
11	.	.	PUNCT	Z	_	6	punct	_	_

~~~


