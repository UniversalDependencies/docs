

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is a language-specific subtype of [advmod]().

940 nodes (1%) are attached to their parents as `advmod:emph`.

938 instances of `advmod:emph` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.49787234042553.

The following 24 pairs of parts of speech are connected with `advmod:emph`: [sk-pos/NOUN]()-[sk-pos/PART]() (373; 40% instances), [sk-pos/PRON]()-[sk-pos/PART]() (117; 12% instances), [sk-pos/ADV]()-[sk-pos/PART]() (102; 11% instances), [sk-pos/NUM]()-[sk-pos/PART]() (79; 8% instances), [sk-pos/VERB]()-[sk-pos/PART]() (71; 8% instances), [sk-pos/PROPN]()-[sk-pos/PART]() (55; 6% instances), [sk-pos/ADJ]()-[sk-pos/PART]() (52; 6% instances), [sk-pos/NOUN]()-[sk-pos/CONJ]() (23; 2% instances), [sk-pos/PRON]()-[sk-pos/CONJ]() (15; 2% instances), [sk-pos/PROPN]()-[sk-pos/CONJ]() (12; 1% instances), [sk-pos/PART]()-[sk-pos/PART]() (10; 1% instances), [sk-pos/ADJ]()-[sk-pos/ADV]() (6; 1% instances), [sk-pos/NOUN]()-[sk-pos/X]() (5; 1% instances), [sk-pos/VERB]()-[sk-pos/ADV]() (4; 0% instances), [sk-pos/NOUN]()-[sk-pos/ADV]() (3; 0% instances), [sk-pos/NUM]()-[sk-pos/ADV]() (3; 0% instances), [sk-pos/NUM]()-[sk-pos/CONJ]() (2; 0% instances), [sk-pos/NUM]()-[sk-pos/X]() (2; 0% instances), [sk-pos/ADJ]()-[sk-pos/CONJ]() (1; 0% instances), [sk-pos/ADV]()-[sk-pos/PRON]() (1; 0% instances), [sk-pos/PART]()-[sk-pos/CONJ]() (1; 0% instances), [sk-pos/PROPN]()-[sk-pos/ADV]() (1; 0% instances), [sk-pos/PUNCT]()-[sk-pos/PART]() (1; 0% instances), [sk-pos/X]()-[sk-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 advmod:emph	color:blue
1	V	v	ADP	Eu6	AdpType=Prep|Case=Loc	2	case	_	_
2	prípade	prípad	NOUN	SSis6	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	9	nmod	_	_
3	,	,	PUNCT	ZIP	VerbForm=Inf	5	punct	_	_
4	že	že	CONJ	O	_	5	mark	_	_
5	nebudú	nebyť	VERB	VBepc-	Aspect=Imp|Mood=Ind|Negative=Neg|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	2	acl	_	_
6	ani	ani	PART	T	_	7	advmod:emph	_	_
7	dedičia	dedič	NOUN	SSmp1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	5	nsubj	_	_
8	,	,	PUNCT	ZIP	VerbForm=Inf	5	punct	_	_
9	nahradia	nahradiť	VERB	VKdpc+	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
10	ich	on	PRON	PFmp4	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur|PronType=Prs	9	dobj	_	_
11	univerzity	univerzita	NOUN	SSfp1	Case=Nom|Gender=Fem|Number=Plur	9	nsubj	_	_
12	.	.	PUNCT	ZIP	VerbForm=Inf	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod:emph	color:blue
1	Táto	táto	PRON	PFfs1	Case=Nom|Gender=Fem|Number=Sing|PronType=Prs	2	nmod	_	_
2	správa	správa	NOUN	SSfs1	Case=Nom|Gender=Fem|Number=Sing	7	nsubjpass	_	_
3	bola	byť	AUX	VLescf+	Aspect=Imp|Gender=Fem|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbForm=Part	7	auxpass	_	_
4	už	už	PART	T	_	5	advmod:emph	_	_
5	niekoľkokrát	niekoľkokrát	PRON	PD	PronType=Prs	7	nmod	_	_
6	vedecky	vedecky	ADV	Dx	Degree=Pos	7	advmod	_	_
7	vyvrátená	vyvrátený	VERB	Gtfs1x	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
8	.	.	PUNCT	Z	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 advmod:emph	color:blue
1	Hélium	hélium	NOUN	SSns1	Case=Nom|Gender=Neut|Number=Sing	5	nsubj	_	_
2	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	5	expl	_	_
3	na	na	ADP	Eu6	AdpType=Prep|Case=Loc	4	case	_	_
4	Zemi	zem	PROPN	SSfs6:r	Case=Loc|Gender=Fem|Number=Sing	5	nmod	_	_
5	vyskytuje	vyskytovať	VERB	VKesc+	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	iba	iba	PART	T	_	8	advmod:emph	_	_
7	veľmi	veľmi	ADV	Dx	Degree=Pos	8	advmod	_	_
8	vzácne	vzácne	ADV	Dx	Degree=Pos	5	advmod	_	_
9	.	.	PUNCT	Z	_	5	punct	_	_

~~~


