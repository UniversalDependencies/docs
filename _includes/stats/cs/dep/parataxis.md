

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

1861 nodes (0%) are attached to their parents as `parataxis`.

1232 instances of `parataxis` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.86673831273509.

The following 40 pairs of parts of speech are connected with `parataxis`: [cs-pos/VERB]()-[cs-pos/VERB]() (1100; 59% instances), [cs-pos/NOUN]()-[cs-pos/VERB]() (276; 15% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (117; 6% instances), [cs-pos/PROPN]()-[cs-pos/VERB]() (67; 4% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (58; 3% instances), [cs-pos/NUM]()-[cs-pos/VERB]() (47; 3% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (46; 2% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (16; 1% instances), [cs-pos/ADP]()-[cs-pos/NOUN]() (15; 1% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (14; 1% instances), [cs-pos/ADV]()-[cs-pos/VERB]() (13; 1% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (12; 1% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (7; 0% instances), [cs-pos/PROPN]()-[cs-pos/ADJ]() (7; 0% instances), [cs-pos/PRON]()-[cs-pos/VERB]() (6; 0% instances), [cs-pos/PROPN]()-[cs-pos/NOUN]() (6; 0% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (6; 0% instances), [cs-pos/ADV]()-[cs-pos/ADJ]() (4; 0% instances), [cs-pos/ADV]()-[cs-pos/PRON]() (4; 0% instances), [cs-pos/NOUN]()-[cs-pos/NUM]() (4; 0% instances), [cs-pos/VERB]()-[cs-pos/SYM]() (4; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (3; 0% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (3; 0% instances), [cs-pos/CONJ]()-[cs-pos/VERB]() (3; 0% instances), [cs-pos/NUM]()-[cs-pos/NOUN]() (3; 0% instances), [cs-pos/PRON]()-[cs-pos/ADJ]() (3; 0% instances), [cs-pos/ADP]()-[cs-pos/PRON]() (2; 0% instances), [cs-pos/ADV]()-[cs-pos/PROPN]() (2; 0% instances), [cs-pos/NOUN]()-[cs-pos/SYM]() (2; 0% instances), [cs-pos/ADP]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/ADP]()-[cs-pos/PROPN]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/CONJ]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/PROPN]() (1; 0% instances), [cs-pos/PROPN]()-[cs-pos/PROPN]() (1; 0% instances), [cs-pos/PUNCT]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/SCONJ]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/SCONJ]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 3 parataxis	color:blue
1	Jak	jak	SCONJ	J,-------------	_	3	advmod	_	LId=jak-2
2	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	vidět	vidět	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	11	parataxis	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	11	punct	_	_
5	McEnroe	McEnroe	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Negative=Pos|Number=Sing	11	nsubj	_	_
6	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	11	expl	_	LGloss=(zvr._zájmeno/částice)
7	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	9	case	_	LId=z-1
8	anglické	anglický	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	9	amod	_	_
9	tradice	tradice	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	11	iobj	_	_
10	nic	nic	PRON	PW--4----------	Case=Acc|Negative=Neg|PronType=Neg	11	dobj	_	_
11	nedělá	dělat	VERB	VB-S---3P-NA---	Aspect=Imp|Mood=Ind|Negative=Neg|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 parataxis	color:blue
1	Kamióny	kamión	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Plur	0	root	_	_
2	ze	z	ADP	RV--2----------	AdpType=Voc|Case=Gen	3	case	_	LId=z-1
3	silnice	silnice	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	1	dep	_	_
4	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	_	LId=na-1
5	dráhu	dráha	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	1	dep	_	_
6	VÝVOZNÍ	vývozní	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	7	amod	_	_
7	TALÓNY	talón	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Plur	9	nsubj	_	_
8	SE	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	10	expl	_	LGloss=(zvr._zájmeno/částice)
9	ZAČÍNAJÍ	začínat	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis	_	_
10	PROJEVOVAT	projevovat	VERB	Vf--------A----	Aspect=Imp|Negative=Pos|VerbForm=Inf	9	xcomp	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 parataxis	color:blue
1	HYPO	Hypo	ADJ	AAXXX----1A----	Degree=Pos|Foreign=Foreign|NameType=Com|Negative=Pos	0	root	_	SpaceAfter=No
2	-	-	PUNCT	Z:-------------	_	1	punct	_	SpaceAfter=No
3	Stavební	stavební	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	4	dep	_	_
4	mění	měnit	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis	_	_
5	tarif	tarif	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	4	dobj	_	_

~~~


