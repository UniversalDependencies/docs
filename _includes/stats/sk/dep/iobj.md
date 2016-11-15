

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is universal.

956 nodes (1%) are attached to their parents as `iobj`.

534 instances of `iobj` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.84205020920502.

The following 6 pairs of parts of speech are connected with `iobj`: [sk-pos/VERB]()-[sk-pos/PRON]() (577; 60% instances), [sk-pos/VERB]()-[sk-pos/NOUN]() (262; 27% instances), [sk-pos/VERB]()-[sk-pos/PROPN]() (95; 10% instances), [sk-pos/VERB]()-[sk-pos/ADJ]() (15; 2% instances), [sk-pos/VERB]()-[sk-pos/NUM]() (6; 1% instances), [sk-pos/VERB]()-[sk-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 iobj	color:blue
1	Filónoé	filónoé	PROPN	SUfs1:r	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
2	mu	on	PRON	PFms3	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing|PronType=Prs	3	iobj	_	_
3	porodila	porodiť	VERB	VLdscf+	Aspect=Perf|Gender=Fem|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbForm=Part	0	root	_	_
4	tri	tri	NUM	NNnp4	Case=Acc|Gender=Neut|Number=Plur	5	nummod	_	_
5	deti	dieťa	NOUN	SSnp4	Case=Acc|Gender=Neut|Number=Plur	3	dobj	_	_
6	,	,	PUNCT	Z	_	7	punct	_	_
7	Isandra	isandrus	PROPN	SSms4:r	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	5	appos	_	_
8	,	,	PUNCT	Z	_	7	punct	_	_
9	Hippolocha	hippolochos	PROPN	SSms4:r	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	7	conj	_	_
10	a	a	CONJ	O	_	7	cc	_	_
11	Laodameiu	laodameia	PROPN	SSfs4:r	Case=Acc|Gender=Fem|Number=Sing	7	conj	_	_
12	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 iobj	color:blue
1	Čo	čo	PRON	PFns4	Case=Acc|Gender=Neut|Number=Sing|PronType=Prs	2	dobj	_	_
2	napísala	napísať	VERB	VLdscf+	Aspect=Perf|Gender=Fem|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbForm=Part	0	root	_	_
3	Granma	granma	X	%	Foreign=Foreign	2	nsubj	_	_
4	o	o	ADP	Eu6	AdpType=Prep|Case=Loc	5	case	_	_
5	zatknutí	zatknutie	NOUN	SSns6	Case=Loc|Gender=Neut|Number=Sing	2	iobj	_	_
6	Pilipa	pilip	PROPN	SSms2:r	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
7	a	a	CONJ	O	_	6	cc	_	_
8	Bubeníka	bubeník	PROPN	SSms2:r	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	6	conj	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 iobj	color:blue
1	Prednáša	prednášať	VERB	VKesc+	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	Bohu	boh	PROPN	SSms3:r	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	1	iobj	_	_
3	prosby	prosba	NOUN	SSfp4	Case=Acc|Gender=Fem|Number=Plur	1	dobj	_	_
4	ľudí	človek	NOUN	SSmp2	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	3	nmod	_	_
5	a	a	CONJ	O	_	1	cc	_	_
6	prihovárá	prihovárať	VERB	VKesc+:q	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|Typo=Yes|VerbForm=Fin	1	conj	_	_
7	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	6	expl	_	_
8	za	za	ADP	Eu4	AdpType=Prep|Case=Acc	9	case	_	_
9	ne	ona	PRON	PFfp4	Case=Acc|Gender=Fem|Number=Plur|PronType=Prs	6	dobj	_	_
10	.	.	PUNCT	Z	_	1	punct	_	_

~~~


