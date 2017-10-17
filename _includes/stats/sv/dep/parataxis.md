

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

330 nodes (0%) are attached to their parents as `parataxis`.

324 instances of `parataxis` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 18.2181818181818.

The following 26 pairs of parts of speech are connected with `parataxis`: [sv-pos/VERB]()-[sv-pos/VERB]() (179; 54% instances), [sv-pos/NOUN]()-[sv-pos/VERB]() (35; 11% instances), [sv-pos/VERB]()-[sv-pos/NOUN]() (29; 9% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (18; 5% instances), [sv-pos/ADJ]()-[sv-pos/VERB]() (13; 4% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (13; 4% instances), [sv-pos/ADV]()-[sv-pos/VERB]() (5; 2% instances), [sv-pos/PROPN]()-[sv-pos/NOUN]() (4; 1% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (3; 1% instances), [sv-pos/ADJ]()-[sv-pos/PRON]() (3; 1% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (3; 1% instances), [sv-pos/PRON]()-[sv-pos/VERB]() (3; 1% instances), [sv-pos/VERB]()-[sv-pos/PRON]() (3; 1% instances), [sv-pos/VERB]()-[sv-pos/PROPN]() (3; 1% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (2; 1% instances), [sv-pos/ADV]()-[sv-pos/ADJ]() (2; 1% instances), [sv-pos/ADV]()-[sv-pos/NOUN]() (2; 1% instances), [sv-pos/INTJ]()-[sv-pos/VERB]() (2; 1% instances), [sv-pos/ADJ]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/PROPN]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/PROPN]()-[sv-pos/VERB]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/INTJ]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 parataxis	color:blue
1	Jag	jag	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	2	nsubj	_	_
2	får	få	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	pension	pension	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	obj	_	_
4	efter	efter	ADP	PP	_	6	case	_	_
5	min	jag	DET	PS|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	6	nmod:poss	_	_
6	make	make	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	obl	_	SpaceAfter=No
7	,	,	PUNCT	MID	_	8	punct	_	_
8	säger	säga	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	2	parataxis	_	_
9	Du	du	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	8	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 parataxis	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	2	expl	_	_
2	finns	finnas	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	medel	medel	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	2	nsubj	_	_
4	(	(	PUNCT	PAD	_	3	punct	_	SpaceAfter=No
5	kostar	kosta	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	parataxis	_	_
6	under	under	ADP	PP	_	7	case	_	_
7	tian	tia	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	5	obl	_	SpaceAfter=No
8	)	)	PUNCT	PAD	_	3	punct	_	_
9	att	att	PART	IE	_	10	mark	_	_
10	stryka	stryka	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	3	acl	_	_
11	på	på	ADP	PP	_	12	case	_	_
12	listerna	list	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	10	obl	_	SpaceAfter=No
13	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 14 parataxis	color:blue
1	De	de	PRON	PN|UTR/NEU|PLU|DEF|SUB	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	2	nsubj	_	_
2	har	ha	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	5	det	_	_
4	liten	liten	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	5	amod	_	_
5	låda	låda	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	obj	_	_
6	framför	framför	ADP	PP	_	7	case	_	_
7	sig	sig	PRON	PN|UTR/NEU|SIN/PLU|DEF|OBJ	Case=Acc|Definite=Def|PronType=Prs	2	obl	_	_
8	på	på	ADP	PP	_	9	case	_	_
9	bordet	bord	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	7	obl	_	SpaceAfter=No
10	,	,	PUNCT	MID	_	2	punct	_	_
11	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	14	det	_	_
12	så	så	ADV	AB	_	14	amod	_	_
13	kallad	kalla	ADJ	PC|PRF|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|Tense=Past|VerbForm=Part	12	fixed	_	_
14	valbox	valbox	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	parataxis	_	SpaceAfter=No
15	.	.	PUNCT	MAD	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is universal.

263 nodes (0%) are attached to their parents as `parataxis`.

250 instances of `parataxis` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.08745247148289.

The following 25 pairs of parts of speech are connected with `parataxis`: [sv-pos/VERB]()-[sv-pos/VERB]() (135; 51% instances), [sv-pos/NOUN]()-[sv-pos/VERB]() (29; 11% instances), [sv-pos/ADJ]()-[sv-pos/VERB]() (24; 9% instances), [sv-pos/INTJ]()-[sv-pos/VERB]() (12; 5% instances), [sv-pos/PRON]()-[sv-pos/VERB]() (12; 5% instances), [sv-pos/ADV]()-[sv-pos/VERB]() (10; 4% instances), [sv-pos/PROPN]()-[sv-pos/VERB]() (7; 3% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (6; 2% instances), [sv-pos/VERB]()-[sv-pos/ADV]() (4; 2% instances), [sv-pos/VERB]()-[sv-pos/NOUN]() (4; 2% instances), [sv-pos/AUX]()-[sv-pos/VERB]() (3; 1% instances), [sv-pos/NOUN]()-[sv-pos/ADV]() (2; 1% instances), [sv-pos/VERB]()-[sv-pos/INTJ]() (2; 1% instances), [sv-pos/VERB]()-[sv-pos/PROPN]() (2; 1% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/ADJ]()-[sv-pos/PART]() (1; 0% instances), [sv-pos/ADV]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/AUX]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/AUX]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/INTJ]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/INTJ]() (1; 0% instances), [sv-pos/NUM]()-[sv-pos/VERB]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/INTJ]() (1; 0% instances), [sv-pos/PROPN]()-[sv-pos/INTJ]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 parataxis	color:blue
1	Inte	_	PART	NEG	_	2	advmod	_	_
2	vet	_	VERB	PRES-ACT	_	0	root	_	_
3	jag	_	PRON	PERS-P1SG-NOM	_	2	nsubj	_	SpaceAfter=No
4	,	_	PUNCT	Comma	_	2	punct	_	_
5	sa	_	VERB	PAST-ACT	_	2	parataxis	_	_
6	flickan	_	NOUN	SG-DEF-NOM	_	5	nsubj	_	_
7	med	_	ADP	_	_	10	case	_	_
8	ännu	_	ADV	_	_	9	advmod	_	_
9	en	_	DET	SG-IND	_	10	det	_	_
10	axelryckning	_	NOUN	SG-IND-NOM	_	5	obl	_	SpaceAfter=No
11	.	_	PUNCT	Period	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 parataxis	color:blue
1	Är	_	AUX	PRES-ACT	_	3	cop	_	_
2	ni	_	PRON	PERS-P2PL-NOM	_	3	nsubj	_	_
3	psykiater	_	NOUN	SG-IND-NOM	_	0	root	_	SpaceAfter=No
4	?	_	PUNCT	QuestionMark	_	3	punct	_	_
5	avbröt	_	VERB	PAST-ACT	_	3	parataxis	_	_
6	jag	_	PRON	PERS-P1SG-NOM	_	5	nsubj	_	SpaceAfter=No
7	.	_	PUNCT	Period	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 parataxis	color:blue
1	Det	_	PRON	PERS-P3SG	_	3	nsubj	_	_
2	är	_	AUX	PRES-ACT	_	3	cop	_	_
3	möjligt	_	ADJ	POS-SG-IND	_	0	root	_	SpaceAfter=No
4	,	_	PUNCT	Comma	_	5	punct	_	_
5	sa	_	VERB	PAST-ACT	_	3	parataxis	_	_
6	Auster	_	PROPN	SG-NOM	_	5	nsubj	_	SpaceAfter=No
7	.	_	PUNCT	Period	_	3	punct	_	_

~~~


