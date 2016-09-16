

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is universal.

2345 nodes (1%) are attached to their parents as `appos`.

2344 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.95223880597015.

The following 36 pairs of parts of speech are connected with `appos`: [nl-pos/NOUN]()-[nl-pos/PROPN]() (1621; 69% instances), [nl-pos/NOUN]()-[nl-pos/NOUN]() (226; 10% instances), [nl-pos/PROPN]()-[nl-pos/NOUN]() (152; 6% instances), [nl-pos/NOUN]()-[nl-pos/NUM]() (123; 5% instances), [nl-pos/NOUN]()-[nl-pos/X]() (56; 2% instances), [nl-pos/PROPN]()-[nl-pos/NUM]() (31; 1% instances), [nl-pos/NOUN]()-[nl-pos/VERB]() (19; 1% instances), [nl-pos/NOUN]()-[nl-pos/ADJ]() (17; 1% instances), [nl-pos/X]()-[nl-pos/NOUN]() (13; 1% instances), [nl-pos/ADJ]()-[nl-pos/PROPN]() (9; 0% instances), [nl-pos/X]()-[nl-pos/PROPN]() (9; 0% instances), [nl-pos/PRON]()-[nl-pos/NOUN]() (8; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADP]() (7; 0% instances), [nl-pos/NOUN]()-[nl-pos/DET]() (6; 0% instances), [nl-pos/PROPN]()-[nl-pos/DET]() (5; 0% instances), [nl-pos/VERB]()-[nl-pos/NOUN]() (5; 0% instances), [nl-pos/NOUN]()-[nl-pos/PRON]() (4; 0% instances), [nl-pos/PROPN]()-[nl-pos/ADJ]() (4; 0% instances), [nl-pos/DET]()-[nl-pos/PROPN]() (3; 0% instances), [nl-pos/PRON]()-[nl-pos/PROPN]() (3; 0% instances), [nl-pos/PROPN]()-[nl-pos/VERB]() (3; 0% instances), [nl-pos/VERB]()-[nl-pos/PROPN]() (3; 0% instances), [nl-pos/ADJ]()-[nl-pos/NOUN]() (2; 0% instances), [nl-pos/NUM]()-[nl-pos/NOUN]() (2; 0% instances), [nl-pos/PROPN]()-[nl-pos/X]() (2; 0% instances), [nl-pos/X]()-[nl-pos/DET]() (2; 0% instances), [nl-pos/ADJ]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/ADJ]()-[nl-pos/X]() (1; 0% instances), [nl-pos/ADV]()-[nl-pos/NOUN]() (1; 0% instances), [nl-pos/DET]()-[nl-pos/NOUN]() (1; 0% instances), [nl-pos/DET]()-[nl-pos/X]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/PUNCT]() (1; 0% instances), [nl-pos/NUM]()-[nl-pos/PROPN]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/PROPN]() (1; 0% instances), [nl-pos/PUNCT]()-[nl-pos/NOUN]() (1; 0% instances), [nl-pos/X]()-[nl-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 appos	color:blue
1	Aankomend	aankomend	VERB	V|intrans|tegdw|onverv	Subcat=Intr|Tense=Pres|VerbForm=Part	2	acl	_	_
2	regisseur	regisseur	NOUN	N|soort|ev|neut	Number=Sing	5	nsubj	_	_
3	Olivier	Olivier	PROPN	N_N|eigen|ev|neut_eigen|ev|neut	_	2	appos	_	MWE=Olivier_Provily|MWEPOS=X
4	Provily	Provily	PROPN	PROPN	_	3	name	_	_
5	kreeg	krijg	VERB	V|trans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Tran|Tense=Past|VerbForm=Fin	0	root	_	_
6	de	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	9	det	_	_
7	Ton	Ton	PROPN	N_N|eigen|ev|neut_eigen|ev|neut	_	9	nmod	_	MWE=Ton_Lutz|MWEPOS=X
8	Lutz	Lutz	PROPN	PROPN	_	7	name	_	_
9	prijs	prijs	NOUN	N|soort|ev|neut	Number=Sing	5	dobj	_	_
10	.	.	PUNCT	Punc|punt	PunctType=Peri	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 appos	color:blue
1	de	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	2	det	_	_
2	schipper	schipper	NOUN	N|soort|ev|neut	Number=Sing	8	nsubj	_	_
3	,	,	PUNCT	Punc|komma	PunctType=Comm	2	punct	_	_
4	een	een	DET	Art|onbep|zijdofonzijd|neut	Definite=Ind|Number=Sing|PronType=Art	6	det	_	_
5	voorzichtig	voorzichtig	ADJ	Adj|attr|stell|onverv	Degree=Pos	6	amod	_	_
6	man	man	NOUN	N|soort|ev|neut	Number=Sing	2	appos	_	_
7	,	,	PUNCT	Punc|komma	PunctType=Comm	8	punct	_	_
8	hield	houd	VERB	V|trans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Tran|Tense=Past|VerbForm=Fin	0	root	_	_
9	zijn	zijn	PRON	Pron|bez|3|ev|neut|attr	Number=Sing|Person=3|Poss=Yes|PronType=Prs	10	nmod	_	_
10	schip	schip	NOUN	N|soort|ev|neut	Number=Sing	8	dobj	_	_
11	aan	aan	ADP	Prep|voor	AdpType=Prep	13	case	_	_
12	de	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	13	det	_	_
13	kade	kade	NOUN	N|soort|ev|neut	Number=Sing	8	nmod	_	_
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
3	Pollini	Pollini	PROPN	N|eigen|ev|neut	Number=Sing	4	dobj	_	_
4	ontmoet	ontmoet	VERB	V|trans|verldw|onverv	Subcat=Tran|Tense=Past|VerbForm=Part	0	root	_	_
5	,	,	PUNCT	Punc|komma	PunctType=Comm	4	punct	_	_
6	de	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	8	det	_	_
7	beste	goed	ADJ	Adj|attr|overtr|vervneut	Case=Nom|Degree=Sup	8	amod	_	_
8	pianist	pianist	NOUN	N|soort|ev|neut	Number=Sing	3	appos	_	_
9	ter	ter	ADP	Prep|voor	AdpType=Prep	10	case	_	_
10	wereld	wereld	NOUN	N|soort|ev|neut	Number=Sing	8	nmod	_	_
11	.	.	PUNCT	Punc|punt	PunctType=Peri	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch-LassySmall)

This relation is universal.

1744 nodes (2%) are attached to their parents as `appos`.

1735 instances of `appos` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.72362385321101.

The following 42 pairs of parts of speech are connected with `appos`: [nl-pos/NOUN]()-[nl-pos/PROPN]() (763; 44% instances), [nl-pos/PROPN]()-[nl-pos/NOUN]() (265; 15% instances), [nl-pos/NOUN]()-[nl-pos/NOUN]() (216; 12% instances), [nl-pos/NOUN]()-[nl-pos/NUM]() (138; 8% instances), [nl-pos/NOUN]()-[nl-pos/DET]() (39; 2% instances), [nl-pos/PROPN]()-[nl-pos/PROPN]() (35; 2% instances), [nl-pos/NOUN]()-[nl-pos/X]() (30; 2% instances), [nl-pos/PRON]()-[nl-pos/NOUN]() (26; 1% instances), [nl-pos/ADJ]()-[nl-pos/PROPN]() (24; 1% instances), [nl-pos/NOUN]()-[nl-pos/ADJ]() (23; 1% instances), [nl-pos/NOUN]()-[nl-pos/SYM]() (23; 1% instances), [nl-pos/PROPN]()-[nl-pos/NUM]() (20; 1% instances), [nl-pos/PROPN]()-[nl-pos/SYM]() (17; 1% instances), [nl-pos/NOUN]()-[nl-pos/VERB]() (16; 1% instances), [nl-pos/PROPN]()-[nl-pos/X]() (12; 1% instances), [nl-pos/ADJ]()-[nl-pos/X]() (11; 1% instances), [nl-pos/X]()-[nl-pos/NUM]() (10; 1% instances), [nl-pos/DET]()-[nl-pos/NOUN]() (8; 0% instances), [nl-pos/ADJ]()-[nl-pos/NOUN]() (7; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADP]() (7; 0% instances), [nl-pos/NOUN]()-[nl-pos/PRON]() (5; 0% instances), [nl-pos/NUM]()-[nl-pos/NOUN]() (5; 0% instances), [nl-pos/X]()-[nl-pos/NOUN]() (5; 0% instances), [nl-pos/DET]()-[nl-pos/NUM]() (4; 0% instances), [nl-pos/NUM]()-[nl-pos/NUM]() (4; 0% instances), [nl-pos/NUM]()-[nl-pos/PROPN]() (4; 0% instances), [nl-pos/X]()-[nl-pos/SYM]() (4; 0% instances), [nl-pos/PROPN]()-[nl-pos/ADJ]() (3; 0% instances), [nl-pos/VERB]()-[nl-pos/SYM]() (3; 0% instances), [nl-pos/X]()-[nl-pos/PROPN]() (3; 0% instances), [nl-pos/ADV]()-[nl-pos/PROPN]() (2; 0% instances), [nl-pos/SYM]()-[nl-pos/NOUN]() (2; 0% instances), [nl-pos/ADJ]()-[nl-pos/NUM]() (1; 0% instances), [nl-pos/ADJ]()-[nl-pos/PRON]() (1; 0% instances), [nl-pos/ADP]()-[nl-pos/NOUN]() (1; 0% instances), [nl-pos/DET]()-[nl-pos/PROPN]() (1; 0% instances), [nl-pos/DET]()-[nl-pos/SYM]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/PUNCT]() (1; 0% instances), [nl-pos/PUNCT]()-[nl-pos/NOUN]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/VERB]() (1; 0% instances), [nl-pos/X]()-[nl-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 appos	color:blue
1	Filip	Filip	PROPN	_	Gender=Com|Number=Sing	0	root	_	_
2	(	(	PUNCT	_	_	1	punct	_	_
3	1960	1960	NUM	_	_	1	nummod	_	_
4	)	)	PUNCT	_	_	1	punct	_	_
5	,	,	PUNCT	_	_	1	punct	_	_
6	Hertog	Hertog	PROPN	_	_	1	appos	_	_
7	van	van	ADP	_	_	6	mwe	_	_
8	Brabant	Brabant	PROPN	_	Gender=Neut|Number=Sing	6	mwe	_	_
9	;	;	PUNCT	_	_	1	punct	_	_
10	zoon	zoon	NOUN	_	Gender=Com|Number=Sing	1	appos	_	_
11	van	van	ADP	_	_	12	case	_	_
12	Koning	koning	NOUN	_	Gender=Com|Number=Sing	10	nmod	_	_
13	Albert	Albert	PROPN	_	_	12	appos	_	_
14	II	II	PROPN	_	_	13	name	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 appos	color:blue
1	Allez	Allez	PROPN	_	_	0	root	_	_
2	Allez	Allez	PROPN	_	_	1	name	_	_
3	Zimbabwe	Zimbabwe	PROPN	_	_	1	name	_	_
4	,	,	PUNCT	_	_	1	punct	_	_
5	reeks	reeks	NOUN	_	Gender=Com|Number=Sing	1	appos	_	_
6	3	3	NUM	_	_	5	appos	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 appos	color:blue
1	Grootstedelijk	grootstedelijk	ADJ	_	Degree=Pos	2	amod	_	_
2	gebied	gebied	NOUN	_	Gender=Neut|Number=Sing	0	root	_	_
3	:	:	PUNCT	_	_	2	punct	_	_
4	Vlaamse	Vlaams	ADJ	_	Degree=Pos	5	amod	_	_
5	Ruit	ruit	NOUN	_	Gender=Com|Number=Sing	2	appos	_	_

~~~


