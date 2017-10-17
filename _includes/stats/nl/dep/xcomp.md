

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is universal.

3113 nodes (2%) are attached to their parents as `xcomp`.

2946 instances of `xcomp` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.68743976871185.

The following 45 pairs of parts of speech are connected with `xcomp`: [nl-pos/VERB]()-[nl-pos/VERB]() (1859; 60% instances), [nl-pos/SCONJ]()-[nl-pos/VERB]() (496; 16% instances), [nl-pos/AUX]()-[nl-pos/VERB]() (190; 6% instances), [nl-pos/NOUN]()-[nl-pos/VERB]() (124; 4% instances), [nl-pos/ADV]()-[nl-pos/VERB]() (65; 2% instances), [nl-pos/VERB]()-[nl-pos/ADJ]() (58; 2% instances), [nl-pos/ADJ]()-[nl-pos/VERB]() (54; 2% instances), [nl-pos/ADP]()-[nl-pos/VERB]() (52; 2% instances), [nl-pos/VERB]()-[nl-pos/NOUN]() (52; 2% instances), [nl-pos/VERB]()-[nl-pos/AUX]() (22; 1% instances), [nl-pos/X]()-[nl-pos/VERB]() (20; 1% instances), [nl-pos/PRON]()-[nl-pos/VERB]() (16; 1% instances), [nl-pos/SCONJ]()-[nl-pos/ADJ]() (16; 1% instances), [nl-pos/AUX]()-[nl-pos/ADJ]() (12; 0% instances), [nl-pos/AUX]()-[nl-pos/NOUN]() (10; 0% instances), [nl-pos/SCONJ]()-[nl-pos/NOUN]() (8; 0% instances), [nl-pos/AUX]()-[nl-pos/AUX]() (6; 0% instances), [nl-pos/SCONJ]()-[nl-pos/AUX]() (5; 0% instances), [nl-pos/VERB]()-[nl-pos/X]() (5; 0% instances), [nl-pos/ADV]()-[nl-pos/NOUN]() (4; 0% instances), [nl-pos/VERB]()-[nl-pos/ADV]() (4; 0% instances), [nl-pos/DET]()-[nl-pos/VERB]() (3; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADJ]() (3; 0% instances), [nl-pos/VERB]()-[nl-pos/PROPN]() (3; 0% instances), [nl-pos/ADV]()-[nl-pos/ADJ]() (2; 0% instances), [nl-pos/NOUN]()-[nl-pos/NOUN]() (2; 0% instances), [nl-pos/SYM]()-[nl-pos/VERB]() (2; 0% instances), [nl-pos/VERB]()-[nl-pos/ADP]() (2; 0% instances), [nl-pos/VERB]()-[nl-pos/PRON]() (2; 0% instances), [nl-pos/ADJ]()-[nl-pos/NUM]() (1; 0% instances), [nl-pos/ADJ]()-[nl-pos/PROPN]() (1; 0% instances), [nl-pos/ADP]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/ADP]()-[nl-pos/AUX]() (1; 0% instances), [nl-pos/AUX]()-[nl-pos/ADP]() (1; 0% instances), [nl-pos/AUX]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/AUX]()-[nl-pos/PRON]() (1; 0% instances), [nl-pos/AUX]()-[nl-pos/PROPN]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/AUX]() (1; 0% instances), [nl-pos/NUM]()-[nl-pos/VERB]() (1; 0% instances), [nl-pos/PRON]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/PRON]()-[nl-pos/AUX]() (1; 0% instances), [nl-pos/SCONJ]()-[nl-pos/ADP]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/DET]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/SCONJ]() (1; 0% instances), [nl-pos/X]()-[nl-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 xcomp	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 xcomp	color:blue
1	Dat	dat	PRON	Pron|aanw|neut|zelfst	PronType=Dem	2	nsubj	_	_
2	gaf	geef	VERB	V|trans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Tran|Tense=Past|VerbForm=Fin	0	root	_	_
3	me	me	PRON	Pron|per|1|ev|datofacc	Case=Acc,Dat|Number=Sing|Person=1|PronType=Prs	2	obj	_	_
4	de	de	ADP	Art_N	AdpType=Prep	2	compound:prt	_	MWE=de_tijd|MWEPOS=X
5	tijd	tijd	X	X	Definite=Def|Number=Sing	4	compound	_	_
6	om	om	SCONJ	Conj|onder|metinf	_	2	obj	_	_
7	eens	eens	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	10	advmod	_	_
8	na	na	ADV	Adv|deelv	PartType=Vbp	10	compound:prt	_	_
9	te	te	ADP	Prep|voorinf	AdpType=Prep|PartType=Inf	10	mark	_	_
10	denken	denk_na	VERB	V|intrans|inf	Subcat=Intr|VerbForm=Inf	6	xcomp	_	_
11	over	over	ADP	Prep|voor	AdpType=Prep	13	case	_	_
12	mijn	mijn	PRON	Pron|bez|1|ev|neut|attr	Number=Sing|Person=1|Poss=Yes|PronType=Prs	13	nmod	_	_
13	instelling	instelling	NOUN	N|soort|ev|neut	Number=Sing	10	obj	_	SpaceAfter=No
14	.	.	PUNCT	Punc|punt	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 xcomp	color:blue
1	"	"	PUNCT	Punc|aanhaaldubb	PunctType=Quot	4	punct	_	SpaceAfter=No
2	De	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	3	det	_	_
3	boel	boel	NOUN	N|soort|ev|neut	Number=Sing	4	nsubj	_	_
4	was	ben	AUX	V|hulpofkopp|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|VerbType=Aux,Cop	0	root	_	_
5	niet	niet	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	10	advmod	_	_
6	in	in	ADP	Prep|voor	AdpType=Prep	8	case	_	_
7	de	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	8	det	_	_
8	hand	hand	NOUN	N|soort|ev|neut	Number=Sing	10	obl	_	_
9	te	te	ADP	Prep|voorinf	AdpType=Prep|PartType=Inf	10	mark	_	_
10	houden	houd	VERB	V|trans|inf	Subcat=Tran|VerbForm=Inf	4	xcomp	_	SpaceAfter=No
11	.	.	PUNCT	Punc|punt	PunctType=Peri	4	punct	_	SpaceAfter=No
12	"	"	PUNCT	Punc|aanhaaldubb	PunctType=Quot	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch-LassySmall)

This relation is universal.

306 nodes (0%) are attached to their parents as `xcomp`.

210 instances of `xcomp` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.45098039215686.

The following 19 pairs of parts of speech are connected with `xcomp`: [nl-pos/VERB]()-[nl-pos/VERB]() (122; 40% instances), [nl-pos/VERB]()-[nl-pos/NOUN]() (66; 22% instances), [nl-pos/VERB]()-[nl-pos/ADJ]() (58; 19% instances), [nl-pos/ADP]()-[nl-pos/NOUN]() (16; 5% instances), [nl-pos/VERB]()-[nl-pos/PROPN]() (16; 5% instances), [nl-pos/VERB]()-[nl-pos/ADP]() (6; 2% instances), [nl-pos/VERB]()-[nl-pos/DET]() (6; 2% instances), [nl-pos/VERB]()-[nl-pos/ADV]() (3; 1% instances), [nl-pos/ADP]()-[nl-pos/PROPN]() (2; 1% instances), [nl-pos/NOUN]()-[nl-pos/NOUN]() (2; 1% instances), [nl-pos/ADJ]()-[nl-pos/SYM]() (1; 0% instances), [nl-pos/AUX]()-[nl-pos/VERB]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/VERB]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/PROPN]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/NUM]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/PRON]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/X]() (1; 0% instances), [nl-pos/X]()-[nl-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Hij	hij	PRON	_	Case=Nom|Person=3|PronType=Prs	2	nsubj	_	_
2	voelde	voelen	VERB	_	Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
3	zich	zich	PRON	_	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	2	obj	_	_
4	miskend	miskennen	VERB	_	VerbForm=Part	2	xcomp	_	SpaceAfter=No
5	,	,	PUNCT	_	_	2	punct	_	_
6	"	"	PUNCT	_	_	2	punct	_	SpaceAfter=No
7	bemaskerd	bemaskeren	VERB	_	VerbForm=Part	4	conj	_	SpaceAfter=No
8	"	"	PUNCT	_	_	2	punct	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Dat	dat	PRON	_	Person=3|PronType=Dem	2	nsubj	_	_
2	moest	moeten	VERB	_	Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
3	"	"	PUNCT	_	_	2	punct	_	SpaceAfter=No
4	woestijnvos	woestijnvos	NOUN	_	Gender=Com|Number=Sing	2	xcomp	_	SpaceAfter=No
5	"	"	PUNCT	_	_	2	punct	_	_
6	zijn	zijn	AUX	_	VerbForm=Inf	4	cop	_	SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 xcomp	color:blue
1	Met	met	ADP	_	_	3	case	_	_
2	het	het	DET	_	Definite=Def	3	det	_	_
3	milieu	milieu	NOUN	_	Gender=Neut|Number=Sing	9	obl	_	_
4	van	van	ADP	_	_	5	case	_	_
5	België	België	PROPN	_	Gender=Neut|Number=Sing	3	nmod	_	_
6	is	zijn	AUX	_	Number=Sing|Tense=Pres|VerbForm=Fin	9	aux:pass	_	_
7	het	het	PRON	_	Person=3|PronType=Prs	9	nsubj:pass	_	_
8	slecht	slecht	ADJ	_	Degree=Pos	9	xcomp	_	_
9	gesteld	stellen	VERB	_	VerbForm=Part	0	root	_	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


