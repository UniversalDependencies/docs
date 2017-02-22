

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is universal.
There are 1 language-specific subtypes of `csubj`: [csubj:pass]().

133 nodes (0%) are attached to their parents as `csubj`.

121 instances of `csubj` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.84962406015038.

The following 13 pairs of parts of speech are connected with `csubj`: [sk-pos/VERB]()-[sk-pos/VERB]() (61; 46% instances), [sk-pos/ADJ]()-[sk-pos/VERB]() (30; 23% instances), [sk-pos/NOUN]()-[sk-pos/VERB]() (23; 17% instances), [sk-pos/ADV]()-[sk-pos/VERB]() (7; 5% instances), [sk-pos/ADJ]()-[sk-pos/ADJ]() (2; 2% instances), [sk-pos/VERB]()-[sk-pos/ADJ]() (2; 2% instances), [sk-pos/VERB]()-[sk-pos/NOUN]() (2; 2% instances), [sk-pos/ADJ]()-[sk-pos/NOUN]() (1; 1% instances), [sk-pos/DET]()-[sk-pos/VERB]() (1; 1% instances), [sk-pos/NOUN]()-[sk-pos/ADJ]() (1; 1% instances), [sk-pos/PART]()-[sk-pos/NOUN]() (1; 1% instances), [sk-pos/VERB]()-[sk-pos/DET]() (1; 1% instances), [sk-pos/VERB]()-[sk-pos/PROPN]() (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 csubj	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 csubj	color:blue
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


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	Cieľom	cieľ	NOUN	SSis7	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	0	root	_	_
2	bolo	byť	AUX	VLescn+	Aspect=Imp|Gender=Neut|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Part	1	cop	_	_
3	vytvoriť	vytvoriť	VERB	VId+	Aspect=Perf|Polarity=Pos|VerbForm=Inf	1	csubj	_	_
4	samostatný	samostatný	ADJ	AAis4x	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	5	amod	_	_
5	štát	štát	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	3	obj	_	_
6	do	do	ADP	Eu2	AdpType=Prep|Case=Gen	7	case	_	_
7	roku	rok	NOUN	SSis2	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	3	obl	_	_
8	2005	2005	NUM	0	NumForm=Digit	7	nummod	_	SpaceAfter=No
9	.	.	PUNCT	Z	_	1	punct	_	_

~~~


