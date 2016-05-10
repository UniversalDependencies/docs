

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

411 nodes (0%) are attached to their parents as `parataxis`.

405 instances of `parataxis` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 17.0510948905109.

The following 28 pairs of parts of speech are connected with `parataxis`: [sv-pos/VERB]()-[sv-pos/VERB]() (229; 56% instances), [sv-pos/VERB]()-[sv-pos/NOUN]() (40; 10% instances), [sv-pos/NOUN]()-[sv-pos/VERB]() (39; 9% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (23; 6% instances), [sv-pos/ADJ]()-[sv-pos/VERB]() (18; 4% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (17; 4% instances), [sv-pos/ADV]()-[sv-pos/VERB]() (5; 1% instances), [sv-pos/PROPN]()-[sv-pos/NOUN]() (4; 1% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (3; 1% instances), [sv-pos/ADJ]()-[sv-pos/PRON]() (3; 1% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (3; 1% instances), [sv-pos/PRON]()-[sv-pos/VERB]() (3; 1% instances), [sv-pos/VERB]()-[sv-pos/PRON]() (3; 1% instances), [sv-pos/VERB]()-[sv-pos/PROPN]() (3; 1% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (2; 0% instances), [sv-pos/ADV]()-[sv-pos/ADJ]() (2; 0% instances), [sv-pos/ADV]()-[sv-pos/NOUN]() (2; 0% instances), [sv-pos/INTJ]()-[sv-pos/VERB]() (2; 0% instances), [sv-pos/ADJ]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/ADJ]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/INTJ]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/PROPN]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/PROPN]()-[sv-pos/VERB]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/INTJ]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 parataxis	color:blue
1	Jag	jag	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	2	nsubj	_	_
2	får	få	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	pension	pension	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	dobj	_	_
4	efter	efter	ADP	PP	_	6	case	_	_
5	min	jag	DET	PS|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	6	nmod:poss	_	_
6	make	make	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	nmod	_	_
7	,	,	PUNCT	MID	_	8	punct	_	_
8	säger	säga	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	2	parataxis	_	_
9	Du	du	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	8	nsubj	_	_
10	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 13 parataxis	color:blue
1	Man	man	PRON	PN|UTR|SIN|IND|SUB	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	5	nsubj	_	_
2	vill	vilja	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
3	inte	inte	ADV	AB	_	5	neg	_	_
4	'	'	PUNCT	PAD	_	5	punct	_	_
5	binda	binda	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	_	_
6	sig	sig	PRON	PN|UTR/NEU|SIN/PLU|DEF|OBJ	Case=Acc|Definite=Def|PronType=Prs	5	dobj	_	_
7	'	'	PUNCT	PAD	_	5	punct	_	_
8	,	,	PUNCT	MID	_	5	punct	_	_
9	(	(	PUNCT	PAD	_	5	punct	_	_
10	ofta	ofta	ADV	AB|POS	Degree=Pos	13	advmod	_	_
11	bara	bara	ADV	AB	_	13	advmod	_	_
12	en	en	NUM	RG|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|NumType=Card	13	nummod	_	_
13	part	part	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	parataxis	_	_
14	)	)	PUNCT	PAD	_	5	punct	_	_
15	.	.	PUNCT	MAD	_	5	punct	_	_

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
4	(	(	PUNCT	PAD	_	3	punct	_	_
5	kostar	kosta	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	parataxis	_	_
6	under	under	ADP	PP	_	7	case	_	_
7	tian	tia	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	5	nmod	_	_
8	)	)	PUNCT	PAD	_	3	punct	_	_
9	att	att	PART	IE	_	10	mark	_	_
10	stryka	stryka	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	3	acl	_	_
11	på	på	ADP	PP	_	12	case	_	_
12	listerna	list	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	10	nmod	_	_
13	.	.	PUNCT	MAD	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is universal.

111 nodes (0%) are attached to their parents as `parataxis`.

111 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.17117117117117.

The following 26 pairs of parts of speech are connected with `parataxis`: [sv-pos/VERB]()-[sv-pos/VERB]() (49; 44% instances), [sv-pos/NOUN]()-[sv-pos/VERB]() (10; 9% instances), [sv-pos/INTJ]()-[sv-pos/VERB]() (7; 6% instances), [sv-pos/ADV]()-[sv-pos/VERB]() (5; 5% instances), [sv-pos/VERB]()-[sv-pos/INTJ]() (5; 5% instances), [sv-pos/VERB]()-[sv-pos/ADV]() (4; 4% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (3; 3% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (2; 2% instances), [sv-pos/ADJ]()-[sv-pos/VERB]() (2; 2% instances), [sv-pos/AUX]()-[sv-pos/VERB]() (2; 2% instances), [sv-pos/NOUN]()-[sv-pos/ADV]() (2; 2% instances), [sv-pos/PRON]()-[sv-pos/VERB]() (2; 2% instances), [sv-pos/PROPN]()-[sv-pos/INTJ]() (2; 2% instances), [sv-pos/PROPN]()-[sv-pos/VERB]() (2; 2% instances), [sv-pos/VERB]()-[sv-pos/CONJ]() (2; 2% instances), [sv-pos/VERB]()-[sv-pos/PRON]() (2; 2% instances), [sv-pos/ADJ]()-[sv-pos/ADV]() (1; 1% instances), [sv-pos/ADJ]()-[sv-pos/INTJ]() (1; 1% instances), [sv-pos/ADJ]()-[sv-pos/PART]() (1; 1% instances), [sv-pos/AUX]()-[sv-pos/PRON]() (1; 1% instances), [sv-pos/DET]()-[sv-pos/VERB]() (1; 1% instances), [sv-pos/INTJ]()-[sv-pos/ADV]() (1; 1% instances), [sv-pos/NOUN]()-[sv-pos/INTJ]() (1; 1% instances), [sv-pos/NOUN]()-[sv-pos/PROPN]() (1; 1% instances), [sv-pos/PART]()-[sv-pos/ADV]() (1; 1% instances), [sv-pos/PRON]()-[sv-pos/INTJ]() (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 parataxis	color:blue
1	Ni	_	PRON	PERS-P2PL-NOM	_	4	nsubj	_	_
2	kanske	_	ADV	_	_	4	advmod	_	_
3	skulle	_	AUX	PAST-AUX	_	4	aux	_	_
4	bli	_	VERB	INF-ACT	_	0	root	_	_
5	tränare	_	NOUN	IND-NOM	_	4	xcomp	_	_
6	,	_	PUNCT	Comma	_	4	punct	_	_
7	sa	_	VERB	PAST-ACT	_	4	parataxis	_	_
8	mannen	_	NOUN	SG-DEF-NOM	_	7	nsubj	_	_
9	.	_	PUNCT	Period	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 parataxis	color:blue
1	En	_	DET	SG-IND	_	3	det	_	_
2	fantasifull	_	ADJ	POS-SG-IND	_	3	amod	_	_
3	tolkning	_	NOUN	SG-IND-NOM	_	0	root	_	_
4	,	_	PUNCT	Comma	_	3	punct	_	_
5	kan	_	AUX	PRES-AUX	_	8	aux	_	_
6	man	_	PRON	PERS-P3-NOM	_	8	nsubj	_	_
7	kanske	_	ADV	_	_	8	advmod	_	_
8	säga	_	VERB	INF-ACT	_	3	parataxis	_	_
9	.	_	PUNCT	Period	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 parataxis	color:blue
1	Ja	_	INTJ	_	_	0	root	_	_
2	,	_	PUNCT	Comma	_	1	punct	_	_
3	svarade	_	VERB	PAST-ACT	_	1	parataxis	_	_
4	jag	_	PRON	PERS-P1SG-NOM	_	3	nsubj	_	_
5	.	_	PUNCT	Period	_	1	punct	_	_

~~~


