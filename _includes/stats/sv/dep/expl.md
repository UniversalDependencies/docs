

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

399 nodes (1%) are attached to their parents as `expl`.

312 instances of `expl` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.71679197994987.

The following 4 pairs of parts of speech are connected with `expl`: [sv-pos/VERB]()-[sv-pos/PRON]() (289; 72% instances), [sv-pos/ADJ]()-[sv-pos/PRON]() (91; 23% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (18; 5% instances), [sv-pos/ADP]()-[sv-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl	color:blue
1	Men	men	CCONJ	KN	_	3	cc	_	_
2	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	3	expl	_	_
3	finns	finnas	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	ingen	ingen	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Neg	6	det	_	_
5	annan	annan	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	6	amod	_	_
6	väg	väg	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	3	nsubj	_	_
7	att	att	PART	IE	_	8	mark	_	_
8	gå	gå	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	6	acl	_	SpaceAfter=No
9	.	.	PUNCT	MAD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 expl	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	4	expl	_	_
2	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
3	ju	ju	ADV	AB	_	4	advmod	_	_
4	klart	klar	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
5	att	att	SCONJ	SN	_	8	mark	_	_
6	man	man	PRON	PN|UTR|SIN|IND|SUB	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	8	nsubj	_	_
7	får	få	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux	_	_
8	gno	gno	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	4	csubj	_	_
9	hela	hel	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	10	amod	_	_
10	tiden	tid	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	8	obl	_	SpaceAfter=No
11	.	.	PUNCT	MAD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 expl	color:blue
1	För	för	ADP	PP	_	2	case	_	_
2	barnen	barn	NOUN	NN|NEU|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Plur	8	nmod	_	_
3	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
4	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	8	expl	_	_
5	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	8	det	_	_
6	mycket	mycket	ADV	AB|POS	Degree=Pos	7	advmod	_	_
7	stor	stor	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	8	amod	_	_
8	fördel	fördel	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	0	root	_	_
9	om	om	SCONJ	SN	_	11	mark	_	_
10	de	de	PRON	PN|UTR/NEU|PLU|DEF|SUB	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	11	nsubj	_	_
11	får	få	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	csubj	_	_
12	kontakt	kontakt	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	11	obj	_	_
13	med	med	ADP	PP	_	16	case	_	_
14	bägge	bägge	DET	DT|UTR/NEU|PLU|DEF	Definite=Def|Number=Plur|PronType=Tot	16	det	_	_
15	sina	sig	DET	PS|UTR/NEU|PLU|DEF	Definite=Def|Number=Plur|Poss=Yes|PronType=Prs	16	nmod:poss	_	_
16	föräldrar	förälder	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	11	obl	_	SpaceAfter=No
17	.	.	PUNCT	MAD	_	8	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is universal.

393 nodes (1%) are attached to their parents as `expl`.

331 instances of `expl` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.02290076335878.

The following 9 pairs of parts of speech are connected with `expl`: [sv-pos/VERB]()-[sv-pos/PRON]() (239; 61% instances), [sv-pos/ADJ]()-[sv-pos/PRON]() (63; 16% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (50; 13% instances), [sv-pos/PRON]()-[sv-pos/PRON]() (25; 6% instances), [sv-pos/PROPN]()-[sv-pos/PRON]() (7; 2% instances), [sv-pos/ADV]()-[sv-pos/PRON]() (5; 1% instances), [sv-pos/AUX]()-[sv-pos/PRON]() (2; 1% instances), [sv-pos/ADP]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 expl	color:blue
1	Det	_	PRON	EX-P3SG	_	2	expl	_	_
2	ser	_	VERB	PRES-ACT	_	0	root	_	_
3	ut	_	ADV	_	_	2	compound:prt	_	_
4	att	_	PART	_	_	9	mark	_	_
5	vara	_	AUX	INF-ACT	_	9	cop	_	_
6	en	_	DET	SG-IND	_	9	det	_	_
7	alldeles	_	ADV	_	_	8	advmod	_	_
8	normal	_	ADJ	POS-SG-IND	_	9	amod	_	_
9	check	_	NOUN	SG-IND-NOM	_	2	nsubj	_	SpaceAfter=No
10	,	_	PUNCT	Comma	_	2	punct	_	_
11	sa	_	VERB	PAST-ACT	_	2	parataxis	_	_
12	han	_	PRON	PERS-P3SG-NOM	_	11	nsubj	_	SpaceAfter=No
13	.	_	PUNCT	Period	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 expl	color:blue
1	Det	_	PRON	EX-P3SG	_	4	expl	_	_
2	är	_	AUX	PRES-ACT	_	4	cop	_	_
3	inget	_	DET	NEG-SG-IND	_	4	det	_	_
4	särskilt	_	ADJ	POS-SG-IND	_	0	root	_	_
5	med	_	ADP	_	_	6	case	_	_
6	den	_	PRON	PERS-P3SG	_	2	dislocated	_	_
7	alls	_	ADV	_	_	4	advmod	_	SpaceAfter=No
8	.	_	PUNCT	Period	_	2	punct	_	_
9	Det	_	PRON	EX-P3SG	_	14	expl	_	_
10	är	_	AUX	PRES-ACT	_	14	cop	_	_
11	ju	_	ADV	_	_	14	advmod	_	_
12	bara	_	ADV	_	_	14	advmod	_	_
13	en	_	DET	SG-IND	_	14	det	_	_
14	bok	_	NOUN	SG-IND-NOM	_	4	advcl	_	SpaceAfter=No
15	.	_	PUNCT	Period	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 expl	color:blue
1	Är	_	AUX	PRES-ACT	_	5	cop	_	_
2	det	_	PRON	EX-P3SG	_	5	expl	_	_
3	en	_	DET	SG-IND	_	5	det	_	_
4	smart	_	ADJ	POS-SG-IND	_	5	amod	_	_
5	detektiv	_	NOUN	SG-IND-NOM	_	0	root	_	SpaceAfter=No
6	?	_	PUNCT	QuestionMark	_	5	punct	_	_

~~~


