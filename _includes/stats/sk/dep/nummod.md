

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is universal.

1421 nodes (1%) are attached to their parents as `nummod`.

893 instances of `nummod` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.36805066854328.

The following 9 pairs of parts of speech are connected with `nummod`: [sk-pos/NOUN]()-[sk-pos/NUM]() (1189; 84% instances), [sk-pos/PROPN]()-[sk-pos/NUM]() (97; 7% instances), [sk-pos/NUM]()-[sk-pos/NUM]() (84; 6% instances), [sk-pos/X]()-[sk-pos/NUM]() (24; 2% instances), [sk-pos/PRON]()-[sk-pos/NUM]() (11; 1% instances), [sk-pos/PUNCT]()-[sk-pos/NUM]() (9; 1% instances), [sk-pos/ADJ]()-[sk-pos/NUM]() (5; 0% instances), [sk-pos/SYM]()-[sk-pos/NUM]() (1; 0% instances), [sk-pos/VERB]()-[sk-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	V	v	ADP	Eu6	AdpType=Prep|Case=Loc	3	case	_	_
2	prvom	prvý	NUM	NAis6	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	3	nummod	_	_
3	rade	rad	NOUN	SSis6	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	nmod	_	_
4	vraj	vraj	PART	T	_	5	advmod	_	_
5	došlo	dôjsť	VERB	VLdscn+	Aspect=Perf|Gender=Neut|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbForm=Part	0	root	_	_
6	k	k	ADP	Eu3	AdpType=Prep|Case=Dat	7	case	_	_
7	nepochopeniu	nepochopenie	NOUN	SSns3	Case=Dat|Gender=Neut|Number=Sing	5	dobj	_	_
8	.	.	PUNCT	ZIP	VerbForm=Inf	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nummod	color:blue
1	Nástup	nástup	NOUN	SSis1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
2	Mahmúda	mahmúd	PROPN	SSms2:r	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	_
3	II	ii	NUM	0	NumForm=Digit	2	nummod	_	_
4	.	.	PUNCT	Z	_	3	punct	_	_
5	na	na	ADP	Eu4	AdpType=Prep|Case=Acc	6	case	_	_
6	trón	trón	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	1	nmod	_	_
7	a	a	CONJ	O	_	1	cc	_	_
8	prvé	prvý	NUM	NAip1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	9	nummod	_	_
9	pokusy	pokus	NOUN	SSip1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	1	conj	_	_
10	o	o	ADP	Eu4	AdpType=Prep|Case=Acc	11	case	_	_
11	reformu	reforma	NOUN	SSfs4	Case=Acc|Gender=Fem|Number=Sing	9	nmod	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nummod	color:blue
1	BARAN	baran	NOUN	SSms1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
2	21	21	NUM	0	NumForm=Digit	4	nummod	_	_
3	.	.	PUNCT	ZIP	VerbForm=Inf	2	punct	_	_
4	3	3	NUM	0	NumForm=Digit	1	dep	_	_
5	.	.	PUNCT	ZIP	VerbForm=Inf	4	punct	_	_
6	-	-	PUNCT	ZIP	VerbForm=Inf	4	punct	_	_
7	20	20	NUM	0	NumForm=Digit	9	nummod	_	_
8	.	.	PUNCT	ZIP	VerbForm=Inf	7	punct	_	_
9	4	4	NUM	0	NumForm=Digit	4	conj	_	_
10	.	.	PUNCT	ZIP	VerbForm=Inf	1	punct	_	_

~~~


