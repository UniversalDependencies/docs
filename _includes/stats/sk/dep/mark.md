

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is universal.

1949 nodes (2%) are attached to their parents as `mark`.

1948 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.72857875833761.

The following 15 pairs of parts of speech are connected with `mark`: [sk-pos/VERB]()-[sk-pos/CONJ]() (1544; 79% instances), [sk-pos/NOUN]()-[sk-pos/CONJ]() (233; 12% instances), [sk-pos/ADJ]()-[sk-pos/CONJ]() (68; 3% instances), [sk-pos/VERB]()-[sk-pos/PART]() (23; 1% instances), [sk-pos/PRON]()-[sk-pos/CONJ]() (22; 1% instances), [sk-pos/PROPN]()-[sk-pos/CONJ]() (14; 1% instances), [sk-pos/NUM]()-[sk-pos/CONJ]() (12; 1% instances), [sk-pos/VERB]()-[sk-pos/PRON]() (10; 1% instances), [sk-pos/NOUN]()-[sk-pos/PRON]() (7; 0% instances), [sk-pos/ADV]()-[sk-pos/CONJ]() (6; 0% instances), [sk-pos/X]()-[sk-pos/CONJ]() (4; 0% instances), [sk-pos/VERB]()-[sk-pos/ADP]() (3; 0% instances), [sk-pos/ADV]()-[sk-pos/PRON]() (1; 0% instances), [sk-pos/NOUN]()-[sk-pos/ADP]() (1; 0% instances), [sk-pos/NOUN]()-[sk-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 mark	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 mark	color:blue
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


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 mark	color:blue
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


