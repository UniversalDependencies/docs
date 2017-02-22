

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is universal.

55 nodes (0%) are attached to their parents as `parataxis`.

34 instances of `parataxis` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.74545454545455.

The following 9 pairs of parts of speech are connected with `parataxis`: [sk-pos/VERB]()-[sk-pos/VERB]() (36; 65% instances), [sk-pos/VERB]()-[sk-pos/NOUN]() (5; 9% instances), [sk-pos/NOUN]()-[sk-pos/VERB]() (4; 7% instances), [sk-pos/ADJ]()-[sk-pos/VERB]() (3; 5% instances), [sk-pos/VERB]()-[sk-pos/ADJ]() (2; 4% instances), [sk-pos/VERB]()-[sk-pos/PART]() (2; 4% instances), [sk-pos/ADJ]()-[sk-pos/ADJ]() (1; 2% instances), [sk-pos/NOUN]()-[sk-pos/NOUN]() (1; 2% instances), [sk-pos/VERB]()-[sk-pos/PRON]() (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 parataxis	color:blue
1	“	“	PUNCT	Z	_	7	punct	_	_
2	Vieš	vedieť	VERB	VKesb+	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	parataxis	_	SpaceAfter=No
3	,	,	PUNCT	Z	_	2	punct	_	_
4	minulé	minulý	ADJ	AAns4x	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	5	amod	_	_
5	leto	leto	NOUN	SSns4	Case=Acc|Gender=Neut|Number=Sing	7	obl	_	_
6	som	byť	AUX	VKesa+	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	mal	mať	VERB	VLesam+	Animacy=Anim|Aspect=Imp|Gender=Masc|Number=Sing|Person=1|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	_	_
8	fantastický	fantastický	ADJ	AAis4x	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	9	amod	_	_
9	džob	džob	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	7	obj	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 15 parataxis	color:blue
1	Pokúšal	pokúšať	VERB	VLescm+	Animacy=Anim|Aspect=Imp|Gender=Masc|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	_	_
2	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	1	expl:pv	_	_
3	jej	ona	PRON	PFfs3	Case=Dat|Gender=Fem|Number=Sing|PronType=Prs	5	iobj	_	_
4	to	to	DET	PFns4	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	5	obj	_	_
5	vysvetliť	vysvetliť	VERB	VId+	Aspect=Perf|Polarity=Pos|VerbForm=Inf	1	xcomp	_	_
6	tak	tak	ADV	PD	PronType=Dem	5	advmod	_	SpaceAfter=No
7	,	,	PUNCT	Z	_	9	punct	_	_
8	aby	aby	SCONJ	OY	Mood=Cnd	9	mark	_	_
9	pochopila	pochopiť	VERB	VLdscf+	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Part	5	advcl	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	1	punct	_	_
11	"	"	PUNCT	Z	_	15	punct	_	SpaceAfter=No
12	Toto	toto	DET	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	15	nsubj	_	_
13	bol	byť	AUX	VLesci+	Animacy=Inan|Aspect=Imp|Gender=Masc|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Part	15	cop	_	_
14	výnimočný	výnimočný	ADJ	AAis1x	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	15	amod	_	_
15	prípad	prípad	NOUN	SSis1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	1	parataxis	_	SpaceAfter=No
16	.	.	PUNCT	Z	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 parataxis	color:blue
1	Jeho	jeho	DET	PUms7	Animacy=Anim|Case=Ins|Gender=Masc|Gender[psor]=Masc,Neut|Number=Sing|Number[psor]=Sing|Poss=Yes|PronType=Prs	2	det	_	_
2	otcom	otec	NOUN	SSms7	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	0	root	_	_
3	bol	byť	AUX	VLescm+	Animacy=Anim|Aspect=Imp|Gender=Masc|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Part	2	cop	_	_
4	cisár	cisár	NOUN	SSms1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	5	nmod	_	_
5	Arkadius	arkadius	PROPN	SSms1:r	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
6	(	(	PUNCT	Z	_	7	punct	_	SpaceAfter=No
7	vládol	vládnuť	VERB	VLescm+	Animacy=Anim|Aspect=Imp|Gender=Masc|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Part	2	parataxis	_	_
8	395	395	NUM	0	NumForm=Digit	7	obl	_	_
9	–	–	PUNCT	Z	_	10	punct	_	_
10	408	408	NUM	0	NumForm=Digit	8	conj	_	SpaceAfter=No
11	)	)	PUNCT	Z	_	7	punct	_	SpaceAfter=No
12	,	,	PUNCT	Z	_	13	punct	_	_
13	matkou	matka	NOUN	SSfs7	Case=Ins|Gender=Fem|Number=Sing	2	conj	_	_
14	Eudoxia	eudoxia	PROPN	SSfs1:r	Case=Nom|Gender=Fem|Number=Sing	13	orphan	_	SpaceAfter=No
15	,	,	PUNCT	Z	_	16	punct	_	_
16	dcéra	dcéra	NOUN	SSfs1	Case=Nom|Gender=Fem|Number=Sing	14	appos	_	_
17	magistra	magister	NOUN	SSms2	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	19	nmod	_	_
18	militum	militum	X	%	Foreign=Yes	17	nmod	_	_
19	Bautona	bauton	PROPN	SSms2:r	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	16	nmod	_	SpaceAfter=No
20	.	.	PUNCT	Z	_	2	punct	_	_

~~~


