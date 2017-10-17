

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian)

This relation is universal.

168 nodes (3%) are attached to their parents as `parataxis`.

91 instances of `parataxis` (54%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.25595238095238.

The following 37 pairs of parts of speech are connected with `parataxis`: [lt-pos/VERB]()-[lt-pos/VERB]() (37; 22% instances), [lt-pos/NOUN]()-[lt-pos/VERB]() (17; 10% instances), [lt-pos/VERB]()-[lt-pos/NOUN]() (13; 8% instances), [lt-pos/NOUN]()-[lt-pos/NOUN]() (12; 7% instances), [lt-pos/VERB]()-[lt-pos/ADV]() (10; 6% instances), [lt-pos/VERB]()-[lt-pos/PART]() (10; 6% instances), [lt-pos/ADJ]()-[lt-pos/VERB]() (6; 4% instances), [lt-pos/NOUN]()-[lt-pos/PART]() (6; 4% instances), [lt-pos/VERB]()-[lt-pos/INTJ]() (6; 4% instances), [lt-pos/ADJ]()-[lt-pos/NOUN]() (5; 3% instances), [lt-pos/VERB]()-[lt-pos/ADJ]() (5; 3% instances), [lt-pos/ADV]()-[lt-pos/ADV]() (3; 2% instances), [lt-pos/NOUN]()-[lt-pos/ADJ]() (3; 2% instances), [lt-pos/NOUN]()-[lt-pos/ADV]() (3; 2% instances), [lt-pos/NOUN]()-[lt-pos/PRON]() (3; 2% instances), [lt-pos/NOUN]()-[lt-pos/PROPN]() (3; 2% instances), [lt-pos/VERB]()-[lt-pos/ADP]() (3; 2% instances), [lt-pos/ADV]()-[lt-pos/VERB]() (2; 1% instances), [lt-pos/PART]()-[lt-pos/VERB]() (2; 1% instances), [lt-pos/VERB]()-[lt-pos/PROPN]() (2; 1% instances), [lt-pos/ADJ]()-[lt-pos/ADJ]() (1; 1% instances), [lt-pos/ADJ]()-[lt-pos/ADP]() (1; 1% instances), [lt-pos/ADJ]()-[lt-pos/ADV]() (1; 1% instances), [lt-pos/ADJ]()-[lt-pos/PART]() (1; 1% instances), [lt-pos/ADV]()-[lt-pos/ADJ]() (1; 1% instances), [lt-pos/ADV]()-[lt-pos/NOUN]() (1; 1% instances), [lt-pos/AUX]()-[lt-pos/VERB]() (1; 1% instances), [lt-pos/DET]()-[lt-pos/PART]() (1; 1% instances), [lt-pos/INTJ]()-[lt-pos/PART]() (1; 1% instances), [lt-pos/NOUN]()-[lt-pos/SCONJ]() (1; 1% instances), [lt-pos/PART]()-[lt-pos/PROPN]() (1; 1% instances), [lt-pos/PRON]()-[lt-pos/NOUN]() (1; 1% instances), [lt-pos/PROPN]()-[lt-pos/ADV]() (1; 1% instances), [lt-pos/PROPN]()-[lt-pos/NOUN]() (1; 1% instances), [lt-pos/VERB]()-[lt-pos/PRON]() (1; 1% instances), [lt-pos/VERB]()-[lt-pos/X]() (1; 1% instances), [lt-pos/X]()-[lt-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 4 parataxis	color:blue
1	Kiti	kitas	PRON	DT	Case=Nom|Gender=Masc|Number=Plur	11	nsubj	_	En=other|SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	4	punct	_	En=,
3	kaip	kaip	SCONJ	UH	_	4	mark	_	En=how
4	žinoma	žinoti	VERB	VBNH	Definite=Ind|Gender=Neut|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Part|Voice=Pass	11	parataxis	_	En=of_course|SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	4	punct	_	En=,
6	aiškios	aiškus	ADJ	JJL	Case=Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	En=obviuos
7	tautinės	tautinis	ADJ	JJL	Case=Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	En=ethnic
8	sąmonės	sąmonė	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	11	obj	_	En=consciousness
9	iš	iš	ADP	UH	_	10	case	_	En=from
10	vis	vis	ADV	RB	Degree=Pos	11	obl	_	En=still
11	neturėjo	turėti	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Reflex=No|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	En=have|SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	11	punct	_	En=.

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 parataxis	color:blue
1	Autorius	autorius	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	En=author
2	aiškiai	aiškiai	ADV	RB	Degree=Pos	5	advmod	_	En=clearly
3	yra	būti	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	En=be
4	Strepsiado	Strepsiadas	PROPN	NNP	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	En=Strepsiade
5	pusėje	pusė	NOUN	NN	Case=Loc|Gender=Fem|Number=Sing	0	root	_	En=half
6	–	–	PUNCT	PUNCT	_	10	punct	_	En=–
7	taip	taip	ADV	RB	Degree=Pos	10	advmod	_	En=so
8	Sokratui	Sokratas	PROPN	NNP	Case=Dat|Gender=Masc|Number=Sing	10	obj	_	En=Socrates
9	ir	ir	PART	UH	_	10	advmod:emph	_	En=even
10	reikia	reikėti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	5	parataxis	_	En=deserve|SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	5	punct	_	En=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 parataxis	color:blue
1	Tiesa	tiesa	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	5	parataxis	_	En=to_say_the_truth|SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	3	punct	_	En=,
3	Strepsiadas	Strepsiadas	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	En=Strepsiade
4	ir	ir	PART	UH	_	5	advmod:emph	_	En=even
5	negalėjo	galėti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Reflex=No|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	En=can
6	laimėti	laimėti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	5	xcomp	_	En=win|SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	5	punct	_	En=.

~~~


