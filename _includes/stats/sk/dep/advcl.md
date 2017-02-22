

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is universal.

768 nodes (1%) are attached to their parents as `advcl`.

458 instances of `advcl` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.96223958333333.

The following 14 pairs of parts of speech are connected with `advcl`: [sk-pos/VERB]()-[sk-pos/VERB]() (671; 87% instances), [sk-pos/ADJ]()-[sk-pos/VERB]() (45; 6% instances), [sk-pos/VERB]()-[sk-pos/ADJ]() (15; 2% instances), [sk-pos/NOUN]()-[sk-pos/VERB]() (11; 1% instances), [sk-pos/ADV]()-[sk-pos/VERB]() (7; 1% instances), [sk-pos/VERB]()-[sk-pos/NOUN]() (7; 1% instances), [sk-pos/DET]()-[sk-pos/VERB]() (3; 0% instances), [sk-pos/ADJ]()-[sk-pos/ADJ]() (2; 0% instances), [sk-pos/NOUN]()-[sk-pos/ADJ]() (2; 0% instances), [sk-pos/ADJ]()-[sk-pos/NOUN]() (1; 0% instances), [sk-pos/ADJ]()-[sk-pos/PRON]() (1; 0% instances), [sk-pos/ADV]()-[sk-pos/NOUN]() (1; 0% instances), [sk-pos/PROPN]()-[sk-pos/NOUN]() (1; 0% instances), [sk-pos/VERB]()-[sk-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 advcl	color:blue
1	Keď	keď	SCONJ	O	_	2	mark	_	_
2	máme	mať	VERB	VKepa+	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	advcl	_	_
3	čo	čo	PRON	PFns4	Case=Acc|Gender=Neut|Number=Sing|PronType=Int,Rel	4	obj	_	_
4	jesť	jesť	VERB	VIe+	Aspect=Imp|Polarity=Pos|VerbForm=Inf	2	xcomp	_	SpaceAfter=No
5	,	,	PUNCT	ZIP	VerbForm=Inf	2	punct	_	_
6	máme	mať	VERB	VKepa+	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
7	všetko	všetok	DET	PFns4	Case=Acc|Gender=Neut|Number=Sing|PronType=Tot	6	obj	_	_
8	ostatné	ostatný	ADJ	AAnp4x	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur	7	amod	_	SpaceAfter=No
9	,	,	PUNCT	ZIP	VerbForm=Inf	11	punct	_	_
10	čo	čo	PRON	PFns4	Case=Acc|Gender=Neut|Number=Sing|PronType=Int,Rel	11	obj	_	_
11	potrebujeme	potrebovať	VERB	VKepa+	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	acl	_	SpaceAfter=No
12	.	.	PUNCT	ZIP	VerbForm=Inf	6	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 advcl	color:blue
1	"	"	PUNCT	Z	_	2	punct	_	SpaceAfter=No
2	Máte	mať	VERB	VKepb+	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
3	dojem	dojem	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	2	obj	_	SpaceAfter=No
4	,	,	PUNCT	Z	_	7	punct	_	_
5	že	že	SCONJ	O	_	7	mark	_	_
6	ste	byť	AUX	VKepb+	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	slobodnejší	slobodný	ADJ	AAmp1y	Animacy=Anim|Case=Nom|Degree=Cmp|Gender=Masc|Number=Plur	3	acl	_	SpaceAfter=No
8	,	,	PUNCT	Z	_	11	punct	_	_
9	než	než	SCONJ	O	_	11	mark	_	_
10	ste	byť	AUX	VKepb+	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	11	aux	_	_
11	boli	byť	VERB	VLepbh+	Aspect=Imp|Number=Plur|Person=2|Polarity=Pos|Tense=Past|VerbForm=Part	7	advcl	_	_
12	vtedy	vtedy	ADV	PD	PronType=Dem	11	advmod	_	SpaceAfter=No
13	?	?	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 advcl	color:blue
1	Revolúcia	revolúcia	NOUN	SSfs1	Case=Nom|Gender=Fem|Number=Sing	3	nsubj:pass	_	_
2	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	3	expl:pass	_	_
3	zavŕši	zavŕšiť	VERB	VKdsc+	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
4	vtedy	vtedy	ADV	PD	PronType=Dem	3	advmod	_	SpaceAfter=No
5	,	,	PUNCT	Z	_	9	punct	_	_
6	keď	keď	SCONJ	O	_	9	mark	_	_
7	jazyk	jazyk	NOUN	SSis1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	_
8	bude	byť	AUX	VBesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	9	cop	_	_
9	dokonalý	dokonalý	ADJ	AAis1x	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	3	advcl	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	3	punct	_	_

~~~


