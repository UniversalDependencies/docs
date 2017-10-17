

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is universal.

2195 nodes (1%) are attached to their parents as `appos`.

2195 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.95717539863326.

The following 34 pairs of parts of speech are connected with `appos`: [nl-pos/NOUN]()-[nl-pos/PROPN]() (1557; 71% instances), [nl-pos/NOUN]()-[nl-pos/NOUN]() (215; 10% instances), [nl-pos/PROPN]()-[nl-pos/NOUN]() (141; 6% instances), [nl-pos/NOUN]()-[nl-pos/NUM]() (96; 4% instances), [nl-pos/NOUN]()-[nl-pos/X]() (49; 2% instances), [nl-pos/NOUN]()-[nl-pos/VERB]() (19; 1% instances), [nl-pos/NOUN]()-[nl-pos/ADJ]() (16; 1% instances), [nl-pos/PROPN]()-[nl-pos/NUM]() (11; 1% instances), [nl-pos/X]()-[nl-pos/NOUN]() (9; 0% instances), [nl-pos/X]()-[nl-pos/PROPN]() (9; 0% instances), [nl-pos/ADJ]()-[nl-pos/PROPN]() (8; 0% instances), [nl-pos/PRON]()-[nl-pos/NOUN]() (8; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADP]() (7; 0% instances), [nl-pos/NOUN]()-[nl-pos/DET]() (5; 0% instances), [nl-pos/PROPN]()-[nl-pos/DET]() (5; 0% instances), [nl-pos/VERB]()-[nl-pos/NOUN]() (5; 0% instances), [nl-pos/NOUN]()-[nl-pos/PRON]() (4; 0% instances), [nl-pos/PROPN]()-[nl-pos/ADJ]() (4; 0% instances), [nl-pos/PRON]()-[nl-pos/PROPN]() (3; 0% instances), [nl-pos/PROPN]()-[nl-pos/VERB]() (3; 0% instances), [nl-pos/VERB]()-[nl-pos/PROPN]() (3; 0% instances), [nl-pos/ADJ]()-[nl-pos/NOUN]() (2; 0% instances), [nl-pos/DET]()-[nl-pos/PROPN]() (2; 0% instances), [nl-pos/NUM]()-[nl-pos/NOUN]() (2; 0% instances), [nl-pos/PROPN]()-[nl-pos/X]() (2; 0% instances), [nl-pos/X]()-[nl-pos/DET]() (2; 0% instances), [nl-pos/ADJ]()-[nl-pos/X]() (1; 0% instances), [nl-pos/ADV]()-[nl-pos/NOUN]() (1; 0% instances), [nl-pos/DET]()-[nl-pos/NOUN]() (1; 0% instances), [nl-pos/DET]()-[nl-pos/X]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/PUNCT]() (1; 0% instances), [nl-pos/NUM]()-[nl-pos/PROPN]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/PROPN]() (1; 0% instances), [nl-pos/PUNCT]()-[nl-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 appos	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 appos	color:blue
1	de	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	2	det	_	_
2	schipper	schipper	NOUN	N|soort|ev|neut	Number=Sing	8	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	Punc|komma	PunctType=Comm	2	punct	_	_
4	een	een	DET	Art|onbep|zijdofonzijd|neut	Definite=Ind|Number=Sing|PronType=Art	6	det	_	_
5	voorzichtig	voorzichtig	ADJ	Adj|attr|stell|onverv	Degree=Pos	6	amod	_	_
6	man	man	NOUN	N|soort|ev|neut	Number=Sing	2	appos	_	SpaceAfter=No
7	,	,	PUNCT	Punc|komma	PunctType=Comm	8	punct	_	_
8	hield	houd	VERB	V|trans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Tran|Tense=Past|VerbForm=Fin	0	root	_	_
9	zijn	zijn	PRON	Pron|bez|3|ev|neut|attr	Number=Sing|Person=3|Poss=Yes|PronType=Prs	10	nmod	_	_
10	schip	schip	NOUN	N|soort|ev|neut	Number=Sing	8	obj	_	_
11	aan	aan	ADP	Prep|voor	AdpType=Prep	13	case	_	_
12	de	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	13	det	_	_
13	kade	kade	NOUN	N|soort|ev|neut	Number=Sing	8	obl	_	SpaceAfter=No
14	.	.	PUNCT	Punc|punt	PunctType=Peri	8	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 appos	color:blue
1	we	we	PRON	Pron|per|1|mv|nom	Case=Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	_	_
2	hebben	heb	AUX	V|hulp|ott|1of2of3|mv	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	Pollini	Pollini	PROPN	N|eigen|ev|neut	Number=Sing	4	obj	_	_
4	ontmoet	ontmoet	VERB	V|trans|verldw|onverv	Subcat=Tran|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Punc|komma	PunctType=Comm	4	punct	_	_
6	de	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	8	det	_	_
7	beste	goed	ADJ	Adj|attr|overtr|vervneut	Case=Nom|Degree=Sup	8	amod	_	_
8	pianist	pianist	NOUN	N|soort|ev|neut	Number=Sing	3	appos	_	_
9	ter	ter	ADP	Prep|voor	AdpType=Prep	10	case	_	_
10	wereld	wereld	NOUN	N|soort|ev|neut	Number=Sing	8	nmod	_	SpaceAfter=No
11	.	.	PUNCT	Punc|punt	PunctType=Peri	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch-LassySmall)

This relation is universal.

1625 nodes (2%) are attached to their parents as `appos`.

1616 instances of `appos` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.71076923076923.

The following 42 pairs of parts of speech are connected with `appos`: [nl-pos/NOUN]()-[nl-pos/PROPN]() (710; 44% instances), [nl-pos/PROPN]()-[nl-pos/NOUN]() (252; 16% instances), [nl-pos/NOUN]()-[nl-pos/NOUN]() (198; 12% instances), [nl-pos/NOUN]()-[nl-pos/NUM]() (134; 8% instances), [nl-pos/NOUN]()-[nl-pos/DET]() (34; 2% instances), [nl-pos/PROPN]()-[nl-pos/PROPN]() (30; 2% instances), [nl-pos/NOUN]()-[nl-pos/X]() (27; 2% instances), [nl-pos/PRON]()-[nl-pos/NOUN]() (24; 1% instances), [nl-pos/ADJ]()-[nl-pos/PROPN]() (23; 1% instances), [nl-pos/NOUN]()-[nl-pos/ADJ]() (22; 1% instances), [nl-pos/NOUN]()-[nl-pos/SYM]() (20; 1% instances), [nl-pos/PROPN]()-[nl-pos/NUM]() (19; 1% instances), [nl-pos/PROPN]()-[nl-pos/SYM]() (17; 1% instances), [nl-pos/NOUN]()-[nl-pos/VERB]() (15; 1% instances), [nl-pos/ADJ]()-[nl-pos/X]() (10; 1% instances), [nl-pos/PROPN]()-[nl-pos/X]() (10; 1% instances), [nl-pos/X]()-[nl-pos/NUM]() (9; 1% instances), [nl-pos/DET]()-[nl-pos/NOUN]() (8; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADP]() (7; 0% instances), [nl-pos/ADJ]()-[nl-pos/NOUN]() (6; 0% instances), [nl-pos/NOUN]()-[nl-pos/PRON]() (5; 0% instances), [nl-pos/NUM]()-[nl-pos/NOUN]() (5; 0% instances), [nl-pos/DET]()-[nl-pos/NUM]() (4; 0% instances), [nl-pos/NUM]()-[nl-pos/NUM]() (4; 0% instances), [nl-pos/NUM]()-[nl-pos/PROPN]() (4; 0% instances), [nl-pos/X]()-[nl-pos/NOUN]() (4; 0% instances), [nl-pos/X]()-[nl-pos/SYM]() (4; 0% instances), [nl-pos/PROPN]()-[nl-pos/ADJ]() (3; 0% instances), [nl-pos/VERB]()-[nl-pos/SYM]() (3; 0% instances), [nl-pos/X]()-[nl-pos/PROPN]() (2; 0% instances), [nl-pos/ADJ]()-[nl-pos/NUM]() (1; 0% instances), [nl-pos/ADJ]()-[nl-pos/PRON]() (1; 0% instances), [nl-pos/ADP]()-[nl-pos/NOUN]() (1; 0% instances), [nl-pos/ADV]()-[nl-pos/PROPN]() (1; 0% instances), [nl-pos/DET]()-[nl-pos/PROPN]() (1; 0% instances), [nl-pos/DET]()-[nl-pos/SYM]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/PUNCT]() (1; 0% instances), [nl-pos/PUNCT]()-[nl-pos/NOUN]() (1; 0% instances), [nl-pos/SYM]()-[nl-pos/NOUN]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/VERB]() (1; 0% instances), [nl-pos/X]()-[nl-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 appos	color:blue
1	Minister	minister	NOUN	_	Gender=Com|Number=Sing	0	root	_	_
2	van	van	ADP	_	_	3	case	_	_
3	Staat	staat	NOUN	_	Gender=Com|Number=Sing	1	nmod	_	_
4	(	(	PUNCT	_	_	1	punct	_	SpaceAfter=No
5	Frankrijk	Frankrijk	PROPN	_	Gender=Neut|Number=Sing	1	appos	_	SpaceAfter=No
6	)	)	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 appos	color:blue
1	Jacques	Jacques	PROPN	_	_	0	root	_	_
2	Brel	Brel	PROPN	_	_	1	flat:name	_	SpaceAfter=No
3	,	,	PUNCT	_	_	1	punct	_	_
4	Franstalige	Franstalig	ADJ	_	Degree=Pos	5	amod	_	_
5	zanger	zanger	NOUN	_	Gender=Com|Number=Sing	1	appos	_	SpaceAfter=No
6	,	,	PUNCT	_	_	1	punct	_	_
7	componist	componist	NOUN	_	Gender=Com|Number=Sing	5	conj	_	_
8	en	en	CCONJ	_	_	5	cc	_	_
9	acteur	acteur	NOUN	_	Gender=Com|Number=Sing	5	conj	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 appos	color:blue
1	de	de	DET	_	Definite=Def	3	det	_	_
2	algemene	algemeen	ADJ	_	Degree=Pos	3	amod	_	_
3	directie	directie	NOUN	_	Gender=Com|Number=Sing	0	root	_	_
4	personeel	personeel	NOUN	_	Gender=Neut|Number=Sing	3	appos	_	_
5	(	(	PUNCT	_	_	3	punct	_	SpaceAfter=No
6	DGP	DGP	PROPN	_	Gender=Com|Number=Sing	3	nmod	_	SpaceAfter=No
7	)	)	PUNCT	_	_	3	punct	_	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


