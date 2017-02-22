

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is a language-specific subtype of [compound]().

1839 nodes (1%) are attached to their parents as `compound:prt`.

1056 instances of `compound:prt` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.47960848287113.

The following 34 pairs of parts of speech are connected with `compound:prt`: [nl-pos/VERB]()-[nl-pos/ADV]() (969; 53% instances), [nl-pos/VERB]()-[nl-pos/X]() (201; 11% instances), [nl-pos/VERB]()-[nl-pos/NOUN]() (165; 9% instances), [nl-pos/VERB]()-[nl-pos/ADP]() (154; 8% instances), [nl-pos/VERB]()-[nl-pos/ADJ]() (149; 8% instances), [nl-pos/AUX]()-[nl-pos/X]() (30; 2% instances), [nl-pos/NOUN]()-[nl-pos/ADV]() (25; 1% instances), [nl-pos/ADJ]()-[nl-pos/ADV]() (24; 1% instances), [nl-pos/AUX]()-[nl-pos/ADP]() (21; 1% instances), [nl-pos/VERB]()-[nl-pos/DET]() (18; 1% instances), [nl-pos/PROPN]()-[nl-pos/ADV]() (16; 1% instances), [nl-pos/AUX]()-[nl-pos/ADV]() (13; 1% instances), [nl-pos/NOUN]()-[nl-pos/NOUN]() (10; 1% instances), [nl-pos/VERB]()-[nl-pos/SCONJ]() (7; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADJ]() (6; 0% instances), [nl-pos/NOUN]()-[nl-pos/X]() (6; 0% instances), [nl-pos/AUX]()-[nl-pos/ADJ]() (3; 0% instances), [nl-pos/ADJ]()-[nl-pos/ADP]() (2; 0% instances), [nl-pos/ADJ]()-[nl-pos/NOUN]() (2; 0% instances), [nl-pos/AUX]()-[nl-pos/NOUN]() (2; 0% instances), [nl-pos/PROPN]()-[nl-pos/ADP]() (2; 0% instances), [nl-pos/PROPN]()-[nl-pos/NOUN]() (2; 0% instances), [nl-pos/ADJ]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/ADJ]()-[nl-pos/X]() (1; 0% instances), [nl-pos/ADV]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/ADV]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/AUX]()-[nl-pos/DET]() (1; 0% instances), [nl-pos/NUM]()-[nl-pos/NOUN]() (1; 0% instances), [nl-pos/PRON]()-[nl-pos/ADP]() (1; 0% instances), [nl-pos/PRON]()-[nl-pos/X]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/SCONJ]() (1; 0% instances), [nl-pos/SCONJ]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/X]()-[nl-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 compound:prt	color:blue
1	Moeder	moeder	NOUN	N|soort|ev|neut	Number=Sing	3	nsubj	_	_
2	Mien	Mien	PROPN	N|eigen|ev|neut	Number=Sing	1	appos	_	_
3	spoorde	spoor_aan	VERB	V|trans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Tran|Tense=Past|VerbForm=Fin	0	root	_	_
4	haar	haar	PRON	Pron|per|3|ev|datofacc	Case=Acc,Dat|Number=Sing|Person=3|PronType=Prs	3	iobj	_	_
5	aan	aan	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	3	compound:prt	_	_
6	toch	toch	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	9	advmod	_	_
7	op	op	ADV	Adv|deelv	PartType=Vbp	9	compound:prt	_	_
8	te	te	ADP	Prep|voorinf	AdpType=Prep|PartType=Inf	9	mark	_	_
9	stappen	stap_op	VERB	V|intrans|inf	Subcat=Intr|VerbForm=Inf	3	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	Punc|punt	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 compound:prt	color:blue
1	Ik	ik	PRON	Pron|per|1|ev|nom	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	besloot	besluit	VERB	V|trans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Tran|Tense=Past|VerbForm=Fin	0	root	_	_
3	serieuzer	serieus	ADJ	Adj|attr|vergr|onverv	Degree=Cmp	7	obl	_	_
4	te	te	X	Prep_N|voor_soort|ev|neut	Number=Sing	7	compound:prt	_	MWE=te_werk|MWEPOS=X
5	werk	werk	X	X	Number=Sing	4	compound	_	_
6	te	te	ADP	Prep|voorinf	AdpType=Prep|PartType=Inf	7	mark	_	_
7	gaan	ga	VERB	V|intrans|inf	Subcat=Intr|VerbForm=Inf	2	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	Punc|punt	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound:prt	color:blue
1	het	het	PRON	Pron|per|3|ev|nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	vond	vind_plaats	VERB	V|trans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Tran|Tense=Past|VerbForm=Fin	0	root	_	_
3	plaats	plaats	NOUN	N|soort|ev|neut	Number=Sing	2	compound:prt	_	_
4	in	in	ADP	Prep|voor	AdpType=Prep	5	case	_	_
5	Amsterdam	Amsterdam	PROPN	N|eigen|ev|neut	Number=Sing	2	obl	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch-LassySmall)

This relation is a language-specific subtype of [compound]().

628 nodes (1%) are attached to their parents as `compound:prt`.

455 instances of `compound:prt` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.81369426751592.

The following 18 pairs of parts of speech are connected with `compound:prt`: [nl-pos/VERB]()-[nl-pos/ADP]() (432; 69% instances), [nl-pos/VERB]()-[nl-pos/ADV]() (80; 13% instances), [nl-pos/VERB]()-[nl-pos/NOUN]() (61; 10% instances), [nl-pos/VERB]()-[nl-pos/ADJ]() (32; 5% instances), [nl-pos/VERB]()-[nl-pos/VERB]() (6; 1% instances), [nl-pos/NOUN]()-[nl-pos/ADJ]() (3; 0% instances), [nl-pos/NOUN]()-[nl-pos/NOUN]() (2; 0% instances), [nl-pos/PROPN]()-[nl-pos/ADJ]() (2; 0% instances), [nl-pos/ADJ]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/ADJ]()-[nl-pos/ADP]() (1; 0% instances), [nl-pos/ADV]()-[nl-pos/ADP]() (1; 0% instances), [nl-pos/ADV]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADP]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/ADP]() (1; 0% instances), [nl-pos/SCONJ]()-[nl-pos/ADP]() (1; 0% instances), [nl-pos/SCONJ]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 compound:prt	color:blue
1	In	in	ADP	_	_	2	case	_	_
2	1989	1989	NUM	_	_	3	obl	_	_
3	nam	nemen	VERB	_	Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
4	Verhofstadt	Verhofstadt	PROPN	_	Gender=Com|Number=Sing	3	nsubj	_	_
5	de	de	DET	_	Definite=Def	6	det	_	_
6	voorzittersfakkel	voorzittersfakkel	NOUN	_	Gender=Com|Number=Sing	3	obj	_	_
7	weer	weer	ADV	_	_	3	advmod	_	_
8	over	over	ADP	_	_	3	compound:prt	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 compound:prt	color:blue
1	Binnen	binnen	ADP	_	_	3	case	_	_
2	het	het	DET	_	Definite=Def	3	det	_	_
3	OVV	OVV	PROPN	_	Gender=Neut|Number=Sing	4	obl	_	_
4	vinden	vinden	VERB	_	Number=Plur|Tense=Pres|VerbForm=Fin	0	root	_	_
5	we	we	PRON	_	Case=Nom|Person=1|PronType=Prs	4	nsubj	_	_
6	zowat	zowat	ADV	_	_	8	amod	_	_
7	al	al	PRON	_	PronType=Ind	8	amod	_	_
8	deze	deze	PRON	_	PronType=Dem	9	det	_	_
9	strekkingen	strekking	NOUN	_	Number=Plur	4	obj	_	_
10	terug	terug	ADV	_	_	4	compound:prt	_	SpaceAfter=No
11	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 compound:prt	color:blue
1	In	in	ADP	_	_	2	case	_	_
2	september	september	PROPN	_	Gender=Com|Number=Sing	3	obl	_	_
3	vindt	vinden	VERB	_	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	_	_
4	in	in	ADP	_	_	5	case	_	_
5	Hasselt	Hasselt	PROPN	_	Gender=Neut|Number=Sing	3	obl	_	_
6	de	de	DET	_	Definite=Def	8	det	_	_
7	jaarlijkse	jaarlijks	ADJ	_	Degree=Pos	8	amod	_	_
8	kermis	kermis	NOUN	_	Gender=Com|Number=Sing	3	nsubj	_	_
9	plaats	plaats	NOUN	_	Gender=Com|Number=Sing	3	compound:prt	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


