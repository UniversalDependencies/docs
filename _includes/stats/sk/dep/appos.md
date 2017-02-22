

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is universal.

223 nodes (0%) are attached to their parents as `appos`.

223 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.67713004484305.

The following 33 pairs of parts of speech are connected with `appos`: [sk-pos/NOUN]()-[sk-pos/NOUN]() (84; 38% instances), [sk-pos/PROPN]()-[sk-pos/NOUN]() (39; 17% instances), [sk-pos/NOUN]()-[sk-pos/PROPN]() (30; 13% instances), [sk-pos/X]()-[sk-pos/NOUN]() (8; 4% instances), [sk-pos/ADV]()-[sk-pos/NOUN]() (7; 3% instances), [sk-pos/NOUN]()-[sk-pos/X]() (7; 3% instances), [sk-pos/PRON]()-[sk-pos/NOUN]() (6; 3% instances), [sk-pos/PRON]()-[sk-pos/VERB]() (4; 2% instances), [sk-pos/ADJ]()-[sk-pos/ADJ]() (3; 1% instances), [sk-pos/NOUN]()-[sk-pos/NUM]() (3; 1% instances), [sk-pos/PROPN]()-[sk-pos/X]() (3; 1% instances), [sk-pos/VERB]()-[sk-pos/VERB]() (3; 1% instances), [sk-pos/ADV]()-[sk-pos/ADV]() (2; 1% instances), [sk-pos/DET]()-[sk-pos/NOUN]() (2; 1% instances), [sk-pos/NOUN]()-[sk-pos/VERB]() (2; 1% instances), [sk-pos/PRON]()-[sk-pos/PROPN]() (2; 1% instances), [sk-pos/X]()-[sk-pos/X]() (2; 1% instances), [sk-pos/ADJ]()-[sk-pos/NOUN]() (1; 0% instances), [sk-pos/ADJ]()-[sk-pos/PROPN]() (1; 0% instances), [sk-pos/ADV]()-[sk-pos/ADJ]() (1; 0% instances), [sk-pos/ADV]()-[sk-pos/PROPN]() (1; 0% instances), [sk-pos/NOUN]()-[sk-pos/ADJ]() (1; 0% instances), [sk-pos/NOUN]()-[sk-pos/ADV]() (1; 0% instances), [sk-pos/NOUN]()-[sk-pos/PRON]() (1; 0% instances), [sk-pos/NUM]()-[sk-pos/NOUN]() (1; 0% instances), [sk-pos/NUM]()-[sk-pos/NUM]() (1; 0% instances), [sk-pos/NUM]()-[sk-pos/PROPN]() (1; 0% instances), [sk-pos/NUM]()-[sk-pos/VERB]() (1; 0% instances), [sk-pos/NUM]()-[sk-pos/X]() (1; 0% instances), [sk-pos/PRON]()-[sk-pos/PRON]() (1; 0% instances), [sk-pos/PROPN]()-[sk-pos/ADJ]() (1; 0% instances), [sk-pos/PROPN]()-[sk-pos/PRON]() (1; 0% instances), [sk-pos/X]()-[sk-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 appos	color:blue
1	Sultán	sultán	NOUN	SSms1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	vyhlásil	vyhlásiť	VERB	VLdscm+	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	_	_
3	povstalcom	povstalec	NOUN	SSmp3	Animacy=Anim|Case=Dat|Gender=Masc|Number=Plur	2	iobj	_	_
4	svätú	svätý	ADJ	AAfs4x	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	_
5	vojnu	vojna	NOUN	SSfs4	Case=Acc|Gender=Fem|Number=Sing	2	obj	_	SpaceAfter=No
6	,	,	PUNCT	Z	_	7	punct	_	_
7	džihád	džihád	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	appos	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 appos	color:blue
1	Lev	lev	PROPN	SSms1:r	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
2	II	ii	NUM	0	NumForm=Digit	1	nummod	_	SpaceAfter=No
3	.	.	PUNCT	Z	_	2	punct	_	_
4	(	(	PUNCT	Z	_	5	punct	_	SpaceAfter=No
5	cisár	cisár	NOUN	SSms1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	1	appos	_	SpaceAfter=No
6	)	)	PUNCT	Z	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 appos	color:blue
1	Prvou	prvý	ADJ	NAfs7	Case=Ins|Gender=Fem|Number=Sing|NumType=Ord	3	amod	_	_
2	Kimovou	kimov	ADJ	AFfs7x:r	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	_
3	zástavkou	zástavka	NOUN	SSfs7	Case=Ins|Gender=Fem|Number=Sing	0	root	_	_
4	je	byť	AUX	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	cop	_	_
5	centrum	centrum	NOUN	SSns1	Case=Nom|Gender=Neut|Number=Sing	3	nsubj	_	_
6	čínskeho	čínsky	ADJ	AAis2x	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
7	biznisu	biznis	NOUN	SSis2	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
8	-	-	PUNCT	ZIP	VerbForm=Inf	9	punct	_	_
9	Šanghaj	šanghaj	PROPN	SSis1:r	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	appos	_	SpaceAfter=No
10	.	.	PUNCT	ZIP	VerbForm=Inf	3	punct	_	_

~~~


