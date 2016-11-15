

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is universal.

840 nodes (1%) are attached to their parents as `advcl`.

502 instances of `advcl` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.17261904761905.

The following 15 pairs of parts of speech are connected with `advcl`: [sk-pos/VERB]()-[sk-pos/VERB]() (747; 89% instances), [sk-pos/ADJ]()-[sk-pos/VERB]() (34; 4% instances), [sk-pos/VERB]()-[sk-pos/ADJ]() (19; 2% instances), [sk-pos/NOUN]()-[sk-pos/VERB]() (11; 1% instances), [sk-pos/VERB]()-[sk-pos/NOUN]() (9; 1% instances), [sk-pos/PRON]()-[sk-pos/VERB]() (7; 1% instances), [sk-pos/ADV]()-[sk-pos/VERB]() (4; 0% instances), [sk-pos/NOUN]()-[sk-pos/ADJ]() (2; 0% instances), [sk-pos/ADJ]()-[sk-pos/ADJ]() (1; 0% instances), [sk-pos/ADJ]()-[sk-pos/PRON]() (1; 0% instances), [sk-pos/ADJ]()-[sk-pos/PROPN]() (1; 0% instances), [sk-pos/ADV]()-[sk-pos/NOUN]() (1; 0% instances), [sk-pos/NUM]()-[sk-pos/VERB]() (1; 0% instances), [sk-pos/PROPN]()-[sk-pos/NOUN]() (1; 0% instances), [sk-pos/VERB]()-[sk-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 advcl	color:blue
1	Keďže	keďže	CONJ	O	_	4	mark	_	_
2	galaxie	galaxia	NOUN	SSfp1	Case=Nom|Gender=Fem|Number=Plur	4	nsubj	_	_
3	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	4	expl	_	_
4	vzďaľovali	vzďaľovať	VERB	VLepcf+	Aspect=Imp|Gender=Fem|Negative=Pos|Number=Plur|Person=3|Tense=Past|VerbForm=Part	6	advcl	_	_
5	,	,	PUNCT	Z	_	4	punct	_	_
6	naznačilo	naznačiť	VERB	VLdscn+	Aspect=Perf|Gender=Neut|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbForm=Part	0	root	_	_
7	to	to	PRON	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Prs	6	nsubj	_	_
8	dve	dva	NUM	NNfp4	Case=Acc|Gender=Fem|Number=Plur	10	nummod	_	_
9	rôzne	rôzny	ADJ	AAfp4x	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	10	amod	_	_
10	možnosti	možnosť	NOUN	SSfp4	Case=Acc|Gender=Fem|Number=Plur	6	dobj	_	_
11	.	.	PUNCT	Z	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 advcl	color:blue
1	"	"	PUNCT	Z	_	2	punct	_	_
2	Máte	mať	VERB	VKepb+	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
3	dojem	dojem	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	2	dobj	_	_
4	,	,	PUNCT	Z	_	7	punct	_	_
5	že	že	CONJ	O	_	7	mark	_	_
6	ste	byť	VERB	VKepb+	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	slobodnejší	slobodný	ADJ	AAmp1y	Animacy=Anim|Case=Nom|Degree=Cmp|Gender=Masc|Number=Plur	3	acl	_	_
8	,	,	PUNCT	Z	_	11	punct	_	_
9	než	než	CONJ	O	_	11	mark	_	_
10	ste	byť	AUX	VKepb+	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	11	aux	_	_
11	boli	byť	VERB	VLepbh+	Aspect=Imp|Negative=Pos|Number=Plur|Person=2|Tense=Past|VerbForm=Part	7	advcl	_	_
12	vtedy	vtedy	PRON	PD	PronType=Prs	11	nmod	_	_
13	?	?	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 advcl	color:blue
1	Revolúcia	revolúcia	NOUN	SSfs1	Case=Nom|Gender=Fem|Number=Sing	3	nsubjpass	_	_
2	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	3	auxpass:reflex	_	_
3	zavŕši	zavŕšiť	VERB	VKdsc+	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	vtedy	vtedy	PRON	PD	PronType=Prs	3	nmod	_	_
5	,	,	PUNCT	Z	_	9	punct	_	_
6	keď	keď	CONJ	O	_	9	mark	_	_
7	jazyk	jazyk	NOUN	SSis1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	_
8	bude	byť	VERB	VBesc+	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	9	cop	_	_
9	dokonalý	dokonalý	ADJ	AAis1x	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	3	advcl	_	_
10	.	.	PUNCT	Z	_	3	punct	_	_

~~~


