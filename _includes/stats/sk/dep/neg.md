

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is universal.

72 nodes (0%) are attached to their parents as `neg`.

67 instances of `neg` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.27777777777778.

The following 5 pairs of parts of speech are connected with `neg`: [sk-pos/ADJ]()-[sk-pos/PART]() (31; 43% instances), [sk-pos/NOUN]()-[sk-pos/PART]() (19; 26% instances), [sk-pos/VERB]()-[sk-pos/PART]() (19; 26% instances), [sk-pos/PRON]()-[sk-pos/PART]() (2; 3% instances), [sk-pos/ADV]()-[sk-pos/PART]() (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 neg	color:blue
1	Táto	táto	PRON	PFfs1	Case=Nom|Gender=Fem|Number=Sing|PronType=Prs	2	nmod	_	_
2	historka	historka	NOUN	SSfs1	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	_
3	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	6	expl	_	_
4	medzi	medzi	ADP	Eu7	AdpType=Prep|Case=Ins	5	case	_	_
5	ľuďmi	človek	NOUN	SSmp7	Animacy=Anim|Case=Ins|Gender=Masc|Number=Plur	6	nmod	_	_
6	udomácnila	udomácniť	VERB	VLdscf+	Aspect=Perf|Gender=Fem|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbForm=Part	0	root	_	_
7	,	,	PUNCT	Z	_	6	punct	_	_
8	ale	ale	CONJ	O	_	6	cc	_	_
9	nie	nie	PART	T	_	11	neg	_	_
10	je	nebyť	VERB	VKesc-	Aspect=Imp|Mood=Ind|Negative=Neg|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
11	pravdivá	pravdivý	ADJ	AAfs1x	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	6	conj	_	_
12	.	.	PUNCT	Z	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 neg	color:blue
1	Nie	nie	PART	T	_	6	neg	_	_
2	je	nebyť	VERB	VKesc-	Aspect=Imp|Mood=Ind|Negative=Neg|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
3	to	to	PRON	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Prs	6	nsubj	_	_
4	ich	ich	PRON	PUns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Prs	6	nmod	_	_
5	jediné	jediný	NUM	NAns1	Case=Nom|Gender=Neut|Number=Sing	6	nummod	_	_
6	použitie	použitie	NOUN	SSns1	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
7	.	.	PUNCT	ZIP	VerbForm=Inf	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 neg	color:blue
1	Imidž	imidž	NOUN	SSis1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
2	nie	nie	PART	T	_	3	neg	_	_
3	je	nebyť	VERB	VKesc-	Aspect=Imp|Mood=Ind|Negative=Neg|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	na	na	ADP	Eu4	AdpType=Prep|Case=Acc	5	case	_	_
5	nič	nič	PRON	PFns4	Case=Acc|Gender=Neut|Number=Sing|PronType=Prs	3	nmod	_	_
6	.	.	PUNCT	Z	_	3	punct	_	_

~~~


