

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

397 nodes (1%) are attached to their parents as `appos`.

397 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.35768261964736.

The following 28 pairs of parts of speech are connected with `appos`: [sv-pos/NOUN]()-[sv-pos/NOUN]() (229; 58% instances), [sv-pos/NOUN]()-[sv-pos/PROPN]() (27; 7% instances), [sv-pos/VERB]()-[sv-pos/NOUN]() (25; 6% instances), [sv-pos/VERB]()-[sv-pos/VERB]() (18; 5% instances), [sv-pos/PROPN]()-[sv-pos/NOUN]() (16; 4% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (12; 3% instances), [sv-pos/NOUN]()-[sv-pos/VERB]() (11; 3% instances), [sv-pos/VERB]()-[sv-pos/NUM]() (10; 3% instances), [sv-pos/NOUN]()-[sv-pos/NUM]() (7; 2% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (6; 2% instances), [sv-pos/ADJ]()-[sv-pos/VERB]() (5; 1% instances), [sv-pos/PRON]()-[sv-pos/NOUN]() (5; 1% instances), [sv-pos/ADJ]()-[sv-pos/PROPN]() (4; 1% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (3; 1% instances), [sv-pos/PROPN]()-[sv-pos/PROPN]() (3; 1% instances), [sv-pos/NUM]()-[sv-pos/NOUN]() (2; 1% instances), [sv-pos/VERB]()-[sv-pos/ADV]() (2; 1% instances), [sv-pos/VERB]()-[sv-pos/PRON]() (2; 1% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/ADJ]()-[sv-pos/NUM]() (1; 0% instances), [sv-pos/ADV]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/DET]() (1; 0% instances), [sv-pos/NUM]()-[sv-pos/NUM]() (1; 0% instances), [sv-pos/NUM]()-[sv-pos/VERB]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/PROPN]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 appos	color:blue
1	Den	en	DET	DT|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|PronType=Art	3	det	_	_
2	olika	olik	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	3	amod	_	_
3	könsrollen	könsroll	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	0	root	_	_
4	som	som	CCONJ	KN	_	5	mark	_	_
5	barnavårdare	barnavårdare	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	3	appos	_	_
6	och	och	CCONJ	KN	_	7	cc	_	_
7	uppfostrare	uppfostrare	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	conj	_	SpaceAfter=No
8	.	.	PUNCT	MAD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 appos	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	2	nsubj:pass	_	_
2	kallas	kalla	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
3	kommunalt	kommunal	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	4	amod	_	_
4	bostadstillägg	bostadstillägg	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	2	xcomp	_	_
5	för	för	ADP	PP	_	6	case	_	_
6	handikappade	handikappad	ADJ	PC|PRF|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Number=Plur|Tense=Past|VerbForm=Part	4	nmod	_	_
7	(	(	PUNCT	PAD	_	4	punct	_	SpaceAfter=No
8	Kbh	Kbh	PROPN	PM|NOM	Case=Nom	4	appos	_	SpaceAfter=No
9	)	)	PUNCT	PAD	_	4	punct	_	SpaceAfter=No
10	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 appos	color:blue
1	Att	att	SCONJ	SN	_	4	mark	_	_
2	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	3	det	_	_
3	kvinna	kvinna	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	nsubj	_	_
4	har	ha	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	12	csubj	_	_
5	flera	flera	ADJ	JJ|POS|UTR/NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	7	amod	_	_
6	äkta	äkta	ADJ	JJ|POS|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Degree=Pos	7	amod	_	_
7	män	man	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	4	obj	_	_
8	(	(	PUNCT	PAD	_	4	punct	_	SpaceAfter=No
9	polyandri	polyandri	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	appos	_	SpaceAfter=No
10	)	)	PUNCT	PAD	_	4	punct	_	_
11	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	_	_
12	ovanligt	ovanlig	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No
13	.	.	PUNCT	MAD	_	12	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is universal.

238 nodes (0%) are attached to their parents as `appos`.

238 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.00840336134454.

The following 40 pairs of parts of speech are connected with `appos`: [sv-pos/NOUN]()-[sv-pos/NOUN]() (46; 19% instances), [sv-pos/VERB]()-[sv-pos/NOUN]() (32; 13% instances), [sv-pos/VERB]()-[sv-pos/VERB]() (28; 12% instances), [sv-pos/NOUN]()-[sv-pos/VERB]() (21; 9% instances), [sv-pos/PROPN]()-[sv-pos/NOUN]() (15; 6% instances), [sv-pos/NOUN]()-[sv-pos/X]() (10; 4% instances), [sv-pos/NOUN]()-[sv-pos/NUM]() (9; 4% instances), [sv-pos/NOUN]()-[sv-pos/PROPN]() (9; 4% instances), [sv-pos/ADJ]()-[sv-pos/VERB]() (8; 3% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (7; 3% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (5; 2% instances), [sv-pos/PRON]()-[sv-pos/NOUN]() (4; 2% instances), [sv-pos/PRON]()-[sv-pos/VERB]() (4; 2% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (3; 1% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (3; 1% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (3; 1% instances), [sv-pos/VERB]()-[sv-pos/PROPN]() (3; 1% instances), [sv-pos/NOUN]()-[sv-pos/ADV]() (2; 1% instances), [sv-pos/PRON]()-[sv-pos/PROPN]() (2; 1% instances), [sv-pos/PROPN]()-[sv-pos/PROPN]() (2; 1% instances), [sv-pos/VERB]()-[sv-pos/INTJ]() (2; 1% instances), [sv-pos/VERB]()-[sv-pos/PRON]() (2; 1% instances), [sv-pos/ADJ]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/ADP]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/ADV]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/ADV]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/ADV]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/AUX]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/AUX]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/SYM]() (1; 0% instances), [sv-pos/NUM]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/NUM]()-[sv-pos/X]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/INTJ]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/PROPN]()-[sv-pos/NUM]() (1; 0% instances), [sv-pos/PROPN]()-[sv-pos/X]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/AUX]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/NUM]() (1; 0% instances), [sv-pos/X]()-[sv-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 appos	color:blue
1	Standardläge	_	NOUN	IND-NOM	_	0	root	_	_
2	(	_	PUNCT	LeftParenthesis	_	5	punct	_	SpaceAfter=No
3	det	_	DET	SG-DEF	_	5	det	_	_
4	aktuella	_	ADJ	POS-DEF	_	5	amod	_	_
5	läget	_	NOUN	SG-DEF-NOM	_	1	appos	_	SpaceAfter=No
6	)	_	PUNCT	RightParenthesis	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 appos	color:blue
1	En	_	DET	SG-IND	_	2	det	_	_
2	sak	_	NOUN	SG-IND-NOM	_	3	nsubj	_	_
3	återstod	_	VERB	PAST-ACT	_	0	root	_	_
4	–	_	PUNCT	Dash	_	3	punct	_	_
5	läkarundersökning	_	NOUN	SG-IND-NOM	_	3	appos	_	SpaceAfter=No
6	.	_	PUNCT	Period	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 appos	color:blue
1	Filtrera	_	VERB	IMP-ACT	_	0	root	_	_
2	utifrån	_	ADP	_	_	3	case	_	_
3	data	_	NOUN	PL-IND-NOM	_	1	obl	_	_
4	i	_	ADP	_	_	6	case	_	_
5	en	_	DET	SG-IND	_	6	det	_	_
6	cell	_	NOUN	SG-IND-NOM	_	3	nmod	_	_
7	(	_	PUNCT	LeftParenthesis	_	8	punct	_	SpaceAfter=No
8	Filtrera	_	VERB	IMP-ACT	_	1	appos	_	_
9	enligt	_	ADP	_	_	10	case	_	_
10	markering	_	NOUN	SG-IND-NOM	_	8	obl	_	SpaceAfter=No
11	)	_	PUNCT	RightParenthesis	_	8	punct	_	_

~~~


