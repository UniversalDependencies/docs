

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is universal.

7121 nodes (7%) are attached to their parents as `nsubj`.

4875 instances of `nsubj` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.42395730936666.

The following 35 pairs of parts of speech are connected with `nsubj`: [sk-pos/VERB]()-[sk-pos/NOUN]() (3182; 45% instances), [sk-pos/VERB]()-[sk-pos/PROPN]() (1665; 23% instances), [sk-pos/VERB]()-[sk-pos/PRON]() (1112; 16% instances), [sk-pos/NOUN]()-[sk-pos/NOUN]() (253; 4% instances), [sk-pos/NOUN]()-[sk-pos/PRON]() (248; 3% instances), [sk-pos/ADJ]()-[sk-pos/NOUN]() (206; 3% instances), [sk-pos/NOUN]()-[sk-pos/PROPN]() (98; 1% instances), [sk-pos/ADJ]()-[sk-pos/PRON]() (91; 1% instances), [sk-pos/VERB]()-[sk-pos/NUM]() (87; 1% instances), [sk-pos/VERB]()-[sk-pos/X]() (24; 0% instances), [sk-pos/ADJ]()-[sk-pos/PROPN]() (22; 0% instances), [sk-pos/PRON]()-[sk-pos/PRON]() (22; 0% instances), [sk-pos/PRON]()-[sk-pos/NOUN]() (21; 0% instances), [sk-pos/NUM]()-[sk-pos/NOUN]() (19; 0% instances), [sk-pos/VERB]()-[sk-pos/ADJ]() (12; 0% instances), [sk-pos/PROPN]()-[sk-pos/PRON]() (11; 0% instances), [sk-pos/NUM]()-[sk-pos/PROPN]() (7; 0% instances), [sk-pos/NOUN]()-[sk-pos/X]() (6; 0% instances), [sk-pos/NUM]()-[sk-pos/PRON]() (6; 0% instances), [sk-pos/VERB]()-[sk-pos/CONJ]() (5; 0% instances), [sk-pos/NOUN]()-[sk-pos/NUM]() (3; 0% instances), [sk-pos/PROPN]()-[sk-pos/NOUN]() (3; 0% instances), [sk-pos/NUM]()-[sk-pos/NUM]() (2; 0% instances), [sk-pos/PRON]()-[sk-pos/PROPN]() (2; 0% instances), [sk-pos/SYM]()-[sk-pos/NUM]() (2; 0% instances), [sk-pos/VERB]()-[sk-pos/ADV]() (2; 0% instances), [sk-pos/VERB]()-[sk-pos/INTJ]() (2; 0% instances), [sk-pos/ADJ]()-[sk-pos/ADJ]() (1; 0% instances), [sk-pos/ADJ]()-[sk-pos/NUM]() (1; 0% instances), [sk-pos/ADV]()-[sk-pos/NOUN]() (1; 0% instances), [sk-pos/ADV]()-[sk-pos/PRON]() (1; 0% instances), [sk-pos/NOUN]()-[sk-pos/PART]() (1; 0% instances), [sk-pos/NUM]()-[sk-pos/CONJ]() (1; 0% instances), [sk-pos/PROPN]()-[sk-pos/PROPN]() (1; 0% instances), [sk-pos/X]()-[sk-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj	color:blue
1	Ďalšie	ďalší	ADJ	AAip1x	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	2	amod	_	_
2	kroky	krok	NOUN	SSip1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	5	nsubj	_	_
3	švajčiarskej	švajčiarský	ADJ	AAfs2x	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	_
4	sudkyne	sudkyňa	NOUN	SSfs2	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
5	povedú	poviesť	VERB	VKdpc+	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	do	do	ADP	Eu2	AdpType=Prep|Case=Gen	7	case	_	_
7	Belehradu	belehrad	PROPN	SSis2:r	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
8	.	.	PUNCT	ZIP	VerbForm=Inf	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Haag	haag	PROPN	SSis1:r	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	spresňuje	spresňovať	VERB	VKesc+	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nsubj	color:blue
1	Ja	ja	PRON	PPhs1	Case=Nom|Number=Sing|PronType=Prs	6	nsubj	_	_
2	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	6	expl	_	_
3	ale	ale	PART	T	_	6	advmod	_	_
4	na	na	ADP	Eu4	AdpType=Prep|Case=Acc	5	case	_	_
5	nikoho	nikto	PRON	PFms4	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|PronType=Prs	6	dobj	_	_
6	nehnevám	nehnevať	VERB	VKesa-	Aspect=Imp|Mood=Ind|Negative=Neg|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
7	.	.	PUNCT	ZIP	VerbForm=Inf	6	punct	_	_

~~~


