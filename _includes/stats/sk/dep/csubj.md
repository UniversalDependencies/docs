

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is universal.

165 nodes (0%) are attached to their parents as `csubj`.

152 instances of `csubj` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.72727272727273.

The following 13 pairs of parts of speech are connected with `csubj`: [sk-pos/VERB]()-[sk-pos/VERB]() (72; 44% instances), [sk-pos/ADJ]()-[sk-pos/VERB]() (41; 25% instances), [sk-pos/NOUN]()-[sk-pos/VERB]() (29; 18% instances), [sk-pos/ADV]()-[sk-pos/VERB]() (8; 5% instances), [sk-pos/VERB]()-[sk-pos/NOUN]() (4; 2% instances), [sk-pos/ADJ]()-[sk-pos/ADJ]() (2; 1% instances), [sk-pos/ADJ]()-[sk-pos/NOUN]() (2; 1% instances), [sk-pos/VERB]()-[sk-pos/ADJ]() (2; 1% instances), [sk-pos/NUM]()-[sk-pos/ADJ]() (1; 1% instances), [sk-pos/PART]()-[sk-pos/NOUN]() (1; 1% instances), [sk-pos/PRON]()-[sk-pos/VERB]() (1; 1% instances), [sk-pos/VERB]()-[sk-pos/PRON]() (1; 1% instances), [sk-pos/VERB]()-[sk-pos/PROPN]() (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 csubj	color:blue
1	Zo	z	ADP	Ev2	AdpType=Voc|Case=Gen	2	case	_	_
2	zbierky	zbierka	NOUN	SSfs2	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	_
3	vyplýva	vyplývať	VERB	VKesc+	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	,	,	PUNCT	Z	_	8	punct	_	_
5	že	že	CONJ	O	_	8	mark	_	_
6	každé	každý	PRON	PAns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Prs	7	nmod	_	_
7	zlo	zlo	NOUN	SSns1	Case=Nom|Gender=Neut|Number=Sing	8	nsubj	_	_
8	musí	musieť	VERB	VKesc+	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	csubj	_	_
9	byť	byť	VERB	VIe+	Aspect=Imp|Negative=Pos|VerbForm=Inf	10	cop	_	_
10	potrestané	potrestaný	VERB	Gtns1x	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	8	xcomp	_	_
11	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 csubj	color:blue
1	Či	či	CONJ	O	_	4	mark	_	_
2	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	4	expl	_	_
3	to	to	PRON	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Prs	4	nsubj	_	_
4	stalo	stať	VERB	VLdscn+	Aspect=Perf|Gender=Neut|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbForm=Part	10	csubj	_	_
5	s	s	ADP	Eu7	AdpType=Prep|Case=Ins	7	case	_	_
6	Husravovým	husravov	ADJ	AFns7x:r	Case=Ins|Degree=Pos|Gender=Neut|Number=Sing	7	amod	_	_
7	vedomím	vedomie	NOUN	SSns7	Case=Ins|Gender=Neut|Number=Sing	4	nmod	_	_
8	,	,	PUNCT	Z	_	4	punct	_	_
9	je	byť	VERB	VKesc+	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
10	nejasné	nejasný	ADJ	AAns1x	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
11	.	.	PUNCT	Z	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	Cieľom	cieľ	NOUN	SSis7	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	0	root	_	_
2	bolo	byť	VERB	VLescn+	Aspect=Imp|Gender=Neut|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbForm=Part	1	cop	_	_
3	vytvoriť	vytvoriť	VERB	VId+	Aspect=Perf|Negative=Pos|VerbForm=Inf	1	csubj	_	_
4	samostatný	samostatný	ADJ	AAis4x	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	5	amod	_	_
5	štát	štát	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	3	dobj	_	_
6	do	do	ADP	Eu2	AdpType=Prep|Case=Gen	7	case	_	_
7	roku	rok	NOUN	SSis2	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
8	2005	2005	NUM	0	NumForm=Digit	7	nummod	_	_
9	.	.	PUNCT	Z	_	1	punct	_	_

~~~


