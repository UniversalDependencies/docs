

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is universal.

21 nodes (0%) are attached to their parents as `csubjpass`.

21 instances of `csubjpass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.52380952380952.

The following 2 pairs of parts of speech are connected with `csubjpass`: [sk-pos/VERB]()-[sk-pos/VERB]() (18; 86% instances), [sk-pos/VERB]()-[sk-pos/NOUN]() (3; 14% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 csubjpass	color:blue
1	Obom	oba	NUM	NNmp3	Animacy=Anim|Case=Dat|Gender=Masc|Number=Plur	3	dobj	_	_
2	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	3	auxpass:reflex	_	_
3	chcelo	chcieť	VERB	VLescn+	Aspect=Imp|Gender=Neut|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbForm=Part	0	root	_	_
4	spať	spať	VERB	VIe+	Aspect=Imp|Negative=Pos|VerbForm=Inf	3	csubjpass	_	_
5	.	.	PUNCT	ZIP	VerbForm=Inf	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 csubjpass	color:blue
1	Predpokladá	predpokladať	VERB	VKesc+	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	1	auxpass:reflex	_	_
3	,	,	PUNCT	Z	_	8	punct	_	_
4	že	že	CONJ	O	_	8	mark	_	_
5	toto	toto	PRON	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Prs	6	nmod	_	_
6	hélium	hélium	NOUN	SSns1	Case=Nom|Gender=Neut|Number=Sing	8	nsubj	_	_
7	je	byť	VERB	VKesc+	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	produktom	produkt	NOUN	SSis7	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	1	csubjpass	_	_
9	jadrového	jadrový	ADJ	AAis2x	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	10	amod	_	_
10	rozpadu	rozpad	NOUN	SSis2	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	_
11	prvkov	prvok	NOUN	SSip2	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	10	nmod	_	_
12	v	v	ADP	Eu6	AdpType=Prep|Case=Loc	14	case	_	_
13	zemskej	zemský	ADJ	AAfs6x	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	14	amod	_	_
14	kôre	kôra	NOUN	SSfs6	Case=Loc|Gender=Fem|Number=Sing	11	nmod	_	_
15	.	.	PUNCT	Z	_	1	punct	_	_

~~~


