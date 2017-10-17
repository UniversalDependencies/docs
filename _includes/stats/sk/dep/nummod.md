

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is universal.

776 nodes (1%) are attached to their parents as `nummod`.

423 instances of `nummod` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.40850515463918.

The following 9 pairs of parts of speech are connected with `nummod`: [sk-pos/NOUN]()-[sk-pos/NUM]() (617; 80% instances), [sk-pos/PROPN]()-[sk-pos/NUM]() (68; 9% instances), [sk-pos/NUM]()-[sk-pos/NUM]() (57; 7% instances), [sk-pos/X]()-[sk-pos/NUM]() (14; 2% instances), [sk-pos/PRON]()-[sk-pos/NUM]() (8; 1% instances), [sk-pos/ADJ]()-[sk-pos/NUM]() (4; 1% instances), [sk-pos/PUNCT]()-[sk-pos/NUM]() (4; 1% instances), [sk-pos/ADV]()-[sk-pos/NUM]() (2; 0% instances), [sk-pos/DET]()-[sk-pos/NUM]() (2; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nummod	color:blue
1	Obdobie	obdobie	NOUN	SSns1	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
2	od	od	ADP	Eu2	AdpType=Prep|Case=Gen	5	case	_	_
3	6	6	NUM	0	NumForm=Digit	5	nummod	_	SpaceAfter=No
4	.	.	PUNCT	Z	_	3	punct	_	_
5	storočia	storočie	NOUN	SSns2	Case=Gen|Gender=Neut|Number=Sing	1	nmod	_	_
6	do	do	ADP	Eu2	AdpType=Prep|Case=Gen	9	case	_	_
7	7	7	NUM	0	NumForm=Digit	9	nummod	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	7	punct	_	_
9	storočia	storočie	NOUN	SSns2	Case=Gen|Gender=Neut|Number=Sing	1	nmod	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nummod	color:blue
1	Nástup	nástup	NOUN	SSis1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
2	Mahmúda	mahmúd	PROPN	SSms2:r	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	_
3	II	ii	NUM	0	NumForm=Digit	2	nummod	_	SpaceAfter=No
4	.	.	PUNCT	Z	_	3	punct	_	_
5	na	na	ADP	Eu4	AdpType=Prep|Case=Acc	6	case	_	_
6	trón	trón	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	1	nmod	_	_
7	a	a	CCONJ	O	_	9	cc	_	_
8	prvé	prvý	ADJ	NAip1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|NumType=Ord	9	amod	_	_
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
2	21	21	NUM	0	NumForm=Digit	4	nummod	_	SpaceAfter=No
3	.	.	PUNCT	ZIP	VerbForm=Inf	2	punct	_	_
4	3	3	NUM	0	NumForm=Digit	1	dep	_	SpaceAfter=No
5	.	.	PUNCT	ZIP	VerbForm=Inf	4	punct	_	_
6	-	-	PUNCT	ZIP	VerbForm=Inf	9	punct	_	_
7	20	20	NUM	0	NumForm=Digit	9	nummod	_	SpaceAfter=No
8	.	.	PUNCT	ZIP	VerbForm=Inf	7	punct	_	_
9	4	4	NUM	0	NumForm=Digit	4	conj	_	SpaceAfter=No
10	.	.	PUNCT	ZIP	VerbForm=Inf	1	punct	_	_

~~~


