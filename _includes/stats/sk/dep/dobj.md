

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is universal.

7237 nodes (7%) are attached to their parents as `dobj`.

4917 instances of `dobj` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.99488738427525.

The following 24 pairs of parts of speech are connected with `dobj`: [sk-pos/VERB]()-[sk-pos/NOUN]() (4348; 60% instances), [sk-pos/VERB]()-[sk-pos/PRON]() (2287; 32% instances), [sk-pos/VERB]()-[sk-pos/PROPN]() (400; 6% instances), [sk-pos/VERB]()-[sk-pos/NUM]() (72; 1% instances), [sk-pos/VERB]()-[sk-pos/ADJ]() (37; 1% instances), [sk-pos/ADJ]()-[sk-pos/NOUN]() (27; 0% instances), [sk-pos/VERB]()-[sk-pos/X]() (23; 0% instances), [sk-pos/ADJ]()-[sk-pos/PRON]() (10; 0% instances), [sk-pos/VERB]()-[sk-pos/ADV]() (5; 0% instances), [sk-pos/ADV]()-[sk-pos/NOUN]() (4; 0% instances), [sk-pos/ADV]()-[sk-pos/PRON]() (3; 0% instances), [sk-pos/SYM]()-[sk-pos/NUM]() (3; 0% instances), [sk-pos/X]()-[sk-pos/X]() (3; 0% instances), [sk-pos/ADJ]()-[sk-pos/PROPN]() (2; 0% instances), [sk-pos/NOUN]()-[sk-pos/NOUN]() (2; 0% instances), [sk-pos/NOUN]()-[sk-pos/PRON]() (2; 0% instances), [sk-pos/VERB]()-[sk-pos/CONJ]() (2; 0% instances), [sk-pos/ADJ]()-[sk-pos/ADV]() (1; 0% instances), [sk-pos/ADJ]()-[sk-pos/NUM]() (1; 0% instances), [sk-pos/ADP]()-[sk-pos/NOUN]() (1; 0% instances), [sk-pos/NOUN]()-[sk-pos/PROPN]() (1; 0% instances), [sk-pos/VERB]()-[sk-pos/ADP]() (1; 0% instances), [sk-pos/VERB]()-[sk-pos/SYM]() (1; 0% instances), [sk-pos/X]()-[sk-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 dobj	color:blue
1	V	v	ADP	Eu6	AdpType=Prep|Case=Loc	3	case	_	_
2	prvom	prvý	NUM	NAis6	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	3	nummod	_	_
3	rade	rad	NOUN	SSis6	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	nmod	_	_
4	vraj	vraj	PART	T	_	5	advmod	_	_
5	došlo	dôjsť	VERB	VLdscn+	Aspect=Perf|Gender=Neut|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbForm=Part	0	root	_	_
6	k	k	ADP	Eu3	AdpType=Prep|Case=Dat	7	case	_	_
7	nepochopeniu	nepochopenie	NOUN	SSns3	Case=Dat|Gender=Neut|Number=Sing	5	dobj	_	_
8	.	.	PUNCT	ZIP	VerbForm=Inf	5	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 dobj	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 dobj	color:blue
1	Kima	kim	PROPN	SSms4:r	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	2	dobj	_	_
2	sprevádza	sprevádzať	VERB	VKesc+	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	20	20	NUM	0	NumForm=Digit	2	nsubj	_	_
4	vysokopostavených	vysokopostavený	ADJ	AAmp2x	Animacy=Anim|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	6	amod	_	_
5	severokórejských	severokórejský	ADJ	AAmp2x	Animacy=Anim|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	6	amod	_	_
6	činiteľov	činiteľ	NOUN	SSmp2	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	3	nmod	_	_
7	.	.	PUNCT	ZIP	VerbForm=Inf	2	punct	_	_

~~~


