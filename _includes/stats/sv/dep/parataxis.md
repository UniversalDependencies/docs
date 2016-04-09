

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

401 nodes (0%) are attached to their parents as `parataxis`.

395 instances of `parataxis` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 17.2992518703242.

The following 26 pairs of parts of speech are connected with `parataxis`: [sv-pos/VERB]()-[sv-pos/VERB]() (227; 57% instances), [sv-pos/VERB]()-[sv-pos/NOUN]() (40; 10% instances), [sv-pos/NOUN]()-[sv-pos/VERB]() (39; 10% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (22; 5% instances), [sv-pos/ADJ]()-[sv-pos/VERB]() (18; 4% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (15; 4% instances), [sv-pos/ADV]()-[sv-pos/VERB]() (5; 1% instances), [sv-pos/PROPN]()-[sv-pos/NOUN]() (4; 1% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (3; 1% instances), [sv-pos/ADJ]()-[sv-pos/PRON]() (3; 1% instances), [sv-pos/VERB]()-[sv-pos/PRON]() (3; 1% instances), [sv-pos/VERB]()-[sv-pos/PROPN]() (3; 1% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (2; 0% instances), [sv-pos/ADV]()-[sv-pos/ADJ]() (2; 0% instances), [sv-pos/ADV]()-[sv-pos/NOUN]() (2; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (2; 0% instances), [sv-pos/PRON]()-[sv-pos/VERB]() (2; 0% instances), [sv-pos/ADJ]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/ADJ]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/INTJ]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/PROPN]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/PROPN]()-[sv-pos/VERB]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/INTJ]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 parataxis	color:blue
1	Jag	jag	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing	2	nsubj	_	_
2	får	få	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	pension	pension	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	dobj	_	_
4	efter	efter	ADP	PP	_	6	case	_	_
5	min	jag	DET	PS|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|Poss=Yes	6	nmod:poss	_	_
6	make	make	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	nmod	_	_
7	,	,	PUNCT	MID	_	8	punct	_	_
8	säger	säga	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	2	parataxis	_	_
9	Du	du	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing	8	nsubj	_	_
10	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 13 parataxis	color:blue
1	Man	man	PRON	PN|UTR|SIN|IND|SUB	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	nsubj	_	_
2	vill	vilja	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
3	inte	inte	ADV	AB	_	5	neg	_	_
4	'	'	PUNCT	PAD	_	5	punct	_	_
5	binda	binda	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	_	_
6	sig	sig	PRON	PN|UTR/NEU|SIN/PLU|DEF|OBJ	Case=Acc|Definite=Def	5	dobj	_	_
7	'	'	PUNCT	PAD	_	5	punct	_	_
8	,	,	PUNCT	MID	_	5	punct	_	_
9	(	(	PUNCT	PAD	_	5	punct	_	_
10	ofta	ofta	ADV	AB|POS	Degree=Pos	13	advmod	_	_
11	bara	bara	ADV	AB	_	13	advmod	_	_
12	en	en	NUM	RG|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	13	nummod	_	_
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
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	2	expl	_	_
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


